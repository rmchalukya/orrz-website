"use client";

import { useState } from "react";
import { ContactModal } from "./ContactModal";

const SUGGESTIONS = [
  "Adopt AI the right way",
  "Reduce our cloud cost",
  "Modernise a legacy system",
  "Architecture review",
];

export function HeroPrompt() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");

  function go(text?: string) {
    setDraft((text ?? q).trim());
    setOpen(true);
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          go();
        }}
        className="flex items-center gap-2 rounded-2xl border border-ink/10 bg-white p-2 pl-5 shadow-xl shadow-orange-200/40 ring-1 ring-black/[0.02] transition focus-within:border-orange-600/40 focus-within:shadow-orange-200/60"
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Tell us what you're building…"
          aria-label="Tell us what you're building"
          className="min-w-0 flex-1 bg-transparent text-base text-ink placeholder:text-ink-muted focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Start a conversation"
          className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-orange text-white transition hover:bg-orange-600 active:scale-95"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="6 11 12 5 18 11" />
          </svg>
        </button>
      </form>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => go(s)}
            className="rounded-full border border-ink/10 bg-white/70 px-3.5 py-1.5 text-sm text-ink-soft backdrop-blur transition hover:border-orange-600/40 hover:text-orange-600"
          >
            {s}
          </button>
        ))}
      </div>

      <ContactModal open={open} onClose={() => setOpen(false)} initialMessage={draft} />
    </div>
  );
}
