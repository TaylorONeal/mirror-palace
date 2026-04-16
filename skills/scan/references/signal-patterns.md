# Signal-to-Framework Mapping

Signal patterns for the scan skill. When you detect a signal in conversation, documents, or connected data, map it to the relevant frameworks.

## How to Use This Reference

1. When scanning a source, look for these signals (exact or approximate match)
2. When a signal is detected, note the source and context
3. Map to the listed framework(s)
4. Assign a confidence score based on signal strength and repetition
5. Check the "Updates" column to know which status files should be refreshed

## Confidence Scoring Guide

| Score | Meaning | Action |
|-------|---------|--------|
| 80-100 | Strong match. Multiple indicators or direct behavioral data. | Propose status update immediately |
| 60-79 | Probable match. Clear signal but could be situational. | Include in report, propose update with caveat |
| 40-59 | Possible match. Signal detected but context is thin. | Include in report as "possible", don't propose update |
| 0-39 | Weak match. Signal is ambiguous or contradicted by other data. | Note in scan log only, don't include in report |

**Key rule:** A single instance is a hypothesis. A repeated pattern (3+ occurrences or sustained over 2+ weeks) is a strong indicator.

---

## Task and Execution Signals

| Signal | Source Type | Framework(s) | Confidence Guide | Updates | Suggested Route |
|--------|------------|-------------|-----------------|---------|----------------|
| Task snoozed or postponed 2+ times | Task manager, journal, conversation | `failure-modes`, `executive-function-model` | High if 3+ times on same task | Relevant domain | [overthinking-fusion](../../../routes/overthinking-fusion.md) |
| Multiple new projects started, none finished | Conversation, repo, task manager | `failure-modes`, `regret-minimization` | High if pattern spans 3+ projects | `status/domains/career-work.md` | [career-stuckness](../../../routes/career-stuckness.md) |
| "I'll do it tomorrow" repeated across days | Conversation, journal | `executive-function-model`, `time-blindness` | Medium — common but check pattern | Relevant domain | [overthinking-fusion](../../../routes/overthinking-fusion.md) or [career-stuckness](../../../routes/career-stuckness.md) |
| Detailed planning with no execution | Conversation, documents | `executive-function-model`, `behavior-equation` | Medium — planning can be avoidance | `status/domains/career-work.md` | [overthinking-fusion](../../../routes/overthinking-fusion.md) |
| Overcommitting to new requests | Calendar, conversation | `failure-modes`, `adhd-design-rules` | High if measurable from calendar | Relevant domain | [career-stuckness](../../../routes/career-stuckness.md) |
| Building systems instead of shipping | Conversation, repo activity | `failure-modes`, `executive-function-model` | High if repeated — classic avoidance via productivity | `status/domains/career-work.md` | [overthinking-fusion](../../../routes/overthinking-fusion.md) |

## Calendar and Time Signals

| Signal | Source Type | Framework(s) | Confidence Guide | Updates | Suggested Route |
|--------|------------|-------------|-----------------|---------|----------------|
| Calendar >80% packed with meetings | Calendar | `executive-function-model`, `north-star-test` | High if sustained 2+ weeks | `status/domains/career-work.md`, `status/domains/environment.md` | [career-stuckness](../../../routes/career-stuckness.md) |
| No unstructured time blocks in a week | Calendar | `executive-function-model`, `systems-over-goals` | High — structural issue | `status/domains/environment.md` | [career-stuckness](../../../routes/career-stuckness.md) |
| Recurring meetings with no clear purpose | Calendar | `jobs-to-be-done` | Medium — may be inertia | `status/domains/career-work.md` | [career-stuckness](../../../routes/career-stuckness.md) |
| Consistent late-night work sessions | Calendar, messages | `failure-modes`, `behavior-equation` | Medium — could be preference or compensation | `status/domains/health-fitness.md` | [career-stuckness](../../../routes/career-stuckness.md) |
| Events repeatedly rescheduled (3+ in a week) | Calendar | `time-blindness`, `behavior-equation` | High — measurable pattern | Relevant domain | [career-stuckness](../../../routes/career-stuckness.md) |
| No fun/recreation events on calendar | Calendar | `north-star-test`, `behavior-equation` | Medium — fun may not be calendared | `status/domains/fun-recreation.md` | [career-stuckness](../../../routes/career-stuckness.md) |

