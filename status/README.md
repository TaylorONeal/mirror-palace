# Status Tracking System

The status system is the living state of a person's life across every meaningful dimension. It is not a journaling system. It is structured, cross-linked, and designed to be read by both humans and agents.

## Architecture

Three interconnected subsystems:

### 1. Domains (`status/domains/`)
Ten life areas, each tracked independently with a shared schema plus domain-specific columns. Every domain file is a table where each row is an issue — a specific thing being tracked within that domain.

**The 10 domains:**
1. Money & Finances
2. Career & Work
3. Health & Fitness
4. Fun & Recreation
5. Environment
6. Community
7. Family & Friends
8. Partner & Love
9. Personal Growth & Learning
10. Spirituality

Each issue gets a unique ID (e.g., `FIN-001`, `CAR-003`) and an RYG (Red/Yellow/Green) status plus a 0-100 score.

### 2. People (`status/people/`)
Every significant person in your life gets a record. People link to domains (which areas of your life they touch) and to decisions (which choices involve them). The key metrics are Support % (how much they support your growth) and Challenge % (how much they constructively push you). The best relationships score high on both.

### 3. Decisions (`status/decisions/`)
Every significant decision gets tracked from inception to outcome. Decisions link to domains (what life areas they affect) and to people (who's involved or impacted). The ledger tracks status through a lifecycle: not-started, pending, in-progress, decided, revisiting.

## Cross-Linking

The power of the system is in the connections:

- **Domain issues link to other domain issues.** A career change (CAR-xxx) affects finances (FIN-xxx) and relationships (FAM-xxx).
- **People link to domains.** Every person touches specific life areas. When a domain changes, check the people connected to it.
- **Decisions link to both.** Every decision affects domains and involves people. When a decision is made, update both.
- **Frameworks link to status.** The `index.md` framework matrix specifies which status files each framework updates when triggered. This is how the system stays current.

## How It Gets Populated

### Manual
Fill in the tables directly. Use the templates in `status/domains/_template.md`, `status/people/_template.md`, and `status/decisions/_template.md`.

### Scan Skill
The scan skill (`skills/scan/`) has four modes that populate status data:
- **Documents mode** — reads existing files and extracts signals that map to domains, people, and decisions
- **Conversation mode** — interactive interview that systematically covers all 10 domains
- **Connected mode** — MCP connectors (email, calendar, messages) auto-populate with explicit opt-in
- **Repo mode** — scans existing repo configurations for gaps

### Agent Updates
Agents propose status updates during every interaction via the Continuous Learning Protocol (see `CLAUDE.md`). Every conversation is an opportunity to refine the data. Low friction is mandatory — agents propose specific 1-line updates, user confirms with yes/no, agent writes.

## Master Indexes

- `status/ISSUE-INDEX.md` — every issue across all domains in one table
- `status/people/PEOPLE-INDEX.md` — every person record in one table
- `status/decisions/DECISIONS-INDEX.md` — every decision in one table

These indexes are the first thing agents read to get a snapshot of current state.

## RYG Scoring

- **Green (G)** — This area is stable or thriving. Score 70-100.
- **Yellow (Y)** — Needs attention. Not crisis, but drifting or stalled. Score 40-69.
- **Red (R)** — Active problem. Causing stress, blocking other domains, or deteriorating. Score 0-39.

Scores are subjective but should be calibrated against each other. If everything is green, either life is genuinely great or the scoring is too generous. The scan skill helps calibrate by comparing stated scores against observed signals.

## Staleness

Data goes stale. Every entry has a "Last Updated" field. Agents should flag entries that haven't been updated in 30+ days. The scan skill's continuous learning protocol checks for staleness on every run.
