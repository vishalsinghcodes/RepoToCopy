var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "114",
        "ok": "114",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "145",
        "ok": "145",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "464",
        "ok": "464",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "204",
        "ok": "204",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "115",
        "ok": "115",
        "ko": "-"
    },
    "percentiles1": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles2": {
        "total": "154",
        "ok": "154",
        "ko": "-"
    },
    "percentiles3": {
        "total": "459",
        "ok": "459",
        "ko": "-"
    },
    "percentiles4": {
        "total": "462",
        "ok": "462",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 114,
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
        "total": "4.56",
        "ok": "4.56",
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
        "total": "76",
        "ok": "76",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "145",
        "ok": "145",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "464",
        "ok": "464",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "231",
        "ok": "231",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "134",
        "ok": "134",
        "ko": "-"
    },
    "percentiles1": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles2": {
        "total": "443",
        "ok": "443",
        "ko": "-"
    },
    "percentiles3": {
        "total": "461",
        "ok": "461",
        "ko": "-"
    },
    "percentiles4": {
        "total": "463",
        "ok": "463",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 76,
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
        "total": "3.04",
        "ok": "3.04",
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
        "total": "38",
        "ok": "38",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "145",
        "ok": "145",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "159",
        "ok": "159",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "150",
        "ok": "150",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles1": {
        "total": "150",
        "ok": "150",
        "ko": "-"
    },
    "percentiles2": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles3": {
        "total": "154",
        "ok": "154",
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
    "count": 38,
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
        "total": "1.52",
        "ok": "1.52",
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
