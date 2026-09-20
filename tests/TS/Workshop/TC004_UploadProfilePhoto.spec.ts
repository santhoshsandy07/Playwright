import { expect } from "@playwright/test";
import test from "@playwright/test";

test("TC004_UploadProfilePhoto", async ({ page }) => {

    await page.goto("https://apps.theauto-mate.com/crm/login.php");
    await page.getByRole("textbox", { name: "Username" }).fill("automate.crm");
    await page.getByRole("textbox", { name: "Password" }).fill("test@123");
    await page.getByRole("button", { name: "Sign In" }).click();

    const profileButton = page.locator("//button[@class='btn-ghost p-2']");
    await expect(profileButton).toBeEnabled();
    await profileButton.click();

    const fileupload = page.locator('input[type="file"]');
    await fileupload.setInputFiles("tests/resources/Testimg.jpg");

    page.getByRole("button", {name : "Upload Photo"}).click();
    const profilepicmsg = page.locator("//div[text()='Profile photo updated!']");
    const profilepicmsgvis = await profilepicmsg.isVisible({timeout :3000});
    console.log(`The Profile Picture message visibility is : ${profilepicmsgvis} `);

    expect(fileupload).toHaveValue("Testimg.jpg");

    await page.pause();
});