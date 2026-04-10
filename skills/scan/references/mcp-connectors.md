# MCP Connectors — Connected Mode Reference

How to connect external services for the Connected scan mode via the Model Context Protocol. Each connector has explicit opt-in, defined data scope, and privacy guarantees.

## General Principles

1. **Explicit opt-in only.** Never read from a data source without the user explicitly agreeing for that specific source.
2. **Read-only.** Connectors only read data. They never send, modify, or delete.
3. **No raw content storage.** Raw data is processed in memory only. Only structured, approved summaries are written to files.
4. **Attribution without quotation.** "Calendar analysis suggests over-commitment" not "your meeting with [specific person] about [specific topic]."
5. **Minimal scope.** Request only the data needed. Don't scan entire inboxes when looking for specific patterns.
6. **User controls scope.** The user defines time range, contacts, topics, and channels to scan.
7. **Revocable at any time.** Removing a connector is immediate and complete.

---

## Email Connector (Gmail MCP)

### Setup
Configure the Gmail MCP server in your Claude settings:
```json
{
  "mcpServers": {
    "gmail": {
      "type": "url",
      "url": "<gmail-mcp-server-url>"
    }
  }
}
```

### What to Extract

| Data Point | Method | Maps To |
|-----------|--------|---------|
| Thread age and response patterns | Count threads awaiting response by age bucket (48h, 7d, 30d) | `status/domains/career-work.md`, `status/domains/environment.md` |
| Volume patterns | Daily/weekly email volume trends, spikes, drops | `status/domains/career-work.md` |
| Contact frequency | Count emails per contact over time window | `status/people/` — Contact Frequency, Last Contact |
| Staleness signals | Starred/flagged threads that have gone cold | `status/decisions/` — stalled items |
| Decision language | Subject lines with decision keywords (approve, decide, confirm, deadline) | `status/decisions/` — new entries |
| Response time trends | Average time-to-reply over 30-day window | `status/people/` — Communication Quality |

### Signal Mapping

| Extracted Signal | Framework(s) |
|-----------------|-------------|
| >10 threads awaiting response >7 days | `executive-function-model`, `failure-modes` |
| Email volume increasing week over week | `failure-modes` (over-commitment) |
| Decision-language threads pending >14 days | `reversibility-classification`, `regret-minimization` |
| Response time increasing over 30-day trend | `behavior-equation` (increasing friction) |

### Scope Controls
- **Time range:** User specifies (default: last 30 days)
- **Contacts:** Limit to specific contacts or "all"
- **Labels/folders:** Include or exclude specific labels
- **Keywords:** Focus on specific topics of interest

### Privacy Protocol
- Only metadata (sender, date, subject) scanned by default
- Body content read only with explicit request for deeper analysis
- No email content ever stored — only structured summaries
- Specific contacts can be excluded entirely

---

## Calendar Connector (Google Calendar MCP)

### Setup
```json
{
  "mcpServers": {
    "google-calendar": {
      "type": "url",
      "url": "<google-calendar-mcp-server-url>"
    }
  }
}
```

### What to Extract

| Data Point | Method | Maps To |
|-----------|--------|---------|
| Density metrics | Percentage of working hours scheduled, by day and week | `status/domains/environment.md` — Friction Level |
| Meeting patterns | Average length, back-to-back frequency, recurring vs one-time ratio | `status/domains/career-work.md` |
| Free time blocks | Largest contiguous free block per day, total unscheduled hours per week | `status/domains/environment.md` |
| People frequency | Who appears in calendar most often | `status/people/` — Contact Frequency |
| Domain allocation | Time spent on different life domains (if categorized) | `status/domains/` — all domains |
| Schedule adherence | Events moved, cancelled, or repeatedly rescheduled | `status/domains/career-work.md` |
| Domain neglect | Which life domains have zero calendar time | `status/ISSUE-INDEX.md` — gap detection |

### Signal Mapping

