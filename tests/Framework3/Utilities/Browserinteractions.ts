import { BrowserContext, Locator, Page } from "@playwright/test";

export interface Browserinteractions
{

    page: Page;
    context : BrowserContext;

    click(locator:Locator,webelement : string): Promise<void>;
    fill(locator:Locator,webelement : string, data :string): Promise<void>
    switchtowindow(locator:Locator,webelement : string): Promise<Page>

 

}