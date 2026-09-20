import { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionsImplementation } from "../Utilities/BrowserInteractionsImplementationnew";

export class Newtabpagechild extends BrowserInteractionsImplementation
{
backbutton : Locator;

constructor(page:Page,context:BrowserContext)
{
    super(page,context);
    this.backbutton=page.getByRole("link",{name : "← Back to module"});

}

async backbuttonnewtab()
{
   await this.backbutton.click();
}

}