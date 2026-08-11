# EPIC-001: Authentication & Access Control

## Epic ID
EPIC-001

## Epic Name / Title
Authentication & Access Control

## Epic Description
Provide secure recruiter sign-in and session management so that only authorized recruiters can access the Talent Acquisition candidate screening workspace.

## Business Objective
Ensure the application is only accessible to authenticated, authorized recruiters and that sessions are handled securely across the Angular frontend and Python backend.

## Scope
Covers recruiter login, JWT-based session/token handling, route protection on the frontend, and logout. Does not cover recruiter self-registration or password reset (out of scope for this phase).

## Key Functional Requirements
- Recruiters must sign in with email/username and password before accessing any screen other than the login page.
- Backend must issue a signed JWT access token on successful authentication.
- Frontend must protect all application routes behind an authentication guard.
- Recruiters must be able to log out, which invalidates the client-side session and returns them to the sign-in screen.

## Expected Outcome
A secure, working sign-in/sign-out flow that gates access to the Dashboard, Candidates, Filters, Ranking, and Duplicates modules.

## Related User Stories
- **US-001** &mdash; Recruiter Login
- **US-002** &mdash; Recruiter Logout & Session Handling

---
*Target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL*
