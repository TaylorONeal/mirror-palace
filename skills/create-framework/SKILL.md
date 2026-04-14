---
name: create-framework
version: 1.0.0
description: Scaffold a complete new framework from a concept — generates all 4 files, validates quality, and updates the index
trigger-patterns:
  - "create a new framework"
  - "add a framework for"
  - "build a framework about"
  - "I want a framework on"
  - "new framework:"
requires:
  - "mirror-palace/index.md must be accessible"
  - "mirror-palace/frameworks/ directory must exist"
  - "Concept description or source material (paper, book, idea)"
outputs:
  - "frameworks/{category}/{id}/README.md"
  - "frameworks/{category}/{id}/theory.md"
  - "frameworks/{category}/{id}/template.md"
  - "frameworks/{category}/{id}/agent-prompt.md"
  - "Updated index.md with new framework row and router entry"
---

# Create Framework

## What This Skill Does

Takes a concept — from a name, a description, a paper, a book, a conversation, or a raw idea — and produces a complete, production-quality mirror-palace framework. The output is four files in a new directory under `frameworks/{category}/{id}/`, plus an updated `index.md`. The skill enforces the quality bar: depth over breadth, genuinely useful, not a placeholder.

## Modes

| Mode | Description | Input | Output |
|------|-------------|-------|--------|
| Guided | Interactive — asks questions to shape the framework | Concept name or rough idea | Complete framework via conversation |
| Direct | One-shot — generates from detailed input | Concept + source material | Complete framework immediately |

---

## Mode 1: Guided

**When to use:** The user has an idea or concept name but hasn't fully articulated the framework yet.

### Step 1: Concept Intake
**Action:** Ask the user three questions (all at once, not one at a time):
1. What is the concept? (Name, source, or description)
2. What situation does it help with? (When would someone reach for this?)
3. What existing frameworks does it relate to? (Or "none / not sure")

**Consent required:** No

### Step 2: Category + ID Assignment
**Action:** Based on the user's answers:
- Determine the best category from existing categories: `anti-patterns`, `behavioral-psychology`, `coaching`, `cognitive-therapy`, `continuous-learning`, `decision-making`, `epistemology`, `executive-function`, `influence-defense`, `integrated-practice`, `pattern-detection`, `personality-assessments`, `self-image`, `somatic`, `trauma-recovery`
- If no existing category fits, propose a new one. Keep it to 1-2 words, kebab-case.
- Generate the framework ID: kebab-case, descriptive, 2-4 words (e.g., `regret-minimization`, `four-f-survival-types`)
- Generate a short 2-letter ID code for the index matrix (e.g., `RM`, `4F`, `BEQ`)
- Present the proposed `frameworks/{category}/{id}/` path and get confirmation

**Consent required:** Yes — confirm category and ID before proceeding

