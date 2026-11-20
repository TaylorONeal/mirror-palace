## Model-Aware Execution Policy

Use **native reasoning by default** on current frontier models and coding agents. Instructions should define goals, hard constraints, sources of truth, and acceptance criteria without forcing a ritualized reasoning process.

- Do not add "think step by step", scratchpad, chain-of-thought, or fixed reasoning templates unless a specific legacy/lightweight model demonstrably needs them.
- Emphasis words such as **CRITICAL**, **ALWAYS**, and **MANDATORY** are not requests for extra narration, repeated checks, or extra tool calls. Reserve them for real invariants such as privacy, consent, data integrity, irreversible writes, and security boundaries.
- Keep ordered procedures when order itself protects state, consent, privacy, or correctness. A numbered workflow is an execution contract, not a request to expose internal reasoning.
- Prefer direct execution followed by verification against acceptance criteria. Do not restate routine plans or expose internal reasoning unless asked.
- If the runtime is explicitly a smaller/legacy model, a concise checklist scaffold may be used. Keep that compatibility path separate from the frontier-model default.
- If instructions conflict, follow the more specific task/repo contract and the higher-risk invariant; surface a genuine unresolved conflict rather than trying to satisfy both literally.

---
name: skill-name
description: One-line description of what this skill does.
trigger-patterns:
  - "natural language pattern that should invoke this skill"
  - "another trigger pattern"
requires:
  - "precondition 1"
  - "precondition 2"
outputs:
  - "output 1"
  - "output 2"
---

# Skill Name

## What This Skill Does
[Describe the skill's purpose. What problem does it solve? When should it be invoked? 2-3 sentences.]

## Modes
[If the skill has multiple modes, list them here. If it only operates one way, remove this section.]

| Mode | Description | Input | Output |
|------|-------------|-------|--------|
| [Name] | [What it does] | [What it needs] | [What it produces] |

### Mode 1: [Name]
**When to use:** [Context for this mode]
**Input:** [What this mode needs]
**Process:**
1. [Step 1]
2. [Step 2]
3. [Step 3]
**Output:** [What this mode produces]
**Consent required:** Yes / No

### Mode 2: [Name]
**When to use:** [Context for this mode]
**Input:** [What this mode needs]
**Process:**
1. [Step 1]
2. [Step 2]
3. [Step 3]
**Output:** [What this mode produces]
**Consent required:** Yes / No

## Steps
[If the skill doesn't have modes, describe the step-by-step procedure here.]

1. [Step 1]
2. [Step 2]
3. [Step 3]

## Error Handling

| Failure | Recovery |
|---------|----------|
| [What can go wrong] | [What to do about it] |

## Output Format
[Describe or show the expected output structure.]

```markdown
## [Output Title]
- [Field 1]: [value]
- [Field 2]: [value]
```

## Cost Estimate
[Approximate token cost or time to run.]

## Related Skills
[Other skills that pair with this one.]

## Notes
- [Any caveats, limitations, or important context]
- [Things to watch out for]
