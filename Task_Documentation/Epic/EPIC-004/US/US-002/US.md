# EPIC-004 / US-002: Apply Advanced Filters on the Filters Page

## User Story ID
EPIC-004 / US-002

## User Story Title
Apply Advanced Filters on the Filters Page

## User Story Description
As a recruiter, I need access to advanced filter criteria on a dedicated Filters page, so that I can perform deeper, more specific candidate searches.

## User Story Statement
- **As a** Recruiter
- **I want** to filter using advanced criteria (degree, education, certification, resume updated date, source, relevant experience, previous company, employment status)
- **So that** I can perform precise searches beyond the basic criteria

## Detailed Functional Requirements
- Advanced Filters section with all listed fields.
- A live Filter Summary card reflecting the currently selected criteria (basic + advanced + JD).

## Acceptance Criteria
1. Given advanced criteria are set, when 'Apply Filters' is clicked, then the recruiter is taken to the Candidates page with those criteria applied.
2. Given any criteria are selected, when viewing the Filter Summary card, then it accurately reflects all currently selected values.

## Business Rules
- All selected filter criteria (basic, advanced, JD) combine using logical AND.

## Validations
- None

## Dependencies
- EPIC-004/US-001

## Expected Result
Recruiters have a complete, dedicated space to build precise, multi-field candidate searches.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Extend candidates endpoint with advanced filter params
- [TASK-002](TASK-002.md) &mdash; Frontend: Build Advanced Filters section
- [TASK-003](TASK-003.md) &mdash; Frontend: Build live Filter Summary card
- [TASK-004](TASK-004.md) &mdash; Frontend: Wire Apply Filters navigation
- [TASK-005](TASK-005.md) &mdash; Unit testing: advanced filter query logic

---
*Parent Epic: [EPIC-004](../../epic.md)*
