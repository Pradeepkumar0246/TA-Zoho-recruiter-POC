# TASK-001: Implement GET /api/v1/candidates list endpoint

## Task ID
TASK-001

## Task Title
Implement GET /api/v1/candidates list endpoint

## Related Epic ID
EPIC-003 &mdash; Candidate Management & Profile View

## Related User Story ID
US-002 &mdash; Browse & Search Candidate List

## Task Description
Implement pagination (page, page_size), sorting, and a `q` keyword-search parameter matching name, skills, and company.

## Implementation Requirements
- Implement pagination (page, page_size), sorting, and a `q` keyword-search parameter matching name, skills, and company.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Backend / API
- FastAPI endpoint implementation.
- Follow REST conventions already used elsewhere in the API (`/api/v1/...`), return consistent error response shapes, and document the endpoint (OpenAPI docstring/response models).

## Dependencies
- None (first task for this User Story).

## Validation / Testing Requirements
- Add/extend automated backend tests (unit and, where applicable, integration) covering success and failure paths.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Implement GET /api/v1/candidates list endpoint**, satisfying the relevant Acceptance Criteria of [US-002 &mdash; Browse & Search Candidate List](../../US.md), ready for code review and merge.

---
*Task 1 of 7 for US-002 | Category: Backend / API*
