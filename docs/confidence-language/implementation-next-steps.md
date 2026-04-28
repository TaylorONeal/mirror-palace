# Confidence Language Overlay — Implementation Next Steps

**Status:** Execution plan (post-spec)  
**Last updated:** 2026-04-28

---

## 1) Build Sequence (Recommended)

## Phase 0 — Plumbing (1-2 days)

- Add `confidence_language_analysis` module contract to orchestration layer.
- Define shared payload schema:
  - `text`
  - `context_mode`
  - `intent`
  - `distress_level`
  - optional upstream reframes
- Add feature flags:
  - `confidence_layer_enabled`
  - `confidence_rewrites_enabled`
  - `confidence_training_enabled`

**Deliverable:** Module can be called in shadow mode with no user-facing rewrite.

---

## Phase 1 — Rule-First Detection (3-5 days)

Implement deterministic detectors before model-heavy inference.

- Hedge lexicon + modal stack detector
- Passive voice detector
- Filler/disfluency detector
- Preamble-length detector
- Apology/politeness intensity detector

Write outputs to structured span annotations.

**Deliverable:** Stable issue extraction + per-dimension raw metrics.

---

## Phase 2 — Scoring + Rewrites (4-7 days)

- Implement 5 scores (certainty, agency, directness, conciseness, social calibration).
- Add rewrite rules with priority order:
  1. safety/calibration
  2. intent clarity
  3. ownership
  4. brevity
- Generate 4 variants:
  - assertive
  - collaborative
  - executive
  - casual confident

**Deliverable:** End-to-end score + rewrite payload returned for any eligible message.

---

## Phase 3 — Routing Integration (2-4 days)

Trigger confidence layer only when useful.

### Route-level activation
Start with these message classes:
- communication coaching
- disagreement/conflict wording
- leadership/persuasion asks
- boundary-setting asks

### Guardrails
- If `distress_level` is high, reduce rewrite aggressiveness.
- If user asks for reflective/vulnerable tone, bypass assertive escalation.
- If context is collaborative, penalize command-style rewrites.

**Deliverable:** Router invokes layer in targeted situations; bypasses otherwise.

---

## Phase 4 — Learning Loop (v2)

- Track recurring personal language patterns (e.g., top 5 hedges).
- Create micro-drills from user-specific weak categories.
- Add spaced repetition prompts for high-frequency slips.
- Measure retention at 7 and 30 days.

**Deliverable:** Confidence improvements become durable behavior, not one-off rewrites.

---

## 2) Routing Contract Changes

Add optional block to routed payload:

```json
{
  "confidence_language_analysis": {
    "enabled": true,
    "mode": "score_only|score_and_rewrite",
    "context_mode": "meeting|interview|conflict|dating|presentation|general"
  }
}
```

Return block:

```json
{
  "confidence": {
    "overall": 72,
    "dimensions": {
      "certainty": 68,
      "agency": 75,
      "directness": 70,
      "conciseness": 69,
      "social_calibration": 78
    },
    "issues": [],
    "rewrites": {
      "assertive": "...",
      "collaborative": "...",
      "executive": "...",
      "casual_confident": "..."
    }
  }
}
```

---

## 3) Testing Plan

## Unit tests
- Detector precision on curated phrase fixtures.
- Score boundary tests (0/100 clamps, weighting correctness).
- Rewrite safety tests (no style escalation under high distress).

## Integration tests
- Route-trigger tests: ensure layer only runs on allowed classes.
- Bypass tests: reflective-only and vulnerable-tone requests.
- Latency tests: score + rewrite under target SLA.

## Human eval
- Blind pair ranking: original vs rewrites by context.
- Calibration review for "too weak" vs "too aggressive" outputs.

---

## 4) Documentation Updates Checklist

- [ ] Add confidence layer to orchestration docs (call order + toggles).
- [ ] Add API reference for input/output payload contract.
- [ ] Add prompt cookbook examples by context mode.
- [ ] Add evaluator guide for social calibration rubric.
- [ ] Add changelog entry once module ships.

---

## 5) Risks and Mitigations

- **Risk:** Robotic wording from over-normalization.  
  **Mitigation:** Multiple output styles + personality-preserving constraints.

- **Risk:** Emotional-state mismatch (confident wording when user is dysregulated).  
  **Mitigation:** Distress-aware guardrail and rewrite attenuation.

- **Risk:** Context mismatch (e.g., executive style in personal conversation).  
  **Mitigation:** Required `context_mode` and calibration penalty.

