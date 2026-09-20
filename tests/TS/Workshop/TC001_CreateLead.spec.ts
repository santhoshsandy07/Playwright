import test, { chromium, expect } from "@playwright/test";
test("TC001: Create Lead", async ({ page }) => {

    await page.goto("https://apps.theauto-mate.com/crm/login.php");
    await page.getByRole("textbox", { name: "Username" }).fill("automate.crm");
    await page.getByRole("textbox", { name: "Password" }).fill("test@123");
    await page.getByRole("button", { name: "Sign In" }).click();
    const title = page.locator("//h1[text()='Dashboard Overview']");
    await expect(title).toHaveText("Dashboard Overview");
    // await expect(title).toHaveText("/Dashboard/");
    // await expect(title).toContainText("Dashboard");
    const titlevisibility = await title.isVisible();
    console.log(`The Title is visible and ${titlevisibility}`);
    await page.getByText("Contacts / Leads").click();

    // click and wait for new tab

    const [newPage] = await Promise.all([

        page.context().waitForEvent("page"),
        page.getByRole("link", { name: "Add New Contact" }).click()
    ]);

    // bring focus to the new tab
    await newPage.waitForLoadState();

    await newPage.locator("//input[@name='contact_name']").fill("Santhosh Sai");
    await newPage.locator("//input[@id='email']").fill("sandy@gmail.com");
    await newPage.getByRole("textbox", { name: "e.g. 9876543210" }).fill("9159558188");
    await newPage.locator("//input[@id='company']").fill("Brillio");


    await newPage.getByRole("radio", { name: "Male", exact: true }).click();
    const drpdownstatus = newPage.locator("//select[@id='status']");
    drpdownstatus.selectOption({ index: 2 });

    const drpdownsrc = newPage.locator("//select[@id='source']");
    drpdownsrc.selectOption({ label: "Email Campaign" });

    await newPage.locator("//input[@id='lead_score']").fill("65");
    await newPage.locator("//input[@id='deals']").fill("5");
    await newPage.locator("//input[@id='total_value']").fill("9000");

    await newPage.getByRole("checkbox", { name: "Marketing" }).click();
    await newPage.getByRole("checkbox", { name: "CRM" }).click();
    const priority = newPage.locator("//select[@id='priority']");
    priority.selectOption({ value: "medium" });
    const priorityval = await expect(priority).toHaveValue("medium");


    await newPage.locator("//input[@type='date']").fill("2026-08-01");
    newPage.getByRole("textbox", { name: "Add any additional information..." }).fill("Awesome Contact and Good Lead");



    newPage.getByRole("button", { name: "Add" }).click();

    const leadmsg = newPage.locator("//div[text()='Lead added successfully!']");
    //const leadmsgvis = await leadmsg.isVisible({ timeout: 5000 });
    //console.log(`The lead message's visibility is ${leadmsgvis}`);
    await expect(leadmsg).toBeVisible();
    console.log(await leadmsg.innerText());
    await expect(leadmsg).toHaveText("Lead added successfully!");
    

    const connameloc = page.locator("//p[text()='Santhosh Sai']");
    await expect(connameloc).toBeVisible({ timeout: 9000 });
    await expect(connameloc).toHaveText("Santhosh Sai");
    const connamevis = await connameloc.isVisible();
    const conname = await connameloc.innerText();
    console.log(`The Contact name is ${conname} and the visibility is ${connamevis}`)

    await newPage.pause();

}
)

