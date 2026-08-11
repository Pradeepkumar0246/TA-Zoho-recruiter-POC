# EPIC-001 / US-002: Recruiter Logout & Session Handling

## User Story ID
EPIC-001 / US-002

## User Story Title
Recruiter Logout & Session Handling

## User Story Description
As a recruiter, I need my session to be protected and to be able to log out, so that unauthorized users cannot access candidate data on a shared device.

## User Story Statement
- **As a** Recruiter
- **I want** to have my session protected on every screen and be able to log out explicitly
- **So that** unauthorized users cannot view or act on candidate data if I leave my device unattended

## Detailed Functional Requirements
- All application routes other than the login page must require a valid session.
- Expired or invalid tokens must redirect the recruiter to the login page.
- A visible 'Logout' action must be available from the sidebar on every screen.

## Acceptance Criteria
1. Given no valid token, when a recruiter navigates to any protected route, then they are redirected to the Sign In page.
2. Given an expired token, when any API call is made, then the frontend intercepts the 401 response and redirects to Sign In.
3. Given a signed-in recruiter clicks Logout, when the action completes, then the token is cleared and they land on the Sign In page.

## Business Rules
- JWT access tokens must have a defined expiry (e.g. 60 minutes) enforced server-side.

## Validations
- None

## Dependencies
- EPIC-001/US-001

## Expected Result
No screen or API endpoint is reachable without a valid session, and recruiters can end their session on demand.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Implement JWT auth dependency/middleware
- [TASK-002](TASK-002.md) &mdash; Implement authorization/RBAC checks
- [TASK-003](TASK-003.md) &mdash; Implement POST /api/v1/auth/logout endpoint
- [TASK-004](TASK-004.md) &mdash; Frontend: Implement AuthGuard
- [TASK-005](TASK-005.md) &mdash; Frontend: Implement HTTP auth interceptor
- [TASK-006](TASK-006.md) &mdash; Frontend: Implement Logout action
- [TASK-007](TASK-007.md) &mdash; Integration testing: protected route access

---
*Parent Epic: [EPIC-001](../../epic.md)*
