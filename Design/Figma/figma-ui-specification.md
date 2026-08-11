# Figma UI Specification

Project: Talent Acquisition Candidate Screening
Prototype Source: HTML/CSS in repository root
Version: 1.0
Last Updated: 2026-07-21
Entry Point: index.html

## Section 1 - Prototype Analysis Summary
- HTML files analyzed: 14
- CSS files analyzed: 1
- Identified screens: 14 unique screens
- Entry point: index.html (Auth login)
- Main modules:
  - Authentication
  - Dashboard
  - Candidate Sync
  - Candidate Listing/Profile
  - Filtering and Results
  - Ranking
  - Duplicate Review
  - Saved Filters
  - Shortlist
  - Export
- Overall structure:
  - Single shared application shell on all post-login screens: left sidebar + sticky top header + content area.
  - Single shared stylesheet powers layout, tokens, components, and responsive behavior.
  - Flow is linear-primary but with lateral shortcuts via sidebar and contextual actions.

## Section 2 - Complete File-to-Screen Mapping

| HTML File | Screen | Module | Purpose | Reachable From |
| --- | --- | --- | --- | --- |
| index.html | Auth / Login / Default | Authentication | Recruiter login entry page | Direct entry |
| dashboard.html | Dashboard / Overview / Default | Dashboard | Landing overview and quick actions | Login success, sidebar from all shell pages |
| sync-candidates.html | Sync / Candidates / Default | Candidate Sync | Configure and start Zoho sync | Dashboard, sidebar |
| sync-success.html | Sync / Candidates / Success | Candidate Sync | Sync completion and normalization summary | Sync start action |
| candidates.html | Candidates / List / Default | Candidates | Browse all synchronized candidates | Dashboard quick action, sidebar, sync success |
| candidate-details.html | Candidates / Profile / Default | Candidates | View detailed candidate profile and normalized data | Candidates list, filtered results, ranking, shortlist |
| filters.html | Filters / Builder / Default | Filters | Define basic and advanced filtering criteria | Candidates action, sidebar, results modify filters |
| filtered-results.html | Filters / Results / Default | Filters | View candidates matching active filters | Filters apply, saved template apply |
| ranking.html | Ranking / List / Default | Ranking | Weighted scoring and match breakdown | Filtered results action, candidate profile action, sidebar |
| duplicates.html | Duplicates / Review / Default | Duplicates | Review possible duplicate records | Filtered results action, ranking action, sidebar |
| saved-filters.html | Saved Filters / Templates / Default | Saved Filters | Reuse and save filter templates | Filters save action, filtered results save action, sidebar |
| shortlist.html | Shortlist / List / Default | Shortlist | Final selected candidate set before export | Filtered results continue, ranking continue, duplicates continue, sidebar |
| export.html | Export / Configure / Default | Export | Configure export scope, format, columns, preview | Shortlist action, sidebar |
| export-success.html | Export / Complete / Success | Export | Export generation confirmation and download action | Export generate action |

## Section 3 - Complete Application Sitemap

Application
├── Authentication
│   └── Login (index.html)
│
└── Main Application Shell
    ├── Dashboard (dashboard.html)
    ├── Sync Candidates
    │   ├── Sync Start (sync-candidates.html)
    │   └── Sync Complete (sync-success.html)
    ├── Candidates
    │   ├── Candidate List (candidates.html)
    │   └── Candidate Profile (candidate-details.html)
    ├── Filters
    │   ├── Filter Builder (filters.html)
    │   └── Filtered Results (filtered-results.html)
    ├── Ranking (ranking.html)
    ├── Duplicate Review (duplicates.html)
    ├── Saved Filter Templates (saved-filters.html)
    ├── Shortlist (shortlist.html)
    └── Export
        ├── Export Configure (export.html)
        └── Export Complete (export-success.html)

## Section 4 - Complete User Flow

