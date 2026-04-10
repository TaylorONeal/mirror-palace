# Customizing Agent Archetypes

## Starting from an Archetype

1. Pick an archetype from `agents/archetypes/` that matches your need
2. Copy the folder to your repo's agents directory
3. Customize each file for your context

## What to Customize

### SOUL.md — Identity

The archetype's SOUL.md is generalized. Make it yours:

- **Personality**: Keep the core stance, but adjust the voice. If the archetype is too formal or too casual for your style, change it.
- **What You're Good At**: Add domain-specific capabilities. If deploying The Tracker for a specific project type, add those specifics.
- **What You Don't Do**: Add your own boundaries. What should this agent never touch?
- **Frameworks Applied**: Add or remove frameworks based on what's relevant. Not every framework in the archetype's list will apply to your situation.
- **Voice**: Include 1-2 examples of how this agent should write in YOUR context.

### MEMORY.md — Context

This starts mostly empty. Populate it:

- **About the User**: What does the agent need to know about you? Work style, preferences, known sensitivities, communication preferences.
- **Frameworks in Use**: Which frameworks from mirror-palace are active for this agent?
- **Known Patterns**: As the agent learns, it records patterns here. Start with anything you already know about yourself.

### HEARTBEAT.md — Schedule

Adapt the schedule to your life:

- **Frequency**: Daily? Twice weekly? Weekly? Match it to the agent's role.
- **Timing**: When should this agent run? Morning briefer needs to be early. The Mirror works better weekly.
- **Protocol**: Adjust the step-by-step to match your data sources.
- **Cost Guard**: Set limits on when to skip (e.g., if nothing has changed, don't run).

### WORKING.md — State

This file is ephemeral — updated each session:
- **Current Focus**: What is the agent paying attention to right now?
- **Observations Queue**: Things noticed but not yet processed.
- **Pending Actions**: What the agent plans to do next.

## Combining Archetypes

You can deploy multiple archetypes simultaneously. Recommended combinations:

| Combination | Use Case |
|-------------|----------|
| Mirror + Briefer | Self-awareness + daily prioritization |
| Briefer + Tracker | Prioritization + accountability |
| Strategist + Operator | Goal management + domain execution |
| Mirror + Strategist | Pattern awareness + strategic planning |
| All six | Full personal operating system |

When running multiple agents, use the orchestration docs:
- `agents/orchestration/coordination.md` — how agents share state
- `agents/orchestration/memory-hierarchy.md` — how memory is structured across agents
- `agents/orchestration/heartbeat-patterns.md` — scheduling and cost management

## Creating a New Archetype

If no existing archetype fits:

1. Copy `agents/_template/` 
2. Define the role and personality
3. Choose which frameworks it applies
4. Set up the schedule
5. Test it for a week before committing to the configuration
