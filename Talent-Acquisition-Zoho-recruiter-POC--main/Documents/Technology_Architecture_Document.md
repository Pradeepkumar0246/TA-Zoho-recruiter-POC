

Technology Architecture DocumentTalent Acquisition Screening Platform
## TECHNOLOGY ARCHITECTURE DOCUMENT
## Talent Acquisition Candidate Screening & Filtering Platform
## A Standalone Recruitment Technology System
Document NameTechnology Architecture Document
ProjectTalent Acquisition Candidate Screening & Filtering Platform
## Version1.0
StatusDraft for Stakeholder Review
Prepared ForSolution Architects, Engineering Team, HR Technology Stakeholders
ClassificationInternal / Confidential
## Date16 July 2026
Confidential – Internal Use   |   Page 1 of 13

Technology Architecture DocumentTalent Acquisition Screening Platform
Table of Contents
1  Purpose and Document Scope..........................................................................................................4
2  Technology Stack Justification..........................................................................................................4
2.2  Technology Decision Rationale.........................................................................................................5
3  Component Architecture...................................................................................................................5
3.1  Layered Component View.................................................................................................................5
3.2  Core Services.....................................................................................................................................5
3.3  Component Interaction Principles....................................................................................................6
4  Backend Architecture........................................................................................................................6
4.1  Module Structure..............................................................................................................................6
4.2  Request Lifecycle..............................................................................................................................7
4.3  API Documentation...........................................................................................................................7
5  Frontend Architecture.......................................................................................................................7
5.1  Application Structure........................................................................................................................7
5.2  API Communication..........................................................................................................................7
5.3  UI/UX Considerations........................................................................................................................7
6  Database Architecture......................................................................................................................8
6.1  Core Entity Groups............................................................................................................................8
6.2  Design Principles...............................................................................................................................8
7  API Architecture................................................................................................................................8
7.1  API Design Principles.........................................................................................................................9
7.2  Representative Endpoint Groups......................................................................................................9
8  Resume Processing Architecture......................................................................................................9
8.1  Processing Flow.................................................................................................................................9
8.2  Design Considerations......................................................................................................................9
9  Integration Architecture..................................................................................................................10
9.1  Source Adapters..............................................................................................................................10
9.2  Synchronization Strategy................................................................................................................10
9.3  Extensibility.....................................................................................................................................10
10  Security Architecture.....................................................................................................................10
10.1  Phase 1 Security Controls.............................................................................................................10
10.2  Future Security Roadmap.............................................................................................................11
11  Deployment Architecture..............................................................................................................11
11.1  Deployment Topology...................................................................................................................11
11.2  Containerization Considerations...................................................................................................11
12  Scalability Considerations.............................................................................................................11
12.1  Scaling Approach...........................................................................................................................11
13  Risks and Assumptions..................................................................................................................12
13.1  Assumptions..................................................................................................................................12
13.2  Risks..............................................................................................................................................12
Confidential – Internal Use   |   Page 2 of 13

Technology Architecture DocumentTalent Acquisition Screening Platform
14  Future Roadmap Considerations..................................................................................................12
Confidential – Internal Use   |   Page 3 of 13

Technology Architecture DocumentTalent Acquisition Screening Platform
1  Purpose and Document Scope
This Technology Architecture Document (TAD) defines the technology stack, component design, and engineering
architecture for the Talent Acquisition Candidate Screening & Filtering Platform. It sets out the concrete
technology decisions — frameworks, languages, data stores, integration mechanisms, and infrastructure choices
— that the engineering team will build against, along with the rationale behind each.
The scope of this document is strictly technical. It covers the technology stack, component architecture, backend
and frontend design, database and API architecture, resume processing, integration, security, deployment,
scalability, risks, and future roadmap considerations for the platform.
## 2  Technology Stack Justification
The technology stack was selected to balance rapid delivery, maintainability, and a clear upgrade path to AI-
assisted candidate matching, without introducing infrastructure that the initial deployment scale does not
warrant.
LayerTechnologyJustification
FrontendAngular (component-based)
Mature enterprise framework with strong
support for large, data-dense grids, forms, and
modular feature development; aligns with the
Zoho Recruit-inspired UI expectation.
Backend APIPython FastAPI
High-performance async framework with
native OpenAPI/Swagger generation, strong
typing via Pydantic, and built-in background
task support that removes the need for a
separate task queue at current scale.
DatabasePostgreSQL
Proven relational store for structured
candidate, scoring, and metadata records;
strong support for indexing, full-text search,
and JSON columns for semi-structured resume-
extraction output.
File StorageLocal file system (initial)
Simplest reliable option for the current single-
server deployment target; abstracted behind a
storage interface so cloud object storage can
be introduced later without touching business
logic.
## Background
## Processing
FastAPI Background Tasks
Matches current scale (thousands to tens of
thousands of candidates) without operating
Redis, Celery, Kafka, or RabbitMQ; keeps the
operational footprint minimal.
ContainerizationPodman (optional)
Rootless, daemonless container runtime
compatible with the local-server deployment
assumption; Kubernetes is explicitly not
required.
Confidential – Internal Use   |   Page 4 of 13

