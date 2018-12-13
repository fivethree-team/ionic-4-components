(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/swipe-back.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/swipe-back.js ***!
  \*******************************************************************/
/*! exports provided: createSwipeBackGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSwipeBackGesture", function() { return createSwipeBackGesture; });
/* harmony import */ var _gesture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gesture.js */ "./node_modules/@ionic/core/dist/esm/es5/build/gesture.js");
/* harmony import */ var _chunk_647a6bad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-647a6bad.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-647a6bad.js");
function createSwipeBackGesture(e,t,r,a,n,i){var o=e.ownerDocument.defaultView;return Object(_gesture_js__WEBPACK_IMPORTED_MODULE_0__["createGesture"])({el:e,queue:t,gestureName:"goback-swipe",gesturePriority:30,threshold:10,canStart:function(e){return e.startX<=50&&r()},onStart:a,onMove:function(e){n(e.deltaX/o.innerWidth)},onEnd:function(e){var t=o.innerWidth,r=e.deltaX/t,a=e.velocityX,n=a>=0&&(a>.2||e.deltaX>t/2),u=(n?1-r:r)*t,c=0;if(u>5){var s=u/Math.abs(a);c=Math.min(s,300)}i(n,r,c)}})}

/***/ })

}]);
//# sourceMappingURL=4.js.map