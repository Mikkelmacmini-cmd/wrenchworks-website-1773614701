# WrenchWorks Visual Prompt Pack (Final)

Generated: 2026-03-14
Owner: lens subagent

## Deliverables
- `wrenchworks_visual_prompt_pack.csv` — 30 generation-ready prompts with alt text, captions, and recommended crops.

## Coverage (priority-first)
- Hero imagery: 6
- Consultation imagery: 5
- Top-down/flat-lay imagery: 5
- Service headers: 8
- Team imagery: 3
- FAQ imagery: 3

Total prompts: **30**

## Prompt standards used
- Photorealistic, trustworthy local-service tone
- Clean jobsite, safety-forward, no visible competitor logos
- Realistic residential/commercial contexts
- Clear subject + action + environment + lighting style

## Suggested generation settings
- Model style: photoreal / commercial editorial
- Guidance: medium-high adherence
- Negative constraints: avoid cartoon look, avoid overdramatic flooding, avoid extra fingers, avoid cluttered backgrounds, avoid illegible text artifacts
- Batch recommendation: generate 4 variants per prompt and pick top 1–2

## QA pass notes
- Checked for:
  - Distinct scene intent per prompt
  - Non-duplicative composition across categories
  - Accessible alt text
  - Conversion-oriented captions
  - Multi-surface crop utility

## Quick next step
- Import CSV into your generation pipeline, run hero + service-header rows first (WW-001 to WW-024) for homepage and service page launch assets.
