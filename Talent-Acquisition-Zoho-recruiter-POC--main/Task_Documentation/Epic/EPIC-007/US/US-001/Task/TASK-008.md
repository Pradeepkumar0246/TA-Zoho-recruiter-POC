# TASK-008: Unit testing: shortlist creation endpoint

## Task ID
TASK-008

## Task Title
Unit testing: shortlist creation endpoint

## Related Epic ID
EPIC-007 &mdash; Shortlisting & Excel Export

## Related User Story ID
US-001 &mdash; Select Candidates from Ranking to Build Shortlist

## Task Description
Test creating a shortlist with candidates, and rejection when no candidates are provided.

## Implementation Requirements
- Test creating a shortlist with candidates, and rejection when no candidates are provided.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Testing
- Automated test implementation.
- Follow the project's existing test framework/conventions (e.g. pytest for backend, Jasmine/Karma or Jest for Angular).

## Dependencies
- Builds on TASK-007 within the same User Story where applicable.

## Validation / Testing Requirements
- Ensure tests are deterministic, isolated, and included in the CI test suite.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Unit testing: shortlist creation endpoint**, satisfying the relevant Acceptance Criteria of [US-001 &mdash; Select Candidates from Ranking to Build Shortlist](../../US.md), ready for code review and merge.

---
*Task 8 of 8 for US-001 | Category: Testing*
