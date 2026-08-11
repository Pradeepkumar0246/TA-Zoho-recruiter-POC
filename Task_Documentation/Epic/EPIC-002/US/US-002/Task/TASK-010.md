# TASK-010: Integration testing: sync endpoint with mocked Zoho API

## Task ID
TASK-010

## Task Title
Integration testing: sync endpoint with mocked Zoho API

## Related Epic ID
EPIC-002 &mdash; Zoho Recruit Integration & Candidate Synchronization

## Related User Story ID
US-002 &mdash; Manually Trigger Candidate Sync from Zoho Recruit

## Task Description
Write integration tests simulating successful sync, partial failure, and concurrent-sync rejection using a mocked Zoho API client.

## Implementation Requirements
- Write integration tests simulating successful sync, partial failure, and concurrent-sync rejection using a mocked Zoho API client.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Testing
- Automated test implementation.
- Follow the project's existing test framework/conventions (e.g. pytest for backend, Jasmine/Karma or Jest for Angular).

## Dependencies
- Builds on TASK-009 within the same User Story where applicable.

## Validation / Testing Requirements
- Ensure tests are deterministic, isolated, and included in the CI test suite.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Integration testing: sync endpoint with mocked Zoho API**, satisfying the relevant Acceptance Criteria of [US-002 &mdash; Manually Trigger Candidate Sync from Zoho Recruit](../../US.md), ready for code review and merge.

---
*Task 10 of 10 for US-002 | Category: Testing*
