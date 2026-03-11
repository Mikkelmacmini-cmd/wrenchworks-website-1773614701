# POLICY.md — AI Agent Model & Cost Cap Policy (Web Delivery Team)

**Owner:** MJ (AX)  
**Effective date:** 2026-03-11  
**Scope:** All website design/build/QA agent runs (AX, Vanguard, Atlas, Pulse, Lens, Muse, Quill, Forge, Sentinel)

---

## 1) Objective
Deliver launch-ready websites with strict quality gates while keeping API/model spend predictable.

Success = high pass-rate output at the lowest cost that still meets launch standards.

---

## 2) Spend Guardrails
Define these numbers at the start of each month:

- **Monthly Hard Cap (MHC):** `$________`
- **Daily Soft Cap (DSC):** `MHC / 30`
- **Daily Hard Cap (DHC):** `DSC × 1.5`

### Enforcement
- If spend reaches **DSC**: switch all non-critical work to **Lean Mode**.
- If spend reaches **DHC**: stop all non-P0 work. Only launch blockers run.
- No exceptions without explicit owner approval.

---

## 3) Default Model Routing

### Tier A (Cost-Efficient / Default)
Use **gpt-5-mini** for:
- AX (orchestration/control plane)
- Atlas (SEO/IA structure)
- Pulse (interaction/system specs)
- Muse/Lens/Quill **first drafts only**

### Tier B (High Capability)
Use **gpt-5.3-codex** for:
- Forge (implementation)
- Sentinel (final QA gate)
- Vanguard (strategic critique)
- Muse/Lens/Quill **final customer-facing passes**

---

## 4) Escalation Rules (Mini → 5.3)
Escalate to 5.3 only when at least one is true:
1. Output is final and customer-visible
2. Task severity is P0/P1
3. Prior pass failed gate or scored < 85
4. Same task required more than 1 rework loop

If none apply, stay on mini.

---

## 5) Retry & Loop Limits
- **Mini runs:** max 2 retries per task
- **5.3 runs:** max 1 retry per task
- If still failing after limit: stop, summarize blocker, request decision.

No open-ended loops.

---

## 6) Per-Run Budget Controls
Set token/cost ceilings per run category:

- **Low budget:** AX / Atlas / Pulse
- **Medium budget:** Muse/Lens/Quill draft passes
- **High but bounded budget:** Forge / Sentinel / final creative pass

If any run hits **80%** of budget, trim scope before continuing.

---

## 7) Mandatory Quality Gate (No-Ship Without This)
Every publish candidate must pass this sequence:
1. Build succeeds
2. Fresh screenshot set captured (desktop + mobile breakpoints)
3. Sentinel uncapped gate run
4. PASS verdict recorded

If gate fails: fix → recapture → rerun Sentinel.

---

## 8) Operating Modes

### Lean Mode (default)
- Mini-first everywhere except Forge/Sentinel
- Used for day-to-day execution

### Standard Mode
- Role-based routing as defined in Section 3
- Used for active production work

### Launch Mode (time-boxed)
- Increased 5.3 use across final passes
- Max duration: 72 hours
- Auto-revert to Lean Mode after window ends

---

## 9) Daily Reporting (Required)
At end of day, log:
- Spend by agent
- Total daily spend vs DSC/DHC
- Escalations triggered
- Gate pass/fail count
- Rework loops per deliverable

Any agent with **high spend + low pass yield** must be rerouted or constrained next day.

---

## 10) Decision Priority
When quality and cost conflict:
1. Protect launch quality on P0/P1 work
2. Reduce scope before increasing model tier
3. Escalate model tier only when justified by Section 4

This policy is the default operating contract unless explicitly overridden.