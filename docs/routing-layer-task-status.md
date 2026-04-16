# Framework Routing Layer — Task Status & Continuation

**Last updated:** 2026-04-16
**Status:** Phases 1-3 Complete. Pushed to GitHub. Phase 4 (refinement) pending.

---

## Completed

- [x] Full repo exploration (36 frameworks, 16 categories, 6 archetypes, 3 skills)
- [x] Read all key reference files: index.md, ARCHITECTURE.md, signal-patterns.md, ROADMAP.md
- [x] Read sample framework READMEs (ACT, NFC, EFT) and agent-prompt.md files
- [x] Read agent archetype SOULs (The Mirror)
- [x] Read integration guides (claude-code-setup.md, openclaw-setup.md)
- [x] Read openclaw.plugin.json and openclaw.bundle.json
- [x] Wrote full PRD at `docs/PRD-framework-routing.md`
  - All 21 sections from the spec
  - 8 detailed route card examples with full sequencing
  - Route card content model / schema
  - Information architecture and cross-linking plan
  - Agent/prompting implications with guardrails
  - Public/private boundary spelled out
  - Phased implementation plan
  - OpenClaw and Claude Code channel support section

## Completed Implementation

### Phase 1: Foundation
- [x] Created `routes/` directory
- [x] Created `routes/_template.md` from the content model in the PRD
- [x] Created `routes/README.md` (route index + how to use routes)
- [x] Wrote first 4 route cards with prompt scaffolds:
  - [x] `routes/shame-spiral.md`
  - [x] `routes/conflict-blame.md`
  - [x] `routes/overthinking-fusion.md`
  - [x] `routes/emotional-signal-unclear.md`

### Phase 2: Full v1
- [x] Wrote remaining 4 route cards with prompt scaffolds:
  - [x] `routes/relationship-rupture.md`
  - [x] `routes/career-stuckness.md`
  - [x] `routes/values-decision-paralysis.md`
  - [x] `routes/friendship-ambiguity.md`
- [x] Updated `index.md` with Routes section and route table
- [x] Added `routes` field to 14 framework READMEs referenced by routes
- [x] Added "Suggested Route" column to all 12 signal tables in `signal-patterns.md`
- [x] Updated `docs/ARCHITECTURE.md` with routing layer (six layers, updated data flow, file stats)
- [x] Updated `CLAUDE.md` to mention routing layer
- [x] Created `FRAMEWORK-MAP.md` (public-ready visualization with definitions)
- [x] Created `framework-map.html` (interactive HTML visualization with mermaid diagrams)

### Phase 3: Agent Integration (complete)
- [x] Prompt scaffolds written in each route card (done as part of Phase 1-2)
- [x] Updated `guides/getting-started.md` to reference routes as entry point
- [x] Updated scan skill (v2.1) to suggest routes alongside frameworks
- [x] Updated `guides/claude-code-setup.md` for managed agent route consumption
- [x] Updated `guides/openclaw-setup.md` for route consumption
- [x] Route usage instructions embedded in `routes/README.md` (serves as agent guide)

### Phase 4: Refinement
- [ ] Collect usage feedback
- [ ] Consider v2 situation classes (trauma processing, system design)
- [ ] Consider `route` skill (executable routing, not just reference)

## Key Files

| File | Status | Notes |
|------|--------|-------|
| `docs/PRD-framework-routing.md` | Complete | The full PRD |
| `docs/routing-layer-task-status.md` | This file | Continuation tracking |
| `routes/` | Complete | 8 route cards + template + README |
| `docs/ROADMAP.md` | Updated | References PRD and current initiative |
| `CLAUDE.md` | Updated | Routing layer + git/SSH + lessons learned |
| `FRAMEWORK-MAP.md` | Complete | Public-ready visual reference |
| `framework-map.html` | Complete | Interactive HTML visualization |

### Git & Deployment Setup (complete)
- [x] SSH deploy key configured (mirror-palace-sandbox, ed25519, read-write)
- [x] Sandbox can push directly to GitHub — no manual relay
- [x] Lessons learned logged in CLAUDE.md

## Continuation Prompt

If picking this up in a new session, start with:

> Read `CLAUDE.md` and `docs/routing-layer-task-status.md` in the mirror-palace repo. Phases 1-3 of the framework routing layer are complete and pushed to GitHub. The remaining work is Phase 4 (refinement): collect usage feedback, consider v2 situation classes (trauma processing, system design), and potentially build a `/route` executable skill. For git: SSH deploy key is configured, sandbox can push directly.
