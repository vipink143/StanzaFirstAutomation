const { defineConfig } = require("cypress");
const { merge } = require('mochawesome-merge')

module.exports = defineConfig({
  
  e2e: {
    watchForFileChanges:false ,
    pageLoadTimeout:60000,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/results/cypress-mochawesome-reporter', // Directory where reports will be saved
      overwrite: false,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss", // Adds timestamp to reports
    },
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
     
    },
  },
  env:{

    "devUrl":"",
    prodUrl:"https://nucleus.stanzaliving.com/login"

}
});
