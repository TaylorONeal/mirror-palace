---
id: executive-function-model
category: executive-function
tags: [executive-function, adhd, cognitive-support, system-design, initiation, working-memory]
pairs-with: [adhd-design-rules, time-blindness, distortion-detection, linguistic-reframing]
complexity: high
agent-ready: true
use-when:
  - "Designing systems that must support users with executive function variability"
  - "User is struggling to start, sustain, or complete tasks"
  - "Analyzing why a productivity system is failing for its users"
  - "Building cognitive prosthetics — external systems that compensate for internal limitations"
avoid-when:
  - "The user's difficulty is motivational (they don't want to do it) rather than executive (they can't start)"
  - "Simple task list is sufficient and no cognitive support is needed"
  - "Over-engineering a system for users who do not need executive function support"
updates:
  - "status/domains/productivity.md"
  - "status/domains/mental-health.md"
---

# Executive Function Model

Eight core executive functions — inhibition, shift, emotional control, initiation, working memory, planning, organization, and self-monitoring — with specific system design strategies to support each. Treats executive function limitations as design problems, not character flaws. Introduces the cascade model: impairment in one function cascades downstream, so support must target the earliest failure point.

## Quick Reference
- **Best for**: Designing systems that compensate for executive function variability
- **Complexity**: High
- **Time to apply**: 30-60 minutes for full assessment; specific functions can be addressed individually
- **Pairs with**: ADHD Design Rules, Time Blindness, Distortion Detection, Linguistic Reframing

## Files
- `theory.md` -- Full explanation of eight executive functions and system support strategies
- `template.md` -- Executive function assessment worksheet with cascade analysis
- `agent-prompt.md` -- Prompt snippet for executive-function-aware agents
