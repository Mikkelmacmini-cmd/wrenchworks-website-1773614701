# Refresh Round 2/3 — Atlas SEO + IA Hardening Pass

Date: 2026-03-11  
Owner: Atlas  
Goal: Ensure the Round-2 visual/content upgrades increase conversion *without* weakening local SEO or AI-search retrieval.

---

## Executive verdict

The new direction is strong, and current route hygiene is in good shape. The remaining upside is now in **semantic depth + linking intelligence + metadata consistency**.

If implemented, this pass should:
1. Protect local rankings during copy/visual changes,
2. Improve long-tail service visibility,
3. Increase extraction quality for AI answer engines.

---

## 1) Keep these SEO foundations locked (do not regress)

1. **Index map discipline**: only `/`, `/services`, `/services/[valid-slug]` indexable.
2. **Unknown slugs** must stay true 404 (`notFound()` already in place).
3. **Sitemap remains data-driven** from `featuredServices` only.
4. **Legacy off-brand URLs stay blocked/redirected** through cleanup window.

These are non-negotiable guardrails while visual/content experiments continue.

---

## 2) Metadata alignment refinements (R2 content-safe)

Current metadata is broadly correct. Tighten consistency so style changes don’t create search drift.

## Page-level metadata targets
- `/`
  - Title should keep exact local intent: `Auto Repair in Littleton, CO | AutoTrek Service Center`
  - Description should include: diagnostics + approval-first process + warranty
- `/services`
  - Keep services-hub framing + local modifier
  - Include “symptom-first” language to match on-page copy
- `/services/[slug]`
  - Keep deterministic service pattern: `{Service} in Littleton, CO | AutoTrek Service Center`
  - Description should mention service + local area + process trust marker (approval-first or ASE/warranty)

## Alignment rule
Any major headline/copy refresh should trigger a metadata check so:
- H1 theme,
- title tag,
- meta description,
- OG/Twitter description
all reflect the same intent and vocabulary.

---

## 3) Schema refinement plan (highest leverage for AI/search)

## A) Homepage (`/`)
Keep `AutoRepair` schema, but extend with:
- `areaServed` (Littleton + nearby cities already referenced in content),
- `openingHoursSpecification`,
- `priceRange` (if policy-approved),
- `sameAs` (Google profile/socials if available),
- `hasOfferCatalog` pointing to core service categories.

## B) Services hub (`/services`)
Add:
- `ItemList` schema for featured service entries in visible order,
- optional `FAQPage` only if FAQ content is actually rendered on this page.

## C) Service detail pages (`/services/[slug]`)
Add per-page `Service` schema:
- `name` = service title,
- `serviceType` = normalized service label,
- `provider` = AutoTrek entity,
- `areaServed` = local service area,
- `url` = canonical URL,
- `description` consistent with visible hero/body copy.

## D) Breadcrumbs
Add `BreadcrumbList` on service detail pages:
- Home → Services → Current Service

This helps both SERP comprehension and LLM page parsing.

---

## 4) Internal-linking refinement (IA + decision flow)

Current links are good but still hub-heavy. Add structured contextual links.

## Service page linking requirement
Each service page should include:
1. Link back to `/services`,
2. **2–4 related services** from the same intent cluster,
3. One conversion CTA block near related links.

### Recommended cluster map
- `vehicle-maintenance` → `oil-fluid-changes`, `vehicle-diagnosis-repair`, `wheel-alignments`
- `brake-repair-service` → `vehicle-suspension-repair`, `wheel-alignments`, `vehicle-diagnosis-repair`
- `hybrid-repair` → `vehicle-diagnosis-repair`, `vehicle-maintenance`
- `european-auto-repair` → `vehicle-diagnosis-repair`, `brake-repair-service`, `vehicle-maintenance`
- `fleet-repair-service` → `vehicle-maintenance`, `vehicle-diagnosis-repair`, `oil-fluid-changes`

## Homepage linking enhancement
From triage cards and proof modules, add deeper links to relevant service URLs (not only phone actions). This preserves conversion while improving crawl pathways and intent matching.

---

## 5) AI-search visibility adjustments (content structure)

To improve answer-engine extraction, keep key facts in reusable formats:

1. **Short Q/A blocks** on service pages:
   - “Is this safe to drive?”
   - “How soon should I book?”
   - “What happens during diagnosis?”
2. **Scannable lists** for symptoms, causes, urgency, and next steps.
3. Keep business identity repeated consistently:
   - AutoTrek Service Center
   - Littleton, CO
   - approval-first repairs
   - 3yr/36k warranty
4. Prefer concrete statements over slogans in first 1–2 screens.

---

## 6) R2 visual-refresh SEO safeguards

As design gets more premium/dense:
- Ensure trust stats remain crawlable text (not image-only).
- Keep one H1 per page; maintain heading hierarchy.
- Maintain contrast/readability so critical proof copy is not hidden by overlays.
- Avoid replacing meaningful subheads with purely stylistic labels.

If content is moved into accordions/disclosures, keep important trust/service facts visible by default on desktop and mobile.

---

## 7) Final launch QA checklist (SEO + AI readiness)

- [ ] Canonicals are absolute and self-referential on all indexable pages
- [ ] Invalid service slugs return real 404
- [ ] Sitemap includes only approved routes
- [ ] Homepage `AutoRepair` schema validates
- [ ] Service pages include `Service` + `BreadcrumbList` schema
- [ ] `/services` includes `ItemList` schema (and FAQ schema only if visible FAQ exists)
- [ ] Service pages include 2–4 related-service internal links
- [ ] Core trust/decision content remains text-rendered and machine-readable
- [ ] Title/H1/description are semantically aligned after copy refresh

---

## Bottom line

Round 2 visual and trust improvements can absolutely compound SEO performance, **if** semantic structure is upgraded in parallel. The next biggest gains are now from:
1. service-page schema depth,
2. clustered related linking,
3. metadata-to-copy alignment discipline.

This is the final step from “good local service site” to “high-confidence local authority that AI systems can quote accurately.”
