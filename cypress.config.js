const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChangs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{

    "devUrl":"",
    prodUrl:"https://nucleus.stanzaliving.com/login"

}
});
