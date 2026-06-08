import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-content flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink">Page not found</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        The page you&apos;re looking for has moved or never existed. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact us
        </Link>
      </div>
    </section>
  );
}
