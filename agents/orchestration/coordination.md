# Agent Coordination

How multiple agents share state, avoid duplication, and hand off work to each other.

## Core Principle: Shared State via Reports

Agents do not communicate directly. They communicate through a shared reports directory. Each agent writes its output to a known location, and other agents read from those locations as part of their protocol.

```
shared/
  daily-briefing.md      ← The Briefer writes, everyone reads
  tracker-report.md      ← The Tracker writes, Briefer + Mirror read
  change-log.md          ← The Watcher writes, Briefer + Strategist read
  strategy-report.md     ← The Strategist writes, Briefer + Mirror read
  mirror-reflection.md   ← The Mirror writes, all agents can reference
  operator-log.md        ← The Operator writes, Tracker + Strategist read
  alerts.md              ← Any agent can write urgent escalations here
```

## Read/Write Matrix

| Agent | Reads | Writes |
|-------|-------|--------|
| The Mirror | All reports, status/*, decisions/*, people/* | mirror-reflection.md |
| The Briefer | All reports, status indexes | daily-briefing.md |
| The Tracker | Status domains, decisions index, stated targets | tracker-report.md |
| The Watcher | External sources, previous change-log | change-log.md |
| The Strategist | Decisions, career domain, tracker report, change-log | strategy-report.md |
| The Operator | Domain-specific sources, previous operator-log | operator-log.md |

## Handoff Protocols

### Escalation
Any agent can write to `shared/alerts.md` when something exceeds its scope. The Briefer reads alerts as the first step of every run and includes them as Priority 1 items.

**Format:**
```markdown
## [ALERT] YYYY-MM-DD HH:MM
**From:** [Agent Name]
**Severity:** [urgent / important / informational]
**Summary:** [One-line description]
**Context:** [What the agent observed and why it's being escalated]
**Suggested action:** [What should happen next]
```

### Cross-Agent References
When one agent's output refers to another agent's domain, it should reference rather than duplicate:

- Good: "The Tracker noted a 3-week exercise gap (see tracker-report.md). The pattern here is..."
- Bad: "Exercise was done 1x this week against a target of 4x. Also, this connects to a pattern where..."

The rule: state what you're adding, reference what already exists.

### Conflict Resolution
If two agents produce contradictory assessments (e.g., The Tracker says "on track" and The Mirror says "something feels off"), both perspectives are preserved. The Briefer surfaces the contradiction. The user resolves it.

Agents do not override each other's outputs. Each agent owns its report file and only writes to its own file.

## Agent Startup Sequence

When deploying multiple agents for the first time:

1. Set up the shared reports directory
2. Deploy The Tracker first — it produces the raw data other agents need
3. Deploy The Watcher second — it monitors external sources
4. Deploy The Briefer third — it synthesizes across all available reports
5. Deploy The Strategist fourth — it needs tracker and watcher data for strategic analysis
6. Deploy The Operator for specific domains as needed
7. Deploy The Mirror last — it needs at least 1-2 weeks of data from all other agents to produce meaningful reflections

## State Freshness

Every report file should include a timestamp at the top. Agents that read other reports should check the timestamp. If a report is stale (older than 2x the expected cadence), note it:

"Tracker report is 18 hours old (expected: updated every 4 hours). Proceeding with available data but noting potential gaps."
