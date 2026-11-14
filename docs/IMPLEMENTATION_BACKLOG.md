# UnterSous Implementation Backlog

Status: planning backlog. The checked items below are documentation artifacts committed to the repository; they are not implemented application features.

## Documentation baseline

- [x] Product requirements baseline: `docs/PRODUCT_REQUIREMENTS.md`.
- [x] Service and funding model: `docs/SERVICE_AND_FUNDING_MODEL.md`.
- [x] Core domain model: `docs/DOMAIN_MODEL.md`.
- [x] Draft stack-neutral API contract: `api/openapi.yaml`.
- [x] Request, driver-application and assignment lifecycle rules: `docs/LIFECYCLE_AND_AUTHORIZATION.md`.
- [x] Initial security and privacy threat model: `docs/SECURITY_AND_PRIVACY_THREAT_MODEL.md`.
- [ ] Reconcile all documentation against the complete original project specification.

## Decisions required before application implementation

- [ ] Confirm initial launch jurisdiction and service territory.
- [ ] Approve the technical stack, architecture and deployment target.
- [ ] Define driver compensation rules, payroll treatment and payment operations.
- [ ] Define eligibility, funding and approval rules for every service category.
- [ ] Confirm applicable transportation authority, insurance, employment and safety requirements.
- [ ] Approve privacy, retention, accessibility and incident-response policies.
- [ ] Select approved identity, mapping, messaging and payment integrations where required.

## Application implementation

- [ ] Passenger account, authentication and accessible request flow.
- [ ] Passenger transportation request and status workflow.
- [ ] Medical transportation request with eligibility and funding authorization.
- [ ] Legal transportation request with eligibility and funding authorization.
- [ ] Delivery request and fulfilment workflow.
- [ ] Driver application, evidence handling and eligibility review.
- [ ] Driver approval scoped to jurisdiction and service category.
- [ ] Dispatcher request queue, driver availability and assignment.
- [ ] Trip event recording, cancellation and exception management.
- [ ] Compensation ledger, statements, approvals and payment reconciliation.
- [ ] Restricted-funding, contract and operational reporting.
- [ ] Administrative controls and append-only audit history.

## Verification and release

- [ ] Implement automated unit, integration and end-to-end tests.
- [ ] Test all lifecycle transitions and invalid transitions.
- [ ] Test authorization denials and sensitive-data boundaries.
- [ ] Validate the OpenAPI contract and generate/verify client compatibility.
- [ ] Run dependency, secret and static security checks.
- [ ] Complete accessibility and privacy reviews.
- [ ] Complete security assessment and penetration testing.
- [ ] Establish monitoring, backups, recovery and incident procedures.
- [ ] Deploy to a test environment and complete acceptance testing.
- [ ] Production release only after legal, insurance, funding and operational approvals.

## Definition of done

A backlog item is complete only after implementation, automated tests, review and verification in the intended environment. Documentation alone does not complete an application feature. No application or service is represented as operational until it has been deployed and acceptance-tested.
