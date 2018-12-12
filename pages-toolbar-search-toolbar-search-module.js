(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-toolbar-search-toolbar-search-module"],{

/***/ "./projects/core/src/lib/toolbar-search/toolbar-search.component.html":
/*!****************************************************************************!*\
  !*** ./projects/core/src/lib/toolbar-search/toolbar-search.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar [@searchbarAnim]=\"small ? state : 'normal'\" (@searchbarAnim.done)=\"searchBarStateChange($event)\" [color]=\"color\" [ngClass]=\"{'small': state === 'small'}\">\n  <ion-buttons slot=\"start\">\n    <ng-content select=\"[start]\"></ng-content>\n\n  </ion-buttons>\n  <ion-title [@titleAnim] *ngIf=\"titleVisible\">{{title}}</ion-title>\n  <ion-input (ionChange)=\"fivInputChange.emit($event)\" [placeholder]=\"!titleVisible ? placeholder : ''\" autofocus #input class=\"toolbar-searchbar\"\n    [@titleAnim] (@titleAnim.done)=\"seachbarAnimDone($event,input)\" *ngIf=\"searching\">\n  </ion-input>\n\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"toggleSearchbar()\">\n      <fiv-icon [name]=\"searching ? 'md-close' : 'md-search'\"></fiv-icon>\n    </ion-button>\n    <!-- <ion-button [@rotateAnim] (@rotateAnim.done)=\"searchAnimDone($event)\" *ngIf=\"!searching\" (click)=\"toggleSearchbar()\">\n      <ion-icon style=\"transform: matrix(-1, 0, 0, 1, 0, 0);\" name=\"md-search\"></ion-icon>\n    </ion-button>\n    <ion-button [@rotateAnim] (@rotateAnim.done)=\"closeAnimDone($event)\" *ngIf=\"closeButtonVisible\" (click)=\"closeSearchbar()\">\n      <ion-icon name=\"md-close\"></ion-icon>\n    </ion-button> -->\n    <ng-content select=\"[end]\"></ng-content>\n\n  </ion-buttons>\n</ion-toolbar>"

/***/ }),

/***/ "./projects/core/src/lib/toolbar-search/toolbar-search.component.scss":
/*!****************************************************************************!*\
  !*** ./projects/core/src/lib/toolbar-search/toolbar-search.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: block;\n  width: 100%; }\n\nion-toolbar {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);\n  transition: border-bottom-right-radius ease 85ms; }\n\nion-toolbar.small {\n  border-bottom-right-radius: 12px; }\n\n.toolbar-searchbar {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tai9EZXYvZml2ZXRocmVlL3dlYi1jb21wb25lbnRzL2ZpdmV0aHJlZS9wcm9qZWN0cy9jb3JlL3NyYy9saWIvdG9vbGJhci1zZWFyY2gvdG9vbGJhci1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLFlBQVcsRUFDZDs7QUFFRDtFQUNJLDBDQUFxQztFQUNyQyxpREFBZ0QsRUFDbkQ7O0FBRUQ7RUFDSSxpQ0FBZ0MsRUFDbkM7O0FBRUQ7RUFDSSxhQUFZLEVBQ2YiLCJmaWxlIjoicHJvamVjdHMvY29yZS9zcmMvbGliL3Rvb2xiYXItc2VhcmNoL3Rvb2xiYXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tdG9vbGJhcntcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLDAsMCwuMjUpO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzIGVhc2UgODVtcztcbn1cblxuaW9uLXRvb2xiYXIuc21hbGx7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbi50b29sYmFyLXNlYXJjaGJhcntcbiAgICBmbG9hdDogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./projects/core/src/lib/toolbar-search/toolbar-search.component.ts":
/*!**************************************************************************!*\
  !*** ./projects/core/src/lib/toolbar-search/toolbar-search.component.ts ***!
  \**************************************************************************/