| Extracted Signal | Framework(s) |
|-----------------|-------------|
| >80% of working hours scheduled | `failure-modes`, `adhd-design-rules` |
| No free block >60 min in a day | `executive-function-model` |
| >3 rescheduled events in a week | `time-blindness`, `behavior-equation` |
| Recurring meeting with no description or agenda | `jobs-to-be-done` |
| Evening/weekend events increasing | `failure-modes` (physiology-as-character) |
| No recreation/fun events in 14+ days | `north-star-test`, `behavior-equation` |

### Scope Controls
- **Time range:** User specifies (default: last 30 days + next 14 days)
- **Calendars:** Include or exclude specific calendars
- **Private calendars:** Must be explicitly included (excluded by default)

### Privacy Protocol
- Event titles and times scanned; descriptions only if user opts in
- No calendar data stored — only domain-level summaries
- Specific calendars can be excluded entirely

---

## Messages Connector (Slack MCP)

### Setup
```json
{
  "mcpServers": {
    "slack": {
      "type": "url",
      "url": "<slack-mcp-server-url>"
    }
  }
}
```

### What to Extract

| Data Point | Method | Maps To |
|-----------|--------|---------|
| Response patterns | Average response time by channel/context, unresolved threads | `status/people/` — Communication Quality |
| Activity distribution | Which channels consume the most attention | `status/domains/career-work.md`, `status/domains/community.md` |
| Communication patterns | Initiation vs response ratio per contact | `status/people/` — Reciprocity Score |
| Urgency signals | Flagged messages, deadline language | Relevant domain |
| Silence patterns | Channels or contacts where activity dropped significantly | `status/people/`, `status/domains/family-friends.md` |

### Signal Mapping

| Extracted Signal | Framework(s) |
|-----------------|-------------|
| Responding to messages within minutes consistently | `behavior-equation` (trigger sensitivity), `adhd-design-rules` |
| Multiple channels with unread >50 messages | `information-compression`, `executive-function-model` |
| Communication with specific contacts went silent | People records, relationship domain |
| Late-night messaging activity increasing | `failure-modes` (physiology-as-character) |

### Scope Controls
- **Channels:** User specifies which channels to scan (never scan all by default)
- **DMs:** Only with explicit per-contact consent
- **Time range:** User specifies (default: last 30 days)
- **Keywords:** Focus on specific topics

### Privacy Protocol
- Public channel messages scanned with user consent
- DMs NEVER scanned without explicit per-contact consent
- Message content processed for signals only — no raw messages stored
- Only structured summaries written (frequency, patterns, signals)

---

## Other Potential Connectors

| Service | MCP Server | Primary Use | Signal Type |
|---------|-----------|-------------|-------------|
| GitHub | GitHub MCP | Repo activity, PR patterns, commit frequency | Behavioral (execution patterns) |
| Notion | Notion MCP | Document analysis, project state | Structural (organization patterns) |
| Todoist / Linear | Various | Task completion patterns, backlog health | Behavioral (execution gaps) |
| Health apps | Custom | Sleep, exercise, nutrition data | Physiological |

For any connector not listed:
1. Follow the same consent and privacy protocols
2. Define data scope before connecting
3. Extract only structured summaries, never raw data
4. Document what was extracted and where it was mapped

---

## Cross-Source Correlation

The most valuable findings come from correlating signals across multiple sources:

| Pattern | Sources | Interpretation | Confidence |
|---------|---------|----------------|------------|
| Calendar packed + email backlog + declining response time | Calendar + Email + Messages | Systemic overload | High |
| Calendar empty + low email + messaging silence | Calendar + Email + Messages | Potential withdrawal or intentional retreat | Medium |
| New commitments increasing + existing tasks incomplete | Calendar + Task manager | Over-commitment trajectory | High |
| Contact frequency declining + relationship described as "fine" | Messages + Conversation | Possible relationship drift masked by narrative | Medium |
| Late-night activity + low morning response + sleep mentions | Messages + Calendar + Conversation | Sleep/energy issue affecting all domains | High |

---

## Revoking Access

The user can revoke any connector at any time by:
1. Removing the MCP server configuration from settings
2. Optionally requesting deletion of summaries derived from that source

When access is revoked, no further data from that source is processed. Existing summaries remain unless the user requests removal.
