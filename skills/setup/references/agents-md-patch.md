# AGENTS.md Patch

Example additions to an existing AGENTS.md to reference mirror-palace. These sections should be added to or merged with the existing file.

---

## Patch: Framework Integration Section

Add this section to AGENTS.md:

```markdown
## Mirror Palace Integration

### Framework References
Frameworks live in `[path-to-mirror-palace]/frameworks/`. The routing table is `[path-to-mirror-palace]/index.md`.

When a framework applies to the current situation:
1. Read the framework's `agent-prompt.md` for the operational prompt snippet
2. Apply the framework
3. Check the framework's `updates` field (in its README.md) for which status files to refresh
4. Propose specific 1-line status updates to the user

### Status System
- Domain tracking: `[path-to-mirror-palace]/status/domains/`
- People records: `[path-to-mirror-palace]/status/people/`
- Decisions ledger: `[path-to-mirror-palace]/status/decisions/`
- Master index: `[path-to-mirror-palace]/status/ISSUE-INDEX.md`

### Continuous Learning Protocol
On every interaction:
1. Did the user reveal a status domain update? Propose a 1-line update.
2. Did a relationship dynamic surface? Propose a people record update.
3. Is a decision being discussed? Check or create a decisions ledger entry.
4. Did a framework apply? Check its `updates` field for what else to refresh.
```

---

## Patch: Agent Entries

Add entries like these for each deployed mirror-palace archetype:

```markdown
## Agent Team

### [Agent Name] — The Mirror
- **Role:** Pattern detection and reflection
- **Schedule:** Weekly (e.g., Wednesday 10 PM)
- **Report:** shared/mirror-reflection.md
- **Frameworks:** failure-modes, distortion-detection, awareness-as-intervention, regret-minimization, reversibility-classification, closed-loop-learning
- **Reads:** All agent reports, status/*, decisions/*, people/*
- **Protocol:** Read SOUL.md, read MEMORY.md, read all agent reports from the past week, write reflection

### [Agent Name] — The Briefer
- **Role:** Daily synthesis and prioritization
- **Schedule:** Daily (e.g., 8 AM)
- **Report:** shared/daily-briefing.md
- **Frameworks:** north-star-test, information-compression, executive-function-model
- **Reads:** All agent reports, status indexes, alerts
- **Protocol:** Read SOUL.md, check alerts, read all reports, synthesize top 3 priorities

### [Agent Name] — The Tracker
- **Role:** State monitoring, intent vs behavior comparison
- **Schedule:** 2-4x daily (e.g., 8 AM, 12 PM, 6 PM)
- **Report:** shared/tracker-report.md
- **Frameworks:** identity-reinforcement, north-star-test
- **Reads:** Status domains, decisions index, stated targets
- **Protocol:** Read SOUL.md, compare current state to targets, report gaps
```

---

## Patch: Heartbeat Rules

Add or merge with existing heartbeat section:

```markdown
## Heartbeats
Default prompt: `Read HEARTBEAT.md. If nothing needs attention, reply HEARTBEAT_OK.`

### Mirror Palace Additions
- Every agent checks relevant status domains for staleness on each run
- Framework trigger cascade: when a framework fires, check its `updates` field
- Alerts written to shared/alerts.md are Priority 1 for The Briefer
- Cost management: skip-if-no-changes rule applies to all agents
```

---

## Notes

- Adapt paths to match your repo structure
- Agent names should be customized (the archetype names like "The Mirror" are roles, not required names)
- Schedule times should match the user's timezone and preferences
- If the existing AGENTS.md has conflicting rules, the user decides which takes precedence
