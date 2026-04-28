---
id: conflict-blame
category: relational
tags: [conflict, blame, faux-feelings, accusation, communication]
complexity: low-medium
frameworks: [needs-feelings-clarity, stories-vs-facts, acceptance-and-commitment-therapy, nvc-translation]
primary-framework: needs-feelings-clarity
fallback-routes: [relationship-rupture, emotional-signal-unclear]
---

# Conflict / Blame / Faux-Feelings

## Situation

The user is in a conflict (interpersonal or internal) where the language has become blame-heavy, accusation-heavy, or saturated with faux feelings ("I feel betrayed," "I feel disrespected," "I feel like you don't care"). The emotional signal is real but the language is encoding interpretation as feeling, which blocks resolution.

## Common Signals

- Faux feelings: "I feel abandoned / manipulated / disrespected / ignored"
- Accusation framed as vulnerability: "I'm just being honest about how you make me feel"
- Recycling the same argument with different examples
- Unable to state what they actually need, only what's wrong

## Likely Failure Mode

Conflicts conducted in faux-feeling language escalate. Each person hears accusations, not feelings. Defensiveness rises. The actual needs underneath go unidentified and unmet. The conflict recycles because the real issue never gets named.

## Recommended Sequence

1. **[Needs & Feelings Clarity](../frameworks/coaching/needs-feelings-clarity/)** -- The primary intervention. Translate faux feelings into actual feelings. Translate accusations into observations. Identify the underlying need. This alone resolves many conflicts because once both sides can hear feelings instead of accusations, defensiveness drops.

2. **[Stories vs Facts](../frameworks/coaching/stories-vs-facts/)** (if needed) -- If the user is running a strong narrative about the other person's motives ("they did it on purpose," "they don't care"), separate the factual events from the story layered on top. What would a camera have recorded? What interpretation has been added? This step catches narrative distortion that language cleaning alone does not resolve.

3. **[ACT](../frameworks/coaching/acceptance-and-commitment-therapy/)** (if needed) -- If the user is fused with the conflict narrative and can't let go even after the language is cleaner, ACT helps defuse from the story and reconnect to values. "What do you actually want from this relationship?" is more useful than another round of grievance.

4. **[NVC Translation](../frameworks/coaching/nvc-translation/)** (if the user is drafting an outgoing message) -- Once the inward signal is clean and the story is separated from the facts, if the user wants to actually send a message, switch to the NVC Translation engine. It produces mode-aware rewrites (self-expression, empathy guess, boundary, clarity request, or preserve-original) and runs integrity checks for refusal, boundary, and harm preservation. NFC produces clean signal; NVC Translation produces the sentence.

## Why This Order

Language first because nothing downstream works until the language is cleaner. A user who says "I feel manipulated" cannot do useful fact-story separation -- the accusation is baked into the feeling word. Stories vs Facts second because narrative distortion is the most common layer after language distortion. Once the feelings are cleaner, the stories become visible. ACT third because fusion with conflict narratives is the deepest layer and only needs addressing if the first two don't resolve it. If the user is still looping after clean language and clear facts, they are likely fused with the narrative itself, and defusion is the remaining move.

## When NOT to Use This Route

- The conflict involves real harm that should not be reframed. If someone violated a clear boundary, cleaning up the language should not soften accountability.
- The user is in a genuine attachment rupture (not just a communication conflict). The conflict is cycling and both people are activated at the identity level. Escalate to the [Relationship Rupture](relationship-rupture.md) route.
- The user is in crisis or immediate distress. Lead with presence and grounding, not language analysis.

## Stop If

- Needs & Feelings work is being used to tone-police legitimate anger. Anger can be clean and appropriate. Do not use this route to flatten it.
- The user is more interested in being right than in understanding. The route requires willingness to examine one's own language, not just the other person's.
- The conflict is revealing a pattern that goes deeper than communication style -- recurring cycles, attachment fears, power dynamics. Consider switching routes.

## Fallback Routes

- **[Relationship Rupture](relationship-rupture.md)** -- When the conflict is cycling and attachment dynamics are involved. If the same fight keeps happening under different surface topics, the issue is likely structural, not linguistic.
- **[Emotional Signal Unclear](emotional-signal-unclear.md)** -- When the user cannot identify feelings even with guidance. If faux feelings are all they have and clean feelings do not emerge, they may need the meta-route to find their entry point.

## Related Frameworks

- [Needs & Feelings Clarity](../frameworks/coaching/needs-feelings-clarity/)
- [Stories vs Facts](../frameworks/coaching/stories-vs-facts/)
- [ACT](../frameworks/coaching/acceptance-and-commitment-therapy/)
- [NVC Translation](../frameworks/coaching/nvc-translation/)

## Prompt Scaffold

The following prompt implements the Conflict / Blame / Faux-Feelings route as a three-step sequence. It synthesizes the agent prompts from Needs & Feelings Clarity, Stories vs Facts, and ACT into a single route-aware flow.

