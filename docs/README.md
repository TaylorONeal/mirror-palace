# Docs

Design documents for Mirror Palace. Two kinds live here: **living reference docs** (kept current as the system evolves) and **point-in-time documents** (PRDs and working notes that describe the system as it was when they were written — counts and inventories in these are historical, not authoritative).

The authoritative current-state references are always [`README.md`](../README.md), [`index.md`](../index.md), and [`FRAMEWORK-MAP.md`](../FRAMEWORK-MAP.md) at the repo root.

---

## Living Reference

| Doc | What It Covers |
|-----|----------------|
| [ARCHITECTURE.md](ARCHITECTURE.md) | The six layers, data flow, agent orchestration, memory hierarchy, integration points |
| [HOW-IT-WORKS.md](HOW-IT-WORKS.md) | The memory architecture, retrieval system, and continuous learning loop |
| [WHY.md](WHY.md) | The problem Mirror Palace solves and why it exists |
| [ROADMAP.md](ROADMAP.md) | Philosophy and direction — how the system thinks about what it's building |
| [PUBLIC-REPO-SECURITY.md](PUBLIC-REPO-SECURITY.md) | The no-personal-data policy and how it's enforced |

## PRDs (Point-in-Time)

Product requirement documents. Status is noted in each header; some are implemented, some pending.

| PRD | Status |
|-----|--------|
| [PRD-framework-routing.md](PRD-framework-routing.md) | Implemented — became [`routes/`](../routes/) |
| [PRD-nvc-translation.md](PRD-nvc-translation.md) | Implemented — became `frameworks/coaching/nvc-translation/` |
| [PRD-continuous-learning-status-engine.md](PRD-continuous-learning-status-engine.md) | Ready for implementation |
| [PRD-scan-skill-v2.md](PRD-scan-skill-v2.md) | Ready for implementation |
| [PRD-agent-orchestration-memory-policy.md](PRD-agent-orchestration-memory-policy.md) | Ready for implementation |
| [PRD-safety-privacy-data-governance.md](PRD-safety-privacy-data-governance.md) | Ready for implementation |
| [PRD-confidence-language-overlay.md](PRD-confidence-language-overlay.md) | Ready for implementation — specs in [confidence-language/](confidence-language/) |
| [PRD-gap-analysis.md](PRD-gap-analysis.md) | Analysis of coverage gaps across the PRD set |

## Working Notes (Point-in-Time)

| Doc | What It Covers |
|-----|----------------|
| [routing-layer-task-status.md](routing-layer-task-status.md) | Build status and continuation notes for the routing layer |
| [signal-processing-integration-notes.md](signal-processing-integration-notes.md) | Rationale and integration notes for the signal-processing framework |
| [response-discerner-pattern.md](response-discerner-pattern.md) | Pattern for inserting a discernment step between signal detection and response |
| [confidence-language/](confidence-language/) | Confidence language overlay specification: taxonomy, scoring, phrasebook |
| [slides/](slides/) | Presentation material |
