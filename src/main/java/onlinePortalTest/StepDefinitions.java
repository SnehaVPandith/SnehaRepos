package onlinePortalTest;

import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions{
	public static WebDriver driver;
	
	@Given("^Launch Browser$")
	public void launch_Browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "./Softwares/chromedriver.exe");
		driver = new ChromeDriver();
		        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		        driver.get("http://automationpractice.com/index.php");
		        driver.manage().window().maximize();
	    
	}

	@When("^User Navigate to Login page$")
	public void user_Navigate_to_Login_page() throws Throwable {
		driver.findElement(By.className("login")).click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    
	}

	@Then("^User in Login page$")
	public void user_in_Login_page() throws Throwable {
		System.out.println("The user is Navigated to login page");
	  
	}


//	@Given("^Launch the browser$")
//	public void launch_the_browser() throws Throwable {
//System.setProperty("webdriver.chrome.driver", "./Softwares/chromedriver.exe");
//driver = new ChromeDriver();
//        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//        driver.get("http://automationpractice.com/index.php");
//        driver.manage().window().maximize();
//	   
//	}

//	@Given("^User Click on signin on landing page$")
//	public void user_Click_on_signin_on_landing_page() throws Throwable {
//		driver.findElement(By.className("login")).click();
//		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//	}

	@Given("^Create account by entering EmailID$")
	public void create_account_by_entering_EmailID() throws Throwable {
	   	JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,1000)");
		driver.findElement(By.id("email_create")).sendKeys("joaia4098@gmail.com");
	
	}
	
	@Given("^Click on Create Account to register$")
	public void click_on_Create_Account_to_register() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"SubmitCreate\"]/span")).click();
	   
	}


	@When("^Enter Personal Informaion$")
	public void enter_Personal_Informaion() throws Throwable {
	   driver.findElement(By.xpath("//*[@id=\"id_gender2\"]")).click();
	driver.findElement(By.id("customer_firstname")).sendKeys("joijoi");
	driver.findElement(By.id("customer_lastname")).sendKeys("voi");
	driver.findElement(By.xpath("//*[@id=\"passwd\"]")).sendKeys("Ayira@4567");
	Select drpDate = new Select(driver.findElement(By.xpath("//*[@id=\"days\"]")));
	drpDate.selectByValue("31");
	Select drpMonth = new Select(driver.findElement(By.xpath("//*[@id=\"months\"]")));
	drpMonth.selectByValue("8");
	Select drpYear = new Select(driver.findElement(By.xpath("//*[@id=\"years\"]")));
	drpYear.selectByValue("1994");
	    driver.findElement(By.xpath("//*[@id=\"newsletter\"]")).click();
	    JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,1000)");
	    driver.findElement(By.id("firstname")).sendKeys("joijoi");
		driver.findElement(By.id("lastname")).sendKeys("voi");
		driver.findElement(By.xpath("//*[@id=\"company\"]")).sendKeys("OMG");
		driver.findElement(By.xpath("//*[@id=\"address1\"]")).sendKeys("#1 J street MPI Road Los Angeles 213");
		driver.findElement(By.xpath("//*[@id=\"city\"]")).sendKeys("Los Angeles");
		Select drpState = new Select(driver.findElement(By.xpath("//*[@id=\"id_state\"]")));
		drpState.selectByVisibleText("California");
		driver.findElement(By.xpath("//*[@id=\"postcode\"]")).sendKeys("21331");
		Select drpCountry = new Select(driver.findElement(By.xpath("//*[@id=\"id_country\"]")));
		drpCountry.selectByVisibleText("United States");
		driver.findElement(By.xpath("//*[@id=\"phone_mobile\"]")).sendKeys("9871627908");
	WebElement ibox =	driver.findElement(By.xpath("//*[@id=\"alias\"]"));
		ibox.clear();
		ibox.sendKeys("House");
	}

	@When("^Click on Register$")
	public void click_on_Register() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//*[@id=\"submitAccount\"]/span")).click();
	    
	}

	@When("^Registered Successfully$")
	public void registered_Successfully() throws Throwable {
	    System.out.println("The User is Registered successfully");
	    
	}

	@Then("^Validate First name and Last name on Home page$")
	public void validate_First_name_and_Last_name_on_Home_page() throws Throwable {
	    driver.findElement(By.xpath("//*[@id=\"center_column\"]/ul/li/a/span")).click();
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	 String  ActualName =  driver.findElement(By.className("account")).getText();
	 String Expectedname = "joijoi voi";
	 Assert.assertEquals(ActualName, Expectedname);
	 System.out.println("The Customer name displayed is "+ActualName);
	  
	}

	@Then("^Logout Successfull$")
	public void logout_Successfull() throws Throwable {
	    driver.findElement(By.className("logout"));
	    System.out.println("The User logged out successfully");
	    driver.close();
	}

	@Given("^User navigate to login page$")
	public void user_navigate_to_login_page() throws Throwable {
System.out.println("The user navigate to login page");
driver.findElement(By.className("login")).click();
driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Given("^User Inputs Username and Password$")
	public void user_Inputs_Username_and_Password() throws Throwable {
driver.findElement(By.id("email")).sendKeys("xyz0987w@gmail.com");
driver.findElement(By.id("passwd")).sendKeys("Ayira@4567");
driver.findElement(By.xpath("//*[@id=\"SubmitLogin\"]/span")).click();
	    
	}

	@Given("^User login successfull$")
	public void user_login_successfull() throws Throwable {
	  System.out.println("The user login successfull");
	}

	@When("^User Proceed for shopping$")
	public void user_Proceed_for_shopping() throws Throwable {
	    driver.findElement(By.xpath("//*[@id=\"center_column\"]/ul/li/a/span")).click();
	  WebElement mainMenu =  driver.findElement(By.xpath("//*[@id=\"block_top_menu\"]/ul/li[2]/a"));
	  Actions actions = new Actions(driver);
	  actions.moveToElement(mainMenu).perform();
	  
	  WebElement subMenu =  driver.findElement(By.xpath("//*[@id=\"block_top_menu\"]/ul/li[2]/ul/li[3]/a"));
	  subMenu.click();
	  

	  
	  JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,1000)");
		
		 
	}

	@When("^User add a product to cart$")
	public void user_add_a_product_to_cart() throws Throwable {
		 Actions actions = new Actions(driver);
		  WebElement Itemmenu =  driver.findElement(By.xpath("//*[@id=\"center_column\"]/ul/li[1]/div"));
		  actions.moveToElement(Itemmenu).perform();  
		  
		  WebElement addToCart =  driver.findElement(By.xpath("//*[@id=\"center_column\"]/ul/li[1]/div/div[2]/div[2]/a[1]/span"));
		  addToCart.click();  
	    
	}

	@When("^Proceed the product to checkout$")
	public void proceed_the_product_to_checkout() throws Throwable {
		  JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("window.scrollBy(0,1000)");
			
		driver.findElement(By.xpath("//*[@id=\"layer_cart\"]/div[1]/div[2]/div[4]/a/span")).click();
	}

	@When("^Proceed to confirm address$")
	public void add_address() throws Throwable {
		  JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("window.scrollBy(0,1000)");
		
		driver.findElement(By.xpath("//*[@id=\"center_column\"]/form/p/button/span")).click();
	    
	}

	@When("^Proceed to Shipment and Payment details$")
	public void make_the_Payment() throws Throwable {
		  JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("window.scrollBy(0,1000)");
		
		driver.findElement(By.xpath("//*[@id=\"cgv\"]")).click();
		driver.findElement(By.xpath("//*[@id=\"form\"]/p/button/span")).click();
	}

	@Then("^Validate Product details on payment page$")
	public void validate_Product_details_on_payment_page() throws Throwable {
	String actualDress	= driver.findElement(By.xpath("//*[@id=\"product_5_19_0_568820\"]/td[2]/p/a")).getText();
	
		 String Expectedname = "Printed Summer Dress";
		 Assert.assertEquals(actualDress, Expectedname);
		 System.out.println("The Product name displayed "+actualDress);
		 
		 String actualPrice	= driver.findElement(By.xpath("//*[@id=\"product_5_19_0_568820\"]/td[6]")).getText();
			
		 String Expectedprice = "$28.98";
		 Assert.assertEquals(actualPrice, Expectedprice);
		 System.out.println("The price displayed of the product "+actualPrice);
		 
	}


	
}