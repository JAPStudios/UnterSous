# UnterSous Product Requirements

Status: requirements baseline; implementation pending.

## Purpose

UnterSous is intended to provide delivery and passenger transportation while creating paid work opportunities for people who are legally eligible to perform the relevant driving work. Its service model includes qualifying medical and legal journeys for which the passenger pays nothing.

## Actors

- Passenger: requests or receives a trip or delivery.
- Driver: applies, completes eligibility checks, accepts assigned work and receives compensation.
- Dispatcher: reviews requests, assigns eligible drivers and monitors active work.
- Operations administrator: manages service configuration, eligibility records, funding categories, incidents and reporting.
- Funding or contracting partner: may support a defined service category under a written agreement.

## Service categories

Each request must have exactly one primary category:
- Passenger transportation.
- Medical transportation.
- Legal transportation.
- Delivery.

The system must preserve the category throughout request, assignment, completion, payment, reporting and audit records. A category must not be inferred from free-form notes alone.

## Passenger requirements

- Submit a transportation or delivery request.
- Identify pickup and destination details needed to fulfil the request.
- See the request status and whether it has been accepted.
- Receive confirmation when the service is completed or cancelled.
- For an approved no-charge medical or legal journey, see a zero passenger charge.
- Never be asked to pay a driver directly for a trip classified as a no-charge service.

## Driver requirements

- Submit an application and required eligibility information.
- Be approved only after the applicable legal and operational eligibility checks are complete.
- View available assigned work and relevant trip details.
- Record acceptance, arrival, start, completion and cancellation events.
- View compensation records for completed work.
- Receive compensation from UnterSous under the applicable compensation arrangement, not through an assumption that a passenger has paid.

## Dispatch and operations requirements

- Review and classify incoming requests.
- Assign only drivers approved for the relevant service and jurisdiction.
- Track request lifecycle and assignment changes.
- Record cancellations, incidents and service exceptions.
- Keep medical, legal, passenger and delivery categories distinguishable.
- Record the funding source or approved operating budget for each no-charge trip before dispatch.
- Prevent a no-charge passenger fare from being treated as a zero-cost driver service.

## Compensation and accounting requirements

- Maintain a driver compensation ledger separate from passenger charges.
- Record the amount, basis, status and payment reference for each compensation item.
- Preserve adjustments and reversals as auditable entries rather than silently overwriting history.
- Reconcile driver compensation, passenger charges, contract reimbursements and restricted funding separately.
- Do not mark compensation paid without a corresponding payment confirmation.

## Privacy, security and accessibility

- Collect only information needed for eligibility, dispatch, payment, safety and reporting.
- Restrict sensitive medical and legal journey details to authorized roles.
- Keep access and administrative changes auditable.
- Provide accessible request and status workflows.
- Establish retention, deletion, incident-response and account-security policies before production use.

## Acceptance criteria

A capability is complete only when:
- Its requirements and permitted states are documented.
- The implementation enforces role and service-category boundaries.
- Automated tests cover normal, invalid and failure paths.
- Sensitive data handling and audit behaviour are tested.
- The capability has been verified in a deployed test environment.

## Explicitly undecided

This requirements baseline does not choose a programming language, framework, database, payment processor, mapping provider, hosting platform, pricing formula, compensation formula, vehicle model or operating jurisdiction. Those decisions require an approved technical and operating specification.
