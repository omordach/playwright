import { createApiClient } from './apiClient';

export async function seedMember(tenant: string, data: { name: string }): Promise<void> {
  const client = await createApiClient(tenant);
  await client.post('/api/members', { data });
  await client.dispose();
}
