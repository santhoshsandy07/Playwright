import test, { chromium } from "@playwright/test";
test("Frames",async({page})=>
{
    
await page.goto("https://letcode.in/frame");

await page.pause();


})