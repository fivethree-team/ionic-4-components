(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-native-map-native-map-module"],{

/***/ "./src/app/pages/native-map/native-map.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/native-map/native-map.module.ts ***!
  \*******************************************************/
/*! exports provided: NativeMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeMapPageModule", function() { return NativeMapPageModule; });
/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-maps */ "./dist/google-maps/fesm5/fivethree-google-maps.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _native_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./native-map.page */ "./src/app/pages/native-map/native-map.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _native_map_page__WEBPACK_IMPORTED_MODULE_6__["NativeMapPage"]
    }
];
var NativeMapPageModule = /** @class */ (function () {
    function NativeMapPageModule() {
    }
    NativeMapPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                google_maps__WEBPACK_IMPORTED_MODULE_0__["GoogleMapsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_native_map_page__WEBPACK_IMPORTED_MODULE_6__["NativeMapPage"]]
        })
    ], NativeMapPageModule);
    return NativeMapPageModule;
}());



/***/ }),

/***/ "./src/app/pages/native-map/native-map.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/native-map/native-map.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"menuId\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>native-map</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <fiv-google-maps-native #map></fiv-google-maps-native>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/native-map/native-map.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/native-map/native-map.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdGl2ZS1tYXAvbmF0aXZlLW1hcC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/native-map/native-map.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/native-map/native-map.page.ts ***!
  \*****************************************************/
/*! exports provided: NativeMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeMapPage", function() { return NativeMapPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps */ "./dist/google-maps/fesm5/fivethree-google-maps.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NativeMapPage = /** @class */ (function () {
    function NativeMapPage() {
    }
    NativeMapPage.prototype.ngOnInit = function () {
    };
    NativeMapPage.prototype.ngAfterViewInit = function () {
        this.map.addMarker(50.9576191, 6.8272408);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsNativeComponent"])
    ], NativeMapPage.prototype, "map", void 0);
    NativeMapPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-native-map',
            template: __webpack_require__(/*! ./native-map.page.html */ "./src/app/pages/native-map/native-map.page.html"),
            styles: [__webpack_require__(/*! ./native-map.page.scss */ "./src/app/pages/native-map/native-map.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], NativeMapPage);
    return NativeMapPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-native-map-native-map-module.js.map