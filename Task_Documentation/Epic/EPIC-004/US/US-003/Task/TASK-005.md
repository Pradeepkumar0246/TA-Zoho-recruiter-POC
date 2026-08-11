# TASK-005: Frontend: Build JD selection & skills input

## Task ID
TASK-005

## Task Title
Frontend: Build JD selection & skills input

## Related Epic ID
EPIC-004 &mdash; Candidate Filtering & Saved Filter Templates

## Related User Story ID
US-003 &mdash; Filter Candidates by Job Description (JD) & Skill Match

## Task Description
Build the 'Job Description' dropdown and 'Skills to Match Against JD' input on both the Candidates inline panel and the Filters page.

## Implementation Requirements
- Build the 'Job Description' dropdown and 'Skills to Match Against JD' input on both the Candidates inline panel and the Filters page.
- Implement using the project's target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL.
- Follow existing project conventions for naming, folder structure, and error handling.

## Technical Considerations
- **Category:** Frontend / UI
- Angular component/page implementation.
- Match the existing visual design (colors, spacing, components) already established in the current HTML/CSS prototype, translated into Angular components using the shared design tokens.

## Dependencies
- Builds on TASK-004 within the same User Story where applicable.

## Validation / Testing Requirements
- Add/extend Angular unit tests (component/service) covering the behavior introduced by this task.

## Definition of Done
- Code implemented, self-reviewed, and merged following the project's branching/PR process.
- Automated tests (as applicable) written and passing.
- No regressions introduced in existing functionality for this module.
- Related User Story Acceptance Criteria that depend on this task are satisfied.
- Documentation (docstrings/README/OpenAPI, as applicable) updated.

## Expected Output
A working, tested implementation of: **Frontend: Build JD selection & skills input**, satisfying the relevant Acceptance Criteria of [US-003 &mdash; Filter Candidates by Job Description (JD) & Skill Match](../../US.md), ready for code review and merge.

---
*Task 5 of 7 for US-003 | Category: Frontend / UI*
