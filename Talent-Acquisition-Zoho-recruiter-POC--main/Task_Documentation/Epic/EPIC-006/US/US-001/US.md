# EPIC-006 / US-001: Define Weighted Requirement Profile for a JD

## User Story ID
EPIC-006 / US-001

## User Story Title
Define Weighted Requirement Profile for a JD

## User Story Description
As a recruiter, I need to define weighted scoring criteria for a Job Description, so that candidate ranking reflects what actually matters for that role.

## User Story Statement
- **As a** Recruiter
- **I want** to define criteria and point weights (e.g. Java 30pts, Spring Boot 30pts, Microservices 20pts, AWS 10pts, Notice Period 10pts) for a JD
- **So that** ranking scores reflect the actual priorities of the role I'm hiring for

## Detailed Functional Requirements
- Requirement Profile card displayed at the top of the Ranking page for the active JD.
- Criteria weights must sum to exactly 100 points.

## Acceptance Criteria
1. Given criteria weights are entered, when they sum to 100, then the profile is saved successfully.
2. Given criteria weights do not sum to 100, when save is attempted, then a validation error is shown and nothing is saved.

## Business Rules
- Weights for a JD's ranking criteria must always total exactly 100 points.

## Validations
- Each individual weight must be a non-negative integer.

## Dependencies
- EPIC-004/US-003

## Expected Result
Every JD has an explicit, validated scoring rubric driving candidate ranking.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Design `ranking_criteria` table
- [TASK-002](TASK-002.md) &mdash; Implement RankingCriteria model/entity & repository
- [TASK-003](TASK-003.md) &mdash; Implement GET/POST /api/v1/job-descriptions/{id}/criteria endpoints
- [TASK-004](TASK-004.md) &mdash; Implement weight-sum validation logic
- [TASK-005](TASK-005.md) &mdash; Frontend: Build Requirement Profile card
- [TASK-006](TASK-006.md) &mdash; Unit testing: weight validation logic

---
*Parent Epic: [EPIC-006](../../epic.md)*
