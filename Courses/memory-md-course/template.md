MEMORY.md entry template (use this for new entries)

id: <short-unique-id>
fact: "A single clear sentence describing the tacit knowledge"
category: preference|process|lesson|rule
timestamp: YYYY-MM-DD
source: <where you learned it or which meeting/post-mortem>
status: active|superseded
supersededBy: <id-of-new-entry-if-superseded>
relatedEntities: [optional list]
notes: <optional short explanation>

Example filled:
id: deploy-002
fact: "Deploy to production only on Tuesdays after full test suite passes."
category: process
timestamp: 2026-03-11
source: post-mortem-2026-03-11
status: active
notes: "Changed after two outages in Oct/Nov."