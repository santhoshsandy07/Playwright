import { BrowserInteractionsImplementation } from "../NewUtils/BrowserInteractionsImplementation";
import { BrowserInteractionsImplementations } from "../Utils/BrowserInteractionsImplementations";
import test, { Page } from "@playwright/test";

test("Login Page Automation", async({page,context})=>
{

await page.goto("https://apps.theauto-mate.com/crm/login.php");

let browserInteractionsImplementation=new BrowserInteractionsImplementation(page,context);

const username= page.getByRole("textbox",{name : "Username"});
await browserInteractionsImplementation.fill(username,"USERNAME","automate.crm");

const password=page.getByRole("textbox",{name : "Password"});
await browserInteractionsImplementation.fill(password,"PASSWORD","TEST@123");

const signin=page.getByRole("button",{name : "Sign In"});
await browserInteractionsImplementation.click(signin,"SIGNIN")

})
 