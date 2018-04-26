var login_page = function(){
    this.validlogin =  function(username,password){
       login(username,password);
   };

   this.invalidlogin =  function(username,password){
    login(username,password);
    browser.sleep(5000);
    
   element(by.css('.login_modal_wrapper #error-username-or-password')).getText().then(function(text){
       console.log(text);
   });

   

};

this.emptyemail =  function(username,password){
    login(username,password);
    browser.sleep(5000);
    
    element(by.css('.login_modal_wrapper #error-username-required')).getText().then(function(text){
       console.log(text);
   });

   

};

var login = function(uname,passwd){
    element(by.model('vm.username')).sendKeys(uname);
    element(by.model('vm.password')).sendKeys(passwd);
    $('.login_button').click();
}
   };
   module.exports = new login_page();