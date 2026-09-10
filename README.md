# Playwright Mocking Automation

This project contains a Playwright-based UI automation suite for testing login flows and mocked incentive APIs. It is set up to run against either the development or staging environment and to intercept API responses for negative and edge-case testing.

## Features

- Playwright test automation with `@playwright/test`
- Environment-based configuration for `dev` and `stg`
- API mocking for incentive schema and slab config endpoints
- Separate test specs for login and mocked incentive scenarios
- HTML test report generation via Playwright

## Tech Stack

- Node.js
- TypeScript
- Playwright
- dotenv

## Project Structure

```text
.
├── mock/
│   ├── request/
│   ├── response/
│   └── routes/
│       ├── incentive_schema.route.ts
│       └── slab_config.route.ts
├── resources/
│   └── variables/
│       ├── config.ts
│       ├── dev.data.ts
│       ├── index.ts
│       └── stg.data.ts
├── tests/
│   ├── controller/
│   ├── pageobject/
│   └── specs/
│       ├── login/
│       └── mocking/
├── playwright-report/
├── test-results/
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

## Prerequisites

1. Install Node.js (LTS recommended)
2. Install project dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## Environment Configuration

The environment is selected from `process.env.ENV` and defaults to `dev` if not provided.

- Development config: `resources/variables/dev.data.ts`
- Staging config: `resources/variables/stg.data.ts`
- Selector logic: `resources/variables/index.ts`

Example:

```bash
set ENV=stg
npm run login
```

On Linux/macOS, use:

```bash
ENV=stg npm run login
```

## Available Scripts

From `package.json`:

```bash
npm test
```
Runs all Playwright tests in headed mode.

```bash
npm run mock
```
Runs the mocked incentive spec.

```bash
npm run mock:dev
npm run mock:stg
```
Runs the mocked incentive spec using the selected environment.

```bash
npm run login
npm run login:dev
npm run login:stg
```
Runs the login test suite in the selected environment.

```bash
npm run sanity
```
Runs tests tagged with `@sanity`.

```bash
npm run regression
```
Runs tests tagged with `@regression`.

## Test Specs

### Login

File: `tests/specs/login/login.spec.ts`

This covers login validation scenarios:

- invalid phone number
- invalid password
- empty phone number
- empty password
- valid login

### Mocked Incentive Flow

File: `tests/specs/mocking/incentive.spec.ts`

This spec mocks API responses before navigating to the app and verifies UI behavior with a mocked incentive schema response.

## Mocking Pattern

Mock routes are defined under the `mock/routes` folder and intercept specific API calls before the browser reaches the real backend.

Example route:

```ts
await page.route('**/api/incentives/v1/schemas', (route) => {
  route.fulfill({
    status: 404,
    body: JSON.stringify(mockResponse),
  });
});
```

This is used to simulate backend responses such as:

- successful response payloads
- business mapping errors
- invalid business code errors
- not-found scenarios

Mock payload examples are stored in `mock/response/`.

## Reports

Playwright HTML reports are generated under the `playwright-report/` directory. Test artifacts and traces are saved in `test-results/`.

## Notes

- The project is configured in `playwright.config.ts` with Chromium as the active browser project.
- The suite is set to `fullyParallel: true` and uses the default Playwright HTML reporter.
- Most tests are run in headed mode by default for local validation.

## Useful Commands

```bash
npm run login:dev
npm run mock:stg
npx playwright test --reporter=html
```

## Contribution

Add new tests under `tests/specs/`, page interactions under `tests/pageobject/`, and business logic under `tests/controller/`. Keep route mocks under `mock/routes` and mock payloads under `mock/response`.
