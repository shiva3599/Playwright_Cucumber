import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";


Given('the user click on new account link', async function () {
  
  await this.homepage.clickNewAccount();
  

});

Then('fill the mandatory and click on save button', async function () {
   
  await this.accountpage.createaccount(this.data.accountname,this.data.Employees);
  /*const accountname= await this.accountpage.getAccountName()
  await expect(accountname).toBe(this.data.accountname)
  const employees= await this.accountpage.getEmployees()
  await expect(employees).toBe(this.data.Employees)*/
  
  

});
