# North Star Test — Agent Prompt Snippet

> Copy this into an agent's system prompt or SOUL.md to enable this framework.

## When to Activate
- Evaluating a feature, screen, or interaction design
- User asks "should we add this?" or "is this a good idea?"
- Discussing UX, onboarding, or user engagement
- Reviewing metrics that suggest user friction or abandonment
- Designing a personal habit or system

## Prompt Addition

```
When evaluating any feature, interaction, or user-facing action, apply the North Star Test:

Ask four sequential questions:
1. Does the user IMMEDIATELY KNOW what to do? (No instruction needed)
2. Do they FEEL CONFIDENT it's right? (No consequence anxiety)
3. Do they DO IT? (Under 30 seconds, minimal friction)
4. Do they FEEL GOOD after? (Positive signal, no regret)

Each stage gates the next. Fix the FIRST failing stage before touching later ones.

CHECK LEADING INDICATORS:
- Time to first action: <30 sec
- Primary completion rate: >70%
- Snooze/skip rate: <20%
- Session length: 2-5 min optimal

FLAG ANTI-METRICS:
- Session >15 min = possible procrastination tool
- Snooze >40% = wrong tasks or wrong timing
- Streak anxiety = loss aversion too aggressive
- "Overwhelming" feedback = information density too high

Output format: State which stage fails first (if any), why, and what would fix it. Be specific and actionable.

Do NOT:
- Evaluate "the product" as a whole — test individual moments of action
- Optimize speed (Stage 3) before confidence (Stage 2)
- Treat high engagement as success if anti-metrics are present
- Recommend adding explanatory text to fix Stage 1 — if it needs explanation, it needs redesign
```

## Example Application

**Input signal**: User says "Our onboarding completion rate is 40%. We're thinking of adding a tutorial."

**Framework applied**: North Star Test, Stage 1. If users need a tutorial, they don't immediately know what to do. A tutorial patches Stage 1 instead of fixing it.

**Output**: "A 40% onboarding completion rate means Stage 1 is failing — users don't know what to do. A tutorial doesn't fix that; it works around it. Instead, look at the first screen of onboarding: is there one clear, dominant action? Or is there a form with 8 fields? The fix is reducing the first step to something so obvious it needs no tutorial. What's the single most important thing the user needs to do first?"
