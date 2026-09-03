import { Given,When,Then } from "@cucumber/cucumber";

When(' the user click on new contact link', async function () {
  
  await this.homepage.clickNewContacts();
  

});

Then ('fill the mandatory and on save button', async function () {
   
    
    await this.contactpage.createcontact(this.data.first,this.data.Last)
                          

});