(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-page-not-found-page-not-found-module"],{

/***/ "./src/app/pages/page-not-found/page-not-found.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.module.ts ***!
  \***************************************************************/
/*! exports provided: PageNotFoundPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundPageModule", function() { return PageNotFoundPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_not_found_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found.page */ "./src/app/pages/page-not-found/page-not-found.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _page_not_found_page__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundPage"]
    }
];
var PageNotFoundPageModule = /** @class */ (function () {
    function PageNotFoundPageModule() {
    }
    PageNotFoundPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            ],
            declarations: [_page_not_found_page__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundPage"]]
        })
    ], PageNotFoundPageModule);
    return PageNotFoundPageModule;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<ion-content>\n\n  <div id=\"page-not-found-container\">\n    <div [fivCenter] text-center>\n      <lottie-animation-view [options]=\"lottieConfig\" [width]=\"200\" [height]=\"200\" (animCreated)=\"handleAnimation($event)\">\n      </lottie-animation-view>\n      <h3 text-center>Oops, we couldn't find the page you are looking for.</h3>\n      <ion-button routerLink=\"/\" shape=\"round\">\n        Go to homepage\n      </ion-button>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#page-not-found-container {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJ5Z3Jvc3NnYXJ0ZW4vRGV2L3RoaW5ncy9maXZldGhyZWUtbGliL3NyYy9hcHAvcGFnZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZS1ub3QtZm91bmQtY29udGFpbmVyIHsgXG4gICAgaGVpZ2h0OiAxMDB2aDtcbn0iLCIjcGFnZS1ub3QtZm91bmQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.page.ts ***!
  \*************************************************************/
/*! exports provided: PageNotFoundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundPage", function() { return PageNotFoundPage; });
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

var PageNotFoundPage = /** @class */ (function () {
    function PageNotFoundPage() {
        this.lottieConfig = {
            path: 'assets/lottie/empty_box.json',
            renderer: 'canvas',
            autoplay: false,
            loop: false
        };
    }
    PageNotFoundPage.prototype.ngOnInit = function () {
    };
    PageNotFoundPage.prototype.handleAnimation = function (animation) {
        this.animation = animation;
        this.animation.setSpeed(0.8);
        this.animation.play();
    };
    PageNotFoundPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.page.html */ "./src/app/pages/page-not-found/page-not-found.page.html"),
            styles: [__webpack_require__(/*! ./page-not-found.page.scss */ "./src/app/pages/page-not-found/page-not-found.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundPage);
    return PageNotFoundPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-page-not-found-page-not-found-module.js.map