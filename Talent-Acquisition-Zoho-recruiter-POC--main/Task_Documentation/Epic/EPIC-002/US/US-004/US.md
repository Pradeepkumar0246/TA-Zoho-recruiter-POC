# EPIC-002 / US-004: View Sync Summary & Normalization Results

## User Story ID
EPIC-002 / US-004

## User Story Title
View Sync Summary & Normalization Results

## User Story Description
As a recruiter, I need to see a summary after a sync completes, so that I can confirm how many candidates were retrieved and what was normalized.

## User Story Statement
- **As a** Recruiter
- **I want** to see a completion summary (counts and normalization examples) after a sync finishes
- **So that** I can confirm the sync worked as expected before relying on the data

## Detailed Functional Requirements
- Sync Complete screen showing candidates retrieved, new/updated records, normalized records, and overall status.
- A normalization summary list showing example raw -> normalized mappings applied during the sync.

## Acceptance Criteria
1. Given a sync has completed successfully, when the recruiter is redirected to the summary screen, then accurate counts are displayed.
2. Given normalization mappings were applied during the sync, when the summary loads, then representative raw->normalized examples are shown.

## Business Rules
- None

## Validations
- None

## Dependencies
- EPIC-002/US-002
- EPIC-002/US-003

## Expected Result
Recruiters get clear, trustworthy confirmation of what changed after each sync.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Implement GET /api/v1/sync/{sync_id}/summary endpoint
- [TASK-002](TASK-002.md) &mdash; Frontend: Build Sync Complete page
- [TASK-003](TASK-003.md) &mdash; Frontend: Implement navigation to Candidates page
- [TASK-004](TASK-004.md) &mdash; Unit testing: sync summary endpoint

---
*Parent Epic: [EPIC-002](../../epic.md)*
