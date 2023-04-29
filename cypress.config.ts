import { defineConfig } from 'cypress';
import task from '@cypress/code-coverage/task';

export default defineConfig({
    video: false,
    videoUploadOnPasses: false,
    screenshotOnRunFailure: false,
    e2e: {
        baseUrl: 'http://localhost:3000',
        specPattern: 'cypress/{e2e,integration}/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'cypress/support/e2e.ts',
        setupNodeEvents(on, config) {
            task(on, config);

            // It's IMPORTANT to return the config object
            // with any changed environment variables
            return config;
        },
    },
});
