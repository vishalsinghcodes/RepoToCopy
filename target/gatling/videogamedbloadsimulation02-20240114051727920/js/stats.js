var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "201",
        "ok": "201",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "480",
        "ok": "480",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "253",
        "ok": "253",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "144",
        "ok": "144",
        "ko": "-"
    },
    "percentiles1": {
        "total": "153",
        "ok": "153",
        "ko": "-"
    },
    "percentiles2": {
        "total": "452",
        "ok": "452",
        "ko": "-"
    },
    "percentiles3": {
        "total": "466",
        "ok": "466",
        "ko": "-"
    },
    "percentiles4": {
        "total": "476",
        "ok": "476",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 201,
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
        "total": "6.484",
        "ok": "6.484",
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
        "total": "134",
        "ok": "134",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "480",
        "ok": "480",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "304",
        "ok": "304",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "153",
        "ok": "153",
        "ko": "-"
    },
    "percentiles1": {
        "total": "297",
        "ok": "297",
        "ko": "-"
    },
    "percentiles2": {
        "total": "457",
        "ok": "457",
        "ko": "-"
    },
    "percentiles3": {
        "total": "469",
        "ok": "469",
        "ko": "-"
    },
    "percentiles4": {
        "total": "476",
        "ok": "476",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 134,
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
        "total": "4.323",
        "ok": "4.323",
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
        "total": "67",
        "ok": "67",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "159",
        "ok": "159",
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
        "total": "153",
        "ok": "153",
        "ko": "-"
    },
    "percentiles3": {
        "total": "157",
        "ok": "157",
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
    "count": 67,
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
        "total": "2.161",
        "ok": "2.161",
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
