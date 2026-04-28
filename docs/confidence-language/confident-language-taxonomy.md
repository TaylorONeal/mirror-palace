# Confident Language Taxonomy (MECE)

**Status:** Draft v1  
**Owner:** Language Layer Team  
**Scope:** Text-first confidence coaching overlay for an app that already runs psychology + NLP + behavioral frameworks.

---

## 1) Objective

Provide a non-overlapping taxonomy for detecting and transforming confidence-related language patterns without replacing existing therapeutic or coaching frameworks.

---

## 2) Design Boundaries

- This taxonomy is a **language overlay**, not a replacement for CBT/NLP/emotional processing.
- Unit of analysis is a **clause/sentence turn**.
- Each span gets exactly one **primary category** and optional **secondary tags**.
- Tone adaptation is mode-aware (meeting, interview, conflict, dating/social, presentation).

---

## 3) Primary Categories (MECE)

## A. Hedging & Dilution

**Definition:** Lexical devices that reduce commitment strength.

**Subtypes**
- Epistemic hedge: "I think", "I guess", "maybe"
- Softener/minimizer: "just", "kind of", "a little"
- Pre-disclaimer: "this may be dumb", "sorry but"
- Permission frame: "if that's okay"

**Detection signals**
- Hedge lexicon match density
- Modal overload (`might/could/maybe`) with no evidence phrase
- Prefix disclaimers before core claim

**Transformation goals**
- Remove unnecessary diluters
- Keep calibrated uncertainty when evidence is incomplete

**Integration hooks**
- If prior layer emits anxiety/distress: preserve empathy tokens while reducing nonessential hedges.

---

## B. Assertive Core Statement

**Definition:** Clear statement of observation, claim, recommendation, or decision.

**Subtypes**
- Observation: "What I'm seeing is..."
- Claim: "This approach won't scale"
- Recommendation: "I recommend we..."
- Decision statement: "We're proceeding with..."

**Detection signals**
- Declarative syntax
- Strong verb usage with explicit subject
- Low ambiguity markers

**Transformation goals**
- Promote intent-first phrasing
- Upgrade unclear clauses into testable statements

**Integration hooks**
- Consume reframed beliefs from cognitive layer and verbalize as operational statements.

---

## C. Agency & Ownership

**Definition:** Language that names accountable actor + action.

**Subtypes**
- Personal ownership: "I will", "I'll deliver"
- Shared ownership: "We will", "Our team decided"
- Decision ownership: "I chose", "We chose"

**Detection signals**
- Explicit grammatical subject (`I/we/name`)
- Active-voice predicate
- Avoidance of agentless passives

**Transformation goals**
- Convert passive to active
- Replace abstract outcome talk with owner + next action

**Integration hooks**
- Aligns with behavioral coaching outputs (implementation intentions, commitments).

---

## D. Directive & Influence Language

**Definition:** Language intended to move behavior, priorities, or decisions.

**Subtypes**
- Direct command: "Send this by 3"
- Collaborative directive: "Let's finalize by 3"
- Priority frame: "The best next move is..."

**Detection signals**
- Imperative mood
- Action verbs + timeframe
- Priority markers (first/next/now)

**Transformation goals**
- Increase specificity and actionability
- Calibrate force (too weak vs too forceful)

**Integration hooks**
- Uses relationship context from social/coaching layer to set assertive vs collaborative mode.

---

## E. Boundary & Constraint Language

**Definition:** Language that declares limits, scope, capacity, or refusal.

**Subtypes**
- Capacity boundary: "I can't take this on this week"
- Scope boundary: "That's out of scope for this sprint"
- Conditioned yes: "I can do A if B shifts"

**Detection signals**
- Negation + capacity/scope terms
- Time-bound availability phrases
- Excessive justification length (boundary erosion)

**Transformation goals**
- Keep boundary explicit and respectful
- Minimize apology/over-explanation loops

**Integration hooks**
- If conflict route is active, add de-escalation phrasing templates automatically.

---

## F. Uncertainty Calibration

**Definition:** Credible handling of unknowns while preserving authority.

**Subtypes**
- Data-limited uncertainty: "Based on current data..."
- Hypothesis framing: "Working hypothesis is..."
- Partial certainty: "I don't have X yet; I do know Y"

