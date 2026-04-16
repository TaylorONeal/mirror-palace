---
name: create-keynote
version: 1.0.0
description: Generate a keynote-style PowerPoint presentation from any repository — visually rich, speaker-ready, conference-grade
trigger-patterns:
  - "create a keynote"
  - "make a presentation"
  - "build slides for this repo"
  - "generate a PowerPoint"
  - "make a deck"
  - "conference talk slides"
requires:
  - "python-pptx installed (pip install python-pptx)"
  - "Target repo must have a README or equivalent entry-point documentation"
outputs:
  - "{repo-root}/keynote.pptx"
  - "{repo-root}/scripts/generate-keynote.py (the script that built it, for iteration)"
---

# Create Keynote

## What This Skill Does

Takes any repository and generates a keynote-style PowerPoint presentation that covers the project from the perspective of a conference talk. The output is a visually rich, speaker-ready .pptx file with dark-theme slides, shape-based diagrams, and minimal text — designed for a 15-20 minute talk to a technical audience.

The skill explores the repo, identifies the narrative arc (problem, insight, architecture, differentiation), and builds slides that tell that story visually. It also outputs the Python generation script so the user can iterate on the slides.

## Modes

| Mode | Description | Input | Output |
|------|-------------|-------|--------|
| Auto | Explores the repo, determines content, builds everything | Repo path (or current directory) | .pptx + generation script |
| Guided | Asks the user about audience, emphasis, and tone before building | Repo path + user preferences | .pptx + generation script |
| Refresh | Re-runs the existing generation script after manual edits | Existing generate-keynote.py | Updated .pptx |

---

## Mode 1: Auto

**When to use:** You want a complete keynote generated with no back-and-forth. Good for a first draft.

### Step 1: Repo Discovery
**Action:** Read the repo to understand what it does, how it's structured, and what makes it interesting. Read in this order:
1. `README.md` (or equivalent top-level docs)
2. `CLAUDE.md`, `AGENTS.md`, or any project-level instructions
3. Top-level directory listing
4. Key subdirectories (explore 2-3 levels deep)
5. Any architecture docs, diagrams, or design documents

Extract:
- **What it is** (1 sentence)
- **What problem it solves** (the "before" state)
- **Core insight or thesis** (why this approach is different)
- **Architecture** (major components and how they connect)
- **Key stats** (number of modules, frameworks, endpoints, etc.)
- **Differentiation** (what makes this unlike alternatives)
- **3-5 "aha moments"** (things that would make an audience lean forward)

**Consent required:** No

### Step 2: Narrative Arc
**Action:** Structure the content into a speaker-ready narrative arc:

```
HOOK → PROBLEM → INSIGHT → WHAT IT IS → HOW IT WORKS → WHAT MAKES IT DIFFERENT → DEEP DIVE → VISION → CTA
```

Map the extracted content to this arc. Identify which components deserve their own slides vs. which should be combined. Target 15-18 slides total.

**Consent required:** No

### Step 3: Generate Script
**Action:** Write a Python script using `python-pptx` that generates the full presentation. Save it to `{repo-root}/scripts/generate-keynote.py`.

The script must follow the Design System below exactly. Each slide should use shapes, colored blocks, and layout logic — not just text boxes with bullet points.

**Consent required:** No

### Step 4: Run Script
**Action:** Execute the generation script:
```bash
pip install python-pptx  # if not already installed
python scripts/generate-keynote.py
```
Verify the output file exists and is non-empty.

**Consent required:** No

### Step 5: Report
**Action:** Tell the user:
- Where the .pptx file is
- How many slides were generated
- The slide outline (title of each slide)
- How to iterate: "Edit `scripts/generate-keynote.py` and re-run to regenerate"

**Consent required:** No

---

## Mode 2: Guided

**When to use:** The user wants to shape the presentation — specific audience, emphasis areas, or tone.

