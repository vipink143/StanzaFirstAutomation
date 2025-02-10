const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false ,
    pageLoadTimeout:60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{

    "devUrl":"",
    prodUrl:"https://nucleus.stanzaliving.com/login"

}
});
