# Service Page Template — Modular (placeholder copy)

<!--
Reusable page template for service routes. Drop-in copy later.
Sections (order can be re-arranged):
- hero
- outcomes
- deliverables
- process
- pricing-teaser
- faq
- cta

Placeholder schema keys included as YAML frontmatter for easy ingestion.
-->

---
title: "{{ service_name }}"
route: "{{ route }}"
meta_description: "{{ meta_description }}"
schema:
  @context: "https://schema.org"
  @type: "Service"
  name: "{{ service_name }}"
  description: "{{ short_description }}"
  provider:
    @type: "Organization"
    name: "{{ provider_name }}"
  serviceType: "{{ service_type }}"
  areaServed: "{{ area_served }}"
  offers:
    - @type: "Offer"
      name: "{{ offer_name }}"
      price: "{{ price }}"
      priceCurrency: "{{ currency }}"
---

<!-- HERO -->
# {{ hero_headline }}

{{ hero_subhead }}

[Primary CTA]({{ cta_url }}) — {{ cta_text }}

---

<!-- OUTCOMES -->
## Outcomes
- {{ outcome_1 }}
- {{ outcome_2 }}
- {{ outcome_3 }}

---

<!-- DELIVERABLES -->
## Deliverables
- {{ deliverable_1 }} — brief note
- {{ deliverable_2 }} — brief note
- {{ deliverable_3 }} — brief note

---

<!-- PROCESS (modular steps) -->
## Our Process
1. Discover — {{ process_step_1 }}
2. Design/Plan — {{ process_step_2 }}
3. Build/Implement — {{ process_step_3 }}
4. QA & Launch — {{ process_step_4 }}
5. Iterate & Support — {{ process_step_5 }}

Each step can expand into a reusable partial with timeline, owner, and artifacts.

---

<!-- PRICING TEASER -->
## Pricing (Teaser)
- Starter: {{ pricing_starter }} — brief
- Growth: {{ pricing_growth }} — brief
- Enterprise: {{ pricing_enterprise }} — brief

[Request full pricing]({{ pricing_cta_url }})

---

<!-- FAQ -->
## FAQ
- Q: {{ faq_q1 }}
  A: {{ faq_a1 }}
- Q: {{ faq_q2 }}
  A: {{ faq_a2 }}

---

<!-- CTA / FOOTER -->
## Ready to get started?
[Contact us]({{ cta_url }}) — {{ cta_text }}


<!-- Notes:
- Keep each section as an importable partial (hero.md, outcomes.md, etc.)
- Populate frontmatter fields from CMS or static site generator template variables.
-->