import { request, APIRequestContext } from '@playwright/test';
import { getTenantUrl } from './tenant';

/**
 * Create an API client bound to a specific tenant.
 */
export async function createApiClient(tenant: string): Promise<APIRequestContext> {
  const baseURL = getTenantUrl(tenant);
  return await request.newContext({
    baseURL,
    extraHTTPHeaders: {
      'Accept': 'application/json'
    }
  });
}
