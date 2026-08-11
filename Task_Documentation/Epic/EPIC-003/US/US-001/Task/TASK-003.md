# TASK-003: Design `activity_log` table

## Task ID
TASK-003

## Task Title
Design `activity_log` table

## Related Epic ID
EPIC-003 &mdash; Candidate Management & Profile View

## Related User Story ID
US-001 &mdash; View Recruitment Dashboard Overview

## Task Description
Design a lightweight activity log table (id, actor_id, action_type, description, occurred_at) populated by sync, filter, shortlist, and export actions.

## Implementation Requirements
- Design a lightweight activity log table (id, actor_id, action_type, description, occurred_at) populated by sync, filter, shortlist, and export actions.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Backend / Database
- PostgreSQL schema change or migration.
- Create the change as a reversible Alembic migration; do not modify existing migrations already applied to any shared environment.

## Dependencies
- Builds on TASK-002 within the same User Story where applicable.

## Validation / Testing Requirements
- Verify the migration applies cleanly on a fresh PostgreSQL database and is reversible (`alembic downgrade`).

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Design `activity_log` table**, satisfying the relevant Acceptance Criteria of [US-001 &mdash; View Recruitment Dashboard Overview](../../US.md), ready for code review and merge.

---
*Task 3 of 6 for US-001 | Category: Backend / Database*
