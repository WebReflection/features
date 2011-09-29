features.js :: The easiest way to inline or lazy features detection
================================================================

*features* is a 100% covered via unit tests object able to simplify lazy features detections in less than 0.3 Kb minzipped.
As proposal, you should consider JSConf.EU slides, and you are free to enrich this proposal with modules or reliable inline features detections.


example
-----------

Detect asynchronously if the user is using a mouse or the touch screen:

    for (var
        detect = function detect(e) {
            features.set("touch", !/mouse/i.test(e.type));
            for (i = events.length; i--;) {
                documentElement.removeEventListener(
                    events[i], detect, true
                );
            }
        },
        documentElement = document.documentElement,
        events = [
            "mousemove", "mousedown", "mousewheel",
            "DOMMouseScroll", "touchstart"
        ],
        i = events.length; i--;
    ) {
        documentElement.addEventListener(events[i], detect, true);#
    }
    
    
    // later on ...
    
    window.addEventListener("featuredetect", function (e) {
        // this could be a long list of things to detect
        // let's use the handy switch ...
        switch (e.key) {
            case "touch":
                if (e.value) {
                    // ... touch events
                } else {
                    // ... mouse events
                    document.addEventListener("mousedown", function () {
                        document.documentElement.innerHTML = Math.random();
                    }, false);
                }
                break;
                // anything else that may be notified
            }
        }, true);
