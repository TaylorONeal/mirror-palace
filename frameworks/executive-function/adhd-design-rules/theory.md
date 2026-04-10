# ADHD Design Rules

## Core Concept

Attention deficit conditions are not attention deficits in the literal sense — they are attention regulation difficulties. The capacity for attention exists (often in abundance, as hyperfocus demonstrates), but the ability to direct it voluntarily, sustain it on non-preferred tasks, and transition it between activities is impaired. This distinction is critical for system design: the goal is not to "fix" attention but to work with how attention actually functions under these conditions.

The ten principles below are not accommodations in the sense of making things easier. They are design corrections — fixing the mismatch between how most systems are built (assuming consistent executive function) and how attention regulation actually works for a significant portion of the population. A system built on these principles is not a "special needs" system; it is a better system for everyone, because everyone experiences executive function variability under stress, fatigue, or cognitive overload.

Each principle addresses a specific failure mode that occurs when systems assume neurotypical executive function.

## The Ten Principles

### 1. One Thing at a Time

**The problem**: Lists overwhelm. A screen showing 15 tasks does not motivate — it paralyzes. The attention regulation system cannot triage 15 items simultaneously, so it either fixates on the wrong one, cycles between all of them, or shuts down entirely. The experience of seeing a long list is not "here are my options" but "here is proof I cannot handle my life."

**The principle**: A single item should dominate the interface at any moment. One task. One action. One decision. Additional items exist but are not competing for attention.

**Implementation**:
- The default view shows exactly one task with its first action step
- "Show more" is available but not the default
- When multiple items require attention, present them sequentially, not simultaneously
- Navigation between items is possible but should not be the primary interaction
- The active task occupies the majority of visual space; everything else is secondary

**Why it works**: Attention regulation difficulties mean the filtering that neurotypical users do automatically (glance at list, identify priority, focus on it) does not happen. The system must do the filtering. Showing one item removes the need for the filtering step entirely.

### 2. Hide the Backlog

**The problem**: Large counts trigger overwhelm. "47 tasks" is not information — it is an anxiety generator. The number does not help the user decide what to do next. It tells them how far behind they are, which triggers catastrophizing, which triggers avoidance, which makes the number grow.

**The principle**: Never show the total count of outstanding items as the primary display. The backlog exists and is accessible, but it is not the first thing the user sees.

**Implementation**:
- Remove task counts from headers, badges, and navigation
- Replace "47 tasks" with "Here's what matters today"
- If counts must be shown, contextualize: "12 this week (you typically complete 10-14)"
- Backlog is accessible via deliberate navigation, never the landing page
- Archive or auto-hide items older than a certain threshold

**Why it works**: The backlog count is for the system's benefit, not the user's. The user needs to know what to do next. The system needs to know total volume. Surfacing system data to the user creates anxiety without utility.

### 3. External Accountability

**The problem**: Internal accountability — "I told myself I would do this" — is unreliable when executive function is variable. The commitment feels real when made but evaporates when the moment arrives. This is not a character flaw; it is an executive function limitation (specifically, working memory and self-monitoring).

**The principle**: Create external reference points that hold commitments visible. The system remembers what the user said they would do and reflects it back without judgment.

**Implementation**:
- "You said you'd work on this today" — factual, not accusatory
- Scheduled tasks appear as commitments, not suggestions
- Streaks and consistency tracking make patterns visible
- Optional accountability sharing: "Send progress to [person]?"
- Review prompts that reference past intentions: "Last Monday you planned to [X]. How did that go?"

**Why it works**: External accountability substitutes for the internal self-monitoring that may be impaired. The system holds the commitment in its memory so the user's working memory does not have to.

### 4. Time Anchoring

**The problem**: Time perception is often impaired ("time blindness"). "This week" feels identical to "sometime." "Due Friday" lacks urgency until Friday at 11pm. Relative time references ("soon," "later," "this week") provide no actionable grip for someone who cannot intuitively sense how far away Friday is.

