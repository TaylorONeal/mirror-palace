# Architecture

A visual guide to how Mirror Palace is structured and how data flows through it.

---

## Five Layers

Mirror Palace is organized into five distinct layers, each with a clear responsibility:

```
╔═══════════════════════════════════════════════════════════════╗
║                     KNOWLEDGE LAYER                           ║
║  frameworks/                                                  ║
║  35 frameworks × 4 files = 140 files                         ║
║  The agent's training in human psychology                     ║
║  ┌────────────┬────────────┬────────────┬────────────┐       ║
║  │ theory.md  │template.md │agent-prompt│ README.md  │       ║
║  │ Deep       │ Fill-in    │ Copy-paste │ Metadata   │       ║
║  │ explanation│ worksheet  │ for agents │ & routing  │       ║
║  └────────────┴────────────┴────────────┴────────────┘       ║
╠═══════════════════════════════════════════════════════════════╣
║                      STATUS LAYER                             ║
║  status/                                                      ║
║  Your life data — continuously updated                        ║
║  ┌───────────────┬──────────────┬─────────────────┐          ║
║  │ 10 domains    │ People       │ Decisions        │          ║
║  │ RYG + scores  │ Support%     │ Status           │          ║
║  │ Domain cols   │ Challenge%   │ Reversibility    │          ║
║  │ Linked issues │ Needs met    │ Domain links     │          ║
║  └───────────────┴──────────────┴─────────────────┘          ║
╠═══════════════════════════════════════════════════════════════╣
║                      AGENT LAYER                              ║
║  agents/                                                      ║
║  6 archetypes + templates + orchestration                     ║
║  ┌──────────┬──────────┬──────────┬──────────┐               ║
║  │ SOUL.md  │MEMORY.md │HEARTBEAT │WORKING.md│               ║
║  │ Identity │ History  │ Schedule │ Session  │               ║
║  └──────────┴──────────┴──────────┴──────────┘               ║
╠═══════════════════════════════════════════════════════════════╣
║                     ACTION LAYER                              ║
║  skills/                                                      ║
║  ┌─────────────────────┬─────────────────────┐               ║
║  │ scan                │ setup               │               ║
║  │ Analyze → populate  │ Integrate → connect │               ║
║  │ 4 input modes       │ Consent at each step│               ║
║  └─────────────────────┴─────────────────────┘               ║
╠═══════════════════════════════════════════════════════════════╣
║                    PROCESS LAYER                              ║
║  daily/                                                       ║
║  ┌──────────┬──────────┬──────────┬──────────────┐           ║
║  │ Briefing │ Check-in │Reflection│ Framework    │           ║
║  │ Morning  │ Midday   │ Evening  │ of the Day   │           ║
║  └──────────┴──────────┴──────────┴──────────────┘           ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## Data Flow

```
                    ┌─────────────────────────────┐
                    │     USER CONVERSATION        │
                    │  "I've been avoiding that     │
                    │   career conversation..."     │
                    └──────────────┬───────────────┘
                                   │
                    ┌──────────────▼───────────────┐
                    │      SIGNAL DETECTION         │
                    │  "avoiding" → failure-modes    │
                    │  "career" → career-work domain │
                    │  "conversation" → people record│
                    └──────────────┬───────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              │                    │                     │
   ┌──────────▼──────────┐ ┌──────▼───────┐ ┌──────────▼──────────┐
   │  FRAMEWORK LOOKUP    │ │ STATUS CHECK │ │  PEOPLE CHECK       │
   │  failure-modes/      │ │ career-work  │ │  [relevant person]  │
   │  theory.md           │ │ current: 🟡  │ │  challenge%: 72     │
   │  → Freeze pattern    │ │ score: 55    │ │  last contact: 18d  │
   └──────────┬──────────┘ └──────┬───────┘ └──────────┬──────────┘
              │                    │                     │
              └────────────────────┼────────────────────┘
                                   │
                    ┌──────────────▼───────────────┐
                    │      AGENT RESPONSE           │
                    │  Informed by framework +       │
                    │  status + people data           │
                    └──────────────┬───────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              │                    │                     │
   ┌──────────▼──────────┐ ┌──────▼───────┐ ┌──────────▼──────────┐
   │  PROPOSE UPDATE      │ │ PROPOSE      │ │  PROPOSE UPDATE     │
   │  failure-modes:      │ │ career-work: │ │  [person]:          │
   │  freeze count +1     │ │ note: active │ │  last discussed:    │
   │                      │ │ avoidance    │ │  today              │
   └──────────┬──────────┘ └──────┬───────┘ └──────────┬──────────┘
              │                    │                     │
              └────────────────────┼────────────────────┘
                                   │
                    ┌──────────────▼───────────────┐
                    │     USER CONFIRMS (Y/N)       │
                    │  Low friction. 1-line each.    │
                    └──────────────────────────────┘
