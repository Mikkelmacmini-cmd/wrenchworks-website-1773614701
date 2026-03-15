Examples (simple and useful)

1) Preference
- fact: "Use 2-space indentation for code." (category: preference)

2) Pattern
- fact: "We open a short RFC for design decisions that change the API." (category: process)

3) Lesson learned
- fact: "Hotfixing on production without tests caused data loss; require tests for hotfixes." (category: lesson)

4) Decision rule
- fact: "If a security issue is found, escalate to the on-call and pause feature releases." (category: rule)

5) Small template example (single line)
- id: pref-001
  fact: "Morning standups at 9:15"
  category: preference
  timestamp: 2026-03-11
  status: active

6) Real short case study (story)
Team had repeat outages because deploy happened late Friday. They wrote: "Never deploy on Fridays; schedule deploys for Tuesdays after tests pass." Problem solved.