package stepDefination;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.testng.Reporter;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {

	WebDriver driver;

	@Given("^i launch the browser$")
	public void i_launch_the_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D://JavaPractice/UIYesbank/Drivers/Cromedriver100/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();  
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);  

	}

	@When("^I enter the URL$")
	public void i_enter_the_URL() throws Throwable {
		String url="https://opensource-demo.orangehrmlive.com/";
		driver.get(url);
	}

	@When("^title of login page$")
	public void title_of_login_page() throws Throwable {
		String title=driver.getTitle();
		System.out.println(title);

	}
	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String pass) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions

		driver.findElement(By.id("txtUsername")).sendKeys(username);
		driver.findElement(By.id("txtPassword")).sendKeys(pass);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
		driver.findElement(By.id("btnLogin")).click();;

	}

	@Then("^user is on home page$")
	public void user_is_on_home_page(){

		String title = driver.getTitle();
		System.out.println("Home Page title ::"+ title);
		Assert.assertEquals("OrangeHRM", title);

	}

	@Then("^Close the browser$")
	public void close_the_browser(){
		driver.quit();
	}



}
