
var homePage = require("../page-Object/homePage.js");
var request = require('request');

describe("verify launch of zoom77 home page", function () {
  var home = new homePage();
  it("verify base URL of home page", function () {
    browser.get(browser.baseUrl);
    console.log(browser.baseUrl);
  });
 
  request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
  /* it("verify display of protractor logo on home page", function () {
     home.getHomePageLogoVisibility().then(function (val) {
       expect(val).toBe(true);
     });
   });
   it("verify presence of protractor logo on home page", function () {
     home.getHomePageLogoPresence().then(function (value) {
       expect(value).toBe(true);
     });
   });*/
});
