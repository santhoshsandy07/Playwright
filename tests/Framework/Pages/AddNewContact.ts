import test, { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionsImplementation } from "../NewUtils/BrowserInteractionsImplementation";

export class Addnewcontact extends BrowserInteractionsImplementation
{
addname : Locator;
addmail : Locator;
addmobile :Locator;
addjob : Locator;



constructor(page:Page,context:BrowserContext)
{
    super(page,context)
    this.addname=page.locator("//input[@name='contact_name']").first();
    this.addmail=page.locator("//input[@id='email']")
    this.addmobile=page.getByRole("textbox", { name: "e.g. 9876543210" });
    this.addjob=page.locator("//input[@id='company']");
}


   async addcontactname(data:string):Promise<void>
   {
        await this.fill(this.addname,"ADDNAME",data)
   }

     async addcontactmail(data:string):Promise<void>
   {
        await this.fill(this.addmail,"ADDMAIL",data)
   }

      async addcontactmobile(data:string):Promise<void>
   {
        await this.fill(this.addmobile,"ADDMOBILE",data)
   }
      async addcontacjob(data:string):Promise<void>
   {
        await this.fill(this.addjob,"ADDMJOB",data)
   }


   
    
}