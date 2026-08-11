# TASK-001: Design `sync_logs` table

## Task ID
TASK-001

## Task Title
Design `sync_logs` table

## Related Epic ID
EPIC-002 &mdash; Zoho Recruit Integration & Candidate Synchronization

## Related User Story ID
US-002 &mdash; Manually Trigger Candidate Sync from Zoho Recruit

## Task Description
Design a table capturing id, started_at, completed_at, status (running/completed/failed), records_fetched, records_new, records_updated, triggered_by (user id), error_message.

## Implementation Requirements
- Design a table capturing id, started_at, completed_at, status (running/completed/failed), records_fetched, records_new, records_updated, triggered_by (user id), error_message.
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
A working, tested implementation of: **Design `sync_logs` table**, satisfying the relevant Acceptance Criteria of [US-002 &mdash; Manually Trigger Candidate Sync from Zoho Recruit](../../US.md), ready for code review and merge.

---
*Task 1 of 10 for US-002 | Category: Backend / Database*
