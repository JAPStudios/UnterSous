# UnterSous Lifecycle and Authorization Rules

Status: proposed implementation rules; confirm against the complete product specification before production use.

## Request lifecycle

| Current state | Allowed next state | Authorized actor | Required condition |
|---|---|---|---|
| submitted | needs_review | dispatcher, operations administrator | Request is received and requires classification or eligibility review |
| submitted | authorized | dispatcher, operations administrator | Category and required eligibility checks are complete |
| needs_review | authorized | dispatcher, operations administrator | Review is complete and required evidence is recorded |
| needs_review | declined | dispatcher, operations administrator | A documented reason is recorded |
| authorized | ready_for_dispatch | dispatcher, operations administrator | Required funding authorization exists for a no-charge trip |
| ready_for_dispatch | assigned | dispatcher or controlled dispatch service | Driver eligibility matches jurisdiction and category |
| assigned | in_progress | assigned driver | Assignment was accepted and start event is recorded |
| assigned | cancelled | dispatcher, operations administrator, assigned driver | Cancellation reason and actor are recorded |
| in_progress | completed | assigned driver, dispatcher | Completion event is recorded |
| in_progress | cancelled | dispatcher, operations administrator | Exception reason and handling are recorded |

A completed, cancelled or declined request is terminal. Corrections must be represented by linked follow-up records or audit events, not by silently rewriting history. Reopening a terminal request requires an explicit administrative workflow and an audit reason.

## Driver application lifecycle

| Current state | Allowed next state | Authorized actor | Required condition |
|---|---|---|---|
| draft | submitted | applicant | Required fields and declarations are complete |
| submitted | under_review | authorized reviewer | Review is assigned |
| under_review | approved | authorized reviewer | All jurisdiction- and category-specific checks are satisfied |
| under_review | rejected | authorized reviewer | Decision reason is recorded |
| under_review | submitted | authorized reviewer | Additional information is requested; applicant is notified |
| draft, submitted | withdrawn | applicant | Applicant requests withdrawal |
| approved | expired | scheduled control or authorized administrator | Approval validity period ends or a required credential expires |

Approval is not global: it must enumerate the jurisdictions, service categories, effective date and expiry date covered by the decision. Expired or suspended approval blocks new assignments.

## Assignment event sequence

Expected normal sequence: created → accepted → arrived → started → completed. Cancellation may occur before start; an in-progress cancellation requires an exception reason. Duplicate events must be idempotent. Events with impossible ordering or timestamps must be rejected and audited. Reassignment creates a separate assignment; it never transfers or deletes the prior driver's event history.

## Funding and compensation controls

- A medical authorization cannot cover a legal request, and vice versa.
- Authorization must be active for the service date, jurisdiction, category and applicable cost.
- Dispatch must fail closed when funding coverage is absent, expired, exhausted or mismatched.
- A zero passenger charge does not waive the driver's compensation.
- Compensation becomes payable only under an approved compensation rule and validated completed-work record.
- Payment status changes only after a trusted payment confirmation is reconciled; client-submitted references alone are insufficient.
- Adjustments and reversals are new ledger entries linked to the original entry.

## Authorization matrix

| Operation | Passenger | Driver | Dispatcher | Operations administrator |
|---|---:|---:|---:|---:|
| Create own request | Yes | If enabled | No | Yes |
| Read own request | Yes | Assigned work only | Operational scope | Operational scope |
| Read sensitive medical/legal details | Own minimum necessary view | Assigned minimum necessary view | Assigned operational need | Explicit need and audit |
| Submit driver application | No | Yes | No | Administrative assistance only |
| Decide driver application | No | No | If delegated | Yes |
| Create assignment | No | No | Yes | Yes |
| Record own assignment events | No | Yes | Yes | Yes |
| Create funding authorization | No | No | No | Yes |
| Read own compensation | No | Yes | No | Yes |
| Confirm compensation payment | No | No | No | Authorized finance role |

Role names alone are insufficient for access. Every protected request must enforce record ownership, assignment relationship, jurisdiction, category scope and least privilege server-side. Finance permissions should be a separately granted capability even if the initial product maps it to an operations role.

## Mandatory rejection cases

The service must reject and audit: unauthorized state changes; self-approval; assignment to an unapproved or expired driver; category or jurisdiction mismatch; dispatch without required funding; duplicate payment confirmation; compensation without validated work; access to unrelated medical/legal records; and edits that erase historical events.
