package videoGamedb.withFeeders;

import io.burt.jmespath.antlr.v4.runtime.misc.ObjectEqualityComparator;
import io.gatling.javaapi.core.ChainBuilder;
import io.gatling.javaapi.core.FeederBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import java.util.*;
import java.util.function.Supplier;
import java.util.stream.Stream;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;

public class VideoGaeDbWithCustomJavaFeeders extends Simulation {

    private HttpProtocolBuilder httpPtotocol = http
            .baseUrl("https://videogamedb.uk/api")
            .acceptHeader("application/json")
            .contentTypeHeader("application/json");

    private static Iterator<Map<String, Object>> customFeeder =
            Stream.generate((Supplier<Map<String, Object>>) () -> {
                Random rand = new Random();
                int gameId = rand.nextInt(10 - 1 + 1) + 1;  // this is the logic to generate a random number from 1 to 10 you can get this from stackover flow also
                return Collections.singletonMap("gameId", gameId);
            }).iterator();


    private static ChainBuilder getSpecificGame =
            feed(customFeeder)
                    .exec(http("Get a videgame with - #{gameId}")
                            .get("/videogame/#{gameId}")
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