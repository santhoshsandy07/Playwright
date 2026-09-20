import { expect, request, test } from "@playwright/test";

//To Retrive the data without authorization
// test("API -get Leads", async () => {

//   const newcontextrequest = await request.newContext();
//   const apiresponse = await newcontextrequest.get("https://apps.theauto-mate.com/crm/api/get_leads.php");
//   const jsonresponse = await apiresponse.json();
//   const firstcontactname = jsonresponse.data[0].contact_name;
//   console.log(`The first contact name is ${firstcontactname}`);
//   const leadscore = jsonresponse.data[0].lead_score;
//   console.log(`The first contact name is ${leadscore}`);
// })

//To Retrive the data with authorization

test("Get - Retrive Incidents from Service now", async()=>
{

const newcontextrequest1=await request.newContext();
const apiresponse1=await newcontextrequest1.get("https://dev205737.service-now.com/api/now/table/incident",
  {
    headers : {
      "Authorization" : "Basic YWRtaW46WnE2VCV4aEBoRzlX"
    }
  }
);
const jsonresponse1=await apiresponse1.json();
const tasknumber=await jsonresponse1.result[0].task_effective_number;
console.log(`The Task Incident Number is ${tasknumber}`);


})

