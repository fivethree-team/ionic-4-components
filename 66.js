(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-f7b6af08.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-f7b6af08.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createThemedClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return openURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getClassMap; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function hostContext(e, t) { return !!t.closest(e); }
function createColorClasses(e) { var _a; return e ? (_a = { "ion-color": !0 }, _a["ion-color-" + e] = !0, _a) : null; }
function createThemedClasses(e, t) { var _a; return _a = {}, _a[t] = !0, _a[t + "-" + e] = !!e, _a; }
function getClassList(e) { return e ? (Array.isArray(e) ? e : e.split(" ")).filter(function (e) { return null != e; }).map(function (e) { return e.trim(); }).filter(function (e) { return "" !== e; }) : []; }
function getClassMap(e) { var t = {}; return getClassList(e).forEach(function (e) { return t[e] = !0; }), t; }
function openURL(e, t, r, s) {
    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(t && "#" !== t[0] && -1 === t.indexOf("://"))) return [3 /*break*/, 2];
                o = e.document.querySelector("ion-router");
                if (!o) return [3 /*break*/, 2];
                r && r.preventDefault();
                return [4 /*yield*/, o.componentOnReady()];
            case 1: return [2 /*return*/, (_a.sent(), o.push(t, s))];
            case 2: return [2 /*return*/, Promise.resolve()];
        }
    }); });
}



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/qgzq3x4z.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/qgzq3x4z.js ***!
  \***********************************************************/
