# TASK-007: Frontend: Implement ShortlistService

## Task ID
TASK-007

## Task Title
Frontend: Implement ShortlistService

## Related Epic ID
EPIC-007 &mdash; Shortlisting & Excel Export

## Related User Story ID
US-001 &mdash; Select Candidates from Ranking to Build Shortlist

## Task Description
Implement the Angular service to persist the current selection as a shortlist via the API.

## Implementation Requirements
- Implement the Angular service to persist the current selection as a shortlist via the API.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Frontend / Service
- Angular service / API integration.
- Use RxJS observables for API calls; handle loading and error states consistently with other services in the app.

## Dependencies
- Builds on TASK-006 within the same User Story where applicable.

## Validation / Testing Requirements
- Add/extend Angular unit tests (component/service) covering the behavior introduced by this task.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Frontend: Implement ShortlistService**, satisfying the relevant Acceptance Criteria of [US-001 &mdash; Select Candidates from Ranking to Build Shortlist](../../US.md), ready for code review and merge.

---
*Task 7 of 8 for US-001 | Category: Frontend / Service*
