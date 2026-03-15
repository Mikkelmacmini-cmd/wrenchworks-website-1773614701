# AutoTrek Team Lessons Log

## Sentinel findings to prevent recurrence (2026-03-10)
1. No off-brand/unintended routes may remain indexable in production.
2. Every route must have intentional metadata or be explicitly noindex/redirected.
3. Never ship pages with text/background contrast failures.
4. One site = one conversion intent; remove conflicting CTAs/offers.
5. QA gate before launch must include SEO, accessibility, link integrity, and conversion coherence.

## Required checklist before each pass
- [ ] Route inventory reviewed for off-brand pages
- [ ] Metadata/canonical/robots reviewed for each live route
- [ ] Contrast/accessibility quick checks on all live templates
- [ ] CTA alignment check (single business goal)
- [ ] Build passes cleanly

## What we learned (Round 1 — Interaction Accessibility)
1. Interaction specs must define full state matrices (rest/hover/focus-visible/active/disabled), not just hover polish.
2. Focus-visible parity is the fastest way to prevent keyboard accessibility regressions during visual iteration.
3. Reduced-motion should remove movement, not meaning; keep contrast/border/ring state changes intact.
4. Non-interactive cards should not mimic interactive hover behavior, or users lose confidence in click targets.
5. Contrast safety must be validated across every state, not only default/rest components.

## What we learned (Round 1 — Quill, 2026-03-11)
1. "Good" conversion copy can still underperform if it offers multiple next steps; one explicit action wins.
2. Repeating the same phone CTA in every section reduces decision fatigue and improves intent clarity.
3. Supportive links (reviews, directions, services) should follow the primary conversion path, not compete with it in primary buttons.
4. Trust proof (warranty, ASE, years in business) works best when immediately paired with a direct call ask.
5. City/SEO copy should still end in the same core conversion action to preserve funnel coherence sitewide.

## What we learned (Round 1 implementation)
- Deleting invalid/off-brand route files is often safer and faster than temporary noindex patches when those pages should not exist at all.
- Removing conflicting conversion pages fixes multiple critical classes at once (SEO intent, CTA clarity, and accessibility regressions).
- A quick grep pass for known bad CTA strings/slugs after code changes is an effective regression check before running the build.

## What we learned (Round 1 — Atlas, 2026-03-11)
1. Route-level ownership must be explicit: every URL is either intentionally indexable or intentionally retired.
2. robots.txt is not a deindex tool by itself; off-brand URLs need page-level `noindex` and preferably a redirect/410.
3. Dynamic slug routes must return real 404s for unknown slugs; “not found” content with HTTP 200 creates index pollution.
4. Sitemaps should be generated from a curated business data source (featuredServices), never raw file-system routes.
5. For SEO-safe cleanup, use two-step remediation: contain immediately (noindex+redirect), then delete and keep legacy redirects for ~90 days.

## What we learned (Round 1 — Visual Hierarchy)
1. Conversion drops when multiple sections and CTAs share equal visual weight; hierarchy must be intentional, not uniform.
2. Readability failures are often design-system failures: without contrast-safe tokens, teams drift into low-contrast combinations.
3. Trust proof works best as an early, compact strip (warranty, years, certifications, rating/count), not scattered across distant sections.
4. Decorative styling can silently hurt conversion by competing with primary actions; secondary UI must stay visually subordinate.
5. Safer defaults (16px+ body text, stable surfaces, overlay standards on imagery) prevent avoidable accessibility regressions.

## Round 2 learnings (Quill, 2026-03-11)
1. Conversion intent stays clean only when every section closes with the same verb and channel ("Call" by phone), not mixed action language.
2. Trust proof performs better when phrased as verifiable facts (ASE certification, exact warranty terms, years in service) instead of generic quality claims.
3. Problem-aware copy (warning lights, brake symptoms, unusual noises) increases urgency without hype when paired with immediate phone action.
4. Secondary links can remain for UX/SEO, but they must be text-level and visually subordinate so they never compete with the call CTA.
5. Consistent phone-number formatting across all modules reduces friction and avoids micro-confusion at the moment of conversion.