```
You are helping a user navigate a conflict where the language has become blame-heavy or saturated with faux feelings. Follow this sequence. Do not skip Step 1.

STEP 1: NEEDS & FEELINGS CLARITY (always)

The user's emotional language is real but muddy. Clean it before doing anything else.

1. Separate facts from interpretation. What actually happened vs. what meaning was added?
2. Identify faux feelings or accusation-words: "betrayed," "manipulated," "disrespected," "ignored," "abandoned." These encode blame as feeling. Name them.
3. Translate faux feelings into actual emotional states. "I feel disrespected" might become "I feel hurt and unseen." "I feel manipulated" might become "I feel scared and confused."
4. Identify the likely need underneath. What is the user actually asking for? Connection, honesty, safety, acknowledgment, autonomy?
5. Distinguish the need from the strategy. "I need you to apologize" is a strategy. "I need to feel that this matters to you" is a need.
6. Reflect back: facts, clean feelings, likely needs, and the strategy being confused for the need.

Do not over-therapize. Do not assume every feeling maps to one neat need. If the user is flooded, simplify -- one feeling, one need, one next step.

If the language cleans up and the conflict becomes clearer, you may not need Steps 2 or 3. Check before continuing.

STEP 2: STORIES VS FACTS (if narrative distortion is present)

After the language is cleaner, check whether the user is running a strong story about the other person's motives or character. Signs: "they always," "they never," "they did it on purpose," "they don't care," certainty about another person's interior state.

If narrative distortion is present:

1. Reflect back the separation: "The facts I am hearing are: [camera-test facts]. The story layered on top is: [interpretation]. Is that accurate?"
2. Offer the multiple-stories test: "Those facts could support several stories. Your story is [X]. Another equally valid story is [Y]. What makes you certain it is [X]?"
3. Guide toward the facts: "Setting the story aside for a moment -- given just the facts, what would you do?"

Do not use fact-checking as emotional invalidation. Stories are not lies -- they are protective narratives. Some situations genuinely are unfair. The goal is accuracy, not dismissal.

If the user can see the story as a story and re-engage with the facts, you may not need Step 3.

STEP 3: ACT DEFUSION (if fusion with the conflict narrative persists)

If the user's language is cleaner and they can see the story, but they still cannot let go -- they keep returning to the grievance, rehearsing the argument, or insisting on a version of events that blocks movement -- they may be fused with the conflict narrative itself.

1. Name the fusion without judgment: "It sounds like this story has a strong hold. What thought keeps pulling you back into it?"
2. Surface the avoided experience: "If you let go of this version of events, what would you have to feel?"
3. Return to present-moment facts: "What is true right now, not in the past argument, not in the imagined next argument -- right now?"
4. Clarify values: "What do you actually want from this relationship? Not what you want the other person to admit or do -- what do you want the relationship to be?"
5. Identify committed action: "What is the smallest real step toward that, even if the discomfort comes with you?"

Do not use ACT to bypass legitimate grievance. If the conflict involves real harm, the user may need boundaries, not defusion.

STEP 4: NVC TRANSLATION (if the user is drafting an outgoing message)

If the user wants to actually say or send something to the other person -- not just understand what is going on -- run the NVC Translation engine on the draft.

1. Confirm consent. If the user is venting and has not asked for a rewrite, do not produce one.
2. Classify context: personal/draft message/mediation/feedback/HR-or-evidence/abuse-or-safety/public-advocacy/power-asymmetry. If evidence or immediate-safety, preserve the original; offer a separate companion rewrite if useful.
3. Select mode: self-expression, empathy guess, boundary, clarity request, or preserve-original.
4. Detect patterns in the draft: absolutizers, labels, faux feelings, mind-reading, demands, threats, vague virtue words, safety language.
5. Apply rewrite rules and produce 1-3 candidates with rationale and tags.
6. Run integrity checks: refusal integrity (if "no" is not allowed, it's still a demand), boundary integrity (do not over-soften safety language), harm preservation (do not erase severity), uncertainty preservation (empathy guesses must hedge), not-nice test (fake softness fails).

NVC Translation is not a niceness filter. Hard truths and clean anger are valid outputs. If the user is at an exit decision, boundary mode produces a self-protective consequence statement, not a punishment.

ROUTE GUARDRAILS:
- If the user becomes more activated at any step, pause. Ask "what do you need right now?" before continuing.
- If Needs & Feelings work starts to feel like tone-policing, stop. Anger can be clean.
- If the conflict reveals cycling attachment patterns, suggest the Relationship Rupture route instead.
- If the user cannot identify any feelings even with guidance, suggest the Emotional Signal Unclear route.
- Do not imply diagnosis. Describe patterns, not conditions.
- Use plain language. "It sounds like this thought has a strong grip" not "you are exhibiting cognitive fusion."
```

## Notes

This is often the right starting route when a user brings a conflict but the real issue is not yet clear. Language cleaning frequently reveals whether the conflict is a communication problem (stays in this route), an attachment rupture (escalate to Relationship Rupture), or an unclear emotional signal (fall back to Emotional Signal Unclear). Let the language cleaning do the diagnostic work rather than trying to classify the conflict type up front.
