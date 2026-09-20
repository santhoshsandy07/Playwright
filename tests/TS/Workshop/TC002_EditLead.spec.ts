import { chromium, expect } from "@playwright/test";
import test from "@playwright/test";


test("TC002_EditLead", async ({ page }) => {

    await page.goto("https://apps.theauto-mate.com/crm/login.php");
    await page.getByRole("textbox", { name: "Username" }).fill("automate.crm");
    await page.getByRole("textbox", { name: "Password" }).fill("test@123");
    await page.getByRole("button", { name: "Sign In" }).click();

    await page.locator("//span[text()='Contacts / Leads']").click();

  const connameloc = page.locator("//p[text()='Santhosh Sai']");
    await expect(connameloc).toBeVisible({ timeout: 9000 });
    await expect(connameloc).toHaveText("Santhosh Sai");
    const connamevis = await connameloc.isVisible();
    const conname =await connameloc.innerText();
    console.log(`The Contact name is ${conname} and the visibility is ${connamevis}`)

    const editbutn = page.locator("//table/tbody/tr[1]/td[10]/button[text()='Edit']");
    await expect(editbutn).toBeEnabled({ timeout: 9000 });
    editbutn.click();

    const editpge = page.getByRole("heading", { name: "Edit Contact" });
    const editvis = await editpge.isVisible();
    await expect(editpge).toHaveText("Edit Contact");
    console.log(`The Edit page visibility is ${editvis}`);

    page.locator("//input[@id='edit_email']").fill("sandyupdatedmail@gmail.com");


    page.once('dialog', async dialog => {
        console.log(dialog.message()); // prints the popup text
        await dialog.accept(); // clicks OK
    });

    // Trigger the action that opens the dialog
    await page.getByRole("button", { name: "Save Changes" }).click();

    page.getByRole("button", { name: "View" }).first().isVisible();
    page.getByRole("button", { name: "View" }).first().click();

    const uptdmail = page.locator("//p[text()=' sandyupdatedmail@gmail.com']");
    const uptdmail2=await uptdmail.innerText();
    const uptdmailvis = await uptdmail.isVisible();
    console.log(`The Updated Email is visible in the Contact is ${uptdmail2} and the status is ${uptdmailvis}`);
    await expect(uptdmail).toHaveText("Email: sandyupdatedmail@gmail.com");

    await page.pause();

})