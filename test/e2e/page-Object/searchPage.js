 var searchPage = function () {
  this.searchBox = element(by.model('autocomplete.query'));
  this.clkSearchBox = element(by.css('[ng-click="AutocompleteInputClick()"]'));
  this.clkSearchBtn = element(by.css('[ng-click="SearchDefault()"]'));
  this.checkInSection = element(by.css('[ng-click="ShowCalendar(1)"]'));

  this.getSearchBtn = function () {
/*    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(this.clkSearchBtn), 500).then(function () {*/
browser.sleep(500);
      this.clkSearchBtn.click();

    //});
  };

  this.getCheckInSection = function () {
    return this.checkInSection.isDisplayed();
  }

  this.getSearchBox = function () {
    return this.searchBox.isDisplayed();
  };

  this.enterTextInSearchBox = function (text,index) {
    this.clkSearchBox.click();
    browser.actions()
      .mouseMove(this.searchBox)
      .sendKeys(text).perform().then(function () {
      browser.sleep(500);
      for(i = 0; i < index ; i++) {
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        console.log("Index"[0]+ text);
      }
      browser.sleep(500);
      browser.actions().sendKeys(protractor.Key.ENTER).perform();
    });
   // return this.clkSearchBox.click();
  };

 };
module.exports = searchPage;