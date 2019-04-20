(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-toolbar-search-toolbar-search-module"],{

/***/ "./src/app/pages/toolbar-search/toolbar-search.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/toolbar-search/toolbar-search.module.ts ***!
  \***************************************************************/
/*! exports provided: ToolbarSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarSearchPageModule", function() { return ToolbarSearchPageModule; });
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fivethree/core */ "./dist/@fivethree/core/fesm5/fivethree-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _toolbar_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toolbar-search.page */ "./src/app/pages/toolbar-search/toolbar-search.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _toolbar_search_page__WEBPACK_IMPORTED_MODULE_6__["ToolbarSearchPage"]
    }
];
var ToolbarSearchPageModule = /** @class */ (function () {
    function ToolbarSearchPageModule() {
    }
    ToolbarSearchPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_0__["FivSearchbarModule"]
            ],
            declarations: [_toolbar_search_page__WEBPACK_IMPORTED_MODULE_6__["ToolbarSearchPage"]]
        })
    ], ToolbarSearchPageModule);
    return ToolbarSearchPageModule;
}());



/***/ }),

/***/ "./src/app/pages/toolbar-search/toolbar-search.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/toolbar-search/toolbar-search.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <fiv-searchbar #search title=\"Searchbar\" placeholder=\"Search ....\" (fivInputChange)=\"onSearchInputChanged($event)\"\n    (fivClose)=\"closeSearch();\" [small]=\"small\">\n    <ion-menu-button start menu=\"menuId\"></ion-menu-button>\n  </fiv-searchbar>\n\n<ion-content padding no-bounce>\n\n  <p *ngIf=\"searchInput\">searching for {{searchInput}}</p>\n\n  <ion-item>\n    <ion-label>Small Searchbar</ion-label>\n    <ion-checkbox (ionChange)=\"checkChanged($event)\" [checked]=\"small\" slot=\"start\"></ion-checkbox>\n  </ion-item>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/toolbar-search/toolbar-search.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/toolbar-search/toolbar-search.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rvb2xiYXItc2VhcmNoL3Rvb2xiYXItc2VhcmNoLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/toolbar-search/toolbar-search.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/toolbar-search/toolbar-search.page.ts ***!
  \*************************************************************/
/*! exports provided: ToolbarSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarSearchPage", function() { return ToolbarSearchPage; });
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fivethree/core */ "./dist/@fivethree/core/fesm5/fivethree-core.js");
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


var ToolbarSearchPage = /** @class */ (function () {
    function ToolbarSearchPage() {
        this.small = true;
        this.states = _fivethree_core__WEBPACK_IMPORTED_MODULE_0__["DrawerState"];
        this.state = _fivethree_core__WEBPACK_IMPORTED_MODULE_0__["DrawerState"].Bottom;
    }
    ToolbarSearchPage.prototype.ngOnInit = function () {
    };
    ToolbarSearchPage.prototype.onSearchInputChanged = function (event) {
        this.searchInput = event.detail.value;
    };
    ToolbarSearchPage.prototype.closeSearch = function () {
        this.searchInput = '';
    };
    ToolbarSearchPage.prototype.bottomSheetClose = function (search) {
        search.closeSearchbar();
    };
    ToolbarSearchPage.prototype.checkChanged = function (event) {
        this.small = event.detail.checked;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search'),
        __metadata("design:type", _fivethree_core__WEBPACK_IMPORTED_MODULE_0__["FivSearchbar"])
    ], ToolbarSearchPage.prototype, "search", void 0);
    ToolbarSearchPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar-search',
            template: __webpack_require__(/*! ./toolbar-search.page.html */ "./src/app/pages/toolbar-search/toolbar-search.page.html"),
            styles: [__webpack_require__(/*! ./toolbar-search.page.scss */ "./src/app/pages/toolbar-search/toolbar-search.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarSearchPage);
    return ToolbarSearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-toolbar-search-toolbar-search-module.js.map