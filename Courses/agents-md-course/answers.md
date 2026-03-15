Answers (Suggested)

1) Short answers
- Mission: "Capture and summarize meeting notes into searchable action items for the team."
- Forbidden action: "Do not delete or modify calendar events without explicit human confirmation."

2) Mapping tasks (examples)
- Release management: CI/CD Executor, semi-autonomous (staging auto, production human-approved)
- Weekly metrics report: Research agent, assisted (agent drafts, human reviews)
- Uptime monitoring: Monitoring agent, semi-autonomous (restart low-risk services, escalate for DB)

3) Skill drafting: backup-database
- name: backup-database
  purpose: "Create and verify a snapshot of the primary DB"
  inputs: [backup-window, retention-days]
  outputs: [backup-id, size_gb, status]
  permissions: [cloudsql.backups.create, storage.write]
  failure_modes: [insufficient-disk, snapshot-timeout, permission-denied]
  tests: [simulate-disk-full, permission-denied]

4) Runbook sketch
- Alert: service health < 90% for 5m
- Immediate actions:
  1. Attempt graceful restart (max 3 attempts)
  2. If restart fails, mark incident and notify on-call
  3. If related to DB, run failover playbook
- Post-incident: collect logs, RCA, update runbook

5) Testing for CI/CD Executor
- Unit tests: build script returns success for known-good repo
- Integration: run-tests fails on intentionally broken tests
- Canary deploy: deploy to canary returns healthy check within timeout
- Rollback test: failed deploy triggers rollback path and restores previous version
- Permission test: ensure deploy does not succeed without expected token

6) Project — Daily Digest (example answers)
- Fill template: identity.owner: "MJ <mj@example.com>"; mission.short: "Daily 5-bullet digest of high-priority items"; permissions: read:issues, read:calendar, send:messaging
- Tests:
  1. No items: agent produces an "empty" digest with courteous message
  2. Many items: agent produces condensed 5-bullet summary and includes references