Technology Architecture DocumentTalent Acquisition Screening Platform
## 2.2 Technology Decision Rationale
•Avoid premature infrastructure: Redis, Celery, Kafka, and RabbitMQ are deliberately excluded from the
initial phase. FastAPI's native background task mechanism is sufficient for resume parsing, scoring, and
duplicate checks at the expected volume, and the component boundaries are drawn so a queue can be
introduced later without a rewrite.
•Relational database over NoSQL: Candidate records are highly structured (skills, experience, education,
scoring) and benefit from relational integrity, joins across candidates/sources/scores, and mature reporting
tooling — PostgreSQL is a better fit than a document store for this access pattern.
•Local file storage with an abstraction boundary: Resume files are stored on the local file system for the
initial version, but all file access goes through a storage-service interface so the implementation can later be
swapped for S3-compatible object storage without changing calling code.
•Framework-generated API documentation: FastAPI's automatic OpenAPI schema removes a maintenance
burden and keeps Swagger UI and ReDoc continuously accurate as endpoints evolve.
•Design for future AI uplift: The scoring and matching engine is implemented as a pluggable strategy so
keyword/weighted scoring can be replaced or augmented by embedding-based ranking later without
restructuring the candidate pipeline.
## 3  Component Architecture
The system is organized into five logical layers: presentation, API, processing/domain services, data, and
integration. Each layer is independently deployable-in-principle, communicating only through well-defined
interfaces.
## 3.1 Layered Component View
LayerComponentsResponsibility
## Presentation
Angular SPA (candidate grid, filter builder,
upload UI, dashboards)
Recruiter-facing interaction;
consumes REST APIs only
## API
FastAPI routers (candidates, uploads,
filters, scoring, export, auth)
Request validation,
authentication, orchestration of
domain services
## Domain Services
## Ingestion, Normalization, Duplicate
Detection, Scoring/Ranking, Resume
## Extraction, Export
Core business logic, independent
of transport and storage details
DataPostgreSQL, Local File Storage
Persistence of structured data
and resume files
IntegrationZoho Recruit API Client, Excel/CSV Importer
External data ingestion, isolated
behind a common ingestion
interface
## 3.2 Core Services
•Ingestion Service: Normalizes input from Zoho Recruit APIs, Excel uploads, and CSV uploads into a single
internal candidate representation before any downstream processing occurs.
Confidential – Internal Use   |   Page 5 of 13

Technology Architecture DocumentTalent Acquisition Screening Platform
•Normalization Service: Applies rule-based mapping tables (skills, experience, location, education) so
filtering, scoring, and export always operate on consistent values, independent of source formatting.
•Duplicate Detection Service: Evaluates incoming candidates against existing records using email and mobile
number matching in Phase 1, with an interface designed to accept resume fingerprinting and similarity-
based strategies later.
•Scoring & Ranking Service: Applies a weighted keyword-matching model across skill, experience, education,
location, and certification dimensions, returning both a numeric score and a rank.
•Resume Processing Service: Handles file storage, text extraction (PDF/DOC/DOCX), and structured field
extraction, running as a background task so upload requests remain fast.
•Export Service: Produces shortlist exports in the format required by recruiters or hiring managers.
## 3.3 Component Interaction Principles
•The Angular frontend never talks to PostgreSQL, the file system, or Zoho Recruit directly — all access is
mediated by the FastAPI layer.
•Domain services depend on repository interfaces, not directly on SQL or file-system calls, so storage
implementations can change independently.
•The integration layer (Zoho client, Excel/CSV importer) implements a shared 'candidate source adapter'
contract, so new sources can be added without modifying the ingestion pipeline.
•Background tasks communicate status via a processing-status column in PostgreSQL rather than an external
message broker.
## 4  Backend Architecture
The backend is a modular monolith built on FastAPI. A modular monolith was chosen over microservices
because the current team size, deployment target (single local server), and data volume do not justify the
operational overhead of distributed services; internal module boundaries are, however, kept clean enough to
extract services later if needed.
## 4.1 Module Structure
ModuleContents
api/
FastAPI routers grouped by resource (candidates, uploads, filters, scoring, export,
auth)
services/
Domain logic: ingestion, normalization, duplicate detection, scoring, resume
processing, export
integrations/Zoho Recruit API client, Excel/CSV parsers
repositories/Data-access layer over PostgreSQL (SQLAlchemy models and queries)
schemas/Pydantic request/response models used for validation and OpenAPI generation
background/FastAPI Background Task definitions for parsing, scoring, and duplicate checks
core/Configuration, security utilities, logging, exception handling
Confidential – Internal Use   |   Page 6 of 13

