
import { APIRequestContext, expect, request } from "@playwright/test";
export async function createlead(request :APIRequestContext) {


    //const apiRequestContext = await request.newContext();
    //const apiResponse = await apiRequestContext.post
    const apiResponse = await request.post(
        "https://apps.theauto-mate.com/crm/api/add_contact.php",
        {
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                contact_name: "SANDY",
                email: "sagarsanjiv2@gmail.com",
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

    
    return apiResponse;


}

export async function deletelead(request :APIRequestContext,LeadID : number) {
    //const apiRequestContext = await request.newContext();
    //const apiResponse = await apiRequestContext.post("https://apps.theauto-mate.com/crm/api/delete_lead.php",

    const apiResponse = await request.post("https://apps.theauto-mate.com/crm/api/delete_lead.php",
        {
            headers:
            {
                "Content-Type": "application/json"
                
            },
            data:
            {
                "id": LeadID
            }
        }

    )

    return apiResponse;

}