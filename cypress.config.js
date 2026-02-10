const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'boy6q1',
  allowCypressEnv: false,

  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
