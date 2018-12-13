(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-13954a9c.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-13954a9c.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d, e, f, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LIFECYCLE_DID_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LIFECYCLE_WILL_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LIFECYCLE_WILL_UNLOAD; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
var LIFECYCLE_WILL_ENTER="ionViewWillEnter",LIFECYCLE_DID_ENTER="ionViewDidEnter",LIFECYCLE_WILL_LEAVE="ionViewWillLeave",LIFECYCLE_DID_LEAVE="ionViewDidLeave",LIFECYCLE_WILL_UNLOAD="ionViewWillUnload",iosTransitionAnimation=function(){return __webpack_require__.e(/*! import() */ 141).then(__webpack_require__.bind(null, /*! ./ios.transition.js */ "./node_modules/@ionic/core/dist/esm/es5/build/ios.transition.js"))},mdTransitionAnimation=function(){return __webpack_require__.e(/*! import() */ 148).then(__webpack_require__.bind(null, /*! ./md.transition.js */ "./node_modules/@ionic/core/dist/esm/es5/build/md.transition.js"))};function transition(e){return new Promise(function(n,i){e.queue.write(function(){beforeTransition(e),runTransition(e).then(function(i){i.animation&&i.animation.destroy(),afterTransition(e),n(i)},function(n){afterTransition(e),i(n)})})})}function beforeTransition(e){var n=e.enteringEl,i=e.leavingEl;setZIndex(n,i,e.direction),e.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),setPageHidden(n,!1),i&&setPageHidden(i,!1)}function runTransition(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return[4,getAnimationBuilder(e)];case 1:return[2,(n=i.sent())?animation(n,e):noAnimation(e)]}})})}function afterTransition(e){var n=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")}function getAnimationBuilder(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,iosTransitionAnimation()]:[2,void 0];case 1:return n=i.sent().iosTransitionAnimation,[3,4];case 2:return[4,mdTransitionAnimation()];case 3:n=i.sent().mdTransitionAnimation,i.label=4;case 4:return[2,n]}})})}function animation(e,n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return[4,waitForReady(n,!0)];case 1:return t.sent(),[4,n.animationCtrl.create(e,n.baseEl,n)];case 2:return i=t.sent(),fireWillEvents(n.enteringEl,n.leavingEl),[4,playTransition(i,n)];case 3:return t.sent(),n.progressCallback&&n.progressCallback(void 0),i.hasCompleted&&fireDidEvents(n.enteringEl,n.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function noAnimation(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n,i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return n=e.enteringEl,i=e.leavingEl,[4,waitForReady(e,!1)];case 1:return t.sent(),fireWillEvents(n,i),fireDidEvents(n,i),[2,{hasCompleted:!0}]}})})}function waitForReady(e,n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return i=(void 0!==e.deepWait?e.deepWait:n)?[deepReady(e.enteringEl),deepReady(e.leavingEl)]:[shallowReady(e.enteringEl),shallowReady(e.leavingEl)],[4,Promise.all(i)];case 1:return t.sent(),[4,notifyViewReady(e.viewIsReady,e.enteringEl)];case 2:return t.sent(),[2]}})})}function notifyViewReady(e,n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return e?[4,e(n)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})}function playTransition(e,n){var i=n.progressCallback,t=new Promise(function(n){return e.onFinish(n)});return i?(e.progressStart(),i(e)):e.play(),t}function fireWillEvents(e,n){lifecycle(n,LIFECYCLE_WILL_LEAVE),lifecycle(e,LIFECYCLE_WILL_ENTER)}function fireDidEvents(e,n){lifecycle(e,LIFECYCLE_DID_ENTER),lifecycle(n,LIFECYCLE_DID_LEAVE)}function lifecycle(e,n){if(e){var i=new CustomEvent(n,{bubbles:!1,cancelable:!1});e.dispatchEvent(i)}}function shallowReady(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()}function deepReady(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return(n=e)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=i.sent())return[2];i.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(deepReady))];case 3:i.sent(),i.label=4;case 4:return[2]}})})}function setPageHidden(e,n){n?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))}function setZIndex(e,n,i){void 0!==e&&(e.style.zIndex="back"===i?"99":"101"),void 0!==n&&(n.style.zIndex="100")}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-647a6bad.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-647a6bad.js ***!
  \***********************************************************************/
/*! exports provided: a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GESTURE_CONTROLLER; });
var GestureController=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new GestureDelegate(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new BlockerDelegate(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,i){return this.canStart(t)?(this.requestedStart.set(e,i),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,i){if(!this.start(t,e,i))return!1;var r=this.requestedStart,s=-1e4;if(r.forEach(function(t){s=Math.max(s,t)}),s===i){this.capturedId=e,r.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(o),!0}return r.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var i=this.disabledGestures.get(t);void 0===i&&(i=new Set,this.disabledGestures.set(t,i)),i.add(e)},t.prototype.enableGesture=function(t,e){var i=this.disabledGestures.get(t);void 0!==i&&i.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(BACKDROP_NO_SCROLL)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(BACKDROP_NO_SCROLL)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),GestureDelegate=function(){function t(t,e,i,r,s){this.id=e,this.name=i,this.disableScroll=s,this.priority=1e6*r+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),BlockerDelegate=function(){function t(t,e,i,r){this.id=e,this.disable=i,this.disableScroll=r,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),BACKDROP_NO_SCROLL="backdrop-no-scroll",GESTURE_CONTROLLER=new GestureController(document);

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-8720a7e5.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-8720a7e5.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelection; });
function hapticSelection(){var e=window.TapticEngine;e&&e.selection()}function hapticSelectionStart(){var e=window.TapticEngine;e&&e.gestureSelectionStart()}function hapticSelectionChanged(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()}function hapticSelectionEnd(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-9789ae30.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-9789ae30.js ***!
  \***********************************************************************/
/*! exports provided: a, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detachComponent; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
function attachComponent(e,t,n,o,r){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var a;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:if(e)return[2,e.attachViewToDom(t,n,r,o)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n,o&&o.forEach(function(e){return a.classList.add(e)}),r&&Object.assign(a,r),t.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,a]}})})}function detachComponent(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-f0a3b336.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-f0a3b336.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return renderHiddenInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return pointerCoord; });
function rIC(e){"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,32)}function hasShadowDom(e){return!!e.shadowRoot&&!!e.attachShadow}function findItemLabel(e){var n=e.closest("ion-item");return n?n.querySelector("ion-label"):null}function renderHiddenInput(e,n,t,a,r){if(e||hasShadowDom(n)){var o=n.querySelector("input.aux-input");o||((o=n.ownerDocument.createElement("input")).type="hidden",o.classList.add("aux-input"),n.appendChild(o)),o.disabled=r,o.name=t,o.value=a||""}}function clamp(e,n,t){return Math.max(e,Math.min(n,t))}function assert(e,n){if(!e){var t="ASSERT: "+n;throw console.error(t),new Error(t)}}function now(e){return e.timeStamp||Date.now()}function pointerCoord(e){if(e){var n=e.changedTouches;if(n&&n.length>0){var t=n[0];return{x:t.clientX,y:t.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}}function isEndSide(e,n){var t="rtl"===e.document.dir;switch(n){case"start":return t;case"end":return!t;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function debounceEvent(e,n){var t=e._original||e;return{_original:e,emit:debounce(t.emit.bind(t),n)}}function debounce(e,n){var t;return void 0===n&&(n=0),function(){for(var a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];clearTimeout(t),t=setTimeout.apply(void 0,[e,n].concat(a))}}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/gesture.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/gesture.js ***!
  \****************************************************************/
/*! exports provided: createGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGesture", function() { return createGesture; });
/* harmony import */ var _chunk_647a6bad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-647a6bad.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-647a6bad.js");
var _sPassive;function supportsPassive(t){if(void 0===_sPassive)try{var e=Object.defineProperty({},"passive",{get:function(){_sPassive=!0}});t.addEventListener("optsTest",function(){},e)}catch(t){_sPassive=!1}return!!_sPassive}function addEventListener(t,e,n,r){var a,i,o=supportsPassive(t)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;return t.__zone_symbol__addEventListener?(a="__zone_symbol__addEventListener",i="__zone_symbol__removeEventListener"):(a="addEventListener",i="removeEventListener"),t[a](e,n,o),function(){t[i](e,n,o)}}var MOUSE_WAIT=2e3;function createPointerEvents(t,e,n,r,a){var i,o,s,c,u,v,d,l=0;function f(r){l=Date.now()+MOUSE_WAIT,e(r)&&(!o&&n&&(o=addEventListener(t,"touchmove",n,a)),s||(s=addEventListener(t,"touchend",p,a)),c||(c=addEventListener(t,"touchcancel",p,a)))}function m(r){l>Date.now()||e(r)&&(!v&&n&&(v=addEventListener(getDocument(t),"mousemove",n,a)),d||(d=addEventListener(getDocument(t),"mouseup",E,a)))}function p(t){_(),r&&r(t)}function E(t){X(),r&&r(t)}function _(){o&&o(),s&&s(),c&&c(),o=s=c=void 0}function X(){v&&v(),d&&d(),v=d=void 0}function y(){_(),X()}function Y(e){e?(i&&i(),u&&u(),i=u=void 0,y()):(i||(i=addEventListener(t,"touchstart",f,a)),u||(u=addEventListener(t,"mousedown",m,a)))}return{setDisabled:Y,stop:y,destroy:function(){Y(!0),r=n=e=void 0}}}function getDocument(t){return t instanceof Document?t:t.ownerDocument}function createPanRecognizer(t,e,n){var r=n*(Math.PI/180),a="x"===t,i=Math.cos(r),o=e*e,s=0,c=0,u=!1,v=0;return{start:function(t,e){s=t,c=e,v=0,u=!0},detect:function(t,e){if(!u)return!1;var n=t-s,r=e-c,d=n*n+r*r;if(d<o)return!1;var l=Math.sqrt(d),f=(a?n:r)/l;return v=f>i?1:f<-i?-1:0,u=!1,!0},isGesture:function(){return 0!==v},getDirection:function(){return v}}}function createGesture(t){var e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),n=e.canStart,r=e.onWillStart,a=e.onStart,i=e.onEnd,o=e.notCaptured,s=e.onMove,c=e.threshold,u=e.queue,v={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},d=createPointerEvents(e.el,function(t){var e=now(t);return!(p||!E)&&(updateDetail(t,v),v.startX=v.currentX,v.startY=v.currentY,v.startTimeStamp=v.timeStamp=e,v.velocityX=v.velocityY=v.deltaX=v.deltaY=0,v.event=t,(!n||!1!==n(v))&&(f.release(),!!f.start()&&(p=!0,0===c?y():(l.start(v.startX,v.startY),!0))))},function(t){m?!_&&E&&(_=!0,calcGestureData(v,t),u.write(X)):(calcGestureData(v,t),l.detect(v.currentX,v.currentY)&&(l.isGesture()&&y()||(h(),d.stop(),o&&o(v))))},D,{capture:!1}),l=createPanRecognizer(e.direction,e.threshold,e.maxAngle),f=_chunk_647a6bad_js__WEBPACK_IMPORTED_MODULE_0__["a"].createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),m=!1,p=!1,E=!0,_=!1;function X(){m&&(_=!1,s&&s(v))}function y(){return!(f&&!f.capture()||(m=!0,E=!1,v.startX=v.currentX,v.startY=v.currentY,v.startTimeStamp=v.timeStamp,r?r(v).then(Y):Y(),0))}function Y(){a&&a(v),E=!0}function h(){m=!1,p=!1,_=!1,E=!0,f.release()}function D(t){var e=m,n=E;h(),n&&(calcGestureData(v,t),e?i&&i(v):o&&o(v))}return{setDisabled:function(t){t&&m&&D(void 0),d.setDisabled(t)},destroy:function(){f.destroy(),d.destroy()}}}function calcGestureData(t,e){if(e){var n=t.currentX,r=t.currentY,a=t.timeStamp;updateDetail(e,t);var i=t.currentX,o=t.currentY,s=(t.timeStamp=now(e))-a;if(s>0&&s<100){var c=(o-r)/s;t.velocityX=(i-n)/s*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=i-t.startX,t.deltaY=o-t.startY,t.event=e}}function updateDetail(t,e){var n=0,r=0;if(t){var a=t.changedTouches;if(a&&a.length>0){var i=a[0];n=i.clientX,r=i.clientY}else void 0!==t.pageX&&(n=t.pageX,r=t.pageY)}e.currentX=n,e.currentY=r}function now(t){return t.timeStamp||Date.now()}

/***/ })

}]);
//# sourceMappingURL=common.js.map