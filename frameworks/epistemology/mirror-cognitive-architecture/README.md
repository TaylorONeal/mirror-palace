---
id: mirror-cognitive-architecture
category: epistemology
tags: [agent-design, cognitive-architecture, reasoning, memory, communication]
pairs-with: [concept-formation, information-compression, jobs-to-be-done, behavior-equation]
complexity: high
agent-ready: true
use-when:
  - "Designing or configuring an AI agent"
  - "Agent responses feel shallow, verbose, or inconsistent"
  - "Context is being lost across turns"
  - "Need to separate internal reasoning from user communication"
  - "Agent fails to track commitments or goals over time"
avoid-when:
  - "Simple, single-turn interactions that need no context tracking"
  - "The agent's only job is retrieval, not reasoning"
updates:
  - "status/domains/intellectual.md"
  - "status/domains/career.md"
---

# Mirror Cognitive Architecture

A two-layer cognitive model for agents: an internal Thinker (three parallel threads for Goals, Reasoning, and Memory), a user-facing Talker, and a Cognitive Controller that integrates threads into a persistent internal narrative.

## Quick Reference
- **Best for**: Agent design, multi-turn reasoning, maintaining coherent context
- **Complexity**: High
- **Time to apply**: Ongoing (architecture, not one-time exercise)
- **Pairs with**: Concept Formation, Information Compression, Jobs to Be Done, Behavior Equation

## Attribution

Based on the MIRROR (Modular Internal Reasoning, Reflection, Orchestration, and Response) architecture by **Nicole Hsing**. Paper: [MIRROR: Cognitive Inner Monologue Between Conversational Turns for Persistent Reflection and Reasoning in Conversational LLMs](https://arxiv.org/abs/2506.00430) (2025).

## Files
- `theory.md` — Full explanation of the concept
- `template.md` — Ready-to-fill starter
- `agent-prompt.md` — Prompt snippet for agents
