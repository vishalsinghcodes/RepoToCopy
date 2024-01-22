package videoGamedb.scriptFundamentals;


import io.gatling.javaapi.core.ChainBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;

public class VideoGameDbAuthentication extends Simulation {

    private HttpProtocolBuilder httpPtotocol = http
            .baseUrl("https://videogamedb.uk/api")
            .acceptHeader("application/json")
            .contentTypeHeader("application/json");

    private static ChainBuilder authenticate =
            exec(http("Authenticate")
                    .post("/authenticate")
                    .body(StringBody("{\n" +
                            "    \"username\": \"admin\",\n" +
                            "    \"password\": \"admin\"\n" +
                            "}"))
                    .check(jmesPath("token").saveAs("jwtToken")));

    private static ChainBuilder cretaeNewGame =
        exec(http("Create New Gane")
                .post("/videogame")
                .header("Authorization", "Bearer #{jwtToken}")
                .body(StringBody("{\n" +
                        "  \"category\": \"Platform\",\n" +
                        "  \"name\": \"Mario\",\n" +
                        "  \"rating\": \"Mature\",\n" +
                        "  \"releaseDate\": \"2012-05-04\",\n" +
                        "  \"reviewScore\": 85\n" +
                        "}"))
                );

    private ScenarioBuilder scn = scenario("VideoGame DB = section 5 Code")
            .exec(authenticate)
            .exec(
                    session -> {
                        System.out.println("Token used is ************ >>>>>>>> "+ session.getString("jwtToken"));
                        return session;
                    }
            )
            .exec(cretaeNewGame);



    {
        setUp(
                scn.injectOpen(atOnceUsers(1))
        ).protocols(httpPtotocol);

    }

}
