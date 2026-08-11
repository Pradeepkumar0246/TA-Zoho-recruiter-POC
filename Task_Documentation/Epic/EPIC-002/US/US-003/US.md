# EPIC-002 / US-003: Normalize & Persist Synced Candidate Data

## User Story ID
EPIC-002 / US-003

## User Story Title
Normalize & Persist Synced Candidate Data

## User Story Description
As a recruiter, I need candidate data pulled from Zoho Recruit to be normalized into consistent values, so that filtering, ranking, and duplicate detection work reliably.

## User Story Statement
- **As a** Recruiter
- **I want** raw Zoho candidate fields (location, notice period, skills, degree names) normalized automatically during sync
- **So that** downstream filtering, ranking, and duplicate detection compare candidates consistently

## Detailed Functional Requirements
- Persist full candidate profile fields: contact info, professional info, skills, education, compensation, source metadata.
- Apply normalization rules, e.g. 'JAVA' -> 'Java', 'Bangalore' -> 'Bengaluru', '1 Month' -> '30 Days', 'B.E. Computer Science' -> 'Bachelor Degree - Computer Science'.
- Upsert candidates by their Zoho candidate ID so re-syncing updates existing records rather than duplicating them.

## Acceptance Criteria
1. Given a candidate already exists locally (matched by Zoho candidate ID), when synced again, then the existing record is updated, not duplicated.
2. Given a raw value has a known normalization mapping, when the candidate is persisted, then the normalized value is stored alongside (or instead of) the raw value.
3. Given an unmapped raw value, when normalization runs, then the original value is preserved unchanged rather than dropped.

## Business Rules
- Normalization mappings must be centrally maintained (not hardcoded per field) so new mappings can be added without code changes to callers.

## Validations
- Required candidate fields (name, at least one contact method) must be present; records missing them are logged and skipped, not silently dropped.

## Dependencies
- EPIC-002/US-002

## Expected Result
Candidate records in PostgreSQL are complete, deduplicated by Zoho ID, and normalized for consistent downstream use.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Design `candidates` table schema
- [TASK-002](TASK-002.md) &mdash; Design normalization mapping table
- [TASK-003](TASK-003.md) &mdash; Implement Candidate SQLAlchemy model/entity
- [TASK-004](TASK-004.md) &mdash; Implement Candidate repository (upsert by Zoho ID)
- [TASK-005](TASK-005.md) &mdash; Implement NormalizationService
- [TASK-006](TASK-006.md) &mdash; Implement candidate payload validation
- [TASK-007](TASK-007.md) &mdash; Unit testing: normalization logic

---
*Parent Epic: [EPIC-002](../../epic.md)*
