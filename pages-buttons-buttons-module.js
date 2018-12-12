(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-buttons-buttons-module"],{

/***/ "./src/app/pages/buttons/buttons.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/buttons/buttons.module.ts ***!
  \*************************************************/
/*! exports provided: ButtonsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsPageModule", function() { return ButtonsPageModule; });
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _buttons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons.page */ "./src/app/pages/buttons/buttons.page.ts");
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
        component: _buttons_page__WEBPACK_IMPORTED_MODULE_6__["ButtonsPage"]
    }
];
var ButtonsPageModule = /** @class */ (function () {
    function ButtonsPageModule() {
    }
    ButtonsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                core__WEBPACK_IMPORTED_MODULE_7__["FivethreeCoreModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"]
            ],
            declarations: [_buttons_page__WEBPACK_IMPORTED_MODULE_6__["ButtonsPage"]]
        })
    ], ButtonsPageModule);
    return ButtonsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/buttons/buttons.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/buttons/buttons.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button menu=\"menuId\"></ion-menu-button>\n        </ion-buttons>\n    <ion-title>Buttons</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n          <app-example [snippet]=\"'assets/snippets/buttons.md'\" [title]=\"'Overflow Buttons'\" [subtitle]=\"'Easily build responsive Toolbar Buttons with overflow menus. By default, this will show a Popover on desktop and an Actionsheet on mobile.'\">\n            <ion-item-divider>\n              <ion-label>Example</ion-label>\n            </ion-item-divider>\n      \n            <ion-card>\n              <ion-toolbar>\n                <fiv-buttons [iconsOnly]=\"iconsOnly\" [forceActionsheet]=\"forceActionsheet\" [forcePopover]=\"forcePopover\"\n                  [header]=\"header\" [subHeader]=\"subHeader\" [count]=\"count\" slot=\"end\">\n                  <fiv-button (click)=\"presentToast('add clicked')\" [icon]=\"'md-add'\" [text]=\"'Add'\">\n                  </fiv-button>\n                  <fiv-button (click)=\"presentToast('delete clicked')\" [icon]=\"'md-trash'\" [text]=\"'Delete'\">\n                  </fiv-button>\n                  <fiv-button (click)=\"presentToast('select image clicked')\" [icon]=\"'md-image'\" [text]=\"'Select Image'\">\n                  </fiv-button>\n                  <fiv-button (click)=\"presentToast('take photo clicked')\" [icon]=\"'md-camera'\" [text]=\"'Take Photo'\">\n                  </fiv-button>\n                </fiv-buttons>\n              </ion-toolbar>\n              <ion-card-content>\n                Parameters:\n      \n                <ion-item>\n                  <ion-label position=\"floating\">Number of visible icons outside of popover / actionsheet</ion-label>\n                  <ion-input min=\"0\" max=\"4\" type=\"number\" placeholder=\"0 - 4\" [(ngModel)]=\"count\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Header Text (Actionsheet only)</ion-label>\n                  <ion-input type=\"text\" placeholder=\"header\" [(ngModel)]=\"header\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Subheader Text (Actionsheet only)</ion-label>\n                  <ion-input type=\"text\" placeholder=\"subHeader\" [(ngModel)]=\"subHeader\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Force Actionsheet</ion-label>\n                  <ion-checkbox [checked]=\"forceActionsheet\" [(ngModel)]=\"forceActionsheet\" slot=\"end\"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Force Popover</ion-label>\n                  <ion-checkbox [checked]=\"forcePopover\" [(ngModel)]=\"forcePopover\" slot=\"end\"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Show icons only (Toolbar only)</ion-label>\n                  <ion-checkbox [checked]=\"iconsOnly\" [(ngModel)]=\"iconsOnly\" slot=\"end\"></ion-checkbox>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n      \n        </app-example>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/buttons/buttons.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/buttons/buttons.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1dHRvbnMvYnV0dG9ucy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/buttons/buttons.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/buttons/buttons.page.ts ***!
  \***********************************************/
/*! exports provided: ButtonsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsPage", function() { return ButtonsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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


var ButtonsPage = /** @class */ (function () {
    function ButtonsPage(toastController) {
        this.toastController = toastController;
        this.subHeader = 'subheader here';
        this.header = 'More Actions';
        this.count = 1;
        this.forceActionsheet = false;
        this.forcePopover = false;
        this.iconsOnly = true;
    }
    ButtonsPage.prototype.ngOnInit = function () {
    };
    ButtonsPage.prototype.presentToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ButtonsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.page.html */ "./src/app/pages/buttons/buttons.page.html"),
            styles: [__webpack_require__(/*! ./buttons.page.scss */ "./src/app/pages/buttons/buttons.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], ButtonsPage);
    return ButtonsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-buttons-buttons-module.js.map