(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/okcwsexf.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/okcwsexf.js ***!
  \***********************************************************/
/*! exports provided: IonAlertController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonAlertController", function() { return AlertController; });
/* harmony import */ var _chunk_13543983_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-13543983.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-13543983.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var AlertController=function(){function e(){this.alerts=new Map}return e.prototype.alertWillPresent=function(e){this.alerts.set(e.target.overlayId,e.target)},e.prototype.alertWillDismiss=function(e){this.alerts.delete(e.target.overlayId)},e.prototype.escapeKeyUp=function(){Object(_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this.alerts)},e.prototype.create=function(e){return Object(_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this.doc.createElement("ion-alert"),e)},e.prototype.dismiss=function(e,t,r){return void 0===r&&(r=-1),Object(_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e,t,this.alerts,r)},e.prototype.getTop=function(){return Object(_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this.alerts)},Object.defineProperty(e,"is",{get:function(){return"ion-alert-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"body:ionAlertWillPresent",method:"alertWillPresent"},{name:"body:ionAlertWillDismiss",method:"alertWillDismiss"},{name:"body:ionAlertDidUnload",method:"alertWillDismiss"},{name:"body:keyup.escape",method:"escapeKeyUp"}]},enumerable:!0,configurable:!0}),e}();

/***/ })

}]);
//# sourceMappingURL=5.js.map