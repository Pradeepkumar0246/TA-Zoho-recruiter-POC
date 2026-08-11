# Wireframe Specification

Project: Talent Acquisition Candidate Screening Prototype
Date: 2026-07-21
Entry Point: index.html

## Wireframe Scope
- This wireframe covers every HTML page in the prototype.
- It follows the exact application flow and information hierarchy represented in the HTML and CSS.
- Visual styling is intentionally low fidelity (grayscale), while preserving content structure and actions.

## Screen Order (Workflow)
1. Auth / Login / Default (index.html)
2. Dashboard / Overview / Default (dashboard.html)
3. Sync / Candidates / Default (sync-candidates.html)
4. Sync / Candidates / Success (sync-success.html)
5. Candidates / List / Default (candidates.html)
6. Filters / Builder / Default (filters.html)
7. Filters / Results / Default (filtered-results.html)
8. Ranking / List / Default (ranking.html)
9. Duplicates / Review / Default (duplicates.html)
10. Saved Filters / Templates / Default (saved-filters.html)
11. Candidates / Profile / Default (candidate-details.html)
12. Shortlist / List / Default (shortlist.html)
13. Export / Configure / Default (export.html)
14. Export / Complete / Success (export-success.html)

## Wireframe Conventions
- Header: Context title, connection status, recruiter avatar/name.
- Sidebar: Full nav list with current section highlighted.
- Body: Breadcrumb, page heading/subheading, primary content region.
- Actions: Primary and secondary actions represented as outlined rectangles.
- Tables: Header row, sample rows, action column placeholders.
- Forms: Label + field blocks and grouped sections.
- States: Where prototype has explicit state pages (sync success, export success), these are separate frames.

## Low-Fidelity Screen Specs

### Screen: Auth / Login / Default
- Source: index.html
- Layout: Two-column split (left value proposition panel, right auth panel).
- Regions:
  - Branding row (TA mark + Talent Acquisition label)
  - Value proposition heading/body
  - Process chips row (Sync -> Normalize -> Filter -> Rank -> Shortlist -> Export)
  - Read-only disclaimer text
  - Login card with fields: Email/Username, Password, Remember me checkbox
  - Primary CTA: Sign In
  - Footnote: Authorized recruiters only
- Primary navigation action: Sign In -> Dashboard / Overview / Default

### Screen: Dashboard / Overview / Default
- Source: dashboard.html
- Layout: App shell (sidebar + sticky top header + content column).
- Regions:
  - Stats row of 4 cards
  - Two-column cards: Zoho connection card, quick actions card
  - Recent activity timeline list
- Primary actions:
  - Sync Candidates
  - View Candidates
  - Apply Filters
  - View Shortlist
  - Export Shortlist

### Screen: Sync / Candidates / Default
- Source: sync-candidates.html
- Regions:
  - Breadcrumb
  - Page heading/subheading
  - Two-column cards: Connection details, Sync overview steps
  - Informational blue notice
  - Action row: Start Candidate Sync, Cancel
- Primary action: Start Candidate Sync -> Sync / Candidates / Success

### Screen: Sync / Candidates / Success
- Source: sync-success.html
- Regions:
  - Success hero (icon, title, message)
  - 4-item summary grid
  - Normalization summary chip list
  - Action row: View Candidates, Back to Dashboard
- Primary action: View Candidates -> Candidates / List / Default

### Screen: Candidates / List / Default
- Source: candidates.html
- Regions:
  - Candidate count badge
  - Search + Filters + Saved Filters toolbar
  - Data table with checkbox column and row action View
  - Pagination footer
  - Bottom CTA: Apply Filters
- Actions:
  - Row View -> Candidates / Profile / Default
  - Apply Filters -> Filters / Builder / Default

### Screen: Filters / Builder / Default
- Source: filters.html
- Regions:
  - Info notice (AND filtering)
  - Basic Filters card (skills, exp min/max, locations, notice, CTC ranges, status)
  - Advanced Filters card (degree, education, certification, resume updated, source, relevant exp, previous company, employment status)
  - Filter Summary card
  - Action row: Apply Filters, Save as Template, Clear Filters, Back
- Primary flow actions:
  - Apply Filters -> Filters / Results / Default
  - Save as Template -> Saved Filters / Templates / Default

