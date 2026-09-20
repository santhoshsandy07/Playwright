import test from "@playwright/test";
import { createlead, deletelead } from "../Utilities/Apiutilities";

test("API Edit lead in CRM ", async ({page,request}) => {

    //Create Lead using the API utility
    const apiresponse=await createlead(request);
    const jsonResponse=await apiresponse.json();
    const createLeadID=jsonResponse.contact_id;
    console.log("API Response" + jsonResponse.message);

     await page.pause();


    //Edit Utility
    await page.goto("https://apps.theauto-mate.com/crm/login.php");
    await page.getByRole("textbox", { name: "Username" }).fill("automate.crm");
    await page.getByRole("textbox", { name: "Password" }).fill("test@123");
    await page.getByRole("button", { name: "Sign In" }).click();

     await page.locator("//span[text()='Contacts / Leads']").click();

    await page.getByRole("button",{name : "Edit"}).first().click();

    await page.locator("//input[@id='edit_email']").clear();
    await page.locator("//input[@id='edit_email']").fill("sandysanjuudpated@gmail.com")
    await page.getByRole("button",{name : "Save Changes"}).click();

    await page.pause();


    //Delete Lead using the API Utilities 

    const deleteresponse=await deletelead(request,createLeadID);
    const deletejsonresponse=await deleteresponse.json();
    const deletemsg=deletejsonresponse.message;
    console.log(`The Delete Message is ${deletemsg}`)


})
