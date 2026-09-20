import test, { chromium } from "@playwright/test";

test("Fixtures",async({page})=>
{
// const browser=await chromium.launch({headless : false} );
// const context=await browser.newContext();
// const page=await context.newPage();

await page.goto("https://www.amazon.in/");

await page.getByRole("searchbox",{name:"Search Amazon.in"}).fill("iphone");
await page.locator("input[id='nav-search-submit-button']").click();
await page.locator("(//input[@name='submit.addToCart'])[1]").click();  

await page.pause();
})
