# TASK-002: Design normalization mapping table

## Task ID
TASK-002

## Task Title
Design normalization mapping table

## Related Epic ID
EPIC-002 &mdash; Zoho Recruit Integration & Candidate Synchronization

## Related User Story ID
US-003 &mdash; Normalize & Persist Synced Candidate Data

## Task Description
Design a `normalization_rules` table (field_type, raw_value, normalized_value) to drive the normalization engine.

## Implementation Requirements
- Design a `normalization_rules` table (field_type, raw_value, normalized_value) to drive the normalization engine.
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
A working, tested implementation of: **Design normalization mapping table**, satisfying the relevant Acceptance Criteria of [US-003 &mdash; Normalize & Persist Synced Candidate Data](../../US.md), ready for code review and merge.

---
*Task 2 of 7 for US-003 | Category: Backend / Database*
