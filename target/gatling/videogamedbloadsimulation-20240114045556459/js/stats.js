var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "45",
        "ok": "0",
        "ko": "45"
    },
    "minResponseTime": {
        "total": "146",
        "ok": "-",
        "ko": "146"
    },
    "maxResponseTime": {
        "total": "592",
        "ok": "-",
        "ko": "592"
    },
    "meanResponseTime": {
        "total": "376",
        "ok": "-",
        "ko": "376"
    },
    "standardDeviation": {
        "total": "164",
        "ok": "-",
        "ko": "164"
    },
    "percentiles1": {
        "total": "456",
        "ok": "-",
        "ko": "456"
    },
    "percentiles2": {
        "total": "472",
        "ok": "-",
        "ko": "472"
    },
    "percentiles3": {
        "total": "579",
        "ok": "-",
        "ko": "579"
    },
    "percentiles4": {
        "total": "587",
        "ok": "-",
        "ko": "587"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 45,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.5",
        "ok": "-",
        "ko": "1.5"
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
        "ok": "0",
        "ko": "30"
    },
    "minResponseTime": {
        "total": "146",
        "ok": "-",
        "ko": "146"
    },
    "maxResponseTime": {
        "total": "482",
        "ok": "-",
        "ko": "482"
    },
    "meanResponseTime": {
        "total": "309",
        "ok": "-",
        "ko": "309"
    },
    "standardDeviation": {
        "total": "158",
        "ok": "-",
        "ko": "158"
    },
    "percentiles1": {
        "total": "301",
        "ok": "-",
        "ko": "301"
    },
    "percentiles2": {
        "total": "466",
        "ok": "-",
        "ko": "466"
    },
    "percentiles3": {
        "total": "482",
        "ok": "-",
        "ko": "482"
    },
    "percentiles4": {
        "total": "482",
        "ok": "-",
        "ko": "482"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 30,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
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
        "ok": "0",
        "ko": "15"
    },
    "minResponseTime": {
        "total": "438",
        "ok": "-",
        "ko": "438"
    },
    "maxResponseTime": {
        "total": "592",
        "ok": "-",
        "ko": "592"
    },
    "meanResponseTime": {
        "total": "510",
        "ok": "-",
        "ko": "510"
    },
    "standardDeviation": {
        "total": "62",
        "ok": "-",
        "ko": "62"
    },
    "percentiles1": {
        "total": "466",
        "ok": "-",
        "ko": "466"
    },
    "percentiles2": {
        "total": "577",
        "ok": "-",
        "ko": "577"
    },
    "percentiles3": {
        "total": "584",
        "ok": "-",
        "ko": "584"
    },
    "percentiles4": {
        "total": "590",
        "ok": "-",
        "ko": "590"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 15,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "-",
        "ko": "0.5"
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
