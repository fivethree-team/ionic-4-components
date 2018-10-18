(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[164],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/ios.transition.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/ios.transition.js ***!
  \***********************************************************************/
/*! exports provided: shadow, iosTransitionAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosTransitionAnimation", function() { return iosTransitionAnimation; });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var DURATION=500,EASING="cubic-bezier(0.36,0.66,0.04,1)",OPACITY="opacity",TRANSFORM="transform",TRANSLATEX="translateX",CENTER="0%",OFF_OPACITY=.8;function shadow(e){return e.shadowRoot||e}function iosTransitionAnimation(e,o,r){var a="rtl"===document.dir,t=a?"-99.5%":"99.5%",n=a?"33%":"-33%",d=r.enteringEl,l=r.leavingEl,T=new e;if(T.addElement(d).duration(r.duration||DURATION).easing(r.easing||EASING).beforeRemoveClass("ion-page-invisible"),l&&o){var i=new e;i.addElement(o).beforeAddClass("show-decor").afterRemoveClass("show-decor"),T.add(i)}var A="back"===r.direction,E=d.querySelector(":scope > ion-content"),s=d.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),m=d.querySelector(":scope > ion-header > ion-toolbar"),f=new e;if(E||m||0!==s.length?(f.addElement(E),f.addElement(s)):f.addElement(d.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),T.add(f),A?f.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX,n,CENTER,!0).fromTo(OPACITY,OFF_OPACITY,1,!0):f.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX,t,CENTER,!0),m){var C=new e;C.addElement(m),T.add(C);var c=new e;c.addElement(m.querySelector("ion-title"));var S=new e;S.addElement(m.querySelectorAll("ion-buttons,[menuToggle]"));var u=new e;u.addElement(shadow(m).querySelector(".toolbar-background"));var O=new e,R=m.querySelector("ion-back-button");if(O.addElement(R),C.add(c).add(S).add(u).add(O),c.fromTo(OPACITY,.01,1,!0),S.fromTo(OPACITY,.01,1,!0),A)c.fromTo(TRANSLATEX,n,CENTER,!0),O.fromTo(OPACITY,.01,1,!0);else if(c.fromTo(TRANSLATEX,t,CENTER,!0),u.beforeClearStyles([OPACITY]).fromTo(OPACITY,.01,1,!0),O.fromTo(OPACITY,.01,1,!0),R){var b=new e;b.addElement(shadow(R).querySelector(".button-text")).fromTo(TRANSLATEX,a?"-100px":"100px","0px"),C.add(b)}}if(l){var y=new e;y.addElement(l.querySelector(":scope > ion-content")),y.addElement(l.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),T.add(y),A?y.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX,CENTER,a?"-100%":"100%"):y.fromTo(TRANSLATEX,CENTER,n,!0).fromTo(OPACITY,1,OFF_OPACITY,!0);var I=l.querySelector(":scope > ion-header > ion-toolbar");if(I){var N=new e;N.addElement(I);var w=new e;w.addElement(I.querySelector("ion-title"));var v=new e;v.addElement(I.querySelectorAll("ion-buttons,[menuToggle]"));var P=new e;P.addElement(shadow(I).querySelector(".toolbar-background"));var Y=new e;if(R=I.querySelector("ion-back-button"),Y.addElement(R),N.add(w).add(v).add(Y).add(P),T.add(N),Y.fromTo(OPACITY,.99,0,!0),w.fromTo(OPACITY,.99,0,!0),v.fromTo(OPACITY,.99,0,!0),A){if(w.fromTo(TRANSLATEX,CENTER,a?"-100%":"100%"),P.beforeClearStyles([OPACITY]).fromTo(OPACITY,1,.01,!0),R){var p=new e;p.addElement(shadow(R).querySelector(".button-text")),p.fromTo(TRANSLATEX,CENTER,(a?-124:124)+"px"),N.add(p)}}else w.fromTo(TRANSLATEX,CENTER,n).afterClearStyles([TRANSFORM]),Y.afterClearStyles([OPACITY]),w.afterClearStyles([OPACITY]),v.afterClearStyles([OPACITY])}}return Promise.resolve(T)}

/***/ })

}]);
//# sourceMappingURL=164.js.map