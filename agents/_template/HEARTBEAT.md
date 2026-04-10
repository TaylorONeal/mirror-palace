# HEARTBEAT.md — [Agent Name]

## Schedule

<!-- Define when this agent runs. Options:
     - Cron: precise timing (e.g., "0 11 * * *" = 11:00 daily)
     - Heartbeat: batched checks at defined intervals
     - Event-driven: triggered by specific conditions
     
     Include timezone. -->

**Type:** <!-- cron / heartbeat / event-driven -->
**Expression:** <!-- cron expression or interval (e.g., "every 4 hours") -->
**Timezone:** <!-- e.g., America/Chicago -->
**Active Days:** <!-- e.g., "daily", "weekdays", "Mon/Wed/Fri" -->

## Protocol

<!-- Step-by-step instructions for each run. These are the exact steps the agent follows. Be precise — this is executable, not aspirational. -->

### On Every Run

1. Read `SOUL.md` — refresh identity
2. Read today's date and check `WORKING.md` for pending items
3. <!-- Domain-specific step -->
4. <!-- Domain-specific step -->
5. <!-- Domain-specific step -->
6. Write output to `<!-- output location -->`
7. Update `WORKING.md` with any new observations or pending actions
8. If nothing needs attention, reply `HEARTBEAT_OK` and stop

### On Main Session (first run of the day or week)

1. All steps above, plus:
2. Read `MEMORY.md` — refresh long-term context
3. Read `<!-- relevant status files -->`
4. <!-- Extended analysis step -->
5. <!-- Extended analysis step -->
6. Update `MEMORY.md` if durable insights emerged

## Output Format

**Location:** <!-- e.g., "shared/agent-report.md", "reports/YYYY-MM-DD.md" -->
**Format:** <!-- e.g., "markdown, 3-5 bullet points", "paragraphs, no bullets", "structured table" -->
**Max Length:** <!-- e.g., "500 words", "10 bullets", "1 page" -->

### Template

```markdown
# [Agent Name] — [Date]

## [Section 1]
<!-- What goes here -->

## [Section 2]
<!-- What goes here -->

## Next Actions
<!-- Always end with actionable items -->
```

## Cost Guard

<!-- Rules for minimizing unnecessary computation. Agents should not run when there's nothing to say. -->

- **Skip condition:** If no new data since last run, reply `HEARTBEAT_OK` and stop
- **Minimal output condition:** If only minor updates, produce 1-3 bullet summary instead of full report
- **Full output condition:** <!-- When does this agent produce its complete output? -->
- **Max tokens per run:** <!-- Budget limit, e.g., "2000 tokens output" -->
- **Escalation:** If something urgent is detected, <!-- what happens? e.g., "flag in shared/alerts.md" -->
