# TASK-001: Extend candidates endpoint with advanced filter params

## Task ID
TASK-001

## Task Title
Extend candidates endpoint with advanced filter params

## Related Epic ID
EPIC-004 &mdash; Candidate Filtering & Saved Filter Templates

## Related User Story ID
US-002 &mdash; Apply Advanced Filters on the Filters Page

## Task Description
Add query parameters for degree, education, certification, resume_updated_since, source, relevant_experience, previous_company, employment_status.

## Implementation Requirements
- Add query parameters for degree, education, certification, resume_updated_since, source, relevant_experience, previous_company, employment_status.
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
A working, tested implementation of: **Extend candidates endpoint with advanced filter params**, satisfying the relevant Acceptance Criteria of [US-002 &mdash; Apply Advanced Filters on the Filters Page](../../US.md), ready for code review and merge.

---
*Task 1 of 5 for US-002 | Category: Backend / API*
