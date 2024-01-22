package videoGamedb.withFeeders;

import io.gatling.javaapi.core.ChainBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;
import org.apache.commons.lang3.RandomStringUtils;

import java.time.LocalDate;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;
import java.util.function.Supplier;
import java.util.stream.Stream;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;

public class VideoGaeDbWithAdvancedCustomJavaFeeders extends Simulation {

    private HttpProtocolBuilder httpPtotocol = http
            .baseUrl("https://videogamedb.uk/api")
            .acceptHeader("application/json")
            .contentTypeHeader("application/json");

    public static LocalDate randomDates() {   // This is random date method use as it is
        int hundredYears = 100 * 365;
        return LocalDate.ofEpochDay(ThreadLocalRandom.current().nextInt(-hundredYears, hundredYears));
    }

    private static Iterator<Map<String, Object>> customFeeder =
            Stream.generate((Supplier<Map<String, Object>>) () -> {
                Random rand = new Random();
                int gameId = rand.nextInt(10 - 1 + 1) + 1;  // this is the logic to generate a random number from 1 to 10 you can get this from stackover flow also
                String gameName = RandomStringUtils.randomAlphanumeric(5) + "-gameName";
                String releaseDate = randomDates().toString();
                int reviewScore = rand.nextInt(100);
                String category = RandomStringUtils.randomAlphanumeric(5) + "=category";
                String rating = RandomStringUtils.randomAlphanumeric(4) + "-rating";

                HashMap<String, Object> hmap = new HashMap<String, Object>();
                hmap.put("gameId", gameId);
                hmap.put("releaseDate", releaseDate);
                hmap.put("gameName", gameName);
                hmap.put("rating", rating);
                hmap.put("reviewScore", reviewScore);
                hmap.put("category", category);
                return hmap;

            }).iterator();

    private static ChainBuilder authenticate =
            exec(http("Authenticate")
                    .post("/authenticate")
                    .body(StringBody("{\n" +
                            "    \"username\": \"admin\",\n" +
                            "    \"password\": \"admin\"\n" +
                            "}"))
                    .check(jmesPath("token").saveAs("jwtToken"))

            ).exec(session -> {
                System.out.println(session.getString("jwtToken"));
                return session;
            });

    private static ChainBuilder createNewGame =
            feed(customFeeder)
                    .exec(http("Create a new Game - #{gameName}")
                            .post("/videogame")
                            .header("authorization", "Bearer #{jwtToken}")
                            .body(ElFileBody(System.getProperty("user.dir") + "\\src\\test\\resources\\bodiesforCustomFedderValiclass\\newGameTemplate.json")).asJson()
                            .check(bodyString().saveAs("responseBody"))
                    ).exec(session -> {
                        System.out.println(session.getString("responseBody"));
                        return session;
                    });


    private ScenarioBuilder scn = scenario("VideoGame Db - section 6 code")
            .exec(authenticate)
            .repeat(10).on(exec(createNewGame)
                    .pause(1));


    {
        setUp(
                scn.injectOpen(atOnceUsers(1))
        ).protocols(httpPtotocol);
    }

}