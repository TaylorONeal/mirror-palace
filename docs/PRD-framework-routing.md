# PRD: Framework Routing Layer

**Status:** Draft
**Author:** Mirror Palace Contributors
**Date:** 2026-04-16
**Location:** `docs/PRD-framework-routing.md`

---

## 1. Summary

Mirror Palace currently holds 36 frameworks across 16 categories, a mermaid-based situation router in `index.md`, a detailed signal-to-framework mapping in the scan skill, 6 agent archetypes, and per-framework `use-when` / `avoid-when` / `pairs-with` metadata. What it lacks is a structured middle layer that answers: "For this class of situation, use these frameworks in this order with these guardrails."

This PRD proposes a **framework-routing layer** -- a set of public, inspectable route definitions that map common situation classes to recommended framework sequences, contraindications, and fallback paths. The goal is to make Mirror Palace operational, not just encyclopedic.

### Why Now

Three forces converge:

1. **The repo crossed the usefulness threshold.** 36 frameworks is enough that browsing the index has become a real navigation problem. A user facing a shame spiral should not need to evaluate 36 options.
2. **Agent consumption is growing.** Claude Code, OpenClaw, and managed-agent channels all need structured routing, not just a mermaid diagram. The current `index.md` router works as a visual aid but is not machine-parseable or sequencing-aware.
3. **The gap between signal detection and framework application is the biggest remaining structural hole.** `signal-patterns.md` detects signals. Framework READMEs describe when to use each framework. But nothing connects the two in a way that says: "Start here. Add this if needed. Stop if you see this."

---

## 2. Problem Statement

### The Library-vs-Operating-System Gap

Mirror Palace is strong as a framework library. It is weak as an operating layer. The difference:

| Library | Operating Layer |
|---------|----------------|
| "Here are 36 frameworks" | "For your situation, start with this one" |
| "ACT pairs with Needs & Feelings" | "Use Needs & Feelings first to clean the language, then ACT to defuse and move" |
| "Avoid ACT when the person needs stabilization" | "If the person needs stabilization, here's what to do instead" |
| Framework pages exist in isolation | Frameworks are connected through explicit routes |

### The Cost of Leaving Routing Implicit

Without explicit routing, users and agents develop three failure patterns:

1. **Favorite-framework lock-in.** A user who discovers ACT uses ACT for everything, including situations where ACT is wrong or premature. The repo currently has no mechanism to redirect them.
2. **Random walk.** A user browses the index, picks something that sounds right, and uses it with no sense of sequencing. They might apply EFT before cleaning up emotional language, which makes EFT less effective.
3. **Paralysis by options.** 36 frameworks across 16 categories is enough to stall anyone who doesn't already know what they need. The current mermaid router helps, but it maps situations to individual frameworks, not to ordered sequences with guardrails.

### The Danger of Doing This Badly

A routing layer done wrong is worse than no routing layer. Specific failure modes:

- **Fake omniscience.** A system that says "you are experiencing X, therefore do Y" when it has incomplete information about the user. Routes must be suggestions, not diagnoses.
- **Overcomplication.** Routes with 5 frameworks in sequence and branching trees create the illusion of rigor while being unusable. Most situations need 1-3 frameworks.
- **Therapy cosplay.** Clinical-sounding routing ("assess for attachment activation, then apply defusion protocol") that makes the system sound authoritative without being qualified. Routes should use plain language.
- **Brittle taxonomies.** A situation taxonomy that over-segments (30 situation types in v1) creates maintenance burden and false precision. Human situations are fuzzy; the taxonomy should be coarse enough to be robust.
- **Replacing discernment.** The routing layer should support judgment, not substitute for it. If a user or agent follows routes mechanically, the system has failed.

---

## 3. Product Goal

Add a public-safe framework-routing layer to Mirror Palace that:

- Helps humans and agents choose useful frameworks for common classes of situations
- Supports single-framework and multi-framework use with explicit sequencing
- Provides contraindications and fallback paths, not just recommendations
- Keeps routing lightweight, legible, and inspectable
- Improves practical usability without requiring private memory, personalized data, or user profiles
- Works as well for a first-time reader as for an agent consuming route definitions programmatically

---

## 4. Non-Goals

This PRD explicitly excludes:

- **A private second-brain system.** Routes are generic and public. They do not reference any user's history, preferences, or profile.
- **A dossier engine.** No user-state modeling. No "based on your last three conversations" logic in the public layer.
- **A user-profiling engine.** Routes do not adapt to personality types, assessment results, or behavioral history.
- **A pseudo-therapist.** Routes are navigational aids, not clinical protocols. The language should never imply diagnosis, treatment, or clinical assessment.
- **A hidden scoring/classification system.** All routing logic is visible in the route card. No opaque confidence scores, no hidden weighting. If a route recommends ACT, the user or agent can read why.
- **An overly complex orchestration engine.** No decision trees deeper than 2 levels. No framework sequences longer than 4 steps. If a route needs more than that, it should be split into sub-routes.
- **A replacement for judgment.** Every route card should make clear that routes are starting suggestions, not answers.

---

## 5. User Types and User Stories

### User Types

| Type | Description | Primary Need |
|------|-------------|--------------|
| **Solo reflective user** | Someone using Mirror Palace for personal growth, journaling, or self-coaching | "Tell me where to start for what I'm going through" |
| **Coach / facilitator** | Someone using Mirror Palace frameworks with clients or groups | "Give me a reliable sequence for this class of issue" |
| **Agent builder** | Someone building an AI assistant that uses Mirror Palace as a knowledge source | "Give me structured, parseable route definitions I can feed to an agent" |
| **Prompt designer** | Someone writing prompts that reference Mirror Palace frameworks | "Give me prompt scaffolds with sequencing logic built in" |
| **Team lead / practitioner** | Someone applying frameworks to team dynamics or organizational contexts | "Help me pick the right framework for a team situation without over-psychologizing" |

### User Stories

1. "I'm in a shame spiral and I need a framework that reduces fusion instead of intensifying it. I don't want to accidentally pick something that makes me examine my childhood right now -- I need something that creates distance from the thought, not more material."

2. "I'm in a conflict with someone close and I can't tell if this is an attachment issue, a communication issue, or a boundary issue. I need help choosing whether ACT, EFT, or Needs & Feelings is the right entry point, and why."

3. "I'm designing an agent that should respond to user distress with framework-informed reflection. I need a lightweight routing layer that maps signal classes to framework sequences so the agent doesn't just pick one at random."

4. "I want to know when two frameworks should be combined and in what order. I keep using ACT and Needs & Feelings together but I don't know which should come first in different situations."

