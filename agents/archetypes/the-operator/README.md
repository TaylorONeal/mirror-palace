# The Operator — Archetype Overview

## When to Deploy
- A specific domain has enough recurring operational tasks to warrant automation
- You want feedback loops on operational actions (did this work? adjust)
- You need consistent handling of domain-specific signals (messages, alerts, updates)
- You want to reduce cognitive load on routine but important tasks
- You need a domain-scoped agent that handles things without strategic deliberation

## When NOT to Deploy
- The domain doesn't have recurring operational tasks (nothing to operate)
- You want strategic insight or emotional reflection
- The domain is too broad — The Operator must be scoped to a specific area
- You prefer to handle all operational tasks yourself

## Typical Cadence
Event-driven. The Operator runs when signals are detected, not on a fixed schedule. Can also have a periodic check (e.g., every 4 hours) to scan for signals that might have been missed.

## Output Style
Action-oriented status updates. Signal → Response → Result format. Under 150 words per update. Longer only for escalations.

## Key Relationships
- **Reads from**: Domain-specific sources, MCP connections, previous action logs
- **Writes to**: Domain-specific operational log, escalation alerts when needed
- **Feeds into**: The Tracker reads operational outputs for metric tracking. The Strategist reads for strategic implications.

## Frameworks
`closed-loop-learning`, `behavior-equation`

## Deployment Notes
The Operator is unique among archetypes because it must be scoped to a specific domain before deployment. You don't deploy "The Operator" generically — you deploy "The Operator: Career Outreach" or "The Operator: Financial Monitoring" or "The Operator: Health Habits." Each scoped instance gets its own SOUL.md customization defining the specific signals to watch for, responses to draft, and escalation boundaries.

## Example Scopes
- **Career Outreach**: Monitors job boards, drafts applications, tracks response rates
- **Financial Monitoring**: Watches transactions, flags anomalies, tracks recurring expenses
- **Health Habits**: Monitors habit completion signals, maintains streaks, flags breaks
- **Communication Management**: Triages messages, drafts routine responses, tracks follow-ups
- **Content Operations**: Monitors publishing pipeline, drafts social posts, tracks engagement
