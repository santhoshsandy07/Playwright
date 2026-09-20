//To Create a new lead

import { test, request, expect } from "@playwright/test";

// test("Create a New Lead using post method", async () => {

//   const contextrequest = await request.newContext();
//   const actualshortdesc = "Playwright API Incident";
//   const apirequest = await contextrequest.post("https://dev205737.service-now.com/api/now/table/incident?sysparm_fields=short_description,sys_id",

//     {
//       headers:
//       {
//         "Authorization": "Basic YWRtaW46WnE2VCV4aEBoRzlX",
//         "contenttype": "Application/json"
//       },
//       data:
//       {

//         "incident_state": "570",
//         "approval": "Santhosh",
//         "caller_id": "567", 
//         "short_description": "Playwright API Incident",
//         "priority": "5 - Planning"

//       }
//     }
//   )
//   const apiresponse = await apirequest.json();
//   const shrtdesc = apiresponse.result.short_description;
//   console.log(`The Short Description post creation via psot method is ${shrtdesc}`);
//   expect(shrtdesc,"Short Description Should be Equal").toEqual(actualshortdesc);


// })

test("Api - Create Lead  Crm", async ({ page, request }) => {
  //const apiRequestContext = await request.newContext();
  //const apiResponse = await apiRequestContext.post(
  const apiResponse = await request.post(
    "https://apps.theauto-mate.com/crm/api/add_contact.php",
    {
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        contact_name: "SANDY",
        email: "sagar2@gmail.com",
        phone: "9159558188",
        company: "TechGrow",
        gender: "female",
        status: "pending",
        source: "referral",
        lead_score: 90,
        deals: 2,
        total_value: 25000,
        services: ["crm", "support"],
        priority: "medium",
        last_contact: "2025-11-08",
        notes: "Requested follow-up next week.",
      },
    },);


  const jsonResponse = await apiResponse.json();
  expect(jsonResponse.message, "contact added successfully is not displayed").toEqual("Contact added successfully!")

  await page.goto("https://apps.theauto-mate.com/crm/login.php");
  await page.getByRole("textbox", { name: "Username" }).fill("automate.crm");
  await page.getByRole("textbox", { name: "Password" }).fill("test@123");
  await page.getByRole("button", { name: "Sign In" }).click();
  await page.locator("//span[text()='Contacts / Leads']").click();

  page.on("dialog", async (dialog) => {
    await dialog.accept();
  })

  await page.getByRole("button", { name: "Delete" }).first().click();
  await page.pause();
});


