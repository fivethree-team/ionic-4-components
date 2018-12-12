(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-icon-icon-module"],{

/***/ "./src/app/pages/icon/icon.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/icon/icon.module.ts ***!
  \*******************************************/
/*! exports provided: IconPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconPageModule", function() { return IconPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _icon_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon.page */ "./src/app/pages/icon/icon.page.ts");
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
        component: _icon_page__WEBPACK_IMPORTED_MODULE_5__["IconPage"]
    }
];
var IconPageModule = /** @class */ (function () {
    function IconPageModule() {
    }
    IconPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                core__WEBPACK_IMPORTED_MODULE_6__["FivethreeCoreModule"]
            ],
            declarations: [_icon_page__WEBPACK_IMPORTED_MODULE_5__["IconPage"]]
        })
    ], IconPageModule);
    return IconPageModule;
}());



/***/ }),

/***/ "./src/app/pages/icon/icon.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/icon/icon.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <fiv-icon [name]=\"iconState ? 'md-menu' : 'md-arrow-back'\" [indicatorValue]=\"indicatorValue\"></fiv-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <fiv-icon [name]=\"iconState ? 'md-add' : 'md-trash'\"></fiv-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Icon</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n\n  <ion-button (click)=\"iconState = !iconState\">\n    Toggle icons\n  </ion-button>\n\n  <ion-button (click)=\"increment()\">\n    <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n  </ion-button>\n  <ion-button (click)=\"decrement()\">\n    <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\n  </ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/icon/icon.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/icon/icon.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --fiv-dot-color-background: var(--ion-color-light); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tai9EZXYvZml2ZXRocmVlL3dlYi1jb21wb25lbnRzL2ZpdmV0aHJlZS9zcmMvYXBwL3BhZ2VzL2ljb24vaWNvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtREFBMkIsRUFDOUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pY29uL2ljb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC0tZml2LWRvdC1jb2xvci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/icon/icon.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/icon/icon.page.ts ***!
  \*****************************************/
/*! exports provided: IconPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconPage", function() { return IconPage; });
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

var IconPage = /** @class */ (function () {
    function IconPage() {
        this.iconState = true;
        this.indicatorValue = -1;
    }
    IconPage.prototype.ngOnInit = function () {
    };
    IconPage.prototype.decrement = function () {
        if (this.indicatorValue >= 0) {
            console.log('decrement value', this.indicatorValue - 1);
            this.indicatorValue--;
        }
    };
    IconPage.prototype.increment = function () {
        console.log('increment value', this.indicatorValue + 1);
        this.indicatorValue++;
    };
    IconPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icon',
            template: __webpack_require__(/*! ./icon.page.html */ "./src/app/pages/icon/icon.page.html"),
            styles: [__webpack_require__(/*! ./icon.page.scss */ "./src/app/pages/icon/icon.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IconPage);
    return IconPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-icon-icon-module.js.map