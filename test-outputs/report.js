$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/Test.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "This feature is going to test the login functionality of magento\r\nThis feature involves following scenarios.\r\nvalid credentials\r\nInvalid credentials",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@t1"
    }
  ]
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am able to access magento web page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I am a registered user on magento",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefn.i_am_able_to_access_magento_web_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_am_a_registered_user_on_magento()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Valid Credentials",
  "description": "",
  "id": "login;valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@s1"
    },
    {
      "line": 12,
      "name": "@t2"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I update the valid username",
  "rows": [
    {
      "cells": [
        "user1",
        "password1"
      ],
      "line": 15
    },
    {
      "cells": [
        "user2",
        "password2"
      ],
      "line": 16
    },
    {
      "cells": [
        "user3",
        "password3"
      ],
      "line": 17
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I update the valid password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on the SingIn button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should get access to the dashboard",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefn.i_update_the_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_click_on_the_SingIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_should_get_access_to_the_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Parameterized valid Credentials",
  "description": "",
  "id": "login;parameterized-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@s2"
    },
    {
      "line": 21,
      "name": "@t2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I update the username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I update the password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on the SingIn button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should get access to the dashboard",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "login;parameterized-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 28,
      "id": "login;parameterized-valid-credentials;;1"
    },
    {
      "cells": [
        "natarajan.ramanathan93@gmail.com",
        "Welcome123"
      ],
      "line": 29,
      "id": "login;parameterized-valid-credentials;;2"
    },
    {
      "cells": [
        "balajidinakaran1@gmail.com",
        "Welcome@1"
      ],
      "line": 30,
      "id": "login;parameterized-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am able to access magento web page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I am a registered user on magento",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefn.i_am_able_to_access_magento_web_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_am_a_registered_user_on_magento()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "Parameterized valid Credentials",
  "description": "",
  "id": "login;parameterized-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t1"
    },
    {
      "line": 21,
      "name": "@t2"
    },
    {
      "line": 21,
      "name": "@s2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I update the username as \"natarajan.ramanathan93@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I update the password as \"Welcome123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on the SingIn button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should get access to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "natarajan.ramanathan93@gmail.com",
      "offset": 26
    }
  ],
  "location": "StepDefn.i_update_the_username_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome123",
      "offset": 26
    }
  ],
  "location": "StepDefn.i_update_the_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_click_on_the_SingIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_should_get_access_to_the_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am able to access magento web page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I am a registered user on magento",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefn.i_am_able_to_access_magento_web_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_am_a_registered_user_on_magento()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "Parameterized valid Credentials",
  "description": "",
  "id": "login;parameterized-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@t1"
    },
    {
      "line": 21,
      "name": "@t2"
    },
    {
      "line": 21,
      "name": "@s2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I update the username as \"balajidinakaran1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I update the password as \"Welcome@1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on the SingIn button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should get access to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "balajidinakaran1@gmail.com",
      "offset": 26
    }
  ],
  "location": "StepDefn.i_update_the_username_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome@1",
      "offset": 26
    }
  ],
  "location": "StepDefn.i_update_the_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_click_on_the_SingIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_should_get_access_to_the_dashboard()"
});
formatter.result({
  "status": "skipped"
});
});