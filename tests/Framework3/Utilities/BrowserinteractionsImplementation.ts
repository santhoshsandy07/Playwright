import test, { Page, BrowserContext, Locator } from "@playwright/test";
import { Browserinteractions } from "./Browserinteractions";

export class BrowserinteractionsImplementation implements Browserinteractions
{
    page: Page;
    context: BrowserContext;

    constructor(page:Page,context :BrowserContext)
    {
        this.page=page;
        this.context=context;
    }

    async click(locator:Locator,webelement : string): Promise<void> {

        test.step(`Click ${webelement}`,async()=>
        {
            await locator.click();
        })
        
    }
    async fill(locator:Locator,webelement : string, data :string): Promise<void> {


        test.step(`Enter ${webelement}`,async()=>
        {
            await locator.fill(data);

        })

        
    }
   
    async switchtowindow(locator:Locator,webelement : string): Promise<Page> {

        return test.step(`Click ${webelement} to switch a new tab/page`,async()=>
        {
            const [newpage]= await Promise.all([this.context.waitForEvent("page"),
                 locator.click()
            ]);
           return newpage;
        })
    }


    
}