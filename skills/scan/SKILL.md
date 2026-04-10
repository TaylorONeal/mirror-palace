---
name: scan
description: Analyze sources to recommend frameworks, populate status, and build people records
version: 2.0
trigger-patterns:
  - "scan my documents"
  - "analyze my situation"
  - "what frameworks apply to me"
  - "populate my status"
  - "run a scan"
  - "interview me"
  - "connect my email/calendar/messages"
  - "check my repo setup"
requires:
  - "mirror-palace/index.md must be accessible"
  - "mirror-palace/status/ directory structure must exist"
  - "For connected mode: MCP server configuration"
outputs:
  - "Framework recommendations with confidence scores"
  - "Status domain updates (proposed, pending user confirmation)"
  - "People record updates (proposed, pending user confirmation)"
  - "Decision ledger entries (proposed, pending user confirmation)"
  - "Scan report (see references/report-template.md)"
---

# Scan

## Purpose
The scan skill reads signals from various sources and maps them to mirror-palace frameworks, status domains, people records, and decisions. It is the primary way the system gets populated with data. Instead of asking users to fill out forms, the scan skill extracts information from what already exists and proposes structured updates.

## Modes

| Mode | Description | Input | Output |
|------|-------------|-------|--------|
| Documents | Read files, map signals to frameworks | File paths or directory | Framework map + status updates |
| Conversation | Interactive interview across all 10 domains | User responses | Complete status baseline + framework recommendations |
| Connected | MCP connectors with explicit opt-in | Email, calendar, messages | Auto-populated people records + domain updates |
| Repo | Scan existing repo configuration for gaps | Repo root path | Gap analysis + integration recommendations |

## Prerequisites

- [ ] `mirror-palace/index.md` accessible (framework routing table)
- [ ] `mirror-palace/status/` directory exists with domain files
- [ ] For connected mode: MCP server configured and user has granted explicit consent
- [ ] For repo mode: target repo path provided

---

## Mode 1: Documents

**When to use:** You have existing documents (journals, notes, plans, retrospectives, chat exports) to analyze.

### Step 1: Inventory
**Input:** File path(s) or directory path
**Action:** List all readable files. Categorize by type (journal, notes, chat, config, other). Estimate total content volume.
**Output:** File inventory with categories
**Consent required:** Yes — confirm which files to scan

