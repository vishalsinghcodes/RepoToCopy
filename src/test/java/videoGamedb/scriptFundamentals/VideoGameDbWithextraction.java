package videoGamedb.scriptFundamentals;


import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import java.time.Duration;
import java.util.List;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;
import static io.gatling.javaapi.http.HttpDsl.status;

public class VideoGameDbWithextraction extends Simulation {

    private HttpProtocolBuilder httpPtotocol = http
            .baseUrl("https://videogamedb.uk/api")
            .acceptHeader("application/json");

    private ScenarioBuilder scn = scenario("VideoGame DB = section 5 Code")

            .exec(http("Get specific game")
                    .get("/videogame/1")
                    .check(status().in(200, 202, 500))
                    .check(jmesPath("name").is("Resident Evil 4")))

            .pause(1, 10) // this will add the pause and gatling will have a random pause between 1 to 10

            .exec(http("Get all video Games")
                    .get("/videogame")
                    .check(status().not(404), status().not(500))
                    .check(jmesPath("[1].id").saveAs("gameId"))
            )

            .pause(Duration.ofSeconds(3))// for more specific pause

            .exec(
                    session -> {
                        System.out.println(session);
                        System.out.println("gameId is : " + session.getString("gameId"));
                        return session;
                    }
            )

            .exec(http("Get Specific game with ID -- #{gameId}").get("/videogame/#{gameId}")
                    .check(jmesPath("name").is("Gran Turismo 3"))
                    .check(bodyString().saveAs("responseBody")))


            .exec(
                    session -> {
                        System.out.println("Response body" + session.getString("responseBody"));
                        return session;
                    }
            );


    {
        setUp(
                scn.injectOpen(atOnceUsers(1))
        ).protocols(httpPtotocol);

    }

}
