# EPIC-005: Duplicate Candidate Detection & Review

## Epic ID
EPIC-005

## Epic Name / Title
Duplicate Candidate Detection & Review

## Epic Description
Detect and surface possible duplicate candidate records so recruiters can avoid contacting or shortlisting the same person twice, with visibility into which job requisition (JD) the duplicate was found under.

## Business Objective
Reduce recruiter confusion and duplicate outreach caused by the same candidate appearing multiple times across syncs or hiring drives.

## Scope
Covers duplicate detection logic, JD-grouped duplicate review UI, and marking duplicates as reviewed. Does not merge, delete, or otherwise modify candidate records.

## Key Functional Requirements
- Detect possible duplicates using matching signals such as phone number and email similarity.
- Group and display duplicates by the Job Description (JD) they were found under, since the same candidate may appear across multiple hiring drives.
- Allow a recruiter to mark a duplicate pair as reviewed.
- Never merge, delete, or modify underlying candidate or Zoho Recruit records.

## Expected Outcome
Recruiters get clear, JD-scoped visibility into potential duplicate candidates without any risk to data integrity.

## Related User Stories
- **US-001** &mdash; Detect Possible Duplicate Candidates
- **US-002** &mdash; View Duplicates Grouped by Job Description
- **US-003** &mdash; Mark Duplicate Candidate as Reviewed

---
*Target stack: Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL*
