# EPIC-006 / US-003: View Candidate Match Breakdown

## User Story ID
EPIC-006 / US-003

## User Story Title
View Candidate Match Breakdown

## User Story Description
As a recruiter, I need to see exactly which criteria a candidate matched or missed, so that I understand why they received their score.

## User Story Statement
- **As a** Recruiter
- **I want** to see a per-criterion matched/not-matched breakdown for a selected candidate
- **So that** I understand exactly why a candidate received their ranking score

## Detailed Functional Requirements
- Match Breakdown card listing each weighted criterion with a Matched/Not Matched badge for the selected candidate.

## Acceptance Criteria
1. Given a candidate and JD, when the match breakdown is requested, then every criterion in that JD's requirement profile appears with an explicit matched/not-matched status.

## Business Rules
- None

## Validations
- None

## Dependencies
- EPIC-006/US-002

## Expected Result
Recruiters can explain and trust every ranking score down to the individual criterion.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Implement GET /api/v1/ranking/{candidate_id}/breakdown endpoint
- [TASK-002](TASK-002.md) &mdash; Frontend: Build Match Breakdown card
- [TASK-003](TASK-003.md) &mdash; Unit testing: match breakdown endpoint

---
*Parent Epic: [EPIC-006](../../epic.md)*