Primary flow
1. Auth / Login / Default
2. Dashboard / Overview / Default
3. Sync / Candidates / Default
4. Sync / Candidates / Success
5. Candidates / List / Default
6. Filters / Builder / Default
7. Filters / Results / Default
8. Ranking / List / Default
9. Duplicates / Review / Default
10. Shortlist / List / Default
11. Export / Configure / Default
12. Export / Complete / Success

Branching from Filtered Results
- View Ranking -> Ranking / List / Default
- Review Duplicates -> Duplicates / Review / Default
- Save Filter -> Saved Filters / Templates / Default
- Continue to Shortlist -> Shortlist / List / Default

Branching from Candidate Profile
- Back to Results -> Filters / Results / Default
- View Match Analysis -> Ranking / List / Default
- Add to Shortlist -> Shortlist / List / Default

Global shell navigation (all post-login pages)
- Sidebar destinations:
  - Dashboard
  - Sync Candidates
  - Candidates
  - Filters
  - Ranking
  - Duplicates
  - Saved Filters
  - Shortlist
  - Export
- Logout -> Auth / Login / Default

## Section 5 - Figma Page Structure

Page 00 - Cover
- Project name
- Version/date
- Source statement: built from prototype HTML/CSS
- Flow summary chips (Sync -> Normalize -> Filter -> Rank -> Shortlist -> Export)

Page 01 - Design Foundations
- Color tokens mapped from CSS variables
- Typography styles
- Spacing scale
- Radius/shadows
- Grid and breakpoints

Page 02 - Components
- Shell components: sidebar, top header, breadcrumbs
- Inputs/forms
- Buttons and badges
- Table system
- Cards and info boxes
- Option cards and chips
- Success block

Page 03 - Low-Fidelity Wireframes
- All 14 screens in workflow order

Page 04 - High-Fidelity UI
- All 14 screens with production visual mapping

Page 05 - User Flows
- Primary path map
- Branching maps and back/cancel routes

Page 06 - States and Variations
- Success pages (sync/export)
- Form states (default/focus/filled/proposed validation)
- Button states
- Badge/match variants
- Option selected/unselected

Page 07 - Responsive Views
- Desktop 1440
- Tablet 768
- Mobile 375
- App shell and auth adaptations based on media queries

## Section 6 - Design System

### Color Tokens (from :root)
- Primary: #2F5AF2
- Primary Hover: #2447CC
- Secondary Surface: #FFFFFF
- Background App: #F7F8FA
- Sidebar Background: #0B1730
- Sidebar Active Tint: rgba(47,90,242,0.22)
- Text Primary: #0F172A
- Text Secondary: #52607A
- Text Tertiary: #8996AC
- Border Default: #E2E6EE
- Border Soft: #EEF1F6
- Success: #15803D
- Success Surface: #ECFDF3
- Warning: #B45309
- Warning Surface: #FFF7ED
- Error: #B91C1C
- Error Surface: #FEF2F2
- Info: #2447CC / #2F5AF2 family
- Info Surface: #EEF2FF
- Teal Accent: #0D9488
- Teal Surface: #ECFDF9

### Typography (from styles.css)
- Font family body: -apple-system, BlinkMacSystemFont, Segoe UI, Inter, Roboto, Helvetica, Arial, sans-serif
- Base body size: 14
- Base line-height: 1.5
- Heading weight: 700
- H1 page title: 23
- H2 card title: 16
- H3 subheader: 14.5
- Body regular: 13.5
- Small/caption: 12.5 and 11.5
- Labels uppercase/meta: 10.5 to 12
- Mono style (normalization chips): SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace

### Spacing Scale (normalized from CSS)
- 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 36, 40, 56

### Radius
- Small: 6
- Medium: 10
- Large: 16
- Pill/chip: 999

### Shadows
- Small: 0 1 2 rgba(15,23,42,0.06)
- Medium: 0 4 16 rgba(15,23,42,0.08)
- Large: 0 12 32 rgba(11,23,48,0.14)

