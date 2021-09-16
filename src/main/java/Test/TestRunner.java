package Test;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:/Eclipse/ecommerce/Wipro_Ecommerce/src/test/java/onlineShopping.feature"
		,glue={"onlinePortalTest"}
		
		)

public class TestRunner {

}