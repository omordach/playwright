import { test, expect } from '../fixtures/base';
import AxeBuilder from '@axe-core/playwright';

test.describe('Meetings module', () => {
  test.describe.configure({ mode: 'parallel' });

  test('ERP-102 open meetings page @p1 @regression @module:meetings @tenant:carpentersunion @role:office_admin', async ({ authenticatedPage }) => {
    const start = Date.now();
    await authenticatedPage.goto('/meetings');
    await expect(authenticatedPage.getByTestId('meetings-page')).toBeVisible();
    const axe = await new AxeBuilder({ page: authenticatedPage }).analyze();
    expect(axe.violations).toEqual([]);
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(2000);
  });
});
