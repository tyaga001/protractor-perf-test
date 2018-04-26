var protractorPerfReports = require("protractor-perf-reports")
//var ProtractorPerf = require('protractor-perf');
var PerfRunner = require('C:/Users/ankur.tyagi/AppData/Roaming/npm/node_modules/protractor-perf');
var perf = new PerfRunner(protractor, browser);
describe('angularjs homepage todo list', function() {
    //var perf = new PerfRunner(protractor); // Initialize the perf runner

    it('should add a todo', function() {
        browser.get('http://www.angularjs.org');
        browser.manage().window().maximize();
        
        browser.sleep(3000);


        perf.start(); // Start measuring the metrics
        browser.executeScript('arguments[0].scrollIntoView()', element(by.model('todoList.todoText')).sendKeys('write a protractor test'));

    
        // var EC = protractor.ExpectedConditions;
        // var addBtn = element(by.buttonText('add'));
        // // Waits for the element with id 'abc' to be clickable.
        // browser.wait(EC.elementToBeClickable(addBtn, 5000));    
        // browser.sleep(8000); 
        // browser.executeScript('arguments[0].scrollIntoView();', addBtn.getWebElement());
        // addBtn.click();

        perf.stop(); // Stop measuring the metrics 

        if (perf.isEnabled) { // Is perf measuring enabled ?
            // Check for perf regressions, just like you check for functional regressions
            perfRunner.printStats();
            expect(perf.getStats('meanFrameTime')).toBeLessThan(60); 
        };

        // var todoList = element.all(by.repeater('todo in todos'));
        // expect(todoList.count()).toEqual(3);
        // expect(todoList.get(2).getText()).toEqual('write a protractor test');

    });
});
