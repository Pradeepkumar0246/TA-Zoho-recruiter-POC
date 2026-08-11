# EPIC-003 / US-002: Browse & Search Candidate List

## User Story ID
EPIC-003 / US-002

## User Story Title
Browse & Search Candidate List

## User Story Description
As a recruiter, I need to browse and search the full candidate list, so that I can locate candidates quickly before filtering or ranking them.

## User Story Statement
- **As a** Recruiter
- **I want** to browse a paginated candidate table and search by name, skill, or company
- **So that** I can quickly locate specific candidates within a large pool

## Detailed Functional Requirements
- Candidates table: name, skills, experience, location, current company, notice period, status, match %, action.
- Free-text search across candidate name, skills, and company.
- Server-side pagination with page controls.

## Acceptance Criteria
1. Given the recruiter enters a search term, when they submit it, then only matching candidates are shown.
2. Given more than one page of results exists, when the recruiter navigates pages, then the correct page of results loads without reloading the whole app.

## Business Rules
- None

## Validations
- Search term is trimmed and length-limited before being sent to the backend.

## Dependencies
- EPIC-002/US-003

## Expected Result
Recruiters can efficiently locate candidates in a pool of thousands of records.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Implement GET /api/v1/candidates list endpoint
- [TASK-002](TASK-002.md) &mdash; Add database indexes for search performance
- [TASK-003](TASK-003.md) &mdash; Frontend: Build Candidates list page
- [TASK-004](TASK-004.md) &mdash; Frontend: Implement CandidateService (list/search)
- [TASK-005](TASK-005.md) &mdash; Frontend: Implement pagination state handling
- [TASK-006](TASK-006.md) &mdash; Unit testing: candidate list/search endpoint
- [TASK-007](TASK-007.md) &mdash; Frontend unit testing: Candidates list component

---
*Parent Epic: [EPIC-003](../../epic.md)*
