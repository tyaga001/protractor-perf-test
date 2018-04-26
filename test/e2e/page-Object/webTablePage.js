var webTablePage = function () {

    this.allColValues = element.all(by.repeater('column in columns'));
    this.allRowValues = element.all(by.repeater('dataRow in displayedCollection'));
  
    this.getHomePageLogoVisibility = function () {
      return this.homePageLogo.isDisplayed();
    };
  
    this.getHomePageLogoPresence = function () {
      return this.homePageLogo.isPresent();
    };
  
  };
  module.exports = webTablePage;