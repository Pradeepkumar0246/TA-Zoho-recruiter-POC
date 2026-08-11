# TASK-001: Implement GET /api/v1/saved-filters endpoint

## Task ID
TASK-001

## Task Title
Implement GET /api/v1/saved-filters endpoint

## Related Epic ID
EPIC-004 &mdash; Candidate Filtering & Saved Filter Templates

## Related User Story ID
US-005 &mdash; View & Apply Saved Filter Templates

## Task Description
Return all saved filters for the signed-in recruiter, most recent first.

## Implementation Requirements
- Return all saved filters for the signed-in recruiter, most recent first.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Backend / API
- FastAPI endpoint implementation.
- Follow REST conventions already used elsewhere in the API (`/api/v1/...`), return consistent error response shapes, and document the endpoint (OpenAPI docstring/response models).

## Dependencies
- None (first task for this User Story).

## Validation / Testing Requirements
- Add/extend automated backend tests (unit and, where applicable, integration) covering success and failure paths.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Implement GET /api/v1/saved-filters endpoint**, satisfying the relevant Acceptance Criteria of [US-005 &mdash; View & Apply Saved Filter Templates](../../US.md), ready for code review and merge.

---
*Task 1 of 5 for US-005 | Category: Backend / API*
