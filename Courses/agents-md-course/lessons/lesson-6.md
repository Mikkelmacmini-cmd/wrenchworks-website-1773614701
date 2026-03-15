Lesson 6 — Build an Agent (project)

Learning goals
- Build a small agent end-to-end using the template
- Write config, two skills, tests, and a runbook

Project brief: "Daily Digest Agent"
- Mission: Produce a 5-bullet morning digest of high-priority items and send to owner.
- Autonomy: assisted (agent drafts digest and sends only after approval)

Required skills
- fetch-issues: query issue tracker for high-priority items
- summarize-text: compress items into bullets
- send-message: send draft to owner via messaging channel

Tasks
1. Fill template-AGENTS.md with mission, identity, permissions
2. Draft skill entries (two skills minimum)
3. Write tests that simulate 0, 1, and many items
4. Write a runbook: how to restart, revocation steps, and failure handling
5. Deploy to a sandbox and run daily for one week, collect metrics

Grading rubric
- Completeness of config (30%)
- Tests and edge cases (30%)
- Safety & runbook quality (25%)
- Observability and logs (15%)

Exercise
Start by populating template-AGENTS.md for the Daily Digest Agent.
