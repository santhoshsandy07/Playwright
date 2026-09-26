import { BrowserContext, Locator, Page } from "@playwright/test";

export interface BrowserInteractions_sandy
{

page : Page;
context :BrowserContext;

click(locator : Locator , webelement : string): Promise<void>;
fill(locator : Locator , webelement : string, data :string): Promise<void>;
switchwindow(locator : Locator , webelement : string): Promise<Page>;

}