## Language and Self-Talk Signals

| Signal | Source Type | Framework(s) | Confidence Guide | Updates | Suggested Route |
|--------|------------|-------------|-----------------|---------|----------------|
| "Should" language ("I should be...", "I need to...") | Conversation, journal | `distortion-detection` | Medium — common but not always distorted | Relevant domain | [shame-spiral](../../../routes/shame-spiral.md) |
| Self-deprecating humor about capabilities | Conversation, messages | `distortion-detection`, `self-image-cybernetics` | Medium — check if pattern or one-off | `status/domains/personal-growth-learning.md` | [shame-spiral](../../../routes/shame-spiral.md) |
| All-or-nothing language ("always", "never", "completely") | Conversation, journal | `distortion-detection` | Medium — common in venting, check for pattern | Relevant domain | [shame-spiral](../../../routes/shame-spiral.md) |
| "Everyone else is..." / "Normal people..." | Conversation | `distortion-detection`, `manipulation-watchouts` | Medium — check if comparison is organic or introduced | Relevant domain | [shame-spiral](../../../routes/shame-spiral.md) |
| "I'm just not the kind of person who..." | Conversation | `self-image-cybernetics`, `identity-reinforcement` | High — direct self-image data | `status/domains/personal-growth-learning.md` | [shame-spiral](../../../routes/shame-spiral.md) |
| "It's fine" when it clearly isn't | Conversation | `childhood-emotional-neglect`, `distortion-detection` | Medium — one-off or pattern? | Relevant domain, `status/people/` | [emotional-signal-unclear](../../../routes/emotional-signal-unclear.md) |
| Apologizing for having needs | Conversation, messages | `childhood-emotional-neglect`, `psychological-contracts` | Medium-high if repeated | `status/people/` | [emotional-signal-unclear](../../../routes/emotional-signal-unclear.md) |
| Catastrophizing ("this will ruin everything") | Conversation, journal | `distortion-detection`, `stories-vs-facts` | High if specific language detected | Relevant domain | [overthinking-fusion](../../../routes/overthinking-fusion.md) |
| Mind-reading ("they probably think...") | Conversation | `distortion-detection`, `behavioral-signal-reading` | Medium — worth noting pattern | `status/people/` | [conflict-blame](../../../routes/conflict-blame.md) |
| Fortune-telling ("this won't work") | Conversation, journal | `distortion-detection` | Medium — check for evidence basis | Relevant domain | [overthinking-fusion](../../../routes/overthinking-fusion.md) |

## Decision and Commitment Signals

| Signal | Source Type | Framework(s) | Confidence Guide | Updates | Suggested Route |
|--------|------------|-------------|-----------------|---------|----------------|
| Decision pending 14+ days with no progress | Decisions ledger, conversation | `reversibility-classification`, `failure-modes` | High — measurable stall | `status/decisions/` | [values-decision-paralysis](../../../routes/values-decision-paralysis.md) |
| Gathering information past the point of usefulness | Conversation | `reversibility-classification`, `executive-function-model` | Medium — information as procrastination | `status/decisions/` | [values-decision-paralysis](../../../routes/values-decision-paralysis.md) |
| Decisions made impulsively then regretted | Conversation, journal | `reversibility-classification`, `loss-aversion` | Medium — check one-way vs two-way | `status/decisions/` | [values-decision-paralysis](../../../routes/values-decision-paralysis.md) |
| Avoiding all risk, even small reversible ones | Conversation, behavior | `loss-aversion`, `four-f-survival-types` | Medium — treating two-way doors as one-way | `status/decisions/` | [values-decision-paralysis](../../../routes/values-decision-paralysis.md) |
| "I'll figure it out when I get there" | Conversation | `time-blindness`, `regret-minimization` | Low-medium — check historical accuracy | Relevant domain | [values-decision-paralysis](../../../routes/values-decision-paralysis.md) or [overthinking-fusion](../../../routes/overthinking-fusion.md) |
| Sudden enthusiasm for a major life change | Conversation, journal | `regret-minimization`, `reversibility-classification` | Medium — genuine or impulsive? | `status/decisions/` | [career-stuckness](../../../routes/career-stuckness.md) |

