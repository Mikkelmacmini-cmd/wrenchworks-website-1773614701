# AX Marketing Website Production System

## Architecture
- **MJ (existing agent):** unchanged. Remains your current OpenClaw agent.
- **AX (new orchestrator):** runs the automotive marketing website workflow.
- **Execution mode:** sequential only (no parallel fan-out) to keep Mac mini load stable.

## Model policy
- AX: `openai/gpt-5-mini`
- Atlas / Muse / Forge / Quill / Lens / Pulse: `openai/gpt-5-mini`
- Sentinel: `openai/gpt-5.4` (**final QA only**)

## Sub-agent roles
1. **Atlas** — SEO Strategy Architect
2. **Muse** — Design Director
3. **Forge** — Site Builder
4. **Quill** — SEO Content Writer
5. **Lens** — Visual / Imagery Curator
6. **Pulse** — UI / Motion Interaction Designer
7. **Sentinel** — Final Editor and Quality Control

## Required sequence
AX must run:
1. Atlas
2. Muse
3. Forge
4. Quill
5. Lens
6. Pulse
7. Sentinel

No parallel execution. Start the next stage only after the current stage produces artifacts.

## Cost controls
- Research: GPT-5 mini only
- Outlines: GPT-5 mini only
- Drafts: GPT-5 mini only
- Schema/FAQ generation: GPT-5 mini only
- Final review: Sentinel + GPT-5.4 only
- Avoid regeneration loops unless quality gates fail.

## Content quality constraints
- Audience: vehicle owners, not mechanics
- Tone: authoritative, clear, specific, local
- Include symptoms, likely causes, repair process, timeline expectations
- Avoid generic AI phrasing and keyword stuffing

### Length targets
- Service pages: 1200–1600 words
- Supporting pages: 800–1200 words
- Blog posts: 900–1200 words
