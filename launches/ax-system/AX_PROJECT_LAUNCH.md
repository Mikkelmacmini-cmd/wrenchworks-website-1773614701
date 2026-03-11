# AX Project Launch Instructions

## 1) Provide project input
Use this template:

Business Name: ...
City: ...
State: ...
Nearby Cities: [...]
Primary Services: [...]
Unique Selling Points: [...]
Brand Tone: ...
Any Must-Have Offers/Guarantees: ...

## 2) Start AX orchestration run
From MJ, spawn AX with the full project input and this directive:

"Run sequential workflow only: Atlas -> Muse -> Forge -> Quill -> Lens -> Pulse -> Sentinel.
Use GPT-5 mini for all stages except Sentinel on GPT-5.4.
Sentinel is final QA only (no research/drafting)."

## 3) Stage outputs to collect
- Atlas: sitemap, clusters, briefs
- Muse: visual system and layout rules
- Forge: page skeletons and placeholders
- Quill: page drafts + metadata + FAQs
- Lens: image plan + alt text + prompts
- Pulse: interaction spec
- Sentinel: final QA edits + link/local relevance checks

## 4) Acceptance checklist
- Service pages meet length target (1200–1600)
- Supporting pages meet length target (800–1200)
- Blogs meet length target (900–1200)
- Internal linking aligns with Atlas plan
- Local references present and natural
- Copy avoids generic AI phrasing
- Conversion CTAs are clear and specific

## 5) Regeneration policy
Only rerun failed stages. Do not rerun completed stages unless dependencies changed.
