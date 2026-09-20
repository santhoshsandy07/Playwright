import { chromium, expect } from "@playwright/test";
import test from "@playwright/test";
import { title } from "node:process";

test("Add to Cart", async ({ page }) => {

    await page.goto("https://www.amazon.in/");

    await page.getByRole("searchbox", { name: "Search Amazon.in" }).fill("iphone");
    await page.locator("//input[@id='nav-search-submit-button']").click();

    
    page.waitForTimeout(60000);
    await page.getByRole("button",{name:"Add to cart"}).click();

    const addtocart = page.getByRole("button", { name: "Add to cart" });
    await addtocart.last().waitFor({state:"visible",timeout:5000});

    const addtocartcount = await addtocart.count();
    console.log(`The Count of the total number of the Add to Cart in the UI is : ${addtocartcount}`);

    const alladdtocart = await addtocart.all()
    console.log(alladdtocart);


    // for(let x of alladdtocart)
    // {
    //     x.click();


    // }

    for(let i=0;i<addtocartcount;i++)
    {

        await expect(addtocart.nth(i)).toBeFocused();
        addtocart.nth(i).click(); 

        // await page.waitForTimeout(6000);

    }

    // addtocart.first().click(); 
    // addtocart.nth(1).click();
    // addtocart.last().click();

    await page.pause();


})


// method 2
// import { test } from "@playwright/test";

// test("Add all available products to cart", async ({ page }) => {

//     await page.goto("https://www.amazon.in/");

//     await page.getByRole("searchbox", { name: "Search Amazon.in" }).fill("iphone");

//     await page.locator("#nav-search-submit-button").click();

//     const addToCart = page.getByRole("button", {name: "Add to cart"});
//     await addToCart.last().waitFor({ state: "visible", timeout: 5000 });

//     const count = await addToCart.count();

//     console.log(`Add to Cart buttons found: ${count}`);

//     for (let i = 0; i < count; i++) {

//         const button = addToCart.nth(i);

//         if (await button.isVisible()) {

//             await button.scrollIntoViewIfNeeded();

//             console.log(`Adding product ${i + 1}`);

//             await button.click();

//             // Small wait for Amazon to process the click
//             await page.waitForTimeout(1000);
//         }
//     }

//     await page.pause();
// });
