# Information Compression

## Core Concept

Information compression is the discipline of systematically deciding what to preserve and what to discard as context accumulates over time. In any long-running cognitive process — whether a multi-session AI interaction, a project spanning months, or a life reviewed annually — the total information available always exceeds the capacity to hold it all. Something must be dropped. The question is whether that dropping happens intentionally, according to clear priorities, or accidentally, losing critical context while retaining noise.

Most information loss is accidental. People forget commitments they made but remember emotional reactions to minor events. AI agents lose track of constraints established ten turns ago but retain verbatim phrasing from the most recent turn. Projects lose their original design rationale but preserve every meeting transcript. The pattern is consistent: without an explicit compression strategy, recency and emotional salience dominate, and structural importance is lost.

The Information Compression framework provides a priority hierarchy for what to retain when something must be discarded. It is not a filing system — it is a triage protocol.

## Key Principles

### The Priority Hierarchy

When compressing context, preserve in this order:

**1. Constraints**
What *cannot* be done. Hard limits, non-negotiables, technical impossibilities, legal requirements, ethical boundaries. Constraints are the highest priority because violating a constraint invalidates everything downstream. You can build a perfect plan that ignores a constraint, and the plan is worthless.

Constraints are often established early and then forgotten as excitement builds around possibilities. This is the most dangerous form of information loss. Compression must protect constraints above all else.

Examples of constraints:
- Budget ceiling that cannot be exceeded
- Deadline that is externally imposed and immovable
- Technical limitation of the current platform
- Commitment made to another party that limits options
- Physical or health limitation that restricts what's feasible

**2. Goals**
What is being accomplished. The purpose of the entire effort. Goals are second because everything else is evaluated against them. Without goals, you cannot determine whether any other piece of information is relevant.

Goals must be preserved in their *hierarchical* form: upstream goal (the real objective), stated goal (the explicit target), and any sub-goals that have been established. Compressing goals to only the most recent sub-goal loses the thread of purpose.

**3. Commitments**
What has been promised. Agreements, deadlines, action items, expectations set with others. Commitments are third because breaking them — even inadvertently — destroys trust and creates downstream chaos. A commitment is a constraint that was voluntarily adopted.

