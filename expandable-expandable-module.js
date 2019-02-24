(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expandable-expandable-module"],{

/***/ "./src/app/pages/expandable/expandable.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/expandable/expandable.module.ts ***!
  \*******************************************************/
/*! exports provided: ExpandablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandablePageModule", function() { return ExpandablePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expandable_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expandable.page */ "./src/app/pages/expandable/expandable.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fivethree/core */ "./dist/@fivethree/core/fesm5/fivethree-core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _expandable_page__WEBPACK_IMPORTED_MODULE_5__["ExpandablePage"]
    }
];
var ExpandablePageModule = /** @class */ (function () {
    function ExpandablePageModule() {
    }
    ExpandablePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivethreeCoreModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_expandable_page__WEBPACK_IMPORTED_MODULE_5__["ExpandablePage"]]
        })
    ], ExpandablePageModule);
    return ExpandablePageModule;
}());



/***/ }),

/***/ "./src/app/pages/expandable/expandable.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/expandable/expandable.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Expandable\"></app-header>\n\n<ion-content>\n  <ion-grid class=\"page-content\" fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <app-example [api]=\"'assets/docs/snippets/expandable/api.md'\" [typescript]=\"'assets/docs/snippets/expandable/ts.md'\"\n          [css]=\"'assets/docs/snippets/expandable/css.md'\" [html]=\"'assets/docs/snippets/expandable/html.md'\" [title]=\"'Expandable Component'\"\n          [subtitle]=\"'Flexible Expandable component for building Accordions or Expansion Panels yourself.'\">\n          <ion-item-divider>\n            <ion-label>Basic Example</ion-label>\n          </ion-item-divider>\n\n          <ion-button [disabled]=\"ex.isOpen\" (click)=\"ex.open()\">\n            Open\n          </ion-button>\n          <ion-button [disabled]=\"!ex.isOpen\" (click)=\"ex.close()\">\n            Close\n          </ion-button>\n\n          <fiv-expandable #ex>\n            <fiv-ripple [hover]=\"true\" header (fivClick)=\"ex.toggle()\">\n              <ion-item [lines]=\"'inset'\">\n                <ion-label>Expandable Header</ion-label>\n                <fiv-expandable-indicator></fiv-expandable-indicator>\n              </ion-item>\n            </fiv-ripple>\n            <div content>\n              <span class=\"content\" [fivCenter]>Expandable Content (height depends on contents size)</span>\n            </div>\n          </fiv-expandable>\n\n        </app-example>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-footer></app-footer>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/expandable/expandable.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/expandable/expandable.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div[content] {\n  min-height: 200px;\n  background: var(--ion-color-light);\n  position: relative; }\n\nion-item {\n  border: 1px solid var(--ion-color-light);\n  --inner-border-width: 0px; }\n\nfiv-ripple {\n  margin-top: 16px; }\n\n.content {\n  color: var(--ion-color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tai9EZXYvZml2ZXRocmVlL3dlYi1jb21wb25lbnRzL2ZpdmV0aHJlZS9zcmMvYXBwL3BhZ2VzL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsa0NBQWtDO0VBQ2xDLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHdDQUF3QztFQUN4Qyx5QkFBcUIsRUFBQTs7QUFJekI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSwrQkFBK0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZbY29udGVudF0ge1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24taXRlbSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xufVxuXG5cbmZpdi1yaXBwbGUge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5jb250ZW50IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/expandable/expandable.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/expandable/expandable.page.ts ***!
  \*****************************************************/
/*! exports provided: ExpandablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandablePage", function() { return ExpandablePage; });
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

var ExpandablePage = /** @class */ (function () {
    function ExpandablePage() {
    }
    ExpandablePage.prototype.ngOnInit = function () {
    };
    ExpandablePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expandable',
            template: __webpack_require__(/*! ./expandable.page.html */ "./src/app/pages/expandable/expandable.page.html"),
            styles: [__webpack_require__(/*! ./expandable.page.scss */ "./src/app/pages/expandable/expandable.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExpandablePage);
    return ExpandablePage;
}());



/***/ })

}]);
//# sourceMappingURL=expandable-expandable-module.js.map