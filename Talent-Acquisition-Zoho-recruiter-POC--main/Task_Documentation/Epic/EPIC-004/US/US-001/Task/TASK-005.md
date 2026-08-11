# TASK-005: Frontend: Implement min/max experience validation

## Task ID
TASK-005

## Task Title
Frontend: Implement min/max experience validation

## Related Epic ID
EPIC-004 &mdash; Candidate Filtering & Saved Filter Templates

## Related User Story ID
US-001 &mdash; Toggle & Apply Basic Filters on the Candidates Page

## Task Description
Validate experience_min <= experience_max on the client before submitting.

## Implementation Requirements
- Validate experience_min <= experience_max on the client before submitting.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Frontend / Validation
- Angular reactive form validation.

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
A working, tested implementation of: **Frontend: Implement min/max experience validation**, satisfying the relevant Acceptance Criteria of [US-001 &mdash; Toggle & Apply Basic Filters on the Candidates Page](../../US.md), ready for code review and merge.

---
*Task 5 of 7 for US-001 | Category: Frontend / Validation*
