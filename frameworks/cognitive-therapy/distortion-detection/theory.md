# Distortion Detection

## Core Concept

Cognitive distortions are systematic errors in thinking that reinforce negative beliefs and emotional states. They operate below conscious awareness, shaping how information is interpreted before rational analysis can intervene. The critical insight is not merely that distortions exist, but that they are *predictable* — the same patterns recur across individuals and situations, which means they can be anticipated and countered through deliberate design.

In the context of system design, distortion detection is not therapy. It is information architecture. The way data is presented, the language used to describe states, and the sequence in which information is disclosed all either trigger or counter cognitive distortions. A system that shows "47 overdue tasks" is not being honest — it is catastrophizing on the user's behalf. A system that shows "Here's the most important thing right now" is not hiding information — it is countering all-or-nothing thinking through progressive disclosure.

The six distortions addressed here are the ones most commonly triggered by productivity systems, task managers, dashboards, and self-tracking tools. Each has a specific counter-strategy that can be implemented at the information design level, requiring no therapeutic intervention from the user.

## The Six Distortions

### 1. Catastrophizing

**What it is**: Taking a single data point and projecting it into worst-case scenarios. The mind leaps from "I didn't finish today's tasks" to "I'm falling behind on everything" to "This project is going to fail." The distortion amplifies the significance of any negative signal until it overwhelms context.

**How systems trigger it**: Showing aggregate totals is the primary culprit. A task manager displaying "127 tasks across all projects" gives the catastrophizing mind raw material. Large numbers become existential threats. Dashboards with red indicators, overdue counters, and deficit summaries all feed this pattern.

**Counter-strategy — Hide totals, progressive disclosure**: Never show the user the full scope of everything at once. Present information in layers: what matters now, what matters this week, and — only if requested — what the full picture looks like. The first screen should always be a single manageable unit of work, not a summary of all outstanding obligations.

Progressive disclosure works because catastrophizing requires fuel. Without the aggregate number, the mind cannot construct the spiral. The information still exists and remains accessible, but it is not thrust into the user's face on every interaction.

**Implementation principles**:
- Default views show 1-3 items, not full lists
- Totals are available but never the landing page
- When totals must be shown, contextualize them: "12 tasks this week, typical for you" rather than "12 tasks remaining"
- Trend data should show progress, not deficit: "Completed 8 of 12" not "4 remaining"

### 2. All-or-Nothing Thinking

**What it is**: Evaluating situations in binary extremes with no middle ground. A day is either "productive" or "wasted." A project is either "on track" or "failing." Partial completion is equated with zero completion. This distortion eliminates the concept of incremental progress.

**How systems trigger it**: Status indicators that use binary states (done/not done), progress bars that emphasize how much is left rather than how much is complete, and interfaces that only celebrate 100% completion all reinforce all-or-nothing evaluation. A task marked "incomplete" at end of day feels like failure, even if 80% of the work was done.

**Counter-strategy — "Best next action" framing**: Replace status-oriented displays with action-oriented ones. Instead of showing what percentage is complete or incomplete, show the single next action that would move things forward. This reframes the question from "Am I done?" (binary) to "What would help?" (continuous).

The best next action framing works because it makes partial progress invisible in a positive way. There is no "incomplete" state — there is only "here's what's next." The psychological shift is from judgment to momentum.

**Implementation principles**:
- Replace "0% complete" with "Ready to start — first step: [specific action]"
- Replace "incomplete" labels with "In progress — next: [action]"
- End-of-day summaries lead with accomplishments, then show "Tomorrow's best first action"
- Never show a state that implies total failure; always show a path forward

### 3. Fortune Telling

**What it is**: Predicting negative outcomes without evidence. "This will take forever." "I'll never finish in time." "This is going to be too hard." The mind generates negative forecasts and then treats them as facts, which reduces motivation and increases avoidance.

**How systems trigger it**: Ambiguity about effort is the primary trigger. When a user sees a task without any indication of how long it will take or how hard it will be, the fortune-telling mind fills in the blanks with worst-case estimates. Vague tasks ("reorganize files," "plan project") are particularly vulnerable because their scope is undefined.

**Counter-strategy — Show effort estimates**: Make the invisible visible. When effort is quantified — even roughly — fortune telling loses its grip. "This typically takes 20 minutes" is concrete. "Reorganize files" is a blank canvas for anxiety.

Effort estimates work because they replace imagination with data. The fortune-telling distortion thrives on ambiguity; specificity starves it. Even imprecise estimates ("15-30 minutes") are better than no estimates, because they bound the worst case.

**Implementation principles**:
- Every task should have an effort estimate (even if rough)
- Show estimates in concrete time: "~20 min" not "small" or "low effort"
- Compare estimated effort to available time: "You have 2 hours free, this takes about 30 minutes"
- Track actual vs. estimated time to improve calibration over time
- When estimates are uncertain, show a range rather than omitting entirely

### 4. Should Statements

**What it is**: Rigid rules about what ought to have happened. "I should have finished this yesterday." "I should be further along." "I should be more disciplined." These statements generate guilt about the past while doing nothing to improve the future. They convert missed deadlines into moral failures.

**How systems trigger it**: Any system that displays "overdue" labels, "missed" indicators, or past-due timestamps is generating should-statement fuel. The word "overdue" implies a moral obligation was violated. Color-coding tasks red when they pass a deadline adds emotional weight to temporal facts.

**Counter-strategy — "Next opportunity" framing**: Replace backward-looking judgment with forward-looking possibility. "Carried forward to today" instead of "Overdue from yesterday." "Next available slot: Thursday" instead of "Missed deadline: Monday." The factual content is identical — the emotional framing is entirely different.

