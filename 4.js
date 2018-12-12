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
/* harmony import */ var _chunk_03ecffc3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-03ecffc3.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-03ecffc3.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
function startTapClick(t){var e,n,i,o=10*-MOUSE_WAIT,a=0,r=!1,c=!1,s=new WeakMap;function u(t){o=Object(_chunk_03ecffc3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(t),E(t)}function f(){clearTimeout(i),i=void 0,e&&(T(!1),e=void 0),r=!0}function d(t){e||c||(r=!1,v(getActivatableTarget(t),t))}function E(t){c||(v(void 0,t),r&&t.cancelable&&t.preventDefault())}function v(t,n){if(!t||t!==e){clearTimeout(i),i=void 0;var o=Object(_chunk_03ecffc3_js__WEBPACK_IMPORTED_MODULE_0__["k"])(n),a=o.x,r=o.y;if(e){if(s.has(e))throw new Error("internal error");e.classList.contains(ACTIVATED)||l(e,a,r),T(!0)}if(t){var c=s.get(t);c&&(clearTimeout(c),s.delete(t));var u=isInstant(t)?0:ADD_ACTIVATED_DEFERS;t.classList.remove(ACTIVATED),i=setTimeout(function(){l(t,a,r),i=void 0},u)}e=t}}function l(t,e,i){a=Date.now(),t.classList.add(ACTIVATED);var o=getRippleEffect(t);o&&o.addRipple&&(n=o.addRipple(e,i))}function T(t){void 0!==n&&n.then(function(t){return t()});var i=e;if(i){var o=CLEAR_STATE_DEFERS-Date.now()+a;if(t&&o>0&&!isInstant(i)){var r=setTimeout(function(){i.classList.remove(ACTIVATED),s.delete(i)},CLEAR_STATE_DEFERS);s.set(i,r)}else i.classList.remove(ACTIVATED)}}t.addEventListener("click",function(t){(r||c)&&(t.preventDefault(),t.stopPropagation())},!0),t.addEventListener("ionScrollStart",function(){c=!0,f()}),t.addEventListener("ionScrollEnd",function(){c=!1}),t.addEventListener("ionGestureCaptured",f),t.addEventListener("touchstart",function(t){o=Object(_chunk_03ecffc3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(t),d(t)},!0),t.addEventListener("touchcancel",u,!0),t.addEventListener("touchend",u,!0),t.addEventListener("mousedown",function(t){var e=Object(_chunk_03ecffc3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(t)-MOUSE_WAIT;o<e&&d(t)},!0),t.addEventListener("mouseup",function(t){var e=Object(_chunk_03ecffc3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(t)-MOUSE_WAIT;o<e&&E(t)},!0)}function getActivatableTarget(t){if(!t.composedPath)return t.target.closest("[ion-activatable]");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.hasAttribute&&i.hasAttribute("ion-activatable"))return i}}function isInstant(t){return"instant"===t.getAttribute("ion-activatable")}function getRippleEffect(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")}var ACTIVATED="activated",ADD_ACTIVATED_DEFERS=200,CLEAR_STATE_DEFERS=200,MOUSE_WAIT=2500;

/***/ })

}]);
//# sourceMappingURL=4.js.map