# TASK-001: Design `users` table schema in PostgreSQL

## Task ID
TASK-001

## Task Title
Design `users` table schema in PostgreSQL

## Related Epic ID
EPIC-001 &mdash; Authentication & Access Control

## Related User Story ID
US-001 &mdash; Recruiter Login

## Task Description
Design and create the `users` table to store recruiter accounts, including columns: id (PK, UUID), full_name, email (unique), password_hash, role, is_active, created_at, updated_at. Create the Alembic migration for this table.

## Implementation Requirements
- Design and create the `users` table to store recruiter accounts, including columns: id (PK, UUID), full_name, email (unique), password_hash, role, is_active, created_at, updated_at. Create the Alembic migration for this table.
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
A working, tested implementation of: **Design `users` table schema in PostgreSQL**, satisfying the relevant Acceptance Criteria of [US-001 &mdash; Recruiter Login](../../US.md), ready for code review and merge.

---
*Task 1 of 12 for US-001 | Category: Backend / Database*
