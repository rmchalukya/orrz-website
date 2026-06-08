import type { Metadata } from "next";
import { SectionHeading, CTABand, PageHero } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technology & Architecture Consulting",
  description:
    "Enterprise architecture, AI adoption, AI/LLM cost optimisation, cloud FinOps, code-quality automation and SOP governance — consulting led by architects with 20+ years behind national-scale platforms.",
  keywords: [
    "AI adoption consulting",
    "AI cost optimisation",
    "LLM cost reduction",
    "cloud cost optimisation FinOps",
    "code quality monitoring CI/CD",
    "SOP and engineering governance",
    "enterprise architecture consulting",
  ],
  alternates: { canonical: "/consulting" },
};

const PRACTICES = [
  {
    title: "Enterprise & Solution Architecture",
    body: "Target-state architecture, technology selection, integration patterns and reference designs for systems that must scale, stay secure and stay up.",
  },
  {
    title: "AI & GenAI Advisory",
    body: "Where AI actually pays off — use-case shaping, RAG and LLM architecture, data readiness, build-vs-buy and responsible-AI guardrails.",
  },
  {
    title: "Cloud & Infrastructure Strategy",
    body: "Cloud strategy and well-architected reviews across AWS, Azure and GCP — cost optimisation, resilience and high-availability design.",
  },
  {
    title: "Application Modernisation",
    body: "Monolith-to-microservices, re-platforming and migration roadmaps that de-risk delivery and protect the business while you change the engine.",
  },
  {
    title: "Data & Analytics Strategy",
    body: "Data platform design, warehousing, vector stores for AI, governance and the analytics roadmap that turns data into decisions.",
  },
  {
    title: "Security, Compliance & Reviews",
    body: "Architecture and security reviews informed by delivering audited, compliance-grade public systems at national scale.",
  },
];

