(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/polyfills/object.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/polyfills/object.js ***!
  \*******************************************************************/
/*! exports provided: applyPolyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPolyfill", function() { return applyPolyfill; });
function applyPolyfill(window, document) {
/*!
Object.assign
*/
"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(d,f){if(null==d)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(d),b=1;b<arguments.length;b++){var a=arguments[b];if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},writable:!0,configurable:!0});
/*!
Object.entries
*/
Object.entries||(Object.entries=function(c){for(var b=Object.keys(c),a=b.length,d=Array(a);a--;)d[a]=[b[a],c[b[a]]];return d});
}

/***/ })

}]);
//# sourceMappingURL=119.js.map