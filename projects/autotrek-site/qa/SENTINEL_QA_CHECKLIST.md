# SENTINEL QA CHECKLIST — AutoTrek Service Center

**Project:** AutoTrek Service Center website  
**Source brief:** `/Users/openclaw/.openclaw/workspace/projects/autotrek-site/BRIEF.md`  
**Prepared by:** Sentinel (Final Editor + QC)  
**Last updated:** 2026-03-10

---

## 0) QA Framework (How to use this)

**QA gates**
1. **Content QA** (brand/message accuracy)
2. **Technical QA** (SEO/accessibility/performance)
3. **Conversion QA** (local UX + CTA flow)
4. **Launch QA** (deployment, indexing, analytics, monitoring)

**Severity levels**
- **P0 (Blocker):** Legal/trust failure, broken conversion path, severe accessibility/performance failure, wrong business identity/contact data.
- **P1 (High):** Major SEO/indexing issue, inconsistent core brand treatment, significant UX friction.
- **P2 (Medium):** Quality polish, minor copy/meta issues, small UX/perf improvements.

**Definition of Ready for Launch**
- All **P0 = resolved**
- All **P1 = resolved or explicitly accepted**
- Key conversion path (homepage → service page → contact/call) tested successfully on mobile + desktop
- Core local SEO and schema validated

---

## 1) Brand Consistency QA Checklist

## 1.1 Business identity accuracy (P0)
- [ ] Shop name exactly: **AutoTrek Service Center**
- [ ] Phone exactly: **(303) 328-3356** (click-to-call on mobile)
- [ ] Address exactly: **8161 S Grant Way, Littleton, CO 80122**
- [ ] Hours exactly: **Monday–Friday, 9:00 AM–5:00 PM**
- [ ] Warranty statement exactly: **36 months / 36,000 miles**
- [ ] NAPA Service Center mention present and accurate
- [ ] Financing/coupons not falsely advertised (none currently)

## 1.2 Visual system and tone (P1)
- [ ] Style reads **clean + premium** (not cluttered/discount-heavy)
- [ ] Primary color usage reflects brief: **red, green, white**
- [ ] Contrast and color hierarchy are consistent across pages
- [ ] Logo from source file is crisp, proportionally correct, and not distorted
- [ ] Typography and spacing are consistent site-wide
- [ ] Image style consistent (quality, lighting, trust/professional shop vibe)

## 1.3 Messaging consistency (P1)
- [ ] Primary CTA language consistent: **Schedule an Appointment**
- [ ] Call-first fallback is present where booking destination is TBD
- [ ] Service value props are repeated consistently (quality, warranty, trusted local expertise)
- [ ] No conflicting promises (e.g., financing/specials if unavailable)

---

## 2) SEO QA Checklist (Technical + Local)

## 2.1 On-page SEO fundamentals (P1)
- [ ] Each indexable page has unique `<title>` and meta description
- [ ] One clear H1 per page
- [ ] Heading structure is logical (H1 → H2 → H3)
- [ ] URL slugs are clean, readable, service/location-aligned
- [ ] Canonical tags set correctly (no self-conflicts)
- [ ] Open Graph + Twitter meta tags present
- [ ] XML sitemap exists and includes canonical URLs
- [ ] robots.txt exists and does not block key pages

## 2.2 Service-page SEO coverage (P1)
- [ ] Priority service pages exist or are represented in a structured services architecture:
  - AC Service & Repair
  - Check Engine Light
  - EV & Hybrid Repair
  - Foreign Auto Repair
  - Minor Auto Service
  - Oil & Fluid Changes
  - Tires & Wheels
  - 4WD Light Inspection
  - Brake Repair & Service
  - Dealer Service Alternative
  - Factory Recommended Major Auto Service
  - Pre-Purchase Inspection
  - Steering & Suspension
  - Transmission Repair
  - 4X4 Auto Repair
  - Complete Auto Repair
  - Domestic Auto Repair
  - Fleet Repair & Service
  - Maintenance Lights
  - Preventative Maintenance
  - Timing Belt Repair
  - Wheel Alignment
