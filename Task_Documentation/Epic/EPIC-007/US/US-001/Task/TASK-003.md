# TASK-003: Implement POST /api/v1/shortlists endpoint

## Task ID
TASK-003

## Task Title
Implement POST /api/v1/shortlists endpoint

## Related Epic ID
EPIC-007 &mdash; Shortlisting & Excel Export

## Related User Story ID
US-001 &mdash; Select Candidates from Ranking to Build Shortlist

## Task Description
Create or update a shortlist for the current recruiter/JD with the selected candidate ids.

## Implementation Requirements
- Create or update a shortlist for the current recruiter/JD with the selected candidate ids.
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
A working, tested implementation of: **Implement POST /api/v1/shortlists endpoint**, satisfying the relevant Acceptance Criteria of [US-001 &mdash; Select Candidates from Ranking to Build Shortlist](../../US.md), ready for code review and merge.

---
*Task 3 of 8 for US-001 | Category: Backend / API*
