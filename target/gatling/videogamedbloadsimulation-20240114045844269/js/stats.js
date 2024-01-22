var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "45",
        "ok": "45",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "145",
        "ok": "145",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "467",
        "ok": "467",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "251",
        "ok": "251",
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
        "total": "447",
        "ok": "447",
        "ko": "-"
    },
    "percentiles3": {
        "total": "465",
        "ok": "465",
        "ko": "-"
    },
    "percentiles4": {
        "total": "467",
        "ok": "467",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 45,
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
        "total": "1.552",
        "ok": "1.552",
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
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "146",
        "ok": "146",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "467",
        "ok": "467",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "301",
        "ok": "301",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles1": {
        "total": "297",
        "ok": "297",
        "ko": "-"
    },
    "percentiles2": {
        "total": "450",
        "ok": "450",
        "ko": "-"
    },
    "percentiles3": {
        "total": "466",
        "ok": "466",
        "ko": "-"
    },
    "percentiles4": {
        "total": "467",
        "ok": "467",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 30,
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
        "total": "1.034",
        "ok": "1.034",
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
        "total": "15",
        "ok": "15",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "145",
        "ok": "145",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "150",
        "ok": "150",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "percentiles1": {
        "total": "149",
        "ok": "149",
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
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 15,
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
        "total": "0.517",
        "ok": "0.517",
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
