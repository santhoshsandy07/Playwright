import test, { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractions } from "../Utils/BrowserInteractions";

export class BrowserInteractionsImplementation implements BrowserInteractions {

    page: Page;
    context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {

        this.page = page;
        this.context = context;

    }


    async click(locator: Locator, Webelementname: String): Promise<void> {

        await test.step(`Click the ${Webelementname}`, async () => {
            await locator.click();
        })

    }
    async fill(locator: Locator, Webelementname: String, data: string): Promise<void> {

        await test.step(`Enter the ${Webelementname}`, async () => {
            await locator.fill(data);
        })

    }

    async switchtopage(locator: Locator, Webelementname: string): Promise<Page> {

        //   const newpagepromise=this.context.waitForEvent("page");
        //   await locator.click();
        //   const newPage=await newpagepromise;
        //   return newPage;

        return test.step(`click on the ${Webelementname} and switch to open the new page`, async () => {

            const [newPage] = await Promise.all([
                this.context.waitForEvent("page"),
                locator.click()
            ]);
            return newPage;
        });
    }

    

}