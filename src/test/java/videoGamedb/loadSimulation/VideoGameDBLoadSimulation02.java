package videoGamedb.loadSimulation;


import io.gatling.javaapi.core.ChainBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;


public class VideoGameDBLoadSimulation02 extends Simulation {

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
                      rampUsersPerSec(1).to(5).during(20).randomized()

                      //  constantUsersPerSec(5).during(10).randomized() // here if you wiill use till during It will rampup the user in constant pace
                        // but if you will use random then the users will ramp-up randomly
                ).protocols(httpProtocol)
        );
    }


}
