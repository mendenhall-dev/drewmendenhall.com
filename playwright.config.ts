import { defineConfig, devices } from '@playwright/test'

const url = 'https://drewmendenhall.localhost'

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
