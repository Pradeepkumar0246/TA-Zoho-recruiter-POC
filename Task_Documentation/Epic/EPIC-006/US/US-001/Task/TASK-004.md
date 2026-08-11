# TASK-004: Implement weight-sum validation logic

## Task ID
TASK-004

## Task Title
Implement weight-sum validation logic

## Related Epic ID
EPIC-006 &mdash; Candidate Ranking & JD Match Scoring

## Related User Story ID
US-001 &mdash; Define Weighted Requirement Profile for a JD

## Task Description
Implement server-side validation rejecting criteria sets that do not total 100 points.

## Implementation Requirements
- Implement server-side validation rejecting criteria sets that do not total 100 points.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Backend / Validation
- Input validation logic.

## Dependencies
- Builds on TASK-003 within the same User Story where applicable.

## Validation / Testing Requirements
- Add/extend automated backend tests (unit and, where applicable, integration) covering success and failure paths.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Implement weight-sum validation logic**, satisfying the relevant Acceptance Criteria of [US-001 &mdash; Define Weighted Requirement Profile for a JD](../../US.md), ready for code review and merge.

---
*Task 4 of 6 for US-001 | Category: Backend / Validation*
