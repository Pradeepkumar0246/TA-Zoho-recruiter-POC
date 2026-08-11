# TASK-005: Implement Login request/response DTOs

## Task ID
TASK-005

## Task Title
Implement Login request/response DTOs

## Related Epic ID
EPIC-001 &mdash; Authentication & Access Control

## Related User Story ID
US-001 &mdash; Recruiter Login

## Task Description
Define Pydantic schemas `LoginRequest` (email, password, remember_me) and `LoginResponse` (access_token, token_type, expires_in, recruiter profile).

## Implementation Requirements
- Define Pydantic schemas `LoginRequest` (email, password, remember_me) and `LoginResponse` (access_token, token_type, expires_in, recruiter profile).
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Backend / DTO
- Request/response schema (Pydantic) implementation.

## Dependencies
- Builds on TASK-004 within the same User Story where applicable.

## Validation / Testing Requirements
- Add/extend automated backend tests (unit and, where applicable, integration) covering success and failure paths.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Implement Login request/response DTOs**, satisfying the relevant Acceptance Criteria of [US-001 &mdash; Recruiter Login](../../US.md), ready for code review and merge.

---
*Task 5 of 12 for US-001 | Category: Backend / DTO*
