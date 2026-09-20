import { test } from "@playwright/test";
import { createincident, DeleteIncident } from "../Utilities/ServicenowApiutilities";

test("Create and Delete Incident", async ({ request,page }) => {

    // CREATE
    const incident = await createincident(request);

    console.log(`Created Incident ID: ${incident.sys_id}`);

    console.log(`Created Incident ID: ${incident.shortDescription}`);

    await page.pause();
  
    // EDIT THE API CREATED INCIDENTS USING PLAYWRIGHT

    await page.goto("https://dev205737.service-now.com/navpage.do");
    await page.getByRole("textbox", {name :"User name"}).fill("admin");
    await page.getByRole("textbox", {name :"Password"}).fill("Zq6T%xh@hG9W");
    await page.getByRole("button",{name : "Log in"}).click();


    await page.getByRole("combobox",{name :"Search"}).fill("Incidents");


    await page.pause();



    // DELETE
    await DeleteIncident(request, incident.sys_id,incident.shortDescription);
    

});