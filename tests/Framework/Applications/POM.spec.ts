import test from "@playwright/test";
import { LoginPage } from "../Pages/Login";
import { Dashboard } from "../Pages/Dashboard";
import { CreateNewContactpage } from "../Pages/ContactLeadPage";
import { Addnewcontact } from "../Pages/AddNewContact";

 
test.only("Login Test Case", async({page,context})=>
{

await page.goto("https://apps.theauto-mate.com/crm/login.php");

let loginpage=new LoginPage(page,context);

await loginpage.enterusername("automate.crm");
await loginpage.enterpassword("test@123");
await loginpage.clickSignin();


let dashboard=new Dashboard(page,context);
await dashboard.createlead();

let createNewContactpage=new CreateNewContactpage(page,context);
let newpage=await createNewContactpage.clickaddcontact();


let addnewcontact=new Addnewcontact(newpage,context);
await addnewcontact.addcontactname("SAI SANTHOSH");
await addnewcontact.addcontactmail("Santhoshravi@gmail.com");
await addnewcontact.addcontactmobile("9955884499");
await addnewcontact.addcontacjob("SALESFORCE");


})


