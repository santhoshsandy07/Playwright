import { chromium, expect } from "@playwright/test";
import test from "@playwright/test";


test("TC003_DeleteLead", async ({ page }) => {

    await page.goto("https://apps.theauto-mate.com/crm/login.php");
    await page.getByRole("textbox", { name: "Username" }).fill("automate.crm");
    await page.getByRole("textbox", { name: "Password" }).fill("test@123");
    await page.getByRole("button", { name: "Sign In" }).click();

    await page.locator("//span[text()='Contacts / Leads']").click();

    const connameloc = page.locator("//p[text()='Santhosh Sai']");
    await expect(connameloc).toBeVisible({ timeout: 9000 });
    await expect(connameloc).toHaveText("Santhosh Sai");
    const connamevis = await connameloc.isVisible();
    const conname = await connameloc.innerText();
    console.log(`The Contact name is ${conname} and the visibility is ${connamevis}`)

    const deletebtn = page.getByRole("button", { name: "Delete" }).first();
    await expect(deletebtn).toBeVisible({ timeout: 9000 });
    await deletebtn.isEnabled();
    await deletebtn.focus();


    //recommended-> page.on 
    
    page.once("dialog", async dialog => {

        const msg = dialog.message();
        let msg1 = "Are you sure you want to delete this contact?";

        if (msg == msg1) {
            console.log(`The Message is correct and its verified and Message is : ${msg}`);
            await dialog.accept();
            dialog.message();
        }
    }
    )

await deletebtn.click();
     await expect(connameloc).not.toBeVisible();
     const convis1=await connameloc.isVisible();
     console.log(`The Contact visibility post deeltion is : ${convis1}`)


    // page.once("dialog", async dialog2 => {
    
    //     let msg3 = "Contact deleted successfully";
    //     if (msg2 == msg3) {
    //         console.log(`The Delete Verbiage is Same and Message is : ${msg2}`)
    //         await dialog2.accept();
    //     }
    // }
    // )
 
 await page.pause();

   

 

})
