# EPIC-007 / US-001: Select Candidates from Ranking to Build Shortlist

## User Story ID
EPIC-007 / US-001

## User Story Title
Select Candidates from Ranking to Build Shortlist

## User Story Description
As a recruiter, I need to select candidates directly on the Ranking page, so that I can build a shortlist without navigating to a separate screen.

## User Story Statement
- **As a** Recruiter
- **I want** to check candidates on the Ranking table to add them to my shortlist
- **So that** I can build a shortlist in the same place I review rankings, with no extra steps

## Detailed Functional Requirements
- Per-row checkboxes plus a 'select all' header checkbox on the Ranking table.
- A live selection bar showing 'N candidates selected for shortlist'.
- Selections persist as the recruiter's shortlist for the active JD/session.

## Acceptance Criteria
1. Given the recruiter checks one or more candidates, when the selection changes, then the selection counter updates immediately.
2. Given the recruiter checks 'select all', when toggled, then all visible candidates become selected (and unchecking clears them all).
3. Given at least one candidate is selected, when viewing the selection bar, then the Download button becomes enabled; otherwise it stays disabled.

## Business Rules
- A shortlist must contain at least one candidate before it can be exported.

## Validations
- None

## Dependencies
- EPIC-006/US-002

## Expected Result
Recruiters can assemble a shortlist inline while reviewing rankings, with no separate shortlist screen.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Design `shortlists` and `shortlist_candidates` tables
- [TASK-002](TASK-002.md) &mdash; Implement Shortlist model/entity & repository
- [TASK-003](TASK-003.md) &mdash; Implement POST /api/v1/shortlists endpoint
- [TASK-004](TASK-004.md) &mdash; Implement shortlist validation
- [TASK-005](TASK-005.md) &mdash; Frontend: Implement selection checkboxes & select-all
- [TASK-006](TASK-006.md) &mdash; Frontend: Implement live selection bar
- [TASK-007](TASK-007.md) &mdash; Frontend: Implement ShortlistService
- [TASK-008](TASK-008.md) &mdash; Unit testing: shortlist creation endpoint

---
*Parent Epic: [EPIC-007](../../epic.md)*