```

---

## Framework Routing via index.md

The `index.md` file is the central routing table. Every user situation maps to frameworks, and every framework maps to status updates:

```
USER SITUATION          →    FRAMEWORKS           →    STATUS UPDATES
─────────────────────        ──────────────────        ──────────────────
"Can't start task"      →    Behavior Equation    →    career-work.md
                              Executive Function        health-fitness.md
                              Time Blindness

"Relationship conflict" →    Stories vs Facts     →    family-friends.md
                              Psychological           partner-love.md
                                Contracts              people/[person].md
                              Family Systems

"Big decision pending"  →    Reversibility        →    decisions/[dec].md
                              Regret Minimization      [relevant domain]
                              North Star Test

"Feeling stuck overall" →    Ikigai Diagnostic    →    career-work.md
                              Failure Modes             personal-growth.md
                              North Star Test           ISSUE-INDEX.md
```

---

## Agent Orchestration

When multiple agents are deployed, they coordinate through shared files:

```
┌────────────────────────────────────────────────────────┐
│                   SHARED STATE                          │
│                                                         │
│  status/         ← All agents read and propose updates │
│  ISSUE-INDEX.md  ← Cross-domain connection point       │
│  PEOPLE-INDEX.md ← Shared people roster                │
│  DECISIONS-INDEX ← Shared decision pipeline            │
│                                                         │
├────────────────────────────────────────────────────────┤
│                                                         │
│  The Mirror  ──writes──→  Weekly pattern report         │
│  The Briefer ──reads───→  Pattern report + all status   │
│  The Tracker ──reads───→  Previous intent declarations  │
│  The Watcher ──writes──→  Change log                    │
│  The Strategist ─reads─→  Change log + pattern report   │
│  The Operator ──reads──→  Domain-specific status        │
│                                                         │
│  No agent talks to another agent directly.              │
│  They coordinate through shared documents.              │
│  This is intentional — it mirrors how human teams       │
│  coordinate through written artifacts.                  │
└────────────────────────────────────────────────────────┘
```

---

## Memory Hierarchy

Three tiers of persistence:

```
TIER 1: PERSISTENT (MEMORY.md)
─────────────────────────────
• Observations that remain true across sessions
• Compressed using information-compression framework
• Priority: Constraints > Goals > Commitments > Definitions > Facts > Questions
• Updated after each session with new observations
• Example: "User consistently avoids financial discussions. Freeze pattern.
  Career domain linked to self-worth (identity-reinforcement)."

TIER 2: DAILY (Briefing/Reflection logs)
────────────────────────────────────────
• Append-only daily records
• Morning state, decisions made, evening reflection
• Each entry MUST end with "Next Actions:" section
• Provides temporal patterns over weeks/months
• Example: "2026-04-10: Energy low, rescheduled deep work.
  Noticed avoidance of [person] conversation (day 4).
  Next Actions: Surface avoidance tomorrow if continues."

TIER 3: SESSION (WORKING.md)
───────────────────────────
• Cleared at session start
• Current conversation state, active frameworks, pending updates
• Never persisted — rebuilt fresh each session
• Example: "Active: failure-modes (freeze), career-work domain.
  Pending updates: career score 55→52, freeze count +1."
```

---

## Integration Points

Mirror Palace connects to external systems through two interfaces:

### Claude Code Integration
```
your-repo/
├── CLAUDE.md          ← Patched with continuous learning protocol
├── AGENTS.md          ← Patched with framework references
├── agents/
│   └── [archetype]/   ← Deployed agent with SOUL.md
└── mirror-palace/     ← Symlinked or referenced
    └── ...
```

### OpenClaw Integration
```
OpenClaw sources:
├── mirror-palace (registered as knowledge source)
├── gmail-connector (signals → framework matching)
├── calendar-connector (schedule → energy matching)
└── slack-connector (communication patterns)

OpenClaw agents:
├── morning-briefer (reads MP status + calendar + signals)
├── pattern-watcher (reads MP memory + communication data)
└── decision-coach (reads MP decisions + framework library)
```

---

## File Statistics

| Layer | Files | Purpose |
|-------|-------|---------|
| Knowledge (frameworks/) | 140 | 35 frameworks × 4 files each |
| Status (status/) | ~25 | 10 domains + people + decisions + indexes |
| Agents (agents/) | ~25 | 6 archetypes + templates + orchestration |
| Skills (skills/) | ~12 | scan + setup + references |
| Process (daily/) | 5 | Briefing, reflection, check-in, framework-of-day |
| Docs & Guides | ~15 | README, CLAUDE.md, guides, examples |
| **Total** | **~243** | |
