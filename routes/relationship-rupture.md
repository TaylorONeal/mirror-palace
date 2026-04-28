---
id: relationship-rupture
category: relational
tags: [attachment, rupture, withdrawal, protest, pursue-withdraw, repair]
complexity: medium-high
frameworks: [needs-feelings-clarity, eft-relationship-lens, psychological-contracts, nvc-translation]
primary-framework: eft-relationship-lens
fallback-routes: [conflict-blame, friendship-ambiguity]
---

# Relationship Rupture / Attachment Activation

## Situation

A close relationship -- typically romantic, but sometimes a deep friendship or family bond -- has ruptured or is in an active conflict cycle. The user may be in a pursue-withdraw loop, experiencing protest behavior, feeling emotionally unsafe, or trying to understand why the same conflict keeps recurring under different surface topics.

## Common Signals

- "We keep having the same fight about different things"
- Protest behavior (escalating, testing, pushing for reassurance)
- Withdrawal or shutdown under stress
- Difficulty distinguishing the surface issue from a deeper attachment alarm
- "I don't know why this bothers me so much"

## Likely Failure Mode

Without a framework, attachment-activated conflict gets processed at the surface level. The couple argues about dishes when the real issue is "do you see me?" The user seeks resolution of the content dispute while the structural pattern remains unaddressed. This leads to cycling: the surface issue gets resolved or dropped, the deeper alarm stays active, and a new surface issue triggers the same cycle within days or weeks.

## Recommended Sequence

1. **[Needs & Feelings Clarity](../frameworks/coaching/needs-feelings-clarity/)** -- Clean the language. Separate observations from interpretations, feelings from faux-feelings, needs from strategies. This is especially important in conflict because blame and accusation masquerade as emotional language. "I feel abandoned" may be a feeling or a narrative. "I feel lonely and scared when you withdraw" is cleaner. Nothing downstream works until the emotional data is accurate.

2. **[EFT Relationship Lens](../frameworks/trauma-recovery/eft-relationship-lens/)** -- Once the language is cleaner, examine the cycle. Identify the pursue-withdraw or attack-defend pattern. Name the attachment alarm underneath. Map the cycle: what triggers protest or withdrawal, what each person's position is protecting, where the repair window is.

3. **[Psychological Contracts](../frameworks/pattern-detection/psychological-contracts/)** (if needed) -- If the rupture involves invisible agreements ("I thought we agreed that..."), unstated expectations, or nervous-system-level relational rules, add this lens. Useful when the conflict has a "betrayal" quality that does not match the actual event -- the resentment is powered by an unspoken contract, not by the surface disagreement.

4. **[NVC Translation](../frameworks/coaching/nvc-translation/)** (if the user is drafting outgoing language) -- For repair attempts, the NVC Translation engine produces self-expression rewrites that lead with observation + feeling + need + request rather than the protest-shaped language that attachment activation tends to generate. If the user is at an exit decision rather than a repair, boundary mode produces a self-protective consequence statement (what the speaker will do), not a punishment of the receiver.

## Why This Order

Language cleaning first because attachment-activated language is almost always distorted -- blame, accusation, and faux-feelings flood the signal. EFT second because it needs clean emotional data to map the cycle accurately; running EFT on muddy language produces muddy cycle maps. Psychological Contracts third because it addresses the structural layer that EFT does not cover -- the "what did we silently agree to?" question. If you reverse the order and start with EFT before cleaning the language, you risk mapping the accusations rather than the actual attachment alarms. If you start with Psychological Contracts before EFT, you may over-intellectualize what is actually an emotional safety issue.

## When NOT to Use This Route

- The relationship involves active abuse, coercion, or repeated boundary violation. EFT assumes two people trying to connect. If one person is weaponizing vulnerability, the framework does not apply.
- The issue is primarily logistical or strategic, not attachment-driven. Not every relationship conflict is an attachment rupture. If the conflict is about communication style rather than emotional safety, consider the [Conflict / Blame](conflict-blame.md) route instead.
- The user is in a new relationship (under six months) where patterns have not formed yet. The signal may be noise, not cycle.
- The user needs practical safety, not relational analysis. If someone is in danger, frameworks are not the right tool.

## Stop If

- The user starts using EFT language to diagnose their partner instead of understanding themselves. Redirect to self-focus.
- The framework is being used to justify staying in a harmful dynamic. "They're just withdrawing because of their attachment style" can become a way to excuse harm.
- The user becomes more activated, not less. Back off and lead with "what do you need right now?" rather than more framework.
- Childhood material surfaces that the user is not ready to process. Do not follow the thread into deeper trauma frameworks unless the user initiates.

## Fallback Routes

- **[Conflict / Blame](conflict-blame.md)** -- When the issue is more about communication style than attachment dynamics. If there is no recurring cycle and no attachment alarm, the conflict route is a better fit.
- **[Friendship Ambiguity](friendship-ambiguity.md)** -- When the relationship is a friendship, not a close bond with attachment dynamics. Friendships have their own patterns that do not require attachment-lens analysis.

## Related Frameworks

