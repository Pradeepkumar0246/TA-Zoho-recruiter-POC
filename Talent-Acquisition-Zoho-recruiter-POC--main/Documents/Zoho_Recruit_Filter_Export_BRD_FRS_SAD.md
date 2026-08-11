## Zoho Recruit Filtering & Export Layer

Business, Functional & Solution Architecture Documentation

## Business Requirement Document, Functional Requirement Specification Solution Architecture Document &

Intelligent Candidate Filtering & Export Layer for Zoho Recruit

| Version | 1.0 |
| --- | --- |
| Status | Draft for Stakeholder Review |
| Prepared For | HR Stakeholders · Solution Architects · Technical Teams |
| Date | 14 July 2026 |


## Table of Contents

## Document 1 – Business Requirement Document (BRD)

- 1.1 Purpose

- 1.2 Business Background

- 1.3 Business Problem

- 1.4 Business Objectives

- 1.5 Scope

- 1.6 Stakeholders

- 1.7 Assumptions & Constraints

- 1.8 Success Criteria

- 1.9 High-Level Process Flow

## Document 2 – Functional Requirement Specification (FRS)

- 2.1 Introduction

- 2.2 Functional Requirement Modules

- 2.3 User Roles & Permissions

- 2.4 Non-Functional Requirements (Summary)

- 2.5 Sample User Stories & Acceptance Criteria

## Document 3 – Solution Architecture Document (SAD)

- 3.1 Architecture Overview

- 3.2 High-Level Architecture Flow

- 3.3 Component Architecture

- 3.4 Candidate Normalization Design

- 3.5 Filtering & Ranking Engine Design

- 3.6 Technology Stack

- 3.7 Security Architecture (Summary)

- 3.8 Scalability & Performance

- 3.9 Future Extensibility


## Document 1

Business Requirement Document (BRD)

| Field |   |
| --- | --- |
| Document Name | Business Requirement Document |
| Project | Intelligent Filtering & Export Layer for Zoho Recruit |
| Version | 1.0 |
| Status | Draft for Stakeholder Review |
| Prepared For | HR Stakeholders, Solution Architects, Technical Team |
| Classification | Internal |

## 1.1 Purpose

This document defines the business requirements for an application that acts as an intelligent filtering and export layer on top of Zoho Recruit. The purpose of the application is not to replace Zoho Recruit, but to solve the shortlisting and reporting problems currently faced by recruiters and HR teams.

## 1.2 Business Background

Recruiters currently search candidates manually inside Zoho Recruit, apply multiple filters by hand, open candidate profiles individually to verify details, and then compile the results into Excel sheets for hiring managers and clients. This manual process is slow, error-prone, and difficult to scale across large candidate volumes.

## 1.3 Business Problem

Recruiters and HR teams face the following recurring difficulties:

- Filtering candidates against complex, multi-criteria requirements.

- Standardizing candidate profiles, since candidates enter data in inconsistent formats.

- Quickly generating shortlist reports for hiring managers and clients.

- Exporting filtered candidates into Excel format in a repeatable, presentable way.

- Comparing candidates objectively against job requirements.

## 1.4 Business Objectives

- Fetch candidate profiles directly from Zoho Recruit using official Zoho APIs.

- Normalize candidate data into a standard internal format.

- Apply configurable filtering rules across basic and advanced criteria.

- Optionally rank candidates based on how well they match job requirements.

- Display shortlisted candidates in an easy-to-review list.


- Export selected candidates into Excel in formats suited to hiring managers and clients.

- Be architected to support future AI-driven enhancements.

## 1.5 Scope

## In Scope (MVP)

- Recruiter authentication and secure connection to the organization's Zoho Recruit account.

- Candidate fetch, normalization, filtering and Excel export workflows.

- Saved filter templates and dynamic column selection for exports.

- Optional ranking/match-percentage scoring for candidates against a job requirement.

## Out of Scope (MVP)

- Resume parsing and AI-based skill extraction (planned for Phase 2).

