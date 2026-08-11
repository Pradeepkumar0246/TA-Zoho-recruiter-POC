# TASK-009: Frontend: Implement AuthService (Angular)

## Task ID
TASK-009

## Task Title
Frontend: Implement AuthService (Angular)

## Related Epic ID
EPIC-001 &mdash; Authentication & Access Control

## Related User Story ID
US-001 &mdash; Recruiter Login

## Task Description
Implement an Angular `AuthService` with a `login()` method calling the login API, storing the JWT (memory + optional persistent storage when 'remember me' is checked), and exposing the current-user state via an observable.

## Implementation Requirements
- Implement an Angular `AuthService` with a `login()` method calling the login API, storing the JWT (memory + optional persistent storage when 'remember me' is checked), and exposing the current-user state via an observable.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Frontend / Service
- Angular service / API integration.
- Use RxJS observables for API calls; handle loading and error states consistently with other services in the app.

## Dependencies
- Builds on TASK-008 within the same User Story where applicable.

## Validation / Testing Requirements
- Add/extend Angular unit tests (component/service) covering the behavior introduced by this task.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Frontend: Implement AuthService (Angular)**, satisfying the relevant Acceptance Criteria of [US-001 &mdash; Recruiter Login](../../US.md), ready for code review and merge.

---
*Task 9 of 12 for US-001 | Category: Frontend / Service*
