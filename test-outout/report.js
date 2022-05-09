$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/UI/BDDFreamework/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Orange HRM Login Test Scenario",
  "description": "",
  "id": "login-feature;orange-hrm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "i launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the URL",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-feature;orange-hrm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "login-feature;orange-hrm-login-test-scenario;;1"
    },
    {
      "cells": [
        "admin",
        "admin123"
      ],
      "line": 14,
      "id": "login-feature;orange-hrm-login-test-scenario;;2"
    },
    {
      "cells": [
        "admin",
        "test456"
      ],
      "line": 15,
      "id": "login-feature;orange-hrm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Orange HRM Login Test Scenario",
  "description": "",
  "id": "login-feature;orange-hrm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "i launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the URL",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.i_launch_the_browser()"
});
formatter.result({
  "duration": 2044513300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.i_enter_the_URL()"
});
formatter.result({
  "duration": 4359561500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page()"
});
formatter.result({
  "duration": 14786600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 199445700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5225292300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 6461600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 670541000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Orange HRM Login Test Scenario",
  "description": "",
  "id": "login-feature;orange-hrm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "i launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the URL",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"admin\" and \"test456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.i_launch_the_browser()"
});
formatter.result({
  "duration": 1363025200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.i_enter_the_URL()"
});
formatter.result({
  "duration": 4452196200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page()"
});
formatter.result({
  "duration": 10484100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "test456",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 199709300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1863958500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 10115600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 693534200,
  "status": "passed"
});
});