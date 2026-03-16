Overnight Runbook — WrenchWorks launch

Purpose: keep the launch moving overnight, retry transient failures, apply safe fixes, and only escalate for true emergencies.

1) Remaining tasks (priority order)
- Ensure Vercel deploy completes and is aliased to www + apex
- Verify SSL provisioned and working
- Run Lighthouse (mobile + desktop) and reach Performance >= 80
- Apply safe hotfixes: console/runtime errors, font-display, missing meta descriptions
- Restore CI workflows in separate PR once token/workflow scope available

2) Owners
- Automation: agent:ax:subagent:6f6e44ec-6aa0-4e28-851e-bf7db0369310 (overnight-subagent) — persistent
- Dev implementation verification: dev-creator (automated agent)
- Escalation contact: (none specified) — default: internal only; final morning handoff to Mikkel

3) Stop conditions & notifications
- Stop and notify immediately if any of the following occur:
  * Data-loss risk identified (DB migrations, destructive deletes)
  * Credential compromise discovered
  * Deploy repeatedly fails with a non-transient error requiring decision
- For all other failures: retry with backoff (3 attempts, then escalate to on-call)

4) Secrets & locations
- GitHub token: /Users/openclaw/.openclaw/secrets.json -> GITHUB_ACCESS_TOKEN
- Vercel token: /Users/openclaw/.openclaw/secrets.json -> VERCEL_TOKEN
- HostGator creds: /Users/openclaw/.openclaw/secrets.json -> WEBSITE_USERNAME, WEBSITE_PASSWORD

5) Logging & handoff
- All automated actions must append short audit lines to /Users/openclaw/.openclaw/workspace/memory/$(date +%F).md
- On completion, generate a consolidated handoff with links to artifacts:
  - deployment URL
  - Lighthouse reports
  - commits/PRs created

Operational notes
- Worker will run retry loops with exponential backoff (initial 1m, then 5m, 15m), up to 10 retries per transient step.
- Worker will not send frequent updates to Mikkel; only a single morning handoff or urgent Tier-3 alerts.
