# PRD: Confidence Language Overlay

**Status:** Complete (Ready for implementation)
**Author:** Mirror Palace Contributors
**Date:** 2026-04-28
**Location:** `docs/PRD-confidence-language-overlay.md`

---

## 1. Summary

Mirror Palace already performs framework routing, cognitive reframing, and behavioral guidance. What it does not yet provide is a dedicated language optimization layer that improves how guidance is phrased for confidence, clarity, and social fit.

This PRD specifies a **Confidence Language Overlay** module that operates **after cognitive/emotional synthesis** and **before final response generation**. The module scores language expression across five dimensions and returns calibrated rewrites aligned to context.

Primary outcomes:
- Improve communication quality without replacing existing psych/NLP logic
- Preserve tone appropriateness (avoid both timid and abrasive outputs)
- Enable explainable, testable language transformations

---

## 2. Problem Statement

### Current gap

Current routes can pick the right frameworks, but output phrasing quality is inconsistent for communication-heavy use cases (boundary setting, disagreement, persuasion, leadership updates).

### Failure patterns to solve

1. **Over-hedging:** strong ideas are phrased with low commitment.
2. **Low agency:** recommendations use passive or ownerless phrasing.
3. **Indirect asks:** requests are buried in long preambles.
4. **Calibration misses:** style too weak or too forceful for context.
5. **Identity mismatch risk:** abrupt rewrites can conflict with user state.

---

## 3. Goals

- Add a modular `confidence_language_analysis` overlay.
- Score confidence expression with explainable dimensions.
- Generate context-aware rewrite variants.
- Keep routing selective to avoid unnecessary processing.
- Add distress-aware and tone-intent guardrails.

## Non-goals

- Replacing CBT, NLP, or emotional processing layers.
- Diagnosing mental health conditions.
- Forcing a single "executive" style across all contexts.

---

## 4. Users and Use Cases

### Primary users
- End users asking for help with difficult conversations
- Agent builders integrating Mirror Palace in apps
- Coaches/facilitators needing structured language upgrades

### High-value use cases
- "Help me say this more confidently"
- Boundary-setting responses
- Disagreement wording in work/personal contexts
- High-stakes concise updates

---

## 5. Product Requirements

## PR-1 Routing Hook

Add optional pipeline stage:

1. signal detection
2. route matching + framework sequence
3. cognitive/emotional synthesis
4. **confidence language analysis (new)**
5. final response assembly

Activation triggers:
- communication/confidence intent class
- route requests language optimization
- explicit user ask for phrasing rewrite

Bypass triggers:
- explicit reflective-only mode
- explicit request for vulnerable style

---

## PR-2 Taxonomy Integration

Implement the taxonomy categories from:
- `docs/confidence-language/confident-language-taxonomy.md`

The module must return span-level labels and transformation goals.

---

## PR-3 Scoring Model

Implement five 0-100 dimensions:
- certainty
- agency
- directness
- conciseness
- social_calibration

Composite score computed with weighted sum defined in:
- `docs/confidence-language/confidence-scoring-system.md`

---

## PR-4 Rewrite Variants

Return four modes when rewrite is enabled:
- assertive
- collaborative
- executive
- casual_confident

Each rewrite must preserve semantic intent and include stronger ownership + clarity where appropriate.

---

## PR-5 Guardrails

Required safeguards:
- distress-aware attenuation (reduce force under high distress)
- context-mode calibration (meeting/interview/conflict/dating/presentation/general)
- no coercive/aggressive escalation

---

## PR-6 Explainability

Return issue-level explanations:
- span text
- affected dimension
- matched signal
- applied rule id

---

## 6. Data Contracts

### Input (minimum)

```json
{
  "text": "string",
  "context_mode": "meeting|interview|conflict|dating|presentation|general",
  "intent": "string",
  "distress_level": 0,
  "rewrite_enabled": true,
  "upstream": {
    "route_id": "string|null",
    "cbt_reframe": "string|null",
    "nlp_reframe": "string|null"
  }
}
```

### Output (minimum)

```json
{
  "overall": 0,
  "dimensions": {
    "certainty": 0,
    "agency": 0,
    "directness": 0,
    "conciseness": 0,
    "social_calibration": 0
  },
  "issues": [
    {
      "span": "string",
      "dimension": "string",
      "reason": "string",
      "rule_id": "string"
    }
  ],
  "rewrites": {
    "assertive": "string",
    "collaborative": "string",
    "executive": "string",
    "casual_confident": "string"
  }
}
```

---

## 7. System Architecture

### Module boundaries
- Inputs come from orchestration layer + upstream framework synthesis
- Overlay never mutates route decisions
- Overlay only optimizes final language expression

### Feature flags
- `confidence_layer_enabled`
- `confidence_rewrites_enabled`
- `confidence_training_enabled`

### Runtime mode
- `score_only`
- `score_and_rewrite`

---

## 8. Rollout Plan

### Phase 0: Shadow mode
- Run detectors + scoring silently
- Log metrics only

### Phase 1: Selective enablement
- Enable `score_and_rewrite` for communication classes only

### Phase 2: Broad enablement
- Enable for all eligible routes with guardrails

### Phase 3: Training loop
- Add repetition drills and personalized trend tracking

---

## 9. Success Metrics

Primary:
- +20% user-rated confidence clarity (A/B vs control)
- no drop in user-rated social appropriateness

Secondary:
- reduced hedge density in accepted rewrites
- improved directness scores in communication tasks
- rewrite acceptance rate by context mode

Guardrail metrics:
- "too aggressive" user flags below threshold
- high-distress sessions with rewrite suppression compliance

---

## 10. Risks and Mitigations

1. **Robotic output**
   - Mitigation: multiple rewrite modes + semantic preservation checks

2. **Context mismatch**
   - Mitigation: required context mode + social calibration penalty

3. **Emotional mismatch**
   - Mitigation: distress-aware attenuation and bypass controls

4. **Overreach into therapy behavior**
   - Mitigation: keep overlay post-reframing, language-only scope

---

## 11. Dependencies

- Existing routing and framework synthesis layers
- Taxonomy + scoring docs in `docs/confidence-language/`
- Orchestration support for optional module invocation

---

## 12. Open Questions

- Should rewrite mode default to collaborative in conflict contexts?
- What threshold should trigger automatic rewrite attenuation?
- Should user profile store preferred confidence style by context?

---

## 13. Definition of Done

- [x] PRD approved and linked from roadmap/docs index
- [ ] Module contract implemented in orchestrator
- [ ] Deterministic detectors implemented with tests
- [ ] Scoring + rewrites implemented with tests
- [ ] Routing hooks + bypass logic live
- [ ] Experiment metrics dashboard active

