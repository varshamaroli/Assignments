package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		
		features = "src/test/java/features",
		glue = {"stepdefination"},
		tags={"@sanity,@Regression"}, 
		dryRun = false,
		plugin = {"pretty" ,"html:target/htmlreport","json:target/report.json"}
		
		)

public class testrunnerclass {

}
