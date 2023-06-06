const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 't4zvq7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.viewportWidth = 1024;

      return config;
    },
  },
});
