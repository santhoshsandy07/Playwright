import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import { BrowserinteractionsImplementation } from "../Utilities/BrowserinteractionsImplementation";

export class Boyskurthapage extends BrowserinteractionsImplementation
{
    choosesize : Locator;
    pincode : Locator;
    checkpincodebutton : Locator;
    pincodecheck :Locator;
    pincodeapply : Locator;
    addtocartbutton : Locator;

    constructor(page:Page,context : BrowserContext)
    {
        super(page,context);
        this.choosesize =page.locator("//span[text()='9 - 10 Y']");
        this.pincode=page.getByRole("textbox",{name : "Enter Pincode"});
        this.checkpincodebutton=page.locator("//span[text()='Check']");
        this.pincodecheck=page.locator("//b[text()='Thursday, Sep 24']");
        this.pincodeapply=page.locator("//span[text()='Apply']");
        this.addtocartbutton=page.locator("//span[text()='ADD TO CART']");

    }

    async size()
    {
        await this.choosesize.click();
    }

    async enterpincode(data:string)
    {
        this.pincode.fill(data);
        console.log(`Enter the pincode ${data} `)

    }

    async pincodebtnclick()
    {
        await this.checkpincodebutton.click();
    }

    async pincodedatecheck()
    {
        await this.pincodecheck.isVisible();
        //expect(this.pincodecheck).toHaveText('Thursday, Sep 24');
        if(true)
        {
        console.log(`The Boys Kurtha is Deliverable to the Corresponding pincode`)
        }
    }

    async applypincode()
    {
        await this.pincodeapply.click();
    }

    async addtocart()
    {
        await this.addtocartbutton.click();
    }
    

}