### Screen: Filters / Results / Default
- Source: filtered-results.html
- Regions:
  - Active filter chips
  - Results count text
  - Results table with duplicate status + view details
  - Bottom actions: View Ranking, Review Duplicates, Save Filter, Continue to Shortlist
- Actions:
  - View Ranking -> Ranking / List / Default
  - Review Duplicates -> Duplicates / Review / Default
  - Save Filter -> Saved Filters / Templates / Default
  - Continue to Shortlist -> Shortlist / List / Default

### Screen: Ranking / List / Default
- Source: ranking.html
- Regions:
  - Requirement profile weighted bars totaling 100 points
  - Ranking table with score/match % and row view action
  - Match breakdown checklist card
  - Informational note
  - Action row: Review Duplicates, Continue to Shortlist, Back to Results
- Actions:
  - Continue to Shortlist -> Shortlist / List / Default
  - Review Duplicates -> Duplicates / Review / Default

### Screen: Duplicates / Review / Default
- Source: duplicates.html
- Regions:
  - 2-up summary counters
  - Candidate comparison card (current record vs possible match)
  - Confidence/source details
  - Mark as Reviewed action
  - Warning info note
  - Bottom actions: Continue to Shortlist, Back to Results
- Actions:
  - Continue to Shortlist -> Shortlist / List / Default
  - Back to Results -> Filters / Results / Default

### Screen: Saved Filters / Templates / Default
- Source: saved-filters.html
- Regions:
  - Template cards with criteria details and apply actions
  - Save Current Filter card (template name field + save button)
  - Prototype-only behavior info note
  - Bottom actions: Create New Filter, Continue to Shortlist
- Actions:
  - Apply Template/View Candidates -> Filters / Results / Default
  - Create New Filter -> Filters / Builder / Default
  - Continue to Shortlist -> Shortlist / List / Default

### Screen: Candidates / Profile / Default
- Source: candidate-details.html
- Regions:
  - Profile identity panel with match and status badges
  - Sectioned details: Contact, Professional, Skills, Education, Compensation, Source
  - Normalized Data card
  - Read-only privacy note
  - Actions: Back to Results, View Match Analysis, Add to Shortlist
- Actions:
  - Back to Results -> Filters / Results / Default
  - View Match Analysis -> Ranking / List / Default
  - Add to Shortlist -> Shortlist / List / Default

### Screen: Shortlist / List / Default
- Source: shortlist.html
- Regions:
  - 3-up summary counters
  - Selected shortlist table (all checked)
  - Info note about non-destructive export
  - Actions: Configure Excel Export, Back to Filtered Results, Review Ranking
- Actions:
  - Configure Excel Export -> Export / Configure / Default

### Screen: Export / Configure / Default
- Source: export.html
- Regions:
  - Export scope option cards
  - Export format option cards
  - Select columns checkbox grid
  - Export preview table
  - File format badge
  - Info note
  - Actions: Generate Excel Export, Back to Shortlist
- Primary action: Generate Excel Export -> Export / Complete / Success

### Screen: Export / Complete / Success
- Source: export-success.html
- Regions:
  - Success hero
  - Export summary grid (file, candidates, format, generated)
  - Source badge
  - Download Excel CTA (self action in prototype)
  - Confirmation info note
  - Return actions: Back to Dashboard, View Candidates, Create Another Filter, View Shortlist

## Reusable Wireframe Blocks
- App shell frame: sidebar + top header + content padding.
- Page intro block: breadcrumb + heading + subtitle.
- Card block: header + body + action row.
- Table block: toolbar(optional) + table + footer(optional).
- Form grid block: 1/2/3-column responsive placeholders.
- Info message block: icon + copy.
- Success block: icon + title + message + summary.

## Wireframe Responsive Guidance
- Desktop baseline: 1440 width frame.
- Tablet: collapse multi-column cards/tables to stacked where needed; preserve app shell concept.
- Mobile: sidebar hidden, single-column layout, auth visual panel hidden as in CSS media query.

## Coverage
- All 14 HTML pages are represented as wireframes.
- Shared stylesheet behaviors (layout, cards, tables, forms, responsive breakpoints) are reflected in structure.
