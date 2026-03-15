Lesson 5 — Examples & Patterns

Learning goals
- See concrete examples and recommended patterns
- Learn common anti-patterns to avoid

Examples
1. Scheduling Assistant
- Skills: read-calendar, propose-times, send-invite
- Autonomy: assisted
- Safety: never cancel events without human approval

2. CI/CD Executor
- Skills: checkout, run-tests, build, deploy
- Autonomy: semi-autonomous for staging, assisted for production
- Safety: require PR-approved flag for production deploys

3. Research Summarizer
- Skills: web-fetch, summarize, cite-sources
- Autonomy: manual publishing (human reviews synopsis before publish)

Patterns
- Canary-first: always run risky changes on a small percentage first
- Immutable inputs: prefer passing snapshots rather than live-changing inputs
- Observability-by-default: every action should emit structured logs

Anti-patterns
- Broad-scoped skills with many side effects
- Silent failures (no alerts when a job degrades)
- Treating external data as fully trusted

Exercise
Take the CI/CD example and list 5 test cases you would write before deploying.
