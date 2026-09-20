import { BrowserContext, Locator, Page } from "@playwright/test";

export interface BrowserInteractions1 {
    page: Page;
    context: BrowserContext;


    click(locator: Locator, Webelement: String): Promise<void>;
    fill(locator: Locator, Webelement: String, data: string): Promise<void>;
    switchtopage(locator: Locator, Webelementname: string): Promise<Page>;
    addcontact(locator : Locator,webelement:string):Promise<void>;
    addcontactname(data:string):Promise<void>

}