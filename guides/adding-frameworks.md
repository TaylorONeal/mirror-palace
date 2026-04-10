# Adding New Frameworks

## Quick Steps

1. Copy `frameworks/_template/` to `frameworks/{category}/{your-framework-name}/`
2. Write all 4 files (theory.md, template.md, agent-prompt.md, README.md)
3. Add your framework to `index.md` in the Full Framework Matrix
4. Run verification checks

## Detailed Guide

### Choosing a Category

Place your framework in the category that best describes its primary function:

| Category | For frameworks about... |
|----------|----------------------|
| epistemology | How to think and reason |
| decision-making | How to decide |
| behavioral-psychology | How people behave and why |
| cognitive-therapy | Cognitive patterns and reframing |
| executive-function | Focus, initiation, follow-through |
| continuous-learning | How to learn from experience |
| self-image | Identity and self-concept |
| trauma-recovery | Healing developmental patterns |
| coaching | Directed personal growth |
| influence-defense | Recognizing techniques used on you |
| somatic | Body-based practices |
| personality-assessments | Structured self-knowledge |
| pattern-detection | Behavioral pattern recognition |
| anti-patterns | What to avoid |

If your framework spans categories, put it where it's most useful and cross-reference in `pairs-with`.

### Writing theory.md

This is the core document. It should:
- Explain the concept in 150-300 lines
- Provide genuine intellectual depth, not a surface summary
- Include practical applications ("Applied as:")
- Note common misapplications
- Show integration points with other frameworks
- **Never name authors.** Describe concepts by their terms only.

### Writing template.md

This should be immediately fillable:
- Clear sections with guiding prompts
- Assessment areas specific to this framework
- Space for key insights and actions
- A review date for revisiting

### Writing agent-prompt.md

This is for agents to copy-paste:
- Clear trigger conditions (when to activate)
- Step-by-step application instructions
- Output format specification
- Guardrails (what NOT to do)
- An example application

### Writing README.md

The YAML front-matter is critical:
```yaml
---
id: unique-id
category: category-name
tags: [searchable, tags]
pairs-with: [related-framework-ids]
complexity: low | medium | high
agent-ready: true
use-when:
  - "Concrete situation description"
avoid-when:
  - "When NOT to use this"
updates:
  - "status/domains/relevant-file.md"
  - "status/people/"
---
```

The `updates` field powers the continuous learning system. When this framework fires, what data should be refreshed?

### Updating index.md

Add a row to the Full Framework Matrix:
```
| ID | Category | Framework | Use When | Update When Triggered | Pairs With |
```

## Verification Checklist

- [ ] All 4 files present (theory, template, agent-prompt, README)
- [ ] YAML front-matter complete with all fields including `updates`
- [ ] No author names anywhere
- [ ] No personal data
- [ ] theory.md has genuine depth (not placeholder text)
- [ ] template.md is actually fillable (not just headers)
- [ ] agent-prompt.md has a working prompt snippet
- [ ] Added to index.md
- [ ] If influence-related: defensively framed
