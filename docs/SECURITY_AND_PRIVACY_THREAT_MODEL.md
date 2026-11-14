# UnterSous Security and Privacy Threat Model

Status: initial design review. This is not a completed security assessment, legal compliance opinion or production approval.

## Protected information and assets

- Account credentials, authentication sessions and recovery channels.
- Identity and driver-eligibility evidence.
- Driver licence, vehicle and insurance information.
- Pickup and destination information, live trip status and contact details.
- Medical and legal service category, eligibility and supporting documentation.
- Funding authorizations, compensation records and payment references.
- Dispatch decisions, incidents, administrative actions and audit history.

## Trust boundaries

1. Public client to API: all input is untrusted; authentication and server-side authorization are required.
2. API to operational data store: enforce tenant/record scope, field-level access and encryption.
3. Operations staff to sensitive records: require least privilege, documented purpose and auditable access.
4. Application to payment or funding systems: verify signed or authenticated provider responses; never trust client assertions.
5. Application to maps, messaging and other providers: disclose only the minimum data required and assess provider retention and secondary use.
6. Production operations to logs and analytics: prevent sensitive trip details, credentials and identity evidence from entering general-purpose telemetry.

## Principal threats and required controls

| Threat | Potential impact | Required controls |
|---|---|---|
| Broken object-level authorization | A user reads another passenger's trip or driver's records | Check ownership, assignment and role scope on every record request; negative authorization tests |
| Excessive staff access | Medical/legal details exposed without operational need | Field-level permissions, purpose limitation, access logging and periodic access review |
| Account takeover | Unauthorized requests, data exposure or payment changes | Strong authentication, secure recovery, session revocation, rate limits and suspicious-login monitoring |
| Driver impersonation or forged eligibility | Unsafe or unlawful assignment | Verified evidence workflow, reviewer separation, expiry tracking and jurisdiction/category-scoped approval |
| Funding authorization tampering | Unfunded free trips or misuse of restricted funds | Server-side authorization, immutable decision history, amount limits and category matching |
| Compensation manipulation | Fraudulent or duplicate payments | Separate ledger, approval controls, idempotency keys, reconciliation and immutable adjustment records |
| Location or trip-data leakage | Physical safety and privacy harm | Minimize precision and retention, restrict live location access, encrypt transport/storage and avoid public URLs |
| Injection and malicious input | Data compromise or service disruption | Schema validation, parameterized queries, output encoding and upload scanning |
| Denial of service or automated abuse | Dispatch unavailable | Rate limits, quotas, abuse detection, backups and tested recovery procedures |
| Insider alteration or evidence destruction | Loss of accountability | Append-only audit trail, protected backups, privileged-action review and alerting |
| Third-party compromise | Exposure through maps, messaging or payment vendors | Vendor due diligence, scoped credentials, contractual data controls and integration isolation |
| Sensitive data in logs or analytics | Broad secondary exposure | Redaction, structured allow-listed logging, restricted log access and retention limits |

## Data handling requirements

- Do not collect medical diagnoses, legal case narratives or document contents unless a defined service requirement and lawful basis require them.
- Prefer a minimal eligibility result and authorization reference over storing source medical/legal documents in the general trip record.
- Keep identity evidence and sensitive documents in a separately protected store with narrowly scoped access.
- Encrypt data in transit and at rest; manage keys separately from application data.
- Define retention and deletion schedules by record class and legal/contractual obligations before launch.
- Never place credentials, access tokens, full identity numbers, medical narratives or legal narratives in logs, analytics events, URLs or support screenshots.
- Provide access, correction and deletion processes where applicable, subject to documented legal retention obligations.
- Use synthetic data in development and test environments.

## Security verification gates

Before a live pilot:
- Threat-model review against the final architecture and actual integrations.
- Automated tests for every authorization-matrix denial case.
- Dependency and secret scanning in continuous integration.
- Secure configuration review, including session, CORS, TLS, storage and backup settings.
- Independent penetration test appropriate to the deployment scope.
- Incident response, breach escalation, backup restoration and account recovery exercises.
- Documented data inventory, retention schedule, vendor assessment and operational access review.

No production deployment should occur until these controls are implemented, tested and reviewed against the confirmed service jurisdiction and final specification.
