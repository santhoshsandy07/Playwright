import { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserinteractionsImplementation } from "../Utilities/BrowserinteractionsImplementation";

export class Boyspage extends BrowserinteractionsImplementation
{

    locator : Locator;

    constructor(page:Page,context : BrowserContext)
    {
        super(page,context)
        this.locator=page.getByRole("img",{name : "Pine Kids Cotton Woven Full Sleeves Kurta with Floral Print - Red"});
    }

    async boyskurtha()
    {
        return await this.switchtowindow(this.locator,`BoysKurthapage`);
        
    }


}