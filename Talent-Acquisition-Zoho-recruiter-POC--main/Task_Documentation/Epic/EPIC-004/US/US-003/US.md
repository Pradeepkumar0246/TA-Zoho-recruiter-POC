# EPIC-004 / US-003: Filter Candidates by Job Description (JD) & Skill Match

## User Story ID
EPIC-004 / US-003

## User Story Title
Filter Candidates by Job Description (JD) & Skill Match

## User Story Description
As a recruiter, I need to filter candidates against a specific Job Description and the skills required for it, so that results are scoped to the role I am hiring for.

## User Story Statement
- **As a** Recruiter
- **I want** to select a Job Description and enter the skills to match against it
- **So that** filter results are scoped to the specific role I'm hiring for, not just generic criteria

## Detailed Functional Requirements
- JD dropdown listing available Job Descriptions (e.g. Java Backend Developer - JD-2026-014).
- A 'Skills to Match Against JD' free-text/skill-chip input.
- Filtering combines the selected JD's required skills with the recruiter-entered skills.

## Acceptance Criteria
1. Given a JD is selected and skills entered, when filters are applied, then only candidates matching those skills (and other active criteria) for that JD are returned.
2. Given 'Any / No JD' is selected, when filters are applied, then filtering proceeds without JD scoping.

## Business Rules
- JD selection is optional; filtering must work with or without a JD scope.

## Validations
- None

## Dependencies
- EPIC-004/US-001

## Expected Result
Filter results can be precisely scoped to a specific hiring requisition.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Design `job_descriptions` table
- [TASK-002](TASK-002.md) &mdash; Implement JobDescription model/entity & repository
- [TASK-003](TASK-003.md) &mdash; Implement GET /api/v1/job-descriptions endpoint
- [TASK-004](TASK-004.md) &mdash; Implement JD-based skill matching logic
- [TASK-005](TASK-005.md) &mdash; Frontend: Build JD selection & skills input
- [TASK-006](TASK-006.md) &mdash; Frontend: Implement JobDescriptionService
- [TASK-007](TASK-007.md) &mdash; Unit testing: JD-based matching logic

---
*Parent Epic: [EPIC-004](../../epic.md)*
