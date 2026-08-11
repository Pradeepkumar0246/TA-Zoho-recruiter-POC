# Task Documentation Index

Target stack: **Backend: Python (FastAPI) + SQLAlchemy + Alembic | Frontend: Angular + RxJS | Database: PostgreSQL**

This folder contains the complete Epic -> User Story -> Implementation Task breakdown for building the Talent Acquisition Candidate Screening application as a real system (Python backend, Angular frontend, PostgreSQL database), based on the approved UI prototype.

## Epics

### [EPIC-001: Authentication & Access Control](Epic/EPIC-001/epic.md)
- [US-001: Recruiter Login](Epic/EPIC-001/US/US-001/US.md) &mdash; 12 tasks
- [US-002: Recruiter Logout & Session Handling](Epic/EPIC-001/US/US-002/US.md) &mdash; 7 tasks

### [EPIC-002: Zoho Recruit Integration & Candidate Synchronization](Epic/EPIC-002/epic.md)
- [US-001: View Zoho Recruit Connection Status](Epic/EPIC-002/US/US-001/US.md) &mdash; 7 tasks
- [US-002: Manually Trigger Candidate Sync from Zoho Recruit](Epic/EPIC-002/US/US-002/US.md) &mdash; 10 tasks
- [US-003: Normalize & Persist Synced Candidate Data](Epic/EPIC-002/US/US-003/US.md) &mdash; 7 tasks
- [US-004: View Sync Summary & Normalization Results](Epic/EPIC-002/US/US-004/US.md) &mdash; 4 tasks

### [EPIC-003: Candidate Management & Profile View](Epic/EPIC-003/epic.md)
- [US-001: View Recruitment Dashboard Overview](Epic/EPIC-003/US/US-001/US.md) &mdash; 6 tasks
- [US-002: Browse & Search Candidate List](Epic/EPIC-003/US/US-002/US.md) &mdash; 7 tasks
- [US-003: View Candidate Profile Details](Epic/EPIC-003/US/US-003/US.md) &mdash; 5 tasks

### [EPIC-004: Candidate Filtering & Saved Filter Templates](Epic/EPIC-004/epic.md)
- [US-001: Toggle & Apply Basic Filters on the Candidates Page](Epic/EPIC-004/US/US-001/US.md) &mdash; 7 tasks
- [US-002: Apply Advanced Filters on the Filters Page](Epic/EPIC-004/US/US-002/US.md) &mdash; 5 tasks
- [US-003: Filter Candidates by Job Description (JD) & Skill Match](Epic/EPIC-004/US/US-003/US.md) &mdash; 7 tasks
- [US-004: Save Filter as Named Template with JD](Epic/EPIC-004/US/US-004/US.md) &mdash; 8 tasks
- [US-005: View & Apply Saved Filter Templates](Epic/EPIC-004/US/US-005/US.md) &mdash; 5 tasks

### [EPIC-005: Duplicate Candidate Detection & Review](Epic/EPIC-005/epic.md)
- [US-001: Detect Possible Duplicate Candidates](Epic/EPIC-005/US/US-001/US.md) &mdash; 4 tasks
- [US-002: View Duplicates Grouped by Job Description](Epic/EPIC-005/US/US-002/US.md) &mdash; 5 tasks
- [US-003: Mark Duplicate Candidate as Reviewed](Epic/EPIC-005/US/US-003/US.md) &mdash; 5 tasks

### [EPIC-006: Candidate Ranking & JD Match Scoring](Epic/EPIC-006/epic.md)
- [US-001: Define Weighted Requirement Profile for a JD](Epic/EPIC-006/US/US-001/US.md) &mdash; 6 tasks
- [US-002: View Candidate Ranking Table with Match Score](Epic/EPIC-006/US/US-002/US.md) &mdash; 6 tasks
- [US-003: View Candidate Match Breakdown](Epic/EPIC-006/US/US-003/US.md) &mdash; 3 tasks

### [EPIC-007: Shortlisting & Excel Export](Epic/EPIC-007/epic.md)
- [US-001: Select Candidates from Ranking to Build Shortlist](Epic/EPIC-007/US/US-001/US.md) &mdash; 8 tasks
- [US-002: Download Shortlist as Excel (.xlsx)](Epic/EPIC-007/US/US-002/US.md) &mdash; 8 tasks
