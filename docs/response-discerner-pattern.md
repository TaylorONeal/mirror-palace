# Response Discerner Pattern

## Why this matters
Many agent systems jump too quickly from signal detection to draft generation.
That creates a lot of unnecessary output and misses the more important question:

**What kind of response object is actually needed?**

Sometimes the answer is a direct reply.
Sometimes it is a reusable clarification, a troubleshooting checklist, a system fix, a prep note, or suppression.

## Core idea
Before drafting anything, classify the response need.

Useful response categories:
- one-off clarification
- reusable clarification
- workflow troubleshooting
- expectation calibration
- prep only
- system / instruction fix
- suppression / no response

## Inputs to inspect
- Is this one-off or repeating?
- Is the friction conceptual, procedural, relational, or administrative?
- Has a similar response already been given?
- Would a reusable artifact outperform another one-off reply?
- Is the best move actually a system fix upstream?

## General lesson
Drafting is not always the highest-leverage response.
A good system should decide the response shape before generating wording.

## Where it helps
- support operations
- teaching/class-support
- inbox triage
- coaching workflows
- customer support agents
- proactive daily briefings