The critical detail: commitments include not just what was promised, but to whom and by when. Compressing "I said I'd review the document" into nothing (because the document was reviewed) is correct. Compressing "I said I'd review the document by Friday" into nothing (when Friday hasn't passed) is dangerous.

**4. Definitions**
What terms mean in this context. Definitions are fourth because miscommunication from definitional drift causes enormous waste. When a project begins, key terms are defined. As context is compressed over time, those definitions are often lost, and participants begin using the same words to mean different things.

Critical definitions include:
- Technical terms with project-specific meanings
- Roles and responsibilities (who does what)
- Success criteria (what "done" means)
- Categorizations that affect decisions (what counts as "urgent")

**5. Critical Facts**
Key information that, while not a constraint, goal, commitment, or definition, is necessary for sound reasoning. This includes:

- Results of experiments or tests
- Key data points that inform strategy
- Historical context that explains current decisions
- Reasons behind past decisions (the "why" behind the "what")

Critical facts are distinguished from ordinary facts by their load-bearing nature. A critical fact is one where, if lost, someone would make a worse decision.

**6. Open Questions**
Unresolved issues that need attention. Open questions are preserved at the lowest priority because they are, by definition, not yet resolved — their value is in ensuring they eventually *get* resolved, not in their current content. But they must be preserved, because an open question that is forgotten is an unresolved risk that becomes invisible.

### What to Discard

The hierarchy tells you what to keep. Equally important is knowing what to actively release:

- **Redundant phrasing**: If the same idea has been stated three ways, keep the clearest version.
- **Emotional filler**: Expressions of frustration, enthusiasm, or anxiety that don't contain information. The emotion can be noted ("user expressed frustration about X") but the filler ("ugh, this is so annoying, I can't believe...") is discarded.
- **Resolved subthreads**: Once a question is answered or a problem is solved, the back-and-forth that led to resolution can be compressed to the conclusion.
- **Stylistic noise**: Pleasantries, meta-commentary about the conversation itself, filler words, hedging language that doesn't reflect genuine uncertainty.
- **Superseded information**: Earlier versions of plans, estimates, or understandings that have been explicitly updated.

### Compression Is Not Summarization

This distinction is critical. Summarization tries to capture everything at lower resolution. Compression *selectively preserves* what matters and *actively discards* what doesn't. Summarization produces a blurry version of the whole picture. Compression produces a sharp version of the essential picture.

A summary of a 30-minute conversation might be a paragraph that touches on every topic discussed. A compression of the same conversation might be three bullet points: one constraint identified, one commitment made, one open question surfaced. The summary preserves breadth. The compression preserves depth on what matters.

## How It Works

**Step 1: Identify the compression trigger.** Compression is needed when:
- Context is approaching capacity limits (token limits, memory limits, cognitive load)
- A transition point has been reached (end of meeting, end of sprint, end of session)
- New information is arriving that may push out old information
- A periodic review cycle has been reached

**Step 2: Inventory current context.** What are you currently holding? List it without evaluation.

**Step 3: Classify each item.** Assign each piece of context to one of the six priority levels — or to the discard category.

**Step 4: Compress from the bottom up.** Start by discarding items in the discard category. Then, if more space is needed, compress Open Questions (preserve just the question, not the discussion around it). Continue up the hierarchy only as needed.

**Step 5: Verify constraint preservation.** After compression, explicitly check: are all known constraints still present? This is the most important verification step.

**Step 6: Update the compressed context.** Replace the old context with the new compressed version. The compressed version is now the authoritative reference.

## Applied As

- **In AI agent sessions**: When approaching token limits or transitioning between sessions, apply the hierarchy to decide what persists and what is released. Constraints and goals must survive; emotional filler can go.

- **In project management**: At sprint boundaries or milestone reviews, compress project context. Retain active constraints, current goals, open commitments, and working definitions. Release resolved discussions, outdated estimates, and superseded plans.

- **In personal reflection**: When reviewing a week, month, or year, compress. What constraints are still active? What goals have shifted? What commitments are outstanding? What questions remain open? Release the rest.

- **In note-taking**: Structure notes by the priority hierarchy rather than chronologically. Constraints at the top, open questions at the bottom, and everything else in order.

- **In communication**: When briefing someone on a complex situation, use the hierarchy as your outline. Start with constraints, then goals, then commitments, then definitions, then critical facts, then open questions.

## The Difference Between Compression and Forgetting

Accidental information loss and intentional compression look similar from the outside — in both cases, information is no longer present. But their effects are radically different.

**Accidental loss** follows the path of least resistance. What gets lost is whatever is oldest, least emotionally salient, or least recently accessed. This means critical constraints established early in a project are the first to go, while recent emotional reactions persist. The information hierarchy is inverted — low-priority items survive while high-priority items vanish.

**Intentional compression** follows the priority hierarchy. What gets lost is what was explicitly identified as discardable: redundant phrasing, emotional filler, resolved subthreads, stylistic noise. High-priority items are protected regardless of their recency or emotional salience.

The practical difference is stark. A project that suffers accidental information loss will violate its own constraints, forget its own commitments, and repeat resolved discussions. A project that undergoes intentional compression will retain its essential context while operating efficiently within its capacity limits.

This is why compression must be an active, deliberate process rather than a passive decay. Passive decay is always worse than no compression at all, because it selectively destroys the most important information while preserving the least important.

## Compression at Different Time Scales

The priority hierarchy applies at every time scale, but the emphasis shifts:

**Within a single session** (minutes to hours): Compression focuses on levels 5-6 (critical facts, open questions) and the discard categories. Constraints, goals, and commitments are usually stable within a session and don't need compression attention.

**Between sessions** (hours to days): Compression focuses on levels 3-4 (commitments, definitions). Check whether any commitments have been fulfilled (and can be removed) or whether definitions have drifted.

**Between phases** (weeks to months): Full hierarchy review. Constraints may have changed (a budget was revised, a deadline shifted). Goals may have evolved. Commitments may have been superseded. This is the level at which the most aggressive compression is both possible and necessary.

**Life-scale** (years): Compression at this scale is essentially wisdom. What did you learn that is permanently load-bearing? What can be released because it served a context that no longer exists? The priority hierarchy still applies: preserve the constraints and commitments that remain active, release the rest.

## Common Misapplications

**Treating compression as one-time.** Compression is ongoing. Context evolves — what was a critical fact yesterday may be superseded today. The hierarchy must be reapplied regularly.

**Compressing too aggressively.** The hierarchy is a *priority* order, not a *keep only the top* order. All six levels should be preserved if possible. Only discard lower levels when capacity genuinely demands it.

**Preserving sentiment instead of structure.** "The team is frustrated about the timeline" is useful compression. "Everyone was really upset in the meeting and there was a lot of tension" is emotional filler wearing the mask of information.

**Forgetting to compress resolved threads.** Once a question is answered, the answer persists but the deliberation can go. Carrying the full deliberation forward wastes capacity on information that has already been integrated into a conclusion.

## Integration Points

- **Mirror Cognitive Architecture**: The Memory thread uses this hierarchy to decide what persists in the internal narrative. The Cognitive Controller applies compression during narrative updates.
- **Concept Formation**: Essentialization and compression are complementary — essentialization identifies what matters in a concept, compression identifies what matters in a context.
- **Reversibility Classification**: When compressing, the reversibility of a decision determines how much context about it needs to be preserved. One-way door decisions require retaining the full reasoning chain.

## Summary

Information compression is triage, not summarization. The priority hierarchy — Constraints > Goals > Commitments > Definitions > Critical Facts > Open Questions — provides an objective ordering for what to preserve when capacity is limited. The critical discipline is active compression (intentional, priority-guided) rather than passive decay (accidental, recency-biased). Passive decay always destroys the most important information first. Active compression protects it.

