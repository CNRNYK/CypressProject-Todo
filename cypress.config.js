const { defineConfig } = require("cypress");
const fs = require('fs');

module.exports = defineConfig({
  watchForFileChanges: false,
  experimentalWebKitSupport: true,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  video: true,
  downloadsFolder: 'downloads/',
  experimentalModifyObstructiveThirdPartyCode: true,


  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readFile(filename) {
          if (fs.existSync(filename)) {
            return fs.readFileSync(filename, 'utf8')
          }
          return null
        }
      })

      // implement node event listeners here
    },

    pageLoadTimeout: 60000,
    defaultCommandTimeout: 30000,
    responseTimeout: 30000,
    requestTimeout: 30000,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: true,
      html: true,
      json: true,
      code: false
    }
  },
});
