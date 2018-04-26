/**
 * Created by ankur.tyagi on 3/23/2018.
 */


describe("CallBack & Promises", function () {

  it("single callback call", function () {

    function somethingTakesTime(cb) {
      var data;
      setTimeout(function () {
        data = 'data';
        cb(data);
      }, 3000);

    }

    somethingTakesTime(function (data) {
      //.....

    });
  });

  it("callback hell", function () {

    function somethingTakesTime(cb) {
      var data;
      setTimeout(function () {
        data = 'data';
        cb(data);
      }, 3000);

    }

    function somethingTakesExtraTime(cb) {
      var dataExtra;
      setTimeout(function () {
        dataExtra = 'data';
        cb(dataExtra);
      }, 3000);

    }

    function somethingTakesVeryExtraTime(cb) {
      var dataVeryExtra;
      setTimeout(function () {
        dataVeryExtra = 'data';
        cb(dataVeryExtra);
      }, 3000);

    }

// successive methods need to be called asynchronously, commonly referred to as callback hell!!!
    somethingTakesTime(function (data) {

      somethingTakesExtraTime(function (dataExtra) {

        somethingTakesVeryExtraTime(function (dataVeryExtra) {

          //.............

        });
        //......................
      });
      //.....
    });
  });

// So to avoid callback hell, we can deal with promise concept

  /*  The core idea behind promises is to represent the result of an asynchronous operation.
   To do this, promises are given different states to communicate what it's doing.
   A promise is in one of three different states:
   * pending - The initial state of a promise, the operation is still in progress.
   * * fulfilled - The state of a promise representing a successful operation.
   * * rejected - The state of a promise representing a failed operation.
   * Once a promise is fulfilled or rejected, it is immutable.
   If somethingThatTakesTime were to be implemented using promises, it could be implemented as such:*/

  /*
   * Just remember that each consecutive .then receives the value that is returned from the previous promise.
   * Using promises is as easy as $q or Bluebird, but understanding how they work is a little more complex.
   *
   * Promises always require at least one more iteration of the event loop to resolve.
   * This is not necessarily true of the standard callback approach.
   Since then() always returns a new Promise object,
   there will always be at least one Promise object that gets created,
   resolved and then ignored. Which can be seen as wasteful.
   The callback approach does not have this problem.
   *
   *
   * */

  it("promise chaining call", function () {

    function somethingTakesTime(cb) {
      var data;
      setTimeout(function () {
        data = 'data';
        cb(data);
      }, 3000);

    }

    function somethingTakesExtraTime(cb) {
      var dataExtra;
      setTimeout(function () {
        dataExtra = 'data';
        cb(dataExtra);
      }, 3000);

    }

    function somethingTakesVeryExtraTime(cb) {
      var dataVeryExtra;
      setTimeout(function () {
        dataVeryExtra = 'data';
        cb(dataVeryExtra);
      }, 3000);

    }

    somethingTakesTime().then(function (data) {

      somethingTakesExtraTime().then(function (dataExtra) {

        somethingTakesVeryExtraTime().then(function (dataVeryExtra) {
          // >>>>>>>>>>>>>>>>>>
        });
        //>>>>>>>>>>>>>>>>>
      });
      // >>>>>>>>>>>>>>>>>>>>
    });
  });

  it("sigle promise call", function () {

    function somethingTakesTime(cb) {
      var data;
      setTimeout(function () {
        data = 'data';
        cb(data);
      }, 3000);

    }

    somethingTakesTime().then(function (data) {
      // >>>>>>>>>>>>>>>>>>>>

    });
  });

  it("promise all concept", function () {

    // myExpectedObjects is an array of items i'm expecting to be
    // drawn on the page
    var allPromises = myExpectedObjects.map(function (myObject) {
      //return statements here
      return element(by.id(myObject.id)).isPresent();

    });
    // Wait until all locators have been executed
    protractor.promise.all(allPromises).then(function (presentValues) {
      for (var i = 0; i < presentValues.length; i++) {
        if (!presentValues[i]) {
          console.log('Whoops, looks like ' + myExpectedObjects[i].name + ' isn\'t on the page!!');
        }
        expect(presentValues[i]).toBeTruthy();
      }
    });
  });

  it("make a utlity function to fetch promise object to use across framework", function () {

    describe('The Order Entry application', function() {

      it('common promise function: should add a line item', function() {
        var lineItemCountBefore = 0;
        var messageCountBefore = 0;
        var lineItemCount = element.all(By.id('order-detail')).count();
        var messageCount = element.all(By.id('order-message')).count();
        lineItemCount.then(function(value) {
          lineItemCountBefore = value;
          messageCount.then(function(value) {
            messageCountBefore = value;
            addLineItemToOrder();
            expect(lineItemCount).toEqual(lineItemCountBefore + 1);
            expect(messageCount).toEqual(messageCountBefore + 1);
          });
        });
      });
    });

    it(" utlity function should be written to follow DRY principle", function () {
      var lineItemCount = element.all(By.id('order-detail')).count();
      var messageCount = element.all(By.id('order-message')).count();

      var getCounts = function() {
        var deferred = protractor.promise.defer();
        var result = {
          lineItemCount: 0,
          messageCount: 0,
        };
        lineItemCount.then(function(value) {
            result.lineItemCount = value;
            messageCount.then(function(value) {
                result.messageCount = value;
                deferred.fulfill(result);
              },
              function(reason) {
                deferred.reject(reason);
              });
          },
          function(reason) {
            deferred.reject(reason);
          });
        return deferred.promise;
      };
    });
  });

  // Writing your own Promises

  it("user can write own promise as well", function () {

    var isItBlue =function (color) {

      return new promise(function (resolve) {
        if(color === 'Blue'){resolve(true)}
        else{resolve(false)}
      });
    };

    //  expect(isItGreen('Green')).to.eventually.be.false;
    //  expect(isItGreen('Blue')).to.eventually.be.true;
  });

  // use fo promise.all
  it("how to use promise.all ", function () {
    promise.all([
      element(by.id('xyz')).getText(),
      element(by.id('abc')).getText()
    ]).then(function (values) {
      expect(values[0]).to.equal('Hello');
      expect(values[1]).to.equal('ABC')
    });

  });

  // custom function which clicks a provided hyperlink,
  // wait for the expected url to load, and only then resolve the promise.
  // It will utilize Selenium calls to handle browser redirects and url interactions.
  it("Use case of custom promise", function () {
    var selectHyperLink = function (hyperlinkId, expectedUrl) {
      // let's click on link & then do further actions.
      return element(by.id('hyperlinkId')).click().then(function () {
        //wrap browser wait functionality into a new promise object
        return new promise(function (resolve) {
          //wait on the url to change to the expected value
          browser.driver.wait(function () {
            //only return true if url contains expected url
            return browser.driver.getCurrentUrl().then(function (url) {
              return url === expectedUrl;
            }, 6000).then(function () {
              //resolve the promise only once the browser has confrimed the url changed
              resolve();
            });
          });
        });
      });
    }
    //use we can in spec file like below
    /*  selectHyperlink('goToPage', 'https://mysite/home').then(function(){
     expect(element(by.id('newPageHeader')).getText()).to.eventually.equal('My New Page');
     });*/
  });
});


