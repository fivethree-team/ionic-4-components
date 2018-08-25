(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[127],{

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



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/tap-click.js":
/*!************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/tap-click.js ***!
  \************************************************************/
/*! exports provided: startTapClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTapClick", function() { return startTapClick; });
/* harmony import */ var _chunk_76b36062_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-76b36062.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-76b36062.js");

function startTapClick(t) { var e, n, o = 10 * -MOUSE_WAIT, i = 0, a = !1; var s = new WeakMap; function c(t) { o = Object(_chunk_76b36062_js__WEBPACK_IMPORTED_MODULE_0__["a"])(t), d(t); } function r() { clearTimeout(n), e && (l(!1), e = void 0), a = !0; } function E(t) { e || (a = !1, u(getActivatableTarget(t.target), t)); } function d(t) { u(void 0, t), a && t.cancelable && t.preventDefault(); } function u(t, o) { if (t && t === e)
    return; clearTimeout(n), n = void 0; var _a = Object(_chunk_76b36062_js__WEBPACK_IMPORTED_MODULE_0__["j"])(o), i = _a.x, a = _a.y; if (e) {
    if (s.has(e))
        throw new Error("internal error");
    e.classList.contains(ACTIVATED) || T(e, i, a), l(!0);
} if (t) {
    var e_1 = s.get(t);
    e_1 && (clearTimeout(e_1), s.delete(t)), t.classList.remove(ACTIVATED), n = setTimeout(function () { T(t, i, a), n = void 0; }, ADD_ACTIVATED_DEFERS);
} e = t; } function T(t, e, n) { i = Date.now(), t.classList.add(ACTIVATED); var o = new CustomEvent("ionActivated", { bubbles: !1, detail: { x: e, y: n } }); t.dispatchEvent(o); } function l(t) { var n = e; if (!n)
    return; var o = CLEAR_STATE_DEFERS - Date.now() + i; if (t && o > 0) {
    var t_1 = setTimeout(function () { n.classList.remove(ACTIVATED), s.delete(n); }, CLEAR_STATE_DEFERS);
    s.set(n, t_1);
}
else
    n.classList.remove(ACTIVATED); } t.body.addEventListener("click", function (t) { a && (t.preventDefault(), t.stopPropagation()); }, !0), t.body.addEventListener("ionScrollStart", r), t.body.addEventListener("ionGestureCaptured", r), t.addEventListener("touchstart", function (t) { o = Object(_chunk_76b36062_js__WEBPACK_IMPORTED_MODULE_0__["a"])(t), E(t); }, !0), t.addEventListener("touchcancel", c, !0), t.addEventListener("touchend", c, !0), t.addEventListener("mousedown", function (t) { var e = Object(_chunk_76b36062_js__WEBPACK_IMPORTED_MODULE_0__["a"])(t) - MOUSE_WAIT; o < e && E(t); }, !0), t.addEventListener("mouseup", function (t) { var e = Object(_chunk_76b36062_js__WEBPACK_IMPORTED_MODULE_0__["a"])(t) - MOUSE_WAIT; o < e && d(t); }, !0); }
function getActivatableTarget(t) { return t.closest(":not([tappable]) > a, :not([tappable]) > button, [tappable]"); }
var ACTIVATED = "activated", ADD_ACTIVATED_DEFERS = 200, CLEAR_STATE_DEFERS = 200, MOUSE_WAIT = 2500;



/***/ })

}]);
//# sourceMappingURL=127.js.map