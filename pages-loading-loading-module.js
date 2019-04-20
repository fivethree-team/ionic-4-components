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
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fivethree/core */ "./dist/@fivethree/core/fesm5/fivethree-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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
                _fivethree_core__WEBPACK_IMPORTED_MODULE_1__["FivethreeCoreModule"],
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

module.exports = "<app-header title=\"Loading Indicators\"></app-header>\n\n<ion-content>\n\n  <ion-grid class=\"page-content\" fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <app-example [html]=\"'assets/docs/snippets/loading-bar/loading.html.md'\" [title]=\"'Bar'\" [subtitle]=\"'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut\n          labore et dolore magna aliqua.'\">\n\n          <ion-button [disabled]=\"bar.loading\" (click)=\"bar.fillIn(2000)\">\n            fill\n          </ion-button>\n\n          <ion-button [disabled]=\"bar.loading\" (click)=\"bar.shrinkIn(2000)\">\n            shrink\n          </ion-button>\n          <ion-button [disabled]=\"bar.loading\" (click)=\"bar.load()\">\n            load\n          </ion-button>\n          <ion-button [disabled]=\"!bar.loading\" (click)=\"bar.unload()\">\n            unload\n          </ion-button>\n          <ion-button [disabled]=\"!bar.loading\" (click)=\"bar.complete()\">\n            complete\n          </ion-button>\n          <div class=\"wrapper\">\n            <div [fivCenter] class=\"progress-bar\">\n              <fiv-loading-progress-bar #bar></fiv-loading-progress-bar>\n            </div>\n          </div>\n        </app-example>\n        <app-example [html]=\"'assets/docs/snippets/loading-fab/loading.html.md'\" [title]=\"'FAB'\" [subtitle]=\"'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut\n       labore et dolore magna aliqua.'\">\n          <ion-item-divider>\n            <ion-label>Floating Action Button</ion-label>\n          </ion-item-divider>\n          <ion-item line=\"none\">\n            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor.\n          </ion-item>\n          <ion-button [disabled]=\"fab.loading || fab.icon === 'md-checkmark'\" (click)=\"fab.load()\">\n            load\n          </ion-button>\n          <ion-button [disabled]=\"!fab.loading\" (click)=\"fab.unload()\">\n            unload\n          </ion-button>\n          <ion-button [disabled]=\"!fab.loading\" (click)=\"fab.complete()\">\n            complete\n          </ion-button>\n          <ion-button [disabled]=\"fab.icon !== 'md-checkmark'\" (click)=\"fab.icon = 'md-add'\">\n            reset\n          </ion-button>\n          <div class=\"wrapper\">\n            <fiv-loading-fab [disabled]=\"fab.loading\" [icon]=\"'md-add'\" [iconColor]=\"'dark'\" [fivCenter] #fab>\n            </fiv-loading-fab>\n          </div>\n        </app-example>\n        <app-example [title]=\"'Spinner'\" [subtitle]=\"'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut\n       labore et dolore magna aliqua.'\">\n       <div class=\"wrapper\">\n          <div [fivCenter]>\n              <fiv-loading-spinner></fiv-loading-spinner>\n           </div>\n       </div>\n       \n        </app-example>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/loading/loading.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/loading/loading.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  top: 16px;\n}\n\nion-list {\n  padding-bottom: 8px;\n}\n\n.progress-bar {\n  width: 80%;\n  height: 5px;\n  background: var(--ion-color-light);\n}\n\n:host {\n  --fiv-color-fab: var(--ion-color-light);\n}\n\nfiv-loading-progress-bar {\n  --background-progress-bar: purple;\n  --color-spin-0: red;\n  --color-spin-50: green;\n  --color-spin-100: yellow;\n}\n\nion-item-divider {\n  border-bottom: 0;\n}\n\nion-item {\n  --border-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJ5Z3Jvc3NnYXJ0ZW4vRGV2L3RoaW5ncy9maXZldGhyZWUtbGliL3NyYy9hcHAvcGFnZXMvbG9hZGluZy9sb2FkaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9hZGluZy9sb2FkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSx1Q0FBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9hZGluZy9sb2FkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgdG9wOiAxNnB4O1xufVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuOmhvc3Qge1xuICAtLWZpdi1jb2xvci1mYWI6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmZpdi1sb2FkaW5nLXByb2dyZXNzLWJhciB7XG4gIC0tYmFja2dyb3VuZC1wcm9ncmVzcy1iYXI6IHB1cnBsZTtcbiAgLS1jb2xvci1zcGluLTA6IHJlZDtcbiAgLS1jb2xvci1zcGluLTUwOiBncmVlbjtcbiAgLS1jb2xvci1zcGluLTEwMDogeWVsbG93O1xufVxuXG5pb24taXRlbS1kaXZpZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59XG4iLCJpb24tY2FyZCB7XG4gIHRvcDogMTZweDtcbn1cblxuaW9uLWxpc3Qge1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbjpob3N0IHtcbiAgLS1maXYtY29sb3ItZmFiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5maXYtbG9hZGluZy1wcm9ncmVzcy1iYXIge1xuICAtLWJhY2tncm91bmQtcHJvZ3Jlc3MtYmFyOiBwdXJwbGU7XG4gIC0tY29sb3Itc3Bpbi0wOiByZWQ7XG4gIC0tY29sb3Itc3Bpbi01MDogZ3JlZW47XG4gIC0tY29sb3Itc3Bpbi0xMDA6IHllbGxvdztcbn1cblxuaW9uLWl0ZW0tZGl2aWRlciB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59Il19 */"

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
    };
    LoadingPage.prototype.buttonComplete = function () {
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
            styles: [__webpack_require__(/*! ./loading.page.scss */ "./src/app/pages/loading/loading.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingPage);
    return LoadingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-loading-loading-module.js.map