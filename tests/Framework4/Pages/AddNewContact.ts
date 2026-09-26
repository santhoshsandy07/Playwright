
import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import { BrowserInteractionsImplementation } from "../Utilities/BrowserInteractionsImplementation";


export class Addnewcontact extends BrowserInteractionsImplementation {
     readonly addname: Locator;
     readonly addmail: Locator;
     readonly addmobile: Locator;
     readonly addjob: Locator;
     readonly maleRadio: Locator;
     readonly status: Locator;
     readonly source: Locator;
     readonly leadScore: Locator;
     readonly deals: Locator;
     readonly totalValue: Locator;
     readonly marketingCheckbox: Locator;
     readonly crmCheckbox: Locator;
     readonly priority: Locator;
     readonly lastContactDate: Locator;
     readonly notes: Locator;
     readonly addButton: Locator;
     readonly successMessage: Locator;


     constructor(page: Page, context: BrowserContext) {
          super(page, context)
          this.addname = page.locator("//input[@name='contact_name']").first();
          this.addmail = page.locator("//input[@id='email']")
          this.addmobile = page.getByRole("textbox", { name: "e.g. 9876543210" });
          this.addjob = page.locator("//input[@id='company']");
          this.maleRadio = page.getByRole("radio", { name: "Male", exact: true });
          this.status = page.locator("//select[@id='status']");
          this.source = page.locator("//select[@id='source']");
          this.leadScore = page.locator("//input[@id='lead_score']");
          this.deals = page.locator("//input[@id='deals']");
          this.totalValue = page.locator("//input[@id='total_value']");
          this.marketingCheckbox = page.getByRole("checkbox", { name: "Marketing" });
          this.crmCheckbox = page.getByRole("checkbox", { name: "CRM" });
          this.priority = page.locator("//select[@id='priority']");
          this.lastContactDate = page.locator("//input[@type='date']");
          this.notes = page.getByRole("textbox", {name: "Add any additional information..."});
          this.addButton = page.getByRole("button", { name: "Add" });
          this.successMessage = page.locator("//div[text()='Lead added successfully!']");
     }


     async addcontactname(name: string): Promise<void> {
          await this.fill(this.addname, "ADDNAME", name)
     }

     async addcontactmail(mail: string): Promise<void> {
          await this.fill(this.addmail, "ADDMAIL", mail)
     }

     async addcontactmobile(mobile: string): Promise<void> {
          await this.fill(this.addmobile, "ADDMOBILE", mobile)
     }
     async addcontacjob(job: string): Promise<void> {
          await this.fill(this.addjob, "ADDMJOB", job)
     }

     async selectMale() {
          await this.maleRadio.check();
     }

     async selectStatusByIndex(index: number) {
          await this.status.selectOption({ index });
     }

     async selectSource(label: string) {
          await this.source.selectOption({ label });
     }

     async enterLeadScore(score: string) {
          await this.leadScore.fill(score);
     }

     async enterDeals(deals: string) {
          await this.deals.fill(deals);
     }

     async enterTotalValue(value: string) {
          await this.totalValue.fill(value);
     }

     async selectMarketing() {
          await this.marketingCheckbox.check();
     }

     async selectCRM() {
          await this.crmCheckbox.check();
     }

     async selectPriority(value: string) {
          await this.priority.selectOption({ value });
          await expect(this.priority).toHaveValue(value);
     }

     async enterLastContactDate(date: string) {
          await this.lastContactDate.fill(date);
     }

     async enterNotes(notes: string) {
          await this.notes.fill(notes);
     }

     async clickAdd() {
          await this.addButton.click();
     }

     async verifySuccessMessage() {
          await expect(this.successMessage).toBeVisible();
          await expect(this.successMessage).toHaveText("Lead added successfully!");
          console.log(await this.successMessage.innerText());
     }
}
    