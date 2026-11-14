# UnterSous Implementation Backlog

Status: mixed. The mobile information interface is implemented; the production service is not.

## Completed

- [x] Expo / React Native application shell for Android and iOS.
- [x] Local navigation between overview, services and driving information.
- [x] Overview of the not-for-profit transportation and delivery model.
- [x] Display of the direct-driver-compensation principle.
- [x] Display of licensing support and legal eligibility principles.
- [x] Component tests for the overview, services and driving navigation.
- [x] Product requirements baseline: `docs/PRODUCT_REQUIREMENTS.md`.
- [x] Service and funding model: `docs/SERVICE_AND_FUNDING_MODEL.md`.
- [x] Core domain model: `docs/DOMAIN_MODEL.md`.
- [x] Draft stack-neutral API contract: `api/openapi.yaml`.
- [x] Lifecycle and authorization rules: `docs/LIFECYCLE_AND_AUTHORIZATION.md`.
- [x] Initial security and privacy threat model: `docs/SECURITY_AND_PRIVACY_THREAT_MODEL.md`.

## Requirements and operating decisions

- [ ] Reconcile all documentation against the complete original project specification.
- [ ] Confirm initial launch jurisdiction and service territory.
- [ ] Define driver compensation rules, payroll treatment and payment operations.
- [ ] Define eligibility, funding and approval rules for each service.
- [ ] Confirm applicable transportation authority, insurance, employment and safety requirements.
- [ ] Approve privacy, retention, accessibility and incident-response policies.
- [ ] Select approved identity, mapping, messaging and payment integrations where required.

## Production application

- [ ] Backend services and database.
- [ ] Account creation, authentication and role permissions.
- [ ] Passenger request and status workflow.
- [ ] Medical transportation eligibility and funding authorization.
- [ ] Legal transportation eligibility and funding authorization.
- [ ] Delivery request and fulfilment workflow.
- [ ] Driver licensing-support workflow.
- [ ] Driver onboarding, evidence handling and eligibility review.
- [ ] Driver approval scoped to jurisdiction and service.
- [ ] Dispatcher request queue, driver availability and assignment.
- [ ] Trip event recording, cancellation and exception management.
- [ ] Compensation ledger, statements, approvals and payment reconciliation.
- [ ] Restricted-funding, contract and operational reporting.
- [ ] Administrative controls and append-only audit history.

## Verification and release

- [ ] Expand automated tests to backend unit, integration and end-to-end coverage.
- [ ] Lifecycle-transition and authorization-denial tests.
- [ ] OpenAPI validation and client compatibility checks.
- [ ] Dependency, secret and static security checks.
- [ ] Accessibility and privacy reviews.
- [ ] Security assessment and penetration testing.
- [ ] Monitoring, backups, recovery and incident procedures.
- [ ] Test-environment deployment and acceptance testing.
- [ ] Legal, insurance, funding and operational approvals before production release.

## Definition of done

A feature is complete only after implementation, automated tests, review and verification in the intended environment. Documentation or a visual interface alone does not complete a production feature. The service must not be represented as operational until deployed and acceptance-tested.
