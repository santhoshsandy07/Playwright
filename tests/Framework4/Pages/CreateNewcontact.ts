import { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionsImplementation } from "../Utilities/BrowserInteractionsImplementation";

export class CreateNewContactpage extends BrowserInteractionsImplementation {


addnewcontactbutton : Locator

constructor(page:Page,context:BrowserContext)
{
    super(page,context);
    this.addnewcontactbutton = page.getByRole("link",{name : "Add New Contact"});
}

async clickaddnewcontactbtn() : Promise<Page>
{
    return await this.switchwindow(this.addnewcontactbutton,"ADD CONTACTNEWBUTTON CLICK")

}





}