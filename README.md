# ERP E2E Test Framework

## Assumptions
- ERP exposes tenant via subdomain (e.g. `carpentersunion.localhost`).
- Programmatic login available at `/api/login` returning `{ token }`.
- `OFFICE_ADMIN_EMAIL` and `OFFICE_ADMIN_PASSWORD` stored in `.env`.
- MariaDB state can be seeded via REST API.

## Setup
```bash
# install dependencies
npm install
# copy environment
cp .env.example .env && edit values
# install browsers
npx playwright install --with-deps chromium
```

## Commands
- `npm run test:e2e` – run headless suite.
- `npm run test:debug` – run headed with Playwright inspector.
- `npm run test:trace` – run headed with trace capture.
- `npm run test:report` – open last HTML report.
- `npm run seed` – seed baseline data.

## Flake Policy
- Tests tagged `@quarantine` retry once via `test.describe.configure({ retries: 1 })`.
- All other tests fail on first error.

## Troubleshooting
- Ensure API server is running and reachable via tenant subdomain.
- Delete `reports/` if Playwright cannot write artifacts.
- Run with `DEBUG=pw:api` for verbose logs.

## Artifact Paths
- HTML report: `reports/html`.
- Traces, videos, screenshots: `reports/artifacts`.
