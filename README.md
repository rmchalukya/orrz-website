# Orrizonte Technologies — Website

Marketing site for **Orrizonte Technologies Pvt Ltd**, built with **Next.js 15 (App Router)**,
**TypeScript** and **Tailwind CSS**. Positioned around consulting led by senior architects, with
SEO baked in.

## Stack & SEO features

- Next.js App Router with server-rendered, crawlable pages
- Per-page `<title>` / meta descriptions / canonical URLs
- JSON-LD structured data: `Organization`, `Service`, `ItemList`, `LocalBusiness`
- Auto-generated `sitemap.xml` and `robots.txt`
- Generated favicon + Open Graph / Twitter card image
- Accessible: skip link, semantic headings, focus styles
- Tailwind theme matching the Orrizonte brand (orange + sky-blue)

## Pages

`/` Home · `/consulting` (flagship) · `/services` · `/industries` · `/case-studies` · `/about` · `/contact`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Editing content

All company facts and copy live in [`lib/site.ts`](lib/site.ts) — edit there and it propagates
across the site. Update `SITE.url` to the live domain before launch.

## Notes

- The contact form opens the visitor's email client (`mailto:`) — no backend required. To capture
  submissions server-side, add a route handler at `app/api/contact/route.ts` and POST to it.
- Individual team members are intentionally not named; leadership is described by credentials.
