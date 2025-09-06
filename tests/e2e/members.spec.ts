import { test, expect } from '../fixtures/base';
import AxeBuilder from '@axe-core/playwright';

test.describe('Members module', () => {
  test.describe.configure({ mode: 'parallel' });

  test('ERP-101 open members page @p0 @smoke @module:members @tenant:carpentersunion @role:office_admin', async ({ authenticatedPage }) => {
    const start = Date.now();
    await authenticatedPage.goto('/members');
    await expect(authenticatedPage.getByTestId('members-page')).toBeVisible();
    const axe = await new AxeBuilder({ page: authenticatedPage }).analyze();
    expect(axe.violations).toEqual([]);
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(2000);
  });
});
