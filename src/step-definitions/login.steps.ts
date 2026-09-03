import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';




         Given('the user is on the login page', async function () {

             
           
         });
       

        When('the user enters valid credentials', async function () {
            
            //await this.page.locator('//input[@name="user_name"]').fill('admin');
            //await this.page.locator('//input[@name="user_password"]').fill('admin');
            //await this.page.locator('//input[@name="Login"]').click();
            
           await this.loginpage.login(this.data.username,this.data.password);

         });
       
          Then('the user should be redirected to the dashboard', async function () {
         //  await expect(this.page.locator("//a[text()='Logout']")).toBeVisible();
               
             await  this.homepage.verifyLogout();
         });
       
          When('the user enters invalid credentials', async function () {

             
            //await this.page.locator('//input[@name="user_name"]').fill('admin');
            //await this.page.locator('//input[@name="user_password"]').fill('admin123');
            //await this.page.locator('//input[@name="Login"]').click();
             
            await  this.loginpage.login(this.data.username,this.data.password);
            

         });
       

          Then('an error message should be displayed',  async function () {
            //  await expect(this.page.locator("//*[contains(text(),'You must specify a valid username and password.')]")).toBeVisible();
             
            await this.loginpage.isErrorMsgDisplayed();
         });
       
         When('the user leaves the username and password fields empty Then an error message should be displayed',async function () {
          //  await this.page.locator('//input[@name="user_name"]').fill('');
          //  await this.page.locator('//input[@name="user_password"]').fill('');
          //  await this.page.locator('//input[@name="Login"]').click();
           // await expect(this.page.locator("//*[contains(text(),'You must specify a valid username and password.')]")).toBeVisible();
             
               await this.loginpage.login("","");
               await this.loginpage.isErrorMsgDisplayed();
         });
       
       When('the user enters {string} and {string}', async function (uid:string, pwd:string) {
         //  await this.page.locator('//input[@name="user_name"]').fill(uid);
         //   await this.page.locator('//input[@name="user_password"]').fill(pwd);
          //  await this.page.locator('//input[@name="Login"]').click();
            
          await  this.loginpage.login(uid,pwd);
             

         });
       
   
       
         Then('the login result should be as expected', async function () {
           
              // await expect(this.page.locator("//*[contains(text(),'You must specify a valid username and password.')]")).toBeVisible();
               
              await this.loginpage.isErrorMsgDisplayed();         
            });
