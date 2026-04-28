# PRD: Scan Skill v2

**Status:** Complete (Ready for implementation)  
**Date:** 2026-04-28  
**Location:** `docs/PRD-scan-skill-v2.md`

---

## 1. Summary

Scan Skill v2 defines Mirror Palace's primary ingestion and recommendation engine: ingest user artifacts, detect signals, map to routes/frameworks, and propose structured updates to status/people/decisions.

---

## 2. Goals

- Standardize input/output contract across all scan entry modes.
- Improve recommendation quality and explainability.
- Reduce false-positive framework suggestions.
- Generate safe, low-friction update proposals.

## Non-goals

- Autonomous writing to user records without confirmation.
- Replacing route cards or framework content.

---

## 3. Inputs and Modes

Supported inputs:
- conversation transcript
- document(s)
- connector snapshots (calendar/tasks/notes)
- mixed bundle

Required input contract:

```json
{
  "mode": "conversation|documents|connectors|mixed",
  "content": "string|array",
  "context": {"user_goal": "string|null"}
}
```

---

## 4. Core Pipeline

1. Parse and normalize input
2. Extract signal candidates
3. Score signal confidence
4. Route match (primary + fallback)
5. Framework recommendation ranking
6. Draft update proposals
7. Ask for user confirmation

---

## 5. Product Requirements

- Deterministic signal layer (keywords/patterns) plus optional model layer.
- Top-3 framework recommendations with rationale.
- Route recommendation with fallback route.
- Update proposal blocks for:
  - `status/domains`
  - `status/people`
  - `status/decisions`
- Inline confidence indicators for each recommendation.

---

## 6. Output Contract

```json
{
  "signals": [{"id": "string", "confidence": 0.0, "evidence": ["string"]}],
  "routes": {"primary": "string", "fallback": ["string"]},
  "frameworks": [{"id": "string", "score": 0.0, "why": "string"}],
  "proposed_updates": {
    "domains": ["string"],
    "people": ["string"],
    "decisions": ["string"]
  }
}
```

---

## 7. Quality Metrics

- Recommendation precision@3
- Route match agreement with human reviewers
- False positive update proposal rate
- User accept/reject ratio for proposed updates

---

## 8. Risks and Mitigations

- Over-triggering frameworks -> threshold tuning + reviewer corpus
- Opaque recommendations -> rationale required per suggestion
- Update fatigue -> cap proposals per run + dedupe

---

## 9. Definition of Done

- [x] PRD approved
- [ ] Implement v2 input/output contract
- [ ] Build evaluation corpus + baseline metrics
- [ ] Route + framework ranking shipped behind feature flag
- [ ] Update proposal UX and confirm flow shipped