/*! exports provided: ToolbarSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarSearchComponent", function() { return ToolbarSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarSearchComponent = /** @class */ (function () {
    function ToolbarSearchComponent(renderer) {
        this.renderer = renderer;
        this.searching = false;
        this.titleVisible = true;
        this.closeButtonVisible = false;
        this.small = false;
        this.fivInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.state = 'normal';
    }
    ToolbarSearchComponent.prototype.ngOnInit = function () {
        this.state = this.small ? 'small' : 'normal';
    };
    ToolbarSearchComponent.prototype.shrink = function () {
        this.state = 'small';
    };
    ToolbarSearchComponent.prototype.grow = function () {
        this.state = 'normal';
    };
    ToolbarSearchComponent.prototype.ngOnChanges = function (changes) {
        console.log('on changes', changes);
        if (changes && changes.small && changes.small.previousValue === true && changes.small.currentValue === false) {
            this.state = 'normal';
            return;
        }
        if (changes && changes.small && changes.small.previousValue === false && changes.small.currentValue === true) {
            this.state = 'small';
            return;
        }
    };
    ToolbarSearchComponent.prototype.openSearchbar = function () {
        if (this.small) {
            this.state = 'normal';
            return;
        }
        this._open();
    };
    ToolbarSearchComponent.prototype.toggleSearchbar = function () {
        if (this.searching) {
            this.closeSearchbar();
        }
        else {
            this.openSearchbar();
        }
    };
    ToolbarSearchComponent.prototype.searchBarStateChange = function (event) {
        console.log('searchbarState', event);
        if (event.fromState === 'normal' && event.toState === 'small') {
        }
        if (event.fromState === 'small' && event.toState === 'normal') {
            this._open();
        }
    };
    ToolbarSearchComponent.prototype._open = function () {
        this.searching = true;
        this.titleVisible = false;
        this.open.emit();
    };
    ToolbarSearchComponent.prototype.closeSearchbar = function () {
        if (this.small) {
            this.state = 'small';
        }
        this.searching = false;
        this.fivClose.emit();
    };
    ToolbarSearchComponent.prototype.searchAnimDone = function (event) {
        console.log('###', event);
        if (event.fromState !== 'void') {
            this.closeButtonVisible = true;
        }
    };
    ToolbarSearchComponent.prototype.closeAnimDone = function (event) {
        console.log('###', event);
        if (event.fromState !== 'void') {
            this.searching = false;
        }
    };
    ToolbarSearchComponent.prototype.seachbarAnimDone = function (event, input) {
        console.log('!!!', event);
        if (event.fromState !== 'void') {
            this.titleVisible = true;
        }
        else {
            input.focus();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToolbarSearchComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToolbarSearchComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToolbarSearchComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarSearchComponent.prototype, "small", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ToolbarSearchComponent.prototype, "fivInputChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ToolbarSearchComponent.prototype, "fivClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ToolbarSearchComponent.prototype, "open", void 0);
    ToolbarSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fiv-toolbar-search',
            template: __webpack_require__(/*! ./toolbar-search.component.html */ "./projects/core/src/lib/toolbar-search/toolbar-search.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('searchbarAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small => normal', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => small', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('95ms ease-in')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '92px' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '100%' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotateAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('85ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'rotateZ(0deg)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('65ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'rotateZ(45deg)' }))
                    ]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('titleAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateY(-20%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('175ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateY(0)' }))
                    ]),
                ]),
            ],
            styles: [__webpack_require__(/*! ./toolbar-search.component.scss */ "./projects/core/src/lib/toolbar-search/toolbar-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ToolbarSearchComponent);
    return ToolbarSearchComponent;
}());



/***/ }),

/***/ "./src/app/pages/toolbar-search/toolbar-search.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/toolbar-search/toolbar-search.module.ts ***!
  \***************************************************************/
/*! exports provided: ToolbarSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarSearchPageModule", function() { return ToolbarSearchPageModule; });
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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
                core__WEBPACK_IMPORTED_MODULE_0__["FivethreeCoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
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

module.exports = "<fiv-toolbar-search #search title=\"Toolbar Search\" placeholder=\"Search ....\" (fivInputChange)=\"onSearchInputChanged($event)\"\n  (fivClose)=\"closeSearch(); close()\" (open)=\"open()\" [(small)]=\"small\">\n  <ion-menu-button start menu=\"menuId\"></ion-menu-button>\n</fiv-toolbar-search>\n\n<ion-content padding no-bounce>\n\n<ion-item>\n  <ion-label>Small Searchbar</ion-label>\n  <ion-checkbox [checked]=\"small\" (click)=\"smallChange()\" slot=\"start\"></ion-checkbox>\n</ion-item>\n\n  \n\n</ion-content>\n\n<fiv-bottom-sheet (onClose)=\"bottomSheetClose(search)\" [(state)]=\"state\" #bottomSheet [minimumHeight]=\"0\" [dockedHeight]=\"0\" [shouldBounce]=\"true\"\n[distanceTop]=\"56\">\n  <fiv-bottom-sheet-content [handle]=\"false\">\n      <ion-item-divider>Search Input</ion-item-divider>\n      <ion-label>{{searchInput}}</ion-label>\n  </fiv-bottom-sheet-content>\n</fiv-bottom-sheet>"

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
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_core_src_lib_toolbar_search_toolbar_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/core/src/lib/toolbar-search/toolbar-search.component */ "./projects/core/src/lib/toolbar-search/toolbar-search.component.ts");
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
        this.small = false;
        this.states = core__WEBPACK_IMPORTED_MODULE_0__["DrawerState"];
        this.state = core__WEBPACK_IMPORTED_MODULE_0__["DrawerState"].Bottom;
    }
    ToolbarSearchPage.prototype.ngOnInit = function () {
    };
    ToolbarSearchPage.prototype.onSearchInputChanged = function (event) {
        this.searchInput = event.detail.value;
        console.log(event.detail.value);
    };
    ToolbarSearchPage.prototype.closeSearch = function () {
        this.searchInput = '';
    };
    ToolbarSearchPage.prototype.smallChange = function () {
        if (this.small) {
            this.open();
        }
        else {
            this.close();
        }
    };
    ToolbarSearchPage.prototype.open = function () {
        if (this.small) {
            this.search.grow();
        }
        console.log('open !!!!');
        this.state = core__WEBPACK_IMPORTED_MODULE_0__["DrawerState"].Top;
    };
    ToolbarSearchPage.prototype.close = function () {
        console.log('open !!!!');
        if (this.small) {
            this.search.shrink();
        }
        this.state = core__WEBPACK_IMPORTED_MODULE_0__["DrawerState"].Bottom;
    };
    ToolbarSearchPage.prototype.bottomSheetClose = function (search) {
        console.log('bottomSheetClose !!!!');
        search.closeSearchbar();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search'),
        __metadata("design:type", projects_core_src_lib_toolbar_search_toolbar_search_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarSearchComponent"])
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