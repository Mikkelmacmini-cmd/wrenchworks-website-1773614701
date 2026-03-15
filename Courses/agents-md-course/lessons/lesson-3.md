Lesson 3 — Config & Skills

Learning goals
- Learn recommended AGENTS.md config sections
- Understand 'skills' and how to declare them

Essential config sections
- identity: owner, timezone, contact
- mission: short mission statement and metrics
- permissions: required scopes, data stores, network access
- skills: discrete capabilities the agent can use
- lifecycle: start/stop, monitoring, update cadence
- safety: denylist, escalation, audit logs

Skills
- Definition: A skill is a narrowly scoped capability (e.g., read-calendar, run-deploy, call-api-google-sheets).
- Structure to document:
  - name
  - purpose
  - inputs and outputs
  - required permissions
  - failure modes
  - test cases

Example skill entry
- name: run-deploy
  purpose: Deploys package to staging
  inputs: commit SHA, environment
  outputs: deployment ID, URL
  permissions: deploy:staging
  failure_modes: failed build, infra timeout
  tests: deploy canary, rollback test

Best practices
- Keep skills small and testable
- Prefer composition: build complex flows by composing skills
- Version skills and record changelog

Exercise
Draft a skill entry for 'backup-database' including inputs, outputs, and failure modes.
