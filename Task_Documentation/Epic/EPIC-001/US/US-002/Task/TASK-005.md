# TASK-005: Frontend: Implement HTTP auth interceptor

## Task ID
TASK-005

## Task Title
Frontend: Implement HTTP auth interceptor

## Related Epic ID
EPIC-001 &mdash; Authentication & Access Control

## Related User Story ID
US-002 &mdash; Recruiter Logout & Session Handling

## Task Description
Implement an HttpInterceptor that attaches the JWT to outgoing requests and handles 401 responses by clearing session state and redirecting to Sign In.

## Implementation Requirements
- Implement an HttpInterceptor that attaches the JWT to outgoing requests and handles 401 responses by clearing session state and redirecting to Sign In.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Frontend / Service
- Angular service / API integration.
- Use RxJS observables for API calls; handle loading and error states consistently with other services in the app.

## Dependencies
- Builds on TASK-004 within the same User Story where applicable.

## Validation / Testing Requirements
- Add/extend Angular unit tests (component/service) covering the behavior introduced by this task.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Frontend: Implement HTTP auth interceptor**, satisfying the relevant Acceptance Criteria of [US-002 &mdash; Recruiter Logout & Session Handling](../../US.md), ready for code review and merge.

---
*Task 5 of 7 for US-002 | Category: Frontend / Service*
