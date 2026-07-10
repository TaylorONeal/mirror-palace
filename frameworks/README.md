# Frameworks

The knowledge layer of Mirror Palace: 49 frameworks across 15 categories. Each framework is a lens — a way of looking at a situation that highlights certain aspects and downplays others. No framework is complete, and the goal is never to find the "right" one, only a useful one.

**Looking for which framework to use?** Don't browse this directory. Start with [`routes/`](../routes/) for situation-based sequences, or the [master routing table](../index.md) for the full matrix. This README explains how the library is organized.

---

## Anatomy of a Framework

Every framework lives in `frameworks/{category}/{name}/` with exactly 4 files:

| File | Purpose | Primary Audience |
|------|---------|------------------|
| `theory.md` | Deep explanation of the concept — real depth, not summaries | Humans learning the framework |
| `template.md` | Ready-to-fill blank worksheet | Humans applying it to their own situation |
| `agent-prompt.md` | Copy-paste prompt snippet with trigger conditions and steps | AI agents applying it in conversation |
| `README.md` | YAML front-matter: `use-when`, `avoid-when`, `pairs-with`, `updates` | Routing — both the scan skill and agents match on these fields |

The `updates` field in each README.md is what makes the continuous learning loop work: it tells agents which status files to propose updates to when the framework fires.

---

## The 15 Categories

| Category | Frameworks | Theme |
|----------|-----------|-------|
| [epistemology/](epistemology/) | 3 | How we think about thinking — reasoning, agent cognition, information management |
| [decision-making/](decision-making/) | 4 | Choosing under uncertainty — reversibility, regret, priorities, purpose |
| [behavioral-psychology/](behavioral-psychology/) | 6 | Why people do what they do — habits, motivation, rewards, identity |
| [cognitive-therapy/](cognitive-therapy/) | 3 | Seeing thinking clearly — distortions, reframing, awareness |
| [executive-function/](executive-function/) | 3 | Getting things done when the brain won't cooperate |
| [continuous-learning/](continuous-learning/) | 1 | Learning from experience, not just accumulating information |
| [self-image/](self-image/) | 4 | Who you think you are, and how that shapes everything |
| [trauma-recovery/](trauma-recovery/) | 6 | Where patterns come from — survival types, neglect, family systems, attachment |
| [coaching/](coaching/) | 7 | Structured reflection and action — self-coaching, ACT, NVC, signal processing |
| [influence-defense/](influence-defense/) | 3 | Recognizing what's being done to you — **defensive only** |
| [somatic/](somatic/) | 2 | The body knows things the mind doesn't |
| [personality-assessments/](personality-assessments/) | 3 | Big Five, Enneagram, MBTI |
| [pattern-detection/](pattern-detection/) | 2 | Naming what keeps happening |
| [anti-patterns/](anti-patterns/) | 1 | What not to build |
| [integrated-practice/](integrated-practice/) | 1 | Bringing it all together |

For a one-line "what it does / use when" summary of every framework, see [`FRAMEWORK-MAP.md`](../FRAMEWORK-MAP.md) or the interactive [`framework-map.html`](../framework-map.html).

> ⚠️ **Influence Defense** frameworks are about recognizing techniques used on you, never about using them on others.

> 📐 **A note on Epistemology:** this category is partly agent-architecture-facing, and its frameworks sit at different points on the implemented-vs-aspirational spectrum. Concept Formation and Information Compression are fully usable today (the agent memory hierarchy in [`docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md) already applies the compression hierarchy). MIRROR Cognitive Architecture is a research blueprint: current agents realize it as a within-turn reasoning discipline plus Mirror Palace's file-based memory (`SOUL.md`/`MEMORY.md`/`WORKING.md`), while its full form — parallel reasoning threads and between-turn reflection — is a direction for deeper work as agent runtimes evolve. See the [framework's Implementation Status section](epistemology/mirror-cognitive-architecture/README.md) for the exact split.

---

## How Frameworks Get Selected

Three routing layers, in order of preference:

1. **Routes** ([`routes/`](../routes/)) — for common situation classes (shame spiral, decision paralysis, conflict, etc.), a route card gives an ordered framework sequence with guardrails and fallbacks. Check here first.
2. **The situation router** ([`index.md`](../index.md)) — a decision-tree diagram mapping "what's happening" to individual frameworks.
3. **Signal matching** ([`skills/scan/references/signal-patterns.md`](../skills/scan/references/signal-patterns.md)) — the scan skill matches observed signals in documents, conversations, and connected services against each framework's `use-when` metadata.

---

## Adding a Framework

Use the [create-framework skill](../skills/create-framework/SKILL.md) — it scaffolds all 4 files, validates quality and distinctness against the existing library, and updates every dependent file (index.md, README.md, CLAUDE.md, FRAMEWORK-MAP.md, framework-map.html, ARCHITECTURE.md, signal-patterns.md).

Adding one by hand? Copy [`_template/`](_template/) and follow [`CONTRIBUTING.md`](../CONTRIBUTING.md) — then update the same dependent files listed in the create-framework skill's Step 6, or the counts will drift.

**The quality bar:** depth over breadth. Every framework should be genuinely useful, not a placeholder. If a concept substantially overlaps an existing framework, extend that one instead.
