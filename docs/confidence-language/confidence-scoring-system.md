# Confidence Scoring System (Language-Based)

**Status:** Draft v1  
**Owner:** Language Layer Team  
**Scope:** Explainable scoring for confidence expression in text/transcribed speech.

---

## 1) Objective

Score confidence expression in language with enough precision to drive targeted rewrites, training drills, and routing decisions.

---

## 2) Composite Model

Five dimensions, each 0-100:
1. Certainty
2. Agency
3. Directness
4. Conciseness
5. Social Calibration

Composite:

`overall = 0.24*certainty + 0.20*agency + 0.22*directness + 0.14*conciseness + 0.20*social_calibration`

Default banding:
- 0-39: Low confidence expression
- 40-69: Mixed/unstable
- 70-84: Strong
- 85-100: Strong but monitor over-force

---

## 3) Dimension Specs

## A. Certainty

**Definition:** Degree of commitment to claim/recommendation.

**Signals**
- Negative: hedge density, weak modal stacking, disclaimers
- Positive: evidence-backed declaratives, commitment verbs

**Scoring logic**
- Start at 60
- `-8` per unnecessary hedge token (cap -32)
- `-12` if pre-disclaimer before core claim
- `+10` if claim includes evidence connector (`because`, `based on`)
- Clamp to 0-100

**Edge cases**
- In exploratory contexts, moderate certainty (55-75) may be optimal.

---

## B. Agency

**Definition:** Presence of accountable actor and active ownership.

**Signals**
- Negative: agentless passives, vague actors (`it was decided`)
- Positive: explicit subject + action + commitment

**Scoring logic**
- Start at 50
- `+20` if sentence contains explicit actor + active verb
- `-15` for passive voice without actor
- `+10` for commitment phrase (`I will`, `we will`)
- Clamp to 0-100

**Edge cases**
- Scientific/objective reporting may intentionally reduce personal agency.

---

## C. Directness

**Definition:** How clearly language expresses intent without indirection.

**Signals**
- Negative: long preambles, layered ask-softeners
- Positive: intent-first syntax, explicit ask/recommendation

**Scoring logic**
- Start at 55
- `-10` if intent appears after >12 tokens of preamble
- `-12` for permission-stack pattern (`just wanted to check if maybe`)
- `+15` for first-clause intent marker (`I recommend`, `Can you confirm`)
- Clamp to 0-100

**Edge cases**
- High-stakes relationship repair may require softer directness.

---

## D. Conciseness

**Definition:** Information efficiency without meaning loss.

**Signals**
- Negative: filler density, redundant qualifiers, repeated clauses
- Positive: compressed phrasing with preserved intent

**Scoring logic**
- Start at 70
- `-2` per filler token (cap -20)
- `-8` for repeated semantic unit
- `+8` if rewrite removes >=15% tokens without intent loss
- Clamp to 0-100

**Edge cases**
- Storytelling mode may intentionally trade conciseness for rapport.

---

## E. Social Calibration

**Definition:** Context fit between confidence level and social setting.

**Signals**
- Negative-weak: deferential over-softening
- Negative-strong: abrupt command without rationale in collaborative context
- Positive: direct + respectful + context-aligned

**Scoring logic**
- Start at 65
- `-20` for mismatch between style and context mode
- `-10` for apology overuse
- `+10` for calibrated pattern (`claim + reason + invite`)
- Clamp to 0-100

**Edge cases**
- Emergency/incident contexts can justify high-force directives.

---

## 4) Detection Layer

### Linguistic features
- Hedge lexicon counts
- Modal verb profile
- Filler counts
- Certainty markers
- Apology/politeness markers

### Structural features
- Passive/active voice
- Speech act type (assertive/directive/etc.)
- Turn position markers (open/transition/close)
- Preamble length before intent

### Optional model stack
- Rules first (deterministic)
- Lightweight classifier second for ambiguous cases

---

## 5) Transformation Layer (rule-triggered)

- If `certainty < 40`: remove nonessential hedges; add evidence framing.
- If `agency < 50`: convert passive to active owner+action phrasing.
- If `directness < 40`: move intent to clause 1; shorten preamble.
- If `conciseness < 45`: compress redundancies, preserve meaning.
- If `social_calibration < 45`: switch output mode to collaborative and inject respect markers.

Rule priority:
1. Safety/calibration
2. Intent clarity
3. Ownership
4. Brevity polish

---

## 6) Output Modes

Given one input, produce four variants:
- **Assertive:** max clarity + commitment
- **Collaborative:** shared ownership + warmth
- **Executive:** concise decision framing + prioritization
- **Casual confident:** direct but informal register

Each output includes per-dimension delta so users can learn *why* it changed.

---

## 7) Routing Hook

Activate scoring when:
- intent is communication- or confidence-related, OR
- downstream module asks for language optimization.

Placement:
- After cognitive/emotional layers, before final response assembly.

Bypass:
- If user requests no rewrite or reflective-only mode.

---

## 8) Interoperability Contract

### Input contract
```json
{
  "text": "string",
  "context_mode": "meeting|interview|conflict|dating|presentation|general",
  "upstream_signals": {
    "intent": "string",
    "distress_level": 0,
    "cbt_reframe": "string|null",
    "nlp_reframe": "string|null"
  }
}
```

### Output contract
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

## 9) Evaluation Plan (minimum)

- Inter-rater agreement on category labels (human eval)
- Precision/recall on hedge + passive detection
- User-rated usefulness of rewrites by context mode
- Behavior retention at 7/30 days (did patterns stick)

Success criterion:
- +20% improvement in user-rated confidence clarity without drop in social calibration.