### Grid and Layout
- App shell desktop: 248 sidebar + flexible content
- Medium desktop: 210 sidebar at <=1080
- Content max width: 1240
- Main content padding: 26 top, 32 horizontal, 60 bottom
- Breakpoints:
  - <=1080: reduce columns in stats/forms/options/summary
  - <=860: hide sidebar, single-column layout, hide auth visual panel

## Section 7 - Component Library

### Navigation
- Sidebar / Item / Default, Hover, Active
- Sidebar / Footer Profile / Default
- Header / Context + Status + Recruiter
- Breadcrumb / Link + Current

### Buttons (variant set)
- Button / Type: Primary, Secondary, Ghost, Outline Teal, Danger Outline
- Button / Size: Small, Medium, Large, Block
- Button / State: Default, Hover, Active, Disabled (define disabled in Figma even if not explicit in HTML)

### Forms
- Input / Text
- Input / Password
- Select
- Checkbox
- Range field group
- Search field with icon
- Form row and form grid wrappers
- States: Default, Focus (explicit in CSS), Filled, Disabled (spec), Error (spec)

### Data Display
- Table / Header cell
- Table / Row
- Table / Footer with pagination
- Match badge / High Mid Low
- Badge / Success Info Warning Neutral Danger

### Content
- Card / Default
- Stat card
- Summary card
- Compare card
- Option card / Selected-Unselected
- Info box / Blue Teal Amber
- Normalization chip

### Feedback
- Success hero block
- Steps list item
- Status pill and status dot

## Section 8 - Complete Wireframe Specification

Wireframe frame list (all at low fidelity):
1. Auth / Login / Default
2. Dashboard / Overview / Default
3. Sync / Candidates / Default
4. Sync / Candidates / Success
5. Candidates / List / Default
6. Filters / Builder / Default
7. Filters / Results / Default
8. Ranking / List / Default
9. Duplicates / Review / Default
10. Saved Filters / Templates / Default
11. Candidates / Profile / Default
12. Shortlist / List / Default
13. Export / Configure / Default
14. Export / Complete / Success

Per-screen wireframe rules
- Preserve exact information hierarchy from source page.
- Preserve heading, table columns, field labels, and action labels exactly.
- Represent every actionable link/button as a clear tap/click target.
- Use grayscale components, spacing based on CSS rhythm.

## Section 9 - Complete High-Fidelity UI Specification

### Screen: Auth / Login / Default
- Source HTML: index.html
- Associated CSS: styles.css
- Module: Authentication
- Purpose: Recruiter sign-in entry point
- Reached From: Direct entry
- Navigates To: Dashboard / Overview / Default via Sign In
- Layout Structure:
  - Split layout with visual brand panel and auth card panel
- Components:
  - Auth brand, value-copy section, process chips, input fields, checkbox, primary CTA
- Primary Action: Sign In
- Secondary Actions: Remember me checkbox
- Form Fields: Email/Username, Password
- States: Default
- Figma Frame Name: Auth / Login / Default

### Screen: Dashboard / Overview / Default
- Source HTML: dashboard.html
- Associated CSS: styles.css
- Module: Dashboard
- Purpose: Post-login command center
- Reached From: Login success, sidebar
- Navigates To: Sync, Candidates, Filters, Shortlist, Export
- Layout Structure:
  - Sidebar + top header + content
- Components:
  - Stats cards, connection card, quick action card, activity steps
- Primary Action: Sync Candidates
- Secondary Actions: View Candidates, Apply Filters, View Shortlist, Export Shortlist
- States: Default
- Figma Frame Name: Dashboard / Overview / Default

### Screen: Sync / Candidates / Default
- Source HTML: sync-candidates.html
- Associated CSS: styles.css
- Module: Candidate Sync
- Purpose: Start candidate retrieval and normalization
- Reached From: Dashboard or sidebar
- Navigates To: Sync success, Dashboard cancel
- Layout Structure: Shell + two-column cards + info + action row
- Components: Detail rows, steps list, info box, buttons
- Primary Action: Start Candidate Sync
- Secondary Actions: Cancel
- States: Default
- Figma Frame Name: Sync / Candidates / Default