Next opportunity framing works because it redirects attention from what cannot be changed (the past) to what can be influenced (the future). It does not deny that something was missed; it simply refuses to dwell on it.

**Implementation principles**:
- Never use the word "overdue" — use "carried forward" or "rescheduled"
- Never use red/danger colors for past-due items — use neutral colors with clear dates
- When displaying rescheduled items, show the new date prominently, not the old one
- Auto-reschedule rather than accumulating "overdue" items
- Frame movement as normal: "Moved to Thursday" not "Delayed to Thursday"

### 5. Emotional Reasoning

**What it is**: Taking feelings as evidence of reality. "I feel overwhelmed, therefore I have too much to do." "I feel anxious about this project, therefore it's going badly." "I feel like I'm not making progress, therefore I'm not." Emotions are treated as data about external reality rather than internal states.

**How systems trigger it**: Interfaces that mirror or amplify emotional states reinforce emotional reasoning. A cluttered dashboard makes the user feel overwhelmed, which they interpret as actually being overwhelmed, which makes them avoid the system entirely. Urgent-feeling notifications create a sense of crisis that may not reflect reality.

**Counter-strategy — Objective metrics only**: Present facts, not feelings. Show concrete numbers: tasks completed, time invested, milestones reached. Let the data speak without emotional loading. "You completed 5 tasks today, averaging 22 minutes each" is a fact. "Great job!" is an emotional overlay that — paradoxically — can undermine trust in the data when the user doesn't feel great.

Objective metrics counter emotional reasoning by providing an external reference point that is independent of current mood. When someone feels like they've accomplished nothing, a factual record showing otherwise is more helpful than encouragement.

**Implementation principles**:
- Show completion counts, time invested, and streaks as raw numbers
- Avoid emotionally loaded language in status displays
- Let users draw their own conclusions from data rather than telling them how to feel
- When metrics are positive, present them factually — the user will recognize the positive pattern
- Separate factual status from motivational messaging

### 6. Labeling

**What it is**: Attaching a fixed, global label to oneself based on a single event or pattern. "I'm lazy" (from missing one deadline). "I'm bad with money" (from one overspend). "I'm a procrastinator" (from one delayed task). Labels convert behaviors into identities, making change feel impossible because you would have to become a different person.

**How systems trigger it**: Language matters enormously. "Failed" tasks, "missed" deadlines, "abandoned" projects — these words don't just describe events, they build narratives. A system that labels tasks as "failed" is implicitly labeling the user as someone who fails. Accumulated negative labels create a self-reinforcing identity.

**Counter-strategy — Neutral language**: Use language that describes events without implying character. "Carried forward" not "failed." "Paused" not "abandoned." "Rescheduled" not "missed." The factual content is preserved; the identity implications are removed.

Neutral language works because it breaks the event-to-identity pipeline. When a task is "carried forward," it is a scheduling decision. When it "failed," it is a character verdict. The user did the exact same thing in both cases, but one framing supports change while the other reinforces stuckness.

**Implementation principles**:
- Maintain a language guide: banned words and their neutral replacements
- "Failed" → "Carried forward" or "Incomplete — ready to resume"
- "Missed" → "Rescheduled" or "Moved"
- "Abandoned" → "Paused" or "On hold"
- "Overdue" → "Carried forward" or "Extended"
- "Behind" → "Adjusted timeline" or "Revised schedule"
- Never describe the user with negative adjectives, even implicitly

## The Compounding Effect

These distortions rarely operate in isolation. A typical negative spiral:

1. User sees 47 tasks (catastrophizing trigger)
2. Feels overwhelmed (emotional reasoning: "I feel overwhelmed, so I must be overwhelmed")
3. Predicts failure: "I'll never get through all of this" (fortune telling)
4. Judges self: "I should have stayed on top of this" (should statement)
5. Labels self: "I'm terrible at follow-through" (labeling)
6. Concludes: "Why even try?" (all-or-nothing: since I can't do it all, I'll do nothing)

The counter-strategies also compound positively:

1. User sees one task with a 20-minute estimate (no catastrophizing trigger, fortune telling countered)
2. Completes it, sees "5 completed today" (objective metrics counter emotional reasoning)
3. Next task appears: "Here's the best next action" (all-or-nothing countered)
4. Previous items show "carried forward" not "overdue" (should statements and labeling countered)

## Design Audit Checklist

When evaluating any interface, screen, or notification:

- [ ] Does this view show aggregate totals? (Catastrophizing risk)
- [ ] Does this view use binary status indicators? (All-or-nothing risk)
- [ ] Are there tasks without effort estimates? (Fortune telling risk)
- [ ] Is any language backward-looking and judgmental? (Should statement risk)
- [ ] Does the display amplify or mirror emotional states? (Emotional reasoning risk)
- [ ] Does any label imply character rather than event? (Labeling risk)

## Integration Points

This framework connects directly to:

- **Linguistic Reframing** — Provides the replacement language patterns
- **ADHD Design Rules** — Shares the principle of hiding backlogs and single-item focus
- **Awareness as Intervention** — Distortion detection is the system-level application; awareness is the personal-level application
- **Time Blindness** — Effort estimates serve both distortion countering and time blindness support

## Limits of This Framework

Distortion detection through system design is not a replacement for therapeutic work. It reduces the frequency with which systems *trigger* distortions, but it does not address the underlying cognitive patterns. A person who catastrophizes will still catastrophize in other areas of life — the goal here is simply to stop the system from making it worse.

The framework also does not address distortions that are accurate. Sometimes the situation genuinely is overwhelming. Sometimes the timeline genuinely is impossible. When objective metrics confirm the negative assessment, the appropriate response is problem-solving, not reframing. Distortion detection assumes the negative assessment is disproportionate to reality — when it is proportionate, different frameworks apply.
