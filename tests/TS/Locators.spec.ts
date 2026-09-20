import test, { chromium } from "@playwright/test";

test("Login",async()=>
{const browser=await chromium.launch({headless : false} );
const context=await browser.newContext();
const page=await context.newPage();

await page.goto("https://www.amazon.in/");

await page.getByRole("searchbox",{name:"Search Amazon.in"}).fill("iphone");
await page.locator("input[id='nav-search-submit-button']").click();
//await page.locator("(//input[@name='submit.addToCart'])[1]").click();  
await page.locator("(//div[@class='a-section a-spacing-small a-spacing-top-small']/div[3]/div[1]/div/div[3]/div/div/div/div[2]/div/form/div[1]/div/span/div/div/span/span/span[text()='Add to cart'])[1]").click();  

//(//div[@class='a-section a-spacing-small a-spacing-top-small']/div[3]/div[1]/div/div[3]/div/div/div/div[2]/div/form/div[1]/div/span/div/div/span/span/span[text()="Add to cart"])[1]
// CHILD TO PARENT /ANSESTOR :- (//input[@name='submit.addToCart'])[1]/ancestor::div[16]
//Today iphone is in the first place so we referced with [1]we taken it added to cart, tmrw in same page,some other prod will be 
//there which will be dynamic so we want to specify the product for which add to cart as its dynamic

await page.pause();
})
