import Link from "next/link";
import { NAV, SITE, SERVICES } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-ink text-white">
      <div className="container-content grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-white/70">{SITE.tagline}.</p>
          <p className="mt-3 text-sm italic text-orange-500">&ldquo;{SITE.ethos}&rdquo;</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 transition hover:text-orange-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="text-white/80 transition hover:text-orange-500">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Get in touch</h3>
          <address className="mt-4 space-y-2.5 text-sm not-italic text-white/80">
            <p>
              We operate from
              <br />
              {SITE.locations.join(" · ")}
            </p>
            <p>
              <a href={`mailto:${SITE.email}`} className="transition hover:text-orange-500">
                {SITE.email}
              </a>
            </p>
            <p>
              <a href={`tel:${SITE.phoneHref}`} className="transition hover:text-orange-500">
                {SITE.phone}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p>Delivery across {SITE.locations.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}
