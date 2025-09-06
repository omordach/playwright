import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests/e2e',
  /* Ensure no accidental only's land in CI */
  forbidOnly: !!process.env.CI,
  /* Retry policy handled via @quarantine tag in specs */
  retries: 0,
  /* Run tests sequentially for determinism */
  workers: 1,
  timeout: 30_000,
  expect: { timeout: 15_000 },
  /* Artifacts */
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html', open: 'never' }]
  ],
  outputDir: 'reports/artifacts',
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'retain-on-failure'
  },
  /* Browser matrix */
  projects: [
    {
      name: 'chromium-desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'chromium-ipad',
      use: { ...devices['iPad (gen 7) landscape'] },
    }
  ]
});
