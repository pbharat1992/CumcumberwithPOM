$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/eclipse oxyzen/eclipse/CHARI/CucumbeWithPOM/src/main/java/com/qa/features/freecrm.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM application Test",
  "description": "",
  "id": "free-crm-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Free CRM Home Page Test",
  "description": "",
  "id": "free-crm-application-test;validate-free-crm-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user logs into app",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Validate home page  title",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 30341929199,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 47291635,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_logs_into_app()"
});
formatter.result({
  "duration": 18307524180,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_home_page_title()"
});
formatter.result({
  "duration": 3027334342,
  "status": "passed"
});
});