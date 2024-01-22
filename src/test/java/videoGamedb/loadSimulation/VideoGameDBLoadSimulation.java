package videoGamedb.loadSimulation;


import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;


public class VideoGameDBLoadSimulation extends Simulation {

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
            .exec(getAllVideoGames)
            .pause(5)
            .exec(getSpecificGame)
            .pause(5)
            .exec(getAllVideoGames);

    {
        setUp(
                scn.injectOpen(
                        nothingFor(5),
                        atOnceUsers(5),
                        rampUsers(10).during(20)
                ).protocols(httpProtocol)
        );
    }


}
