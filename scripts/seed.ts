import 'dotenv/config';
import { seedMember } from '../src/helpers/seed';

(async () => {
  const tenant = process.env.TENANT || 'carpentersunion';
  await seedMember(tenant, { name: 'Test Member' });
  console.log(`Seed data created for ${tenant}`);
})();
