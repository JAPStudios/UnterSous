# UnterSous Core Domain Model

Status: proposed domain model derived from the current repository requirements. Confirm against the full project specification before production implementation.

## Core records

### Person and account
An account identifies an authenticated person and contains role grants. Roles are passenger, driver, dispatcher and operations administrator. A person may hold more than one role only when an administrator grants it and the resulting permissions remain explicit.

### Driver application
A driver application records applicant identity reference, jurisdiction, requested service categories, submitted eligibility evidence references, review state, reviewer, timestamps and decision reason. Sensitive evidence is stored separately from ordinary profile and trip data. Application states: draft, submitted, under_review, approved, rejected, withdrawn, expired.

Approval is scoped to jurisdiction and service category. Approval in one jurisdiction or category does not imply approval in another.

### Service request
A service request has one primary category: passenger, medical, legal or delivery. It records requester, pickup, destination or delivery details, requested time, accessibility requirements, status, jurisdiction and timestamps. Medical and legal details are minimized and stored behind stricter access controls.

Request states: submitted, needs_review, authorized, ready_for_dispatch, assigned, in_progress, completed, cancelled, declined. State transitions are validated by the service layer; clients cannot set arbitrary states.

### Assignment
An assignment links one service request to one eligible driver and records dispatcher or automated assignment provenance, acceptance, arrival, start, completion and cancellation events. Reassignment creates a new assignment record; it does not erase prior history.

### Funding authorization
A funding authorization identifies the source permitted to cover a no-charge passenger trip, the service category, jurisdiction, allowable period, authorization reference, maximum covered amount and status. Medical funding cannot authorize a legal trip. An assignment for a no-charge trip is blocked until an active authorization or approved operating-budget allocation exists.

### Compensation entry
A compensation entry links to a driver and completed work. It records the calculation basis, amount, currency, earning period, approval state, payment reference and immutable adjustment history. Passenger fare and driver compensation are separate ledgers. A zero passenger charge does not set driver compensation to zero.

### Audit event
An audit event records actor, action, record type and identifier, timestamp, request correlation identifier and a minimal change summary. Sensitive medical/legal payloads and credentials must not be copied into audit text.

## Invariants

1. Every service request has exactly one primary service category.
2. Only an approved driver with current jurisdiction- and category-specific eligibility may be assigned.
3. Medical and legal requests require category-matched authorization before dispatch when passenger charges are zero.
4. Completed work may create a compensation obligation even when passenger charge is zero.
5. A compensation entry cannot be marked paid without a payment confirmation reference.
6. Historical assignment and accounting events are append-only; corrections are recorded as new events.
7. Role checks are enforced server-side for every protected operation.
8. Medical and legal details are disclosed only to roles with a documented operational need.
9. A trip's service category, funding attribution and jurisdiction are preserved in reports and exports.
10. No workflow may imply commercial driving eligibility before all applicable legal requirements are met.
