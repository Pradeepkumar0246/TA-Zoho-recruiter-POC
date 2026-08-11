# TASK-001: Design `integration_settings` table

## Task ID
TASK-001

## Task Title
Design `integration_settings` table

## Related Epic ID
EPIC-002 &mdash; Zoho Recruit Integration & Candidate Synchronization

## Related User Story ID
US-001 &mdash; View Zoho Recruit Connection Status

## Task Description
Design a table storing the Zoho Recruit connection state, OAuth token metadata (encrypted), last_checked_at, and status.

## Implementation Requirements
- Design a table storing the Zoho Recruit connection state, OAuth token metadata (encrypted), last_checked_at, and status.
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
A working, tested implementation of: **Design `integration_settings` table**, satisfying the relevant Acceptance Criteria of [US-001 &mdash; View Zoho Recruit Connection Status](../../US.md), ready for code review and merge.

---
*Task 1 of 7 for US-001 | Category: Backend / Database*
