# EPIC-001 / US-001: Recruiter Login

## User Story ID
EPIC-001 / US-001

## User Story Title
Recruiter Login

## User Story Description
As a recruiter, I need to sign in with my credentials so that I can securely access the candidate screening workspace.

## User Story Statement
- **As a** Recruiter
- **I want** to sign in using my email/username and password
- **So that** I can securely access the candidate screening workspace and my session is tied to my recruiter identity

## Detailed Functional Requirements
- Login screen with Email/Username and Password fields, and a 'Remember me' checkbox.
- Backend validates credentials against stored recruiter records.
- On success, backend returns a JWT access token (and refresh token if applicable) plus basic recruiter profile (name, role).
- On failure, a clear, non-revealing error message is shown (does not disclose whether the email or password was wrong).

## Acceptance Criteria
1. Given valid credentials, when the recruiter submits the login form, then they are redirected to the Dashboard and a valid JWT is stored on the client.
2. Given invalid credentials, when the recruiter submits the login form, then an inline error message is displayed and no token is issued.
3. Given an inactive/disabled recruiter account, when login is attempted, then access is denied with an appropriate message.
4. Given the 'Remember me' checkbox is checked, when the recruiter closes and reopens the browser, then their session persists until token expiry.

## Business Rules
- Passwords must never be stored or transmitted in plain text; only password hashes are persisted.
- Only users with role 'Recruiter' or 'Admin' may sign in to this application.

## Validations
- Email/username field is required and must be a valid format.
- Password field is required and masked by default.

## Dependencies
- None

## Expected Result
Recruiters can securely authenticate and are issued a session token that authorizes subsequent API calls.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Design `users` table schema in PostgreSQL
- [TASK-002](TASK-002.md) &mdash; Implement User SQLAlchemy model/entity
- [TASK-003](TASK-003.md) &mdash; Implement Auth repository/data-access layer
- [TASK-004](TASK-004.md) &mdash; Implement AuthService business logic
- [TASK-005](TASK-005.md) &mdash; Implement Login request/response DTOs
- [TASK-006](TASK-006.md) &mdash; Implement POST /api/v1/auth/login endpoint
- [TASK-007](TASK-007.md) &mdash; Implement validation & exception handling for login
- [TASK-008](TASK-008.md) &mdash; Frontend: Build Angular Login page/component
- [TASK-009](TASK-009.md) &mdash; Frontend: Implement AuthService (Angular)
- [TASK-010](TASK-010.md) &mdash; Frontend: Implement login form validation
- [TASK-011](TASK-011.md) &mdash; Unit testing: AuthService & login endpoint (backend)
- [TASK-012](TASK-012.md) &mdash; Unit testing: Login component (frontend)

---
*Parent Epic: [EPIC-001](../../epic.md)*
