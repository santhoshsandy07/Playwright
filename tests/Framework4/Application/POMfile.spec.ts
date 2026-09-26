import {test} from "@playwright/test";
import { Loginpage } from "../Pages/Loginpage";
import { Dashboardoverviewpage } from "../Pages/Dashboard";
import { CreateNewContactpage } from "../Pages/CreateNewcontact";
import { Addnewcontact } from "../Pages/AddNewContact";

test.only (`Login Function`,async({page,context})=>
{
await page.goto("https://apps.theauto-mate.com/crm/login.php");

let loginpage=new Loginpage(page,context);
await loginpage.enterusername("automate.crm");
await loginpage.enterpassword("test@123");
await loginpage.clicksigninbtn();

let dashboardoverviewpage=new Dashboardoverviewpage(page,context);
await dashboardoverviewpage.checkdashboardname();
await dashboardoverviewpage.clickcontactleadpagebtn();

let createNewContactpage=new CreateNewContactpage(page,context);
let newpage=await createNewContactpage.clickaddnewcontactbtn();

let addnewcontact=new Addnewcontact(newpage,context);
await addnewcontact.addcontactname("SAI SANTHOSH");
await addnewcontact.addcontactmail("Santhoshravi@gmail.com");
await addnewcontact.addcontactmobile("9955884499");
await addnewcontact.addcontacjob("SALESFORCE");
await addnewcontact.selectMale();
await addnewcontact.selectStatusByIndex(2);
await addnewcontact.selectSource("Email Campaign");
await addnewcontact.enterLeadScore("65");
await addnewcontact.enterDeals("5");
await addnewcontact.enterTotalValue("9000");
await addnewcontact.selectMarketing();
await addnewcontact.selectCRM();
await addnewcontact.selectPriority("medium");
await addnewcontact.enterLastContactDate("2026-08-01");
await addnewcontact.enterNotes("Awesome Contact and Good Lead");
await addnewcontact.clickAdd();
await addnewcontact.verifySuccessMessage();

await page.pause();

})