5. "I want the system to help without acting like it knows me better than I know myself. If it suggests a route, I want to see why, and I want to be able to say 'no, that's not it' and get a useful alternative."

6. "I keep defaulting to Distortion Detection for everything. I suspect there are better frameworks for some of my situations, but I don't know which ones."

7. "I'm facilitating a group and someone is clearly dealing with an attachment rupture but I can't run a full EFT session. I need a lightweight entry point that's useful without being clinical."

---

## 6. Design Principles

### Routing over sprawl
The answer to "which framework?" is more valuable than adding another framework. This PRD adds zero new frameworks. It adds a layer that makes the existing 36 more usable.

### Clarity over taxonomy maximalism
The initial situation taxonomy should be 8-12 categories, not 30. Situations are fuzzy; categories should be broad enough that users reliably land in the right one, even if the match isn't perfect.

### Inspectable logic over black-box judgment
Every route card shows its reasoning. "Start with Needs & Feelings because the emotional language is muddy" is inspectable. "Our analysis suggests Framework X" is a black box. No black boxes.

### Humility over certainty
Routes are hypotheses, not prescriptions. Every route card includes a "when not to use this" section and a "what to try instead" section. The system should never imply it knows what the user is experiencing better than the user does.

### Frameworks as lenses, not verdicts
A framework is a way of looking at a situation. It is not a diagnosis. Route cards should frame recommendations as "try looking through this lens" rather than "this is what's happening to you."

### Sequence matters
The order in which frameworks are applied changes the outcome. Needs & Feelings before ACT produces different results than ACT before Needs & Feelings. Routes must be explicit about sequencing and explain why the order matters.

### Guardrails matter as much as recommendations
Knowing when NOT to use a framework is at least as valuable as knowing when to use it. Every route card has a contraindications section and a "stop if" section.

### Public-safe by default
Nothing in the routing layer assumes access to private data. Routes work for anonymous users reading markdown files. The layer should be useful without any status system, people records, or decision ledger.

### Useful to humans first, then agents
Route cards should read clearly as plain English. Machine-parseability (YAML front-matter, consistent field names) is a secondary benefit, not the design driver.

---

## 7. Proposed Solution

### Core Concept: Route Cards

A **route card** is a markdown file that maps a situation class to a recommended framework sequence. It lives in a new `routes/` directory at the repo root.

Route cards are the atomic unit of the routing layer. Each one answers:

- What kind of situation is this?
- What frameworks fit?
- In what order?
- Why that order?
- When is this route wrong?
- What should you try instead?

### How Routes Relate to Existing Components

```
signal-patterns.md          index.md (mermaid router)
    detects signals    →    maps situations to frameworks
         │                           │
         │                           │
         ▼                           ▼
    ┌─────────────────────────────────────┐
    │          ROUTE CARDS (NEW)          │
    │                                     │
    │  Situation class → framework        │
    │  sequence + guardrails + fallbacks  │
    │                                     │
    │  Bridges signal detection and       │
    │  framework application with         │
    │  explicit sequencing logic          │
    └─────────────────────────────────────┘
         │                           │
         ▼                           ▼
    framework/*/README.md    framework/*/agent-prompt.md
    (metadata)               (application)
```

Routes don't replace `index.md` or `signal-patterns.md`. They add the missing middle layer -- the sequencing and guardrail logic that neither the mermaid router nor the signal table currently provides.

---

## 8. Route Card Content Model

Every route card follows a consistent schema. The file format is markdown with YAML front-matter, matching the existing framework convention.

### YAML Front-Matter

```yaml
---
id: shame-spiral
category: emotional-activation
tags: [shame, self-attack, fusion, collapse, comparison]
complexity: medium
frameworks: [acceptance-and-commitment-therapy, needs-feelings-clarity, distortion-detection]
primary-framework: acceptance-and-commitment-therapy
fallback-routes: [overthinking-fusion, self-judgment-distortion]
---
```

### Markdown Body Sections

| Section | Purpose | Required |
|---------|---------|----------|
| **Title** | Clear, plain-language name | Yes |
| **Situation** | What this route is for. 2-3 sentences describing the class of situation. | Yes |
| **Common Signals** | Observable signs that this route applies. References `signal-patterns.md` categories where applicable. | Yes |
| **Likely Failure Mode** | What typically goes wrong when this situation is handled without a framework, or with the wrong one. | Yes |
| **Recommended Sequence** | Ordered list of frameworks with a 1-2 sentence rationale for each step and the ordering. | Yes |
| **Why This Order** | Explanation of why the sequence matters. What changes if you reorder. | Yes |
| **When NOT to Use This Route** | Contraindications. Situations that look like this route but aren't. | Yes |
| **Stop If** | Mid-route signals that the route is wrong or the user needs something different. | Yes |
| **Fallback Routes** | What to try instead, with a brief explanation of when each fallback is better. | Yes |
| **Related Frameworks** | Links to the framework pages used in this route. | Yes |
| **Prompt Scaffold** | Optional section with a ready-to-use agent prompt that implements this route. | Optional |
| **Notes** | Any additional context, common mistakes, or refinements. | Optional |

### Design Decisions

- **YAML front-matter** mirrors the existing framework README convention, making routes consumable by the same tooling.
- **`primary-framework`** designates the framework most central to the route, useful for agents that need a single entry point.
- **`fallback-routes`** creates a navigable graph between routes, preventing dead ends.
- **`Stop If`** is deliberately separated from `When NOT to Use` because they serve different moments: one is pre-selection, one is mid-application.

---

## 9. Initial Routing Taxonomy (v1)

The v1 taxonomy targets 8 situation classes. These were selected by cross-referencing the `signal-patterns.md` categories, the `index.md` mermaid router branches, and the `use-when` fields across all 36 framework READMEs to find the clusters with the highest density of framework overlap and sequencing ambiguity.

