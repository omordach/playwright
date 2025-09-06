# playwright
You are a senior test architect. Produce a complete, production-ready E2E testing framework for the ERP described below. Follow the specifications and output format exactly.
Objective
Design and generate an end-to-end testing framework that:
runs headless and headed locally and in CI


is deterministic and flake-resistant


supports multi-tenant ERP scenarios and role-based auth


integrates with CI/CD and environments


provides artifacts, dashboards, and traceability


ERP Context
Domain: US Labor Unions


Tenancy model: single-tenant  tenant routing: subdomain


Frontend: Vue 3 + yarn, vite 


Backend: Laravel 12  Node  API style: REST


DB: MariaDB}


AuthN/Z:  cartalyst sentinel, roles: Office Admin


Critical flows: 
For each module: by office admin, open each page and check the response. ensure it doeesnt fails.


Non-functional
Browsers: Chromium


Parallelism: 1


Performance budgets: use benchmarks


Security checks: use benchmarks


Accessibility: use benchmarks



Tooling and Language
Primary test runner: Playwright 
Language: TypeScript


API tests: | Playwright request



CI/CD
CI: GitHub Actions


Triggers: mannaully


Matrix: Chrome on Desctop, Chrome on iPad


Artifacts: videos, traces, screenshots, HTML report


Gates: fail build on p0 tests; quarantine tag allowed but tracked


Reporting and Traceability
Test management mapping: Jira keys like ERP-123
Tag schema: @p0/@p1, @smoke, @regression, @tenant:carpentersunion, @role:office_admin, @module:members


Dashboard: Playwright HTML 


Environments
Local: localhost


Output Requirements
Repository structure tree


Package manifest(s) with pinned versions


Config files with comments


Reusable helpers: auth, tenant switch, data seed, API client


Test data strategy and seed scripts


Example specs for each core flow (at least 6)


CI pipeline YAML


Reporting config and sample output paths


README.md with setup, run commands, troubleshooting, and flake policy


Contribution guide with code review checklist


Constraints and Guardrails
Determinism: no hard sleeps; use robust waits and fixtures


Network: block third-party unless whitelisted


Test IDs: prefer data-testid attributes; avoid brittle selectors


Secrets: pull from env; never hardcode


Isolation: per-test tenant or namespace; clean up after each test


Flake policy: retry once on known-flaky tags only; otherwise fail


Performance step: capture timings; assert budgets


Accessibility step: run axe; fail on severity ≥ {{level}}


Idempotency: specs safe on re-run


Documentation: every helper and config commented


Acceptance Criteria
npm run test:e2e runs locally headless


npm run test:debug runs headed with trace on


CI pipeline executes smoke on PR, full on main and nightly


Artifacts uploaded; failing tests show trace and screenshot


README instructions work from clean clone in <15 minutes


Example Inputs to Embed
Default tenant: carpentersunion


Default users: office.admin@get-code.net password in .env


Deliverable Format
Return only the following blocks, in order:
Create repo structure
create  all needed files 
add all needed dependencies 
create test congigs 
ctete test structure
create sample tests I can expand later 

Few-Shot Style Guide
Use TypeScript types for fixtures and helpers.
Provide real commands and scripts:
npm run test:e2e, npm run test:headed, npm run test:trace, npm run test:report,
Include an auth helper that supports:
programmatic login via API


Include a tenant helper that supports:
subdomain switch or multi-tenant
Include tagging:
test.describe.configure({ mode: 'parallel' });
test('p0 smoke: member lifecycle @p0 @smoke @module:members @tenant:default @role:admin', ...)
Add a flake-resistant wait pattern example:
await expect(locator).toHaveText(/Created/i, { timeout: 15000 });


If Information Is Missing
Make reasonable assumptions consistent with ERP systems.
Document assumptions at top of README under “Assumptions.”
Do not ask questions. Proceed and generate.



