package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(dryRun=true,monochrome=true,
				features= {"src/test/java/resources/Test.feature"},
				glue="steps",tags= {"@t2,@s2"},
				format= {"html:test-outputs",
						"json:test-outputs/cucumber.json"})
public class Runner {

}
