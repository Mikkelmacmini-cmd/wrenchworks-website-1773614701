# WrenchWorks Prompt Pack — Polished Final Pass (GPT-5.3)

Scope polished:
- Hero rows: WW-001 to WW-006
- Service-header rows: WW-017 to WW-024

What changed:
- Tightened wording for generation reliability (subject, action, environment, lens/style cues)
- Added crop-safe composition guidance for responsive web use
- Added explicit negative constraints to reduce common image-model artifacts
- Produced two generation-ready variants (A/B) per scene for selection testing

Primary output:
- `hero_service_headers_polished.csv`

Suggested generation workflow:
1. Generate 4 images per variant (A/B)
2. Shortlist top 2 by realism + trust signal + crop survivability
3. QA at 1920x700, 1536x512, 1080x1350
4. Keep final selection with clean headline space and intact subject/action in mobile crop
