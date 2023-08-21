import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    // Limit the number of workers on CI, use default locally
    workers: process.env.CI ? 30 : undefined,
    
    fullyParallel: true,
    
    projects: [
      /* Test against desktop browsers */
      {
        name: 'chromium',
        use: { 
            ...devices['Desktop Chrome'],
            // viewport: null,
            launchOptions: {
                args: ['--start-fullscreen'],
            },
        },
        
      },
    ],
     expect: { timeout: 10000 }
  });