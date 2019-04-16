(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bottom-sheet-bottom-sheet-module"],{

/***/ "./src/app/pages/bottom-sheet/bottom-sheet.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/bottom-sheet/bottom-sheet.module.ts ***!
  \***********************************************************/
/*! exports provided: BottomSheetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetPageModule", function() { return BottomSheetPageModule; });
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bottom_sheet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bottom-sheet.page */ "./src/app/pages/bottom-sheet/bottom-sheet.page.ts");
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
        component: _bottom_sheet_page__WEBPACK_IMPORTED_MODULE_6__["BottomSheetPage"]
    }
];
var BottomSheetPageModule = /** @class */ (function () {
    function BottomSheetPageModule() {
    }
    BottomSheetPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivethreeCoreModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"]
            ],
            declarations: [_bottom_sheet_page__WEBPACK_IMPORTED_MODULE_6__["BottomSheetPage"]]
        })
    ], BottomSheetPageModule);
    return BottomSheetPageModule;
}());



/***/ }),

/***/ "./src/app/pages/bottom-sheet/bottom-sheet.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/bottom-sheet/bottom-sheet.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Bottom Sheet\"></app-header>\n\n\n<ion-content padding no-bounce>\n  <ion-grid class=\"page-content\" fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <app-example *fivIf=\"['mobile']\"  [api]=\"'assets/docs/snippets/expandable/api.md'\" [typescript]=\"'assets/docs/snippets/expandable/ts.md'\"\n          [css]=\"'assets/docs/snippets/expandable/css.md'\" [html]=\"'assets/docs/snippets/expandable/html.md'\" [title]=\"'Bottom Sheet Component'\"\n          [subtitle]=\"'Easy to use Bottom Sheet and Content Drawer (mobile only)'\">\n          <ion-list>\n            <ion-item>\n              <ion-label>Top</ion-label>\n              <ion-radio [checked]=\"drawerState===states.Top\" (click)=\"drawerState = states.Top\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>Docked</ion-label>\n              <ion-radio [checked]=\"drawerState===states.Docked\" (click)=\"drawerState = states.Docked\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>Bottom</ion-label>\n              <ion-radio [checked]=\"drawerState===states.Bottom\" (click)=\"drawerState = states.Bottom\"></ion-radio>\n            </ion-item>\n          </ion-list>\n          <ion-list>\n            <ion-item *fivPermissions=\"['ADMIN','SKRRT']; userPermissions ['USER','SKRRT']\">\n              <ion-label>Bounce</ion-label>\n              <ion-checkbox [(ngModel)]=\"shouldBounce\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>Docked height</ion-label>\n              <ion-input type=\"number\" [(ngModel)]=\"dockedHeight\" value=\"150\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Top Distance</ion-label>\n              <ion-input type=\"number\" [(ngModel)]=\"distanceTop\" value=\"56\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Minimum Height</ion-label>\n              <ion-input type=\"number\" [(ngModel)]=\"minimumHeight\" value=\"0\"></ion-input>\n            </ion-item>\n\n            <ion-item-divider>\n              <ion-label>Bottom Sheet Content</ion-label>\n            </ion-item-divider>\n            <ion-item>\n              <ion-label>Rounded</ion-label>\n              <ion-checkbox [(ngModel)]=\"rounded\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>Handle</ion-label>\n              <ion-checkbox [(ngModel)]=\"handle\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>Float</ion-label>\n              <ion-checkbox [(ngModel)]=\"float\"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n\n        </app-example>\n        <app-example *fivIf=\"['desktop']\" [api]=\"'assets/docs/snippets/expandable/api.md'\" [typescript]=\"'assets/docs/snippets/expandable/ts.md'\"\n          [css]=\"'assets/docs/snippets/expandable/css.md'\" [html]=\"'assets/docs/snippets/expandable/html.md'\" [title]=\"'Bottom Sheet Component'\"\n          [subtitle]=\"'Easy to use Bottom Sheet and Content Drawer (mobile only)'\">\n          \n          this component only works on mobile.\n\n        </app-example>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<fiv-bottom-sheet *fivIf=\"['mobile']\" [(state)]=\"drawerState\" [minimumHeight]=\"minimumHeight\" [dockedHeight]=\"dockedHeight\" [shouldBounce]=\"shouldBounce\"\n  [distanceTop]=\"distanceTop\">\n\n  <fiv-bottom-sheet-content [float]=\"float\" [rounded]=\"rounded\" [handle]=\"handle\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n        <ion-card-title>Awesome Title</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        Awesome content\n      </ion-card-content>\n    </ion-card>\n  </fiv-bottom-sheet-content>\n\n</fiv-bottom-sheet>"

/***/ }),

/***/ "./src/app/pages/bottom-sheet/bottom-sheet.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/bottom-sheet/bottom-sheet.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drawer-content {\n  border-top: 0.5px solid #e5e5e5;\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJ5Z3Jvc3NnYXJ0ZW4vRGV2L3RoaW5ncy9maXZldGhyZWUtbGliL3NyYy9hcHAvcGFnZXMvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBK0I7RUFDL0IsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhd2VyLWNvbnRlbnQge1xuICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/bottom-sheet/bottom-sheet.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/bottom-sheet/bottom-sheet.page.ts ***!
  \*********************************************************/
/*! exports provided: BottomSheetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetPage", function() { return BottomSheetPage; });
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


var BottomSheetPage = /** @class */ (function () {
    function BottomSheetPage() {
        this.shouldBounce = true;
        this.dockedHeight = 170;
        this.distanceTop = 56;
        this.drawerState = _fivethree_core__WEBPACK_IMPORTED_MODULE_1__["DrawerState"].Docked;
        this.states = _fivethree_core__WEBPACK_IMPORTED_MODULE_1__["DrawerState"];
        this.minimumHeight = 24;
        this.handle = true;
        this.float = true;
        this.rounded = true;
    }
    BottomSheetPage.prototype.ngOnInit = function () {
    };
    BottomSheetPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottom-sheet',
            template: __webpack_require__(/*! ./bottom-sheet.page.html */ "./src/app/pages/bottom-sheet/bottom-sheet.page.html"),
            styles: [__webpack_require__(/*! ./bottom-sheet.page.scss */ "./src/app/pages/bottom-sheet/bottom-sheet.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BottomSheetPage);
    return BottomSheetPage;
}());



/***/ })

}]);
//# sourceMappingURL=bottom-sheet-bottom-sheet-module.js.map