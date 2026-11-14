# UnterSous

UnterSous is being developed as a not-for-profit transportation and delivery service. Its intended model includes paid driving opportunities, direct driver compensation from UnterSous and qualifying medical and legal transportation that is free to passengers.

## Mobile application

The repository contains an Expo / React Native mobile application for Android and iOS.

The current mobile build provides a navigable service-information experience:

- Overview of the intended UnterSous service and compensation model.
- Passenger-service information, including qualifying medical and legal transportation.
- Delivery-service information.
- Driving-opportunity information covering licensing support, legal eligibility and direct compensation.

The navigation and screens work locally. Automated component tests cover the overview, service information and driving information navigation. They do not submit requests, create accounts or represent live services.

### Run locally

Requirements: Node.js LTS and npm.

```sh
npm install
npx expo start
```

Use Expo Go or an Android/iOS simulator to open the development build. The app configuration uses the Android application ID and iOS bundle identifier `com.japstudios.untersous`.

## Product objectives

- Provide passenger transportation and delivery services.
- Provide qualifying medical and legal transportation to passengers at no charge.
- Pay participating drivers directly through UnterSous rather than making each driver's compensation depend on an individual passenger payment.
- Help people pursue the licensing steps available to them and access paid driving opportunities once legally eligible.
- Avoid shifting the cost and financial risk of operating the service onto drivers.

## Service and legal boundaries

Driver participation is conditional on the applicable jurisdiction's minimum-age, licensing, vehicle, insurance, safety and employment requirements. The product must not imply that someone may drive commercially before meeting those requirements.

Qualifying no-charge passenger transportation still requires a valid operating and funding arrangement, and driver compensation remains a separate obligation. Service availability, funding, eligibility and operating requirements must be established for each launch jurisdiction before live operations.

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
- Do not claim that a feature is implemented until code, tests and verification support that claim.

## Remaining production work

The current mobile application is a navigable information interface, not a live transportation platform. Authentication, backend services, database, passenger requests, driver onboarding, licensing administration, eligibility review, dispatch, funding authorization, compensation ledger, payment processing, automated end-to-end tests and production deployment remain unimplemented. The OpenAPI server address is a placeholder, not a live endpoint.

The complete original project specification has not been verified against the repository. The requirements baseline must be reconciled with that source before the remaining workflows can be considered complete. Launch jurisdiction and the associated legal, insurance, funding and operating rules must also be established.