### Step 1: Audience & Tone
**Action:** Ask three questions (all at once):
1. Who is the audience? (engineers, product leaders, executives, general tech, mixed)
2. What should the emphasis be? (technical architecture, philosophy/vision, practical demos, problem/solution)
3. What tone? (inspirational keynote, technical deep-dive, workshop intro, pitch deck)

**Consent required:** No (gathering input)

### Step 2: Repo Discovery
**Action:** Same as Auto Mode Step 1, but filter and weight content based on audience answers.

### Step 3: Slide Plan
**Action:** Present the proposed slide outline (title + 1-line description for each slide) and ask for approval or changes before generating.

**Consent required:** Yes — approve slide plan before generating

### Step 4-6: Generate, Run, Report
**Action:** Same as Auto Mode Steps 3-5.

---

## Mode 3: Refresh

**When to use:** The user has edited `scripts/generate-keynote.py` and wants to regenerate.

### Step 1: Run Script
**Action:**
```bash
python scripts/generate-keynote.py
```

### Step 2: Report
**Action:** Confirm the .pptx was regenerated. Report file size and slide count.

---

## Design System

Every generated presentation must follow these visual standards.

### Layout
- **Format:** Widescreen 16:9 (13.333" x 7.5")
- **Margins:** 0.5" on all sides for content
- **Font:** Calibri throughout (fall back to Arial)

### Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| Background | `#0f0f23` | All slide backgrounds |
| Primary text | `#e2e8f0` | Body text, descriptions |
| Heading text | `#ffffff` | Slide titles, key phrases |
| Accent 1 — Teal | `#4ecdc4` | Primary highlights, diagram nodes |
| Accent 2 — Coral | `#ff6b6b` | Warnings, problems, contrast points |
| Accent 3 — Gold | `#ffd93d` | Stats, numbers, callouts |
| Accent 4 — Purple | `#6c5ce7` | Categories, secondary groupings |
| Accent 5 — Green | `#00b894` | Positive states, solutions, "after" |
| Card background | `#1a1a3e` | Shape fills for content cards |
| Subtle text | `#8892b0` | Captions, secondary info |

### Typography Scale

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Slide title | 36-44pt | Bold | White |
| Subtitle / tagline | 20-24pt | Normal | Light gray |
| Big statement | 28-36pt | Bold | White or Accent |
| Body text | 16-18pt | Normal | Light gray |
| Card title | 18-20pt | Bold | White |
| Card body | 14-16pt | Normal | Light gray |
| Caption / label | 12-14pt | Normal | Subtle text |
| Stat number | 48-72pt | Bold | Gold or Teal |

### Slide Types

The script should use these visual patterns (implemented with python-pptx shapes):

#### 1. Title Slide
- Project name in large bold text, centered vertically
- Tagline below in lighter weight
- Subtle accent line or shape as visual anchor
- Speaker name placeholder at bottom

#### 2. Big Statement Slide
- One sentence or phrase in 28-36pt bold, centered
- Optional subtitle below in 18pt
- Use for thesis statements, key insights, transitions

#### 3. Visual Grid / Card Layout
- 2-6 cards arranged in a grid (colored rounded rectangles)
- Each card: icon-placeholder or emoji, title, 1-2 line description
- Cards use `card background` fill with accent-colored left border or top stripe
- Use for: component overviews, feature lists, agent/module descriptions

#### 4. Comparison Slide
- Two columns with contrasting headers (Coral for "before/old", Green for "after/new")
- Rows of paired comparisons
- Visual divider between columns

#### 5. Pipeline / Flow Slide
- Horizontal chain of shapes connected by arrows
- Each shape is a rounded rectangle with a label
- Use accent colors to distinguish stages
- Use for: workflows, data flows, process descriptions

#### 6. Stats / Numbers Slide
- 3-4 large numbers in Gold/Teal with labels below
- Arranged horizontally
- Use for: key metrics, project stats

#### 7. Deep Dive Slide
- Left side: visual element (diagram, tree, or stacked cards)
- Right side: explanation text
- Use for: detailed feature walkthroughs

