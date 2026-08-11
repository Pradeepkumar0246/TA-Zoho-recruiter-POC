# EPIC-004 / US-004: Save Filter as Named Template with JD

## User Story ID
EPIC-004 / US-004

## User Story Title
Save Filter as Named Template with JD

## User Story Description
As a recruiter, I need to save my current filter (including the selected JD) under a name, so that I can reuse it later without rebuilding it.

## User Story Statement
- **As a** Recruiter
- **I want** to click 'Save Filter', enter a name in a prompt, and have the current criteria (including JD) saved
- **So that** I can reapply the exact same search later without reconfiguring every field

## Detailed Functional Requirements
- 'Save Filter' button is available only on the Filters page.
- Clicking it opens a modal prompting for a filter name (no separate page).
- Saving persists all current criteria plus the selected JD.

## Acceptance Criteria
1. Given the recruiter clicks 'Save Filter' and enters a name, when they confirm, then a new saved filter record is created and appears in the Saved Filter Templates list.
2. Given the recruiter leaves the name blank, when they try to confirm, then an inline validation message prevents saving.
3. Given a JD was selected at save time, when the filter is saved, then the JD is stored with it and shown in the saved template.

## Business Rules
- Filter names should be unique per recruiter (duplicate names are allowed but flagged, or rejected, per product decision -- default: allowed with a warning).

## Validations
- Filter name is required, 3-80 characters.

## Dependencies
- EPIC-004/US-002
- EPIC-004/US-003

## Expected Result
Recruiters can capture and name a precise filter configuration, including JD, for later reuse.

## Implementation Tasks
- [TASK-001](TASK-001.md) &mdash; Design `saved_filters` table
- [TASK-002](TASK-002.md) &mdash; Implement SavedFilter model/entity & repository
- [TASK-003](TASK-003.md) &mdash; Implement POST /api/v1/saved-filters endpoint
- [TASK-004](TASK-004.md) &mdash; Implement Save Filter request/response DTOs
- [TASK-005](TASK-005.md) &mdash; Implement save-filter validation & exception handling
- [TASK-006](TASK-006.md) &mdash; Frontend: Build Save Filter modal
- [TASK-007](TASK-007.md) &mdash; Frontend: Implement SavedFilterService (create)
- [TASK-008](TASK-008.md) &mdash; Unit testing: save filter endpoint & validation

---
*Parent Epic: [EPIC-004](../../epic.md)*
