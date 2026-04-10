# Integration Checklist

Step-by-step guide for integrating mirror-palace into an existing repository. This checklist follows the setup skill's 6 phases and can be used manually or as a reference during automated setup.

## Pre-Flight

- [ ] Mirror-palace repo is accessible from target repo's machine
- [ ] Target repo has a CLAUDE.md (or you're ready to create one)
- [ ] Target repo has an AGENTS.md (or you're ready to create one)
- [ ] You know which frameworks are relevant to this repo's domain
- [ ] You know which agent archetypes you want to deploy

## Phase 1: Discover

- [ ] Read target repo's CLAUDE.md
- [ ] Read target repo's AGENTS.md
- [ ] List existing agents in agents/ directory
- [ ] Check for existing framework references
- [ ] Check for existing status tracking
- [ ] Check .claude/settings.json for existing MCP or hook configs
- [ ] Document findings in a discovery summary

## Phase 2: Recommend

- [ ] Draft integration plan based on discovery
- [ ] List CLAUDE.md changes needed
- [ ] List AGENTS.md changes needed
- [ ] Select framework reference mode (symlink / copy / reference)
- [ ] Select agent archetypes to deploy
- [ ] Identify process integration points (heartbeats, status checks)
- [ ] Get user approval on the plan

## Phase 3: Framework References

- [ ] User has chosen reference mode
- [ ] If symlink: create symlinks, verify they resolve
- [ ] If copy: copy relevant framework directories, include index.md
- [ ] If reference: add framework paths to CLAUDE.md
- [ ] Verify at least one framework is readable from target repo
- [ ] Confirm index.md is accessible for routing

## Phase 4: Agent Integration

For each archetype being deployed:

- [ ] Create agents/{name}/ directory
- [ ] Copy SOUL.md from mirror-palace archetype
- [ ] Create MEMORY.md from template
- [ ] Create HEARTBEAT.md from template
- [ ] Create WORKING.md from template
- [ ] Customize SOUL.md with repo-specific context
- [ ] Pre-populate MEMORY.md with known user context
- [ ] Configure HEARTBEAT.md schedule and protocol
- [ ] Add agent to AGENTS.md

After all agents:

- [ ] Create shared/ reports directory (if multi-agent)
- [ ] Verify no schedule conflicts between agents
- [ ] Confirm AGENTS.md lists all agents with correct details

## Phase 5: Process Integration

- [ ] Add Continuous Learning Protocol to CLAUDE.md
- [ ] Add status domain check steps to each agent's HEARTBEAT.md
- [ ] Add framework trigger cascade steps to HEARTBEAT.md
- [ ] Configure shared reports directory paths in each agent
- [ ] Set up memory hierarchy (MEMORY.md, logs/, WORKING.md) per agent

## Phase 6: Verify

- [ ] CLAUDE.md references mirror-palace correctly
- [ ] AGENTS.md lists all deployed agents
- [ ] Each agent has all 4 files
- [ ] Framework references resolve (no broken links)
- [ ] HEARTBEAT.md files include framework and status check steps
- [ ] Shared reports directory exists and is writable
- [ ] No broken cross-references in any file
- [ ] Agent framework references match existing frameworks
- [ ] No schedule conflicts detected

## Post-Integration

- [ ] Run scan skill in conversation mode to populate status system
- [ ] Review populated status domains with user
- [ ] Run first heartbeat cycle for each agent
- [ ] Confirm agents produce expected output
- [ ] Schedule re-verification for 1 week after integration
