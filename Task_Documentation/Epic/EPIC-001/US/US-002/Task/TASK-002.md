# TASK-002: Implement authorization/RBAC checks

## Task ID
TASK-002

## Task Title
Implement authorization/RBAC checks

## Related Epic ID
EPIC-001 &mdash; Authentication & Access Control

## Related User Story ID
US-002 &mdash; Recruiter Logout & Session Handling

## Task Description
Implement role-based checks (Recruiter/Admin) reusable across protected endpoints.

## Implementation Requirements
- Implement role-based checks (Recruiter/Admin) reusable across protected endpoints.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Backend / Auth & RBAC
- Authentication/authorization implementation.
- Reuse the shared JWT auth dependency; do not implement a parallel authentication mechanism.

## Dependencies
- Builds on TASK-001 within the same User Story where applicable.

## Validation / Testing Requirements
- Manually verify the implemented behavior against the related Acceptance Criteria in the parent User Story.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Implement authorization/RBAC checks**, satisfying the relevant Acceptance Criteria of [US-002 &mdash; Recruiter Logout & Session Handling](../../US.md), ready for code review and merge.

---
*Task 2 of 7 for US-002 | Category: Backend / Auth & RBAC*