### Screen: Sync / Candidates / Success
- Source HTML: sync-success.html
- Associated CSS: styles.css
- Module: Candidate Sync
- Purpose: Confirm sync completion and show metrics
- Reached From: Sync start action
- Navigates To: Candidates list, Dashboard
- Layout Structure: Shell + success block + summary + normalization
- Components: Success hero, summary cards, normalization chips
- Primary Action: View Candidates
- Secondary Actions: Back to Dashboard
- States: Success
- Figma Frame Name: Sync / Candidates / Success

### Screen: Candidates / List / Default
- Source HTML: candidates.html
- Associated CSS: styles.css
- Module: Candidates
- Purpose: Browse candidate table and launch filtering/profile review
- Reached From: Dashboard, Sync success, sidebar
- Navigates To: Candidate profile, Filters, Saved Filters
- Layout Structure: Shell + page header + toolbar + table + pagination + bottom action
- Components: Search input, badges, table, pagination
- Primary Action: Apply Filters
- Secondary Actions: Filters, Saved Filters, row View
- Table/Data: Name, Skills, Experience, Location, Company, Notice, Status, Match, Action
- States: Default
- Figma Frame Name: Candidates / List / Default

### Screen: Filters / Builder / Default
- Source HTML: filters.html
- Associated CSS: styles.css
- Module: Filters
- Purpose: Build multi-criteria candidate filtering query
- Reached From: Candidates, sidebar, results modify filters
- Navigates To: Filtered results, Saved filters, Back to candidates
- Layout Structure: Shell + info + basic form card + advanced form card + summary + actions
- Components: Form fields, selects, chip row, range fields
- Primary Action: Apply Filters
- Secondary Actions: Save as Template, Clear Filters, Back
- Form Fields: Skills, experience min/max, location, preferred location, notice period, company, CTC ranges, status, degree, education, certification, resume updated date, source, relevant exp, previous company, employment status
- States: Default
- Figma Frame Name: Filters / Builder / Default

### Screen: Filters / Results / Default
- Source HTML: filtered-results.html
- Associated CSS: styles.css
- Module: Filters
- Purpose: Show matched candidates and onward decision paths
- Reached From: Filter apply, template apply
- Navigates To: Candidate profile, ranking, duplicates, saved filters, shortlist
- Layout Structure: Shell + chips + table + action row
- Components: Active filter chips, result table, badges, action buttons
- Primary Action: View Ranking
- Secondary Actions: Review Duplicates, Save Filter, Continue to Shortlist
- Table/Data: Candidate, skills, experience, location, notice, match, duplicate status
- States: Default
- Figma Frame Name: Filters / Results / Default

### Screen: Ranking / List / Default
- Source HTML: ranking.html
- Associated CSS: styles.css
- Module: Ranking
- Purpose: Rank filtered candidates by weighted requirement criteria
- Reached From: Filtered results, candidate profile, sidebar
- Navigates To: Candidate profile, duplicates, shortlist, back to results
- Layout Structure: Shell + weighting card + ranking table + breakdown card + note + actions
- Components: Weight bars, ranking table, match checklist, badges
- Primary Action: Continue to Shortlist
- Secondary Actions: Review Duplicates, Back to Results, row View
- States: Default
- Figma Frame Name: Ranking / List / Default

### Screen: Duplicates / Review / Default
- Source HTML: duplicates.html
- Associated CSS: styles.css
- Module: Duplicates
- Purpose: Compare potential duplicate records prior to final shortlist
- Reached From: Filtered results, ranking, sidebar
- Navigates To: Shortlist, back to filtered results
- Layout Structure: Shell + summary counters + compare card + warning + actions
- Components: Compare cards, detail rows, warning info box
- Primary Action: Continue to Shortlist
- Secondary Actions: Mark as Reviewed, Back to Results
- States: Default
- Figma Frame Name: Duplicates / Review / Default

