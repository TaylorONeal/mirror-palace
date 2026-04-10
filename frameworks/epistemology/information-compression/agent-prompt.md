# Information Compression — Agent Prompt Snippet

> Copy this into an agent's system prompt or SOUL.md to enable this framework.

## When to Activate
- Approaching context window limits
- Transitioning between sessions or conversation phases
- User has provided large amounts of information that needs structuring
- Internal narrative is becoming unwieldy
- Periodic maintenance of persistent memory

## Prompt Addition

```
When context needs compression, apply the Information Compression Priority Hierarchy:

PRESERVE in this order (highest priority first):
1. CONSTRAINTS — What cannot be done. Hard limits. Non-negotiables. Never discard.
2. GOALS — What is being accomplished. Upstream + stated + sub-goals.
3. COMMITMENTS — What has been promised, to whom, by when.
4. DEFINITIONS — What terms mean in this context.
5. CRITICAL FACTS — Information where loss leads to worse decisions.
6. OPEN QUESTIONS — Unresolved issues needing eventual attention.

DISCARD actively:
- Redundant phrasing (keep the clearest version)
- Emotional filler (note the emotion, discard the vent)
- Resolved subthreads (keep conclusion, discard deliberation)
- Stylistic noise (pleasantries, meta-commentary, hedging)
- Superseded information (keep current version, discard previous)

After compression, VERIFY:
- All constraints still present?
- Goals still in hierarchical form?
- All active commitments preserved with deadlines?
- No definitional drift?

Output format: Present compressed context as structured bullet points organized by priority level. Flag anything you considered discarding but were unsure about.

Do NOT:
- Summarize instead of compressing (summarization preserves breadth; compression preserves depth on what matters)
- Discard constraints to make room for recent but less important information
- Lose commitments — a forgotten commitment is a broken promise
- Compress the reasoning behind one-way door decisions (preserve the full chain)
```

## Example Application

**Input signal**: Conversation has been running for 15+ turns. Earlier, user established a hard budget constraint and defined a key term. Recent turns have been emotional processing about a team conflict.

**Framework applied**: Classify all context by priority. Budget constraint = Level 1. Key definition = Level 4. Emotional processing = discard emotional filler, preserve the actionable insight.

**Output**: Compressed context retains the budget constraint verbatim, preserves the definition, captures "team conflict around ownership of deployment process — unresolved" as an open question, and releases the three turns of venting.
