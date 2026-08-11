# TASK-001: Design `duplicate_reviews` table

## Task ID
TASK-001

## Task Title
Design `duplicate_reviews` table

## Related Epic ID
EPIC-005 &mdash; Duplicate Candidate Detection & Review

## Related User Story ID
US-001 &mdash; Detect Possible Duplicate Candidates

## Task Description
Design table: id, candidate_id (FK), matched_candidate_id (FK), match_basis, confidence, jd_id (FK, nullable), status (pending/reviewed), reviewed_by, reviewed_at, created_at.

## Implementation Requirements
- Design table: id, candidate_id (FK), matched_candidate_id (FK), match_basis, confidence, jd_id (FK, nullable), status (pending/reviewed), reviewed_by, reviewed_at, created_at.
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
A working, tested implementation of: **Design `duplicate_reviews` table**, satisfying the relevant Acceptance Criteria of [US-001 &mdash; Detect Possible Duplicate Candidates](../../US.md), ready for code review and merge.

---
*Task 1 of 4 for US-001 | Category: Backend / Database*
