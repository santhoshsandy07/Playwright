import { APIRequestContext, expect } from "@playwright/test";

export async function createincident(request: APIRequestContext) {

    const apiResponse = await request.post(
        "https://dev205737.service-now.com/api/now/table/incident",
        {
            headers: {
                "Authorization": "Basic YWRtaW46WnE2VCV4aEBoRzlX",
                "Content-Type": "application/json"
            },

            data: {
                "incident_state": "500",
                "approval": "Rakesh",
                "caller_id": "567",
                "short_description": "Email server is down using playwright by santhosh",
                "priority": "5 - Planning"
            }
        }
    );

    // Verify API response
    expect(apiResponse.ok()).toBeTruthy();

    const jsonResponse = await apiResponse.json();

    const shortDescription = jsonResponse.result.short_description;
    const sys_id = jsonResponse.result.sys_id;
    const incnumber=jsonResponse.number;

    console.log(`The Status of the Create Incident via Playwright and API is ${apiResponse.status()}`);
    console.log(`The Short Description is: ${shortDescription}`);
    console.log(`The sys_id is: ${sys_id}`);
    console.log(`The INC number is: ${incnumber}`);

    // Verify created incident
    expect(shortDescription).toBe(
        "Email server is down using playwright by santhosh"
    );

    console.log("The Incident is created successfully");

    // Return both response and sys_id
    return {
        apiResponse,
        sys_id,
        shortDescription,
        incnumber
    };
   
}


export async function DeleteIncident(
    request: APIRequestContext,
    sys_id: string,
    short_description :string
) {

    const apiResponse = await request.delete(
        `https://dev205737.service-now.com/api/now/table/incident/${sys_id}`,
        {
            headers: {
                "Authorization": "Basic YWRtaW46WnE2VCV4aEBoRzlX",
                "Content-Type": "application/json"
            }
        }
    );

    // DELETE should return 204
    expect(apiResponse.status()).toBe(204);

    console.log(`Incident ${sys_id} having corresponding short description ${short_description} deleted successfully`);

    return apiResponse;
}