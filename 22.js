(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/8vtyv2dx.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/8vtyv2dx.js ***!
  \***********************************************************/
/*! exports provided: IonBackdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonBackdrop", function() { return Backdrop; });
/* harmony import */ var _chunk_76b36062_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-76b36062.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-76b36062.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var Backdrop=function(){function e(){this.lastClick=-1e4,this.visible=!0,this.tappable=!0,this.stopPropagation=!0}return e.prototype.componentDidLoad=function(){registerBackdrop(this.doc,this)},e.prototype.componentDidUnload=function(){unregisterBackdrop(this.doc,this)},e.prototype.onTouchStart=function(e){this.lastClick=Object(_chunk_76b36062_js__WEBPACK_IMPORTED_MODULE_0__["a"])(e),this.emitTap(e)},e.prototype.onMouseDown=function(e){this.lastClick<Object(_chunk_76b36062_js__WEBPACK_IMPORTED_MODULE_0__["a"])(e)-2500&&this.emitTap(e)},e.prototype.emitTap=function(e){this.stopPropagation&&(e.preventDefault(),e.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},e.prototype.hostData=function(){return{tabindex:"-1",class:{"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}}},Object.defineProperty(e,"is",{get:function(){return"ion-backdrop"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{doc:{context:"document"},stopPropagation:{type:Boolean,attr:"stop-propagation"},tappable:{type:Boolean,attr:"tappable"},visible:{type:Boolean,attr:"visible"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionBackdropTap",method:"ionBackdropTap",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"touchstart",method:"onTouchStart",capture:!0},{name:"mousedown",method:"onMouseDown",capture:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2;background-color:var(--ion-backdrop-color,#000)}:host.backdrop-hide{background:0 0}:host.backdrop-no-tappable{cursor:auto}body.backdrop-no-scroll{overflow:hidden}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),BACKDROP_NO_SCROLL="backdrop-no-scroll",activeBackdrops=new Set;function registerBackdrop(e,t){activeBackdrops.add(t),e.body.classList.add(BACKDROP_NO_SCROLL)}function unregisterBackdrop(e,t){activeBackdrops.delete(t),0===activeBackdrops.size&&e.body.classList.remove(BACKDROP_NO_SCROLL)}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-76b36062.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-76b36062.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deferEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return renderHiddenInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return pointerCoord; });
function hasShadowDom(e) { return !!e.shadowRoot && !!e.attachShadow; }
function renderHiddenInput(e, n, t, o) { if (hasShadowDom(e)) {
    var r = e.querySelector("input.aux-input");
    r || ((r = e.ownerDocument.createElement("input")).type = "hidden", r.classList.add("aux-input"), e.appendChild(r)), r.disabled = o, r.name = n, r.value = t;
} }
function clamp(e, n, t) { return Math.max(e, Math.min(n, t)); }
function assert(e, n) { if (!e) {
    var e_1 = "ASSERT: " + n;
    throw console.error(e_1), new Error(e_1);
} }
function now(e) { return e.timeStamp || Date.now(); }
function pointerCoord(e) { if (e) {
    var n = e.changedTouches;
    if (n && n.length > 0) {
        var e_2 = n[0];
        return { x: e_2.clientX, y: e_2.clientY };
    }
    if (void 0 !== e.pageX)
        return { x: e.pageX, y: e.pageY };
} return { x: 0, y: 0 }; }
function isEndSide(e, n) { var t = "rtl" === e.document.dir; switch (n) {
    case "start": return t;
    case "end": return !t;
    default: throw new Error("\"" + n + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
} }
function deferEvent(e) { return debounceEvent(e, 0); }
function debounceEvent(e, n) { var t = e._original || e; return { _original: e, emit: debounce(t.emit.bind(t), n) }; }
function debounce(e, n) {
    if (n === void 0) { n = 0; }
    var t;
    return function () {
        var o = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            o[_i] = arguments[_i];
        }
        clearTimeout(t), t = setTimeout.apply(void 0, [e, n].concat(o));
    };
}



/***/ })

}]);
//# sourceMappingURL=22.js.map