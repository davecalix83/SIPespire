/* ==== index
##. Debt-to-Eauity chart
##. Net Profit Margin
============= */

/* === Debt-to-Eauity chart === */

nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
            .transitionDuration(350)
            .reduceXTicks(true) //If 'false', every single x-axis tick label will be rendered.
            .rotateLabels(0) //Angle to rotate x-axis labels.
            .showControls(false) //Allow user to switch between 'Grouped' and 'Stacked' mode.
            .groupSpacing(0.5) //Distance between each group of bars.
        ;

    chart.xAxis
        .tickFormat(d3.format(",f"));

    chart.yAxis
        .axisLabel("Bookings $k")
        .tickFormat(d3.format(",.1f"));

    d3.select("#chart1 svg")
        .datum(exampleData())
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});

//Generate some nice data.
function exampleData() {
    return stream_layers(2, 10 + Math.random() * 100, 12).map(function(data, i) {
        return {
            key: "Debt" + i + 2,
            values: data
        };
    });
}

/* Inspired by Lee Byron's test data generator. */
function stream_layers(n, m, o) {
    if (arguments.length < 3) o = 0;

    function bump(a) {
        var x = 1 / (.1 + Math.random()),
            y = 2 * Math.random() - .5,
            z = 10 / (.1 + Math.random());
        for (var i = 0; i < m; i++) {
            var w = (i / m - y) * z;
            a[i] += x * Math.exp(-w * w);
        }
    }

    return d3.range(n).map(function() {
        var a = [], i;
        for (i = 0; i < m; i++) a[i] = o + o * Math.random();
        for (i = 0; i < 5; i++) bump(a);
        return a.map(stream_index);
    });
}

/* Another layer generator using gamma distributions. */
function stream_waves(n, m) {
    return d3.range(n).map(function(i) {
        return d3.range(m).map(function(j) {
            var x = 20 * j / m - i / 3;
            return 2 * x * Math.exp(-.5 * x);
        }).map(stream_index);
    });
}

function stream_index(d, i) {
    return { x: i, y: Math.max(0, d) };
}

/* === Net Profit Margin === */
var responsiveSparklinePageView = function() {

    $("#spark-tile-revenue").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7],
        {
            type: "line",
            width: "100%",
            fillColor: "#aed581",
            lineColor: "#aed581",
            disableInteraction: true,
            spotRadius: 0
        });

    $("#tiles-sparkline-stats-pageviews, #tiles-sparkline-stats-pageviews-extra").sparkline(
        [2455, 1234, 776, 349, 1776, 2234, 2455],
        {
            type: "line",
            lineColor: "#ccc",
            lineWidth: "1.5",
            fillColor: "transparent",
            height: 70,
            width: "100%",
            minSpotColor: false,
            maxSpotColor: false,
            spotColor: false,
            spotRadius: "4",
            highlightSpotColor: "#999999",
            highlightLineColor: "#cccccc"
        });

    $("#tiles-sparkline-stats-totalsales, #tiles-sparkline-stats-totalorders-extra").sparkline(
        [2455, 3534, 5776, 4349, 5179, 524, 1123],
        {
            type: "line",
            lineColor: "#ccc",
            lineWidth: "1.5",
            fillColor: "transparent",
            height: 70,
            width: "100%",
            minSpotColor: false,
            maxSpotColor: false,
            spotColor: false,
            spotRadius: "4",
            highlightSpotColor: "#999999",
            highlightLineColor: "#cccccc"
        });

    $("#tiles-sparkline-stats-totalorders").sparkline([255, 134, 76, 120, 350, 400, 98],
        {
            type: "line",
            lineColor: "#ccc",
            lineWidth: "1.5",
            fillColor: "transparent",
            height: 70,
            width: "100%",
            minSpotColor: false,
            maxSpotColor: false,
            spotColor: false,
            spotRadius: "4",
            highlightSpotColor: "#999999",
            highlightLineColor: "#cccccc"
        });

    $("#tiles-sparkline-stats-pageviews4").sparkline([1455, 634, 776, 1349, 2179, 2524, 1423],
        {
            type: "line",
            lineColor: "#ccc",
            lineWidth: "1.5",
            fillColor: "transparent",
            height: 70,
            width: "100%",
            minSpotColor: false,
            maxSpotColor: false,
            spotColor: false,
            spotRadius: "4",
            highlightSpotColor: "#999999",
            highlightLineColor: "#cccccc"
        });

    $("#tiles-sparkline-stats-blogviews").sparkline([1455, 634, 776, 1349, 2179, 2524, 1423],
        {
            type: "line",
            lineColor: "#e3e3e3",
            lineWidth: "2",
            fillColor: "transparent",
            height: 173,
            width: "100%",
            minSpotColor: false,
            maxSpotColor: false,
            spotColor: false,
            spotRadius: "4",
            highlightSpotColor: "#e3e3e3",
            highlightLineColor: "rgba(227,227,227,0.3)"
        });

    $("#tiles-sparkline-stats-blogviews").sparkline([2455, 1634, 376, 2349, 3179, 1524, 4423],
        {
            composite: true,
            lineColor: "#9b59b6",
            lineWidth: "2",
            fillColor: "transparent",
            height: 173,
            minSpotColor: false,
            maxSpotColor: false,
            spotColor: false,
            spotRadius: "4",
            highlightSpotColor: "#9b59b6",
            highlightLineColor: "rgba(227,227,227,0.3)"
        });
};

var refreshSparklines;
$(window).resize(function(e) {
    clearTimeout(refreshSparklines);
    refreshSparklines = setTimeout(responsiveSparklinePageView, 500);
});

responsiveSparklinePageView();