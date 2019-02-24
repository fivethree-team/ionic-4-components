(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-getting-started-getting-started-module"],{

/***/ "./src/app/pages/getting-started/getting-started.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/getting-started/getting-started.module.ts ***!
  \*****************************************************************/
/*! exports provided: GettingStartedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedPageModule", function() { return GettingStartedPageModule; });
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _getting_started_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getting-started.page */ "./src/app/pages/getting-started/getting-started.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _getting_started_page__WEBPACK_IMPORTED_MODULE_6__["GettingStartedPage"]
    }
];
var GettingStartedPageModule = /** @class */ (function () {
    function GettingStartedPageModule() {
    }
    GettingStartedPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_getting_started_page__WEBPACK_IMPORTED_MODULE_6__["GettingStartedPage"]]
        })
    ], GettingStartedPageModule);
    return GettingStartedPageModule;
}());



/***/ }),

/***/ "./src/app/pages/getting-started/getting-started.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/getting-started/getting-started.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'getting-started.title' | translate\"></app-header>\n\n<ion-content>\n  <div>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\">\n          <markdown [src]=\"'assets/docs/getting-started/getting-started.md'\"></markdown>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n  <app-footer></app-footer>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/getting-started/getting-started.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/getting-started/getting-started.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/getting-started/getting-started.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/getting-started/getting-started.page.ts ***!
  \***************************************************************/
/*! exports provided: GettingStartedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedPage", function() { return GettingStartedPage; });
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

var GettingStartedPage = /** @class */ (function () {
    function GettingStartedPage() {
    }
    GettingStartedPage.prototype.ngOnInit = function () {
    };
    GettingStartedPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-getting-started',
            template: __webpack_require__(/*! ./getting-started.page.html */ "./src/app/pages/getting-started/getting-started.page.html"),
            styles: [__webpack_require__(/*! ./getting-started.page.scss */ "./src/app/pages/getting-started/getting-started.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GettingStartedPage);
    return GettingStartedPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-getting-started-getting-started-module.js.map