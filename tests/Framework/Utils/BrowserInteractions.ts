import { Locator } from "@playwright/test";
export interface BrowserInteractions
{
    click(locator:Locator,elementname : String): Promise<void>;
    fill(locator : Locator,data : String , elementname : String) : Promise <void>;
    selectdropdown() :void;
    switchtopage() :void;
}