(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/ldvpsfx1.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/ldvpsfx1.js ***!
  \***********************************************************/
/*! exports provided: IonNavPop, IonNavPush, IonNavSetRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonNavPop", function() { return NavPop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonNavPush", function() { return NavPush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonNavSetRoot", function() { return NavSetRoot; });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var NavPop=function(){function e(){}return e.prototype.pop=function(){var e=this.el.closest("ion-nav");return e&&!e.isAnimating()?e.pop():Promise.resolve(null)},Object.defineProperty(e,"is",{get:function(){return"ion-nav-pop"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"pop"}]},enumerable:!0,configurable:!0}),e}(),NavPush=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),n=this.component;return e&&n&&!e.isAnimating()?e.push(n,this.componentProps):Promise.resolve(null)},Object.defineProperty(e,"is",{get:function(){return"ion-nav-push"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}(),NavSetRoot=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),n=this.component;return e&&n?e.setRoot(n,this.componentProps):Promise.resolve(null)},Object.defineProperty(e,"is",{get:function(){return"ion-nav-set-root"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}();

/***/ })

}]);
//# sourceMappingURL=74.js.map