## Relationship and Interpersonal Signals

| Signal | Source Type | Framework(s) | Confidence Guide | Updates | Suggested Route |
|--------|------------|-------------|-----------------|---------|----------------|
| No contact with close person for 30+ days | Messages, conversation, calendar | `failure-modes`, `psychological-contracts` | High — direct measurement | `status/people/`, `status/domains/family-friends.md` | [friendship-ambiguity](../../../routes/friendship-ambiguity.md) |
| Relationship described as "fine" with flat affect | Conversation | `stories-vs-facts`, `psychological-contracts` | Low-medium — needs more context | `status/people/` | [emotional-signal-unclear](../../../routes/emotional-signal-unclear.md) |
| Difficulty saying no to requests | Conversation, calendar | `four-f-survival-types`, `family-systems-differentiation` | Medium — check if pattern or situational | `status/people/`, `status/domains/community.md` | [conflict-blame](../../../routes/conflict-blame.md) |
| Over-functioning in relationships | Conversation | `four-f-survival-types`, `family-systems-differentiation` | Medium — choice or compulsion? | `status/people/` | [relationship-rupture](../../../routes/relationship-rupture.md) |
| Conflict avoidance at personal cost | Conversation | `four-f-survival-types`, `psychological-contracts` | Medium-high if repeated | `status/people/` | [conflict-blame](../../../routes/conflict-blame.md) |
| Feeling responsible for others' emotions | Conversation | `childhood-emotional-neglect`, `family-systems-differentiation` | Medium — check if role was assigned or chosen | `status/people/` | [relationship-rupture](../../../routes/relationship-rupture.md) |
| Dismissing own emotional reaction ("they didn't mean it") | Conversation | `distortion-detection`, `manipulation-watchouts` | Medium — whose perception is prioritized? | `status/people/` | [conflict-blame](../../../routes/conflict-blame.md) |
| Feeling pressured to decide or act by someone | Conversation | `manipulation-watchouts`, `leverage-point-awareness` | Medium-high — check for manipulation | `status/people/`, `status/decisions/` | [conflict-blame](../../../routes/conflict-blame.md) |

## Energy and Motivation Signals

| Signal | Source Type | Framework(s) | Confidence Guide | Updates | Suggested Route |
|--------|------------|-------------|-----------------|---------|----------------|
| Energy mentions paired with self-criticism | Conversation, journal | `failure-modes`, `distortion-detection` | Medium — treating low energy as character flaw | `status/domains/health-fitness.md` | [shame-spiral](../../../routes/shame-spiral.md) |
| Motivation only through crisis or deadline | Conversation, behavior | `adhd-design-rules`, `behavior-equation` | High if consistent pattern | Relevant domain | [overthinking-fusion](../../../routes/overthinking-fusion.md) |
| Guilt as primary motivator | Conversation | `distortion-detection`, `psychological-contracts` | Medium — unsustainable driver | Relevant domain | [shame-spiral](../../../routes/shame-spiral.md) |
| Excitement about new things that fades quickly | Conversation, behavior | `variable-reward-schedules`, `habit-loop-design` | Medium — novelty response is predictable | Relevant domain | [career-stuckness](../../../routes/career-stuckness.md) |
| "I know what to do, I just can't make myself" | Conversation | `behavior-equation`, `executive-function-model` | High — classic executive function gap | Relevant domain | [overthinking-fusion](../../../routes/overthinking-fusion.md) |
| Sleep disruption mentioned or measurable | Conversation, health data | `embodied-awareness`, `executive-function-model` | High if sustained 5+ days | `status/domains/health-fitness.md` | [emotional-signal-unclear](../../../routes/emotional-signal-unclear.md) or [overthinking-fusion](../../../routes/overthinking-fusion.md) |
| Exercise routine broken after streak | Tracker data, conversation | `habit-loop-design`, `identity-reinforcement`, `failure-modes` | High — behavioral data is concrete | `status/domains/health-fitness.md` | [shame-spiral](../../../routes/shame-spiral.md) or [career-stuckness](../../../routes/career-stuckness.md) |

