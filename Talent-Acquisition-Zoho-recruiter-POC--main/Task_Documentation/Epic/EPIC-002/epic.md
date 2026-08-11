# EPIC-002: Zoho Recruit Integration & Candidate Synchronization

## Epic ID
EPIC-002

## Epic Name / Title
Zoho Recruit Integration & Candidate Synchronization

## Epic Description
Integrate with Zoho Recruit as a read-only source of candidate data, allowing recruiters to trigger a sync that fetches and normalizes candidate records into the application's own database.

## Business Objective
Provide a reliable, auditable, read-only synchronization pipeline that keeps local candidate data current with Zoho Recruit without ever writing back to Zoho.

## Scope
Covers Zoho Recruit connection status, manually-triggered candidate sync, normalization of raw candidate fields, and sync result reporting. Excludes any write-back/update operations to Zoho Recruit.

## Key Functional Requirements
- Display live Zoho Recruit connection status in the application header and Dashboard.
- Allow a recruiter to manually trigger a candidate sync from Zoho Recruit.
- Normalize inconsistent raw values (skills casing, location naming, notice period phrasing, degree naming) into standard values during sync.
- Persist synced candidates and present a sync summary (records retrieved, new/updated, normalized).

## Expected Outcome
Candidate data in PostgreSQL is kept in sync with Zoho Recruit on demand, with normalized, consistently formatted fields ready for filtering and ranking.

## Related User Stories
- **US-001** &mdash; View Zoho Recruit Connection Status
- **US-002** &mdash; Manually Trigger Candidate Sync from Zoho Recruit
- **US-003** &mdash; Normalize & Persist Synced Candidate Data
- **US-004** &mdash; View Sync Summary & Normalization Results

---
*Target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL*
