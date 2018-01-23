(function() {
    const b = performance.now();
    for(var i=0; i<1000; i++) {
        (function () {
'use strict';

function run(num1, num2) {
    return num1 + num2;
}

window.x = run(5, 10);

}());
    }
    console.log("rollup: " + (performance.now()-b));
})();
