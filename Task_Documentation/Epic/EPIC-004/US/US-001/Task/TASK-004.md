# TASK-004: Frontend: Implement filter form state & apply action

## Task ID
TASK-004

## Task Title
Frontend: Implement filter form state & apply action

## Related Epic ID
EPIC-004 &mdash; Candidate Filtering & Saved Filter Templates

## Related User Story ID
US-001 &mdash; Toggle & Apply Basic Filters on the Candidates Page

## Task Description
Implement reactive form state for basic filters and wire 'Apply Filters' to refresh the candidate list and active-filter chips.

## Implementation Requirements
- Implement reactive form state for basic filters and wire 'Apply Filters' to refresh the candidate list and active-filter chips.
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
A working, tested implementation of: **Frontend: Implement filter form state & apply action**, satisfying the relevant Acceptance Criteria of [US-001 &mdash; Toggle & Apply Basic Filters on the Candidates Page](../../US.md), ready for code review and merge.

---
*Task 4 of 7 for US-001 | Category: Frontend / Service*
