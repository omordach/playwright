import { test, expect } from '../fixtures/base';
import AxeBuilder from '@axe-core/playwright';

test.describe('Reports module', () => {
  test.describe.configure({ mode: 'parallel', retries: 1 });

  test('ERP-104 open reports page @p1 @regression @module:reports @tenant:carpentersunion @role:office_admin @quarantine', async ({ authenticatedPage }) => {
    const start = Date.now();
    await authenticatedPage.goto('/reports');
    await expect(authenticatedPage.getByTestId('reports-page')).toBeVisible();
    const axe = await new AxeBuilder({ page: authenticatedPage }).analyze();
    expect(axe.violations).toEqual([]);
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(2000);
  });
});