| # | Situation Class | Why v1 |
|---|----------------|--------|
| 1 | **Shame / self-attack / collapse** | High frequency. Multiple frameworks apply (ACT, Distortion Detection, Needs & Feelings, Five Wounds). Sequencing matters a lot -- the wrong framework first can intensify shame. |
| 2 | **Overthinking / fusion / avoidance** | The most common stall pattern in the signal table. Users often can't distinguish between overthinking-as-avoidance and legitimate deliberation. |
| 3 | **Conflict / blame / faux-feelings** | Language-level confusion (faux feelings, accusations-as-feelings) is extremely common and blocks every downstream framework. Routes need to clean language first. |
| 4 | **Relationship rupture / attachment activation** | Multiple frameworks compete here (EFT, NFC, Psychological Contracts, Family Systems). Users need help knowing which entry point fits their specific rupture type. |
| 5 | **Friendship ambiguity / mixed signals** | Under-served by the current index. Not every relational issue is romantic/attachment. Friendship-specific routing is a clear gap. |
| 6 | **Career confusion / stuckness / drift** | High overlap between Ikigai, North Star, Failure Modes, and Regret Minimization. Users tend to loop between these without a clear sequence. |
| 7 | **Values conflict / decision paralysis** | The decision-making frameworks are well-built but users don't know which to start with. Reversibility Classification should almost always come first, but few users know that. |
| 8 | **Emotional signal unclear / needs-vs-strategy confusion** | A meta-situation: the user doesn't know what they're feeling or needing. This route exists to help users who can't yet identify which other route they belong in. |

### What's Explicitly Not in v1

- **Trauma processing routes.** The trauma-recovery frameworks (Four-F, CEN, EIP, Five Wounds) are powerful but sensitive. Routing someone into trauma frameworks incorrectly is riskier than other categories. These should be v2 after the routing pattern is validated.
- **Personality assessment routes.** Big Five, Enneagram, and MBTI are self-knowledge tools, not situation-response tools. They don't need routing in the same way.
- **System design routes.** ADHD Design Rules, Behavior Equation, Habit Loop, etc. are product/system design frameworks. They could get routes later, but the urgency is lower.
- **Influence defense routes.** BSR, LPA, and MW are already well-scoped in their `use-when` fields and rarely need multi-framework sequencing.

---

## 10. Example Routes

### Route 1: Shame Spiral

```yaml
---
id: shame-spiral
category: emotional-activation
tags: [shame, self-attack, fusion, collapse, comparison]
complexity: medium
frameworks: [acceptance-and-commitment-therapy, needs-feelings-clarity, distortion-detection]
primary-framework: acceptance-and-commitment-therapy
fallback-routes: [overthinking-fusion, self-judgment-distortion]
---
```

**Situation:** The user is caught in a shame loop -- self-attack, comparison, collapse, or "I'm not enough" thinking. The shame may have a clear trigger (a failure, a rejection, a comparison) or may feel sourceless. The user's relationship to the shame has become fused: they are experiencing the shame as truth rather than as a mental event.

**Common Signals:**
- Self-deprecating language treated as fact, not observation
- "I should be further along" / "everyone else has it together"
- Withdrawal from action or connection
- Minimizing accomplishments immediately after stating them
- Energy directed inward as self-attack rather than outward as movement

**Likely Failure Mode:** Without a framework, shame spirals tend to self-reinforce. The user generates more evidence for the shame narrative, which deepens the fusion, which generates more evidence. Common bad responses: reassurance (doesn't address fusion), advice (can't land while shame is active), or root-cause analysis (intensifies the spiral by adding more material).

**Recommended Sequence:**

1. **Needs & Feelings Clarity** -- Clean the language first. Separate the feeling (shame, inadequacy, fear) from the interpretation ("I'm a failure," "they're all better than me"). If the user is using faux feelings or accusations-as-feelings, this step is essential before anything else works.

2. **ACT (Acceptance & Commitment Therapy)** -- Once the language is cleaner, defuse from the shame thought. Name the thought as a thought, not as reality. Identify what experience is being avoided. Return to present-moment facts. Clarify values. Choose committed action.

3. **Distortion Detection** (if needed) -- If specific cognitive distortions are fueling the shame (all-or-nothing thinking, mental filtering, "should" statements), name them. This step is optional -- ACT often handles defusion without needing to label the specific distortion. Add it when the distortions are persistent and naming them helps.

**Why This Order:** Needs & Feelings first because shame language is almost always muddy -- the user conflates feeling with identity ("I am worthless" instead of "I feel ashamed"). ACT can't work well on muddy language. ACT second because it directly targets fusion, which is the core mechanism of a shame spiral. Distortion Detection third because it's a refinement tool -- useful for persistent thought patterns but not the primary intervention.

**When NOT to Use This Route:**
- The user needs immediate stabilization (crisis, active self-harm risk). Lead with presence, not frameworks.
- The shame is appropriate signal about genuinely harmful behavior. Defusion from appropriate guilt is different from defusion from shame spirals.
- The user has done ACT-style work many times and it's become intellectual exercise rather than felt shift. Consider Embodied Awareness or Subconscious Repatterning instead.

**Stop If:**
- The user becomes more activated, not less. Back off. Lead with "what do you need right now?" not more framework.
- Childhood material surfaces that the user isn't ready to process. Don't follow the thread into Four-F or Five Wounds unless the user initiates.
- The shame is connected to ongoing abuse or coercion. Defusion is not appropriate when the threat is real and external.

**Fallback Routes:**
- **Overthinking / Fusion** -- if the shame is more about thought-loops than self-attack
- **Emotional Signal Unclear** -- if the user can't identify what they're feeling underneath the shame

**Related Frameworks:**
- [ACT](../frameworks/coaching/acceptance-and-commitment-therapy/)
- [Needs & Feelings Clarity](../frameworks/coaching/needs-feelings-clarity/)
- [Distortion Detection](../frameworks/cognitive-therapy/distortion-detection/)

---

### Route 2: Relationship Rupture / Attachment Activation

```yaml
---
id: relationship-rupture
category: relational
tags: [attachment, rupture, withdrawal, protest, pursue-withdraw, repair]
complexity: medium-high
frameworks: [needs-feelings-clarity, eft-relationship-lens, psychological-contracts]
primary-framework: eft-relationship-lens
fallback-routes: [conflict-blame, friendship-ambiguity]
---
```

**Situation:** A close relationship (typically romantic, but sometimes a deep friendship or family bond) has ruptured or is in an active conflict cycle. The user may be in a pursue-withdraw loop, experiencing protest behavior, feeling emotionally unsafe, or trying to understand why the same conflict keeps recurring under different surface topics.

**Common Signals:**
- "We keep having the same fight about different things"
- Protest behavior (escalating, testing, pushing for reassurance)
- Withdrawal or shutdown under stress
- Difficulty distinguishing surface issue from deeper attachment alarm
- "I don't know why this bothers me so much"

**Likely Failure Mode:** Without a framework, attachment-activated conflict gets processed at the surface level. The couple argues about dishes when the real issue is "do you see me?" The user seeks resolution of the content dispute while the structural pattern remains unaddressed.

**Recommended Sequence:**

