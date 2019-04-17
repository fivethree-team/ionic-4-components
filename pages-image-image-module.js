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
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image.page */ "./src/app/pages/image/image.page.ts");
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
        component: _image_page__WEBPACK_IMPORTED_MODULE_6__["ImagePage"]
    }
];
var ImagePageModule = /** @class */ (function () {
    function ImagePageModule() {
    }
    ImagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivethreeCoreModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"]
            ],
            declarations: [_image_page__WEBPACK_IMPORTED_MODULE_6__["ImagePage"]]
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

module.exports = "<app-header title=\"Image Gallery\"></app-header>\n\n\n<ion-content padding>\n\n  <fiv-gallery>\n    <ion-grid fixed no-padding>\n      <ion-row class=\"big\">\n        <ion-col size=\"6\">\n            <fiv-gallery-image [src]=\"'assets/images/photo_2.jpeg'\"></fiv-gallery-image>\n          </ion-col>\n        <ion-col size=\"6\">\n          <fiv-gallery-image [src]=\"'assets/images/photo_1.jpeg'\"></fiv-gallery-image>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"large\">\n        <ion-col size=\"4\">\n            <fiv-gallery-image [src]=\"'assets/images/photo_3.jpeg'\"></fiv-gallery-image>\n          </ion-col>\n        <ion-col size=\"4\">\n            <fiv-gallery-image [src]=\"'assets/images/photo_4.jpeg'\"></fiv-gallery-image>\n          </ion-col>\n        <ion-col size=\"4\">\n            <fiv-gallery-image [src]=\"'assets/images/photo_5.jpeg'\"></fiv-gallery-image>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"small\">\n        <ion-col size=\"3\">\n            <fiv-gallery-image [src]=\"'assets/images/photo_6.jpeg'\"></fiv-gallery-image>\n          </ion-col>\n        <ion-col size=\"3\">\n            <fiv-gallery-image [src]=\"'assets/images/photo_7.jpeg'\"></fiv-gallery-image>\n          </ion-col>\n        <ion-col size=\"3\">\n            <fiv-gallery-image [src]=\"'assets/images/photo_8.jpeg'\"></fiv-gallery-image>\n        </ion-col>\n        <ion-col size=\"3\">\n            <fiv-gallery-image [src]=\"'assets/images/photo_9.jpeg'\"></fiv-gallery-image>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </fiv-gallery>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/image/image.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/image/image.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row.big fiv-gallery-image {\n  --max-height: 86px; }\n\nion-row.small fiv-gallery-image {\n  --max-height: 60px; }\n\nion-row.large fiv-gallery-image {\n  --max-height: 120px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tai9EZXYvZml2ZXRocmVlL3dlYi1jb21wb25lbnRzL2ZpdmV0aHJlZS9zcmMvYXBwL3BhZ2VzL2ltYWdlL2ltYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLGtCQUFhLEVBQUE7O0FBSXJCO0VBRVEsa0JBQWEsRUFBQTs7QUFHckI7RUFFUSxtQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW1hZ2UvaW1hZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tcm93LmJpZyB7XG4gICAgZml2LWdhbGxlcnktaW1hZ2Uge1xuICAgICAgICAtLW1heC1oZWlnaHQ6IDg2cHg7XG4gICAgfVxufVxuXG5pb24tcm93LnNtYWxsIHtcbiAgICBmaXYtZ2FsbGVyeS1pbWFnZSB7XG4gICAgICAgIC0tbWF4LWhlaWdodDogNjBweDtcbiAgICB9XG59XG5pb24tcm93LmxhcmdlIHtcbiAgICBmaXYtZ2FsbGVyeS1pbWFnZSB7XG4gICAgICAgIC0tbWF4LWhlaWdodDogMTIwcHg7XG4gICAgfVxufVxuIl19 */"

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