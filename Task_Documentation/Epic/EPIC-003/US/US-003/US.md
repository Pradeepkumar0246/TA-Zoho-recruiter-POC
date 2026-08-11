# EPIC-003 / US-003: View Candidate Profile Details

## User Story ID
EPIC-003 / US-003

## User Story Title
View Candidate Profile Details

## User Story Description
As a recruiter, I need to view a candidate's full profile, so that I can evaluate their fit in detail before shortlisting them.

## User Story Statement
- **As a** Recruiter
- **I want** to open a candidate's full read-only profile
- **So that** I can review their contact, professional, education, compensation, and normalized data in one place

## Detailed Functional Requirements
- Profile header with avatar, name, role, match %, availability, source, and current JD badge.
- Sections: Contact Information, Professional Information, Skills, Education, Compensation, Candidate Source.
- Normalized Data card showing raw -> normalized value pairs for this candidate.
- Explicit notice that the profile is read-only and cannot be edited or written back to Zoho.

## Acceptance Criteria
1. Given a valid candidate id, when the profile page loads, then all profile sections render with the correct data.
2. Given an invalid/non-existent candidate id, when the profile page is requested, then a not-found state is shown.

## Business Rules
- No UI control on this screen may allow editing or saving changes to a candidate record.

## Validations
- None

## Dependencies
- EPIC-002/US-003

## Expected Result
Recruiters have complete, trustworthy visibility into any single candidate without any risk of accidental modification.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Implement GET /api/v1/candidates/{id} endpoint
- [TASK-002](TASK-002.md) &mdash; Implement not-found exception handling
- [TASK-003](TASK-003.md) &mdash; Frontend: Build Candidate Details page
- [TASK-004](TASK-004.md) &mdash; Frontend: Wire navigation from list/ranking/duplicates
- [TASK-005](TASK-005.md) &mdash; Unit testing: candidate detail endpoint

---
*Parent Epic: [EPIC-003](../../epic.md)*
