//var login = require('../page-objects/login_page.js')
var login = require("../page-Object/login_page.js");

var Objects = require('./Objects.json');

describe("Check login functionality",function(){

    beforeEach(function(){
        browser.get(browser.baseUrl);
        
    })
    it("valid email address and password should allow login",function(){
         login.validlogin(Objects.test.username, Objects.test.password);
         browser.sleep(5000)
       // expect(browser.getCurrentUrl()).tobe('');  
    });

    it("Appropriate error message should be shown with invalid email address and password",function(){
        //login.invalidlogin(Data.invalidusername,Data.invalidpassword);
        login.emptyemail('',Objects.test.password);
       //var errormessage =  login.invalidlogin(Data.invalidusername,Data.invalidpassword);
       //errormessage.getText().then(function(text){
         //  console.log(text);
     //  })
      //  expect(errormessage).toBe('Invalid username or password');
      
   });

   
   
});