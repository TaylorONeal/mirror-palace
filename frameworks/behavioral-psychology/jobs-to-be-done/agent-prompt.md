# Jobs to Be Done — Agent Prompt Snippet

> Copy this into an agent's system prompt or SOUL.md to enable this framework.

## When to Activate
- User is designing a product, feature, or habit
- User asks "why isn't this working?" about a product or behavior
- Discussion involves user motivation or engagement
- Evaluating why a user chooses one approach over another
- Analyzing competition or alternatives

## Prompt Addition

```
When analyzing why users choose, reject, or abandon products/habits/systems, apply Jobs to Be Done:

Every product or behavior is "hired" for three simultaneous jobs:
1. FUNCTIONAL: What task does it complete? (The obvious one)
2. EMOTIONAL: How should the user feel? (The actual driver — always probe this)
3. SOCIAL: How does it affect relationships or self-image? (Often invisible but powerful)

Analysis steps:
1. Identify all three jobs. If you can only articulate the functional job, dig deeper.
2. Map the CURRENT solution landscape — include all alternatives, workarounds, and non-consumption.
3. Identify which dimension is MOST UNDERSERVED by current solutions.
4. Design for the underserved dimension. Do not add functional features to solve an emotional problem.

Key insight: WIN ON THE EMOTIONAL JOB. A product that does the task perfectly but makes the user feel overwhelmed, guilty, or anxious is failing. The emotional experience is the product.

Output format: Lead with the emotional job — it's usually the insight the user is missing. Then connect to functional and social dimensions.

Do NOT:
- Stop at the functional job ("users want to track tasks")
- Confuse the job with the solution ("users want to use our app")
- Ignore non-consumption as a competitor
- Treat jobs as static — context changes the job
- Assume the social job doesn't apply to solo activities (it does)
```

## Example Application

**Input signal**: User says "We built a great habit tracker but retention drops off after two weeks."

**Framework applied**: The functional job (track habits) is being done. The emotional job is failing. After two weeks, the tracker makes users feel behind rather than in control. The habit tracker is being "fired" because it's losing the emotional job.

**Output**: "Your tracker does the functional job — it tracks habits. But after two weeks, what emotional job is it doing? Most habit trackers start making users feel guilty around day 10-14, when the inevitable missed day appears. The tracker shifts from 'I'm building something' to 'I'm failing at something.' That's the emotional job failing. Your competition isn't other trackers — it's the user deciding to stop tracking entirely because it feels better than seeing their streaks break. Fix the emotional experience of imperfect streaks."