- Integration with LinkedIn Recruiter, Naukri RMS, or Indeed (planned for Phase 3).

- Any modification of candidate records inside Zoho Recruit - the application is read-oriented.

## 1.6 Stakeholders

| Stakeholder | Interest / Responsibility |
| --- | --- |
| Recruiters | Primary end users; filter, shortlist and export candidates. |
| HR Managers | Consume shortlist reports; define hiring requirements. |
| Hiring Managers / Clients | Receive exported Excel shortlists for decision-making. |
| Solution Architects | Own the technical architecture and integration design. |
| Technical / Engineering Team | Build, test and maintain the application. |
| Organization IT / Security | Manage Zoho credentials, API access and data security. |

## 1.7 Assumptions & Constraints

## Assumptions

- The organization has valid Zoho Recruit API access and recruiter credentials available.

- Candidate data quality in Zoho Recruit is sufficient for normalization rules to be effective.

- Zoho Recruit API rate limits and pagination behavior remain within documented Zoho limits.

## Constraints

- The application must communicate with Zoho Recruit only through official, supported APIs.

- Access tokens and credentials must never be exposed to the frontend application.

- The system must remain performant while supporting datasets of several thousand candidates.

## 1.8 Success Criteria

- Recruiters can produce a client-ready shortlist in Excel in a fraction of the current manual time.


- Candidate data appears in a consistent, standardized format regardless of source formatting.

- Filter and export actions are self-service, requiring no manual data manipulation.

- The architecture is extensible enough to support AI ranking and multi-ATS integration later.

## 1.9 High-Level Process Flow

*Figure 1.1 — End-to-end process flow from recruiter action to Excel download.*


## Document 2

Functional Requirement Specification (FRS)

| Field |   |
| --- | --- |
| Document Name | Functional Requirement Specification |
| Project | Intelligent Filtering & Export Layer for Zoho Recruit |
| Version | 1.0 |
| Status | Draft for Stakeholder Review |
| Prepared For | HR Stakeholders, Solution Architects, Technical Team |
| Classification | Internal |

## 2.1 Introduction

This specification translates the business requirements in the BRD into concrete, testable functional requirements, organized by system module: Zoho integration, data normalization, filtering, ranking, duplicate detection, and Excel export.

## 2.2 Functional Requirement Modules

## FR-1 Zoho Recruit Integration

| ID | Requirement |
| --- | --- |
| FR-1.1 | The system shall authenticate to Zoho Recruit using OAuth 2.0 with organization-provided |
|   | recruiter credentials. |
| FR-1.2 | The system shall securely manage and refresh access tokens without exposing them to the |
|   | frontend. |
| FR-1.3 | The system shall fetch candidate profiles via official Zoho Recruit APIs, including name, email, |
|   | phone, skills, experience, current company, current CTC, expected CTC, notice period, education, |
|   | resume, location and candidate status. |
| FR-1.4 | The system shall support pagination to retrieve large candidate datasets without data loss. |
| FR-1.5 | The system shall handle Zoho API rate limits gracefully with a retry mechanism using exponential |
|   | backoff. |

## FR-2 Candidate Data Normalization

The system shall convert inconsistent candidate-entered data into a standardized internal format, as follows:

| Attribute | Example Raw Inputs | Normalized Output |
| --- | --- | --- |
| Skill | Java / JAVA / Java Developer / Core Java | Java |


| Attribute | Example Raw Inputs | Normalized Output |
| --- | --- | --- |
| Skill | SpringBoot / Spring Boot / Spring Framework | Spring Boot |
| Skill | AWS / AWS Cloud / Amazon Web Services | AWS |
| Experience | 5 years / 5+ Years / 4 Years 10 Months / 5.0 | 5 years |
| Notice Period | Immediate / Immediate Joiner | 0 (days) |
| Notice Period | 15 Days | 15 (days) |
| Notice Period | 1 Month | 30 (days) |
| Location | Bangalore / Bengaluru / Bangalore Karnataka / Bengaluru Urban | Bengaluru |
| Education | BE CSE / B.E Computer Science / B.Tech Computer Science | Bachelor Degree, |
|   |   | Computer Science |

