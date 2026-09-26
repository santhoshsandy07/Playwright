import { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionsImplementation } from "../Utilities/BrowserInteractionsImplementation";

export class Loginpage extends BrowserInteractionsImplementation
{

username : Locator;
password : Locator;
signinbtn : Locator;


constructor(page : Page, context :BrowserContext)
{
    super(page,context);
      this.username=page.getByRole("textbox", { name: "Username"});
        this.password=page.getByRole("textbox", { name: "Password"});
        this.signinbtn=page.getByRole("button", { name: "Sign In"});
}

async enterusername(data :string )
{
        await this.username.fill(data);
}

async enterpassword( data :string )
{
        await this.password.fill(data);
}

async clicksigninbtn()
{
        await this.signinbtn.click();
}
}