# North Star Test

## Core Concept

The North Star Test is a single evaluative question applied to every feature, screen, interaction, or action in a product or system:

> Does the user immediately know what to do, feel confident it's right, do it, and feel good about having done it?

This question packs four sequential requirements into one sentence, and all four must be satisfied for a design to pass. If the user doesn't know what to do, nothing else matters. If they know but don't feel confident, they hesitate or abandon. If they act but don't feel good afterward, they won't come back. Each stage gates the next.

The power of the North Star Test is its ruthless simplicity. It eliminates entire categories of design debate — "Should we add this feature?", "Is this screen too simple?", "Should we show more options?" — by redirecting every discussion to the same question: does this help or hinder the user's ability to know, trust, act, and feel good?

Most products fail the test not because their features are wrong, but because they create cognitive burden at one of the four stages. The feature works, but the user doesn't know it's there. Or they know it's there but aren't sure if it's the right choice. Or they use it but feel anxious about whether they did it correctly. Each of these is a failure, even if the technical implementation is flawless.

## Key Principles

### The Four Stages

**Stage 1: Immediately know what to do.**
The user arrives at a screen or moment and can identify the primary action without instruction, tutorial, or exploration. This requires:
- One dominant action per context (not a grid of equal options)
- Visual hierarchy that directs attention to the primary action
- Labels and affordances that communicate function clearly
- No ambiguity about what the system expects

Failure at this stage looks like: confusion, hesitation, scrolling to understand, asking "what am I supposed to do here?", relying on tooltips or help text.

The design principle is: if you need to explain it, redesign it. Explanatory text is a symptom of a design problem, not a solution.

**Stage 2: Feel confident it's right.**
The user knows what to do but also trusts that doing it is the correct choice. This requires:
- Clear indication of what will happen when they act
- No fear of irreversible consequences from routine actions
- Consistency with established patterns and expectations
- Appropriate context to make an informed choice

Failure at this stage looks like: the user hovers over a button but doesn't click. They open a dropdown but don't select. They type a response but don't send. The action is clear but the confidence is missing.

The confidence gap is usually caused by uncertainty about consequences. "If I check this off, will it disappear?" "If I click submit, can I edit it later?" "If I snooze this, will I be punished?" Eliminating consequence uncertainty closes the gap.

**Stage 3: Do it.**
The user acts. The action completes with minimal friction — few steps, fast response, no unnecessary confirmations. This requires:
- Low friction execution (target: any primary action under 30 seconds)
- No unnecessary intermediate steps (confirmations, warnings, intermediate screens)
- Responsive feedback (the system acknowledges the action immediately)
- Error tolerance (minor mistakes are recoverable without starting over)

Failure at this stage looks like: multi-step processes where a single step would suffice, loading screens that break flow, "Are you sure?" dialogs for routine actions, forms that clear on minor errors.

**Stage 4: Feel good about having done it.**
After acting, the user experiences a positive signal — accomplishment, progress, relief, satisfaction. This requires:
- Immediate positive feedback (completion signals, progress updates, encouraging micro-copy)
- No post-action anxiety ("Did it save?" "Did it work?" "Was that the right choice?")
- Connection to larger progress or meaning when appropriate
- No regret triggers (no "you've now used 3 of your 5 remaining...")

Failure at this stage looks like: the action completes but the user feels nothing, or worse, feels anxious. The task is done but the interface immediately shows ten more tasks. The item is checked off but the counter increases because dependent tasks appeared.

### Leading Indicators

These metrics measure whether the system is passing the North Star Test in aggregate:

- **Time to first action** (<30 seconds): How quickly can a new or returning user take their first meaningful action? If it takes more than 30 seconds, Stage 1 is failing — the user doesn't know what to do.

- **Primary feature completion rate** (>70%): Of users who open the primary feature, what percentage complete its core action? Below 70% indicates friction at Stage 2 (confidence) or Stage 3 (execution).

- **State check completion rate** (>80%): When the system requests a check-in or status update, what percentage of users complete it? Below 80% indicates the check-in is too heavy, too frequent, or not providing enough value.

- **Snooze/skip rate** (<20%): What percentage of presented actions are snoozed or skipped? Below 20% means actions are well-calibrated to the user's context. Above 20% means the system is presenting the wrong things at the wrong time.

- **Session length** (2-5 minutes optimal): How long does a typical session last? Too short (<2 minutes) may indicate insufficient value. Too long (>5 minutes) may indicate friction, confusion, or misuse.

### Anti-Metrics (Warning Signs)

These metrics signal that the system is failing the North Star Test even if users are technically engaged:

- **Session length >15 minutes**: The system is becoming a procrastination tool or an anxiety loop. Users are engaging but not productively. This is especially dangerous because engagement metrics look good while the product is actually harming the user.

