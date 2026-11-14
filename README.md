# UnterSous

UnterSous is a not-for-profit transportation and delivery service concept. Its intended model combines paid driver work with transportation that passengers can access without paying for qualifying medical and legal journeys.

## Product objectives

- Provide delivery and passenger-transportation services.
- Pay participating drivers directly through UnterSous rather than making each driver's compensation depend on an individual passenger payment.
- Provide qualifying medical and legal transportation to passengers at no charge.
- Support people who want to begin driving and working once they are legally eligible in their jurisdiction, including people continuing their education and people supporting their families.
- Avoid a business model that shifts the cost and financial risk of operating the service onto drivers.

## Service boundaries

Driver participation is conditional on the applicable jurisdiction's minimum-age, licensing, vehicle, insurance, background-check, safety and employment requirements. The product must not imply that someone may drive commercially before meeting those requirements.

Medical transportation, legal transportation, passenger rides and delivery are distinct service categories. Their eligibility rules, funding sources, dispatch requirements and operating obligations must remain distinguishable in the product and its records. A no-charge passenger trip must not be represented as an unfunded or uncompensated driver trip.

## Repository documentation

- [Product requirements](docs/PRODUCT_REQUIREMENTS.md)
- [Service and funding model](docs/SERVICE_AND_FUNDING_MODEL.md)
- [Implementation backlog](docs/IMPLEMENTATION_BACKLOG.md)
- [Core domain model](docs/DOMAIN_MODEL.md)
- [Lifecycle and authorization rules](docs/LIFECYCLE_AND_AUTHORIZATION.md)
- [Security and privacy threat model](docs/SECURITY_AND_PRIVACY_THREAT_MODEL.md)
- [Draft OpenAPI contract](api/openapi.yaml)

## Development constraints

- Do not copy an entire rideshare application or import unrelated upstream repositories wholesale.
- Review each reused library or SDK for its actual purpose, maintenance status, license, security posture and compatibility before adopting it.
- A third-party API client or mobile SDK is not a substitute for the service's dispatch, payments, driver, passenger and administrative systems.
- Do not select a programming language, framework, payment processor, mapping provider or deployment platform without a documented project decision.
- Do not claim that a feature is implemented until code, tests and verification support that claim.

## Current repository status

The repository contains planning documentation and a draft, stack-neutral API contract. It does not yet contain a functioning passenger or driver application, backend service, database implementation, automated test suite, deployment configuration or operational integrations. The OpenAPI server address is a placeholder, not a live endpoint.

The Google Docs source specification has not been available for verification. The current documentation is therefore a requirements baseline, not confirmation that every original requirement has been captured. Implementation decisions remain blocked on the full specification, launch jurisdiction, approved technical stack and operating rules.
