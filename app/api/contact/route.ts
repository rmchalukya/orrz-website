import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "info@orrizonte.in";
const BCC = ["chalukya.mohanraj@orrizonte.in", "rmchalukya@gmail.com"];

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const interest = (body.interest || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please provide your name, email and a message." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const from = process.env.CONTACT_FROM || "Orrizonte Website <onboarding@resend.dev>";

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
    ["Interest", interest || "—"],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#111">
      <h2 style="margin:0 0 16px">New website enquiry</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 0;color:#6B7280;width:110px">${k}</td><td style="padding:8px 0;font-weight:600">${escapeHtml(
                v
              )}</td></tr>`
          )
          .join("")}
      </table>
      <div style="margin-top:16px;padding:16px;background:#FEF3EA;border-radius:10px;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(
        message
      )}</div>
      <p style="margin-top:20px;font-size:12px;color:#9CA3AF">Sent from the orrizonte.in contact form.</p>
    </div>`;

  const text = `New website enquiry\n\nName: ${name}\nEmail: ${email}\nCompany: ${
    company || "—"
  }\nInterest: ${interest || "—"}\n\n${message}`;

  try {
    const { error } = await resend.emails.send({
      from,
      to: TO,
      bcc: BCC,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` — ${company}` : ""}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your message right now. Please email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please email us directly." },
      { status: 500 }
    );
  }
}
