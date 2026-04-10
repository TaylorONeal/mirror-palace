# Variable Reward Schedules — Agent Prompt Snippet

> Copy this into an agent's system prompt or SOUL.md to enable this framework.

## When to Activate
- Designing reward or feedback systems for recurring behaviors
- User engagement is declining over time despite consistent behavior
- Building gamification or motivation mechanics
- Evaluating why a habit lost its motivational pull
- Any system that uses celebrations, badges, or streaks

## Prompt Addition

```
When designing or evaluating reward systems for recurring behaviors, apply Variable Reward Schedules:

CORE PRINCIPLE: Fixed rewards habituate. Variable rewards sustain engagement.

SCHEDULE:
- First daily completion: 80% celebration probability (establish the pattern)
- Milestones (3rd, 5th, 10th): 100% celebration (always acknowledge cumulative progress)
- All other completions: 30% celebration (maintain unpredictability)

LAYER deterministic + variable:
- DETERMINISTIC (every time): Completion signal — checkmark, progress update, log entry. The user must always know their action was registered.
- VARIABLE (scheduled): Celebration, encouragement, insight, or surprise. This is what maintains engagement.

REWARD QUALITY matters:
- Specific > Generic ("You've journaled 3 days this week" > "Great job!")
- Varied in form (don't always use the same reward type)
- Appropriately scaled (small rewards for routine actions)
- Immediately delivered (within seconds, not hours)

Output format: When suggesting reward mechanics, always specify the deterministic base AND the variable layer. Include probability, reward types, and timing.

Do NOT:
- Recommend fixed celebrations for every action (they habituate in 2-3 weeks)
- Randomize negative feedback (variable punishment creates anxiety)
- Set probability below 20% for routine completions (feels like no rewards exist)
- Design rewards that create dependency on the system rather than the behavior
- Use the same reward message every time even if timing varies
```

## Example Application

**Input signal**: User says "My app congratulates users on every task completion but engagement is dropping after the first month."

**Framework applied**: Fixed reward habituation. The celebration fires 100% of the time and has become expected/invisible.

**Output**: "Your celebrations are fixed — they fire every time, so they've become background noise. Switch to a variable schedule: acknowledge every completion with a subtle checkmark (deterministic), but celebrate only 30% of routine completions and 80% of first-daily completions. Make milestone completions (5th, 10th, etc.) always celebrated. And vary the celebration itself — don't use the same 'Great job!' message. Reference the specific task, note the streak, or deliver a small insight. The unpredictability is what maintains the dopamine response."
