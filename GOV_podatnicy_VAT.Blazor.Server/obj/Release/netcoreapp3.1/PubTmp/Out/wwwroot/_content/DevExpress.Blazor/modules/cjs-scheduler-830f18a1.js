DxBlazorInternal.define("cjs-scheduler-830f18a1.js",(function(t,e,n){var i=t("./cjs-chunk-c5286524.js");t("./cjs-chunk-0da7e9be.js");var o=t("./cjs-dom-utils-d155391a.js"),r=t("./cjs-chunk-ad620f3e.js"),a=t("./cjs-chunk-d0f692d0.js"),s=t("./cjs-chunk-96905969.js"),l=t("./cjs-chunk-a0f3c48f.js"),u={showCallout:!0,showTitle:!1,position:"right",className:"",classNames:{sysClassName:"dx-hint",contentElementClassName:"dxh-content",calloutElementClassName:"arrow",titleElementClassName:"dxh-title"},allowFlip:!0,allowShift:!0,offset:4};function c(t,e,n){n||(n=u),e.style.visibility="hidden",e.style.display="block",function(t,e){var n=o.getAbsoluteX(t),i=o.getAbsoluteY(t);o.setAbsoluteX(e,n),o.setAbsoluteY(e,i)}(t,e),f.updatePosition(t,e,n),e.style.visibility=""}var f=function(){function t(t){return"bs-popover-"+t.toLowerCase()}function e(e,n,i){var r=d.set(e,n,i);!function(e,n,i){var r=t(n),a=t(i);o.removeClassNameFromElement(e,r),o.addClassNameToElement(e,a)}(n,i.position,r.flipPosition),function(t,e,n){var i=f.getCalloutElement(t,e.classNames);if(i){var o,r=!("left"===(o=e.position)||"right"===o),a=r?t.offsetWidth:t.offsetHeight,s=a/2-(r?n.x:n.y);s=function(t,e){var n={min:15,max:e-15},i=t<n.min,o=t>n.max;o&&(t=n.max);i&&(t=n.min);t+="px",i&&o&&(t="50%");return t}(s,a),i.style[r?"left":"top"]=s}}(n,i,r.shift)}return{getCalloutElement:function(t,e){return t?t.getElementsByClassName(e.calloutElementClassName)[0]:null},updatePosition:function(t,n,i){var o=10,r=!1;do{var a={w:n.offsetWidth,h:n.offsetHeight};e(t,n,i),r=a.w!==n.offsetWidth||a.h!==n.offsetHeight,o--}while(r&&o>0)}}}();function p(t,e,n){this.targetElement=t,this.hintElement=e,this.options=n,this.position=n.position,this.calloutSize={width:0,height:0};var r=f.getCalloutElement(e,n.classNames);function a(t,e,n,r,a){this.location=0,this.screen={min:0,max:0},this.screen.min=a?o.getDocumentScrollLeft():o.getDocumentScrollTop();var s=i.Browser.WebKitTouchUI?window.innerWidth:o.getDocumentClientWidth();this.screen.max=this.screen.min+(a?s:o.getDocumentClientHeight()),this.target={min:0,max:0},this.target.min=a?o.getAbsoluteX(t):o.getAbsoluteY(t),this.target.max=this.target.min+(a?t.offsetWidth:t.offsetHeight),this.hintSize=a?e.offsetWidth:e.offsetHeight}r&&(this.calloutSize.width=r.offsetWidth,this.calloutSize.height=r.offsetHeight),this.horizontal=new a(t,e,n,this.calloutSize,!0),this.vertical=new a(t,e,n,this.calloutSize,!1)}var d=function(){function t(t,i,o){var r=new p(t,i,o),a=e(r.position);o.allowFlip&&(a.horizontal?r.position=h.flipPositionIfRequired(r.horizontal,r.position):a.vertical&&(r.position=h.flipPositionIfRequired(r.vertical,r.position)));var s=function(t){return n(t.position,{width:t.horizontal.target.max-t.horizontal.target.min,height:t.vertical.target.max-t.vertical.target.min},{width:t.horizontal.hintSize,height:t.vertical.hintSize},t.calloutSize)}(r),l={x:0,y:0};return o.allowShift&&(l.x=m.getShift(r.horizontal,a,s.x,0,!0),l.y=m.getShift(r.vertical,a,s.y,0,!1)),{location:{x:s.x+l.x,y:s.y+l.y},shift:l,flipPosition:r.position}}function e(t){return{vertical:"bottom"===t||"top"===t,horizontal:"right"===t||"left"===t}}function n(t,e,n,i){var o={x:0,y:0};return"top"===t?o.y-=n.height+i.height:"bottom"===t?o.y+=e.height+i.height:"left"===t?o.x-=n.width+i.width:"right"===t&&(o.x+=e.width+i.width),"top"!==t&&"bottom"!==t||(o.x+=e.width/2-n.width/2),"left"!==t&&"right"!==t||(o.y+=e.height/2-n.height/2),o}return{set:function(n,i,r){var a=t(n,i,r),s={x:0,y:0},l=e(a.flipPosition);l.horizontal&&(s.x=r.offset*a.location.x/Math.abs(a.location.x)),l.vertical&&(s.y=r.offset*a.location.y/Math.abs(a.location.y));var u=void 0!==r.x?r.x:o.getAbsoluteX(n)+a.location.x+s.x,c=void 0!==r.y?r.y:o.getAbsoluteY(n)+a.location.y+s.y;return o.setAbsoluteX(i,u),o.setAbsoluteY(i,c),{flipPosition:a.flipPosition,shift:{x:a.shift.x,y:a.shift.y}}},getNotShiftedOffsetCore:n}}(),h={flipPositionIfRequired:function(t,e){return this.ensureFlipCore(t.screen,t.target,t.hintSize,e)},getFlipPosition:function(t){return"bottom"===t?"top":"top"===t?"bottom":"right"===t?"left":"left"===t?"right":t},ensureFlipCore:function(t,e,n,i){var o="bottom"===i||"right"===i,r="top"===i||"left"===i,a=e.min-n-t.min;e.min-n>t.max&&(a=-1);var s=t.max-(e.max+n);e.max+n<t.min&&(s=-1);var l=a>=0,u=s>=0;return l||u?r&&l||o&&u?i:r&&!l&&a<s||o&&!u&&s<a?this.getFlipPosition(i):i:i}},m={getShift:function(t,e,n,i,o){var r=0;return!(e.horizontal&&o||e.vertical&&!o)&&(r=this.getShiftCore(t.screen,t.target,t.hintSize,n,i)),r},getShiftCore:function(t,e,n,i,o){if(e.max<t.min+o||e.min>t.max-o)return 0;var r=e.min+i,a=e.min+i+n,s=r<t.min&&a>t.min,l=a>t.max&&r<t.max;return s&&!l?t.min-r:l&&!s?t.max-n-r:0}},v="none",g="drag",y="resizeTop",C="resizeBottom",T="resizeSelection";function A(t,e,n,i,f,p){if(t&&(t.appointmentToolTipElement&&a.disposeEvents(t.appointmentToolTipElement),t.dropDownDateNavigatorElement&&a.disposeEvents(t.dropDownDateNavigatorElement),t.dropDownResourceNavigatorElement&&a.disposeEvents(t.dropDownResourceNavigatorElement),t.elementContentSizeSubscription&&o.unsubscribeElement(t.elementContentSizeSubscription),W.unsubscribe(t)),t=o.ensureElement(t)){if(t.dropDownDateNavigatorElement=o.ensureElement(e),t.dropDownResourceNavigatorElement=o.ensureElement(n),t.appointmentToolTipElement=o.ensureElement(i),t.appointmentEditForm=o.ensureElement(f),t.mouseMoveHandlerState||(t.mouseMoveHandlerState=v),t.appointmentToolTipElement){var d=E.getSelectedAppointment(t);d&&setTimeout((function(){var e=function(t,e,n){var i=t.getBoundingClientRect(),r=n.getBoundingClientRect();u.position=o.elementHasCssClass(e,"dxsc-tooltip")?i.right-r.right>370?"right":r.left-i.left>370?"left":r.top-i.top>370?"top":"bottom":i.right-r.right>450?"right":r.left-i.left>450?"left":"auto";return u}(t,t.appointmentToolTipElement,d);c(d,t.appointmentToolTipElement,e)}),0)}t.hDateTimeViewLayout=new H(t,"dxbs-sc-all-day-area"),t.vDateTimeViewLayout=new H(t,"dxbs-sc-time-cell");var h=E.getHorizontalAppointments(t),m=E.getVerticalAppointments(t);if(t.appointmentInfos=L.createItems(h,t.hDateTimeViewLayout,t.vDateTimeViewLayout),t.appointmentInfos=t.appointmentInfos.concat(L.createItems(m,t.hDateTimeViewLayout,t.vDateTimeViewLayout)),t.skipCalculateAllAppointments){var A=function(t){for(var e=[],n=0,i=void 0;i=t[n];n++)o.elementHasCssClass(i,"dxbs-apt-edited")&&e.push(i);return e};return h=A(h),m=A(m),I(h,m,!1),Promise.resolve("ok")}return!function(t,e,n,i,l){s.LongTabEventHelper.attachEventToElement(t,"mousedown",q),s.LongTabEventHelper.attachEventToElement(t,"mouseup",B),s.LongTabEventHelper.attachEventToElement(t,"mousemove",V),s.LongTabEventHelper.attachLongTabEventToElement(t,K),s.LongTabEventHelper.attachEventToElement(t,"touchstart",R),s.LongTabEventHelper.attachEventToElement(t,"touchmove",U),s.LongTabEventHelper.attachEventToElement(t,"touchend",Y),e&&(e.dateNavigatorLostFocusHandler=function(t){return j(t,e,"OnDropDownDateNavigatorLostFocus",l)},r.attachEventToElement(document,s.TouchUIHelper.touchMouseDownEventName,e.dateNavigatorLostFocusHandler),a.registerDisposableEvents(e,(function(){r.detachEventFromElement(document,s.TouchUIHelper.touchMouseDownEventName,e.dateNavigatorLostFocusHandler)})));n&&(n.resourceNavigatorLostFocusHandler=function(t){return j(t,n,"OnDropDownResourceNavigatorLostFocus",l)},r.attachEventToElement(document,s.TouchUIHelper.touchMouseDownEventName,n.resourceNavigatorLostFocusHandler),a.registerDisposableEvents(n,(function(){r.detachEventFromElement(document,s.TouchUIHelper.touchMouseDownEventName,n.resourceNavigatorLostFocusHandler)})));i&&(i.toolTipLostFocusHandler=function(t){var e=E.getAppointmentContainer(t.srcElement);if(!e||!x(e))return j(t,i,"OnAppointmentToolTipLostFocus",l)},r.attachEventToElement(document,s.TouchUIHelper.touchMouseDownEventName,i.toolTipLostFocusHandler),a.registerDisposableEvents(i,(function(){r.detachEventFromElement(document,s.TouchUIHelper.touchMouseDownEventName,i.toolTipLostFocusHandler)})));t.elementContentSizeSubscription=o.subscribeElementContentSize(t,S),W.subscribe(t,D)}(t,t.dropDownDateNavigatorElement,t.dropDownResourceNavigatorElement,t.appointmentToolTipElement,p),Promise.resolve("ok")}function S(){I(h,m,!0),D()}function I(e,n,i){t.hDateTimeViewLayout.clearObjects(),N(t.hDateTimeViewLayout.getTimeCells(),e),N(t.vDateTimeViewLayout.getTimeCells(),n),function(t){for(var e=0,n=void 0;n=t[e];e++)k(n)}(e),i&&function(t){for(var e=0,n=function(t,n){var i=0;n.intersects.forEach((function(t){i+=t.offsetHeight})),i>e&&(e=i),n.lastAppointmentTop=void 0},i=0,o=void 0;o=t[i];i++)n(0,o);t[0].style.height=e+15+"px"}(t.hDateTimeViewLayout.getTimeCells()),function(t){for(var e=0,n=void 0;n=t[e];e++)F(n)}(n)}function D(){!function(t,e){var n=(a=(new Date).getTime(),new Date(a)),i=(r=n,new Date(r.getFullYear(),r.getMonth(),r.getDate())),o=function(t){for(var e=[],n=E.getTimeMarkerWrappers(t),i=0,o=void 0;o=n[i];i++){var r={wrapper:o,timeMarker:E.getTimeMarkerContainer(o),timeIndicator:E.getTimeIndicatorContainer(o),firstContainerIndex:E.Attr.getFirstContainerIndex(o),lastContainerIndex:E.Attr.getLastContainerIndex(o),startFromContainer:i>0};e.push(r)}return e}(t);var r;var a;if(0===o.length)return;for(var s=0,l=void 0;l=o[s];s++)P(l,t,e,i,n)}(t,t.vDateTimeViewLayout.getTimeCells())}function w(t){t&&p.invokeMethodAsync("OnAppointmentSelect",E.Attr.getAppointmentKey(t))}function O(e){return t.appointmentInfos.filter((function(t){return t.id===e}))[0]}function q(e){if(s.hasUnforcedFunction("TouchStart")||2===e.button)return 2===e.button&&r.preventEventAndBubble(e),void 0;var n=E.getAppointmentContainer(e.srcElement);n?(x(n)||w(n),o.elementHasCssClass(e.srcElement,"dxsc-top-handle")||function(t){return o.elementHasCssClass(t,"dxsc-left-handle")}(e.srcElement)?t.mouseMoveHandlerState=y:function(t){return o.elementHasCssClass(t,"dxsc-bottom-handle")}(e.srcElement)||function(t){return o.elementHasCssClass(t,"dxsc-right-handle")}(e.srcElement)?t.mouseMoveHandlerState=C:s.unforcedFunctionCall((function(){t.mouseMoveHandlerState=g}),"drag",50,!0)):t.appointmentToolTipElement||b(e.srcElement)&&(t.cellSelectionHelper=new z(t,p),t.cellSelectionHelper.start(e.srcElement),t.mouseMoveHandlerState=T)}function V(e){t.mouseMoveHandlerState!==v&&(t.throttledDrag||(t.throttledDrag=l.Timer.throttle((function(e){var n=t.vDateTimeViewLayout.findCellByPos(e.clientX,e.clientY)||t.hDateTimeViewLayout.findCellByPos(e.clientX,e.clientY);if(n)if(t.mouseMoveHandlerState===T&&t.cellSelectionHelper)t.cellSelectionHelper.resizeTo(n);else{var i=function(){var e=E.getSelectedAppointment(t);return e?O(E.Attr.getAppointmentKey(e)):null}();i&&(t.mouseMoveHandlerState!==g&&t.mouseMoveHandlerState!==y&&t.mouseMoveHandlerState!==C||(t.dragHelper||(t.dragHelper=new M(t,p),t.dragHelper.dragStart(i,n)),t.mouseMoveHandlerState===g?t.dragHelper.drag(n):t.dragHelper.resize(n,t.mouseMoveHandlerState===y)))}}),20)),t.throttledDrag(e))}function B(e){if(s.hasUnforcedFunction("TouchEnd")||2===e.button)return 2===e.button&&r.preventEventAndBubble(e),void 0;t.dragHelper||t.cellSelectionHelper?t.dragHelper?(t.dragHelper.dragEnd(),t.dragHelper=null):t.cellSelectionHelper&&(t.cellSelectionHelper.end(),t.cellSelectionHelper=null):E.getAppointmentContainer(e.srcElement)&&!s.hasUnforcedFunction("skipToolTip")&&(p.invokeMethodAsync("ShowAppointmentToolTip"),s.unforcedFunctionCall((function(){}),"skipToolTip",300)),s.clearUnforcedFunctionByKey("drag"),t.mouseMoveHandlerState=v}function R(t){s.unforcedFunctionCall((function(){}),"TouchStart",300,!0),w(E.getAppointmentContainer(t.srcElement))}function K(e){var n=E.getAppointmentContainer(e.srcElement);if(n){var i=e.touches[0].clientX,o=e.touches[0].clientY,r=t.vDateTimeViewLayout.findCellByPos(i,o)||t.hDateTimeViewLayout.findCellByPos(i,o),a=O(E.Attr.getAppointmentKey(n));t.dragHelper=new M(t,p),t.dragHelper.dragStart(a,r)}else b(e.srcElement)&&!t.appointmentToolTipElement&&(t.cellSelectionHelper=new z(t,p),t.cellSelectionHelper.start(e.srcElement))}function U(e){if(t.dragHelper||t.cellSelectionHelper){var n=e.touches[0].clientX,i=e.touches[0].clientY,o=t.vDateTimeViewLayout.findCellByPos(n,i)||t.hDateTimeViewLayout.findCellByPos(n,i);o&&(t.dragHelper?t.dragHelper.drag(o):t.cellSelectionHelper&&t.cellSelectionHelper.resizeTo(o)),r.preventEventAndBubble(e)}}function Y(t){B(t),s.unforcedFunctionCall((function(){}),"TouchEnd",300,!0)}}var E={getVerticalAppointmentsContainer:function(t){return t.querySelectorAll(".dxbs-sc-vertical-apts")[0]},getHorizontalAppointmentsContainer:function(t){return t.querySelectorAll(".dxbs-sc-horizontal-apts")[0]},getHorizontalAppointments:function(t){return t.querySelectorAll(".dxbs-sc-horizontal-apt")},getVerticalAppointments:function(t){return t.querySelectorAll(".dxbs-sc-vertical-apt")},getTimeMarkerWrappers:function(t){return t.querySelectorAll(".dxbs-sc-time-marker-wrapper")},getTimeMarkerContainer:function(t){return t.querySelectorAll(".dxbs-sc-time-marker")[0]},getTimeIndicatorContainer:function(t){return t.querySelectorAll(".dxbs-sc-time-indicator")[0]},getAppointmentContainer:function(t){return o.getParentByClassName(t,"dxbs-sc-apt")},getSelectedAppointment:function(t){return t.querySelectorAll(".dxbs-apt-selected")[0]},getEditedAppointment:function(t){return t.querySelectorAll(".dxbs-apt-edited")[0]},getCellSelectionContainer:function(t){return t.querySelectorAll(".dxsc-cell-selection")[0]},setElementDisplay:function(t,e){t.style.display=e?"":"none"},Attr:{getContainerIndex:function(t){return parseInt(t.getAttribute("data-container-index"))},getFirstContainerIndex:function(t){return parseInt(t.getAttribute("data-first-container-index"))},getLastContainerIndex:function(t){return parseInt(t.getAttribute("data-last-container-index"))},getAppointmentFirstCellIndex:function(t){return parseInt(t.getAttribute("data-first-cell-index"))},getAppointmentLastCellIndex:function(t){return parseInt(t.getAttribute("data-last-cell-index"))},getAppointmentColumnsCount:function(t){return parseInt(t.getAttribute("data-columns-count"))},setAppointmentColumnsCount:function(t,e){t.setAttribute("data-columns-count",e)},getAppointmentColumn:function(t){return parseInt(t.getAttribute("data-column"))},setAppointmentColumn:function(t,e){t.setAttribute("data-column",e)},getAppointmentKey:function(t){return t.getAttribute("data-key")},getStart:function(t){var e=new Date(parseInt(t.getAttribute("data-start"))),n=e.getTime()+6e4*e.getTimezoneOffset()+0;return new Date(n)},getEnd:function(t){var e=new Date(parseInt(t.getAttribute("data-end"))),n=e.getTime()+6e4*e.getTimezoneOffset()+0;return new Date(n)},getDuration:function(t){return parseInt(t.getAttribute("data-duration"))},getAllDay:function(t){return""===t.getAttribute("data-allday")},getResourceKey:function(t){return t.getAttribute("data-resource")}}};function b(t){return o.elementHasCssClass(t,"dxbs-sc-all-day-area")||o.elementHasCssClass(t,"dxbs-sc-time-cell")}function S(t){return o.elementHasCssClass(t,"dxbs-sc-all-day-area")}function x(t){return o.elementHasCssClass(t,"dxbs-apt-selected")}function I(t){var e=E.Attr.getStart(t);return w(e,E.Attr.getEnd(t)-e)}function D(t){return E.Attr.getResourceKey(t)}function w(t,e){return{start:t,duration:e,isLongerOrEqualDay:e>=O.DaySpan}}var H=function(t,e){this.element=t,this.cellClassName=e};H.prototype={getContainers:function(){if(!this.containers){var t=this.element.querySelectorAll("."+this.cellClassName);this.containers={};for(var e=0,n=void 0;n=t[e];e++){var i=E.Attr.getContainerIndex(n);this.containers[i]||(this.containers[i]={cells:[]}),this.containers[i].cells.push(n)}}return this.containers},clearObjects:function(){for(var t=this.getTimeCells(),e=0,n=void 0;n=t[e];e++)this.clearObject(n)},clearObject:function(t){t.lastAppointmentTop=void 0},getTimeCells:function(){return this.timeCells||(this.timeCells=this.element.querySelectorAll("."+this.cellClassName)),this.timeCells},findCell:function(t){var e=this.getContainers();for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n))for(var i=0,o=void 0;o=e[n].cells[i];i++){var r=E.Attr.getStart(o),a=E.Attr.getEnd(o);if(r-t<=0&&t-a<0)return o}return null},findStartCell:function(t){var e=this.getContainers();for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n))for(var i=0,o=void 0;o=e[n].cells[i];i++){if(t-E.Attr.getStart(o)<=0)return o}return null},findEndCell:function(t){var e=this.getContainers();for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n))for(var i=0,o=void 0;o=e[n].cells[i];i++){if(t-E.Attr.getEnd(o)<=0)return o}return null},findCellByPos:function(t,e){for(var n=this.getTimeCells(),i=0,o=void 0;o=n[i];i++){var r=o.getBoundingClientRect();if(r.top<=e&&e<r.bottom&&r.left<=t&&t<r.right)return o}}};var L=function(t,e,n,i){this.id=t,this.views=e,this.interval=n,this.allDay=E.Attr.getAllDay(e[0]),this.resourceKey=D(e[0]),this.sourceView=null,this.aptCont=null,this.dateTimeViewLayout=i,this.init()};L.prototype={init:function(){this.sourceView=this.views[0].cloneNode(!0),this.aptCont=this.views[0].parentElement},getStart:function(){return this.interval.start},getDuration:function(){return this.interval.duration},getEnd:function(){return O.dateIncreaseWithUtcOffset(this.getStart(),this.getDuration())},clearViews:function(){this.views.forEach((function(t){t.parentElement.removeChild(t)})),this.views=[]}},L.createItem=function(t,e,n,i){var o=function(t){return w(E.Attr.getStart(t[0]),E.Attr.getDuration(t[0]))}(e);return new L(t,e,o,o.duration>=O.DaySpan?n:i)},L.createItems=function(t,e,n){for(var i={},o=0,r=void 0;r=t[o];o++){var a=E.Attr.getAppointmentKey(r);i[a]||(i[a]=[]),i[a].push(r)}var s=[];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&s.push(L.createItem(l,i[l],e,n));return s};var O={HalfHourSpan:18e5,DaySpan:864e5,dateSubsWithTimezone:function(t,e){return t-e+6e4*(e.getTimezoneOffset()-t.getTimezoneOffset())},truncToDate:function(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())},calculateDaysDifference:function(t,e){var n=O.truncToDate(t),i=O.truncToDate(e);return O.dateSubsWithTimezone(i,n)/O.DaySpan},dateIncreaseWithUtcOffset:function(t,e){var n=O.dateIncrease(t,e),i=6e4*(n.getTimezoneOffset()-t.getTimezoneOffset());return O.dateIncrease(n,i)},dateIncrease:function(t,e){return new Date(t.valueOf()+e)},addTimeSpan:function(t,e){return new Date(t.valueOf()+e)},toDayTime:function(t){return t.valueOf()-O.truncToDate(t).valueOf()}};function z(t,e){this.scheduler=t,this.dotnetHelper=e,this.interval=null,this.start=function(t){this.interval=I(t);var e=this.interval.start,n=O.dateIncreaseWithUtcOffset(e,this.interval.duration),i=D(t),o=6e4*e.getTimezoneOffset()*-1;this.dotnetHelper.invokeMethodAsync("OnCellSelectionStart",O.addTimeSpan(e,o),O.addTimeSpan(n,o),S(t),i)},this.resizeTo=function(t){var e=I(t),n=e.start-this.interval.start;if(0!==n||this.interval.duration!==e.duration){n<0&&this.interval.duration===e.duration?this.direction="top":n>0&&this.interval.duration===e.duration&&(this.direction="bottom"),"bottom"===this.direction?this.interval.duration=n+e.duration:"top"===this.direction&&(this.interval.start=e.start,this.interval.duration+=-1*n);var i=this.interval.start,o=O.dateIncreaseWithUtcOffset(i,this.interval.duration),r=D(t),a=6e4*i.getTimezoneOffset()*-1;this.dotnetHelper.invokeMethodAsync("OnCellSelectionResize",O.addTimeSpan(i,a),O.addTimeSpan(o,a),S(t),r)}},this.end=function(){this.dotnetHelper.invokeMethodAsync("OnCellSelectionEnd",this.scheduler.offsetWidth<500)}}function M(t,e){this.scheduler=t,this.dotnetHelper=e,this.appointmentInfo=null,this.interval=null,this.dragStart=function(t,e){this.appointmentInfo=t,this.sourceAppointmentInterval=w(t.getStart(),t.getDuration()),this.cellInterval=I(e),this.dateDiff=t.getStart()-this.cellInterval.start,this.dotnetHelper.invokeMethodAsync("OnAppointmentDragStart"),this.scheduler.skipCalculateAllAppointments=!0},this.drag=function(t){if(this.cellInterval){var e=I(t);if(this.cellInterval.start-e.start!=0||this.cellInterval.duration!==e.duration){e.isLongerOrEqualDay?this.sourceAppointmentInterval.isLongerOrEqualDay&&this.cellInterval.isLongerOrEqualDay===e.isLongerOrEqualDay?this.appointmentInfo.interval=w(O.addTimeSpan(e.start,this.dateDiff),this.appointmentInfo.interval.duration):(this.appointmentInfo.interval=e,this.appointmentInfo.allDay=!0):(this.appointmentInfo.interval.isLongerOrEqualDay&&(this.appointmentInfo.interval.duration=this.sourceAppointmentInterval.isLongerOrEqualDay?e.duration:this.sourceAppointmentInterval.duration),this.appointmentInfo.interval=w(O.addTimeSpan(e.start,this.dateDiff),this.appointmentInfo.interval.duration),this.appointmentInfo.allDay=!1),this.updateResource(t);var n=6e4*e.start.getTimezoneOffset()*-1;this.dotnetHelper.invokeMethodAsync("OnAppointmentDrag",O.addTimeSpan(this.appointmentInfo.getStart(),n),O.addTimeSpan(this.appointmentInfo.getEnd(),n),this.appointmentInfo.allDay,this.appointmentInfo.resourceKey),this.cellInterval=e}}},this.resize=function(t,e,n){if(this.cellInterval){var i=I(t);if((this.cellInterval.start-i.start!=0||this.cellInterval.duration!==i.duration)&&this.cellInterval.isLongerOrEqualDay===i.isLongerOrEqualDay){var o=this.cellInterval.start-i.start;e?this.appointmentInfo.interval=w(O.addTimeSpan(i.start,this.dateDiff),this.appointmentInfo.interval.duration+o):this.appointmentInfo.interval.duration-=o,this.updateResource(t);var r=6e4*i.start.getTimezoneOffset()*-1;this.dotnetHelper.invokeMethodAsync("OnAppointmentDrag",O.addTimeSpan(this.appointmentInfo.getStart(),r),O.addTimeSpan(this.appointmentInfo.getEnd(),r),this.appointmentInfo.allDay,this.appointmentInfo.resourceKey),this.cellInterval=i}}},this.dragEnd=function(){this.dotnetHelper.invokeMethodAsync("OnAppointmentDragEnd"),this.scheduler.skipCalculateAllAppointments=!1},this.updateResource=function(t){this.appointmentInfo.resourceKey&&(this.appointmentInfo.resourceKey=D(t))}}function N(t,e){for(var n={},i=0,o=void 0;o=t[i];i++){o.intersects=[];var r=E.Attr.getContainerIndex(o);n[r]||(n[r]=[]),n[r].push(o)}for(var a=0,s=void 0;s=e[a];a++){var l=E.Attr.getContainerIndex(s),u=E.Attr.getAppointmentFirstCellIndex(s),c=E.Attr.getAppointmentLastCellIndex(s);n[l]&&(s.firstCell=n[l][u],s.lastCell=n[l][c])}}function k(t){t.style.height="",function(t,e){t.intersects.findIndex((function(t){return E.Attr.getAppointmentKey(t)===E.Attr.getAppointmentKey(e)}))<0&&t.intersects.push(e)}(t.firstCell,t),t.style.left=t.firstCell.offsetLeft+"px",t.style.width=t.lastCell===t.firstCell?t.firstCell.offsetWidth+"px":t.lastCell.offsetLeft-t.firstCell.offsetLeft+t.firstCell.offsetWidth+"px",t.firstCell.lastAppointmentTop||(t.firstCell.lastAppointmentTop=t.firstCell.offsetTop),t.style.display="",t.style.top=t.firstCell.lastAppointmentTop+"px",t.firstCell.lastAppointmentTop+=t.offsetHeight}function F(t){var e=E.Attr.getAppointmentColumn(t),n=t.firstCell.offsetWidth/E.Attr.getAppointmentColumnsCount(t);t.style.top=t.firstCell.offsetTop+"px",t.style.left=t.firstCell.offsetLeft+n*e+"px",t.style.width=n-10+"px",t.style.height=t.lastCell.offsetTop+t.lastCell.offsetHeight-t.firstCell.offsetTop+"px",t.style.display=""}function j(t,e,n,i){return function(t,e,n){var i=t.target;for(;i;){if(i===e)return!1;i=i.parentElement}n&&n()}(t,e,(function(){e&&"string"!=typeof e&&"none"!==e.style.display&&i.invokeMethodAsync(n)}))}function P(t,e,n,i,o){var r=t.wrapper,a=function(t,e,n,i){for(var o=[],r=0,a=void 0;a=t[r];r++)E.Attr.getContainerIndex(a)<n||E.Attr.getContainerIndex(a)>i||e-E.Attr.getStart(a)>=0&&E.Attr.getEnd(a)-e>0&&o.push(a);return o}(n,o,t.firstContainerIndex,t.lastContainerIndex);if(!a.length)return r.style.display="none",void 0;r.style.display="";var s=t.timeMarker,l=t.timeIndicator,u=s.offsetHeight/2,c=a[0].offsetLeft,f=0;if(t.startFromContainer){var p=function(t,e){for(var n=0,i=void 0;i=t[n];n++)if(E.Attr.getContainerIndex(i)===e)return i;return null}(n,t.firstContainerIndex);f=p.offsetLeft===c?c-u:p.offsetLeft}var d,h=Math.floor(function(t,e,n){var i=function(t,e){var n=t,i=V(e,n),o=Math.abs(i)%864e5;i<0&&(o=864e5-o);return function(t,e){var n=q(t,e),i=6e4*(n.getTimezoneOffset()-t.getTimezoneOffset());return q(n,i)}(n,o)}(n,t),o=E.Attr.getStart(e),r=E.Attr.getEnd(e),a=V(i,o);return e.offsetTop+e.offsetHeight*a/(r-o)}(o,a[0],i));if(s.style.top=h-u+"px",s.style.left=f+"px",s.style.width=c-f+u+1+"px",(d=r)&&"none"!==d.style.display){for(var m=0,v=0,g=void 0;g=a[v];v++)m+=g.offsetWidth;l.style.top=h-1+"px",l.style.width=m+"px",l.style.left=c+"px"}}function q(t,e){return new Date(t.valueOf()+e)}function V(t,e){return t-e+6e4*(e.getTimezoneOffset()-t.getTimezoneOffset())}function B(t){for(;null!=t;){if("BODY"===t.tagName)return!0;t=t.parentNode}return!1}var W=new function(){this.subscriptions=[],this.timerId=-1,this.subscribe=function(t,e){-1===this.getSubscriptionIndex(t)&&(this.subscriptions.push({scheduler:t,updateAction:e}),-1===this.timerId&&this.startTimer())},this.unsubscribe=function(t){var e=this.getSubscriptionIndex(t);-1!==e&&this.unsubscribeByIndex(e)},this.unsubscribeByIndex=function(t){this.subscriptions.splice(t)},this.getSubscriptionIndex=function(t){for(var e=0,n=void 0;n=this.subscriptions[e];e++)if(n.scheduler===t)return e;return-1},this.startTimer=function(){this.timerId=setTimeout(this.onTimeout.bind(this),6e4)},this.onTimeout=function(){for(var t=0,e=void 0;e=this.subscriptions[t];t++)if(B(e.scheduler))try{e.updateAction()}catch(t){}else this.unsubscribeByIndex(t),t--;this.startTimer()}};function R(t){return(t=o.ensureElement(t))&&(a.disposeEvents(t),W.unsubscribe(t)),Promise.resolve("ok")}n.default={init:A,dispose:R},n.dispose=R,n.init=A}),["cjs-chunk-c5286524.js","cjs-chunk-0da7e9be.js","cjs-dom-utils-d155391a.js","cjs-chunk-ad620f3e.js","cjs-chunk-d0f692d0.js","cjs-chunk-96905969.js","cjs-chunk-a0f3c48f.js"]);
