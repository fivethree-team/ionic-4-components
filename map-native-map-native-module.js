(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-native-map-native-module"],{

/***/ "./src/app/map-native/map-native.module.ts":
/*!*************************************************!*\
  !*** ./src/app/map-native/map-native.module.ts ***!
  \*************************************************/
/*! exports provided: MapNativePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapNativePageModule", function() { return MapNativePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _map_native_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-native.page */ "./src/app/map-native/map-native.page.ts");
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
        component: _map_native_page__WEBPACK_IMPORTED_MODULE_5__["MapNativePage"]
    }
];
var MapNativePageModule = /** @class */ (function () {
    function MapNativePageModule() {
    }
    MapNativePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                dist_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_map_native_page__WEBPACK_IMPORTED_MODULE_5__["MapNativePage"]]
        })
    ], MapNativePageModule);
    return MapNativePageModule;
}());



/***/ }),

/***/ "./src/app/map-native/map-native.page.html":
/*!*************************************************!*\
  !*** ./src/app/map-native/map-native.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Map Native</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <fiv-google-map-native></fiv-google-map-native>\n</ion-content>"

/***/ }),

/***/ "./src/app/map-native/map-native.page.scss":
/*!*************************************************!*\
  !*** ./src/app/map-native/map-native.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  height: 100%;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/map-native/map-native.page.ts":
/*!***********************************************!*\
  !*** ./src/app/map-native/map-native.page.ts ***!
  \***********************************************/
/*! exports provided: MapNativePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapNativePage", function() { return MapNativePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapNativePage = /** @class */ (function () {
    function MapNativePage() {
        this.zoom = 15;
        this.marker = [];
    }
    MapNativePage.prototype.ngOnInit = function () {
        console.log('GoogleMapNativeComponent ng on init');
        this.loadMap();
    };
    MapNativePage.prototype.loadMap = function () {
        console.log("loading Map");
        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMaps"].create('map', {
            controls: {
                myLocation: true,
                myLocationButton: false,
                mapToolbar: false,
                compass: true,
            }
        });
        this.map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsEvent"].MAP_READY).then(function () { return console.log("map is ready"); });
        console.log("loaded Map");
        // this.map.getMyLocation({ enableHighAccuracy: true }).then((location: MyLocation) => {
        //     this.map.animateCamera({ zoom: this.zoom, target: location.latLng, duration: 350 });
        // });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MapNativePage.prototype, "zoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapNativePage.prototype, "mapOptions", void 0);
    MapNativePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-native',
            template: __webpack_require__(/*! ./map-native.page.html */ "./src/app/map-native/map-native.page.html"),
            styles: [__webpack_require__(/*! ./map-native.page.scss */ "./src/app/map-native/map-native.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], MapNativePage);
    return MapNativePage;
}());



/***/ })

}]);
//# sourceMappingURL=map-native-map-native-module.js.map