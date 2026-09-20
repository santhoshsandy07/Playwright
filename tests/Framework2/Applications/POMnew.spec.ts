import {test} from "@playwright/test";
import { Login } from "../Pages/Login";
import { Dashboard } from "../Pages/Dashboard";
import { Newtabpageparent } from "../Pages/Newtabpageparent";
import { Newtabpagechild } from "../Pages/Newtabpagechild";


test(`Login`,async({page,context})=>
{
    
    await page.goto("https://lab.hakdogan.com/login/");

    let login=new Login(page,context);
    await login.addworkemail("demo@hakdogan.com");
    await login.addpassword("Password123!");
    await login.clicksignin();

    let dashboard=new Dashboard(page,context);
    await dashboard.entersearchbox("New Tab");
    await dashboard.clicknewtab();

    let newtabpageparent=new Newtabpageparent(page,context);
    let newpage=await newtabpageparent.clickopendestination();

    let newtabpagechild=new Newtabpagechild(newpage,context);
    await newtabpagechild.backbuttonnewtab();
})

