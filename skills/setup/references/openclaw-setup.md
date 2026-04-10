# OpenClaw-Specific Integration

Instructions for integrating mirror-palace into a repo that uses the OpenClaw agent framework pattern (AGENTS.md + agents/ directory with SOUL/MEMORY/HEARTBEAT/WORKING structure).

## What OpenClaw Provides

OpenClaw repos typically have:
- `AGENTS.md` — Core operating rules for all agents
- `agents/{name}/SOUL.md` — Agent identity and personality
- `agents/{name}/MEMORY.md` — Persistent context
- `agents/{name}/HEARTBEAT.md` — Schedule and protocol
- `agents/{name}/WORKING.md` — Session state
- `shared/` — Reports directory for inter-agent communication
- Memory logging via `memory/YYYY-MM-DD.md` files

This structure is directly compatible with mirror-palace. The agent archetype pattern in mirror-palace was designed to work with this layout.

## Integration Path

### Step 1: Add Framework References

**Option A: Symlink (recommended for same-machine setups)**
```bash
cd /path/to/your-openclaw-repo
ln -s /path/to/mirror-palace/frameworks frameworks
ln -s /path/to/mirror-palace/index.md mirror-palace-index.md
ln -s /path/to/mirror-palace/status status
```

**Option B: Reference in CLAUDE.md**
Add to your CLAUDE.md:
```markdown
## Mirror Palace
Framework index: /path/to/mirror-palace/index.md
Frameworks: /path/to/mirror-palace/frameworks/
Status: /path/to/mirror-palace/status/
```

### Step 2: Patch AGENTS.md

Add the Mirror Palace Integration section from `agents-md-patch.md` to your existing AGENTS.md. Key additions:

1. **Framework check rule:** When a framework applies, check its `updates` field and propose status updates.
2. **Status check rule:** Agents check relevant status domains for staleness on every run.
3. **Continuous Learning Protocol:** Every interaction checks for domain/people/decision updates.

### Step 3: Enhance Existing Agents

For each existing agent, add framework references to their SOUL.md:

```markdown
## Frameworks Applied
- **[framework-name]**: [How this agent uses it — be specific]
```

And add status check steps to their HEARTBEAT.md:

```markdown
### Mirror Palace Checks (add to protocol)
- Read relevant status domains, check for staleness (30+ days)
- If a framework was triggered, check its `updates` field
- Propose any status/people/decision updates detected
```

### Step 4: Deploy New Archetypes (Optional)

If your OpenClaw repo doesn't already have agents filling these roles, consider adding:

| Gap | Archetype | When to Add |
|-----|-----------|-------------|
| No reflective agent | The Mirror | If all agents are operational/tactical |
| No synthesis agent | The Briefer | If you have 3+ agents producing reports |
| No state monitoring | The Tracker | If habits/targets aren't being tracked |
| No change monitoring | The Watcher | If external changes catch you off guard |
| No pipeline management | The Strategist | If goals stall without anyone noticing |

Copy from `mirror-palace/agents/archetypes/{name}/` and customize.

### Step 5: Status System Setup

If your OpenClaw repo doesn't have a status tracking system:

1. Symlink or copy `mirror-palace/status/` into your repo
2. Run the scan skill in conversation mode to populate initial data
3. Add status domain checks to agent HEARTBEAT.md files
4. Add ISSUE-INDEX.md, PEOPLE-INDEX.md, and DECISIONS-INDEX.md to your agent reading lists

### Step 6: Add Continuous Learning Protocol

Add to CLAUDE.md (see `claude-md-patch.md` for full text):

```markdown
## Continuous Learning Protocol
On every interaction:
1. Status domain update? Propose 1-line update.
2. Relationship dynamic? Propose people record update.
3. Decision discussed? Check/create decisions entry.
4. Framework applied? Check its updates field.
```

This is the critical addition. Without it, mirror-palace is a passive reference library. With it, the system stays current through natural conversation.

## Compatibility Notes

- Mirror-palace's SOUL/MEMORY/HEARTBEAT/WORKING pattern is identical to OpenClaw's agent structure
- The shared reports directory pattern matches OpenClaw's inter-agent communication model
- Memory hierarchy (MEMORY.md persistent, daily logs timestamped, WORKING.md session-scoped) aligns with OpenClaw conventions
- Heartbeat/cron patterns are compatible with OpenClaw scheduling
- No changes to existing agent identities are required — mirror-palace adds capabilities, it doesn't replace them

## Common Issues

| Issue | Fix |
|-------|-----|
| Symlinks don't resolve in Claude sessions | Use absolute paths in CLAUDE.md references instead |
| Agents not checking status domains | Add explicit status check steps to each HEARTBEAT.md |
| Framework references feel bolted on | Add framework references to SOUL.md so they're part of the agent's identity |
| Status data going stale | Add staleness checks to HEARTBEAT.md, set 30-day threshold |
| Too many frameworks overwhelming agents | Assign 2-4 frameworks per agent maximum; use index.md for routing |

## Verification

After integration, verify:
- [ ] Each agent can read at least one framework from mirror-palace
- [ ] index.md is accessible from the repo context
- [ ] Status domains are readable and writable
- [ ] At least one agent has status check steps in its HEARTBEAT.md
- [ ] CLAUDE.md includes the Continuous Learning Protocol
- [ ] A test interaction triggers at least one status update proposal
