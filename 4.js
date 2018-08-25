(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/jx66mgie.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/jx66mgie.js ***!
  \***********************************************************/
/*! exports provided: IonActionSheetController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonActionSheetController", function() { return ActionSheetController; });
/* harmony import */ var _chunk_13543983_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-13543983.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-13543983.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var ActionSheetController=function(){function e(){this.actionSheets=new Map}return e.prototype.actionSheetWillPresent=function(e){this.actionSheets.set(e.target.overlayId,e.target)},e.prototype.actionSheetWillDismiss=function(e){this.actionSheets.delete(e.target.overlayId)},e.prototype.escapeKeyUp=function(){Object(_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this.actionSheets)},e.prototype.create=function(e){return Object(_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this.doc.createElement("ion-action-sheet"),e)},e.prototype.dismiss=function(e,t,o){return void 0===o&&(o=-1),Object(_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e,t,this.actionSheets,o)},e.prototype.getTop=function(){return Object(_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this.actionSheets)},Object.defineProperty(e,"is",{get:function(){return"ion-action-sheet-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"body:ionActionSheetWillPresent",method:"actionSheetWillPresent"},{name:"body:ionActionSheetWillDismiss",method:"actionSheetWillDismiss"},{name:"body:ionActionSheetDidUnload",method:"actionSheetWillDismiss"},{name:"body:keyup.escape",method:"escapeKeyUp"}]},enumerable:!0,configurable:!0}),e}();

/***/ })

}]);
//# sourceMappingURL=4.js.map