- **Snooze rate >40%**: Tasks or actions are being consistently deferred. This means either the tasks are too large, they're presented at the wrong time, or the system's model of what the user should do is wrong.

- **Streak anxiety reports**: If the system uses streaks and users report anxiety about maintaining them, loss aversion is calibrated too aggressively. The motivational tool has become a stress source.

- **"Overwhelming" feedback**: Any qualitative signal that the system shows too much information. Information density has exceeded the user's processing capacity.

## How It Works

**For evaluating an existing feature or screen:**

1. Observe or simulate a user encountering the feature for the first time (or returning to it).
2. Ask each question in sequence:
   - Do they immediately know what to do? (Watch for hesitation, scrolling, confusion.)
   - Do they feel confident it's right? (Watch for hovering, abandonment, seeking reassurance.)
   - Do they do it? (Watch for friction, multi-step frustration, errors.)
   - Do they feel good after? (Watch for post-action anxiety, immediate overwhelm, neutral/negative affect.)
3. Identify which stage fails first. That is the stage to fix. Do not fix later stages until earlier ones pass.
4. Check the leading indicators and anti-metrics. Do the numbers confirm or contradict the qualitative observation?

**For evaluating a proposed feature or change:**

1. Describe the user's context when they will encounter this feature.
2. Walk through the four stages hypothetically:
   - Will the user know what to do without instruction?
   - Will they feel confident the action is correct and safe?
   - Can they complete it in under 30 seconds with minimal friction?
   - Will they feel positive after completing it?
3. If any stage is doubtful, redesign before building.

**For evaluating a personal action or habit:**

The North Star Test adapts beyond product design to any recurring action:
1. When the moment arrives to do this, do I immediately know what to do?
2. Do I feel confident it's the right action right now?
3. Can I do it with low friction?
4. Do I feel good afterward?

If a habit consistently fails at Stage 4 (you do it but feel bad after), the habit may need redesign. If it fails at Stage 1 (you never know when to start), the cue needs work.

## Applied As

- **In product design**: The North Star Test is the first and last evaluation for every design decision. Does this help the user know, trust, act, and feel good? If a feature doesn't serve at least one stage, it doesn't belong.

- **In system design**: Any system that humans interact with — tools, processes, workflows — can be evaluated through these four stages. A filing system fails if people don't know where to put things (Stage 1). A review process fails if people dread completing it (Stage 4).

- **In communication design**: Emails, notifications, and messages can be tested: does the recipient immediately know what to do, feel confident responding, respond easily, and feel good about having responded?

- **In personal habit design**: Evaluate each stage of your habits. Morning routine unclear? Stage 1. Exercise plan intimidating? Stage 2. Journaling too time-consuming? Stage 3. Meditation feels pointless? Stage 4.

## Common Misapplications

**Optimizing for Stage 3 (speed) without Stage 2 (confidence).** Making actions faster doesn't help if the user isn't sure they should act. Speed without confidence produces anxiety, not satisfaction.

**Treating leading indicators as goals rather than signals.** The goal is not "session length of 3 minutes." The goal is the user experience described by the four stages. The metrics are signals about whether you're achieving that experience.

**Applying the test to the wrong unit.** The test applies to individual moments of action, not to "the product" as a whole. A product can have some interactions that pass and others that fail. Test each moment independently.

**Ignoring anti-metrics because engagement is high.** High engagement with high session length and high snooze rate is a failing product that looks successful. The anti-metrics are the early warning system.

## Integration Points

- **Behavior Equation**: The North Star Test's four stages map to the behavior equation: Stage 1 relates to trigger clarity, Stage 2 to motivation confidence, Stage 3 to ability/friction, Stage 4 to reward.
- **Habit Loop Design**: Stage 1 is the cue, Stage 3 is the routine, Stage 4 is the reward. Stage 2 (confidence) is the often-missing link between cue and action.
- **Loss Aversion**: Anti-metrics around streak anxiety directly inform loss aversion calibration. If the North Star Test reveals Stage 4 failures, check whether loss aversion mechanics are the cause.
- **Variable Reward Schedules**: Stage 4 (feeling good) is enhanced by variable rewards. Fixed feedback at Stage 4 loses power over time.
- **Jobs to Be Done**: The emotional job ("how should I feel?") maps directly to Stages 2 and 4. The functional job ("what task?") maps to Stages 1 and 3.

## Summary

The North Star Test compresses user experience evaluation into four sequential gates: know what to do, feel confident, do it, feel good. Each gate depends on the previous one. Fix the first failing gate before touching later ones. Leading indicators (time to first action, completion rate, snooze rate, session length) quantify whether the test is being passed in aggregate. Anti-metrics (session >15min, snooze >40%, streak anxiety) signal failure that engagement metrics alone would miss. If you need to explain a feature, redesign it.

## Summary

The four sequential gates — know, trust, act, feel good — apply to every moment of human-system interaction, from product features to personal habits to team processes.
