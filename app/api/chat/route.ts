import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { sendLeadEmail } from "@/lib/email";

// Cost controls
const MODEL = "claude-haiku-4-5"; // fast + low cost for lead collection
const MAX_TOKENS = 400; // short replies
const MAX_USER_TURNS = 10; // hard cap on conversation length

const SYSTEM = `You are the assistant for Orrizonte Technologies — a consulting-led software, AI, SAP and cloud firm whose advisory is led by senior architects who have built national-scale platforms.

Your goal: have a brief, friendly conversation to understand what the visitor needs, and collect their contact details so a senior architect can follow up.

Collect three things: (1) their name, (2) a work email, and (3) a short description of what they're looking for. Company name is a nice-to-have (optional).

Rules:
- Be warm, concise and professional. Keep every reply to 1–2 short sentences. No emoji.
- Ask for at most one or two things at a time.
- The visitor's opening message already describes their need — build on it, don't re-ask what they've told you.
- As soon as you have a name, an email, and a sense of their need, call the submit_lead tool. Do not keep chatting afterwards.
- Never quote prices or commit to timelines. Don't invent specifics about the company.
- If they ask a question, answer briefly, then steer back to collecting their details.
Respect everyone's time — get to submit_lead quickly.`;

const TOOLS: Anthropic.Tool[] = [
  {
    name: "submit_lead",
    description:
      "Record the visitor's enquiry once you have their name, email and a short description of what they need. Call this as soon as you have those three.",
    input_schema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Visitor's name" },
        email: { type: "string", description: "Visitor's work email" },
        summary: {
          type: "string",
          description: "A short summary of what the visitor needs / is looking for",
        },
        company: { type: "string", description: "Company or organisation name, if given" },
      },
      required: ["name", "email", "summary"],
    },
  },
];

type ClientMsg = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  let body: { messages?: ClientMsg[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const incoming = Array.isArray(body.messages) ? body.messages : [];
  // Sanitize + bound the history we forward to the model.
  const messages: Anthropic.MessageParam[] = incoming
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-2 * MAX_USER_TURNS)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));

  if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
    return NextResponse.json({ error: "No message to respond to." }, { status: 400 });
  }

  const userTurns = messages.filter((m) => m.role === "user").length;
  if (userTurns > MAX_USER_TURNS) {
    return NextResponse.json({
      reply:
        "Thanks for the chat! To make sure the right person picks this up, please drop us a line at info@orrizonte.in and a senior architect will get back to you.",
      done: true,
    });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Chat is not configured." }, { status: 500 });
  }

  const client = new Anthropic({ apiKey });

  try {
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: SYSTEM,
      tools: TOOLS,
      messages,
    });

    const toolUse = response.content.find(
      (b): b is Anthropic.ToolUseBlock => b.type === "tool_use" && b.name === "submit_lead"
    );

    if (toolUse) {
      const input = toolUse.input as {
        name?: string;
        email?: string;
        summary?: string;
        company?: string;
      };
      const name = (input.name || "").trim() || "Website visitor";
      const email = (input.email || "").trim();
      const summary = (input.summary || "").trim() || "(captured via homepage chat)";
      const company = (input.company || "").trim();

      // Build a readable transcript for the email body.
      const transcript = messages
        .map((m) => `${m.role === "user" ? "Visitor" : "Assistant"}: ${m.content}`)
        .join("\n");

      try {
        await sendLeadEmail({
          name,
          email,
          company,
          interest: "Homepage AI chat",
          message: `${summary}\n\n— — — conversation — — —\n${transcript}`,
          source: "Homepage AI chat",
        });
      } catch (err) {
        console.error("Lead email failed:", err);
        return NextResponse.json({
          reply:
            "I've noted your details, but our system hiccuped sending them. Please also email info@orrizonte.in so we don't miss you.",
          done: true,
        });
      }

      const first = name.split(" ")[0];
      return NextResponse.json({
        reply: `Thanks${first && first !== "Website" ? `, ${first}` : ""}! I've passed your details to our team — a senior architect will reach out within one business day.`,
        done: true,
      });
    }

    const text = response.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    return NextResponse.json({
      reply: text || "Could you tell me a bit more about what you're looking for?",
      done: false,
    });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json(
      { error: "Sorry — I'm having trouble right now. Please email info@orrizonte.in." },
      { status: 502 }
    );
  }
}
