import { BrowserContext, Locator, Page } from "@playwright/test";

export interface BrowserInteractionsnew
{
page : Page;
context : BrowserContext;

click(locator: Locator, Webelement: string): Promise<void>; 
fill(locator : Locator,Webelement : string,data :string): Promise <void>;
switchtopage(locator :Locator,webelement:string): Promise<Page>;


}