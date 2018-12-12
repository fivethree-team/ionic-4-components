(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/hardware-back-button.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/hardware-back-button.js ***!
  \*****************************************************************************/
/*! exports provided: startHardwareBackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startHardwareBackButton", function() { return startHardwareBackButton; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
function startHardwareBackButton(t){var e=!1;t.document.addEventListener("backbutton",function(){if(!e){var r=[],n=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register:function(t,e){r.push({priority:t,handler:e})}}});if(t.document.dispatchEvent(n),r.length>0){var i,o=Number.MIN_SAFE_INTEGER;r.forEach(function(t){t.priority>=o&&(o=t.priority,i=t.handler)}),e=!0,executeAction(i).then(function(){return e=!1})}}})}function executeAction(t){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var e,r;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),t?null==(e=t())?[3,2]:[4,e]:[3,2];case 1:n.sent(),n.label=2;case 2:return[3,4];case 3:return r=n.sent(),console.error(r),[3,4];case 4:return[2]}})})}

/***/ })

}]);
//# sourceMappingURL=1.js.map