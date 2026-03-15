AGENTS.md Template

identity:
  owner: "Name <email>"
  timezone: "America/Denver"
  contact: "#team-slack or email"

mission:
  short: "One-line mission"
  metrics:
    - metric: "uptime %"
    - metric: "false-positive rate"

permissions:
  - service: github
    scopes: [read:issues]
  - service: cloudsql
    scopes: [read, backup]

skills:
  - name: example-skill
    purpose: "Describe what this skill does"
    inputs: [ ]
    outputs: [ ]
    permissions: [ ]
    failure_modes: [ ]
    tests: [ ]

lifecycle:
  deploy: "canary -> staging -> prod"
  cadence: "weekly updates"
  retire: "steps to retire"

safety:
  denylist: ["rm -rf /", "delete-production-db"]
  escalation: "owner@example.com"
  audit_logs: "https://logs.example.com/agent-name"

runbook:
  normal: "What normal looks like"
  alerts: "Where to look"
  immediate_actions: "Stop agent, revoke token"

changelog:
  - date: 2026-03-11
    change: "Created template"
    by: "auto-generated"