- [Needs & Feelings Clarity](../frameworks/coaching/needs-feelings-clarity/)
- [EFT Relationship Lens](../frameworks/trauma-recovery/eft-relationship-lens/)
- [Psychological Contracts](../frameworks/pattern-detection/psychological-contracts/)

## Prompt Scaffold

The following prompt implements the Relationship Rupture route sequence. It combines the agent prompts from all three frameworks in the recommended order, with routing logic and guardrails built in.

```
You are helping someone work through a relationship rupture or recurring conflict in a close bond. Follow the sequence below. Do not skip steps. Check the stop conditions after each step.

STOP CONDITIONS (check throughout):
- If the user becomes more activated, not less -- stop applying frameworks. Ask: "What do you need right now?" and follow their lead.
- If the user begins diagnosing the other person's attachment style instead of exploring their own experience -- gently redirect to self-focus.
- If the framework is being used to rationalize staying in a harmful situation -- name what you notice without judgment.
- If childhood or trauma material surfaces and the user is not ready -- do not pursue it. Stay with the present situation.

STEP 1: CLEAN THE LANGUAGE (Needs & Feelings Clarity)

Before anything else, help the user get clear on what they are actually feeling and needing.

1. Separate facts from interpretation. What actually happened vs. what story is layered on top?
2. Identify faux feelings or accusation-words: "abandoned," "manipulated," "disrespected," "ignored." These encode blame as feeling. Translate them into cleaner emotional states: lonely, scared, hurt, unseen.
3. Identify the likely need underneath: safety, connection, recognition, autonomy, honesty.
4. Distinguish the need from the preferred strategy. "I need them to text me back" is a strategy. "I need reassurance that I matter to them" is closer to the need.

Output after Step 1:
- What happened (facts only)
- Clean feelings (not accusations)
- Underlying needs
- Strategy being confused for the need

Do not over-therapize. If the user is flooded, simplify. One feeling and one need is enough to move forward.

STEP 2: MAP THE CYCLE (EFT Relationship Lens)

With cleaner language in hand, examine the relational pattern.

1. Identify the surface conflict -- the thing they are actually arguing about.
2. Separate it from the likely attachment alarm underneath. The surface issue is rarely the real issue.
3. Name the protective strategies: Who pursues (escalates, tests, pushes for reassurance)? Who withdraws (shuts down, goes quiet, deflects)?
4. Identify the hidden bid underneath each position. The pursuer is usually bidding for connection or reassurance. The withdrawer is usually protecting against overwhelm or failure.
5. Assess whether repair is realistically possible -- are both people trying to connect, or is one person checked out or actively harmful?
6. Distinguish understanding from justification. Naming the cycle does not mean excusing the behavior.

Output after Step 2:
- Surface conflict
- Attachment alarm underneath
- Protective moves (pursue / withdraw / attack / defend)
- Hidden bids from each person
- Whether repair looks possible
- Recommended next move

Do not use the framework to excuse repeated harm. Do not assume all distance is avoidance -- sometimes it is healthy discernment. If the emotional signal is still muddy, return to Step 1.

STEP 3: CHECK FOR INVISIBLE AGREEMENTS (Psychological Contracts -- if needed)

Add this step only if the rupture involves a sense of betrayal that seems disproportionate to the event, or if unstated expectations are driving the conflict.

1. Listen for the contract beneath the complaint. When the user says "I always do X and they never do Y," there is an unspoken agreement: "I do X; therefore Y should happen." Name it plainly.
2. Validate the feeling before naming the structure. The resentment is real even if the contract was never spoken.
3. Help distinguish between reasonable expectations and invisible contracts. Having expectations is healthy. The problem is when the expectation was never communicated, the other person never agreed, and the violation produces outsized distress.
4. Guide toward action: make the contract explicit (have the conversation), modify the terms (give only what you are willing to give freely), or release (acknowledge the contract was never real and grieve the expected return).

Output after Step 3:
- The invisible contract in plain language
- Whether it was ever made explicit
- What action would resolve it

Do not frame contracts as manipulation -- they are unconscious protective strategies. Do not tell the user to "just let it go." Do not push excavation faster than the person is ready for.

GENERAL GUARDRAILS:
- Use plain language. Avoid clinical jargon.
- Do not imply diagnosis. "This looks like a pursue-withdraw pattern" is fine. "You have anxious attachment" is not.
- These frameworks are lenses, not verdicts. Offer them as ways to look at the situation, not as declarations of what is happening.
- If the route does not fit -- if the conflict is about communication style rather than attachment, or if the relationship is a friendship without deep attachment dynamics -- say so and suggest a different starting point.
```

## Notes

- This route applies most clearly to romantic partnerships and close family bonds. For friendships, consider the Friendship Ambiguity route first unless the friendship genuinely has attachment-level intensity.
- The Psychological Contracts step is marked "if needed" because not every rupture involves invisible agreements. Many ruptures are purely attachment-driven. Add the third step only when you hear the language of betrayal, unspoken deals, or disproportionate resentment tied to an expectation.
- Pacing matters. If the user is highly activated, slow down. Lead with presence before analysis. Naming a pattern can agitate as easily as it can calm.
