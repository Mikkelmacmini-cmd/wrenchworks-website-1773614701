How to maintain tacit knowledge (step-by-step)

1) Capture quickly
- When you notice a pattern, preference, or lesson, jot it down right away in MEMORY.md (or a draft). Use simple sentences.

2) Be concrete
- Write the behavior: "We ask for two reviewers on PRs" instead of vague notes.

3) Use timestamps and sources
- Add a small note like: (2026-03-11) — learned after outage during deploy

4) Keep it short
- One idea per line. Long stories go in daily notes; MEMORY.md keeps the distilled rule.

5) Review regularly
- Weekly or monthly quick pass: anything outdated? Mark as superseded with a link to the new rule.

6) Merge carefully
- When two similar entries exist, merge into one clearer rule and mark the older with status: superseded and point to the merged id.

7) Who edits?
- Anyone can suggest edits, but major changes should note the author and date.

8) Never delete
- Instead mark status: superseded and add supersededBy to keep history.

9) Example entry
id: tacit-001
fact: "We release to production only on Tuesdays after passing the full test suite."
category: procedure
timestamp: 2026-03-11
source: post-mortem-2026-03-11
status: active

10) Quick rules summary
- Capture fast, write clear, review often, never delete — supersede.