# TASK-001: Design `shortlists` and `shortlist_candidates` tables

## Task ID
TASK-001

## Task Title
Design `shortlists` and `shortlist_candidates` tables

## Related Epic ID
EPIC-007 &mdash; Shortlisting & Excel Export

## Related User Story ID
US-001 &mdash; Select Candidates from Ranking to Build Shortlist

## Task Description
Design `shortlists` (id, recruiter_id, jd_id, created_at) and `shortlist_candidates` (shortlist_id, candidate_id, added_at) tables.

## Implementation Requirements
- Design `shortlists` (id, recruiter_id, jd_id, created_at) and `shortlist_candidates` (shortlist_id, candidate_id, added_at) tables.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Backend / Database
- PostgreSQL schema change or migration.
- Create the change as a reversible Alembic migration; do not modify existing migrations already applied to any shared environment.

## Dependencies
- None (first task for this User Story).

## Validation / Testing Requirements
- Verify the migration applies cleanly on a fresh PostgreSQL database and is reversible (`alembic downgrade`).

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Design `shortlists` and `shortlist_candidates` tables**, satisfying the relevant Acceptance Criteria of [US-001 &mdash; Select Candidates from Ranking to Build Shortlist](../../US.md), ready for code review and merge.

---
*Task 1 of 8 for US-001 | Category: Backend / Database*