## What we learned (Round 1 — Lens, 2026-03-11)
1. Service-intent imagery is a conversion filter: if visuals look like SaaS/agency content, users hesitate and intent clarity drops.
2. A strict reject list (SEO dashboards, office stock scenes, AI-artifact-heavy photos) prevents subtle off-brand drift during rapid content updates.
3. Alt text performs best when it describes page-relevant action/outcome, not generic objects or stuffed keywords.
4. Text-over-image accessibility requires explicit overlay standards; raw photography without scrims is a frequent source of contrast failure.
5. Contrast must be validated after responsive crops, since mobile framing can invalidate otherwise safe desktop overlays.

## Round 2 learnings (Forge, 2026-03-11)
1. Dynamic slug pages must enforce strict route boundaries (`dynamicParams = false`) and return framework-level 404s (`notFound()`), not custom 200 “not found” templates.
2. Off-brand URL cleanup is strongest when layered: delete route files, add legacy redirects, and keep robots disallow entries as belt-and-suspenders containment.
3. CTA consistency is easier to preserve when every high-visibility button routes to one conversion action (phone scheduling) and all other links are explicitly secondary/supportive.
4. Image-overlay contrast should be treated as content-dependent, not static: stronger overlays are often required to keep white text accessible across mixed photography.
5. Global accessibility guardrails (focus-visible + reduced-motion defaults) prevent regressions better than page-by-page one-off fixes.

## Round 2 learnings (Visual hierarchy refinement, 2026-03-11)
1. Conversion clarity improves when hierarchy is treated as a strict priority ladder (CTA → promise → trust → details), not a loose style preference.
2. Spacing consistency is a trust signal: abrupt density shifts make pages feel less credible even when copy is strong.
3. Typography scale discipline (fewer sizes, clearer weights) increases scan speed and reduces decision friction on mobile.
4. Trust markers perform best at hesitation points (immediately after CTA, before pricing/process, and near final ask), not scattered uniformly.
5. Accessibility-safe contrast must be enforced on state changes and image overlays, not just static default text colors.

## Round 2 learnings (Atlas, 2026-03-11)
1. Route cleanup is incomplete until invalid dynamic slugs return true 404s; deleting bad static pages alone does not eliminate index pollution.
2. Soft-404 templates with HTTP 200 are one of the fastest ways to reintroduce unintended indexing after a cleanup pass.
3. A strict index map (indexable vs retired vs unknown) should be treated as a governed artifact, not an implicit coding assumption.
4. Service↔service internal links should follow intent clusters, not random cross-linking, to strengthen topical relevance and UX.
5. City SEO should launch from template governance first (uniqueness thresholds, canonical rules, local proof requirements) to avoid doorway-page drift.

## Round 2 learnings (Interaction States — Accessibility + Conversion Intent)
1. Accessibility state quality directly impacts conversion confidence: unclear focus/active states increase hesitation before key actions.
2. Primary CTA dominance must survive every interaction state; if secondary elements become equally loud on hover/focus, funnel clarity drops.
3. Component state copy is part of brand governance: even transient labels/tooltips can reintroduce off-intent (non-AutoTrek) messaging.
4. Interactive consistency is strongest when state behavior is class-driven (shared tokens/utilities), not hand-tuned per section.
5. Reduced-motion compliance should preserve decision signals (ring, contrast, border) so accessibility support does not weaken conversion guidance.

## Round 3 learnings (Atlas, 2026-03-11)
1. SEO cleanup is only "done" when route behavior, metadata policy, sitemap inclusion, and redirect aging are governed together as one system.
2. True 404 handling for unknown dynamic slugs is the most important long-term defense against index pollution regressions.
3. Canonical strategy must be deterministic per route class (home, hub, service detail, invalid slug), not decided ad hoc in component code.
4. Internal linking performs best when constrained by intent clusters; random cross-linking weakens topical focus and user decision flow.
5. Structured data should expand with visible content depth (Service + FAQ + LocalBusiness consistency), but never outrun what users can actually see on-page.

