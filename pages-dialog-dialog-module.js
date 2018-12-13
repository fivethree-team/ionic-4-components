(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dialog-dialog-module"],{

/***/ "./src/app/pages/dialog/dialog.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/dialog/dialog.module.ts ***!
  \***********************************************/
/*! exports provided: DialogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPageModule", function() { return DialogPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _dialog_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog.page */ "./src/app/pages/dialog/dialog.page.ts");
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
        component: _dialog_page__WEBPACK_IMPORTED_MODULE_5__["DialogPage"]
    }
];
var DialogPageModule = /** @class */ (function () {
    function DialogPageModule() {
    }
    DialogPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                core__WEBPACK_IMPORTED_MODULE_6__["FivethreeCoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_dialog_page__WEBPACK_IMPORTED_MODULE_5__["DialogPage"]]
        })
    ], DialogPageModule);
    return DialogPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dialog/dialog.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/dialog/dialog.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>dialog</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Backdrop</ion-label>\n      <ion-toggle slot=\"end\" [(ngModel)]=\"backdrop\"></ion-toggle>\n    </ion-item>\n    \n    <ion-item>\n        <ion-label>Animation</ion-label>\n        <ion-select slot=\"end\"  [(ngModel)]=\"animation\">\n          <ion-select-option value=\"fade\">fade</ion-select-option>\n          <ion-select-option value=\"slide\">slide</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>Vertical Alignment</ion-label>\n          <ion-select slot=\"end\"  [(ngModel)]=\"verticalAlign\">\n            <ion-select-option value=\"top\">top</ion-select-option>\n            <ion-select-option value=\"center\">center</ion-select-option>\n            <ion-select-option value=\"bottom\">bottom</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <fiv-loading-button (click)=\"dialog.open()\">\n          Zeige Dialog\n        </fiv-loading-button>\n\n  </ion-list>\n\n</ion-content>\n<fiv-dialog #dialog [animation]=\"animation\" [verticalAlign]=\"verticalAlign\" [backdrop]=\"backdrop\">\n      <ion-card>\n          <ion-card-content>\n              <ion-card-title>Hello World</ion-card-title>\n          \n              <p>The content for this card</p>\n          \n              <ion-button (click)=\"dialog.close()\">schließen</ion-button>\n            </ion-card-content>\n      </ion-card>\n  \n  \n</fiv-dialog>"

/***/ }),

/***/ "./src/app/pages/dialog/dialog.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/dialog/dialog.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  --ion-item-background-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJ5Z3Jvc3NnYXJ0ZW4vRGV2L3RoaW5ncy9maXZldGhyZWUtbGliL3NyYy9hcHAvcGFnZXMvZGlhbG9nL2RpYWxvZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBNEIsRUFDL0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kaWFsb2cvZGlhbG9nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/dialog/dialog.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/dialog/dialog.page.ts ***!
  \*********************************************/
/*! exports provided: DialogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPage", function() { return DialogPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogPage = /** @class */ (function () {
    function DialogPage() {
        this.backdrop = true;
        this.verticalAlign = 'top';
        this.animation = 'slide';
        this.floating = false;
    }
    DialogPage.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dialog'),
        __metadata("design:type", core__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"])
    ], DialogPage.prototype, "dialog", void 0);
    DialogPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.page.html */ "./src/app/pages/dialog/dialog.page.html"),
            styles: [__webpack_require__(/*! ./dialog.page.scss */ "./src/app/pages/dialog/dialog.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DialogPage);
    return DialogPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dialog-dialog-module.js.map