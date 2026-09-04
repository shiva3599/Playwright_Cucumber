import { Page } from '@playwright/test';

export class ContactPage {

 page: Page;

 constructor(page: Page) {
    this.page = page;   
  }

  loc_salutationtype="//select[@name='salutationtype']"
  loc_First_name="//input[@name='firstname']"
  loc_last_name="//input[@name='lastname']"
  loc_accountname="//a[contains(text(),'X-CEED ')]"
  loc_change="(//input[@title='Change'])[1]"
  loc_save="//td[contains(text(),'Contact:')]/following::input[1]"


  
    
  
async  createcontact(firstname:string,Lastname:string): Promise<void>
  {    
    
    await this.setFirstName(firstname);
    await this.setLastName(Lastname);
    await this.clickSave();

  }  

async setFirstName(firstname: string): Promise<void>
  {
   
   
    await this.page.fill(this.loc_First_name,firstname);
  }

async setLastName(Lastname:string): Promise<void>
  {
    await this.page.fill(this.loc_last_name, Lastname);
  }

async clickSave(): Promise<void>
  {
    await this.page.click(this.loc_save)
  }

  async getFirstName()
  {
    return await this.page.textContent(this.loc_First_name);
  }  





}


