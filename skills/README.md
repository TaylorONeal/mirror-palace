# Skills

Skills are persistent operating procedures that extend what agents can do. Where agent archetypes define *who* does the work (personality, voice, frameworks), skills define *how* specific tasks get done (steps, modes, output formats).

## How the Skill System Works

Each skill lives in its own directory under `skills/` and contains:

```
skills/
  _template/              ← Template for creating new skills
    SKILL.md
  scan/                   ← Analyze inputs to recommend frameworks
    SKILL.md
    references/
      signal-patterns.md
      mcp-connectors.md
      report-template.md
  setup/                  ← Integrate mirror-palace into a repo
    SKILL.md
    references/
      integration-checklist.md
      agents-md-patch.md
      claude-md-patch.md
      openclaw-setup.md
  create-framework/       ← Scaffold a new framework from a concept
    SKILL.md
```

## SKILL.md Structure

Every skill has a `SKILL.md` file with:

1. **YAML front-matter** — Name, description, and metadata
2. **Task description** — What the skill does and when to use it
3. **Modes** (if applicable) — Different ways to run the skill
4. **Steps** — The procedure to follow
5. **Output format** — What the skill produces

## Invoking a Skill

Skills are invoked by agents or by direct request. An agent might invoke the scan skill when it detects that framework coverage is incomplete. A user might invoke the setup skill when integrating mirror-palace into a new project.

Skills are not agents — they don't have personality, voice, or memory. They're procedures. Any agent can run any skill. The agent's personality shapes how the skill's output is communicated, but the skill's procedure is followed consistently regardless of which agent runs it.

## Creating New Skills

Copy `skills/_template/SKILL.md` and fill in the sections. A good skill has:

- A clear, bounded scope (one job, done well)
- Defined inputs and outputs
- Steps that can be followed mechanically
- Modes for different contexts (if the skill applies in multiple ways)

## Built-In Skills

### scan
Analyze documents, conversations, connected services, or existing repos to identify which frameworks apply, detect signals, and populate the status system. Four modes: Documents, Conversation, Connected, Repo.

### setup
Integrate mirror-palace into an existing project. Patches AGENTS.md and CLAUDE.md, sets up framework references, configures agents, and verifies the integration. User consent required at every step.

### create-framework
Scaffold a complete new framework from a concept, paper, book, or raw idea. Generates all four files (README.md, theory.md, template.md, agent-prompt.md), validates quality and distinctness against existing frameworks, and updates index.md. Two modes: Guided (interactive) and Direct (one-shot from source material).
