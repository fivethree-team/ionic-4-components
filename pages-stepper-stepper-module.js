(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-stepper-stepper-module"],{

/***/ "./src/app/pages/stepper/stepper.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/stepper/stepper.module.ts ***!
  \*************************************************/
/*! exports provided: StepperPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperPageModule", function() { return StepperPageModule; });
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _stepper_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stepper.page */ "./src/app/pages/stepper/stepper.page.ts");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _stepper_page__WEBPACK_IMPORTED_MODULE_6__["StepperPage"]
    }
];
var StepperPageModule = /** @class */ (function () {
    function StepperPageModule() {
    }
    StepperPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"],
                core__WEBPACK_IMPORTED_MODULE_7__["FivethreeCoreModule"]
            ],
            declarations: [_stepper_page__WEBPACK_IMPORTED_MODULE_6__["StepperPage"]]
        })
    ], StepperPageModule);
    return StepperPageModule;
}());



/***/ }),

/***/ "./src/app/pages/stepper/stepper.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/stepper/stepper.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Stepper\"></app-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <app-example [typescript]=\"'assets/docs/snippets/stepper/ts.md'\" [css]=\"'assets/docs/snippets/stepper/css.md'\" [api]=\"'assets/docs/snippets/stepper/api.md'\" [html]=\"'assets/docs/snippets/stepper/html.md'\" [title]=\"'Stepper'\" [subtitle]=\"'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut\n          labore et dolore magna aliqua.'\">\n          <ion-item-divider>\n            <ion-label>Vertical Stepper</ion-label>\n          </ion-item-divider>\n          <ion-item line=\"none\">\n            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor.\n          </ion-item>\n          <div class=\"wrapper\">\n            <fiv-stepper #stepperV [mode]=\"'vertical'\" (fivClick)=\"stepperV.open($event)\">\n              <fiv-step [title]=\"'Awesome Title'\" [subtitle]=\"'Awesome Subtitle'\">\n                <ion-card>\n                  <ion-card-header>\n                    <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n                    <ion-card-title>Awesome Title</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                  </ion-card-content>\n                  <ion-toolbar>\n                    <ion-buttons slot=\"end\">\n                      <ion-button color=\"dark\" (click)=\"stepperV.closeAll()\">\n                        Close\n                      </ion-button>\n                      <ion-button color=\"dark\" (click)=\"stepperV.reset(0)\">\n                        reset\n                      </ion-button>\n                      <ion-button color=\"secondary\" (click)=\"stepperV.completeStep(0)\">\n                        Complete\n                      </ion-button>\n                      <ion-button color=\"primary\" (click)=\"stepperV.select(1)\">\n                        NEXT\n                      </ion-button>\n                    </ion-buttons>\n                  </ion-toolbar>\n                </ion-card>\n              </fiv-step>\n              <fiv-step [title]=\"'Address'\" [subtitle]=\"'Please enter your adress'\">\n                <ion-card>\n                  <ion-card-header>\n                    <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n                    <ion-card-title>Awesome Title</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                  </ion-card-content>\n                  <ion-toolbar>\n                    <ion-buttons slot=\"end\">\n                      <ion-button color=\"dark\" (click)=\"stepperV.select(0)\">\n                        Previous\n                      </ion-button>\n                      <ion-button color=\"primary\" (click)=\"stepperV.select(2)\">\n                        NEXT\n                      </ion-button>\n                    </ion-buttons>\n                  </ion-toolbar>\n                </ion-card>\n              </fiv-step>\n              <fiv-step [title]=\"'Awesome Title'\" [subtitle]=\"'Awesome Subtitle'\">\n                <ion-card>\n                  <ion-card-header>\n                    <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n                    <ion-card-title>Awesome Title</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                  </ion-card-content>\n                  <ion-toolbar>\n                    <ion-buttons slot=\"end\">\n                      <ion-button color=\"dark\" (click)=\"stepperV.select(1)\">\n                        Previous\n                      </ion-button>\n                      <ion-button color=\"primary\" (click)=\"stepperV.select(0)\">\n                        NEXT\n                      </ion-button>\n                    </ion-buttons>\n                  </ion-toolbar>\n                </ion-card>\n              </fiv-step>\n            </fiv-stepper>\n          </div>\n          <ion-item-divider>\n            <ion-label>Horizontal Stepper</ion-label>\n          </ion-item-divider>\n          <ion-item line=\"none\">\n            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor.\n          </ion-item>\n          <div class=\"wrapper\">\n            <fiv-stepper #stepper [mode]=\"'horizontal'\">\n              <fiv-step [title]=\"'Awesome Title'\" [subtitle]=\"'Awesome Subtitle'\">\n                <ion-card class=\"card-horizontal\">\n                  <ion-card-header>\n                    <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n                    <ion-card-title>Awesome Title</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                  </ion-card-content>\n                  <ion-toolbar>\n                    <ion-buttons slot=\"end\">\n                      <ion-button color=\"primary\" (click)=\"stepper.select(1)\">\n                        NEXT\n                      </ion-button>\n                    </ion-buttons>\n                  </ion-toolbar>\n                </ion-card>\n              </fiv-step>\n              <fiv-step [title]=\"'Address'\" [subtitle]=\"'Please enter your adress'\">\n                <ion-card>\n                  <ion-card-header>\n                    <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n                    <ion-card-title>Awesome Title</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n\n                  </ion-card-content>\n                  <ion-toolbar>\n                    <ion-buttons slot=\"end\">\n                      <ion-button color=\"dark\" (click)=\"stepper.select(0)\">\n                        Previous\n                      </ion-button>\n                      <ion-button color=\"primary\" (click)=\"stepper.select(2)\">\n                        NEXT\n                      </ion-button>\n                    </ion-buttons>\n                  </ion-toolbar>\n                </ion-card>\n              </fiv-step>\n              <fiv-step [title]=\"'Awesome Title'\" [subtitle]=\"'Awesome Subtitle'\">\n                <ion-card>\n                  <ion-card-header>\n                    <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n                    <ion-card-title>Awesome Title</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                  </ion-card-content>\n                  <ion-toolbar>\n                    <ion-buttons slot=\"end\">\n                      <ion-button color=\"dark\" (click)=\"stepper.select(1)\">\n                        Previous\n                      </ion-button>\n                      <ion-button color=\"primary\" (click)=\"stepper.select(0)\">\n                        NEXT\n                      </ion-button>\n                    </ion-buttons>\n                  </ion-toolbar>\n                </ion-card>\n              </fiv-step>\n            </fiv-stepper>\n          </div>\n        </app-example>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <app-footer></app-footer>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/stepper/stepper.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/stepper/stepper.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item-divider {\n  border-bottom: 0; }\n\nion-item {\n  --border-style: none; }\n\n.card-horizontal {\n  min-width: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJ5Z3Jvc3NnYXJ0ZW4vRGV2L3RoaW5ncy9maXZldGhyZWUtbGliL3NyYy9hcHAvcGFnZXMvc3RlcHBlci9zdGVwcGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLHFCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0ZXBwZXIvc3RlcHBlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS1kaXZpZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAwO1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5jYXJkLWhvcml6b250YWx7XG4gICAgbWluLXdpZHRoOiA4MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/stepper/stepper.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/stepper/stepper.page.ts ***!
  \***********************************************/
/*! exports provided: StepperPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperPage", function() { return StepperPage; });
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

var StepperPage = /** @class */ (function () {
    function StepperPage() {
    }
    StepperPage.prototype.ngOnInit = function () {
    };
    StepperPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stepper',
            template: __webpack_require__(/*! ./stepper.page.html */ "./src/app/pages/stepper/stepper.page.html"),
            styles: [__webpack_require__(/*! ./stepper.page.scss */ "./src/app/pages/stepper/stepper.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StepperPage);
    return StepperPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-stepper-stepper-module.js.map