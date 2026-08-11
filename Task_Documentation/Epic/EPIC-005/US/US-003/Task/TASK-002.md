# TASK-002: Implement review authorization check

## Task ID
TASK-002

## Task Title
Implement review authorization check

## Related Epic ID
EPIC-005 &mdash; Duplicate Candidate Detection & Review

## Related User Story ID
US-003 &mdash; Mark Duplicate Candidate as Reviewed

## Task Description
Ensure only authenticated recruiters can update review status (any recruiter, per current business rule).

## Implementation Requirements
- Ensure only authenticated recruiters can update review status (any recruiter, per current business rule).
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
A working, tested implementation of: **Implement review authorization check**, satisfying the relevant Acceptance Criteria of [US-003 &mdash; Mark Duplicate Candidate as Reviewed](../../US.md), ready for code review and merge.

---
*Task 2 of 5 for US-003 | Category: Backend / Auth & RBAC*
