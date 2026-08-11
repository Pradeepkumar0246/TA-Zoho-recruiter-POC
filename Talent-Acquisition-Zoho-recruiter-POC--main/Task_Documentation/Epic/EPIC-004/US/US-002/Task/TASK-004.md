# TASK-004: Frontend: Wire Apply Filters navigation

## Task ID
TASK-004

## Task Title
Frontend: Wire Apply Filters navigation

## Related Epic ID
EPIC-004 &mdash; Candidate Filtering & Saved Filter Templates

## Related User Story ID
US-002 &mdash; Apply Advanced Filters on the Filters Page

## Task Description
Navigate to the Candidates page with the full criteria set applied when 'Apply Filters' is clicked.

## Implementation Requirements
- Navigate to the Candidates page with the full criteria set applied when 'Apply Filters' is clicked.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Frontend / Service
- Angular service / API integration.
- Use RxJS observables for API calls; handle loading and error states consistently with other services in the app.

## Dependencies
- Builds on TASK-003 within the same User Story where applicable.

## Validation / Testing Requirements
- Add/extend Angular unit tests (component/service) covering the behavior introduced by this task.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Frontend: Wire Apply Filters navigation**, satisfying the relevant Acceptance Criteria of [US-002 &mdash; Apply Advanced Filters on the Filters Page](../../US.md), ready for code review and merge.

---
*Task 4 of 5 for US-002 | Category: Frontend / Service*
