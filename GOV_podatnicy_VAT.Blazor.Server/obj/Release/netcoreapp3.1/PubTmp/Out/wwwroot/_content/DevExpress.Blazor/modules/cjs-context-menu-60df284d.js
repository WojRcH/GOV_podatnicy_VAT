DxBlazorInternal.define("cjs-context-menu-60df284d.js",(function(e,t,n){e("./cjs-chunk-c5286524.js"),e("./cjs-chunk-0da7e9be.js");var i=e("./cjs-dom-utils-d155391a.js"),o=e("./cjs-chunk-ad620f3e.js"),s=e("./cjs-chunk-d0f692d0.js");function d(e,t,n){e.style.position="absolute",e.style.visibility="hidden",e.style.display="block";var i=function(e,t,n){var i=(u=e,u.offsetParent),o=function(e){if(!e)return{X:0,Y:0};var t=e.getBoundingClientRect();return{X:t.left+0,Y:t.top+0}}(i),s=i.getBoundingClientRect(),d=e.getBoundingClientRect(),c=t+0-o.X;var u;s.left+c+d.width>=document.body.clientWidth&&(c=document.body.clientWidth-d.width-s.left-1);c+=i.scrollLeft;var l=n+0-o.Y;s.top+l+d.height>=window.innerHeight&&(l-=d.height+1);return{X:c,Y:l+=i.scrollTop}}(e,t,n);return e.style.top=i.Y+"px",e.style.left=i.X+"px",e.style.visibility="visible",!1}function c(e){e.style.display="none",r(e)}function u(e){e.invokeMethodAsync("Hide")}function l(e,t,n,c){if(e=i.ensureElement(e)){s.disposeEvents(e);var l=function(t){return function(e,t,n){var i=document.getElementById(t);i.contains(e.target)||i===e.target||u(n)}(t,e.id,c)},r=function(e){return function(e,t){"Escape"===e.key&&u(t)}(e,c)};return"ontouchstart"in window?o.attachEventToElement(document,"touchstart",l):o.attachEventToElement(document,"mousedown",l),o.attachEventToElement(document,"keydown",r),s.registerDisposableEvents(e,(function(){"ontouchstart"in window?o.detachEventFromElement(document,"touchstart",l):o.detachEventFromElement(document,"mousedown",l),o.detachEventFromElement(document,"keydown",r)})),d(e,t,n),Promise.resolve("ok")}}function r(e){if(e=i.ensureElement(e))return s.disposeEvents(e),Promise.resolve("ok")}function a(e,t){if(t=i.ensureElement(t)){t.style.visibility="hidden",t.style.display="block";var n=e.getBoundingClientRect(),o=t.getBoundingClientRect();t.style.position="absolute";var s=e.offsetTop;n.top+o.height>=window.innerHeight&&(s-=o.height+n.top+1-window.innerHeight),t.style.top=s+"px";var d=n.width;n.left+d+o.width>=document.body.clientWidth&&(d-=o.width+n.width+1),t.style.left=d+"px",t.style.visibility="visible"}}n.default={renderMenu:l,dispose:r,renderSubMenu:a,hideMenuClientSide:c},n.dispose=r,n.hideMenuClientSide=c,n.renderMenu=l,n.renderSubMenu=a}),["cjs-chunk-c5286524.js","cjs-chunk-0da7e9be.js","cjs-dom-utils-d155391a.js","cjs-chunk-ad620f3e.js","cjs-chunk-d0f692d0.js"]);
