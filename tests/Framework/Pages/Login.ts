import test, { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionsImplementation } from "../NewUtils/BrowserInteractionsImplementation";

export class LoginPage extends BrowserInteractionsImplementation
{

    username:Locator;
    password:Locator;
    signin:Locator;

    constructor(page:Page,context:BrowserContext)
    {
        super(page,context);
        this.username=page.getByRole("textbox", { name: "Username"});
        this.password=page.getByRole("textbox", { name: "Password"});
        this.signin=page.getByRole("button", { name: "Sign In"});
    }

   
    async enterusername(data:string):Promise<void>
    {
        
            await this.fill(this.username,"USERNAME",data);
        
    }

    async enterpassword(data:string):Promise<void>
    {

        await this.fill(this.password,"PASSWORD",data);
    }

    async clickSignin(): Promise<void>
    {
        await this.click(this.signin,"SIGNIN")
    }


   
}
