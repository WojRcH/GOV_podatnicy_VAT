DxBlazorInternal.define("cjs-tagbox-a96646eb.js",(function(e,t,n){e("./cjs-chunk-c5286524.js"),e("./cjs-chunk-0da7e9be.js");var o=e("./cjs-dom-utils-d155391a.js"),s=e("./cjs-chunk-ad620f3e.js"),c=e("./cjs-chunk-d0f692d0.js"),a=e("./cjs-chunk-96905969.js"),r=e("./cjs-chunk-e9e6b6d6.js"),u=e("./cjs-dropdowns-95123063.js"),d=e("./cjs-grid-0655d36f.js");e("./cjs-grid-column-resize-0dd4fbf2.js"),e("./cjs-dx-style-helper-04d43993.js"),e("./cjs-chunk-0e3fca0a.js"),e("./cjs-focus-utils-48b0e7fd.js"),e("./cjs-chunk-b8f9edc9.js"),e("./cjs-dragAndDropUnit-f07c4799.js");var l=e("./cjs-chunk-f0a094eb.js");function i(e){var t=u.getDropDownElement(e);d.scrollToFocusedItem(t)}function f(e,t,n){o.setInputAttribute(e,"value",t),m(e),n&&function(e){e&&e.select()}(e)}function m(e){e.previousSibling.innerText=""===e.value&&e.placeholder?e.placeholder:e.value}function j(e){e=o.ensureElement(e),document.activeElement===e&&p(e)}function v(e,t){var n=e.target;y(n,!0),function(e){if(e){var t=o.getParentByClassName(e,"form-control");t.dataset.bluredClass&&(t.className=t.dataset.bluredClass)}}(n),n.dataset.timerId=setTimeout((function(){if(delete n.dataset.timerId,document.activeElement!==n)try{b(t,n)}catch(e){}}),200)}function y(e,t){e.dataset.timerId&&(clearTimeout(e.dataset.timerId),delete e.dataset.timerId),t||setTimeout((function(){y(e,!0)}),100)}function p(e){if(e){var t=o.getParentByClassName(e,"form-control");t.dataset.focusedClass&&(t.className=t.dataset.focusedClass)}}function E(e,t,n,o,s){g(e)&&(e.stopPropagation(),e.preventDefault());var c=function(e){var t=e.altKey&&(e.keyCode===r.Key.Down||e.keyCode===r.Key.Up),n=h(e),o=e.keyCode===r.Key.Esc||e.keyCode===r.Key.Enter,s=function(e){var t=0===e.target.value.length;return e.keyCode===r.Key.Backspace&&t}(e);return t||n||o||s}(e)&&!e.repeat;o&&!e.repeat&&l.keyDown(e),c&&k(e,t,n,s)}function k(e,t,n,o){var s=e.target.value,c=""!==e.target.dataset.previousValue;if(n&&o){var a=n.querySelector(".dxgvCSD");a&&(n=a);var r=d.getParametersForVirtualScrollingRequest(n,!1);t.invokeMethodAsync("TagBoxVirtualScrollingProcessKey",s,e.keyCode,e.altKey,e.ctrlKey,r.requestScrollState.itemHeight,r.requestScrollState.scrollTop,r.requestScrollState.scrollHeight,c)}else t.invokeMethodAsync("TagBoxProcessKey",s,e.keyCode,e.altKey,e.ctrlKey,c)}function h(e){return e.keyCode===r.Key.Down||e.keyCode===r.Key.Up||e.keyCode===r.Key.PageUp||e.keyCode===r.Key.PageDown||e.ctrlKey&&(e.keyCode===r.Key.Home||e.keyCode===r.Key.End)}function g(e){return h(e)||e.keyCode===r.Key.Enter}function b(e,t,n){if(t){var o=(new Date).getTime();t.dataset.lastLostFocusTime&&o-t.dataset.lastLostFocusTime<300&&!n||(t.dataset.lastLostFocusTime=(new Date).getTime(),e.invokeMethodAsync("OnTagBoxLostFocus",t.value),document.activeElement!==t&&(t.value=""))}}function C(e,t,n){var d=o.ensureElement(e);if(d){c.disposeEvents(d);var i=o.ensureElement(t.inputElement),f=u.getDropDownElement(d),j=function(e){return E(e,n,f,t.filteringEnabled,t.virtualScrollingEnabled)},h=function(e){return function(e,t,n,o,s){if(g(e))e.stopPropagation(),e.preventDefault(),e.keyCode!==r.Key.Up&&e.keyCode!==r.Key.Down||t.invokeMethodAsync("OnTagBoxKeyUp",e.keyCode===r.Key.Up);else if(o&&l.keyUp(e)){if(e.keyCode===r.Key.Backspace&&""===e.target.dataset.previousValue)return;k(e,t,n,s)}return!1}(e,n,f,t.filteringEnabled,t.virtualScrollingEnabled)},C=function(e){return function(e,t){p(e.target)}(e)},T=function(e){return v(e,n)},K=function(e){return m(e.target)},D=function(e){return y(i)},I=function(e){return u.onOutsideClick(e,d,(function(){o.elementIsInDOM(d)||c.disposeEvents(d);var e=document.activeElement===i,t=i.dataset.timerId>0,s=f&&u.isDropDownVisible(f);y(i),(e||t||s)&&b(n,i,!0)}))};return s.attachEventToElement(i,"keydown",j),s.attachEventToElement(i,"keyup",h),s.attachEventToElement(i,"focus",C),s.attachEventToElement(i,"blur",T),s.attachEventToElement(i,"input",K),s.attachEventToElement(d,"mousedown",D),s.attachEventToElement(document,a.TouchUIHelper.touchMouseDownEventName,I),c.registerDisposableEvents(d,(function(){s.detachEventFromElement(i,"keydown",j),s.detachEventFromElement(i,"keyup",h),s.detachEventFromElement(i,"focus",C),s.detachEventFromElement(i,"blur",T),s.detachEventFromElement(i,"input",K),s.detachEventFromElement(d,"mousedown",D),s.detachEventFromElement(document,a.TouchUIHelper.touchMouseDownEventName,I)})),m(i),Promise.resolve("ok")}}function T(e){if(e=o.ensureElement(e))return c.disposeEvents(e),Promise.resolve("ok")}n.default={init:C,dispose:T,prepareInputIfFocused:j,scrollToFocusedItem:i,fitInputWidth:m,forceInputValue:f},n.dispose=T,n.fitInputWidth=m,n.forceInputValue=f,n.init=C,n.prepareInputIfFocused=j,n.scrollToFocusedItem=i}),["cjs-chunk-c5286524.js","cjs-chunk-0da7e9be.js","cjs-dom-utils-d155391a.js","cjs-chunk-ad620f3e.js","cjs-chunk-d0f692d0.js","cjs-chunk-96905969.js","cjs-chunk-e9e6b6d6.js","cjs-dropdowns-95123063.js","cjs-grid-0655d36f.js","cjs-grid-column-resize-0dd4fbf2.js","cjs-dx-style-helper-04d43993.js","cjs-chunk-0e3fca0a.js","cjs-focus-utils-48b0e7fd.js","cjs-chunk-b8f9edc9.js","cjs-dragAndDropUnit-f07c4799.js","cjs-chunk-f0a094eb.js"]);
