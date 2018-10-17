(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-app-bar-app-bar-module"],{

/***/ "./src/app/pages/app-bar/app-bar.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/app-bar/app-bar.module.ts ***!
  \*************************************************/
/*! exports provided: AppBarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBarPageModule", function() { return AppBarPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _app_bar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-bar.page */ "./src/app/pages/app-bar/app-bar.page.ts");
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
        component: _app_bar_page__WEBPACK_IMPORTED_MODULE_5__["AppBarPage"]
    }
];
var AppBarPageModule = /** @class */ (function () {
    function AppBarPageModule() {
    }
    AppBarPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                core__WEBPACK_IMPORTED_MODULE_6__["FivethreeCoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_app_bar_page__WEBPACK_IMPORTED_MODULE_5__["AppBarPage"]]
        })
    ], AppBarPageModule);
    return AppBarPageModule;
}());



/***/ }),

/***/ "./src/app/pages/app-bar/app-bar.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/app-bar/app-bar.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n            <ion-menu-button menu=\"menuId\"></ion-menu-button>\n        </ion-buttons>\n    <ion-title>app-bar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [scrollEvents]=\"true\">\n\n  <ion-list>\n    <ion-item class=\"iiii\">\n      <ion-label>\n        wow\n      </ion-label>\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n    <ion-item class=\"iiii\">\n      test\n    </ion-item>\n  </ion-list>\n\n  <fiv-app-bar [fabIcon]=\"'md-add'\" [fabLeft]=\"false\" [fabRight]=\"false\" #appBar (fivFabClick)=\"fabClicked($event)\">\n    <ion-menu-button *ngIf=\"!appBar.fabLeft && !appBar.fabRight\" start></ion-menu-button>\n    <ion-button *ngIf=\"!appBar.fabLeft && !appBar.fabRight\" end icon-only>\n      <ion-icon slot=\"icon-only\" name=\"md-profile\"></ion-icon>\n    </ion-button>\n    <ion-button *ngIf=\"!appBar.fabLeft && !appBar.fabRight\" end icon-only>\n      <ion-icon slot=\"icon-only\" name=\"md-search\"></ion-icon>\n    </ion-button>\n    <ion-button *ngIf=\"!appBar.fabLeft && !appBar.fabRight\" end icon-only>\n      <ion-icon slot=\"icon-only\" name=\"md-more\"></ion-icon>\n    </ion-button>\n    <ion-button *ngIf=\"appBar.fabRight\" start icon-only>\n      <ion-icon slot=\"icon-only\" name=\"md-mail\"></ion-icon>\n    </ion-button>\n    <ion-button *ngIf=\"appBar.fabRight\" start icon-only>\n      <ion-icon slot=\"icon-only\" name=\"md-trash\"></ion-icon>\n    </ion-button>\n    <ion-button *ngIf=\"appBar.fabRight\" start icon-only>\n      <ion-icon slot=\"icon-only\" name=\"md-archive\"></ion-icon>\n    </ion-button>\n\n  </fiv-app-bar>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/app-bar/app-bar.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/app-bar/app-bar.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/app-bar/app-bar.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/app-bar/app-bar.page.ts ***!
  \***********************************************/
/*! exports provided: AppBarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBarPage", function() { return AppBarPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AppBarPage = /** @class */ (function () {
    function AppBarPage() {
    }
    AppBarPage.prototype.ngOnInit = function () {
    };
    AppBarPage.prototype.fabClicked = function (appBar) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, appBar.hideFab()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, appBar.transitionRight()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, appBar.showFab()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(450).toPromise()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, appBar.hideFab()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, appBar.transitionLeft()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, appBar.showFab()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(450).toPromise()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, appBar.hideFab()];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, appBar.transitionMiddle()];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, appBar.showFab()];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppBarPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-bar',
            template: __webpack_require__(/*! ./app-bar.page.html */ "./src/app/pages/app-bar/app-bar.page.html"),
            styles: [__webpack_require__(/*! ./app-bar.page.scss */ "./src/app/pages/app-bar/app-bar.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], AppBarPage);
    return AppBarPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-app-bar-app-bar-module.js.map