var protractorPerfReports = require("protractor-perf-reports")
exports.config = {
    //seleniumPort: 4444,
    //selenium: "http://localhost:4444/wd/hub",
    directConnect: true,
    allScriptsTimeout: 10000,
    
    suites:{
        example:['./test/e2e/specs/**/performance-test.js']
      },
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
    //  Important for benchpress to get timeline data from the browser(as suggested in the link)
      'args': ['--js-flags=--expose-gc'],
      'perfLoggingPrefs': {
        'traceCategories': 'blink.console,disabled-by-default-devtools.timeline'
      }
    },
    loggingPrefs: {
      performance: 'ALL'
    }

    },
    
    // chromeDriver: './chromedriver.exe',
    // directConnect: true,
    onPrepare: function () {
        global.dvr = browser.driver;

        var perf = require('C:/projectRoom77/node_modules/protractor-perf-reports/dist')
        perf.init(jasmine)
        jasmine.getEnv().addReporter(
            
        new perf.JasmineJsonReporter({
            savePath: __dirname+'/performancereports/testresults/e2e',
            filePrefix: 'automationReport',
            consolidate: true,
            cleanDestination: false,
            consolidateAll: true

        })
    );
       // jasmine.getEnv().addReporter(new perf.JasmineJTLReporter())
    },

     // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 200000
  }
};