const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {   
    baseUrl: "https://www.saucedemo.com/",
  },
});
