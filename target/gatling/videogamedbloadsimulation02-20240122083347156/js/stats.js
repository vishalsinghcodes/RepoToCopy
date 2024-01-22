var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "165",
        "ok": "165",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "146",
        "ok": "146",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "472",
        "ok": "472",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "252",
        "ok": "252",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "percentiles1": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles2": {
        "total": "450",
        "ok": "450",
        "ko": "-"
    },
    "percentiles3": {
        "total": "464",
        "ok": "464",
        "ko": "-"
    },
    "percentiles4": {
        "total": "470",
        "ok": "470",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 165,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.69",
        "ok": "5.69",
        "ko": "-"
    }
},
contents: {
"req_get-all-videoga--1306015409": {
        type: "REQUEST",
        name: "Get All VideoGames",
path: "Get All VideoGames",
pathFormatted: "req_get-all-videoga--1306015409",
stats: {
    "name": "Get All VideoGames",
    "numberOfRequests": {
        "total": "110",
        "ok": "110",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "146",
        "ok": "146",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "472",
        "ok": "472",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "303",
        "ok": "303",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles1": {
        "total": "300",
        "ok": "300",
        "ko": "-"
    },
    "percentiles2": {
        "total": "454",
        "ok": "454",
        "ko": "-"
    },
    "percentiles3": {
        "total": "465",
        "ok": "465",
        "ko": "-"
    },
    "percentiles4": {
        "total": "471",
        "ok": "471",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 110,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.793",
        "ok": "3.793",
        "ko": "-"
    }
}
    },"req_get-specific-ga--894477642": {
        type: "REQUEST",
        name: "Get Specific Game",
path: "Get Specific Game",
pathFormatted: "req_get-specific-ga--894477642",
stats: {
    "name": "Get Specific Game",
    "numberOfRequests": {
        "total": "55",
        "ok": "55",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "146",
        "ok": "146",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "160",
        "ok": "160",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "151",
        "ok": "151",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles1": {
        "total": "151",
        "ok": "151",
        "ko": "-"
    },
    "percentiles2": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles3": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "percentiles4": {
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 55,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.897",
        "ok": "1.897",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