Technology Architecture DocumentTalent Acquisition Screening Platform
## 4.2 Request Lifecycle
A typical write request (e.g., resume upload) follows this path: the Angular client submits a multipart request to
a FastAPI router; the router validates the payload against a Pydantic schema; the file is persisted through the
storage repository; a database record is created with a 'pending' processing status; a background task is
scheduled for text extraction and scoring; and the API returns immediately with the created candidate ID,
allowing the frontend to poll or refresh for status.
4.3 API Documentation
•OpenAPI schema generated automatically from route and schema definitions.
•Swagger UI exposed for interactive exploration during development and internal testing.
•ReDoc exposed as a cleaner reference view for API consumers.
## 5  Frontend Architecture
The frontend is an Angular single-page application built with a component-based modular architecture, styled to
reflect a professional enterprise tool with visual cues drawn from Zoho Recruit, and designed desktop-first with
responsive behavior for smaller viewports.
## 5.1 Application Structure
ModulePurpose
Core ModuleSingleton services: authentication, HTTP interceptors, global error handling
Shared ModuleReusable UI components, pipes, directives (grids, badges, status chips)
Candidates Feature ModuleCandidate list, detail view, filter builder, scoring display
Ingestion Feature ModuleExcel/CSV upload, Zoho sync trigger, ingestion status tracking
Export Feature ModuleShortlist selection and export configuration
Admin/Settings ModuleConfiguration screens, reserved for future RBAC and SSO settings
5.2 API Communication
•Dedicated Angular services encapsulate all HTTP calls; components never call HttpClient directly.
•An HTTP interceptor centralizes authentication headers, error normalization, and retry-on-network-failure
behavior.
•OpenAPI/Swagger-generated TypeScript clients are considered to keep frontend request/response types
synchronized with the backend schema.
5.3 UI/UX Considerations
•Professional enterprise visual language: neutral palette, dense but legible data grids, clear status indicators
for processing state.
•Desktop-first responsive layout, since recruiters primarily work from desktop workstations, with graceful
degradation on smaller screens.
Confidential – Internal Use   |   Page 7 of 13

Technology Architecture DocumentTalent Acquisition Screening Platform
•Component reuse for filter builders and grids across the candidate list, duplicate-review, and export screens
to minimize duplication.
## 6  Database Architecture
PostgreSQL is the system of record for all structured data. The schema is designed to separate candidate
identity, source-specific metadata, resume metadata, processing status, and scoring so each concern can evolve
independently.
## 6.1 Core Entity Groups
Entity GroupRepresentative TablesPurpose
Candidatecandidates, candidate_profiles
Canonical, normalized candidate identity
and profile fields
## Source Metadata
candidate_sources,
ingestion_batches
Tracks which source (Zoho, Excel, CSV) each
candidate record originated from, and
batch-level ingestion metadata
Resumeresumes, resume_extractions
File references, extracted text, and
structured extraction output
## Processingprocessing_status
State of each pipeline stage (ingested,
normalized, extracted, scored, duplicate-
checked)
Scoringcandidate_scores, scoring_criteria
Per-candidate scores against configured
weighted criteria
## Duplicate Detectionduplicate_matches
Recorded matches between candidate
records with match basis (email/mobile)
## 6.2 Design Principles
•Separation of raw and normalized data: Original source values are retained alongside normalized values so
normalization rules can be audited or reprocessed without re-fetching from source.
•Explicit processing-status tracking: Each candidate record carries a status field updated as it moves through
ingestion, normalization, extraction, duplicate-checking, and scoring — this is what allows background-task-
based processing to be observable without a message broker.
•Indexing for filter performance: Indexes on email, mobile number, normalized skill values, and location
support fast filtering at the expected scale of thousands to tens of thousands of records.
•File reference, not file content: Resume binaries live on the file system; PostgreSQL stores the
path/reference and extracted text, keeping the database size manageable.
7  API Architecture
The backend exposes a public REST API consumed by the Angular frontend. Endpoints are organized by resource
and versioned to allow non-breaking evolution.
Confidential – Internal Use   |   Page 8 of 13

