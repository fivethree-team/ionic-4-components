(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/tap-click.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/tap-click.js ***!
  \******************************************************************/
/*! exports provided: startTapClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTapClick", function() { return startTapClick; });
/* harmony import */ var _chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-e7816c0b.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-e7816c0b.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
function startTapClick(t){var e,n,o=10*-MOUSE_WAIT,i=0,a=!1,r=!1,c=new WeakMap;function s(t){o=Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(t),E(t)}function d(){clearTimeout(n),n=void 0,e&&(v(!1),e=void 0),a=!0}function u(t){e||r||(a=!1,f(getActivatableTarget(t),t))}function E(t){r||(f(void 0,t),a&&t.cancelable&&t.preventDefault())}function f(t,o){if(!t||t!==e){clearTimeout(n),n=void 0;var i=Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__["l"])(o),a=i.x,r=i.y;if(e){if(c.has(e))throw new Error("internal error");e.classList.contains(ACTIVATED)||l(e,a,r),v(!0)}if(t){var s=c.get(t);s&&(clearTimeout(s),c.delete(t)),t.classList.remove(ACTIVATED),n=setTimeout(function(){l(t,a,r),n=void 0},ADD_ACTIVATED_DEFERS)}e=t}}function l(t,e,n){i=Date.now(),t.classList.add(ACTIVATED);var o=getRippleEffect(t);o&&o.addRipple&&o.addRipple(e,n)}function v(t){var n=e;if(n){var o=CLEAR_STATE_DEFERS-Date.now()+i;if(t&&o>0){var a=setTimeout(function(){n.classList.remove(ACTIVATED),c.delete(n)},CLEAR_STATE_DEFERS);c.set(n,a)}else n.classList.remove(ACTIVATED)}}t.body.addEventListener("click",function(t){(a||r)&&(t.preventDefault(),t.stopPropagation())},!0),t.body.addEventListener("ionScrollStart",function(){r=!0,d()}),t.body.addEventListener("ionScrollEnd",function(){r=!1}),t.body.addEventListener("ionGestureCaptured",d),t.addEventListener("touchstart",function(t){o=Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(t),u(t)},!0),t.addEventListener("touchcancel",s,!0),t.addEventListener("touchend",s,!0),t.addEventListener("mousedown",function(t){var e=Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(t)-MOUSE_WAIT;o<e&&u(t)},!0),t.addEventListener("mouseup",function(t){var e=Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(t)-MOUSE_WAIT;o<e&&E(t)},!0)}function getActivatableTarget(t){if(!t.composedPath)return t.target.closest("[ion-activatable]");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var o=e[n];if(o.hasAttribute&&o.hasAttribute("ion-activatable"))return o}}function getRippleEffect(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")}var ACTIVATED="activated",ADD_ACTIVATED_DEFERS=200,CLEAR_STATE_DEFERS=200,MOUSE_WAIT=2500;

/***/ })

}]);
//# sourceMappingURL=4.js.map