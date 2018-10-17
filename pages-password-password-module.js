(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-password-password-module"],{

/***/ "./src/app/pages/password/password.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/password/password.module.ts ***!
  \***************************************************/
/*! exports provided: PasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageModule", function() { return PasswordPageModule; });
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password.page */ "./src/app/pages/password/password.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _password_page__WEBPACK_IMPORTED_MODULE_6__["PasswordPage"]
    }
];
var PasswordPageModule = /** @class */ (function () {
    function PasswordPageModule() {
    }
    PasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                core__WEBPACK_IMPORTED_MODULE_0__["FivethreeCoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_password_page__WEBPACK_IMPORTED_MODULE_6__["PasswordPage"]]
        })
    ], PasswordPageModule);
    return PasswordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/password/password.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/password/password.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button menu=\"menuId\"></ion-menu-button>\n        </ion-buttons>\n    <ion-title>password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item-divider>Default Password</ion-item-divider>\n  <fiv-password></fiv-password>\n\n  <ion-item-divider>Password with placeholder</ion-item-divider>\n  <fiv-password placeholder=\"Password\"></fiv-password>\n\n  <ion-item-divider>Password with placeholder and inline position</ion-item-divider>\n  <fiv-password placeholder=\"Password\" position=\"inline\"></fiv-password>\n\n  <ion-item-divider>Show password</ion-item-divider>\n  <fiv-password [show]=\"true\"></fiv-password>\n\n  <ion-item-divider>Password with any show and hide icons</ion-item-divider>\n  <fiv-password showIcon=\"ice-cream\" hideIcon=\"leaf\"></fiv-password>\n\n  <ion-item-divider>Password in form</ion-item-divider>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <ion-item>\n      <ion-label position=\"floating\">E-Mail</ion-label>\n      <ion-input formControlName=\"email\" type=\"text\"></ion-input>\n    </ion-item>\n    <fiv-password placeholder=\"Password\" formControlName=\"password\"></fiv-password>\n    <ion-button block color=\"primary\" type=\"submit\" [disabled]=\"loginForm.invalid\">\n      Login\n    </ion-button>\n  </form>\n\n  <p>{{loginForm.valid | json}}</p>\n  <pre>{{loginForm.value | json}}</pre>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/password/password.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/password/password.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/password/password.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/password/password.page.ts ***!
  \*************************************************/
/*! exports provided: PasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPage", function() { return PasswordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordPage = /** @class */ (function () {
    function PasswordPage(formBuilder) {
        this.formBuilder = formBuilder;
    }
    PasswordPage.prototype.ngOnInit = function () {
        this.setupForm();
    };
    PasswordPage.prototype.setupForm = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['hallo', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    Object.defineProperty(PasswordPage.prototype, "email", {
        get: function () {
            return this.loginForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    PasswordPage.prototype.onSubmit = function () {
        console.log(this.loginForm.value);
    };
    PasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password',
            template: __webpack_require__(/*! ./password.page.html */ "./src/app/pages/password/password.page.html"),
            styles: [__webpack_require__(/*! ./password.page.scss */ "./src/app/pages/password/password.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], PasswordPage);
    return PasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-password-password-module.js.map