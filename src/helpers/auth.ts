import { APIRequestContext, Page } from '@playwright/test';
import { getTenantUrl } from './tenant';

export interface LoginOptions {
  request: APIRequestContext;
  page: Page;
  tenant: string;
  email?: string;
  password?: string;
}

/**
 * Programmatic login to avoid UI flakiness.
 */
export async function loginAs({ request, page, tenant, email = process.env.OFFICE_ADMIN_EMAIL!, password = process.env.OFFICE_ADMIN_PASSWORD! }: LoginOptions): Promise<void> {
  const base = getTenantUrl(tenant);
  const resp = await request.post(`${base}/api/login`, {
    data: { email, password }
  });
  if (!resp.ok()) {
    throw new Error(`Login failed: ${resp.status()} ${resp.statusText()}`);
  }
  const { token } = await resp.json();
  // Persist token for app usage
  await page.addInitScript(([t]) => {
    window.localStorage.setItem('auth_token', t);
  }, token);
  await page.goto(base);
}