### Screen: Saved Filters / Templates / Default
- Source HTML: saved-filters.html
- Associated CSS: styles.css
- Module: Saved Filters
- Purpose: Apply or save reusable filter templates
- Reached From: Filters save, results save, sidebar
- Navigates To: Filtered results, filters builder, shortlist
- Layout Structure: Shell + template cards + save card + action row
- Components: Detail rows, input, small buttons, info box
- Primary Action: Continue to Shortlist
- Secondary Actions: Apply Template, View Candidates, Save Template, Create New Filter
- Form Fields: Template Name
- States: Default
- Figma Frame Name: Saved Filters / Templates / Default

### Screen: Candidates / Profile / Default
- Source HTML: candidate-details.html
- Associated CSS: styles.css
- Module: Candidates
- Purpose: Read-only detailed candidate review with normalized values
- Reached From: Candidate list, filtered results, ranking, shortlist
- Navigates To: Filtered results, ranking, shortlist
- Layout Structure: Shell + profile card + normalization card + informational note + actions
- Components: Avatar, badges, section titles, detail grid, skills chips, normalization chips
- Primary Action: View Match Analysis
- Secondary Actions: Back to Results, Add to Shortlist
- States: Default
- Figma Frame Name: Candidates / Profile / Default

### Screen: Shortlist / List / Default
- Source HTML: shortlist.html
- Associated CSS: styles.css
- Module: Shortlist
- Purpose: Final review list before export
- Reached From: Filtered results, ranking, duplicates, sidebar
- Navigates To: Export configure, results, ranking, candidate profile
- Layout Structure: Shell + summary + shortlist table + note + actions
- Components: Summary cards, table, badges, match chips
- Primary Action: Configure Excel Export
- Secondary Actions: Back to Filtered Results, Review Ranking, row View
- States: Default
- Figma Frame Name: Shortlist / List / Default

### Screen: Export / Configure / Default
- Source HTML: export.html
- Associated CSS: styles.css
- Module: Export
- Purpose: Configure scope, format, columns and preview before generation
- Reached From: Shortlist, sidebar
- Navigates To: Export success, shortlist
- Layout Structure: Shell + multiple configuration cards + preview + final action row
- Components: Option cards, checkbox grid, preview table, badge, info box
- Primary Action: Generate Excel Export
- Secondary Actions: Back to Shortlist
- Form Fields: Scope options, format options, selectable export columns
- States: Default
- Figma Frame Name: Export / Configure / Default

### Screen: Export / Complete / Success
- Source HTML: export-success.html
- Associated CSS: styles.css
- Module: Export
- Purpose: Confirm export generated and provide follow-up navigation
- Reached From: Export generate action
- Navigates To: Dashboard, Candidates, Filters, Shortlist, self download action
- Layout Structure: Shell + success hero + summary + source + CTAs
- Components: Success block, summary cards, source badge, action set
- Primary Action: Download Excel (prototype self-link)
- Secondary Actions: Back to Dashboard, View Candidates, Create Another Filter, View Shortlist
- States: Success
- Figma Frame Name: Export / Complete / Success

## Section 10 - Interaction Matrix

