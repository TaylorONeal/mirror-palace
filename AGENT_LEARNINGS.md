# AGENT_LEARNINGS.md

Persistent, repo-specific lessons for agents. This is external memory, not a transcript.

## Usage

- Search this file for lessons relevant to the current task. Do not load the entire file by default.
- Add a lesson only after an observable failure or correction produced a reusable, verified improvement.
- Record facts, triggers, and verified fixes. Do not record hidden chain-of-thought, speculation, or generic advice.
- Keep the active set small. When a lesson becomes a stable rule, test, lint, or canonical doc, promote it there and remove or archive the duplicate here.
- Re-check lessons when the related tool, model, dependency, or repo architecture changes.
- Prefer one strong lesson over several near-duplicates.

## Active Lessons

### ML-001 — Do not run personal-state maintenance on unrelated interactions
- Trigger: A normal task that does not involve Mirror Palace status, people, decisions, or a requested scan.
- Failure pattern: Running continuous-learning checks on every interaction adds context and cognitive overhead and can produce irrelevant update proposals.
- Better approach: Run status maintenance only for active Mirror Palace work or when the user explicitly asks to capture or update personal context.
- Verified by: 2026-09-23 instruction audit.
- Promote to: CLAUDE.md and scan/setup templates.

### ML-002 — Retrieve framework context just in time
- Trigger: A task may benefit from one or more Mirror Palace frameworks.
- Failure pattern: Reading the full framework index and broad status context at every session start wastes context and increases irrelevant instruction collisions.
- Better approach: Use the task to choose the narrowest routing/index lookup, then load only the framework/status files needed.
- Verified by: 2026-09-23 instruction audit.
- Promote to: CLAUDE.md and setup templates.

### ML-003 — Consent and privacy ordering is an execution invariant
- Trigger: Reading connected personal sources or writing personal status, people, or decision records.
- Failure pattern: Treating all numbered procedures as obsolete prompt scaffolding can remove necessary consent and state-ordering safeguards.
- Better approach: Keep consent, privacy, and write-order gates explicit while allowing native model reasoning inside each step.
- Verified by: 2026-09-23 instruction audit.
- Promote to: scan/setup skills.

## Archive / Promotion Rule

When a lesson is fully enforced by a test, lint rule, schema, or concise canonical instruction, replace the active entry with a one-line pointer or remove it. This file should remain a high-signal cache, not grow without bound.
