var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "159",
        "ok": "489",
        "ko": "159"
    },
    "maxResponseTime": {
        "total": "489",
        "ok": "489",
        "ko": "159"
    },
    "meanResponseTime": {
        "total": "324",
        "ok": "489",
        "ko": "159"
    },
    "standardDeviation": {
        "total": "165",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "324",
        "ok": "489",
        "ko": "159"
    },
    "percentiles2": {
        "total": "407",
        "ok": "489",
        "ko": "159"
    },
    "percentiles3": {
        "total": "472",
        "ok": "489",
        "ko": "159"
    },
    "percentiles4": {
        "total": "486",
        "ok": "489",
        "ko": "159"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
    "percentage": 50
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
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.182",
        "ok": "0.091",
        "ko": "0.091"
    }
},
contents: {
"req_authenticate-1885436661": {
        type: "REQUEST",
        name: "Authenticate",
path: "Authenticate",
pathFormatted: "req_authenticate-1885436661",
stats: {
    "name": "Authenticate",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "489",
        "ok": "489",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "489",
        "ok": "489",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "489",
        "ok": "489",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "489",
        "ok": "489",
        "ko": "-"
    },
    "percentiles2": {
        "total": "489",
        "ok": "489",
        "ko": "-"
    },
    "percentiles3": {
        "total": "489",
        "ok": "489",
        "ko": "-"
    },
    "percentiles4": {
        "total": "489",
        "ok": "489",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
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
        "total": "0.091",
        "ok": "0.091",
        "ko": "-"
    }
}
    },"req_authenticate-re--1466420456": {
        type: "REQUEST",
        name: "Authenticate Redirect 1",
path: "Authenticate Redirect 1",
pathFormatted: "req_authenticate-re--1466420456",
stats: {
    "name": "Authenticate Redirect 1",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "159",
        "ok": "-",
        "ko": "159"
    },
    "maxResponseTime": {
        "total": "159",
        "ok": "-",
        "ko": "159"
    },
    "meanResponseTime": {
        "total": "159",
        "ok": "-",
        "ko": "159"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "159",
        "ok": "-",
        "ko": "159"
    },
    "percentiles2": {
        "total": "159",
        "ok": "-",
        "ko": "159"
    },
    "percentiles3": {
        "total": "159",
        "ok": "-",
        "ko": "159"
    },
    "percentiles4": {
        "total": "159",
        "ok": "-",
        "ko": "159"
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
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.091",
        "ok": "-",
        "ko": "0.091"
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
