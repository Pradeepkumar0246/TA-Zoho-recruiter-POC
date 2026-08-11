# EPIC-007: Shortlisting & Excel Export

## Epic ID
EPIC-007

## Epic Name / Title
Shortlisting & Excel Export

## Epic Description
Let recruiters select candidates directly from the Ranking page to build a shortlist and download it as an Excel workbook, without a separate shortlist or export configuration screen.

## Business Objective
Streamline the final step of the workflow so shortlisting and exporting happen in one place, in one motion.

## Scope
Covers candidate selection/shortlist state on the Ranking page and generating/downloading the resulting .xlsx file. Excludes any multi-step export configuration screen (explicitly removed from scope).

## Key Functional Requirements
- Selection checkboxes (including select-all) on the Ranking table build a live shortlist.
- A live selection counter and a Download button, enabled only when at least one candidate is selected.
- Downloading produces a formatted .xlsx workbook of the selected candidates and does not modify Zoho Recruit data.

## Expected Outcome
Recruiters go from ranked candidates to a downloaded Excel shortlist in a single, uninterrupted flow.

## Related User Stories
- **US-001** &mdash; Select Candidates from Ranking to Build Shortlist
- **US-002** &mdash; Download Shortlist as Excel (.xlsx)

---
*Target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL*
