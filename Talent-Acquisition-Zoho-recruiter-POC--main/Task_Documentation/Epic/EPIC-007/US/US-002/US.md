# EPIC-007 / US-002: Download Shortlist as Excel (.xlsx)

## User Story ID
EPIC-007 / US-002

## User Story Title
Download Shortlist as Excel (.xlsx)

## User Story Description
As a recruiter, I need to download my selected shortlist as an Excel file, so that I can share it with hiring managers outside the application.

## User Story Statement
- **As a** Recruiter
- **I want** to click Download and receive a formatted .xlsx file of my selected shortlist
- **So that** I can share the shortlist with hiring managers and stakeholders outside the system

## Detailed Functional Requirements
- Excel export includes candidate name, experience, skills, location, notice period, and match % at minimum.
- File is named descriptively (e.g. based on the active JD, such as Java_Backend_Shortlist.xlsx).
- An Export Complete confirmation screen shows file name, candidate count, JD, and generation time, with a Download Excel action.

## Acceptance Criteria
1. Given a non-empty shortlist, when the recruiter clicks Download, then a valid .xlsx file is generated and downloaded, and a confirmation screen is shown.
2. Given the export completes, when Zoho Recruit records are checked, then none of them have been modified.

## Business Rules
- Exporting must never write to or modify Zoho Recruit records.

## Validations
- None

## Dependencies
- EPIC-007/US-001

## Expected Result
Recruiters can reliably produce and share a shareable Excel shortlist in a single click from Ranking.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Implement ExcelExportService
- [TASK-002](TASK-002.md) &mdash; Implement GET /api/v1/shortlists/{id}/export endpoint
- [TASK-003](TASK-003.md) &mdash; Implement export file naming convention
- [TASK-004](TASK-004.md) &mdash; Frontend: Build Export Complete confirmation page
- [TASK-005](TASK-005.md) &mdash; Frontend: Implement file download handling
- [TASK-006](TASK-006.md) &mdash; Implement export logging & auditing
- [TASK-007](TASK-007.md) &mdash; Unit testing: Excel export generation & endpoint
- [TASK-008](TASK-008.md) &mdash; Integration testing: ranking-to-download flow

---
*Parent Epic: [EPIC-007](../../epic.md)*
