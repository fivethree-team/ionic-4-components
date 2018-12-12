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
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password.page */ "./src/app/pages/password/password.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _password_page__WEBPACK_IMPORTED_MODULE_7__["PasswordPage"]
    }
];
var PasswordPageModule = /** @class */ (function () {
    function PasswordPageModule() {
    }
    PasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                core__WEBPACK_IMPORTED_MODULE_1__["FivethreeCoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"]
            ],
            declarations: [_password_page__WEBPACK_IMPORTED_MODULE_7__["PasswordPage"]]
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

module.exports = "<app-header title=\"Password Reveal Input\"></app-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <app-example [snippet]=\"'assets/docs/snippets/password/password.basic.md'\" [title]=\"'Basic password reveal input'\">\n          <fiv-password></fiv-password>\n        </app-example>\n\n        <app-example [snippet]=\"'assets/snippets/password/password.placeholder.md'\" [title]=\"'Placeholder text for password reveal input'\">\n          <fiv-password placeholder=\"Password\"></fiv-password>\n        </app-example>\n\n        <app-example [snippet]=\"'assets/snippets/password/password.form.md'\" [title]=\"'Form with password reveal input'\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <ion-item>\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input formControlName=\"email\" type=\"text\"></ion-input>\n            </ion-item>\n\n            <ion-item *ngIf=\"email.invalid && email.touched\" lines=\"none\">\n              <ion-text color=\"danger\" class=\"form-error\">\n                  Please enter a valid email.\n              </ion-text>\n            </ion-item>\n\n            <fiv-password placeholder=\"Password\" formControlName=\"password\"></fiv-password>\n\n            <ion-item *ngIf=\"password.invalid && password.touched\" lines=\"none\">\n              <ion-text color=\"danger\" class=\"form-error\">\n                  Please enter a valid password with atleast 4 characters.\n              </ion-text>\n            </ion-item>\n            <ion-button block shape=\"round\" color=\"primary\" type=\"submit\" [disabled]=\"loginForm.invalid\">\n              Login\n            </ion-button>\n          </form>\n        </app-example>\n\n        <app-example [snippet]=\"'assets/snippets/password/password.position.md'\" [title]=\"'Style placeholder position of reveal password input'\">\n          <ion-item-divider>Floating placeholder</ion-item-divider>\n          <fiv-password placeholder=\"Password\" position=\"floating\"></fiv-password>\n\n          <ion-item-divider>Inline placeholder</ion-item-divider>\n          <fiv-password placeholder=\"Password\" position=\"inline\"></fiv-password>\n\n          <ion-item-divider>Fixed placeholder</ion-item-divider>\n          <fiv-password placeholder=\"Password\" position=\"fixed\"></fiv-password>\n\n          <ion-item-divider>Stacked placeholder</ion-item-divider>\n          <fiv-password placeholder=\"Password\" position=\"stacked\"></fiv-password>\n        </app-example>\n\n        <app-example [snippet]=\"'assets/snippets/password/password.show.md'\" [title]=\"'Show password'\">\n          <ion-item lines=\"none\">\n            <ion-label>Show Password</ion-label>\n            <ion-checkbox slot=\"start\" [(ngModel)]=\"show\"></ion-checkbox>\n          </ion-item>\n          <fiv-password placeholder=\"Password\" [show]=\"show\"></fiv-password>\n        </app-example>\n\n        <app-example [snippet]=\"'assets/snippets/password/password.custom-icon.md'\" [title]=\"'Custom show/hide password icon'\">\n          <fiv-password placeholder=\"Password\" showIcon=\"ice-cream\" hideIcon=\"leaf\"></fiv-password>\n        </app-example>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/password/password.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/password/password.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bhc3N3b3JkL3Bhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */"

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
        this.show = true;
    }
    PasswordPage.prototype.ngOnInit = function () {
        this.setupForm();
    };
    PasswordPage.prototype.setupForm = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
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
    Object.defineProperty(PasswordPage.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    PasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password',
            template: __webpack_require__(/*! ./password.page.html */ "./src/app/pages/password/password.page.html"),
            styles: [__webpack_require__(/*! ./password.page.scss */ "./src/app/pages/password/password.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], PasswordPage);
    return PasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-password-password-module.js.map