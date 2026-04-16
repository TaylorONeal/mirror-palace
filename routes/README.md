# Routes

Framework routing for Mirror Palace. Routes map common situation classes to recommended framework sequences with guardrails.

---

## How Routes Work

A route answers five questions:

1. **What kind of situation is this?**
2. **What frameworks fit, and in what order?**
3. **Why does the order matter?**
4. **When is this route the wrong choice?**
5. **What should I try instead?**

Routes sit between signal detection and framework application. They are the structured middle layer that says: "for this class of situation, use these frameworks in this order, stop if you see this, fall back to that."

---

## Find Your Route

| If you're experiencing... | Start here |
|---------------------------|------------|
| Shame, self-attack, collapse, "I'm not enough" | [Shame Spiral](shame-spiral.md) |
| Overthinking, rumination, can't stop analyzing, avoidance disguised as thinking | [Overthinking / Fusion](overthinking-fusion.md) |
| Conflict full of blame, accusations-as-feelings, faux feelings | [Conflict / Blame](conflict-blame.md) |
| Relationship rupture, pursue-withdraw cycles, attachment alarm | [Relationship Rupture](relationship-rupture.md) |
| Friendship confusion, mixed signals, unclear reciprocity | [Friendship Ambiguity](friendship-ambiguity.md) |
| Career confusion, stuckness, drift, "going through the motions" | [Career Stuckness](career-stuckness.md) |
| Decision paralysis, competing values, can't choose between real tradeoffs | [Values / Decision Paralysis](values-decision-paralysis.md) |
| "Something is off but I can't name it" | [Emotional Signal Unclear](emotional-signal-unclear.md) |

**Don't know which one fits?** Start with [Emotional Signal Unclear](emotional-signal-unclear.md). It's designed to help you find your entry point.

---

## Important: What Routes Are (and Are Not)

Routes are **starting suggestions**, not prescriptions.

They are hypotheses about which frameworks tend to be useful for a class of situation, and in what order. They work best when you treat them as lenses to try, not verdicts about what's happening to you.

Routes do not:
- Diagnose anything
- Replace professional support
- Know your specific situation better than you do
- Work for every case in their category

Every route includes "When NOT to Use" and "Stop If" sections. Read them. If a route doesn't fit, check its fallback routes or try a different entry point.

---

## For Agents

Route cards are designed for programmatic consumption:

- **YAML front-matter** contains machine-parseable metadata: `id`, `category`, `tags`, `frameworks`, `primary-framework`, `fallback-routes`
- **Section headers** are consistent across all route cards
- **`primary-framework`** is the single most important framework in the route, useful when an agent needs one entry point
- **`fallback-routes`** enables branching without custom logic

When using routes in an agent:
1. Match the user's situation to a route via signals or tags
2. **Tell the user which route you're using and why** -- transparency matters
3. Follow the recommended sequence, checking `Stop If` conditions after each step
4. If the route is wrong, say so and try a fallback

See the [PRD](../docs/PRD-framework-routing.md) for detailed agent guardrails.

---

## Contributing New Routes

Before proposing a new route:
1. Check if an existing route covers the situation (even partially)
2. Identify at least 3 real scenarios where the route would apply
3. Confirm that the route needs multi-framework sequencing -- if a single framework handles it, a route isn't needed
4. Follow the [template](_template.md) structure exactly

New routes should be proposed when a situation class has clear framework-sequencing ambiguity that the existing routes don't address.
