# Round 3 (Atlas) — Final SEO Refinement Pass (Launch Readiness)

Date: 2026-03-11  
Scope: Final validation and hardening of route/index hygiene, metadata strategy, and internal linking/schema recommendations for AutoTrek launch.

## Executive verdict

**Route and index hygiene are now close to launch-safe** after prior fixes (notably true 404 handling for unknown service slugs and data-driven sitemap).

Remaining work is mostly **quality hardening**, not structural rescue:
1. finalize metadata consistency rules,
2. add schema depth on service pages,
3. implement intentional related-service internal linking,
4. lock a lightweight SEO QA gate so regressions don’t return.

---

## 1) Route/Index Hygiene — Final Status

## Confirmed strong
- Only intended app routes exist: `/`, `/services`, `/services/[slug]`.
- `dynamicParams = false` plus `notFound()` for unknown service slugs prevents soft-404 index pollution.
- `generateStaticParams()` is restricted to `featuredServices` (governed source).
- `sitemap.ts` is data-driven from `featuredServices` (not filesystem discovery).
- `robots.ts` includes temporary disallow rules for retired off-brand legacy slugs.

## Final hardening actions (recommended before launch)
1. **Keep legacy redirects active for at least 90 days** (301 to `/services` or closest matching service page).
2. Ensure unknown paths globally return true 404/`not-found` and are excluded from any edge rewrite fallback.
3. Add an automated assertion in CI (or pre-release script):
   - unknown `/services/not-a-real-slug` => status 404
   - known service slug => status 200 + canonical self URL

---

## 2) Metadata Strategy — Final Canonical Policy

## Canonical/index policy (authoritative)
- `/` => index,follow, canonical `/`
- `/services` => index,follow, canonical `/services`
- `/services/{valid-featured-slug}` => index,follow, canonical self
- `/services/{invalid-slug}` => 404 + noindex (defense-in-depth acceptable in `generateMetadata`)

## Keep/adjust
- Keep `metadataBase` in layout (already correct).
- Keep OG/Twitter per page.
- For service detail pages, keep unique title + description sourced from `featuredServices`.

## Small cleanup recommendation
- In invalid-slug metadata branch, optionally include:
  - canonical `/services`
  - noindex,nofollow
  This is not a replacement for 404; it is a fallback belt-and-suspenders.

---

## 3) Internal Linking — Launch-Ready Blueprint

Current service detail pages link back to `/services` but do not yet enforce related-service clusters.

## Required launch behavior
Each `/services/{slug}` page should include:
1. Hub link to `/services`
2. **2–4 related service links** from the same intent cluster
3. CTA module (phone-first) remaining primary in visual hierarchy

## Recommended intent clusters
- `vehicle-maintenance` → `oil-fluid-changes`, `vehicle-diagnosis-repair`, `wheel-alignments`
- `brake-repair-service` → `vehicle-suspension-repair`, `wheel-alignments`, `vehicle-diagnosis-repair`
- `hybrid-repair` → `vehicle-diagnosis-repair`, `vehicle-maintenance`
- `european-auto-repair` → `vehicle-diagnosis-repair`, `brake-repair-service`, `vehicle-maintenance`
- `fleet-repair-service` → `vehicle-maintenance`, `vehicle-diagnosis-repair`, `oil-fluid-changes`

## Guardrails
- No random cross-link blocks; keep links intent-relevant.
- Keep related-link modules compact and below main service explanation (avoid diluting top CTA action).

---

## 4) Schema Strategy — Final Recommendations

## Already present
- Homepage has `AutoRepair` JSON-LD. Good baseline.

## Must-add for stronger launch readiness
1. **Service detail pages:** add `Service` JSON-LD (or `AutoRepair` + `hasOfferCatalog` strategy) with:
   - service name
   - provider (AutoTrek)
   - area served
   - URL (self)
2. **FAQ schema** where FAQ content appears on service pages/homepage (only if visible on page).
3. **Organization consistency:** ensure NAP (name, address, phone) is identical across:
   - JSON-LD
   - visible footer/contact modules
   - Google Business Profile

## Schema anti-spam rule
- Only mark up content actually visible to users.
- Do not create synthetic review/rating schema unless verifiable first-party policy allows it.

---

## 5) Launch QA Gate (SEO-specific)

Run this checklist before publish:
- [ ] `/`, `/services`, and all featured service pages return 200
- [ ] Unknown `/services/random-slug` returns 404 (not 200)
- [ ] Canonical on each indexable page is self-referential and absolute via metadataBase
- [ ] Sitemap contains only approved URLs
- [ ] Retired off-brand URLs redirect correctly and are not present in sitemap
- [ ] Service pages include related-service internal links (2–4, intent-clustered)
- [ ] JSON-LD validates (homepage + service pages + FAQ where used)
- [ ] Build passes cleanly

---

## Final launch position

**Go/no-go:**
- **Go** once internal related-link modules and service-page schema are implemented and validated.
- Route/index hygiene is now substantially controlled; remaining items are mainly scaling safeguards that improve discoverability and reduce future regression risk.

This is the first point where the architecture is clean enough to scale city/service SEO without reintroducing the earlier index pollution classes.
