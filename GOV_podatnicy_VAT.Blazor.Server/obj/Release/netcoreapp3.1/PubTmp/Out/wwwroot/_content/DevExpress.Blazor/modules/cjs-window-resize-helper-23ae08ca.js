DxBlazorInternal.define("cjs-window-resize-helper-23ae08ca.js",(function(n,i,e){n("./cjs-chunk-c5286524.js"),n("./cjs-chunk-0da7e9be.js"),n("./cjs-dom-utils-d155391a.js");var r=[],o={width:0,height:0};window.addEventListener("resize",(function(n){var i=window.innerWidth,e=window.innerHeight;o.height===e&&o.width===i||(o.height=e,o.width=i,r.forEach((function(n){n(o)})))}),{passive:!0});var s=window.console;function t(n){return!function(n){if(r.indexOf(n)>-1)throw new Error("already subscribed");return r.push(n),function(){var i=r.indexOf(n);if(-1===i)throw new Error("already un-subscribed");r.splice(i,1)}}((function(e){i(n,e.width)})),i(n,window.innerWidth),Promise.resolve("ok");function i(n,i){n.invokeMethodAsync("OnWindowResize",i).catch((function(n){return s.error(n)}))}}function c(){return Promise.resolve("ok")}e.default={init:t,dispose:c},e.dispose=c,e.init=t}),["cjs-chunk-c5286524.js","cjs-chunk-0da7e9be.js","cjs-dom-utils-d155391a.js"]);
