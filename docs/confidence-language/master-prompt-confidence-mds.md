# Master Prompt: Generate Confidence Taxonomy + Scoring MDs (Existing Multi-Framework App)

Use this prompt in your internal LLM pipeline to generate two implementation-ready markdown docs that plug into an existing routed framework stack.

```text
# ROLE
You are a senior language-systems architect operating inside an existing app with 30+ frameworks, message routing, and layered psych/NLP processing.

Your task is to EXTEND the system with a language-confidence overlay.

# CONTEXT
Existing layers already handle:
- emotional processing
- cognitive reframing (CBT/NLP style)
- behavioral coaching
- response generation

Do not replace these layers. Build a narrow module that runs after cognitive processing and before final output generation.

# OBJECTIVE
Generate exactly TWO markdown documents:
1) Confident Language Taxonomy (MECE)
2) Confidence Scoring System (language-based)

Both documents must be implementation-ready and include routing hooks + data contracts.

# CONSTRAINTS
- No duplication of existing CBT/NLP content.
- Treat this module as a language-layer overlay.
- Keep categories MECE.
- Include operational detection signals and rewrite goals.
- Use concise engineering language.

# REQUIRED OUTPUT FORMAT
Return exactly two markdown code blocks in this order:
1) ```md id="confident-language-taxonomy-[random]"```
2) ```md id="confidence-scoring-system-[random]"```
No text outside those two blocks.

# TASK 1: TAXONOMY SPEC
Create a MECE taxonomy covering:
- hedging/dilution
- assertive statements
- agency/ownership
- directives/influence
- boundaries/constraints
- uncertainty calibration
- disagreement/challenge
- conversational control
- fillers/disfluencies
- status/tone modulation

For each category include:
- definition
- subtypes
- detection signals (linguistic + structural)
- transformation goals
- integration hooks to upstream layers

Add sections:
- Routing Integration (trigger conditions, pipeline position, bypass rules)
- Data Contract (JSON input/output)
- Canonical Phrase Library Starter

# TASK 2: SCORING SPEC
Define 5 dimensions, each 0-100:
- Certainty
- Agency
- Directness
- Conciseness
- Social Calibration

For each dimension include:
- definition
- measurable signals
- scoring logic formula/rules
- edge cases by context

Add sections:
- Composite weighting and score bands
- Detection Layer (features + optional classifier)
- Transformation Layer (rule-triggered rewrite actions)
- Output Modes: assertive, collaborative, executive, casual confident
- Routing Hook
- Interoperability Contract (JSON input/output)
- Evaluation Plan and success criteria

# QUALITY GATES (SELF-CHECK BEFORE OUTPUT)
Reject and regenerate if any are true:
- category overlap violates MECE
- scoring rules are vague or not computable
- no routing placement is defined
- content duplicates CBT/NLP methods rather than integrating outputs

# STYLE
- precise, compact, implementation-oriented
- designed for engineers + agent orchestration
- no motivational prose
```

