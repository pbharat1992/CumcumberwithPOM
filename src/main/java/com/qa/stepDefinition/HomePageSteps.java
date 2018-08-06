package com.qa.stepDefinition;

import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class HomePageSteps extends TestBase{
	
	LoginPage loginPage=new LoginPage();
	HomePage homePage=new HomePage();
	
	@Given("^user opens browser$")
	public void user_opens_browser()  {
		TestBase.initialization();  
	}

	@Then("^user is on Login Page$")
	public void user_is_on_Login_Page() 
	{
		
		
		loginPage=new LoginPage();
		String title=loginPage.validateLoginPageTitle();
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service",title);
	  
	}

	@Then("^user logs into app$")
	public void user_logs_into_app() {
	    homePage=loginPage.login(prop.getProperty("username"),prop.getProperty("password"));
	}

	@Then("^Validate home page  title$")
	public void validate_home_page_title() throws InterruptedException {
		Thread.sleep(3000);
		String homePageTitle=homePage.verifyHomePageTitle();
		Assert.assertEquals("CRMPRO", homePageTitle);
		
	} 

	
	}




