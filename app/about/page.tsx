import type { Metadata } from "next";
import { SectionHeading, CTABand, PageHero } from "@/components/ui";
import { SITE, PROOF } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — A consulting-led technology team",
  description:
    "Orrizonte is a team of 44+ technologists across Bengaluru, Mumbai and NCR, led by architects with national-scale delivery experience. People at the heart, technology at scale.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "People first",
    body: "We place people at the heart of our mission — crafting technology that's intuitive and adaptable to real needs.",
  },
  {
    title: "Senior by default",
    body: "The experts who advise you are the experts who deliver. No bait-and-switch between the pitch and the project.",
  },
  {
    title: "Built to last",
    body: "Security, compliance and scale aren't add-ons. They're how we design from the first line.",
  },
  {
    title: "Together",
    body: `"${SITE.ethos}" — collaboration is how we turn hard problems into shipped solutions.`,
  },
];

const TEAM = [
  ["Technical Architects", "Seasoned experts with 10+ years driving innovative solutions."],
  ["Data Engineers", "Specialists managing and optimising complex data ecosystems."],
  ["DevOps Engineers", "Automating workflows and ensuring seamless deployment."],
  ["Project Managers", "Leaders ensuring timely, efficient delivery."],
  ["Business Analysts", "Bridging technical solutions with business outcomes."],
  ["Developers & QA", "Talented programmers and quality engineers shipping reliable software."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Orrizonte"
        title="A dynamic team of forward-thinking technologists."
        intro={`${SITE.legalName} is a consulting-led technology firm. We're dedicated to driving innovation — placing people at the heart of our mission and crafting technology that's intuitive and adaptable. Our commitment extends from inception to execution: comprehensive support from concept validation to full-scale implementation.`}
      />

      {/* Proof */}
      <section className="border-b border-ink/10">
        <div className="container-content grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {PROOF.map((p) => (
            <div key={p.label} className="text-center">
              <div className="text-3xl font-extrabold text-orange-600 sm:text-4xl">{p.value}</div>
              <p className="mt-1 text-sm text-ink-muted">{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership credentials — anonymous */}
      <section className="container-content py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <SectionHeading
            eyebrow="Our leadership"
            title="Led by architects of national-scale systems"
            intro="We don't lead with names — we lead with track record. Our senior leadership combines deep architecture experience with proven delivery on systems that millions, and in some cases over a billion, people depend on."
          />
          <ul className="space-y-4 rounded-3xl border border-ink/10 bg-white p-8 shadow-sm">
            {[
              "20+ years of senior solution & enterprise architecture experience",
              "Served as Chief Architect on India's largest public-health platforms",
              "AWS Certified Solutions Architect",
              "Recognised by the Ministry of Health & Family Welfare and the UNDP",
              "Experience delivering for global organisations and government bodies",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange text-xs font-bold text-white">
                  ✓
                </span>
                <span className="text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team make-up */}
      <section className="bg-orange-50/40 py-24">
        <div className="container-content">
          <SectionHeading
            eyebrow="Our team"
            title={`${SITE.teamSize} specialists, three cities`}
            intro={`A team of ${SITE.teamSize} professionals across ${SITE.locations.join(", ")}, ensuring smooth project execution and support across locations.`}
            center
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map(([role, desc]) => (
              <div key={role} className="card">
                <h3 className="text-lg font-bold text-ink">{role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-content py-24">
        <SectionHeading eyebrow="What we value" title="How we work" center />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="card">
              <h3 className="text-lg font-bold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
