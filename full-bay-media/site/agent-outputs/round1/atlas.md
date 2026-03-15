# Round 1 (Atlas) — SEO Architecture Remediation Plan

Date: 2026-03-11  
Scope: Remove/offline unintended routes, enforce indexability rules, and align metadata + robots + sitemap to the *actual* AutoTrek route architecture.

## Decision

Use a **two-phase cleanup** so risk is controlled:

1. **Immediate containment (same release):** noindex + redirect the 4 off-brand routes.
2. **Permanent cleanup (next release):** delete those route files entirely.

This prevents accidental indexing while preserving UX for any existing links.

---

## Current Route Set (from `src/app`)

### Intended indexable routes
- `/`
- `/services`
- `/services/[slug]` where slug ∈
  - `vehicle-maintenance`
  - `brake-repair-service`
  - `oil-fluid-changes`
  - `hybrid-repair`
  - `european-auto-repair`
  - `fleet-repair-service`
  - `vehicle-suspension-repair`
  - `vehicle-diagnosis-repair`
  - `wheel-alignments`

### Unintended/off-brand routes (must not be indexable)
- `/services/automated-review-systems`
- `/services/google-business-profile`
- `/services/local-seo-ai-search`
- `/services/mobile-first-websites`

---

## Exact SEO Rules by Route Type

### A) Keep indexable (index,follow, canonical self)
- `/`
- `/services`
- valid `/services/[slug]` (9 slugs listed above)

Requirements:
- unique title + description
- canonical self URL
- OG/Twitter aligned to canonical
- included in sitemap

### B) Deindex + redirect (containment)
- the 4 unintended routes above

Requirements:
- `robots: { index: false, follow: false }`
- canonical to `/services`
- 301 redirect to `/services` (or 410 if intentionally retired and not user-facing)
- excluded from sitemap

### C) Unknown service slugs (`/services/<anything-else>`)
Current behavior renders “Service not found” with 200. This is index-risk.

Requirement:
- return `notFound()` (404) for unknown slugs
- metadata for unknown slugs: `robots: noindex, nofollow` (or rely on 404)

---

## Metadata Guidance (exact)

## 1) Root layout (`src/app/layout.tsx`)
Keep current global metadata as defaults. No major issue.

## 2) Services hub (`src/app/services/page.tsx`)
Keep as indexable with canonical `/services`.

## 3) Dynamic service pages (`src/app/services/[slug]/page.tsx`)
For valid slugs, keep current `generateMetadata` structure.

For invalid slugs, change behavior to:
- call `notFound()` in page component
- in metadata path, return noindex (or avoid emitting custom metadata if 404 handling is centralized)

Suggested metadata for *invalid* slug fallback if needed:
```ts
return {
  title: "Service Not Found",
  robots: { index: false, follow: false },
  alternates: { canonical: "/services" },
};
```

## 4) Unintended static routes (if temporarily retained)
At top of each page file, add:
```ts
export const metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "/services" },
};
```
And redirect users:
```ts
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/services");
}
```

---

## robots.txt Guidance (`src/app/robots.ts`)
Current file is acceptable but should explicitly disallow known off-brand paths while they still exist.

Recommended interim rules:
- allow `/`
- disallow:
  - `/services/automated-review-systems`
  - `/services/google-business-profile`
  - `/services/local-seo-ai-search`
  - `/services/mobile-first-websites`

Note: robots.txt disallow alone is insufficient for deindexing. Keep page-level noindex/redirect until deleted.

---

## Sitemap Guidance (`src/app/sitemap.ts`)
Current sitemap is structurally correct because it only includes `/`, `/services`, and `featuredServices` slugs.

Hard requirements:
- keep sitemap source-of-truth bound to `featuredServices`
- never include file-system discovered routes automatically
- ensure unintended static routes are never listed

Optional hardening:
- use build-time assertion that every sitemap service URL maps to a valid `featuredServices` slug.

---

## Redirect/Deletion Strategy

### Release N (immediate)
- Add noindex + redirect on 4 unintended routes.
- Add explicit robots disallow entries.
- Confirm sitemap excludes them.

### Release N+1
- Delete:
  - `src/app/services/automated-review-systems/page.tsx`
  - `src/app/services/google-business-profile/page.tsx`
  - `src/app/services/local-seo-ai-search/page.tsx`
  - `src/app/services/mobile-first-websites/page.tsx`
- Keep redirects (via `next.config` redirects) for at least 90 days.
- Request re-crawl/removal in Google Search Console if already indexed.

---

## Acceptance Criteria for Round 1

- [ ] 4 off-brand routes are noindex + redirected (or removed)
- [ ] unknown `/services/*` returns 404, not 200
- [ ] only intended routes are indexable
- [ ] sitemap contains only `/`, `/services`, and 9 featured service pages
- [ ] all indexable pages have canonical + unique metadata aligned to AutoTrek intent

If all five are true, SEO architecture is aligned with brand and launch-safe for indexing.