# TASK-003: Implement POST /api/v1/saved-filters endpoint

## Task ID
TASK-003

## Task Title
Implement POST /api/v1/saved-filters endpoint

## Related Epic ID
EPIC-004 &mdash; Candidate Filtering & Saved Filter Templates

## Related User Story ID
US-004 &mdash; Save Filter as Named Template with JD

## Task Description
Accept a name, jd_id, and the full filter_criteria payload; validate and persist.

## Implementation Requirements
- Accept a name, jd_id, and the full filter_criteria payload; validate and persist.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Backend / API
- FastAPI endpoint implementation.
- Follow REST conventions already used elsewhere in the API (`/api/v1/...`), return consistent error response shapes, and document the endpoint (OpenAPI docstring/response models).

## Dependencies
- Builds on TASK-002 within the same User Story where applicable.

## Validation / Testing Requirements
- Add/extend automated backend tests (unit and, where applicable, integration) covering success and failure paths.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Implement POST /api/v1/saved-filters endpoint**, satisfying the relevant Acceptance Criteria of [US-004 &mdash; Save Filter as Named Template with JD](../../US.md), ready for code review and merge.

---
*Task 3 of 8 for US-004 | Category: Backend / API*
