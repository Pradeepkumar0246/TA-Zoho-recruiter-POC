# EPIC-006: Candidate Ranking & JD Match Scoring

## Epic ID
EPIC-006

## Epic Name / Title
Candidate Ranking & JD Match Scoring

## Epic Description
Score and rank filtered candidates against a weighted requirement profile for a specific Job Description, giving recruiters an objective, explainable priority order.

## Business Objective
Provide a transparent, configurable scoring mechanism that helps recruiters prioritize candidates for a given role without automating the hiring decision itself.

## Scope
Covers defining weighted criteria for a JD, computing and displaying ranked results with match percentage, and showing a per-candidate match breakdown. Excludes shortlisting/export (EPIC-007).

## Key Functional Requirements
- Weighted requirement profile per JD (criteria and point weights totalling 100).
- Ranking table showing rank, candidate, skill match, experience, notice period, score, and match %.
- Per-candidate match breakdown showing matched/not-matched status for each criterion.

## Expected Outcome
Recruiters get an objective, explainable ranking of candidates for a specific role, supporting (not replacing) their judgement.

## Related User Stories
- **US-001** &mdash; Define Weighted Requirement Profile for a JD
- **US-002** &mdash; View Candidate Ranking Table with Match Score
- **US-003** &mdash; View Candidate Match Breakdown

---
*Target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL*
