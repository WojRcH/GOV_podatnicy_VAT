!function(n,t){function e(n){return 0===n.indexOf("./")?n.substring(2):n}const r=function n(t){return function(t){return n[t]||(n[t]=new r(t))};function r(n){const r=t("modules/"+e(n)),o=new Promise(function(n){this.initialize=function(t){t.then(n)}}.bind(this)),i=Promise.all([r,o]).then((function(n){const t=n[1],e=Promise.resolve(t);return Object.keys(t).forEach((function(n){Object.defineProperty(e,n,{get:function(){return t[n]}})})),e}));this.getPromise=function(){return i}}}(t.importScript);function o(n,t,r){return Promise.all(r.map(i)).then((function(r){const o={exports:{}};return t(function(n){return function(t){return t=e(t),n.filter((function(n){return n.id===t}))[0]||i(t)}}(r),o,o.exports),o.exports.id=n,Promise.resolve(Object.freeze(o.exports))}))}function i(n){return r(n).getPromise()}window.NodeList.prototype.forEach||(window.NodeList.prototype.forEach=Array.prototype.forEach),t.define=function(n,t,e){r(n).initialize(o(n,t,e))},i(n).then(t[t])}("cjs-dx-blazor-b9e913a9.js",this.DxBlazorInternal);