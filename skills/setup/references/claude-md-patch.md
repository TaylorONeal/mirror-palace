# CLAUDE.md Patch

Example additions to an existing CLAUDE.md to reference mirror-palace. These sections should be added to or merged with the existing file.

---

## Patch: Mirror Palace Context Section

Add this section to CLAUDE.md:

```markdown
## Mirror Palace — Cognitive Framework Toolkit

### Location
Frameworks, status tracking, and agent archetypes live in `[path-to-mirror-palace]/`.

### Framework Index
The master routing table is `[path-to-mirror-palace]/index.md`. Use the situation router to find the right framework, or scan the "Use When" column in the framework matrix.

### How to Use Frameworks
1. Match the situation to a framework using index.md
2. Read the framework's `agent-prompt.md` for a ready-to-use prompt snippet
3. Apply it to the current conversation
4. Check the `updates` field in the framework's README.md for which status files to refresh
5. Propose specific updates (1-line each) and confirm with the user before writing

### Status System
- 10 life domains: `[path]/status/domains/`
- People records: `[path]/status/people/`
- Decisions ledger: `[path]/status/decisions/`
- Cross-domain index: `[path]/status/ISSUE-INDEX.md`

### Continuous Learning Protocol (Critical)
On every interaction, check:
1. Did the user reveal information that updates a status domain? Propose a 1-line update.
2. Did a relationship dynamic surface? Propose a people record update.
3. Is a decision being discussed? Check or create a decisions ledger entry.
4. Did a personality pattern emerge? Note it in the relevant assessment.
5. Did a framework apply? Check its `updates` field for what else to refresh.

Low friction is mandatory. Don't ask users to fill out forms. Propose specific updates, confirm with yes/no, then write.

### Rules
- No author names. Frameworks are referenced by concept only.
- No personal data in templates. Everything is generalized.
- Depth over breadth. Apply frameworks genuinely, not superficially.
```

---

## Patch: Session Protocol Addition

If the existing CLAUDE.md has an "Every Session" section, add these steps:

```markdown
## Every Session (additions)
- If working with the user's life context: read `[path]/status/ISSUE-INDEX.md` for current state
- If a framework applies: read it from `[path]/frameworks/` and apply the agent-prompt.md snippet
- If a decision is being discussed: check `[path]/status/decisions/DECISIONS-INDEX.md`
- Run the Continuous Learning Protocol checks before ending the session
```

---

## Patch: Minimal Reference Mode

If using reference mode (no symlinks or copies), this is the minimal addition:

```markdown
## External References
- Mirror Palace frameworks: `[absolute-path-to-mirror-palace]/`
- Framework index: `[absolute-path-to-mirror-palace]/index.md`
- Status tracking: `[absolute-path-to-mirror-palace]/status/`
- Agent archetypes: `[absolute-path-to-mirror-palace]/agents/archetypes/`

When a framework is needed, read from these paths directly. The index.md file routes situations to the correct framework.
```

---

## Notes

- Replace `[path-to-mirror-palace]` with the actual path on the user's machine
- If using symlinks, the paths will be relative to the target repo
- If using copy mode, replace paths with the local framework directory
- The Continuous Learning Protocol section is the most important addition — it's what makes the system active rather than passive
