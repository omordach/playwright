# Contributing Guide

## Code Review Checklist
- [ ] Tests include Jira key in title (e.g. `ERP-123`).
- [ ] Tags follow schema `@p0/@p1`, `@smoke`, `@regression`, `@tenant:*`, `@role:*`, `@module:*`.
- [ ] No hard waits; use `expect` with timeouts.
- [ ] Helpers and configs are documented.
- [ ] Secrets pulled from environment variables.
- [ ] New tests clean up data and are idempotent.
- [ ] Screenshots, traces, and videos saved to `reports/artifacts`.
