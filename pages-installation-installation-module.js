(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-installation-installation-module"],{

/***/ "./src/app/pages/installation/installation.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/installation/installation.module.ts ***!
  \***********************************************************/
/*! exports provided: InstallationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationPageModule", function() { return InstallationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _installation_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./installation.page */ "./src/app/pages/installation/installation.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _installation_page__WEBPACK_IMPORTED_MODULE_5__["InstallationPage"]
    }
];
var InstallationPageModule = /** @class */ (function () {
    function InstallationPageModule() {
    }
    InstallationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            ],
            declarations: [_installation_page__WEBPACK_IMPORTED_MODULE_5__["InstallationPage"]]
        })
    ], InstallationPageModule);
    return InstallationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/installation/installation.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/installation/installation.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Installation\"></app-header>\n\n<ion-content>\n  <div>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\">\n          <markdown [src]=\"path\"></markdown>\n\n          <app-docs-footer [path]=\"path\"></app-docs-footer>\n        \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/installation/installation.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/installation/installation.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RhbGxhdGlvbi9pbnN0YWxsYXRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/installation/installation.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/installation/installation.page.ts ***!
  \*********************************************************/
/*! exports provided: InstallationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationPage", function() { return InstallationPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InstallationPage = /** @class */ (function () {
    function InstallationPage() {
        this.path = 'assets/docs/installation/installation.md';
    }
    InstallationPage.prototype.ngOnInit = function () {
    };
    InstallationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-installation',
            template: __webpack_require__(/*! ./installation.page.html */ "./src/app/pages/installation/installation.page.html"),
            styles: [__webpack_require__(/*! ./installation.page.scss */ "./src/app/pages/installation/installation.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InstallationPage);
    return InstallationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-installation-installation-module.js.map