1. **Needs & Feelings Clarity** -- Clean the language. Separate observations from interpretations, feelings from faux-feelings, needs from strategies. This is especially important in conflict because blame and accusation masquerade as emotional language. "I feel abandoned" may be a feeling or a narrative. "I feel lonely and scared when you withdraw" is cleaner.

2. **EFT Relationship Lens** -- Once the language is cleaner, examine the cycle. Identify the pursue-withdraw or attack-defend pattern. Name the attachment alarm underneath. Map the cycle: what triggers protest or withdrawal, what each person's position is protecting, where the repair window is.

3. **Psychological Contracts** (if needed) -- If the rupture involves invisible agreements ("I thought we agreed that..."), unstated expectations, or nervous-system-level relational rules, add this lens. Useful when the conflict has a "betrayal" quality that doesn't match the actual event.

**Why This Order:** Language cleaning first because attachment-activated language is almost always distorted. EFT second because it needs clean emotional data to map the cycle accurately. Psychological Contracts third because it addresses the structural/contractual layer that EFT doesn't cover -- the "what did we silently agree to?" question.

**When NOT to Use This Route:**
- The relationship involves active abuse, coercion, or repeated boundary violation. EFT assumes two people trying to connect. If one person is weaponizing vulnerability, the framework doesn't apply.
- The issue is primarily logistical or strategic, not attachment-driven. Not every relationship conflict is an attachment rupture.
- The user is in a new relationship (<6 months) where patterns haven't formed yet. The signal may be noise, not cycle.

**Stop If:**
- The user starts using EFT language to diagnose their partner instead of understanding themselves. Redirect.
- The framework is being used to justify staying in a harmful dynamic. "They're just withdrawing because of their attachment style" can become a way to excuse harm.
- The user needs practical safety, not relational analysis.

**Fallback Routes:**
- **Conflict / Blame / Faux-Feelings** -- if the issue is more about communication style than attachment dynamics
- **Friendship Ambiguity** -- if the relationship is a friendship, not a close bond with attachment dynamics

**Related Frameworks:**
- [Needs & Feelings Clarity](../frameworks/coaching/needs-feelings-clarity/)
- [EFT Relationship Lens](../frameworks/trauma-recovery/eft-relationship-lens/)
- [Psychological Contracts](../frameworks/pattern-detection/psychological-contracts/)

---

### Route 3: Conflict / Blame / Faux-Feelings

```yaml
---
id: conflict-blame
category: relational
tags: [conflict, blame, faux-feelings, accusation, communication]
complexity: low-medium
frameworks: [needs-feelings-clarity, stories-vs-facts, acceptance-and-commitment-therapy]
primary-framework: needs-feelings-clarity
fallback-routes: [relationship-rupture, emotional-signal-unclear]
---
```

**Situation:** The user is in a conflict (interpersonal or internal) where the language has become blame-heavy, accusation-heavy, or saturated with faux feelings ("I feel betrayed," "I feel disrespected," "I feel like you don't care"). The emotional signal is real but the language is encoding interpretation as feeling, which blocks resolution.

**Common Signals:**
- Faux feelings: "I feel abandoned / manipulated / disrespected / ignored"
- Accusation framed as vulnerability: "I'm just being honest about how you make me feel"
- Recycling the same argument with different examples
- Unable to state what they actually need, only what's wrong

**Likely Failure Mode:** Conflicts conducted in faux-feeling language escalate. Each person hears accusations, not feelings. Defensiveness rises. The actual needs underneath go unidentified and unmet.

**Recommended Sequence:**

1. **Needs & Feelings Clarity** -- The primary intervention. Translate faux feelings into actual feelings. Translate accusations into observations. Identify the underlying need. This alone resolves many conflicts.

2. **Stories vs Facts** (if needed) -- If the user is running a strong narrative about the other person's motives ("they did it on purpose," "they don't care"), separate the factual events from the story layered on top.

3. **ACT** (if needed) -- If the user is fused with the conflict narrative and can't let go even after the language is cleaner, ACT helps defuse from the story and reconnect to values. "What do you actually want from this relationship?" is more useful than another round of grievance.

**Why This Order:** Language first because nothing downstream works until the language is cleaner. Stories vs Facts second because narrative distortion is the most common layer after language distortion. ACT third because fusion with conflict narratives is the deepest layer and only needs addressing if the first two don't resolve it.

**When NOT to Use This Route:**
- The conflict involves real harm that shouldn't be reframed. If someone violated a clear boundary, cleaning up the language shouldn't soften accountability.
- The user is in a genuine attachment rupture (not just a communication conflict). Escalate to the Relationship Rupture route.

**Stop If:**
- Needs & Feelings work is being used to tone-police legitimate anger
- The user is more interested in being right than in understanding

**Fallback Routes:**
- **Relationship Rupture** -- if the conflict is cycling and attachment dynamics are involved
- **Emotional Signal Unclear** -- if the user can't identify feelings even with guidance

**Related Frameworks:**
- [Needs & Feelings Clarity](../frameworks/coaching/needs-feelings-clarity/)
- [Stories vs Facts](../frameworks/coaching/stories-vs-facts/)
- [ACT](../frameworks/coaching/acceptance-and-commitment-therapy/)

---

### Route 4: Overthinking / Fusion / Avoidance

```yaml
---
id: overthinking-fusion
category: cognitive
tags: [overthinking, rumination, analysis-paralysis, avoidance, fusion]
complexity: medium
frameworks: [acceptance-and-commitment-therapy, awareness-as-intervention, behavior-equation]
primary-framework: acceptance-and-commitment-therapy
fallback-routes: [values-decision-paralysis, shame-spiral]
---
```

**Situation:** The user is stuck in analysis loops, rumination, or cognitive avoidance. They may describe it as "overthinking" or "can't stop thinking about X" or "I know what to do but can't start." The thinking has become a substitute for action, and the user may not recognize it as avoidance.

**Common Signals:**
- "I've been going back and forth on this for weeks"
- Building elaborate plans or systems without executing
- Seeking more information past the point of usefulness
- "I just need to think about it more" (repeated)
- Physical avoidance of the situation being thought about

**Likely Failure Mode:** Overthinking masquerades as diligence. The user feels productive because they're "working on it" mentally, but no action occurs. The thinking itself becomes the avoidance strategy.

**Recommended Sequence:**

1. **ACT** -- Name the fusion. What thought is being treated as a barrier? What experience is being avoided? Return to present-moment contact. Clarify values. Identify the smallest committed action.

2. **Awareness as Intervention** (if needed) -- If naming the overthinking pattern is enough to break the loop, stop here. Sometimes the user genuinely didn't realize they were ruminating rather than deliberating. The awareness itself is the intervention.