## Identity and Self-Concept Signals

| Signal | Source Type | Framework(s) | Confidence Guide | Updates | Suggested Route |
|--------|------------|-------------|-----------------|---------|----------------|
| Achievement immediately followed by minimization | Conversation | `self-image-cybernetics`, `distortion-detection` | Medium — thermostat pulling back | `status/domains/personal-growth-learning.md` | [shame-spiral](../../../routes/shame-spiral.md) |
| Strong reaction to being seen as incompetent | Conversation | `identity-reinforcement`, `four-f-survival-types` | Medium — which identity is threatened? | `status/domains/personal-growth-learning.md` | [shame-spiral](../../../routes/shame-spiral.md) |
| Living by someone else's definition of success | Conversation, journal | `teleological-psychology`, `ikigai-diagnostic` | Medium — inherited vs chosen values | `status/domains/career-work.md` | [career-stuckness](../../../routes/career-stuckness.md) |
| "I used to be good at this" | Conversation | `self-image-cybernetics`, `loss-aversion` | Medium — identity anchored to past | `status/domains/personal-growth-learning.md` | [shame-spiral](../../../routes/shame-spiral.md) |
| Comparing self unfavorably to others | Conversation, journal | `self-image-cybernetics`, `distortion-detection` | Medium — single instance is noise | `status/domains/personal-growth-learning.md` | [shame-spiral](../../../routes/shame-spiral.md) |
| Identity statement that limits behavior | Conversation | `self-image-cybernetics`, `identity-reinforcement` | High — direct self-concept data | `status/domains/personal-growth-learning.md` | [shame-spiral](../../../routes/shame-spiral.md) |

## Financial and Resource Signals

| Signal | Source Type | Framework(s) | Confidence Guide | Updates | Suggested Route |
|--------|------------|-------------|-----------------|---------|----------------|
| Financial anxiety or avoidance of financial topics | Conversation, journal | `distortion-detection`, `loss-aversion` | Medium — avoidance or low priority? | `status/domains/money-finances.md` | [overthinking-fusion](../../../routes/overthinking-fusion.md) |
| Spending pattern change | Financial data, conversation | `behavior-equation`, `loss-aversion` | High if measurable, medium if reported | `status/domains/money-finances.md` | [overthinking-fusion](../../../routes/overthinking-fusion.md) or [emotional-signal-unclear](../../../routes/emotional-signal-unclear.md) |
| Avoiding looking at bank balance | Conversation | `failure-modes`, `distortion-detection` | Medium — classic avoidance | `status/domains/money-finances.md` | [overthinking-fusion](../../../routes/overthinking-fusion.md) |

## Practice and Mind-Body Signals

| Signal | Source Type | Framework(s) | Confidence Guide | Updates | Suggested Route |
|--------|------------|-------------|-----------------|---------|----------------|
| Mentions yoga, meditation, or breathwork but frustrated with mystical framing | Conversation | `rational-yoga` | High — direct trigger | `status/domains/health-fitness.md`, `status/domains/spirituality.md` | [emotional-signal-unclear](../../../routes/emotional-signal-unclear.md) |
| Cognitive understanding not translating to behavior change | Conversation, journal | `rational-yoga`, `embodied-awareness` | Medium — common pattern, check if embodied practice is missing | `status/domains/personal-growth-learning.md` | [emotional-signal-unclear](../../../routes/emotional-signal-unclear.md) |
| Seeking a unified daily practice across physical/mental/ethical dimensions | Conversation | `rational-yoga`, `systems-over-goals` | High if explicitly seeking integration | `status/domains/health-fitness.md`, `status/domains/personal-growth-learning.md` | [emotional-signal-unclear](../../../routes/emotional-signal-unclear.md) |
| Reactive behavior despite intellectual awareness of the pattern | Conversation | `rational-yoga`, `awareness-as-intervention` | Medium-high — samskara/conditioned pattern signal | Relevant domain | [emotional-signal-unclear](../../../routes/emotional-signal-unclear.md) |
| Stress response disproportionate to stimulus with somatic awareness | Conversation | `rational-yoga`, `four-f-survival-types` | Medium — check if breath/body practice would help | `status/domains/health-fitness.md` | [emotional-signal-unclear](../../../routes/emotional-signal-unclear.md) |
| Interest in ethical framework grounded in rational self-interest | Conversation | `rational-yoga` | Medium — yamas/niyamas reframe may apply | `status/domains/personal-growth-learning.md` | [emotional-signal-unclear](../../../routes/emotional-signal-unclear.md) |
| Attention/focus difficulties with interest in training (not just productivity tools) | Conversation | `rational-yoga`, `executive-function-model` | Medium — dharana/attention training phase | `status/domains/personal-growth-learning.md` | [emotional-signal-unclear](../../../routes/emotional-signal-unclear.md) |

