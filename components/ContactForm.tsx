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

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");

  // Prefill the message from the hero prompt's ?q= parameter.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setMessage(q);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      interest: String(data.get("interest") || ""),
      message: String(data.get("message") || ""),
    };

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "" }));
        throw new Error(error || "Failed to send.");
      }
      setStatus("sent");
      form.reset();
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send.");
    }
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

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>

      {status === "sent" && (
        <p className="rounded-lg bg-orange-50 px-4 py-3 text-sm text-ink-soft">
          Thanks — your message is on its way. A senior member of our team will get back to you
          within one business day.
        </p>
      )}

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg || "Something went wrong."} You can also email us directly at{" "}
          <a href={`mailto:${SITE.email}`} className="font-semibold underline">
            {SITE.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
