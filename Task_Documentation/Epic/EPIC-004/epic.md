# EPIC-004: Candidate Filtering & Saved Filter Templates

## Epic ID
EPIC-004

## Epic Name / Title
Candidate Filtering & Saved Filter Templates

## Epic Description
Let recruiters narrow the candidate pool using basic, advanced, and JD-based criteria, and save/reuse frequently used filter combinations.

## Business Objective
Enable fast, repeatable, multi-criteria candidate filtering scoped to specific job requirements, reducing time spent manually reviewing candidates.

## Scope
Covers the inline Basic Filters panel on the Candidates page, the full Filters page (basic + advanced + JD filter), saving named filter templates (with JD), and applying saved templates. Excludes ranking/scoring logic (EPIC-006).

## Key Functional Requirements
- Inline, collapsible Basic Filters panel on the Candidates page with a link to the full Filters page for more criteria.
- Full Filters page with Basic and Advanced filter sections plus a Job Description (JD) filter with skills-to-match input.
- All selected criteria combine using logical AND.
- Recruiters can save the current filter (including selected JD) as a named template and reuse it later.

## Expected Outcome
Recruiters can consistently and quickly reproduce the exact candidate slice needed for any given job requisition.

## Related User Stories
- **US-001** &mdash; Toggle & Apply Basic Filters on the Candidates Page
- **US-002** &mdash; Apply Advanced Filters on the Filters Page
- **US-003** &mdash; Filter Candidates by Job Description (JD) & Skill Match
- **US-004** &mdash; Save Filter as Named Template with JD
- **US-005** &mdash; View & Apply Saved Filter Templates

---
*Target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL*
