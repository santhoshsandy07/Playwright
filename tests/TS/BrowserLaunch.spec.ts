import test ,{chromium } from "@playwright/test";


test("Browser Launch",async()=>
{
 
    const browser=await chromium.launch({headless:false});
     const context=await browser.newContext();
    const context2=await browser.newContext();
    const context3=await browser.newContext();
    const page1=await context.newPage();
    const page2=await context2.newPage();
    const page3=await context3.newPage();

    //It opens the different websites in the same browsers one after the other by closing the browser
    // page.goto("https://www.amazon.in/");
    // await page.pause();
    // page.goto("https://sauce-demo.myshopify.com/");
    // await page.pause();
    // page.goto("https://www.flipkart.com/");
    // await page.pause();
    
    //It opens the different websites in the same browsers one after the other in seperate tabs
    page1.goto("https://www.amazon.in/");
    await page1.pause();
    page2.goto("https://sauce-demo.myshopify.com/");
    await page2.pause();
    page3.goto("https://www.flipkart.com/");
    await page3.pause();


    //It opens the different websites in the different browser windows 
    // const context=await browser.newContext();
    // const context2=await browser.newContext();
    // const context3=await browser.newContext();
    // const page1=await context.newPage();
    // const page2=await context2.newPage();
    // const page3=await context3.newPage();

})