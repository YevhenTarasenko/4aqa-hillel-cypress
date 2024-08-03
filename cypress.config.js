const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({

  env: { ...process.env },

  viewportHeight: 768,  // Hight for page
  viewportWidth: 1366,  // Width  for page
  watchForFileChanges: false,  // Automatic test run after saving
  experimentalStudio: true,  // Turn on WebKit support
  experimentalWebKitSupport: true,  // Turn on WebKit support
  video: false, // Record video during tests
  defaultCommandTimeout: 5000, // Default waiting time

  e2e: {
    chromeWebSecurity: false,
    baseUrl: process.env.BASE_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
