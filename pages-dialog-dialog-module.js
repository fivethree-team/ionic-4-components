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
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dialog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog.page */ "./src/app/pages/dialog/dialog.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./dist/@fivethree/core/fesm5/fivethree-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _dialog_page__WEBPACK_IMPORTED_MODULE_6__["DialogPage"]
    }
];
var DialogPageModule = /** @class */ (function () {
    function DialogPageModule() {
    }
    DialogPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivethreeCoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"]
            ],
            declarations: [_dialog_page__WEBPACK_IMPORTED_MODULE_6__["DialogPage"]]
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

module.exports = "<app-header title=\"Dialog\"></app-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Backdrop</ion-label>\n      <ion-toggle slot=\"end\" [(ngModel)]=\"backdrop\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Vertical Alignment</ion-label>\n      <ion-select slot=\"end\" [(ngModel)]=\"verticalAlign\">\n        <ion-select-option value=\"top\">top</ion-select-option>\n        <ion-select-option value=\"center\">center</ion-select-option>\n        <ion-select-option value=\"bottom\">bottom</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Horizontal Alignment</ion-label>\n      <ion-select slot=\"end\" [(ngModel)]=\"horizontalAlign\">\n        <ion-select-option value=\"left\">left</ion-select-option>\n        <ion-select-option value=\"center\">center</ion-select-option>\n        <ion-select-option value=\"right\">right</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Shape</ion-label>\n      <ion-select slot=\"end\" [(ngModel)]=\"shape\">\n        <ion-select-option value=\"card\">card</ion-select-option>\n        <ion-select-option value=\"fill\">fill</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Duration</ion-label>\n      <ion-input [(ngModel)]=\"duration\" type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Animation In Duration</ion-label>\n      <ion-input [(ngModel)]=\"inDuration\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Animation Out Duration</ion-label>\n      <ion-input [(ngModel)]=\"outDuration\" type=\"text\"></ion-input>\n    </ion-item>\n\n    <fiv-loading-button (click)=\"dialog.open()\">\n      Zeige Dialog\n    </fiv-loading-button>\n\n  </ion-list>\n\n</ion-content>\n<fiv-dialog [inDuration]=\"inDuration\" [outDuration]=\"outDuration\" #dialog\n  [duration]=\"duration\" [shape]=\"shape\" [horizontalAlign]=\"horizontalAlign\"  [verticalAlign]=\"verticalAlign\" [backdrop]=\"backdrop\">\n  <ion-card-header>\n    <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n    <ion-card-title>Awesome Title</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <p>The content for this dialog</p>\n  </ion-card-content>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dialog.close()\">\n        Cancel\n      </ion-button>\n      <ion-button color=\"primary\">\n        Do Action\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</fiv-dialog>\n"

/***/ }),

/***/ "./src/app/pages/dialog/dialog.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/dialog/dialog.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RpYWxvZy9kaWFsb2cucGFnZS5zY3NzIn0= */"

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
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fivethree/core */ "./dist/@fivethree/core/fesm5/fivethree-core.js");
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
        this.horizontalAlign = 'left';
        this.shape = 'fill';
        this.duration = 3600;
        this.inDuration = '220';
        this.outDuration = '180';
    }
    DialogPage.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dialog'),
        __metadata("design:type", _fivethree_core__WEBPACK_IMPORTED_MODULE_1__["FivDialog"])
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