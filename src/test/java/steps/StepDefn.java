package steps;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepDefn {
	WebDriver driver;
	@After
	public void embedScreenshot(Scenario scenario) {
	    try {
	        byte[] screenshot = ((RemoteWebDriver) driver).getScreenshotAs(OutputType.BYTES);
	        scenario.embed(screenshot, "image/png");
	    } catch (WebDriverException somePlatformsDontSupportScreenshots) {
	        System.err.println(somePlatformsDontSupportScreenshots.getMessage());
	    }
	    driver.quit();
	}

	public void b1() {
		System.out.println("Running tag 1");
	}
	@When("^I update the valid username$")
	public void i_update_the_valid_username(DataTable arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
	    List<List<String>> table = arg1.raw();
	    int rowcount = table.size();
	}
	@Given("^I am able to access magento web page$")
	public void i_am_able_to_access_magento_web_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("https://magento.com");
		driver.findElement(By.linkText("MY ACCOUNT")).click();
	}

	@Given("^I am a registered user on magento$")
	public void i_am_a_registered_user_on_magento() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	/*@When("^I update the valid username$")
	public void i_update_the_valid_username() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("email")).sendKeys("natarajan.ramanathan93@gmail.com");
	}*/

	@When("^I update the valid password$")
	public void i_update_the_valid_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("pass")).sendKeys("Welcome123");
	}

	@When("^I click on the SingIn button$")
	public void i_click_on_the_SingIn_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("send2")).click();
	}

	@Then("^I should get access to the dashboard$")
	public void i_should_get_access_to_the_dashboard() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    Assert.assertTrue(driver.findElement(By.linkText("Log Out")).isDisplayed());
	}
	@When("^I update the username as \"([^\"]*)\"$")
	public void i_update_the_username_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("email")).sendKeys(arg1);
	}

	@When("^I update the password as \"([^\"]*)\"$")
	public void i_update_the_password_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("pass")).sendKeys(arg1);
	}

}
