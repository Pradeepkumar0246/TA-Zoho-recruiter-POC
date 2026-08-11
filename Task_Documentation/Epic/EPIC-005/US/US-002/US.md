# EPIC-005 / US-002: View Duplicates Grouped by Job Description

## User Story ID
EPIC-005 / US-002

## User Story Title
View Duplicates Grouped by Job Description

## User Story Description
As a recruiter, I need to see possible duplicates grouped by the Job Description they relate to, so that I know which hiring drive is affected.

## User Story Statement
- **As a** Recruiter
- **I want** to view detected duplicates grouped under the Job Description they were found in
- **So that** I know exactly which hiring drive is affected and can review with that context

## Detailed Functional Requirements
- Duplicates page groups results into JD sections with a header (JD title + JD code).
- Each JD group shows a comparison card (side-by-side candidate fields) for each duplicate pair, or an empty-state note if no duplicates exist for that JD.
- Summary counters: JDs reviewed, possible duplicates, no-duplicate-signal count.

## Acceptance Criteria
1. Given duplicates exist for multiple JDs, when the Duplicates page loads, then results are grouped under the correct JD headers.
2. Given a JD has no duplicate signals, when the Duplicates page loads, then that JD group shows a clear empty-state message instead of an empty list.

## Business Rules
- None

## Validations
- None

## Dependencies
- EPIC-005/US-001

## Expected Result
Recruiters can review duplicates with full context of which JD/hiring drive they affect.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Implement GET /api/v1/duplicates grouped endpoint
- [TASK-002](TASK-002.md) &mdash; Implement grouping/aggregation query
- [TASK-003](TASK-003.md) &mdash; Frontend: Build Duplicates page with JD groups
- [TASK-004](TASK-004.md) &mdash; Frontend: Implement DuplicateService
- [TASK-005](TASK-005.md) &mdash; Unit testing: grouped duplicates endpoint

---
*Parent Epic: [EPIC-005](../../epic.md)*
