# Scan Report Template

Output format for all scan modes. Fill in applicable sections based on what was detected. Remove sections that don't apply to the mode used.

---

## Usage

Copy the template below when generating a scan report. Replace bracketed placeholders with actual data.

---

## Template

### Header

```
# Scan Report — [Date]

**Mode:** [Documents / Conversation / Connected / Repo]
**Sources scanned:** [List of inputs]
**Scan duration:** [Time taken]
```

### Top 5 Recommended Frameworks

Ranked by signal strength and relevance.

| Rank | Framework | Category | Confidence | Key Signal(s) | Path |
|------|-----------|----------|-----------|---------------|------|
| 1 | [name] | [category] | High/Med/Low | [signals] | frameworks/category/name/ |
| 2 | [name] | [category] | High/Med/Low | [signals] | frameworks/category/name/ |
| 3 | [name] | [category] | High/Med/Low | [signals] | frameworks/category/name/ |
| 4 | [name] | [category] | High/Med/Low | [signals] | frameworks/category/name/ |
| 5 | [name] | [category] | High/Med/Low | [signals] | frameworks/category/name/ |

Include a "Why These Frameworks?" section with 2-3 sentences explaining the pattern across the top recommendations.

### Category Relevance Map

| Category | Relevance | Frameworks Triggered | Total Signals |
|----------|-----------|---------------------|---------------|
| Epistemology | Low/Med/High | | |
| Decision-Making | Low/Med/High | | |
| Behavioral Psychology | Low/Med/High | | |
| Cognitive Therapy | Low/Med/High | | |
| Executive Function | Low/Med/High | | |
| Continuous Learning | Low/Med/High | | |
| Self-Image | Low/Med/High | | |
| Trauma Recovery | Low/Med/High | | |
| Coaching | Low/Med/High | | |
| Influence Defense | Low/Med/High | | |
| Somatic | Low/Med/High | | |
| Personality Assessments | Low/Med/High | | |
| Pattern Detection | Low/Med/High | | |
| Anti-Patterns | Low/Med/High | | |

### Signals Detected

Group by signal category. For each signal:

| Signal | Source | Framework(s) | Confidence |
|--------|--------|-------------|-----------|
| [description] | [where detected] | [framework names] | [High/Med/Low] |

**Categories to use:** Task and Execution, Language and Self-Talk, Calendar and Time, Decision and Commitment, Relationship and Interpersonal, Energy and Motivation, Identity and Self-Concept, Financial, Spiritual.

### Domain Status Snapshot

| Domain | RYG | Score | Issues Found | Key Finding |
|--------|-----|-------|-------------|-------------|
| Money and Finances | | | | |
| Career and Work | | | | |
| Health and Fitness | | | | |
| Fun and Recreation | | | | |
| Environment | | | | |
| Community | | | | |
| Family and Friends | | | | |
| Partner and Love | | | | |
| Personal Growth | | | | |
| Spirituality | | | | |

### People Identified

| Name | Relationship | Domains | Support pct (est.) | Challenge pct (est.) | Record Created? |
|------|-------------|---------|-------------------|---------------------|-----------------|
| [name] | [type] | [codes] | [0-100] | [0-100] | Yes / Pending |

### Decisions Identified

| Title | Status | Domain | Reversibility | Age (days) | Record Created? |
|-------|--------|--------|---------------|------------|-----------------|
| [title] | [status] | [domain] | [one-way/two-way] | [days] | Yes / Pending |

### Suggested Agent Archetype

| Archetype | Why | Priority |
|-----------|-----|----------|
| [name] | [rationale from signals] | High / Med / Low |

Include a primary recommendation with 2-3 sentence rationale.

### Next Steps

1. Immediate — what to do right now
2. This week — what to address in 7 days
3. Ongoing — what to monitor over time
4. Frameworks to explore — which theory.md files to read for depth
5. Re-scan recommended — when to run again and in what mode

### Scan Metadata

- Frameworks in library: [total count]
- Frameworks matched: [count]
- Signals checked: [count from signal-patterns.md]
- Signals detected: [count]
- Coverage: [matched / total as percentage]
