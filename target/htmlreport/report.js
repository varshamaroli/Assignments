$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/feature1.feature");
formatter.feature({
  "name": "login learning portal",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Signup to learning portal",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User navigates to learning application",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on signup button",
  "keyword": "Then "
});
formatter.step({
  "name": "User navigates to register page",
  "keyword": "And "
});
formatter.step({
  "name": "user enter \"\u003cFirstName\u003e\" FirstName",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter \"\u003cLastname\u003e\" LastName",
  "keyword": "And "
});
formatter.step({
  "name": "user enter \"\u003cemail\u003e\" e-mail",
  "keyword": "And "
});
formatter.step({
  "name": "user enter \"\u003cUsername\u003e\" Username",
  "keyword": "And "
});
formatter.step({
  "name": "user enter \"\u003cPassword\u003e\" Pass",
  "keyword": "And "
});
formatter.step({
  "name": "user enter \"\u003cConfirm\u003e\" Confirm Password",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on registeration button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Lastname",
        "email",
        "Username",
        "Password",
        "Confirm"
      ]
    },
    {
      "cells": [
        "varsha",
        "xyz",
        "varshm16@gmail.com",
        "varsh1234",
        "123",
        "123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Signup to learning portal",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User navigates to learning application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinationclass.user_navigates_to_learning_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationclass.user_clicks_on_signup_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to register page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_navigates_to_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"varsha\" FirstName",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationclass.user_enter_FirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"xyz\" LastName",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_enter_LastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"varshm16@gmail.com\" e-mail",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_enter_e_mail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"varsh1234\" Username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_enter_Username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"123\" Pass",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_enter_Pass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"123\" Confirm Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_enter_Confirm_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on registeration button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_clicks_on_registeration_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login to learning portal",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User navigates to learning application",
  "keyword": "Given "
});
formatter.step({
  "name": "user entered \"\u003cusername\u003e\" Username",
  "keyword": "Then "
});
formatter.step({
  "name": "user entered  \"\u003cpassword\u003e\" Pass",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "name": "user navigates to compose",
  "keyword": "And "
});
formatter.step({
  "name": "user navigates on \"\u003csend mail\u003e\" send mail to",
  "keyword": "And "
});
formatter.step({
  "name": "user enters the subject \"\u003csubject\u003e\" subject",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on send message",
  "keyword": "And "
});
formatter.step({
  "name": "user gets validation message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "subject",
        "send mail"
      ]
    },
    {
      "cells": [
        "varsh1234",
        "123",
        "IBM selenium demo",
        "tes"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login to learning portal",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User navigates to learning application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinationclass.user_navigates_to_learning_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered \"varsh1234\" Username",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationclass.user_entered_Username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered  \"123\" Pass",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_entered_Pass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationclass.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to compose",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_navigates_to_compose()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates on \"tes\" send mail to",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_navigates_on_send_mail_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the subject \"IBM selenium demo\" subject",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_enters_the_subject_subject(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on send message",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_clicks_on_send_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationclass.user_gets_validation_message()"
});
formatter.result({
  "status": "passed"
});
});