/*! exports provided: IonLoading, IonLoadingController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonLoading", function() { return Loading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonLoadingController", function() { return LoadingController; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_13543983_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-13543983.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-13543983.js");
/* harmony import */ var _chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-f7b6af08.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-f7b6af08.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=undefined&&undefined.__awaiter||function(e,n,t,o){return new(t||(t=Promise))(function(i,a){function r(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){e.done?i(e.value):new t(function(n){n(e.value)}).then(r,s)}l((o=o.apply(e,n||[])).next())})},__generator=undefined&&undefined.__generator||function(e,n){var t,o,i,a,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,o&&(i=2&a[0]?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,o=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){r=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(6===a[0]&&r.label<i[1]){r.label=i[1],i=a;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(a);break}i[2]&&r.ops.pop(),r.trys.pop();continue}a=n.call(e,r)}catch(e){a=[6,e],o=0}finally{t=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};function iosEnterAnimation(e,n){var t=new e,o=new e;o.addElement(n.querySelector("ion-backdrop"));var i=new e;return i.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.01,.3),i.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(t.addElement(n).easing("ease-in-out").duration(200).add(o).add(i))}function iosLeaveAnimation(e,n){var t=new e,o=new e;o.addElement(n.querySelector("ion-backdrop"));var i=new e;return i.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.3,0),i.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(t.addElement(n).easing("ease-in-out").duration(200).add(o).add(i))}function mdEnterAnimation(e,n){var t=new e,o=new e;o.addElement(n.querySelector("ion-backdrop"));var i=new e;return i.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.01,.5),i.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(t.addElement(n).easing("ease-in-out").duration(200).add(o).add(i))}function mdLeaveAnimation(e,n){var t=new e,o=new e;o.addElement(n.querySelector("ion-backdrop"));var i=new e;return i.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.5,0),i.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(t.addElement(n).easing("ease-in-out").duration(200).add(o).add(i))}var Loading=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.dismissOnPageChange=!1,this.enableBackdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.willAnimate=!0}return e.prototype.componentWillLoad=function(){this.spinner||(this.spinner=this.config.get("loadingSpinner","ios"===this.mode?"lines":"crescent"))},e.prototype.componentDidLoad=function(){this.ionLoadingDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionLoadingDidUnload.emit()},e.prototype.onBackdropTap=function(){this.dismiss(null,_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_1__["e"])},e.prototype.present=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(n){switch(n.label){case 0:return[4,Object(_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this,"loadingEnter",iosEnterAnimation,mdEnterAnimation,void 0)];case 1:return n.sent(),this.duration&&(this.durationTimeout=setTimeout(function(){return e.dismiss()},this.duration+10)),[2]}})})},e.prototype.dismiss=function(e,n){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_1__["f"])(this,e,n,"loadingLeave",iosLeaveAnimation,mdLeaveAnimation)},e.prototype.onDidDismiss=function(e){return Object(_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this.el,"ionLoadingDidDismiss",e)},e.prototype.onWillDismiss=function(e){return Object(_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this.el,"ionLoadingWillDismiss",e)},e.prototype.hostData=function(){var e=this.translucent?Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.mode,"loading-translucent"):{};return{style:{zIndex:2e4+this.overlayId},class:Object.assign({},Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.mode,"loading"),e,Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this.cssClass))}},e.prototype.render=function(){return[Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop",{visible:this.showBackdrop,tappable:!1}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"loading-wrapper",role:"dialog"},"hide"!==this.spinner&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"loading-spinner"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner",{name:this.spinner})),this.content&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"loading-content"},this.content))]},Object.defineProperty(e,"is",{get:function(){return"ion-loading"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animationCtrl:{connect:"ion-animation-controller"},config:{context:"config"},content:{type:String,attr:"content"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},dismissOnPageChange:{type:Boolean,attr:"dismiss-on-page-change"},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enableBackdropDismiss:{type:Boolean,attr:"enable-backdrop-dismiss"},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayId:{type:Number,attr:"overlay-id"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},spinner:{type:String,attr:"spinner",mutable:!0},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionLoadingDidUnload",method:"ionLoadingDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingDidLoad",method:"ionLoadingDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-loading{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;contain:strict;-ms-touch-action:none;touch-action:none;z-index:1000}ion-loading-controller{display:none}.loading-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;z-index:10}.loading-ios{font-family:var(--ion-font-family,inherit);font-size:14px}.loading-ios .loading-wrapper{border-radius:8px;padding:24px 34px;max-width:270px;max-height:90%;background-color:var(--ion-background-color-step-50,#f2f2f2);color:var(--ion-text-color,#000)}.loading-translucent-ios .loading-wrapper{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.loading-ios .loading-content{font-weight:700}.loading-ios .loading-spinner+.loading-content{margin-left:16px}.loading-ios .spinner-lines-ios line,.loading-ios .spinner-lines-small-ios line{stroke:var(--ion-text-color-step-400,#666)}.loading-ios .spinner-bubbles circle,.loading-ios .spinner-circles circle{fill:var(--ion-text-color-step-400,#666)}.loading-ios .spinner-crescent circle{stroke:var(--ion-text-color-step-400,#666)}.loading-ios .spinner-dots circle{fill:var(--ion-text-color-step-400,#666)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),LoadingController=function(){function e(){this.loadings=new Map}return e.prototype.loadingWillPresent=function(e){this.loadings.set(e.target.overlayId,e.target)},e.prototype.loadingWillDismiss=function(e){this.loadings.delete(e.target.overlayId)},e.prototype.escapeKeyUp=function(){Object(_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this.loadings)},e.prototype.create=function(e){return Object(_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.doc.createElement("ion-loading"),e)},e.prototype.dismiss=function(e,n,t){return void 0===t&&(t=-1),Object(_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_1__["b"])(e,n,this.loadings,t)},e.prototype.getTop=function(){return Object(_chunk_13543983_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this.loadings)},Object.defineProperty(e,"is",{get:function(){return"ion-loading-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"body:ionLoadingWillPresent",method:"loadingWillPresent"},{name:"body:ionLoadingWillDismiss",method:"loadingWillDismiss"},{name:"body:ionLoadingDidUnload",method:"loadingWillDismiss"},{name:"body:keyup.escape",method:"escapeKeyUp"}]},enumerable:!0,configurable:!0}),e}();

/***/ })

}]);
//# sourceMappingURL=66.js.map