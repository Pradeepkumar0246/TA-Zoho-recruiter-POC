# EPIC-004 / US-001: Toggle & Apply Basic Filters on the Candidates Page

## User Story ID
EPIC-004 / US-001

## User Story Title
Toggle & Apply Basic Filters on the Candidates Page

## User Story Description
As a recruiter, I need to show/hide a basic filter panel directly on the Candidates page, so that I can quickly narrow results without leaving the page.

## User Story Statement
- **As a** Recruiter
- **I want** to toggle a basic filter panel on the Candidates page and apply it in place
- **So that** I can quickly narrow the candidate list without navigating away

## Detailed Functional Requirements
- A 'Filters' toggle button on the Candidates page shows/hides the panel.
- Basic Filters include skills, experience min/max, location, notice period, and status.
- A 'More Filters & Saved Templates' link at the bottom of the panel routes to the full Filters page.

## Acceptance Criteria
1. Given the panel is hidden, when the recruiter clicks 'Filters', then the panel becomes visible with the current basic criteria.
2. Given basic criteria are set and 'Apply Filters' is clicked, when the action completes, then the candidate table updates to reflect the filtered results and active-filter chips are shown.
3. Given the recruiter clicks 'More Filters & Saved Templates', when navigation completes, then they land on the full Filters page.

## Business Rules
- All selected filter criteria are combined with logical AND.

## Validations
- Experience min must not exceed experience max when both are provided.

## Dependencies
- EPIC-003/US-002

## Expected Result
Recruiters can filter the candidate list in-place using common criteria in a single click.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Extend candidates endpoint with basic filter params
- [TASK-002](TASK-002.md) &mdash; Implement filter query composer service
- [TASK-003](TASK-003.md) &mdash; Frontend: Build inline Filter Panel component
- [TASK-004](TASK-004.md) &mdash; Frontend: Implement filter form state & apply action
- [TASK-005](TASK-005.md) &mdash; Frontend: Implement min/max experience validation
- [TASK-006](TASK-006.md) &mdash; Unit testing: basic filter query logic
- [TASK-007](TASK-007.md) &mdash; Frontend unit testing: filter panel toggle & apply

---
*Parent Epic: [EPIC-004](../../epic.md)*
