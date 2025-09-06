/**
 * Build a tenant-scoped base URL using subdomain routing.
 */
export function getTenantUrl(tenant: string, path = ''): string {
  const host = process.env.BASE_HOST || 'localhost';
  const protocol = process.env.PROTOCOL || 'http';
  const base = `${protocol}://${tenant}.${host}`;
  return `${base}${path}`;
}
