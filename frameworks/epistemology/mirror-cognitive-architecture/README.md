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
implementation-status: partial
updates:
  - "status/domains/personal-growth-learning.md"
  - "status/domains/career-work.md"
---

# Mirror Cognitive Architecture

A two-layer cognitive model for agents: an internal Thinker (three parallel threads for Goals, Reasoning, and Memory), a user-facing Talker, and a Cognitive Controller that integrates threads into a persistent internal narrative.

## Quick Reference
- **Best for**: Agent design, multi-turn reasoning, maintaining coherent context
- **Complexity**: High
- **Time to apply**: Ongoing (architecture, not one-time exercise)
- **Pairs with**: Concept Formation, Information Compression, Jobs to Be Done, Behavior Equation

## Implementation Status: Blueprint, Partially Realized

This framework describes a full cognitive architecture from the research literature. Be honest about which parts current agents can actually run:

**Available today (use these now):**
- The `agent-prompt.md` snippet works as a *reasoning discipline* — a single model approximating the three threads within each turn, not literally running them in parallel
- Mirror Palace's agent file conventions approximate the Memory thread: `MEMORY.md` (persistent), `WORKING.md` (session narrative), daily logs (temporal) — see `docs/ARCHITECTURE.md` § Memory Hierarchy
- The Cognitive Controller's compression step is implemented via the [information-compression](../information-compression/) priority hierarchy
- The Talker principles (confidence calibration, appropriate length, no raw-reasoning dumps) apply directly to any agent's output style

**Deeper work (aspirational — not yet supported by typical agent harnesses):**
- True between-turn reflection: the paper's inner monologue that continues *between* conversational turns
- Genuinely parallel Goals/Reasoning/Memory threads with a separate controller process
- A persistent first-person internal narrative maintained independently of the conversation transcript

Treat the aspirational parts as a design direction to grow into as agent runtimes evolve, not as something a prompt snippet delivers.

## Attribution

Based on the MIRROR (Modular Internal Reasoning, Reflection, Orchestration, and Response) architecture by **Nicole Hsing**. Paper: [MIRROR: Cognitive Inner Monologue Between Conversational Turns for Persistent Reflection and Reasoning in Conversational LLMs](https://arxiv.org/abs/2506.00430) (2025).

## Files
- `theory.md` — Full explanation of the concept
- `template.md` — Ready-to-fill starter
- `agent-prompt.md` — Prompt snippet for agents
