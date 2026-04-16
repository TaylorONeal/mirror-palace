# Framework Routing Layer — Task Status & Continuation

**Last updated:** 2026-04-16
**Status:** Phase 1 + Phase 2 Complete. Phase 3 (agent integration) pending.

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

### Phase 3: Agent Integration (remaining)
- [x] Prompt scaffolds written in each route card (done as part of Phase 1-2)
- [ ] Update `guides/getting-started.md` to reference routes as entry point
- [ ] Update scan skill to suggest routes alongside frameworks
- [ ] Update `guides/claude-code-setup.md` for managed agent route consumption
- [ ] Update `guides/openclaw-setup.md` for route consumption
- [ ] Write a "How to Use Routes" agent guide

### Phase 4: Refinement
- [ ] Collect usage feedback
- [ ] Consider v2 situation classes (trauma processing, system design)
- [ ] Consider `route` skill (executable routing, not just reference)

## Key Files

| File | Status | Notes |
|------|--------|-------|
| `docs/PRD-framework-routing.md` | Complete | The full PRD |
| `docs/routing-layer-task-status.md` | This file | Continuation tracking |
| `routes/` | Not yet created | Phase 1 deliverable |
| `docs/ROADMAP.md` | Needs update | Should reference PRD |
| `CLAUDE.md` | Needs update | Should mention routing layer |

## Continuation Prompt

If picking this up in a new session, start with:

> Read `docs/PRD-framework-routing.md` and `docs/routing-layer-task-status.md` in the mirror-palace repo. The PRD for the framework routing layer is complete. Continue with Phase 1 implementation: create the `routes/` directory, the route card template, the route index README, and the first 4 route cards (shame-spiral, conflict-blame, overthinking-fusion, emotional-signal-unclear). Extract the detailed route specs from the PRD's Section 10 into standalone files. Keep everything public-safe — no personal data, no user-specific content.
