# CLAUDE.md — Mirror Palace

## What This Repo Is
A cognitive framework toolkit. 35+ psychology, decision-making, and behavioral science frameworks organized for both human reference and AI agent consumption. Includes a life domain status tracking system, people records, decisions ledger, personality assessments, 6 agent archetypes, and 2 core skills (scan + setup).

## Every Session
1. Read this file
2. Read `index.md` — the master framework routing table
3. If working with a user's data: check `status/` for current state

## Framework Structure
Every framework lives in `frameworks/{category}/{name}/` with exactly 4 files:
- `theory.md` — deep explanation of the concept
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

## Rules
- **No personal data.** Templates are blank starters. Fill them in for your own private use.
- **Influence defense is defensive.** The influence-defense frameworks are about recognizing techniques used on you, never about using them on others.
- **Depth over breadth.** Every framework should be genuinely useful, not a placeholder.
