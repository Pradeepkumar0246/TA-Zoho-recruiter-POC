# TASK-007: Frontend: Implement SavedFilterService (create)

## Task ID
TASK-007

## Task Title
Frontend: Implement SavedFilterService (create)

## Related Epic ID
EPIC-004 &mdash; Candidate Filtering & Saved Filter Templates

## Related User Story ID
US-004 &mdash; Save Filter as Named Template with JD

## Task Description
Implement the Angular service method to submit the save-filter request and refresh the saved list on success.

## Implementation Requirements
- Implement the Angular service method to submit the save-filter request and refresh the saved list on success.
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
A working, tested implementation of: **Frontend: Implement SavedFilterService (create)**, satisfying the relevant Acceptance Criteria of [US-004 &mdash; Save Filter as Named Template with JD](../../US.md), ready for code review and merge.

---
*Task 7 of 8 for US-004 | Category: Frontend / Service*
