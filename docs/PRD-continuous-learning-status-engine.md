# PRD: Continuous Learning + Status Update Engine

**Status:** Complete (Ready for implementation)  
**Date:** 2026-04-28  
**Location:** `docs/PRD-continuous-learning-status-engine.md`

---

## 1. Summary

Define the canonical workflow that turns observations into safe, confirmed, durable updates across domains, people records, and decisions.

---

## 2. Goals

- Make updates consistent, auditable, and low-friction.
- Prevent duplicate or contradictory writes.
- Preserve trust with explicit user confirmation.

## Non-goals

- Hidden profile updates without user awareness.

---

## 3. Update Lifecycle

1. Detect candidate update
2. Attach evidence snippet + confidence
3. Check conflicts with existing records
4. Create proposal (one-line, yes/no)
5. User confirms or declines
6. Write update + append audit metadata

---

## 4. Requirements

- Proposal schema must include target file + field + rationale.
- Conflict resolver for overlapping updates in same cycle.
- Idempotency key to avoid duplicate writes.
- Audit trail entry for every accepted update.
- Graceful rollback for malformed writes.

---

## 5. Data Contract

```json
{
  "proposal": {
    "target": "status/domains/career-work.md",
    "field": "current_status",
    "value": "🟡",
    "why": "Repeated avoidance language in this session",
    "confidence": 0.76,
    "idempotency_key": "string"
  }
}
```

---

## 6. Quality Metrics

- Accepted proposal rate
- Duplicate write rate
- Contradiction rate within 30 days
- User trust score on update relevance

---

## 7. Risks and Mitigations

- Write churn -> cooldown windows + merge rules
- Overfitting to single session -> recency weighting + evidence threshold
- Ambiguous proposals -> strict proposal wording template

---

## 8. Definition of Done

- [x] PRD approved
- [ ] Proposal schema implemented
- [ ] Conflict + dedupe engine implemented
- [ ] Audit trail/rollback path implemented
- [ ] Metrics dashboard live

