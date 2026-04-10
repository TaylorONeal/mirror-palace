# Decisions Ledger

Every significant decision gets tracked. Not every decision — just the ones that affect your life trajectory. The threshold: if you'll think about this decision in 6 months, it belongs here.

## Why Track Decisions

Most people make significant decisions, forget the reasoning, and then can't learn from the outcome. The decisions ledger creates a closed loop: you record the decision and reasoning upfront, then check back to see if the reasoning held. Over time, this reveals your decision-making patterns — where you're calibrated well and where you consistently misjudge.

## Status Lifecycle

```
not-started → pending → in-progress → decided → [revisiting]
```

- **not-started**: Decision identified but not yet being actively considered. Queued.
- **pending**: Actively gathering information, weighing options, consulting people.
- **in-progress**: A direction has been chosen and is being executed, but not yet final/irreversible.
- **decided**: The decision is made and committed. Execution may continue, but the choice is locked.
- **revisiting**: A previously decided item is being reconsidered. This is a signal — document why.

## Reversibility Classification

Every decision must be classified as one-way or two-way. This classification determines how much analysis is warranted:

- **Two-way (reversible)**: Can be undone without significant cost. These should be made quickly. Analysis paralysis on two-way doors is a common failure mode. Examples: trying a new tool, starting a side project, changing a routine.
- **One-way (irreversible)**: Cannot be easily undone. These deserve careful analysis, framework application, and possibly consultation. Examples: leaving a job, ending a relationship, signing a long-term lease, having a child.

See `frameworks/decision-making/reversibility-classification/` for the full framework.

## How It Connects to Frameworks

The `decision-frameworks-ref.md` file maps decision types to applicable frameworks:

| Decision Type | Primary Framework | Supporting Frameworks |
|---------------|-------------------|----------------------|
| Any decision | reversibility-classification | — |
| High-stakes life choice | regret-minimization | north-star-test |
| Career/purpose alignment | ikigai-diagnostic | regret-minimization |
| Competing options | north-star-test | jobs-to-be-done |
| Emotionally charged | distortion-detection | stories-vs-facts |
| Involves others | Check people records | psychological-contracts |

## How It Connects to Domains and People

Every decision links to:
- **Domains**: Which life areas does this decision affect? A career change touches CAR, FIN, possibly FAM and ENV.
- **People**: Who is involved in or affected by this decision? Link to their people records.

When a decision is made, update the linked domain issues and people records.

## Creating a Decision Record

1. Copy `_template.md` to a new file named `DEC-NNN.md` (next sequential number)
2. Fill in the overview table — especially Reversibility
3. If two-way: decide quickly, document briefly
4. If one-way: work through options, apply frameworks, do the regret check
5. Update `DECISIONS-INDEX.md` with the new entry
6. Update linked domain issues and people records

## Post-Decision Protocol

Decisions don't end when they're made. The template includes:
- **30-Day Check**: Early signal — is this playing out as expected?
- **90-Day Check**: Longer-term pattern — what effects are visible?
- **Retrospective**: Full assessment — was the reasoning sound? What would you change?

This is the closed-loop-learning framework applied to life decisions.

## How Agents Use Decisions

- **The Mirror** reads the decisions ledger to detect patterns (e.g., consistently avoiding one-way decisions, making emotional decisions and rationalizing after)
- **The Strategist** tracks decision pipelines and flags stalled items
- **The Briefer** surfaces pending decisions that need attention
- **The Scan skill** can identify undocumented decisions from conversation analysis
