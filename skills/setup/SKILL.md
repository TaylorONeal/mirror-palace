---
name: setup
description: Integrate mirror-palace into an existing repository with user consent at every step
version: 2.0.0
trigger-patterns:
  - "set up mirror-palace"
  - "integrate mirror-palace into my repo"
  - "add frameworks to my project"
  - "configure agents with mirror-palace"
  - "set up my agents"
requires:
  - "Target repo must exist and be accessible"
  - "mirror-palace repo must be accessible (for framework references)"
  - "User consent at every phase"
outputs:
  - "Updated CLAUDE.md with mirror-palace references"
  - "Updated AGENTS.md with framework and status integration"
  - "Framework references (symlinked, copied, or referenced)"
  - "Agent archetypes deployed and customized"
  - "Process integration (heartbeat modifications, status checks)"
  - "Verification report confirming consistency"
---

# Setup

## Purpose
Integrates mirror-palace frameworks, agents, and status tracking into an existing project repository. This is the bridge between mirror-palace as a standalone toolkit and mirror-palace as an active part of your development or work environment.

Setup is consent-driven. Every change is proposed, explained, and confirmed before being applied. Nothing is written without explicit approval.

## Phases

| Phase | Description | Consent Required |
|-------|-------------|------------------|
| 1. Discover | Read target repo configuration | Yes (before reading files) |
| 2. Recommend | Propose integration plan | Yes (approve plan before proceeding) |
| 3. Framework References | Set up access to frameworks | Yes (choose reference mode) |
| 4. Agent Integration | Deploy and customize archetypes | Yes (per agent and per file change) |
| 5. Process Integration | Add framework check-ins to workflows | Yes (per modification) |
| 6. Verify | Read back and confirm consistency | No (read-only audit) |

---

## Phase 1: Discover

### Purpose
Understand what the target repo already has so recommendations are specific and non-destructive.

### Steps

**1.1 — Read Repo Structure**
Scan the target repo for key files:
- `CLAUDE.md` — existing repo context
- `AGENTS.md` — existing agent configuration
- `agents/` — existing agent directories and files
- `.claude/settings.json` — harness configuration
- Any existing framework references, status tracking, or related tooling

**1.2 — Identify Existing Patterns**
Assess:
- Are agents already defined? How many? What roles?
- Is there any framework referencing (even informal)?
- Is there any status tracking or life domain monitoring?
- Does CLAUDE.md reference any behavioral or decision frameworks?
- Are there heartbeat or cron configurations?

**1.3 — Run Scan (Optional)**
Offer to run the scan skill in Repo mode (see `skills/scan/SKILL.md` Mode 4) for a detailed gap analysis. If the user agrees, run it and use the output to inform Phase 2.

**Output:** Discovery summary documenting what exists, what's missing, and what's relevant.
**Consent:** Yes — ask before reading any files.

---

## Phase 2: Recommend

### Purpose
Propose a specific integration plan based on what was discovered.

### Steps

**2.1 — Generate Integration Plan**
Based on Phase 1 findings, propose:
1. **CLAUDE.md changes** — What to add (see `references/claude-md-patch.md`)
2. **AGENTS.md changes** — What to add (see `references/agents-md-patch.md`)
3. **Framework reference mode** — Symlink, copy, or reference (see Phase 3)
4. **Agent archetypes to deploy** — Which of the 6 archetypes fit this repo's needs
5. **Process changes** — Heartbeat/cron modifications, status check additions
6. **Estimated effort** — How long the integration will take

**2.2 — User Review**
Present the plan. Walk through each proposed change. The user can approve all, approve some, modify, or reject.

**Output:** Approved integration plan.
**Consent:** Yes — user must approve the plan before proceeding.

---

## Phase 3: Framework References

### Purpose
Make mirror-palace frameworks accessible from the target repo.

### Mode Selection

| Mode | How It Works | Best For | Trade-off |
|------|-------------|----------|-----------|
| **Symlink** | Create symlinks from target repo to mirror-palace | Repos on the same machine | Always current; breaks if mirror-palace moves |
| **Copy** | Copy relevant framework files into target repo | Standalone repos, distribution | Self-contained; may become stale |
| **Reference** | Add paths and descriptions to CLAUDE.md only | Minimal integration | Lightweight; agent must read from external path |

### Steps

**3.1 — Choose Mode**
Present the three modes with trade-offs. User selects one.

**3.2 — Execute**

If **symlink**:
```bash
# Create a frameworks/ symlink in target repo
ln -s /path/to/mirror-palace/frameworks /path/to/target-repo/frameworks
# Or selective links for specific categories
ln -s /path/to/mirror-palace/frameworks/decision-making /path/to/target-repo/frameworks/decision-making
```

