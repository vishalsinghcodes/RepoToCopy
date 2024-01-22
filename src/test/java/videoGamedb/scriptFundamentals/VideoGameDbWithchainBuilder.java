package videoGamedb.scriptFundamentals;


import io.gatling.javaapi.core.ChainBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import java.time.Duration;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;
import static io.gatling.javaapi.http.HttpDsl.status;

public class VideoGameDbWithchainBuilder extends Simulation {

    private HttpProtocolBuilder httpPtotocol = http
            .baseUrl("https://videogamedb.uk/api")
            .acceptHeader("application/json");

    private static ChainBuilder getAllVideoGames =
            repeat(3).on(exec(http("Get all video Games")
                    .get("/videogame")
                    .check(status().not(404), status().not(500))
            ));



    private static ChainBuilder getSpecificGame =
            repeat(5, "myCounter").on(exec(http("Get specific game with ID : #{myCounter}")
                    .get("/videogame/#{myCounter}")
                    .check(status().in(200, 202, 500))))
            ;



    private ScenarioBuilder scn = scenario("VideoGame DB = section 5 Code")
            .exec(getAllVideoGames)
            .pause(5)
            .exec(getSpecificGame)
            .pause(5)
            .repeat(2).on(exec(getAllVideoGames));            ;


    {
        setUp(
                scn.injectOpen(atOnceUsers(1))
        ).protocols(httpPtotocol);

    }

}