- [ ] Internal links connect service pages logically
- [ ] No duplicate/thin service pages competing for identical intent

## 2.3 Local SEO (P0/P1)
- [ ] NAP (name/address/phone) is consistent across header/footer/contact page/schema
- [ ] Primary location intent included naturally: **Littleton, CO**
- [ ] Secondary areas integrated naturally where relevant:
  - Highlands Ranch, CO
  - Englewood, CO
  - Lakewood, CO
  - Centennial, CO
- [ ] LocalBusiness/AutoRepair schema implemented and valid
- [ ] Service schema and FAQ schema (if FAQs present) validated
- [ ] Embedded map (if present) points to correct address
- [ ] Reviews link present and functioning: https://share.google/aglkPp86GrLFRfT7V

## 2.4 Indexing & search console readiness (P1)
- [ ] Domain canonical preference set (www vs non-www)
- [ ] HTTPS forced, no mixed content
- [ ] 301 redirects configured for any old/alternate paths
- [ ] 404 page exists and offers clear recovery links
- [ ] Search Console + Bing Webmaster setup checklist prepared (if credentials pending)

---

## 3) Accessibility QA Checklist (WCAG 2.1 AA-oriented)

## 3.1 Core accessibility (P0)
- [ ] All actionable elements reachable by keyboard
- [ ] Visible focus states on links/buttons/inputs
- [ ] Color contrast meets AA (normal and large text)
- [ ] Images/logos/icons have meaningful alt text (or decorative null alt)
- [ ] Form fields have labels and associated error messaging
- [ ] Error messages are clear, specific, and announced when possible

## 3.2 Semantic and assistive tech support (P1)
- [ ] Landmark regions present (`header`, `nav`, `main`, `footer`)
- [ ] Skip link to main content exists
- [ ] Correct heading hierarchy and semantic HTML
- [ ] Link/button text is descriptive (no ambiguous “click here”)
- [ ] `lang` attribute set correctly
- [ ] ARIA only used where semantic HTML is insufficient

## 3.3 Motion/media/usability (P2)
- [ ] Motion effects are subtle and avoid distraction
- [ ] Any auto-rotating content can be paused/stopped
- [ ] Tap targets are mobile-friendly size/spacing

---

## 4) Performance QA Checklist

## 4.1 Core Web Vitals targets (P1)
- [ ] Mobile LCP target: **≤2.5s**
- [ ] Mobile CLS target: **≤0.10**
- [ ] Mobile INP target: **≤200ms**
- [ ] Desktop CWV also within good thresholds

## 4.2 Front-end optimization (P1)
- [ ] Images compressed and served modern formats where possible
- [ ] Proper image sizing with responsive `srcset`
- [ ] Critical above-the-fold assets prioritized
- [ ] Non-critical JS/CSS deferred/lazy-loaded
- [ ] Fonts optimized (subset/preload/swap strategy)
- [ ] No heavy third-party scripts without measurable benefit

## 4.3 Stability and resilience (P1)
- [ ] No console errors on key pages
- [ ] No broken links or missing assets
- [ ] Graceful fallback for failed form submission/API timeout

---

## 5) Local Conversion UX Checklist

## 5.1 Conversion path clarity (P0)
- [ ] Primary CTA (**Schedule an Appointment**) visible above fold on mobile + desktop
- [ ] Persistent click-to-call option visible on mobile
- [ ] Contact options clear: call + form + location/hours
- [ ] “Call-first” routing works while booking URL is TBD

## 5.2 Trust and decision support (P1)
- [ ] Warranty prominently visible in high-intent sections
- [ ] NAPA Service Center trust marker present
- [ ] Reviews/social proof link is prominent and functional
- [ ] Service coverage and expertise clearly explained (domestic/foreign/EV-hybrid etc.)