Notice period shall always be stored internally as an integer number of days to enable numeric filtering (e.g. “notice period 30 days”).

## FR-3 Filtering Engine vi

## Basic Filters

- Skills

- Experience range

- Current location

- Preferred location

- Notice period

- Current company

- Current CTC

- Expected CTC

- Candidate status

## Advanced Filters

- Degree

- Education

- Certification

- Resume updated date

- Candidate source

- Relevant experience

- Previous company

- Employment status

*Example – Combined Multi-Filter Query*

| Filter | Value |
| --- | --- |
| Skills | Java, Spring Boot, Microservices |
| Experience | 4 to 8 years |


| Filter | Value |
| --- | --- |
| Location | Bengaluru |
| Notice Period | 30 days |

## FR-4 Ranking Engine (Optional for MVP)

The system should be designed to support weighted scoring of candidates against a job requirement, even if activated after MVP. Example scoring model:

| Criterion | Points |
| --- | --- |
| Java | 30 |
| Spring Boot | 30 |
| Microservices | 20 |
| AWS | 10 |
| Notice Period 30 days vi | 10 |
| Total | 100 |

Example candidate outcomes using this model: Candidate A scores 95, Candidate B scores 80, Candidate C scores 60, allowing recruiters to rank shortlists automatically.

## FR-5 Candidate Match Percentage

The system shall calculate a match percentage between a candidate's normalized skills and the required skill set. Example: a job requiring Java, Spring Boot, Kafka and Docker, matched against a candidate with Java, Spring Boot and Docker, yields 3 of 4 skills matched, i.e. 75%.

## FR-6 Duplicate Candidate Detection

The system shall flag likely duplicate candidate records using one or more of:

- Email address match

- Phone number match

- Resume hash match

- Combination of name, company and experience

## FR-7 Excel Export Service

- The recruiter shall be able to dynamically select which columns to include in an export (e.g. name, experience, skills, location, notice period, current company, email, phone, match score).

- The system shall support exporting the full candidate list, a shortlisted subset, a client submission format, and a hiring-manager format.

- All exports shall be produced in .xlsx format.

## FR-8 Frontend Requirements

- Recruiter login and session management.

- Filter selection UI supporting basic and advanced filters.

- Candidate list view with search and sorting (grid-based, e.g. AG Grid / PrimeNG).


One-click Excel download of the current shortlist.

Ability to save and reuse filter templates.

## 2.3 User Roles & Permissions

| Role | Permissions |
| --- | --- |
| Recruiter | Log in, run filters, view candidates, export Excel, save filter templates. |
| Admin (future) | Manage Zoho credential configuration and user access. |

## 2.4 Non-Functional Requirements (Summary)

Full non-functional requirements are documented separately; key items relevant to functional behaviour include secure credential storage, backend-only Zoho communication, pagination support for large datasets, audit logging, and resilient error handling with retries.

## 2.5 Sample User Stories & Acceptance Criteria

| User Story | Acceptance Criteria |
| --- | --- |
| As a recruiter, I want to filter candidates by skills, | Given valid filter values, when I apply the filter, then only |
| experience and location, so that I can quickly narrow | candidates matching all selected criteria are shown, using |
| down a large candidate pool. | normalized values. |
| As a recruiter, I want candidate data to appear in a | Given candidates with varying raw formats for skills, |
| consistent format regardless of how it was entered, so | experience, notice period, location and education, when |
| that I can compare candidates fairly. | data is fetched, then all values are converted to the |
|   | standard internal format. |
| As a recruiter, I want to export my shortlist to Excel with | Given a shortlist and a selected export format, when I |
| the columns I choose, so that I can share it with a hiring | click download, then an .xlsx file is generated containing |
| manager or client. | only the selected columns and candidates. |
| As a recruiter, I want to see a match score for each | Given a defined job requirement with weighted skills, |
| candidate against a job requirement, so that I can | when ranking is enabled, then each candidate is shown |
| prioritize the strongest candidates. | with a score and/or match percentage. |


