import type { Metadata } from "next";
import { CTABand, PageHero } from "@/components/ui";
import { INDUSTRIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries — Health, Education, Retail & Energy",
  description:
    "Deep expertise across health & public sector, education & ed-tech, e-commerce & retail, and energy & sustainability — built on national-scale delivery experience.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Domain depth where it counts."
        intro="Our experience is concentrated in domains where reliability, scale and compliance are non-negotiable — and where the right architecture is the difference between success and failure."
      />

      <section className="container-content py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {INDUSTRIES.map((ind) => (
            <div key={ind.title} className="card">
              <h2 className="text-xl font-bold text-ink">{ind.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{ind.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
