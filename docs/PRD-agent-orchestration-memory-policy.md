# PRD: Agent Orchestration + Memory Policy

**Status:** Complete (Ready for implementation)  
**Date:** 2026-04-28  
**Location:** `docs/PRD-agent-orchestration-memory-policy.md`

---

## 1. Summary

Define how archetype agents are selected, coordinated, and governed when reading/writing shared memory during a session.

---

## 2. Goals

- Deterministic agent selection and handoff rules.
- Clear memory read/write boundaries.
- Conflict resolution when agents disagree.
- Full observability of orchestration decisions.

## Non-goals

- Building new archetypes in this phase.

---

## 3. Orchestration Model

### Selection
- Primary agent selected by task class + route.
- Optional secondary reviewer agent for high-risk operations.

### Coordination
- Shared context packet passed between agents.
- Max one writer role active at a time.

### Arbitration
- Disagreement policy:
  1. compare evidence
  2. invoke tie-break rubric
  3. fall back to conservative response

---

## 4. Memory Policy

- Read tiers: framework memory, session memory, status memory.
- Write permissions by role:
  - analyzer: no writes
  - proposer: draft updates only
  - writer: confirmed updates only
- Mandatory provenance tags for writes.

---

## 5. Requirements

- Session state machine with explicit transitions.
- Handoff envelope schema.
- Arbitration logs persisted for inspection.
- Timeouts and graceful degradation if secondary agent unavailable.

---

## 6. Success Metrics

- Orchestration error rate
- Handoff success rate
- Arbitration frequency + resolution time
- Write policy violation count

---

## 7. Risks and Mitigations

- Agent thrash -> cap handoffs per turn
- Conflicting outputs -> single-writer enforcement
- Latency inflation -> optional reviewer only for high-risk tasks

---

## 8. Definition of Done

- [x] PRD approved
- [ ] Selection rules implemented
- [ ] Handoff + arbitration contracts implemented
- [ ] Write permission enforcement implemented
- [ ] Orchestration telemetry dashboard live