3. **Behavior Equation** (if needed) -- If the user knows what to do but can't start, the problem may be structural, not psychological. Check: is the behavior hard to do? Is there a prompt/trigger? Is motivation mismatched? This shifts from internal to environmental intervention.

**Why This Order:** ACT first because fusion is the core mechanism of overthinking. Awareness as Intervention second because it's the lightest touch -- sometimes enough, often a natural byproduct of ACT. Behavior Equation third because it addresses the "I know what to do but can't start" variant, which is often a structural problem, not a psychological one.

**When NOT to Use This Route:**
- The "overthinking" is actually careful deliberation on a genuinely complex, irreversible decision. Use the Values / Decision Paralysis route instead.
- The rumination has a shame quality (self-attack, comparison, "I'm not enough"). Use the Shame Spiral route instead.
- The avoidance is trauma-driven (flashback-like reactions, disproportionate stress response). Consider trauma-recovery frameworks instead.

**Stop If:**
- ACT is becoming another layer of overthinking ("am I defusing correctly?")
- The stuck-ness is masking a real constraint the user hasn't named (financial, relational, health)

**Fallback Routes:**
- **Values / Decision Paralysis** -- if the overthinking is specifically about a pending decision
- **Shame Spiral** -- if the overthinking has a self-attack quality

**Related Frameworks:**
- [ACT](../frameworks/coaching/acceptance-and-commitment-therapy/)
- [Awareness as Intervention](../frameworks/cognitive-therapy/awareness-as-intervention/)
- [Behavior Equation](../frameworks/behavioral-psychology/behavior-equation/)

---

### Route 5: Career Confusion / Stuckness / Drift

```yaml
---
id: career-stuckness
category: direction
tags: [career, purpose, stuckness, drift, misalignment, direction]
complexity: medium
frameworks: [ikigai-diagnostic, north-star-test, failure-modes, regret-minimization]
primary-framework: ikigai-diagnostic
fallback-routes: [values-decision-paralysis, overthinking-fusion]
---
```

**Situation:** The user feels stuck, directionless, or misaligned in their career or broader life direction. They may describe it as "not knowing what I want," "going through the motions," "feeling like I should be further along," or a vague sense of drift without a clear complaint.

**Common Signals:**
- "I don't know what I want to do"
- Living by someone else's definition of success
- Multiple career pivots considered but none started
- Energy consistently low at work without a clear cause
- "I used to love this" / nostalgia for past career energy

**Likely Failure Mode:** Career stuckness tends to generate two loops: endless information gathering (more career books, more personality tests, more mentors) or impulsive pivots that don't address the underlying misalignment. Both avoid the harder question of what actually matters.

**Recommended Sequence:**

1. **Ikigai Diagnostic** -- Map the intersection of capability, passion, need, and livelihood. Identify which quadrant is empty or weak. This provides a structural diagnosis of the misalignment.

2. **North Star Test** -- Once the general direction is clearer, pressure-test priorities. What actually matters most? What would you sacrifice for what? This prevents the common failure of optimizing for everything simultaneously.

3. **Failure Modes** (if needed) -- If the stuckness has a recurring pattern (starts new things enthusiastically, loses interest in 6 weeks; plans career moves but never executes), name the pattern explicitly. The stuckness may be less about direction and more about a behavioral loop.

4. **Regret Minimization** (if needed) -- For specific high-stakes career decisions (quitting, starting something, moving), apply the 80-year-old test. "At 80, will you regret not trying this?" Useful for cutting through analysis paralysis on big moves.

**Why This Order:** Ikigai first because it maps the full landscape. North Star second because it prioritizes within that landscape. Failure Modes third because it catches behavioral patterns that no amount of clarity will fix. Regret Minimization fourth because it's a decision tool, not a mapping tool -- only useful once the options are clearer.

**When NOT to Use This Route:**
- The career stuckness is actually depression or burnout. The problem is energy and capacity, not direction. Address health-fitness first.
- The user has a clear direction but is blocked by a specific constraint (financial, geographic, skills gap). They don't need more frameworks -- they need a plan.
- The "drift" is actually contentment that the user has been told isn't enough. Not everyone needs a career epiphany.

**Stop If:**
- The mapping exercise becomes another form of procrastination
- The user is using frameworks to avoid the discomfort of actually making a choice

**Fallback Routes:**
- **Values / Decision Paralysis** -- if the issue has narrowed to a specific pending decision
- **Overthinking / Fusion** -- if the career reflection has become a rumination loop

**Related Frameworks:**
- [Ikigai Diagnostic](../frameworks/decision-making/ikigai-diagnostic/)
- [North Star Test](../frameworks/decision-making/north-star-test/)
- [Failure Modes](../frameworks/pattern-detection/failure-modes/)
- [Regret Minimization](../frameworks/decision-making/regret-minimization/)

---

### Route 6: Values Conflict / Decision Paralysis

```yaml
---
id: values-decision-paralysis
category: decision
tags: [values, decision, paralysis, competing-options, tradeoffs]
complexity: low-medium
frameworks: [reversibility-classification, north-star-test, regret-minimization]
primary-framework: reversibility-classification
fallback-routes: [career-stuckness, overthinking-fusion]
---
```

**Situation:** The user is stuck on a specific decision because competing values or options feel equally valid. This is different from overthinking (which is avoidance-driven) -- here the user genuinely has a hard choice with real tradeoffs.

**Common Signals:**
- "Both options have real downsides"
- Decision pending 14+ days with no movement
- Gathering more and more information without it helping
- Feeling torn between what they want and what they "should" do

**Recommended Sequence:**

1. **Reversibility Classification** -- First, classify the decision. Is it one-way or two-way? This single step resolves a surprising number of decision paralysis cases, because many agonized-over decisions are actually reversible.

2. **North Star Test** -- If the decision is genuinely hard (one-way or high-stakes two-way), clarify what matters most. What would you sacrifice for what? Forces prioritization.

3. **Regret Minimization** -- If North Star doesn't resolve it, apply the 80-year-old test. "At 80, which choice will you regret not making?"

**Why This Order:** Reversibility first because it eliminates false paralysis. Many decisions feel permanent but aren't. North Star second because it forces values prioritization. Regret Minimization third as the tiebreaker.

**When NOT to Use This Route:**
- The paralysis is driven by fear, not by genuinely competing values. Use Overthinking / Fusion route.
- The decision involves another person and the values conflict is relational. Consider Conflict or Relationship Rupture routes.

**Fallback Routes:**
- **Career Stuckness** -- if the decision is specifically about career direction
- **Overthinking / Fusion** -- if the paralysis is avoidance-driven rather than values-driven

