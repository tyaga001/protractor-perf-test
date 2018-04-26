
var webTablePage = require("../page-Object/webTablePage.js");
var request = require('request');

describe("verify launch of zoom77 home page", function () {
  var webTable = new webTablePage();
  it("verify base URL of home page", function () {
    browser.get(browser.baseUrl);

    var list = webTable.allRowValues;
    list.map(function(links){
      return links;
    }).then(function(){

      for (var i = 0; i < links.length; ++i){
        links[i].$('h3>a').getText().then(function(){
          console.log('text of elem1 is: '+text);


        });

      }
    });

  });

});

// var list1= webTable.allRowValues;

// list1.map(function(links){
// return links;
// }).then(function(links){

// for (var i = 0; i &lt; links.length; i++){

// links[i].$('h3>a').getText().then(function(text){

// console.log('text of elem1 is: '+text);

// if(text === ‘pink’){

// links[i].$('h3>a').click();

// }

// });

// }

// });

// });

// });





 