/*!
(C) Andrea Giammarchi, @WebReflection - Mit Style License
*/
var features=(function(a,c){function b(d){return a.hasOwnProperty(d)}return{has:b,set:function(d,f){if(b(d)){return}var e=document.createEvent("Event");e.initEvent("featuredetect",false,true);e.key=d;e.value=f;a[d]=f;window.dispatchEvent(e)},get:function(d){return b(d)?a[d]:c}}}({}));