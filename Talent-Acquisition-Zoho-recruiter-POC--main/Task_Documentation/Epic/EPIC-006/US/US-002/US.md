# EPIC-006 / US-002: View Candidate Ranking Table with Match Score

## User Story ID
EPIC-006 / US-002

## User Story Title
View Candidate Ranking Table with Match Score

## User Story Description
As a recruiter, I need to see candidates ranked by weighted match score against a JD, so that I can prioritize who to review and shortlist first.

## User Story Statement
- **As a** Recruiter
- **I want** to see a ranked table of candidates with computed score and match percentage for the active JD
- **So that** I can prioritize outreach and shortlisting to the best-fit candidates first

## Detailed Functional Requirements
- Ranking table: rank, candidate, skill match, experience, notice period, score (x/100), match %.
- Ranking is computed from the JD's weighted criteria against each candidate's normalized profile.
- Table respects the currently active filter/JD context carried over from Candidates/Filters.

## Acceptance Criteria
1. Given a JD with defined criteria and a filtered candidate set, when the Ranking page loads, then candidates are listed in descending score order with correct rank numbers.
2. Given a candidate matches all weighted criteria, when scored, then their score equals the sum of all criteria weights (100).

## Business Rules
- Match percentage displayed must equal the computed score out of 100.

## Validations
- None

## Dependencies
- EPIC-006/US-001
- EPIC-004/US-003

## Expected Result
Recruiters see an accurate, explainable priority order of candidates for the active JD.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Implement RankingService score computation
- [TASK-002](TASK-002.md) &mdash; Implement GET /api/v1/ranking endpoint
- [TASK-003](TASK-003.md) &mdash; Optimize score computation for large candidate sets
- [TASK-004](TASK-004.md) &mdash; Frontend: Build Ranking Table
- [TASK-005](TASK-005.md) &mdash; Frontend: Implement RankingService (Angular)
- [TASK-006](TASK-006.md) &mdash; Unit testing: score computation logic

---
*Parent Epic: [EPIC-006](../../epic.md)*
