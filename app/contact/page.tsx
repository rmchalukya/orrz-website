import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Book a consultation",
  description:
    "Talk to a senior architect at Orrizonte Technologies. Book a consultation or reach us in Noida, with delivery teams across Bengaluru, Mumbai and NCR.",
  alternates: { canonical: "/contact" },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.legalName,
  email: SITE.email,
  telephone: SITE.phone,
  url: `${SITE.url}/contact`,
  areaServed: SITE.locations,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: SITE.email,
    telephone: SITE.phone,
    areaServed: "IN",
  },
};

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-b border-ink/10 py-4 last:border-0">
      <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{label}</span>
      <span className="text-ink">{children}</span>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <PageHero
        eyebrow="Contact"
        title="Let's build what's next."
        intro="Tell us where you're headed. We'll bring people who have built it at scale — and you'll talk to a senior architect, not a sales rep."
      />

      <section className="container-content py-20">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-ink">Send us a message</h2>
            <p className="mt-1 text-sm text-ink-muted">We typically respond within one business day.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-ink/10 bg-ink p-8 text-white">
              <h2 className="text-lg font-bold">Reach us directly</h2>
              <div className="mt-4 space-y-3 text-sm">
                <p>
                  <a href={`mailto:${SITE.email}`} className="hover:text-orange-500">
                    {SITE.email}
                  </a>
                </p>
                <p>
                  <a href={`tel:${SITE.phoneHref}`} className="hover:text-orange-500">
                    {SITE.phone}
                  </a>
                </p>
              </div>
              <p className="mt-6 text-sm italic text-orange-500">&ldquo;{SITE.ethos}&rdquo;</p>
            </div>

            <div className="mt-6 rounded-3xl border border-ink/10 bg-white p-8 shadow-sm">
              <InfoRow label="We operate from">{SITE.locations.join(" · ")}</InfoRow>
              <InfoRow label="Website">
                <a href={SITE.url} className="text-orange-600 hover:text-orange-700">
                  {SITE.url.replace("https://", "")}
                </a>
              </InfoRow>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