### Step 3: Research + Validation
**Action:**
- If the concept references a book, paper, or named theory: research it to ensure accuracy
- If the concept is original or informal: work with the user to sharpen it
- Check that the concept is distinct from existing frameworks (read `index.md` and any potentially overlapping framework's `README.md`)
- If there is significant overlap with an existing framework, flag it: "This overlaps with {framework} — should this be a new framework or an extension of that one?"

**Consent required:** Yes if overlap detected

### Step 4: Generate Files
**Action:** Generate all four files following the standards below (see File Standards section). Present a summary of what was generated — do not dump all four files into chat unless asked.

**Consent required:** No

### Step 5: Update Index
**Action:**
- Add a row to the Full Framework Matrix table in `index.md`
- Add the framework to the Situation Router mermaid diagram in the appropriate branch
- Verify the mermaid diagram still renders correctly (no syntax errors)

**Consent required:** Yes — confirm the index entry before writing

### Step 6: Update Dependent Files
**Action:** Update all files that reference framework counts, category lists, or skill inventories:
- `README.md` — framework count, category tree, mermaid diagram framework count
- `CLAUDE.md` — framework count in "What This Repo Is"
- `docs/ARCHITECTURE.md` — framework count, file statistics table
- `skills/scan/references/signal-patterns.md` — add signal patterns for the new framework in the appropriate signal category
- If a new category was created: add it to the category tree in `README.md` and the category list in `skills/create-framework/SKILL.md`

**Consent required:** No

### Step 7: Verify
**Action:** Read back all files touched (4 framework files + index.md + dependent files) and confirm:
- [ ] README.md has valid YAML front-matter with all required fields
- [ ] theory.md has substantive content (not placeholder text)
- [ ] template.md is a blank worksheet (no filled-in data)
- [ ] agent-prompt.md has concrete trigger conditions and steps
- [ ] index.md row has all columns filled
- [ ] index.md mermaid diagram includes the new framework
- [ ] `pairs-with` references exist as real frameworks
- [ ] `updates` paths reference real status directories/files
- [ ] Framework counts are consistent across README.md, CLAUDE.md, and ARCHITECTURE.md
- [ ] Signal patterns added for the new framework

Report the result. If any check fails, fix it immediately.

**Consent required:** No

---

## Mode 2: Direct

**When to use:** The user provides detailed input — a paper, a book chapter, a long description, or source material — and wants the framework generated without back-and-forth.

### Step 1: Analyze Input
**Action:** Read all provided source material. Extract:
- Core concept and principles
- When it applies (use-when conditions)
- When it doesn't apply (avoid-when conditions)
- How it connects to existing mirror-palace frameworks
- Appropriate category and ID

### Step 2: Generate
**Action:** Run Steps 2-7 from Guided mode, but without pausing for confirmation on category/ID. Still pause for confirmation before writing the index update.

---

## File Standards

### README.md
Follow `frameworks/_template/README.md` exactly. Required YAML front-matter fields:
- `id`: kebab-case framework identifier
- `category`: must match the parent directory name
- `tags`: 3-7 relevant tags
- `pairs-with`: 2-4 existing framework IDs that complement this one (must be real frameworks that exist in the repo)
- `complexity`: `low`, `medium`, or `high`
- `agent-ready`: `true`
- `use-when`: 3-5 specific situations (not vague — "Stuck on a decision" is bad, "Stuck on a meaningful decision where fear is the primary barrier" is good)
- `avoid-when`: 2-4 specific situations where this framework is the wrong tool
- `updates`: which status files/directories get updated when this framework fires

The description below the front-matter should be 2-3 sentences, concrete, no fluff.

### theory.md
This is the heart of the framework. Quality bar: **a reader should be able to understand and apply the concept from this file alone.**

Required sections:
- **Core Concept**: 2-3 paragraphs explaining the fundamental idea. No author biography — describe the concept itself.
- **Key Principles**: 3-5 principles, each with a substantive explanation (not a sentence — a paragraph or more)
- **How It Works**: Step-by-step mechanics. Concrete enough that someone could follow it.
- **Applied As**: How this shows up in practice across different contexts (daily life, system design, coaching, etc.)
- **Common Misapplications**: Where people go wrong. What this framework is NOT.
- **Integration Points**: How this connects to other mirror-palace frameworks. Reference specific framework names.

Quality rules:
- Depth over breadth. Every section should be genuinely useful, not a placeholder.
- No filler. If a section would be thin, merge it into another section rather than padding it.
- Concrete examples throughout. Abstract theory without examples is not useful.
- No personal data in examples. Use realistic but generic scenarios.
- Minimum ~1500 words for a low-complexity framework, ~3000 for medium, ~5000 for high. These are floors, not targets — write what the concept needs.

### template.md
A blank worksheet the user fills in to apply the framework. Quality bar: **the sections should guide thinking, not just collect data.**

Rules:
- Must be completely blank (no filled-in examples, no personal data)
- Use HTML comments `<!-- -->` for guidance text, not visible content
- Include a Date field and Review Date field
- Sections should mirror the framework's key steps/principles
- Include a Key Insights section (numbered, empty)
- Include an Actions section (checkbox list, empty)
- The scan skill should be able to partially populate this — design sections with that in mind

### agent-prompt.md
A copy-paste prompt snippet that gives an agent the ability to apply this framework. Quality bar: **an agent with no other context should be able to apply this framework correctly from this file alone.**

Required sections:
- **When to Activate**: 3-5 specific observable signals (what the agent would see/hear that should trigger this framework)
- **Prompt Addition**: A fenced code block containing the complete agent instructions — numbered steps, output format guidance, and explicit guardrails (Do NOT list)
- **Example Application**: Input signal, framework applied, output — showing a realistic application

---

## Quality Gate

Before writing any file, check against these criteria:
1. **Is it distinct?** Does this framework offer something not already covered by existing frameworks?
2. **Is it actionable?** Can someone actually use this, or is it just theory?
3. **Is it honest?** Does the theory accurately represent the source concept, or has it been oversimplified or distorted?
4. **Is it deep enough?** Would someone who reads the theory.md actually understand the concept well enough to apply it?
5. **Is it connected?** Does it reference real existing frameworks in pairs-with, and do those connections make sense?

If any answer is no, fix it before writing.

---

## Error Handling

| Failure | Recovery |
|---------|----------|
| Concept overlaps heavily with existing framework | Ask user: new framework, extension, or merge? |
| Category doesn't exist yet | Create the category directory, proceed |
| Pairs-with framework doesn't exist | Remove the reference, note it for future |
| Theory is too thin (concept is simple) | Consider whether it's a principle within another framework rather than standalone |
| Source material is ambiguous or contradictory | Flag the ambiguity, present options, let user decide |
| Index mermaid diagram gets too complex | Add to the nearest existing branch rather than creating a new top-level branch |

## Cost Estimate
- Guided mode: ~5000-15000 tokens depending on concept complexity
- Direct mode: ~3000-10000 tokens plus source material processing

## Related Skills
- **scan** — Can detect when a new framework might be needed based on unmatched signals
- **setup** — Integrates frameworks into external repos
