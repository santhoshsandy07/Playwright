import { test } from "@playwright/test";

test("Print all product titles", async ({ page }) => {

    await page.goto("https://www.amazon.in/");

    await page.getByRole("searchbox", { name: "Search Amazon.in" }).fill("iphone");

    await page.locator("#nav-search-submit-button").click();

    // Wait for search results
    await page.waitForTimeout(3000);

    const titles = page.locator('[data-component-type="s-search-result"] h2 span');

    const count = await titles.count();

    console.log("================================");
    console.log("TOTAL TITLES =", count);
    console.log("================================");

    for (let i = 0; i < count; i++) {

        const title = await titles.nth(i).innerText();

        console.log(`Title ${i + 1}: ${title}`);
    }

});
