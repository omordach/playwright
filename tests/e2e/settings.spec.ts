import { test, expect } from '../fixtures/base';
import AxeBuilder from '@axe-core/playwright';

test.describe('Settings module', () => {
  test.describe.configure({ mode: 'parallel' });

  test('ERP-105 open settings page @p1 @regression @module:settings @tenant:carpentersunion @role:office_admin', async ({ authenticatedPage }) => {
    const start = Date.now();
    await authenticatedPage.goto('/settings');
    await expect(authenticatedPage.getByTestId('settings-page')).toBeVisible();
    const axe = await new AxeBuilder({ page: authenticatedPage }).analyze();
    expect(axe.violations).toEqual([]);
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(2000);
  });
});
