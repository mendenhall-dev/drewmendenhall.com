import 'dotenv/config'
import { defineConfig, devices } from '@playwright/test'

const url = process.env.BASE_URL

export default defineConfig({
  testDir: './tests',
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: url,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
