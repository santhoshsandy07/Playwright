import { BrowserContext, Locator, Page } from "@playwright/test"
import { BrowserInteractionsImplementation } from "../NewUtils/BrowserInteractionsImplementation";

export class Dashboard extends BrowserInteractionsImplementation
{

    createnewlead : Locator

    constructor(page:Page,context:BrowserContext)
    {
        super(page,context);
        this.createnewlead=page.getByRole("link",{name : "Contacts / Leads"});
        
    } 
    async createlead(): Promise<void>
    {
        await this.click(this.createnewlead,"CREATENEWLEAD");

    }


}


