package videoGame;

import java.time.Duration;
import java.util.*;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;
import io.gatling.javaapi.jdbc.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;
import static io.gatling.javaapi.jdbc.JdbcDsl.*;

public class RecordedSimulation extends Simulation {

  private HttpProtocolBuilder httpProtocol = http
    .baseUrl("https://videogamedb.uk")
    .inferHtmlResources(AllowList(), DenyList(".*\\.js", ".*\\.css", ".*\\.gif", ".*\\.jpeg", ".*\\.jpg", ".*\\.ico", ".*\\.woff", ".*\\.woff2", ".*\\.(t|o)tf", ".*\\.png", ".*\\.svg", ".*detectportal\\.firefox\\.com.*"))
    .acceptHeader("application/json")
    .acceptEncodingHeader("gzip, deflate, br")
    .acceptLanguageHeader("en-US,en;q=0.9")
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
  
  private Map<CharSequence, String> headers_0 = Map.ofEntries(
    Map.entry("Sec-Fetch-Dest", "empty"),
    Map.entry("Sec-Fetch-Mode", "cors"),
    Map.entry("Sec-Fetch-Site", "same-origin"),
    Map.entry("sec-ch-ua", "Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120"),
    Map.entry("sec-ch-ua-mobile", "?0"),
    Map.entry("sec-ch-ua-platform", "Windows")
  );
  
  private Map<CharSequence, String> headers_2 = Map.ofEntries(
    Map.entry("Content-Type", "application/json"),
    Map.entry("Origin", "https://videogamedb.uk"),
    Map.entry("Sec-Fetch-Dest", "empty"),
    Map.entry("Sec-Fetch-Mode", "cors"),
    Map.entry("Sec-Fetch-Site", "same-origin"),
    Map.entry("sec-ch-ua", "Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120"),
    Map.entry("sec-ch-ua-mobile", "?0"),
    Map.entry("sec-ch-ua-platform", "Windows")
  );
  
  private Map<CharSequence, String> headers_3 = Map.ofEntries(
    Map.entry("Content-Type", "application/json"),
    Map.entry("Origin", "https://videogamedb.uk"),
    Map.entry("Sec-Fetch-Dest", "empty"),
    Map.entry("Sec-Fetch-Mode", "cors"),
    Map.entry("Sec-Fetch-Site", "same-origin"),
    Map.entry("authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcwNTEyMDM2OSwiZXhwIjoxNzA1MTIzOTY5fQ.JTKnGTjDH12GdEtmagNMCH1maSdwNKGYGntFYAC8OZE"),
    Map.entry("sec-ch-ua", "Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120"),
    Map.entry("sec-ch-ua-mobile", "?0"),
    Map.entry("sec-ch-ua-platform", "Windows")
  );
  
  private Map<CharSequence, String> headers_5 = Map.ofEntries(
    Map.entry("Origin", "https://videogamedb.uk"),
    Map.entry("Sec-Fetch-Dest", "empty"),
    Map.entry("Sec-Fetch-Mode", "cors"),
    Map.entry("Sec-Fetch-Site", "same-origin"),
    Map.entry("authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcwNTEyMDM2OSwiZXhwIjoxNzA1MTIzOTY5fQ.JTKnGTjDH12GdEtmagNMCH1maSdwNKGYGntFYAC8OZE"),
    Map.entry("sec-ch-ua", "Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120"),
    Map.entry("sec-ch-ua-mobile", "?0"),
    Map.entry("sec-ch-ua-platform", "Windows")
  );


  private ScenarioBuilder scn = scenario("RecordedSimulation")
    .exec(
      http("request_0")
        .get("/api/videogame")
        .headers(headers_0),
      pause(28),
      http("request_1")
        .get("/api/videogame/7")
        .headers(headers_0),
      pause(34),
      http("request_2")
        .post("/api/authenticate")
        .headers(headers_2)
        .body(RawFileBody("videoGame/recordedsimulation/0002_request.json")),
      pause(99),
      http("request_3")
        .post("/api/videogame")
        .headers(headers_3)
        .body(RawFileBody("videoGame/recordedsimulation/0003_request.json")),
      pause(37),
      http("request_4")
        .put("/api/videogame/3")
        .headers(headers_3)
        .body(RawFileBody("videoGame/recordedsimulation/0004_request.json")),
      pause(15),
      http("request_5")
        .delete("/api/videogame/3")
        .headers(headers_5),
      pause(7),
      http("request_6")
        .delete("/api/videogame/3")
        .headers(headers_5)
    );

  {
	  setUp(scn.injectOpen(atOnceUsers(1))).protocols(httpProtocol);
  }
}
