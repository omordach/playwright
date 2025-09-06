import { test as base, expect } from '@playwright/test';
import { loginAs } from '../../src/helpers/auth';

type Fixtures = {
  authenticatedPage: import('@playwright/test').Page;
};

export const test = base.extend<Fixtures>({
  page: async ({ page }, use) => {
    // Block third-party requests to keep tests deterministic
    await page.route('**/*', route => {
      const url = new URL(route.request().url());
      if (url.hostname.endsWith('localhost')) {
        route.continue();
      } else {
        route.abort();
      }
    });
    await use(page);
  },
  authenticatedPage: async ({ page, request }, use) => {
    const tenant = process.env.TENANT || 'carpentersunion';
    await loginAs({ request, page, tenant });
    await use(page);
  }
});

export { expect };
