# UnterSous

UnterSous is a not-for-profit transportation and delivery service. Its intended model combines paid driver work with transportation that passengers can access without paying for qualifying medical and legal journeys.

## Mobile application

The repository now includes an Expo / React Native application for Android and iOS.

- Passenger view: select one of four distinct service categories, enter pickup and destination details, add limited instructions and save a local request draft.
- Driver view: see the eligibility and approval requirements, compensation principles and the current empty assignment workspace.
- Shared presentation: responsive mobile layout, passenger/driver role switch, accessible control labels and category-specific service information.

### Run locally

Requirements: Node.js LTS and npm.

```sh
npm install
npx expo start
```

Use Expo Go or an Android/iOS simulator to open the development build. The app configuration uses the Android application ID and iOS bundle identifier `com.japstudios.untersous`.

### Current application limits

This is the first mobile frontend implementation, not a production transportation platform. Request drafts exist only in application memory and disappear when the app closes. There is no authentication, network API connection, backend, database, live dispatch, mapping, location tracking, driver application submission, eligibility verification, payment processing, push notification or production deployment. The interface explicitly avoids representing a locally saved draft as a submitted or assigned request.

The Expo / React Native stack is the implementation baseline for this initial mobile client. It can be revised if the complete source specification establishes a different required platform.

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
- Do not claim that a feature is implemented until code, tests and verification support that claim.

## Remaining production work

The application frontend is now present, but the production system remains incomplete. The backend, database, authenticated role permissions, dispatch, funding authorization, driver eligibility review, compensation ledger, payment integration, automated tests, deployment configuration and operational integrations are not implemented. The OpenAPI server address is a placeholder, not a live endpoint.

The original Google Docs source specification has not been available for verification. The current requirements baseline therefore cannot be treated as confirmation that every original requirement has been captured. Launch jurisdiction and the associated legal and operating rules also remain to be established.
