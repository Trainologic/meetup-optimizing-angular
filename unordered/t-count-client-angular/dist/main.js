"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serverUrl = "http://localhost:3000";
var http;
function config(args) {
    serverUrl = args.serverUrl;
    http = args.http;
}
exports.config = config;
function reportCounter(_a) {
    var name = _a.name, value = _a.value;
    http.post(serverUrl + "/api/counter", { name: name, value: value }).toPromise();
}
exports.reportCounter = reportCounter;
function reportCounters(counters) {
    for (var _i = 0, counters_1 = counters; _i < counters_1.length; _i++) {
        var c = counters_1[_i];
        reportCounter(c);
    }
}
exports.reportCounters = reportCounters;
function trackComponents(appRef, ngZone) {
    ngZone.runOutsideAngular(function () {
        setInterval(function () {
            var stats = {
                componentCount: 0,
                bindingCount: 0,
            };
            scanNodes(appRef["_views"]["0"]._view.nodes, stats);
            http.post(serverUrl + "/api/counter", [
                { name: "components", value: stats.componentCount },
                { name: "binding", value: stats.bindingCount },
            ]).toPromise();
        }, 1000);
    });
}
exports.trackComponents = trackComponents;
function trackChangeDetection(appRef, ngZone) {
    var totalTick = 0;
    var countTick = 0;
    var originalTick = appRef.tick;
    appRef.tick = function () {
        var before = performance.now();
        originalTick.apply(this, arguments);
        var after = performance.now();
        var duration = (after - before);
        totalTick += duration;
        ++countTick;
        var avg = totalTick / countTick;
        ngZone.runOutsideAngular(function () {
            http.post(serverUrl + "/api/counter", [
                { name: "cd (avg)", value: avg },
                { name: "cd (last)", value: duration },
                { name: "cd (count)", value: countTick },
            ]).toPromise();
        });
    };
}
exports.trackChangeDetection = trackChangeDetection;
function scanNodes(nodes, stats) {
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node.componentView && nodes[i + 1].instance) {
            ++stats.componentCount;
            if (node.componentView.def.bindingCount > 0) {
                stats.bindingCount += node.componentView.def.bindingCount;
            }
            scanNodes(node.componentView.nodes, stats);
        }
        if (node.viewContainer && nodes[i + 1].instance) {
            for (var _i = 0, _a = node.viewContainer._embeddedViews; _i < _a.length; _i++) {
                var embeddedView = _a[_i];
                if (embeddedView.def.bindingCount > 0) {
                    stats.bindingCount += embeddedView.def.bindingCount;
                }
                scanNodes(embeddedView.nodes, stats);
            }
        }
    }
}
//# sourceMappingURL=main.js.map