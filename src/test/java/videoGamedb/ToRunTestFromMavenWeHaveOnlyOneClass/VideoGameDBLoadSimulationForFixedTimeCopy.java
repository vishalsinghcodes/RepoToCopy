package videoGamedb.ToRunTestFromMavenWeHaveOnlyOneClass;


import io.gatling.javaapi.core.ChainBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;


public class VideoGameDBLoadSimulationForFixedTimeCopy extends Simulation {

    private HttpProtocolBuilder httpProtocol = http
            .baseUrl("https://videogamedb.uk/api")
            .acceptHeader("application/json");

    private static final int USER_COUNT = Integer.parseInt(System.getProperty("USERS", "5"));
    private static final int RAMP_DURATION = Integer.parseInt(System.getProperty("RAMP_DURATION", "10"));
    private static  final int TEST_DURATION = Integer.parseInt(System.getProperty("TEST_DURATION", "20"));

    @Override
    public void before(){
        System.out.println("Running test with USER_COUNT : "+USER_COUNT);
        System.out.println("Running test with RAMP_DURATION (Seconds) : "+RAMP_DURATION);
        System.out.println("Running test with TEST_DURATION (Seconds) : "+TEST_DURATION);
    }

    private static ChainBuilder getAllVideoGames =
            exec(http("Get All VideoGames")
                    .get("/videogame")
            );

    private static ChainBuilder getSpecificGame =
            exec(http("Get Specific Game")
                    .get("/videogame/2")
            );

    private ScenarioBuilder scn = scenario("Section 7 Code")
            .forever() .on(exec(getAllVideoGames)
                    .pause(5)
                    .exec(getSpecificGame)
                    .pause(5)
                    .exec(getAllVideoGames)
            );  // See this this is added in scnario to loop it for fixed time


    {
        setUp(
               scn.injectOpen(
                        nothingFor(5),
               rampUsers(USER_COUNT).during(RAMP_DURATION)


               /*         atOnceUsers(10), //here
                        rampUsers(20).during(30)
*/

                ).protocols(httpProtocol)
        ).maxDuration(TEST_DURATION);
                //.maxDuration(60);  // here
    }


}
