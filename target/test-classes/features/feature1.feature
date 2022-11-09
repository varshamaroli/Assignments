Feature: login learning portal

  @sanity
  Scenario Outline: Signup to learning portal
    Given User navigates to learning application
    Then user clicks on signup button
    And User navigates to register page
    Then user enter "<FirstName>" FirstName
    And user enter "<Lastname>" LastName
    And user enter "<email>" e-mail
    And user enter "<Username>" Username
    And user enter "<Password>" Pass
    And user enter "<Confirm>" Confirm Password
    And user clicks on registeration button

    Examples: 
      | FirstName | Lastname | email              | Username  | Password | Confirm |
      | varsha    | xyz      | varshm16@gmail.com | varsh1234 |      123 |     123 |

  @Regression
  Scenario Outline: Login to learning portal
    Given User navigates to learning application
    Then user entered "<username>" Username
    And user entered  "<password>" Pass
    Then user clicks on login button
    And user navigates to compose
    And user navigates on "<send mail>" send mail to
    And user enters the subject "<subject>" subject
    And user clicks on send message
    Then user gets validation message

    Examples: 
      | username  | password | subject           | send mail |
      | varsh1234 |      123 | IBM selenium demo | amit      |
