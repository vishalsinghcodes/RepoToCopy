package videoGamedb;

import java.time.Duration;
import java.util.*;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;
import io.gatling.javaapi.jdbc.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;
import static io.gatling.javaapi.jdbc.JdbcDsl.*;

public class RecordedSimulationWithHTTPProxy extends Simulation {

  private HttpProtocolBuilder httpProtocol = http
    .baseUrl("https://videogamedb.uk")
    .inferHtmlResources(AllowList(), DenyList(".*\\.js", ".*\\.css", ".*\\.gif", ".*\\.jpeg", ".*\\.jpg", ".*\\.ico", ".*\\.woff", ".*\\.woff2", ".*\\.(t|o)tf", ".*\\.png", ".*\\.svg", ".*detectportal\\.firefox\\.com.*"))
    .acceptHeader("*/*")
    .acceptEncodingHeader("gzip, deflate, br")
    .userAgentHeader("PostmanRuntime/7.36.0");
  
  private Map<CharSequence, String> headers_0 = Map.of("Postman-Token", "69fbd616-9fc9-4eae-afaa-3775f5ed9dc0");
  
  private Map<CharSequence, String> headers_1 = Map.of("Postman-Token", "ab5c9507-6ac4-4f53-95c0-24e63256c804");
  
  private Map<CharSequence, String> headers_2 = Map.ofEntries(
    Map.entry("Content-Type", "application/json"),
    Map.entry("Postman-Token", "d220b210-371e-4445-86df-413bf37293b3")
  );
  
  private Map<CharSequence, String> headers_3 = Map.ofEntries(
    Map.entry("Content-Type", "application/json"),
    Map.entry("Postman-Token", "6a63797c-9c65-484b-a6fb-ac7389825920"),
    Map.entry("authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcwNTEyNDMzNSwiZXhwIjoxNzA1MTI3OTM1fQ.BHbeLkqY_SYlU0cOK-wPKzmxSJLyWyW7bfC_Xj-bdQ4")
  );
  
  private Map<CharSequence, String> headers_4 = Map.ofEntries(
    Map.entry("Content-Type", "application/json"),
    Map.entry("Postman-Token", "f9820ed2-df0b-4fc4-98c7-5aa4ef0cc42c"),
    Map.entry("authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcwNTEyNDMzNSwiZXhwIjoxNzA1MTI3OTM1fQ.BHbeLkqY_SYlU0cOK-wPKzmxSJLyWyW7bfC_Xj-bdQ4")
  );
  
  private Map<CharSequence, String> headers_5 = Map.ofEntries(
    Map.entry("Postman-Token", "499cf401-9b69-4131-ac7e-39207c9c2e70"),
    Map.entry("authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcwNTEyNDMzNSwiZXhwIjoxNzA1MTI3OTM1fQ.BHbeLkqY_SYlU0cOK-wPKzmxSJLyWyW7bfC_Xj-bdQ4")
  );


  private ScenarioBuilder scn = scenario("RecordedSimulationWithHTTPProxy")
    .exec(
      http("request_0")
        .get("/api/videogame")
        .headers(headers_0),
      pause(24),
      http("request_1")
        .get("/api/videogame/2")
        .headers(headers_1),
      pause(10),
      http("request_2")
        .post("/api/authenticate")
        .headers(headers_2)
        .body(RawFileBody("videoGamedb/recordedsimulationwithhttpproxy/0002_request.json")),
      pause(8),
      http("request_3")
        .post("/api/videogame")
        .headers(headers_3)
        .body(RawFileBody("videoGamedb/recordedsimulationwithhttpproxy/0003_request.json")),
      pause(4),
      http("request_4")
        .put("/api/videogame/3")
        .headers(headers_4)
        .body(RawFileBody("videoGamedb/recordedsimulationwithhttpproxy/0004_request.json")),
      pause(3),
      http("request_5")
        .delete("/api/videogame/2")
        .headers(headers_5)
    );

  {
	  setUp(scn.injectOpen(atOnceUsers(1))).protocols(httpProtocol);
  }
}
