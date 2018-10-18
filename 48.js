(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-b9ec67ac.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-b9ec67ac.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return openURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return createThemedClasses; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
function attachComponent(e,t,n,r,i){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var o;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(a){switch(a.label){case 0:if(e)return[2,e.attachViewToDom(t,n,i,r)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return o="string"==typeof n?t.ownerDocument.createElement(n):n,r&&r.forEach(function(e){return o.classList.add(e)}),i&&Object.assign(o,i),t.appendChild(o),o.componentOnReady?[4,o.componentOnReady()]:[3,2];case 1:a.sent(),a.label=2;case 2:return[2,o]}})})}function detachComponent(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}function hapticSelection(){var e=window.TapticEngine;e&&e.selection()}function hapticSelectionStart(){var e=window.TapticEngine;e&&e.gestureSelectionStart()}function hapticSelectionChanged(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()}function hapticSelectionEnd(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}function hostContext(e,t){return null!==t.closest(e)}function createColorClasses(e){var t;return"string"==typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0}function createThemedClasses(e,t){var n;return(n={})[t]=!0,n[t+"-"+e]=!!e,n}function getClassList(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(function(e){return null!=e}).map(function(e){return e.trim()}).filter(function(e){return""!==e}):[]}function getClassMap(e){var t={};return getClassList(e).forEach(function(e){return t[e]=!0}),t}function openURL(e,t,n,r){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(o){switch(o.label){case 0:return null==t||"#"===t[0]||-1!==t.indexOf("://")?[3,2]:(i=e.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return o.sent(),[2,i.push(t,r)];case 2:return[2,!1]}})})}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/ciqsj4dy.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/ciqsj4dy.entry.js ***!
  \***********************************************************************/
