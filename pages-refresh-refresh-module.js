(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-refresh-refresh-module"],{

/***/ "./src/app/pages/refresh/refresh.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/refresh/refresh.module.ts ***!
  \*************************************************/
/*! exports provided: RefreshPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshPageModule", function() { return RefreshPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _refresh_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./refresh.page */ "./src/app/pages/refresh/refresh.page.ts");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _refresh_page__WEBPACK_IMPORTED_MODULE_5__["RefreshPage"]
    }
];
var RefreshPageModule = /** @class */ (function () {
    function RefreshPageModule() {
    }
    RefreshPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                core__WEBPACK_IMPORTED_MODULE_6__["FivethreeCoreModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_refresh_page__WEBPACK_IMPORTED_MODULE_5__["RefreshPage"]]
        })
    ], RefreshPageModule);
    return RefreshPageModule;
}());



/***/ }),

/***/ "./src/app/pages/refresh/refresh.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/refresh/refresh.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>refresh</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<fiv-loading-content #content>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <app-example [api]=\"'assets/docs/snippets/expandable/api.md'\" [typescript]=\"'assets/docs/snippets/expandable/ts.md'\"\n          [css]=\"'assets/docs/snippets/expandable/css.md'\" [html]=\"'assets/docs/snippets/expandable/html.md'\" [title]=\"'Pull to Refresh'\"\n          [subtitle]=\"'Material Design Pull to Refresh Layout component (gestures only supported on mobile).'\">\n        \n          <ion-button (click)=\"content.showHint()\">\n            Show hint\n          </ion-button>\n          <ion-button (click)=\"content.refresh()\">\n            Refresh\n          </ion-button>\n          <ion-button (click)=\"content.completeRefresh()\">\n            complete\n          </ion-button>\n\n        </app-example>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-footer></app-footer>\n\n</fiv-loading-content>"

/***/ }),

/***/ "./src/app/pages/refresh/refresh.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/refresh/refresh.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  margin-top: 56px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJ5Z3Jvc3NnYXJ0ZW4vRGV2L3RoaW5ncy9maXZldGhyZWUtbGliL3NyYy9hcHAvcGFnZXMvcmVmcmVzaC9yZWZyZXNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZnJlc2gvcmVmcmVzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/refresh/refresh.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/refresh/refresh.page.ts ***!
  \***********************************************/
/*! exports provided: RefreshPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshPage", function() { return RefreshPage; });
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

var RefreshPage = /** @class */ (function () {
    function RefreshPage() {
    }
    RefreshPage.prototype.ngOnInit = function () {
    };
    RefreshPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-refresh',
            template: __webpack_require__(/*! ./refresh.page.html */ "./src/app/pages/refresh/refresh.page.html"),
            styles: [__webpack_require__(/*! ./refresh.page.scss */ "./src/app/pages/refresh/refresh.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RefreshPage);
    return RefreshPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-refresh-refresh-module.js.map