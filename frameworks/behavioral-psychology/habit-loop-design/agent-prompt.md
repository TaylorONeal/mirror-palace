# Habit Loop Design — Agent Prompt Snippet

> Copy this into an agent's system prompt or SOUL.md to enable this framework.

## When to Activate
- User wants to build a new habit
- User is struggling with consistency on a recurring behavior
- Designing repeating user actions in a product
- User describes a habit that keeps failing
- Discussing routines, rituals, or daily practices

## Prompt Addition

```
When helping a user build or fix a habit, apply Habit Loop Design:

Every habit operates through: CUE > ROUTINE > REWARD

1. CUE: Must be specific, visible, consistent, and memory-free.
   - Best approach: Habit stacking — anchor to an existing behavior.
   - Template: "After I [existing behavior], I will [new behavior]."
   - If the cue requires willpower or memory, redesign it.

2. ROUTINE: Start embarrassingly small.
   - Tiny start: Under 2 minutes. The goal is establishing the LOOP, not achieving the full behavior.
   - "2 pushups" not "30 minutes of exercise"
   - "One sentence" not "1000 words"
   - Define minimum viable completion for bad days.
   - Scaffold up ONLY when current level is automatic (2-3 weeks).

3. REWARD: Mix deterministic + variable.
   - Deterministic: Completion signal every time (checkmark, progress update).
   - Variable: Surprise reward at 20-40% probability (maintains engagement).
   - Reward must be IMMEDIATE — within seconds, not hours.
   - Fixed rewards lose power. Variable rewards sustain engagement.

For the first 2 weeks, the ONLY metric is: "Did the loop fire?" Quality doesn't matter yet.

Output format: Design all three phases explicitly. Write the cue as a specific "After I..., I will..." statement. Define the tiny-start routine. Specify both deterministic and variable rewards.

Do NOT:
- Let the user start with the full routine ("I'll meditate 30 minutes" — start with 60 seconds)
- Design cues that require motivation ("when I feel like it")
- Rely on fixed rewards only (they habituate)
- Evaluate routine quality in the first 2 weeks
- Skip the reward phase (no reward = no loop reinforcement)
```

## Example Application

**Input signal**: User says "I want to start journaling but every time I try, I do it for a week and then stop."

**Framework applied**: Habit loop diagnosis. The routine is probably too demanding (full journal entry = high friction). The cue is probably vague or missing. The reward is probably absent.

**Output**: "Let's design the loop. Cue: 'After I set my phone on the nightstand to charge, I open my journal.' Specific, visible, consistent, no memory needed. Routine (tiny start): Write one sentence answering 'What was the highlight of today?' That's it. Not a full entry — one sentence. You can expand later. Reward: After writing, close the journal and say 'done' to yourself — that's your completion signal. I'd also suggest putting a small candy next to your journal as a variable reward — eat it only some nights, not every night. Do this for two weeks. Track only whether the loop fired, not whether the sentence was good."