| Current Screen | Element | Action | Destination/Result |
| --- | --- | --- | --- |
| Auth / Login / Default | Sign In | Click | Dashboard / Overview / Default |
| Any shell page | Sidebar Dashboard | Click | Dashboard / Overview / Default |
| Any shell page | Sidebar Sync Candidates | Click | Sync / Candidates / Default |
| Any shell page | Sidebar Candidates | Click | Candidates / List / Default |
| Any shell page | Sidebar Filters | Click | Filters / Builder / Default |
| Any shell page | Sidebar Ranking | Click | Ranking / List / Default |
| Any shell page | Sidebar Duplicates | Click | Duplicates / Review / Default |
| Any shell page | Sidebar Saved Filters | Click | Saved Filters / Templates / Default |
| Any shell page | Sidebar Shortlist | Click | Shortlist / List / Default |
| Any shell page | Sidebar Export | Click | Export / Configure / Default |
| Any shell page | Logout link | Click | Auth / Login / Default |
| Dashboard | Sync Candidates button | Click | Sync / Candidates / Default |
| Dashboard | View Candidates quick action | Click | Candidates / List / Default |
| Dashboard | Apply Filters quick action | Click | Filters / Builder / Default |
| Dashboard | View Shortlist quick action | Click | Shortlist / List / Default |
| Dashboard | Export Shortlist quick action | Click | Export / Configure / Default |
| Sync / Candidates / Default | Start Candidate Sync | Click | Sync / Candidates / Success |
| Sync / Candidates / Default | Cancel | Click | Dashboard / Overview / Default |
| Sync / Candidates / Success | View Candidates | Click | Candidates / List / Default |
| Sync / Candidates / Success | Back to Dashboard | Click | Dashboard / Overview / Default |
| Candidates / List / Default | Row View | Click | Candidates / Profile / Default |
| Candidates / List / Default | Filters button | Click | Filters / Builder / Default |
| Candidates / List / Default | Saved Filters button | Click | Saved Filters / Templates / Default |
| Candidates / List / Default | Apply Filters | Click | Filters / Builder / Default |
| Filters / Builder / Default | Apply Filters | Click | Filters / Results / Default |
| Filters / Builder / Default | Save as Template | Click | Saved Filters / Templates / Default |
| Filters / Builder / Default | Clear Filters | Click | Filters / Builder / Default |
| Filters / Builder / Default | Back | Click | Candidates / List / Default |
| Filters / Results / Default | Modify Filters | Click | Filters / Builder / Default |
| Filters / Results / Default | Row View Details | Click | Candidates / Profile / Default |
| Filters / Results / Default | View Ranking | Click | Ranking / List / Default |
| Filters / Results / Default | Review Duplicates | Click | Duplicates / Review / Default |
| Filters / Results / Default | Save Filter | Click | Saved Filters / Templates / Default |
| Filters / Results / Default | Continue to Shortlist | Click | Shortlist / List / Default |
| Ranking / List / Default | Row View | Click | Candidates / Profile / Default |
| Ranking / List / Default | Review Duplicates | Click | Duplicates / Review / Default |
| Ranking / List / Default | Continue to Shortlist | Click | Shortlist / List / Default |
| Ranking / List / Default | Back to Results | Click | Filters / Results / Default |
| Duplicates / Review / Default | Mark as Reviewed | Click | Duplicates / Review / Default |
| Duplicates / Review / Default | Continue to Shortlist | Click | Shortlist / List / Default |
| Duplicates / Review / Default | Back to Results | Click | Filters / Results / Default |
| Saved Filters / Templates / Default | Apply Template | Click | Filters / Results / Default |
| Saved Filters / Templates / Default | View Candidates | Click | Filters / Results / Default |
| Saved Filters / Templates / Default | Save Template | Click | Saved Filters / Templates / Default |
| Saved Filters / Templates / Default | Create New Filter | Click | Filters / Builder / Default |
| Saved Filters / Templates / Default | Continue to Shortlist | Click | Shortlist / List / Default |
| Candidates / Profile / Default | Back to Results | Click | Filters / Results / Default |
| Candidates / Profile / Default | View Match Analysis | Click | Ranking / List / Default |
| Candidates / Profile / Default | Add to Shortlist | Click | Shortlist / List / Default |
| Shortlist / List / Default | Row View | Click | Candidates / Profile / Default |
| Shortlist / List / Default | Configure Excel Export | Click | Export / Configure / Default |
| Shortlist / List / Default | Back to Filtered Results | Click | Filters / Results / Default |
| Shortlist / List / Default | Review Ranking | Click | Ranking / List / Default |
| Export / Configure / Default | Generate Excel Export | Click | Export / Complete / Success |
| Export / Configure / Default | Back to Shortlist | Click | Shortlist / List / Default |
| Export / Complete / Success | Download Excel | Click | Export / Complete / Success |
| Export / Complete / Success | Back to Dashboard | Click | Dashboard / Overview / Default |
| Export / Complete / Success | View Candidates | Click | Candidates / List / Default |
| Export / Complete / Success | Create Another Filter | Click | Filters / Builder / Default |
| Export / Complete / Success | View Shortlist | Click | Shortlist / List / Default |

