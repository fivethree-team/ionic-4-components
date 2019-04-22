(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-developer-tools-developer-tools-module"],{

/***/ "./src/app/pages/developer-tools/developer-tools.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/developer-tools/developer-tools.module.ts ***!
  \*****************************************************************/
/*! exports provided: DeveloperToolsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperToolsPageModule", function() { return DeveloperToolsPageModule; });
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _developer_tools_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./developer-tools.page */ "./src/app/pages/developer-tools/developer-tools.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _developer_tools_page__WEBPACK_IMPORTED_MODULE_6__["DeveloperToolsPage"]
    }
];
var DeveloperToolsPageModule = /** @class */ (function () {
    function DeveloperToolsPageModule() {
    }
    DeveloperToolsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"]
            ],
            declarations: [_developer_tools_page__WEBPACK_IMPORTED_MODULE_6__["DeveloperToolsPage"]]
        })
    ], DeveloperToolsPageModule);
    return DeveloperToolsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/developer-tools/developer-tools.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/developer-tools/developer-tools.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'Developer Tools'\"></app-header>\n<ion-content>\n  <div>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\">\n          <markdown [src]=\"'assets/docs/developer-tools/developer-tools.md'\"></markdown>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/developer-tools/developer-tools.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/developer-tools/developer-tools.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldmVsb3Blci10b29scy9kZXZlbG9wZXItdG9vbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/developer-tools/developer-tools.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/developer-tools/developer-tools.page.ts ***!
  \***************************************************************/
/*! exports provided: DeveloperToolsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperToolsPage", function() { return DeveloperToolsPage; });
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

var DeveloperToolsPage = /** @class */ (function () {
    function DeveloperToolsPage() {
    }
    DeveloperToolsPage.prototype.ngOnInit = function () {
    };
    DeveloperToolsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-developer-tools',
            template: __webpack_require__(/*! ./developer-tools.page.html */ "./src/app/pages/developer-tools/developer-tools.page.html"),
            styles: [__webpack_require__(/*! ./developer-tools.page.scss */ "./src/app/pages/developer-tools/developer-tools.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DeveloperToolsPage);
    return DeveloperToolsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-developer-tools-developer-tools-module.js.map