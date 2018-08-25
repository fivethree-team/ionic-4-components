(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var dist_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dist/loading */ "./dist/loading/fesm5/fivethree-loading.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                dist_loading__WEBPACK_IMPORTED_MODULE_6__["LoadingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title (click)=\"showHint(refresher)\">\n      Loading\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n      <fiv-loading-content #refresher (onRefresh)=\"onRefresh($event)\">\n\n  <ion-card mode=\"ios\" (click)=\"bar.loading ? bar.complete() : bar.toggleSpinner()\">\n    <fiv-loading-progressbar #bar [global]=\"false\"></fiv-loading-progressbar>\n    <ion-img src=\"https://beta.ionicframework.com/docs/content/component-preview-app/docs-www/assets/madison.jpg\"></ion-img>\n\n    <ion-card-content>\n      <ion-card-title>Hello World</ion-card-title>\n\n      <p>The content for this card</p>\n    </ion-card-content>\n  </ion-card>\n\n  <fiv-loading-button #bb (click)=\"bb.loading ? bb.complete() : bb.toggleSpinner()\">Formular absenden</fiv-loading-button>\n\n  <ion-list>\n    <fiv-loading-item [verticalAlign]=\"'top'\" #item (click)=\"item.loading ? item.complete() : item.toggleSpinner()\">\n      <ion-avatar slot=\"start\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Gary</h2>\n        <h3>I'm a big deal</h3>\n        <p>Listen, I've had a pretty messed up day...</p>\n      </ion-label>\n    </fiv-loading-item>\n    <fiv-loading-item #item2 (click)=\"item2.loading ? item2.complete() : item2.toggleSpinner()\">\n      <ion-avatar slot=\"start\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Marc</h2>\n        <h3>Look, kid</h3>\n        <p>I've got enough on my plate as it is, and I..</p>\n      </ion-label>\n    </fiv-loading-item>\n    <fiv-loading-item #item3 (click)=\"item3.loading ? item3.complete() : item3.toggleSpinner()\">\n      <ion-avatar slot=\"start\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Gary</h2>\n        <h3>I'm a big deal</h3>\n        <p>Listen, I've had a pretty messed up day...</p>\n      </ion-label>\n    </fiv-loading-item>\n    <fiv-loading-item #item4 (click)=\"item4.loading ? item4.complete() : item4.toggleSpinner()\">\n      <ion-avatar slot=\"start\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Marc</h2>\n        <h3>Look, kid</h3>\n        <p>I've got enough on my plate as it is, and I..</p>\n      </ion-label>\n    </fiv-loading-item>\n    <fiv-loading-item #item5 (click)=\"item5.loading ? item5.complete() : item5.toggleSpinner()\">\n      <ion-avatar slot=\"start\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Gary</h2>\n        <h3>I'm a big deal</h3>\n        <p>Listen, I've had a pretty messed up day...</p>\n      </ion-label>\n    </fiv-loading-item>\n    <fiv-loading-item #item6 (click)=\"item6.loading ? item6.complete() : item6.toggleSpinner()\">\n      <ion-avatar slot=\"start\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Marc</h2>\n        <h3>Look, kid</h3>\n        <p>I've got enough on my plate as it is, and I..</p>\n      </ion-label>\n    </fiv-loading-item>\n\n    <ion-infinite-scroll>\n        <fiv-loading-infinite-scroll></fiv-loading-infinite-scroll>\n      </ion-infinite-scroll>\n\n  </ion-list>\n</fiv-loading-content>\n<fiv-loading-fab checkmark=\"true\" (onComplete)=\"fabComplete()\" loading=\"true\" #fab (click)=\"fab.loading ? fab.complete() : fab.toggleSpinner()\"\n  horizontal=\"end\" vertical=\"bottom\" icon=\"md-add\" spinColor=\"dark\" fabColor=\"light\"></fiv-loading-fab>\n\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  top: 16px; }\n\nion-list {\n  background: #dedede;\n  padding-bottom: 8px; }\n"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var dist_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dist/loading */ "./dist/loading/fesm5/fivethree-loading.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(loading) {
        this.loading = loading;
    }
    HomePage.prototype.fabComplete = function () {
        console.log('fab complete');
    };
    HomePage.prototype.showHint = function (refresher) {
        refresher.showHint();
    };
    HomePage.prototype.onRefresh = function (refresher) {
        setTimeout(function () {
            refresher.completeRefresh();
        }, 2000);
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")],
        }),
        __metadata("design:paramtypes", [dist_loading__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map