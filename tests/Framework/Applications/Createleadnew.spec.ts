import test from "@playwright/test";
import { BrowserInteractionsImplementations } from "../Utils/BrowserInteractionsImplementations";


test("Add Lead", async ({ page }) => {

    await page.goto("https://apps.theauto-mate.com/crm/login.php");

    let browserInteractionsImplementations=new BrowserInteractionsImplementations();

    //await page.getByRole("textbox", { name: "Username" }).fill("automate.crm");
    const username= page.getByRole("textbox", { name: "Username" });
    await browserInteractionsImplementations.fill(username,"automate.crm","USERNAME");

    //await page.getByRole("textbox", { name: "Password" }).fill("test@123");
    const pwd= page.getByRole("textbox", { name: "Password" });
    await browserInteractionsImplementations.fill(pwd,"TEST@123","PASSWORD");


    const signin= page.getByRole("button", { name: "Sign In" });
    await browserInteractionsImplementations.click(signin,"SIGNIN");

}

)

