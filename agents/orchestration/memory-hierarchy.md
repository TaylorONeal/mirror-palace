# Memory Hierarchy

How agents store, retrieve, and manage information across different time horizons.

## Three Tiers

### Tier 1: MEMORY.md — Persistent Knowledge

**What it is:** Curated, long-lived knowledge that an agent has learned and should retain across all sessions. Not a log. Not a dump. A maintained document that gets better over time.

**What goes in:**
- Learned preferences ("prefers bullet points over paragraphs")
- Established patterns ("exercise drops precede wider shutdowns — see 3 historical instances")
- Calibration data ("when this person says 'fine,' it usually means 'not fine'")
- Correction records ("I initially categorized X as Y, but it's actually Z")
- Relationship context that persists ("weekly check-in happens Mondays")

**What stays out:**
- Anything that belongs in a status file (domain scores, decision states)
- Temporary observations that haven't been validated
- Raw data — MEMORY.md is for conclusions, not evidence

**Maintenance rules:**
- Review monthly. Remove anything no longer true.
- When adding a new entry, check if it contradicts an existing one. If so, update the existing entry, don't add both.
- Maximum ~100 lines. If it's growing past that, you're storing too much. Compress or move to status files.

### Tier 2: Daily Logs (YYYY-MM-DD.md) — Timestamped Record

**What it is:** Append-only daily log. What happened, what was observed, what was decided. The raw record that other tiers draw from.

**Format:**
```markdown
# YYYY-MM-DD

## HH:MM — [Session/Run identifier]
[What happened. What was observed. What actions were taken.]

## HH:MM — [Next session/run]
[...]

---
## Next Actions
- [ ] Action item from today's observations
- [ ] Follow-up needed on [specific thing]
```

**Rules:**
- Always append, never edit previous entries (corrections get their own timestamped entry)
- Must end with a "Next Actions" section — this is non-negotiable
- One file per day. No multi-day files.
- Stored in `logs/` directory within the agent's working space

### Tier 3: WORKING.md — Session-Scoped Scratch

**What it is:** Ephemeral working memory for the current session. Holds context that's needed right now but isn't worth persisting. Think of it as the agent's scratchpad.

**What goes in:**
- Current session goals and focus
- In-progress analysis that isn't finished yet
- Temporary notes, drafts, partial outputs
- Cross-references being actively used ("currently looking at tracker-report.md and strategy-report.md")

**Lifecycle:**
- Reset or rewritten at the start of each session
- Anything worth keeping gets promoted to MEMORY.md or committed to a daily log before the session ends
- If WORKING.md survives more than one session unchanged, it's either stale or should be in MEMORY.md

## Information Compression Priorities

When deciding what to keep, what to compress, and what to discard, use this priority ranking:

1. **Constraints** — Hard limits, non-negotiables, things that cannot change. Always retain.
2. **Goals** — What's being worked toward. Retain in current form; update when goals change.
3. **Commitments** — Promises made to others or to self with deadlines. Retain until fulfilled or explicitly cancelled.
4. **Definitions** — Agreed-upon meanings, calibrated terms, established vocabulary. Retain for consistency.
5. **Critical Facts** — Key data points that inform decisions. Retain while relevant; archive when superseded.
6. **Open Questions** — Things being actively investigated. Retain until resolved; log the resolution.

Everything else is context. Context is useful in the session, but most of it doesn't need to persist. When in doubt, ask: "If I forgot this tomorrow, would it matter?" If no, it stays in WORKING.md or gets discarded.

## Cross-Tier Flow

```
Session observation → WORKING.md (immediate use)
                    → Daily log (permanent record)
                    → MEMORY.md (only if it's a durable insight worth keeping)
```

Information flows up the tiers by proving its value. Most observations stay in the daily log. A few patterns that repeat across multiple days earn a spot in MEMORY.md. Nothing goes directly to MEMORY.md without first being observed in a session and logged.

## Anti-Patterns

- **MEMORY.md as a log**: If it has timestamps and entries keep getting appended, it's being used as a log. Restructure.
- **Empty WORKING.md**: If WORKING.md is always empty, the agent isn't using session context effectively.
- **Daily logs without Next Actions**: A log without next actions is a diary, not an operational record.
- **MEMORY.md growing unbounded**: If it's past 100 lines, review and compress. Persistent doesn't mean permanent — things that are no longer true should be removed.
