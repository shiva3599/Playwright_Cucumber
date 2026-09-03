import { Browser, chromium, expect,Page } from '@playwright/test';

////let page: Page;
//let browser: Browser;
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { LeadPage } from '../pages/leadPage';
import { AccountPage } from '../pages/accountPage';
import { ContactPage } from '../pages/contactsPage';

import { loadExcel, getExcelDataByTC } from '../utilities/excelReader';

import { Before, After, BeforeAll,Status } from '@cucumber/cucumber';
import { BrowserManager } from '../utilities/BrowserManager';




let browser: Browser;
let page: Page;
let context: any;

let loginpage:LoginPage;
let homepage:HomePage;
let leadpage:LeadPage;
let accountpage:AccountPage;
let contactpage:ContactPage;

let TCName: string;
let data:any;

BeforeAll(async function()
{
  loadExcel('src/testdata/data.xlsx', 'data');
});

Before({ timeout: 60000 },async function (scenario) {
    this.TCName= scenario.pickle.name;
    try{
     this.data = await getExcelDataByTC(this.TCName);
    }catch(e){
      console.error(e);
    }
    console.log("Scenario Name:", scenario.pickle.name);
   // this.browser = await chromium.launch({
     //   channel: 'chrome', // Launch Google Chrome
       // headless: false
    //});
    this.browser= await BrowserManager.getBrowser();

    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();
      await this.page.goto('http://localhost:100/');
    this.loginpage = new LoginPage(this.page);
    this.homepage= new HomePage(this.page);
    this.leadpage= new LeadPage(this.page);
    
    this.accountpage= new AccountPage(this.page);
    this.contactpage= new ContactPage(this.page);
   

});

After(async function ({result}) {
  if (result?.status === Status.FAILED) {

        const screenshot = await this.page.screenshot({
            fullPage: true
        });

        this.attach(screenshot, "image/png");
    }
    await this.page.close();
    await this.context.close();
    await this.browser.close();
    
});