If **copy**:
- Copy only the framework categories relevant to this repo (not all categories unless requested)
- Include all 4 files per framework (theory.md, template.md, agent-prompt.md, README.md)
- Copy `index.md` for routing

If **reference**:
- Add a `## Mirror Palace Frameworks` section to CLAUDE.md with the external path
- See `references/claude-md-patch.md` for the exact text

**Output:** Framework references established.
**Consent:** User chooses mode in 3.1.

---

## Phase 4: Agent Integration

### Purpose
Deploy agent archetypes from mirror-palace into the target repo, customized for the specific context.

### Steps

**4.1 — Select Archetypes**
Based on Phase 2 recommendations, confirm which archetypes to deploy. For each, explain the role and rationale.

**4.2 — Deploy Archetype Files**
For each approved archetype:
1. Create agent directory: `agents/{agent-name}/`
2. Copy SOUL.md from `mirror-palace/agents/archetypes/{archetype}/SOUL.md`
3. Create MEMORY.md from `mirror-palace/agents/_template/MEMORY.md`
4. Create HEARTBEAT.md from `mirror-palace/agents/_template/HEARTBEAT.md`
5. Create WORKING.md from `mirror-palace/agents/_template/WORKING.md`

**4.3 — Customize**
For each deployed agent:
- **SOUL.md**: Adjust personality if needed, add repo-specific context
- **MEMORY.md**: Pre-populate "About the User" with known context
- **HEARTBEAT.md**: Configure schedule per user preferences and `mirror-palace/agents/orchestration/heartbeat-patterns.md`
- **WORKING.md**: Leave empty (session-scoped)

**4.4 — Update AGENTS.md**
Add each new agent to AGENTS.md (see `references/agents-md-patch.md` for format).

**Output:** Agent files created and AGENTS.md updated.
**Consent:** Yes — approve each archetype, review customizations, approve AGENTS.md changes.

---

## Phase 5: Process Integration

### Purpose
Add framework check-ins and status updates to existing workflows so mirror-palace becomes part of the daily operating rhythm.

### Steps

**5.1 — Heartbeat Modifications**
For each agent's HEARTBEAT.md, add:
- Status domain check step (read relevant status files, flag staleness)
- Framework trigger check (when a framework fires, check what else to update per `index.md`)
- Continuous Learning Protocol steps (domain/people/decision update checks)

**5.2 — CLAUDE.md Continuous Learning**
Add the Continuous Learning Protocol to CLAUDE.md so every session checks for status updates. See `references/claude-md-patch.md`.

**5.3 — Shared Reports Directory**
If deploying multiple agents, create the shared reports directory and configure agent output locations per `mirror-palace/agents/orchestration/coordination.md`.

**Output:** Process integration complete.
**Consent:** Yes — approve each modification individually.

---

## Phase 6: Verify

### Purpose
Read back everything and confirm consistency. No changes made — read-only audit.

### Checklist

- [ ] CLAUDE.md references mirror-palace correctly
- [ ] AGENTS.md lists all deployed agents with correct roles and schedules
- [ ] Each agent has all 4 files (SOUL.md, MEMORY.md, HEARTBEAT.md, WORKING.md)
- [ ] Framework references are accessible (symlinks resolve, copies exist, paths are valid)
- [ ] HEARTBEAT.md files include framework and status check steps
- [ ] Shared reports directory exists (if multi-agent)
- [ ] No broken cross-references
- [ ] Agent framework references match frameworks that actually exist
- [ ] No schedule conflicts (two agents writing to same file simultaneously)

### Output
Verification report:
- What was set up
- What's working correctly
- Any issues found (with specific fixes)
- Recommended next steps (e.g., "Run the scan skill in conversation mode to populate your status system")

---

## Consent Protocol

At every phase, the setup skill:
- Explains what it wants to do and why
- Shows the exact changes it would make (diffs for file modifications)
- Waits for explicit approval before proceeding
- Accepts "skip this" for any individual step
- Never writes to files outside the target repo without permission
- Never modifies existing content without showing the proposed change first

## Rollback

If setup needs to be reversed:
1. All changes are documented in a setup log
2. File modifications include the original content for restoration
3. Symlinks can be removed without affecting source files
4. Copied files are listed for easy deletion
5. AGENTS.md and CLAUDE.md patches are clearly delimited for easy removal

## Related Skills
- **scan** (Repo mode) — Invoked during Phase 1 for detailed gap analysis

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | — | Initial specification with 6 phases |
| 2.0 | — | Added detailed steps, consent gates, YAML front-matter, cost estimates |
