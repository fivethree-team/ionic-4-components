(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-app-bar-app-bar-module"],{

/***/ "./src/app/pages/app-bar/app-bar.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/app-bar/app-bar.module.ts ***!
  \*************************************************/
/*! exports provided: AppBarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBarPageModule", function() { return AppBarPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _app_bar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-bar.page */ "./src/app/pages/app-bar/app-bar.page.ts");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _app_bar_page__WEBPACK_IMPORTED_MODULE_5__["AppBarPage"]
    }
];
var AppBarPageModule = /** @class */ (function () {
    function AppBarPageModule() {
    }
    AppBarPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                core__WEBPACK_IMPORTED_MODULE_6__["FivethreeCoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_app_bar_page__WEBPACK_IMPORTED_MODULE_5__["AppBarPage"]]
        })
    ], AppBarPageModule);
    return AppBarPageModule;
}());



/***/ }),

/***/ "./src/app/pages/app-bar/app-bar.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/app-bar/app-bar.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"menuId\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>app-bar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [scrollEvents]=\"true\">\n\n  <ion-list>\n    <ion-list>\n      <ion-radio-group name=\"position\">\n        <ion-list-header>FAB position</ion-list-header>\n        <ion-item>\n          <ion-label>left</ion-label>\n          <ion-radio [checked]=\"position === 'left'\" (click)=\"position = 'left'\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>center</ion-label>\n          <ion-radio [checked]=\"position === 'center'\" (click)=\"position = 'center'\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>right</ion-label>\n          <ion-radio [checked]=\"position === 'right'\" (click)=\"position = 'right'\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n      <ion-item>\n        <ion-label>FAB visible</ion-label>\n        <ion-checkbox slot=\"start\" [(ngModel)]=\"fabVisible\"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n\n    <ion-button (click)=\"bar.fab.load()\">\n      start loading\n    </ion-button>\n    <ion-button (click)=\"bar.fab.complete()\">\n      complete loading\n    </ion-button>\n\n    <ion-select placeholder=\"select FAB icon\" [(ngModel)]=\"icon\">\n      <ion-select-option value=\"add\">\n        add\n      </ion-select-option>\n      <ion-select-option value=\"checkmark\">\n        checkmark\n      </ion-select-option>\n      <ion-select-option value=\"create\">\n        create\n      </ion-select-option>\n    </ion-select>\n\n  </ion-list>\n\n  <fiv-app-bar #bar [position]=\"position\" [fabVisible]=\"fabVisible\" [icon]=\"icon\">\n\n  </fiv-app-bar>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/app-bar/app-bar.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/app-bar/app-bar.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcC1iYXIvYXBwLWJhci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/app-bar/app-bar.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/app-bar/app-bar.page.ts ***!
  \***********************************************/
/*! exports provided: AppBarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBarPage", function() { return AppBarPage; });
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

var AppBarPage = /** @class */ (function () {
    function AppBarPage() {
        this.position = 'center';
        this.fabVisible = true;
        this.icon = 'checkmark';
    }
    AppBarPage.prototype.ngOnInit = function () {
    };
    AppBarPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-bar',
            template: __webpack_require__(/*! ./app-bar.page.html */ "./src/app/pages/app-bar/app-bar.page.html"),
            styles: [__webpack_require__(/*! ./app-bar.page.scss */ "./src/app/pages/app-bar/app-bar.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], AppBarPage);
    return AppBarPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-app-bar-app-bar-module.js.map