# JaMail account authentication for UnterSous

## Required sign-in experience

UnterSous uses the member's JaMail account as its account identity. UnterSous must not create a separate password, ask the member to re-enter a JaMail password into an unrelated form, or silently provision a second identity.

## Verified JaMail site state

The JaMail Wix site is published at https://japbstudios.wixsite.com/jmail and has Velo enabled. Its installed-app list currently contains Promote SEO, Wix Chat, Wix Hotels, and Wix Invoices. Wix Members is not listed. The JaMail GitHub repository inspected during this work contains authentication experiments, but no verified, production-ready member-authentication endpoint or OAuth client configuration.

## Supported Wix-managed authentication design

Wix documents a Headless Redirects flow for an external client:

1. Create an OAuth client in the JaMail site's Headless Settings.
2. Register the exact UnterSous callback URI in Allowed authorization redirect URIs.
3. Generate a cryptographically random PKCE verifier and S256 challenge, plus a cryptographically random OAuth state value. Keep the verifier and state bound to the initiating mobile session.
4. Request a redirect session with the Wix Redirects API using the `auth.authRequest` intent, `responseType: "code"`, `responseMode: "fragment"`, `scope: "offline_access"`, the OAuth client ID, callback URI, PKCE challenge, and state.
5. Open the returned `redirectSession.fullUrl` in the system browser.
6. Handle the callback, validate state, exchange the authorization code using the PKCE verifier, and securely maintain the resulting member session.
7. Use the resulting JaMail member identity as the UnterSous account identity. Never log tokens or place client secrets in the mobile application.

Official Wix references:
- Create Redirect Session: https://dev.wix.com/docs/api-reference/business-management/headless/redirects/create-redirect-session
- Redirect sample flows: https://dev.wix.com/docs/api-reference/business-management/headless/redirects/sample-flows
- Authentication overview: https://dev.wix.com/docs/api-reference/business-management/headless/authentication/introduction
- Allowed redirect URIs and domains: https://dev.wix.com/docs/go-headless/authentication/setup/allow-redirect-uris-and-domains

## Configuration still required

- A Headless OAuth client created for JaMail and its public client ID.
- The exact mobile callback URI registered in that client's allowed authorization redirect URIs.
- Confirmation that the JaMail Wix site is configured to use Wix Headless member authentication and that the intended member accounts are available to it.
- A deployed, HTTPS UnterSous authentication service (or a verified mobile-safe token-exchange implementation) with the required Wix API authorization.
- Securely configured server-side credentials and production callback/domain settings.

## Release gate

Do not display a working-looking JaMail sign-in control until the OAuth client, callback registration, authorization service, callback handling, and token exchange have been configured and tested end to end. Do not substitute local-only drafts, invented account credentials, or an unrelated login provider for JaMail authentication.
