(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

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

/***/ "./node_modules/@ionic/core/dist/esm/es5/input-shims.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/input-shims.js ***!
  \**************************************************************/
/*! exports provided: startInputShims */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startInputShims", function() { return startInputShims; });
/* harmony import */ var _chunk_76b36062_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-76b36062.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-76b36062.js");

var RELOCATED_KEY = "$ionRelocated";
function relocateInput(t, e, n, o) {
    if (o === void 0) { o = 0; }
    if (t[RELOCATED_KEY] !== n) {
        if (e.value, n) {
            cloneInputComponent(t, e);
            var n_1 = "rtl" === t.ownerDocument.dir ? 9999 : -9999;
            e.style.transform = "translate3d(" + n_1 + "px," + o + "px,0)";
        }
        else
            removeClone(t, e);
        t[RELOCATED_KEY] = n;
    }
}
function isFocused(t) { return t === t.ownerDocument.activeElement; }
function removeClone(t, e) { t && t.parentElement && (Array.from(t.parentElement.querySelectorAll(".cloned-input")).forEach(function (t) { return t.remove(); }), t.style.pointerEvents = ""), e.style.transform = "", e.style.opacity = ""; }
function cloneInputComponent(t, e) { var _a, _b; var n = t.parentElement, o = t.ownerDocument; if (t && n) {
    var r = t.offsetTop, i = t.offsetLeft, s = t.offsetWidth, l = t.offsetHeight, c = o.createElement("div"), a = c.style;
    (_a = c.classList).add.apply(_a, Array.from(t.classList)), c.classList.add("cloned-input"), c.setAttribute("aria-hidden", "true"), a.pointerEvents = "none", a.position = "absolute", a.top = r + "px", a.left = i + "px", a.width = s + "px", a.height = l + "px";
    var u = o.createElement("input");
    (_b = u.classList).add.apply(_b, Array.from(e.classList)), u.value = e.value, u.type = e.type, u.placeholder = e.placeholder, u.tabIndex = -1, c.appendChild(u), n.appendChild(c), t.style.pointerEvents = "none";
} e.style.transform = "scale(0)"; }
function enableHideCaretOnScroll(t, e, n) { if (!n || !e)
    return function () { }; var o = function (n) { isFocused(e) && relocateInput(t, e, n); }, r = function () { return relocateInput(t, e, !1); }, i = function () { return o(!0); }, s = function () { return o(!1); }; return n && (n.addEventListener("ionScrollStart", i), n.addEventListener("ionScrollEnd", s)), e.addEventListener("blur", r), function () { n.removeEventListener("ionScrollStart", i), n.removeEventListener("ionScrollEnd", s), e.addEventListener("ionBlur", r); }; }
var SKIP_SELECTOR = "input, textarea, [no-blur]";
function enableInputBlurring(t) { var e = !0, n = !1; function o() { n = !0; } function r() { e = !0; } function i(o) { if (n)
    return void (n = !1); var r = t.activeElement; if (!r)
    return; if (r.matches(SKIP_SELECTOR))
    return; var i = o.target; i !== r && (i.matches(SKIP_SELECTOR) || i.closest(SKIP_SELECTOR) || i.classList.contains("input-cover") || (e = !1, setTimeout(function () { e || r.blur(); }, 50))); } return t.addEventListener("ionScrollStart", o), t.addEventListener("focusin", r, !0), t.addEventListener("touchend", i, !1), function () { t.removeEventListener("ionScrollStart", o, !0), t.removeEventListener("focusin", r, !0), t.removeEventListener("touchend", i, !1); }; }
var SCROLL_ASSIST_SPEED = .3;
function getScrollData(t, e, n) { return e ? calcScrollData((t.closest("ion-item,[ion-item]") || t).getBoundingClientRect(), e.getBoundingClientRect(), n, window.innerHeight) : { scrollAmount: 0, scrollPadding: 0, scrollDuration: 0, inputSafeY: 0 }; }
function calcScrollData(t, e, n, o) { var r = t.top, i = t.bottom, s = e.top + 10, l = Math.min(e.bottom, o - n) / 2 - i, c = s - r, a = Math.round(l < 0 ? -l : c > 0 ? -c : 0), u = Math.abs(a) / SCROLL_ASSIST_SPEED; return { scrollAmount: a, scrollDuration: Math.min(400, Math.max(150, u)), scrollPadding: n, inputSafeY: 4 - (r - s) }; }
function enableScrollAssist(t, e, n, o) { var r; var i = function (t) { r = Object(_chunk_76b36062_js__WEBPACK_IMPORTED_MODULE_0__["j"])(t), t.type; }, s = function (i) { if (i.type, !r)
    return; var s = Object(_chunk_76b36062_js__WEBPACK_IMPORTED_MODULE_0__["j"])(i); hasPointerMoved(6, r, s) || isFocused(e) || (i.preventDefault(), i.stopPropagation(), jsSetFocus(t, e, n, o)); }; return t.addEventListener("touchstart", i, !0), t.addEventListener("touchend", s, !0), function () { t.removeEventListener("touchstart", i, !0), t.removeEventListener("touchend", s, !0); }; }
function jsSetFocus(t, e, n, o) { var r = getScrollData(t, n, o); Math.abs(r.scrollAmount) < 4 ? e.focus() : (relocateInput(t, e, !0, r.inputSafeY), e.focus(), n.getScrollElement().scrollByPoint(0, r.scrollAmount, r.scrollDuration).then(function () { relocateInput(t, e, !1, r.inputSafeY), e.focus(); })); }
function hasPointerMoved(t, e, n) { if (e && n) {
    var o = e.x - n.x, r = e.y - n.y;
    return o * o + r * r > t * t;
} return !1; }
var PADDING_TIMER_KEY = "$ionPaddingTimer";
function enableScrollPadding(t, e) { function n(t) { setScrollPadding(t.target, e); } function o(t) { setScrollPadding(t.target, 0); } return t.addEventListener("focusin", n), t.addEventListener("focusout", o), function () { t.removeEventListener("focusin", n), t.removeEventListener("focusout", o); }; }
function setScrollPadding(t, e) { if ("INPUT" !== t.tagName)
    return; if (t.parentElement && "ION-INPUT" === t.parentElement.tagName)
    return; var n = t.closest("ion-content"); if (!n)
    return; var o = n[PADDING_TIMER_KEY]; o && clearTimeout(o), e > 0 ? n.style.setProperty("--keyboard-offset", e + "px") : n[PADDING_TIMER_KEY] = setTimeout(function () { n.style.setProperty("--keyboard-offset", "0px"); }, 120); }
var INPUT_BLURRING = !0, SCROLL_PADDING = !0;
function startInputShims(t, e) { var n = e.getNumber("keyboardHeight", 290), o = e.getBoolean("scrollAssist", !0), r = e.getBoolean("hideCaretOnScroll", !0), i = e.getBoolean("inputBlurring", !0), s = e.getBoolean("scrollPadding", !0), l = new WeakMap, c = new WeakMap; function a(t) { var e = (t.shadowRoot || t).querySelector("input"), i = t.closest("ion-content"), s = i && i.getScrollElement(); if (e) {
    if (s && r && !l.has(t)) {
        var n_2 = enableHideCaretOnScroll(t, e, s);
        l.set(t, n_2);
    }
    if (i && o && !c.has(t)) {
        var o_1 = enableScrollAssist(t, e, i, n);
        c.set(t, o_1);
    }
} } i && INPUT_BLURRING && enableInputBlurring(t), s && SCROLL_PADDING && enableScrollPadding(t, n); var u = Array.from(t.querySelectorAll("ion-input")); for (var _i = 0, u_1 = u; _i < u_1.length; _i++) {
    var t_1 = u_1[_i];
    a(t_1);
} t.body.addEventListener("ionInputDidLoad", function (t) { a(t.target); }), t.body.addEventListener("ionInputDidUnload", function (t) { !function (t) { if (r) {
    var e_1 = l.get(t);
    e_1 && e_1(), l.delete(t);
} if (o) {
    var e_2 = c.get(t);
    e_2 && e_2(), c.delete(t);
} }(t.target); }); }



/***/ })

}]);
//# sourceMappingURL=128.js.map