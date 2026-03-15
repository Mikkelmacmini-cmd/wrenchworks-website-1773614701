# Overnight SEO + IA Lock (Concepts A/B/C)

Objective: preserve local search visibility **and** AI-answer discoverability regardless of visual direction, while giving a clear recommendation for production lock.

---

## Executive Decision

**Recommended direction to lock:** **Concept B (Service-First Decision Engine)**

Why B wins:
- Strongest match to high-intent local queries (service + city + urgency modifiers).
- Cleanest crawl path from homepage → services hub → service detail → city evidence.
- Best extractability for AI search systems (clear entity blocks, short answer-ready sections, explicit trust proofs).
- Lowest risk of design-led SEO regression because structure is modular and template-governed.

Concept A is viable but more brand-heavy (slower intent resolution). Concept C can convert well for paid/social traffic but risks thinner organic breadth unless content depth is expanded significantly.

---

## Non-Negotiable SEO/IA Guardrails (Apply to A/B/C)

1. **Single source-of-truth route policy**
   - Indexable: `/`, `/services`, `/services/[slug]`, approved local pages only.
   - Hard 404 unknown slugs/params.
   - Canonical self-referencing on indexable pages.

2. **Intent-first page anatomy (all templates)**
   - H1 states service + location intent clearly.
   - First viewport answers: what you do, where, turnaround, CTA.
   - No decorative sections above core decision info.

3. **Internal link graph discipline**
   - Homepage links to service hub + priority service pages.
   - Service pages cross-link to 2–4 related services + relevant local pages.
   - Footer links remain utility/trust; avoid dilution links.

4. **Entity consistency everywhere**
   - Business name, phone, address/service area, hours, and brand wording are identical in metadata, schema, and visible copy.

5. **AI-retrieval formatting standard**
   - Use short, factual answer blocks under question-style subheads.
   - Add “When you need X / symptoms / what to do next” blocks.
   - Keep process, pricing factors, and service-area notes explicit and scannable.

---

## Concept-by-Concept Lock

## Concept A — Brand Narrative First

**Profile:** premium trust story with strong visual identity, then service depth.

### SEO/IA Strengths
- Strong E-E-A-T signaling if credentials, warranty, and proof are foregrounded.
- Good branded query growth and direct-return behavior.

### Risks
- Can delay intent resolution for non-branded organic users.
- Greater chance that high-value service keywords get pushed below fold.

### Lock Requirements
- Above-fold module must include service-category links + immediate call CTA.
- Keep brand storytelling below first decision block.
- Ensure each narrative section maps to a search intent (not just aesthetics).

### Metadata Pattern
- Homepage title: `Auto Repair in [Primary City] | Full Bay Media`
- Description formula: service scope + trust proof + action.

### Schema Notes
- `AutoRepair` (homepage), `Organization`, `WebSite` (+ SearchAction if internal search exists), `BreadcrumbList`.
- On narrative-heavy sections, include visible FAQ only where real Q&A exists.

---

## Concept B — Service-First Decision Engine (**Recommended**)

**Profile:** operational clarity first; trust proof integrated into service decision flow.

### SEO/IA Strengths
- Best alignment to transactional local queries.
- Highest semantic clarity for both classic ranking systems and LLM summarization.
- Natural scaling model for additional services/cities.

### Risks
- Can feel utilitarian if not balanced with brand warmth.

### Lock Requirements
- Homepage = triage + top services + trust/evidence + location coverage + CTA.
- `/services` hub uses concise service cards with outcome-focused intros.
- Service detail template standardized: symptoms → solution → process → proof → FAQs → CTA.

### Metadata Pattern
- Service title: `[Service] in [City] | Full Bay Media`
- Service description: issue signals + turnaround/value + CTA.
- City/service pages: unique intros (avoid near-duplicate locality text).

### Schema Notes
- Global: `Organization`, `AutoRepair`, `WebSite`.
- Services hub: `ItemList` for service ordering.
- Service detail: `Service` + `BreadcrumbList` (+ `FAQPage` only if visible FAQs).
- If location pages are enabled: `LocalBusiness/AutoRepair` with valid service area.

---

## Concept C — Conversion Minimalist (Fast Funnel)

**Profile:** aggressive CTA flow with reduced informational depth.

### SEO/IA Strengths
- Strong on immediate lead capture for warm traffic.
- Excellent UX speed and low cognitive load.

### Risks
- Lower long-tail discoverability if informational scaffolding is too thin.
- AI systems may have insufficient context for robust recommendations.

### Lock Requirements
- Add minimum content depth modules: service differentiation, trust proof, short FAQs.
- Keep at least one structured answer block per service intent.
- Ensure internal links still expose complete service taxonomy.

### Metadata Pattern
- Tight, direct titles/descriptions; no generic “best/affordable” stuffing.

### Schema Notes
- Same baseline as B, but must not omit `Service` detail completeness.
- Avoid thin-page schema inflation (only mark up content actually present).

---

## IA Blueprint (Final, regardless of chosen concept)

- `/` → Primary intent capture + trust + top service links.
- `/services` → Full service taxonomy + intent summaries.
- `/services/[slug]` → Decision template + related services.
- `/locations/[city]` (only if governed) → local proof + mapped services.
- `/contact` (optional low-index priority) supports conversion, not discovery.

**Do not introduce orphan pages.** Every indexable URL must have at least one contextual inlink from an authoritative page.

---

## AI-Search Discoverability Lock

For each service page, include:
1. **Direct definition** (“What is [service] and when do you need it?”)
2. **Symptoms checklist**
3. **Process summary (3–5 steps)**
4. **Pricing factors (not fake fixed prices)**
5. **Local relevance statement** (where service is delivered)
6. **Proof elements** (reviews, warranty, certifications, before/after)
7. **Clear next action**

This structure increases citation likelihood in LLM-generated local recommendations.

---

## Selected Direction Readiness (Concept B)

Status: **Ready to lock**, contingent on metadata/schema completion below.

### Must-Ship Metadata Checklist
- Unique title/description for homepage, services hub, each service page.
- OG/Twitter image per template (non-generic; branded and service-relevant).
- Canonical tags on all indexable pages.
- Robots policy excludes thin/utility routes from indexing.

### Must-Ship Schema Checklist
- Homepage: `AutoRepair` + `Organization`.
- Services hub: `ItemList` representing visible card order.
- Service pages: `Service` + `BreadcrumbList` (+ `FAQPage` if visible FAQ section exists).
- Consistent `@id` references between organization and page-level entities.

### QA Gate Before Publish
- Validate JSON-LD in Rich Results Test / Schema validator.
- Confirm no duplicate titles/descriptions across service templates.
- Crawl internal links for orphan/loop issues.
- Check unknown dynamic slugs return true 404.

---

## Final Recommendation

Lock **Concept B** as the production IA/SEO base.
- Keep Concept A’s premium visual tone as a layer on B’s structure.
- Use Concept C’s speed discipline for mobile performance and CTA clarity.

In short: **B for structure, A for brand, C for speed** — with B as the canonical architecture for local SEO + AI-search durability.
