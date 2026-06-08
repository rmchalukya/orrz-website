"use client";

import { useEffect } from "react";
import { ContactForm } from "./ContactForm";

export function ContactModal({
  open,
  onClose,
  initialMessage,
}: {
  open: boolean;
  onClose: () => void;
  initialMessage?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Start a conversation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 animate-overlay-in bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Bubble */}
      <div className="relative z-10 max-h-[92vh] w-full max-w-lg animate-pop-in overflow-y-auto rounded-3xl border border-ink/10 bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition hover:bg-ink/5 hover:text-ink"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z" />
            </svg>
          </span>
          <h2 className="text-xl font-extrabold tracking-tight text-ink">Start a conversation</h2>
        </div>
        <p className="mt-2 text-sm text-ink-soft">
          Tell us a bit more and a senior architect will get back to you within one business day.
        </p>

        <div className="mt-5">
          <ContactForm initialMessage={initialMessage} />
        </div>
      </div>
    </div>
  );
}
