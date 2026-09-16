# UNLEASHWORKS — Leadership. Change. Culture.

Professional website for **UNLEASHWORKS**, a leadership, change and culture practice by **Nuzhath Ayaz** (20+ years experience).

- **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS + Bun
- **Branding:** Navy `#0A1F44` / `#13265A` + gold `#C9A227` (from logo)
- **Contact (verified):** nuzhath.ayaz@gmail.com · [LinkedIn](https://www.linkedin.com/in/nuzhath-ayaz-215b688)

## Run with Bun

```bash
bun install
bun dev        # dev server → http://localhost:3000
bun run build  # production build (also runs on Vercel)
bun start      # serve the production build
bunx lint      # eslint (optional)
```

Requires Bun ≥ 1.0 (`bun --version`).

## Deploy on Vercel

1. Push to GitHub.
2. Import the repo in Vercel (framework auto-detected as Next.js).
3. Build settings are pre-configured in `vercel.json`:
   - Install: `bun install`
   - Build: `bun run build`
   - Output: `.next`
4. After deploy, update the canonical URL in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` if your domain differs from `https://unleashworks.vercel.app`.

## SEO / polish notes

- Title: `UNLEASHWORKS - Leadership Change Culture` (+ `%s | UNLEASHWORKS` template for subpages), meta description, canonical, robots.
- OpenGraph + Twitter large-image cards using `public/og-image.jpg` (1200×630, generated from `logo.jpeg` on navy).
- Favicon + Apple touch icon generated from `logo.jpeg` (`app/favicon.ico`, `public/favicon.ico`, `public/apple-touch-icon.png`).
- `app/sitemap.ts` (`/` + `/services`), `app/robots.ts`, `app/manifest.ts`, JSON-LD `ProfessionalService` schema in layout.
- Images via `next/image` (AVIF/WebP, `sizes` set, priority only for hero/nav); hero video uses `preload="metadata"` + poster for lighter initial load.
- Mobile-first responsive (single column → `sm:`/`lg:` grids), `overflow-x-hidden` guard, 44px+ mobile menu touch targets, skip-to-content link, visible focus rings.

## Lighthouse sanity checklist

```bash
bun run build && bun start
# then in Chrome DevTools → Lighthouse → Mobile + Desktop
```

- [ ] Performance: LCP hero image prioritized, video not preloaded eagerly, fonts `display: swap`.
- [ ] Accessibility: semantic landmarks, alt text, labels, focus states, colour contrast (gold on navy).
- [ ] Best practices: HTTPS, no console errors, `poweredByHeader: false`.
- [ ] SEO: title, description, canonical, OG/Twitter, sitemap + robots reachable (`/sitemap.xml`, `/robots.txt`).