// Concrete advisory playbooks — the "how", not slideware.
const PLAYBOOKS = [
  {
    slug: "use-ai",
    tag: "Adoption",
    title: "How to actually use AI",
    intro:
      "AI pays off when it's pointed at the right problem with the right pattern — not bolted on for hype. We help you separate high-value use cases from distractions and ship them safely.",
    points: [
      "Use-case discovery and ROI scoring — back problems that move a real metric",
      "Choose the pattern: prompting vs RAG over your own data vs fine-tuning",
      "Human-in-the-loop and guardrails for accuracy, safety and compliance",
      "Start with a focused pilot, measure, then scale only what works",
    ],
    icon: (
      <path d="M12 3v2m0 14v2M5 12H3m18 0h-2M6.3 6.3 4.9 4.9m12.8 1.4 1.4-1.4M6.3 17.7l-1.4 1.4m12.8-1.4 1.4 1.4M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
    ),
  },
  {
    slug: "ai-cost",
    tag: "Cost · GenAI",
    title: "How to reduce AI usage cost",
    intro:
      "Token bills scale faster than you expect. With model routing, caching and disciplined prompt design, teams routinely cut GenAI spend sharply without losing quality.",
    points: [
      "Right-size the model — route easy calls to small/cheap models, reserve frontier models for hard tasks",
      "Prompt and context trimming plus semantic caching to kill repeat token spend",
      "Batch, stream and cap output tokens; cache embeddings and reuse retrieval",
      "Self-host open models where volume justifies it; track cost per request",
    ],
    icon: (
      <path d="M12 2v20m5-16H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    ),
  },
  {
    slug: "cloud-cost",
    tag: "Cost · Cloud",
    title: "How to reduce cloud cost",
    intro:
      "Most cloud bills carry 20–40% waste. We run Well-Architected and FinOps reviews to find it — and put guardrails in place so it doesn't creep back.",
    points: [
      "Right-sizing, autoscaling and killing idle / zombie resources",
      "Savings Plans, Reserved Instances and committed-use discounts for steady workloads",
      "Spot / preemptible for fault-tolerant jobs; storage tiering and lifecycle rules",
      "Tagging, budgets, anomaly alerts and per-team cost dashboards",
    ],
    icon: (
      <path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 17 18zm5-2v3m-3-1.5 3 1.5 3-1.5" />
    ),
  },
  {
    slug: "code-quality",
    tag: "Quality",
    title: "How to monitor code quality",
    intro:
      "Quality you can see is quality you can keep. We wire automated gates into CI so problems are caught in the pull request — not in production.",
    points: [
      "Static analysis, linting and type checks enforced on every commit",
      "Coverage thresholds and quality gates (e.g. SonarQube) that block risky merges",
      "Security and dependency scanning (SAST, SCA) plus secret detection",
      "PR standards, code owners and trend dashboards to keep tech-debt visible",
    ],
    icon: (
      <path d="M9 12.5l2 2 4-4.5M4 7l8-4 8 4v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9z" />
    ),
  },
  {
    slug: "sops",
    tag: "Governance",
    title: "How to build SOPs for adherence",
    intro:
      "Repeatable delivery comes from clear, lightweight standard operating procedures the team actually follows. We codify them and bake them into the workflow so the right way is the easy way.",
    points: [
      "Documented SOPs for branching, releases, incidents and on-call",
      "Definition-of-Done, runbooks and Architecture Decision Records (ADRs)",
      "Automation and templates that enforce standards without slowing teams",
      "Onboarding playbooks and periodic audits to keep adherence high",
    ],
    icon: (
      <path d="M8 4h8a2 2 0 0 1 2 2v13a1 1 0 0 1-1.5.9L12 18l-4.5 1.9A1 1 0 0 1 6 19V6a2 2 0 0 1 2-2zm1 5h6M9 12h4" />
    ),
  },
];

const ENGAGE = [
  {
    step: "01",
    title: "Discovery call",
    body: "A senior architect — not a salesperson — listens to where you are and where you want to be.",
  },
  {
    step: "02",
    title: "Assessment & roadmap",
    body: "We assess the current state and deliver a clear, prioritised roadmap with trade-offs made explicit.",
  },
  {
    step: "03",
    title: "Architecture & design",
    body: "Reference architecture, technology choices and a delivery plan your teams can execute with confidence.",
  },
  {
    step: "04",
    title: "Build or hand-off",
    body: "We deliver it end-to-end, embed alongside your team, or hand off a plan you can run yourselves.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Technology and Enterprise Architecture Consulting",
  provider: { "@type": "Organization", name: SITE.legalName, url: SITE.url },
  areaServed: "Global",
  description: metadata.description,
};

export default function ConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <PageHero
        eyebrow="Consulting"
        title="Consulting led by architects who have built it before."
        intro="When the system has to work — at scale, under scrutiny, for real users — you want the people who've done it. Our practice is led by architects with 20+ years of experience who served as Chief Architect on platforms trusted by over a billion citizens, are AWS-certified, and have been recognised by the Government of India and the UNDP."
      >
        <div className="flex flex-wrap justify-center gap-2.5">
          {PLAYBOOKS.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-sm font-medium text-ink-soft shadow-sm backdrop-blur transition hover:border-orange-600/40 hover:text-orange-600"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden />
              {p.title.replace(/^How to (actually )?/, "")}
            </a>
          ))}
        </div>
      </PageHero>

      {/* Practices */}
      <section className="container-content py-24">
        <SectionHeading
          eyebrow="Advisory practices"
          title="Where senior guidance changes the outcome"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICES.map((p) => (
            <div key={p.title} className="card">
              <h3 className="text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiator */}
      <section className="bg-ink py-24 text-white">
        <div className="container-content grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              The Orrizonte difference
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              You get the architect, not the org chart.
            </h2>
            <p className="mt-5 text-lg text-white/70">
              We keep our advisory deliberately senior. The person shaping your architecture has
              personally delivered mission-critical, compliance-grade systems — so the advice is
              grounded in what actually ships and survives production.
            </p>
          </div>
          <ul className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8">
            {[
              "20+ years of senior architecture experience",
              "Chief Architect on national-scale public platforms",
              "AWS Certified Solutions Architect",
              "Built for 1B+ citizens, audited for security & compliance",
              "Recognised by MoHFW (Govt. of India) and the UNDP",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/90">
                <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange text-xs font-bold text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AI & engineering-excellence playbooks */}
      <section className="bg-orange-50/40 py-24">
        <div className="container-content">
          <SectionHeading
            eyebrow="AI & engineering excellence"
            title="Playbooks we bring to every engagement"
            intro="Concrete, battle-tested approaches — not slideware. A sample of what senior guidance looks like in practice, from adopting AI to keeping cloud spend and code quality in check."
          />
          <div className="mt-14 space-y-6">
            {PLAYBOOKS.map((p, i) => (
              <article
                key={p.title}
                id={p.slug}
                className="scroll-mt-24 grid gap-6 rounded-3xl border border-ink/10 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8 md:grid-cols-[300px_1fr]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange text-white shadow-sm">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.7}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        {p.icon}
                      </svg>
                    </span>
                    <span className="text-3xl font-extrabold text-orange-600/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
                    {p.tag}
                  </p>
                  <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-ink">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.intro}</p>
                </div>
                <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2 md:border-l md:border-ink/10 md:pl-8">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
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
                      <span className="text-[15px] leading-snug text-ink-soft">{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement model */}
      <section className="container-content py-24">
        <SectionHeading
          eyebrow="How we engage"
          title="A path from question to working system"
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {ENGAGE.map((e) => (
            <div key={e.step} className="card">
              <span className="text-2xl font-extrabold text-orange-600">{e.step}</span>
              <h3 className="mt-3 text-lg font-bold text-ink">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        title="Start with a conversation."
        subtitle="A 30-minute call with a senior architect to pressure-test your direction — no obligation."
      />
    </>
  );
}
