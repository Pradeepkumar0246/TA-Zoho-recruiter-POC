# TASK-007: Frontend: Build Sync Candidates page

## Task ID
TASK-007

## Task Title
Frontend: Build Sync Candidates page

## Related Epic ID
EPIC-002 &mdash; Zoho Recruit Integration & Candidate Synchronization

## Related User Story ID
US-002 &mdash; Manually Trigger Candidate Sync from Zoho Recruit

## Task Description
Build the page showing connection details, the 4-step sync overview, and the 'Start Candidate Sync' / 'Cancel' actions.

## Implementation Requirements
- Build the page showing connection details, the 4-step sync overview, and the 'Start Candidate Sync' / 'Cancel' actions.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Frontend / UI
- Angular component/page implementation.
- Match the existing visual design (colors, spacing, components) already established in the current HTML/CSS prototype, translated into Angular components using the shared design tokens.

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
A working, tested implementation of: **Frontend: Build Sync Candidates page**, satisfying the relevant Acceptance Criteria of [US-002 &mdash; Manually Trigger Candidate Sync from Zoho Recruit](../../US.md), ready for code review and merge.

---
*Task 7 of 10 for US-002 | Category: Frontend / UI*
