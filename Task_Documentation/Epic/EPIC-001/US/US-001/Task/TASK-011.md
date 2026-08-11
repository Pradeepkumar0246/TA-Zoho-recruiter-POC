# TASK-011: Unit testing: AuthService & login endpoint (backend)

## Task ID
TASK-011

## Task Title
Unit testing: AuthService & login endpoint (backend)

## Related Epic ID
EPIC-001 &mdash; Authentication & Access Control

## Related User Story ID
US-001 &mdash; Recruiter Login

## Task Description
Write unit tests covering successful login, wrong password, unknown email, and inactive account scenarios.

## Implementation Requirements
- Write unit tests covering successful login, wrong password, unknown email, and inactive account scenarios.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Testing
- Automated test implementation.
- Follow the project's existing test framework/conventions (e.g. pytest for backend, Jasmine/Karma or Jest for Angular).

## Dependencies
- Builds on TASK-010 within the same User Story where applicable.

## Validation / Testing Requirements
- Ensure tests are deterministic, isolated, and included in the CI test suite.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Unit testing: AuthService & login endpoint (backend)**, satisfying the relevant Acceptance Criteria of [US-001 &mdash; Recruiter Login](../../US.md), ready for code review and merge.

---
*Task 11 of 12 for US-001 | Category: Testing*
