# PRD Gap Analysis — Key Functionality

**Date:** 2026-04-28  
**Scope reviewed:** `docs/`, `skills/`, `agents/`, `status/`, `openclaw.plugin.json`, routing + confidence docs.

---

## Existing PRDs

1. `docs/PRD-framework-routing.md` (routing layer)
2. `docs/PRD-confidence-language-overlay.md` (language confidence overlay)

These are solid, but they cover only part of the platform's core behavior.

---

## Key PRD Coverage Plan (Recommended)

**Update (2026-04-28):** Top 4 high-priority PRDs from this list are now created (complete):
- `docs/PRD-scan-skill-v2.md`
- `docs/PRD-continuous-learning-status-engine.md`
- `docs/PRD-agent-orchestration-memory-policy.md`
- `docs/PRD-safety-privacy-data-governance.md`

## 1) PRD: Scan Skill v2 (Input → Signal Detection → Recommendations) — **High priority** ✅ created

**Why it's key**
- `scan` is the main onboarding and ingestion path.
- It drives framework suggestions and status update proposals.

**What to define**
- Input modes and supported artifacts
- Signal extraction schema
- Route + framework recommendation scoring
- Confidence thresholds and fallback behavior
- Output contract for suggested status/people/decision updates
- Evaluation metrics (precision, relevance, false positives)

---

## 2) PRD: Continuous Learning + Status Update Engine — **High priority** ✅ created

**Why it's key**
- This is the persistence layer that makes Mirror Palace more than a static framework library.

**What to define**
- Update proposal lifecycle (detect → propose → confirm → write)
- Conflict resolution for overlapping updates
- Write safety and rollback behavior
- Domain-specific quality constraints
- Freshness/recency weighting

---

## 3) PRD: Agent Orchestration + Memory Policy — **High priority** ✅ created

**Why it's key**
- Multiple archetypes and orchestration docs exist, but no product-level PRD for runtime coordination.

**What to define**
- Agent selection strategy by task class
- Shared memory read/write rules
- Arbitration when agents disagree
- Session lifecycle and handoff states
- Observability and audit logging

---

## 4) PRD: Safety, Privacy, and Data Governance — **High priority** ✅ created

**Why it's key**
- The system handles highly sensitive personal context.

**What to define**
- Data classification and retention policy
- Redaction/anonymization requirements
- Access controls and consent boundaries
- Safety guardrails for high-distress content
- Abuse prevention and incident response

---

## 5) PRD: Integrations Runtime (OpenClaw / MCP / External Connectors) — **Medium priority**

**Why it's key**
- Integrations determine what data is available and how reliably it flows.

**What to define**
- Connector capability model
- Error handling and degraded modes
- Sync cadence and staleness semantics
- Permission scopes
- Integration health SLAs

---

## 6) PRD: Daily Briefing Engine + UX Contract — **Medium priority**

**Why it's key**
- Daily loop is core user experience and retention mechanism.

**What to define**
- Briefing generation pipeline
- Priority ranking logic
- State-responsive pacing rules
- Output templates per energy/activation level
- Success metrics (engagement + action completion)

---

## Priority Order (Suggested)

1. Scan Skill v2 PRD
2. Continuous Learning + Status Update Engine PRD
3. Agent Orchestration + Memory Policy PRD
4. Safety, Privacy, and Data Governance PRD
5. Integrations Runtime PRD
6. Daily Briefing Engine PRD

---

## Suggested next move

Start with **PRD: Scan Skill v2** because it is the highest-leverage gateway into routing, updates, and daily workflows.
