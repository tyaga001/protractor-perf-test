var homePage = function () {

  this.homePageLogo = element(by.css('.protractor-logo'));

  this.getHomePageLogoVisibility = function () {
    return this.homePageLogo.isDisplayed();
  };

  this.getHomePageLogoPresence = function () {
    return this.homePageLogo.isPresent();
  };

};
module.exports = homePage;