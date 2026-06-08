"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SUGGESTIONS = [
  "Adopt AI the right way",
  "Reduce our cloud cost",
  "Modernise a legacy system",
  "Architecture review",
];

type Msg = { role: "user" | "assistant"; content: string };

function BotAvatar() {
  return (
    <span className="flex h-7 w-7 flex-none items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-ink/10">
      <Image src="/logo.png" alt="Orrizonte" width={24} height={24} className="h-5 w-5 object-contain" />
    </span>
  );
}

function UserAvatar() {
  return (
    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-ink/10 text-ink-muted">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    </span>
  );
}

function TypingDots() {
  return (
    <span className="flex items-center gap-1 px-1 py-1.5">
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-muted [animation-delay:-0.3s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-muted [animation-delay:-0.15s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-muted" />
    </span>
  );
}

export function HeroPrompt() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const threadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendToAgent(history: Msg[]) {
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      const data = await res.json().catch(() => ({}));
      const reply: string =
        data.reply || "Sorry — I'm having trouble right now. Please email info@orrizonte.in.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
      if (data.done) setDone(true);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Sorry — something went wrong. Please email info@orrizonte.in." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function start(text?: string) {
    const v = (text ?? q).trim();
    if (!v) return;
    const history: Msg[] = [{ role: "user", content: v }];
    setMessages(history);
    setOpen(true);
    setDone(false);
    sendToAgent(history);
  }

  function send() {
    const v = input.trim();
    if (!v || loading || done) return;
    const history = [...messages, { role: "user" as const, content: v }];
    setMessages(history);
    setInput("");
    sendToAgent(history);
  }

  function reset() {
    setOpen(false);
    setMessages([]);
    setInput("");
    setQ("");
    setDone(false);
  }

  const fieldInput =
    "min-w-0 flex-1 bg-transparent text-base text-ink placeholder:text-ink-muted focus:outline-none";

  // ── Prompt state ────────────────────────────────────────────────
  if (!open) {
    return (
      <div className="mx-auto w-full max-w-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            start();
          }}
          className="flex items-center gap-2 rounded-2xl border border-ink/10 bg-white p-2 pl-5 shadow-xl shadow-orange-200/40 ring-1 ring-black/[0.02] transition focus-within:border-orange-600/40 focus-within:shadow-orange-200/60"
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Tell us what you're building…"
            aria-label="Tell us what you're building"
            className={fieldInput}
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
              onClick={() => start(s)}
              className="rounded-full border border-ink/10 bg-white/70 px-3.5 py-1.5 text-sm text-ink-soft backdrop-blur transition hover:border-orange-600/40 hover:text-orange-600"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── Chat state ──────────────────────────────────────────────────
  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="animate-pop-in overflow-hidden rounded-2xl border border-ink/10 bg-white text-left shadow-xl shadow-orange-200/30">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink/5 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <BotAvatar />
            <div className="leading-tight">
              <p className="text-sm font-bold text-ink">Orrizonte Assistant</p>
              <p className="flex items-center gap-1.5 text-xs text-ink-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Online
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={reset}
            aria-label="Start over"
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition hover:bg-ink/5 hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        {/* Thread */}
        <div ref={threadRef} className="max-h-[42vh] space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((m, i) =>
            m.role === "user" ? (
              <div key={i} className="flex items-end justify-end gap-2">
                <p className="max-w-[78%] rounded-2xl rounded-br-md bg-orange px-4 py-2.5 text-sm leading-relaxed text-white">
                  {m.content}
                </p>
                <UserAvatar />
              </div>
            ) : (
              <div key={i} className="flex items-end justify-start gap-2">
                <BotAvatar />
                <p className="max-w-[80%] rounded-2xl rounded-bl-md bg-ink/[0.04] px-4 py-2.5 text-sm leading-relaxed text-ink-soft">
                  {m.content}
                </p>
              </div>
            )
          )}
          {loading && (
            <div className="flex items-end justify-start gap-2">
              <BotAvatar />
              <span className="rounded-2xl rounded-bl-md bg-ink/[0.04]">
                <TypingDots />
              </span>
            </div>
          )}
        </div>

        {/* Composer */}
        <div className="border-t border-ink/5 px-4 py-3">
          {done ? (
            <button type="button" onClick={reset} className="btn-secondary w-full">
              Start a new conversation
            </button>
          ) : (
            <div className="flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-3 py-1.5 focus-within:border-orange-600/40">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    send();
                  }
                }}
                placeholder="Type your reply…"
                aria-label="Type your reply"
                disabled={loading}
                className={fieldInput}
              />
              <button
                type="button"
                onClick={send}
                disabled={loading || !input.trim()}
                aria-label="Send"
                className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-orange text-white transition hover:bg-orange-600 active:scale-95 disabled:opacity-40"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="6 11 12 5 18 11" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
