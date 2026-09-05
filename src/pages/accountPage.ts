import { Page } from '@playwright/test';

export class AccountPage {

 page: Page;

 constructor(page: Page) {
    this.page = page;   
  }

  loc_tb_accountname = "//input[@name='accountname']";
  loc_tb_employees = "//input[@name='employees']";
  loc_tb_save="//td[contains(text(),'Account:')]/following::input[8]"

    
  
async  createaccount(accountname:string, employees:string): Promise<void>
  {    
    await this.setAccountName(accountname);
    await this.setEmployees(employees);
    await this.clickSave();

  }  

async setAccountName(accountname: string): Promise<void>
  {
    await this.page.fill(this.loc_tb_accountname, accountname);
  }

async setEmployees(employees:string)
  {
    await this.page.fill(this.loc_tb_employees, employees);
  }

async clickSave(): Promise<void>
  {
    await this.page.locator(this.loc_tb_save)
  }

  async getAccountName()
  {
     return  await this.page.inputValue(this.loc_tb_accountname);
  }

async getEmployees()
  {
  return  await this.page.inputValue(this.loc_tb_employees);
  }





}


