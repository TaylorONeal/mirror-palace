# OpenClaw Setup

How to integrate Mirror Palace with OpenClaw.

## Overview

OpenClaw uses a different configuration surface than Claude Code but the same underlying pattern. The key differences:
- Agent definitions live in OpenClaw's agent configuration format
- Skills are registered through OpenClaw's skill registry
- Memory and state files follow OpenClaw's workspace conventions

## Step 1: Clone Mirror Palace

```bash
git clone <mirror-palace-url>
```

Place it in your OpenClaw workspace or as a submodule in your project.

## Step 2: Register Frameworks

In your OpenClaw agent configuration, add a knowledge source reference:

```yaml
knowledge_sources:
  - name: mirror-palace
    path: ./mirror-palace/frameworks/
    index: ./mirror-palace/index.md
    type: framework-library
```

## Step 3: Deploy Agent Archetypes

Copy the desired archetype from `mirror-palace/agents/archetypes/{name}/` and adapt the SOUL.md to OpenClaw's agent definition format:

```yaml
agent:
  name: the-mirror
  role: Pattern detection and reflection
  personality: |
    [Contents of SOUL.md Personality section]
  capabilities:
    - [Contents of What You're Good At section]
  boundaries:
    - [Contents of What You Don't Do section]
  frameworks:
    - failure-modes
    - distortion-detection
    - awareness-as-intervention
```

## Step 4: Register Skills

Register the scan and setup skills in OpenClaw's skill registry:

```yaml
skills:
  - name: scan
    description: Analyze documents and recommend frameworks
    spec: ./mirror-palace/skills/scan/SKILL.md
  - name: setup
    description: Integrate mirror-palace into workspace
    spec: ./mirror-palace/skills/setup/SKILL.md
```

## Step 5: Enable Continuous Learning

Add to your OpenClaw workspace configuration:

```yaml
hooks:
  post_conversation:
    - check_status_updates
    - check_people_updates
    - check_decision_updates
```

The continuous learning protocol works the same way as in Claude Code — after each conversation, check if anything surfaced that should update status domains, people records, or the decisions ledger.

## Step 6: Daily Process

Configure the briefing template as a scheduled task:

```yaml
scheduled:
  morning_briefing:
    template: ./mirror-palace/daily/briefing-template.md
    schedule: "0 8 * * *"
    reads:
      - ./mirror-palace/status/
```
