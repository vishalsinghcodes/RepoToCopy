package videoGamedb.withFeeders;

import io.gatling.javaapi.core.ChainBuilder;
import io.gatling.javaapi.core.FeederBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;

public class VideoGaeDbWithCsvFeeders extends Simulation {

    private HttpProtocolBuilder httpPtotocol = http
            .baseUrl("https://videogamedb.uk/api")
            .acceptHeader("application/json")
            .contentTypeHeader("application/json");

    private static FeederBuilder.FileBased<String> csvFeeder =
            csv(System.getProperty("user.dir") + "\\src\\test\\resources\\DataForVideoGameFeedervaliClass\\gameCsvFile.csv")
            .circular();

    private static ChainBuilder getSpecificGame =
            feed(csvFeeder)
                    .exec(http("Get a videgame with name - #{gameName}")
                            .get("/videogame/#{gameId}")
                            .check(jmesPath("name").isEL("#{gameName}"))

                    );



    private ScenarioBuilder scn = scenario("VideoGame Db - section 6 code")
            .repeat(10).on(exec(getSpecificGame)
                    .pause(1));



    {
        setUp(
                scn.injectOpen(atOnceUsers(1))
        ).protocols(httpPtotocol);
    }

}


