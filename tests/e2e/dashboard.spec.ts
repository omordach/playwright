import { test, expect } from '../fixtures/base';
import AxeBuilder from '@axe-core/playwright';

test.describe('Dashboard module', () => {
  test.describe.configure({ mode: 'parallel' });

  test('ERP-106 open dashboard page @p0 @smoke @module:dashboard @tenant:carpentersunion @role:office_admin', async ({ authenticatedPage }) => {
    const start = Date.now();
    await authenticatedPage.goto('/dashboard');
    await expect(authenticatedPage.getByTestId('dashboard-page')).toBeVisible();
    await expect(authenticatedPage.locator('h1')).toHaveText(/Dashboard/i, { timeout: 15000 });
    const axe = await new AxeBuilder({ page: authenticatedPage }).analyze();
    expect(axe.violations).toEqual([]);
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(2000);
  });
});