## Section 11 - Responsive Specification
- Base desktop behavior
  - App shell with fixed sidebar and sticky top header.
  - Multi-column cards and grids.
- At max-width 1080
  - Sidebar width reduces to 210.
  - Stats grid becomes 2 columns.
  - Form grid becomes 2 columns.
  - Compare cards become single column.
  - Option cards in 3-col mode become 2 columns.
  - Summary grid becomes 2 columns.
- At max-width 860
  - Auth visual panel hidden; auth card only.
  - Sidebar hidden; single-column application body.
  - Detail grid to single column.
  - Form grid to single column.
  - Checkbox grid to 2 columns.
  - Two-column section to single column.
  - Option cards to single column.
  - 3-column utility grid to single column.
- Figma responsive frames to produce
  - Desktop: 1440
  - Tablet: 768
  - Mobile: 375

## Section 12 - Figma Prototype Flow
- Start frame: Auth / Login / Default
- Primary prototype chain:
  - Auth / Login / Default -> Dashboard / Overview / Default
  - Dashboard / Overview / Default -> Sync / Candidates / Default -> Sync / Candidates / Success -> Candidates / List / Default
  - Candidates / List / Default -> Filters / Builder / Default -> Filters / Results / Default
  - Filters / Results / Default -> Ranking / List / Default -> Duplicates / Review / Default -> Shortlist / List / Default
  - Shortlist / List / Default -> Export / Configure / Default -> Export / Complete / Success
- Branch links to connect
  - Candidate profile entry points from Candidates, Results, Ranking, Shortlist
  - Saved Filters entry and return paths
  - Back/Cancel paths
  - Global sidebar jumps from each shell frame
  - Logout to login from every shell frame

## Section 13 - Coverage Validation

### HTML Coverage Checklist

| HTML File | Analyzed | Screen Mapped | Wireframe | High-Fidelity | Navigation |
| --- | --- | --- | --- | --- | --- |
| index.html | Yes | Yes | Yes | Yes | Yes |
| dashboard.html | Yes | Yes | Yes | Yes | Yes |
| sync-candidates.html | Yes | Yes | Yes | Yes | Yes |
| sync-success.html | Yes | Yes | Yes | Yes | Yes |
| candidates.html | Yes | Yes | Yes | Yes | Yes |
| candidate-details.html | Yes | Yes | Yes | Yes | Yes |
| filters.html | Yes | Yes | Yes | Yes | Yes |
| filtered-results.html | Yes | Yes | Yes | Yes | Yes |
| ranking.html | Yes | Yes | Yes | Yes | Yes |
| duplicates.html | Yes | Yes | Yes | Yes | Yes |
| saved-filters.html | Yes | Yes | Yes | Yes | Yes |
| shortlist.html | Yes | Yes | Yes | Yes | Yes |
| export.html | Yes | Yes | Yes | Yes | Yes |
| export-success.html | Yes | Yes | Yes | Yes | Yes |

### CSS Coverage Checklist

| CSS File | Analyzed | Tokens Extracted | Components Mapped | Responsive Rules Mapped |
| --- | --- | --- | --- | --- |
| styles.css | Yes | Yes | Yes | Yes |

### Notes and Assumptions
- No separate image, icon, SVG, or font asset files were present in the repository tree; iconography is emoji/symbol-based in HTML.
- No JavaScript files were present; all interactions are represented as hyperlink-driven prototype navigation.
- Prototype self-links were preserved as modeled states (for example, Download Excel links to export-success.html).