## Document 3

Solution Architecture Document (SAD)

| Field |   |
| --- | --- |
| Document Name | Solution Architecture Document |
| Project | Intelligent Filtering & Export Layer for Zoho Recruit |
| Version | 1.0 |
| Status | Draft for Stakeholder Review |
| Prepared For | HR Stakeholders, Solution Architects, Technical Team |
| Classification | Internal |

## 3.1 Architecture Overview

The solution is a layered application that sits between recruiters and Zoho Recruit. A frontend captures recruiter intent (filters, exports); a backend API layer owns all business logic and is the only component that talks to Zoho; and dedicated engines handle normalization, filtering, ranking and Excel generation before results are returned to the recruiter.

## 3.2 High-Level Architecture Flow


*Figure 3.1 — High-level architecture flow.*

## 3.3 Component Architecture

*Figure 3.2 — Frontend, Backend and Zoho Integration Layer responsibilities.*

## Frontend


Responsible for recruiter login, filter selection UI, candidate list view, the download-Excel action, saved filter templates, and search/sorting. Suggested technology: Angular with AG Grid or PrimeNG Table for high-performance candidate grids.

## Backend

Owns authentication, Zoho API integration, candidate data processing, the filtering engine, the ranking engine, and Excel generation. Suggested technology: FastAPI, with Pandas for data processing and OpenPyXL for Excel generation.

## Zoho Recruit Integration Layer

Handles OAuth authentication, access-token management, candidate fetch APIs, pagination, rate-limit handling and retries. This layer is the sole point of contact with Zoho Recruit, ensuring credentials and tokens never reach the frontend.

## 3.4 Candidate Normalization Design

A dedicated normalization layer sits directly after data fetch and before filtering. It applies rule-based mapping (skills, experience, notice period, location, education) so that every downstream component – filtering, ranking, export – operates on consistent, standardized data. Normalization rules are maintained as configurable mapping tables so new synonyms can be added without code changes.

## 3.5 Filtering & Ranking Engine Design

The filtering engine evaluates normalized candidate records against recruiter-selected basic and advanced filter criteria, supporting multi-criteria (AND-combined) queries. The ranking engine, designed for future activation, applies a configurable weighted scoring model per job requirement and computes a skill-match percentage, enabling recruiters to sort shortlists by fit rather than just filter matches.

## 3.6 Technology Stack

| Layer | Technology |
| --- | --- |
| Frontend | Angular, AG Grid / PrimeNG Table |
| Backend API | FastAPI (Python) |
| Data Processing | Pandas |
| Excel Generation | OpenPyXL |
| Zoho Integration | Zoho Recruit REST APIs (OAuth 2.0) |

## 3.7 Security Architecture (Summary)

- Zoho credentials and access tokens are stored securely on the backend and never exposed to the frontend.

- All communication with Zoho Recruit APIs is performed exclusively by the backend integration layer.

- Recruiter sessions are authenticated and authorized before any candidate data is served.

- All data access is audit-logged for traceability.


## 3.8 Scalability & Performance

- Pagination is used end-to-end so datasets of thousands of candidates can be processed without timeouts.

- Retry-with-backoff protects against transient Zoho API failures and rate-limit responses.

- The normalization, filtering and ranking engines are designed as stateless, composable services so they can scale horizontally as candidate volume grows.

## 3.9 Future Extensibility

## Phase 2

- Resume parsing and AI-based skill extraction.

- Full activation of the candidate ranking engine.

- Automated duplicate detection.

- Saved searches and scheduled reports.

## Phase 3

- Multi-ATS support beyond Zoho Recruit.

- LinkedIn Recruiter, Naukri RMS and Indeed integrations.

- An AI-driven candidate recommendation engine.

The layered architecture – with normalization, filtering and export as independent services – means these enhancements can be added without redesigning the core system.
