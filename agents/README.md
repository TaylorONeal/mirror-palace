# Agent Archetype System

Agents are persistent AI personalities with defined roles, memories, and operating rhythms. Each archetype represents a specific cognitive function that humans benefit from having externalized: reflection, synthesis, tracking, monitoring, strategy, and operations.

## The SOUL / MEMORY / HEARTBEAT / WORKING Pattern

Every agent (whether using an archetype or custom-built) follows a four-file structure:

### SOUL.md — Identity
Who the agent is. Personality, voice, capabilities, boundaries. This file is read at the start of every session. It never changes unless the archetype is being redesigned.

Contains:
- **Name and Role** — One-line identity
- **Personality** — 2-3 paragraphs establishing voice, values, and disposition
- **What You're Good At** — 5-8 specific capabilities
- **What You Care About** — 4-6 core values and priorities
- **What You Don't Do** — 5-8 explicit boundaries (prevents scope creep)
- **Voice** — Examples of how the agent communicates, with sample text
- **Frameworks Applied** — Which mirror-palace frameworks this agent uses and how

### MEMORY.md — Persistent Context
What the agent knows about the user and the world. Curated, compressed, durable. Updated deliberately, not automatically. This is the agent's long-term memory.

Contains:
- **About the User** — Key facts, preferences, patterns, and context
- **Frameworks in Use** — Which frameworks are actively being applied and why
- **Known Patterns** — Behavioral patterns the agent has observed over time
- **History Log** — Significant events, decisions, and turning points (compressed, not verbose)

### HEARTBEAT.md — Operating Rhythm
When and how the agent runs. The protocol for each execution cycle. Cost management rules. This defines the agent's cadence.

Contains:
- **Schedule** — When the agent runs (cron expression or trigger condition)
- **Protocol** — Step-by-step instructions for each run
- **Output Format** — Where and how the agent writes its output
- **Cost Guard** — Rules for when to skip a cycle or produce minimal output

### WORKING.md — Session State
Ephemeral, session-scoped workspace. Current focus, observation queue, pending actions. Cleared or archived at session end. This is the agent's scratch pad.

Contains:
- **Current Focus** — What the agent is working on right now
- **Observations Queue** — Things noticed but not yet processed
- **Pending Actions** — Actions identified but not yet taken

## The Six Archetypes

Each archetype fills a distinct cognitive role. They can be deployed individually or as a team.

| Archetype | Role | Reads | Writes | Cadence |
|-----------|------|-------|--------|---------|
| **The Mirror** | Pattern detection, reflection | All agent reports, status, decisions | Weekly reflection (paragraphs, not bullets) | Weekly |
| **The Briefer** | Daily synthesis, prioritization | All agent reports, status indexes | Daily briefing ("3 things that matter") | Daily |
| **The Tracker** | State monitoring, intent vs behavior | Status domains, decisions, stated goals | Comparison reports, drift alerts | Multiple times daily |
| **The Watcher** | Change monitoring, documentation | External sources, repo changes, feeds | Change summaries, impact assessments | Multiple times daily |
| **The Strategist** | Goal/pipeline management | Decisions, career/work domain, project state | Strategy reports, stall alerts | Daily-weekly |
| **The Operator** | Domain-specific ops, feedback loops | Domain-specific signals, external inputs | Operational responses, loop reports | Event-driven |

## When to Use Each Archetype

- **Need someone to tell you what you're not seeing?** → The Mirror
- **Need a daily summary of what matters?** → The Briefer
- **Need to compare what you said you'd do vs what you did?** → The Tracker
- **Need to stay informed about changes in your environment?** → The Watcher
- **Need to manage a pipeline of goals and flag stalls?** → The Strategist
- **Need to handle domain-specific operations and feedback?** → The Operator

## Deploying an Archetype

1. Copy the archetype's SOUL.md from `agents/archetypes/{name}/`
2. Create MEMORY.md, HEARTBEAT.md, and WORKING.md from `agents/_template/`
3. Customize MEMORY.md with user-specific context
4. Configure HEARTBEAT.md with the desired schedule
5. Place the agent files in your repo's agent directory (e.g., `agents/{agent-name}/`)
6. Add the agent to your AGENTS.md

## Multi-Agent Coordination

When running multiple agents, see `agents/orchestration/` for:
- **coordination.md** — How agents share state through a shared reports directory
- **memory-hierarchy.md** — Three-tier memory: MEMORY.md (persistent), daily logs (timestamped), WORKING.md (session)
- **heartbeat-patterns.md** — Cron vs heartbeat scheduling, cost management