**The principle**: Always use concrete time. Days, hours, minutes. Compare time available to time needed. Make deadlines specific and countdowns visible.

**Implementation**:
- "3 days left" not "this week"
- "Due Thursday at 5pm" not "due this week"
- "This takes ~45 min. You have 2 hours free this afternoon"
- Countdown timers for active deadlines
- "If you start now, you'll finish by 3pm"

**Why it works**: Concrete time creates urgency that relative time cannot. "3 days" triggers different neural processing than "this week," even though they may refer to the same deadline. The specificity activates planning circuits that vague references do not.

### 5. Transition Support

**The problem**: Shifting between tasks is effortful. The hyperfocused state is productive but fragile — interrupting it without a transition ritual causes disorientation, frustration, and difficulty entering the next task. The gap between tasks is where momentum dies.

**The principle**: Every task transition should include a completion moment and a preparation moment. Never jump directly from one task to the next.

**Implementation**:
- Task completion includes a brief acknowledgment: "Done. Nice work."
- A 15-30 second pause before the next task appears
- The next task is introduced with context: "Next: [task]. Here's what you need to know."
- Transition prompts: "Ready for the next one, or need a moment?"
- End-of-session wind-down: "Here's what you accomplished. Tomorrow's first task is [X]."

**Why it works**: Transitions are executive function events — they require shifting, working memory updating, and initiation of a new activity. By structuring the transition, the system does the executive function work, and the user rides the structure.

### 6. Effort Visibility

**The problem**: Tasks without effort estimates are blank canvases for anxiety. "Reorganize files" could mean 15 minutes or 4 hours. Without a sense of scope, the fortune-telling distortion fills in worst-case estimates, which makes the task feel too large to start, which triggers avoidance.

**The principle**: Every task should show estimated effort. Even rough estimates are better than none. Compare estimated effort to available time.

**Implementation**:
- Every task displays estimated duration: "~20 min," "~2 hrs"
- Compare to available time: "You have 90 min free. This takes ~30 min."
- Track actual time vs. estimates to improve calibration
- Show effort at a glance in task lists (if multiple items are shown)
- For tasks without estimates, prompt: "How long do you think this will take?"

**Why it works**: Effort visibility counters fortune telling and supports planning. It transforms abstract obligations into concrete, bounded time commitments. A 20-minute task feels fundamentally different from an undefined task, even if the undefined task would also take 20 minutes.

### 7. Energy Matching

**The problem**: Not all hours are equal. The same task that feels easy at 10am feels impossible at 4pm. Attention regulation conditions often include significant energy variability throughout the day — peaks of focus and valleys of depletion. Systems that ignore energy state waste peak hours on easy tasks and assign hard tasks to depleted periods.

**The principle**: Match task difficulty to current energy level. Ask about energy. Suggest accordingly.

**Implementation**:
- Session-start energy check: "How's your energy? High / Medium / Low"
- High energy → challenging, creative, or aversive tasks
- Medium energy → routine tasks, follow-ups, maintenance
- Low energy → easy wins, organizing, low-stakes items
- Track energy patterns over time: "You're usually high-energy before noon"
- Allow energy-based sorting: "Show me tasks that match my energy"

**Why it works**: Energy matching prevents the demoralizing cycle of attempting hard tasks while depleted, failing, and concluding "I can't do hard things." The person can do hard things — at the right time. The system's job is to present the right tasks at the right time.

### 8. Escape Hatches

**The problem**: Guilt and shame are the enemies of consistent engagement. When a system makes skipping, snoozing, or rescheduling feel like failure, the user avoids the system entirely to avoid the shame. One missed day becomes a week because returning means confronting the "failure."

**The principle**: Skipping, snoozing, and rescheduling are normal operations, not failures. They should be effortless and carry no penalty or shame language.

