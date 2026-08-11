# EPIC-004 / US-005: View & Apply Saved Filter Templates

## User Story ID
EPIC-004 / US-005

## User Story Title
View & Apply Saved Filter Templates

## User Story Description
As a recruiter, I need to view my saved filter templates and apply one with a single click, so that I can quickly re-run a familiar search.

## User Story Statement
- **As a** Recruiter
- **I want** to see all my saved filter templates listed on the Filters page and apply one instantly
- **So that** I don't have to manually reconfigure filters I use often

## Detailed Functional Requirements
- Saved Filter Templates list displayed at the bottom of the Filters page (no separate page).
- Each template shows its name, associated JD, and key criteria summary.
- An 'Apply Template' action per saved filter navigates to the Candidates page with that template's criteria applied.

## Acceptance Criteria
1. Given saved filters exist, when the Filters page loads, then they are listed with name, JD, and criteria summary.
2. Given the recruiter clicks 'Apply Template', when navigation completes, then the Candidates page shows results filtered by that template's saved criteria.

## Business Rules
- None

## Validations
- None

## Dependencies
- EPIC-004/US-004

## Expected Result
Recruiters can manage and reuse their filter templates entirely from the Filters page.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Implement GET /api/v1/saved-filters endpoint
- [TASK-002](TASK-002.md) &mdash; Implement apply-template criteria resolution
- [TASK-003](TASK-003.md) &mdash; Frontend: Build Saved Filter Templates list
- [TASK-004](TASK-004.md) &mdash; Frontend: Wire Apply Template navigation
- [TASK-005](TASK-005.md) &mdash; Unit testing: saved filter list & apply logic

---
*Parent Epic: [EPIC-004](../../epic.md)*
