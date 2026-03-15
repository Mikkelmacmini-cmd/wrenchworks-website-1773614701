# Round 1 — AutoTrek Imagery Guardrails (Brand Intent + Accessibility)

Date: 2026-03-11  
Scope: Define image direction that reinforces **AutoTrek auto repair** intent only, while preventing off-brand visual drift and readability/accessibility regressions.

## Objective
Use imagery to answer one question fast: **"This is a trusted local auto repair shop where I can book service now."**

Images should support service trust, not look like SaaS/marketing agency content.

---

## 1) Image Intent Rules (AutoTrek-Only)

Use image content that clearly signals:
- Real vehicles in service context (inspection, lift bay, brake/suspension work, diagnostics)
- Real technicians, tools, and shop environments
- Customer handoff moments (advisor + vehicle, keys, check-in/check-out)
- Local credibility cues (clean bays, uniforms, ASE-style credibility context)

Avoid image content that implies non-automotive services:
- Laptops with dashboards as the primary subject
- Digital marketing motifs (SEO charts, social icons, ad dashboards)
- Corporate office stock scenes unrelated to repair work
- Abstract gradient/3D blobs as hero visuals without service context

**Rule:** If the image could belong on a marketing agency homepage, do not use it.

---

## 2) Off-Brand Visual Red Flags (Reject List)

Reject images that include:
1. SEO/analytics charts, ranking graphs, search bars, map-pin growth graphics
2. Generic startup-team boardroom scenes
3. Models in spotless office attire with no repair context
4. Unrealistic AI-looking mechanics or impossible tool/vehicle details
5. Overly dramatic cinematic effects that obscure service detail
6. Brand conflicts (visible competitor logos, wrong signage, non-auto context)

---

## 3) Recommended Shot Library by Page Section

### Hero (homepage/services)
- Preferred: technician performing diagnostic scan or inspecting vehicle in-bay
- Composition: subject left/right third, leave clean negative space for headline + CTA
- Mood: confident, practical, welcoming (not luxury showroom)

### Trust strip / why choose us
- Certifications, workmanship, clean bay process, parts/inspection detail
- Human faces should look real and local; avoid over-posed stock smiles

### Service category cards
- One image per service type with obvious visual match:
  - Brakes → brake assembly/inspection
  - Oil/fluids → fluid service at bay
  - Diagnostics → scan tool connected to vehicle
  - Suspension → undercarriage/suspension components

### Reviews / final CTA band
- Background should be calm and low-noise; do not reduce text readability
- Prefer subtle shop-context texture over busy action shots

---

## 4) Accessibility: Alt Text Standards

### Alt text principles
- Describe the **functional meaning** of the image in page context
- Keep concise (typically ~80–140 chars)
- Avoid keyword stuffing and "image of" phrasing
- If image is purely decorative, use empty alt (`alt=""`)

### Good alt examples (AutoTrek context)
- "AutoTrek technician performing a diagnostic scan on a sedan in the service bay."
- "Mechanic inspecting front brake components before recommending repair."
- "Customer receiving vehicle update from service advisor at AutoTrek front desk."
- "Vehicle on lift during suspension inspection at AutoTrek."

### Weak alt examples (avoid)
- "car repair" (too vague)
- "best auto repair near me cheap brakes oil change" (keyword spam)
- "image of mechanic" (non-informative)

---

## 5) Overlay & Contrast Guidance for Text on Images

When text appears over photography, enforce these minimums:

1. Add a dark overlay scrim behind text area:
   - default: `rgba(15, 23, 42, 0.60)`
   - increase to `0.68–0.75` on bright/high-variance photos
2. Maintain WCAG contrast:
   - body/small text: **4.5:1 minimum**
   - large text: **3:1 minimum**
3. Do not place critical copy over high-detail zones (grilles, tools, reflections)
4. Use text shadow only as secondary support, not as primary contrast method
5. Re-check contrast at mobile breakpoints where crop changes can expose bright areas

**Safe pattern:** place headline/CTA on a bounded gradient panel or consistent darkened region, not raw photo detail.

---

## 6) Image QA Checklist (Pre-Publish)

- [ ] Every hero/service image clearly communicates auto repair intent
- [ ] No SEO/agency/corporate-office visual motifs
- [ ] No misleading or AI-artifact-heavy imagery
- [ ] Alt text present and contextual for all informative images
- [ ] Decorative images use empty alt
- [ ] Text-over-image contrast passes minimum targets on desktop + mobile
- [ ] CTA remains visually dominant over image treatment

---

## 7) Expected Outcome

- Stronger first-impression clarity: "AutoTrek fixes vehicles"
- Lower off-brand confusion and tighter service intent for SEO + conversion
- Better readability/accessibility on image-driven sections
- More trustworthy, local, practical brand presentation across the site
