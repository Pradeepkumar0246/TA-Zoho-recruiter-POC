# TASK-002: Frontend: Build Match Breakdown card

## Task ID
TASK-002

## Task Title
Frontend: Build Match Breakdown card

## Related Epic ID
EPIC-006 &mdash; Candidate Ranking & JD Match Scoring

## Related User Story ID
US-003 &mdash; View Candidate Match Breakdown

## Task Description
Render the per-criterion matched/not-matched list matching the existing UI.

## Implementation Requirements
- Render the per-criterion matched/not-matched list matching the existing UI.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Frontend / UI
- Angular component/page implementation.
- Match the existing visual design (colors, spacing, components) already established in the current HTML/CSS prototype, translated into Angular components using the shared design tokens.

## Dependencies
- Builds on TASK-001 within the same User Story where applicable.

## Validation / Testing Requirements
- Add/extend Angular unit tests (component/service) covering the behavior introduced by this task.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Frontend: Build Match Breakdown card**, satisfying the relevant Acceptance Criteria of [US-003 &mdash; View Candidate Match Breakdown](../../US.md), ready for code review and merge.

---
*Task 2 of 3 for US-003 | Category: Frontend / UI*
