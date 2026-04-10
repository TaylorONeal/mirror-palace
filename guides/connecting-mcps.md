# Connecting MCPs

How to connect Mirror Palace to external services via MCP (Model Context Protocol) servers for the scan skill's Connected mode.

## Overview

The scan skill's Connected mode can pull data from external services to populate your status system, people records, and framework assessments. Each connection requires explicit user opt-in.

## Available Connectors

### Email (Gmail MCP)

**What it reads:**
- Email frequency and response patterns
- Contact list and communication frequency
- Tone shifts across conversations
- Recurring topics and concerns

**What it populates:**
- `status/people/` — contact frequency, communication quality estimates
- `status/domains/career-work.md` — work-related communication patterns
- `status/domains/community.md` — social contact patterns

**Privacy note:** The scan reads metadata and patterns, not full email content. You can restrict to specific labels or date ranges.

### Calendar (Google Calendar MCP)

**What it reads:**
- Calendar density and free time ratio
- Event types (work, social, health, personal)
- Recurring commitments
- Time allocation across life domains

**What it populates:**
- `status/domains/` — activity distribution across domains
- Failure mode detection (over-commitment: calendar >80% packed)
- Time blindness data (available time vs task estimates)

### Messages (Slack MCP)

**What it reads:**
- Channel activity and response times
- Communication patterns with specific people
- Topic frequency
- Tone patterns

**What it populates:**
- `status/people/` — communication quality, contact frequency
- `status/domains/career-work.md` — work communication health
- `status/domains/community.md` — community engagement

## Setting Up a Connection

### Step 1: Ensure MCP Server is Running

Each service needs its own MCP server configured. Check your Claude Code or OpenClaw settings for MCP server configuration.

### Step 2: Grant Permission

When the scan skill enters Connected mode, it will ask:
```
Would you like to connect to [service]?
- What data range? (last 7 days / 30 days / 90 days)
- Any restrictions? (specific labels, channels, or contacts only)
```

Always grant the minimum access needed.

### Step 3: Review Results

The scan skill produces a report showing what it found and what it proposes to update. Review every proposed update before it's written.

## What the Scan Does NOT Do

- Read full email or message content without permission
- Store raw communication data
- Access services without explicit opt-in
- Write to external services (read-only)
- Share data between connected services

## Manual Alternative

If you prefer not to connect MCPs, you can populate the same data manually:
- Fill out people records based on your knowledge
- Update domain status files yourself
- Use the scan skill's Documents or Conversation mode instead
