import test, { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionsnew } from "./BrowserInteractionsnew";
export class BrowserInteractionsImplementation implements BrowserInteractionsnew

{
    page :Page;
    context :BrowserContext;

    //If the variables are not initialized then they have to be mandatoryly initilaised with the help of the constructors
    
    constructor(page:Page,context:BrowserContext)
    {
        this.page=page;
        this.context=context;
    }
    async click(locator: Locator, Webelement: string): Promise<void> {
        

        test.step(`Click the ${Webelement}`,async()=>
        {
           await locator.click();
        })

    }
    async fill(locator : Locator,Webelement : string,data :string): Promise <void> {

        test.step(`Enter in the ${Webelement}`,async()=>
        {
            await locator.fill(data);
        })
    }

    async switchtopage(locator :Locator,webelement:string): Promise<Page> {

        return test.step(`Switch to ${webelement}`,async()=>
        {

            const [newPage]=await Promise.all([

                this.context.waitForEvent("page"),
                locator.click()
            ])

            return newPage;

        })
    
    }
    
         
}