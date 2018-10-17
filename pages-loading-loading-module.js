(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loading-loading-module"],{

/***/ "./src/app/pages/loading/loading.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/loading/loading.module.ts ***!
  \*************************************************/
/*! exports provided: LoadingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageModule", function() { return LoadingPageModule; });
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading.page */ "./src/app/pages/loading/loading.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _loading_page__WEBPACK_IMPORTED_MODULE_6__["LoadingPage"]
    }
];
var LoadingPageModule = /** @class */ (function () {
    function LoadingPageModule() {
    }
    LoadingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                core__WEBPACK_IMPORTED_MODULE_0__["FivethreeCoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_loading_page__WEBPACK_IMPORTED_MODULE_6__["LoadingPage"]]
        })
    ], LoadingPageModule);
    return LoadingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/loading/loading.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/loading/loading.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"menuId\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>loading</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<fiv-loading-content #refresher (fivRefresh)=\"onRefresh($event)\" [hintText]=\"'new posts'\">\n\n  <ion-card mode=\"ios\" (click)=\"bar.loading ? bar.complete() : bar.toggleSpinner()\">\n    <fiv-loading-progress-bar #bar [global]=\"false\"></fiv-loading-progress-bar>\n    <ion-img src=\"https://beta.ionicframework.com/docs/content/component-preview-app/docs-www/assets/madison.jpg\"></ion-img>\n    <fiv-ripple>\n      <ion-card-content>\n        <ion-card-title>Hello World</ion-card-title>\n\n        <p>The content for this card</p>\n      </ion-card-content>\n    </fiv-ripple>\n\n  </ion-card>\n\n  <ion-button (click)=\"bar.incrementBy(10)\">\n    +10\n  </ion-button>\n\n  <ion-button (click)=\"bar.incrementBy(20)\">\n    +20\n  </ion-button>\n\n  <ion-button (click)=\"bar.decrementBy(-30)\">\n    -30\n  </ion-button>\n\n  <ion-button (click)=\"bar.fillIn(4000)\">\n    <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n    Fill in 4 sec\n  </ion-button>\n\n  <ion-button (click)=\"bar.shrinkIn(2000)\">\n    <ion-icon slot=\"start\" name=\"remove\"></ion-icon>\n    Shrink in 2 sec\n  </ion-button>\n\n  <ion-button (click)=\"refresher.showHint()\">\n    show hint\n  </ion-button>\n\n  <fiv-loading-button #bb (click)=\"bb.loading ? bb.complete() : bb.toggleSpinner()\" (fivRefreshComplete)=\"buttonComplete()\">Formular\n    absenden</fiv-loading-button>\n\n</fiv-loading-content>\n\n<fiv-loading-fab checkmark=\"true\" slot=\"fixed\" (fivComplete)=\"fabComplete()\" loading=\"true\" #fab (click)=\"fab.loading ? fab.complete() : fab.toggleSpinner()\"\n  horizontal=\"end\" vertical=\"bottom\" icon=\"md-add\" spinColor=\"dark\" fabColor=\"light\" iconColor=\"primary\"></fiv-loading-fab>"

/***/ }),

/***/ "./src/app/pages/loading/loading.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/loading/loading.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  top: 16px; }\n\nion-list {\n  padding-bottom: 8px; }\n"

/***/ }),

/***/ "./src/app/pages/loading/loading.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/loading/loading.page.ts ***!
  \***********************************************/
/*! exports provided: LoadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPage", function() { return LoadingPage; });
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

var LoadingPage = /** @class */ (function () {
    function LoadingPage() {
        this.mode = 'determinate';
        this.value = 0;
    }
    LoadingPage.prototype.ngOnInit = function () {
    };
    LoadingPage.prototype.fabComplete = function () {
        console.log('fab complete');
    };
    LoadingPage.prototype.buttonComplete = function () {
        console.log('button complete');
    };
    LoadingPage.prototype.showHint = function (refresher) {
        refresher.showHint();
    };
    LoadingPage.prototype.onRefresh = function (refresher) {
        setTimeout(function () {
            refresher.completeRefresh();
        }, 2000);
    };
    LoadingPage.prototype.complete = function () {
    };
    LoadingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.page.html */ "./src/app/pages/loading/loading.page.html"),
            styles: [__webpack_require__(/*! ./loading.page.scss */ "./src/app/pages/loading/loading.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], LoadingPage);
    return LoadingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-loading-loading-module.js.map