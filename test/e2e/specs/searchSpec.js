
var searchPage = require("../page-Object/searchPage.js");

describe("verify launch of zoom77 home page", function () {
  var search = new searchPage();
  it("verify base URL ", function () {
    browser.get(browser.baseUrl);
    console.log(browser.baseUrl);
  });
 /* it("verify search box on home page", function () {
    search.getSearchBox().then(function (val) {
      expect(val).toBe(true);
      console.log("search box ######"+ val);
    });
  });
  it("enter text in search box & verify ‘Check-in’ section is highlighted.", function () {
    search.enterTextInSearchBox("La Argentina, Argentina", 1);
    search.getSearchBtn();
  /!*  search.getCheckInSection().then(function (val) {
      expect(val).toBe(true);
      console.log("checkIn Section ####", val);
    });*!/
  });*/
/*  it("enter on search button", function () {
    search.getSearchBtn().then(function (val) {
      expect(val).toBe(true);
      console.log("value to be"+ val);
    });
  });*/
});
