# EPIC-002 / US-002: Manually Trigger Candidate Sync from Zoho Recruit

## User Story ID
EPIC-002 / US-002

## User Story Title
Manually Trigger Candidate Sync from Zoho Recruit

## User Story Description
As a recruiter, I need to trigger a candidate sync from Zoho Recruit on demand, so that I am working with the latest candidate data before filtering and ranking.

## User Story Statement
- **As a** Recruiter
- **I want** to click 'Start Candidate Sync' and have the system fetch the latest candidates from Zoho Recruit
- **So that** my filtering, ranking, and shortlisting work is based on the freshest available candidate data

## Detailed Functional Requirements
- Sync Candidates page with connection summary, a 4-step sync overview, and a 'Start Candidate Sync' action.
- Backend fetches candidate records from Zoho Recruit via its API (paginated), respecting rate limits.
- Sync runs as a tracked, resumable/observable operation (sync log with status).

## Acceptance Criteria
1. Given the recruiter clicks 'Start Candidate Sync', when the sync completes successfully, then they are taken to a Sync Complete summary screen.
2. Given the Zoho API is temporarily unavailable, when a sync is triggered, then the sync log records a failed status with an error reason and the recruiter sees an error state.
3. Given a sync is already running, when the recruiter triggers another sync, then the system prevents a duplicate concurrent sync.

## Business Rules
- Sync is strictly read-only against Zoho Recruit; no candidate data is ever written back.
- Only one active sync job may run at a time.

## Validations
- None

## Dependencies
- EPIC-002/US-001

## Expected Result
Recruiters can refresh local candidate data from Zoho Recruit on demand with full traceability of each sync run.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Design `sync_logs` table
- [TASK-002](TASK-002.md) &mdash; Implement Zoho Recruit API client module
- [TASK-003](TASK-003.md) &mdash; Implement SyncService orchestration logic
- [TASK-004](TASK-004.md) &mdash; Implement POST /api/v1/sync/candidates endpoint
- [TASK-005](TASK-005.md) &mdash; Implement async/background job execution
- [TASK-006](TASK-006.md) &mdash; Implement Zoho API error handling & retry logic
- [TASK-007](TASK-007.md) &mdash; Frontend: Build Sync Candidates page
- [TASK-008](TASK-008.md) &mdash; Frontend: Implement SyncService (Angular)
- [TASK-009](TASK-009.md) &mdash; Implement sync operation logging & auditing
- [TASK-010](TASK-010.md) &mdash; Integration testing: sync endpoint with mocked Zoho API

---
*Parent Epic: [EPIC-002](../../epic.md)*
