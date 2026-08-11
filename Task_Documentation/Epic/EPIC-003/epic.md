# EPIC-003: Candidate Management & Profile View

## Epic ID
EPIC-003

## Epic Name / Title
Candidate Management & Profile View

## Epic Description
Give recruiters a central place to see recruitment KPIs and to browse and inspect individual candidate profiles sourced from Zoho Recruit.

## Business Objective
Provide fast, searchable visibility into the full candidate pool and detailed, read-only candidate profiles.

## Scope
Covers the Dashboard overview, the Candidates list/search screen, and the Candidate Details screen. Excludes candidate creation/editing (data is read-only, sourced from Zoho Recruit).

## Key Functional Requirements
- Dashboard summarizing total candidates, last sync time, shortlist size, and saved filter count, plus quick actions and recent activity.
- Candidates list with keyword search and pagination.
- Read-only candidate profile detail view including normalized data.

## Expected Outcome
Recruiters can quickly orient themselves, find candidates, and drill into full candidate detail without ever risking modification of source-of-truth Zoho data.

## Related User Stories
- **US-001** &mdash; View Recruitment Dashboard Overview
- **US-002** &mdash; Browse & Search Candidate List
- **US-003** &mdash; View Candidate Profile Details

---
*Target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL*