**Related Frameworks:**
- [Reversibility Classification](../frameworks/decision-making/reversibility-classification/)
- [North Star Test](../frameworks/decision-making/north-star-test/)
- [Regret Minimization](../frameworks/decision-making/regret-minimization/)

---

### Route 7: Friendship Ambiguity / Mixed Signals

```yaml
---
id: friendship-ambiguity
category: relational
tags: [friendship, mixed-signals, boundaries, reciprocity, ambiguity]
complexity: low-medium
frameworks: [needs-feelings-clarity, psychological-contracts, stories-vs-facts]
primary-framework: needs-feelings-clarity
fallback-routes: [relationship-rupture, conflict-blame]
---
```

**Situation:** The user is confused about a friendship -- receiving mixed signals, unsure if the friendship is reciprocal, dealing with unclear boundaries, or processing a friendship that has changed without acknowledgment.

**Common Signals:**
- "I can't tell if they actually want to be friends"
- Inconsistent contact patterns (warm then distant)
- Effort imbalance that hasn't been discussed
- "Am I overreacting?" about a friendship concern
- Comparing the friendship to what they think friendship "should" be

**Recommended Sequence:**

1. **Needs & Feelings Clarity** -- What does the user actually need from this friendship? Separate the feeling (loneliness, rejection, confusion) from the interpretation ("they don't care"). Identify the specific unmet need.

2. **Psychological Contracts** -- What invisible agreement does the user believe exists? Friendships have implicit contracts ("we check in weekly," "we're honest with each other"). When these contracts are violated without acknowledgment, it creates confusion. Naming the contract makes it discussable.

3. **Stories vs Facts** (if needed) -- If the user has built a strong narrative about the friend's motives, separate observed behavior from interpretation. "They haven't texted in two weeks" is a fact. "They don't value me" is a story.

**When NOT to Use This Route:**
- The friendship involves a close bond with attachment dynamics (best friend, lifelong bond). Consider the Relationship Rupture route.
- The "friendship" involves manipulation, pressure, or coercion. Consider Influence Defense frameworks.

**Fallback Routes:**
- **Relationship Rupture** -- if the bond is deep enough to involve attachment dynamics
- **Conflict / Blame** -- if the friendship issue has become an active conflict

**Related Frameworks:**
- [Needs & Feelings Clarity](../frameworks/coaching/needs-feelings-clarity/)
- [Psychological Contracts](../frameworks/pattern-detection/psychological-contracts/)
- [Stories vs Facts](../frameworks/coaching/stories-vs-facts/)

---

### Route 8: Emotional Signal Unclear

```yaml
---
id: emotional-signal-unclear
category: meta
tags: [confusion, meta, unclear, needs, feelings, entry-point]
complexity: low
frameworks: [needs-feelings-clarity, awareness-as-intervention, embodied-awareness]
primary-framework: needs-feelings-clarity
fallback-routes: [shame-spiral, overthinking-fusion, conflict-blame]
---
```

**Situation:** The user knows something is off but can't identify what. They can't name the feeling, can't identify the need, and can't figure out which route they belong in. This is the meta-route -- it exists to help people find their entry point.

**Common Signals:**
- "I don't know what I'm feeling"
- "Something is off but I can't put my finger on it"
- Vague malaise without a clear object
- Difficulty answering "what do you need?"

**Recommended Sequence:**

1. **Needs & Feelings Clarity** -- Start with the basics. What are you observing? What are you feeling? What do you need? If any of these can be answered, a direction emerges.

2. **Embodied Awareness** -- If cognitive language isn't working, drop into the body. Where is the sensation? What quality does it have? The body often has clearer signal than the mind when the mind is confused.

3. **Awareness as Intervention** -- Sometimes simply naming "I don't know what I'm feeling and that's disorienting" is enough. The confusion itself is data. Naming it reduces its hold.

**Why This Order:** Cognitive language first because it's the most accessible for most people. Body second because it catches what the mind misses. Awareness third because sometimes the process of trying is the intervention.

**When NOT to Use This Route:**
- The user does know what they're feeling but is avoiding it. That's not confusion -- it's avoidance. Consider Overthinking / Fusion.
- The user is in crisis. Don't assess -- ground. "What do you need right now?" is more useful than a framework.

**Fallback Routes:**
- Once the feeling or need becomes clearer, reroute to the appropriate situation-specific route (Shame Spiral, Conflict, Career Stuckness, etc.)

**Related Frameworks:**
- [Needs & Feelings Clarity](../frameworks/coaching/needs-feelings-clarity/)
- [Embodied Awareness](../frameworks/somatic/embodied-awareness/)
- [Awareness as Intervention](../frameworks/cognitive-therapy/awareness-as-intervention/)

---

## 11. Information Architecture

### Proposed Directory Structure

```
mirror-palace/
├── routes/
│   ├── README.md                          # Route index + how to use routes
│   ├── _template.md                       # Template for new route cards
│   ├── shame-spiral.md
│   ├── relationship-rupture.md
│   ├── conflict-blame.md
│   ├── overthinking-fusion.md
│   ├── career-stuckness.md
│   ├── values-decision-paralysis.md
│   ├── friendship-ambiguity.md
│   └── emotional-signal-unclear.md
├── index.md                               # Updated: add route references
├── frameworks/                            # Existing: add backlinks to routes
│   └── */README.md                        # Updated: add "Used in routes" section
├── skills/
│   └── scan/references/signal-patterns.md # Updated: add route references
└── docs/
    └── PRD-framework-routing.md           # This document
```

### Cross-Linking Plan

**index.md updates:**
- Add a "Routes" section after the Situation Router diagram
- Link each mermaid branch to the relevant route card
- Add a note: "Routes provide sequencing and guardrails. The mermaid router provides quick orientation."

**Framework README updates:**
- Add a `routes` field to the YAML front-matter listing which routes reference this framework
- Add a "Used in Routes" section at the bottom of each README linking to relevant routes

**signal-patterns.md updates:**
- Add a "Suggested Route" column to each signal table, linking signals to route cards where applicable

**ARCHITECTURE.md updates:**
- Add Routes as a new component between the Knowledge Layer and Action Layer
- Update the data flow diagram to include route lookup

---

## 12. UX / Content Surfaces

### For Human Readers

1. **Route Index (`routes/README.md`)** -- A "Start Here" page with a simple table: "If you're experiencing X, start with route Y." Organized by situation class, not by framework.

2. **Situation-first navigation** -- The route index should be navigable by "what's happening to me" rather than by framework name. Users shouldn't need to know what ACT is to find the shame spiral route.

