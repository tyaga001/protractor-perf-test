/**
 * Created by ankur.tyagi on 3/23/2018.
 */


it("defined custom matchers", function () {

  var customMatchers = {

     toBeGoofy: function (util, customEqualityTesters) {

       return {

         compare: function (actual, expected) {

           if(expected === undefined){

             expected = '';

           }

           var results = {};
           result.pass = util.equals(actual.hyuk, "gawrsh" + expected, customEqualityTesters);

           if(results.pass){


             customEqualityTesters
           }

         }



       }
       
     }



  }

});