**Implementation**:
- "Not today" button with no confirmation dialog or guilt message
- "Reschedule" is one tap, no explanation required
- After returning from a break, no mention of the gap. Just: "Welcome back. Here's what's up."
- No "streak broken" messages — show current streak, not lost streaks
- "Skip" never triggers "Are you sure?" unless the item is time-sensitive

**Why it works**: Escape hatches keep the user in the system. A person who can guiltlessly skip today will return tomorrow. A person who feels judged for skipping today will avoid the system for a month. The path to consistency runs through permission to be inconsistent.

### 9. Variable Rewards

**The problem**: Fixed, predictable rewards lose their motivational power rapidly. If every task completion shows the same celebration animation, the animation becomes background noise within days. The dopamine system — which is already underactive in attention regulation conditions — does not respond to predictable stimuli.

**The principle**: Reward timing and intensity should vary. Not every completion is celebrated, but celebrations should be occasional and genuine.

**Implementation**:
- First completion of the day: high probability of celebration (~80%)
- Milestones (3rd, 5th, 10th completion): always celebrate
- Other completions: ~30% celebration probability
- Celebration types vary: visual, verbal, statistical ("That's your 5th task this week — you're on pace")
- Unexpected rewards: occasional "bonus" recognition for consistency or tackling difficult tasks
- Never celebrate the same way twice in a row

**Why it works**: Variable reinforcement schedules are the most persistent form of operant conditioning. Slot machines use them for a reason. Applied ethically — celebrating genuine accomplishment rather than exploiting compulsion — variable rewards sustain engagement because the brain remains interested in uncertain outcomes.

### 10. No Shame Language

**The problem**: Language carries weight beyond its literal meaning. "Overdue" does not just mean "past the scheduled date" — it means "you failed to meet an obligation." "Missed" means "you dropped the ball." "Behind" means "you're worse than you should be." These words generate shame, and shame generates avoidance.

**The principle**: All system language should describe events neutrally, never implying moral failure. Every negative-framing word has a neutral alternative that preserves the information while removing the judgment.

**Implementation**:

| Shame Language | Neutral Replacement |
|---|---|
| Overdue | Carried forward |
| Failed | Incomplete — ready to resume |
| Missed | Rescheduled |
| Abandoned | Paused / On hold |
| Behind | Adjusted timeline |
| You didn't | Rolled to next available |
| Late | Extended |
| Wasted | Redirected |

Additional rules:
- Never use exclamation marks with negative states
- Never use red coloring for temporal states (past-due)
- Never compare the user to themselves negatively ("You used to complete more tasks")
- Never compare the user to others ("Most users complete X by now")

**Why it works**: Neutral language preserves the factual content while removing the emotional trigger. "Carried forward" and "overdue" describe the same situation, but one invites engagement ("I'll do it today") while the other invites avoidance ("I don't want to look at this anymore").

## Principles in Combination

The principles are not independent rules — they form a coherent philosophy:

**At session start**: One thing at a time + energy matching + hide the backlog = "Here's one task that matches your current energy."

**During work**: Effort visibility + time anchoring = "This takes ~30 min. You have 90 min before your meeting."

**At transitions**: Transition support + one thing at a time = "Done with that. Take a breath. Here's the next one."

**When struggling**: Escape hatches + no shame language = "Not feeling this one? No problem. Moved to tomorrow."

**Over time**: External accountability + variable rewards = "You said you'd do 3 tasks today. You've done 2. Complete one more?" followed by unexpected celebration.

## Integration Points

- **Executive Function Model**: These rules are the practical implementation of the eight executive functions
- **Distortion Detection**: No shame language overlaps directly with countering labeling and should statements
- **Time Blindness**: Time anchoring and effort visibility are core time blindness interventions
- **Linguistic Reframing**: Chunking down = one thing at a time; presupposition aligns with reducing decision load
- **Awareness as Intervention**: External accountability and pattern surfacing serve the same function
