package videoGamedb.loadSimulation;


import io.gatling.javaapi.core.ChainBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;


public class VideoGameDBLoadSimulationForFixedTime extends Simulation {

    private HttpProtocolBuilder httpProtocol = http
            .baseUrl("https://videogamedb.uk/api")
            .acceptHeader("application/json");

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
                        atOnceUsers(10), //here
                        rampUsers(20).during(30)


                ).protocols(httpProtocol)
        ).maxDuration(60);  // here
    }


}
