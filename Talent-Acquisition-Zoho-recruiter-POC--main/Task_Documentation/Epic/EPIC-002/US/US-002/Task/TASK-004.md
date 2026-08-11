# TASK-004: Implement POST /api/v1/sync/candidates endpoint

## Task ID
TASK-004

## Task Title
Implement POST /api/v1/sync/candidates endpoint

## Related Epic ID
EPIC-002 &mdash; Zoho Recruit Integration & Candidate Synchronization

## Related User Story ID
US-002 &mdash; Manually Trigger Candidate Sync from Zoho Recruit

## Task Description
Implement the endpoint that triggers a new sync job, returning a sync_id for status tracking, and rejects the request if a sync is already running.

## Implementation Requirements
- Implement the endpoint that triggers a new sync job, returning a sync_id for status tracking, and rejects the request if a sync is already running.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Backend / API
- FastAPI endpoint implementation.
- Follow REST conventions already used elsewhere in the API (`/api/v1/...`), return consistent error response shapes, and document the endpoint (OpenAPI docstring/response models).

## Dependencies
- Builds on TASK-003 within the same User Story where applicable.

## Validation / Testing Requirements
- Add/extend automated backend tests (unit and, where applicable, integration) covering success and failure paths.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Implement POST /api/v1/sync/candidates endpoint**, satisfying the relevant Acceptance Criteria of [US-002 &mdash; Manually Trigger Candidate Sync from Zoho Recruit](../../US.md), ready for code review and merge.

---
*Task 4 of 10 for US-002 | Category: Backend / API*
