import { test, expect } from '../fixtures/base';
import AxeBuilder from '@axe-core/playwright';

test.describe('Payments module', () => {
  test.describe.configure({ mode: 'parallel' });

  test('ERP-103 open payments page @p0 @smoke @module:payments @tenant:carpentersunion @role:office_admin', async ({ authenticatedPage }) => {
    const start = Date.now();
    await authenticatedPage.goto('/payments');
    await expect(authenticatedPage.getByTestId('payments-page')).toBeVisible();
    const axe = await new AxeBuilder({ page: authenticatedPage }).analyze();
    expect(axe.violations).toEqual([]);
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(2000);
  });
});
