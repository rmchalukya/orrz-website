import Link from "next/link";
import { SectionHeading, CTABand, CheckItem } from "@/components/ui";
import { HeroPrompt } from "@/components/HeroPrompt";
import { SERVICES, PROOF, CLIENTS, SITE } from "@/lib/site";

// Teasers linking to the AI & engineering playbooks on the Consulting page.
const AI_TEASERS = [
  { slug: "use-ai", label: "Use AI the right way", blurb: "Find the use cases that move a real metric — and ship them safely." },
  { slug: "ai-cost", label: "Cut AI usage cost", blurb: "Model routing, caching and prompt design that slash token bills." },
  { slug: "cloud-cost", label: "Reduce cloud cost", blurb: "FinOps reviews that clear the 20–40% of waste most bills carry." },
  { slug: "code-quality", label: "Monitor code quality", blurb: "Automated gates that catch issues in the PR, not in production." },
  { slug: "sops", label: "Build SOPs for adherence", blurb: "Lightweight standards the team actually follows, baked into the workflow." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink/10">
        {/* Warm, layered backdrop */}
        <div
          className="absolute inset-0 -z-20"
          style={{
            background:
              "radial-gradient(70% 60% at 50% -10%, #FEEAD9 0%, #FFF7F0 38%, #FFFFFF 68%, #EEF8FC 100%)",
          }}
        />
        <div className="absolute -left-24 top-8 -z-10 h-80 w-80 animate-float rounded-full bg-orange/15 blur-3xl" />
        <div className="absolute -right-24 top-24 -z-10 h-80 w-80 animate-float-alt rounded-full bg-sky/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 animate-float rounded-full bg-orange/[0.06] blur-3xl" style={{ animationDelay: "1.5s" }} />

        <div className="container-content flex flex-col items-center py-24 text-center md:py-32">
          {/* Badge */}
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-orange-600/20 bg-white/70 px-4 py-1.5 text-sm font-medium text-orange-700 shadow-sm backdrop-blur">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="animate-[spin_6s_linear_infinite]">
              <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
            </svg>
            Consulting-led technology
          </span>

          <h1
            className="mt-7 max-w-4xl animate-fade-up text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[4.25rem]"
            style={{ animationDelay: "0.08s" }}
          >
            Strategy and software, led by architects who&apos;ve{" "}
            <span className="animate-shine bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 bg-[length:200%_auto] bg-clip-text text-transparent">
              built it at national scale.
            </span>
          </h1>

          <p
            className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-ink-soft sm:text-xl"
            style={{ animationDelay: "0.16s" }}
          >
            Senior, hands-on consulting with full-cycle delivery — from concept validation to
            production. Advisory led by architects with 20+ years behind platforms trusted by over a
            billion citizens.
          </p>

          {/* Prompt-style entry point */}
          <div className="mt-10 w-full animate-fade-up" style={{ animationDelay: "0.24s" }}>
            <HeroPrompt />
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <section className="border-b border-ink/10 bg-white">
        <div className="container-content grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {PROOF.map((p) => (
            <div key={p.label} className="text-center">
              <div className="text-3xl font-extrabold text-orange-600 sm:text-4xl">{p.value}</div>
              <p className="mt-1 text-sm text-ink-muted">{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consulting-first value prop */}
      <section className="container-content py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="Why Orrizonte"
              title="Senior people on the problem — from day one"
              intro="Most firms put their best people in the sales meeting and juniors on your project. We do the opposite. The architects who advise you are the ones who have delivered mission-critical systems for governments and global organisations."
            />
            <ul className="mt-8 space-y-3">
              <CheckItem>Chief-architect-level guidance, not a junior bench</CheckItem>
              <CheckItem>Proven at extreme scale, security and compliance</CheckItem>
              <CheckItem>End-to-end — concept validation to full-scale implementation</CheckItem>
              <CheckItem>Vendor-neutral advice across cloud, data and AI stacks</CheckItem>
            </ul>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-gradient-to-br from-ink to-ink-soft p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Trusted on work that cannot fail
            </p>
            <p className="mt-4 text-2xl font-bold leading-snug">
              Our architects served as Chief Architect on India&apos;s largest public-health
              platforms — including the system behind the world&apos;s largest vaccination drive.
            </p>
            <p className="mt-6 text-white/70">
              That experience — AWS-certified, scaled to a billion+ users, audited for security and
              compliance — is what we bring to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-orange-50/40 py-24">
        <div className="container-content">
          <SectionHeading
            eyebrow="What we do"
            title="Services that span strategy to delivery"
            intro="Engage us for advisory alone, or to build and run the solution end-to-end."
            center
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services#${s.slug}`} className="card group">
                <h3 className="text-lg font-bold text-ink group-hover:text-orange-600">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-600">
                  Learn more
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI & engineering playbooks teaser */}
      <section className="container-content py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="AI & engineering excellence"
            title="Practical answers to the questions teams ask us most"
            intro="From adopting AI to keeping cloud spend, code quality and delivery standards in check — concrete playbooks, not slideware."
          />
          <Link
            href="/consulting"
            className="inline-flex flex-none items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700"
          >
            See all playbooks <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AI_TEASERS.map((t) => (
            <Link key={t.slug} href={`/consulting#${t.slug}`} className="card group">
              <h3 className="text-base font-bold text-ink group-hover:text-orange-600">{t.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-600">
                Read more <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="container-content py-24">
        <SectionHeading
          eyebrow="Trusted by"
          title="Organisations we work with"
          intro="From government bodies to universities and fast-growing startups."
          center
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {CLIENTS.map((c) => (
            <span
              key={c}
              className="rounded-full border border-ink/10 bg-white px-5 py-2.5 text-sm font-medium text-ink-soft shadow-sm"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
