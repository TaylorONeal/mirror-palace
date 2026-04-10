# CLAUDE.md — Mirror Palace

## What This Repo Is
A cognitive framework toolkit. 35+ psychology, decision-making, and behavioral science frameworks organized for both human reference and AI agent consumption. Includes a life domain status tracking system, people records, decisions ledger, personality assessments, 6 agent archetypes, and 2 core skills (scan + setup).

## Every Session
1. Read this file
2. Read `index.md` — the master framework routing table
3. If working with a user's data: check `status/` for current state

## Framework Structure
Every framework lives in `frameworks/{category}/{name}/` with exactly 4 files:
- `theory.md` — deep explanation of the concept (NO author names anywhere)
- `template.md` — ready-to-fill starter worksheet
- `agent-prompt.md` — copy-paste prompt snippet for agents applying this framework
- `README.md` — YAML front-matter with `use-when`, `avoid-when`, `updates`, `pairs-with` fields

## Continuous Learning Protocol
This is critical. Mirror Palace is a living system, not a static reference.

**On every interaction, check:**
1. Did the user reveal information that updates a status domain? → Propose a 1-line update
2. Did a relationship dynamic surface? → Propose a people record update
3. Is a decision being discussed? → Check/create a decisions ledger entry
4. Did a personality pattern emerge? → Note it in the relevant assessment template
5. Did a framework apply? → Check the framework's `updates` field in its README.md for what else to refresh

**Low friction is mandatory.** Don't ask the user to fill out forms. Propose specific updates based on what they said, confirm with a yes/no, then write.

## Status System
- `status/domains/` — 10 life domains with RYG status, scores, domain-specific columns
- `status/people/` — relationship records with support%, challenge%, needs met/unmet
- `status/decisions/` — decision ledger with status, reversibility, domain/people links
- `status/ISSUE-INDEX.md` — master cross-domain index
- `status/people/PEOPLE-INDEX.md` — master people index
- `status/decisions/DECISIONS-INDEX.md` — master decisions index

## Agent Archetypes
Six pre-built agent personalities in `agents/archetypes/`. Each has SOUL.md (identity), MEMORY.md (context), HEARTBEAT.md (schedule), and a README.md explaining when to deploy it.

## Skills
- **scan** — Analyze documents, conversations, or connected services to recommend frameworks and populate the status system
- **setup** — Integrate mirror-palace into an existing repo (AGENTS.md, CLAUDE.md patches) with user consent at every step

## Two-Repo Architecture

Mirror Palace exists in two places:

| Repo | Visibility | Contains |
|------|-----------|----------|
| `flight-deck/mirror-palace/` | **Private** | Your personal data: filled-in status domains, people records, decisions, personality assessments, agent memory |
| `TaylorONeal/mirror-palace` | **Public (open source)** | Blank frameworks, empty templates, general docs. No personal data ever. |

**The public repo is the upstream. The private copy diverges as you use it.**

### What goes where

| Content | Private (flight-deck) | Public (open source) |
|---------|----------------------|---------------------|
| Framework theory/templates/prompts | Yes | Yes |
| Filled-in status domains (scores, notes) | Yes | **NEVER** |
| People records (names, dynamics) | Yes | **NEVER** |
| Decisions ledger (real decisions) | Yes | **NEVER** |
| Personality assessment results | Yes | **NEVER** |
| Agent MEMORY.md (observations) | Yes | **NEVER** |
| New frameworks (general) | Yes | Yes (sync upstream) |
| docs/, guides/, examples/ | Yes | Yes |

### Syncing: pulling upstream improvements

When the public repo gets new frameworks or improvements:

```bash
cd /path/to/flight-deck/mirror-palace
git remote add upstream https://github.com/TaylorONeal/mirror-palace.git  # one-time
git fetch upstream main
git checkout upstream/main -- frameworks/NEW-CATEGORY/NEW-FRAMEWORK/
```

Only pull specific files/folders. Never do a full merge — it would overwrite your filled-in data.

### Syncing: pushing general improvements upstream

When you improve a framework theory, template, or agent-prompt (not personal data):

```bash
cd /path/to/flight-deck/mirror-palace
# Verify the file has NO personal data
grep -i "YOURNAME\|specific-person\|real-address" path/to/file.md
# If clean, copy to a temp clone and push
```

Or simpler: edit directly on GitHub / in a clean clone of the public repo.

### Safety rules for syncing

1. **NEVER push status/, people records, or decisions to the public repo**
2. **NEVER push agent MEMORY.md files to the public repo** — they contain observations about you
3. **Always grep for personal data before pushing anything upstream**
4. **When in doubt, don't push** — it's easier to manually copy a clean file than to scrub a leaked one

## Rules
- **No author names.** Frameworks are referenced by concept only. Never attribute to specific people.
- **No personal data in the public repo.** Templates are blank starters. Filled-in data stays in flight-deck only.
- **Influence defense is defensive.** The influence-defense frameworks are about recognizing techniques used on you, never about using them on others.
- **Depth over breadth.** Every framework should be genuinely useful, not a placeholder.
