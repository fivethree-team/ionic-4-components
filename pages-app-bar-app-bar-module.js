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
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _app_bar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-bar.page */ "./src/app/pages/app-bar/app-bar.page.ts");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/pages/app-bar/tabs.router.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppBarPageModule = /** @class */ (function () {
    function AppBarPageModule() {
    }
    AppBarPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                core__WEBPACK_IMPORTED_MODULE_6__["FivethreeCoreModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_7__["TabsPageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"]
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

module.exports = "<app-header title=\"App Bar\"></app-header>\n\n<ion-content>\n  <ion-grid class=\"page-content\" fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <app-example [title]=\"'App Bar'\" [subtitle]=\"''\" html=\"assets/docs/snippets/app-bar/html.md\" typescript=\"assets/docs/snippets/app-bar/typescript.md\"\n          css=\"assets/docs/snippets/app-bar/css.md\">\n          <div class=\"container\">\n            <ion-item>\n              <ion-label>Title Layout</ion-label>\n              <ion-select [(ngModel)]=\"titleLayout\" [interfaceOptions]=\"customTitleLayoutOptions\" interface=\"popover\">\n                <ion-select-option value=\"hide\">Hide Title</ion-select-option>\n                <ion-select-option value=\"show\">Show Title</ion-select-option>\n                <ion-select-option value=\"active-only\">Show Title for active only</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>Floating Action Bottom Position</ion-label>\n              <ion-select [(ngModel)]=\"position\" [interfaceOptions]=\"customFabPositionOptions\" interface=\"popover\">\n                <ion-select-option value=\"center\">Center</ion-select-option>\n                <ion-select-option value=\"right\">Right</ion-select-option>\n                <ion-select-option value=\"left\">Left</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>Fab Visible</ion-label>\n              <ion-checkbox [(ngModel)]=\"fabVisible\" slot=\"end\"></ion-checkbox>\n            </ion-item>\n\n          </div>\n        </app-example>\n        <app-example [title]=\"'App Bar Example'\" [subtitle]=\"'This is a simple example of how to use the app-bar in an ion-tabs layout.'\">\n          <div class=\"container min\">\n            <ion-tabs #tabs>\n              <fiv-app-bar (fivFabClick)=\"presentToast('Floating action button clicked')\" slot=\"bottom\"\n                [titleLayout]=\"titleLayout\" #bar [position]=\"position\" [fabVisible]=\"fabVisible\" [icon]=\"icon\">\n                <fiv-app-bar-tab left tab=\"tab1\" href=\"/tab1\" icon=\"md-home\" name=\"App Bar\">\n                </fiv-app-bar-tab>\n                <fiv-app-bar-tab left tab=\"tab2\" href=\"/tab2\" icon=\"md-resize\" name=\"Expandable\">\n                </fiv-app-bar-tab>\n                <fiv-app-bar-tab right tab=\"tab3\" href=\"/tab3\" icon=\"md-eye\" name=\"Password\">\n                </fiv-app-bar-tab>\n                <fiv-app-bar-tab right tab=\"tab4\" href=\"/tab4\" icon=\"md-more\" name=\"Buttons\">\n                </fiv-app-bar-tab>\n              </fiv-app-bar>\n            </ion-tabs>\n          </div>\n        </app-example>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <app-footer></app-footer>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/app-bar/app-bar.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/app-bar/app-bar.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container.min {\n  min-height: 50vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tai9EZXYvZml2ZXRocmVlL3dlYi1jb21wb25lbnRzL2ZpdmV0aHJlZS9zcmMvYXBwL3BhZ2VzL2FwcC1iYXIvYXBwLWJhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hcHAtYmFyL2FwcC1iYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci5taW4ge1xuICBtaW4taGVpZ2h0OiA1MHZoO1xufVxuIl19 */"

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


var AppBarPage = /** @class */ (function () {
    function AppBarPage(toastController) {
        this.toastController = toastController;
        this.titleLayout = 'hide';
        this.position = 'center';
        this.fabVisible = true;
        this.icon = 'checkmark';
        this.customTitleLayoutOptions = {
            header: 'Title Layout',
            subHeader: 'Select a title layout',
        };
        this.customFabPositionOptions = {
            header: 'Fab Position',
            subHeader: 'Select a floating action button position.',
        };
    }
    AppBarPage.prototype.ngOnInit = function () {
    };
    AppBarPage.prototype.presentToast = function (text) {
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
    AppBarPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-bar',
            template: __webpack_require__(/*! ./app-bar.page.html */ "./src/app/pages/app-bar/app-bar.page.html"),
            styles: [__webpack_require__(/*! ./app-bar.page.scss */ "./src/app/pages/app-bar/app-bar.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], AppBarPage);
    return AppBarPage;
}());



/***/ }),

/***/ "./src/app/pages/app-bar/tabs.router.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/app-bar/tabs.router.module.ts ***!
  \*****************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var _app_bar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-bar.page */ "./src/app/pages/app-bar/app-bar.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'tabs',
        component: _app_bar_page__WEBPACK_IMPORTED_MODULE_0__["AppBarPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../bottom-sheet/bottom-sheet.module#BottomSheetPageModule'
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../buttons/buttons.module#ButtonsPageModule'
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: '../expandable/expandable.module#ExpandablePageModule'
                    }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: '../refresh/refresh.module#RefreshPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/app-bar/tabs/tab1',
                pathMatch: 'full',
            },
        ]
    },
    {
        path: '',
        redirectTo: '/app-bar/tabs/tab1',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-app-bar-app-bar-module.js.map