import { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionsImplementation } from "../Utilities/BrowserInteractionsImplementationnew";

export class Newtabpageparent extends BrowserInteractionsImplementation {

    opendestination: Locator;

    constructor(page: Page, context: BrowserContext) {

        super(page, context);

        this.opendestination = page.getByRole("link", {name: "Open destination ↗"
        });
    }

    async clickopendestination(): Promise<Page> {

        return await this.switchtopage(this.opendestination, "Open destination");
    }
}