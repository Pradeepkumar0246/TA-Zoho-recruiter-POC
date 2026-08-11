# EPIC-005 / US-001: Detect Possible Duplicate Candidates

## User Story ID
EPIC-005 / US-001

## User Story Title
Detect Possible Duplicate Candidates

## User Story Description
As a recruiter, I need the system to automatically detect possible duplicate candidates, so that I don't have to manually cross-check every record.

## User Story Statement
- **As a** Recruiter
- **I want** the system to automatically flag likely duplicate candidate records
- **So that** I don't have to manually cross-check thousands of records for repeats

## Detailed Functional Requirements
- Duplicate detection compares candidates by matching signals (phone number, email) and records a confidence/match basis.
- Detection runs after each successful sync (or on demand).

## Acceptance Criteria
1. Given two candidate records share the same phone number, when duplicate detection runs, then a duplicate_review record is created linking them with match_basis = 'Phone Number'.
2. Given no matching signal is found between two records, when detection runs, then no duplicate record is created for that pair.

## Business Rules
- Duplicate detection is informational only; it must never merge or delete candidate records.

## Validations
- None

## Dependencies
- EPIC-002/US-003

## Expected Result
Potential duplicate candidates are automatically identified and recorded for recruiter review.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Design `duplicate_reviews` table
- [TASK-002](TASK-002.md) &mdash; Implement DuplicateDetectionService
- [TASK-003](TASK-003.md) &mdash; Implement post-sync duplicate detection trigger
- [TASK-004](TASK-004.md) &mdash; Unit testing: duplicate detection matching logic

---
*Parent Epic: [EPIC-005](../../epic.md)*
