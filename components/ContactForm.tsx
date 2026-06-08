"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const SERVICE_OPTIONS = [
  "Consulting / Architecture advisory",
  "Software development",
  "AI & Ed-Tech",
  "SAP",
  "IoT Energy",
  "Data analytics",
  "Staff augmentation / BPO",
  "Something else",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  // Prefill the message from the hero prompt's ?q= parameter.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setMessage(q);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");
    const email = String(data.get("email") || "");

    const subject = encodeURIComponent(`Enquiry from ${name}${company ? ` (${company})` : ""}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nInterest: ${interest}\n\n${message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const field =
    "mt-1.5 w-full rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink shadow-sm transition focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-100";
  const label = "block text-sm font-medium text-ink";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name <span className="text-orange-600">*</span>
          </label>
          <input id="name" name="name" required className={field} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Work email <span className="text-orange-600">*</span>
          </label>
          <input id="email" name="email" type="email" required className={field} autoComplete="email" />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={label}>
          Company / organisation
        </label>
        <input id="company" name="company" className={field} autoComplete="organization" />
      </div>

      <div>
        <label htmlFor="interest" className={label}>
          What can we help with?
        </label>
        <select id="interest" name="interest" className={field} defaultValue={SERVICE_OPTIONS[0]}>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Tell us about your project <span className="text-orange-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={field}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send enquiry
      </button>

      {submitted && (
        <p className="text-sm text-ink-muted">
          Your email client should have opened. If not, write to us directly at{" "}
          <a href={`mailto:${SITE.email}`} className="font-semibold text-orange-600">
            {SITE.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
