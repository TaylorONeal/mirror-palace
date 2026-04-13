# Contributing to Mirror Palace

## Security-First Data Boundary (P1/S1)

This repository is public-facing framework infrastructure.

**Non-negotiable rule:** no personal data belongs in this repo (current files or commit history).

### Allowed in this repository
- General framework theory and templates.
- Generic examples with no real-person identifiers.
- Operational docs that do not reveal private user details.

### Forbidden in this repository
- Real names tied to private context.
- Personal narratives, relationship histories, career histories, or company anecdotes tied to identifiable individuals.
- Direct identifiers (email, phone, address, SSN, account IDs, birth dates, handles tied to private context).
- Any combined detail set that can re-identify a person.
- Your private hook blocklists or internal-only keyword lists. Keep those in your local copy, not in this public repo.
- Public hooks should remain generic. Add your own private repo names, personal names, and internal identifiers only in local-only copies.

### If a leak is detected (treat as P1/S1)
1. Remove the leaked content immediately in a new commit.
2. Rewrite git history to purge leaked content from prior commits.
3. Force-push rewritten history and invalidate old refs where possible.
4. Document the incident privately (not with additional sensitive details in public).

## Adding a New Framework

1. Copy `frameworks/_template/` to `frameworks/{category}/{your-framework-name}/`
2. Fill out all 4 files:
   - `theory.md` — deep explanation. **No author names.** Describe concepts by their terms only.
   - `template.md` — a ready-to-fill worksheet or assessment
   - `agent-prompt.md` — a prompt snippet agents can use
   - `README.md` — YAML front-matter with metadata (see below)
3. Add your framework to `index.md` in the Full Framework Matrix table
4. Verify: no author names, no personal data, defensive framing for influence topics

## README.md Front-Matter

Every framework README.md must include this YAML:

```yaml
---
id: your-framework-id
category: category-name
tags: [relevant, searchable, tags]
pairs-with: [other-framework-ids]
complexity: low | medium | high
agent-ready: true | false
use-when:
  - "When to use this framework"
avoid-when:
  - "When NOT to use this framework"
updates:
  - "status/domains/relevant-domain.md"
---
```

The `updates` field is critical — it tells the continuous learning system what data to refresh when this framework fires.

## Rules

1. **No names.** Never attribute frameworks to specific people. Describe concepts, not creators.
2. **No personal data.** Templates should be blank starters, not filled with anyone's information.
3. **Depth matters.** A framework with a thin theory.md and a generic template isn't useful. Make it genuinely applicable.
4. **Influence = defense.** Any framework touching influence, persuasion, or authority must be framed defensively — recognizing these techniques, not using them.
5. **Test the template.** Before submitting, try filling out the template.md yourself. If it's confusing or too abstract, revise.
