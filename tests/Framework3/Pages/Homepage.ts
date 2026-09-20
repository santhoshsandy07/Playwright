import { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserinteractionsImplementation } from "../Utilities/BrowserinteractionsImplementation";

export class Homepage extends BrowserinteractionsImplementation
{

locator : Locator;

constructor(page : Page,context : BrowserContext)
{
    super(page,context);
    this.locator=page.locator("//p[text()='Discover active, comfy wear']");
}

async boysdress()
{
    await this.locator.click();
}


}