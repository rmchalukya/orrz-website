import type { Metadata } from "next";
import Link from "next/link";
import { CTABand, PageHero } from "@/components/ui";
import { SERVICE_ICONS } from "@/components/icons";
import { SERVICES, TECH, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Software, AI, SAP, IoT, Data & Talent",
  description:
    "Custom software development, AI & ed-tech, SAP S/4HANA, IoT energy solutions, data analytics, staff augmentation and BPO — delivered by senior, vetted teams.",
  alternates: { canonical: "/services" },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.short,
      provider: { "@type": "Organization", name: SITE.legalName, url: SITE.url },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Services"
        title="From the whiteboard to production — and beyond."
        intro="Comprehensive support from concept validation to full-scale implementation. Each engagement is shaped by senior architects and delivered by vetted, specialist teams."
      >
        <div className="flex flex-wrap justify-center gap-2.5">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-sm font-medium text-ink-soft shadow-sm backdrop-blur transition hover:border-orange-600/40 hover:text-orange-600"
            >
              <span className="text-orange-600">{SERVICE_ICONS[s.slug]}</span>
              {s.title}
            </a>
          ))}
        </div>
      </PageHero>

      {/* Service cards */}
      <div className="container-content py-20">
        <div className="space-y-8">
          {SERVICES.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="grid md:grid-cols-[320px_1fr]">
                {/* Left: identity panel */}
                <div className="flex flex-col gap-4 bg-gradient-to-br from-orange-50 to-sky-50 p-8">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange text-white shadow-sm">
                      {SERVICE_ICONS[s.slug]}
                    </span>
                    <span className="text-3xl font-extrabold text-orange-600/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-ink">{s.title}</h2>
                  <p className="text-sm leading-relaxed text-ink-soft">{s.short}</p>
                  <Link
                    href="/contact"
                    className="mt-auto inline-flex w-fit items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700"
                  >
                    Discuss this service <span aria-hidden>→</span>
                  </Link>
                </div>

                {/* Right: what's included */}
                <div className="p-8">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                    What&apos;s included
                  </h3>
                  <ul className="mt-5 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <svg
                          className="mt-0.5 h-5 w-5 flex-none text-orange-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.29 6.8-6.8a1 1 0 0 1 1.4 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-[15px] leading-snug text-ink-soft">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      <section className="bg-ink py-24 text-white">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
              Technologies
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              A deep, modern stack
            </h2>
            <p className="mt-4 text-lg text-white/70">
              We choose tools to fit the problem — not the other way around.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(TECH).map(([group, items]) => (
              <div key={group} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                  {group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.06] px-2.5 py-1 text-sm text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Not sure which service you need?"
        subtitle="Start with a consultation. We'll help you scope the right engagement."
      />
    </>
  );
}
