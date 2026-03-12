# SOUL.md Fast-Track Course

**Goal:** Help you write a production-ready `SOUL.md` fast.

**Reading level:** Simple, clear, 6th-grade language.

**Who this is for:** Builders, operators, and teams who want an AI agent to act with the right voice, choices, and boundaries.

---

## How to Use This Course

- Read each lesson in order.
- Do the exercises.
- Take the quizzes.
- Use the template.
- Run the final checklist before shipping.

Time needed: **2-3 hours** for first draft, **1 hour** for review.

---

## Module Map

1. Purpose of `SOUL.md`
2. Structure that works in production
3. Voice and tone rules
4. Good examples + before/after edits
5. Common pitfalls and fixes
6. Step-by-step authoring workflow
7. Templates you can copy
8. Exercises + answer key
9. Quizzes
10. Final checklist
11. One-page cheat sheet

---

## Lesson 1 — Purpose: Why `SOUL.md` Exists

`SOUL.md` is the **behavior contract** for your agent.

It tells the model:
- **Who it is** (persona and role)
- **How to sound** (voice and tone)
- **How to decide** (principles)
- **What not to do** (boundaries)

Without `SOUL.md`, responses drift. The agent may be correct but still feel off-brand or unsafe.

### Core job of `SOUL.md`

A strong `SOUL.md` makes the agent:
- Consistent
- Trustworthy
- Useful under pressure
- Fast to align with team goals

### What `SOUL.md` is NOT

- Not a giant policy dump
- Not a marketing slogan file
- Not a list of random adjectives

It is a **practical operating guide**.

---

## Lesson 2 — Structure: The Production Skeleton

Use this order:

1. **Identity** — name, role, mission
2. **Voice & Tone** — style rules
3. **Decision Principles** — how to choose when trade-offs happen
4. **Boundaries** — safety and limits
5. **Execution Rules** — do-this-not-that actions
6. **Response Style** — format defaults
7. **Escalation Rules** — when to ask for help
8. **Examples** — good and bad snippets

### Why this order works

- Starts with intent (identity)
- Then communication (tone)
- Then judgment (principles)
- Then safety (boundaries)
- Then operations (execution)

This matches how real work happens.

---

## Lesson 3 — Voice & Tone: Sound Human, Stay Useful

Good voice rules are short and testable.

### Use voice pairs

Example pairs:
- Clear, not vague
- Warm, not fluffy
- Direct, not rude
- Confident, not arrogant
- Brief by default, detailed when needed

### Add anti-patterns

Tell the model what to avoid:
- No buzzword soup
- No fake certainty
- No long disclaimers unless needed
- No fake hype

### Tone test

Ask: “Would a busy teammate trust this in a real incident?”

If no, tighten it.

---

## Lesson 4 — Concrete Examples (Before/After)

### Example A: Vague voice

**Before**

```md
## Voice
Be professional and nice.
```

**After**

```md
## Voice & Tone
- Clear and direct. Use short sentences.
- Warm but not gushy.
- State uncertainty honestly in one line.
- Default to 3-7 bullet points for action plans.
- Avoid corporate filler words.
```

Why better: You can test it. Team members can review it.

---

### Example B: Weak boundaries

**Before**

```md
## Boundaries
Be safe and careful.
```

**After**

```md
## Boundaries
- Never make up facts, links, or results.
- If data is missing, say what is missing and ask one clear question.
- Never expose secrets, keys, tokens, or private user data.
- Never perform destructive actions unless explicitly requested.
- If instruction conflicts with policy, pause and escalate.
```

Why better: Specific rules reduce risky behavior.

---

### Example C: No decision logic

**Before**

```md
## Principles
Do what is best.
```

**After**

```md
## Decision Principles
1. Safety before speed.
2. Accuracy before style.
3. Solve root cause, not just symptom.
4. Fix first when low-risk and reversible, then report.
5. Ask for confirmation before irreversible actions.
```

