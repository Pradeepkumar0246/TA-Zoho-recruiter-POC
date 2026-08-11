# EPIC-005 / US-003: Mark Duplicate Candidate as Reviewed

## User Story ID
EPIC-005 / US-003

## User Story Title
Mark Duplicate Candidate as Reviewed

## User Story Description
As a recruiter, I need to mark a possible duplicate as reviewed, so that my team knows it has already been checked.

## User Story Statement
- **As a** Recruiter
- **I want** to mark a duplicate pair as reviewed
- **So that** other recruiters know it has already been checked and don't re-investigate it

## Detailed Functional Requirements
- A 'Mark as Reviewed' action on each duplicate comparison card.
- Reviewed status and reviewer/timestamp are persisted.

## Acceptance Criteria
1. Given a pending duplicate, when the recruiter clicks 'Mark as Reviewed', then its status updates to 'Reviewed' and the change is reflected immediately in the UI.

## Business Rules
- Marking as reviewed must not alter the underlying candidate records.

## Validations
- None

## Dependencies
- EPIC-005/US-002

## Expected Result
Review status is tracked per duplicate pair, avoiding repeated investigation.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Implement PATCH /api/v1/duplicates/{id}/review endpoint
- [TASK-002](TASK-002.md) &mdash; Implement review authorization check
- [TASK-003](TASK-003.md) &mdash; Frontend: Implement Mark as Reviewed action
- [TASK-004](TASK-004.md) &mdash; Implement review action logging/auditing
- [TASK-005](TASK-005.md) &mdash; Unit testing: review status update endpoint

---
*Parent Epic: [EPIC-005](../../epic.md)*