Technology Architecture DocumentTalent Acquisition Screening Platform
7.1 API Design Principles
•Resource-oriented REST endpoints (e.g., /candidates, /uploads, /filters, /export) rather than RPC-style
actions, except where an action genuinely has no resource shape (e.g., triggering a Zoho sync).
•Consistent pagination, filtering, and sorting query parameters across list endpoints.
•Structured error responses with machine-readable error codes to support consistent frontend handling.
•All request/response bodies validated through Pydantic schemas, which double as the source of the
OpenAPI specification.
## 7.2 Representative Endpoint Groups
GroupExample EndpointsPurpose
CandidatesGET /candidates, GET /candidates/{id}
Retrieve normalized candidate records
with filter/sort/pagination
## Ingestion
POST /uploads/excel, POST /uploads/csv,
POST /sync/zoho
Trigger ingestion from a given source
FilteringPOST /filters/searchApply multi-criteria filter queries
## Scoring
POST /scoring/run, GET
## /candidates/{id}/score
Trigger and retrieve weighted scoring
results
ExportPOST /export/shortlist
Generate a shortlist export of selected
candidates
AuthPOST /auth/login, POST /auth/refresh
Session authentication (simple
mechanism in Phase 1)
## 8  Resume Processing Architecture
Resume handling supports both manual candidate entry and file upload, with automatic extraction of candidate
details from PDF, DOC, and DOCX files.
## 8.1 Processing Flow
•1. File received via upload endpoint and validated for format and size.
•2. Original file persisted to local file storage; a resume record is created in PostgreSQL referencing the stored
path.
•3. A FastAPI background task performs text extraction appropriate to the file format.
•4. Extracted text is parsed into structured candidate fields where possible (contact details, skills,
experience).
•5. Extraction results are stored alongside the original file reference, and processing status is updated for the
frontend to reflect.
## 8.2 Design Considerations
•Format-specific extraction strategies: Separate extraction handlers per format (PDF, DOC, DOCX) behind a
common interface, so support for additional formats can be added independently.
Confidential – Internal Use   |   Page 9 of 13

Technology Architecture DocumentTalent Acquisition Screening Platform
•Asynchronous by default: Extraction always runs as a background task so upload endpoints remain
responsive even for large files.
•Graceful degradation: If automatic extraction fails or is incomplete, the original file and any partial
extraction remain available, and the candidate record falls back to manually entered fields.
## 9  Integration Architecture
The platform ingests candidates from Zoho Recruit APIs, Excel uploads, and CSV uploads. Each source is
implemented as an adapter conforming to a shared candidate-source interface, keeping the core pipeline
source-agnostic.
## 9.1 Source Adapters
SourceMechanismNotes
## Zoho Recruit
Official Zoho Recruit REST APIs, backend-
only
Manual, user-triggered
synchronization in Phase 1;
credentials/tokens never exposed
to the frontend
## Excel Upload
File upload parsed server-side
## (pandas/openpyxl)
Column mapping applied before
entering the normalization
pipeline
CSV UploadFile upload parsed server-side
Same normalization pipeline as
Excel, via the shared adapter
interface
## 9.2 Synchronization Strategy
Synchronization is manual and user-triggered in the initial phase: a recruiter or admin explicitly initiates a Zoho
fetch or file upload. The adapter interface and processing-status model are designed so scheduled
synchronization, incremental synchronization, and webhook-based synchronization can be added later without
redesigning the ingestion pipeline.
## 9.3 Extensibility
New candidate sources are added by implementing the source-adapter interface and registering the adapter; no
changes to normalization, duplicate detection, scoring, or export are required, since all sources converge on the
same internal candidate representation.
## 10  Security Architecture
The initial phase uses a simple authentication and authorization mechanism appropriate for a small, trusted
internal user base, with a clear path toward stronger controls as adoption grows.
## 10.1 Phase 1 Security Controls
•Simple username/password (or equivalent) authentication guarding all API access.
Confidential – Internal Use   |   Page 10 of 13

