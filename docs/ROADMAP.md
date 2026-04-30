# Philosophy & Direction

How Mirror Palace thinks about what it's building and why.

---

## Current Initiative: Framework Routing Layer

**Status:** Implemented (Phase 1-2 complete, Phase 3 in progress)
**PRD:** [`docs/PRD-framework-routing.md`](PRD-framework-routing.md)
**Task Tracking:** [`docs/routing-layer-task-status.md`](routing-layer-task-status.md)

The framework routing layer adds a structured middle layer between signal detection and framework application. 8 route cards map common situation classes (shame spirals, overthinking, conflict, relationship rupture, friendship ambiguity, career stuckness, decision paralysis, unclear emotional signals) to recommended framework sequences with ordering rationale, contraindications, stop conditions, and fallback paths. Routes live in `routes/` and are cross-linked to frameworks, signal-patterns, index.md, and agent documentation.

**Remaining work:** Usage feedback collection, v2 situation classes (trauma processing, system design), potential `route` skill for executable routing.

## Emerging next layer: signal processing intake
A useful next layer is a general signal-processing intake pattern that helps agents decide whether an inbound item is action, information, pattern, relationship, opportunity, admin drag, or discard. This would strengthen the bridge from raw inbox/calendar/chat inputs into framework routing, memory updates, and proactive support.

---

## The Progression

Mirror Palace guides a single progression, applied across every component:

```
Surface patterns  →  Calm the mind  →  Act with integrity  →  Live fully
```

1. **Surface patterns through self-knowledge.** See what's actually happening — the habits, the avoidance, the stories, the conditioned responses — without flinching.
2. **Calm the fluctuations of the mind.** Use that awareness to quiet reactivity, create space between stimulus and response, and operate from clarity rather than noise.
3. **Act in a life-serving way.** Make choices that serve both yourself and others — grounded in rational ethics, not guilt or obligation.
4. **Create a fulfilling, impactful, and contented life.** Not just less friction. Not just more clarity. An actual life worth living — one you build deliberately and inhabit fully.

**The system never prescribes a vision of the good life. It helps users discover and pursue their own.**

---

## Design Principles

These principles shape every decision about what to build, what to change, and what to leave alone.

### Clarity in service of flourishing

Clarity is a means, not an end. The system exists to help people build lives worth living — not just lives that are clearly understood. Every pattern surfaced, every alignment test run, every metric tracked should ultimately connect to the question: "Is this helping me live well?"

### Detect thriving, not just problems

A system that only finds what's broken trains the user to see only what's broken. Every touchpoint — daily briefings, scan conversations, agent reflections, signal detection — balances gap-detection with thriving-detection. Sustained streaks, healthy relationships, values-action alignment, and earned contentment are data worth capturing and naming.

### See yourself in context

Self-knowledge without relational awareness is incomplete. People records track what you receive AND what you give. Decisions include who else is affected. Agents notice relational imbalances. The question isn't just "how does this affect me?" but "how am I affecting them?"

### Match intensity to capacity

Naming a pattern can agitate as easily as it can calm. The system reads the user's state — energy, emotional weather, activation level — and adjusts what it surfaces and how. On a hard day, the most useful thing the system can do is be shorter, warmer, and lead with what's working. Analysis can wait for a calmer day.

### Know when enough is enough

The system must recognize when a domain is thriving and leave it alone, when a pipeline has enough items, and when the strategic move is to release a goal without guilt. Contentment is not complacency. Sufficiency is not settling. A system that never says "enough" trains the user to never feel enough.

### Connect daily action to meaning

The Mirror doesn't just ask "what's happening?" It asks "what is this in service of?" Productivity that substitutes for meaning is its own pattern. The Strategist doesn't just ask "what's the leverage?" It asks "who else does this matter to?" Goals that serve others compound in ways self-serving goals cannot.

---

## How It's Applied

These principles aren't aspirational. They're implemented across the system:

### CLAUDE.md
Guiding philosophy section orients all agent behavior toward the progression. Pacing guidance instructs agents to lead with presence before analysis when the user is activated. Continuous Learning Protocol includes thriving as a signal worth capturing.

### Agent Archetypes

| Agent | How The Principles Show Up |
|-------|---------------------------|
| **The Mirror** | Meaning questions ("what is this in service of?"). Relational awareness (notices giving/receiving imbalances). State-responsive pacing table — adjusts depth and warmth to user capacity. Won't push analysis when someone needs presence. |
| **The Briefer** | "What's Working" section before pattern alerts. State-responsive briefing shape — energy 1-3 gets minimal briefing, lead with stability. Reciprocity in people section. |
| **The Tracker** | Reports positive trends and sustained streaks alongside gaps. Reciprocity tracking across people records — Support% vs Giving% over time. |
| **The Strategist** | Sufficiency checks — recommends releasing goals, not just adding them. Stakeholder awareness — "who else does this matter to?" Ikigai lens on the pipeline — goals at the intersection of capability, love, and service get highest priority. |
| **The Operator** | Stakeholder awareness — notes who is affected by operational actions. |

### Signal Patterns
Thriving and Flourishing Signals section detects: sustained domain satisfaction, warm reciprocal relationships, consistent energy, values-action alignment, contentment, generosity, creative output, and completion satisfaction.

### Scan Conversation
Three closing questions surface what's working: "What part of your life is genuinely working well?", "What are you proud of?", "Who are you showing up well for?" Design principle: balance gap-detection with thriving-detection.

### Daily Briefing
"What's Working" section (Step 4) before Pattern Alert. Pacing note: when state check shows distress, minimize alerts and lead with stability. Output format includes "Working Well" section.

### People Records
Bidirectional: Support% (what they give you) + Giving% (what you give them) + "What I Give" section. Relationships are understood in both directions.

### Decisions Ledger
"Who's Affected" section for stakeholder awareness. `released` as a valid status — decisions can be consciously let go, not just decided or deferred indefinitely.

---

## The System's Character

Mirror Palace is a thinking partner that:

- Sees you clearly — patterns, contradictions, strengths, and blind spots
- Sees you in context — in relation to others, to your stated values, to what matters
- Adjusts its intensity to your capacity — calmer when you need calm, deeper when you're ready
- Notices what's working with the same rigor it notices what's broken
- Connects daily action to larger meaning without prescribing what that meaning should be
- Knows when to push and when to say "this is enough, and it's good"

```
BEFORE                               NOW
──────                               ───
See yourself clearly                 See yourself clearly — and in context
Name what's broken                   Name what's broken and what's working
Detect patterns                      Respond to patterns wisely, paced to state
Test alignment                       Act from alignment — toward others too
Reduce friction                      Recognize sufficiency
Understand yourself                  Understand yourself in relation to others
Finish what you start                Start what matters — release what doesn't
Always optimize                      Know when enough is enough
Clarity                              Clarity + Calm + Integrity + Fulfillment
```
