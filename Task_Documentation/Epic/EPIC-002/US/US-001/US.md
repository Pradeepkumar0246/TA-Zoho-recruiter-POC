# EPIC-002 / US-001: View Zoho Recruit Connection Status

## User Story ID
EPIC-002 / US-001

## User Story Title
View Zoho Recruit Connection Status

## User Story Description
As a recruiter, I need to see whether the application is connected to Zoho Recruit, so that I know candidate data can be trusted and refreshed.

## User Story Statement
- **As a** Recruiter
- **I want** to see a live Zoho Recruit connection indicator
- **So that** I know whether candidate data can be synced and trust its freshness

## Detailed Functional Requirements
- Show a 'Zoho Recruit: Connected/Disconnected' status pill in the top header on every screen.
- Show connection details (integration name, connection state, sync type, access level, last successful sync time) on the Sync Candidates page.

## Acceptance Criteria
1. Given the Zoho Recruit OAuth connection is healthy, when any page loads, then the header shows a green 'Connected' status.
2. Given the connection is broken/expired, when any page loads, then the header shows a 'Disconnected' status and sync actions are disabled.

## Business Rules
- Access to Zoho Recruit is strictly read-only; no write scopes are requested.

## Validations
- None

## Dependencies
- None

## Expected Result
Recruiters always have visibility into integration health before relying on candidate data.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Design `integration_settings` table
- [TASK-002](TASK-002.md) &mdash; Implement IntegrationSettings model/entity
- [TASK-003](TASK-003.md) &mdash; Implement Zoho connection health check service
- [TASK-004](TASK-004.md) &mdash; Implement GET /api/v1/integrations/zoho/status endpoint
- [TASK-005](TASK-005.md) &mdash; Frontend: Build connection status indicator
- [TASK-006](TASK-006.md) &mdash; Frontend: Implement IntegrationService
- [TASK-007](TASK-007.md) &mdash; Unit testing: connection status endpoint

---
*Parent Epic: [EPIC-002](../../epic.md)*
