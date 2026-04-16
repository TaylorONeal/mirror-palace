# Claude Code Setup

How to integrate Mirror Palace with Claude Code.

## Option 1: Reference Mode (Lightest)

Clone mirror-palace adjacent to your main repo:
```
~/projects/
├── your-repo/
└── mirror-palace/
```

Add to your repo's `CLAUDE.md` or `AGENTS.md`:
```markdown
## Knowledge Architecture
This repo uses mirror-palace cognitive frameworks.
Framework reference: ../mirror-palace/frameworks/
Framework index: ../mirror-palace/index.md
Route index: ../mirror-palace/routes/README.md

When facing a user situation:
1. Check ../mirror-palace/routes/README.md to match the situation to a route
2. If a route matches, follow its recommended framework sequence and guardrails
3. If no route matches, consult ../mirror-palace/index.md for individual frameworks
4. Load the relevant framework's agent-prompt.md
5. Apply the framework to the current context
6. Check the route's "Stop If" conditions after each framework step
7. Check the framework's README.md 'updates' field and propose status updates
```

## Option 2: Submodule Mode (Version-Controlled)

```bash
cd your-repo
git submodule add <mirror-palace-url> mirror-palace
```

Then reference as `mirror-palace/frameworks/` in your CLAUDE.md.

## Option 3: Copy Mode (Self-Contained)

Run the **setup** skill to copy selected frameworks into your repo. This creates no external dependency but requires manual updates.

## Adding Skills

To make the scan and setup skills available in Claude Code sessions, add to your `.claude/settings.json` or reference the skill files:

```markdown
## Available Skills
- /scan — Analyze documents and recommend frameworks (see mirror-palace/skills/scan/SKILL.md)
- /setup — Integrate mirror-palace into this repo (see mirror-palace/skills/setup/SKILL.md)
```

## Agent Deployment

To deploy a mirror-palace agent archetype in Claude Code:

1. Copy the archetype's files from `mirror-palace/agents/archetypes/{name}/` to your repo's agents directory
2. Customize the SOUL.md with your context
3. Set up the HEARTBEAT.md with your preferred schedule
4. Initialize MEMORY.md — the scan skill can help populate this

## Continuous Learning Integration

Add this to your CLAUDE.md to enable the continuous learning protocol:

```markdown
## Continuous Learning
After each substantive conversation, check:
1. Did anything update a status domain? → Propose update to status/domains/
2. Did a relationship surface? → Propose people record update
3. Is a decision being discussed? → Check/update decisions ledger
4. Did a framework apply? → Check its README.md 'updates' field
Propose specific 1-line updates. Don't ask the user to fill forms.
```

## Daily Briefing

To use the mirror-palace morning briefing:

1. Reference `mirror-palace/daily/briefing-template.md` in your agent's HEARTBEAT.md
2. Schedule it for your preferred morning time
3. The briefing reads your status data and surfaces priorities, patterns, and stale domains
