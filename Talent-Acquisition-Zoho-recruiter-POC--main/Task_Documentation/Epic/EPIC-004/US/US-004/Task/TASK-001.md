# TASK-001: Design `saved_filters` table

## Task ID
TASK-001

## Task Title
Design `saved_filters` table

## Related Epic ID
EPIC-004 &mdash; Candidate Filtering & Saved Filter Templates

## Related User Story ID
US-004 &mdash; Save Filter as Named Template with JD

## Task Description
Design table: id, recruiter_id (FK), name, jd_id (FK, nullable), filter_criteria (JSONB), created_at, updated_at.

## Implementation Requirements
- Design table: id, recruiter_id (FK), name, jd_id (FK, nullable), filter_criteria (JSONB), created_at, updated_at.
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
A working, tested implementation of: **Design `saved_filters` table**, satisfying the relevant Acceptance Criteria of [US-004 &mdash; Save Filter as Named Template with JD](../../US.md), ready for code review and merge.

---
*Task 1 of 8 for US-004 | Category: Backend / Database*
