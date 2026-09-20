import test from "@playwright/test";
import { Homepage } from "../Pages/Homepage";
import { Boyspage } from "../Pages/Boyspage";
import { Boyskurthapage } from "../Pages/BoyskurthaPage";

test(`FirstCRYPOM`,async({page,context})=>
{
   await page.goto(`https://www.firstcry.com/`);

   let homepage=new Homepage(page,context);
   await homepage.boysdress();

   let boyspage=new Boyspage(page, context);
   let newpage=await boyspage.boyskurtha();

   let boyskurthapage=new Boyskurthapage(newpage,context);
   await boyskurthapage.size();
   await boyskurthapage.enterpincode("641004");
   await boyskurthapage.pincodebtnclick();
   await boyskurthapage.pincodedatecheck();
   await boyskurthapage.applypincode();
   await boyskurthapage.addtocart();



})