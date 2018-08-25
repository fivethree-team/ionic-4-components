(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/gesture.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/gesture.js ***!
  \**********************************************************/
/*! exports provided: createGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGesture", function() { return createGesture; });
var GestureController = /** @class */ (function () {
    function GestureController(t) {
        this.doc = t, this.gestureId = 0, this.requestedStart = new Map, this.disabledGestures = new Map, this.disabledScroll = new Set, this.capturedId = null;
    }
    GestureController.prototype.createGesture = function (t) { return new GestureDelegate(this, this.newID(), t.name, t.priority ? t.priority : 0, !!t.disableScroll); };
    GestureController.prototype.createBlocker = function (t) {
        if (t === void 0) { t = {}; }
        return new BlockerDelegate(this.newID(), this, t.disable, !!t.disableScroll);
    };
    GestureController.prototype.start = function (t, e, r) { return this.canStart(t) ? (this.requestedStart.set(e, r), !0) : (this.requestedStart.delete(e), !1); };
    GestureController.prototype.capture = function (t, e, r) { if (!this.start(t, e, r))
        return !1; var s = this.requestedStart; var i = -1e4; if (s.forEach(function (t) { i = Math.max(i, t); }), i === r) {
        this.capturedId = e, s.clear();
        var r_1 = new CustomEvent("ionGestureCaptured", { detail: t });
        return this.doc.body.dispatchEvent(r_1), !0;
    } return s.delete(e), !1; };
    GestureController.prototype.release = function (t) { this.requestedStart.delete(t), this.capturedId && t === this.capturedId && (this.capturedId = null); };
    GestureController.prototype.disableGesture = function (t, e) { var r = this.disabledGestures.get(t); r || (r = new Set, this.disabledGestures.set(t, r)), r.add(e); };
    GestureController.prototype.enableGesture = function (t, e) { var r = this.disabledGestures.get(t); r && r.delete(e); };
    GestureController.prototype.disableScroll = function (t) { this.disabledScroll.add(t); };
    GestureController.prototype.enableScroll = function (t) { this.disabledScroll.delete(t); };
    GestureController.prototype.canStart = function (t) { return !this.capturedId && !this.isDisabled(t); };
    GestureController.prototype.isCaptured = function () { return !!this.capturedId; };
    GestureController.prototype.isScrollDisabled = function () { return this.disabledScroll.size > 0; };
    GestureController.prototype.isDisabled = function (t) { var e = this.disabledGestures.get(t); return !!(e && e.size > 0); };
    GestureController.prototype.newID = function () { return this.gestureId++, this.gestureId; };
    return GestureController;
}());
var GestureDelegate = /** @class */ (function () {
    function GestureDelegate(t, e, r, s, i) {
        this.id = e, this.name = r, this.priority = s, this.disableScroll = i, this.ctrl = t;
    }
    GestureDelegate.prototype.canStart = function () { return !!this.ctrl && this.ctrl.canStart(this.name); };
    GestureDelegate.prototype.start = function () { return !!this.ctrl && this.ctrl.start(this.name, this.id, this.priority); };
    GestureDelegate.prototype.capture = function () { if (!this.ctrl)
        return !1; var t = this.ctrl.capture(this.name, this.id, this.priority); return t && this.disableScroll && this.ctrl.disableScroll(this.id), t; };
    GestureDelegate.prototype.release = function () { this.ctrl && (this.ctrl.release(this.id), this.disableScroll && this.ctrl.enableScroll(this.id)); };
    GestureDelegate.prototype.destroy = function () { this.release(), this.ctrl = void 0; };
    return GestureDelegate;
}());
var BlockerDelegate = /** @class */ (function () {
    function BlockerDelegate(t, e, r, s) {
        this.id = t, this.disable = r, this.disableScroll = s, this.ctrl = e;
    }
    BlockerDelegate.prototype.block = function () { if (this.ctrl) {
        if (this.disable)
            for (var _i = 0, _a = this.disable; _i < _a.length; _i++) {
                var t = _a[_i];
                this.ctrl.disableGesture(t, this.id);
            }
        this.disableScroll && this.ctrl.disableScroll(this.id);
    } };
    BlockerDelegate.prototype.unblock = function () { if (this.ctrl) {
        if (this.disable)
            for (var _i = 0, _a = this.disable; _i < _a.length; _i++) {
                var t = _a[_i];
                this.ctrl.enableGesture(t, this.id);
            }
        this.disableScroll && this.ctrl.enableScroll(this.id);
    } };
    BlockerDelegate.prototype.destroy = function () { this.unblock(), this.ctrl = void 0; };
    return BlockerDelegate;
}());
var gestureController = new GestureController(document);
var _sPassive;
function supportsPassive(t) { if (void 0 === _sPassive)
    try {
        var e = Object.defineProperty({}, "passive", { get: function () { _sPassive = !0; } });
        t.addEventListener("optsTest", function () { }, e);
    }
    catch (t) {
        _sPassive = !1;
    } return !!_sPassive; }
function addEventListener(t, e, r, s) { var i = supportsPassive(t) ? { capture: !!s.capture, passive: !!s.passive } : !!s.capture; var n, a; return t.__zone_symbol__addEventListener ? (n = "__zone_symbol__addEventListener", a = "__zone_symbol__removeEventListener") : (n = "addEventListener", a = "removeEventListener"), t[n](e, r, i), function () { t[a](e, r, i); }; }
var MOUSE_WAIT = 2e3;
function createPointerEvents(t, e, r, s, i) { var n, a, c, o, l, d, u, h = 0; function p(s) { h = Date.now() + MOUSE_WAIT, e(s) && (!a && r && (a = addEventListener(t, "touchmove", r, i)), c || (c = addEventListener(t, "touchend", b, i)), o || (o = addEventListener(t, "touchcancel", b, i))); } function v(s) { h > Date.now() || e(s) && (!d && r && (d = addEventListener(getDocument(t), "mousemove", r, i)), u || (u = addEventListener(getDocument(t), "mouseup", m, i))); } function b(t) { S(), s && s(t); } function m(t) { f(), s && s(t); } function S() { a && a(), c && c(), o && o(), a = c = o = void 0; } function f() { d && d(), u && u(), d = u = void 0; } function g() { S(), f(); } function y(e) { e ? (n && n(), l && l(), n = l = void 0, g()) : (n || (n = addEventListener(t, "touchstart", p, i)), l || (l = addEventListener(t, "mousedown", v, i))); } return { setDisabled: y, stop: g, destroy: function () { y(!0), s = r = e = void 0; } }; }
function getDocument(t) { return t instanceof Document ? t : t.ownerDocument; }
function createPanRecognizer(t, e, r) { var s = r * (Math.PI / 180), i = "x" === t, n = Math.cos(s), a = e * e; var c = 0, o = 0, l = !1, d = 0; return { start: function (t, e) { c = t, o = e, d = 0, l = !0; }, detect: function (t, e) { if (!l)
        return !1; var r = t - c, s = e - o, u = r * r + s * s; if (u < a)
        return !1; var h = Math.sqrt(u), p = (i ? r : s) / h; return d = p > n ? 1 : p < -n ? -1 : 0, l = !1, !0; }, isGesture: function () { return 0 !== d; }, getDirection: function () { return d; } }; }
function createGesture(t) { var e = Object.assign({ disableScroll: !1, direction: "x", gesturePriority: 0, passive: !0, maxAngle: 40, threshold: 10 }, t), r = e.canStart, s = e.onWillStart, i = e.onStart, n = e.onEnd, a = e.notCaptured, c = e.onMove, o = e.threshold, l = e.queue, d = { type: "pan", startX: 0, startY: 0, startTimeStamp: 0, currentX: 0, currentY: 0, velocityX: 0, velocityY: 0, deltaX: 0, deltaY: 0, timeStamp: 0, event: void 0, data: void 0 }, u = createPointerEvents(e.el, function (t) { var e = now(t); return !(b || !m) && (updateDetail(t, d), d.startX = d.currentX, d.startY = d.currentY, d.startTimeStamp = d.timeStamp = e, d.velocityX = d.velocityY = d.deltaX = d.deltaY = 0, d.event = t, (!r || !1 !== r(d)) && (p.release(), !!p.start() && (b = !0, 0 === o ? g() : (h.start(d.startX, d.startY), !0)))); }, function (t) { v ? !S && m && (S = !0, calcGestureData(d, t), l.write(f)) : (calcGestureData(d, t), h.detect(d.currentX, d.currentY) && (h.isGesture() && g() || (D(), u.stop(), a && a(d)))); }, function (t) { var e = v, r = m; D(), r && (calcGestureData(d, t), e ? n && n(d) : a && a(d)); }, { capture: !1 }), h = createPanRecognizer(e.direction, e.threshold, e.maxAngle), p = gestureController.createGesture({ name: t.gestureName, priority: t.gesturePriority, disableScroll: t.disableScroll }); var v = !1, b = !1, m = !0, S = !1; function f() { v && (S = !1, c && c(d)); } function g() { return !(p && !p.capture() || (v = !0, m = !1, d.startX = d.currentX, d.startY = d.currentY, d.startTimeStamp = d.timeStamp, s ? s(d).then(y) : y(), 0)); } function y() { i && i(d), m = !0; } function D() { v = !1, b = !1, S = !1, m = !0, p.release(); } return { setDisabled: function (t) { u.setDisabled(t); }, destroy: function () { p.destroy(), u.destroy(); } }; }
function calcGestureData(t, e) { var r = t.currentX, s = t.currentY, i = t.timeStamp; updateDetail(e, t); var n = t.currentX, a = t.currentY, c = (t.timeStamp = now(e)) - i; if (c > 0 && c < 100) {
    var e_1 = (n - r) / c, i_1 = (a - s) / c;
    t.velocityX = .7 * e_1 + .3 * t.velocityX, t.velocityY = .7 * i_1 + .3 * t.velocityY;
} t.deltaX = n - t.startX, t.deltaY = a - t.startY, t.event = e; }
function updateDetail(t, e) { var r = 0, s = 0; if (t) {
    var e_2 = t.changedTouches;
    if (e_2 && e_2.length > 0) {
        var t_1 = e_2[0];
        r = t_1.clientX, s = t_1.clientY;
    }
    else
        void 0 !== t.pageX && (r = t.pageX, s = t.pageY);
} e.currentX = r, e.currentY = s; }
function now(t) { return t.timeStamp || Date.now(); }



/***/ })

}]);
//# sourceMappingURL=123.js.map