package videoGamedb.scriptFundamentals;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class MyFisrTest extends Simulation {

    /*
    1. HTTP Configurations - Base URLs, headers n all
    */
    private HttpProtocolBuilder httpProtocol = http.
            baseUrl("https://videogamedb.uk/api")
            .acceptHeader("application/json");

    /*
    2. Scenario Definition
    */
    private ScenarioBuilder scm = scenario("My First Test")
            .exec(http("Get all Games")
                    .get("/videogame"));

    /*
    3. Load Simulation - For performance test
     */
    {
        setUp(
                scm.injectOpen(atOnceUsers(1))
        ).protocols(httpProtocol);
    }


}
