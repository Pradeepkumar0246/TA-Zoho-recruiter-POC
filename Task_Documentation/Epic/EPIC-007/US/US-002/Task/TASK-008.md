# TASK-008: Integration testing: ranking-to-download flow

## Task ID
TASK-008

## Task Title
Integration testing: ranking-to-download flow

## Related Epic ID
EPIC-007 &mdash; Shortlisting & Excel Export

## Related User Story ID
US-002 &mdash; Download Shortlist as Excel (.xlsx)

## Task Description
Write an end-to-end integration test covering selecting candidates on Ranking through to receiving a valid Excel file.

## Implementation Requirements
- Write an end-to-end integration test covering selecting candidates on Ranking through to receiving a valid Excel file.
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
A working, tested implementation of: **Integration testing: ranking-to-download flow**, satisfying the relevant Acceptance Criteria of [US-002 &mdash; Download Shortlist as Excel (.xlsx)](../../US.md), ready for code review and merge.

---
*Task 8 of 8 for US-002 | Category: Testing*
