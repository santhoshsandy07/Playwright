import test, { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractions_sandy } from "./BrowserInteractions";


export class BrowserInteractionsImplementation implements BrowserInteractions_sandy
{

    context: BrowserContext; 
    page: Page;
    
    constructor(page:Page, context :BrowserContext)
    {
        this.page=page;
        this.context=context;
        
    }
    async click(locator : Locator , webelement : string): Promise<void> {
        
            await test.step(`click ${webelement}`,async()=>
            {
               await  locator.click();
            })
    }
    async fill(locator : Locator , webelement : string, data :string): Promise<void> {

        await test.step(`Fill the data in the ${webelement}`,async()=>
        {
            await locator.fill(data);

        })
        
    }
    async switchwindow(locator : Locator , webelement : string): Promise<Page> {

        return await test.step(`Switch to the New Page/window : ${webelement}`,async()=>
        {

            const [newpage]= await Promise.all([
               this.context.waitForEvent("page"),
               locator.click()
            ])

        return newpage;
        })
        
       
    }

}