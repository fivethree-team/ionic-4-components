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
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading.page */ "./src/app/pages/loading/loading.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _loading_page__WEBPACK_IMPORTED_MODULE_7__["LoadingPage"]
    }
];
var LoadingPageModule = /** @class */ (function () {
    function LoadingPageModule() {
    }
    LoadingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                core__WEBPACK_IMPORTED_MODULE_1__["FivethreeCoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"]
            ],
            declarations: [_loading_page__WEBPACK_IMPORTED_MODULE_7__["LoadingPage"]]
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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"menuId\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Loading Indicators</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n      <app-example [title]=\"'Bar'\" [subtitle]=\"'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut\n      labore et dolore magna aliqua.'\">\n      <ion-button [disabled]=\"bar.loading\" (click)=\"bar.incrementBy(10)\">\n          increment\n        </ion-button>\n\n        <ion-button [disabled]=\"bar.loading\" (click)=\"bar.decrementBy(-10)\">\n          decrement\n        </ion-button>\n\n        <ion-button [disabled]=\"bar.loading\" (click)=\"bar.fillIn(700)\">\n          fill\n        </ion-button>\n\n        <ion-button [disabled]=\"bar.loading\" (click)=\"bar.shrinkIn(2000)\">\n          shrink\n        </ion-button>\n        <ion-button [disabled]=\"bar.loading\" (click)=\"bar.load()\">\n          load\n        </ion-button>\n        <ion-button [disabled]=\"!bar.loading\" (click)=\"bar.unload()\">\n          unload\n        </ion-button>\n        <ion-button [disabled]=\"!bar.loading\" (click)=\"bar.complete()\">\n          complete\n        </ion-button>\n        <div class=\"wrapper\">\n          <div [fivCenter] class=\"progress-bar\">\n            <fiv-loading-progress-bar #bar></fiv-loading-progress-bar>\n          </div>\n        </div>\n    </app-example>\n    <ion-card>\n      <ion-toolbar color=\"translucent\">\n        <ion-title>Buttons</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button>\n            <ion-icon slot=\"start\" name=\"md-code\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-card-header>\n        <ion-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut\n          labore et dolore magna aliqua. </ion-card-subtitle>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-item-divider>\n          <ion-label>Button</ion-label>\n        </ion-item-divider>\n        <ion-item line=\"none\">\n          Lorem ipsum dolor sit amet, consectetur adipisici elit.\n        </ion-item>\n        <ion-button [disabled]=\"button.loading\" (click)=\"button.load()\">\n          load\n        </ion-button>\n        <ion-button [disabled]=\"!button.loading\" (click)=\"button.unload()\">\n          unload\n        </ion-button>\n        <ion-button [disabled]=\"!button.loading\" (click)=\"button.complete()\">\n          complete\n        </ion-button>\n        <div class=\"wrapper\">\n          <fiv-loading-button [disabled]=\"button.loading\" [fivCenter] #button>send</fiv-loading-button>\n        </div>\n        <ion-item-divider>\n            <ion-label>Floating Action Button</ion-label>\n          </ion-item-divider>\n          <ion-item line=\"none\">\n              Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor.\n          </ion-item>\n          <ion-button [disabled]=\"fab.loading || fab.icon === 'md-checkmark'\" (click)=\"fab.load()\">\n            load\n          </ion-button>\n          <ion-button [disabled]=\"!fab.loading\" (click)=\"fab.unload()\">\n            unload\n          </ion-button>\n          <ion-button [disabled]=\"!fab.loading\" (click)=\"fab.complete()\">\n            complete\n          </ion-button>\n          <ion-button [disabled]=\"fab.icon !== 'md-checkmark'\" (click)=\"fab.icon = 'md-add'\">\n            reset\n          </ion-button>\n          <div class=\"wrapper\">\n            <fiv-loading-fab [disabled]=\"fab.loading\" [icon]=\"'md-add'\" [iconColor]=\"'dark'\" [fivCenter] #fab></fiv-loading-fab>\n          </div>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/loading/loading.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/loading/loading.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  top: 16px; }\n\nion-list {\n  padding-bottom: 8px; }\n\n.progress-bar {\n  width: 80%;\n  height: 5px;\n  background: var(--ion-color-light); }\n\n:host {\n  --fiv-color-fab: var(--ion-color-light); }\n\nfiv-loading-button {\n  width: 240px; }\n\nion-item-divider {\n  border-bottom: 0; }\n\nion-item {\n  --border-style: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJ5Z3Jvc3NnYXJ0ZW4vRGV2L3RoaW5ncy9maXZldGhyZWUtbGliL3NyYy9hcHAvcGFnZXMvbG9hZGluZy9sb2FkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVMsRUFDWjs7QUFFRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLFdBQVU7RUFDVixZQUFXO0VBQ1gsbUNBQWtDLEVBQ3JDOztBQUVEO0VBQ0ksd0NBQWdCLEVBQ25COztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUNEO0VBQ0kscUJBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2FkaW5nL2xvYWRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIHRvcDogMTZweDtcbn1cblxuaW9uLWxpc3Qge1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuOmhvc3Qge1xuICAgIC0tZml2LWNvbG9yLWZhYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuZml2LWxvYWRpbmctYnV0dG9uIHtcbiAgICB3aWR0aDogMjQwcHg7XG59XG5cbmlvbi1pdGVtLWRpdmlkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDA7XG59XG5pb24taXRlbSB7XG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59Il19 */"

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