#### 8. Tree / Hierarchy Slide
- Indented category structure using shapes
- Parent categories in accent colors, children in card background
- Use for: project structure, taxonomy, framework categories

### Shape Construction Rules

- **Rounded rectangles:** Use `MSO_SHAPE.ROUNDED_RECTANGLE` for cards, nodes, and containers
- **Rectangles:** Use for accent stripes, dividers, and background blocks
- **Arrows:** Use `MSO_SHAPE.RIGHT_ARROW` or lines with arrowheads for flow diagrams
- **Ovals/circles:** Use for status indicators or icon placeholders
- **All shapes** should have no border (line fill = no fill) unless the border is intentional
- **Text in shapes:** Always vertically centered, left-padded with margin
- **Shadow:** No drop shadows — keep it flat and clean

### Slide Background
Every slide must have its background explicitly set to the Background color (`#0f0f23`). Do not rely on theme defaults.

### Content Rules
- **No bullet points** — use shapes, cards, or visual layouts instead
- **Maximum 40 words per slide** on Big Statement slides
- **Maximum 80 words per slide** on content slides (excluding cards)
- **Cards:** Max 20 words per card
- **Every slide must have at least one visual element** (shape, diagram, colored block)
- **White space is mandatory** — don't fill every pixel

---

## Slide Structure Template

Use this as the default structure. Adapt based on what the repo contains — add or remove slides as needed, but the narrative arc should always follow this flow:

| # | Slide | Type | Purpose |
|---|-------|------|---------|
| 1 | Title | Title Slide | Project name, tagline, speaker placeholder |
| 2 | The Problem | Big Statement | What pain or gap exists — make the audience feel it |
| 3 | The Insight | Big Statement | The core thesis — "why should I care" |
| 4 | What It Is | Stats + Grid | Overview with key numbers and component summary |
| 5 | Design Philosophy | Pipeline | Guiding principles as a visual progression |
| 6-9 | Core Components | Cards / Grid / Tree | 2-4 slides breaking down major building blocks |
| 10 | How It Works | Pipeline / Flow | Primary workflow: input to output |
| 11 | What Makes This Different | Comparison | Side-by-side vs conventional approaches |
| 12 | Deep Dive | Deep Dive | The single most impressive feature, walked through |
| 13 | Integration | Cards or Pipeline | How it fits into existing workflows |
| 14 | The Deeper Point | Big Statement | The bigger vision — why this matters beyond tech |
| 15 | Call to Action | Big Statement | What the audience should do next |

---

## Error Handling

| Failure | Recovery |
|---------|----------|
| python-pptx not installed | Run `pip install python-pptx` automatically |
| Repo has no README | Use directory structure and file contents to infer purpose — warn user that results may be less accurate |
| Repo is very small (<5 files) | Reduce to 10-12 slides, skip deep dive |
| Repo is very large (>500 files) | Focus on top-level architecture, don't explore every subdirectory |
| Script fails to run | Read the error, fix the script, retry once. If it fails again, report the error |
| Generated .pptx is empty or corrupt | Check script for shape positioning errors (overlapping, off-slide coordinates). Fix and retry |

## Output Format

```
## Keynote Generated

- **File:** {path-to-pptx}
- **Slides:** {count}
- **Script:** {path-to-script} (edit and re-run to iterate)

### Slide Outline
1. {Slide 1 title}
2. {Slide 2 title}
...

### Next Steps
- Open the .pptx in PowerPoint, Keynote, or Google Slides
- Edit `scripts/generate-keynote.py` to adjust content or styling
- Re-run with: `python scripts/generate-keynote.py`
```

## Cost Estimate
- Auto mode: ~5000-15000 tokens for repo exploration + ~3000-8000 tokens for script generation
- Guided mode: ~6000-18000 tokens (adds interview overhead)
- Refresh mode: ~500 tokens

## Related Skills
- **scan** — Can inform keynote content by surfacing which frameworks are most relevant
- **create-framework** — If the keynote is about mirror-palace specifically, this skill's output adds to the framework count and content available
