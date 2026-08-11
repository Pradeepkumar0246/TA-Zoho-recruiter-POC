# TASK-001: Design `candidates` table schema

## Task ID
TASK-001

## Task Title
Design `candidates` table schema

## Related Epic ID
EPIC-002 &mdash; Zoho Recruit Integration & Candidate Synchronization

## Related User Story ID
US-003 &mdash; Normalize & Persist Synced Candidate Data

## Task Description
Design the full candidates table: identity (id, zoho_candidate_id), contact (email, phone), professional (experience, relevant_experience, current_company, current_location, preferred_location, notice_period), skills (array/join table), education (degree, normalized_degree), compensation (current_ctc, expected_ctc), status, match metadata, source, timestamps.

## Implementation Requirements
- Design the full candidates table: identity (id, zoho_candidate_id), contact (email, phone), professional (experience, relevant_experience, current_company, current_location, preferred_location, notice_period), skills (array/join table), education (degree, normalized_degree), compensation (current_ctc, expected_ctc), status, match metadata, source, timestamps.
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
A working, tested implementation of: **Design `candidates` table schema**, satisfying the relevant Acceptance Criteria of [US-003 &mdash; Normalize & Persist Synced Candidate Data](../../US.md), ready for code review and merge.

---
*Task 1 of 7 for US-003 | Category: Backend / Database*
