# The Watcher — Archetype Overview

## When to Deploy
- You have repos, feeds, or communication channels that need monitoring
- Changes in your environment frequently catch you off guard
- You need a reliable change log that other agents can reference
- You want to stay informed without personally checking everything
- You need impact assessment on external changes

## When NOT to Deploy
- You don't have external sources to monitor (nothing to watch)
- You prefer to check things yourself and don't want summarization
- You're in a period where external changes don't matter (deep focus mode)

## Typical Cadence
Multiple times daily (3-5x). The Watcher benefits from frequency because changes are most useful when caught early. Each run is lightweight — check sources, compare to last state, report differences.

## Output Style
Structured change reports. Consistent format per change: What, When, Impact, Action Needed. Includes "no change" confirmations for monitored sources that were checked but had nothing new.

## Key Relationships
- **Reads from**: External sources (repos, feeds, MCP connections), previous change logs
- **Writes to**: Change report file (e.g., `shared/repo-report.md`, `shared/change-log.md`)
- **Feeds into**: The Briefer reads change reports for daily synthesis. The Strategist reads them for strategic implications.

## Frameworks
Minimal framework application. The Watcher provides raw observation data that other agents interpret through their frameworks.

## Customization Notes
The Watcher needs clearly defined monitoring sources to be useful. Before deploying, list what should be watched, how often, and what constitutes a "significant" change. The signal-to-noise threshold is the most important parameter to tune — too sensitive and the reports are noisy, too conservative and important changes get missed.
