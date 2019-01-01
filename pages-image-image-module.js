(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-image-image-module"],{

/***/ "./src/app/pages/image/image.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/image/image.module.ts ***!
  \*********************************************/
/*! exports provided: ImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePageModule", function() { return ImagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _image_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image.page */ "./src/app/pages/image/image.page.ts");
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
        component: _image_page__WEBPACK_IMPORTED_MODULE_5__["ImagePage"]
    }
];
var ImagePageModule = /** @class */ (function () {
    function ImagePageModule() {
    }
    ImagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                core__WEBPACK_IMPORTED_MODULE_6__["FivethreeCoreModule"],
            ],
            declarations: [_image_page__WEBPACK_IMPORTED_MODULE_5__["ImagePage"]]
        })
    ], ImagePageModule);
    return ImagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/image/image.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/image/image.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>image</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <fiv-image-viewer (fivActionClick)=\"onActionClick($event)\" [actions]=\"[{icon: 'md-trash', name: 'remove'},{icon: 'md-send', name: 'send'}]\" [src]=\"'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQRop4VKhcYOvhY8gLZEICF8ZnWhKFVi6zgsxSCXwEGi2uukej'\"></fiv-image-viewer>\n    <ion-card-header>\n      <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n      <ion-card-title>Awesome Title</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Awesome content\n    </ion-card-content>\n  </ion-card>\n\n  <fiv-image-viewer (fivActionClick)=\"onActionClick($event)\" [width]=\"103.5\" [height]=\"122\" [actions]=\"[{icon: 'md-trash'},{icon: 'md-send'},{icon: 'md-image'},{icon: 'md-share'}]\"\n    [src]=\"'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQRop4VKhcYOvhY8gLZEICF8ZnWhKFVi6zgsxSCXwEGi2uukej'\"></fiv-image-viewer>\n  <fiv-image-viewer (fivActionClick)=\"onActionClick($event)\" [width]=\"207\" [height]=\"244\" [actions]=\"[{name: 'Ablesung abschließen'}]\" [src]=\"'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQRop4VKhcYOvhY8gLZEICF8ZnWhKFVi6zgsxSCXwEGi2uukej'\"></fiv-image-viewer>\n \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/image/image.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/image/image.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltYWdlL2ltYWdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/image/image.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/image/image.page.ts ***!
  \*******************************************/
/*! exports provided: ImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePage", function() { return ImagePage; });
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

var ImagePage = /** @class */ (function () {
    function ImagePage() {
    }
    ImagePage.prototype.ngOnInit = function () {
    };
    ImagePage.prototype.onActionClick = function (index) {
        console.log('test', index);
    };
    ImagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! ./image.page.html */ "./src/app/pages/image/image.page.html"),
            styles: [__webpack_require__(/*! ./image.page.scss */ "./src/app/pages/image/image.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImagePage);
    return ImagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-image-image-module.js.map