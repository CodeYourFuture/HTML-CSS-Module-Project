(function resetAB() {
    if(typeof __ppl !== "undefined" && typeof __ppl.Interface !== "undefined" && typeof __ppl.Interface.resetAB !== "undefined") {
        __ppl.Interface.resetAB();
    } else {
        window.setTimeout(resetAB, 50);
    }
})();