/*! exports provided: IonTab, IonTabbar, IonTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonTab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonTabbar", function() { return Tabbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonTabs", function() { return Tabs; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-b9ec67ac.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-b9ec67ac.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var Tab=function(){function t(){this.loaded=!1,this.active=!1,this.disabled=!1,this.selected=!1,this.show=!0,this.tabsHideOnSubPages=!1}return t.prototype.selectedChanged=function(t){t&&this.ionSelect.emit()},t.prototype.componentWillLoad=function(){void 0===this.name&&"string"==typeof this.component&&(this.name=this.component)},t.prototype.onPropChanged=function(){this.ionTabMutated.emit()},t.prototype.setActive=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return[4,this.prepareLazyLoaded()];case 1:return t.sent(),this.active=!0,[2]}})})},t.prototype.prepareLazyLoaded=function(){return this.loaded||null==this.component?Promise.resolve():(this.loaded=!0,Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.delegate,this.el,this.component,["ion-page"]))},t.prototype.hostData=function(){var t=this.active;return{"aria-labelledby":this.btnId,"aria-hidden":t?null:"true",role:"tabpanel",class:{"ion-page":void 0===this.component,"tab-hidden":!t}}},t.prototype.render=function(){return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-tab"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{active:{type:Boolean,attr:"active",mutable:!0},badge:{type:String,attr:"badge",watchCallbacks:["onPropChanged"]},badgeColor:{type:String,attr:"badge-color",watchCallbacks:["onPropChanged"]},btnId:{type:String,attr:"btn-id"},component:{type:String,attr:"component"},delegate:{type:"Any",attr:"delegate"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["onPropChanged"]},el:{elementRef:!0},href:{type:String,attr:"href",watchCallbacks:["onPropChanged"]},icon:{type:String,attr:"icon",watchCallbacks:["onPropChanged"]},label:{type:String,attr:"label",watchCallbacks:["onPropChanged"]},name:{type:String,attr:"name",mutable:!0},selected:{type:Boolean,attr:"selected",watchCallbacks:["selectedChanged"]},setActive:{method:!0},show:{type:Boolean,attr:"show",watchCallbacks:["onPropChanged"]},tabsHideOnSubPages:{type:Boolean,attr:"tabs-hide-on-sub-pages"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0},{name:"ionTabMutated",method:"ionTabMutated",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host(.tab-hidden){display:none!important}"},enumerable:!0,configurable:!0}),t}(),Tabbar=function(){function t(){this.canScrollLeft=!1,this.canScrollRight=!1,this.keyboardVisible=!1,this.layout="icon-top",this.placement="bottom",this.tabs=[],this.highlight=!1,this.translucent=!1}return t.prototype.onKeyboardWillHide=function(){var t=this;setTimeout(function(){return t.keyboardVisible=!1},50)},t.prototype.onKeyboardWillShow=function(){"bottom"===this.placement&&(this.keyboardVisible=!0)},t.prototype.componentDidLoad=function(){this.updateHighlight()},t.prototype.updateHighlight=function(){var t=this;this.highlight&&this.queue.read(function(){var e=t.el.shadowRoot.querySelector(".tab-btn-selected"),n=t.el.shadowRoot.querySelector(".tabbar-highlight");e&&n&&(n.style.transform="translate3d("+e.offsetLeft+"px,0,0) scaleX("+e.offsetWidth+")")})},t.prototype.hostData=function(){var t,e=this,n=e.translucent,a=e.layout,i=e.placement,o=e.keyboardVisible;return{role:"tablist","aria-hidden":o?"true":null,slot:"tabbar",class:Object.assign({},Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["h"])(e.color),(t={"tabbar-translucent":n},t["layout-"+a]=!0,t["placement-"+i]=!0,t["tabbar-hidden"]=o,t))}},t.prototype.renderTabButton=function(t){var e=this,n=t.icon,a=t.label,i=t.badge,o=t.badgeColor,r=t===this.selectedTab,s=void 0!==a,l=void 0!==n;return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("a",{role:"tab","ion-activatable":!0,"aria-selected":r?"true":null,href:t.href||"#",class:{"tab-btn":!0,"tab-btn-selected":r,"tab-btn-has-label":s,"tab-btn-has-icon":l,"tab-btn-has-label-only":s&&!l,"tab-btn-has-icon-only":l&&!s,"tab-btn-has-badge":void 0!==i,"tab-btn-disabled":t.disabled,"tab-btn-hidden":!t.show},onClick:function(n){t.disabled||e.ionTabbarClick.emit(t),n.preventDefault()}},n&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon",{class:"tab-btn-icon",icon:n,lazy:!1}),a&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span",{class:"tab-btn-text"},a),i&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-badge",{class:"tab-btn-badge",color:o},i),"md"===this.mode&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect",null))},t.prototype.render=function(){var t=this;return[this.tabs.map(function(e){return t.renderTabButton(e)}),this.highlight&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"animated tabbar-highlight"})]},Object.defineProperty(t,"is",{get:function(){return"ion-tabbar"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{canScrollLeft:{state:!0},canScrollRight:{state:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},highlight:{type:Boolean,attr:"highlight"},keyboardVisible:{state:!0},layout:{type:String,attr:"layout"},mode:{type:String,attr:"mode"},placement:{type:String,attr:"placement"},queue:{context:"queue"},selectedTab:{type:"Any",attr:"selected-tab",watchCallbacks:["updateHighlight"]},tabs:{type:"Any",attr:"tabs"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionTabbarClick",method:"ionTabbarClick",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"body:keyboardWillHide",method:"onKeyboardWillHide"},{name:"body:keyboardWillShow",method:"onKeyboardWillShow"},{name:"window:resize",method:"updateHighlight",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-tabbar-md-h{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;width:auto;background:var(--background);color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box;box-sizing:content-box}.ion-color.sc-ion-tabbar-md-h{--background:var(--ion-color-base);--color:rgba(var(--ion-color-contrast-rgb), 0.7);--color-selected:var(--ion-color-contrast)}.tabbar-hidden.sc-ion-tabbar-md-h{display:none!important}.placement-top.sc-ion-tabbar-md-h{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.placement-bottom.sc-ion-tabbar-md-h{padding-bottom:var(--ion-safe-area-bottom,0)}.tabbar-highlight.sc-ion-tabbar-md{left:0;bottom:0;-webkit-transform-origin:0 0;transform-origin:0 0;display:block;position:absolute;width:1px;height:2px;-webkit-transform:translateZ(0);transform:translateZ(0);background:currentColor}.tabbar-highlight.animated.sc-ion-tabbar-md{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform}.placement-top.sc-ion-tabbar-md-h   .tabbar-highlight.sc-ion-tabbar-md{bottom:0}.placement-bottom.sc-ion-tabbar-md-h   .tabbar-highlight.sc-ion-tabbar-md{top:0}.layout-icon-start.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout-icon-end.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.layout-icon-bottom.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.layout-icon-end.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-icon-hide.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-icon-start.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-label-hide.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.layout-icon-hide.sc-ion-tabbar-md-h{--icon-display:none}.layout-label-hide.sc-ion-tabbar-md-h{--label-display:none}.layout-icon-bottom.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-icon-top.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--badge-end:calc(50% - 30px)}.layout-icon-end.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-icon-hide.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-icon-start.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--badge-end:calc(50% - 50px)}.tab-btn.sc-ion-tabbar-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;height:100%;border:0;outline:0;background:0 0;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.tab-btn.sc-ion-tabbar-md:focus-visible{background:var(--background-focused)}\@media (any-hover:hover){.tab-btn.sc-ion-tabbar-md:hover{color:var(--color-selected)}}.tab-btn-selected.sc-ion-tabbar-md{color:var(--color-selected)}.tab-btn-hidden.sc-ion-tabbar-md{display:none!important}.tab-btn-disabled.sc-ion-tabbar-md{pointer-events:none;opacity:.4}.tab-btn-text.sc-ion-tabbar-md{margin-top:var(--label-margin-top);margin-bottom:var(--label-margin-bottom);display:var(--label-display,block);font-size:var(--label-font-size);line-height:var(--label-line-height)}.tab-btn-icon.sc-ion-tabbar-md{margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:var(--icon-display,block);min-width:var(--icon-min-width);height:var(--icon-height,1em);font-size:var(--icon-font-size)}.tab-btn-icon.sc-ion-tabbar-md, .tab-btn-text.sc-ion-tabbar-md{-ms-flex-item-align:center;align-self:center;min-width:26px;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.tab-btn-has-label-only.sc-ion-tabbar-md   .tab-btn-text.sc-ion-tabbar-md{white-space:normal}.tab-btn-has-icon-only.sc-ion-tabbar-md, .tab-btn-has-label-only.sc-ion-tabbar-md{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tab-btn-badge.sc-ion-tabbar-md{right:4%;top:6%;right:calc(50% - 30px);padding:1px 6px;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;height:auto;font-size:12px;line-height:16px}.tab-btn-has-label-only.sc-ion-tabbar-md   .tab-btn-badge.sc-ion-tabbar-md{right:calc(50% - 50px)}.tab-btn-has-icon-only.sc-ion-tabbar-md   .tab-btn-badge.sc-ion-tabbar-md{right:calc(50% - 30px)}.tab-btn-selected.sc-ion-tabbar-md   .tab-btn-icon.sc-ion-tabbar-md{-webkit-transform:var(--icon-transform-selected);transform:var(--icon-transform-selected)}.tab-btn.sc-ion-tabbar-md{padding:8px 12px 10px;max-width:168px}.tab-btn-text.sc-ion-tabbar-md{margin:0;-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-transform:var(--label-transform);transform:var(--label-transform);-webkit-transition:-webkit-transform .1s ease-in-out;transition:-webkit-transform .1s ease-in-out;transition:transform .1s ease-in-out;transition:transform .1s ease-in-out,-webkit-transform .1s ease-in-out;text-transform:none}.tab-btn-selected.sc-ion-tabbar-md   .tab-btn-text.sc-ion-tabbar-md{-webkit-transform:scale3d(1.16667,1.16667,1);transform:scale3d(1.16667,1.16667,1);-webkit-transition:-webkit-transform .1s ease-in-out;transition:-webkit-transform .1s ease-in-out;transition:transform .1s ease-in-out;transition:transform .1s ease-in-out,-webkit-transform .1s ease-in-out}.tab-btn-icon.sc-ion-tabbar-md{-webkit-transform-origin:center center;transform-origin:center center;width:22px;height:22px;-webkit-transform:var(--icon-transform);transform:var(--icon-transform);-webkit-transition:-webkit-transform .1s ease-in-out;transition:-webkit-transform .1s ease-in-out;transition:transform .1s ease-in-out;transition:transform .1s ease-in-out,-webkit-transform .1s ease-in-out;font-size:22px}.sc-ion-tabbar-md-h{--color:var(--ion-tabbar-text-color, var(--ion-text-color-step-400, #666666));--color-selected:var(--ion-tabbar-text-color-active, #488aff);--background:var(--ion-tabbar-background-color, #f8f8f8);--background-focused:var(--ion-tabbar-background-color-focused, #dadada);--icon-transform-selected:translate3d(0, -2px, 0);height:56px;border-top:1px solid rgba(var(--ion-tabbar-border-color-rgb,0,0,0),.07);font-size:12px;font-weight:400;contain:strict}.layout-icon-top.sc-ion-tabbar-md-h{--label-margin-bottom:-2px}.layout-icon-end.sc-ion-tabbar-md-h{--icon-transform-selected:translate3d(6px, 0, 0)}.layout-icon-bottom.sc-ion-tabbar-md-h{--label-margin-top:-2px;--label-transform:transform-origin(center, top);--icon-transform-selected:translate3d(0, 2px, 0)}.layout-icon-start.sc-ion-tabbar-md-h{--icon-transform-selected:translate3d(-6px, 0, 0)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),Tabs=function(){function t(){this.ids=-1,this.transitioning=!1,this.tabsId=++tabIds,this.tabs=[],this.tabbarHidden=!1,this.useRouter=!1}return t.prototype.componentWillLoad=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){return this.useRouter||(this.useRouter=!!this.doc.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.userTabbarEl=this.el.querySelector("ion-tabbar")||void 0,this.initTabs(),this.ionNavWillLoad.emit(),this.componentWillUpdate(),[2]})})},t.prototype.componentDidLoad=function(){this.initSelect()},t.prototype.componentDidUnload=function(){this.tabs.length=0,this.selectedTab=this.leavingTab=void 0},t.prototype.componentWillUpdate=function(){var t=this.userTabbarEl;t&&(t.tabs=this.tabs.slice(),t.selectedTab=this.selectedTab)},t.prototype.onTabMutated=function(){this.el.forceUpdate()},t.prototype.onTabClicked=function(t){var e=t.detail,n=e.href;if(this.useRouter&&void 0!==n){var a=this.doc.querySelector("ion-router");a&&a.push(n)}else this.select(e)},t.prototype.select=function(t){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var e;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(n){switch(n.label){case 0:return[4,this.getTab(t)];case 1:return e=n.sent(),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,!1];case 2:return n.sent(),[4,this.notifyRouter()];case 3:return n.sent(),this.tabSwitch(),[2,!0]}})})},t.prototype.setRouteId=function(t){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var e,n=this;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(a){switch(a.label){case 0:return[4,this.getTab(t)];case 1:return e=a.sent(),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,{changed:!1,element:this.selectedTab}];case 2:return a.sent(),[2,{changed:!0,element:this.selectedTab,markVisible:function(){return n.tabSwitch()}}]}})})},t.prototype.getRouteId=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var t;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(e){return[2,void 0!==(t=this.selectedTab&&this.selectedTab.name)?{id:t,element:this.selectedTab}:void 0]})})},t.prototype.getTab=function(t){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(e){return"string"==typeof t?[2,this.tabs.find(function(e){return e.name===t})]:"number"==typeof t?[2,this.tabs[t]]:[2,t]})})},t.prototype.getSelected=function(){return Promise.resolve(this.selectedTab)},t.prototype.initTabs=function(){var t=this;(this.tabs=Array.from(this.el.querySelectorAll("ion-tab"))).forEach(function(e){var n="t-"+t.tabsId+"-"+ ++t.ids;e.btnId="tab-"+n,e.id="tabpanel-"+n})},t.prototype.initSelect=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var t,e,n,a,i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(o){switch(o.label){case 0:return t=this.tabs,[4,Promise.all(t.map(function(t){return t.componentOnReady()}))];case 1:if(o.sent(),this.useRouter)return[2];for(e=t.find(function(t){return t.selected})||t.find(function(t){return t.show&&!t.disabled}),n=0,a=t;n<a.length;n++)(i=a[n])!==e&&(i.selected=!1);return e?[4,e.setActive()]:[3,3];case 2:o.sent(),o.label=3;case 3:return this.selectedTab=e,e&&(e.selected=!0,e.active=!0),[2]}})})},t.prototype.setActive=function(t){if(this.transitioning)return Promise.reject("transitioning already happening");for(var e=0,n=this.tabs;e<n.length;e++){var a=n[e];t!==a&&(a.selected=!1)}return this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionNavWillChange.emit(),t.setActive()},t.prototype.tabSwitch=function(){var t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&(t.selected=!0,e!==t&&(e&&(e.active=!1),this.ionChange.emit({tab:t}),this.ionNavDidChange.emit()))},t.prototype.notifyRouter=function(){if(this.useRouter){var t=this.doc.querySelector("ion-router");if(t)return t.navChanged(1)}return Promise.resolve(!1)},t.prototype.shouldSwitch=function(t){return void 0!==t&&t!==this.selectedTab&&!this.transitioning},t.prototype.hostData=function(){return{class:{"tabbar-hidden":this.tabbarHidden}}},t.prototype.render=function(){return[Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"tabs-inner"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",null)),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"tabbar"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-tabbar",{tabs:this.tabs.slice(),selectedTab:this.selectedTab}))]},Object.defineProperty(t,"is",{get:function(){return"ion-tabs"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{config:{context:"config"},doc:{context:"document"},el:{elementRef:!0},getRouteId:{method:!0},getSelected:{method:!0},getTab:{method:!0},name:{type:String,attr:"name"},select:{method:!0},selectedTab:{state:!0},setRouteId:{method:!0},tabbarHidden:{type:Boolean,attr:"tabbar-hidden"},tabs:{state:!0},useRouter:{type:Boolean,attr:"use-router",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionTabMutated",method:"onTabMutated"},{name:"ionTabbarClick",method:"onTabClicked"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;contain:layout size style}:host(.tabbar-hidden) ion-tabbar,:host(.tabbar-hidden)::slotted(ion-tabbar){display:none}"},enumerable:!0,configurable:!0}),t}(),tabIds=-1;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js ***!
  \******************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
// REV: 9dd9aa322c893e5e0b3f1609b1126314ccf37bbb

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
          t[p[i]] = s[p[i]];
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
  if (m) return m.call(o);
  return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

/***/ })

}]);
//# sourceMappingURL=48.js.map