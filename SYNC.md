# Syncing Mirror Palace

Mirror Palace is designed to live in two copies. This document explains how they relate and how to keep them in sync safely.

---

## The Two Copies

```
+-------------------------------------------------+
|  PRIVATE COPY (your personal workspace)         |
|                                                 |
|  Contains:                                      |
|  - All frameworks (same as public)              |
|  - Filled-in status domains (YOUR data)         |
|  - People records (YOUR relationships)          |
|  - Decisions ledger (YOUR decisions)            |
|  - Personality results (YOUR profile)           |
|  - Agent memory files (observations of YOU)     |
|                                                 |
|  This is YOUR mirror. Private. Confidential.    |
+-----------------------+-------------------------+
                        |
                        |  frameworks, docs, guides
                        |  flow BOTH directions
                        |
                        |  personal data flows
                        |  ONE direction only: DOWN
                        |
+-----------------------v-------------------------+
|  PUBLIC REPO                                    |
|                                                 |
|  The open-source toolkit. Contains:             |
|  - All frameworks (theory, templates, prompts)  |
|  - Blank status templates                       |
|  - Empty people/decisions templates             |
|  - Docs, guides, examples                       |
|                                                 |
|  General purpose. No personal data. Ever.       |
+-------------------------------------------------+
```

---

## Initial Setup

If you're starting fresh:

```bash
# Clone the public repo into your private workspace
cd /path/to/your-private-workspace
git clone <public-repo-url> mirror-palace

# Or copy it as a standalone directory
cp -r /path/to/mirror-palace /path/to/your-private-workspace/mirror-palace
```

Then start filling in your status domains, people records, and templates. That data stays local.

---

## Pulling Updates from Public -> Private

When the public repo gets new frameworks, improved theory, or bug fixes:

```bash
cd /path/to/your-private-workspace/mirror-palace

# Add upstream remote (one-time)
git remote add upstream <public-repo-url>

# Fetch latest
git fetch upstream main
```

**To pull a specific new framework:**
```bash
git checkout upstream/main -- frameworks/NEW-CATEGORY/NEW-FRAMEWORK/
```

**To pull updated docs:**
```bash
git checkout upstream/main -- docs/ guides/ README.md CONTRIBUTING.md
```

**DO NOT do a full merge or rebase.** That would overwrite your filled-in status data, people records, and decisions with blank templates.

---

## Pushing Improvements from Private -> Public

When you improve a framework's theory, template, or agent-prompt and want to share it:

### Step 1: Verify the file is clean

```bash
# Check for personal data
grep -ri "YOUR_NAME\|specific-names\|real-addresses\|@gmail\|scores\|status:" path/to/file.md
```

If you use custom privacy hooks or local keyword blocklists for your own workspace, keep those rules in your private/local copy only. The public repo should stay generic so other users can add their own local boundaries.

Explicit rule: the shared/public version should contain generic hooks only. User-specific blocklists, private repo names, personal names, and internal workspace identifiers belong only in local copies.

### Step 2: Decide if it's safe

| File type | Safe to push? |
|-----------|--------------|
| `frameworks/*/theory.md` | Yes (if no personal examples added) |
| `frameworks/*/template.md` | Yes (if still blank/general) |
| `frameworks/*/agent-prompt.md` | Yes (if no personal calibration) |
| `frameworks/*/README.md` | Yes |
| `status/domains/*.md` | **NEVER** |
| `status/people/*.md` | **NEVER** |
| `status/decisions/*.md` | **NEVER** |
| `agents/*/MEMORY.md` | **NEVER** |
| `agents/*/WORKING.md` | **NEVER** |
| `docs/`, `guides/` | Usually yes |
| `daily/` templates | Yes (if blank) |

### Step 3: Push clean

Easiest method -- edit directly on GitHub or in a clean clone:

```bash
cd /tmp
git clone <public-repo-url> mp-clean
cp /path/to/your-workspace/mirror-palace/frameworks/category/name/theory.md mp-clean/frameworks/category/name/theory.md
cd mp-clean
git add -A
git commit -m "Improve [framework] theory"
git push origin main
rm -rf /tmp/mp-clean
```

---

## Files That NEVER Leave Private

These files contain personal data and must never be pushed to the public repo:

```
status/domains/*.md        (filled-in scores, notes, issues)
status/people/*.md         (names, dynamics, support%)
status/people/PEOPLE-INDEX.md  (real people listed)
status/decisions/*.md      (real decisions with context)
status/ISSUE-INDEX.md      (cross-domain personal issues)
agents/*/MEMORY.md         (agent observations about you)
agents/*/WORKING.md        (session state)
```

The **templates** and **_template/** versions of these files are safe -- they're blank.

---

## Quick Reference

| I want to... | Do this |
|--------------|---------|
| Get a new framework from public | `git checkout upstream/main -- frameworks/category/name/` |
| Update docs from public | `git checkout upstream/main -- docs/ guides/` |
| Share an improved framework | Copy clean file to a fresh clone, push from there |
| Add a new framework to public | Same as above -- write it general, push clean |
| Update my personal status | Edit in your private copy only. It stays there. |