## Round 3 learnings (Final design direction, 2026-03-11)
1. Conversion flow is strongest when page order is enforced as a single path: problem → promise → CTA → trust → details → final CTA.
2. Readability is a conversion feature: shorter paragraphs, tighter question-focused sections, and consistent line length reduce hesitation.
3. Hierarchy should be treated as a locked tier system where only one visual layer (primary CTA) carries maximum emphasis at any time.
4. Trust placement matters more than trust volume; compact factual proof at hesitation points outperforms scattered badge-heavy layouts.
5. Accessibility guardrails must be integrated into visual QA (especially image overlays and interaction states) to prevent late-stage readability regressions.

## Round 3 learnings (Quill, 2026-03-11)
1. Conversion friction often comes from language variance, not just visual design; standardizing the exact CTA phrase in every section improves action clarity.
2. Trust proof is most persuasive when placed immediately after problem framing, so users get reassurance before deciding whether to call.
3. “Helpful” alternative actions (directions, reviews, service browsing) can remain for UX, but only as subordinate text links to preserve one-intent flow.
4. Local credibility copy performs best when grounded in specific facts (since 2009, ASE-certified team, warranty terms) rather than broad quality claims.
5. A final copy compliance pass should explicitly check phone-format consistency and section-ending CTA consistency to catch subtle conversion leaks.

## Round 2 learnings (Lens — Imagery Conversion Clarity, 2026-03-11)
1. High-performing service imagery acts as evidence (real diagnostics, inspections, advisor handoff), not decoration; this shortens trust time-to-action.
2. One-to-one image-to-service matching reduces cognitive friction and prevents users from questioning whether the shop actually does the named work.
3. Visual governance must explicitly block agency/SaaS motifs and AI-artifact photos, or off-intent drift returns during fast content refreshes.
4. Alt text quality affects both accessibility and trust: concise action/outcome descriptions outperform vague labels and keyword-heavy phrasing.
5. Text-over-image readability needs enforced overlay tokens plus mobile crop validation, because contrast failures frequently appear only at smaller breakpoints.

## Round 3 learnings (Forge, 2026-03-11)
1. Off-brand cleanup is most durable when handled as a stack: delete route files, keep permanent redirects, and retain robots disallow entries during deindex stabilization.
2. CTA consistency requires phrase governance, not just visual consistency—small wording drift (“Call Now”, “Call to Book”) creates avoidable intent fragmentation.
3. Dynamic slug hardening (`dynamicParams = false` + `notFound()`) is essential to prevent accidental expansion of indexable URLs beyond approved service inventory.
4. Last-mile content QA should explicitly remove agency/marketing narrative blocks from local-service pages, even when technically SEO-friendly.
5. The cleanest release gate is route-table based: if the production build only emits approved routes, SEO and brand-scope regressions are easier to catch before launch.

## Round 3 learnings (Lens — Final imagery + accessibility pass, 2026-03-11)
1. Even when image subjects are on-brand, repetitive assets across many services can dilute proof; alt-text specificity helps preserve service-level intent until image variety improves.
2. Title-only alt text on service cards/detail heroes is a common late-stage regression and should be blocked by a final accessibility QA gate.
3. Overlay safety must be tokenized (base + high-variance fallback) because one fixed opacity rarely survives all mobile crops and image brightness extremes.
4. Trust chips and phone CTAs on hero imagery require placement inside the highest-contrast zone, not just globally darkened backgrounds.
5. Visual intent can drift through adjacent module framing (e.g., marketing-language blocks near service modules), even without off-brand photos; layout context matters as much as image choice.

## Round 3 learnings (Pulse — Interaction/Motion final pass, 2026-03-11)
1. Conversion hierarchy has to survive interaction states; if secondary controls become equally loud on hover/focus, primary intent weakens.
2. Accessibility parity is a state-design rule, not a QA afterthought: every hover signal must have an equally clear focus-visible equivalent.
3. Reduced-motion support should remove transforms while preserving decision cues (ring, border, underline, contrast), or usability drops for motion-sensitive users.
4. Contrast regressions often appear in transient states (hover/active/disabled), so state-by-state validation is required instead of rest-state-only checks.
5. Final interaction polish should prioritize clarity over flair: subtle feedback improves confidence, while decorative motion can distract at the decision moment.
