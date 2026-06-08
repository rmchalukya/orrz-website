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

export type Lead = {
  name: string;
  email: string;
  company?: string;
  interest?: string;
  message: string;
  /** Where the lead came from, e.g. "Contact form" or "Homepage AI chat". */
  source?: string;
};

/** Sends a lead notification email via Resend. Throws on failure. */
export async function sendLeadEmail(lead: Lead): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured.");

  const resend = new Resend(apiKey);
  const from = process.env.CONTACT_FROM || "Orrizonte Website <onboarding@resend.dev>";

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Company", lead.company || "—"],
    ["Interest", lead.interest || "—"],
    ["Source", lead.source || "Website"],
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
        lead.message
      )}</div>
      <p style="margin-top:20px;font-size:12px;color:#9CA3AF">Sent from orrizonte.in (${escapeHtml(
        lead.source || "Website"
      )}).</p>
    </div>`;

  const text = `New website enquiry\n\nName: ${lead.name}\nEmail: ${lead.email}\nCompany: ${
    lead.company || "—"
  }\nInterest: ${lead.interest || "—"}\nSource: ${lead.source || "Website"}\n\n${lead.message}`;

  const { error } = await resend.emails.send({
    from,
    to: TO,
    bcc: BCC,
    replyTo: lead.email,
    subject: `New enquiry from ${lead.name}${lead.company ? ` — ${lead.company}` : ""}`,
    html,
    text,
  });

  if (error) {
    throw new Error(typeof error === "string" ? error : error.message || "Failed to send email.");
  }
}