Why better: Clear priority order helps in hard moments.

---

## Lesson 5 — Common Pitfalls

### Pitfall 1: Too abstract
Bad: “Be excellent.”
Fix: Add observable behavior.

### Pitfall 2: Contradictions
Bad: “Be concise” + “Always provide full detail.”
Fix: Add condition: concise by default, expand when stakes are high.

### Pitfall 3: Over-long walls of text
Fix: Use bullets, short rules, and sections.

### Pitfall 4: No examples
Fix: Include before/after snippets.

### Pitfall 5: No escalation policy
Fix: Define when to ask, when to act, and when to stop.

### Pitfall 6: No update process
Fix: Add revision cadence (weekly or after incidents).

---

## Lesson 6 — Step-by-Step Authoring Workflow

### Step 1: Define mission
Write one sentence: what outcome matters most?

### Step 2: Pick tone anchors
Choose 4-6 tone traits and 4 anti-traits.

### Step 3: Write decision principles
Use ranked priorities (1,2,3...).

### Step 4: Set boundaries
Be specific: privacy, safety, destructive actions, uncertainty.

### Step 5: Add execution defaults
Examples:
- Start with a short summary
- Then action items
- Then risks and next steps

### Step 6: Add examples
Include at least 3 before/after edits.

### Step 7: Red-team your file
Try tricky prompts:
- Urgent but unsafe request
- Missing data
- Conflicting goals
- Ambiguous instructions

### Step 8: Revise and version
Add date and changelog note.

---

## Lesson 7 — Template (Quick Start)

Use `templates/SOUL_TEMPLATE.md`.

What makes this template “production-ready”:
- Explicit decision order
- Explicit no-go actions
- Measurable response format defaults
- Escalation conditions

---

## Lesson 8 — Exercises

Do these in `exercises.md`:
1. Rewrite weak voice section.
2. Add boundary rules for a finance agent.
3. Turn vague principles into ranked priorities.
4. Fix a contradictory `SOUL.md` block.
5. Write one escalation policy.

Answer key included.

---

## Lesson 9 — Quizzes

### Quiz 1 (Basics)
1. What is the main job of `SOUL.md`?
2. Why are examples required?
3. What comes before style: safety or voice?

### Quiz 2 (Applied)
1. Rewrite: “Be careful.” into two concrete rules.
2. Give one reversible vs irreversible action pair.
3. When should the agent ask a clarifying question?

**Suggested answers:**
- `SOUL.md` sets consistent behavior and decisions.
- Examples make rules testable.
- Safety comes before style.
- Clarify when missing data blocks a safe action.

---

## Lesson 10 — Final Checklist (Ship Gate)

Use this list before you deploy:

- [ ] Identity is clear in 1-3 lines.
- [ ] Tone has positive rules and anti-rules.
- [ ] Decision principles are ranked.
- [ ] Boundaries are explicit and concrete.
- [ ] Destructive action policy is present.
- [ ] Uncertainty handling is defined.
- [ ] Escalation triggers are clear.
- [ ] 3+ before/after examples included.
- [ ] No contradictions across sections.
- [ ] File can be read in under 10 minutes.
- [ ] Last updated date is present.

If any box is unchecked, do not ship yet.

---

## Lesson 11 — One-Page Cheat Sheet

See `CHEAT_SHEET.md` for a compact build-and-review guide.

---

## Suggested Team Workflow

- Draft owner writes first version.
- One reviewer checks safety + contradictions.
- One reviewer checks tone + usability.
- Run 5 test prompts.
- Revise and version.

---

## Wrap-Up

A great `SOUL.md` is not long. It is **clear, testable, and enforceable**.

If your agent sounds right but makes bad choices, fix principles.
If it chooses right but sounds wrong, fix voice.
If it is risky, tighten boundaries.

That is how you get high-leverage behavior fast.
