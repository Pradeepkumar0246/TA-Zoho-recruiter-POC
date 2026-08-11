# TASK-003: Implement export file naming convention

## Task ID
TASK-003

## Task Title
Implement export file naming convention

## Related Epic ID
EPIC-007 &mdash; Shortlisting & Excel Export

## Related User Story ID
US-002 &mdash; Download Shortlist as Excel (.xlsx)

## Task Description
Derive a descriptive file name from the associated JD (e.g. '{JD_Title}_Shortlist.xlsx').

## Implementation Requirements
- Derive a descriptive file name from the associated JD (e.g. '{JD_Title}_Shortlist.xlsx').
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Backend / Service
- Business logic / service layer implementation.

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
A working, tested implementation of: **Implement export file naming convention**, satisfying the relevant Acceptance Criteria of [US-002 &mdash; Download Shortlist as Excel (.xlsx)](../../US.md), ready for code review and merge.

---
*Task 3 of 8 for US-002 | Category: Backend / Service*
