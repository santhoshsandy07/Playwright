import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import { BrowserInteractionsImplementation } from "../Utilities/BrowserInteractionsImplementation";

export class Dashboardoverviewpage extends BrowserInteractionsImplementation {
    
    dashboardname: Locator;
    contactleadpagebtn: Locator;


    constructor(page:Page , context : BrowserContext)
    {
        super(page,context)
        //this.dashboardname=page.getByRole("heading",{name : "Dashboard Overview"});
        this.dashboardname=page.locator("//h1[text()='Dashboard Overview']");
        this.contactleadpagebtn =page.locator("//span[text()='Contacts / Leads']");
    }

    async checkdashboardname()
    {
        await expect(this.dashboardname).toHaveText("Dashboard Overview");
        console.log(`The Dashboard Looks fine`);
        
    }

    async clickcontactleadpagebtn()
    {
        await this.contactleadpagebtn.click();
    }





}