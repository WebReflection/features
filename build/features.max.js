/*!
(C) Andrea Giammarchi, @WebReflection - Mit Style License
*/
/**@license (C) Andrea Giammarchi, @WebReflection - Mit Style License
*/// a truly basic proposal for lazy/async detection
var features = (function (cache/*:object*/, undefined) {
    // reused in more than one place
    function has(key/*:string*/)/*:bool*/ {
        return cache.hasOwnProperty(key);
    }
    return {
        has: has,
        set: function (key/*:string*/, value/*:any*/)/*:void*/ {
            // one time only to avoid multiple notifications mess
            if (has(key)) return;
            // notify all listeners
            var event = document.createEvent("Event");
            event.initEvent("featuredetect", false, true);
            event.key = key;
            event.value = value;
            cache[key] = value;
            window.dispatchEvent(event);
        },
        get: function (key/*:string*/)/*:any*/ {
            // be sure if no key no Object.prototype is involved
            // e.g. cache["toString"] should still be undefined
            return has(key) ? cache[key] : undefined;
        }
    };
}({}));