**Detection signals**
- Confidence qualifiers tied to evidence
- Absence/presence of recovery clause after "I don't know"

**Transformation goals**
- Convert collapse statements into bounded uncertainty
- Preserve intellectual honesty

**Integration hooks**
- Pulls evidence summaries from reasoning layer to anchor uncertainty claims.

---

## G. Disagreement & Challenge

**Definition:** Language for opposition, correction, or risk challenge.

**Subtypes**
- Direct dissent: "I disagree"
- Framed dissent: "I see it differently"
- Analytical challenge: "What problem does this solve?"

**Detection signals**
- Contrastive discourse markers (`however`, `instead`)
- Counterclaim patterns with/without rationale

**Transformation goals**
- Maintain clarity while reducing social rupture risk
- Require rationale token after disagreement

**Integration hooks**
- If relational risk high, enforce "disagree + reason + alternative" template.

---

## H. Conversational Control & Turn Framing

**Definition:** Language for structuring attention and turn ownership.

**Subtypes**
- Opening frame: "Here's the key point"
- Transition frame: "Let's shift to..."
- Close frame: "Takeaway is..."

**Detection signals**
- Discourse organizers at turn boundaries
- Topic-shift markers

**Transformation goals**
- Improve coherence and perceived executive presence
- Reduce rambling drift

**Integration hooks**
- Uses routing intent (briefing, negotiation, coaching) to choose frame pack.

---

## I. Fillers & Disfluency Management

**Definition:** Non-semantic hesitation tokens or stalling fragments.

**Subtypes**
- Fillers: "um", "uh", "like"
- Restart loops: false starts, repeated openers

**Detection signals**
- Token-level filler frequency
- Repetition n-gram spikes

**Transformation goals**
- Replace fillers with silent pause or explicit pause language
- Preserve natural conversational rhythm

**Integration hooks**
- Training loop can convert high-frequency fillers into micro-drills.

---

## J. Status & Tone Modulation

**Definition:** Register choices that signal hierarchy, warmth, and dominance balance.

**Subtypes**
- Deferential over-index: over-politeness, excessive permission
- Dominance over-index: abrupt directives without context
- Balanced status: direct + respectful

**Detection signals**
- Politeness marker density vs imperative density
- Honorific/apology ratio
- Sentence brevity + mitigation profile

**Transformation goals**
- Context-fit tone for audience + channel
- Avoid timid and abrasive extremes

**Integration hooks**
- Reads context mode and audience metadata from router.

---

## 4) Routing Integration

### Trigger conditions
Activate `confidence_language_analysis` when any are true:
- Intent classifier = communication/persuasion/leadership/social-performance.
- Message includes self-reported confidence concern.
- Upstream route requests language tightening before output.

### Placement in pipeline
1. Emotional/CBT/NLP processing (existing)
2. Behavioral recommendation synthesis (existing)
3. **Confidence language analysis (new)**
4. Final response generation

### Conflict guardrails
- If emotional distress score exceeds threshold, confidence rewrites become lighter-touch and supportive.
- If user explicitly asks for vulnerable tone, bypass assertive boosts.

---

## 5) Data Contract

### Input
```json
{
  "text": "string",
  "context_mode": "meeting|interview|conflict|dating|presentation|general",
  "upstream": {
    "intent": "string",
    "distress_level": 0,
    "reframe_output": "string|null"
  }
}
```

### Output
```json
{
  "spans": [
    {
      "text": "string",
      "primary_category": "A-J",
      "secondary_tags": ["optional"],
      "signals": ["matched_features"],
      "transform_goal": "string"
    }
  ],
  "routing_flags": {
    "needs_calibration": true,
    "keep_empathy": false
  }
}
```

---

## 6) Canonical Phrase Library Starter (language-only)

- **Openers:** "Here's the key point...", "What matters most is..."
- **Recommendations:** "I recommend we...", "The best next move is..."
- **Disagreement:** "I see it differently because...", "My concern is..."
- **Boundaries:** "I can't take that on this week", "That's outside current scope"
- **Buying time:** "Give me a second to think", "Let me check the numbers quickly"
- **Calibrated unknowns:** "I don't have that yet; here's what we know now"

