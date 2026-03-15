AGENTS.md Cheat Sheet

Quick rules
- Owner: Always name a human owner and contact.
- Mission: One line + 1-3 metrics.
- Skills: Keep them small, testable, and permissioned.
- Autonomy: Default to assisted or semi-autonomous; fully autonomous only with strong tests and trust.
- Safety: Denylist destructive ops, require human confirmation for high-risk tasks.
- Logs: Structured, immutable, and linkable to incidents.

Essential checklist before deploy
- [ ] Identity set and owner notified
- [ ] Tests: unit, integration, chaos/failure
- [ ] Canary strategy defined
- [ ] Runbook and escalation documented
- [ ] Permissions scoped and audited
- [ ] Observability (metrics, logs, traces) in place

Common configs (copy/paste)
- Example permission: {service: github, scopes: ["read:issues", "write:checks"]}
- Example skill stub:
  - name: notify-owner
    purpose: "Send message to owner"
    inputs: [subject, body]
    outputs: [message_id]
    permissions: [messaging.send]

When things go wrong
- Stop the agent -> revoke tokens -> collect logs -> notify owner -> run RCA

Where to store AGENTS.md
- Root of workspace and also a copy in docs/agents/ for programmatic discovery.

Further reading
- SOUL.md style and voice guidance
- Security team runbooks for secrets management
