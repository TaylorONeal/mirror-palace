# CLAUDE.md — Mirror Palace

## What This Repo Is
A cognitive framework toolkit. 48 psychology, decision-making, and behavioral science frameworks organized for both human reference and AI agent consumption. Includes a life domain status tracking system, people records, decisions ledger, personality assessments, 6 agent archetypes, and 3 core skills (scan + setup + create-framework).

## Every Session
1. Read this file
2. Read `index.md` — the master framework routing table
3. If working with a user's data: check `status/` for current state

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
This is critical. Mirror Palace is a living system, not a static reference.

**On every interaction, check:**
1. Did the user reveal information that updates a status domain? → Propose a 1-line update
2. Did a relationship dynamic surface? → Propose a people record update
3. Is a decision being discussed? → Check/create a decisions ledger entry
4. Did a personality pattern emerge? → Note it in the relevant assessment template
5. Did a framework apply? → Check the framework's `updates` field in its README.md for what else to refresh
6. Is something genuinely working well? → Note it. Thriving is data, not just the absence of problems.

**Low friction is mandatory.** Don't ask the user to fill out forms. Propose specific updates based on what they said, confirm with a yes/no, then write.

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