### Step 2: Signal Extraction
**Input:** Approved file list
**Action:** Read each document fully. For each paragraph or section, check against the signal patterns in `references/signal-patterns.md`. For each signal detected:
- Identify the signal type and category
- Note the source file and relevant excerpt (paraphrase, don't quote)
- Map to applicable framework(s) using the `index.md` routing table
- Assign confidence score (0-100) using the confidence guide in signal-patterns.md
- Determine which status domain(s) to update
**Output:** Signal list with framework mappings
**Consent required:** No (read-only analysis)

### Step 3: Framework Mapping
**Input:** Signal list
**Action:** Aggregate signals by framework. For each framework with 2+ signals:
- Read the framework's `README.md` for `use-when` conditions
- Confirm the framework applies (signals match use-when criteria)
- Check `pairs-with` for complementary frameworks
- Check `updates` field for which status files should be refreshed
**Output:** Ranked framework recommendations with supporting evidence
**Consent required:** No

### Step 4: Status Proposals
**Input:** Framework mapping + signal list
**Action:** For each signal that maps to a status domain:
- Draft a proposed issue entry (Issue ID, Title, RYG, Score, Description, domain-specific columns)
- For people signals: draft a proposed people record — include Giving% and "What I Give" when evidence is present
- For decision signals: draft a proposed decision entry — include "Who's Affected" when stakeholders are mentioned
- For thriving signals: draft a proposed thriving note on the relevant domain — sustained stability, upward trends, and values-action alignment are worth recording, not just issues
- Present all proposals to user in a clear, reviewable format
**Output:** Proposed status updates (issues, thriving notes, people records, decision entries)
**Consent required:** Yes — user must approve each proposed update before it's written

### Step 5: Write Updates
**Input:** Approved proposals
**Action:** Write approved updates to the appropriate status files. Update indexes (ISSUE-INDEX.md, PEOPLE-INDEX.md, DECISIONS-INDEX.md).
**Output:** Updated status files
**Consent required:** Already obtained in Step 4

---

## Mode 2: Conversation

**When to use:** No documents to scan, or you want a comprehensive interactive baseline. Best for initial setup or periodic comprehensive review.

### Step 1: Introduction
**Action:** Explain the process. Set expectations: 10-15 questions, takes 15-30 minutes, everything is stored locally, can stop and resume anytime.
**Consent required:** Yes — user must opt in

### Step 2: Domain Interview
**Action:** Work through each of the 10 domains with 1-2 questions per domain. Questions should be open-ended and conversational, not form-like.

**Question Guide:**

| Domain | Opening Question | Follow-up if Needed |
|--------|-----------------|---------------------|
| Money & Finances | "How are you feeling about your financial situation right now — stable, stressed, or somewhere in between?" | "What's the biggest financial uncertainty you're sitting with?" |
| Career & Work | "What's your work situation? Are you settled, exploring, or in transition?" | "What would make your work life meaningfully better?" |
| Health & Fitness | "How's your energy lately? Sleep, exercise, body — what's the honest picture?" | "Is there a health thing you've been avoiding dealing with?" |
| Fun & Recreation | "When was the last time you did something genuinely fun — not productive-fun, just fun?" | "What used to be fun that you've stopped doing?" |
| Environment | "How do your physical spaces feel — home, work, daily routine?" | "What's creating the most friction in your daily environment?" |
| Community | "Do you feel like you belong somewhere — a group, a scene, a community?" | "Are you over-committed to communities or under-connected?" |
| Family & Friends | "How are your key relationships — family and close friends?" | "Is there a relationship that needs attention that you've been putting off?" |
| Partner & Love | "What's happening in your romantic life? Are you satisfied with where things are?" | "Is there something in this area you're not saying out loud?" |
| Personal Growth | "What are you learning or working on growing right now?" | "Is your learning translating into actual behavior change?" |
| Spirituality | "Do you have a connection to meaning, purpose, or something bigger? What does that look like?" | "Is your inner life getting the attention it needs?" |

**After the domain interview, ask these closing questions:**

| Question | Purpose |
|----------|---------|
| "What part of your life is genuinely working well right now?" | Detect thriving — not just absence of problems, but active flourishing |
| "What are you proud of recently — something you did that felt like you?" | Identity-aligned action, positive self-concept data |
| "Who in your life would you say you're showing up well for?" | Relational reciprocity — giving, not just receiving |

**Question design principles:**
- Open-ended, not leading
- One topic per question
- Follow the energy — if a response is rich, go deeper before moving on
- Don't ask about frameworks by name — detect them from natural language
- If a topic is sensitive, respect the user's boundaries — note the avoidance as a signal without pushing
- Balance gap-detection with thriving-detection — the system has a bias toward problems; deliberately surface what's working

### Step 3: Signal Processing
**Action:** As the user responds, extract signals and map to frameworks in real-time using `references/signal-patterns.md`. Build the status picture progressively. After all domains are covered, present the complete picture.
**Output:** Draft status across all 10 domains
**Consent required:** No (processing only)

### Step 4: People Extraction
**Action:** Review the conversation for people mentioned. For each person:
- Draft a people record with available information
- Estimate Support % and Challenge % based on how they were described
- Estimate Giving % based on what the user describes contributing to the relationship
- Note "What I Give" when the user describes how they show up for this person
- Note which domains they're connected to
**Output:** Draft people records (bidirectional — what they give you AND what you give them)
**Consent required:** Yes — confirm each person record

### Step 5: Decision Identification
**Action:** Review the conversation for active or pending decisions. For each:
- Draft a decision record
- Classify reversibility (one-way vs two-way)
- Link to domains and people
- Note "Who's Affected" — who else is impacted by this decision, who depends on it, who benefits
**Output:** Draft decision records
**Consent required:** Yes — confirm each decision record

### Step 6: Framework Recommendations
**Action:** Based on everything gathered, produce the scan report (see `references/report-template.md`):
- Top 5 frameworks that apply to current situation
- Category relevance map
- Signals detected with sources
- Suggested agent archetype(s)
- Next steps
**Output:** Complete scan report
**Consent required:** No (read-only output)

### Step 7: Write All
**Action:** Write all approved status updates, people records, decision records, and update all indexes.
**Output:** Populated status system
**Consent required:** Already obtained in Steps 4-5

---

## Mode 3: Connected

**When to use:** MCP connectors are available (email, calendar, messages). Requires explicit opt-in per source.

### Prerequisites
- MCP server configured for the relevant service
- User has explicitly opted in to each data source
- See `references/mcp-connectors.md` for setup instructions and privacy protocol

### Step 1: Consent Gate
**Action:** List available MCP connections. For each, explain exactly what data will be read and how it will be used. User must explicitly opt in to EACH source individually. This step is non-negotiable.
**Consent required:** Yes — per-source opt-in

### Step 2: Data Extraction
**Input:** Approved data sources
**Action:** For each approved source, extract signals per the protocols in `references/mcp-connectors.md`:
- **Email**: Thread age, response patterns, volume trends, decision-language detection
- **Calendar**: Density metrics, meeting patterns, free time blocks, schedule adherence
- **Messages**: Response patterns, activity distribution, silence patterns, urgency signals
**Output:** Extracted signals (processed in memory only — never written raw to disk)
**Consent required:** Already obtained

### Step 3: Cross-Source Correlation
**Action:** Look for signals that appear across multiple sources. Cross-source signals are the highest-value findings:

**Problem correlations:**
- Calendar packed + email backlog growing + response times increasing = systemic overload
- Calendar empty + low email volume + messaging silence = potential withdrawal
- New commitments increasing + existing tasks not completing = over-commitment trajectory

**Thriving correlations:**
- Consistent response times + manageable calendar density + regular free blocks = sustainable rhythm
- Regular contact with key relationships + reciprocal message patterns = healthy relational maintenance
- Calendar shows both work and non-work activities + no weekend overflow = life balance working

**Output:** Correlated signal list (both problem and thriving signals)
**Consent required:** No

### Step 4: Record Proposals
**Action:** Draft people records (from contacts, including Giving% when reciprocal patterns are visible), domain updates (from calendar/email patterns, including thriving notes for stable domains), and decision entries (from decision-language threads, including "Who's Affected" when multiple parties are involved). Present all proposals.
**Output:** Proposed updates
**Consent required:** Yes — user approves each update

### Step 5: Write Updates
**Action:** Write approved updates. Update indexes.
**Output:** Updated status files
**Consent required:** Already obtained

### Privacy Guarantees
- Raw data from MCP sources is NEVER written to disk — processed in memory only
- Only structured, approved summaries are stored
- Attribution uses categories, not specifics ("calendar analysis suggests..." not "your meeting with X about Y")
- User can revoke access to any source at any time
- See `references/mcp-connectors.md` for full privacy protocol

---

## Mode 4: Repo

**When to use:** Scanning an existing repository that already has some configuration to identify gaps in mirror-palace integration.

### Step 1: Repo Discovery
**Input:** Repo root path
**Action:** Read key configuration files:
- `CLAUDE.md` — repo context
- `AGENTS.md` — agent configuration
- `agents/*/SOUL.md` — existing agents
- `agents/*/HEARTBEAT.md` — scheduling
- `.claude/settings.json` — harness config
**Output:** Repo configuration inventory
**Consent required:** Yes — confirm which files to read

### Step 2: Gap Analysis
**Action:** Compare repo configuration against mirror-palace best practices:
- Are agents referencing mirror-palace frameworks?
- Is the status system being checked in agent protocols?
- Are HEARTBEAT.md files following the patterns in `agents/orchestration/`?
- Is the Continuous Learning Protocol mentioned in CLAUDE.md?
- Are framework references available (symlinked, copied, or referenced)?
**Output:** Gap list with severity (critical / recommended / optional)
**Consent required:** No

### Step 3: Recommendations
**Action:** For each gap, propose a specific fix:
- CLAUDE.md patch (see `skills/setup/references/claude-md-patch.md`)
- AGENTS.md patch (see `skills/setup/references/agents-md-patch.md`)
- Agent SOUL.md additions (framework references)
- HEARTBEAT.md additions (status checks)
**Output:** Prioritized recommendation list
**Consent required:** No (read-only output)

### Step 4: Handoff to Setup
**Action:** If the user wants to proceed with recommendations, hand off to the setup skill with the gap analysis as input.
**Output:** Setup skill invocation with context
**Consent required:** Yes — explicit decision to proceed

---

## Continuous Learning Protocol

The scan skill is not a one-time event. It implements the Continuous Learning Protocol defined in `CLAUDE.md`.

### On Every Interaction
1. **Domain update check:** Did the user reveal information that updates a status domain? If yes, propose a 1-line update.
2. **People update check:** Did a relationship dynamic surface? If yes, propose a people record update — including Giving% and "What I Give" if the user describes what they contribute to the relationship.
3. **Decision check:** Is a decision being discussed? If yes, check for an existing decisions ledger entry or propose a new one. Include "Who's Affected" if stakeholders are mentioned.
4. **Personality check:** Did a personality pattern emerge? If yes, note it in the relevant assessment template.
5. **Framework cascade:** Did a framework apply? If yes, check the framework's `updates` field in its README.md for what else should be refreshed.
6. **Thriving check:** Is something genuinely working well? If yes, note it. Sustained satisfaction, values-action alignment, healthy reciprocity, and earned contentment are data worth capturing — not just the absence of problems.
7. **Relational reciprocity check:** Did the user describe what they give to a relationship, or how their actions affect others? Update people records and decisions accordingly.

### State-Aware Interaction
Before surfacing patterns or proposing updates, read the user's current state. If the user is activated, distressed, or low-energy:
- Lead with what's working before naming what's broken
- Propose fewer updates — one or two, not five
- Frame observations with warmth, not just accuracy
- Save deeper pattern work for a calmer moment

The continuous learning protocol should never add cognitive load to someone who's already overloaded.

### Staleness Detection
Agents should check on every run:
- Are any domain files older than 30 days? Flag for review.
- Are any people records older than 60 days? Flag for review.
- Are any decisions in "pending" for 30+ days? Flag for review.
- Are any decisions in "pending" that have a "Who's Affected" section with names in it? Escalate priority — other people are waiting.
- Have any frameworks been triggered that specify status updates, but those updates haven't been made? Flag the gap.
- Are any domains green for 60+ days with no issues? Note as thriving — stability is data worth acknowledging, not just problems.

### Low Friction Is Mandatory
Do not ask the user to fill out forms. Propose specific updates based on what they said. Confirm with a yes/no. Then write. The goal is zero-friction data maintenance.

---

## Error Handling

| Failure | Recovery |
|---------|----------|
| File not readable | Skip file, note in report, continue with remaining files |
| MCP connection failed | Report the failure, continue with available sources |
| Framework not found in index | Note the signal but skip framework mapping for it |
| User declines all proposals | Produce report-only output, skip writes |
| User stops mid-interview | Save progress to WORKING.md, note where to resume, don't lose partial data |
| Signal confidence too low (<40) | Include in scan log only, don't include in report or propose updates |

## Cost Estimate
- Documents mode: ~2000-5000 tokens per file scanned + 1000 tokens for report
- Conversation mode: ~3000-8000 tokens depending on interview depth
- Connected mode: ~5000-15000 tokens depending on data volume
- Repo mode: ~1000-3000 tokens

## Related Skills
- **setup** — Repo mode hands off to setup when integration changes are needed

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | — | Initial specification with 4 modes |
| 2.0 | — | Added detailed step-by-step procedures, consent gates, cross-source correlation, error handling, cost estimates |
