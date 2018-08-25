(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-db5a015e.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-db5a015e.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelection; });
function hapticSelection() { var n = window.TapticEngine; n && n.selection(); }
function hapticSelectionStart() { var n = window.TapticEngine; n && n.gestureSelectionStart(); }
function hapticSelectionChanged() { var n = window.TapticEngine; n && n.gestureSelectionChanged(); }
function hapticSelectionEnd() { var n = window.TapticEngine; n && n.gestureSelectionEnd(); }



/***/ }),

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

/***/ "./node_modules/@ionic/core/dist/esm/es5/ynadt7z4.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/ynadt7z4.js ***!
  \***********************************************************/
/*! exports provided: IonReorderGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonReorderGroup", function() { return ReorderGroup; });
/* harmony import */ var _chunk_db5a015e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-db5a015e.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-db5a015e.js");
/* harmony import */ var _chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-f7b6af08.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-f7b6af08.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=undefined&&undefined.__awaiter||function(t,e,r,o){return new(r||(r=Promise))(function(n,i){function s(t){try{a(o.next(t))}catch(t){i(t)}}function l(t){try{a(o.throw(t))}catch(t){i(t)}}function a(t){t.done?n(t.value):new r(function(e){e(t.value)}).then(s,l)}a((o=o.apply(t,e||[])).next())})},__generator=undefined&&undefined.__generator||function(t,e){var r,o,n,i,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(n=2&i[0]?o.return:i[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,i[1])).done)return n;switch(o=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){s.label=i[1];break}if(6===i[0]&&s.label<n[1]){s.label=n[1],n=i;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(i);break}n[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],o=0}finally{r=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};var ReorderGroup=function(){function t(){this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.activated=!1,this.disabled=!0}return t.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(r){switch(r.label){case 0:return(t=this.el.closest("ion-content"))?[4,t.componentOnReady()]:[3,2];case 1:r.sent(),this.scrollEl=t.getScrollElement(),r.label=2;case 2:return e=this,[4,__webpack_require__.e(/*! import() */ 123).then(__webpack_require__.bind(null, /*! ./gesture.js */ "./node_modules/@ionic/core/dist/esm/es5/gesture.js"))];case 3:return e.gesture=r.sent().createGesture({el:this.doc.body,queue:this.queue,gestureName:"reorder",gesturePriority:90,disableScroll:!0,threshold:0,direction:"y",passive:!1,canStart:this.canStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this)}),this.disabledChanged(),[2]}})})},t.prototype.componentDidUnload=function(){this.onDragEnd()},t.prototype.canStart=function(t){if(this.selectedItemEl)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var r=findReorderItem(e,this.el);return r?(t.data=r,!0):(console.error("reorder node not found"),!1)},t.prototype.onDragStart=function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,r=this.cachedHeights;r.length=0;var o=this.el.children;if(o&&0!==o.length){for(var n=0,i=0;i<o.length;i++){var s=o[i];n+=s.offsetHeight,r.push(n),s.$ionIndex=i}var l=this.el.getBoundingClientRect();if(this.containerTop=l.top,this.containerBottom=l.bottom,this.scrollEl){var a=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=a.top+AUTO_SCROLL_MARGIN,this.scrollElBottom=a.bottom-AUTO_SCROLL_MARGIN}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=indexForItem(e),this.selectedItemHeight=e.offsetHeight,this.activated=!0,e.classList.add(ITEM_REORDER_SELECTED),Object(_chunk_db5a015e_js__WEBPACK_IMPORTED_MODULE_0__["c"])()}},t.prototype.onDragMove=function(t){var e=this.selectedItemEl;if(e){var r=this.autoscroll(t.currentY),o=this.containerTop-r,n=this.containerBottom-r,i=Math.max(o,Math.min(t.currentY,n)),s=r+i-t.startY,l=i-o,a=this.itemIndexForTop(l);if(void 0!==a&&a!==this.lastToIndex){var c=indexForItem(e);this.lastToIndex=a,Object(_chunk_db5a015e_js__WEBPACK_IMPORTED_MODULE_0__["a"])(),this.reorderMove(c,a)}e.style.transform="translateY("+s+"px)"}},t.prototype.onDragEnd=function(){var t=this;this.activated=!1;var e=this.selectedItemEl;if(e){var r=this.el.children,o=this.lastToIndex,n=indexForItem(e),i=n<o?r[o+1]:r[o];this.el.insertBefore(e,i);for(var s=r.length,l=0;l<s;l++)r[l].style.transform="";var a=function(){t.selectedItemEl&&(t.selectedItemEl.style.transition="",t.selectedItemEl.classList.remove(ITEM_REORDER_SELECTED),t.selectedItemEl=void 0)};o===n?(e.style.transition="transform 200ms ease-in-out",setTimeout(a,200)):a(),Object(_chunk_db5a015e_js__WEBPACK_IMPORTED_MODULE_0__["b"])()}},t.prototype.itemIndexForTop=function(t){var e=this.cachedHeights,r=0;for(r=0;r<e.length&&!(e[r]>t);r++);return r},t.prototype.reorderMove=function(t,e){for(var r=this.selectedItemHeight,o=this.el.children,n=0;n<o.length;n++){var i="";n>t&&n<=e?i="translateY("+-r+"px)":n<t&&n>=e&&(i="translateY("+r+"px)"),o[n].style.transform=i}},t.prototype.autoscroll=function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-SCROLL_JUMP:t>this.scrollElBottom&&(e=SCROLL_JUMP),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial},t.prototype.hostData=function(){return{class:Object.assign({},Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.mode,"reorder-group"),{"reorder-enabled":!this.disabled,"reorder-list-active":this.activated})}},Object.defineProperty(t,"is",{get:function(){return"ion-reorder-group"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activated:{state:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},queue:{context:"queue"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}"},enumerable:!0,configurable:!0}),t}();function indexForItem(t){return t.$ionIndex}function findReorderItem(t,e){for(var r,o=0;t&&o<6;){if((r=t.parentNode)===e)return t;t=r,o++}return null}var AUTO_SCROLL_MARGIN=60,SCROLL_JUMP=10,ITEM_REORDER_SELECTED="reorder-selected";

/***/ })

}]);
//# sourceMappingURL=81.js.map