DxBlazorInternal.define("cjs-checkbox-7c12516f.js",(function(n,e,c){n("./cjs-chunk-c5286524.js"),n("./cjs-chunk-0da7e9be.js");var i=n("./cjs-dom-utils-d155391a.js");function t(n,e,c,t,u){if(n=i.ensureElement(n)){n.indeterminate=c;var s=function(n,e){if(e)return 0;if(n)return 1;return 2}(e,c),r=e;n.onchange=function(e){t?(function(n,e){var c=!1,i=!1;0===e?c=!0:1===e&&(i=!0);n.indeterminate=c,n.checked=i}(n,s=(s+1)%3),r=function(n){if(0===n)return null;return 1===n}(s)):r=!r,u.invokeMethodAsync("RaiseCheckedChanged",r)}}}c.default={init:t},c.init=t}),["cjs-chunk-c5286524.js","cjs-chunk-0da7e9be.js","cjs-dom-utils-d155391a.js"]);