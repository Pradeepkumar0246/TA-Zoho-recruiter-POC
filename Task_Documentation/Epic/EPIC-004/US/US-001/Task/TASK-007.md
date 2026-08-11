# TASK-007: Frontend unit testing: filter panel toggle & apply

## Task ID
TASK-007

## Task Title
Frontend unit testing: filter panel toggle & apply

## Related Epic ID
EPIC-004 &mdash; Candidate Filtering & Saved Filter Templates

## Related User Story ID
US-001 &mdash; Toggle & Apply Basic Filters on the Candidates Page

## Task Description
Test panel visibility toggling and that 'Apply Filters' triggers the expected API call with correct params.

## Implementation Requirements
- Test panel visibility toggling and that 'Apply Filters' triggers the expected API call with correct params.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Testing
- Automated test implementation.
- Follow the project's existing test framework/conventions (e.g. pytest for backend, Jasmine/Karma or Jest for Angular).

## Dependencies
- Builds on TASK-006 within the same User Story where applicable.

## Validation / Testing Requirements
- Ensure tests are deterministic, isolated, and included in the CI test suite.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Frontend unit testing: filter panel toggle & apply**, satisfying the relevant Acceptance Criteria of [US-001 &mdash; Toggle & Apply Basic Filters on the Candidates Page](../../US.md), ready for code review and merge.

---
*Task 7 of 7 for US-001 | Category: Testing*
