# TASK-006: Implement POST /api/v1/auth/login endpoint

## Task ID
TASK-006

## Task Title
Implement POST /api/v1/auth/login endpoint

## Related Epic ID
EPIC-001 &mdash; Authentication & Access Control

## Related User Story ID
US-001 &mdash; Recruiter Login

## Task Description
Implement the FastAPI route that accepts LoginRequest, delegates to AuthService, and returns LoginResponse or a 401 error.

## Implementation Requirements
- Implement the FastAPI route that accepts LoginRequest, delegates to AuthService, and returns LoginResponse or a 401 error.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Backend / API
- FastAPI endpoint implementation.
- Follow REST conventions already used elsewhere in the API (`/api/v1/...`), return consistent error response shapes, and document the endpoint (OpenAPI docstring/response models).

## Dependencies
- Builds on TASK-005 within the same User Story where applicable.

## Validation / Testing Requirements
- Add/extend automated backend tests (unit and, where applicable, integration) covering success and failure paths.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Implement POST /api/v1/auth/login endpoint**, satisfying the relevant Acceptance Criteria of [US-001 &mdash; Recruiter Login](../../US.md), ready for code review and merge.

---
*Task 6 of 12 for US-001 | Category: Backend / API*
