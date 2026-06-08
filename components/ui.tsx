import Link from "next/link";
import { ReactNode } from "react";

// Warm, centered page header matching the home hero — used across inner pages.
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10">
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(72% 60% at 50% -12%, #FEEAD9 0%, #FFF7F0 38%, #FFFFFF 70%, #EEF8FC 100%)",
        }}
      />
      <div className="absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />
      <div className="absolute -right-24 top-12 -z-10 h-72 w-72 rounded-full bg-sky/20 blur-3xl" />

      <div className="container-content flex flex-col items-center py-20 text-center md:py-24">
        {eyebrow && (
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-orange-600/20 bg-white/70 px-4 py-1.5 text-sm font-medium text-orange-700 shadow-sm backdrop-blur">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
            </svg>
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 max-w-3xl animate-fade-up text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl animate-fade-up text-lg leading-relaxed text-ink-soft">
            {intro}
          </p>
        )}
        {children && <div className="mt-8 flex w-full flex-col items-center animate-fade-up">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>}
    </div>
  );
}

export function CTABand({
  title = "Talk to a senior architect, not a sales rep.",
  subtitle = "Tell us where you're headed. We'll bring people who've built it at scale.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container-content my-24">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 text-center sm:px-16">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange/20 blur-2xl" />
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-sky/20 blur-2xl" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">{subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Book a consultation
            </Link>
            <Link href="/services" className="btn-secondary !border-white/25 !bg-transparent !text-white hover:!bg-white/10">
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1 text-sm text-ink-soft">
      {children}
    </span>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <svg className="mt-1 h-4 w-4 flex-none text-orange-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path
          fillRule="evenodd"
          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.29 6.8-6.8a1 1 0 0 1 1.4 0z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-ink-soft">{children}</span>
    </li>
  );
}
