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
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fivethree/core */ "./dist/@fivethree/core/fesm5/fivethree-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _icon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.page */ "./src/app/pages/icon/icon.page.ts");
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
        component: _icon_page__WEBPACK_IMPORTED_MODULE_6__["IconPage"]
    }
];
var IconPageModule = /** @class */ (function () {
    function IconPageModule() {
    }
    IconPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _fivethree_core__WEBPACK_IMPORTED_MODULE_0__["FivIconModule"]
            ],
            declarations: [_icon_page__WEBPACK_IMPORTED_MODULE_6__["IconPage"]]
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

module.exports = "<app-header title=\"Icon\"></app-header>\n\n<ion-content>\n  <ion-grid class=\"page-content\" fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <app-example [api]=\"'assets/docs/snippets/icon/api.md'\" [typescript]=\"'assets/docs/snippets/icon/ts.md'\" [css]=\"'assets/docs/snippets/icon/css.md'\"\n          [html]=\"'assets/docs/snippets/icon/html.md'\" [title]=\"'Icon Component'\" [subtitle]=\"'This is basically an ion-icon but it can also display badge notifications and has smooth icon change transitions.'\">\n          <ion-item-divider>\n            <ion-label>Basic Example</ion-label>\n          </ion-item-divider>\n\n          <ion-button (click)=\"getNewIcon()\">\n            change icon\n          </ion-button>\n          <ion-button (click)=\"increment()\">\n            <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"decrement()\">\n            <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\n          </ion-button>\n\n          <ion-item>\n            <ion-label>Icon turned off</ion-label>\n            <ion-checkbox [(ngModel)]=\"off\" slot=\"end\"></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-label>Icon dot</ion-label>\n            <ion-checkbox [(ngModel)]=\"dot\" slot=\"end\"></ion-checkbox>\n          </ion-item>\n\n          <div class=\"example\">\n            <ion-button [fivCenter] fill=\"clear\">\n              <fiv-icon [off]=\"off\" [dotVisible]=\"dot\" slot=\"icon-only\" [indicatorValue]=\"indicatorValue\" [name]=\"icon\"></fiv-icon>\n            </ion-button>\n          </div>\n\n\n        </app-example>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/icon/icon.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/icon/icon.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --fiv-dot-color-background: var(--ion-color-light);\n  --fiv-dot-color: var(--ion-color-primary);\n}\n\n.example {\n  --fiv-color-icon: var(--ion-color-dark);\n  position: relative;\n  height: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJ5Z3Jvc3NnYXJ0ZW4vRGV2L3RoaW5ncy9maXZldGhyZWUtbGliL3NyYy9hcHAvcGFnZXMvaWNvbi9pY29uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaWNvbi9pY29uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtEQUFBO0VBQ0EseUNBQUE7QUNDSjs7QURFQTtFQUNJLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pY29uL2ljb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC0tZml2LWRvdC1jb2xvci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIC0tZml2LWRvdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uZXhhbXBsZSB7XG4gICAgLS1maXYtY29sb3ItaWNvbjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEyMHB4O1xufSIsIjpob3N0IHtcbiAgLS1maXYtZG90LWNvbG9yLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tZml2LWRvdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uZXhhbXBsZSB7XG4gIC0tZml2LWNvbG9yLWljb246IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEyMHB4O1xufSJdfQ== */"

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
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
    function IconPage(util) {
        this.util = util;
        this.icon = 'md-notifications';
        this.indicatorValue = 0;
        this.off = false;
        this.dot = false;
    }
    IconPage.prototype.ngOnInit = function () {
    };
    IconPage.prototype.decrement = function () {
        if (this.indicatorValue > 0) {
            this.indicatorValue--;
        }
    };
    IconPage.prototype.increment = function () {
        this.indicatorValue++;
    };
    IconPage.prototype.getNewIcon = function () {
        var icon = this.util.getRandomIcon();
        this.icon = icon.icons[1] || icon.icons[0];
    };
    IconPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-icon',
            template: __webpack_require__(/*! ./icon.page.html */ "./src/app/pages/icon/icon.page.html"),
            styles: [__webpack_require__(/*! ./icon.page.scss */ "./src/app/pages/icon/icon.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"]])
    ], IconPage);
    return IconPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-icon-icon-module.js.map