# Refresh R1/3 — Atlas SEO + IA Refinement (Local SEO + AI-Search Discoverability)

Date: 2026-03-11  
Owner: Atlas  
Goal: Ensure the refreshed visual/layout direction improves **rankability + retrieval** (Google local + AI answers) while preserving one clear conversion intent.

---

## 1) Executive Direction (What matters in this round)

The refresh should not only “look premium”; it must strengthen:

1. **Local intent clarity** (Littleton + nearby city relevance)
2. **Service-topic depth** (diagnostics, brakes, suspension, etc.)
3. **Entity trust signals** (AutoTrek as a real local business)
4. **Machine-readable structure** (schema + clean IA + metadata)
5. **Conversion continuity** (same action path across all entry pages)

If we execute these together, the site performs better in both classic SEO and AI-generated answer surfaces.

---

## 2) IA Blueprint for Local + Service Intent

## Recommended route hierarchy (kept tight)
- `/` (homepage: broad local + trust + triage)
- `/services` (hub)
- `/services/[slug]` (core service detail pages)
- `/locations` (service area hub)
- `/locations/[city]` (city intent pages with local proof)
- `/about` (credibility, team, standards)
- `/contact` (NAP + map + hours + call intent)
- `/faq` (site-level practical Q&A)

## IA rules
- One page = one primary intent.
- Service pages target **service intent** first; city pages target **location intent** first.
- Avoid mixed “service + city + promo” pages that become thin/ambiguous.
- Every indexable page must have a unique role in the route map (no duplicates/cannibal pages).

---

## 3) On-Page SEO Requirements by Template

## Homepage (`/`)
Purpose: broad “auto repair in Littleton” + trust + immediate action.

Must include:
- H1 with local service concept (Auto Repair + Littleton)
- Early trust proof strip (rating, years, warranty, ASE)
- Symptom-first jump links to top services
- Internal links to service hub + top service pages + location hub
- `LocalBusiness`/`AutoRepair` schema + organization consistency

## Services hub (`/services`)
Purpose: topical authority hub.

Must include:
- Intro paragraph that defines service scope clearly
- Service cards with unique summaries (not duplicated one-liners)
- Intent clusters (diagnostic, maintenance, drivability, specialty)
- Links to each service detail page
- Short FAQ block + `ItemList`/`FAQPage` schema (if visible content exists)

## Service detail pages (`/services/[slug]`)
Purpose: rank for high-intent service terms.

Must include:
- Exact-match service H1 + local modifier in body copy
- Problem-aware sections: symptoms, likely causes, process, urgency
- “What to do next” CTA in every key section
- Service-specific FAQ (3–6 real questions)
- Related-service links (intent-near, not random)
- Optional city links for top nearby markets (limited, relevant only)

## City pages (`/locations/[city]`)
Purpose: capture “near me / in [city]” demand without doorway spam.

Must include:
- City-specific intro with realistic travel/service context
- Unique local proof (customer quotes, route context, nearby landmarks, fleet presence, etc.)
- Same core trust stack + conversion CTA
- Links to top relevant service pages

Avoid:
- Boilerplate clone pages with only city token swaps
- Thin pages with no unique local value

---

## 4) Metadata System (Deterministic Patterns)

## Title patterns
- Home: `Auto Repair in Littleton, CO | AutoTrek Service Center`
- Services hub: `Auto Repair Services in Littleton, CO | AutoTrek Service Center`
- Service page: `{Service} in Littleton, CO | AutoTrek Service Center`
- City page: `Auto Repair in {City}, CO | AutoTrek Service Center`

## Description principles
- 140–160 chars
- Mention service/problem + local area + trust marker + action
- Avoid generic claims without specifics

## Canonical rules
- Self-canonical for all valid indexable pages
- Invalid/unknown dynamic pages should 404 (no soft-200)
- No canonical chains; no canonical to non-equivalent intent pages

---

## 5) Schema Opportunities (R1 priority set)

Use only schema that matches visible on-page content.

## Must implement
1. **AutoRepair / LocalBusiness**
   - name, address, phone, areaServed, openingHours, geo, sameAs
2. **WebSite + SearchAction**
   - if internal search exists
3. **BreadcrumbList**
   - for service and city detail pages
4. **Service**
   - on each service detail page (serviceType, provider, areaServed)

## Conditional (if visible content exists)
5. **FAQPage**
   - only for real on-page FAQs
6. **Review/AggregateRating**
   - only if policy-compliant and directly supported by visible proof

## Schema governance rules
- Keep NAP and business entity fields perfectly consistent sitewide.
- Never publish hidden/unsupported schema claims.
- Validate via Rich Results Test + schema validator before release.

---

## 6) Internal Linking Graph (Conversion + Topical Authority)

## Core linking model
- Home → Services hub + top 6 service pages + locations hub
- Services hub → all service pages + contact CTA
- Service pages → related services (2–4), relevant city hub links, contact
- City pages → top local services + contact + directions
- FAQ answers → deep-link to best matching service page

## Linking rules
- Anchor text should be descriptive and intent-based (not “click here”).
- Keep link clusters tight by topic; avoid sitewide random cross-links.
- Every page should have a clear “next best action” internal path.

---

## 7) AI-Search Discoverability (LLM Retrieval Readiness)

To increase inclusion in AI answers, pages should be easy to extract as reliable snippets.

## Content formatting for retrieval
- Use explicit Q/A subheads for common repair intents
- Keep definitions and process explanations concise and factual
- Place key facts near top (warranty, ASE, years, service area)
- Add scannable lists for symptoms, causes, timelines, next steps

## Entity reinforcement
- Repeat business identity consistently: AutoTrek Service Center, Littleton, CO
- Align About/Contact/Schema/GBP details
- Use consistent service naming (no frequent synonym drift in nav/H1/metadata)

## E-E-A-T signals to strengthen
- Technician credentials
- Process transparency (approval-before-repair)
- Warranty details
- Real local testimonials/case examples

---

## 8) Conversion Intent Safeguards (SEO should support, not dilute)

- Keep one dominant CTA language across templates.
- Avoid introducing SEO-only side paths that compete with conversion.
- Place trust proof at hesitation points (post-hero, pre-final CTA, service decision zones).
- Ensure all informational blocks end with a relevant action path.

---

## 9) R1 Implementation Priority (Practical sequence)

1. Lock template metadata patterns + canonical behavior.
2. Finalize IA route map (service vs city intent separation).
3. Add required schema baseline (AutoRepair, Breadcrumb, Service).
4. Implement internal linking graph rules in templates/components.
5. Refactor key sections for AI-readable Q/A + scannable fact formatting.
6. QA for 404 handling, sitemap cleanliness, and noindex discipline.

---

## 10) Acceptance Criteria (Round 1)

- [ ] Every indexable route has unique intent, unique metadata, and self-canonical.
- [ ] Unknown dynamic slugs return real 404 (no soft-200).
- [ ] Service and city pages follow distinct templates with non-duplicate purpose.
- [ ] Required schema is valid and consistent with visible content.
- [ ] Internal links follow intent clusters and support one clear conversion path.
- [ ] Key pages include extractable Q/A or list-format fact blocks for AI retrieval.

If these are true, the refreshed design will be not just visually modern, but structurally stronger for **local rankings, AI answer visibility, and conversion quality**.