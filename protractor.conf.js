var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var params = process.argv;
var args = process.argv.slice(3);

exports.config = {
  directConnect: true,
  //seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
  allScriptsTimeout: 10000,
  framework: 'jasmine2',
  baseUrl: "https://test.my.imaginelearning.com/login/form",
  //baseUrl: "http://www.way2automation.com/angularjs-protractor/webtables/",
  localSeleniumStandaloneOpts: {
    jvmArgs: ['-Dwebdriver.ie.driver=./node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.7.0.exe'
    ]
  },
  onPrepare: function () {
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;

    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: __dirname+'/qualityreports/testresults/e2e',
        takeScreenshots: false,
        filePrefix: 'automationReport',
        consolidate: true,
        cleanDestination: false,
        consolidateAll: true

      })
    );
  },


  suites:{
    example:['./test/e2e/specs/**/loginPage-Spec.js']
  },

  capabilities:
    {
      'browserName': 'chrome',
  
    },

//   'capabilities': {
//   'browserstack.user': 'ankurtyagi6',
//   'browserstack.key': 'asyLXzz4NCkACychsoyV',
//   'browserName': 'firefox'
// },


  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 200000
  }
};