## Spiritual and Meaning Signals

| Signal | Source Type | Framework(s) | Confidence Guide | Updates | Suggested Route |
|--------|------------|-------------|-----------------|---------|----------------|
| Spiritual practice lapsed without awareness | Conversation, habit data | `awareness-as-intervention`, `habit-loop-design` | Medium — intentional pause or drift? | `status/domains/spirituality.md` | [emotional-signal-unclear](../../../routes/emotional-signal-unclear.md) or [career-stuckness](../../../routes/career-stuckness.md) |
| Existential questioning or meaning crisis | Conversation | `teleological-psychology`, `regret-minimization` | Medium — situational or sustained? | `status/domains/spirituality.md` | [career-stuckness](../../../routes/career-stuckness.md) |
| Learning consumption without application | Conversation, records | `closed-loop-learning`, `systems-over-goals` | High if pattern spans 3+ resources | `status/domains/personal-growth-learning.md` | [overthinking-fusion](../../../routes/overthinking-fusion.md) |
| Not belonging in a group despite participation | Conversation | `four-f-survival-types`, `family-systems-differentiation` | Medium — anxiety or real misfit? | `status/domains/community.md` | [friendship-ambiguity](../../../routes/friendship-ambiguity.md) or [emotional-signal-unclear](../../../routes/emotional-signal-unclear.md) |

---

## Thriving and Flourishing Signals

| Signal | Source Type | Framework(s) | Confidence Guide | Updates | Suggested Route |
|--------|------------|-------------|-----------------|---------|----------------|
| Sustained satisfaction in a domain for 30+ days | Status data, conversation | `identity-reinforcement`, `systems-over-goals` | High — measurable stability | Relevant domain (note as thriving, not just green) | — |
| Relationship described with genuine warmth and reciprocity | Conversation | `psychological-contracts` | Medium — single instance may be mood; check pattern | `status/people/` | — |
| Energy consistently high for 2+ weeks | Conversation, health data | `behavior-equation`, `embodied-awareness` | High if sustained — something structural is working | `status/domains/health-fitness.md` | — |
| Stated values and actual behavior aligned (confirmed by tracker data) | Tracker reports, conversation | `identity-reinforcement`, `north-star-test` | High — strongest signal of integration | `status/domains/personal-growth-learning.md` | — |
| User reports feeling "enough" or contentment without resignation | Conversation | `systems-over-goals` | Medium-high — distinguish from avoidance or settling | Relevant domain | — |
| Proactive generosity or support toward others | Conversation, messages | `psychological-contracts` | Medium — note in people records | `status/people/` | — |
| Completing a meaningful goal and feeling satisfied (not immediately chasing next) | Conversation | `regret-minimization`, `identity-reinforcement` | High — completion + satisfaction is flourishing data | `status/decisions/`, relevant domain | — |
| Creative output or generative work described with energy | Conversation | `ikigai-diagnostic` | Medium — check if sustained or novelty | Relevant domain | — |

## Adding New Signals

When a new signal is observed that isn't in this table:
1. Document the signal, source, and context
2. Map it to the most relevant framework(s) from `index.md`
3. Add it to the appropriate category in this table
4. Set confidence to "provisional" until confirmed across 3+ observations
5. After confirmation, set the confidence guide based on observed reliability
