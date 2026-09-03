Feature:account functionality

Background:
 Given the user is on the login page
 When the user enters valid credentials

@account
Scenario: verify_create_account_with_mandatory_fields_TC05
    When the user click on new account link
    Then fill the mandatory and on save button



