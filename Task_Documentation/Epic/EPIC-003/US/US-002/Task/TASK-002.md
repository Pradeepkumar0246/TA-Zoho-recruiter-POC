# TASK-002: Add database indexes for search performance

## Task ID
TASK-002

## Task Title
Add database indexes for search performance

## Related Epic ID
EPIC-003 &mdash; Candidate Management & Profile View

## Related User Story ID
US-002 &mdash; Browse & Search Candidate List

## Task Description
Add PostgreSQL indexes (e.g. trigram/GIN indexes) on candidate name, company, and skills for fast keyword search.

## Implementation Requirements
- Add PostgreSQL indexes (e.g. trigram/GIN indexes) on candidate name, company, and skills for fast keyword search.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Backend / Database
- PostgreSQL schema change or migration.
- Create the change as a reversible Alembic migration; do not modify existing migrations already applied to any shared environment.

## Dependencies
- Builds on TASK-001 within the same User Story where applicable.

## Validation / Testing Requirements
- Verify the migration applies cleanly on a fresh PostgreSQL database and is reversible (`alembic downgrade`).

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Add database indexes for search performance**, satisfying the relevant Acceptance Criteria of [US-002 &mdash; Browse & Search Candidate List](../../US.md), ready for code review and merge.

---
*Task 2 of 7 for US-002 | Category: Backend / Database*
