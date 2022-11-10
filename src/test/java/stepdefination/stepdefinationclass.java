package stepdefination;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import junit.framework.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class stepdefinationclass {
	WebDriver driver;
	@Given("User navigates to learning application")
	public void user_navigates_to_learning_application() {
		System.out.println("user is navigating to the learning application");
		   System.setProperty("webdriver.chrome.driver", "C:\\Users\\000LTE744\\Downloads\\chromedriver_win32\\chromedriver.exe");
		   driver = new ChromeDriver();
		   driver.get("http://elearningm1.upskills.in/index.php");
	}

	@Then("user clicks on signup button")
	public void user_clicks_on_signup_button() {
		 
		driver.findElement(By.xpath("//ul[@class='nav nav-pills nav-stacked']/li/a[1]")).click();
		driver.manage().window().maximize();
	}

	@Then("User navigates to register page")
	public void user_navigates_to_register_page() {
	   
		  
		   driver.get("http://elearningm1.upskills.in/main/auth/inscription.php");
	}

	@Then("user enter {string} FirstName")
	public void user_enter_FirstName(String string) {
		
		   driver.get("http://elearningm1.upskills.in/main/auth/inscription.php");
		   driver.findElement(By.name("firstname")).sendKeys(string);
		   
	}

	@Then("user enter {string} LastName")
	public void user_enter_LastName(String string) {
		   driver.findElement(By.name("lastname")).sendKeys(string);
	    
	}

	@Then("user enter {string} e-mail")
	public void user_enter_e_mail(String string) {
		
		   driver.findElement(By.name("email")).sendKeys(string);
	   
	}

	@Then("user enter {string} Username")
	public void user_enter_Username(String string) {
		   driver.findElement(By.name("username")).sendKeys(string);
	   
	}

	@Then("user enter {string} Pass")
	public void user_enter_Pass(String string) {
		
		   driver.findElement(By.name("pass1")).sendKeys(string);
	   
	}

	@Then("user enter {string} Confirm Password")
	public void user_enter_Confirm_Password(String string) {
		
		   driver.findElement(By.name("pass2")).sendKeys(string);
	   
	}

	@Then("user clicks on registeration button")
	public void user_clicks_on_registeration_button() {
		driver.findElement(By.name("submit")).click();
		
	}
	@Then("user entered {string} Username")
	public void user_entered_Username(String string) {
	    // Write code here that turns the phrase above into concrete actions
	
		   driver.findElement(By.id("login")).sendKeys(string);
	    
	}

	@Then("user entered  {string} Pass")
	public void user_entered_Pass(String string) {
	    // Write code here that turns the phrase above into concrete actions
		 driver.findElement(By.id("password")).sendKeys(string);
	}
	@Then("user clicks on login button")
	public void user_clicks_on_login_button() {
	    // Write code here that turns the phrase above into concrete actions
		 driver.findElement(By.name("submitAuth")).click();
		
	    
	}
	@Then("user navigates to compose")
	public void user_navigates_to_compose() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.linkText("Compose")).click();

	}
	@Then("user navigates on {string} send mail to")
	//public void user_navigates_on_send_mail_to(String SendTo) throws Throwable {
	//	driver.findElement(By.xpath("//input[@type='search']")).sendKeys(SendTo);
	//	Thread.sleep(2000L);
	//	List<WebElement> options = driver.findElements(By.xpath("//ul[contains(@id,'users-results')]"));
	//	for (WebElement option : options) {
	//		System.out.println(option.getText());
	//		if (option.getText().equalsIgnoreCase("amit xyz (amit)")) {
	//		   option.click();
	//			break;
	//		}
	//	}
	//	System.out.println("User enters Send to field");
	//}

	public void user_navigates_on_send_mail_to(String string) {
		System.out.println("Enter email data");
		driver.findElement(By.className("select2-search__field")).sendKeys(string);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    driver.findElement(By.xpath("//li[text()='test test']")).click();
	   
		driver.findElement(By.name("title")).sendKeys("Test Email"); 

	}
		
		
	@Then("user enters the subject {string} subject")
	public void user_enters_the_subject_subject(String string) {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("title")).sendKeys(string);
	}
	@Then("user clicks on send message")
	public void user_clicks_on_send_message() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//button[@name='compose']")).click();
	}





	@Then("user gets validation message")
	public void user_gets_validation_message() {
		String message = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		  Assert.assertTrue("Message is not sent",message.contains("The message has been sent"));

	   
	}





}
