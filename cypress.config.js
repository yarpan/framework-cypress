const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //video: true,
  //defaultCommandTimeout: 5000,
  e2e: {
    //baseUrl: "https://amazon.com",
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

//https://docs.cypress.io/guides/references/configuration
//https://docs.cypress.io/guides/references/legacy-configuration