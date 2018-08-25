(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

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

/***/ "./node_modules/@ionic/core/dist/esm/es5/dxbmesjc.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/dxbmesjc.js ***!
  \***********************************************************/
/*! exports provided: IonInfiniteScroll, IonInfiniteScrollContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonInfiniteScroll", function() { return InfiniteScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonInfiniteScrollContent", function() { return InfiniteScrollContent; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-f7b6af08.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-f7b6af08.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=undefined&&undefined.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,r){function l(t){try{a(i.next(t))}catch(t){r(t)}}function s(t){try{a(i.throw(t))}catch(t){r(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(l,s)}a((i=i.apply(t,e||[])).next())})},__generator=undefined&&undefined.__generator||function(t,e){var n,i,o,r,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return l.label++,{value:r[1],done:!1};case 5:l.label++,i=r[1],r=[0];continue;case 7:r=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){l=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){l.label=r[1];break}if(6===r[0]&&l.label<o[1]){l.label=o[1],o=r;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(r);break}o[2]&&l.ops.pop(),l.trys.pop();continue}r=e.call(t,l)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};var InfiniteScroll=function(){function t(){this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom"}return t.prototype.thresholdChanged=function(t){t.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(t)/100):(this.thrPx=parseFloat(t),this.thrPc=0)},t.prototype.disabledChanged=function(t){this.enableScrollEvents(!t)},t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t,e=this;return __generator(this,function(n){switch(n.label){case 0:return(t=this.el.closest("ion-content"))?[4,t.componentOnReady()]:[3,2];case 1:n.sent(),this.scrollEl=t.getScrollElement(),n.label=2;case 2:return this.thresholdChanged(this.threshold),this.enableScrollEvents(!this.disabled),"top"===this.position&&this.queue.write(function(){return e.scrollEl&&e.scrollEl.scrollToBottom(0)}),[2]}})})},t.prototype.componentDidUnload=function(){this.scrollEl=void 0},t.prototype.onScroll=function(){var t=this.scrollEl;if(!t||!this.canStart())return 1;var e=this.el.offsetHeight;if(!e)return 2;var n=t.scrollTop,i=t.scrollHeight,o=t.offsetHeight,r=this.thrPc?o*this.thrPc:this.thrPx;if(("bottom"===this.position?i-e-n-r-o:n-e-r)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4},t.prototype.complete=function(){var t=this,e=this.scrollEl;if(this.isLoading&&e&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;var n=e.scrollHeight-e.scrollTop;this.queue.read(function(){var i=e.scrollHeight-n;t.queue.write(function(){e.scrollTop=i,t.isBusy=!1})})}},t.prototype.waitFor=function(t){var e=this.complete.bind(this);t.then(e,e)},t.prototype.canStart=function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)},t.prototype.enableScrollEvents=function(t){this.scrollEl&&this.enableListener(this,"scroll",t,this.scrollEl)},t.prototype.hostData=function(){return{class:{"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!this.disabled}}},Object.defineProperty(t,"is",{get:function(){return"ion-infinite-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},enableListener:{context:"enableListener"},isLoading:{state:!0},position:{type:String,attr:"position"},queue:{context:"queue"},threshold:{type:String,attr:"threshold",watchCallbacks:["thresholdChanged"]},waitFor:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionInfinite",method:"ionInfinite",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:!0,configurable:!0}),t}(),InfiniteScrollContent=function(){function t(){}return t.prototype.componentDidLoad=function(){this.loadingSpinner||(this.loadingSpinner=this.config.get("infiniteLoadingSpinner",this.config.get("spinner","lines")))},t.prototype.hostData=function(){return{class:Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.mode,"infinite-scroll-content")}},t.prototype.render=function(){return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"infinite-loading"},this.loadingSpinner&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"infinite-loading-spinner"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"infinite-loading-text",innerHTML:this.loadingText}))},Object.defineProperty(t,"is",{get:function(){return"ion-infinite-scroll-content"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{config:{context:"config"},loadingSpinner:{type:String,attr:"loading-spinner",mutable:!0},loadingText:{type:String,attr:"loading-text"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-infinite-scroll-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin:0 0 32px;display:none;width:100%}.infinite-loading-text{margin:4px 32px 0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-text-color-step-400,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line{stroke:var(--ion-text-color-step-400,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-text-color-step-400,#666)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();

/***/ })

}]);
//# sourceMappingURL=55.js.map