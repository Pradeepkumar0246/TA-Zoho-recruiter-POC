# TASK-005: Implement NormalizationService

## Task ID
TASK-005

## Task Title
Implement NormalizationService

## Related Epic ID
EPIC-002 &mdash; Zoho Recruit Integration & Candidate Synchronization

## Related User Story ID
US-003 &mdash; Normalize & Persist Synced Candidate Data

## Task Description
Implement the service that looks up normalization_rules and applies them to incoming raw candidate fields (location, notice period, skills casing, degree).

## Implementation Requirements
- Implement the service that looks up normalization_rules and applies them to incoming raw candidate fields (location, notice period, skills casing, degree).
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Backend / Service
- Business logic / service layer implementation.

## Dependencies
- Builds on TASK-004 within the same User Story where applicable.

## Validation / Testing Requirements
- Add/extend automated backend tests (unit and, where applicable, integration) covering success and failure paths.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Implement NormalizationService**, satisfying the relevant Acceptance Criteria of [US-003 &mdash; Normalize & Persist Synced Candidate Data](../../US.md), ready for code review and merge.

---
*Task 5 of 7 for US-003 | Category: Backend / Service*
