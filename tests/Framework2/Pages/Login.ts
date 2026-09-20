import { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionsImplementation } from "../Utilities/BrowserInteractionsImplementationnew";

export class Login extends BrowserInteractionsImplementation{

workemail : Locator;
password : Locator;
signin :Locator;

constructor(page:Page,context:BrowserContext)
{
    super(page,context);
    this.workemail=page.getByRole("textbox",{name :"WORK EMAIL"});
    this.password=page.getByRole("textbox",{name : "PASSWORD"});
    this.signin=page.getByRole("button",{name : "Sign in"}).nth(1);
}

async addworkemail(data :string)
{

    await this.workemail.fill(data);
}
async addpassword(data :string)
{

    await this.password.fill(data);
}
async clicksignin()
{

    await this.signin.click();
}

}