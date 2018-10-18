(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-native-map-bottom-sheet-native-map-bottom-sheet-module"],{

/***/ "./src/app/pages/native-map-bottom-sheet/native-map-bottom-sheet.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/native-map-bottom-sheet/native-map-bottom-sheet.module.ts ***!
  \*********************************************************************************/
/*! exports provided: NativeMapBottomSheetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeMapBottomSheetPageModule", function() { return NativeMapBottomSheetPageModule; });
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps */ "./dist/google-maps/fesm5/fivethree-google-maps.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _native_map_bottom_sheet_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./native-map-bottom-sheet.page */ "./src/app/pages/native-map-bottom-sheet/native-map-bottom-sheet.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _native_map_bottom_sheet_page__WEBPACK_IMPORTED_MODULE_7__["NativeMapBottomSheetPage"]
    }
];
var NativeMapBottomSheetPageModule = /** @class */ (function () {
    function NativeMapBottomSheetPageModule() {
    }
    NativeMapBottomSheetPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsModule"],
                core__WEBPACK_IMPORTED_MODULE_0__["FivethreeCoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_native_map_bottom_sheet_page__WEBPACK_IMPORTED_MODULE_7__["NativeMapBottomSheetPage"]]
        })
    ], NativeMapBottomSheetPageModule);
    return NativeMapBottomSheetPageModule;
}());



/***/ }),

/***/ "./src/app/pages/native-map-bottom-sheet/native-map-bottom-sheet.page.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/native-map-bottom-sheet/native-map-bottom-sheet.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"menuId\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>native-map-bottom-sheet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <fiv-google-maps-native #map></fiv-google-maps-native>\n</ion-content>\n\n<fiv-bottom-sheet [(state)]=\"drawerState\" [minimumHeight]=\"minimumHeight\" [dockedHeight]=\"dockedHeight\" [shouldBounce]=\"shouldBounce\"\n  [distanceTop]=\"distanceTop\">\n\n  <fiv-bottom-sheet-content [float]=\"float\" [rounded]=\"rounded\" [handle]=\"handle\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n        <ion-card-title>Awesome Title</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        Awesome content\n      </ion-card-content>\n    </ion-card>\n  </fiv-bottom-sheet-content>\n  \n</fiv-bottom-sheet>"

/***/ }),

/***/ "./src/app/pages/native-map-bottom-sheet/native-map-bottom-sheet.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/native-map-bottom-sheet/native-map-bottom-sheet.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdGl2ZS1tYXAtYm90dG9tLXNoZWV0L25hdGl2ZS1tYXAtYm90dG9tLXNoZWV0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/native-map-bottom-sheet/native-map-bottom-sheet.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/native-map-bottom-sheet/native-map-bottom-sheet.page.ts ***!
  \*******************************************************************************/
/*! exports provided: NativeMapBottomSheetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeMapBottomSheetPage", function() { return NativeMapBottomSheetPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-maps */ "./dist/google-maps/fesm5/fivethree-google-maps.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NativeMapBottomSheetPage = /** @class */ (function () {
    function NativeMapBottomSheetPage() {
        this.shouldBounce = true;
        this.dockedHeight = 170;
        this.distanceTop = 56;
        this.drawerState = core__WEBPACK_IMPORTED_MODULE_1__["DrawerState"].Docked;
        this.states = core__WEBPACK_IMPORTED_MODULE_1__["DrawerState"];
        this.minimumHeight = 24;
        this.handle = true;
        this.float = true;
        this.rounded = true;
    }
    NativeMapBottomSheetPage.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsNativeComponent"])
    ], NativeMapBottomSheetPage.prototype, "map", void 0);
    NativeMapBottomSheetPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-native-map-bottom-sheet',
            template: __webpack_require__(/*! ./native-map-bottom-sheet.page.html */ "./src/app/pages/native-map-bottom-sheet/native-map-bottom-sheet.page.html"),
            styles: [__webpack_require__(/*! ./native-map-bottom-sheet.page.scss */ "./src/app/pages/native-map-bottom-sheet/native-map-bottom-sheet.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], NativeMapBottomSheetPage);
    return NativeMapBottomSheetPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-native-map-bottom-sheet-native-map-bottom-sheet-module.js.map