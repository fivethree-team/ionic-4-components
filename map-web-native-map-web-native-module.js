(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-web-native-map-web-native-module"],{

/***/ "./src/app/map-web-native/map-web-native.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/map-web-native/map-web-native.module.ts ***!
  \*********************************************************/
/*! exports provided: MapWebNativePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapWebNativePageModule", function() { return MapWebNativePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _map_web_native_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-web-native.page */ "./src/app/map-web-native/map-web-native.page.ts");
/* harmony import */ var dist_google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dist/google-maps */ "./dist/google-maps/fesm5/fivethree-google-maps.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _map_web_native_page__WEBPACK_IMPORTED_MODULE_5__["MapWebNativePage"]
    }
];
var MapWebNativePageModule = /** @class */ (function () {
    function MapWebNativePageModule() {
    }
    MapWebNativePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                dist_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_map_web_native_page__WEBPACK_IMPORTED_MODULE_5__["MapWebNativePage"]]
        })
    ], MapWebNativePageModule);
    return MapWebNativePageModule;
}());



/***/ }),

/***/ "./src/app/map-web-native/map-web-native.page.html":
/*!*********************************************************!*\
  !*** ./src/app/map-web-native/map-web-native.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Map Web or Native</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <fiv-google-maps [apiKey]=\"apiKey\" [isCordova]=\"isCordova\"></fiv-google-maps>\n</ion-content>"

/***/ }),

/***/ "./src/app/map-web-native/map-web-native.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/map-web-native/map-web-native.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/map-web-native/map-web-native.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/map-web-native/map-web-native.page.ts ***!
  \*******************************************************/
/*! exports provided: MapWebNativePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapWebNativePage", function() { return MapWebNativePage; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapWebNativePage = /** @class */ (function () {
    function MapWebNativePage(platform) {
        this.platform = platform;
        this.apiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mapApiKey;
    }
    MapWebNativePage.prototype.ngOnInit = function () {
        this.isCordova = this.platform.is('cordova');
    };
    MapWebNativePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-web-native',
            template: __webpack_require__(/*! ./map-web-native.page.html */ "./src/app/map-web-native/map-web-native.page.html"),
            styles: [__webpack_require__(/*! ./map-web-native.page.scss */ "./src/app/map-web-native/map-web-native.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"]])
    ], MapWebNativePage);
    return MapWebNativePage;
}());



/***/ })

}]);
//# sourceMappingURL=map-web-native-map-web-native-module.js.map