## 5.3 Form quality and lead handling (P0/P1)
- [ ] Required fields minimized for completion rate
- [ ] Phone/email validation works without being overly restrictive
- [ ] Success state provides clear “what happens next”
- [ ] Failure state provides recovery path + phone fallback
- [ ] Lead routing destination tested once available (currently TBD)

## 5.4 Local intent UX (P1)
- [ ] Copy references Littleton and nearby communities naturally
- [ ] Service area cues included without keyword stuffing
- [ ] Directions/location section easy to find and use

---

## 6) Pre-Launch Validation Checklist

## 6.1 Critical launch blockers (must-pass)
- [ ] Final domain/hosting configured and accessible
- [ ] SSL valid and auto-renewing
- [ ] Production environment variables set correctly
- [ ] Contact/lead destination tested end-to-end
- [ ] CTA destination(s) verified (call/book/form)
- [ ] No placeholder content left (email currently placeholder in brief)

## 6.2 Analytics + tracking (P1)
- [ ] GA4 installed and firing page_view events
- [ ] Conversion events defined (call click, form submit, appointment CTA)
- [ ] Google Tag Manager container QA’d (if used)
- [ ] Tracking IDs no longer TBD before launch

## 6.3 QA regression sweep (P1)
- [ ] Mobile testing (iOS Safari + Android Chrome)
- [ ] Desktop testing (Chrome + Safari + Edge)
- [ ] Key breakpoints tested (small/mobile/tablet/desktop/wide)
- [ ] Forms tested with valid + invalid + edge-case inputs
- [ ] Error pages tested (404/500 behavior)

## 6.4 SEO launch ops (P1)
- [ ] Sitemap submitted
- [ ] robots.txt validated in production
- [ ] Noindex removed from production pages
- [ ] Search appearance test run on homepage + top service pages

## 6.5 Post-launch monitoring (first 14 days)
- [ ] Daily check: uptime + form submissions + call click events
- [ ] Weekly check: Core Web Vitals + top landing pages
- [ ] Weekly check: index coverage + crawl anomalies
- [ ] Rapid-fix protocol for any conversion-impacting issue

---

## 7) Competitor Parity/Advantage Quick Audit (Optional but Recommended)

Use these benchmark sites for parity checks:
- Pro Auto Care — https://proauto1.com/
- Randy’s Auto Care — https://bestshopinlittleton.com/
- Rocky Mountain Eurosport Parker — https://www.rmeurosport.com/
- Hartman Automotive — https://hartmanautomotive.com/
- Hinsdale Automotive — https://hinsdaleauto.com/

Checklist:
- [ ] Compare CTA clarity and above-fold trust signals
- [ ] Compare service-page depth and scannability
- [ ] Compare local geo-targeted content quality
- [ ] Compare page speed and mobile UX
- [ ] Ensure AutoTrek differentiators are explicit (warranty, local trust, service breadth)

---

## 8) Open Items from Brief (Track-to-Close)

- [ ] Final stack preference (or AX chooses)
- [ ] Deadline target
- [ ] Booking URL (if not call-first)
- [ ] Destination email for lead form
- [ ] Domain/hosting access
- [ ] Replace placeholder email in all public-facing areas

---

## 9) Final Sentinel Sign-off Template

**Release candidate:** [URL / build id]  
**QA date:** [YYYY-MM-DD]  
**Reviewer:** Sentinel  

- Brand Consistency: Pass / Fail
- SEO: Pass / Fail
- Accessibility: Pass / Fail
- Performance: Pass / Fail
- Local Conversion UX: Pass / Fail
- Pre-Launch Validation: Pass / Fail

**Outstanding issues:**
1. [Issue] — Severity — Owner — ETA
2. [Issue] — Severity — Owner — ETA

**Go/No-Go Recommendation:** Go / No-Go  
**Notes:** [brief rationale]
