import"./esm-chunk-d81494b9.js";import"./esm-chunk-a2731447.js";import{changeDom as t,ensureElement as e,getParentByClassName as n,addClassNameToElement as o,subscribeElementContentSize as i,isRemovedFromDOM as s,RequestAnimationFrame as r,elementIsInDOM as c}from"./esm-dom-utils-aa188e06.js";import{a as l,d as u}from"./esm-chunk-9c16a801.js";import{d as a,r as d}from"./esm-chunk-208505fb.js";import{T as h}from"./esm-chunk-1b6abd73.js";import{K as f}from"./esm-chunk-808bf349.js";import{scrollToFocusedItem as m}from"./esm-grid-e30d4183.js";import"./esm-grid-column-resize-3c803caa.js";import"./esm-dx-style-helper-4f7c588c.js";import{s as p,g,a as w}from"./esm-chunk-365cd234.js";import{initFocusHidingEvents as v}from"./esm-focus-utils-70e3961c.js";import{E as y}from"./esm-chunk-d4fc448c.js";import{getClientRectWithMargins as b,getClientRect as x,PointBlz as C,geometry as E}from"./esm-dragAndDropUnit-d3f27dbf.js";const S=document.body,T=new window.WeakMap,P=new Map,R={subtree:!0,childList:!0},D=new window.MutationObserver((function(t){t.forEach(L)}));function L(t){t.removedNodes.forEach(M)}function M(t){const e=P.get(t);P.delete(t)&&(0===P.size&&D.disconnect(),e())}class k{constructor(t,e){this.element=t,this.getClientRect=e}get leftTopCorner(){const t=this;return new O(this.element,(function(e){return t.getClientRect(e)}),(function(t){return{x:0,y:0}}))}get leftBottomCorner(){const t=this;return new O(this.element,(function(e){const n=t.getClientRect(e);return new C(n.x,n.bottom)}),(function(e){const n=t.getClientRect(e);return new C(0,-n.height)}))}get rightTopCorner(){const t=this;return new O(this.element,(function(e){const n=t.getClientRect(e);return new C(n.right,n.y)}),(function(e){const n=t.getClientRect(e);return new C(-n.width,0)}))}get rightBottomCorner(){const t=this;return new O(this.element,(function(e){const n=t.getClientRect(e);return new C(n.right,n.bottom)}),(function(e){const n=t.getClientRect(e);return new C(-n.width,-n.height)}))}get center(){const t=this;return new O(this.element,(function(e){return t.getClientRect(e).center}))}}class O{constructor(t,e,n){this.element=t,this.getLocation=e,this.getDelta=n}get location(){return this.getLocation(this.element)}get delta(){return this.getDelta(this.element)}anchorTo(t){return new B(this,t)}}class B{constructor(t,e){this.point=t,this.anchor=e,this.events=new y(this);const n=[];if(n.push([window,"resize"]),n.push([window,"scroll"]),this.containers=function(t,e){const n=[];for(;null!==t&&"BODY"!==t.tagName&&"#document"!==t.nodeName;)e(t)&&n.push(t),t=t.parentNode;return 0===n.length?null:n}(this.anchor.element.parentNode,this.isElementScrollable),this.containers&&this.containers.forEach((function(t){n.push([t,"scroll"])})),this.checkInCasesInt(n),"undefined"!=typeof ResizeObserver){const t=this;this.resizeObserver=new window.ResizeObserver((function(){t.update()})),this.resizeObserver.observe(this.anchor.element),this.resizeObserver.observe(this.point.element)}else this.resizeObserver=null;this.notStaticParent=this.point.element.offsetParent,this.notStaticParent=null!==this.notStaticParent?this.notStaticParent:{x:0,y:0,scrollTop:0,scrollLeft:0},this.notStaticParent=this.isStatic(this.notStaticParent)?window:this.notStaticParent,this.update()}isElementScrollable(t){const e=window.getComputedStyle(t);return"static"===e.position&&("scroll"===e["overflow-x"]||"scroll"===e["overflow-y"]||"auto"===e["overflow-x"]||"auto"===e["overflow-y"])}isStatic(t){if(!t.style)return!1;return"static"===window.getComputedStyle(t).position}update(){const e=this.notStaticParent===window?{x:window.scrollX,y:window.scrollY}:{x:this.notStaticParent.scrollLeft,y:this.notStaticParent.scrollTop},n=E(this.anchor.location,"+",this.point.delta,"-",this.notStaticParent,"+",e),o=this.point.element;t((function(){o.style.left=n.x+"px",o.style.top=n.y+"px"}))}checkInCasesInt(t){const e=this.events;t.forEach((function(t){e.attachEvent(t[0],t[1],(function(t){this.update()}))}))}checkInCases(){return this.containers?(this.checkInCasesInt(Array.from(arguments)),this.update(),this):this}dispose(){this.events&&(this.events.dispose(),this.events=null,this.dropDownStartPos=null,this.containers=null,this.resizeObserver&&this.resizeObserver.disconnect())}}function N(t){return new k(t,b)}function z(t){return new k(t,x)}const I={Popup:0,Modal:1},H=window.console,j=1,W=2,F=new WeakMap;let q;function A(t){let n=(t=e(t)).querySelector("div.dxbs-dm.dropdown-menu");return n||(n=t.querySelector("div.dxgvCSD.dxbs-grid-vsd")),n}function Y(t,n,o,i){return new Promise((function(o,s){let r=A(t);return r=e(r),r?(0===i&&(r.style.minWidth=t.offsetWidth+"px"),2===i&&(r.style.width=t.offsetWidth+"px"),_(t,r,n),m(r),o()):o()}))}function _(e,n,o,i){F.has(e)&&(F.get(e).disconnect(),F.delete(e));const s=n.offsetParent;if(!s)return t((function(){n.style.visibility=""})),void 0;const r=s.getBoundingClientRect(),c=e.getBoundingClientRect(),l=c.top-r.top,u=r.bottom-c.bottom;let a;const d=window.getComputedStyle(n),h=n.offsetHeight+Math.max(parseFloat(d.marginTop),0)+Math.max(parseFloat(d.marginBottom),0)+8;switch(o){case W:a=!0,r.top+(l-h)<=0&&r.top+l+e.offsetHeight+h+window.pageYOffset<=Math.max(document.body.scrollHeight,window.innerHeight)&&(a=!1);break;case j:default:a=!1,r.bottom-(u-h)>=window.innerHeight&&r.top+l-h+window.pageYOffset>=0&&(a=!0)}const f=c.left+n.offsetWidth+8>=document.body.clientWidth;t((function(){q&&q.dispose(),q=a?f?N(n).rightBottomCorner.anchorTo(z(e).rightTopCorner):N(n).leftBottomCorner.anchorTo(z(e).leftTopCorner):f?N(n).rightTopCorner.anchorTo(z(e).rightBottomCorner):N(n).leftTopCorner.anchorTo(z(e).leftBottomCorner),n.style.visibility=""}))}const V=[{value:0,text:""},{value:1,text:"above"},{value:2,text:"below"},{value:4,text:"top-sides"},{value:8,text:"bottom-sides"},{value:16,text:"outside-left"},{value:32,text:"outside-right"},{value:64,text:"left-sides"},{value:128,text:"right-sides"}];function G(t,e,n){let o=t.target;for(;o;){if(o===e)return!1;o=o.parentElement}n&&n()}function U(t){return"hidden"!==t.style.visibility||t.classList.contains("visually-hidden")}const K="a[href], input:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex='-1'])";function X(t,e){if(n(t.srcElement,"modal-header"))return!0;const o=n(t.srcElement,"column-chooser-elements-container"),i=n(o,"modal-body");if(!o||!i)return!1;if(i.clientHeight>=o.clientHeight)return!0;const s=t.touches[0].pageY-e.touches[0].pageY,r=function(t){return t.getBoundingClientRect().top},c=o.querySelector(".column-chooser-element-container");if(c&&r(c)===r(i)&&s>=0&&t.cancelable)return!0;const l=function(t){return Math.round(t.getBoundingClientRect().bottom)},u=o.querySelector(".column-chooser-element-container:last-child");return!!(u&&l(u)===l(i)&&s<=0&&t.cancelable)||void 0}function J(t,e,o){if(o!==I.Modal)return;const i=t.getBoundingClientRect(),s=e.getBoundingClientRect(),r=n(t,"dxbs-gridview"),c=r&&r.querySelector("thead");if(!c)return;const l=c.getBoundingClientRect(),u=(l||i).bottom;return u>.5*e.clientHeight?u-i.top<.5*e.clientHeight?u-s.top-.5*e.clientHeight:i.top-s.top-2:void 0}function Q(t){const e=t.getElementsByClassName("modal-body")[0];e.style.width=e.offsetWidth+"px",e.style.height=e.offsetHeight+"px"}const Z={init:function(t,n,o,i){if(t=e(t),n=e(n),o=e(o),t){if(a(t),o){const e=function(e){return G(e,t,(function(){c(t)||a(t);const e=document.activeElement===n,s=o&&U(o);(e||s)&&i.invokeMethodAsync("OnDropDownLostFocus",n.value).catch(t=>H.error(t))}))};l(document,h.touchMouseDownEventName,e),d(t,(function(){u(document,h.touchMouseDownEventName,e)}))}return Promise.resolve("ok")}},dispose:function(t){return(t=e(t))&&(clearTimeout(t._closeTimerId),a(t)),q&&q.dispose(),Promise.resolve("ok")},showAdaptiveDropdown:function(c,l,u,a,d,m){c=e(c);const y=n(c,u);if(!y)return;const b=document.documentElement,x=document.documentElement.style.overflow,C=document.body.style.overflow,E=document.body.scroll,L=l.dialogType,M=l.alignment,k=L===I.Modal;L===I.Popup?0===M?_(y,c,l.dropDownDirection):p(c,y,function(t){let e="";return V.forEach(n=>{0!=(n.value&t)&&(e&&(e+=" "),e+=n.text)}),e}(M)):(c.style.paddingRight=g(c)+w()+"px",document.body.style.paddingRight=parseFloat(g(document.body))+w(),document.body.classList.add("modal-open"));let O=!1;function B(t){(!c.contains(t.srcElement)||L===I.Modal&&c===t.srcElement)&&z(c)}function N(t){b.removeEventListener("focusin",N),null===t.relatedTarget&&t.target&&c&&c.contains(t.target)&&t.target.focus()}function z(t){if(!O){if(O=!0,s(t))return;t._closeTimerId=setTimeout((function(){j(),d.invokeMethodAsync("CloseDialog").catch((function(e){s(t)||H.error(e)}))}),200)}}function j(){b.removeEventListener(h.touchMouseDownEventName,B),window.removeEventListener("resize",F),q(L,!1),c=null}function W(){const t=c.querySelector(K);t&&t.focus()}function F(){if(!n(c,"modal-dialog-owner"))return;const t=c.firstElementChild.classList,e=J(y,b,L),o=b.clientHeight>b.clientWidth?"topVertical":"topHorizontal";r((function(){t.contains("topVertical")||t.contains("topHorizontal")?t.remove("transition"):t.add("transition"),e&&(b.scrollTop=e),t.remove("topVertical","topHorizontal"),t.add(o)}))}function q(t,e){if(t!==I.Modal)return;let n,o,i;e?(n="hidden",o="hidden",i="no"):(n=x,o=C,i=E),document.documentElement.style.overflow=n,document.body.style.overflow=o,document.body.scroll=i}return b.addEventListener(h.touchMouseDownEventName,B),c.addEventListener("keydown",(function(t){t.keyCode===f.Esc&&z(c)})),c.addEventListener("focusout",(function(t){O||(null===t.relatedTarget||c.contains(t.relatedTarget)?null===t.relatedTarget&&b.addEventListener("focusin",N):!function(t){const e=c.compareDocumentPosition(t);e&window.Node.DOCUMENT_POSITION_PRECEDING?!function(){const t=function(t){const e=t.querySelectorAll(K);return e[e.length-1]}(c);t&&t.focus()}():e&window.Node.DOCUMENT_POSITION_FOLLOWING&&W()}(t.relatedTarget))})),function(t,e,n,o){t&&e.addEventListener("touchmove",t=>{t.srcElement===e&&t.preventDefault()});if(o===I.Modal){let t=null;n.addEventListener("touchstart",e=>{t=e}),n.addEventListener("touchmove",e=>{X(e,t)&&e.preventDefault(),t=e})}}(k,c,y,L),function(t){if(T.has(t))return T.get(t);const e=new Promise((function(e){0===P.size&&D.observe(S,R);P.set(t,()=>{t=null,e()})}));return T.set(t,e),e}(c).then(()=>{L===I.Modal&&(document.body.classList.remove("modal-open"),document.body.style.paddingRight=parseFloat(g(document.body))-w()),j(),c=null}),q(L,!0),L===I.Popup?t((function(){c&&(l.showFocus||(o(c,"dxbs-focus-hidden"),v(c)),W(),function(t,e){const o=n(t,e);if(t&&o){const e=n(t,"dx-menu-bar");e&&e.classList.contains("vertical")||(i(o,s),s())}function s(){const e=t.getBoundingClientRect(),i=o.getBoundingClientRect(),s=parseFloat(t.style["margin-left"]);if(s&&(e.x=e.x-s),e.x+e.width>i.x+i.width&&i.width>e.width){const o=n(t.parentNode,"dropdown-menu");if(o){const n=o.getBoundingClientRect(),i=parseFloat(window.getComputedStyle(o,null).getPropertyValue("border-right-width"));t.style["margin-left"]="-"+(e.x+e.width-n.x-i)+"px"}else t.style["margin-left"]="-"+(e.x+e.width-i.x-i.width)+"px"}else s&&(t.style["margin-left"]="")}}(c,m))})):(window.addEventListener("resize",F),F()),Promise.resolve()},updateGridDropDown:Y,setInlineModalSize:Q};export default Z;export{I as DialogType,A as getDropDownElement,U as isDropDownVisible,G as onOutsideClick,J as scrollDropDown,Q as setInlineModalSize,_ as setPositionOfDropDown,X as shouldPreventTouchMove,Y as updateGridDropDown};
