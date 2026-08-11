# TASK-002: Implement not-found exception handling

## Task ID
TASK-002

## Task Title
Implement not-found exception handling

## Related Epic ID
EPIC-003 &mdash; Candidate Management & Profile View

## Related User Story ID
US-003 &mdash; View Candidate Profile Details

## Task Description
Return a clean 404 response and error payload for unknown candidate ids.

## Implementation Requirements
- Return a clean 404 response and error payload for unknown candidate ids.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Backend / Error Handling
- Exception handling implementation.

## Dependencies
- Builds on TASK-001 within the same User Story where applicable.

## Validation / Testing Requirements
- Manually verify the implemented behavior against the related Acceptance Criteria in the parent User Story.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Implement not-found exception handling**, satisfying the relevant Acceptance Criteria of [US-003 &mdash; View Candidate Profile Details](../../US.md), ready for code review and merge.

---
*Task 2 of 5 for US-003 | Category: Backend / Error Handling*
