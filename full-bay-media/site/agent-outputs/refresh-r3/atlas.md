# Refresh R3/3 — Atlas Final SEO + IA Pass (Local + AI Discoverability Lock)

Date: 2026-03-11  
Owner: Atlas  
Scope: Final integration pass to ensure the R3 design/content direction (Lens + Muse + Vanguard) ships with strong local SEO, AI-search extractability, and frictionless conversion pathways.

---

## Executive verdict

The Round-3 direction is now strong enough to become category-leading **if SEO and IA are treated as product infrastructure, not post-launch cleanup**.

**Go condition:** ship only when these three systems are all true at once:
1. **Decision-first IA** (users know next action in <30 seconds),
2. **Proof-first semantics** (machines can extract trust facts as plain text),
3. **Structured entity layer** (schema/canonicals/internal links are coherent).

---

## 1) Final IA + Search Intent Map (must align with R3 page order)

## Homepage intent stack (primary query classes)
- Transactional local: `auto repair littleton co`, `mechanic near me littleton`
- Symptom-led: `car making noise when braking`, `check engine light littleton`
- Trust/risk-led: `honest mechanic littleton`, `auto repair with warranty`

## Required section-to-intent mapping
1. Hero + primary CTA → local transactional intent
2. Evidence strip → trust validation intent
3. Symptom triage quickstart → symptom/urgency intent
4. Service grid → commercial investigation intent
5. Process + approval guardrail → upsell-risk objection intent
6. Final decision band + sticky rail → immediate action intent

If a section doesn’t map to a real query/objection, remove or compress it.

---

## 2) On-page SEO lock (R3 copy/design compatible)

## Global non-negotiables
- One H1 per page; heading hierarchy remains logical (`H2` sections, `H3` sub-blocks).
- Core trust facts remain text-rendered (never image-only):
  - 4.9★ rating + count context
  - Serving Littleton since 2009
  - ASE-certified technicians
  - 3yr/36k warranty
  - approval-first policy
- Primary local entity naming must be exact and repeated consistently:
  - **AutoTrek Service Center**
  - **Littleton, CO**

## Metadata alignment rule (final)
For each indexable URL, ensure semantic match across:
- Title
- Meta description
- H1
- Hero/subhero copy
- OG/Twitter descriptions

No thematic drift between “premium design copy” and rank-driving keyword intent.

---

## 3) Service-page decision architecture (P0 for conversion + AI retrieval)

Each `/services/[slug]` page must include these visible blocks (in this order):
1. What this service solves (plain-language promise)
2. Common Symptoms
3. Typical Causes
4. Can I Keep Driving? (safe / caution / stop)
5. Typical Time Window
6. Budget Range (banded, non-promissory)
7. Process + explicit approval guardrail
8. Next Best Step CTA (`Call Now`, `Quick Diagnosis`, or `Request Callback`)
9. Related services (2–4 intent-clustered links)

This is both conversion scaffolding and AI-answer scaffolding.

---

## 4) Schema package (final launch specification)

## A) Sitewide Organization/AutoRepair consistency
Use one canonical entity profile across JSON-LD and visible contact/footer:
- name, address, phone, URL, opening hours, area served.

## B) Homepage (`/`)
- `AutoRepair`
- `Organization` (or embedded provider identity)
- Optional `FAQPage` only if FAQ is visibly rendered

## C) Services hub (`/services`)
- `ItemList` for visible service cards in rendered order
- Optional `FAQPage` only if visible FAQ exists

## D) Service detail (`/services/[slug]`)
- `Service` schema per slug:
  - `name`, `serviceType`, `provider`, `areaServed`, `url`, `description`
- `BreadcrumbList`: Home → Services → Current Service
- Optional `FAQPage` for visible service FAQs

## Schema integrity rules
- Mark up only visible content.
- No synthetic ratings/reviews unless policy-verified and compliant.
- NAP values must match everywhere exactly.

---

## 5) Internal linking + cluster authority (final map)

## Minimum per service page
- 1 link back to `/services`
- 2–4 related service links in same intent family
- 1 strong conversion CTA adjacent to related links

## Cluster set (approved)
- `vehicle-maintenance` → `oil-fluid-changes`, `vehicle-diagnosis-repair`, `wheel-alignments`
- `brake-repair-service` → `vehicle-suspension-repair`, `wheel-alignments`, `vehicle-diagnosis-repair`
- `hybrid-repair` → `vehicle-diagnosis-repair`, `vehicle-maintenance`
- `european-auto-repair` → `vehicle-diagnosis-repair`, `brake-repair-service`, `vehicle-maintenance`
- `fleet-repair-service` → `vehicle-maintenance`, `vehicle-diagnosis-repair`, `oil-fluid-changes`

This improves crawl depth, topical association, and downstream AI citation confidence.

---

## 6) AI-search discoverability hardening (R3-specific)

To match Vanguard’s “decision engine” requirement, keep machine-extractable answer blocks near top/mid-page:

## Required micro-QA blocks per service page
- Is it safe to drive right now?
- What should I do next?
- How fast can this be diagnosed?
- What affects cost range?

## Formatting requirements
- 1–3 sentence answers
- bullets where possible
- no jargon unless immediately translated
- include local/entity anchor naturally (AutoTrek + Littleton)

This structure materially increases answer-engine retrieval quality without keyword stuffing.

---

## 7) Conversion-path integrity with R3 UI system

R3 design introduces rich visual depth; ensure conversion clarity survives:

- One primary filled CTA style per viewport.
- Sticky mobile action rail must persist across home + services + service detail.
- Ensure rail does not collide with footer/final CTA/keyboard.
- Minimum touch target 44px (preferred 56–64px per Muse spec).
- All CTA labels intent-led (`Call Now`, `Request Callback`, `Quick Diagnosis`, `Book Inspection`).

Avoid generic CTA drift (`Learn More`, `Contact Us`) on high-intent modules.

---

## 8) Local SEO trust-proof content requirements

Above-the-fold and first two scroll depths must contain verifiable proof text:
- Rating + review count context
- Warranty statement + exclusions link
- ASE credential with plain-language meaning
- At least one real repair outcome snippet (vehicle + issue + turnaround/result)

This is the bridge between conversion psychology and local ranking quality signals.

---

## 9) Final pre-launch QA gate (SEO + IA + AI)

- [ ] Only `/`, `/services`, `/services/[valid-slug]` indexable
- [ ] Invalid service slugs return true 404
- [ ] Canonicals self-referential and absolute on all indexable pages
- [ ] Sitemap includes only approved URLs
- [ ] Homepage schema validates (`AutoRepair` + entity consistency)
- [ ] Services hub has valid `ItemList`
- [ ] Service pages have valid `Service` + `BreadcrumbList` (+ FAQ only where visible)
- [ ] Service pages include all 6 decision-critical blocks
- [ ] Related-service links (2–4) exist and are intent-clustered
- [ ] Sticky mobile rail functions on home, services, and service detail templates
- [ ] Core trust proof is text-rendered and visible without interaction
- [ ] Title/H1/description/OG remain semantically aligned after final copy pass

---

## Final sign-off position

If Lens visual polish and Muse/Vanguard conversion mechanics ship **with** the structure above, AutoTrek will read as:
- premium and modern to humans,
- high-confidence and locally relevant to search engines,
- extractable and quotable to AI answer systems.

Without this structural lock, the experience may still look premium but underperform in discoverability and decision-speed conversion.