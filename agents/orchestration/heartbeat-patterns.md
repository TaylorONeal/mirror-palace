# Heartbeat Patterns

When and how agents run. Choosing between cron (scheduled execution) and heartbeat (conversational check-in), and managing cost.

## Cron vs Heartbeat

### Cron (Scheduled Execution)

**Use when:**
- The agent needs to run at a precise time (morning briefing at 7:00 AM)
- The agent runs independently — no conversational context needed
- The output is a report or file, not a dialogue
- The schedule is fixed and predictable

**How it works:**
- External scheduler triggers the agent at defined intervals
- Agent runs its full protocol, writes output to shared reports directory
- No user interaction required during execution
- Results available for the user (or other agents) to read when ready

**Examples:**
- The Briefer runs at 7:00 AM daily, writes `shared/daily-briefing.md`
- The Watcher runs every 4 hours, appends to `shared/change-log.md`
- The Tracker runs at noon and 6 PM, writes `shared/tracker-report.md`

### Heartbeat (Conversational Check-In)

**Use when:**
- Multiple checks can be batched into one session
- The agent benefits from conversational context (follow-up questions, clarifications)
- The check might require no action — and saying so is the output
- You want to manage cost by combining multiple lightweight checks

**How it works:**
- Agent is invoked in a conversation (or as part of a multi-agent session)
- Runs its checks against current state
- If nothing needs attention: responds with `HEARTBEAT_OK` and stops
- If something needs attention: produces a focused report on what changed

**The HEARTBEAT_OK pattern:**
```
Agent runs checks → Nothing significant found → "HEARTBEAT_OK — no changes since last run at [timestamp]"
```
This is critical for cost management. A heartbeat that finds nothing should cost almost nothing. The agent checks, confirms no action needed, and exits. No lengthy reports about how nothing happened.

## Cost Management

### Skip-If-No-Changes Rule
Before running a full protocol, every agent should first check whether anything has changed since its last run. If not, skip the full run:

1. Check timestamp of last run
2. Check timestamps of input sources
3. If no input source has been updated since last run → output `HEARTBEAT_OK` or skip entirely
4. If inputs have changed → run full protocol

### Cost Hierarchy
From cheapest to most expensive:
1. **HEARTBEAT_OK** — Check, confirm nothing changed, exit (~minimal tokens)
2. **Delta report** — Only report what changed since last run (~moderate tokens)
3. **Full report** — Complete analysis regardless of changes (~maximum tokens)

Default to delta reports. Use full reports only on first run, weekly resets, or explicit request.

## Recommended Schedules by Archetype

### The Briefer
- **Mode:** Cron
- **Schedule:** Daily, morning (e.g., 7:00 AM)
- **Optional:** Evening wrap-up during high-intensity periods
- **Cost note:** Reads all other agent reports, so cost scales with number of active agents. Keep other agents' reports concise.

### The Tracker
- **Mode:** Cron or heartbeat
- **Schedule:** 2-4x daily (e.g., 8 AM, 12 PM, 6 PM, 10 PM)
- **Cost note:** Lightweight per run — mostly comparing numbers. Good candidate for heartbeat with HEARTBEAT_OK when nothing drifted.

### The Watcher
- **Mode:** Cron
- **Schedule:** 2-4x daily, or event-triggered
- **Cost note:** Cost depends on number of monitored sources. If watching repos, use webhooks or change detection to avoid scanning unchanged sources.

### The Strategist
- **Mode:** Cron
- **Schedule:** Weekly (e.g., Sunday evening or Monday morning)
- **Optional:** Ad-hoc when the pipeline feels stuck
- **Cost note:** Reads multiple reports and produces longer analysis. Keep to weekly unless actively managing a transition period.

### The Operator
- **Mode:** Event-driven or heartbeat
- **Schedule:** Triggered by domain signals, with a periodic sweep (every 4-6 hours)
- **Cost note:** Cost varies by domain. An email Operator processing 20 messages costs more than a health Operator confirming a streak is intact. Batch where possible.

### The Mirror
- **Mode:** Cron
- **Schedule:** Weekly (e.g., Friday evening or Sunday)
- **Optional:** Ad-hoc when a significant event occurs
- **Cost note:** The most expensive agent per run — reads broadly, produces long-form analysis. Weekly is the right cadence. More frequent runs produce diminishing insight at increasing cost.

## Combining Agents in One Session

When running multiple agents in a single conversational session (to save on context-loading costs):

1. Run The Tracker first (produces data other agents need)
2. Run The Watcher second (surfaces changes)
3. Run The Operator for active domains (handles operational items)
4. Run The Strategist if it's a strategy day (weekly)
5. Run The Briefer last (synthesizes everything above)
6. Run The Mirror only on its designated day (weekly)

This sequence ensures each agent has the freshest possible input from the agents that ran before it.

## When to Scale Back

If cost is a concern, this is the reduction sequence (cut from the bottom up):

1. Reduce The Mirror to biweekly
2. Reduce The Strategist to biweekly
3. Reduce The Operator to daily sweep only (no event-driven)
4. Reduce The Watcher to 1x daily
5. Reduce The Tracker to 1x daily
6. The Briefer should be the last agent you reduce — it's the integration point

**Minimum viable agent stack:** The Tracker (1x daily) + The Briefer (1x daily). This gives you state monitoring and synthesis. Everything else is enhancement.
