# Round 2 (Atlas) — SEO Risk Tightening + Service/City IA Refinement

Date: 2026-03-11  
Scope: Build on Round 1 and TEAM-LESSONS by removing remaining index-risk, tightening the canonical index map, and upgrading internal-linking guidance for service + city intent.

## Executive Summary

Round 1 removed off-brand static route files. **Primary residual SEO risk is now dynamic:**
- Unknown `/services/[slug]` still returns a rendered page (HTTP 200) instead of true 404.
- `generateMetadata` for invalid slugs still emits indexable-looking metadata (title only, no noindex).
- Internal-linking is broad but not yet structured for service↔city relevance loops.

Net: architecture is much cleaner, but launch-safe indexing still requires strict invalid-slug handling and a hardened SEO route policy.

---

## Tightened SEO Index Map (Source of Truth)

### Indexable (index,follow, self-canonical, in sitemap)
- `/`
- `/services`
- `/services/{slug}` where slug is in `featuredServices` only:
  - `vehicle-maintenance`
  - `brake-repair-service`
  - `oil-fluid-changes`
  - `hybrid-repair`
  - `european-auto-repair`
  - `fleet-repair-service`
  - `vehicle-suspension-repair`
  - `vehicle-diagnosis-repair`
  - `wheel-alignments`

### Non-indexable / retired
- Any unknown `/services/*` slug → **must be 404** via `notFound()`
- Legacy off-brand URLs from Round 1 should remain redirected in edge/server config for 90+ days:
  - `/services/automated-review-systems`
  - `/services/google-business-profile`
  - `/services/local-seo-ai-search`
  - `/services/mobile-first-websites`

---

## Residual Index-Risk Findings (Current)

1. **Unknown slug renders 200 page** in `src/app/services/[slug]/page.tsx` ("Service not found" UI).  
   - Risk: index pollution, soft-404 behavior, crawl budget waste.

2. **Invalid-slug metadata fallback lacks robots noindex.**  
   - Risk: engines may treat this as low-quality valid page if 200 persists.

3. **robots.ts no interim explicit disallow for known legacy bad paths.**  
   - Not critical once redirects are in place, but useful as defense-in-depth during deindex window.

---

## Required Remediations (Round 2)

## 1) Enforce true 404 for unknown service slugs
In `src/app/services/[slug]/page.tsx`:
- Import `notFound` from `next/navigation`
- Replace not-found JSX fallback with `notFound()`

This is the single highest-impact fix remaining.

## 2) Harden invalid-slug metadata behavior
In `generateMetadata` for invalid slug, return explicit non-index metadata if metadata runs pre-404 in your render path:

```ts
return {
  title: "Service Not Found",
  robots: { index: false, follow: false },
  alternates: { canonical: "/services" },
};
```

(If app behavior guarantees 404 metadata handling globally, this can be minimized; otherwise keep explicit guard.)

## 3) Keep sitemap strictly data-driven
Current sitemap is correct (based on `featuredServices`). Preserve this rule:
- Never auto-discover routes from filesystem.
- Only include routes with business-owned content + conversion intent.

## 4) Optional defense-in-depth in robots
Add temporary disallow entries for the 4 retired off-brand routes while redirect aging is in progress.

---

## Service + City Internal Linking Blueprint (Refined)

City pages are not yet implemented, but architecture should be set now to avoid later SEO drift.

## Service pages (`/services/{slug}`)
Each service page should link to:
1. `/services` (hub)
2. 2–4 closely related service pages (contextual, not random)
3. 1 city cluster module (future):
   - "Also serving {City} for {Service}" → links to `/locations/{city}/{service-slug}` or chosen city URL model

Suggested related-service clusters:
- `vehicle-maintenance` ↔ `oil-fluid-changes`, `vehicle-diagnosis-repair`, `wheel-alignments`
- `brake-repair-service` ↔ `vehicle-suspension-repair`, `wheel-alignments`, `vehicle-diagnosis-repair`
- `hybrid-repair` ↔ `vehicle-diagnosis-repair`, `vehicle-maintenance`
- `european-auto-repair` ↔ `vehicle-diagnosis-repair`, `brake-repair-service`, `vehicle-maintenance`
- `fleet-repair-service` ↔ `vehicle-maintenance`, `vehicle-diagnosis-repair`, `oil-fluid-changes`

## City pages (future)
If city pages launch, enforce strict template governance:
- One indexable city hub per city (e.g., `/locations/littleton`)
- Service-in-city pages only for real demand + unique local proof (avoid doorway-page multiplication)
- Each city hub links to 5–9 core service pages
- Each service page links back to top city hubs (Littleton + highest-volume adjacent cities)

Rule: no thin “city swap” duplicates. Require unique local proof block per city page (landmarks, driving patterns, local customer constraints, real service area context).

---

## Metadata Refinement Guidance (Service + City)

For service pages (current):
- Keep title pattern: `{Service} in Littleton, CO | AutoTrek Service Center`
- Keep self canonical and aligned OG/Twitter URL
- Add a short unique intro paragraph near top for snippet quality consistency

For future city hubs:
- Title pattern: `Auto Repair in {City}, CO | AutoTrek Service Center`
- Canonical: self
- Include links to top related services + one strong CTA block

For future service-in-city pages (if used):
- Title pattern: `{Service} in {City}, CO | AutoTrek Service Center`
- Canonical: self only if content is materially unique
- If thin/duplicative, canonical to primary service page instead

---

## Acceptance Criteria (Round 2)

- [ ] Unknown `/services/*` now returns real 404 (not soft 404 page with 200)
- [ ] Invalid slug metadata is explicitly noindex (or guaranteed by 404 metadata behavior)
- [ ] SEO index map documented and treated as source-of-truth
- [ ] Internal linking on service pages follows related-service cluster logic
- [ ] City-page rollout rules defined before any city URLs are published

If these pass, remaining index-risk from unintended routes is effectively closed, and service/city SEO can scale without reintroducing route-level pollution.
