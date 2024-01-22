package videoGamedb.scriptFundamentals;


import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import java.time.Duration;
import java.util.List;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class VideoGameDb extends Simulation {

    private HttpProtocolBuilder httpPtotocol = http
            .baseUrl("https://videogamedb.uk/api")
            .acceptHeader("application/json");

    private ScenarioBuilder scn = scenario("VideoGame DB = section 5 Code")
            .exec(http("Get all VideoGames")
                    .get("/videogame")
                    .check(status().is(200))
                    .check(jsonPath("$[?(@.id==1)].name").is("Resident Evil 4"))
                    .check(jmesPath("[? id==`1`].name").ofList().is(List.of("Resident Evil 4"))))
            // here we have used list methods because the jmes method returns an array

            .pause(5)

            .exec(http("Get specific game")
                    .get("/videogame/2")
                    .check(status().in(200,202,500)))

            .pause(1, 10) // this will add the pause and gatling will have a random pause between 1 to 10

            .exec(http("Get all video Games second Call")
                    .get("/videogame")
                    .check(status().not(404), status().not(500))
            )
            .pause(Duration.ofSeconds(3)); // for more specific pause


    {
        setUp(
               scn.injectOpen(atOnceUsers(1))
        ).protocols(httpPtotocol);

    }

}
