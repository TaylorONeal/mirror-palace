# Claude Design Prompt — Add 3-5 Slides for Today's Confidence-Layer Updates

Copy/paste the prompt below into Claude Design.

```text
You are extending an existing slide deck (do not redesign prior slides). Create 3 to 5 new slides that append to the current deck and summarize today's repository updates.

PROJECT CONTEXT
- Repo: Mirror Palace
- Theme: framework-driven cognitive tooling with routing and agent orchestration
- Today's updates added a Confidence Language initiative and missing PRD coverage

NEW CONTENT TO COVER
1) Confidence Language Overlay PRD is now complete
   - File: docs/PRD-confidence-language-overlay.md
   - Positioning: post-reframing language layer (after cognitive/emotional synthesis, before final response)
   - Scope: scoring + rewrite variants + guardrails + rollout

2) Confidence language spec bundle exists
   - docs/confidence-language/confident-language-taxonomy.md
   - docs/confidence-language/confidence-scoring-system.md
   - docs/confidence-language/implementation-next-steps.md
   - docs/confidence-language/master-prompt-confidence-mds.md

3) PRD gap analysis completed and top 4 missing PRDs were created
   - docs/PRD-gap-analysis.md
   - docs/PRD-scan-skill-v2.md
   - docs/PRD-continuous-learning-status-engine.md
   - docs/PRD-agent-orchestration-memory-policy.md
   - docs/PRD-safety-privacy-data-governance.md

4) Roadmap now includes PRD coverage-gaps section
   - docs/ROADMAP.md

SLIDE OBJECTIVE
Make the audience quickly understand:
- what was added
- why it matters
- what gets built next

DESIGN CONSTRAINTS
- Keep visual style consistent with existing deck
- Prefer simple diagrams over dense text
- Max ~35 words per slide body
- Use clear section labels and strong hierarchy
- Include file-path callouts in small footer text on each slide

REQUIRED OUTPUT
Produce 4 slides (if 3-5 is needed, default to 4) with this structure:

Slide A — "Confidence Layer: What Changed"
- one-line architecture placement
- 3 bullets: taxonomy, scoring, implementation plan
- visual: mini pipeline strip with highlighted confidence layer

Slide B — "How the Confidence Engine Works"
- 5 scoring dimensions + 4 rewrite modes
- 1 guardrail line (distress-aware + context-calibrated)
- visual: scorecard + output chips

Slide C — "PRD Coverage Expansion"
- before/after count of PRDs
- list new 4 PRDs created
- visual: checklist or coverage matrix

Slide D — "Execution Roadmap (Next 30/60/90)"
- 30 days: scan v2 + contracts
- 60 days: status engine + orchestration policy
- 90 days: safety/governance implementation + metrics dashboard
- visual: horizontal timeline

TONE
- strategic, concise, implementation-focused
- no hype language

Return:
1) Final slide titles
2) Final text per slide
3) Suggested visual layout notes per slide
```