3. **Framework-to-route backlinks** -- Every framework page links to the routes that use it, so a user browsing frameworks can discover routes they didn't know to look for.

4. **Route-to-framework links** -- Every route links to its component frameworks, so a user who finds the right route can go deeper.

5. **Quick-start guide update** -- `guides/getting-started.md` should be updated to mention routes as the recommended entry point for users who know what they're dealing with but not which framework to use.

### For Agent Consumers

1. **YAML front-matter** -- Machine-parseable metadata in every route card for programmatic consumption.
2. **Consistent section structure** -- Agents can look for `## Recommended Sequence`, `## When NOT to Use This Route`, `## Stop If`, etc. by section header.
3. **`primary-framework` field** -- For agents that need a single entry point rather than a full sequence.
4. **`fallback-routes` field** -- For agents implementing branching logic.

---

## 13. Agent Use / Prompting Implications

### How Agents Should Use Routes

```
USER INPUT → SIGNAL DETECTION → ROUTE MATCHING → FRAMEWORK SEQUENCE → APPLICATION
                                       ↓
                              (expose route choice)
                              "I'm starting with the shame spiral route because
                               your language shows fusion with self-attack thoughts.
                               Here's the sequence I'll follow..."
```

### Principles for Agent Route Usage

1. **Expose the route.** Agents should tell the user which route they're using and why. "I'm using the shame spiral route because you described self-attack language" is transparent. "Let me help you with that" is opaque.

2. **Expose the sequence.** Show the user the framework sequence and where they are in it. "We've cleaned up the language. Now I want to try defusion. Here's why..."

3. **Check before switching.** If an agent thinks the route is wrong mid-conversation, it should say so: "This route may not be the right fit. Here's what I'm noticing. Want to try X instead?"

4. **Stop when the route says to stop.** If a `Stop If` condition is met, the agent should honor it, not power through.

5. **Don't skip language cleaning.** Multiple routes start with Needs & Feelings Clarity. Agents should not skip this step because it "seems basic." It's basic for a reason.

### Prompt Scaffolds

Route cards can include optional prompt scaffolds in the `## Prompt Scaffold` section. These are ready-to-paste prompt fragments that implement the route sequence. They should:

- Reference the `agent-prompt.md` files of the component frameworks
- Include the sequencing logic
- Include the guardrails and stop conditions
- Be usable as standalone prompts or as fragments within larger systems

### Agent Guardrails

- **Don't imply diagnosis.** "This looks like a shame spiral pattern" is okay. "You have a shame disorder" is not.
- **Don't over-personalize without evidence.** Routes are general. Don't claim to know the user's specific history or patterns from a single exchange.
- **Don't use framework language to intensify.** "You're clearly fused with this thought" can feel like another attack on someone already in shame. Use plain language: "It sounds like this thought is hitting you as truth, not just as a thought."
- **Don't collapse discernment into canned advice.** Routes are starting points. The agent should remain responsive to what the user actually says, not mechanically execute the sequence.
- **Don't turn routes into authority.** "The route says X" is not an argument. The route is a suggestion. The user's experience is the authority.

---

## 14. Guardrails and Public-Safety Constraints

### Language Guardrails

