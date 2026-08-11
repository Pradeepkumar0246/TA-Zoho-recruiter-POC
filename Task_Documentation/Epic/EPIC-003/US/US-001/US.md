# EPIC-003 / US-001: View Recruitment Dashboard Overview

## User Story ID
EPIC-003 / US-001

## User Story Title
View Recruitment Dashboard Overview

## User Story Description
As a recruiter, I need a dashboard overview when I log in, so that I can quickly understand the current state of candidate screening.

## User Story Statement
- **As a** Recruiter
- **I want** to see key stats and quick actions when I land on the app
- **So that** I can immediately understand system state and jump to the task I need

## Detailed Functional Requirements
- Stat cards: total candidates, last Zoho sync time, current shortlist size, saved filter count.
- Quick action links to Candidates, Filters, Ranking, Duplicates.
- Recent activity feed of key events (sync completed, filter used, shortlist prepared, export downloaded).

## Acceptance Criteria
1. Given the recruiter is signed in, when the Dashboard loads, then all four stat cards display current values from the backend.
2. Given recent actions have occurred, when the Dashboard loads, then the most recent activity items are listed in reverse chronological order.

## Business Rules
- None

## Validations
- None

## Dependencies
- EPIC-001/US-001

## Expected Result
A single-glance operational summary is available to every recruiter on login.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Implement GET /api/v1/dashboard/stats endpoint
- [TASK-002](TASK-002.md) &mdash; Implement GET /api/v1/dashboard/recent-activity endpoint
- [TASK-003](TASK-003.md) &mdash; Design `activity_log` table
- [TASK-004](TASK-004.md) &mdash; Frontend: Build Dashboard page
- [TASK-005](TASK-005.md) &mdash; Frontend: Implement DashboardService
- [TASK-006](TASK-006.md) &mdash; Unit testing: dashboard endpoints

---
*Parent Epic: [EPIC-003](../../epic.md)*
