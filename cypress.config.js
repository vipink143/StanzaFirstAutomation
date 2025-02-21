const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    watchForFileChanges:false ,
    pageLoadTimeout:60000,
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
     
    },
  },
  env:{

    "devUrl":"",
    prodUrl:"https://nucleus.stanzaliving.com/login"

}
});
