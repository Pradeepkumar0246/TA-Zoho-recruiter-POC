# TASK-001: Implement JWT auth dependency/middleware

## Task ID
TASK-001

## Task Title
Implement JWT auth dependency/middleware

## Related Epic ID
EPIC-001 &mdash; Authentication & Access Control

## Related User Story ID
US-002 &mdash; Recruiter Logout & Session Handling

## Task Description
Implement a FastAPI dependency that validates the JWT on every protected route and injects the current recruiter into the request context.

## Implementation Requirements
- Implement a FastAPI dependency that validates the JWT on every protected route and injects the current recruiter into the request context.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Backend / Auth & RBAC
- Authentication/authorization implementation.
- Reuse the shared JWT auth dependency; do not implement a parallel authentication mechanism.

## Dependencies
- None (first task for this User Story).

## Validation / Testing Requirements
- Manually verify the implemented behavior against the related Acceptance Criteria in the parent User Story.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Implement JWT auth dependency/middleware**, satisfying the relevant Acceptance Criteria of [US-002 &mdash; Recruiter Logout & Session Handling](../../US.md), ready for code review and merge.

---
*Task 1 of 7 for US-002 | Category: Backend / Auth & RBAC*