Technology Architecture DocumentTalent Acquisition Screening Platform
•All external integration credentials (e.g., Zoho API credentials) stored and used only on the backend; never
exposed to the Angular client.
•Input validation at the API boundary via Pydantic schemas to reduce injection and malformed-data risk.
•File-type and size validation on resume uploads before storage or processing.
## 10.2 Future Security Roadmap
•JWT authentication: Stateless token-based authentication to support horizontal scaling of the API layer.
•Role-Based Access Control (RBAC): Differentiated permissions for recruiters, hiring managers, and
administrators.
•Enterprise SSO integration: Support for organizational identity providers as the platform is adopted more
broadly.
## 11  Deployment Architecture
The platform targets local server infrastructure rather than cloud-native deployment. Containerization is
optional, with Podman preferred over Docker for its rootless, daemonless operation, and Kubernetes is explicitly
out of scope.
## 11.1 Deployment Topology
ComponentDeployment Approach
## Angular Frontend
Built as static assets, served by a lightweight web server (e.g., Nginx) or the
same host as the API
FastAPI Backend
Runs as a systemd-managed process or, optionally, inside a Podman
container on the local server
PostgreSQLInstalled on the local server (or a dedicated database host as scale requires)
File StorageLocal disk volume on the server, with a defined backup routine
## 11.2 Containerization Considerations
•Containerization is optional for the initial rollout; the application must run equally well directly on the host.
•If containerized, Podman compatibility is a requirement, including rootless execution.
•Kubernetes orchestration is not required and is explicitly excluded from the initial deployment scope.
## 12  Scalability Considerations
The architecture is sized for thousands to tens of thousands of candidate profiles, with the ability to grow
moderately without significant redesign.
## 12.1 Scaling Approach
•Stateless API layer: FastAPI application instances hold no in-memory session state beyond what is safe to
lose, allowing additional instances to be run behind a load balancer if needed.
Confidential – Internal Use   |   Page 11 of 13

Technology Architecture DocumentTalent Acquisition Screening Platform
•Database indexing and query design: Filtering, scoring, and duplicate-detection queries are designed
around indexed columns to keep response times acceptable as candidate volume grows.
•Background task throughput: FastAPI Background Tasks are adequate at current scale; if processing volume
grows substantially, the architecture's service boundaries allow a task queue (e.g., Celery with Redis) to be
introduced without restructuring domain logic.
•Storage growth: Local file storage is monitored for capacity; the storage-service abstraction allows migration
to cloud object storage if local disk becomes a constraint.
13  Risks and Assumptions
## 13.1 Assumptions
•The organization has valid Zoho Recruit API access for candidate ingestion.
•Candidate data volumes remain within the thousands-to-tens-of-thousands range for the initial phases.
•A single local server (or small server cluster) is sufficient infrastructure for the initial deployment.
•Resume files are predominantly PDF, DOC, or DOCX; other formats are out of scope initially.
## 13.2 Risks
RiskImpactMitigation
FastAPI Background Tasks
become a bottleneck as volume
grows
Delayed resume
processing and scoring
Service boundaries are designed to
allow migration to a dedicated task
queue without rewriting domain
logic
Local file storage capacity
constraints
Inability to store new
resumes
Storage-service abstraction allows
migration to cloud object storage
Simple authentication
insufficient as adoption grows
Weaker access control at
scale
Phased roadmap to JWT, RBAC, and
SSO is already defined
Keyword-based scoring may
produce imprecise rankings
Lower-quality shortlists in
edge cases
Scoring engine is pluggable,
enabling future AI/embedding-
based ranking
Manual synchronization may
lead to stale candidate data
Recruiters working from
outdated records
Roadmap includes scheduled and
webhook-based synchronization
## 14  Future Roadmap Considerations
The architecture is deliberately structured so the following enhancements can be layered on without
redesigning core components:
•Interview Scheduling: A new domain module and API resource group, reusing the existing candidate and
status infrastructure.
•Candidate Status Tracking & Workflow Management: Extension of the existing processing-status model
into a broader recruitment-lifecycle state machine.
Confidential – Internal Use   |   Page 12 of 13

Technology Architecture DocumentTalent Acquisition Screening Platform
•AI and Embedding-Based Matching: Replacement or augmentation of the weighted keyword scoring engine
behind its existing interface.
•Advanced Duplicate Detection: Addition of resume fingerprinting, similarity matching, and AI-based
duplicate detection to the duplicate-detection service.
•Scheduled and Webhook-Based Synchronization: Extension of the existing source-adapter model to
support push-based and time-triggered ingestion.
•Cloud Object Storage Migration: Swap of the local file-storage implementation behind the existing storage
interface.
•Stronger Security Posture: Phased introduction of JWT authentication, RBAC, and enterprise SSO as outlined
in Section 10.2.
— End of Document —
Confidential – Internal Use   |   Page 13 of 13