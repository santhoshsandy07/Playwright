import test, { Locator } from "@playwright/test";
import { BrowserInteractions } from "./BrowserInteractions";

export class BrowserInteractionsImplementations implements BrowserInteractions
{
    async click(locator:Locator,elementname : string): Promise<void> {
       await test.step(`Click ${elementname}`, async()=>
        {
              await locator.click();
        })
    }
    async fill(locator : Locator,data : string , elementname : string) : Promise <void>{

        await test.step(`Enter ${elementname}`,async()=>
        {
             await locator.clear();
             await locator.fill(data);
        })
        
    }
    selectdropdown(): void {
      
    }
    switchtopage(): void {
       
    }

    

}