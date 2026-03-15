# AutoTrek Final QA — Sentinel

Date: 2026-03-10 (MDT)
Scope: SEO basics, accessibility basics, link integrity, conversion clarity

## Executive Summary

- **SEO basics: FAIL** (critical cleanup needed)
- **Accessibility basics: FAIL** (critical readability issue on published routes)
- **Link integrity: PASS** (no broken links found in crawl)
- **Conversion clarity: FAIL** (off-brand service pages create mixed intent)

---

## 1) SEO Basics — **FAIL**

### What passed
- Global metadata configured in `src/app/layout.tsx` (title template, description, OG/Twitter, canonical base).
- Service hub metadata configured in `src/app/services/page.tsx`.
- Dynamic service pages generate page-level metadata via `generateMetadata` in `src/app/services/[slug]/page.tsx`.
- `robots.ts` and `sitemap.ts` exist and are valid for primary routes.

### Issues found
1. **Unintended indexable routes exist under `/services/*`**:
   - `/services/automated-review-systems`
   - `/services/google-business-profile`
   - `/services/local-seo-ai-search`
   - `/services/mobile-first-websites`

   These pages are agency-offer content (Calendly + marketing services), not AutoTrek auto-repair services.

2. **No page-specific metadata on the four unintended routes** (they rely on inherited defaults), which can create poor/irrelevant indexing.

### Fixes
- **Best fix (recommended):** Remove these four route files entirely.
- If temporarily retained, add:
  - `export const metadata = { robots: { index: false, follow: false } }`
  - and/or redirect each to `/services`.
- Rebuild sitemap to include only customer-facing AutoTrek pages.

---

## 2) Accessibility Basics — **FAIL**

### What passed
- `lang="en"` set in root layout.
- Main page and service pages use semantic headings (`h1`, `h2`, `h3`) and landmark `<main>`.
- Images on key pages include `alt` text.
- Tap targets for primary CTAs are large and readable on mobile.

### Critical issue
1. **White text on white background on four live routes** (same four unintended `/services/*` pages).
   - Those files use `text-white` extensively but no dark page background.
   - Global `body` background is white (`globals.css`), causing severe contrast/readability failure.

### Fixes
- Remove the four unintended pages (preferred).
- If kept, set an explicit dark background on those pages (e.g., `bg-[#081022]`) and verify WCAG contrast ratios.

---

## 3) Link Integrity — **PASS**

### Checks run
- Built app successfully with `npm run build`.
- Started production server locally (`npm run start -- --port 4173`).
- Crawled internal anchors from `/` and `/services`, including all featured service pages.
- Validated external links discovered in anchors.

### Result
- **No broken internal links found** across:
  - `/`
  - `/services`
  - `/services/{all featured slugs}`
- External links discovered and reachable in this environment:
  - Google Maps directions URL
  - Google Reviews URL

---

## 4) Conversion Clarity — **FAIL**

### What passed
- Primary conversion path is clear on core pages (phone CTA repeated in header/hero/body/footer + mobile sticky CTA).
- Address/hours/directions present on homepage.

### Issues found
1. **Mixed business intent due to the four unintended pages** (agency services + Calendly booking) dilutes user trust and can confuse prospects.
2. The site contains two competing conversion motions:
   - AutoTrek: call-to-schedule auto repair
   - Agency pages: “Book Your Free Diag Call” (Full Bay Media)

### Fixes
- Delete or noindex/redirect the four unintended pages.
- Keep all CTAs aligned to one business goal: call AutoTrek at `(303) 328-3356`.

---

## Final Release Recommendation

**Do not publish as-is.**

Publish after removing (or noindex+redirecting) these four routes:
- `src/app/services/automated-review-systems/page.tsx`
- `src/app/services/google-business-profile/page.tsx`
- `src/app/services/local-seo-ai-search/page.tsx`
- `src/app/services/mobile-first-websites/page.tsx`

Once removed, rerun quick QA and this site should pass final basic launch checks.