$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Eclipse/ecommerce/Wipro_Ecommerce/src/test/java/onlineShopping.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Online Shopping",
  "description": "",
  "id": "online-shopping",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.background({
  "line": 23,
  "name": "Login to Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 24,
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User Navigate to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User in Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.launch_Browser()"
});
formatter.result({
  "duration": 36453356488,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_Navigate_to_Login_page()"
});
formatter.result({
  "duration": 1355776186,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_in_Login_page()"
});
formatter.result({
  "duration": 260903,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 28,
      "value": "#Scenario:1 Verify Register on the website"
    },
    {
      "line": 29,
      "value": "#Given  Create account by entering EmailID"
    },
    {
      "line": 30,
      "value": "#And Click on Create Account to register"
    },
    {
      "line": 31,
      "value": "#When Enter Personal Informaion"
    },
    {
      "line": 32,
      "value": "#And Click on Register"
    },
    {
      "line": 33,
      "value": "#And Registered Successfully"
    },
    {
      "line": 34,
      "value": "#Then Validate First name and Last name on Home page"
    },
    {
      "line": 35,
      "value": "#And Logout Successfull"
    }
  ],
  "line": 37,
  "name": "2 Verify Buy a product and make payment",
  "description": "",
  "id": "online-shopping;2-verify-buy-a-product-and-make-payment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "User navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User Inputs Username and Password",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User login successfull",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Proceed for shopping",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User add a product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Proceed the product to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Proceed to confirm address",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Proceed to Shipment and Payment details",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Validate Product details on payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Logout Successfull",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_navigate_to_login_page()"
});
formatter.result({
  "duration": 2695506586,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_Inputs_Username_and_Password()"
});
formatter.result({
  "duration": 2391846656,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_login_successfull()"
});
formatter.result({
  "duration": 152869,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_Proceed_for_shopping()"
});
formatter.result({
  "duration": 5379227177,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_add_a_product_to_cart()"
});
formatter.result({
  "duration": 166220936,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.proceed_the_product_to_checkout()"
});
formatter.result({
  "duration": 2519839137,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.add_address()"
});
formatter.result({
  "duration": 10070526909,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"center_column\"]/form/p/button/span\"}\n  (Session info: chrome\u003d93.0.4577.82)\n  (Driver info: chromedriver\u003d93.0.4577.63 (ff5c0da2ec0adeaed5550e6c7e98417dac77d98a-refs/branch-heads/4577@{#1135}),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.07 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.40.0\u0027, revision: \u00274c5c0568b004f67810ee41c459549aa4b09c651e\u0027, time: \u00272014-02-19 11:13:01\u0027\nSystem info: host: \u0027Panda\u0027, ip: \u002710.0.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:61186}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d93.0.4577.63 (ff5c0da2ec0adeaed5550e6c7e98417dac77d98a-refs/branch-heads/4577@{#1135}), userDataDir\u003dC:\\Users\\SNEHAV~1\\AppData\\Local\\Temp\\scoped_dir7592_288049598}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d93.0.4577.82, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: b5fe4d73c5a0cf394110cb00b35a8cbe\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:326)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:423)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:318)\r\n\tat onlinePortalTest.StepDefinitions.add_address(StepDefinitions.java:198)\r\n\tat ✽.And Proceed to confirm address(D:/Eclipse/ecommerce/Wipro_Ecommerce/src/test/java/onlineShopping.feature:44)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitions.make_the_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.validate_Product_details_on_payment_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.logout_Successfull()"
});
formatter.result({
  "status": "skipped"
});
});