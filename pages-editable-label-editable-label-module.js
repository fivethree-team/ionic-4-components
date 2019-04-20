(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-editable-label-editable-label-module"],{

/***/ "./src/app/pages/editable-label/editable-label.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/editable-label/editable-label.module.ts ***!
  \***************************************************************/
/*! exports provided: EditableLabelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableLabelPageModule", function() { return EditableLabelPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editable_label_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editable-label.page */ "./src/app/pages/editable-label/editable-label.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _editable_label_page__WEBPACK_IMPORTED_MODULE_5__["EditableLabelPage"]
    }
];
var EditableLabelPageModule = /** @class */ (function () {
    function EditableLabelPageModule() {
    }
    EditableLabelPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            declarations: [_editable_label_page__WEBPACK_IMPORTED_MODULE_5__["EditableLabelPage"]]
        })
    ], EditableLabelPageModule);
    return EditableLabelPageModule;
}());



/***/ }),

/***/ "./src/app/pages/editable-label/editable-label.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/editable-label/editable-label.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Editable Label\"></app-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>Editing</ion-label>\n    <ion-checkbox slot=\"start\" [(ngModel)]=\"editing\"></ion-checkbox>\n  </ion-item>\n\n  <ion-card>\n    <ion-card-content>\n      <fiv-editable-label value=\"Not in a form\" [editing]=\"editing\"></fiv-editable-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <fiv-editable-label value=\"Text with NgModel\" [(ngModel)]=\"model\" [editing]=\"editing\"></fiv-editable-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{model}}</ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <ion-card>\n      <ion-toolbar>\n        <fiv-editable-label value=\"Title\" type=\"title\" formControlName=\"title\" [editing]=\"editing\"></fiv-editable-label>\n      </ion-toolbar>\n      <ion-card-content>\n        <ion-item>\n          <fiv-editable-label value=\"Your Name\" formControlName=\"name\" [editing]=\"editing\"></fiv-editable-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <ion-button block color=\"primary\" type=\"submit\">\n      Login\n    </ion-button>\n  </form>\n\n  <ion-card>\n    <ion-card-content>\n      {{form.value | json}}\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/editable-label/editable-label.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/editable-label/editable-label.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXRhYmxlLWxhYmVsL2VkaXRhYmxlLWxhYmVsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/editable-label/editable-label.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/editable-label/editable-label.page.ts ***!
  \*************************************************************/
/*! exports provided: EditableLabelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableLabelPage", function() { return EditableLabelPage; });
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


var EditableLabelPage = /** @class */ (function () {
    function EditableLabelPage(formBuilder) {
        this.formBuilder = formBuilder;
        this.setupForm();
    }
    EditableLabelPage.prototype.ngOnInit = function () {
    };
    EditableLabelPage.prototype.setupForm = function () {
        this.form = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    EditableLabelPage.prototype.onSubmit = function () {
    };
    EditableLabelPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editable-label',
            template: __webpack_require__(/*! ./editable-label.page.html */ "./src/app/pages/editable-label/editable-label.page.html"),
            styles: [__webpack_require__(/*! ./editable-label.page.scss */ "./src/app/pages/editable-label/editable-label.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditableLabelPage);
    return EditableLabelPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-editable-label-editable-label-module.js.map