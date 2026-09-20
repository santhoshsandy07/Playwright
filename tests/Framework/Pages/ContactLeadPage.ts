import test, { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionsImplementation } from "../NewUtils/BrowserInteractionsImplementation";

export class CreateNewContactpage extends BrowserInteractionsImplementation
{

addnewcontact : Locator;


constructor(page:Page,context:BrowserContext)
{
    super(page,context)
    this.addnewcontact= page.getByRole("link", { name: "Add New Contact" }).first();
 
}

   async clickaddcontact():Promise<Page>
   {
        return await this.switchtopage(this.addnewcontact,"ADDNEWCONTACT");
   }

}