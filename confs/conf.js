var SpecReporter = require('jasmine-spec-reporter').SpecReporter

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    chromeOptions: {
      prefs: {
        'profile.managed_default_content_settings.notifications': 1
      }
    }
  },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
  specs: [
    '../testScripts/loginTests.js'
  ],
    // Set the Url where browser will start.
  baseUrl: 'https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin',

    // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',
    // Configuration of Jasmine Options.
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    realtimeFailure: true,
    includeStackTrace: true
  },

  onPrepare: function () {
      // ignoreSynchronization allows to turn off the synchronization for non-angular pages.
    browser.ignoreSynchronization = true
      // Configure jasmine spec reporter.
    jasmine.getEnv().clearReporters() // remove default reporter logs
    jasmine.getEnv().addReporter(new SpecReporter({ // add jasmine-spec-reporter
      spec: {
        displayStacktrace: true,
        displayPending: true
      }
    }))

        // Maximize window
    setTimeout(function () {
      browser.driver.executeScript(function () {
        return {
          width: window.screen.availWidth,
          height: window.screen.availHeight
        }
      }).then(function (result) {
        browser.driver.manage().window().setSize(result.width, result.height)
      })
    })
  }
}
