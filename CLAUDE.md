# CLAUDE.md — Mirror Palace


## Model-Aware Execution Policy

Use **native reasoning by default** on current frontier models and coding agents. Instructions should define goals, hard constraints, sources of truth, and acceptance criteria without forcing a ritualized reasoning process.

- Do not add "think step by step", scratchpad, chain-of-thought, or fixed reasoning templates unless a specific legacy/lightweight model demonstrably needs them.
- Emphasis words such as **CRITICAL**, **ALWAYS**, and **MANDATORY** are not requests for extra narration, repeated checks, or extra tool calls. Reserve them for real invariants such as privacy, consent, data integrity, irreversible writes, and security boundaries.
- Keep ordered procedures when order itself protects state, consent, privacy, or correctness. A numbered workflow is an execution contract, not a request to expose internal reasoning.
- Prefer direct execution followed by verification against acceptance criteria. Do not restate routine plans or expose internal reasoning unless asked.
- If the runtime is explicitly a smaller/legacy model, a concise checklist scaffold may be used. Keep that compatibility path separate from the frontier-model default.
- If instructions conflict, follow the more specific task/repo contract and the higher-risk invariant; surface a genuine unresolved conflict rather than trying to satisfy both literally.

## What This Repo Is
A cognitive framework toolkit. 49 psychology, decision-making, and behavioral science frameworks organized for both human reference and AI agent consumption. Includes a life domain status tracking system, people records, decisions ledger, personality assessments, 6 agent archetypes, and 3 core skills (scan + setup + create-framework).

## Context Loading
- This file is the stable repo contract.
- Load `index.md` only when framework routing is relevant to the task.
- Load `status/` only when the task uses a user's status, people, decisions, or other personal context.
- Search `AGENT_LEARNINGS.md` for task-relevant lessons before non-trivial repo work; do not load the whole file by default.

## Framework Structure
Every framework lives in `frameworks/{category}/{name}/` with exactly 4 files:
- `theory.md` — deep explanation of the concept
- `template.md` — ready-to-fill starter worksheet
- `agent-prompt.md` — copy-paste prompt snippet for agents applying this framework
- `README.md` — YAML front-matter with `use-when`, `avoid-when`, `updates`, `pairs-with`, `routes` fields

## Routes — Framework Sequencing Layer
Routes live in `routes/` and map common situation classes to framework sequences with ordering rationale, contraindications, and fallback paths. 8 routes cover: shame spirals, overthinking/fusion, conflict/blame, relationship rupture, friendship ambiguity, career stuckness, decision paralysis, and unclear emotional signals.

**When a user presents a situation, check routes first.** Routes provide sequencing that individual frameworks do not. See `routes/README.md` for the full index and `index.md` for the route table.

## Guiding Philosophy
Mirror Palace helps people build lives that are aware, empowered, and fulfilling. The system guides a progression:

**Awareness → Calm → Integrity → Fulfillment**

1. **Surface patterns** — see what's actually happening without flinching
2. **Create space** — use awareness to quiet reactivity and respond rather than react
3. **Act with integrity** — make choices that serve both yourself and others
4. **Live fully** — build a life worth living, not just a life clearly understood

This means the system must detect **what's working** alongside what's broken. It must know when to back off, not just when to push. It must help users see themselves in relation to others, not just in isolation. And it must recognize that clarity is a means to flourishing, not an end in itself.

**The system never prescribes a vision of the good life. It helps users discover and pursue their own.**

**Pacing matters.** When the user's state is activated or distressed, lead with presence and grounding before analysis. Naming a pattern can agitate as easily as it can calm. Match the system's intensity to the user's capacity to receive.

## Continuous Learning Protocol
Mirror Palace is a living system, but maintenance should be task-scoped, not a tax on every interaction.

When the user is actively doing a scan, status-maintenance task, relationship/decision review, or explicitly asks Mirror Palace to learn from the interaction:
- Propose concise updates to relevant status, people, decision, personality, or framework records.
- Capture genuinely thriving signals as well as problems.
- Ask for confirmation before writing personal records.

For unrelated work, do not run status-maintenance checks in the background.

Keep updates low-friction: propose the smallest concrete change instead of asking the user to fill out forms.

## Status System
- `status/domains/` — 10 life domains with RYG status, scores, domain-specific columns
- `status/people/` — relationship records with support%, challenge%, needs met/unmet
- `status/decisions/` — decision ledger with status, reversibility, domain/people links
- `status/ISSUE-INDEX.md` — master cross-domain index
- `status/people/PEOPLE-INDEX.md` — master people index
- `status/decisions/DECISIONS-INDEX.md` — master decisions index

## Agent Archetypes
Six pre-built agent personalities in `agents/archetypes/`. Each has SOUL.md (identity), MEMORY.md (context), HEARTBEAT.md (schedule), and a README.md explaining when to deploy it.

## Skills
- **scan** — Analyze documents, conversations, or connected services to recommend frameworks and populate the status system
- **setup** — Integrate mirror-palace into an existing repo (AGENTS.md, CLAUDE.md patches) with user consent at every step
- **create-framework** — Scaffold a complete new framework from a concept, paper, or idea. Generates all 4 files, validates quality, and updates index.md + all dependent files (README.md, ARCHITECTURE.md, signal-patterns.md, CLAUDE.md counts)

## Git & Deployment
- **Remote:** `git@github.com:YOUR_ORG_OR_USER/mirror-palace.git` (SSH)
- **Deploy key:** `mirror-palace-sandbox` (ed25519, read-write) is registered on GitHub. The sandbox can push directly via SSH.
- **Before first push in a session:** Run `ssh-keyscan github.com >> ~/.ssh/known_hosts 2>/dev/null` if `~/.ssh/known_hosts` doesn't exist yet.
- **Pre-push hook:** "Mirror Palace Safety Gate" checks for personal data. Must pass before any push.
- **If `index.lock` blocks git:** `rm -f .git/index.lock` — it's always a stale leftover, never a live process in this context.
- **Push workflow:** The Cowork sandbox cannot commit/push against the mounted folder due to `.git/index.lock` permission issues on the mount. All git write operations (commit, push, merge, rebase) must go through terminal Claude. The sandbox can read, diff, and verify, but the final commit+push step always needs terminal Claude.

## Lessons Learned
- **SSH over HTTPS for sandbox git.** HTTPS auth fails in sandboxed environments (no TTY for credential prompts). Always use SSH + deploy key.
- **Deploy keys via CLI, not browser.** `gh repo deploy-key add` is faster and works from any terminal. Skip the GitHub settings UI.
- **Kill stale lock files immediately.** `.git/index.lock` from crashed git operations is always safe to `rm -f`. Don't try to work around it.
- **Git writes go through terminal Claude.** The Cowork sandbox mount prevents `.git/index.lock` deletion, which blocks all git write ops. Don't attempt commit/push from the sandbox. Prepare files, verify diffs, then give the user a single instruction block labeled "TERMINAL CLAUDE" to paste.
- **Generate SSH key + add known_hosts in one shot.** When setting up a new sandbox session: `ssh-keygen -t ed25519 -C "mirror-palace-sandbox" -f ~/.ssh/id_ed25519 -N "" && ssh-keyscan github.com >> ~/.ssh/known_hosts 2>/dev/null`.

## Rules
- **No personal data.** Templates are blank starters. Fill them in for your own private use.
- **Influence defense is defensive.** The influence-defense frameworks are about recognizing techniques used on you, never about using them on others.
- **Depth over breadth.** Every framework should be genuinely useful, not a placeholder.