- No clinical language. "Attachment activation" is acceptable (it's in the framework). "You exhibit anxious attachment pathology" is not.
- No implied diagnosis. Routes describe situation classes, not conditions.
- No prescriptive framing. "Consider starting with..." not "You need to..."
- No certainty language. "This route may apply if..." not "This route is for you because..."

### Structural Guardrails

- No route should reference more than 4 frameworks in its primary sequence. If it needs more, it should branch to a sub-route.
- Every route must have a `When NOT to Use` section and a `Stop If` section.
- Every route must have at least one fallback route.
- No route should assume access to user history, status data, or people records. Routes work for anonymous readers.

### Public/Private Boundary

This is the most important guardrail in the system.

| Public Layer (this PRD) | Private Layer (out of scope) |
|-------------------------|------------------------------|
| Generic routes for situation classes | Routes personalized to a specific user's history |
| "If you're experiencing shame spiral" | "Based on your last 3 sessions" |
| Framework sequences with public rationale | Sequences adapted to user personality profile |
| Contraindications based on situation type | Contraindications based on user-specific triggers |
| No user state modeling | Status-aware routing that reads domain scores |

The public routing layer is a complete, useful system on its own. Private overlays may later use public routes as a foundation and add personalization, but that is explicitly out of scope for this PRD.

### Reusable Concept: Route Interface

The route card schema is designed to be a **stable interface** that both public and private layers can implement. A private overlay could extend route cards with additional fields (`user-history-match`, `status-domain-links`, `confidence-score`) without changing the public schema. This is intentional but the extension is not specified here.

---

## 15. Risks and Tradeoffs

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| **Route system becomes too rigid** | Medium | High | Routes are markdown files, not code. Easy to edit. Include "this is a suggestion" language in every route. Review quarterly for rigidity. |
| **Route system becomes too broad/vague** | Medium | Medium | Limit v1 to 8 routes. Require specificity: every route must have concrete signals, not just vibes. |
| **Users treat routes as truth** | High | High | Every route has `When NOT to Use` and `Stop If`. Route index includes a disclaimer. Agent guardrails reinforce humility. |
| **Framework combinations become cluttered** | Low | Medium | Cap sequences at 4 frameworks. Most routes should have 2-3. If a route needs more, it should branch. |
| **Repo drifts toward pseudo-clinical language** | Medium | High | Review all route cards for clinical tone before merge. Establish a review checklist. Use plain language as a hard requirement. |
| **Maintainers add too many categories too early** | Medium | Medium | Gate new categories behind a "3+ community requests" rule. Quality over coverage. |
| **Taxonomy forces bad matches** | Medium | Medium | Include the Emotional Signal Unclear meta-route as a catch-all. Fallback routes prevent dead ends. |
| **Routes become stale as frameworks evolve** | Low | Medium | Framework README `routes` field creates bidirectional links. When a framework changes, routes referencing it are easy to find. |

---

## 16. Phased Implementation Plan

### Phase 1: Foundation (1-2 weeks)
- Finalize this PRD
- Create `routes/` directory
- Create route card template (`routes/_template.md`)
- Write 4 initial route cards: Shame Spiral, Conflict/Blame, Overthinking/Fusion, Emotional Signal Unclear
- Create route index (`routes/README.md`)
- **Acceptance gate:** 4 route cards pass review for specificity, plain language, and completeness

### Phase 2: Full v1 Route Set (1-2 weeks)
- Write remaining 4 route cards: Relationship Rupture, Career Stuckness, Values/Decision Paralysis, Friendship Ambiguity
- Add route cross-links to `index.md`
- Add `routes` field to all framework READMEs referenced by routes
- Add "Suggested Route" column to `signal-patterns.md`
- **Acceptance gate:** All 8 routes complete, all cross-links verified, index.md updated

### Phase 3: Agent Integration (1-2 weeks)
- Write prompt scaffolds for each route card
- Update `guides/getting-started.md` to reference routes
- Update `docs/ARCHITECTURE.md` with routing layer
- Write a "How to Use Routes" guide for agents
- Update the scan skill to suggest routes, not just frameworks
- **Acceptance gate:** An agent can consume route cards programmatically and produce a useful response

### Phase 4: Refinement (ongoing)
- Collect feedback from actual usage (solo users, agent builders, coaches)
- Refine route sequences based on what works
- Add routes for v2 situation classes (trauma processing, system design) based on demand
- Consider agent-specific route formats for OpenClaw and Claude Code managed agents
- **Acceptance gate:** At least 2 real-world usage reports inform refinements

---

## 17. Acceptance Criteria

1. **A new user can identify a likely starting framework in under 2 minutes** by reading the route index and matching their situation to a route.

2. **Every route card is self-contained and inspectable.** A reader can understand the full routing logic from the route card alone, without needing to read other files.

3. **The repo stays public-safe.** No route card references private data, user history, status scores, or personalized recommendations. A reviewer unfamiliar with Mirror Palace can read any route card and find nothing that implies private user modeling.

4. **Framework pages and route pages cross-link coherently.** Every framework referenced by a route links back to that route. Every route links to its component frameworks.

5. **The routing layer improves usability without requiring personalization.** A first-time user with no status system, no people records, and no prior history can use routes effectively.

6. **Routes include contraindications and fallbacks.** Every route has `When NOT to Use`, `Stop If`, and `Fallback Routes` sections. No dead ends.

7. **Route sequences are justified.** Every route explains why the frameworks are ordered the way they are, and what changes if you reorder them.

8. **The system helps choose frameworks without pretending certainty.** No route uses language that implies the system knows what the user is experiencing. Routes are suggestions, not diagnoses.

9. **An agent can consume route cards programmatically.** YAML front-matter is parseable, section headers are consistent, and the content model is documented.

10. **The scan skill can reference routes.** `signal-patterns.md` includes route suggestions alongside framework suggestions.

---

## 18. Recommended File Placement

### This PRD
- **Path:** `docs/PRD-framework-routing.md`
- **Referenced from:** `docs/ROADMAP.md` (add to current initiatives), `CLAUDE.md` (optional: note existence of routing layer)

### New Files
- `routes/README.md` -- Route index and usage guide
- `routes/_template.md` -- Route card template
- `routes/shame-spiral.md`
- `routes/relationship-rupture.md`
- `routes/conflict-blame.md`
- `routes/overthinking-fusion.md`
- `routes/career-stuckness.md`
- `routes/values-decision-paralysis.md`
- `routes/friendship-ambiguity.md`
- `routes/emotional-signal-unclear.md`

### Updated Files
- `index.md` -- Add routes section
- `docs/ARCHITECTURE.md` -- Add routing layer
- `docs/ROADMAP.md` -- Reference this PRD
- `guides/getting-started.md` -- Mention routes as entry point
- `skills/scan/references/signal-patterns.md` -- Add route column
- `frameworks/*/README.md` -- Add `routes` field (for frameworks referenced by routes)

---

## 19. Roadmap / Index References

The following files should reference this PRD once it's approved:

| File | What to Add |
|------|-------------|
| `docs/ROADMAP.md` | Add "Framework Routing Layer" as a current initiative with link to this PRD |
| `CLAUDE.md` | Add brief note about routing layer in Framework Structure section |
| `index.md` | Add "Routes" section linking to `routes/README.md` |
| `docs/ARCHITECTURE.md` | Add Routing Layer between Knowledge and Status layers |
| `CONTRIBUTING.md` | Add guidance for proposing new routes |

---

## 20. OpenClaw and Claude Code Channel Support

### Current State

The repo has two integration surfaces documented in `guides/`:

- **Claude Code** (`guides/claude-code-setup.md`): Reference mode, submodule mode, or copy mode. Skills registered manually.
- **OpenClaw** (`guides/openclaw-setup.md`): Knowledge source registration, skill registry, scheduled tasks. Config via `openclaw.plugin.json` and `openclaw.bundle.json`.

Neither integration surface currently accounts for the routing layer. Both need updates.

### Claude Code Integration

Routes should be consumable by Claude Code agents in the same way frameworks are today:

```markdown
## Route-Aware Framework Usage
When facing a user situation:
1. Consult ../mirror-palace/routes/README.md to match the situation to a route
2. Load the matched route card for sequencing and guardrails
3. Follow the route's recommended framework sequence
4. Check the route's "Stop If" conditions after each framework
5. Fall back to alternative routes if the match is wrong
```

For **managed agents** (Anthropic's Claude Code managed agent channels), routes provide a structured interface that managed agents can parse:
- YAML front-matter enables programmatic route selection
- Consistent section headers enable automated guardrail checking
- `fallback-routes` field enables branching without custom logic

### OpenClaw Integration

OpenClaw's skill registry should include routing as a capability:

```yaml
knowledge_sources:
  - name: mirror-palace-routes
    path: ./mirror-palace/routes/
    index: ./mirror-palace/routes/README.md
    type: route-library
```

The scan skill should be updated to output route recommendations alongside framework recommendations.

### Future: Route as Skill

A potential Phase 4 addition: a `route` skill that, given a situation description, returns the best-matching route card. This would formalize the routing layer as an executable skill, not just a reference library. Not in scope for this PRD, but the route card schema is designed to support it.

---

## 21. Reusable Concepts

Two concepts in this PRD are designed to be reusable beyond the public layer:

1. **Route Card Schema.** The YAML front-matter + section structure is a stable interface. Any system that consumes Mirror Palace routes (public or private) can rely on this schema. Private overlays could extend it with additional fields without breaking the public contract.

2. **Situation Class Taxonomy.** The 8 v1 situation classes are coarse-grained categories that could serve as a shared vocabulary across tools, agents, and overlays. "Shame spiral" means the same thing whether it's being matched by a public route card or by a private agent with user history. The taxonomy is extensible (new classes can be added) without breaking existing routes.

These concepts are documented here for awareness. Their extension into private or multi-system contexts is out of scope.
