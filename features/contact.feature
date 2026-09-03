Feature:contact functionality

Background:
 Given the user is on the login page
 When the user enters valid credentials

@contact
Scenario: verify_create_contact_with_mandatory_fields_TC06
    When the user click on new contact link
    Then fill the mandatory and click on save button