import { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionsImplementation } from "../Utilities/BrowserInteractionsImplementationnew";

export class Dashboard extends BrowserInteractionsImplementation
{

searchbox :Locator;
newtabtext : Locator;

constructor(page:Page,context:BrowserContext)
{
    super(page,context);
    this.searchbox=page.getByRole("searchbox",{name : "Search module"});
    this.newtabtext=page.locator("//p[text()='New Tab']");
}


async entersearchbox(data:string)
{
    await this.searchbox.fill(data)
}

async clicknewtab()
{
 await this.newtabtext.click();
}



}