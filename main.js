(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/core/fesm5/fivethree-core.js":
/*!*******************************************!*\
  !*** ./dist/core/fesm5/fivethree-core.js ***!
  \*******************************************/
/*! exports provided: MyHammerConfig, FivethreeCoreModule, DrawerState, AppBarComponent, BottomSheetComponent, BottomSheetContentComponent, CollapsableMenuButtonComponent, DialogComponent, ExpandableComponent, ExpandableIndicatorComponent, LoadingButtonComponent, LoadingContentComponent, LoadingFabComponent, LoadingProgressBarComponent, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, PasswordComponent, RouterItemComponent, StepComponent, StepContentComponent, StepHeaderComponent, StepperComponent, StepperHorizontalComponent, ToolbarSearchComponent, AppBarTabComponent, AppBarTabContentComponent, FivButtonsComponent, ButtonComponent, LoadingService, ɵb, ɵa, ɵc, ɵd, ɵg, ɵf, ɵj, ɵk, ɵh, ɵi, ɵl, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivethreeCoreModule", function() { return FivethreeCoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerState", function() { return DrawerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBarComponent", function() { return AppBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetComponent", function() { return BottomSheetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetContentComponent", function() { return BottomSheetContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsableMenuButtonComponent", function() { return CollapsableMenuButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableComponent", function() { return ExpandableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableIndicatorComponent", function() { return ExpandableIndicatorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingButtonComponent", function() { return LoadingButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingContentComponent", function() { return LoadingContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingFabComponent", function() { return LoadingFabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingProgressBarComponent", function() { return LoadingProgressBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterItemComponent", function() { return RouterItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepComponent", function() { return StepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepContentComponent", function() { return StepContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepHeaderComponent", function() { return StepHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperHorizontalComponent", function() { return StepperHorizontalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarSearchComponent", function() { return ToolbarSearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBarTabComponent", function() { return AppBarTabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBarTabContentComponent", function() { return AppBarTabContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivButtonsComponent", function() { return FivButtonsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CollapsableMenuDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CenterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return IfPlatformDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return PermissionsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return PullDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return ViewportDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return IconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return ImageViewerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return LoadingRefresherContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return LoadingSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return PopoverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return RippleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StepComponent = /** @class */ (function () {
    function StepComponent() {
        this.isLast = false;
        this.open = false;
        this.title = '';
        this.subtitle = '';
    }
    /**
     * @return {?}
     */
    StepComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    StepComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-step',
                    template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    StepComponent.ctorParameters = function () { return []; };
    StepComponent.propDecorators = {
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isLast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] }]
    };
    return StepComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StepHeaderComponent = /** @class */ (function () {
    function StepHeaderComponent() {
        this.iconState = 'normal';
    }
    /**
     * @return {?}
     */
    StepHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    StepHeaderComponent.prototype.changeIconAndReveal = /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    function (event, icon) {
        if (event.fromState === 'normal') {
            this.tempIcon = this.icon;
            this.icon = icon;
            this.iconState = 'normal';
        }
    };
    /**
     * @return {?}
     */
    StepHeaderComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        this.iconState = 'rotate';
    };
    /**
     * @return {?}
     */
    StepHeaderComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.icon = this.tempIcon;
    };
    StepHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-step-header',
                    template: "<div class=\"number-container\">\n  <span *ngIf=\"index && !icon\" [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\">{{index}}</span>\n  <ion-icon *ngIf=\"icon\" [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\"\n    [name]=\"icon\"></ion-icon>\n</div>\n<div class=\"step-content\">\n  <ng-content>\n  </ng-content>\n</div>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => rotate', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('rotate => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translate(-50%, -50%) rotateZ(45deg)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translate(-50%, -50%) rotateZ(0deg)' }))
                        ])
                    ],
                    styles: [":host{display:block;width:100%;height:72px;align-items:center;position:relative;padding-top:8px}.number-container{width:24px;height:24px;border-radius:100%;position:absolute;left:16px;background:var(--fiv-color-circle,var(--ion-color-primary));color:var(--fiv-color-circle-color,var(--ion-color-light))}.number-container *{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) rotateZ(0);transform:translate(-50%,-50%) rotateZ(0)}.step-content{padding-left:56px}"]
                }] }
    ];
    /** @nocollapse */
    StepHeaderComponent.ctorParameters = function () { return []; };
    StepHeaderComponent.propDecorators = {
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return StepHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent(change) {
        this.change = change;
        this.isOpen = false;
        this.fivWillOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDidOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivWillClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDidClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ExpandableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ExpandableComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.fivWillOpen.emit(this);
        this.isOpen = true;
        this.change.detectChanges();
    };
    /**
     * @return {?}
     */
    ExpandableComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.isOpen === false) {
            this.open();
        }
        else {
            this.close();
        }
    };
    /**
     * @param {?=} param
     * @return {?}
     */
    ExpandableComponent.prototype.close = /**
     * @param {?=} param
     * @return {?}
     */
    function (param) {
        this.param = param;
        this.fivWillClose.emit(this);
        console.log('close');
        this.isOpen = false;
        this.change.detectChanges();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ExpandableComponent.prototype.onAnimationEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState === 'closed') {
            this.fivDidOpen.emit(this);
        }
        else if (event.fromState === 'open') {
            this.fivDidClose.emit({ expandable: this, param: this.param });
            this.param = null;
        }
    };
    ExpandableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-expandable',
                    template: "<div>\n  <ng-content select=\"[header]\"></ng-content>\n  <div [@listAnim]=\"isOpen ? 'open' : 'closed'\" (@listAnim.done)=\"onAnimationEnd($event)\" style=\"overflow: hidden\">\n    <ng-content select=\"[content]\"></ng-content>\n  </div>\n</div>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('listAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 1 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0', opacity: 0 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('275ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0', opacity: 0, offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 0.1, offset: 0.8 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 1, offset: 1 }),
                                ]))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('220ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 1, offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 0.1, offset: 0.2 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0', opacity: 0, offset: 1 }),
                                ]))
                            ])
                        ])
                    ],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ExpandableComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    ExpandableComponent.propDecorators = {
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivWillOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivDidOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivWillClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivDidClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ExpandableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StepContentComponent = /** @class */ (function () {
    function StepContentComponent(change) {
        this.change = change;
        this.isLast = false;
        this.isOpen = false;
        this.title = '';
        this.subtitle = '';
        this.fivDidOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDidClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    StepContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    StepContentComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.isOpen = true;
        this.change.detectChanges();
    };
    /**
     * @return {?}
     */
    StepContentComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.isOpen = false;
        this.change.detectChanges();
    };
    /**
     * @return {?}
     */
    StepContentComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        this.header.complete();
    };
    /**
     * @return {?}
     */
    StepContentComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.header.reset();
    };
    /**
     * @return {?}
     */
    StepContentComponent.prototype.afterClose = /**
     * @return {?}
     */
    function () {
        this.fivDidClose.emit(this);
    };
    /**
     * @return {?}
     */
    StepContentComponent.prototype.afterOpen = /**
     * @return {?}
     */
    function () {
        this.fivDidOpen.emit(this);
    };
    /**
     * @return {?}
     */
    StepContentComponent.prototype.click = /**
     * @return {?}
     */
    function () {
        this.fivClick.emit(this);
    };
    StepContentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-step-content',
                    template: "<div *ngIf=\"!isLast\" class=\"timeline\"></div>\n<fiv-expandable [isOpen]=\"isOpen\" (fivDidClose)=\"afterClose()\" (fivDidOpen)=\"afterOpen()\" #self>\n  <fiv-ripple header (fivClick)=\"click()\">\n    <fiv-step-header #header [index]=\"index\" [icon]=\"icon\">\n      <div class=\"header-title\">{{title}}</div>\n      <div class=\"header-subtitle\">{{subtitle}}</div>\n    </fiv-step-header>\n  </fiv-ripple>\n  <ng-container content>\n    <div class=\"step-content\">\n      <ng-content></ng-content>\n    </div>\n  </ng-container>\n</fiv-expandable>",
                    styles: [":host{display:block;width:100%;position:relative}.step-content{padding-left:44px;padding-bottom:24px}.timeline{width:1px;height:calc(100% - 32px);position:absolute;background:var(--fiv-color-timeline,var(--ion-color-medium));left:27.5px;top:36px}.header-title{color:var(--fiv-color-title,var(--ion-color-dark))}.header-subtitle{color:var(--fiv-color-subtitle,var(--ion-color-medium));font-size:.8em}"]
                }] }
    ];
    /** @nocollapse */
    StepContentComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    StepContentComponent.propDecorators = {
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isLast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivDidOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivDidClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['self',] }],
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['header',] }]
    };
    return StepContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StepperHorizontalComponent = /** @class */ (function () {
    function StepperHorizontalComponent() {
        this.fivSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    StepperHorizontalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.slides.lockSwipes(true);
    };
    /**
     * @return {?}
     */
    StepperHorizontalComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.slides.slideTo(0);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StepperHorizontalComponent.prototype.open = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        console.log('open slide', index);
        this.slides.lockSwipes(false);
        this.slides.slideTo(index);
        this.slides.lockSwipes(true);
    };
    StepperHorizontalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-stepper-horizontal',
                    template: "<ion-grid fixed>\n  <ion-row>\n    <ion-col *ngFor=\"let content of contents.toArray(); let i = index; let f = first; let l = last;\" [size]=\"12 / contents.length\">\n      <fiv-ripple (click)=\"fivSelect.emit(i)\">\n        <span *ngIf=\"!f\" class=\"line left\"></span>\n        <div class=\"number-container\">\n          <span *ngIf=\"!content.icon\">{{i +  1}}</span>\n          <ion-icon *ngIf=\"content.icon\"\n            [name]=\"content.icon\"></ion-icon>\n        </div>\n        <span *ngIf=\"!l\" class=\"line right\"></span>\n      </fiv-ripple>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col *ngFor=\"let content of contents.toArray(); let i = index; let f = first; let l = last;\" [size]=\"12 / contents.length\">\n      <fiv-ripple (click)=\"fivSelect.emit(i)\">\n          <div class=\"horizontal-content\">\n          <div class=\"header-title\">{{content.title}}</div>\n          <div class=\"header-subtitle\">{{content.subtitle}}</div>\n        </div>\n      </fiv-ripple>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-slides #slides pager=\"false\">\n  <ion-slide *ngFor=\"let content of contents; let i = index\">\n    <ng-container [ngTemplateOutlet]=\"content.content\"></ng-container>\n  </ion-slide>\n</ion-slides>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => rotate', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('rotate => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translate(-50%, -50%) rotateZ(45deg)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translate(-50%, -50%) rotateZ(0deg)' }))
                        ])
                    ],
                    styles: [".number-container{width:24px;height:24px;border-radius:100%;position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);background:var(--fiv-color-circle,var(--ion-color-primary));color:var(--fiv-color-circle-color,var(--ion-color-light))}.number-container *{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) rotateZ(0);transform:translate(-50%,-50%) rotateZ(0)}ion-col{text-align:center;padding:0}.line{width:calc(50% - 20px);height:1px;position:absolute;background:var(--fiv-color-timeline,var(--ion-color-medium));top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.left{left:0}.right{right:0}.header-title{color:var(--fiv-color-title,var(--ion-color-dark))}.header-subtitle{color:var(--fiv-color-subtitle,var(--ion-color-medium));font-size:.8em}"]
                }] }
    ];
    /** @nocollapse */
    StepperHorizontalComponent.ctorParameters = function () { return []; };
    StepperHorizontalComponent.propDecorators = {
        contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['slides',] }],
        fivSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return StepperHorizontalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StepperComponent = /** @class */ (function () {
    function StepperComponent() {
        this.mode = 'vertical';
        this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentIndex = 0;
    }
    /**
     * @return {?}
     */
    StepperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StepperComponent.prototype.open = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.mode === 'horizontal') {
            this.currentIndex = index;
            console.log('+#+#+');
            this.horizontal.open(index);
        }
        else {
            console.log('###open', this.steps, this.steps.toArray(), index, this.steps.toArray()[index]);
            if (this.steps.toArray()[index]) {
                if (this.steps.toArray()[index].isOpen) {
                    console.log('is already open', this.steps.toArray()[index].isOpen);
                    this.close(index);
                }
                else {
                    console.log('is closed', this.steps.toArray()[index].isOpen);
                    this.currentIndex = index;
                    this.steps.toArray()[index].open();
                }
            }
            else {
                console.log('####', index, this.steps, this.steps.toArray());
            }
        }
    };
    /**
     * @param {?} index
     * @param {?=} param
     * @return {?}
     */
    StepperComponent.prototype.close = /**
     * @param {?} index
     * @param {?=} param
     * @return {?}
     */
    function (index, param) {
        this.param = param;
        if (this.mode === 'horizontal') {
            this.currentIndex = 0;
            this.horizontal.close();
        }
        else {
            this.currentIndex = -1;
            this.steps.toArray()[index].close();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StepperComponent.prototype.select = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        console.log('select', index);
        if (index >= 0 && index < this.contents.length) {
            if (this.mode === 'vertical') {
                this.closeAll();
            }
            this.open(index);
        }
    };
    /**
     * @return {?}
     */
    StepperComponent.prototype.closeAll = /**
     * @return {?}
     */
    function () {
        if (this.mode === 'horizontal') {
            this.currentIndex = 0;
            this.horizontal.close();
        }
        else {
            this.steps.forEach(function (step) {
                step.close();
            });
        }
    };
    /**
     * @return {?}
     */
    StepperComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var next = this.currentIndex < this.steps.length ? this.currentIndex + 1 : -1;
        console.log('next index', next);
        this.select(next);
    };
    /**
     * @return {?}
     */
    StepperComponent.prototype.previous = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var next = this.currentIndex > 0 ? this.currentIndex + -1 : -1;
        console.log('next index', next);
        this.select(next);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StepperComponent.prototype.completeStep = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.mode === 'horizontal') ;
        else {
            this.steps.toArray()[index].complete();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StepperComponent.prototype.reset = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.mode === 'horizontal') ;
        else {
            this.steps.toArray()[index].reset();
        }
    };
    StepperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-stepper',
                    template: "<ion-list *ngIf=\"mode === 'vertical'\">\n  <fiv-step-content (fivDidClose)=\"fivClose.emit({index: i, param: param}); param = null;\" (fivClick)=\"fivClick.emit(i)\" *ngFor=\"let content of contents; let i = index; let l = last;\" [icon]=\"content.icon\" [index]=\"i + 1\"\n    [isLast]=\"l\" [title]=\"content.title\" [subtitle]=\"content.subtitle\" [isOpen]=\"content.open\">\n    <ng-container [ngTemplateOutlet]=\"content.content\"></ng-container>\n  </fiv-step-content>\n</ion-list>\n<div *ngIf=\"mode === 'horizontal'\">\n  <fiv-stepper-horizontal (fivSelect)=\"select($event)\" [contents]=\"contents\"></fiv-stepper-horizontal>\n</div>",
                    styles: [":host{display:block;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    StepperComponent.ctorParameters = function () { return []; };
    StepperComponent.propDecorators = {
        contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [StepComponent,] }],
        steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [StepContentComponent,] }],
        horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [StepperHorizontalComponent,] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return StepperComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RouterItemComponent = /** @class */ (function () {
    function RouterItemComponent(router) {
        this.router = router;
        this.active = false;
        this.navigate = true;
        /**
         * The position of the active state.
         * Default value is: `"left"`
         */
        this.position = 'left';
        /**
         * The shape of the active state.
         * Possible values are: `"line"`, `"dot"` and any ionicon.
         * Default value is: `"line"`
         */
        this.shape = 'line';
        this.matchChildUrl = false;
    }
    /**
     * @return {?}
     */
    RouterItemComponent.prototype.onclick = /**
     * @return {?}
     */
    function () {
        if (this.navigate && this.pageUrl) {
            this.router.navigateByUrl(this.pageUrl);
        }
    };
    Object.defineProperty(RouterItemComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.position + " " + this.shape;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterItemComponent.prototype, "activeClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.matchActiveUrl() || this.active;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RouterItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    RouterItemComponent.prototype.hasShape = /**
     * @return {?}
     */
    function () {
        return this.shape === 'line'
            || this.shape === 'dot';
    };
    /**
     * @return {?}
     */
    RouterItemComponent.prototype.getClasses = /**
     * @return {?}
     */
    function () {
        return this.hasShape() ? [this.position, this.shape] : [this.position];
    };
    /**
     * @return {?}
     */
    RouterItemComponent.prototype.matchActiveUrl = /**
     * @return {?}
     */
    function () {
        return this.matchChildUrl ? this.isChildUrl() : this.isCurrentUrl();
    };
    /**
     * @return {?}
     */
    RouterItemComponent.prototype.isCurrentUrl = /**
     * @return {?}
     */
    function () {
        return this.router.url === this.pageUrl;
    };
    /**
     * @return {?}
     */
    RouterItemComponent.prototype.isChildUrl = /**
     * @return {?}
     */
    function () {
        return this.router.url.startsWith(this.pageUrl);
    };
    RouterItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-router-item',
                    template: "<ion-item>\n    <fiv-icon [name]=\"icon\"></fiv-icon>\n    <ion-label>{{text}}</ion-label>\n</ion-item>\n<span *ngIf=\"hasShape()\" [ngClass]=\"getClasses()\" class=\"indicator\"></span>\n<ion-icon *ngIf=\"!hasShape()\" [ngClass]=\"position\" [name]=\"shape\" class=\"indicator\"></ion-icon>",
                    styles: [":host{display:block;position:relative;width:100%}:host.active{--fiv-color-icon:var(--ion-color-primary)}:host.active ion-item{--color:var(--ion-color-primary)}:host.active .dot{display:block}:host.active .line{background-color:var(--fiv-dot-color,var(--ion-color-primary));display:block}:host.active.left .line{width:2px;height:100%;top:0}:host.active.right .line{width:2px;height:100%;top:0}:host.active.top .line{width:calc(100% - 16px);left:8px;height:2px}:host.active.bottom .line{width:calc(100% - 16px);height:2px;left:8px}:host.active.dot.left{padding-left:24px}.indicator{position:absolute}.dot{width:var(--fiv-dot-width,8px);height:var(--fiv-dot-heigt,8px);background-color:var(--fiv-dot-color,var(--ion-color-primary));top:50%;border-radius:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:8px;display:none}.dot.left{left:8px;right:unset}.dot.right{right:8px}.left{left:0}.right{right:0}.top{top:0}.bottom{bottom:0}ion-item{--border-style:none}fiv-icon{--fiv-padding-end:8px}ion-item:hover{cursor:pointer;--background:rgb(240, 240, 240)}"]
                }] }
    ];
    /** @nocollapse */
    RouterItemComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RouterItemComponent.propDecorators = {
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        navigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        shape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        matchChildUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
        activeClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }]
    };
    return RouterItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CollapsableMenuDirective = /** @class */ (function () {
    function CollapsableMenuDirective(sanitizer, platform) {
        this.sanitizer = sanitizer;
        this.platform = platform;
        this.collapsed = false;
        this.hovering = false;
        this.hoverMenu = true;
    }
    Object.defineProperty(CollapsableMenuDirective.prototype, "myStyle", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.collapsed && (this.platform.is('tablet') || this.platform.is('electron') || this.platform.is('desktop'))) {
                return this.sanitizer
                    .bypassSecurityTrustStyle('min-width: 64px; max-width: 64px; --border: 0; transition: all cubic-bezier(.55,0,.1,1) 200ms;');
            }
            else {
                return this.sanitizer.bypassSecurityTrustStyle('--border: 0; transition: all cubic-bezier(.55,0,.1,1)  250ms;');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CollapsableMenuDirective.prototype.hover = /**
     * @return {?}
     */
    function () {
        if (this.collapsed && !this.hovering && this.hoverMenu) {
            this.open();
            this.hovering = true;
        }
    };
    /**
     * @return {?}
     */
    CollapsableMenuDirective.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (!this.hoverMenu) {
            return;
        }
        if (!this.collapsed && this.hovering) {
            this.close();
        }
        this.hovering = false;
    };
    Object.defineProperty(CollapsableMenuDirective.prototype, "fivCollapseMenu", {
        set: /**
         * @param {?} collapse
         * @return {?}
         */
        function (collapse) {
            this.collapsed = collapse;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CollapsableMenuDirective.prototype.toggleMenu = /**
     * @return {?}
     */
    function () {
        if (this.hovering) {
            this.open();
            this.hovering = false;
            return;
        }
        this.collapsed = !this.collapsed;
    };
    /**
     * @return {?}
     */
    CollapsableMenuDirective.prototype.open = /**
     * @return {?}
     */
    function () {
        this.collapsed = false;
    };
    /**
     * @return {?}
     */
    CollapsableMenuDirective.prototype.close = /**
     * @return {?}
     */
    function () {
        this.collapsed = true;
    };
    CollapsableMenuDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[fivCollapseMenu]',
                    exportAs: 'menuCollapse'
                },] }
    ];
    /** @nocollapse */
    CollapsableMenuDirective.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    CollapsableMenuDirective.propDecorators = {
        hoverMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        myStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style',] }],
        hover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] }],
        blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }],
        fivCollapseMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CollapsableMenuDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CollapsableMenuButtonComponent = /** @class */ (function () {
    function CollapsableMenuButtonComponent() {
    }
    /**
     * @return {?}
     */
    CollapsableMenuButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CollapsableMenuButtonComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        console.log('###', this.menu);
        this.menu.toggleMenu();
    };
    CollapsableMenuButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-collapsable-menu-button',
                    template: "<ion-button fivCenter (click)=\"onClick()\">\n  <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n</ion-button>",
                    styles: [":host{width:42px;height:42px;display:block}"]
                }] }
    ];
    /** @nocollapse */
    CollapsableMenuButtonComponent.ctorParameters = function () { return []; };
    CollapsableMenuButtonComponent.propDecorators = {
        menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CollapsableMenuButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return PasswordComponent; }),
    multi: true
};
var PasswordComponent = /** @class */ (function () {
    function PasswordComponent() {
        this.hideIcon = 'eye-off';
        this.position = 'floating';
        this.showIcon = 'eye';
        this.clearOnEdit = false;
        this._passwordValue = '';
    }
    /**
     * @return {?}
     */
    PasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    PasswordComponent.prototype.toggleShowPassword = /**
     * @return {?}
     */
    function () {
        this.show = !this.show;
    };
    Object.defineProperty(PasswordComponent.prototype, "passwordValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._passwordValue;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v !== this._passwordValue) {
                this._passwordValue = v;
                this.onChangeCallback(this._passwordValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    PasswordComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined && value !== this._passwordValue) {
            this._passwordValue = value;
        }
    };
    /**
     * @return {?}
     */
    PasswordComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.onTouchedCallback();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PasswordComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PasswordComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    PasswordComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-password',
                    template: "<ion-item>\n    <ion-label *ngIf=\"placeholder\" [position]=\"position\">{{ placeholder }}</ion-label>\n    <ion-input [type]=\"show ? 'text' : 'password'\" [(ngModel)]=\"passwordValue\" [clearOnEdit]=\"clearOnEdit\" (ionBlur)=\"blur()\"></ion-input>\n    <ion-icon slot=\"end\" [name]=\"show ? hideIcon : showIcon\" (click)=\"toggleShowPassword()\"></ion-icon>\n  </ion-item>",
                    providers: [
                        CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR
                    ],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PasswordComponent.ctorParameters = function () { return []; };
    PasswordComponent.propDecorators = {
        hideIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clearOnEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return PasswordComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var DrawerState = {
    Bottom: 0,
    Docked: 1,
    Top: 2,
};
DrawerState[DrawerState.Bottom] = 'Bottom';
DrawerState[DrawerState.Docked] = 'Docked';
DrawerState[DrawerState.Top] = 'Top';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BottomSheetContentComponent = /** @class */ (function () {
    function BottomSheetContentComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.rounded = true;
        this.handle = true;
        this.float = true;
        this.fivHandleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.states = DrawerState;
    }
    Object.defineProperty(BottomSheetContentComponent.prototype, "isRounded", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.currentState) {
                case DrawerState.Top: return false;
                case DrawerState.Docked: return this.rounded;
                case DrawerState.Bottom: return this.rounded && !this.float;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BottomSheetContentComponent.prototype, "styles", {
        get: /**
         * @return {?}
         */
        function () {
            if (!(this.float && this.currentState === DrawerState.Bottom)) {
                return this.sanitizer.bypassSecurityTrustStyle("box-shadow: 0 4px 16px rgba(0, 0, 0, .12);\n                                                      border-top: 1px solid var(--ion-color-light);");
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BottomSheetContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} state
     * @return {?}
     */
    BottomSheetContentComponent.prototype.updateState = /**
     * @param {?} state
     * @return {?}
     */
    function (state$$1) {
        console.log('content got state', state$$1);
        this.currentState = state$$1;
    };
    /**
     * @return {?}
     */
    BottomSheetContentComponent.prototype.click = /**
     * @return {?}
     */
    function () {
        this.fivHandleClick.emit();
    };
    BottomSheetContentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-bottom-sheet-content',
                    template: "<div class=\"wrapper\">\n  <span (click)=\"click()\" *ngIf=\"currentState !== states.Top && handle\" [fivCenter]=\"{vertical: false, horizontal: true}\" class=\"handle\"></span>\n  <div class=\"content\">\n    <ng-content>\n  \n    </ng-content>\n  </div>\n</div>\n\n\n\n\n",
                    styles: [":host{display:block;width:100%;height:100%}.wrapper{width:100%;height:100%}:host.rounded{border-top-left-radius:12px;border-top-right-radius:12px}.handle{display:block;background:var(--ion-color-light);border-radius:12px;top:8px;width:32px;height:8px;position:absolute}.content{margin-top:24px}"]
                }] }
    ];
    /** @nocollapse */
    BottomSheetContentComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
    ]; };
    BottomSheetContentComponent.propDecorators = {
        rounded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        handle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        float: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivHandleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        isRounded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.rounded',] }],
        styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style',] }]
    };
    return BottomSheetContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BottomSheetComponent = /** @class */ (function () {
    function BottomSheetComponent(_element, _renderer, _domCtrl, _platform, sanitizer) {
        this._element = _element;
        this._renderer = _renderer;
        this._domCtrl = _domCtrl;
        this._platform = _platform;
        this.sanitizer = sanitizer;
        this.dockedHeight = 80;
        this.shouldBounce = true;
        this.distanceTop = 56;
        this.transition = '0.25s ease-in-out';
        this.state = DrawerState.Bottom;
        this.minimumHeight = 24;
        this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDocked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._BOUNCE_DELTA = 30;
    }
    // @HostBinding('style') get styles() {
    //   if (this.rounded) {
    //     return this.sanitizer
    //       .bypassSecurityTrustStyle(' border-top-left-radius: 12px; border-top-right-radius: 12px;');
    //   }
    // }
    // @HostBinding('style') get styles() {
    //   if (this.rounded) {
    //     return this.sanitizer
    //       .bypassSecurityTrustStyle(' border-top-left-radius: 12px; border-top-right-radius: 12px;');
    //   }
    // }
    /**
     * @return {?}
     */
    BottomSheetComponent.prototype.ngAfterViewInit = 
    // @HostBinding('style') get styles() {
    //   if (this.rounded) {
    //     return this.sanitizer
    //       .bypassSecurityTrustStyle(' border-top-left-radius: 12px; border-top-right-radius: 12px;');
    //   }
    // }
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log(this._element, this._element.nativeElement.querySelector('.fiv-bottom-drawer-scrollable-content .scroll-y'));
        // this._renderer.
        //   setStyle(this._element.nativeElement.querySelector('.fiv-bottom-drawer-scrollable-content .scroll-y'), 'touch-action', 'none');
        this._setDrawerState(this.state);
        /** @type {?} */
        var hammer = new hammerjs__WEBPACK_IMPORTED_MODULE_6__(this._element.nativeElement);
        hammer.get('pan').set({ enable: true, direction: hammerjs__WEBPACK_IMPORTED_MODULE_6__["DIRECTION_VERTICAL"] });
        hammer.on('pan panstart panend', function (ev) {
            switch (ev.type) {
                case 'panstart':
                    _this._handlePanStart();
                    break;
                case 'panend':
                    _this._handlePanEnd(ev);
                    break;
                default:
                    _this._handlePan(ev);
            }
        });
        this.content.fivHandleClick
            .subscribe(function () {
            switch (_this.state) {
                case DrawerState.Bottom: return _this.dock();
                case DrawerState.Docked: return _this.open();
            }
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BottomSheetComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!changes.state) {
            return;
        }
        this._setDrawerState(changes.state.currentValue);
        this.updateContent(changes.state.currentValue);
    };
    /**
     * @param {?} state
     * @return {?}
     */
    BottomSheetComponent.prototype.updateContent = /**
     * @param {?} state
     * @return {?}
     */
    function (state$$1) {
        if (this.content) {
            this.content.updateState(state$$1);
        }
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    BottomSheetComponent.prototype._setDrawerState = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state$$1) {
        this._renderer.setStyle(this._element.nativeElement, 'transition', this.transition);
        switch (state$$1) {
            case DrawerState.Bottom:
                this._setTranslateY('calc(100vh - ' + this.minimumHeight + 'px)');
                break;
            case DrawerState.Docked:
                this._setTranslateY((this._platform.height() - this.dockedHeight) + 'px');
                break;
            default:
                this._setTranslateY(this.distanceTop + 'px');
        }
    };
    /**
     * @private
     * @return {?}
     */
    BottomSheetComponent.prototype._handlePanStart = /**
     * @private
     * @return {?}
     */
    function () {
        this._startPositionTop = this._element.nativeElement.getBoundingClientRect().top;
    };
    /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    BottomSheetComponent.prototype._handlePanEnd = /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (this.shouldBounce && ev.isFinal) {
            this._renderer.setStyle(this._element.nativeElement, 'transition', this.transition);
            switch (this.state) {
                case DrawerState.Docked:
                    this._handleDockedPanEnd(ev);
                    break;
                case DrawerState.Top:
                    this._handleTopPanEnd(ev);
                    break;
                default:
                    this._handleBottomPanEnd(ev);
            }
        }
        this.stateChange.emit(this.state);
    };
    /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    BottomSheetComponent.prototype._handleTopPanEnd = /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (ev.deltaY > this._BOUNCE_DELTA) {
            if (this.minimumHeight === this.dockedHeight) {
                if (this.state !== DrawerState.Bottom) {
                    this.state = DrawerState.Bottom;
                    this.fivClose.emit(this);
                }
            }
            else {
                if (this.state !== DrawerState.Docked) {
                    this.state = DrawerState.Docked;
                    this.fivDocked.emit(this);
                }
            }
        }
        else {
            this._setTranslateY(this.distanceTop + 'px');
        }
    };
    /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    BottomSheetComponent.prototype._handleDockedPanEnd = /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        /** @type {?} */
        var absDeltaY = Math.abs(ev.deltaY);
        if (absDeltaY > this._BOUNCE_DELTA && ev.deltaY < 0) {
            if (this.state !== DrawerState.Top) {
                this.state = DrawerState.Top;
                this.fivOpen.emit();
            }
        }
        else if (absDeltaY > this._BOUNCE_DELTA && ev.deltaY > 0) {
            if (this.state !== DrawerState.Bottom) {
                this.state = DrawerState.Bottom;
                this.fivClose.emit();
            }
        }
        else {
            this._setTranslateY((this._platform.height() - this.dockedHeight) + 'px');
        }
    };
    /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    BottomSheetComponent.prototype._handleBottomPanEnd = /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (-ev.deltaY > this._BOUNCE_DELTA) {
            if (this.state !== DrawerState.Docked) {
                this.state = DrawerState.Docked;
                this.fivDocked.emit();
            }
        }
        else {
            this._setTranslateY('calc(100vh - ' + this.minimumHeight + 'px)');
        }
    };
    /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    BottomSheetComponent.prototype._handlePan = /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        /** @type {?} */
        var pointerY = ev.center.y;
        this._renderer.setStyle(this._element.nativeElement, 'transition', 'none');
        if (pointerY > 0 && pointerY < this._platform.height()) {
            if (ev.additionalEvent === 'panup' || ev.additionalEvent === 'pandown') {
                /** @type {?} */
                var newTop = this._startPositionTop + ev.deltaY;
                if (newTop >= this.distanceTop) {
                    this._setTranslateY(newTop + 'px');
                }
                else if (newTop < this.distanceTop) {
                    this._setTranslateY(this.distanceTop + 'px');
                }
                if (newTop > this._platform.height() - this.minimumHeight) {
                    this._setTranslateY((this._platform.height() - this.minimumHeight) + 'px');
                }
            }
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    BottomSheetComponent.prototype._setTranslateY = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this._domCtrl.write(function () {
            _this._renderer.setStyle(_this._element.nativeElement, 'transform', 'translateY(' + value + ')');
        });
    };
    /**
     * @return {?}
     */
    BottomSheetComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.state = DrawerState.Top;
        this._setDrawerState(this.state);
        this.updateContent(this.state);
    };
    /**
     * @return {?}
     */
    BottomSheetComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.state = DrawerState.Bottom;
        this._setDrawerState(this.state);
        this.updateContent(this.state);
    };
    /**
     * @return {?}
     */
    BottomSheetComponent.prototype.dock = /**
     * @return {?}
     */
    function () {
        this.state = DrawerState.Docked;
        this._setDrawerState(this.state);
        this.updateContent(this.state);
    };
    BottomSheetComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-bottom-sheet',
                    template: "<div class=\"fiv-bottom-drawer-scrollable-content\" no-bounce>\n  <ng-content></ng-content>\n</div>",
                    styles: [":host{width:100%;height:100%;position:absolute;left:0;z-index:11!important;background-color:#fff;-webkit-transform:translateY(100vh);transform:translateY(100vh)}.fiv-bottom-drawer-scrollable-content{width:100%;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    BottomSheetComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
    ]; };
    BottomSheetComponent.propDecorators = {
        dockedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        shouldBounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        distanceTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        transition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minimumHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        stateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivDocked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [BottomSheetContentComponent,] }]
    };
    return BottomSheetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loading = false;
        this.isComplete = false;
        this.loadChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](this.loading);
        this.completeChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](this.isComplete);
    }
    /**
     * @return {?}
     */
    LoadingService.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.loadChange.next(this.loading);
    };
    /**
     * @return {?}
     */
    LoadingService.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
        this.loadChange.next(this.loading);
        this.isComplete = false;
    };
    /**
     * @return {?}
     */
    LoadingService.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        this.loading = !this.loading;
    };
    /**
     * @return {?}
     */
    LoadingService.prototype.complete = /**
     * @return {?}
     */
    function () {
        console.log('set service complete');
        this.isComplete = true;
        this.completeChange.next(this.isComplete);
    };
    LoadingService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LoadingService.ctorParameters = function () { return []; };
    /** @nocollapse */ LoadingService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function LoadingService_Factory() { return new LoadingService(); }, token: LoadingService, providedIn: "root" });
    return LoadingService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingProgressBarComponent = /** @class */ (function () {
    function LoadingProgressBarComponent(loadingService, builder) {
        this.loadingService = loadingService;
        this.builder = builder;
        this.loading = false;
        this.global = false;
        this.isComplete = false;
        this.progress = 0;
        this.verticalAlign = 'top';
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDoneShrinking = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.global) {
            this.loadingService.completeChange.subscribe(function (isComplete) {
                if (isComplete) {
                    _this.complete(null);
                }
            });
        }
    };
    /**
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.global) {
            this.loadingService.completeChange.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        this.loading = !this.loading;
    };
    /**
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.fivRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
        if (this.isComplete) {
            this.isComplete = false;
        }
    };
    /**
     * @param {?} param
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.complete = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        console.log('set complete');
        this.param = param;
        this.isComplete = true;
        console.log(this.isComplete);
    };
    /**
     * @param {?} isComplete
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.fillAnimationComplete = /**
     * @param {?} isComplete
     * @return {?}
     */
    function (isComplete) {
        if (isComplete) {
            console.log('fill animation complete', isComplete);
            this.fivComplete.emit(this.param);
            this.isComplete = false;
            this.param = null;
            if (this.global) {
                this.loadingService.unload();
            }
            else {
                this.unload();
            }
        }
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.setProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        if (progress < 0) {
            this.progress = 0;
            return;
        }
        if (progress > 100) {
            this.progress = 100;
            return;
        }
        this.progress = progress;
        console.log('set progress', progress);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.incrementBy = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.setProgress(progress + this.progress);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.decrementBy = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.setProgress(progress + this.progress);
    };
    /**
     * @param {?} ms
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.fillIn = /**
     * @param {?} ms
     * @return {?}
     */
    function (ms) {
        var _this = this;
        // first define a reusable animation
        /** @type {?} */
        var myAnimation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: this.progress }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(ms, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '100%' }))
        ]);
        // use the returned factory object to create a player
        /** @type {?} */
        var player = myAnimation.create(this.linear.nativeElement);
        player.play();
        /** @type {?} */
        var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(0, ms / (100))
            .subscribe(function () {
            if (_this.progress >= 100) {
                return t.unsubscribe();
            }
            _this.progress++;
            console.log('current progress', _this.progress);
        });
        player.onDone(function () {
            _this.fivComplete.emit(true);
            _this.progress = 100;
            player.destroy();
        });
    };
    /**
     * @param {?} ms
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.shrinkIn = /**
     * @param {?} ms
     * @return {?}
     */
    function (ms) {
        var _this = this;
        // first define a reusable animation
        this.progress = 100;
        /** @type {?} */
        var myAnimation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: this.progress + "%" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(ms, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: 0 }))
        ]);
        // use the returned factory object to create a player
        /** @type {?} */
        var player = myAnimation.create(this.linear.nativeElement);
        /** @type {?} */
        var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(0, ms / (100))
            .subscribe(function () {
            if (_this.progress <= 0) {
                return t.unsubscribe();
            }
            _this.progress--;
            console.log('current progress', _this.progress);
        });
        player.play();
        player.onDone(function () {
            _this.fivDoneShrinking.emit(true);
            _this.progress = 0;
            player.destroy();
        });
    };
    LoadingProgressBarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-loading-progress-bar',
                    template: "<div [@progressAnim] *ngIf=\"(!global && loading) || (global && loadingService.loading)\" class=\"slider\" [ngClass]=\"{'top':verticalAlign == 'top','bottom': verticalAlign == 'bottom'}\" >\n  <div class=\"line\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline inc\"></div>\n  <div *ngIf=\"isComplete\" [@fillAnim] (@fillAnim.done)=\"fillAnimationComplete(isComplete)\" class=\"subline fill\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline dec\"></div>\n</div>\n<div #linear [@progressAnimLinear] [style.width]=\"progress + '%'\" class=\"progress\"  [ngClass]=\"{'top':verticalAlign == 'top','bottom': verticalAlign == 'bottom'}\" ></div>\n",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('progressAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('299ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('progressAnimLinear', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('65ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('299ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fillAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '-5%', width: '5%' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('850ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '0%', width: '100%' }))
                            ]),
                        ])
                    ],
                    styles: [".slider{position:absolute;width:100%;height:5px;overflow-x:hidden;z-index:5000}.progress{position:absolute;height:5px;width:0;overflow-x:hidden;z-index:5000;background:var(--ion-color-primary);transition:240ms}.line{position:absolute;opacity:.4;width:240%;height:5px;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}.subline{position:absolute;height:5px;background:inherit}.inc{-webkit-animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin;animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin}.dec{-webkit-animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin;animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin}.fill{left:0;width:100%;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}@-webkit-keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@-webkit-keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@-webkit-keyframes colorspin{0%,100%{background-color:#4285f4}25%{background-color:#de3e35}50%{background-color:#f7c223}75%{background-color:#1b9a59}}@keyframes colorspin{0%,100%{background-color:#4285f4}25%{background-color:#de3e35}50%{background-color:#f7c223}75%{background-color:#1b9a59}}.top{top:0;left:0}.bottom{bottom:0;left:0}"]
                }] }
    ];
    /** @nocollapse */
    LoadingProgressBarComponent.ctorParameters = function () { return [
        { type: LoadingService },
        { type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] }
    ]; };
    LoadingProgressBarComponent.propDecorators = {
        global: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivDoneShrinking: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        bar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['bar',] }],
        linear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['linear',] }]
    };
    return LoadingProgressBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingButtonComponent = /** @class */ (function () {
    function LoadingButtonComponent() {
        this.loading = false;
        this.color = 'light';
        this.expand = 'block';
        this.fill = 'solid';
        this.size = 'default';
        this.disabled = false;
        this.verticalAlign = 'top';
        this.type = 'button';
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivRefreshComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    LoadingButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LoadingButtonComponent.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        this.loading = !this.loading;
        this.progress.toggleSpinner();
        this.fivRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    LoadingButtonComponent.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.progress.load();
    };
    /**
     * @return {?}
     */
    LoadingButtonComponent.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
        this.progress.unload();
    };
    /**
     * @return {?}
     */
    LoadingButtonComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        if (this.loading) {
            this.progress.complete({});
        }
    };
    /**
     * @param {?} isComplete
     * @return {?}
     */
    LoadingButtonComponent.prototype.onComplete = /**
     * @param {?} isComplete
     * @return {?}
     */
    function (isComplete) {
        console.log('on complete', isComplete);
        this.loading = false;
        this.fivRefreshComplete.emit(this);
    };
    /**
     * @return {?}
     */
    LoadingButtonComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.fivButtonClick.emit(this);
    };
    LoadingButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-loading-button',
                    template: "<ion-button (click)=\"onClick()\" [disabled]=\"disabled\" [fill]=\"fill\" [shape]=\"shape\" [size]=\"size\" [expand]=\"expand\" [color]=\"color\" [type]=\"type\">\n  <fiv-loading-progress-bar [verticalAlign]=\"verticalAlign\" (fivComplete)=\"onComplete($event)\" #progress [global]=\"false\"></fiv-loading-progress-bar>\n  <ng-content></ng-content>\n</ion-button>",
                    styles: [":host(.button-disabled){pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    LoadingButtonComponent.ctorParameters = function () { return []; };
    LoadingButtonComponent.propDecorators = {
        progress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['progress',] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        expand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fill: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        shape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.button-disabled',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivRefreshComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivButtonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return LoadingButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var BASE_SIZE = 100;
var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent(_document, _elementRef, change, builder, sanitizer, renderer) {
        this._document = _document;
        this._elementRef = _elementRef;
        this.change = change;
        this.builder = builder;
        this.sanitizer = sanitizer;
        this.renderer = renderer;
        this._diameter = BASE_SIZE;
        this._strokeWidth = 10;
        this._value = 0;
        this.fivProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mode = 'indeterminate';
        this.circleRadius = 45;
    }
    Object.defineProperty(LoadingSpinnerComponent.prototype, "class", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode + ' mat-spinner mat-progress-spinner mat-progress-spinner-indeterminate-animation';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LoadingSpinnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.mode);
    };
    Object.defineProperty(LoadingSpinnerComponent.prototype, "viewBox", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var viewBox = this.circleRadius * 2 + this.strokeWidth;
            return "0 0 " + viewBox + " " + viewBox;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingSpinnerComponent.prototype, "strokeCircumference", {
        /** The stroke circumference of the svg circle. */
        get: /**
         * The stroke circumference of the svg circle.
         * @return {?}
         */
        function () {
            return 2 * Math.PI * this.circleRadius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingSpinnerComponent.prototype, "strokeDashOffset", {
        /** The dash offset of the svg circle. */
        get: /**
         * The dash offset of the svg circle.
         * @return {?}
         */
        function () {
            if (this.mode === 'determinate') {
                return this.strokeCircumference * (100 - this._value) / 100;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingSpinnerComponent.prototype, "circleStrokeWidth", {
        /** Stroke width of the circle in percent. */
        get: /**
         * Stroke width of the circle in percent.
         * @return {?}
         */
        function () {
            return this.strokeWidth / this.diameter * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingSpinnerComponent.prototype, "value", {
        /** Value of the progress circle. */
        get: /**
         * Value of the progress circle.
         * @return {?}
         */
        function () {
            return this.mode === 'determinate' ? this._value : 0;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._value = Math.max(0, Math.min(100, (newValue)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingSpinnerComponent.prototype, "diameter", {
        get: /**
         * @return {?}
         */
        function () { return this._diameter; },
        set: /**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            this._diameter = size;
            if (!LoadingSpinnerComponent.diameters.has(this._diameter)) {
                this._attachStyleNode();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingSpinnerComponent.prototype, "strokeWidth", {
        /** Stroke width of the progress spinner. */
        get: /**
         * Stroke width of the progress spinner.
         * @return {?}
         */
        function () {
            return this._strokeWidth || this.diameter / 10;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._strokeWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    /** Dynamically generates a style tag containing the correct animation for this diameter. */
    /**
     * Dynamically generates a style tag containing the correct animation for this diameter.
     * @private
     * @return {?}
     */
    LoadingSpinnerComponent.prototype._attachStyleNode = /**
     * Dynamically generates a style tag containing the correct animation for this diameter.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var styleTag = LoadingSpinnerComponent.styleTag;
        if (!styleTag) {
            styleTag = this._document.createElement('style');
            this._document.head.appendChild(styleTag);
            LoadingSpinnerComponent.styleTag = styleTag;
        }
        if (styleTag && styleTag.sheet) {
            ((/** @type {?} */ (styleTag.sheet))).insertRule(this._getAnimationText(), 0);
        }
        LoadingSpinnerComponent.diameters.add(this.diameter);
    };
    /** Generates animation styles adjusted for the spinner's diameter. */
    /**
     * Generates animation styles adjusted for the spinner's diameter.
     * @private
     * @return {?}
     */
    LoadingSpinnerComponent.prototype._getAnimationText = /**
     * Generates animation styles adjusted for the spinner's diameter.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var INDETERMINATE_ANIMATION_TEMPLATE = "\n    @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n       0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n       12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n       12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n       25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n       25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n       37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n       37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n       50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n       50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n       62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n       62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n       75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n       75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n       87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n       87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n       100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n     }\n   ";
        return INDETERMINATE_ANIMATION_TEMPLATE
            // Animation should begin at 5% and end at 80%
            .replace(/START_VALUE/g, "" + 0.95 * this.strokeCircumference)
            .replace(/END_VALUE/g, "" + 0.2 * this.strokeCircumference)
            .replace(/DIAMETER/g, "" + this.diameter);
    };
    /**
     * @param {?} duration
     * @return {?}
     */
    LoadingSpinnerComponent.prototype.completeIn = /**
     * @param {?} duration
     * @return {?}
     */
    function (duration) {
        var _this = this;
        this.mode = 'determinate';
        this.change.detectChanges();
        console.log('complete in', duration);
        console.log('interval', duration / 100);
        console.log('timer length', duration + duration / 50);
        console.log('loop count', (duration + duration / 50) / (duration / 100));
        /** @type {?} */
        var animation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                'stroke-dasharray': 180,
                'stroke-dashoffset': 90,
                'transformOrigin': 'center',
                'stroke': '#DE3E35'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(duration + "ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                'stroke-dasharray': 315,
                'stroke-dashoffset': 0,
                'transformOrigin': 'center',
                'stroke': '#1B9A59',
                'opacity': 0
            }))
        ]);
        /** @type {?} */
        var player = animation.create(this.determinateCircle.nativeElement);
        player.play();
        player.onDone(function () {
            _this.fivComplete.emit(_this);
            _this._value = 0;
        });
        /** @type {?} */
        var i = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(duration / 100);
        /** @type {?} */
        var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(duration + duration / 50);
        /** @type {?} */
        var progress = i.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(t));
        progress.subscribe(function (p) {
            _this.fivProgress.emit(p);
        });
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingSpinnerComponent.prototype.setValue = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.mode = 'determinate';
        this._value = progress;
        this.change.detectChanges();
        console.log('set value', this._value, this.mode);
    };
    /**
     * @return {?}
     */
    LoadingSpinnerComponent.prototype.spin = /**
     * @return {?}
     */
    function () {
        this.mode = 'indeterminate';
        this.change.detectChanges();
    };
    /**
     * @return {?}
     */
    LoadingSpinnerComponent.prototype.stopSpinning = /**
     * @return {?}
     */
    function () {
        this._value = 0;
        this.change.detectChanges();
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    LoadingSpinnerComponent.prototype.setMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.mode = mode;
        this.change.detectChanges();
    };
    LoadingSpinnerComponent.diameters = new Set([BASE_SIZE]);
    LoadingSpinnerComponent.styleTag = null;
    LoadingSpinnerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-loading-spinner',
                    template: "<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"viewBox\" preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\" [ngSwitch]=\"mode == 'indeterminate'\">\n\n\n  <circle *ngSwitchCase=\"true\" cx=\"50%\" cy=\"50%\" [attr.r]=\"circleRadius\" [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\"\n    [style.stroke-dashoffset.px]=\"strokeDashOffset\" [style.stroke-dasharray.px]=\"strokeCircumference\"\n    [style.stroke-width.%]=\"circleStrokeWidth\"></circle>\n\n  <circle class=\"determinate-circle\" #determinateCircle *ngSwitchCase=\"false\" cx=\"50%\" cy=\"50%\" [attr.r]=\"circleRadius\"\n    [style.stroke-dashoffset.px]=\"strokeDashOffset\" [style.stroke-dasharray.px]=\"strokeCircumference\"\n    [style.stroke-width.%]=\"circleStrokeWidth\"></circle>\n</svg>",
                    // tslint:disable-next-line:use-host-property-decorator
                    host: {
                        '[style.width.px]': 'diameter',
                        '[style.height.px]': 'diameter'
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["fiv-loading-spinner{display:block;position:relative}fiv-loading-spinner svg{position:absolute;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);top:0;left:0;-webkit-transform-origin:center;transform-origin:center;overflow:visible}fiv-loading-spinner circle{fill:transparent;-webkit-transform-origin:center;transform-origin:center;transition:stroke-dashoffset 225ms linear}fiv-loading-spinner.mat-progress-spinner-indeterminate-animation.determinate{-webkit-animation:5.6s ease-in-out infinite colors;animation:5.6s ease-in-out infinite colors}fiv-loading-spinner.mat-progress-spinner-indeterminate-animation.determinate circle{transition-property:stroke;-webkit-animation-duration:4s;animation-duration:4s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}fiv-loading-spinner.mat-progress-spinner-indeterminate-animation.indeterminate{-webkit-animation:5.6s ease-in-out infinite colors,2s linear infinite mat-progress-spinner-linear-rotate;animation:5.6s ease-in-out infinite colors,2s linear infinite mat-progress-spinner-linear-rotate}fiv-loading-spinner.mat-progress-spinner-indeterminate-animation.indeterminate circle{transition-property:stroke;-webkit-animation-duration:4s;animation-duration:4s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(0);transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(0);transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(72.5deg);transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(72.5deg);transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(161.5deg);transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(161.5deg);transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(251.5deg);transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(251.5deg);transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(341.5deg);transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(341.5deg);transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(0);transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(0);transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(72.5deg);transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(72.5deg);transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(161.5deg);transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(161.5deg);transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(251.5deg);transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(251.5deg);transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;-webkit-transform:rotateX(180deg) rotate(341.5deg);transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;-webkit-transform:rotateX(180deg) rotate(341.5deg);transform:rotateX(180deg) rotate(341.5deg)}}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}"]
                }] }
    ];
    /** @nocollapse */
    LoadingSpinnerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    LoadingSpinnerComponent.propDecorators = {
        fivProgress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        determinateCircle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['determinateCircle',] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        circleRadius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        strokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return LoadingSpinnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingRefresherContentComponent = /** @class */ (function () {
    function LoadingRefresherContentComponent(element, builder) {
        this.element = element;
        this.builder = builder;
        this.iconColor = '#000';
        this.checkmark = false;
        this.disabled = false;
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivShowed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visible = false;
        this.iconState = 'normal';
    }
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.load = /**
     * @return {?}
     */
    function () {
        this.visible = true;
        this.spinner.spin();
        this.fivRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.spinner.stopSpinning();
    };
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        // this.spinner.completeIn(500);
        if (this.checkmark) {
            console.log('fill animation done', event);
            this.iconState = 'rotate';
        }
        else {
            this.postComplete();
        }
    };
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.visible) {
            console.log('&show');
            this.visible = true;
            /** @type {?} */
            var animation = this.builder.build([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(1)' }))
            ]);
            /** @type {?} */
            var player_1 = animation.create(this.background.nativeElement);
            player_1.play();
            player_1.onDone(function () {
                _this.fivShowed.emit(_this);
                player_1.destroy();
            });
        }
    };
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.visible) {
            /** @type {?} */
            var transform = "scale(1)";
            /** @type {?} */
            var animation = this.builder.build([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: transform }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('175ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0)' }))
            ]);
            /** @type {?} */
            var player_2 = animation.create(this.background.nativeElement);
            player_2.play();
            player_2.onDone(function () {
                _this.fivHidden.emit(_this);
                _this.visible = false;
                player_2.destroy();
            });
        }
    };
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.fillAnimationDone = /**
     * @return {?}
     */
    function () {
        if (this.checkmark) {
            console.log('fill animation done', event);
            this.iconState = 'rotate';
        }
        else {
            this.postComplete();
        }
    };
    /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.changeIconAndReveal = /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    function (event, icon) {
        console.log(event, icon);
        if (event.fromState === 'normal') {
            this.icon = icon;
            this.iconState = 'normal';
        }
        else {
            if (event.fromState === 'rotate') {
                this.postComplete();
            }
        }
    };
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.postComplete = /**
     * @return {?}
     */
    function () {
        this.unload();
        this.fivComplete.emit(this);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.setValue = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.spinner.setValue(progress);
    };
    /**
     * @return {?}
     */
    LoadingRefresherContentComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.spinner.setMode('indeterminate');
    };
    LoadingRefresherContentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-loading-refresher-content',
                    template: "<div #background class=\"spinner-background\">\n    <fiv-loading-spinner #spinner (fivProgress)=\"fivProgress.emit($event)\" (fivComplete)=\"fillAnimationDone()\" class=\"spinner\" [circleRadius]=\"8\" [diameter]=\"20\" [strokeWidth]=\"2\"></fiv-loading-spinner>\n</div>",
                    animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fabAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0)' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('spinnerAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => rotate', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('rotate => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'rotateZ(45deg)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'rotateZ(0deg)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fillAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => fill', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    'stroke-dasharray': 180,
                                    'stroke-dashoffset': 90,
                                    'transformOrigin': 'center',
                                    'stroke': '#DE3E35'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1400ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('fill', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                'stroke-dasharray': 315,
                                'stroke-dashoffset': 0,
                                'transformOrigin': 'center',
                                'stroke': '#1B9A59',
                                'opacity': 0
                            }))
                        ])],
                    styles: [":host{position:absolute;width:40px;height:40px;left:calc(50% - 20px);z-index:9}.spinner-background{position:absolute;width:40px;height:40px;background:var(--ion-color-light);border-radius:50%;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1)}.spinner-background fiv-loading-spinner{position:absolute;top:10px;left:10px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}"]
                }] }
    ];
    /** @nocollapse */
    LoadingRefresherContentComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] }
    ]; };
    LoadingRefresherContentComponent.propDecorators = {
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        spinColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fabColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        iconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        checkmark: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivShowed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivProgress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['spinner',] }],
        background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['background',] }]
    };
    return LoadingRefresherContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingContentComponent = /** @class */ (function () {
    function LoadingContentComponent(builder, renderer) {
        this.builder = builder;
        this.renderer = renderer;
        this.hintText = 'new posts';
        this.maxPullHeight = 168;
        this.minPullHeight = 112;
        this.fivProgressChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hintVisible = false;
        this.currentProgress = 0;
        this.refreshing = false;
    }
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.refreshing = true;
        this.changeAnimationToProgress(112 / 168);
        this.fivRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.completeRefresh = /**
     * @return {?}
     */
    function () {
        this.spinner.complete();
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.fillAnimationDone = /**
     * @return {?}
     */
    function () {
        console.log('fillAnimDone');
        this.spinner.hide();
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.showHint = /**
     * @return {?}
     */
    function () {
        this.hintVisible = true;
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.onHintClicked = /**
     * @return {?}
     */
    function () {
        console.log('on hint clicked');
        this.hintVisible = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LoadingContentComponent.prototype.postHint = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(event);
        if (!event.fromState && event.toState === 'void') {
            this.setPullAnimationProgress(112 / 168);
            this.spinner.load();
            this.refreshing = true;
            this.fivRefresh.emit(this);
        }
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingContentComponent.prototype.setPullAnimationProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.currentProgress = progress;
        if (progress < 1) {
            this.renderer.
                setStyle(this.spinner.element.nativeElement, 'transform', "translateY(" + 168 * progress + "px) rotateZ(" + 360 * progress + "deg)");
        }
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingContentComponent.prototype.changeAnimationToProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        var _this = this;
        return new Promise(function (resolve) {
            /** @type {?} */
            var animation = _this.builder.build([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: "translateY(" + _this.currentProgress * 168 + "px) rotateZ(" + 360 * _this.currentProgress + "deg)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('85ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: "translateY(" + progress * 168 + "px) rotateZ(" + 360 * progress + "deg)" }))
            ]);
            /** @type {?} */
            var player = animation.create(_this.spinner.element.nativeElement);
            player.play();
            player.onDone(function () {
                _this.setPullAnimationProgress(progress);
                player.destroy();
                resolve();
            });
        });
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingContentComponent.prototype.fivPull = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.setPullAnimationProgress(progress);
        this.spinner.show();
        /** @type {?} */
        var value = Math.max(0, Math.min(100, progress * 100 * this.maxPullHeight / this.minPullHeight));
        this.spinner.setValue(value * 0.84);
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.onRefresh = /**
     * @return {?}
     */
    function () {
        this.refresh();
        this.spinner.load();
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.fivCancel = /**
     * @return {?}
     */
    function () {
        this.moveBack();
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.afterSpinnerHide = /**
     * @return {?}
     */
    function () {
        this.setPullAnimationProgress(0);
        this.refreshing = false;
        this.spinner.reset();
    };
    /**
     * @return {?}
     */
    LoadingContentComponent.prototype.moveBack = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var animation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: "translateY(" + this.currentProgress * 168 + "px) rotateZ(" + 360 * this.currentProgress + "deg)" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('145ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0) rotateZ(0)' }))
        ]);
        /** @type {?} */
        var player = animation.create(this.spinner.element.nativeElement);
        player.play();
        player.onDone(function () {
            _this.setPullAnimationProgress(0);
            _this.spinner.visible = false;
            player.destroy();
        });
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingContentComponent.prototype.onSpinnerProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.fivProgressChanged.emit(progress);
        this.renderer.
            // tslint:disable-next-line:max-line-length
            setStyle(this.spinner.element.nativeElement, 'transform', "translateY(" + 168 * this.currentProgress + "px) rotateZ(" + 360 * progress / 200 + "deg)");
    };
    LoadingContentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-loading-content',
                    template: "<fiv-loading-refresher-content (fivProgress)=\"onSpinnerProgress($event)\" (fivHidden)=\"afterSpinnerHide()\" (fivComplete)=\"fillAnimationDone()\" #spinner></fiv-loading-refresher-content>\n<ion-chip class=\"gg-hint-wrapper\" *ngIf=\"hintVisible\" [@hintAnim] (@hintAnim.done)=\"postHint($event)\" (click)=\"onHintClicked()\"\n  #hint>\n  <ion-icon class=\"icon\" name=\"md-arrow-up\"></ion-icon>\n  <ion-label class=\"text\">{{hintText}}</ion-label>\n</ion-chip>\n\n<ion-content no-bounce fivPull [maxPullHeight]=\"maxPullHeight\" [minPullHeight]=\"minPullHeight\" (fivPull)=\"fivPull($event)\" (fivRefresh)=\"onRefresh()\" (fivCancel)=\"fivCancel()\" [enabled]=\"!refreshing && !hintVisible\">\n\n    <ng-content></ng-content>\n</ion-content>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fillAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => fill', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    'stroke-dasharray': 180,
                                    'stroke-dashoffset': 90,
                                    'transformOrigin': 'center',
                                    'stroke': '#DE3E35'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('360ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('fill', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                'stroke-dasharray': 315,
                                'stroke-dashoffset': 0,
                                'transformOrigin': 'center',
                                'stroke': '#1B9A59',
                            }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('spinnerAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                            ]),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('hintAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0px) translateX(-50%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(112px) translateX(-50%)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '112px', opacity: 1, transform: 'translateY(112px) translateX(-50%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '40px', transform: 'translateY(112px) translateX(-50%)' }))
                            ]),
                        ]),
                    ],
                    styles: [":host{height:100%;width:100%;position:absolute;top:0;bottom:0;left:0;right:0}ion-content{--padding-top:var(--fiv-padding-top, 0px)}.icon{height:20px;width:20px;background:0 0;color:var(--ion-color-dark)}.text{font-size:1em;color:var(--ion-color-dark)}.gg-hint-wrapper{position:absolute;z-index:8;opacity:1;left:50%;-webkit-transform:translateY(112px) translateX(-50%);transform:translateY(112px) translateX(-50%);height:40px;padding-left:8px;padding-right:8px;background:var(--ion-color-light);border-radius:40px;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1);margin:0}"]
                }] }
    ];
    /** @nocollapse */
    LoadingContentComponent.ctorParameters = function () { return [
        { type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    LoadingContentComponent.propDecorators = {
        hintText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxPullHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minPullHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivProgressChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['content',] }],
        spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['spinner',] }]
    };
    return LoadingContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingFabComponent = /** @class */ (function () {
    function LoadingFabComponent(renderer) {
        this.renderer = renderer;
        this.iconColor = '#000';
        this.checkmark = false;
        this.disabled = false;
        this.visible = true;
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loading = false;
        this.iconState = 'normal';
    }
    Object.defineProperty(LoadingFabComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var verticalClass = !!this.vertical ? "fab-vertical-" + this.vertical : '';
            /** @type {?} */
            var horizontalClass = !!this.horizontal ? "fab-horizontal-" + this.horizontal : '';
            /** @type {?} */
            var edgeClass = this.edge ? "fab-edge-" : '';
            /** @type {?} */
            var disabledClass = this.disabled ? "button-disabled" : '';
            return verticalClass + " " + horizontalClass + " " + edgeClass + " " + disabledClass;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LoadingFabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LoadingFabComponent.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        if (this.icon !== 'md-checkmark') {
            this.loading = !this.loading;
        }
    };
    /**
     * @return {?}
     */
    LoadingFabComponent.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.fivRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    LoadingFabComponent.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
    };
    /**
     * @return {?}
     */
    LoadingFabComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        if (this.loading) {
            this.spinner.completeIn(1000);
        }
    };
    /**
     * @return {?}
     */
    LoadingFabComponent.prototype.fillAnimationDone = /**
     * @return {?}
     */
    function () {
        this.icon = 'md-checkmark';
    };
    /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    LoadingFabComponent.prototype.changeIconAndReveal = /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    function (event, icon) {
        console.log(event, icon);
        if (event.fromState === 'normal') {
            this.icon = icon;
            this.iconState = 'normal';
        }
        else {
            if (event.fromState === 'rotate') {
                this.postComplete();
            }
        }
    };
    /**
     * @return {?}
     */
    LoadingFabComponent.prototype.postComplete = /**
     * @return {?}
     */
    function () {
        console.log('post complete');
        this.unload();
        this.fivComplete.emit(this);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    LoadingFabComponent.prototype.rotate = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.renderer.setStyle(this.spinner._elementRef.nativeElement, 'transform', "rotateZ(" + progress / 200 * 360 + "deg)");
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LoadingFabComponent.prototype.fabAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log('fab anim done', event);
        if (event.fromState === 'void') {
            this.fivShow.emit(this);
        }
        if (event.toState === 'void') {
            this.fivHidden.emit(this);
        }
    };
    LoadingFabComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-loading-fab',
                    template: "<ion-fab *ngIf=\"visible\" (@fabAnim.done)=\"fabAnimDone($event)\" [@fabAnim] [vertical]=\"vertical\" [horizontal]=\"horizontal\" [slot]=\"slot\" [edge]=\"edge\">\n  <!-- <fiv-loading-spinner (fivProgress)=\"rotate($event)\" #spinner (fivComplete)=\"fillAnimationDone()\" *ngIf=\"loading\" class=\"spinner\" [circleRadius]=\"32\" [diameter]=\"72\" [strokeWidth]=\"4\" [mode]=\"'indeterminate'\"></fiv-loading-spinner> -->\n  <fiv-loading-spinner (fivProgress)=\"rotate($event)\" #spinner (fivComplete)=\"fillAnimationDone()\" *ngIf=\"loading\" class=\"spinner\" [circleRadius]=\"30\" [diameter]=\"68\" [strokeWidth]=\"4\" [mode]=\"'indeterminate'\"></fiv-loading-spinner>\n\n  <ion-fab-button [disabled]=\"disabled\">\n    <fiv-icon (transitionDone)=\"postComplete()\" [fivCenter]=\"{horizontal: true, vertical: true}\" [name]=\"icon\" [color]=\"iconColor\"></fiv-icon>\n  </ion-fab-button>\n</ion-fab>",
                    animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fabAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0)' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('spinnerAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => rotate', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('rotate => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'rotateZ(45deg)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'rotateZ(0deg)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fillAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => fill', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    'stroke-dasharray': 180,
                                    'stroke-dashoffset': 90,
                                    'transformOrigin': 'center',
                                    'stroke': '#DE3E35'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1400ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('fill', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                'stroke-dasharray': 315,
                                'stroke-dashoffset': 0,
                                'transformOrigin': 'center',
                                'stroke': '#1B9A59',
                                'opacity': 0
                            }))
                        ])],
                    styles: [":host{--fiv-spinner-size:68px;position:absolute;width:var(--fiv-spinner-size);height:var(--fiv-spinner-size)}:host(.button-disabled){pointer-events:none}:host(.fab-vertical-top){top:0}:host(.fab-vertical-top.fab-edge){top:var(--fiv-spinner-size)/2}:host(.fab-vertical-bottom.fab-edge){bottom:var(--fiv-spinner-size)/2}:host(.fab-vertical-bottom){bottom:0}:host(.fab-vertical-center){top:50%}:host(.fab-horizontal-start){left:0}:host(.fab-horizontal-end){right:0}ion-spinner{position:absolute;top:-8px;left:-8px;width:72px;height:72px}fiv-loading-spinner{position:absolute;left:calc((var(--fiv-spinner-size) - 56px)/ -2);top:calc((var(--fiv-spinner-size) - 56px)/ -2)}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}ion-fab-button{--background:var(--fiv-color-fab)}"]
                }] }
    ];
    /** @nocollapse */
    LoadingFabComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    LoadingFabComponent.propDecorators = {
        vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        edge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        slot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        spinColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fabColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        iconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        checkmark: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['spinner',] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }]
    };
    return LoadingFabComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AppBarTabComponent = /** @class */ (function () {
    function AppBarTabComponent() {
    }
    /**
     * @return {?}
     */
    AppBarTabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    AppBarTabComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-app-bar-tab',
                    template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                    styles: [":host{width:50%;height:100%;display:inline-block;position:relative}:host fiv-ripple{width:100%;height:100%}:host fiv-icon{display:block}:host .tab.active{--fiv-color-icon:var(--ion-color-primary)}"]
                }] }
    ];
    /** @nocollapse */
    AppBarTabComponent.ctorParameters = function () { return []; };
    AppBarTabComponent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        href: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return AppBarTabComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AppBarComponent = /** @class */ (function () {
    function AppBarComponent(router) {
        this.router = router;
        this._fabVisible = true;
        this.cutoutVisible = true;
        this.left = false;
        this.right = false;
        this.transitioning = false;
        this.icon = 'md-add';
        this.titleLayout = 'hide';
        this.fivFabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(AppBarComponent.prototype, "position", {
        get: /**
         * @return {?}
         */
        function () {
            return this._position;
        },
        set: /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            console.log('set position', position, !position, this._position);
            if (!position) {
                return;
            }
            if (!this.fabVisible) {
                this._position = position;
                this.setPosition();
                return;
            }
            this._fabVisible = false;
            this.transitioning = true;
            if (!this._position) {
                this._position = position;
                this.onFabHidden();
                return;
            }
            this.prepareTabs(position);
            this._position = position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppBarComponent.prototype, "fabVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fabVisible;
        },
        set: /**
         * @param {?} fabVisible
         * @return {?}
         */
        function (fabVisible) {
            var _this = this;
            if (this._fabVisible === true && fabVisible === false) {
                console.log('hide fab');
                this._fabVisible = false;
            }
            else if (this._fabVisible === false && fabVisible === true) {
                this.cutoutVisible = true;
                setTimeout(function () {
                    _this._fabVisible = true;
                }, 250);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AppBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.prepareTabs(this.position);
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.onFabHidden = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('fab hidden');
        console.log('to void');
        if (this.transitioning) {
            console.log('while transitioning to position', this._position);
            this.setPosition();
            console.log('remove cutout');
            this.cutoutVisible = false;
            setTimeout(function () {
                console.log('show cutout again');
                _this.cutoutVisible = true;
                setTimeout(function () {
                    console.log('show fab again and end transition');
                    _this._fabVisible = true;
                    _this.transitioning = false;
                }, 225);
            }, 225);
        }
        else {
            this.cutoutVisible = false;
        }
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    AppBarComponent.prototype.prepareTabs = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (position === 'center') {
            this.tabsLeft = this.tabs.toArray().slice(0, 2);
            this.tabsRight = this.tabs.toArray().slice(2, 4);
        }
        else if (position === 'right') {
            this.tabsLeft = this.tabs.toArray();
            this.tabsRight = [];
        }
        else if (position === 'left') {
            this.tabsLeft = [];
            this.tabsRight = this.tabs.toArray();
        }
    };
    /**
     * @private
     * @return {?}
     */
    AppBarComponent.prototype.setPosition = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._position === 'right') {
            this.right = true;
            this.left = false;
        }
        else if (this._position === 'left') {
            this.right = false;
            this.left = true;
        }
        else {
            this.right = false;
            this.left = false;
        }
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.fabClick = /**
     * @return {?}
     */
    function () {
        this.fivFabClick.emit(this);
    };
    AppBarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-app-bar',
                    template: "<div class=\"appbar\" [ngClass]=\"{'cutout': cutoutVisible, 'left': left, 'right': right}\">\n  <div class=\"appbar-rect left\">\n    <div class=\"tabs\">\n      <fiv-app-bar-tab-content [active]=\"tab.href === router.url\"  [href]=\"tab.href\" [name]=\"tab.name\" [icon]=\"tab.icon\" [titleLayout]=\"titleLayout\" *ngFor=\"let tab of tabsLeft\"></fiv-app-bar-tab-content>\n    </div>\n  </div>\n  <fiv-loading-fab (fivHidden)=\"onFabHidden()\" [icon]=\"icon\" [visible]=\"_fabVisible\" #fab (click)=\"fabClick()\"></fiv-loading-fab>\n  <div class=\"rect\"></div>\n  <div class=\"appbar-rect right\">\n    <div class=\"tabs\">\n      <fiv-app-bar-tab-content [active]=\"tab.href === router.url\" [href]=\"tab.href\" [name]=\"tab.name\" [icon]=\"tab.icon\" [titleLayout]=\"titleLayout\" *ngFor=\"let tab of tabsRight\"></fiv-app-bar-tab-content>\n    </div>\n  </div>\n</div>",
                    styles: [":host{--fiv-color-appbar:var(--ion-color-light);--fiv-color-fab:var(--ion-color-primary)}.appbar{width:100%;position:fixed;bottom:0;left:0;height:84px;background:rgba(0,0,0,0);z-index:5000}.appbar .appbar-rect{position:absolute;width:calc(50% - 34px);height:56px;bottom:0;box-shadow:3px -4px 5px 0 rgba(0,0,0,.1);transition:350ms}.appbar .appbar-rect.left{left:0;background:var(--fiv-color-appbar);border-top-right-radius:12px}.appbar .appbar-rect.right{right:0;background:var(--fiv-color-appbar);border-top-left-radius:12px}.appbar fiv-loading-fab{width:56px;height:56px;-webkit-transform:translateX(-50%);transform:translateX(-50%);left:50%;position:absolute;z-index:14}.appbar fiv-loading-fab fiv-icon{--fiv-color-icon:var(--fiv-color-fab-icon)}.appbar .rect{display:inline-block;width:68px;height:48px;position:absolute;overflow:hidden;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:350ms}.appbar .rect:before{content:'';position:absolute;bottom:50%;width:100%;height:100%;border-radius:100%;box-shadow:0 300px 0 300px var(--fiv-color-appbar);transition:350ms}.appbar:not(.cutout) .appbar-rect.left{border-top-right-radius:0}.appbar:not(.cutout) .appbar-rect.right{border-top-left-radius:0}.appbar:not(.cutout) .rect{height:56px;box-shadow:3px -4px 5px 0 rgba(0,0,0,.1);background:var(--fiv-color-appbar)}.appbar:not(.cutout) .rect:before{border-radius:0;bottom:100%}.appbar.left .appbar-rect.left{width:4px}.appbar.left .appbar-rect.right{width:calc(100% - 70px)}.appbar.left .rect{left:4px;-webkit-transform:translateX(0);transform:translateX(0);width:66px}.appbar.left fiv-loading-fab{width:56px;height:56px;-webkit-transform:translateX(0);transform:translateX(0);left:10px;position:absolute}.appbar.right .appbar-rect.left{width:calc(100% - 70px)}.appbar.right .appbar-rect.right{width:4px}.appbar.right .rect{left:calc(100% - 37px);width:67px}.appbar.right fiv-loading-fab{width:56px;height:56px;-webkit-transform:translateX(0);transform:translateX(0);left:calc(100% - 64px);position:absolute;--fiv-spinner-size:68px}.tabs{display:flex;width:100%;height:100%;position:relative}"]
                }] }
    ];
    /** @nocollapse */
    AppBarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AppBarComponent.propDecorators = {
        fab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['fab',] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        titleLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivFabClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [AppBarTabComponent,] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fabVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return AppBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IfPlatformDirective = /** @class */ (function () {
    function IfPlatformDirective(platform, viewContainer, templateRef) {
        this.platform = platform;
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
    }
    Object.defineProperty(IfPlatformDirective.prototype, "fivIf", {
        set: /**
         * @param {?} platforms
         * @return {?}
         */
        function (platforms) {
            var _this = this;
            /** @type {?} */
            var show = true;
            platforms.forEach(function (p) {
                if (!_this.platform.is(p)) {
                    show = false;
                }
            });
            console.log('if platforms', platforms, show);
            if (show) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    IfPlatformDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[fivIf]'
                },] }
    ];
    /** @nocollapse */
    IfPlatformDirective.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    IfPlatformDirective.propDecorators = {
        fivIf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return IfPlatformDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CenterDirective = /** @class */ (function () {
    function CenterDirective(sanitizer) {
        this.sanitizer = sanitizer;
        this.vertical = true;
        this.horizontal = true;
    }
    Object.defineProperty(CenterDirective.prototype, "myStyle", {
        get: /**
         * @return {?}
         */
        function () {
            // tslint:disable-next-line:max-line-length
            /** @type {?} */
            var style$$1 = "position: absolute; " + (this.vertical && this.horizontal ? 'top: 50%; left: 50%; transform: translateY(-50%) translateX(-50%);' : this.vertical ? 'top: 50%; transform: translateY(-50%);' : 'left: 50%; transform: translateX(-50%);');
            return this.sanitizer.bypassSecurityTrustStyle(style$$1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CenterDirective.prototype, "fivCenter", {
        set: /**
         * @param {?} center
         * @return {?}
         */
        function (center) {
            if (center) {
                this.vertical = center.vertical;
                this.horizontal = center.horizontal;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CenterDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('apply position relative to parent here');
    };
    CenterDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[fivCenter]'
                },] }
    ];
    /** @nocollapse */
    CenterDirective.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
    ]; };
    CenterDirective.propDecorators = {
        myStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style',] }],
        fivCenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CenterDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PermissionsDirective = /** @class */ (function () {
    function PermissionsDirective(viewContainer, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.allowedPermissions = [];
        this.uPermissions = [];
        console.log('constructor Permissionsdirective');
    }
    Object.defineProperty(PermissionsDirective.prototype, "fivPermissionsUserPermissions", {
        set: /**
         * @param {?} userPermissions
         * @return {?}
         */
        function (userPermissions) {
            console.log('userPermissions', userPermissions);
            this.uPermissions = userPermissions || [];
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionsDirective.prototype, "fivPermissions", {
        set: /**
         * @param {?} allowed
         * @return {?}
         */
        function (allowed) {
            console.log('fivPermissions', allowed);
            this.allowedPermissions = allowed || [];
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PermissionsDirective.prototype.checkPermission = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var show = false;
        this.uPermissions.forEach(function (role) {
            if (_this.allowedPermissions.find(function (a) { return a.toUpperCase() === role.toUpperCase(); })) {
                show = true;
            }
        });
        console.log('has role permission', this.uPermissions, this.allowedPermissions);
        return show;
    };
    /**
     * @return {?}
     */
    PermissionsDirective.prototype.updateView = /**
     * @return {?}
     */
    function () {
        if (this.checkPermission()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    };
    PermissionsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[fivPermissions]'
                },] }
    ];
    /** @nocollapse */
    PermissionsDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    PermissionsDirective.propDecorators = {
        fivPermissionsUserPermissions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivPermissions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return PermissionsDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RippleComponent = /** @class */ (function () {
    function RippleComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.auto = 'auto';
        this.rippleAnimationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.round = false;
        this.hover = false;
        this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        console.log('ripple constructor');
        this.rippleAnimationEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(750))
            .subscribe(function () {
            renderer.removeClass(el.nativeElement.querySelector('.ripple'), 'show');
            renderer.removeClass(el.nativeElement.querySelector('.rippleWrapper'), 'show');
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    RippleComponent.prototype.clickEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.ripple(event);
        this.fivClick.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    RippleComponent.prototype.PressEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.ripple(event);
    };
    Object.defineProperty(RippleComponent.prototype, "isRound", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.round;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RippleComponent.prototype, "canHover", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.hover;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    RippleComponent.prototype.ripple = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var ripple = this.el.nativeElement.querySelector('.ripple');
        if (!ripple) {
            this.rippleFactory();
        }
        this.rippleAnimation({ pageX: event.pageX, pageY: event.pageY });
        return;
    };
    /**
     * @return {?}
     */
    RippleComponent.prototype.rippleFactory = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var target = this.el.nativeElement;
        /** @type {?} */
        var rect = target.getBoundingClientRect();
        if (window.getComputedStyle(target).position === 'static') {
            this.position = 'relative';
        }
        /** @type {?} */
        var radius = Math.max(rect.width, rect.height) + 'px';
        /** @type {?} */
        var rippleWrapper = this.renderer.createElement('div');
        this.renderer.addClass(rippleWrapper, 'rippleWrapper');
        /** @type {?} */
        var ripple = this.renderer.createElement('span');
        this.renderer.addClass(ripple, 'ripple');
        this.renderer.setStyle(ripple, 'height', radius);
        this.renderer.setStyle(ripple, 'width', radius);
        this.renderer.appendChild(rippleWrapper, ripple);
        this.renderer.appendChild(target, rippleWrapper);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    RippleComponent.prototype.rippleAnimation = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var pageX = _a.pageX, pageY = _a.pageY;
        /** @type {?} */
        var target = this.el.nativeElement;
        /** @type {?} */
        var rect = target.getBoundingClientRect();
        /** @type {?} */
        var ripple = target.querySelector('.ripple');
        /** @type {?} */
        var rippleWrapper = target.querySelector('.rippleWrapper');
        this.renderer.removeClass(rippleWrapper, 'show');
        this.renderer.removeClass(ripple, 'show');
        /** @type {?} */
        var left = pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft + 'px';
        /** @type {?} */
        var top = pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop + 'px';
        this.renderer.setStyle(ripple, 'top', top);
        this.renderer.setStyle(ripple, 'left', left);
        this.renderer.addClass(rippleWrapper, 'show');
        this.renderer.addClass(ripple, 'show');
        this.rippleAnimationEvent.emit();
    };
    RippleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'fiv-ripple',
                    template: "<ng-content></ng-content>",
                    // tslint:disable-next-line:use-host-property-decorator
                    host: {
                        '[style.touch-action]': 'auto',
                    },
                    styles: [":host{display:block;position:relative}:host:hover{cursor:pointer}:host.hover:hover{background-color:rgba(0,0,0,.1)}:host.round{border-radius:100%}.rippleWrapper{position:absolute;top:0;bottom:0;left:0;width:100%;overflow:hidden;border-radius:inherit}.rippleWrapper::before{content:'';display:block;height:100%;width:100%;-webkit-transform:scale(0);transform:scale(0)}.rippleWrapper.show::before{transition:opacity 1.5s;-webkit-transform:scale(2);transform:scale(2);opacity:0}.ripple{position:absolute;background:rgba(0,0,0,.1);border-radius:100%;-webkit-transform:scale(0);transform:scale(0);pointer-events:none}.ripple.show{-webkit-animation:.75s ease-out ripple;animation:.75s ease-out ripple}@-webkit-keyframes ripple{to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}@keyframes ripple{to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}"]
                }] }
    ];
    /** @nocollapse */
    RippleComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    RippleComponent.propDecorators = {
        round: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.position',] }],
        clickEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }],
        PressEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['press', ['$event'],] }],
        isRound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.round',] }],
        canHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.hover',] }]
    };
    return RippleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ViewportDirective = /** @class */ (function () {
    function ViewportDirective(elementRef) {
        this.elementRef = elementRef;
        this.offset = 0;
        this.fivAppear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDisappear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visible = false;
    }
    /**
     * @return {?}
     */
    ViewportDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var content = this.elementRef.nativeElement.closest('ion-content');
        this.check();
        content.scrollEvents = true;
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.elementRef.nativeElement.closest('ion-content'), 'ionScroll')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(window, 'resize')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(50))
            .subscribe(function () { return _this.check(); });
        console.log('visible', this.visible, document.body.contains(this.elementRef.nativeElement), this.elementRef.nativeElement.getBoundingClientRect(), this.elementRef.nativeElement, window.innerHeight + this.offset);
    };
    /**
     * @return {?}
     */
    ViewportDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ViewportDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ViewportDirective.prototype.check = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = {
            target: this.elementRef.nativeElement,
            value: document.body.contains(this.elementRef.nativeElement) &&
                this.elementRef.nativeElement.getBoundingClientRect().top <=
                    window.innerHeight + this.offset
        };
        if (event.value === true) {
            if (!this.visible) {
                this.fivAppear.emit(event);
                this.visible = true;
            }
        }
        else {
            if (this.visible) {
                this.fivDisappear.emit(event);
                this.visible = false;
            }
        }
    };
    /**
     * @return {?}
     */
    ViewportDirective.prototype.isVisible = /**
     * @return {?}
     */
    function () {
        return this.visible;
    };
    ViewportDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[fivViewport]',
                    exportAs: 'viewport'
                },] }
    ];
    /** @nocollapse */
    ViewportDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    ViewportDirective.propDecorators = {
        offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivAppear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivDisappear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ViewportDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PullDirective = /** @class */ (function () {
    function PullDirective(element, content) {
        this.element = element;
        this.content = content;
        this.minPullHeight = 112;
        this.maxPullHeight = 168;
        this.enabled = true;
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivPull = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    PullDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.content.scrollEvents = true;
        this.content.getScrollElement().then(function (s) {
            _this.scrollY = s; // needed for scrollTop
            _this.setupPanListener();
        });
    };
    /**
     * @private
     * @return {?}
     */
    PullDirective.prototype.setupPanListener = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var touchstart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.element.nativeElement, 'touchstart');
        /** @type {?} */
        var touchmove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.element.nativeElement, 'touchmove');
        /** @type {?} */
        var touchend$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.element.nativeElement, 'touchend');
        /** @type {?} */
        var touchcancel$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.element.nativeElement, 'touchcancel');
        /** @type {?} */
        var end$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(touchend$, touchcancel$);
        /** @type {?} */
        var dragAtTop = touchstart$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (e) { return _this.scrollY.scrollTop === 0 && _this.enabled; }));
        /** @type {?} */
        var dragTopDown = dragAtTop
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (start) {
            /** @type {?} */
            var startY = start.touches[0].pageY;
            return touchmove$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (move) {
                /** @type {?} */
                var currentY = move.touches[0].pageY;
                return {
                    startEvent: start,
                    moveEvent: move,
                    startY: startY,
                    currentY: currentY,
                    offset: currentY - startY
                };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["skipWhile"])(function (drag) { return drag.offset < 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(end$));
        }));
        dragTopDown.forEach(function (drags) {
            drags.forEach(function (drag) {
                drag.moveEvent.preventDefault();
                /** @type {?} */
                var offset = drag.offset / 2;
                if (offset < 0 || offset > _this.maxPullHeight) {
                    return;
                }
                if (offset <= _this.maxPullHeight) ;
                _this.fivPull.emit(offset / _this.maxPullHeight);
            });
            drags
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["last"])())
                .subscribe(function (drag) {
                /** @type {?} */
                var offset = drag.offset / 2;
                /** @type {?} */
                var refresh = offset >= _this.minPullHeight;
                if (refresh) {
                    _this.fivRefresh.emit();
                }
                else {
                    _this.fivCancel.emit();
                }
            });
        });
    };
    PullDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[fivPull]'
                },] }
    ];
    /** @nocollapse */
    PullDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Content"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
    ]; };
    PullDirective.propDecorators = {
        minPullHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxPullHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivPull: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return PullDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IconComponent = /** @class */ (function () {
    function IconComponent() {
        this._indicatorValue = -1;
        this.state = 'normal';
        this.transitionDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.indicatorState = 'scale';
        this.indicatorValueState = 'scale';
    }
    Object.defineProperty(IconComponent.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this._name;
        },
        set: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            if (this._name) {
                this.transform(name);
            }
            else {
                this._name = name;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "indicatorValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._indicatorValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.transformIndicator(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} name
     * @return {?}
     */
    IconComponent.prototype.transform = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.temp = name;
        this.state = 'rotate';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    IconComponent.prototype.transformIndicator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === -1) {
            this._indicatorValue = value;
            this.indicatorState = 'scale';
            this.indicatorValueState = 'scale';
        }
        else if (value === 0) {
            this.tempValue = value;
            this.indicatorState = 'normal';
            this.indicatorValueState = 'scale';
        }
        else {
            this.indicatorState = 'scale';
            if (this.indicatorValueState === 'scale') {
                this.indicatorValueState = 'normal';
                this._indicatorValue = value;
            }
            else {
                this.tempValue = value;
                this.indicatorValueState = 'scale';
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IconComponent.prototype.rotateAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState === 'normal' && event.toState === 'rotate') {
            this._name = this.temp;
            this.state = 'normal';
        }
        if (event.fromState === 'rotate' && event.toState === 'normal') {
            this.transitionDone.emit(this._name);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IconComponent.prototype.incrementDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState === 'normal' && event.toState === 'scale') {
            if (this.tempValue > 0) {
                this.indicatorValueState = 'normal';
                this._indicatorValue = this.tempValue;
            }
            else {
                this._indicatorValue = this.tempValue;
            }
        }
    };
    IconComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-icon',
                    template: "<ion-icon [@rotateAnim]=\"state\" (@rotateAnim.done)=\"rotateAnimDone($event)\" [name]=\"_name\" [color]=\"color\"></ion-icon>\n<span [@scaleAnim]=\"indicatorState\" class=\"indicator\"></span>\n<span *ngIf=\"_indicatorValue > -1\" class=\"indicator-background\">\n</span>\n<span [@scaleAnim]=\"indicatorValueState\" (@scaleAnim.done)=\"incrementDone($event)\" class=\"indicator-value\"><span *ngIf=\"indicatorValue <= 9\">{{indicatorValue}}</span><span *ngIf=\"indicatorValue > 9\">9+</span></span>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => rotate', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('rotate => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'scale(0) rotateZ(45deg)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'scale(1) rotateZ(0deg)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scaleAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'scale(0)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'scale(1)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => scale', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('scale => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('scale', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'scale(0)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'scale(1)' }))
                        ])
                    ],
                    styles: [":host{display:contents;--fiv-padding-end:0;--fiv-padding-start:0;--fiv-color-icon:inherit}ion-icon{margin:0;font-size:1.8em;color:var(--fiv-color-icon);padding-right:var(--fiv-padding-end);padding-left:var(--fiv-padding-start)}.indicator{position:absolute;width:var(--fiv-dot-width,8px);height:var(--fiv-dot-heigt,8px);background-color:var(--fiv-dot-color,var(--fiv-color-indicator,--ion-color-primary));top:4px;border-radius:100%;right:8px;z-index:12}.indicator-value{position:absolute;min-width:var(--fiv-dot-width,14px);height:var(--fiv-dot-heigt,14px);background-color:var(--fiv-dot-color,var(--ion-color-primary));color:var(--fiv-dot-color-background,var(--ion-color-light));top:0;border-radius:14px;right:4px;z-index:13}.indicator-value *{position:absolute;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);left:50%;top:50%;font-size:.6em}.indicator-background{position:absolute;width:var(--fiv-dot-width,10px);height:var(--fiv-dot-heigt,10px);background-color:var(--fiv-dot-color-background,transparent);top:3px;border-radius:100%;right:7px;z-index:11}"]
                }] }
    ];
    /** @nocollapse */
    IconComponent.ctorParameters = function () { return []; };
    IconComponent.propDecorators = {
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        transitionDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        indicatorValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return IconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.verticalAlign = 'center';
        this.animation = 'fade';
        this.visible = false;
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(DialogComponent.prototype, "isVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.visible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.visible = true;
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.visible = false;
    };
    DialogComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-dialog',
                    template: "<div class=\"host\" [ngClass]=\"{'bottom': verticalAlign === 'bottom','center': verticalAlign === 'center', 'top': verticalAlign === 'top'}\">\n    <div (click)=\"close()\" *ngIf=\"visible && backdrop\" class=\"backdrop\"></div>\n  </div>\n  <div [@dialogAnim]=\"visible ? verticalAlign : verticalAlign + '-' + animation\" class=\"dialog\">\n    <ng-content></ng-content>\n  </div>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('dialogAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('bottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ bottom: 0 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('top', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ top: 0 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                top: '50%',
                                transform: 'translateY(-50%)'
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('bottom-slide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ bottom: 0, transform: 'translateY(100%)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('top-slide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ top: 0, transform: 'translateY(-100%)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('center-slide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ bottom: 0, transform: 'translateY(100%)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('bottom-fade', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ bottom: 0, opacity: 0 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('top-fade', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ top: 0, opacity: 0, display: 'none' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('center-fade', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                top: '50%',
                                transform: 'translateY(-50%)',
                                opacity: 0
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in')
                            ])
                        ])
                    ],
                    styles: [".host{display:block;position:absolute;width:100%;z-index:5001}.host .backdrop{position:absolute;width:100%;height:100vh;background:rgba(0,0,0,.15)}.host.bottom,.host.bottom .backdrop{bottom:0}.host.center,.host.center .backdrop,.host.top,.host.top .backdrop{top:0}.dialog{position:absolute;width:100%;min-height:112px;z-index:5002}"]
                }] }
    ];
    /** @nocollapse */
    DialogComponent.ctorParameters = function () { return []; };
    DialogComponent.propDecorators = {
        verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        isVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.visible',] }]
    };
    return DialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AppBarTabContentComponent = /** @class */ (function () {
    function AppBarTabContentComponent(nav) {
        this.nav = nav;
        this.active = false;
        this.titleLayout = 'hide';
    }
    Object.defineProperty(AppBarTabContentComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return "label-" + this.titleLayout;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AppBarTabContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AppBarTabContentComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.nav.navigateRoot(this.href);
    };
    AppBarTabContentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-app-bar-tab-content',
                    template: "<fiv-ripple (fivClick)=\"onClick()\" class=\"tab\" [ngClass]=\"{'active': active}\">\n  <fiv-icon [name]=\"icon\"></fiv-icon>\n  <ion-label>{{name}}</ion-label>\n</fiv-ripple>",
                    styles: [":host{width:50%;height:100%;display:inline-block;position:relative}:host fiv-ripple{width:100%;height:100%;display:flex;position:relative;flex-direction:column;align-items:center;justify-content:center}:host fiv-icon{display:block;order:-1}:host ion-label{order:0}:host .tab.active{--fiv-color-icon:var(--ion-color-primary)}:host .tab.active ion-label{color:var(--ion-color-primary)}:host(.label-hide) ion-label{display:none}:host(.label-active-only) fiv-ripple:not(.active) ion-label{display:none}"]
                }] }
    ];
    /** @nocollapse */
    AppBarTabContentComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    AppBarTabContentComponent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        href: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        titleLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }]
    };
    return AppBarTabContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageViewerComponent = /** @class */ (function () {
    function ImageViewerComponent(componentFactoryResolver, appRef, domCtrl, platform, renderer, change, animation, sanitizer, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.domCtrl = domCtrl;
        this.platform = platform;
        this.renderer = renderer;
        this.change = change;
        this.animation = animation;
        this.sanitizer = sanitizer;
        this.injector = injector;
        this.pullDistance = 150;
        this.actions = [];
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isOpen = false;
        this._controlsVisible = true;
        this.thumbnailVisible = true;
        this.scale = 1;
    }
    Object.defineProperty(ImageViewerComponent.prototype, "myStyle", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._isOpen) {
                return this.sanitizer.bypassSecurityTrustStyle("height: 100%; width: 100%; display: block;");
            }
            else {
                return this.sanitizer.bypassSecurityTrustStyle("height: " + this.height + "px; width: " + this.width + "px; display: block;");
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageViewerComponent.prototype.open = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.appendComponentToBody(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageViewerComponent.prototype.getPosition = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var bounds = this.thumbnail.nativeElement.getBoundingClientRect();
        return { offsetTop: bounds.top, offsetLeft: bounds.left, height: event.srcElement.clientHeight, width: event.srcElement.clientWidth };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageViewerComponent.prototype.appendComponentToBody = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory(ImageViewerComponent)
            .create(this.injector);
        this.thumbnailVisible = false;
        this.componentRef.instance._isOpen = true;
        this.componentRef.instance.src = this.src;
        this.componentRef.instance.componentRef = this.componentRef;
        this.componentRef.instance.thumbnailPosition = this.getPosition(event);
        this.width = this.componentRef.instance.thumbnailPosition.width;
        this.height = this.componentRef.instance.thumbnailPosition.height;
        this.componentRef.instance.actions = this.actions;
        this.closeSub = this.componentRef.instance.fivClose
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(function () {
            _this.closeSub.unsubscribe();
            _this.thumbnailVisible = true;
        });
        this.appRef.attachView(this.componentRef.hostView);
        /** @type {?} */
        var domElem = (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView)))
            .rootNodes[0]));
        document.body.appendChild(domElem);
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.remove = /**
     * @return {?}
     */
    function () {
        if (!this.thumbnailPosition.panTop) {
            this.thumbnailPosition.panTop = this.top + 'px';
            this.change.detectChanges();
        }
        this._isOpen = false;
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.clearSubscriptions = /**
     * @return {?}
     */
    function () {
        this.panRemove.unsubscribe();
        this.panReset.unsubscribe();
        this.verticalPan.unsubscribe();
        this.pinch.unsubscribe();
        this.pinchend.unsubscribe();
        this.singletap.unsubscribe();
        this.doubletap.unsubscribe();
        this.pinchPan.unsubscribe();
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.removeHammerManager = /**
     * @return {?}
     */
    function () {
        this.singletapHammer.destroy();
        this.doubleTapHammer.destroy();
        this.pinchHammer.destroy();
        this.panHammer.destroy();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageViewerComponent.prototype.detach = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'void') {
            this.appRef.detachView(this.componentRef.hostView);
            this.clearSubscriptions();
            this.removeHammerManager();
            this.fivClose.emit();
            this.componentRef.destroy();
        }
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.resetPosition = /**
     * @return {?}
     */
    function () {
        this.top = this.platform.height() / 2;
        this.left = 0;
        this.pinchCenter = { x: this.platform.width() / 2, y: this.platform.height() / 2 };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageViewerComponent.prototype.onEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState === 'void') {
            // setup variables in fullscreen
            this.resetPosition();
            this.setupClicks();
            this.setupPan();
            this.setupPinch();
        }
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.setupClicks = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.doubleTapHammer = new hammerjs__WEBPACK_IMPORTED_MODULE_6__(this.imageView.nativeElement);
        this.doubleTapHammer.get('tap').set({ enable: true, taps: 2 });
        this.singletapHammer = new hammerjs__WEBPACK_IMPORTED_MODULE_6__(this.imageView.nativeElement);
        this.singletapHammer.get('tap').set({ enable: true, taps: 1 });
        /** @type {?} */
        var doubletap$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.doubleTapHammer, 'tap');
        /** @type {?} */
        var singletap$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.singletapHammer, 'tap')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(doubletap$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event.tapCount === 1; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["repeat"])());
        this.doubletap = doubletap$.subscribe(function (res) { return _this.handleDoubleTap(res); });
        this.singletap = singletap$.subscribe(function (res) { return _this.handleSingleTap(); });
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.setupPinch = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.pinchHammer = new hammerjs__WEBPACK_IMPORTED_MODULE_6__(this.imageView.nativeElement);
        this.pinchHammer.get('pinch').set({ enable: true });
        /** @type {?} */
        var pinchend$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.pinchHammer, 'pinchend');
        this.pinchend = pinchend$.subscribe(function (event) {
            _this.scale = Math.max(0, Math.min(_this.scale * event.scale, 8));
            if (_this.scale < 1) {
                _this.resetScale();
            }
        });
        /** @type {?} */
        var pinch$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.pinchHammer, 'pinch');
        this.pinch = pinch$
            .subscribe(function (event) {
            _this.pinchCenter = event.center;
            _this.transform(event.scale);
            _this.move(event);
        });
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.setupPan = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // close pans
        /** @type {?} */
        var pullDistance = 120;
        this.panHammer = new hammerjs__WEBPACK_IMPORTED_MODULE_6__(this.imageView.nativeElement);
        this.panHammer.get('pan').set({ enable: true, direction: hammerjs__WEBPACK_IMPORTED_MODULE_6__["DIRECTION_ALL"] });
        /** @type {?} */
        var panstart = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.panHammer, 'panstart');
        /** @type {?} */
        var panend = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.panHammer, 'panend');
        /** @type {?} */
        var panmove = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.panHammer, 'panmove');
        /** @type {?} */
        var pandown = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.panHammer, 'pandown');
        /** @type {?} */
        var panup = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.panHammer, 'panup');
        /** @type {?} */
        var down = panstart
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(function () { return pandown.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function () { return _this.scale === 1; })); }));
        /** @type {?} */
        var up = panstart
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(function () { return panup.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function () { return _this.scale === 1; })); }));
        /** @type {?} */
        var verticalPan$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(up, down);
        this.verticalPan = verticalPan$.subscribe(function (res) {
            _this.setBottom(_this.calculateBottom(res));
            _this.setTop(_this.calculateTop(res));
        });
        /** @type {?} */
        var pinchPanMove = panmove
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function () { return _this.scale > 1; }));
        /** @type {?} */
        var pinchPan$ = panstart
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (event) { return _this.pinchCenter = event.center; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(function () { return pinchPanMove; }));
        this.pinchPan = pinchPan$
            .subscribe(function (res) {
            _this.move(res);
        });
        this.panRemove = panend
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return _this.scale === 1 && event.distance > pullDistance && event.maxPointers === 1; }))
            .subscribe(function () { _this.remove(); });
        this.panReset = panend
            .pipe(
        // tslint:disable-next-line:max-line-length
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return _this.scale === 1 && event.distance <= pullDistance || _this.scale === 1 && event.distance > pullDistance && event.maxPointers > 1; }))
            .subscribe(function (event) {
            _this.resetPan();
            _this.resetFooter(_this.calculateBottom(event));
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageViewerComponent.prototype.move = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.pinchCenter) {
            this.pinchCenter = event.center;
        }
        /** @type {?} */
        var moveV = event.center.y - this.pinchCenter.y;
        /** @type {?} */
        var moveH = event.center.x - this.pinchCenter.x;
        this.pinchCenter = event.center;
        /** @type {?} */
        var newX = this.restrictRawPosX(this.left + moveH);
        /** @type {?} */
        var newY = this.restrictRawPosY(this.top + moveV);
        this.setTop(newY);
        this.setLeft(newX);
    };
    /**
     * @param {?} pos
     * @return {?}
     */
    ImageViewerComponent.prototype.restrictRawPosX = /**
     * @param {?} pos
     * @return {?}
     */
    function (pos) {
        /** @type {?} */
        var viewportDim = this.platform.width();
        /** @type {?} */
        var imageWidth = this.getCurrentImageWidth() / this.scale;
        /** @type {?} */
        var borderPos = (this.getCurrentImageWidth() - Math.min(viewportDim, imageWidth)) / 2;
        if (pos < borderPos * -1) {
            return borderPos * -1;
        }
        else if (pos > borderPos) {
            return borderPos;
        }
        return pos;
    };
    /**
     * @param {?} pos
     * @return {?}
     */
    ImageViewerComponent.prototype.restrictRawPosY = /**
     * @param {?} pos
     * @return {?}
     */
    function (pos) {
        /** @type {?} */
        var viewportDim = this.platform.height();
        /** @type {?} */
        var imageHeight = this.getCurrentImageHeight() / this.scale;
        /** @type {?} */
        var offset = this.platform.height() / 2;
        /** @type {?} */
        var borderPos = pos;
        if (this.getCurrentImageHeight() > this.platform.height()) {
            borderPos = (this.getCurrentImageHeight() - Math.max(viewportDim, imageHeight)) / 2;
        }
        else {
            borderPos = (this.getCurrentImageHeight() - Math.min(viewportDim, imageHeight)) / 2;
        }
        if (pos < borderPos * -1 + offset) {
            return borderPos * -1 + offset;
        }
        else if (pos > borderPos + offset) {
            return borderPos + offset;
        }
        return pos;
    };
    /**
     * @param {?} bottom
     * @return {?}
     */
    ImageViewerComponent.prototype.setBottom = /**
     * @param {?} bottom
     * @return {?}
     */
    function (bottom) {
        var _this = this;
        if (this._controlsVisible) {
            this.domCtrl.write(function () {
                _this.renderer.setStyle(_this.footer.nativeElement, 'bottom', "-" + bottom + "px");
            });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageViewerComponent.prototype.calculatePanProgress = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var pullDistance = 120;
        return Math.abs(100 * event.distance / pullDistance);
    };
    /**
     * @param {?} scale
     * @return {?}
     */
    ImageViewerComponent.prototype.transform = /**
     * @param {?} scale
     * @return {?}
     */
    function (scale) {
        /** @type {?} */
        var s = Math.max(0, Math.min(this.scale * scale, 8));
        this.setScale(s, true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageViewerComponent.prototype.calculateBottom = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var progress = this.calculatePanProgress(event);
        return event.distance * progress / 100;
    };
    /**
     * @param {?} scale
     * @param {?=} skip
     * @return {?}
     */
    ImageViewerComponent.prototype.setScale = /**
     * @param {?} scale
     * @param {?=} skip
     * @return {?}
     */
    function (scale, skip) {
        var _this = this;
        if (!skip) {
            this.scale = scale;
        }
        this.domCtrl.write(function () {
            _this.renderer.setStyle(_this.imageView.nativeElement, 'transform', "translateY(-50%) scale(" + scale + ")");
        });
    };
    /**
     * @param {?} top
     * @return {?}
     */
    ImageViewerComponent.prototype.setTop = /**
     * @param {?} top
     * @return {?}
     */
    function (top) {
        var _this = this;
        this.top = top;
        this.thumbnailPosition.panTop = this.top + 'px';
        this.domCtrl.write(function () {
            _this.renderer.setStyle(_this.imageView.nativeElement, 'top', top + "px");
        });
    };
    /**
     * @param {?} left
     * @return {?}
     */
    ImageViewerComponent.prototype.setLeft = /**
     * @param {?} left
     * @return {?}
     */
    function (left) {
        var _this = this;
        this.left = left;
        this.domCtrl.write(function () {
            _this.renderer.setStyle(_this.imageView.nativeElement, 'left', left + "px");
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageViewerComponent.prototype.calculateTop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var distance = event.distance;
        /** @type {?} */
        var progress = Math.abs(100 * distance / this.pullDistance);
        if (progress <= 100) {
            return this.platform.height() / 2 + distance;
        }
        else if (progress >= 100 && progress < 200) {
            return this.platform.height() / 2 + this.pullDistance + this.pullDistance / 2 * (progress - 100) / 100;
        }
        else {
            return this.platform.height() / 2 + this.pullDistance + this.pullDistance / 2;
        }
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.resetPan = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var reset = this.animation.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ top: this.top + "px" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ top: this.platform.height() / 2 + "px" }))
        ]);
        /** @type {?} */
        var animation = reset.create(this.imageView.nativeElement);
        animation.play();
        animation.onDone(function () {
            animation.destroy();
            _this.setTop(_this.platform.height() / 2);
        });
    };
    /**
     * @param {?} start
     * @return {?}
     */
    ImageViewerComponent.prototype.resetFooter = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        var _this = this;
        if (!this._controlsVisible) {
            this.setBottom(0);
            return;
        }
        /** @type {?} */
        var reset = this.animation.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ bottom: "-" + start + "px" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ bottom: "0px" }))
        ]);
        /** @type {?} */
        var animation = reset.create(this.footer.nativeElement);
        animation.play();
        animation.onDone(function () {
            animation.destroy();
            _this.setBottom(0);
        });
    };
    /**
     * @param {?} toScale
     * @param {?} toPosition
     * @return {?}
     */
    ImageViewerComponent.prototype.animateScale = /**
     * @param {?} toScale
     * @param {?} toPosition
     * @return {?}
     */
    function (toScale, toPosition) {
        var _this = this;
        // const deltaX = this.pinchCenter.x - toPosition.x;
        // const deltaY = this.pinchCenter.y - toPosition.y;
        /** @type {?} */
        var deltaX = (this.pinchCenter.x - toPosition.x) * toScale;
        /** @type {?} */
        var deltaY = (this.pinchCenter.y - toPosition.y) * toScale;
        /** @type {?} */
        var newLeft = this.left + deltaX / toScale;
        /** @type {?} */
        var newTop = this.top + deltaY / toScale;
        /** @type {?} */
        var scale = this.animation.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: "translateY(-50%) scale(" + this.scale + ")", top: this.top + "px", left: this.left + "px" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: "translateY(-50%) scale(" + toScale + ")", top: newTop + "px", left: newLeft + "px" }))
        ]);
        /** @type {?} */
        var animation = scale.create(this.imageView.nativeElement);
        animation.play();
        animation.onDone(function () {
            animation.destroy();
            _this.setScale(toScale);
            _this.setTop(newTop);
            _this.setLeft(newLeft);
            _this.pinchCenter = toPosition;
        });
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.resetScale = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var t = this.platform.height() / 2;
        /** @type {?} */
        var scale = this.animation.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: "translateY(-50%) scale(" + this.scale + ")", top: this.top + "px", left: this.left + "px" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: "translateY(-50%) scale(" + 1 + ")", top: t + "px", left: 0 + "px" }))
        ]);
        /** @type {?} */
        var animation = scale.create(this.imageView.nativeElement);
        animation.play();
        animation.onDone(function () {
            animation.destroy();
            _this.setScale(1);
            _this.setTop(t);
            _this.setLeft(0);
            _this.pinchCenter = _this.getAbsoluteCenter();
        });
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.handleSingleTap = /**
     * @return {?}
     */
    function () {
        this._controlsVisible = !this._controlsVisible;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageViewerComponent.prototype.handleDoubleTap = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.scale === 1) {
            this.animateScale(2, event.center);
        }
        else {
            this.resetScale();
        }
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.getCurrentImageHeight = /**
     * @return {?}
     */
    function () {
        return this.imageView.nativeElement.clientHeight * this.scale;
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.getCurrentImageWidth = /**
     * @return {?}
     */
    function () {
        return this.imageView.nativeElement.clientWidth * this.scale;
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.getAbsoluteCenter = /**
     * @return {?}
     */
    function () {
        return { x: this.platform.width() / 2, y: this.platform.height() / 2 };
    };
    ImageViewerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-image-viewer',
                    template: "<img class=\"thumbnail\" [width]=\"width\" [height]=\"height\" #thumbnail *ngIf=\"thumbnailVisible\" (click)=\"open($event)\" [src]=\"src\">\n<div #backdrop [@backdrop] (@backdrop.done)=\"onEnter($event)\" *ngIf=\"_isOpen\" class=\"backdrop\">\n  <ion-toolbar [@fade] *ngIf=\"_controlsVisible\" color=\"translucent\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"remove()\">\n        <ion-icon slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div #footer class=\"actions\" [@fade] *ngIf=\"_controlsVisible\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col style=\"text-align: center;\" *ngFor=\"let action of actions; let c = count\" [size]=\"12 / c\">\n          <ion-button color=\"light\" *ngIf=\"action.name\" [fill]=\"'clear'\">\n            <ion-icon *ngIf=\"action.icon\" slot=\"start\" [name]=\"action.icon\"></ion-icon>\n            {{action.name}}\n          </ion-button>\n          <fiv-ripple *ngIf=\"!action.name\">\n            <ion-icon *ngIf=\"action.icon\" [fivCenter] [name]=\"action.icon\"></ion-icon>\n          </fiv-ripple>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</div>\n<img #imageView (@imageLeave.done)=\"detach($event)\" class=\"image-view\" [@imageLeave]=\"{value: ':leave', params : {top: thumbnailPosition.offsetTop, left: thumbnailPosition.offsetLeft, height: thumbnailPosition.height, width: thumbnailPosition.width, panTop: thumbnailPosition.panTop}}\"\n  [@imageEnter]=\"{value: ':enter', params : {top: thumbnailPosition.offsetTop, left: thumbnailPosition.offsetLeft, height: thumbnailPosition.height, width: thumbnailPosition.width}}\"\n  *ngIf=\"thumbnailPosition && _isOpen\" [src]=\"src\">",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('backdrop', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                                // tslint:disable-next-line:max-line-length
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('75ms 125ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                                // tslint:disable-next-line:max-line-length
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('imageEnter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                                // tslint:disable-next-line:max-line-length
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: '{{top}}px', left: '{{left}}px', transform: 'translate(0,0)', height: '{{height}}px', width: '{{width}}px' }),
                                // tslint:disable-next-line:max-line-length
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', height: 'auto', width: '100%' }))
                            ], { params: { top: '0px', left: '0px', height: '*', width: '*' } })
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('imageLeave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: '{{panTop}}', left: '50%', transform: 'translate(-50%,-50%)', height: 'auto', width: '100%' }),
                                // tslint:disable-next-line:max-line-length
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: '{{top}}px', left: '{{left}}px', transform: 'translate(0,0)', height: '{{height}}px', width: '{{width}}px' }))
                            ], { params: { top: '0px', left: '0px', height: '*', width: '*', panTop: '50%' } })
                        ])
                    ],
                    styles: [":host{display:block;position:relative}.thumbnail{height:auto}.backdrop{position:absolute;width:100vw;height:100vh;background:rgba(0,0,0,.87);top:0;left:0}.backdrop ion-icon{color:var(--ion-color-light)}.image-view{width:100%;height:auto;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:0}.actions{z-index:5000;--ion-grid-padding:0px;--ion-grid-column-padding:0px;position:fixed;bottom:0;left:0;width:100%;height:56px}.actions fiv-ripple{height:56px}.actions ion-icon{font-size:1.8em}"]
                }] }
    ];
    /** @nocollapse */
    ImageViewerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
    ]; };
    ImageViewerComponent.propDecorators = {
        myStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style',] }],
        thumbnail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['thumbnail',] }],
        imageView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['imageView',] }],
        footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['footer',] }],
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pullDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        actions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ImageViewerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.state = this.small ? 'small' : 'normal';
    };
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype.shrink = /**
     * @return {?}
     */
    function () {
        this.state = 'small';
    };
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype.grow = /**
     * @return {?}
     */
    function () {
        this.state = 'normal';
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ToolbarSearchComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype.openSearchbar = /**
     * @return {?}
     */
    function () {
        if (this.small) {
            this.state = 'normal';
            return;
        }
        this._open();
    };
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype.toggleSearchbar = /**
     * @return {?}
     */
    function () {
        if (this.searching) {
            this.closeSearchbar();
        }
        else {
            this.openSearchbar();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ToolbarSearchComponent.prototype.searchBarStateChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log('searchbarState', event);
        if (event.fromState === 'normal' && event.toState === 'small') ;
        if (event.fromState === 'small' && event.toState === 'normal') {
            this._open();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ToolbarSearchComponent.prototype._open = /**
     * @private
     * @return {?}
     */
    function () {
        this.searching = true;
        this.titleVisible = false;
        this.open.emit();
    };
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype.closeSearchbar = /**
     * @return {?}
     */
    function () {
        if (this.small) {
            this.state = 'small';
        }
        this.searching = false;
        this.fivClose.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ToolbarSearchComponent.prototype.searchAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log('###', event);
        if (event.fromState !== 'void') {
            this.closeButtonVisible = true;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ToolbarSearchComponent.prototype.closeAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log('###', event);
        if (event.fromState !== 'void') {
            this.searching = false;
        }
    };
    /**
     * @param {?} event
     * @param {?} input
     * @return {?}
     */
    ToolbarSearchComponent.prototype.seachbarAnimDone = /**
     * @param {?} event
     * @param {?} input
     * @return {?}
     */
    function (event, input) {
        console.log('!!!', event);
        if (event.fromState !== 'void') {
            this.titleVisible = true;
        }
        else {
            input.focus();
        }
    };
    ToolbarSearchComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-toolbar-search',
                    template: "<ion-toolbar [@searchbarAnim]=\"small ? state : 'normal'\" (@searchbarAnim.done)=\"searchBarStateChange($event)\" [color]=\"color\" [ngClass]=\"{'small': state === 'small'}\">\n  <ion-buttons slot=\"start\">\n    <ng-content select=\"[start]\"></ng-content>\n\n  </ion-buttons>\n  <ion-title [@titleAnim] *ngIf=\"titleVisible\">{{title}}</ion-title>\n  <ion-input (ionChange)=\"fivInputChange.emit($event)\" [placeholder]=\"!titleVisible ? placeholder : ''\" autofocus #input class=\"toolbar-searchbar\"\n    [@titleAnim] (@titleAnim.done)=\"seachbarAnimDone($event,input)\" *ngIf=\"searching\">\n  </ion-input>\n\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"toggleSearchbar()\">\n      <fiv-icon [name]=\"searching ? 'md-close' : 'md-search'\"></fiv-icon>\n    </ion-button>\n    <!-- <ion-button [@rotateAnim] (@rotateAnim.done)=\"searchAnimDone($event)\" *ngIf=\"!searching\" (click)=\"toggleSearchbar()\">\n      <ion-icon style=\"transform: matrix(-1, 0, 0, 1, 0, 0);\" name=\"md-search\"></ion-icon>\n    </ion-button>\n    <ion-button [@rotateAnim] (@rotateAnim.done)=\"closeAnimDone($event)\" *ngIf=\"closeButtonVisible\" (click)=\"closeSearchbar()\">\n      <ion-icon name=\"md-close\"></ion-icon>\n    </ion-button> -->\n    <ng-content select=\"[end]\"></ng-content>\n\n  </ion-buttons>\n</ion-toolbar>",
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
                    styles: [":host{position:relative;display:block;width:100%}ion-toolbar{box-shadow:0 1px 4px rgba(0,0,0,.25);transition:border-bottom-right-radius 85ms}ion-toolbar.small{border-bottom-right-radius:12px}.toolbar-searchbar{float:right}"]
                }] }
    ];
    /** @nocollapse */
    ToolbarSearchComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    ToolbarSearchComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        small: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ToolbarSearchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(navParams, popoverController) {
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.buttons = [];
        this.buttons = navParams.get('buttons');
    }
    /**
     * @return {?}
     */
    PopoverComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} i
     * @return {?}
     */
    PopoverComponent.prototype.onItemClicked = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.popoverController.dismiss({ index: i });
    };
    PopoverComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-popover',
                    template: "<ion-content>\n  <ion-item (click)=\"onItemClicked(i)\" class=\"popover-item\" *ngFor=\"let button of buttons; let i = index\">\n    <ion-icon slot=\"start\" [name]=\"button.icon\"></ion-icon>\n    <ion-label>{{button.text}}</ion-label>\n  </ion-item>\n</ion-content>",
                    styles: [".popover-item{--border-style:none}.popover-item:hover{--background:rgb(240, 240, 240);cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    PopoverComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    return PopoverComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-button',
                    template: "<ion-button>\n  <fiv-icon [name]=\"icon\"></fiv-icon>\n  {{text}}\n</ion-button>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FivButtonsComponent = /** @class */ (function () {
    function FivButtonsComponent(platform, popoverController, actionSheetController) {
        this.platform = platform;
        this.popoverController = popoverController;
        this.actionSheetController = actionSheetController;
        this.slot = 'end';
        this.count = 0;
        this.forceActionsheet = false;
        this.forcePopover = false;
        this.iconsOnly = true;
    }
    /**
     * @return {?}
     */
    FivButtonsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FivButtonsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        console.log('###', this.buttons.length);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FivButtonsComponent.prototype.onMenuClicked = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.forceActionsheet) {
            this.presentActionSheet(event);
            return;
        }
        if (this.forcePopover) {
            this.presentPopover(event);
            return;
        }
        if (this.platform.is('mobile')) {
            this.presentActionSheet(event);
        }
        else {
            this.presentPopover(event);
        }
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    FivButtonsComponent.prototype.presentPopover = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_10__["__awaiter"])(this, void 0, void 0, function () {
            var popover, result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_10__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: PopoverComponent,
                            event: ev,
                            translucent: false,
                            componentProps: {
                                'buttons': this.buttons.toArray().slice(this.count),
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, popover.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        if (result && result.data && (result.data.index || result.data.index === 0)) {
                            this.onButtonClicked(result.data.index + this.count);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    FivButtonsComponent.prototype.presentActionSheet = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_10__["__awaiter"])(this, void 0, void 0, function () {
            var buttons, actionSheet;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_10__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttons = [];
                        this.buttons.toArray().slice(this.count)
                            .forEach(function (button, index) {
                            buttons.push({
                                text: button.text,
                                icon: button.icon,
                                handler: function () {
                                    _this.onButtonClicked(_this.count + index);
                                }
                            });
                        });
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: this.header,
                                subHeader: this.subHeader,
                                buttons: buttons
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} i
     * @return {?}
     */
    FivButtonsComponent.prototype.onButtonClicked = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.buttons.toArray()[i].click.emit();
    };
    FivButtonsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-buttons',
                    template: "<ion-buttons *ngIf=\"buttons\" [slot]=\"slot\">\n  <fiv-button *ngIf=\"(slot === 'start' || slot ==='primary') && count < buttons.length\" (click)=\"onMenuClicked($event)\" [icon]=\"'md-more'\"></fiv-button>\n  <ng-container *ngIf=\"iconsOnly\">\n    <fiv-button (click)=\"onButtonClicked(i)\" [icon]=\"button.icon\" *ngFor=\"let button of buttons.toArray() |\u00A0slice:0:count; let i = index;\"></fiv-button>\n  </ng-container>\n  <ng-container *ngIf=\"!iconsOnly\">\n    <fiv-button (click)=\"onButtonClicked(i)\" [icon]=\"button.icon\" [text]=\"button.text\" *ngFor=\"let button of buttons.toArray() |\u00A0slice:0:count; let i = index;\"></fiv-button>\n  </ng-container>\n  <fiv-button *ngIf=\"(slot === 'end' || slot ==='secondary') && count < buttons.length\" (click)=\"onMenuClicked($event)\" [icon]=\"'md-more'\"></fiv-button>\n</ion-buttons>",
                    styles: [":host{display:contents}"]
                }] }
    ];
    /** @nocollapse */
    FivButtonsComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
    ]; };
    FivButtonsComponent.propDecorators = {
        slot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        forceActionsheet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        forcePopover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        iconsOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        buttons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [ButtonComponent,] }]
    };
    return FivButtonsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExpandableIndicatorComponent = /** @class */ (function () {
    function ExpandableIndicatorComponent(expandable) {
        this.expandable = expandable;
        this.icon = 'ios-arrow-down';
    }
    /**
     * @return {?}
     */
    ExpandableIndicatorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ExpandableIndicatorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-expandable-indicator',
                    template: "<ion-icon class=\"indicator\" [ngClass]=\"{'rotate': expandable.isOpen}\" [name]=\"icon\"></ion-icon>",
                    styles: [":host{display:contents}.indicator{transition:125ms}.indicator.rotate{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}"]
                }] }
    ];
    /** @nocollapse */
    ExpandableIndicatorComponent.ctorParameters = function () { return [
        { type: ExpandableComponent }
    ]; };
    ExpandableIndicatorComponent.propDecorators = {
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ExpandableIndicatorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyHammerConfig = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_10__["__extends"])(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = (/** @type {?} */ ({
            pan: { direction: hammerjs__WEBPACK_IMPORTED_MODULE_6__["Hammer"].DIRECTION_VERTICAL, threshold: 3 },
        }));
        return _this;
    }
    return MyHammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["HammerGestureConfig"]));
var FivethreeCoreModule = /** @class */ (function () {
    function FivethreeCoreModule() {
    }
    FivethreeCoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]
                    ],
                    declarations: [
                        ExpandableComponent,
                        PasswordComponent,
                        StepperComponent,
                        StepComponent,
                        StepHeaderComponent,
                        StepContentComponent,
                        RouterItemComponent,
                        CenterDirective,
                        CollapsableMenuButtonComponent,
                        CollapsableMenuDirective,
                        BottomSheetComponent,
                        BottomSheetContentComponent,
                        ToolbarSearchComponent,
                        LoadingButtonComponent,
                        LoadingProgressBarComponent,
                        LoadingContentComponent,
                        LoadingFabComponent,
                        AppBarComponent,
                        IfPlatformDirective,
                        PermissionsDirective,
                        RippleComponent,
                        ViewportDirective,
                        PullDirective,
                        LoadingRefresherContentComponent,
                        LoadingSpinnerComponent,
                        StepperHorizontalComponent,
                        IconComponent,
                        DialogComponent,
                        AppBarTabComponent,
                        AppBarTabContentComponent,
                        ImageViewerComponent,
                        FivButtonsComponent,
                        ButtonComponent,
                        PopoverComponent,
                        ExpandableIndicatorComponent,
                    ],
                    entryComponents: [ImageViewerComponent, PopoverComponent],
                    exports: [
                        ExpandableComponent,
                        PasswordComponent,
                        StepperComponent,
                        StepComponent,
                        StepHeaderComponent,
                        StepContentComponent,
                        RouterItemComponent,
                        CollapsableMenuDirective,
                        CenterDirective,
                        CollapsableMenuButtonComponent,
                        BottomSheetComponent,
                        BottomSheetContentComponent,
                        ToolbarSearchComponent,
                        LoadingButtonComponent,
                        LoadingProgressBarComponent,
                        LoadingContentComponent,
                        LoadingFabComponent,
                        AppBarComponent,
                        IfPlatformDirective,
                        PermissionsDirective,
                        RippleComponent,
                        ViewportDirective,
                        PullDirective,
                        LoadingRefresherContentComponent,
                        LoadingSpinnerComponent,
                        StepperHorizontalComponent,
                        IconComponent,
                        DialogComponent,
                        AppBarTabComponent,
                        AppBarTabContentComponent,
                        ImageViewerComponent,
                        FivButtonsComponent,
                        ButtonComponent,
                        ExpandableIndicatorComponent
                    ]
                },] }
    ];
    return FivethreeCoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml2ZXRocmVlLWNvcmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvc3RlcC9zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwLWhlYWRlci9zdGVwLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwLWNvbnRlbnQvc3RlcC1jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwcGVyLWhvcml6b250YWwvc3RlcHBlci1ob3Jpem9udGFsLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL3JvdXRlci1pdGVtL3JvdXRlci1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9jb2xsYXBzYWJsZS1tZW51L2NvbGxhcHNhYmxlLW1lbnUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2NvbGxhcHNhYmxlLW1lbnUtYnV0dG9uL2NvbGxhcHNhYmxlLW1lbnUtYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvYm90dG9tLXNoZWV0L2RyYXdlci1zdGF0ZS50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9ib3R0b20tc2hlZXQtY29udGVudC9ib3R0b20tc2hlZXQtY29udGVudC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvbG9hZGluZy9sb2FkaW5nLnNlcnZpY2UudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvbG9hZGluZy1wcm9ncmVzcy1iYXIvbG9hZGluZy1wcm9ncmVzcy1iYXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2xvYWRpbmctYnV0dG9uL2xvYWRpbmctYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50L2xvYWRpbmctcmVmcmVzaGVyLWNvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2xvYWRpbmctY29udGVudC9sb2FkaW5nLWNvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2xvYWRpbmctZmFiL2xvYWRpbmctZmFiLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9hcHAtYmFyLXRhYi9hcHAtYmFyLXRhYi5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9kaXJlY3RpdmVzL2lmLXBsYXRmb3JtLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9kaXJlY3RpdmVzL2NlbnRlci5kaXJlY3RpdmUudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZGlyZWN0aXZlcy9wZXJtaXNzaW9ucy5kaXJlY3RpdmUudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvcmlwcGxlL3JpcHBsZS5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZGlyZWN0aXZlcy92aWV3cG9ydC5kaXJlY3RpdmUudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZGlyZWN0aXZlcy9wdWxsLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9pY29uL2ljb24uY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2FwcC1iYXItdGFiLWNvbnRlbnQvYXBwLWJhci10YWItY29udGVudC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvdG9vbGJhci1zZWFyY2gvdG9vbGJhci1zZWFyY2guY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZml2LWJ1dHRvbnMvZml2LWJ1dHRvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2V4cGFuZGFibGUtaW5kaWNhdG9yL2V4cGFuZGFibGUtaW5kaWNhdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9maXZldGhyZWUuY29yZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1zdGVwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBpc0xhc3QgPSBmYWxzZTtcbiAgQElucHV0KCkgb3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBzdWJ0aXRsZSA9ICcnO1xuXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0YXRlLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtc3RlcC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwLWhlYWRlci5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiByb3RhdGUnLCBbXG4gICAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdyb3RhdGUgPT4gbm9ybWFsJywgW1xuICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2UtaW4nKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgncm90YXRlJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGVaKDQ1ZGVnKScgfSkpLFxuICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlWigwZGVnKScgfSkpXG4gIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBpY29uU3RhdGUgPSAnbm9ybWFsJztcbiAgdGVtcEljb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgIHRoaXMudGVtcEljb24gPSB0aGlzLmljb247XG4gICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgdGhpcy5pY29uU3RhdGUgPSAnbm9ybWFsJztcbiAgICB9XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLmljb25TdGF0ZSA9ICdyb3RhdGUnO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pY29uID0gdGhpcy50ZW1wSWNvbjtcbiAgfVxuXG59XG4iLCJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIGtleWZyYW1lcyB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtZXhwYW5kYWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbmRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5kYWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignbGlzdEFuaW0nLCBbXG4gICAgICBzdGF0ZSgnb3BlbicsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIG9wYWNpdHk6IDEgfSkpLFxuICAgICAgc3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnMCcsIG9wYWNpdHk6IDAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignY2xvc2VkID0+IG9wZW4nLCBbXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIGVhc2Utb3V0Jywga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7IGhlaWdodDogJzAnLCBvcGFjaXR5OiAwLCBvZmZzZXQ6IDAgfSksXG4gICAgICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcqJywgb3BhY2l0eTogMC4xLCBvZmZzZXQ6IDAuOCB9KSxcbiAgICAgICAgICBzdHlsZSh7IGhlaWdodDogJyonLCBvcGFjaXR5OiAxLCBvZmZzZXQ6IDEgfSksXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdvcGVuID0+IGNsb3NlZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMjIwbXMgZWFzZS1vdXQnLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnKicsIG9wYWNpdHk6IDEsIG9mZnNldDogMCB9KSxcbiAgICAgICAgICBzdHlsZSh7IGhlaWdodDogJyonLCBvcGFjaXR5OiAwLjEsIG9mZnNldDogMC4yIH0pLFxuICAgICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnMCcsIG9wYWNpdHk6IDAsIG9mZnNldDogMSB9KSxcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5kYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaXNPcGVuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBmaXZXaWxsT3BlbjogRXZlbnRFbWl0dGVyPEV4cGFuZGFibGVDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2RGlkT3BlbjogRXZlbnRFbWl0dGVyPEV4cGFuZGFibGVDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2V2lsbENsb3NlOiBFdmVudEVtaXR0ZXI8RXhwYW5kYWJsZUNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmaXZEaWRDbG9zZTogRXZlbnRFbWl0dGVyPHsgZXhwYW5kYWJsZTogRXhwYW5kYWJsZUNvbXBvbmVudCwgcGFyYW06IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwYXJhbTogYW55O1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2U6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5maXZXaWxsT3Blbi5lbWl0KHRoaXMpO1xuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZShwYXJhbT86IGFueSkge1xuICAgIHRoaXMucGFyYW0gPSBwYXJhbTtcbiAgICB0aGlzLmZpdldpbGxDbG9zZS5lbWl0KHRoaXMpO1xuICAgIGNvbnNvbGUubG9nKCdjbG9zZScpO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgb25BbmltYXRpb25FbmQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnY2xvc2VkJykge1xuICAgICAgdGhpcy5maXZEaWRPcGVuLmVtaXQodGhpcyk7XG4gICAgfSBlbHNlIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdvcGVuJykge1xuICAgICAgdGhpcy5maXZEaWRDbG9zZS5lbWl0KHsgZXhwYW5kYWJsZTogdGhpcywgcGFyYW06IHRoaXMucGFyYW0gfSk7XG4gICAgICB0aGlzLnBhcmFtID0gbnVsbDtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RlcEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uL3N0ZXAtaGVhZGVyL3N0ZXAtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBhbmRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1zdGVwLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcC1jb250ZW50LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RlcENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgaXNMYXN0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzT3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBzdWJ0aXRsZSA9ICcnO1xuICBAT3V0cHV0KCkgZml2RGlkT3BlbjogRXZlbnRFbWl0dGVyPFN0ZXBDb250ZW50Q29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdkRpZENsb3NlOiBFdmVudEVtaXR0ZXI8U3RlcENvbnRlbnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2Q2xpY2s6IEV2ZW50RW1pdHRlcjxTdGVwQ29udGVudENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnc2VsZicpIHN0ZXA6IEV4cGFuZGFibGVDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2hlYWRlcicpIGhlYWRlcjogU3RlcEhlYWRlckNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZTogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIHRoaXMuaGVhZGVyLmNvbXBsZXRlKCk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmhlYWRlci5yZXNldCgpO1xuICB9XG5cbiAgYWZ0ZXJDbG9zZSgpIHtcbiAgICB0aGlzLmZpdkRpZENsb3NlLmVtaXQodGhpcyk7XG4gIH1cblxuICBhZnRlck9wZW4oKSB7XG4gICAgdGhpcy5maXZEaWRPcGVuLmVtaXQodGhpcyk7XG4gIH1cblxuICBjbGljaygpIHtcbiAgICB0aGlzLmZpdkNsaWNrLmVtaXQodGhpcyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFF1ZXJ5TGlzdCwgSW5wdXQsIFZpZXdDaGlsZCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0ZXBDb21wb25lbnQgfSBmcm9tICcuLi9zdGVwL3N0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IFNsaWRlcyB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0YXRlLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtc3RlcHBlci1ob3Jpem9udGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXBwZXItaG9yaXpvbnRhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0ZXBwZXItaG9yaXpvbnRhbC5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiByb3RhdGUnLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbigncm90YXRlID0+IG5vcm1hbCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZVooNDVkZWcpJyB9KSksXG4gICAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGVaKDBkZWcpJyB9KSlcbiAgICBdKV1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckhvcml6b250YWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNvbnRlbnRzOiBRdWVyeUxpc3Q8U3RlcENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlcycpIHNsaWRlczogU2xpZGVzO1xuICBAT3V0cHV0KCkgZml2U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNsaWRlcy5sb2NrU3dpcGVzKHRydWUpO1xuICB9XG5cbiAgY2xvc2UoKTogYW55IHtcbiAgICB0aGlzLnNsaWRlcy5zbGlkZVRvKDApO1xuICB9XG4gIG9wZW4oaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgY29uc29sZS5sb2coJ29wZW4gc2xpZGUnLCBpbmRleCk7XG4gICAgdGhpcy5zbGlkZXMubG9ja1N3aXBlcyhmYWxzZSk7XG4gICAgdGhpcy5zbGlkZXMuc2xpZGVUbyhpbmRleCk7XG4gICAgdGhpcy5zbGlkZXMubG9ja1N3aXBlcyh0cnVlKTtcblxuICB9XG5cbn1cbiIsImltcG9ydCB7IFN0ZXBDb21wb25lbnQgfSBmcm9tICcuLy4uL3N0ZXAvc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkcmVuLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIFZpZXdDaGlsZCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdGVwQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL3N0ZXAtY29udGVudC9zdGVwLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0ZXBwZXJIb3Jpem9udGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vc3RlcHBlci1ob3Jpem9udGFsL3N0ZXBwZXItaG9yaXpvbnRhbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtc3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcHBlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oU3RlcENvbXBvbmVudCkgY29udGVudHM6IFF1ZXJ5TGlzdDxTdGVwQ29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZHJlbihTdGVwQ29udGVudENvbXBvbmVudCkgc3RlcHM6IFF1ZXJ5TGlzdDxTdGVwQ29udGVudENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGQoU3RlcHBlckhvcml6b250YWxDb21wb25lbnQpIGhvcml6b250YWw6IFN0ZXBwZXJIb3Jpem9udGFsQ29tcG9uZW50O1xuICBASW5wdXQoKSBtb2RlOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ3ZlcnRpY2FsJztcbiAgQE91dHB1dCgpIGZpdkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBmaXZDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpbmRleDogbnVtYmVyLCBwYXJhbTogYW55IH0+KCk7XG5cbiAgY3VycmVudEluZGV4ID0gMDtcblxuICBwYXJhbTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvcGVuKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICBjb25zb2xlLmxvZygnKyMrIysnKTtcbiAgICAgIHRoaXMuaG9yaXpvbnRhbC5vcGVuKGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJyMjI29wZW4nLCB0aGlzLnN0ZXBzLCB0aGlzLnN0ZXBzLnRvQXJyYXkoKSwgaW5kZXgsIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XSk7XG4gICAgICBpZiAodGhpcy5zdGVwcy50b0FycmF5KClbaW5kZXhdKSB7XG4gICAgICAgIGlmICh0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF0uaXNPcGVuKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2lzIGFscmVhZHkgb3BlbicsIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XS5pc09wZW4pO1xuICAgICAgICAgIHRoaXMuY2xvc2UoaW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdpcyBjbG9zZWQnLCB0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF0uaXNPcGVuKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XS5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcjIyMjJywgaW5kZXgsIHRoaXMuc3RlcHMsIHRoaXMuc3RlcHMudG9BcnJheSgpKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGNsb3NlKGluZGV4OiBudW1iZXIsIHBhcmFtPzogYW55KSB7XG4gICAgdGhpcy5wYXJhbSA9IHBhcmFtO1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgdGhpcy5ob3Jpem9udGFsLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gLSAxO1xuICAgICAgdGhpcy5zdGVwcy50b0FycmF5KClbaW5kZXhdLmNsb3NlKCk7XG4gICAgfVxuXG4gIH1cblxuICBzZWxlY3QoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3QnLCBpbmRleCk7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmNvbnRlbnRzLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XG5cbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbihpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VBbGwoKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICB0aGlzLmhvcml6b250YWwuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgICBzdGVwLmNsb3NlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCkge1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMuc3RlcHMubGVuZ3RoID8gdGhpcy5jdXJyZW50SW5kZXggKyAxIDogLTE7XG4gICAgY29uc29sZS5sb2coJ25leHQgaW5kZXgnLCBuZXh0KTtcbiAgICB0aGlzLnNlbGVjdChuZXh0KTtcbiAgfVxuXG4gIHByZXZpb3VzKCkge1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLmN1cnJlbnRJbmRleCA+IDAgPyB0aGlzLmN1cnJlbnRJbmRleCArIC0xIDogLTE7XG4gICAgY29uc29sZS5sb2coJ25leHQgaW5kZXgnLCBuZXh0KTtcbiAgICB0aGlzLnNlbGVjdChuZXh0KTtcbiAgfVxuXG4gIGNvbXBsZXRlU3RlcChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAvLyBub3QgeWV0IGltcGxldGVudGVkXG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGVwcy50b0FycmF5KClbaW5kZXhdLmNvbXBsZXRlKCk7XG5cbiAgICB9XG4gIH1cblxuICByZXNldChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAvLyBub3QgeWV0IGltcGxldGVudGVkXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XS5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1yb3V0ZXItaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yb3V0ZXItaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JvdXRlci1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUm91dGVySXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG5cbiAgQElucHV0KCkgbmF2aWdhdGUgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHBhZ2VVcmw6IHN0cmluZztcblxuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIGFjdGl2ZSBzdGF0ZS5cbiAgICogRGVmYXVsdCB2YWx1ZSBpczogYFwibGVmdFwiYFxuICAgKi9cbiAgQElucHV0KCkgcG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICd0b3AnIHwgJ291dGxpbmUnID0gJ2xlZnQnO1xuXG4gIC8qKlxuICAgKiBUaGUgc2hhcGUgb2YgdGhlIGFjdGl2ZSBzdGF0ZS5cbiAgICogUG9zc2libGUgdmFsdWVzIGFyZTogYFwibGluZVwiYCwgYFwiZG90XCJgIGFuZCBhbnkgaW9uaWNvbi5cbiAgICogRGVmYXVsdCB2YWx1ZSBpczogYFwibGluZVwiYFxuICAgKi9cbiAgQElucHV0KCkgc2hhcGU6ICdsaW5lJyB8ICdkb3QnIHwgc3RyaW5nID0gJ2xpbmUnO1xuXG4gIEBJbnB1dCgpIG1hdGNoQ2hpbGRVcmwgPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uY2xpY2soKSB7XG4gICAgaWYgKHRoaXMubmF2aWdhdGUgJiYgdGhpcy5wYWdlVXJsKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucGFnZVVybCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBjbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMucG9zaXRpb259ICR7dGhpcy5zaGFwZX1gO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKSBnZXQgYWN0aXZlQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hBY3RpdmVVcmwoKSB8fCB0aGlzLmFjdGl2ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBoYXNTaGFwZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFwZSA9PT0gJ2xpbmUnXG4gICAgICB8fCB0aGlzLnNoYXBlID09PSAnZG90JztcbiAgfVxuXG4gIGdldENsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmhhc1NoYXBlKCkgPyBbdGhpcy5wb3NpdGlvbiwgdGhpcy5zaGFwZV0gOiBbdGhpcy5wb3NpdGlvbl07XG4gIH1cblxuICBtYXRjaEFjdGl2ZVVybCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tYXRjaENoaWxkVXJsID8gdGhpcy5pc0NoaWxkVXJsKCkgOiB0aGlzLmlzQ3VycmVudFVybCgpO1xuICB9XG5cbiAgaXNDdXJyZW50VXJsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci51cmwgPT09IHRoaXMucGFnZVVybDtcbiAgfVxuXG4gIGlzQ2hpbGRVcmwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLnVybC5zdGFydHNXaXRoKHRoaXMucGFnZVVybCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlU3R5bGUsIERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZml2Q29sbGFwc2VNZW51XScsXG4gIGV4cG9ydEFzOiAnbWVudUNvbGxhcHNlJ1xufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzYWJsZU1lbnVEaXJlY3RpdmUge1xuXG4gIGNvbGxhcHNlZCA9IGZhbHNlO1xuICBob3ZlcmluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBob3Zlck1lbnUgPSB0cnVlO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHsgfVxuXG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZScpXG4gIGdldCBteVN0eWxlKCk6IFNhZmVTdHlsZSB7XG4gICAgaWYgKHRoaXMuY29sbGFwc2VkICYmICh0aGlzLnBsYXRmb3JtLmlzKCd0YWJsZXQnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdlbGVjdHJvbicpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2Rlc2t0b3AnKSkpIHtcblxuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyXG4gICAgICAgIC5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJ21pbi13aWR0aDogNjRweDsgbWF4LXdpZHRoOiA2NHB4OyAtLWJvcmRlcjogMDsgdHJhbnNpdGlvbjogYWxsIGN1YmljLWJlemllciguNTUsMCwuMSwxKSAyMDBtczsnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgnLS1ib3JkZXI6IDA7IHRyYW5zaXRpb246IGFsbCBjdWJpYy1iZXppZXIoLjU1LDAsLjEsMSkgIDI1MG1zOycpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBob3ZlcigpIHtcbiAgICBpZiAodGhpcy5jb2xsYXBzZWQgJiYgIXRoaXMuaG92ZXJpbmcgJiYgdGhpcy5ob3Zlck1lbnUpIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgICAgdGhpcy5ob3ZlcmluZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIGJsdXIoKSB7XG4gICAgaWYgKCF0aGlzLmhvdmVyTWVudSkgeyByZXR1cm47IH1cbiAgICBpZiAoIXRoaXMuY29sbGFwc2VkICYmIHRoaXMuaG92ZXJpbmcpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5ob3ZlcmluZyA9IGZhbHNlO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGZpdkNvbGxhcHNlTWVudShjb2xsYXBzZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29sbGFwc2VkID0gY29sbGFwc2U7XG4gIH1cblxuXG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgaWYgKHRoaXMuaG92ZXJpbmcpIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgICAgdGhpcy5ob3ZlcmluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuY29sbGFwc2VkID0gdHJ1ZTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbGxhcHNhYmxlTWVudURpcmVjdGl2ZSB9IGZyb20gJy4uL2NvbGxhcHNhYmxlLW1lbnUvY29sbGFwc2FibGUtbWVudS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtY29sbGFwc2FibGUtbWVudS1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29sbGFwc2FibGUtbWVudS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb2xsYXBzYWJsZS1tZW51LWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNhYmxlTWVudUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbWVudTogQ29sbGFwc2FibGVNZW51RGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKCcjIyMnLCB0aGlzLm1lbnUpO1xuICAgIHRoaXMubWVudS50b2dnbGVNZW51KCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUGFzc3dvcmRDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LXBhc3N3b3JkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFzc3dvcmQuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcblxuICBASW5wdXQoKSBoaWRlSWNvbiA9ICdleWUtb2ZmJztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgcG9zaXRpb246ICdmbG9hdGluZycgfCAnaW5saW5lJyB8ICdmaXhlZCcgfCAnc3RhY2tlZCcgPSAnZmxvYXRpbmcnO1xuICBASW5wdXQoKSBzaG93OiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93SWNvbiA9ICdleWUnO1xuICBASW5wdXQoKSBjbGVhck9uRWRpdCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3Bhc3N3b3JkVmFsdWUgPSAnJztcbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4ge307XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRvZ2dsZVNob3dQYXNzd29yZCgpIHtcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICB9XG5cbiAgZ2V0IHBhc3N3b3JkVmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmRWYWx1ZTtcbiAgfVxuXG4gIHNldCBwYXNzd29yZFZhbHVlKHY6IGFueSkge1xuICAgIGlmICh2ICE9PSB0aGlzLl9wYXNzd29yZFZhbHVlKSB7XG4gICAgICB0aGlzLl9wYXNzd29yZFZhbHVlID0gdjtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLl9wYXNzd29yZFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gdGhpcy5fcGFzc3dvcmRWYWx1ZSkge1xuICAgICAgdGhpcy5fcGFzc3dvcmRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGJsdXIoKSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbn1cbiIsImV4cG9ydCBlbnVtIERyYXdlclN0YXRlIHtcbiAgICBCb3R0b20sXG4gICAgRG9ja2VkLFxuICAgIFRvcFxufVxuIiwiaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmF3ZXJTdGF0ZSB9IGZyb20gJy4uL2JvdHRvbS1zaGVldC9kcmF3ZXItc3RhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtYm90dG9tLXNoZWV0LWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYm90dG9tLXNoZWV0LWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ib3R0b20tc2hlZXQtY29udGVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0Q29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcm91bmRlZCA9IHRydWU7XG4gIEBJbnB1dCgpIGhhbmRsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGZsb2F0ID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgZml2SGFuZGxlQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGN1cnJlbnRTdGF0ZTogRHJhd2VyU3RhdGU7XG4gIHN0YXRlcyA9IERyYXdlclN0YXRlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mucm91bmRlZCcpIGdldCBpc1JvdW5kZWQoKTogYm9vbGVhbiB7XG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnRTdGF0ZSkge1xuICAgICAgY2FzZSBEcmF3ZXJTdGF0ZS5Ub3A6IHJldHVybiBmYWxzZTtcbiAgICAgIGNhc2UgRHJhd2VyU3RhdGUuRG9ja2VkOiByZXR1cm4gdGhpcy5yb3VuZGVkO1xuICAgICAgY2FzZSBEcmF3ZXJTdGF0ZS5Cb3R0b206IHJldHVybiB0aGlzLnJvdW5kZWQgJiYgIXRoaXMuZmxvYXQ7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZScpIGdldCBzdHlsZXMoKTogU2FmZVN0eWxlIHtcbiAgICBpZiAoISh0aGlzLmZsb2F0ICYmIHRoaXMuY3VycmVudFN0YXRlID09PSBEcmF3ZXJTdGF0ZS5Cb3R0b20pKSB7XG4gICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO2ApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdXBkYXRlU3RhdGUoc3RhdGU6IERyYXdlclN0YXRlKTogYW55IHtcbiAgICBjb25zb2xlLmxvZygnY29udGVudCBnb3Qgc3RhdGUnLCBzdGF0ZSk7XG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMuZml2SGFuZGxlQ2xpY2suZW1pdCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEJvdHRvbVNoZWV0Q29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL2JvdHRvbS1zaGVldC1jb250ZW50L2JvdHRvbS1zaGVldC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIENvbnRlbnRDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbUNvbnRyb2xsZXIsIFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0ICogYXMgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRHJhd2VyU3RhdGUgfSBmcm9tICcuL2RyYXdlci1zdGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1ib3R0b20tc2hlZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYm90dG9tLXNoZWV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYm90dG9tLXNoZWV0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQm90dG9tU2hlZXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBkb2NrZWRIZWlnaHQgPSA4MDtcblxuICBASW5wdXQoKSBzaG91bGRCb3VuY2UgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIGRpc3RhbmNlVG9wID0gNTY7XG5cbiAgQElucHV0KCkgdHJhbnNpdGlvbiA9ICcwLjI1cyBlYXNlLWluLW91dCc7XG5cbiAgQElucHV0KCkgc3RhdGU6IERyYXdlclN0YXRlID0gRHJhd2VyU3RhdGUuQm90dG9tO1xuXG4gIEBJbnB1dCgpIG1pbmltdW1IZWlnaHQgPSAyNDtcblxuICBAT3V0cHV0KCkgc3RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEcmF3ZXJTdGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdlclN0YXRlPigpO1xuICBAT3V0cHV0KCkgZml2T3BlbjogRXZlbnRFbWl0dGVyPEJvdHRvbVNoZWV0Q29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Qm90dG9tU2hlZXRDb21wb25lbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaXZEb2NrZWQ6IEV2ZW50RW1pdHRlcjxCb3R0b21TaGVldENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEJvdHRvbVNoZWV0Q29tcG9uZW50PigpO1xuICBAT3V0cHV0KCkgZml2Q2xvc2U6IEV2ZW50RW1pdHRlcjxCb3R0b21TaGVldENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEJvdHRvbVNoZWV0Q29tcG9uZW50PigpO1xuXG4gIEBDb250ZW50Q2hpbGQoQm90dG9tU2hlZXRDb250ZW50Q29tcG9uZW50KSBjb250ZW50OiBCb3R0b21TaGVldENvbnRlbnRDb21wb25lbnQ7XG5cbiAgcHJpdmF0ZSBfc3RhcnRQb3NpdGlvblRvcDogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IF9CT1VOQ0VfREVMVEEgPSAzMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZG9tQ3RybDogRG9tQ29udHJvbGxlcixcbiAgICBwcml2YXRlIF9wbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuICApIHsgfVxuXG5cbiAgLy8gQEhvc3RCaW5kaW5nKCdzdHlsZScpIGdldCBzdHlsZXMoKSB7XG4gIC8vICAgaWYgKHRoaXMucm91bmRlZCkge1xuICAvLyAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyXG4gIC8vICAgICAgIC5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4OyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDsnKTtcbiAgLy8gICB9XG5cbiAgLy8gfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9lbGVtZW50LCB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZpdi1ib3R0b20tZHJhd2VyLXNjcm9sbGFibGUtY29udGVudCAuc2Nyb2xsLXknKSk7XG4gICAgLy8gdGhpcy5fcmVuZGVyZXIuXG4gICAgLy8gICBzZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZpdi1ib3R0b20tZHJhd2VyLXNjcm9sbGFibGUtY29udGVudCAuc2Nyb2xsLXknKSwgJ3RvdWNoLWFjdGlvbicsICdub25lJyk7XG4gICAgdGhpcy5fc2V0RHJhd2VyU3RhdGUodGhpcy5zdGF0ZSk7XG5cbiAgICBjb25zdCBoYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgaGFtbWVyLmdldCgncGFuJykuc2V0KHsgZW5hYmxlOiB0cnVlLCBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fVkVSVElDQUwgfSk7XG4gICAgaGFtbWVyLm9uKCdwYW4gcGFuc3RhcnQgcGFuZW5kJywgKGV2OiBhbnkpID0+IHtcbiAgICAgIHN3aXRjaCAoZXYudHlwZSkge1xuICAgICAgICBjYXNlICdwYW5zdGFydCc6XG4gICAgICAgICAgdGhpcy5faGFuZGxlUGFuU3RhcnQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFuZW5kJzpcbiAgICAgICAgICB0aGlzLl9oYW5kbGVQYW5FbmQoZXYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuX2hhbmRsZVBhbihldik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbnRlbnQuZml2SGFuZGxlQ2xpY2tcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICBjYXNlIERyYXdlclN0YXRlLkJvdHRvbTogcmV0dXJuIHRoaXMuZG9jaygpO1xuICAgICAgICAgIGNhc2UgRHJhd2VyU3RhdGUuRG9ja2VkOiByZXR1cm4gdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCFjaGFuZ2VzLnN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NldERyYXdlclN0YXRlKGNoYW5nZXMuc3RhdGUuY3VycmVudFZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZUNvbnRlbnQoY2hhbmdlcy5zdGF0ZS5jdXJyZW50VmFsdWUpO1xuICB9XG5cbiAgdXBkYXRlQ29udGVudChzdGF0ZTogRHJhd2VyU3RhdGUpIHtcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLmNvbnRlbnQudXBkYXRlU3RhdGUoc3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldERyYXdlclN0YXRlKHN0YXRlOiBEcmF3ZXJTdGF0ZSkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCB0aGlzLnRyYW5zaXRpb24pO1xuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgIGNhc2UgRHJhd2VyU3RhdGUuQm90dG9tOlxuICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKCdjYWxjKDEwMHZoIC0gJyArIHRoaXMubWluaW11bUhlaWdodCArICdweCknKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERyYXdlclN0YXRlLkRvY2tlZDpcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSgodGhpcy5fcGxhdGZvcm0uaGVpZ2h0KCkgLSB0aGlzLmRvY2tlZEhlaWdodCkgKyAncHgnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKHRoaXMuZGlzdGFuY2VUb3AgKyAncHgnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVQYW5TdGFydCgpIHtcbiAgICB0aGlzLl9zdGFydFBvc2l0aW9uVG9wID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVBhbkVuZChldikge1xuICAgIGlmICh0aGlzLnNob3VsZEJvdW5jZSAmJiBldi5pc0ZpbmFsKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgdGhpcy50cmFuc2l0aW9uKTtcblxuICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNhc2UgRHJhd2VyU3RhdGUuRG9ja2VkOlxuICAgICAgICAgIHRoaXMuX2hhbmRsZURvY2tlZFBhbkVuZChldik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRHJhd2VyU3RhdGUuVG9wOlxuICAgICAgICAgIHRoaXMuX2hhbmRsZVRvcFBhbkVuZChldik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5faGFuZGxlQm90dG9tUGFuRW5kKGV2KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zdGF0ZUNoYW5nZS5lbWl0KHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlVG9wUGFuRW5kKGV2KSB7XG4gICAgaWYgKGV2LmRlbHRhWSA+IHRoaXMuX0JPVU5DRV9ERUxUQSkge1xuICAgICAgaWYgKHRoaXMubWluaW11bUhlaWdodCA9PT0gdGhpcy5kb2NrZWRIZWlnaHQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IERyYXdlclN0YXRlLkJvdHRvbSkge1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Cb3R0b207XG4gICAgICAgICAgdGhpcy5maXZDbG9zZS5lbWl0KHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gRHJhd2VyU3RhdGUuRG9ja2VkKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IERyYXdlclN0YXRlLkRvY2tlZDtcbiAgICAgICAgICB0aGlzLmZpdkRvY2tlZC5lbWl0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSh0aGlzLmRpc3RhbmNlVG9wICsgJ3B4Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlRG9ja2VkUGFuRW5kKGV2KSB7XG4gICAgY29uc3QgYWJzRGVsdGFZID0gTWF0aC5hYnMoZXYuZGVsdGFZKTtcbiAgICBpZiAoYWJzRGVsdGFZID4gdGhpcy5fQk9VTkNFX0RFTFRBICYmIGV2LmRlbHRhWSA8IDApIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBEcmF3ZXJTdGF0ZS5Ub3ApIHtcblxuICAgICAgICB0aGlzLnN0YXRlID0gRHJhd2VyU3RhdGUuVG9wO1xuICAgICAgICB0aGlzLmZpdk9wZW4uZW1pdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWJzRGVsdGFZID4gdGhpcy5fQk9VTkNFX0RFTFRBICYmIGV2LmRlbHRhWSA+IDApIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBEcmF3ZXJTdGF0ZS5Cb3R0b20pIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IERyYXdlclN0YXRlLkJvdHRvbTtcbiAgICAgICAgdGhpcy5maXZDbG9zZS5lbWl0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFRyYW5zbGF0ZVkoKHRoaXMuX3BsYXRmb3JtLmhlaWdodCgpIC0gdGhpcy5kb2NrZWRIZWlnaHQpICsgJ3B4Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQm90dG9tUGFuRW5kKGV2KSB7XG4gICAgaWYgKC1ldi5kZWx0YVkgPiB0aGlzLl9CT1VOQ0VfREVMVEEpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBEcmF3ZXJTdGF0ZS5Eb2NrZWQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IERyYXdlclN0YXRlLkRvY2tlZDtcbiAgICAgICAgdGhpcy5maXZEb2NrZWQuZW1pdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKCdjYWxjKDEwMHZoIC0gJyArIHRoaXMubWluaW11bUhlaWdodCArICdweCknKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVQYW4oZXYpIHtcbiAgICBjb25zdCBwb2ludGVyWSA9IGV2LmNlbnRlci55O1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCAnbm9uZScpO1xuICAgIGlmIChwb2ludGVyWSA+IDAgJiYgcG9pbnRlclkgPCB0aGlzLl9wbGF0Zm9ybS5oZWlnaHQoKSkge1xuICAgICAgaWYgKGV2LmFkZGl0aW9uYWxFdmVudCA9PT0gJ3BhbnVwJyB8fCBldi5hZGRpdGlvbmFsRXZlbnQgPT09ICdwYW5kb3duJykge1xuICAgICAgICBjb25zdCBuZXdUb3AgPSB0aGlzLl9zdGFydFBvc2l0aW9uVG9wICsgZXYuZGVsdGFZO1xuICAgICAgICBpZiAobmV3VG9wID49IHRoaXMuZGlzdGFuY2VUb3ApIHtcbiAgICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKG5ld1RvcCArICdweCcpO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld1RvcCA8IHRoaXMuZGlzdGFuY2VUb3ApIHtcbiAgICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKHRoaXMuZGlzdGFuY2VUb3AgKyAncHgnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VG9wID4gdGhpcy5fcGxhdGZvcm0uaGVpZ2h0KCkgLSB0aGlzLm1pbmltdW1IZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKCh0aGlzLl9wbGF0Zm9ybS5oZWlnaHQoKSAtIHRoaXMubWluaW11bUhlaWdodCkgKyAncHgnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFRyYW5zbGF0ZVkodmFsdWUpIHtcbiAgICB0aGlzLl9kb21DdHJsLndyaXRlKCgpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKCcgKyB2YWx1ZSArICcpJyk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Ub3A7XG4gICAgdGhpcy5fc2V0RHJhd2VyU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy51cGRhdGVDb250ZW50KHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IERyYXdlclN0YXRlLkJvdHRvbTtcbiAgICB0aGlzLl9zZXREcmF3ZXJTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnVwZGF0ZUNvbnRlbnQodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBkb2NrKCkge1xuICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Eb2NrZWQ7XG4gICAgdGhpcy5fc2V0RHJhd2VyU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy51cGRhdGVDb250ZW50KHRoaXMuc3RhdGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2VydmljZSB7XG5cbiAgcHVibGljIGxvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgcHVibGljIGxvYWRDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odGhpcy5sb2FkaW5nKTtcbiAgcHVibGljIGNvbXBsZXRlQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRoaXMuaXNDb21wbGV0ZSk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBsb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5sb2FkQ2hhbmdlLm5leHQodGhpcy5sb2FkaW5nKTtcbiAgfVxuXG4gIHVubG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxvYWRDaGFuZ2UubmV4dCh0aGlzLmxvYWRpbmcpO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgY29uc29sZS5sb2coJ3NldCBzZXJ2aWNlIGNvbXBsZXRlJyk7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICB0aGlzLmNvbXBsZXRlQ2hhbmdlLm5leHQodGhpcy5pc0NvbXBsZXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBBbmltYXRpb25CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gJy4uL2xvYWRpbmcvbG9hZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IHRpbWVyLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aW1lSW50ZXJ2YWwsIHBsdWNrLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtbG9hZGluZy1wcm9ncmVzcy1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy1wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLXByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcigncHJvZ3Jlc3NBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IGhlaWdodDogJzBweCcgfSksXG4gICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKCcyOTltcyBlYXNlLWluJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdwcm9ncmVzc0FuaW1MaW5lYXInLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnNjVtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMjk5bXMgZWFzZS1pbicsIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgbGVmdDogJy01JScsIHdpZHRoOiAnNSUnIH0pLFxuICAgICAgICBhbmltYXRlKCc4NTBtcyBlYXNlLW91dCcsIHN0eWxlKHsgbGVmdDogJzAlJywgd2lkdGg6ICcxMDAlJyB9KSlcbiAgICAgIF0pLFxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1Byb2dyZXNzQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgZ2xvYmFsID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgcHJvZ3Jlc3MgPSAwO1xuICBASW5wdXQoKSB2ZXJ0aWNhbEFsaWduOiAndG9wJyB8ICdib3R0b20nID0gJ3RvcCc7XG4gIEBPdXRwdXQoKSBmaXZDb21wbGV0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGZpdkRvbmVTaHJpbmtpbmc6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIGZpdlJlZnJlc2g6IEV2ZW50RW1pdHRlcjxMb2FkaW5nUHJvZ3Jlc3NCYXJDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nUHJvZ3Jlc3NCYXJDb21wb25lbnQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnYmFyJykgYmFyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdsaW5lYXInKSBsaW5lYXI6IEVsZW1lbnRSZWY7XG5cbiAgcGFyYW06IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbG9hZGluZ1NlcnZpY2U6IExvYWRpbmdTZXJ2aWNlLCBwcml2YXRlIGJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5jb21wbGV0ZUNoYW5nZS5zdWJzY3JpYmUoaXNDb21wbGV0ZSA9PiB7XG4gICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZ2xvYmFsKSB7XG4gICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmNvbXBsZXRlQ2hhbmdlLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICB9XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KHRoaXMpO1xuICB9XG5cbiAgdW5sb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmlzQ29tcGxldGUpIHtcbiAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBsZXRlKHBhcmFtOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnc2V0IGNvbXBsZXRlJyk7XG4gICAgdGhpcy5wYXJhbSA9IHBhcmFtO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgY29uc29sZS5sb2codGhpcy5pc0NvbXBsZXRlKTtcbiAgfVxuXG4gIGZpbGxBbmltYXRpb25Db21wbGV0ZShpc0NvbXBsZXRlOiBib29sZWFuKSB7XG4gICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmaWxsIGFuaW1hdGlvbiBjb21wbGV0ZScsIGlzQ29tcGxldGUpO1xuICAgICAgdGhpcy5maXZDb21wbGV0ZS5lbWl0KHRoaXMucGFyYW0pO1xuICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICB0aGlzLnBhcmFtID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLnVubG9hZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51bmxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRQcm9ncmVzcyhwcm9ncmVzcykge1xuICAgIGlmIChwcm9ncmVzcyA8IDApIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJvZ3Jlc3MgPiAxMDApIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICBjb25zb2xlLmxvZygnc2V0IHByb2dyZXNzJywgcHJvZ3Jlc3MpO1xuXG4gIH1cblxuICBpbmNyZW1lbnRCeShwcm9ncmVzcykge1xuICAgIHRoaXMuc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MgKyB0aGlzLnByb2dyZXNzKTtcbiAgfVxuXG4gIGRlY3JlbWVudEJ5KHByb2dyZXNzKSB7XG4gICAgdGhpcy5zZXRQcm9ncmVzcyhwcm9ncmVzcyArIHRoaXMucHJvZ3Jlc3MpO1xuICB9XG5cbiAgZmlsbEluKG1zOiBudW1iZXIpIHtcbiAgICAvLyBmaXJzdCBkZWZpbmUgYSByZXVzYWJsZSBhbmltYXRpb25cbiAgICBjb25zdCBteUFuaW1hdGlvbiA9IHRoaXMuYnVpbGRlci5idWlsZChbXG4gICAgICBzdHlsZSh7IHdpZHRoOiB0aGlzLnByb2dyZXNzIH0pLFxuICAgICAgYW5pbWF0ZShtcywgc3R5bGUoeyB3aWR0aDogJzEwMCUnIH0pKVxuICAgIF0pO1xuXG4gICAgLy8gdXNlIHRoZSByZXR1cm5lZCBmYWN0b3J5IG9iamVjdCB0byBjcmVhdGUgYSBwbGF5ZXJcbiAgICBjb25zdCBwbGF5ZXIgPSBteUFuaW1hdGlvbi5jcmVhdGUodGhpcy5saW5lYXIubmF0aXZlRWxlbWVudCk7XG5cbiAgICBwbGF5ZXIucGxheSgpO1xuICAgIGNvbnN0IHQgPSB0aW1lcigwLCBtcyAvICgxMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzID49IDEwMCkge1xuICAgICAgICAgIHJldHVybiB0LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9ncmVzcysrO1xuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudCBwcm9ncmVzcycsIHRoaXMucHJvZ3Jlc3MpO1xuICAgICAgfSk7XG4gICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLmZpdkNvbXBsZXRlLmVtaXQodHJ1ZSk7XG4gICAgICB0aGlzLnByb2dyZXNzID0gMTAwO1xuICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNocmlua0luKG1zOiBudW1iZXIpIHtcbiAgICAvLyBmaXJzdCBkZWZpbmUgYSByZXVzYWJsZSBhbmltYXRpb25cbiAgICB0aGlzLnByb2dyZXNzID0gMTAwO1xuICAgIGNvbnN0IG15QW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHsgd2lkdGg6IGAke3RoaXMucHJvZ3Jlc3N9JWAgfSksXG4gICAgICBhbmltYXRlKG1zLCBzdHlsZSh7IHdpZHRoOiAwIH0pKVxuICAgIF0pO1xuXG4gICAgLy8gdXNlIHRoZSByZXR1cm5lZCBmYWN0b3J5IG9iamVjdCB0byBjcmVhdGUgYSBwbGF5ZXJcbiAgICBjb25zdCBwbGF5ZXIgPSBteUFuaW1hdGlvbi5jcmVhdGUodGhpcy5saW5lYXIubmF0aXZlRWxlbWVudCk7XG5cbiAgICBjb25zdCB0ID0gdGltZXIoMCwgbXMgLyAoMTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA8PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2dyZXNzLS07XG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHByb2dyZXNzJywgdGhpcy5wcm9ncmVzcyk7XG4gICAgICB9KTtcblxuICAgIHBsYXllci5wbGF5KCk7XG4gICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLmZpdkRvbmVTaHJpbmtpbmcuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2FkaW5nUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuLi9sb2FkaW5nLXByb2dyZXNzLWJhci9sb2FkaW5nLXByb2dyZXNzLWJhci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtbG9hZGluZy1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGxvYWRpbmcgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdwcm9ncmVzcycpIHByb2dyZXNzOiBMb2FkaW5nUHJvZ3Jlc3NCYXJDb21wb25lbnQ7XG4gIEBJbnB1dCgpIGNvbG9yID0gJ2xpZ2h0JztcbiAgQElucHV0KCkgZXhwYW5kID0gJ2Jsb2NrJztcbiAgQElucHV0KCkgZmlsbCA9ICdzb2xpZCc7XG4gIEBJbnB1dCgpIHNpemUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIHNoYXBlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYnV0dG9uLWRpc2FibGVkJylcbiAgQElucHV0KClcbiAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKSB2ZXJ0aWNhbEFsaWduOiAndG9wJyB8ICdib3R0b20nID0gJ3RvcCc7XG5cbiAgQElucHV0KCkgdHlwZTogJ3N1Ym1pdCcgfCAncmVzZXQnIHwgJ2J1dHRvbicgPSAnYnV0dG9uJztcblxuICBAT3V0cHV0KCkgZml2UmVmcmVzaDogRXZlbnRFbWl0dGVyPExvYWRpbmdCdXR0b25Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2UmVmcmVzaENvbXBsZXRlOiBFdmVudEVtaXR0ZXI8TG9hZGluZ0J1dHRvbkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmaXZCdXR0b25DbGljazogRXZlbnRFbWl0dGVyPExvYWRpbmdCdXR0b25Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICB0b2dnbGVTcGlubmVyKCkge1xuICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgdGhpcy5wcm9ncmVzcy50b2dnbGVTcGlubmVyKCk7XG4gICAgdGhpcy5maXZSZWZyZXNoLmVtaXQodGhpcyk7XG4gIH1cblxuICBsb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5wcm9ncmVzcy5sb2FkKCk7XG4gIH1cblxuICB1bmxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5wcm9ncmVzcy51bmxvYWQoKTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MuY29tcGxldGUoe30pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ29tcGxldGUoaXNDb21wbGV0ZTogYm9vbGVhbikge1xuICAgIGNvbnNvbGUubG9nKCdvbiBjb21wbGV0ZScsIGlzQ29tcGxldGUpO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZml2UmVmcmVzaENvbXBsZXRlLmVtaXQodGhpcyk7XG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuZml2QnV0dG9uQ2xpY2suZW1pdCh0aGlzKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFuaW1hdGlvbkJ1aWxkZXIsIHN0eWxlLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyB0YWtlLCB0YWtlVW50aWwsIGxhc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9wdGlvbmFsLFxuICBJbmplY3QsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3Q2hpbGQsIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyB0aW1lciwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbmNvbnN0IEJBU0VfU0laRSA9IDEwMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWxvYWRpbmctc3Bpbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS53aWR0aC5weF0nOiAnZGlhbWV0ZXInLFxuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdkaWFtZXRlcidcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHN0YXRpYyBkaWFtZXRlcnMgPSBuZXcgU2V0PG51bWJlcj4oW0JBU0VfU0laRV0pO1xuICBwcml2YXRlIHN0YXRpYyBzdHlsZVRhZzogSFRNTFN0eWxlRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9kaWFtZXRlciA9IEJBU0VfU0laRTtcbiAgX3N0cm9rZVdpZHRoID0gMTA7XG4gIF92YWx1ZSA9IDA7XG5cblxuICBAT3V0cHV0KCkgZml2UHJvZ3Jlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIGZpdkNvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nU3Bpbm5lckNvbXBvbmVudD4oKTtcbiAgQFZpZXdDaGlsZCgnZGV0ZXJtaW5hdGVDaXJjbGUnKSBkZXRlcm1pbmF0ZUNpcmNsZTogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgbW9kZTogJ2luZGV0ZXJtaW5hdGUnIHwgJ2RldGVybWluYXRlJyA9ICdpbmRldGVybWluYXRlJztcbiAgQElucHV0KCkgY2lyY2xlUmFkaXVzID0gNDU7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBjbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlICsgJyBtYXQtc3Bpbm5lciBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci1pbmRldGVybWluYXRlLWFuaW1hdGlvbic7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LCBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGNoYW5nZTogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlciwgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubW9kZSk7XG4gIH1cblxuICBnZXQgdmlld0JveCgpIHtcbiAgICBjb25zdCB2aWV3Qm94ID0gdGhpcy5jaXJjbGVSYWRpdXMgKiAyICsgdGhpcy5zdHJva2VXaWR0aDtcbiAgICByZXR1cm4gYDAgMCAke3ZpZXdCb3h9ICR7dmlld0JveH1gO1xuICB9XG5cbiAgLyoqIFRoZSBzdHJva2UgY2lyY3VtZmVyZW5jZSBvZiB0aGUgc3ZnIGNpcmNsZS4gKi9cbiAgZ2V0IHN0cm9rZUNpcmN1bWZlcmVuY2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMiAqIE1hdGguUEkgKiB0aGlzLmNpcmNsZVJhZGl1cztcbiAgfVxuXG4gIC8qKiBUaGUgZGFzaCBvZmZzZXQgb2YgdGhlIHN2ZyBjaXJjbGUuICovXG4gIGdldCBzdHJva2VEYXNoT2Zmc2V0KCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdkZXRlcm1pbmF0ZScpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0cm9rZUNpcmN1bWZlcmVuY2UgKiAoMTAwIC0gdGhpcy5fdmFsdWUpIC8gMTAwO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqIFN0cm9rZSB3aWR0aCBvZiB0aGUgY2lyY2xlIGluIHBlcmNlbnQuICovXG4gIGdldCBjaXJjbGVTdHJva2VXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJva2VXaWR0aCAvIHRoaXMuZGlhbWV0ZXIgKiAxMDA7XG4gIH1cblxuICAvKiogVmFsdWUgb2YgdGhlIHByb2dyZXNzIGNpcmNsZS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ2RldGVybWluYXRlJyA/IHRoaXMuX3ZhbHVlIDogMDtcbiAgfVxuICBzZXQgdmFsdWUobmV3VmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCAobmV3VmFsdWUpKSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZGlhbWV0ZXIoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2RpYW1ldGVyOyB9XG4gIHNldCBkaWFtZXRlcihzaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kaWFtZXRlciA9IHNpemU7XG5cbiAgICBpZiAoIUxvYWRpbmdTcGlubmVyQ29tcG9uZW50LmRpYW1ldGVycy5oYXModGhpcy5fZGlhbWV0ZXIpKSB7XG4gICAgICB0aGlzLl9hdHRhY2hTdHlsZU5vZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKiogU3Ryb2tlIHdpZHRoIG9mIHRoZSBwcm9ncmVzcyBzcGlubmVyLiAqL1xuICBASW5wdXQoKVxuICBnZXQgc3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3Ryb2tlV2lkdGggfHwgdGhpcy5kaWFtZXRlciAvIDEwO1xuICB9XG4gIHNldCBzdHJva2VXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3Ryb2tlV2lkdGggPSB2YWx1ZTtcbiAgfVxuXG5cbiAgLyoqIER5bmFtaWNhbGx5IGdlbmVyYXRlcyBhIHN0eWxlIHRhZyBjb250YWluaW5nIHRoZSBjb3JyZWN0IGFuaW1hdGlvbiBmb3IgdGhpcyBkaWFtZXRlci4gKi9cbiAgcHJpdmF0ZSBfYXR0YWNoU3R5bGVOb2RlKCk6IHZvaWQge1xuICAgIGxldCBzdHlsZVRhZyA9IExvYWRpbmdTcGlubmVyQ29tcG9uZW50LnN0eWxlVGFnO1xuXG4gICAgaWYgKCFzdHlsZVRhZykge1xuICAgICAgc3R5bGVUYWcgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgdGhpcy5fZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZVRhZyk7XG4gICAgICBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudC5zdHlsZVRhZyA9IHN0eWxlVGFnO1xuICAgIH1cblxuICAgIGlmIChzdHlsZVRhZyAmJiBzdHlsZVRhZy5zaGVldCkge1xuICAgICAgKHN0eWxlVGFnLnNoZWV0IGFzIENTU1N0eWxlU2hlZXQpLmluc2VydFJ1bGUodGhpcy5fZ2V0QW5pbWF0aW9uVGV4dCgpLCAwKTtcbiAgICB9XG5cbiAgICBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudC5kaWFtZXRlcnMuYWRkKHRoaXMuZGlhbWV0ZXIpO1xuICB9XG5cblxuICAvKiogR2VuZXJhdGVzIGFuaW1hdGlvbiBzdHlsZXMgYWRqdXN0ZWQgZm9yIHRoZSBzcGlubmVyJ3MgZGlhbWV0ZXIuICovXG4gIHByaXZhdGUgX2dldEFuaW1hdGlvblRleHQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBJTkRFVEVSTUlOQVRFX0FOSU1BVElPTl9URU1QTEFURSA9IGBcbiAgICBAa2V5ZnJhbWVzIG1hdC1wcm9ncmVzcy1zcGlubmVyLXN0cm9rZS1yb3RhdGUtRElBTUVURVIge1xuICAgICAgIDAlICAgICAgeyBzdHJva2UtZGFzaG9mZnNldDogU1RBUlRfVkFMVUU7ICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuICAgICAgIDEyLjUlICAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuICAgICAgIDEyLjUwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZSg3Mi41ZGVnKTsgfVxuICAgICAgIDI1JSAgICAgeyBzdHJva2UtZGFzaG9mZnNldDogU1RBUlRfVkFMVUU7ICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGUoNzIuNWRlZyk7IH1cbiAgICAgICAyNS4wMDAxJSAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgfVxuICAgICAgIDM3LjUlICAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpOyB9XG4gICAgICAgMzcuNTAwMSUgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IEVORF9WQUxVRTsgICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDE2MS41ZGVnKTsgfVxuICAgICAgIDUwJSAgICAgeyBzdHJva2UtZGFzaG9mZnNldDogU1RBUlRfVkFMVUU7ICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGUoMTYxLjVkZWcpOyB9XG4gICAgICAgNTAuMDAwMSUgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxuICAgICAgIDYyLjUlICAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XG4gICAgICAgNjIuNTAwMSUgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IEVORF9WQUxVRTsgICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDI1MS41ZGVnKTsgfVxuICAgICAgIDc1JSAgICAgeyBzdHJva2UtZGFzaG9mZnNldDogU1RBUlRfVkFMVUU7ICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGUoMjUxLjVkZWcpOyB9XG4gICAgICAgNzUuMDAwMSUgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XG4gICAgICAgODcuNSUgICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxuICAgICAgIDg3LjUwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZSgzNDEuNWRlZyk7IH1cbiAgICAgICAxMDAlICAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDM0MS41ZGVnKTsgfVxuICAgICB9XG4gICBgO1xuICAgIHJldHVybiBJTkRFVEVSTUlOQVRFX0FOSU1BVElPTl9URU1QTEFURVxuICAgICAgLy8gQW5pbWF0aW9uIHNob3VsZCBiZWdpbiBhdCA1JSBhbmQgZW5kIGF0IDgwJVxuICAgICAgLnJlcGxhY2UoL1NUQVJUX1ZBTFVFL2csIGAkezAuOTUgKiB0aGlzLnN0cm9rZUNpcmN1bWZlcmVuY2V9YClcbiAgICAgIC5yZXBsYWNlKC9FTkRfVkFMVUUvZywgYCR7MC4yICogdGhpcy5zdHJva2VDaXJjdW1mZXJlbmNlfWApXG4gICAgICAucmVwbGFjZSgvRElBTUVURVIvZywgYCR7dGhpcy5kaWFtZXRlcn1gKTtcbiAgfVxuXG5cbiAgY29tcGxldGVJbihkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgdGhpcy5tb2RlID0gJ2RldGVybWluYXRlJztcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgY29uc29sZS5sb2coJ2NvbXBsZXRlIGluJywgZHVyYXRpb24pO1xuICAgIGNvbnNvbGUubG9nKCdpbnRlcnZhbCcsIGR1cmF0aW9uIC8gMTAwKTtcbiAgICBjb25zb2xlLmxvZygndGltZXIgbGVuZ3RoJywgZHVyYXRpb24gKyBkdXJhdGlvbiAvIDUwKTtcbiAgICBjb25zb2xlLmxvZygnbG9vcCBjb3VudCcsIChkdXJhdGlvbiArIGR1cmF0aW9uIC8gNTApIC8gKGR1cmF0aW9uIC8gMTAwKSk7XG5cbiAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLmJ1aWxkZXIuYnVpbGQoW1xuICAgICAgc3R5bGUoe1xuICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDE4MCxcbiAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgJ3N0cm9rZSc6ICcjREUzRTM1J1xuICAgICAgfSksXG4gICAgICBhbmltYXRlKGAke2R1cmF0aW9ufW1zIGVhc2Utb3V0YCwgc3R5bGUoe1xuICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDMxNSxcbiAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogMCxcbiAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAnc3Ryb2tlJzogJyMxQjlBNTknLFxuICAgICAgICAnb3BhY2l0eSc6IDBcbiAgICAgIH0pKVxuICAgIF0pO1xuXG4gICAgY29uc3QgcGxheWVyID0gYW5pbWF0aW9uLmNyZWF0ZSh0aGlzLmRldGVybWluYXRlQ2lyY2xlLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHBsYXllci5wbGF5KCk7XG4gICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLmZpdkNvbXBsZXRlLmVtaXQodGhpcyk7XG4gICAgICB0aGlzLl92YWx1ZSA9IDA7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGkgPSBpbnRlcnZhbChkdXJhdGlvbiAvIDEwMCk7XG4gICAgY29uc3QgdCA9IHRpbWVyKGR1cmF0aW9uICsgZHVyYXRpb24gLyA1MCk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBpLnBpcGUodGFrZVVudGlsKHQpKTtcblxuICAgIHByb2dyZXNzLnN1YnNjcmliZShwID0+IHtcbiAgICAgIHRoaXMuZml2UHJvZ3Jlc3MuZW1pdChwKTtcbiAgICB9KTtcblxuICB9XG4gIHNldFZhbHVlKHByb2dyZXNzOiBudW1iZXIpOiBhbnkge1xuICAgIHRoaXMubW9kZSA9ICdkZXRlcm1pbmF0ZSc7XG4gICAgdGhpcy5fdmFsdWUgPSBwcm9ncmVzcztcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgY29uc29sZS5sb2coJ3NldCB2YWx1ZScsIHRoaXMuX3ZhbHVlLCB0aGlzLm1vZGUpO1xuICB9XG5cbiAgc3BpbigpIHtcbiAgICB0aGlzLm1vZGUgPSAnaW5kZXRlcm1pbmF0ZSc7XG4gICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc3RvcFNwaW5uaW5nKCkge1xuICAgIHRoaXMuX3ZhbHVlID0gMDtcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBzZXRNb2RlKG1vZGUpIHtcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuXG5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSwgQW5pbWF0aW9uQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTG9hZGluZ1NwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuLi9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctcmVmcmVzaGVyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdmYWJBbmltJywgW1xuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLFxuICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSlcbiAgICBdKVxuICBdKSxcbiAgdHJpZ2dlcignc3Bpbm5lckFuaW0nLCBbXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXG4gICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pKVxuICAgIF0pXG4gIF0pLFxuICB0cmlnZ2VyKCdyb3RhdGVBbmltJywgW1xuICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiByb3RhdGUnLCBbXG4gICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbigncm90YXRlID0+IG5vcm1hbCcsIFtcbiAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2UtaW4nKVxuICAgIF0pLFxuICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZyknIH0pKSxcbiAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3JvdGF0ZVooMGRlZyknIH0pKVxuICBdKSxcbiAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgc3R5bGUoe1xuICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDE4MCxcbiAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgJ3N0cm9rZSc6ICcjREUzRTM1J1xuICAgICAgfSksXG4gICAgICBhbmltYXRlKCcxNDAwbXMgZWFzZS1vdXQnKVxuICAgIF0pLFxuICAgIHN0YXRlKCdmaWxsJywgc3R5bGUoe1xuICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAzMTUsXG4gICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgJ3N0cm9rZSc6ICcjMUI5QTU5JyxcbiAgICAgICdvcGFjaXR5JzogMFxuICAgIH0pXG4gICAgKV1cbiAgKV1cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgc3BpbkNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZhYkNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb25Db2xvciA9ICcjMDAwJztcbiAgQElucHV0KCkgY2hlY2ttYXJrID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGZpdkNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8TG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdlJlZnJlc2g6IEV2ZW50RW1pdHRlcjxMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50PigpO1xuICBAT3V0cHV0KCkgZml2SGlkZGVuOiBFdmVudEVtaXR0ZXI8TG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdlNob3dlZDogRXZlbnRFbWl0dGVyPExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaXZQcm9ncmVzczogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBAVmlld0NoaWxkKCdzcGlubmVyJykgc3Bpbm5lcjogTG9hZGluZ1NwaW5uZXJDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2JhY2tncm91bmQnKSBiYWNrZ3JvdW5kOiBFbGVtZW50UmVmO1xuXG4gIHZpc2libGUgPSBmYWxzZTtcbiAgaWNvblN0YXRlID0gJ25vcm1hbCc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBidWlsZGVyOiBBbmltYXRpb25CdWlsZGVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnNwaW5uZXIuc3BpbigpO1xuICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KHRoaXMpO1xuICB9XG5cbiAgdW5sb2FkKCkge1xuICAgIHRoaXMuc3Bpbm5lci5zdG9wU3Bpbm5pbmcoKTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIC8vIHRoaXMuc3Bpbm5lci5jb21wbGV0ZUluKDUwMCk7XG4gICAgaWYgKHRoaXMuY2hlY2ttYXJrKSB7XG4gICAgICBjb25zb2xlLmxvZygnZmlsbCBhbmltYXRpb24gZG9uZScsIGV2ZW50KTtcbiAgICAgIHRoaXMuaWNvblN0YXRlID0gJ3JvdGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgY29uc29sZS5sb2coJyZzaG93Jyk7XG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSksXG4gICAgICAgIGFuaW1hdGUoJzBtcyBlYXNlLW91dCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0pKVxuICAgICAgXSk7XG5cbiAgICAgIGNvbnN0IHBsYXllciA9IGFuaW1hdGlvbi5jcmVhdGUodGhpcy5iYWNrZ3JvdW5kLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgIHBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpdlNob3dlZC5lbWl0KHRoaXMpO1xuICAgICAgICBwbGF5ZXIuZGVzdHJveSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgc2NhbGUoMSlgO1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06IHRyYW5zZm9ybSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKVxuICAgICAgXSk7XG5cbiAgICAgIGNvbnN0IHBsYXllciA9IGFuaW1hdGlvbi5jcmVhdGUodGhpcy5iYWNrZ3JvdW5kLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgIHBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpdkhpZGRlbi5lbWl0KHRoaXMpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgcGxheWVyLmRlc3Ryb3koKTtcblxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZmlsbEFuaW1hdGlvbkRvbmUoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2ttYXJrKSB7XG4gICAgICBjb25zb2xlLmxvZygnZmlsbCBhbmltYXRpb24gZG9uZScsIGV2ZW50KTtcbiAgICAgIHRoaXMuaWNvblN0YXRlID0gJ3JvdGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQsIGljb24pO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdub3JtYWwnKSB7XG4gICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgdGhpcy5pY29uU3RhdGUgPSAnbm9ybWFsJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3JvdGF0ZScpIHtcbiAgICAgICAgdGhpcy5wb3N0Q29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHBvc3RDb21wbGV0ZSgpIHtcbiAgICB0aGlzLnVubG9hZCgpO1xuICAgIHRoaXMuZml2Q29tcGxldGUuZW1pdCh0aGlzKTtcbiAgfVxuXG4gIHNldFZhbHVlKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICB0aGlzLnNwaW5uZXIuc2V0VmFsdWUocHJvZ3Jlc3MpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zcGlubmVyLnNldE1vZGUoJ2luZGV0ZXJtaW5hdGUnKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBlbGVtZW50IH0gZnJvbSAncHJvdHJhY3Rvcic7XG5pbXBvcnQgeyBMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vLi4vbG9hZGluZy1yZWZyZXNoZXItY29udGVudC9sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlLCBBbmltYXRpb25CdWlsZGVyLCBBbmltYXRpb25QbGF5ZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWxvYWRpbmctY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLWNvbnRlbnQuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ2ZpbGwnLCBzdHlsZSh7XG4gICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMzE1LFxuICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICdzdHJva2UnOiAnIzFCOUE1OScsXG4gICAgICB9KVxuICAgICAgKV1cbiAgICApLFxuICAgIHRyaWdnZXIoJ3NwaW5uZXJBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2hpbnRBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMHB4KSB0cmFuc2xhdGVYKC01MCUpJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMTJweCkgdHJhbnNsYXRlWCgtNTAlKScgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgc3R5bGUoeyB3aWR0aDogJzExMnB4Jywgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMTJweCkgdHJhbnNsYXRlWCgtNTAlKScgfSksXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0Jywgc3R5bGUoeyB3aWR0aDogJzQwcHgnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDExMnB4KSB0cmFuc2xhdGVYKC01MCUpJyB9KSlcbiAgICAgIF0pLFxuICAgIF1cbiAgICApLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaGludFRleHQgPSAnbmV3IHBvc3RzJztcbiAgQElucHV0KCkgbWF4UHVsbEhlaWdodCA9IDE2ODtcbiAgQElucHV0KCkgbWluUHVsbEhlaWdodCA9IDExMjtcbiAgQE91dHB1dCgpIGZpdlByb2dyZXNzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoOiBFdmVudEVtaXR0ZXI8TG9hZGluZ0NvbnRlbnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc3Bpbm5lcicpIHNwaW5uZXI6IExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50O1xuICBoaW50VmlzaWJsZSA9IGZhbHNlO1xuICBjdXJyZW50UHJvZ3Jlc3MgPSAwO1xuXG4gIHJlZnJlc2hpbmcgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBidWlsZGVyOiBBbmltYXRpb25CdWlsZGVyLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnJlZnJlc2hpbmcgPSB0cnVlO1xuICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uVG9Qcm9ncmVzcygxMTIgLyAxNjgpO1xuICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KHRoaXMpO1xuICB9XG5cbiAgY29tcGxldGVSZWZyZXNoKCkge1xuICAgIHRoaXMuc3Bpbm5lci5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZmlsbEFuaW1hdGlvbkRvbmUoKSB7XG4gICAgY29uc29sZS5sb2coJ2ZpbGxBbmltRG9uZScpO1xuICAgIHRoaXMuc3Bpbm5lci5oaWRlKCk7XG4gIH1cblxuXG4gIHNob3dIaW50KCkge1xuICAgIHRoaXMuaGludFZpc2libGUgPSB0cnVlO1xuICB9XG5cbiAgb25IaW50Q2xpY2tlZCgpIHtcbiAgICBjb25zb2xlLmxvZygnb24gaGludCBjbGlja2VkJyk7XG4gICAgdGhpcy5oaW50VmlzaWJsZSA9IGZhbHNlO1xuXG4gIH1cblxuICBwb3N0SGludChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICBpZiAoIWV2ZW50LmZyb21TdGF0ZSAmJiBldmVudC50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMuc2V0UHVsbEFuaW1hdGlvblByb2dyZXNzKDExMiAvIDE2OCk7XG4gICAgICB0aGlzLnNwaW5uZXIubG9hZCgpO1xuICAgICAgdGhpcy5yZWZyZXNoaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldFB1bGxBbmltYXRpb25Qcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPSBwcm9ncmVzcztcblxuICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuXG4gICAgICAgIHNldFN0eWxlKHRoaXMuc3Bpbm5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgkezE2OCAqIHByb2dyZXNzfXB4KSByb3RhdGVaKCR7MzYwICogcHJvZ3Jlc3N9ZGVnKWApO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUFuaW1hdGlvblRvUHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7dGhpcy5jdXJyZW50UHJvZ3Jlc3MgKiAxNjh9cHgpIHJvdGF0ZVooJHszNjAgKiB0aGlzLmN1cnJlbnRQcm9ncmVzc31kZWcpYCB9KSxcbiAgICAgICAgYW5pbWF0ZSgnODVtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7cHJvZ3Jlc3MgKiAxNjh9cHgpIHJvdGF0ZVooJHszNjAgKiBwcm9ncmVzc31kZWcpYCB9KSlcbiAgICAgIF0pO1xuXG4gICAgICBjb25zdCBwbGF5ZXIgPSBhbmltYXRpb24uY3JlYXRlKHRoaXMuc3Bpbm5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgIHBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFB1bGxBbmltYXRpb25Qcm9ncmVzcyhwcm9ncmVzcyk7XG4gICAgICAgIHBsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZml2UHVsbChwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgdGhpcy5zZXRQdWxsQW5pbWF0aW9uUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICAgIHRoaXMuc3Bpbm5lci5zaG93KCk7XG4gICAgY29uc3QgdmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIHByb2dyZXNzICogMTAwICogdGhpcy5tYXhQdWxsSGVpZ2h0IC8gdGhpcy5taW5QdWxsSGVpZ2h0KSk7XG4gICAgdGhpcy5zcGlubmVyLnNldFZhbHVlKHZhbHVlICogMC44NCk7XG4gIH1cblxuICBvblJlZnJlc2goKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgdGhpcy5zcGlubmVyLmxvYWQoKTtcbiAgfVxuXG4gIGZpdkNhbmNlbCgpIHtcbiAgICB0aGlzLm1vdmVCYWNrKCk7XG4gIH1cblxuICBhZnRlclNwaW5uZXJIaWRlKCkge1xuICAgIHRoaXMuc2V0UHVsbEFuaW1hdGlvblByb2dyZXNzKDApO1xuICAgIHRoaXMucmVmcmVzaGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc3Bpbm5lci5yZXNldCgpO1xuICB9XG5cbiAgbW92ZUJhY2soKSB7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke3RoaXMuY3VycmVudFByb2dyZXNzICogMTY4fXB4KSByb3RhdGVaKCR7MzYwICogdGhpcy5jdXJyZW50UHJvZ3Jlc3N9ZGVnKWAgfSksXG4gICAgICBhbmltYXRlKCcxNDVtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApIHJvdGF0ZVooMCknIH0pKVxuICAgIF0pO1xuXG4gICAgY29uc3QgcGxheWVyID0gYW5pbWF0aW9uLmNyZWF0ZSh0aGlzLnNwaW5uZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICBwbGF5ZXIucGxheSgpO1xuICAgIHBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRQdWxsQW5pbWF0aW9uUHJvZ3Jlc3MoMCk7XG4gICAgICB0aGlzLnNwaW5uZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICB9KTtcblxuICB9XG5cbiAgb25TcGlubmVyUHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgIHRoaXMuZml2UHJvZ3Jlc3NDaGFuZ2VkLmVtaXQocHJvZ3Jlc3MpO1xuICAgIHRoaXMucmVuZGVyZXIuXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICBzZXRTdHlsZSh0aGlzLnNwaW5uZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHsxNjggKiB0aGlzLmN1cnJlbnRQcm9ncmVzc31weCkgcm90YXRlWigkezM2MCAqIHByb2dyZXNzIC8gMjAwfWRlZylgKTtcbiAgfVxuXG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4uL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1sb2FkaW5nLWZhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLWZhYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctZmFiLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdmYWJBbmltJywgW1xuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLFxuICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSlcbiAgICBdKVxuICBdKSxcbiAgdHJpZ2dlcignc3Bpbm5lckFuaW0nLCBbXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXG4gICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pKVxuICAgIF0pXG4gIF0pLFxuICB0cmlnZ2VyKCdyb3RhdGVBbmltJywgW1xuICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiByb3RhdGUnLCBbXG4gICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbigncm90YXRlID0+IG5vcm1hbCcsIFtcbiAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2UtaW4nKVxuICAgIF0pLFxuICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZyknIH0pKSxcbiAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3JvdGF0ZVooMGRlZyknIH0pKVxuICBdKSxcbiAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgc3R5bGUoe1xuICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDE4MCxcbiAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgJ3N0cm9rZSc6ICcjREUzRTM1J1xuICAgICAgfSksXG4gICAgICBhbmltYXRlKCcxNDAwbXMgZWFzZS1vdXQnKVxuICAgIF0pLFxuICAgIHN0YXRlKCdmaWxsJywgc3R5bGUoe1xuICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAzMTUsXG4gICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgJ3N0cm9rZSc6ICcjMUI5QTU5JyxcbiAgICAgICdvcGFjaXR5JzogMFxuICAgIH0pXG4gICAgKV1cbiAgKV1cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0ZhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdmVydGljYWw/OiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbSc7XG4gIEBJbnB1dCgpIGhvcml6b250YWw/OiAnY2VudGVyJyB8ICdzdGFydCcgfCAnZW5kJztcbiAgQElucHV0KCkgZWRnZTogYm9vbGVhbjtcbiAgQElucHV0KCkgc2xvdDogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNwaW5Db2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBmYWJDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uQ29sb3IgPSAnIzAwMCc7XG4gIEBJbnB1dCgpIGNoZWNrbWFyayA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSB2aXNpYmxlID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgZml2Q29tcGxldGU6IEV2ZW50RW1pdHRlcjxMb2FkaW5nRmFiQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGluZ0ZhYkNvbXBvbmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdlJlZnJlc2g6IEV2ZW50RW1pdHRlcjxMb2FkaW5nRmFiQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGluZ0ZhYkNvbXBvbmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdkhpZGRlbjogRXZlbnRFbWl0dGVyPExvYWRpbmdGYWJDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nRmFiQ29tcG9uZW50PigpO1xuICBAT3V0cHV0KCkgZml2U2hvdzogRXZlbnRFbWl0dGVyPExvYWRpbmdGYWJDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nRmFiQ29tcG9uZW50PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3NwaW5uZXInKSBzcGlubmVyOiBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudDtcblxuICBsb2FkaW5nID0gZmFsc2U7XG4gIGljb25TdGF0ZSA9ICdub3JtYWwnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBnZXQgY2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHZlcnRpY2FsQ2xhc3MgPSAhIXRoaXMudmVydGljYWwgPyBgZmFiLXZlcnRpY2FsLSR7dGhpcy52ZXJ0aWNhbH1gIDogJyc7XG4gICAgY29uc3QgaG9yaXpvbnRhbENsYXNzID0gISF0aGlzLmhvcml6b250YWwgPyBgZmFiLWhvcml6b250YWwtJHt0aGlzLmhvcml6b250YWx9YCA6ICcnO1xuICAgIGNvbnN0IGVkZ2VDbGFzcyA9IHRoaXMuZWRnZSA/IGBmYWItZWRnZS1gIDogJyc7XG4gICAgY29uc3QgZGlzYWJsZWRDbGFzcyA9IHRoaXMuZGlzYWJsZWQgPyBgYnV0dG9uLWRpc2FibGVkYCA6ICcnO1xuXG4gICAgcmV0dXJuIGAke3ZlcnRpY2FsQ2xhc3N9ICR7aG9yaXpvbnRhbENsYXNzfSAke2VkZ2VDbGFzc30gJHtkaXNhYmxlZENsYXNzfWA7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICBpZiAodGhpcy5pY29uICE9PSAnbWQtY2hlY2ttYXJrJykge1xuICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICB9XG4gIH1cblxuICBsb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5maXZSZWZyZXNoLmVtaXQodGhpcyk7XG4gIH1cblxuICB1bmxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICB0aGlzLnNwaW5uZXIuY29tcGxldGVJbigxMDAwKTtcbiAgICB9XG4gIH1cblxuICBmaWxsQW5pbWF0aW9uRG9uZSgpIHtcbiAgICB0aGlzLmljb24gPSAnbWQtY2hlY2ttYXJrJztcbiAgfVxuXG4gIGNoYW5nZUljb25BbmRSZXZlYWwoZXZlbnQsIGljb246IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LCBpY29uKTtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnbm9ybWFsJykge1xuICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICAgIHRoaXMuaWNvblN0YXRlID0gJ25vcm1hbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdyb3RhdGUnKSB7XG4gICAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBwb3N0Q29tcGxldGUoKSB7XG4gICAgY29uc29sZS5sb2coJ3Bvc3QgY29tcGxldGUnKTtcbiAgICB0aGlzLnVubG9hZCgpO1xuICAgIHRoaXMuZml2Q29tcGxldGUuZW1pdCh0aGlzKTtcbiAgfVxuXG4gIHJvdGF0ZShwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwaW5uZXIuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGByb3RhdGVaKCR7cHJvZ3Jlc3MgLyAyMDAgKiAzNjB9ZGVnKWApO1xuICB9XG5cbiAgZmFiQW5pbURvbmUoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnZmFiIGFuaW0gZG9uZScsIGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMuZml2U2hvdy5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMuZml2SGlkZGVuLmVtaXQodGhpcyk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVGVtcGxhdGVSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtYXBwLWJhci10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLWJhci10YWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hcHAtYmFyLXRhYi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFwcEJhclRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IExvYWRpbmdGYWJDb21wb25lbnQgfSBmcm9tICcuLy4uL2xvYWRpbmctZmFiL2xvYWRpbmctZmFiLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCwgSW5wdXQsXG4gIFZpZXdDaGlsZCwgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBBZnRlclZpZXdJbml0LFxuICBBZnRlckNvbnRlbnRJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwQmFyVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vYXBwLWJhci10YWIvYXBwLWJhci10YWIuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcHBCYXJUaXRsZUxheW91dCwgQXBwQmFyRmFiUG9zaXRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWFwcC1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQge1xuXG4gIF9mYWJWaXNpYmxlID0gdHJ1ZTtcbiAgY3V0b3V0VmlzaWJsZSA9IHRydWU7XG4gIF9wb3NpdGlvbjogQXBwQmFyRmFiUG9zaXRpb247XG4gIGxlZnQgPSBmYWxzZTtcbiAgcmlnaHQgPSBmYWxzZTtcbiAgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICB0YWJzUmlnaHQ6IEFwcEJhclRhYkNvbXBvbmVudFtdO1xuICB0YWJzTGVmdDogQXBwQmFyVGFiQ29tcG9uZW50W107XG5cbiAgQFZpZXdDaGlsZCgnZmFiJykgZmFiOiBMb2FkaW5nRmFiQ29tcG9uZW50O1xuICBASW5wdXQoKSBpY29uID0gJ21kLWFkZCc7XG4gIEBJbnB1dCgpIHRpdGxlTGF5b3V0OiBBcHBCYXJUaXRsZUxheW91dCA9ICdoaWRlJztcbiAgQE91dHB1dCgpIGZpdkZhYkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxBcHBCYXJDb21wb25lbnQ+KCk7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihBcHBCYXJUYWJDb21wb25lbnQpIHRhYnM6IFF1ZXJ5TGlzdDxBcHBCYXJUYWJDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbihwb3NpdGlvbjogQXBwQmFyRmFiUG9zaXRpb24pIHtcbiAgICBjb25zb2xlLmxvZygnc2V0IHBvc2l0aW9uJywgcG9zaXRpb24sICFwb3NpdGlvbiwgdGhpcy5fcG9zaXRpb24pO1xuICAgIGlmICghcG9zaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZmFiVmlzaWJsZSkge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9mYWJWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICBpZiAoIXRoaXMuX3Bvc2l0aW9uKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgdGhpcy5vbkZhYkhpZGRlbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByZXBhcmVUYWJzKHBvc2l0aW9uKTtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZmFiVmlzaWJsZShmYWJWaXNpYmxlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX2ZhYlZpc2libGUgPT09IHRydWUgJiYgZmFiVmlzaWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdoaWRlIGZhYicpO1xuICAgICAgdGhpcy5fZmFiVmlzaWJsZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZmFiVmlzaWJsZSA9PT0gZmFsc2UgJiYgZmFiVmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jdXRvdXRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9mYWJWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfVxuICB9XG4gIGdldCBmYWJWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9mYWJWaXNpYmxlO1xuICB9XG5cblxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5wcmVwYXJlVGFicyh0aGlzLnBvc2l0aW9uKTtcbiAgfVxuXG4gIG9uRmFiSGlkZGVuKCkge1xuICAgIGNvbnNvbGUubG9nKCdmYWIgaGlkZGVuJyk7XG5cbiAgICBjb25zb2xlLmxvZygndG8gdm9pZCcpO1xuICAgIGlmICh0aGlzLnRyYW5zaXRpb25pbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3aGlsZSB0cmFuc2l0aW9uaW5nIHRvIHBvc2l0aW9uJywgdGhpcy5fcG9zaXRpb24pO1xuICAgICAgdGhpcy5zZXRQb3NpdGlvbigpO1xuICAgICAgY29uc29sZS5sb2coJ3JlbW92ZSBjdXRvdXQnKTtcbiAgICAgIHRoaXMuY3V0b3V0VmlzaWJsZSA9IGZhbHNlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG93IGN1dG91dCBhZ2FpbicpO1xuICAgICAgICB0aGlzLmN1dG91dFZpc2libGUgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdyBmYWIgYWdhaW4gYW5kIGVuZCB0cmFuc2l0aW9uJyk7XG4gICAgICAgICAgdGhpcy5fZmFiVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICAgIH0sIDIyNSk7XG4gICAgICB9LCAyMjUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1dG91dFZpc2libGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVUYWJzKHBvc2l0aW9uOiBBcHBCYXJGYWJQb3NpdGlvbikge1xuICAgIGlmIChwb3NpdGlvbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHRoaXMudGFic0xlZnQgPSB0aGlzLnRhYnMudG9BcnJheSgpLnNsaWNlKDAsIDIpO1xuICAgICAgdGhpcy50YWJzUmlnaHQgPSB0aGlzLnRhYnMudG9BcnJheSgpLnNsaWNlKDIsIDQpO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMudGFic0xlZnQgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xuICAgICAgdGhpcy50YWJzUmlnaHQgPSBbXTtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHRoaXMudGFic0xlZnQgPSBbXTtcbiAgICAgIHRoaXMudGFic1JpZ2h0ID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLl9wb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5yaWdodCA9IHRydWU7XG4gICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3Bvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZhYkNsaWNrKCkge1xuICAgIHRoaXMuZml2RmFiQ2xpY2suZW1pdCh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgUGxhdGZvcm1zIH0gZnJvbSAnQGlvbmljL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZml2SWZdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZlBsYXRmb3JtRGlyZWN0aXZlIHtcblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZml2SWYocGxhdGZvcm1zOiBQbGF0Zm9ybXNbXSkge1xuXG5cbiAgICBsZXQgc2hvdyA9IHRydWU7XG4gICAgcGxhdGZvcm1zLmZvckVhY2gocCA9PiB7XG4gICAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXMocCkpIHtcbiAgICAgICAgc2hvdyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ2lmIHBsYXRmb3JtcycsIHBsYXRmb3Jtcywgc2hvdyk7XG5cbiAgICBpZiAoc2hvdykge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVTdHlsZSwgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmaXZDZW50ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBDZW50ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICB2ZXJ0aWNhbCA9IHRydWU7XG4gIGhvcml6b250YWwgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUnKVxuICBnZXQgbXlTdHlsZSgpOiBTYWZlU3R5bGUge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICBjb25zdCBzdHlsZSA9IGBwb3NpdGlvbjogYWJzb2x1dGU7ICR7dGhpcy52ZXJ0aWNhbCAmJiB0aGlzLmhvcml6b250YWwgPyAndG9wOiA1MCU7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7JyA6IHRoaXMudmVydGljYWwgPyAndG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsnIDogJ2xlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyd9YDtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlKTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBmaXZDZW50ZXIoY2VudGVyOiB7IHZlcnRpY2FsOiBib29sZWFuLCBob3Jpem9udGFsOiBib29sZWFuIH0pIHtcbiAgICBpZiAoY2VudGVyKSB7XG4gICAgICB0aGlzLnZlcnRpY2FsID0gY2VudGVyLnZlcnRpY2FsO1xuICAgICAgdGhpcy5ob3Jpem9udGFsID0gY2VudGVyLmhvcml6b250YWw7XG4gICAgfVxuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnYXBwbHkgcG9zaXRpb24gcmVsYXRpdmUgdG8gcGFyZW50IGhlcmUnKTtcbiAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZpdlBlcm1pc3Npb25zXSdcbn0pXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbnNEaXJlY3RpdmUge1xuXG4gIGFsbG93ZWRQZXJtaXNzaW9uczogc3RyaW5nW10gPSBbXTtcbiAgdVBlcm1pc3Npb25zOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvciBQZXJtaXNzaW9uc2RpcmVjdGl2ZScpO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGZpdlBlcm1pc3Npb25zVXNlclBlcm1pc3Npb25zKHVzZXJQZXJtaXNzaW9uczogc3RyaW5nW10pIHtcbiAgICBjb25zb2xlLmxvZygndXNlclBlcm1pc3Npb25zJywgdXNlclBlcm1pc3Npb25zKTtcbiAgICB0aGlzLnVQZXJtaXNzaW9ucyA9IHVzZXJQZXJtaXNzaW9ucyB8fCBbXTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcblxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZpdlBlcm1pc3Npb25zKGFsbG93ZWQ6IHN0cmluZ1tdKSB7XG4gICAgY29uc29sZS5sb2coJ2ZpdlBlcm1pc3Npb25zJywgYWxsb3dlZCk7XG4gICAgdGhpcy5hbGxvd2VkUGVybWlzc2lvbnMgPSBhbGxvd2VkIHx8IFtdO1xuICAgIHRoaXMudXBkYXRlVmlldygpO1xuICB9XG5cbiAgY2hlY2tQZXJtaXNzaW9uKCk6IGJvb2xlYW4ge1xuICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgdGhpcy51UGVybWlzc2lvbnMuZm9yRWFjaChyb2xlID0+IHtcbiAgICAgIGlmICh0aGlzLmFsbG93ZWRQZXJtaXNzaW9ucy5maW5kKGEgPT4gYS50b1VwcGVyQ2FzZSgpID09PSByb2xlLnRvVXBwZXJDYXNlKCkpKSB7XG4gICAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdoYXMgcm9sZSBwZXJtaXNzaW9uJywgdGhpcy51UGVybWlzc2lvbnMsIHRoaXMuYWxsb3dlZFBlcm1pc3Npb25zKTtcbiAgICByZXR1cm4gc2hvdztcbiAgfVxuXG4gIHVwZGF0ZVZpZXcoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tQZXJtaXNzaW9uKCkpIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSG9zdEJpbmRpbmcsIEV2ZW50RW1pdHRlciwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2Zpdi1yaXBwbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmlwcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmlwcGxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcbiAgaG9zdDoge1xuICAgICdbc3R5bGUudG91Y2gtYWN0aW9uXSc6ICdhdXRvJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgUmlwcGxlQ29tcG9uZW50IHtcblxuICBhdXRvID0gJ2F1dG8nO1xuXG4gIHByaXZhdGUgcmlwcGxlQW5pbWF0aW9uRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHJvdW5kID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhvdmVyID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBmaXZDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wb3NpdGlvbicpIHBvc2l0aW9uO1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLnJpcHBsZShldmVudCk7XG4gICAgdGhpcy5maXZDbGljay5lbWl0KGV2ZW50KTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdwcmVzcycsIFsnJGV2ZW50J10pXG4gIFByZXNzRXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLnJpcHBsZShldmVudCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnJvdW5kJykgZ2V0IGlzUm91bmQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5yb3VuZDtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhvdmVyJykgZ2V0IGNhbkhvdmVyKCkge1xuICAgIHJldHVybiAhIXRoaXMuaG92ZXI7XG4gIH1cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblxuICAgIGNvbnNvbGUubG9nKCdyaXBwbGUgY29uc3RydWN0b3InKTtcbiAgICB0aGlzLnJpcHBsZUFuaW1hdGlvbkV2ZW50LnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNzUwKVxuICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaXBwbGUnKSwgJ3Nob3cnKTtcbiAgICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucmlwcGxlV3JhcHBlcicpLCAnc2hvdycpO1xuICAgICAgfSk7XG4gIH1cblxuICByaXBwbGUoZXZlbnQpIHtcbiAgICBjb25zdCByaXBwbGUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJpcHBsZScpO1xuICAgIGlmICghcmlwcGxlKSB7XG4gICAgICB0aGlzLnJpcHBsZUZhY3RvcnkoKTtcbiAgICB9XG4gICAgdGhpcy5yaXBwbGVBbmltYXRpb24oeyBwYWdlWDogZXZlbnQucGFnZVgsIHBhZ2VZOiBldmVudC5wYWdlWSB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgcmlwcGxlRmFjdG9yeSgpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heChyZWN0LndpZHRoLCByZWN0LmhlaWdodCkgKyAncHgnO1xuICAgIGNvbnN0IHJpcHBsZVdyYXBwZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MocmlwcGxlV3JhcHBlciwgJ3JpcHBsZVdyYXBwZXInKTtcbiAgICBjb25zdCByaXBwbGUgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHJpcHBsZSwgJ3JpcHBsZScpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocmlwcGxlLCAnaGVpZ2h0JywgcmFkaXVzKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJpcHBsZSwgJ3dpZHRoJywgcmFkaXVzKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHJpcHBsZVdyYXBwZXIsIHJpcHBsZSk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0YXJnZXQsIHJpcHBsZVdyYXBwZXIpO1xuICB9XG5cbiAgcmlwcGxlQW5pbWF0aW9uKHsgcGFnZVgsIHBhZ2VZIH0pIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCByaXBwbGUgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnJpcHBsZScpO1xuICAgIGNvbnN0IHJpcHBsZVdyYXBwZXIgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnJpcHBsZVdyYXBwZXInKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHJpcHBsZVdyYXBwZXIsICdzaG93Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhyaXBwbGUsICdzaG93Jyk7XG4gICAgY29uc3QgbGVmdCA9IHBhZ2VYIC0gcmVjdC5sZWZ0IC0gcmlwcGxlLm9mZnNldFdpZHRoIC8gMiAtIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArICdweCc7XG4gICAgY29uc3QgdG9wID0gcGFnZVkgLSByZWN0LnRvcCAtIHJpcHBsZS5vZmZzZXRIZWlnaHQgLyAyIC0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyAncHgnO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocmlwcGxlLCAndG9wJywgdG9wKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJpcHBsZSwgJ2xlZnQnLCBsZWZ0KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHJpcHBsZVdyYXBwZXIsICdzaG93Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhyaXBwbGUsICdzaG93Jyk7XG4gICAgdGhpcy5yaXBwbGVBbmltYXRpb25FdmVudC5lbWl0KCk7XG4gIH1cblxuXG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgbWVyZ2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluVmlld3BvcnRFdmVudCB7XG4gIHRhcmdldDogSFRNTEVsZW1lbnQ7XG4gIHZhbHVlOiBib29sZWFuO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZml2Vmlld3BvcnRdJyxcbiAgZXhwb3J0QXM6ICd2aWV3cG9ydCdcbn0pXG5leHBvcnQgY2xhc3MgVmlld3BvcnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQElucHV0KCkgb2Zmc2V0ID0gMDtcbiAgQE91dHB1dCgpIGZpdkFwcGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8SW5WaWV3cG9ydEV2ZW50PigpO1xuICBAT3V0cHV0KCkgZml2RGlzYXBwZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxJblZpZXdwb3J0RXZlbnQ+KCk7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgdmlzaWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb250ZW50OiBDb250ZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xvc2VzdCgnaW9uLWNvbnRlbnQnKTtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgY29udGVudC5zY3JvbGxFdmVudHMgPSB0cnVlO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJ2lvbi1jb250ZW50JyksICdpb25TY3JvbGwnKVxuICAgICAgLnBpcGUobWVyZ2UoZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpKSwgZGVib3VuY2VUaW1lKDUwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGVjaygpKTtcblxuICAgIGNvbnNvbGUubG9nKCd2aXNpYmxlJywgdGhpcy52aXNpYmxlLCBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSxcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIHdpbmRvdy5pbm5lckhlaWdodCArIHRoaXMub2Zmc2V0KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrKCkge1xuICAgIGNvbnN0IGV2ZW50OiBJblZpZXdwb3J0RXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgdmFsdWU6XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpICYmXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PVxuICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgKyB0aGlzLm9mZnNldFxuICAgIH07XG5cbiAgICBpZiAoZXZlbnQudmFsdWUgPT09IHRydWUpIHtcblxuICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5maXZBcHBlYXIuZW1pdChldmVudCk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5maXZEaXNhcHBlYXIuZW1pdChldmVudCk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaXNWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZpc2libGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRlbnQgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc2tpcFdoaWxlLCB0YWtlVW50aWwsIGxhc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZml2UHVsbF0nXG59KVxuZXhwb3J0IGNsYXNzIFB1bGxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG1pblB1bGxIZWlnaHQgPSAxMTI7XG4gIEBJbnB1dCgpIG1heFB1bGxIZWlnaHQgPSAxNjg7XG4gIEBJbnB1dCgpIGVuYWJsZWQgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBmaXZDYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGZpdlB1bGwgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBzY3JvbGxZOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIEBIb3N0KCkgcHJpdmF0ZSBjb250ZW50OiBDb250ZW50KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuY29udGVudC5zY3JvbGxFdmVudHMgPSB0cnVlO1xuICAgIHRoaXMuY29udGVudC5nZXRTY3JvbGxFbGVtZW50KCkudGhlbihzID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsWSA9IHM7IC8vIG5lZWRlZCBmb3Igc2Nyb2xsVG9wXG4gICAgICB0aGlzLnNldHVwUGFuTGlzdGVuZXIoKTtcbiAgICB9KTtcblxuXG4gIH1cblxuICBwcml2YXRlIHNldHVwUGFuTGlzdGVuZXIoKSB7XG4gICAgY29uc3QgdG91Y2hzdGFydCQgPSBmcm9tRXZlbnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0b3VjaHN0YXJ0Jyk7XG4gICAgY29uc3QgdG91Y2htb3ZlJCA9IGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RvdWNobW92ZScpO1xuICAgIGNvbnN0IHRvdWNoZW5kJCA9IGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RvdWNoZW5kJyk7XG4gICAgY29uc3QgdG91Y2hjYW5jZWwkID0gZnJvbUV2ZW50KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndG91Y2hjYW5jZWwnKTtcbiAgICBjb25zdCBlbmQkID0gbWVyZ2UodG91Y2hlbmQkLCB0b3VjaGNhbmNlbCQpO1xuXG4gICAgY29uc3QgZHJhZ0F0VG9wID0gdG91Y2hzdGFydCRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoZSA9PiB0aGlzLnNjcm9sbFkuc2Nyb2xsVG9wID09PSAwICYmIHRoaXMuZW5hYmxlZClcbiAgICAgICk7XG5cbiAgICBjb25zdCBkcmFnVG9wRG93biA9IGRyYWdBdFRvcFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoc3RhcnQ6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0WSA9IHN0YXJ0LnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgcmV0dXJuIHRvdWNobW92ZSRcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBtYXAoKG1vdmU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRZID0gbW92ZS50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBzdGFydEV2ZW50OiBzdGFydCxcbiAgICAgICAgICAgICAgICAgIG1vdmVFdmVudDogbW92ZSxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0WTogc3RhcnRZLFxuICAgICAgICAgICAgICAgICAgY3VycmVudFk6IGN1cnJlbnRZLFxuICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBjdXJyZW50WSAtIHN0YXJ0WVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBza2lwV2hpbGUoZHJhZyA9PiBkcmFnLm9mZnNldCA8IDApLFxuICAgICAgICAgICAgICB0YWtlVW50aWwoZW5kJClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pKTtcblxuXG4gICAgZHJhZ1RvcERvd24uZm9yRWFjaChkcmFncyA9PiB7XG4gICAgICBkcmFncy5mb3JFYWNoKGRyYWcgPT4ge1xuICAgICAgICBkcmFnLm1vdmVFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBkcmFnLm9mZnNldCAvIDI7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCA+IHRoaXMubWF4UHVsbEhlaWdodCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2Zmc2V0IDw9IHRoaXMubWF4UHVsbEhlaWdodCkge1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maXZQdWxsLmVtaXQob2Zmc2V0IC8gdGhpcy5tYXhQdWxsSGVpZ2h0KTtcbiAgICAgIH0pO1xuXG4gICAgICBkcmFnc1xuICAgICAgICAucGlwZShcbiAgICAgICAgICBsYXN0KClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKGRyYWcgPT4ge1xuICAgICAgICAgIGNvbnN0IG9mZnNldCA9IGRyYWcub2Zmc2V0IC8gMjtcbiAgICAgICAgICBjb25zdCByZWZyZXNoID0gb2Zmc2V0ID49IHRoaXMubWluUHVsbEhlaWdodDtcbiAgICAgICAgICBpZiAocmVmcmVzaCkge1xuICAgICAgICAgICAgdGhpcy5maXZSZWZyZXNoLmVtaXQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maXZDYW5jZWwuZW1pdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiByb3RhdGUnLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbigncm90YXRlID0+IG5vcm1hbCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAnc2NhbGUoMCkgcm90YXRlWig0NWRlZyknIH0pKSxcbiAgICAgIHN0YXRlKCdub3JtYWwnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAnc2NhbGUoMSkgcm90YXRlWigwZGVnKScgfSkpXG4gICAgXSksXG4gICAgdHJpZ2dlcignc2NhbGVBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiBub3JtYWwnLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSksXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignbm9ybWFsID0+IHNjYWxlJywgW1xuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3NjYWxlID0+IG5vcm1hbCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdzY2FsZScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSkpLFxuICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSkpXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBfbmFtZTogc3RyaW5nO1xuICBfaW5kaWNhdG9yVmFsdWUgPSAtMTtcbiAgdGVtcFZhbHVlOiBudW1iZXI7XG4gIHN0YXRlOiAnbm9ybWFsJyB8ICdyb3RhdGUnID0gJ25vcm1hbCc7XG4gIHRlbXA6IHN0cmluZztcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQE91dHB1dCgpIHRyYW5zaXRpb25Eb25lID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgaW5kaWNhdG9yU3RhdGU6ICdub3JtYWwnIHwgJ3NjYWxlJyA9ICdzY2FsZSc7XG4gIGluZGljYXRvclZhbHVlU3RhdGU6ICdub3JtYWwnIHwgJ3NjYWxlJyA9ICdzY2FsZSc7XG5cbiAgQElucHV0KClcbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fbmFtZSkge1xuICAgICAgdGhpcy50cmFuc2Zvcm0obmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBpbmRpY2F0b3JWYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pbmRpY2F0b3JWYWx1ZTtcbiAgfVxuICBzZXQgaW5kaWNhdG9yVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMudHJhbnNmb3JtSW5kaWNhdG9yKHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICB0cmFuc2Zvcm0obmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy50ZW1wID0gbmFtZTtcbiAgICB0aGlzLnN0YXRlID0gJ3JvdGF0ZSc7XG4gIH1cblxuICB0cmFuc2Zvcm1JbmRpY2F0b3IodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuX2luZGljYXRvclZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmluZGljYXRvclN0YXRlID0gJ3NjYWxlJztcbiAgICAgIHRoaXMuaW5kaWNhdG9yVmFsdWVTdGF0ZSA9ICdzY2FsZSc7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgdGhpcy50ZW1wVmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaW5kaWNhdG9yU3RhdGUgPSAnbm9ybWFsJztcbiAgICAgIHRoaXMuaW5kaWNhdG9yVmFsdWVTdGF0ZSA9ICdzY2FsZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5kaWNhdG9yU3RhdGUgPSAnc2NhbGUnO1xuICAgICAgaWYgKHRoaXMuaW5kaWNhdG9yVmFsdWVTdGF0ZSA9PT0gJ3NjYWxlJykge1xuICAgICAgICB0aGlzLmluZGljYXRvclZhbHVlU3RhdGUgPSAnbm9ybWFsJztcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGVtcFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yVmFsdWVTdGF0ZSA9ICdzY2FsZSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuXG4gIHJvdGF0ZUFuaW1Eb25lKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ25vcm1hbCcgJiYgZXZlbnQudG9TdGF0ZSA9PT0gJ3JvdGF0ZScpIHtcbiAgICAgIHRoaXMuX25hbWUgPSB0aGlzLnRlbXA7XG4gICAgICB0aGlzLnN0YXRlID0gJ25vcm1hbCc7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3JvdGF0ZScgJiYgZXZlbnQudG9TdGF0ZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkRvbmUuZW1pdCh0aGlzLl9uYW1lKTtcbiAgICB9XG4gIH1cblxuICBpbmNyZW1lbnREb25lKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ25vcm1hbCcgJiYgZXZlbnQudG9TdGF0ZSA9PT0gJ3NjYWxlJykge1xuICAgICAgaWYgKHRoaXMudGVtcFZhbHVlID4gMCkge1xuICAgICAgICB0aGlzLmluZGljYXRvclZhbHVlU3RhdGUgPSAnbm9ybWFsJztcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yVmFsdWUgPSB0aGlzLnRlbXBWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2luZGljYXRvclZhbHVlID0gdGhpcy50ZW1wVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2RpYWxvZ0FuaW0nLCBbXG4gICAgICBzdGF0ZSgnYm90dG9tJywgc3R5bGUoeyBib3R0b206IDAgfSkpLFxuICAgICAgc3RhdGUoJ3RvcCcsIHN0eWxlKHsgdG9wOiAwIH0pKSxcbiAgICAgIHN0YXRlKCdjZW50ZXInLCBzdHlsZSh7XG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnYm90dG9tLXNsaWRlJywgc3R5bGUoeyBib3R0b206IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknIH0pKSxcbiAgICAgIHN0YXRlKCd0b3Atc2xpZGUnLCBzdHlsZSh7IHRvcDogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknIH0pKSxcbiAgICAgIHN0YXRlKCdjZW50ZXItc2xpZGUnLCBzdHlsZShcbiAgICAgICAgeyBib3R0b206IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknIH1cbiAgICAgICkpLFxuICAgICAgc3RhdGUoJ2JvdHRvbS1mYWRlJywgc3R5bGUoeyBib3R0b206IDAsIG9wYWNpdHk6IDAgfSkpLFxuICAgICAgc3RhdGUoJ3RvcC1mYWRlJywgc3R5bGUoeyB0b3A6IDAsIG9wYWNpdHk6IDAsIGRpc3BsYXk6ICdub25lJyB9KSksXG4gICAgICBzdGF0ZSgnY2VudGVyLWZhZGUnLCBzdHlsZSh7XG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IConLCBbXG4gICAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdmVydGljYWxBbGlnbjogJ2JvdHRvbScgfCAnY2VudGVyJyB8ICd0b3AnID0gJ2NlbnRlcic7XG4gIEBJbnB1dCgpIGFuaW1hdGlvbjogJ3NsaWRlJyB8ICdmYWRlJyA9ICdmYWRlJztcbiAgdmlzaWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBiYWNrZHJvcDogdHJ1ZTtcbiAgQE91dHB1dCgpIGZpdkNsb3NlOiBFdmVudEVtaXR0ZXI8RGlhbG9nQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdk9wZW46IEV2ZW50RW1pdHRlcjxEaWFsb2dDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudmlzaWJsZScpIGdldCBpc1Zpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZTtcbiAgfVxuXG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEFwcEJhclRpdGxlTGF5b3V0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1hcHAtYmFyLXRhYi1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1iYXItdGFiLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hcHAtYmFyLXRhYi1jb250ZW50LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQmFyVGFiQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRpdGxlTGF5b3V0OiBBcHBCYXJUaXRsZUxheW91dCA9ICdoaWRlJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgZ2V0IGNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGxhYmVsLSR7dGhpcy50aXRsZUxheW91dH1gO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXY6IE5hdkNvbnRyb2xsZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25DbGljaygpIHtcbiAgICB0aGlzLm5hdi5uYXZpZ2F0ZVJvb3QodGhpcy5ocmVmKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2FmZVVybCwgU2FmZVN0eWxlLCBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEluamVjdG9yLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudFJlZixcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSwgQW5pbWF0aW9uQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBtZXJnZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xuaW1wb3J0IHsgRG9tQ29udHJvbGxlciwgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBmbGF0TWFwLCB0YXAsIGZpbHRlciwgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwsIHRha2UsIHJlcGVhdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWltYWdlLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS12aWV3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS12aWV3ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2JhY2tkcm9wJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgYW5pbWF0ZSgnNzVtcyAxMjVtcyBlYXNlLW91dCcsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEgfSksXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignZmFkZScsIFtcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEgfSksXG4gICAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2ltYWdlRW50ZXInLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgc3R5bGUoeyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAne3t0b3B9fXB4JywgbGVmdDogJ3t7bGVmdH19cHgnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwwKScsIGhlaWdodDogJ3t7aGVpZ2h0fX1weCcsIHdpZHRoOiAne3t3aWR0aH19cHgnIH0pLFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgIGFuaW1hdGUoJzE1MG1zJywgc3R5bGUoeyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnNTAlJywgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLC01MCUpJywgaGVpZ2h0OiAnYXV0bycsIHdpZHRoOiAnMTAwJScgfSkpXG4gICAgICBdLCB7IHBhcmFtczogeyB0b3A6ICcwcHgnLCBsZWZ0OiAnMHB4JywgaGVpZ2h0OiAnKicsIHdpZHRoOiAnKicgfSB9KVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2ltYWdlTGVhdmUnLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgIHN0eWxlKHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJ3t7cGFuVG9wfX0nLCBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsLTUwJSknLCBoZWlnaHQ6ICdhdXRvJywgd2lkdGg6ICcxMDAlJyB9KSxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICBhbmltYXRlKCcyMjVtcycsIHN0eWxlKHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJ3t7dG9wfX1weCcsIGxlZnQ6ICd7e2xlZnR9fXB4JywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsMCknLCBoZWlnaHQ6ICd7e2hlaWdodH19cHgnLCB3aWR0aDogJ3t7d2lkdGh9fXB4JyB9KVxuICAgICAgICApXG4gICAgICBdLCB7IHBhcmFtczogeyB0b3A6ICcwcHgnLCBsZWZ0OiAnMHB4JywgaGVpZ2h0OiAnKicsIHdpZHRoOiAnKicsIHBhblRvcDogJzUwJScgfSB9KVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUnKVxuICBnZXQgbXlTdHlsZSgpOiBTYWZlU3R5bGUge1xuICAgIGlmICh0aGlzLl9pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IGRpc3BsYXk6IGJsb2NrO2ApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGBoZWlnaHQ6ICR7dGhpcy5oZWlnaHR9cHg7IHdpZHRoOiAke3RoaXMud2lkdGh9cHg7IGRpc3BsYXk6IGJsb2NrO2ApO1xuICAgIH1cbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ3RodW1ibmFpbCcpIHRodW1ibmFpbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaW1hZ2VWaWV3JykgaW1hZ2VWaWV3OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdmb290ZXInKSBmb290ZXI6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIHNyYzogU2FmZVVybDtcbiAgQElucHV0KCkgaGVpZ2h0O1xuICBASW5wdXQoKSB3aWR0aDtcbiAgQElucHV0KCkgcHVsbERpc3RhbmNlID0gMTUwO1xuICBASW5wdXQoKSBhY3Rpb25zOiBJbWFnZVZpZXdlckFjdGlvbltdID0gW107XG4gIEBPdXRwdXQoKSBmaXZDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8SW1hZ2VWaWV3ZXJDb21wb25lbnQ+O1xuICBfaXNPcGVuID0gZmFsc2U7XG4gIF9jb250cm9sc1Zpc2libGUgPSB0cnVlO1xuICB0aHVtYm5haWxWaXNpYmxlID0gdHJ1ZTtcblxuICB0aHVtYm5haWxQb3NpdGlvbjogeyBvZmZzZXRUb3A6IG51bWJlciwgb2Zmc2V0TGVmdDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwgcGFuVG9wPzogc3RyaW5nIH07XG4gIHNjYWxlID0gMTtcbiAgdG9wOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbiAgcGluY2hlbmQ6IFN1YnNjcmlwdGlvbjtcbiAgcGluY2g6IFN1YnNjcmlwdGlvbjtcbiAgdmVydGljYWxQYW46IFN1YnNjcmlwdGlvbjtcbiAgcGFuUmVtb3ZlOiBTdWJzY3JpcHRpb247XG4gIHBhblJlc2V0OiBTdWJzY3JpcHRpb247XG4gIGRvdWJsZXRhcDogU3Vic2NyaXB0aW9uO1xuICBzaW5nbGV0YXA6IFN1YnNjcmlwdGlvbjtcbiAgY2xvc2VTdWI6IFN1YnNjcmlwdGlvbjtcbiAgcGluY2hQYW46IFN1YnNjcmlwdGlvbjtcblxuICBzaW5nbGV0YXBIYW1tZXI7XG4gIGRvdWJsZVRhcEhhbW1lcjtcbiAgcGluY2hIYW1tZXI7XG4gIHBhbkhhbW1lcjtcblxuXG4gIHBpbmNoQ2VudGVyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBkb21DdHJsOiBEb21Db250cm9sbGVyLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNoYW5nZTogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBhbmltYXRpb246IEFuaW1hdGlvbkJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvcGVuKGV2ZW50KSB7XG4gICAgdGhpcy5hcHBlbmRDb21wb25lbnRUb0JvZHkoZXZlbnQpO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oZXZlbnQpIHtcbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLnRodW1ibmFpbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7IG9mZnNldFRvcDogYm91bmRzLnRvcCwgb2Zmc2V0TGVmdDogYm91bmRzLmxlZnQsIGhlaWdodDogZXZlbnQuc3JjRWxlbWVudC5jbGllbnRIZWlnaHQsIHdpZHRoOiBldmVudC5zcmNFbGVtZW50LmNsaWVudFdpZHRoIH07XG4gIH1cblxuICBhcHBlbmRDb21wb25lbnRUb0JvZHkoZXZlbnQpIHtcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoSW1hZ2VWaWV3ZXJDb21wb25lbnQpXG4gICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXG4gICAgdGhpcy50aHVtYm5haWxWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuX2lzT3BlbiA9IHRydWU7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc3JjID0gdGhpcy5zcmM7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRSZWY7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UudGh1bWJuYWlsUG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KTtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UudGh1bWJuYWlsUG9zaXRpb24ud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS50aHVtYm5haWxQb3NpdGlvbi5oZWlnaHQ7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcblxuICAgIHRoaXMuY2xvc2VTdWIgPSB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5maXZDbG9zZVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMudGh1bWJuYWlsVmlzaWJsZSA9IHRydWU7XG4gICAgICB9KTtcblxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG4gICAgY29uc3QgZG9tRWxlbSA9ICh0aGlzLmNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcbiAgICAgIC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xuXG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgaWYgKCF0aGlzLnRodW1ibmFpbFBvc2l0aW9uLnBhblRvcCkge1xuICAgICAgdGhpcy50aHVtYm5haWxQb3NpdGlvbi5wYW5Ub3AgPSB0aGlzLnRvcCArICdweCc7XG4gICAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICB9XG4gIGNsZWFyU3Vic2NyaXB0aW9ucygpOiBhbnkge1xuICAgIHRoaXMucGFuUmVtb3ZlLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5wYW5SZXNldC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMudmVydGljYWxQYW4udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnBpbmNoLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5waW5jaGVuZC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc2luZ2xldGFwLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5kb3VibGV0YXAudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnBpbmNoUGFuLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW1vdmVIYW1tZXJNYW5hZ2VyKCk6IGFueSB7XG4gICAgdGhpcy5zaW5nbGV0YXBIYW1tZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuZG91YmxlVGFwSGFtbWVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLnBpbmNoSGFtbWVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLnBhbkhhbW1lci5kZXN0cm95KCk7XG4gIH1cblxuICBkZXRhY2goZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLmFwcFJlZi5kZXRhY2hWaWV3KHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICAgIHRoaXMuY2xlYXJTdWJzY3JpcHRpb25zKCk7XG4gICAgICB0aGlzLnJlbW92ZUhhbW1lck1hbmFnZXIoKTtcbiAgICAgIHRoaXMuZml2Q2xvc2UuZW1pdCgpO1xuICAgICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy50b3AgPSB0aGlzLnBsYXRmb3JtLmhlaWdodCgpIC8gMjtcbiAgICB0aGlzLmxlZnQgPSAwO1xuICAgIHRoaXMucGluY2hDZW50ZXIgPSB7IHg6IHRoaXMucGxhdGZvcm0ud2lkdGgoKSAvIDIsIHk6IHRoaXMucGxhdGZvcm0uaGVpZ2h0KCkgLyAyIH07XG4gIH1cblxuICBvbkVudGVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICAvLyBzZXR1cCB2YXJpYWJsZXMgaW4gZnVsbHNjcmVlblxuICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLnNldHVwQ2xpY2tzKCk7XG4gICAgICB0aGlzLnNldHVwUGFuKCk7XG4gICAgICB0aGlzLnNldHVwUGluY2goKTtcbiAgICB9XG4gIH1cbiAgc2V0dXBDbGlja3MoKTogYW55IHtcbiAgICB0aGlzLmRvdWJsZVRhcEhhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5pbWFnZVZpZXcubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5kb3VibGVUYXBIYW1tZXIuZ2V0KCd0YXAnKS5zZXQoeyBlbmFibGU6IHRydWUsIHRhcHM6IDIgfSk7XG5cbiAgICB0aGlzLnNpbmdsZXRhcEhhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5pbWFnZVZpZXcubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5zaW5nbGV0YXBIYW1tZXIuZ2V0KCd0YXAnKS5zZXQoeyBlbmFibGU6IHRydWUsIHRhcHM6IDEgfSk7XG5cbiAgICBjb25zdCBkb3VibGV0YXAkID0gZnJvbUV2ZW50KHRoaXMuZG91YmxlVGFwSGFtbWVyLCAndGFwJyk7XG4gICAgY29uc3Qgc2luZ2xldGFwJCA9IGZyb21FdmVudCh0aGlzLnNpbmdsZXRhcEhhbW1lciwgJ3RhcCcpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgICAgIHRha2VVbnRpbChkb3VibGV0YXAkKSxcbiAgICAgICAgZmlsdGVyKChldmVudDogYW55KSA9PiBldmVudC50YXBDb3VudCA9PT0gMSksXG4gICAgICAgIHJlcGVhdCgpXG4gICAgICApO1xuXG4gICAgdGhpcy5kb3VibGV0YXAgPSBkb3VibGV0YXAkLnN1YnNjcmliZShyZXMgPT4gdGhpcy5oYW5kbGVEb3VibGVUYXAocmVzKSk7XG4gICAgdGhpcy5zaW5nbGV0YXAgPSBzaW5nbGV0YXAkLnN1YnNjcmliZShyZXMgPT4gdGhpcy5oYW5kbGVTaW5nbGVUYXAoKSk7XG4gIH1cblxuICBzZXR1cFBpbmNoKCkge1xuICAgIHRoaXMucGluY2hIYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuaW1hZ2VWaWV3Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMucGluY2hIYW1tZXIuZ2V0KCdwaW5jaCcpLnNldCh7IGVuYWJsZTogdHJ1ZSB9KTtcblxuICAgIGNvbnN0IHBpbmNoZW5kJCA9IGZyb21FdmVudCh0aGlzLnBpbmNoSGFtbWVyLCAncGluY2hlbmQnKTtcbiAgICB0aGlzLnBpbmNoZW5kID0gcGluY2hlbmQkLnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4ge1xuXG4gICAgICB0aGlzLnNjYWxlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5zY2FsZSAqIGV2ZW50LnNjYWxlLCA4KSk7XG4gICAgICBpZiAodGhpcy5zY2FsZSA8IDEpIHtcbiAgICAgICAgdGhpcy5yZXNldFNjYWxlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwaW5jaCQgPSBmcm9tRXZlbnQodGhpcy5waW5jaEhhbW1lciwgJ3BpbmNoJyk7XG4gICAgdGhpcy5waW5jaCA9IHBpbmNoJFxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnBpbmNoQ2VudGVyID0gZXZlbnQuY2VudGVyO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybShldmVudC5zY2FsZSk7XG4gICAgICAgIHRoaXMubW92ZShldmVudCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNldHVwUGFuKCkge1xuICAgIC8vIGNsb3NlIHBhbnNcbiAgICBjb25zdCBwdWxsRGlzdGFuY2UgPSAxMjA7XG4gICAgdGhpcy5wYW5IYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuaW1hZ2VWaWV3Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMucGFuSGFtbWVyLmdldCgncGFuJykuc2V0KHsgZW5hYmxlOiB0cnVlLCBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMIH0pO1xuICAgIGNvbnN0IHBhbnN0YXJ0ID0gZnJvbUV2ZW50KHRoaXMucGFuSGFtbWVyLCAncGFuc3RhcnQnKTtcblxuICAgIGNvbnN0IHBhbmVuZCA9IGZyb21FdmVudCh0aGlzLnBhbkhhbW1lciwgJ3BhbmVuZCcpO1xuICAgIGNvbnN0IHBhbm1vdmUgPSBmcm9tRXZlbnQodGhpcy5wYW5IYW1tZXIsICdwYW5tb3ZlJyk7XG5cbiAgICBjb25zdCBwYW5kb3duID0gZnJvbUV2ZW50KHRoaXMucGFuSGFtbWVyLCAncGFuZG93bicpO1xuICAgIGNvbnN0IHBhbnVwID0gZnJvbUV2ZW50KHRoaXMucGFuSGFtbWVyLCAncGFudXAnKTtcblxuICAgIGNvbnN0IGRvd24gPSBwYW5zdGFydFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZsYXRNYXAoKCkgPT4gcGFuZG93bi5waXBlKFxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLnNjYWxlID09PSAxKSkpXG4gICAgICApO1xuXG4gICAgY29uc3QgdXAgPSBwYW5zdGFydFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZsYXRNYXAoKCkgPT4gcGFudXAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5zY2FsZSA9PT0gMSkpKVxuICAgICAgKTtcblxuICAgIGNvbnN0IHZlcnRpY2FsUGFuJCA9IG1lcmdlKHVwLCBkb3duKTtcblxuICAgIHRoaXMudmVydGljYWxQYW4gPSB2ZXJ0aWNhbFBhbiQuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXRCb3R0b20odGhpcy5jYWxjdWxhdGVCb3R0b20ocmVzKSk7XG4gICAgICB0aGlzLnNldFRvcCh0aGlzLmNhbGN1bGF0ZVRvcChyZXMpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHBpbmNoUGFuTW92ZSA9IHBhbm1vdmVcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5zY2FsZSA+IDEpXG4gICAgICApO1xuXG4gICAgY29uc3QgcGluY2hQYW4kID0gcGFuc3RhcnRcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKGV2ZW50OiBhbnkpID0+IHRoaXMucGluY2hDZW50ZXIgPSBldmVudC5jZW50ZXIpLFxuICAgICAgICBmbGF0TWFwKCgpID0+IHBpbmNoUGFuTW92ZVxuICAgICAgICApKTtcblxuICAgIHRoaXMucGluY2hQYW4gPSBwaW5jaFBhbiRcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMubW92ZShyZXMpO1xuICAgICAgfSk7XG5cblxuICAgIHRoaXMucGFuUmVtb3ZlID0gcGFuZW5kXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChldmVudDogYW55KSA9PiB0aGlzLnNjYWxlID09PSAxICYmIGV2ZW50LmRpc3RhbmNlID4gcHVsbERpc3RhbmNlICYmIGV2ZW50Lm1heFBvaW50ZXJzID09PSAxKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4geyB0aGlzLnJlbW92ZSgpOyB9KTtcblxuICAgIHRoaXMucGFuUmVzZXQgPSBwYW5lbmRcbiAgICAgIC5waXBlKFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgIGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gdGhpcy5zY2FsZSA9PT0gMSAmJiBldmVudC5kaXN0YW5jZSA8PSBwdWxsRGlzdGFuY2UgfHwgdGhpcy5zY2FsZSA9PT0gMSAmJiBldmVudC5kaXN0YW5jZSA+IHB1bGxEaXN0YW5jZSAmJiBldmVudC5tYXhQb2ludGVycyA+IDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLnJlc2V0UGFuKCk7XG4gICAgICAgIHRoaXMucmVzZXRGb290ZXIodGhpcy5jYWxjdWxhdGVCb3R0b20oZXZlbnQpKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbW92ZShldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLnBpbmNoQ2VudGVyKSB7XG4gICAgICB0aGlzLnBpbmNoQ2VudGVyID0gZXZlbnQuY2VudGVyO1xuICAgIH1cbiAgICBjb25zdCBtb3ZlViA9IGV2ZW50LmNlbnRlci55IC0gdGhpcy5waW5jaENlbnRlci55O1xuICAgIGNvbnN0IG1vdmVIID0gZXZlbnQuY2VudGVyLnggLSB0aGlzLnBpbmNoQ2VudGVyLng7XG4gICAgdGhpcy5waW5jaENlbnRlciA9IGV2ZW50LmNlbnRlcjtcbiAgICBjb25zdCBuZXdYID0gdGhpcy5yZXN0cmljdFJhd1Bvc1godGhpcy5sZWZ0ICsgbW92ZUgpO1xuICAgIGNvbnN0IG5ld1kgPSB0aGlzLnJlc3RyaWN0UmF3UG9zWSh0aGlzLnRvcCArIG1vdmVWKTtcblxuICAgIHRoaXMuc2V0VG9wKG5ld1kpO1xuICAgIHRoaXMuc2V0TGVmdChuZXdYKTtcbiAgfVxuXG4gIHJlc3RyaWN0UmF3UG9zWChwb3MpIHtcbiAgICBjb25zdCB2aWV3cG9ydERpbSA9IHRoaXMucGxhdGZvcm0ud2lkdGgoKTtcbiAgICBjb25zdCBpbWFnZVdpZHRoID0gdGhpcy5nZXRDdXJyZW50SW1hZ2VXaWR0aCgpIC8gdGhpcy5zY2FsZTtcbiAgICBjb25zdCBib3JkZXJQb3MgPSAodGhpcy5nZXRDdXJyZW50SW1hZ2VXaWR0aCgpIC0gTWF0aC5taW4odmlld3BvcnREaW0sIGltYWdlV2lkdGgpKSAvIDI7XG4gICAgaWYgKHBvcyA8IGJvcmRlclBvcyAqIC0xKSB7XG4gICAgICByZXR1cm4gYm9yZGVyUG9zICogLTE7XG4gICAgfSBlbHNlIGlmIChwb3MgPiBib3JkZXJQb3MpIHtcbiAgICAgIHJldHVybiBib3JkZXJQb3M7XG4gICAgfVxuICAgIHJldHVybiBwb3M7XG4gIH1cblxuICByZXN0cmljdFJhd1Bvc1kocG9zKSB7XG4gICAgY29uc3Qgdmlld3BvcnREaW0gPSB0aGlzLnBsYXRmb3JtLmhlaWdodCgpO1xuICAgIGNvbnN0IGltYWdlSGVpZ2h0ID0gdGhpcy5nZXRDdXJyZW50SW1hZ2VIZWlnaHQoKSAvIHRoaXMuc2NhbGU7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5wbGF0Zm9ybS5oZWlnaHQoKSAvIDI7XG4gICAgbGV0IGJvcmRlclBvcyA9IHBvcztcbiAgICBpZiAodGhpcy5nZXRDdXJyZW50SW1hZ2VIZWlnaHQoKSA+IHRoaXMucGxhdGZvcm0uaGVpZ2h0KCkpIHtcbiAgICAgIGJvcmRlclBvcyA9ICh0aGlzLmdldEN1cnJlbnRJbWFnZUhlaWdodCgpIC0gTWF0aC5tYXgodmlld3BvcnREaW0sIGltYWdlSGVpZ2h0KSkgLyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3JkZXJQb3MgPSAodGhpcy5nZXRDdXJyZW50SW1hZ2VIZWlnaHQoKSAtIE1hdGgubWluKHZpZXdwb3J0RGltLCBpbWFnZUhlaWdodCkpIC8gMjtcbiAgICB9XG4gICAgaWYgKHBvcyA8IGJvcmRlclBvcyAqIC0xICsgb2Zmc2V0KSB7XG4gICAgICByZXR1cm4gYm9yZGVyUG9zICogLTEgKyBvZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChwb3MgPiBib3JkZXJQb3MgKyBvZmZzZXQpIHtcbiAgICAgIHJldHVybiBib3JkZXJQb3MgKyBvZmZzZXQ7XG4gICAgfVxuICAgIHJldHVybiBwb3M7XG4gIH1cblxuICBzZXRCb3R0b20oYm90dG9tOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fY29udHJvbHNWaXNpYmxlKSB7XG4gICAgICB0aGlzLmRvbUN0cmwud3JpdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZm9vdGVyLm5hdGl2ZUVsZW1lbnQsICdib3R0b20nLCBgLSR7Ym90dG9tfXB4YCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjYWxjdWxhdGVQYW5Qcm9ncmVzcyhldmVudDogYW55KTogbnVtYmVyIHtcbiAgICBjb25zdCBwdWxsRGlzdGFuY2UgPSAxMjA7XG4gICAgcmV0dXJuIE1hdGguYWJzKDEwMCAqIGV2ZW50LmRpc3RhbmNlIC8gcHVsbERpc3RhbmNlKTtcbiAgfVxuXG4gIHRyYW5zZm9ybShzY2FsZSkge1xuICAgIGNvbnN0IHMgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLnNjYWxlICogc2NhbGUsIDgpKTtcbiAgICB0aGlzLnNldFNjYWxlKHMsIHRydWUpO1xuICB9XG5cbiAgY2FsY3VsYXRlQm90dG9tKGV2ZW50KSB7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmNhbGN1bGF0ZVBhblByb2dyZXNzKGV2ZW50KTtcbiAgICByZXR1cm4gZXZlbnQuZGlzdGFuY2UgKiBwcm9ncmVzcyAvIDEwMDtcbiAgfVxuXG4gIHNldFNjYWxlKHNjYWxlLCBza2lwPykge1xuICAgIGlmICghc2tpcCkge1xuICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgIH1cbiAgICB0aGlzLmRvbUN0cmwud3JpdGUoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoJHtzY2FsZX0pYCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRUb3AodG9wKSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy50aHVtYm5haWxQb3NpdGlvbi5wYW5Ub3AgPSB0aGlzLnRvcCArICdweCc7XG4gICAgdGhpcy5kb21DdHJsLndyaXRlKCgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5pbWFnZVZpZXcubmF0aXZlRWxlbWVudCwgJ3RvcCcsIGAke3RvcH1weGApO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TGVmdChsZWZ0KSB7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLmRvbUN0cmwud3JpdGUoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIGAke2xlZnR9cHhgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVRvcChldmVudDogYW55KSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBldmVudC5kaXN0YW5jZTtcbiAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGguYWJzKDEwMCAqIGRpc3RhbmNlIC8gdGhpcy5wdWxsRGlzdGFuY2UpO1xuXG4gICAgaWYgKHByb2dyZXNzIDw9IDEwMCkge1xuICAgICAgcmV0dXJuIHRoaXMucGxhdGZvcm0uaGVpZ2h0KCkgLyAyICsgZGlzdGFuY2U7XG4gICAgfSBlbHNlIGlmIChwcm9ncmVzcyA+PSAxMDAgJiYgcHJvZ3Jlc3MgPCAyMDApIHtcbiAgICAgIHJldHVybiB0aGlzLnBsYXRmb3JtLmhlaWdodCgpIC8gMiArIHRoaXMucHVsbERpc3RhbmNlICsgdGhpcy5wdWxsRGlzdGFuY2UgLyAyICogKHByb2dyZXNzIC0gMTAwKSAvIDEwMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucGxhdGZvcm0uaGVpZ2h0KCkgLyAyICsgdGhpcy5wdWxsRGlzdGFuY2UgKyB0aGlzLnB1bGxEaXN0YW5jZSAvIDI7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRQYW4oKSB7XG4gICAgY29uc3QgcmVzZXQgPSB0aGlzLmFuaW1hdGlvbi5idWlsZChbXG4gICAgICBzdHlsZSh7IHRvcDogYCR7dGhpcy50b3B9cHhgIH0pLFxuICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZScsIHN0eWxlKHsgdG9wOiBgJHt0aGlzLnBsYXRmb3JtLmhlaWdodCgpIC8gMn1weGAgfSkpXG4gICAgXSk7XG5cbiAgICBjb25zdCBhbmltYXRpb24gPSByZXNldC5jcmVhdGUodGhpcy5pbWFnZVZpZXcubmF0aXZlRWxlbWVudCk7XG4gICAgYW5pbWF0aW9uLnBsYXkoKTtcbiAgICBhbmltYXRpb24ub25Eb25lKCgpID0+IHtcbiAgICAgIGFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgICB0aGlzLnNldFRvcCh0aGlzLnBsYXRmb3JtLmhlaWdodCgpIC8gMik7XG4gICAgfSk7XG4gIH1cblxuICByZXNldEZvb3RlcihzdGFydCkge1xuICAgIGlmICghdGhpcy5fY29udHJvbHNWaXNpYmxlKSB7XG4gICAgICB0aGlzLnNldEJvdHRvbSgwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVzZXQgPSB0aGlzLmFuaW1hdGlvbi5idWlsZChbXG4gICAgICBzdHlsZSh7IGJvdHRvbTogYC0ke3N0YXJ0fXB4YCB9KSxcbiAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2UnLCBzdHlsZSh7IGJvdHRvbTogYDBweGAgfSkpXG4gICAgXSk7XG5cbiAgICBjb25zdCBhbmltYXRpb24gPSByZXNldC5jcmVhdGUodGhpcy5mb290ZXIubmF0aXZlRWxlbWVudCk7XG4gICAgYW5pbWF0aW9uLnBsYXkoKTtcbiAgICBhbmltYXRpb24ub25Eb25lKCgpID0+IHtcbiAgICAgIGFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgICB0aGlzLnNldEJvdHRvbSgwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFuaW1hdGVTY2FsZSh0b1NjYWxlOiBudW1iZXIsIHRvUG9zaXRpb246IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSkge1xuICAgIC8vIGNvbnN0IGRlbHRhWCA9IHRoaXMucGluY2hDZW50ZXIueCAtIHRvUG9zaXRpb24ueDtcbiAgICAvLyBjb25zdCBkZWx0YVkgPSB0aGlzLnBpbmNoQ2VudGVyLnkgLSB0b1Bvc2l0aW9uLnk7XG4gICAgY29uc3QgZGVsdGFYID0gKHRoaXMucGluY2hDZW50ZXIueCAtIHRvUG9zaXRpb24ueCkgKiB0b1NjYWxlO1xuICAgIGNvbnN0IGRlbHRhWSA9ICh0aGlzLnBpbmNoQ2VudGVyLnkgLSB0b1Bvc2l0aW9uLnkpICogdG9TY2FsZTtcbiAgICBjb25zdCBuZXdMZWZ0ID0gdGhpcy5sZWZ0ICsgZGVsdGFYIC8gdG9TY2FsZTtcbiAgICBjb25zdCBuZXdUb3AgPSB0aGlzLnRvcCArIGRlbHRhWSAvIHRvU2NhbGU7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLmFuaW1hdGlvbi5idWlsZChbXG4gICAgICBzdHlsZSh7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoJHt0aGlzLnNjYWxlfSlgLCB0b3A6IGAke3RoaXMudG9wfXB4YCwgbGVmdDogYCR7dGhpcy5sZWZ0fXB4YCB9KSxcbiAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UnLCBzdHlsZSh7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoJHt0b1NjYWxlfSlgLCB0b3A6IGAke25ld1RvcH1weGAsIGxlZnQ6IGAke25ld0xlZnR9cHhgIH0pKVxuICAgIF0pO1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHNjYWxlLmNyZWF0ZSh0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50KTtcbiAgICBhbmltYXRpb24ucGxheSgpO1xuICAgIGFuaW1hdGlvbi5vbkRvbmUoKCkgPT4ge1xuICAgICAgYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc2V0U2NhbGUodG9TY2FsZSk7XG4gICAgICB0aGlzLnNldFRvcChuZXdUb3ApO1xuICAgICAgdGhpcy5zZXRMZWZ0KG5ld0xlZnQpO1xuICAgICAgdGhpcy5waW5jaENlbnRlciA9IHRvUG9zaXRpb247XG4gICAgfSk7XG4gIH1cblxuICByZXNldFNjYWxlKCkge1xuICAgIGNvbnN0IHQgPSB0aGlzLnBsYXRmb3JtLmhlaWdodCgpIC8gMjtcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMuYW5pbWF0aW9uLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgke3RoaXMuc2NhbGV9KWAsIHRvcDogYCR7dGhpcy50b3B9cHhgLCBsZWZ0OiBgJHt0aGlzLmxlZnR9cHhgIH0pLFxuICAgICAgYW5pbWF0ZSgnMjAwbXMgZWFzZScsIHN0eWxlKHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgkezF9KWAsIHRvcDogYCR7dH1weGAsIGxlZnQ6IGAkezB9cHhgIH0pKVxuICAgIF0pO1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHNjYWxlLmNyZWF0ZSh0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50KTtcbiAgICBhbmltYXRpb24ucGxheSgpO1xuICAgIGFuaW1hdGlvbi5vbkRvbmUoKCkgPT4ge1xuICAgICAgYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc2V0U2NhbGUoMSk7XG4gICAgICB0aGlzLnNldFRvcCh0KTtcbiAgICAgIHRoaXMuc2V0TGVmdCgwKTtcbiAgICAgIHRoaXMucGluY2hDZW50ZXIgPSB0aGlzLmdldEFic29sdXRlQ2VudGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTaW5nbGVUYXAoKSB7XG4gICAgdGhpcy5fY29udHJvbHNWaXNpYmxlID0gIXRoaXMuX2NvbnRyb2xzVmlzaWJsZTtcbiAgfVxuXG4gIGhhbmRsZURvdWJsZVRhcChldmVudCkge1xuICAgIGlmICh0aGlzLnNjYWxlID09PSAxKSB7XG4gICAgICB0aGlzLmFuaW1hdGVTY2FsZSgyLCBldmVudC5jZW50ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc2V0U2NhbGUoKTtcbiAgICB9XG5cbiAgfVxuXG4gIGdldEN1cnJlbnRJbWFnZUhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZVZpZXcubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgKiB0aGlzLnNjYWxlO1xuICB9XG4gIGdldEN1cnJlbnRJbWFnZVdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoICogdGhpcy5zY2FsZTtcbiAgfVxuXG4gIGdldEFic29sdXRlQ2VudGVyKCkge1xuICAgIHJldHVybiB7IHg6IHRoaXMucGxhdGZvcm0ud2lkdGgoKSAvIDIsIHk6IHRoaXMucGxhdGZvcm0uaGVpZ2h0KCkgLyAyIH07XG4gIH1cbn1cblxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VWaWV3ZXJBY3Rpb24ge1xuICBuYW1lPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgUmVuZGVyZXIyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlLCBzdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtdG9vbGJhci1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbGJhci1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b29sYmFyLXNlYXJjaC5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2VhcmNoYmFyQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3NtYWxsID0+IG5vcm1hbCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdub3JtYWwgPT4gc21hbGwnLCBbXG4gICAgICAgIGFuaW1hdGUoJzk1bXMgZWFzZS1pbicpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdzbWFsbCcsIHN0eWxlKHsgd2lkdGg6ICc5MnB4JyB9KSksXG4gICAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyB3aWR0aDogJzEwMCUnIH0pKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3JvdGF0ZUFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pLFxuICAgICAgICBhbmltYXRlKCc4NW1zIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3JvdGF0ZVooMGRlZyknIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzY1bXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKScgfSkpXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCd0aXRsZUFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0yMCUpJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSkpXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIHNlYXJjaGluZyA9IGZhbHNlO1xuICB0aXRsZVZpc2libGUgPSB0cnVlO1xuICBjbG9zZUJ1dHRvblZpc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgc21hbGwgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGZpdklucHV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHN0YXRlOiAnc21hbGwnIHwgJ25vcm1hbCcgPSAnbm9ybWFsJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuc21hbGwgPyAnc21hbGwnIDogJ25vcm1hbCc7XG4gIH1cblxuICBzaHJpbmsoKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICdzbWFsbCc7XG4gIH1cbiAgZ3JvdygpIHtcbiAgICB0aGlzLnN0YXRlID0gJ25vcm1hbCc7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ29uIGNoYW5nZXMnLCBjaGFuZ2VzKTtcbiAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLnNtYWxsICYmIGNoYW5nZXMuc21hbGwucHJldmlvdXNWYWx1ZSA9PT0gdHJ1ZSAmJiBjaGFuZ2VzLnNtYWxsLmN1cnJlbnRWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnbm9ybWFsJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5zbWFsbCAmJiBjaGFuZ2VzLnNtYWxsLnByZXZpb3VzVmFsdWUgPT09IGZhbHNlICYmIGNoYW5nZXMuc21hbGwuY3VycmVudFZhbHVlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ3NtYWxsJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBvcGVuU2VhcmNoYmFyKCkge1xuICAgIGlmICh0aGlzLnNtYWxsKSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ25vcm1hbCc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX29wZW4oKTtcbiAgfVxuXG4gIHRvZ2dsZVNlYXJjaGJhcigpIHtcbiAgICBpZiAodGhpcy5zZWFyY2hpbmcpIHtcbiAgICAgIHRoaXMuY2xvc2VTZWFyY2hiYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuU2VhcmNoYmFyKCk7XG4gICAgfVxuICB9XG5cblxuICBzZWFyY2hCYXJTdGF0ZUNoYW5nZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdzZWFyY2hiYXJTdGF0ZScsIGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnbm9ybWFsJyAmJiBldmVudC50b1N0YXRlID09PSAnc21hbGwnKSB7XG5cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnc21hbGwnICYmIGV2ZW50LnRvU3RhdGUgPT09ICdub3JtYWwnKSB7XG4gICAgICB0aGlzLl9vcGVuKCk7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIF9vcGVuKCkge1xuICAgIHRoaXMuc2VhcmNoaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnRpdGxlVmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMub3Blbi5lbWl0KCk7XG4gIH1cblxuICBjbG9zZVNlYXJjaGJhcigpIHtcbiAgICBpZiAodGhpcy5zbWFsbCkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdzbWFsbCc7XG4gICAgfVxuICAgIHRoaXMuc2VhcmNoaW5nID0gZmFsc2U7XG4gICAgdGhpcy5maXZDbG9zZS5lbWl0KCk7XG5cbiAgfVxuXG5cbiAgc2VhcmNoQW5pbURvbmUoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnIyMjJywgZXZlbnQpO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvblZpc2libGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlQW5pbURvbmUoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnIyMjJywgZXZlbnQpO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xuICAgICAgdGhpcy5zZWFyY2hpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzZWFjaGJhckFuaW1Eb25lKGV2ZW50LCBpbnB1dCkge1xuICAgIGNvbnNvbGUubG9nKCchISEnLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSAhPT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLnRpdGxlVmlzaWJsZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cblxufVxuIiwiaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdlBhcmFtcywgUG9wb3ZlckNvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1wb3BvdmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BvcG92ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wb3BvdmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGJ1dHRvbnM6IEJ1dHRvbkNvbXBvbmVudFtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwdWJsaWMgcG9wb3ZlckNvbnRyb2xsZXI6IFBvcG92ZXJDb250cm9sbGVyKSB7XG4gICAgdGhpcy5idXR0b25zID0gbmF2UGFyYW1zLmdldCgnYnV0dG9ucycpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkl0ZW1DbGlja2VkKGk6IG51bWJlcikge1xuICAgIHRoaXMucG9wb3ZlckNvbnRyb2xsZXIuZGlzbWlzcyh7IGluZGV4OiBpIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBsYXRmb3JtLCBQb3BvdmVyQ29udHJvbGxlciwgQWxlcnRDb250cm9sbGVyLCBBY3Rpb25TaGVldENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1idXR0b25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zpdi1idXR0b25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZml2LWJ1dHRvbnMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGaXZCdXR0b25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcblxuICBASW5wdXQoKSBzbG90ID0gJ2VuZCc7XG4gIEBJbnB1dCgpIHN1YkhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcbiAgQElucHV0KCkgY291bnQgPSAwO1xuICBASW5wdXQoKSBmb3JjZUFjdGlvbnNoZWV0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZvcmNlUG9wb3ZlciA9IGZhbHNlO1xuICBASW5wdXQoKSBpY29uc09ubHkgPSB0cnVlO1xuICBAQ29udGVudENoaWxkcmVuKEJ1dHRvbkNvbXBvbmVudCkgYnV0dG9uczogUXVlcnlMaXN0PEJ1dHRvbkNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBwb3BvdmVyQ29udHJvbGxlcjogUG9wb3ZlckNvbnRyb2xsZXIsXG4gICAgcHVibGljIGFjdGlvblNoZWV0Q29udHJvbGxlcjogQWN0aW9uU2hlZXRDb250cm9sbGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnIyMjJywgdGhpcy5idXR0b25zLmxlbmd0aCk7XG4gIH1cblxuICBvbk1lbnVDbGlja2VkKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZm9yY2VBY3Rpb25zaGVldCkge1xuICAgICAgdGhpcy5wcmVzZW50QWN0aW9uU2hlZXQoZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb3JjZVBvcG92ZXIpIHtcbiAgICAgIHRoaXMucHJlc2VudFBvcG92ZXIoZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnbW9iaWxlJykpIHtcbiAgICAgIHRoaXMucHJlc2VudEFjdGlvblNoZWV0KGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcmVzZW50UG9wb3ZlcihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcHJlc2VudFBvcG92ZXIoZXY6IGFueSkge1xuICAgIGNvbnN0IHBvcG92ZXIgPSBhd2FpdCB0aGlzLnBvcG92ZXJDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IFBvcG92ZXJDb21wb25lbnQsXG4gICAgICBldmVudDogZXYsXG4gICAgICB0cmFuc2x1Y2VudDogZmFsc2UsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICAnYnV0dG9ucyc6IHRoaXMuYnV0dG9ucy50b0FycmF5KCkuc2xpY2UodGhpcy5jb3VudCksXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhd2FpdCBwb3BvdmVyLnByZXNlbnQoKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb3BvdmVyLm9uRGlkRGlzbWlzcygpO1xuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmRhdGEgJiYgKHJlc3VsdC5kYXRhLmluZGV4IHx8IHJlc3VsdC5kYXRhLmluZGV4ID09PSAwKSkge1xuICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrZWQocmVzdWx0LmRhdGEuaW5kZXggKyB0aGlzLmNvdW50KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBwcmVzZW50QWN0aW9uU2hlZXQoZXY6IGFueSkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBbXTtcbiAgICB0aGlzLmJ1dHRvbnMudG9BcnJheSgpLnNsaWNlKHRoaXMuY291bnQpXG4gICAgICAuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuICAgICAgICBidXR0b25zLnB1c2goe1xuICAgICAgICAgIHRleHQ6IGJ1dHRvbi50ZXh0LFxuICAgICAgICAgIGljb246IGJ1dHRvbi5pY29uLFxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25CdXR0b25DbGlja2VkKHRoaXMuY291bnQgKyBpbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIGNvbnN0IGFjdGlvblNoZWV0ID0gYXdhaXQgdGhpcy5hY3Rpb25TaGVldENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogdGhpcy5oZWFkZXIsXG4gICAgICBzdWJIZWFkZXI6IHRoaXMuc3ViSGVhZGVyLFxuICAgICAgYnV0dG9uczogYnV0dG9uc1xuICAgIH0pO1xuICAgIGF3YWl0IGFjdGlvblNoZWV0LnByZXNlbnQoKTtcbiAgfVxuXG4gIG9uQnV0dG9uQ2xpY2tlZChpOiBudW1iZXIpIHtcbiAgICB0aGlzLmJ1dHRvbnMudG9BcnJheSgpW2ldLmNsaWNrLmVtaXQoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV4cGFuZGFibGVDb21wb25lbnQgfSBmcm9tICcuLi9leHBhbmRhYmxlL2V4cGFuZGFibGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWV4cGFuZGFibGUtaW5kaWNhdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuZGFibGUtaW5kaWNhdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5kYWJsZS1pbmRpY2F0b3IuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbmRhYmxlSW5kaWNhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBpY29uID0gJ2lvcy1hcnJvdy1kb3duJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZXhwYW5kYWJsZTogRXhwYW5kYWJsZUNvbXBvbmVudCkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBIYW1tZXJHZXN0dXJlQ29uZmlnLCBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEhhbW1lciB9IGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7IFN0ZXBwZXJDb21wb25lbnQgfSBmcm9tICcuL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RlcENvbXBvbmVudCB9IGZyb20gJy4vc3RlcC9zdGVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGVwSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwLWhlYWRlci9zdGVwLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RlcENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAtY29udGVudC9zdGVwLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEV4cGFuZGFibGVDb21wb25lbnQgfSBmcm9tICcuL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vcm91dGVyLWl0ZW0vcm91dGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IENvbGxhcHNhYmxlTWVudURpcmVjdGl2ZSB9IGZyb20gJy4vY29sbGFwc2FibGUtbWVudS9jb2xsYXBzYWJsZS1tZW51LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb2xsYXBzYWJsZU1lbnVCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbGxhcHNhYmxlLW1lbnUtYnV0dG9uL2NvbGxhcHNhYmxlLW1lbnUtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEJvdHRvbVNoZWV0Q29tcG9uZW50IH0gZnJvbSAnLi9ib3R0b20tc2hlZXQvYm90dG9tLXNoZWV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb3R0b21TaGVldENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2JvdHRvbS1zaGVldC1jb250ZW50L2JvdHRvbS1zaGVldC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nLWJ1dHRvbi9sb2FkaW5nLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ1Byb2dyZXNzQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nLXByb2dyZXNzLWJhci9sb2FkaW5nLXByb2dyZXNzLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ0NvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmctY29udGVudC9sb2FkaW5nLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRpbmdGYWJDb21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmctZmFiL2xvYWRpbmctZmFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBCYXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWZQbGF0Zm9ybURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9pZi1wbGF0Zm9ybS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2VudGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NlbnRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUGVybWlzc2lvbnNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcGVybWlzc2lvbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJpcHBsZUNvbXBvbmVudCB9IGZyb20gJy4vcmlwcGxlL3JpcHBsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlld3BvcnREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdmlld3BvcnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFB1bGxEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcHVsbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTG9hZGluZ1NwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0ZXBwZXJIb3Jpem9udGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwcGVyLWhvcml6b250YWwvc3RlcHBlci1ob3Jpem9udGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nL2RpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmctcmVmcmVzaGVyLWNvbnRlbnQvbG9hZGluZy1yZWZyZXNoZXItY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwQmFyVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtYmFyLXRhYi9hcHAtYmFyLXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwQmFyVGFiQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vYXBwLWJhci10YWItY29udGVudC9hcHAtYmFyLXRhYi1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbWFnZVZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9vbGJhclNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci1zZWFyY2gvdG9vbGJhci1zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IEZpdkJ1dHRvbnNDb21wb25lbnQgfSBmcm9tICcuL2Zpdi1idXR0b25zL2Zpdi1idXR0b25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFBvcG92ZXJDb21wb25lbnQgfSBmcm9tICcuL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhwYW5kYWJsZUluZGljYXRvckNvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5kYWJsZS1pbmRpY2F0b3IvZXhwYW5kYWJsZS1pbmRpY2F0b3IuY29tcG9uZW50JztcblxuXG5leHBvcnQgY2xhc3MgTXlIYW1tZXJDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcbiAgb3ZlcnJpZGVzID0gPGFueT57XG4gICAgcGFuOiB7IGRpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9WRVJUSUNBTCwgdGhyZXNob2xkOiAzIH0sXG4gIH07XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRXhwYW5kYWJsZUNvbXBvbmVudCxcbiAgICBQYXNzd29yZENvbXBvbmVudCxcbiAgICBTdGVwcGVyQ29tcG9uZW50LFxuICAgIFN0ZXBDb21wb25lbnQsXG4gICAgU3RlcEhlYWRlckNvbXBvbmVudCxcbiAgICBTdGVwQ29udGVudENvbXBvbmVudCxcbiAgICBSb3V0ZXJJdGVtQ29tcG9uZW50LFxuICAgIENlbnRlckRpcmVjdGl2ZSxcbiAgICBDb2xsYXBzYWJsZU1lbnVCdXR0b25Db21wb25lbnQsXG4gICAgQ29sbGFwc2FibGVNZW51RGlyZWN0aXZlLFxuICAgIEJvdHRvbVNoZWV0Q29tcG9uZW50LFxuICAgIEJvdHRvbVNoZWV0Q29udGVudENvbXBvbmVudCxcbiAgICBUb29sYmFyU2VhcmNoQ29tcG9uZW50LFxuICAgIExvYWRpbmdCdXR0b25Db21wb25lbnQsXG4gICAgTG9hZGluZ1Byb2dyZXNzQmFyQ29tcG9uZW50LFxuICAgIExvYWRpbmdDb250ZW50Q29tcG9uZW50LFxuICAgIExvYWRpbmdGYWJDb21wb25lbnQsXG4gICAgQXBwQmFyQ29tcG9uZW50LFxuICAgIElmUGxhdGZvcm1EaXJlY3RpdmUsXG4gICAgUGVybWlzc2lvbnNEaXJlY3RpdmUsXG4gICAgUmlwcGxlQ29tcG9uZW50LFxuICAgIFZpZXdwb3J0RGlyZWN0aXZlLFxuICAgIFB1bGxEaXJlY3RpdmUsXG4gICAgTG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQsXG4gICAgTG9hZGluZ1NwaW5uZXJDb21wb25lbnQsXG4gICAgU3RlcHBlckhvcml6b250YWxDb21wb25lbnQsXG4gICAgSWNvbkNvbXBvbmVudCxcbiAgICBEaWFsb2dDb21wb25lbnQsXG4gICAgQXBwQmFyVGFiQ29tcG9uZW50LFxuICAgIEFwcEJhclRhYkNvbnRlbnRDb21wb25lbnQsXG4gICAgSW1hZ2VWaWV3ZXJDb21wb25lbnQsXG4gICAgRml2QnV0dG9uc0NvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgUG9wb3ZlckNvbXBvbmVudCxcbiAgICBFeHBhbmRhYmxlSW5kaWNhdG9yQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtJbWFnZVZpZXdlckNvbXBvbmVudCwgUG9wb3ZlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtcbiAgICBFeHBhbmRhYmxlQ29tcG9uZW50LFxuICAgIFBhc3N3b3JkQ29tcG9uZW50LFxuICAgIFN0ZXBwZXJDb21wb25lbnQsXG4gICAgU3RlcENvbXBvbmVudCxcbiAgICBTdGVwSGVhZGVyQ29tcG9uZW50LFxuICAgIFN0ZXBDb250ZW50Q29tcG9uZW50LFxuICAgIFJvdXRlckl0ZW1Db21wb25lbnQsXG4gICAgQ29sbGFwc2FibGVNZW51RGlyZWN0aXZlLFxuICAgIENlbnRlckRpcmVjdGl2ZSxcbiAgICBDb2xsYXBzYWJsZU1lbnVCdXR0b25Db21wb25lbnQsXG4gICAgQm90dG9tU2hlZXRDb21wb25lbnQsXG4gICAgQm90dG9tU2hlZXRDb250ZW50Q29tcG9uZW50LFxuICAgIFRvb2xiYXJTZWFyY2hDb21wb25lbnQsXG4gICAgTG9hZGluZ0J1dHRvbkNvbXBvbmVudCxcbiAgICBMb2FkaW5nUHJvZ3Jlc3NCYXJDb21wb25lbnQsXG4gICAgTG9hZGluZ0NvbnRlbnRDb21wb25lbnQsXG4gICAgTG9hZGluZ0ZhYkNvbXBvbmVudCxcbiAgICBBcHBCYXJDb21wb25lbnQsXG4gICAgSWZQbGF0Zm9ybURpcmVjdGl2ZSxcbiAgICBQZXJtaXNzaW9uc0RpcmVjdGl2ZSxcbiAgICBSaXBwbGVDb21wb25lbnQsXG4gICAgVmlld3BvcnREaXJlY3RpdmUsXG4gICAgUHVsbERpcmVjdGl2ZSxcbiAgICBMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudCxcbiAgICBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudCxcbiAgICBTdGVwcGVySG9yaXpvbnRhbENvbXBvbmVudCxcbiAgICBJY29uQ29tcG9uZW50LFxuICAgIERpYWxvZ0NvbXBvbmVudCxcbiAgICBBcHBCYXJUYWJDb21wb25lbnQsXG4gICAgQXBwQmFyVGFiQ29udGVudENvbXBvbmVudCxcbiAgICBJbWFnZVZpZXdlckNvbXBvbmVudCxcbiAgICBGaXZCdXR0b25zQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBFeHBhbmRhYmxlSW5kaWNhdG9yQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRml2ZXRocmVlQ29yZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJzdGF0ZSIsIkhhbW1lciIsIkhhbW1lci5ESVJFQ1RJT05fVkVSVElDQUwiLCJzdHlsZSIsIm1lcmdlIiwiSGFtbWVyLkRJUkVDVElPTl9BTEwiLCJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQWtCRTtRQVBTLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGFBQVEsR0FBRyxFQUFFLENBQUM7S0FJTjs7OztJQUVqQixnQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsc0VBQW9DOztpQkFFckM7Ozs7O3dCQUdFLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUVMLFNBQVMsU0FBQyxXQUFXOztJQU94QixvQkFBQztDQXJCRDs7Ozs7O0FDRkE7SUEyQkU7UUFIQSxjQUFTLEdBQUcsUUFBUSxDQUFDO0tBR0o7Ozs7SUFFakIsc0NBQVE7OztJQUFSO0tBQ0M7Ozs7OztJQUVELGlEQUFtQjs7Ozs7SUFBbkIsVUFBb0IsS0FBSyxFQUFFLElBQVk7UUFDckMsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDM0I7S0FDRjs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0tBQzNCOzs7O0lBRUQsbUNBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQzNCOztnQkEzQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHVhQUEyQztvQkFFM0MsVUFBVSxFQUFFO3dCQUNWLE9BQU8sQ0FBQyxZQUFZLEVBQUU7NEJBQ3BCLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtnQ0FDM0IsT0FBTyxDQUFDLGdCQUFnQixDQUFDOzZCQUM1QixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtnQ0FDM0IsT0FBTyxDQUFDLGVBQWUsQ0FBQzs2QkFDM0IsQ0FBQzs0QkFDRixLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLHNDQUFzQyxFQUFFLENBQUMsQ0FBQzs0QkFDM0YsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxxQ0FBcUMsRUFBRSxDQUFDLENBQUM7eUJBQzdGLENBQUM7cUJBQ0Q7O2lCQUNGOzs7Ozt3QkFHRSxLQUFLO3VCQUNMLEtBQUs7O0lBeUJSLDBCQUFDO0NBN0NEOzs7Ozs7QUNGQTtJQXVDRSw2QkFBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFUcEMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNkLGdCQUFXLEdBQXNDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEUsZUFBVSxHQUFzQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25FLGlCQUFZLEdBQXNDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckUsZ0JBQVcsR0FBa0UsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUt4RDs7OztJQUVsRCxzQ0FBUTs7O0lBQVI7S0FDQzs7OztJQUVELGtDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDN0I7Ozs7SUFFRCxvQ0FBTTs7O0lBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtLQUNGOzs7OztJQUVELG1DQUFLOzs7O0lBQUwsVUFBTSxLQUFXO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQzdCOzs7OztJQUVELDRDQUFjOzs7O0lBQWQsVUFBZSxLQUFLO1FBQ2xCLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7YUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7S0FDRjs7Z0JBdEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixtUUFBMEM7b0JBRTFDLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsVUFBVSxFQUFFOzRCQUNsQixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ2pELEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDbkQsVUFBVSxDQUFDLGdCQUFnQixFQUFFO2dDQUMzQixPQUFPLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDO29DQUNsQyxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO29DQUM3QyxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO29DQUNqRCxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lDQUM5QyxDQUFDLENBQUM7NkJBQ0osQ0FBQzs0QkFDRixVQUFVLENBQUMsZ0JBQWdCLEVBQUU7Z0NBQzNCLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUM7b0NBQ2xDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0NBQzdDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7b0NBQ2pELEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUNBQzlDLENBQUMsQ0FBQzs2QkFDSixDQUFDO3lCQUNILENBQUM7cUJBQ0g7O2lCQUNGOzs7O2dCQTNCd0QsaUJBQWlCOzs7eUJBOEJ2RSxLQUFLOzhCQUNMLE1BQU07NkJBQ04sTUFBTTsrQkFDTixNQUFNOzhCQUNOLE1BQU07O0lBeUNULDBCQUFDO0NBeEVEOzs7Ozs7QUNKQTtJQXdCRSw4QkFBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFYcEMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNiLGVBQVUsR0FBdUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRSxnQkFBVyxHQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JFLGFBQVEsR0FBdUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQU0zRTs7OztJQUVELHVDQUFROzs7SUFBUixlQUFjOzs7O0lBRWQsbUNBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUM3Qjs7OztJQUVELG9DQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7S0FFN0I7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsb0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNyQjs7OztJQUVELHlDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCOzs7O0lBRUQsd0NBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDNUI7Ozs7SUFFRCxvQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQjs7Z0JBdERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qix1akJBQTRDOztpQkFFN0M7Ozs7Z0JBUm1FLGlCQUFpQjs7O3dCQVdsRixLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxNQUFNOzhCQUNOLE1BQU07MkJBQ04sTUFBTTt1QkFFTixTQUFTLFNBQUMsTUFBTTt5QkFDaEIsU0FBUyxTQUFDLFFBQVE7O0lBc0NyQiwyQkFBQztDQXhERDs7Ozs7O0FDSkE7SUEyQkU7UUFGVSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztLQUVoQzs7OztJQUVqQiw2Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5Qjs7OztJQUVELDBDQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hCOzs7OztJQUNELHlDQUFJOzs7O0lBQUosVUFBSyxLQUFhO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBRTlCOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLHN2Q0FBa0Q7b0JBRWxELFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsWUFBWSxFQUFFOzRCQUNwQixVQUFVLENBQUMsa0JBQWtCLEVBQUU7Z0NBQzdCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs2QkFDMUIsQ0FBQzs0QkFDRixVQUFVLENBQUMsa0JBQWtCLEVBQUU7Z0NBQzdCLE9BQU8sQ0FBQyxlQUFlLENBQUM7NkJBQ3pCLENBQUM7NEJBQ0YsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxzQ0FBc0MsRUFBRSxDQUFDLENBQUM7NEJBQzNGLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUscUNBQXFDLEVBQUUsQ0FBQyxDQUFDO3lCQUMzRixDQUFDO3FCQUFDOztpQkFDTjs7Ozs7MkJBR0UsS0FBSzt5QkFDTCxTQUFTLFNBQUMsUUFBUTs0QkFDbEIsTUFBTTs7SUFtQlQsaUNBQUM7Q0F2Q0Q7Ozs7OztBQ0xBO0lBdUJFO1FBUlMsU0FBSSxHQUE4QixVQUFVLENBQUM7UUFDNUMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDdEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFpQyxDQUFDO1FBRXZFLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO0tBSUE7Ozs7SUFFakIsbUNBQVE7OztJQUFSO0tBQ0M7Ozs7O0lBRUQsK0JBQUk7Ozs7SUFBSixVQUFLLEtBQWE7UUFDaEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRTtZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3RixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQy9CLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbkI7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7b0JBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3BDO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2FBQzlEO1NBRUY7S0FDRjs7Ozs7O0lBRUQsZ0NBQUs7Ozs7O0lBQUwsVUFBTSxLQUFhLEVBQUUsS0FBVztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDekI7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBRSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQztLQUVGOzs7OztJQUVELGlDQUFNOzs7O0lBQU4sVUFBTyxLQUFhO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDOUMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBRWpCO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQjtLQUNGOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRTtZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3pCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNkLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFFRCwrQkFBSTs7O0lBQUo7O1lBQ1EsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9FLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkI7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7O1lBQ1EsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkI7Ozs7O0lBRUQsdUNBQVk7Ozs7SUFBWixVQUFhLEtBQWE7UUFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRSxDQUcvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUV4QztLQUNGOzs7OztJQUVELGdDQUFLOzs7O0lBQUwsVUFBTSxLQUFhO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUUsQ0FFL0I7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckM7S0FDRjs7Z0JBNUdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsK29CQUF1Qzs7aUJBRXhDOzs7OzsyQkFHRSxlQUFlLFNBQUMsYUFBYTt3QkFDN0IsWUFBWSxTQUFDLG9CQUFvQjs2QkFDakMsU0FBUyxTQUFDLDBCQUEwQjt1QkFDcEMsS0FBSzsyQkFDTCxNQUFNOzJCQUNOLE1BQU07O0lBa0dULHVCQUFDO0NBOUdEOzs7Ozs7QUNMQTtJQWlERSw2QkFBbUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUF2Q3hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixhQUFRLEdBQUcsSUFBSSxDQUFDOzs7OztRQVloQixhQUFRLEdBQW9ELE1BQU0sQ0FBQzs7Ozs7O1FBT25FLFVBQUssR0FBNEIsTUFBTSxDQUFDO1FBRXhDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0tBZ0JPOzs7O0lBZGYscUNBQU87OztJQUE5QjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QztLQUNGO0lBRUQsc0JBQTBCLHdDQUFPOzs7O1FBQWpDO1lBQ0UsT0FBVSxJQUFJLENBQUMsUUFBUSxTQUFJLElBQUksQ0FBQyxLQUFPLENBQUM7U0FDekM7OztPQUFBO0lBRUQsc0JBQWlDLDRDQUFXOzs7O1FBQTVDO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM3Qzs7O09BQUE7Ozs7SUFJRCxzQ0FBUTs7O0lBQVI7S0FDQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNO2VBQ3ZCLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDO0tBQzNCOzs7O0lBRUQsd0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN4RTs7OztJQUVELDRDQUFjOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3JFOzs7O0lBRUQsMENBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3pDOzs7O0lBRUQsd0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2pEOztnQkF0RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLCtTQUEyQzs7aUJBRTVDOzs7O2dCQU5RLE1BQU07Ozt5QkFTWixLQUFLOzJCQUVMLEtBQUs7MEJBRUwsS0FBSzt1QkFFTCxLQUFLO3VCQUVMLEtBQUs7MkJBTUwsS0FBSzt3QkFPTCxLQUFLO2dDQUVMLEtBQUs7MEJBRUwsWUFBWSxTQUFDLE9BQU87MEJBTXBCLFdBQVcsU0FBQyxPQUFPOzhCQUluQixXQUFXLFNBQUMsY0FBYzs7SUE4QjdCLDBCQUFDO0NBeEVEOzs7Ozs7QUNIQTtJQWVFLGtDQUFvQixTQUF1QixFQUFVLFFBQWtCO1FBQW5ELGNBQVMsR0FBVCxTQUFTLENBQWM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTHZFLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNSLGNBQVMsR0FBRyxJQUFJLENBQUM7S0FHa0Q7SUFHNUUsc0JBQ0ksNkNBQU87Ozs7UUFEWDtZQUVFLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFO2dCQUVqSCxPQUFPLElBQUksQ0FBQyxTQUFTO3FCQUNsQix3QkFBd0IsQ0FBQyxnR0FBZ0csQ0FBQyxDQUFDO2FBQy9IO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQywrREFBK0QsQ0FBQyxDQUFDO2FBQ2pIO1NBQ0Y7OztPQUFBOzs7O0lBRTJCLHdDQUFLOzs7SUFBakM7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7S0FDRjs7OztJQUUyQix1Q0FBSTs7O0lBQWhDO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNwQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ3ZCO0lBRUQsc0JBQWEscURBQWU7Ozs7O1FBQTVCLFVBQTZCLFFBQWlCO1lBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1NBQzNCOzs7T0FBQTs7OztJQUdELDZDQUFVOzs7SUFBVjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUNsQzs7OztJQUVELHVDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0tBQ3hCOzs7O0lBRUQsd0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7S0FDdkI7O2dCQTVERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQUxtQixZQUFZO2dCQUZ2QixRQUFROzs7NEJBWWQsS0FBSzswQkFNTCxXQUFXLFNBQUMsT0FBTzt3QkFXbkIsWUFBWSxTQUFDLFlBQVk7dUJBT3pCLFlBQVksU0FBQyxZQUFZO2tDQVF6QixLQUFLOztJQXNCUiwrQkFBQztDQTlERDs7Ozs7O0FDSkE7SUFZRTtLQUFpQjs7OztJQUVqQixpREFBUTs7O0lBQVI7S0FDQzs7OztJQUVELGdEQUFPOzs7SUFBUDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ3hCOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLGlJQUF1RDs7aUJBRXhEOzs7Ozt1QkFHRSxLQUFLOztJQVlSLHFDQUFDO0NBbkJEOzs7Ozs7QUNIQTtBQUdBLElBQWEsbUNBQW1DLEdBQVE7SUFDdEQsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsR0FBQSxDQUFDO0lBQ2hELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQXFCRTtRQVhTLGFBQVEsR0FBRyxTQUFTLENBQUM7UUFFckIsYUFBUSxHQUFnRCxVQUFVLENBQUM7UUFFbkUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVyQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztLQUlYOzs7O0lBRWpCLG9DQUFROzs7SUFBUjtLQUNDOzs7O0lBRUQsOENBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztLQUN4QjtJQUVELHNCQUFJLDRDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQzVCOzs7OztRQUVELFVBQWtCLENBQU07WUFDdEIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDNUM7U0FDRjs7O09BUEE7Ozs7O0lBU0Qsc0NBQVU7Ozs7SUFBVixVQUFXLEtBQVU7UUFDbkIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0tBQ0Y7Ozs7SUFFRCxnQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUMxQjs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0tBQzVCOzs7OztJQUVELDZDQUFpQjs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7S0FDN0I7O2dCQXpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLG9ZQUF3QztvQkFFeEMsU0FBUyxFQUFFO3dCQUNULG1DQUFtQztxQkFDcEM7O2lCQUNGOzs7OzsyQkFHRSxLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUE0Q1Isd0JBQUM7Q0EzREQ7Ozs7Ozs7O0lDUkksU0FBTTtJQUNOLFNBQU07SUFDTixNQUFHOzs7Ozs7Ozs7O0FDSFA7SUFvQ0UscUNBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUF6QmxDLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsVUFBSyxHQUFHLElBQUksQ0FBQztRQUVaLG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHakUsV0FBTSxHQUFHLFdBQVcsQ0FBQztLQWtCMkI7SUFoQmhELHNCQUFrQyxrREFBUzs7OztRQUEzQztZQUNFLFFBQVEsSUFBSSxDQUFDLFlBQVk7Z0JBQ3ZCLEtBQUssV0FBVyxDQUFDLEdBQUcsRUFBRSxPQUFPLEtBQUssQ0FBQztnQkFDbkMsS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDN0MsS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDN0Q7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiOzs7T0FBQTtJQUVELHNCQUEwQiwrQ0FBTTs7OztRQUFoQztZQUNFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM3RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsaUpBQytDLENBQUMsQ0FBQzthQUNqRztTQUNGOzs7T0FBQTs7OztJQUlELDhDQUFROzs7SUFBUjtLQUNDOzs7OztJQUVELGlEQUFXOzs7O0lBQVgsVUFBWUEsUUFBa0I7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRUEsUUFBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBR0EsUUFBSyxDQUFDO0tBQzNCOzs7O0lBRUQsMkNBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUM1Qjs7Z0JBNUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyw2UkFBb0Q7O2lCQUVyRDs7OztnQkFSUSxZQUFZOzs7MEJBV2xCLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO2lDQUVMLE1BQU07NEJBS04sV0FBVyxTQUFDLGVBQWU7eUJBUzNCLFdBQVcsU0FBQyxPQUFPOztJQXFCdEIsa0NBQUM7Q0E5Q0Q7Ozs7OztBQ0pBO0lBc0NFLDhCQUNVLFFBQW9CLEVBQ3BCLFNBQW9CLEVBQ3BCLFFBQXVCLEVBQ3ZCLFNBQW1CLEVBQ25CLFNBQXVCO1FBSnZCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQTNCeEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFFbEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFcEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsZUFBVSxHQUFHLG1CQUFtQixDQUFDO1FBRWpDLFVBQUssR0FBZ0IsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUV4QyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUVsQixnQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDO1FBQ3pFLFlBQU8sR0FBdUMsSUFBSSxZQUFZLEVBQXdCLENBQUM7UUFDdkYsY0FBUyxHQUF1QyxJQUFJLFlBQVksRUFBd0IsQ0FBQztRQUN6RixhQUFRLEdBQXVDLElBQUksWUFBWSxFQUF3QixDQUFDO1FBS2pGLGtCQUFhLEdBQUcsRUFBRSxDQUFDO0tBUS9COzs7Ozs7Ozs7Ozs7Ozs7O0lBV0wsOENBQWU7Ozs7Ozs7Ozs7SUFBZjtRQUFBLGlCQTRCQzs7OztRQXhCQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFFM0IsTUFBTSxHQUFHLElBQUlDLFFBQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUN0RCxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFQyxrQkFBeUIsRUFBRSxDQUFDLENBQUM7UUFDOUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxVQUFDLEVBQU87WUFDdkMsUUFBUSxFQUFFLENBQUMsSUFBSTtnQkFDYixLQUFLLFVBQVU7b0JBQ2IsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN2QixNQUFNO2dCQUNSLEtBQUssUUFBUTtvQkFDWCxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN2QixNQUFNO2dCQUNSO29CQUNFLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdkI7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWM7YUFDeEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxLQUFJLENBQUMsS0FBSztnQkFDaEIsS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFLE9BQU8sS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM1QyxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDN0M7U0FDRixDQUFDLENBQUM7S0FDTjs7Ozs7SUFHRCwwQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNoRDs7Ozs7SUFFRCw0Q0FBYTs7OztJQUFiLFVBQWNGLFFBQWtCO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQ0EsUUFBSyxDQUFDLENBQUM7U0FDakM7S0FDRjs7Ozs7O0lBRU8sOENBQWU7Ozs7O0lBQXZCLFVBQXdCQSxRQUFrQjtRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BGLFFBQVFBLFFBQUs7WUFDWCxLQUFLLFdBQVcsQ0FBQyxNQUFNO2dCQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUNsRSxNQUFNO1lBQ1IsS0FBSyxXQUFXLENBQUMsTUFBTTtnQkFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsQ0FBQztnQkFDMUUsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNoRDtLQUNGOzs7OztJQUVPLDhDQUFlOzs7O0lBQXZCO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFDO0tBQ2xGOzs7Ozs7SUFFTyw0Q0FBYTs7Ozs7SUFBckIsVUFBc0IsRUFBRTtRQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRXBGLFFBQVEsSUFBSSxDQUFDLEtBQUs7Z0JBQ2hCLEtBQUssV0FBVyxDQUFDLE1BQU07b0JBQ3JCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDN0IsTUFBTTtnQkFDUixLQUFLLFdBQVcsQ0FBQyxHQUFHO29CQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzFCLE1BQU07Z0JBQ1I7b0JBQ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Y7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7OztJQUVPLCtDQUFnQjs7Ozs7SUFBeEIsVUFBeUIsRUFBRTtRQUN6QixJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDNUMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzFCO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzNCO2FBRUY7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQzlDO0tBQ0Y7Ozs7OztJQUVPLGtEQUFtQjs7Ozs7SUFBM0IsVUFBNEIsRUFBRTs7WUFDdEIsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsR0FBRyxFQUFFO2dCQUVsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7U0FDRjthQUFNLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUQsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0QjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxDQUFDO1NBQzNFO0tBQ0Y7Ozs7OztJQUVPLGtEQUFtQjs7Ozs7SUFBM0IsVUFBNEIsRUFBRTtRQUM1QixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ25DLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdkI7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUNuRTtLQUNGOzs7Ozs7SUFFTyx5Q0FBVTs7Ozs7SUFBbEIsVUFBbUIsRUFBRTs7WUFDYixRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzRSxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdEQsSUFBSSxFQUFFLENBQUMsZUFBZSxLQUFLLE9BQU8sSUFBSSxFQUFFLENBQUMsZUFBZSxLQUFLLFNBQVMsRUFBRTs7b0JBQ2hFLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLE1BQU07Z0JBQ2pELElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO2lCQUNwQztxQkFBTSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBQzlDO2dCQUNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsQ0FBQztpQkFDNUU7YUFDRjtTQUNGO0tBQ0Y7Ozs7OztJQUVPLDZDQUFjOzs7OztJQUF0QixVQUF1QixLQUFLO1FBQTVCLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGFBQWEsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDaEcsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxtQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7Ozs7SUFFRCxvQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7Ozs7SUFFRCxtQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7O2dCQXRORixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsK0dBQTRDOztpQkFFN0M7Ozs7Z0JBWEMsVUFBVTtnQkFBRSxTQUFTO2dCQUVkLGFBQWE7Z0JBQUUsUUFBUTtnQkFFdkIsWUFBWTs7OytCQVNsQixLQUFLOytCQUVMLEtBQUs7OEJBRUwsS0FBSzs2QkFFTCxLQUFLO3dCQUVMLEtBQUs7Z0NBRUwsS0FBSzs4QkFFTCxNQUFNOzBCQUNOLE1BQU07NEJBQ04sTUFBTTsyQkFDTixNQUFNOzBCQUVOLFlBQVksU0FBQywyQkFBMkI7O0lBZ00zQywyQkFBQztDQXZORDs7Ozs7O0FDVkE7SUFjRTtRQUxPLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixlQUFVLEdBQTZCLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRixtQkFBYyxHQUE2QixJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FFL0U7Ozs7SUFFakIsNkJBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsK0JBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0tBQ3pCOzs7O0lBRUQsc0NBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDOUI7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzNDOztnQkEvQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7eUJBTkQ7Q0FJQTs7Ozs7O0FDSkE7SUFxREUscUNBQW1CLGNBQThCLEVBQVUsT0FBeUI7UUFBakUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFkcEYsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNQLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDSixrQkFBYSxHQUFxQixLQUFLLENBQUM7UUFDdkMsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6RCxxQkFBZ0IsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN0RSxlQUFVLEdBQThDLElBQUksWUFBWSxFQUErQixDQUFDO0tBUWpIOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQSxVQUFVO2dCQUNyRCxJQUFJLFVBQVUsRUFBRTtvQkFDZCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNyQjthQUNGLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFFRCxpREFBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNsRDtLQUNGOzs7O0lBRUQsbURBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDOUI7Ozs7SUFFRCwwQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1Qjs7OztJQUVELDRDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN6QjtLQUNGOzs7OztJQUVELDhDQUFROzs7O0lBQVIsVUFBUyxLQUFVO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDOUI7Ozs7O0lBRUQsMkRBQXFCOzs7O0lBQXJCLFVBQXNCLFVBQW1CO1FBQ3ZDLElBQUksVUFBVSxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7U0FDRjtLQUNGOzs7OztJQUVELGlEQUFXOzs7O0lBQVgsVUFBWSxRQUFRO1FBQ2xCLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNsQixPQUFPO1NBQ1I7UUFDRCxJQUFJLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDcEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FFdkM7Ozs7O0lBRUQsaURBQVc7Ozs7SUFBWCxVQUFZLFFBQVE7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzVDOzs7OztJQUVELGlEQUFXOzs7O0lBQVgsVUFBWSxRQUFRO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM1Qzs7Ozs7SUFFRCw0Q0FBTTs7OztJQUFOLFVBQU8sRUFBVTtRQUFqQixpQkF3QkM7OztZQXRCTyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDckMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMvQixPQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDLENBQUM7OztZQUdJLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBRTVELE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFDUixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUM7YUFDM0IsU0FBUyxDQUFDO1lBQ1QsSUFBSSxLQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsRUFBRTtnQkFDeEIsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDeEI7WUFDRCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEQsQ0FBQztRQUNKLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDWixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEIsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsOENBQVE7Ozs7SUFBUixVQUFTLEVBQVU7UUFBbkIsaUJBMEJDOztRQXhCQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQzs7WUFDZCxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDckMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFLLElBQUksQ0FBQyxRQUFRLE1BQUcsRUFBRSxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakMsQ0FBQzs7O1lBR0ksTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7O1lBRXRELENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQzthQUMzQixTQUFTLENBQUM7WUFDVCxJQUFJLEtBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO2dCQUN0QixPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN4QjtZQUNELEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRCxDQUFDO1FBRUosTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNaLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCLENBQUMsQ0FBQztLQUNKOztnQkFqTEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLHVwQkFBb0Q7b0JBRXBELFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsY0FBYyxFQUFFOzRCQUN0QixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0NBQ3hCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs2QkFDMUIsQ0FBQzs0QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDOzZCQUNuRCxDQUFDO3lCQUNILENBQUM7d0JBQ0YsT0FBTyxDQUFDLG9CQUFvQixFQUFFOzRCQUM1QixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0NBQ3hCLE9BQU8sQ0FBQyxlQUFlLENBQUM7NkJBQ3pCLENBQUM7NEJBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzs2QkFDbkQsQ0FBQzt5QkFDSCxDQUFDO3dCQUNGLE9BQU8sQ0FBQyxVQUFVLEVBQUU7NEJBQ2xCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2dDQUNuQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzs2QkFDaEUsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIOztpQkFDRjs7OztnQkFsQ1EsY0FBYztnQkFEdUIsZ0JBQWdCOzs7eUJBdUMzRCxLQUFLOzZCQUNMLEtBQUs7Z0NBRUwsS0FBSzs4QkFDTCxNQUFNO21DQUNOLE1BQU07NkJBQ04sTUFBTTtzQkFFTixTQUFTLFNBQUMsS0FBSzt5QkFDZixTQUFTLFNBQUMsUUFBUTs7SUF3SXJCLGtDQUFDO0NBbkxEOzs7Ozs7QUNOQTtJQStCRTtRQXJCQSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR1AsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLFNBQUksR0FBRyxPQUFPLENBQUM7UUFDZixTQUFJLEdBQUcsU0FBUyxDQUFDO1FBSzFCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFUixrQkFBYSxHQUFxQixLQUFLLENBQUM7UUFFeEMsU0FBSSxHQUFrQyxRQUFRLENBQUM7UUFFOUMsZUFBVSxHQUF5QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RFLHVCQUFrQixHQUF5QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlFLG1CQUFjLEdBQXlDLElBQUksWUFBWSxFQUFFLENBQUM7S0FHbkY7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7S0FDQzs7OztJQUVELDhDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDNUI7Ozs7SUFFRCxxQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRUQsdUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM1QjtLQUNGOzs7OztJQUVELDJDQUFVOzs7O0lBQVYsVUFBVyxVQUFtQjtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsd0NBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDaEM7O2dCQWhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsdVhBQThDOztpQkFFL0M7Ozs7OzJCQUtFLFNBQVMsU0FBQyxVQUFVO3dCQUNwQixLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBRUwsV0FBVyxTQUFDLHVCQUF1QixjQUNuQyxLQUFLO2dDQUdMLEtBQUs7dUJBRUwsS0FBSzs2QkFFTCxNQUFNO3FDQUNOLE1BQU07aUNBQ04sTUFBTTs7SUF3Q1QsNkJBQUM7Q0FsRUQ7Ozs7OztBQ0hBO0lBU00sU0FBUyxHQUFHLEdBQUc7QUFFckI7SUErQkUsaUNBQWtELFNBQWMsRUFBUyxXQUF1QixFQUN2RixNQUF5QixFQUFVLE9BQXlCLEVBQVMsU0FBdUIsRUFBVSxRQUFtQjtRQURoRixjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkYsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBaEIxSCxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFHRCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDekMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUUzRCxTQUFJLEdBQW9DLGVBQWUsQ0FBQztRQUN4RCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztLQVExQjtJQU5ELHNCQUEwQiwwQ0FBSzs7OztRQUEvQjtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxnRkFBZ0YsQ0FBQztTQUNyRzs7O09BQUE7Ozs7SUFNRCwwQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4QjtJQUVELHNCQUFJLDRDQUFPOzs7O1FBQVg7O2dCQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVztZQUN4RCxPQUFPLFNBQU8sT0FBTyxTQUFJLE9BQVMsQ0FBQztTQUNwQzs7O09BQUE7SUFHRCxzQkFBSSx3REFBbUI7Ozs7OztRQUF2QjtZQUNFLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN4Qzs7O09BQUE7SUFHRCxzQkFBSSxxREFBZ0I7Ozs7OztRQUFwQjtZQUNFLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLEVBQUU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQzdEO1lBRUQsT0FBTyxJQUFJLENBQUM7U0FDYjs7O09BQUE7SUFHRCxzQkFBSSxzREFBaUI7Ozs7OztRQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztTQUMvQzs7O09BQUE7SUFHRCxzQkFDSSwwQ0FBSzs7Ozs7O1FBRFQ7WUFFRSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3REOzs7OztRQUNELFVBQVUsUUFBZ0I7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3REOzs7T0FIQTtJQUtELHNCQUNJLDZDQUFROzs7O1FBRFosY0FDeUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Ozs7O1FBQ2pELFVBQWEsSUFBWTtZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUV0QixJQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3pCO1NBQ0Y7OztPQVBnRDtJQVVqRCxzQkFDSSxnREFBVzs7Ozs7O1FBRGY7WUFFRSxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDaEQ7Ozs7O1FBQ0QsVUFBZ0IsS0FBYTtZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjs7O09BSEE7Ozs7Ozs7SUFPTyxrREFBZ0I7Ozs7O0lBQXhCOztZQUNNLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQyxRQUFRO1FBRS9DLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLHVCQUF1QixDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDN0M7UUFFRCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQzlCLG9CQUFDLFFBQVEsQ0FBQyxLQUFLLElBQW1CLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzRTtRQUVELHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3REOzs7Ozs7O0lBSU8sbURBQWlCOzs7OztJQUF6Qjs7WUFDUSxnQ0FBZ0MsR0FBRyw4OUNBbUJ6QztRQUNBLE9BQU8sZ0NBQWdDOzthQUVwQyxPQUFPLENBQUMsY0FBYyxFQUFFLEtBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBcUIsQ0FBQzthQUM3RCxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBcUIsQ0FBQzthQUMxRCxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUcsSUFBSSxDQUFDLFFBQVUsQ0FBQyxDQUFDO0tBQzdDOzs7OztJQUdELDRDQUFVOzs7O0lBQVYsVUFBVyxRQUFnQjtRQUEzQixpQkF3Q0M7UUF2Q0MsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxHQUFHLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsR0FBRyxRQUFRLEdBQUcsRUFBRSxLQUFLLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDOztZQUVuRSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDbkMsS0FBSyxDQUFDO2dCQUNKLGtCQUFrQixFQUFFLEdBQUc7Z0JBQ3ZCLG1CQUFtQixFQUFFLEVBQUU7Z0JBQ3ZCLGlCQUFpQixFQUFFLFFBQVE7Z0JBQzNCLFFBQVEsRUFBRSxTQUFTO2FBQ3BCLENBQUM7WUFDRixPQUFPLENBQUksUUFBUSxnQkFBYSxFQUFFLEtBQUssQ0FBQztnQkFDdEMsa0JBQWtCLEVBQUUsR0FBRztnQkFDdkIsbUJBQW1CLEVBQUUsQ0FBQztnQkFDdEIsaUJBQWlCLEVBQUUsUUFBUTtnQkFDM0IsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFNBQVMsRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1NBQ0osQ0FBQzs7WUFFSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDWixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNqQixDQUFDLENBQUM7O1lBR0csQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDOztZQUM1QixDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUFDOztZQUNuQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFckMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDbEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUIsQ0FBQyxDQUFDO0tBRUo7Ozs7O0lBQ0QsMENBQVE7Ozs7SUFBUixVQUFTLFFBQWdCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEQ7Ozs7SUFFRCxzQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQzdCOzs7O0lBRUQsOENBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUM3Qjs7Ozs7SUFFRCx5Q0FBTzs7OztJQUFQLFVBQVEsSUFBSTtRQUNWLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDN0I7SUEzTGMsaUNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDekMsZ0NBQVEsR0FBNEIsSUFBSSxDQUFDOztnQkFmekQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDAwQkFBK0M7O29CQUcvQyxJQUFJLEVBQUU7d0JBQ0osa0JBQWtCLEVBQUUsVUFBVTt3QkFDOUIsbUJBQW1CLEVBQUUsVUFBVTtxQkFDaEM7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0RBb0JjLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTtnQkFyQ1ksVUFBVTtnQkFBRSxpQkFBaUI7Z0JBSjFFLGdCQUFnQjtnQkFEaEIsWUFBWTtnQkFLOEcsU0FBUzs7OzhCQTJCekksTUFBTTs4QkFDTixNQUFNO29DQUNOLFNBQVMsU0FBQyxtQkFBbUI7dUJBQzdCLEtBQUs7K0JBQ0wsS0FBSzt3QkFFTCxXQUFXLFNBQUMsT0FBTzt3QkFxQ25CLEtBQUs7MkJBUUwsS0FBSzs4QkFXTCxLQUFLOztJQXVIUiw4QkFBQztDQTFNRDs7Ozs7O0FDWEE7SUE2RUUsMENBQW1CLE9BQW1CLEVBQVMsT0FBeUI7UUFBckQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBaEIvRCxjQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVoQixnQkFBVyxHQUFtRCxJQUFJLFlBQVksRUFBb0MsQ0FBQztRQUNuSCxlQUFVLEdBQW1ELElBQUksWUFBWSxFQUFvQyxDQUFDO1FBQ2xILGNBQVMsR0FBbUQsSUFBSSxZQUFZLEVBQW9DLENBQUM7UUFDakgsY0FBUyxHQUFtRCxJQUFJLFlBQVksRUFBb0MsQ0FBQztRQUNqSCxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBS3pFLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsY0FBUyxHQUFHLFFBQVEsQ0FBQztLQUdwQjs7OztJQUVELG1EQUFROzs7SUFBUjtLQUNDOzs7O0lBRUQsK0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1Qjs7OztJQUVELGlEQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDN0I7Ozs7SUFFRCxtREFBUTs7O0lBQVI7O1FBRUUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtLQUNGOzs7O0lBRUQsK0NBQUk7OztJQUFKO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7Z0JBQ2QsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNuQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7YUFDMUQsQ0FBQzs7Z0JBRUksUUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDOUQsUUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsUUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDWixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztnQkFDMUIsUUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2xCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFFRCwrQ0FBSTs7O0lBQUo7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFOztnQkFDVixTQUFTLEdBQUcsVUFBVTs7Z0JBQ3RCLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDbkMsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDO2dCQUMvQixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO2FBQzNELENBQUM7O2dCQUVJLFFBQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQzlELFFBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLFFBQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ1osS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixRQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7YUFFbEIsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7OztJQUVELDREQUFpQjs7O0lBQWpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtLQUNGOzs7Ozs7SUFFRCw4REFBbUI7Ozs7O0lBQW5CLFVBQW9CLEtBQUssRUFBRSxJQUFZO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjtTQUVGO0tBQ0Y7Ozs7SUFFRCx1REFBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3Qjs7Ozs7SUFFRCxtREFBUTs7OztJQUFSLFVBQVMsUUFBZ0I7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDakM7Ozs7SUFFRCxnREFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUN2Qzs7Z0JBektGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QywwUkFBeUQ7b0JBRXpELFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7NEJBQzlCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQztnQ0FDaEMsT0FBTyxDQUFDLGdCQUFnQixDQUFDOzZCQUMxQixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7NkJBQzNELENBQUM7eUJBQ0gsQ0FBQzt3QkFDRixPQUFPLENBQUMsYUFBYSxFQUFFOzRCQUNyQixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0NBQ3ZCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs2QkFDMUIsQ0FBQzs0QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDOzZCQUNsRCxDQUFDO3lCQUNILENBQUM7d0JBQ0YsT0FBTyxDQUFDLFlBQVksRUFBRTs0QkFDcEIsVUFBVSxDQUFDLGtCQUFrQixFQUFFO2dDQUM3QixPQUFPLENBQUMsZ0JBQWdCLENBQUM7NkJBQzFCLENBQUM7NEJBQ0YsVUFBVSxDQUFDLGtCQUFrQixFQUFFO2dDQUM3QixPQUFPLENBQUMsZUFBZSxDQUFDOzZCQUN6QixDQUFDOzRCQUNGLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDOzRCQUNyRSxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7eUJBQ3JFLENBQUM7d0JBQ0YsT0FBTyxDQUFDLFVBQVUsRUFBRTs0QkFDbEIsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsS0FBSyxDQUFDO29DQUNKLGtCQUFrQixFQUFFLEdBQUc7b0NBQ3ZCLG1CQUFtQixFQUFFLEVBQUU7b0NBQ3ZCLGlCQUFpQixFQUFFLFFBQVE7b0NBQzNCLFFBQVEsRUFBRSxTQUFTO2lDQUNwQixDQUFDO2dDQUNGLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQzs2QkFDM0IsQ0FBQzs0QkFDRixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztnQ0FDbEIsa0JBQWtCLEVBQUUsR0FBRztnQ0FDdkIsbUJBQW1CLEVBQUUsQ0FBQztnQ0FDdEIsaUJBQWlCLEVBQUUsUUFBUTtnQ0FDM0IsUUFBUSxFQUFFLFNBQVM7Z0NBQ25CLFNBQVMsRUFBRSxDQUFDOzZCQUNiLENBQUMsQ0FDRDt5QkFBQyxDQUNILENBQUM7O2lCQUNIOzs7O2dCQXZEMEQsVUFBVTtnQkFDaEIsZ0JBQWdCOzs7dUJBeURsRSxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFFTCxNQUFNOzZCQUNOLE1BQU07NEJBQ04sTUFBTTs0QkFDTixNQUFNOzhCQUNOLE1BQU07MEJBRU4sU0FBUyxTQUFDLFNBQVM7NkJBQ25CLFNBQVMsU0FBQyxZQUFZOztJQXVHekIsdUNBQUM7Q0EzS0Q7Ozs7OztBQ0hBO0lBK0RFLGlDQUFvQixPQUF5QixFQUFVLFFBQW1CO1FBQXRELFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWhCakUsYUFBUSxHQUFHLFdBQVcsQ0FBQztRQUN2QixrQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNwQixrQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNuQix1QkFBa0IsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5RCxlQUFVLEdBQTBDLElBQUksWUFBWSxFQUFFLENBQUM7UUFHakYsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFFcEIsZUFBVSxHQUFHLEtBQUssQ0FBQztLQU9sQjs7OztJQUxELDBDQUFROzs7SUFBUjtLQUVDOzs7O0lBTUQseUNBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1Qjs7OztJQUVELGlEQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDekI7Ozs7SUFFRCxtREFBaUI7OztJQUFqQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNyQjs7OztJQUdELDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0tBQ3pCOzs7O0lBRUQsK0NBQWE7OztJQUFiO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0tBRTFCOzs7OztJQUVELDBDQUFROzs7O0lBQVIsVUFBUyxLQUFLO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLE1BQU0sRUFBRTtZQUNoRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7S0FDRjs7Ozs7SUFFRCwwREFBd0I7Ozs7SUFBeEIsVUFBeUIsUUFBZ0I7UUFDdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7UUFFaEMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRO2dCQUNYLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGdCQUFjLEdBQUcsR0FBRyxRQUFRLG9CQUFlLEdBQUcsR0FBRyxRQUFRLFNBQU0sQ0FBQyxDQUFDO1NBQzlIO0tBQ0Y7Ozs7O0lBRUQsMkRBQXlCOzs7O0lBQXpCLFVBQTBCLFFBQWdCO1FBQTFDLGlCQWVDO1FBZEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87O2dCQUNsQixTQUFTLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ25DLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxnQkFBYyxLQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsb0JBQWUsR0FBRyxHQUFHLEtBQUksQ0FBQyxlQUFlLFNBQU0sRUFBRSxDQUFDO2dCQUM3RyxPQUFPLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxnQkFBYyxRQUFRLEdBQUcsR0FBRyxvQkFBZSxHQUFHLEdBQUcsUUFBUSxTQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQy9HLENBQUM7O2dCQUVJLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUNuRSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNaLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNqQixPQUFPLEVBQUUsQ0FBQzthQUNYLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztLQUNKOzs7OztJQUVELHlDQUFPOzs7O0lBQVAsVUFBUSxRQUFnQjtRQUN0QixJQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFDZCxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDckM7Ozs7SUFFRCwyQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3JCOzs7O0lBRUQsMkNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOzs7O0lBRUQsa0RBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUN0Qjs7OztJQUVELDBDQUFROzs7SUFBUjtRQUFBLGlCQWNDOztZQWJPLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNuQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWMsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLG9CQUFlLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxTQUFNLEVBQUUsQ0FBQztZQUM3RyxPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSwwQkFBMEIsRUFBRSxDQUFDLENBQUM7U0FDM0UsQ0FBQzs7WUFFSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDbkUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNaLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDN0IsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCLENBQUMsQ0FBQztLQUVKOzs7OztJQUVELG1EQUFpQjs7OztJQUFqQixVQUFrQixRQUFnQjtRQUNoQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFROztZQUVYLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGdCQUFjLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxvQkFBZSxHQUFHLEdBQUcsUUFBUSxHQUFHLEdBQUcsU0FBTSxDQUFDLENBQUM7S0FDaEo7O2dCQXhLRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IscXZCQUErQztvQkFFL0MsVUFBVSxFQUFFO3dCQUNWLE9BQU8sQ0FBQyxVQUFVLEVBQUU7NEJBQ2xCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQztvQ0FDSixrQkFBa0IsRUFBRSxHQUFHO29DQUN2QixtQkFBbUIsRUFBRSxFQUFFO29DQUN2QixpQkFBaUIsRUFBRSxRQUFRO29DQUMzQixRQUFRLEVBQUUsU0FBUztpQ0FDcEIsQ0FBQztnQ0FDRixPQUFPLENBQUMsZ0JBQWdCLENBQUM7NkJBQzFCLENBQUM7NEJBQ0YsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7Z0NBQ2xCLGtCQUFrQixFQUFFLEdBQUc7Z0NBQ3ZCLG1CQUFtQixFQUFFLENBQUM7Z0NBQ3RCLGlCQUFpQixFQUFFLFFBQVE7Z0NBQzNCLFFBQVEsRUFBRSxTQUFTOzZCQUNwQixDQUFDLENBQ0Q7eUJBQUMsQ0FDSDt3QkFDRCxPQUFPLENBQUMsYUFBYSxFQUFFOzRCQUNyQixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQ2pELENBQUM7eUJBQ0gsQ0FBQzt3QkFDRixPQUFPLENBQUMsVUFBVSxFQUFFOzRCQUNsQixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsa0NBQWtDLEVBQUUsQ0FBQztnQ0FDeEQsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxvQ0FBb0MsRUFBRSxDQUFDLENBQUM7NkJBQ2pHLENBQUM7NEJBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxvQ0FBb0MsRUFBRSxDQUFDO2dDQUN0RixPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsb0NBQW9DLEVBQUUsQ0FBQyxDQUFDOzZCQUNyRyxDQUFDO3lCQUNILENBQ0E7cUJBQ0Y7O2lCQUNGOzs7O2dCQTFDb0QsZ0JBQWdCO2dCQURXLFNBQVM7OzsyQkE4Q3RGLEtBQUs7Z0NBQ0wsS0FBSztnQ0FDTCxLQUFLO3FDQUNMLE1BQU07NkJBQ04sTUFBTTswQkFDTixTQUFTLFNBQUMsU0FBUzswQkFDbkIsU0FBUyxTQUFDLFNBQVM7O0lBMEh0Qiw4QkFBQztDQTNLRDs7Ozs7O0FDTEE7SUEwRkUsNkJBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUF4QjlCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFFZCxnQkFBVyxHQUFzQyxJQUFJLFlBQVksRUFBdUIsQ0FBQztRQUN6RixlQUFVLEdBQXNDLElBQUksWUFBWSxFQUF1QixDQUFDO1FBQ3hGLGNBQVMsR0FBc0MsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFDdkYsWUFBTyxHQUFzQyxJQUFJLFlBQVksRUFBdUIsQ0FBQztRQUkvRixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxRQUFRLENBQUM7S0FZcEI7SUFWRCxzQkFBMEIsd0NBQU87Ozs7UUFBakM7O2dCQUNRLGFBQWEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBZ0IsSUFBSSxDQUFDLFFBQVUsR0FBRyxFQUFFOztnQkFDdEUsZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFrQixJQUFJLENBQUMsVUFBWSxHQUFHLEVBQUU7O2dCQUM5RSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLEdBQUcsRUFBRTs7Z0JBQ3hDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFpQixHQUFHLEVBQUU7WUFFNUQsT0FBVSxhQUFhLFNBQUksZUFBZSxTQUFJLFNBQVMsU0FBSSxhQUFlLENBQUM7U0FDNUU7OztPQUFBOzs7O0lBS0Qsc0NBQVE7OztJQUFSO0tBQ0M7Ozs7SUFFRCwyQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssY0FBYyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzlCO0tBQ0Y7Ozs7SUFFRCxrQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1Qjs7OztJQUVELG9DQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0tBQ0Y7Ozs7SUFFRCwrQ0FBaUI7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO0tBQzVCOzs7Ozs7SUFFRCxpREFBbUI7Ozs7O0lBQW5CLFVBQW9CLEtBQUssRUFBRSxJQUFZO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjtTQUVGO0tBQ0Y7Ozs7SUFFRCwwQ0FBWTs7O0lBQVo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCOzs7OztJQUVELG9DQUFNOzs7O0lBQU4sVUFBTyxRQUFnQjtRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGFBQVcsUUFBUSxHQUFHLEdBQUcsR0FBRyxHQUFHLFNBQU0sQ0FBQyxDQUFDO0tBQ3BIOzs7OztJQUVELHlDQUFXOzs7O0lBQVgsVUFBWSxLQUFLO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7S0FDRjs7Z0JBcEpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixrNUJBQTJDO29CQUUzQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFOzRCQUM5QixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUM7Z0NBQ2hDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs2QkFDMUIsQ0FBQzs0QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDOzZCQUMzRCxDQUFDO3lCQUNILENBQUM7d0JBQ0YsT0FBTyxDQUFDLGFBQWEsRUFBRTs0QkFDckIsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dDQUN2QixPQUFPLENBQUMsZ0JBQWdCLENBQUM7NkJBQzFCLENBQUM7NEJBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzs2QkFDbEQsQ0FBQzt5QkFDSCxDQUFDO3dCQUNGLE9BQU8sQ0FBQyxZQUFZLEVBQUU7NEJBQ3BCLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtnQ0FDN0IsT0FBTyxDQUFDLGdCQUFnQixDQUFDOzZCQUMxQixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtnQ0FDN0IsT0FBTyxDQUFDLGVBQWUsQ0FBQzs2QkFDekIsQ0FBQzs0QkFDRixLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQzs0QkFDckUsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO3lCQUNyRSxDQUFDO3dCQUNGLE9BQU8sQ0FBQyxVQUFVLEVBQUU7NEJBQ2xCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQztvQ0FDSixrQkFBa0IsRUFBRSxHQUFHO29DQUN2QixtQkFBbUIsRUFBRSxFQUFFO29DQUN2QixpQkFBaUIsRUFBRSxRQUFRO29DQUMzQixRQUFRLEVBQUUsU0FBUztpQ0FDcEIsQ0FBQztnQ0FDRixPQUFPLENBQUMsaUJBQWlCLENBQUM7NkJBQzNCLENBQUM7NEJBQ0YsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7Z0NBQ2xCLGtCQUFrQixFQUFFLEdBQUc7Z0NBQ3ZCLG1CQUFtQixFQUFFLENBQUM7Z0NBQ3RCLGlCQUFpQixFQUFFLFFBQVE7Z0NBQzNCLFFBQVEsRUFBRSxTQUFTO2dDQUNuQixTQUFTLEVBQUUsQ0FBQzs2QkFDYixDQUFDLENBQ0Q7eUJBQUMsQ0FDSCxDQUFDOztpQkFDSDs7OztnQkF4RG1FLFNBQVM7OzsyQkEyRDFFLEtBQUs7NkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFFTCxNQUFNOzZCQUNOLE1BQU07NEJBQ04sTUFBTTswQkFDTixNQUFNOzBCQUVOLFNBQVMsU0FBQyxTQUFTOzBCQUtuQixXQUFXLFNBQUMsT0FBTzs7SUEwRXRCLDBCQUFDO0NBdEpEOzs7Ozs7QUNMQTtJQWFFO0tBQWlCOzs7O0lBRWpCLHFDQUFROzs7SUFBUjtLQUNDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0Isc0VBQTJDOztpQkFFNUM7Ozs7O3VCQUdFLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOztJQU9SLHlCQUFDO0NBaEJEOzs7Ozs7QUNGQTtJQW1GRSx5QkFBbUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUE3RGpDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBRXJCLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2Qsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFLYixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ2hCLGdCQUFXLEdBQXNCLE1BQU0sQ0FBQztRQUN2QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO0tBaUR0QjtJQTdDdEMsc0JBQ0kscUNBQVE7Ozs7UUFzQlo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBekJELFVBQ2EsUUFBMkI7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNiLE9BQU87YUFDUjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztTQUMzQjs7O09BQUE7SUFLRCxzQkFDSSx1Q0FBVTs7OztRQVdkO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOzs7OztRQWRELFVBQ2UsVUFBbUI7WUFEbEMsaUJBV0M7WUFUQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxJQUFJLFVBQVUsS0FBSyxLQUFLLEVBQUU7Z0JBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2FBQzFCO2lCQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtnQkFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLFVBQVUsQ0FBQztvQkFDVCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDekIsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNUO1NBQ0Y7OztPQUFBOzs7O0lBU0Qsa0NBQVE7OztJQUFSO0tBQ0M7Ozs7SUFFRCx5Q0FBZTs7O0lBQWY7S0FDQzs7OztJQUVELDRDQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDakM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFBQSxpQkFxQkM7UUFwQkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUxQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixVQUFVLENBQUM7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNqQyxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsVUFBVSxDQUFDO29CQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztvQkFDakQsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2lCQUM1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1QsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjtLQUNGOzs7Ozs7SUFFTyxxQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsUUFBMkI7UUFDN0MsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO2FBQU0sSUFBSSxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUNyQjthQUFNLElBQUksUUFBUSxLQUFLLE1BQU0sRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdEM7S0FDRjs7Ozs7SUFFTyxxQ0FBVzs7OztJQUFuQjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7U0FDbkI7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNuQjtLQUNGOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0I7O2dCQW5JRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHMzQkFBdUM7O2lCQUV4Qzs7OztnQkFQUSxNQUFNOzs7c0JBbUJaLFNBQVMsU0FBQyxLQUFLO3VCQUNmLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxNQUFNO3VCQUVOLGVBQWUsU0FBQyxrQkFBa0I7MkJBRWxDLEtBQUs7NkJBMkJMLEtBQUs7O0lBa0ZSLHNCQUFDO0NBcElEOzs7Ozs7QUNmQTtJQVdFLDZCQUFvQixRQUFrQixFQUFVLGFBQStCLEVBQVUsV0FBNkI7UUFBbEcsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtLQUVySDtJQUVELHNCQUNJLHNDQUFLOzs7OztRQURULFVBQ1UsU0FBc0I7WUFEaEMsaUJBa0JDOztnQkFkSyxJQUFJLEdBQUcsSUFBSTtZQUNmLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNqQixJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3hCLElBQUksR0FBRyxLQUFLLENBQUM7aUJBQ2Q7YUFDRixDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFN0MsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDekQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUM1QjtTQUNGOzs7T0FBQTs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztpQkFDcEI7Ozs7Z0JBTFEsUUFBUTtnQkFEVSxnQkFBZ0I7Z0JBQUUsV0FBVzs7O3dCQWVyRCxLQUFLOztJQW9CUiwwQkFBQztDQS9CRDs7Ozs7O0FDSkE7SUFVRSx5QkFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUgzQyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxJQUFJLENBQUM7S0FFOEI7SUFFaEQsc0JBQ0ksb0NBQU87Ozs7UUFEWDs7O2dCQUdRRyxRQUFLLEdBQUcsMEJBQXVCLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxvRUFBb0UsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLHdDQUF3QyxHQUFHLHlDQUF5QyxDQUFFO1lBQ3JQLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQ0EsUUFBSyxDQUFDLENBQUM7U0FDdkQ7OztPQUFBO0lBRUQsc0JBQWEsc0NBQVM7Ozs7O1FBQXRCLFVBQXVCLE1BQWtEO1lBQ3ZFLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO2FBQ3JDO1NBRUY7OztPQUFBOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0tBQ3ZEOztnQkExQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4Qjs7OztnQkFKbUIsWUFBWTs7OzBCQVc3QixXQUFXLFNBQUMsT0FBTzs0QkFPbkIsS0FBSzs7SUFjUixzQkFBQztDQTlCRDs7Ozs7O0FDSEE7SUFVRSw4QkFBb0IsYUFBK0IsRUFBVSxXQUE2QjtRQUF0RSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFIMUYsdUJBQWtCLEdBQWEsRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBRzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztLQUNqRDtJQUVELHNCQUFhLCtEQUE2Qjs7Ozs7UUFBMUMsVUFBMkMsZUFBeUI7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLGVBQWUsSUFBSSxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBRW5COzs7T0FBQTtJQUVELHNCQUNJLGdEQUFjOzs7OztRQURsQixVQUNtQixPQUFpQjtZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjs7O09BQUE7Ozs7SUFFRCw4Q0FBZTs7O0lBQWY7UUFBQSxpQkFTQzs7WUFSSyxJQUFJLEdBQUcsS0FBSztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDNUIsSUFBSSxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBQSxDQUFDLEVBQUU7Z0JBQzdFLElBQUksR0FBRyxJQUFJLENBQUM7YUFDYjtTQUNGLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMvRSxPQUFPLElBQUksQ0FBQztLQUNiOzs7O0lBRUQseUNBQVU7OztJQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDekQ7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDNUI7S0FDRjs7Z0JBM0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkFKMEIsZ0JBQWdCO2dCQUFFLFdBQVc7OztnREFjckQsS0FBSztpQ0FPTCxLQUFLOztJQTBCUiwyQkFBQztDQTdDRDs7Ozs7O0FDRkE7SUEwQ0UseUJBQW9CLEVBQWMsRUFDekIsUUFBbUI7UUFEUixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQVc7UUE1QjVCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFFTix5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pDLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2IsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUF5QjNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUM1QixZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCO2FBQ0UsU0FBUyxDQUFDO1lBQ1QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4RSxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDaEYsQ0FBQyxDQUFDO0tBQ047Ozs7O0lBNUJELG9DQUFVOzs7O0lBRFYsVUFDVyxLQUFpQjtRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNCOzs7OztJQUVELG9DQUFVOzs7O0lBRFYsVUFDVyxLQUFLO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQjtJQUVELHNCQUFnQyxvQ0FBTzs7OztRQUF2QztZQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDckI7OztPQUFBO0lBQ0Qsc0JBQWdDLHFDQUFROzs7O1FBQXhDO1lBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNyQjs7O09BQUE7Ozs7O0lBZ0JELGdDQUFNOzs7O0lBQU4sVUFBTyxLQUFLOztZQUNKLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLE9BQU87S0FDUjs7OztJQUNELHVDQUFhOzs7SUFBYjs7WUFDUSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOztZQUM5QixJQUFJLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFO1FBQzNDLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7U0FDNUI7O1lBQ0ssTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSTs7WUFDakQsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7O1lBQ2pELE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0tBQ2xEOzs7OztJQUVELHlDQUFlOzs7O0lBQWYsVUFBZ0IsRUFBZ0I7WUFBZCxnQkFBSyxFQUFFLGdCQUFLOztZQUN0QixNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOztZQUM5QixJQUFJLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFOztZQUNyQyxNQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7O1lBQ3hDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7O1lBQ3BDLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJOztZQUNuRixHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSTtRQUN2RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDbEM7O2dCQTNGRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxZQUFZO29CQUN0QixxQ0FBc0M7O29CQUd0QyxJQUFJLEVBQUU7d0JBQ0osc0JBQXNCLEVBQUUsTUFBTTtxQkFDL0I7O2lCQUNGOzs7O2dCQVpzQixVQUFVO2dCQUFFLFNBQVM7Ozt3QkFrQnpDLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxNQUFNOzJCQUdOLFdBQVcsU0FBQyxnQkFBZ0I7NkJBQzVCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkJBS2hDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBS2hDLFdBQVcsU0FBQyxhQUFhOzJCQUd6QixXQUFXLFNBQUMsYUFBYTs7SUE0RDVCLHNCQUFDO0NBOUZEOzs7Ozs7QUNIQTtJQStCRSwyQkFDbUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVBoQyxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ2hELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFckQsWUFBTyxHQUFHLEtBQUssQ0FBQztLQUluQjs7OztJQUVMLDhDQUFrQjs7O0lBQWxCO1FBQUEsaUJBV0M7O1lBVk8sT0FBTyxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDN0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLFdBQVcsQ0FBQzthQUM3RixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDMUQsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFFLEdBQUEsQ0FBQyxDQUFDO1FBRWpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFDeEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDcEYsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDckM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7S0FHQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0tBQ0Y7Ozs7O0lBRU8saUNBQUs7Ozs7SUFBYjs7WUFDUSxLQUFLLEdBQW9CO1lBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDckMsS0FBSyxFQUNILFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO2dCQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUc7b0JBQ3pELE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU07U0FDbkM7UUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBRXhCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDckI7U0FDRjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDdEI7U0FFRjtLQUNGOzs7O0lBRUQscUNBQVM7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOztnQkFsRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsVUFBVTtpQkFDckI7Ozs7Z0JBcEJDLFVBQVU7Ozt5QkF1QlQsS0FBSzs0QkFDTCxNQUFNOytCQUNOLE1BQU07O0lBMkRULHdCQUFDO0NBbkVEOzs7Ozs7QUNuQkE7SUFzQkUsdUJBQW9CLE9BQW1CLEVBQWtCLE9BQWdCO1FBQXJELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBa0IsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQVZoRSxrQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNwQixrQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNwQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRWQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDckMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7S0FLOUM7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7UUFBQSxpQkFTQztRQVBDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNwQyxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNqQixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7S0FHSjs7Ozs7SUFFTyx3Q0FBZ0I7Ozs7SUFBeEI7UUFBQSxpQkE2REM7O1lBNURPLFdBQVcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDOztZQUNqRSxVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQzs7WUFDL0QsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUM7O1lBQzdELFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDOztZQUNuRSxJQUFJLEdBQUdDLE9BQUssQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDOztZQUVyQyxTQUFTLEdBQUcsV0FBVzthQUMxQixJQUFJLENBQ0gsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssQ0FBQyxJQUFJLEtBQUksQ0FBQyxPQUFPLEdBQUEsQ0FBQyxDQUMxRDs7WUFFRyxXQUFXLEdBQUcsU0FBUzthQUMxQixJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsS0FBVTs7Z0JBQ1AsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNyQyxPQUFPLFVBQVU7aUJBQ2QsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLElBQVM7O29CQUNOLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7Z0JBQ3RDLE9BQU87b0JBQ0wsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLFNBQVMsRUFBRSxJQUFJO29CQUNmLE1BQU0sRUFBRSxNQUFNO29CQUNkLFFBQVEsRUFBRSxRQUFRO29CQUNsQixNQUFNLEVBQUUsUUFBUSxHQUFHLE1BQU07aUJBQzFCLENBQUM7YUFDSCxDQUFDLEVBQ0YsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUEsQ0FBQyxFQUNsQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQ2hCLENBQUM7U0FDTCxDQUFDLENBQUM7UUFHUCxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztZQUN2QixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7b0JBQzFCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQzlCLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsRUFBRTtvQkFDN0MsT0FBTztpQkFDUjtnQkFDRCxJQUFJLE1BQU0sSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFLENBRWpDO2dCQUNELEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDaEQsQ0FBQyxDQUFDO1lBRUgsS0FBSztpQkFDRixJQUFJLENBQ0gsSUFBSSxFQUFFLENBQ1A7aUJBQ0EsU0FBUyxDQUFDLFVBQUEsSUFBSTs7b0JBQ1AsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQzs7b0JBQ3hCLE9BQU8sR0FBRyxNQUFNLElBQUksS0FBSSxDQUFDLGFBQWE7Z0JBQzVDLElBQUksT0FBTyxFQUFFO29CQUNYLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3hCO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3ZCO2FBQ0YsQ0FBQyxDQUFDO1NBQ04sQ0FBQyxDQUFDO0tBQ0o7O2dCQTFGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCOzs7O2dCQVQyQixVQUFVO2dCQUM3QixPQUFPLHVCQXFCNEIsSUFBSTs7O2dDQVY3QyxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFFTCxNQUFNOzRCQUNOLE1BQU07MEJBQ04sTUFBTTs7SUFnRlQsb0JBQUM7Q0EzRkQ7Ozs7OztBQ1BBO0lBb0VFO1FBOUJBLG9CQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFckIsVUFBSyxHQUF3QixRQUFRLENBQUM7UUFHNUIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXRELG1CQUFjLEdBQXVCLE9BQU8sQ0FBQztRQUM3Qyx3QkFBbUIsR0FBdUIsT0FBTyxDQUFDO0tBc0JqQztJQXBCakIsc0JBQ0ksK0JBQUk7Ozs7UUFEUjtZQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjs7Ozs7UUFDRCxVQUFTLElBQVk7WUFDbkIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDbkI7U0FDRjs7O09BUEE7SUFTRCxzQkFDSSx5Q0FBYzs7OztRQURsQjtZQUVFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUM3Qjs7Ozs7UUFDRCxVQUFtQixLQUFhO1lBQzlCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQzs7O09BSEE7Ozs7SUFPRCxnQ0FBUTs7O0lBQVI7S0FDQzs7Ozs7SUFFRCxpQ0FBUzs7OztJQUFULFVBQVUsSUFBWTtRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztLQUN2Qjs7Ozs7SUFFRCwwQ0FBa0I7Ozs7SUFBbEIsVUFBbUIsS0FBYTtRQUM5QixJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsT0FBTyxDQUFDO1NBQ3BDO2FBQU0sSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1lBQy9CLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUM7U0FDcEM7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1lBQzlCLElBQUksSUFBSSxDQUFDLG1CQUFtQixLQUFLLE9BQU8sRUFBRTtnQkFDeEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFFBQVEsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUM7YUFDcEM7U0FDRjtLQUNGOzs7OztJQUlELHNDQUFjOzs7O0lBQWQsVUFBZSxLQUFLO1FBQ2xCLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUM5RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEM7S0FDRjs7Ozs7SUFFRCxxQ0FBYTs7OztJQUFiLFVBQWMsS0FBSztRQUNqQixJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO1lBQzdELElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN2QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDdkM7U0FDRjtLQUVGOztnQkF2SEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixpZ0JBQW9DO29CQUVwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsVUFBVSxFQUFFO3dCQUNWLE9BQU8sQ0FBQyxZQUFZLEVBQUU7NEJBQ3BCLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtnQ0FDN0IsT0FBTyxDQUFDLGdCQUFnQixDQUFDOzZCQUMxQixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtnQ0FDN0IsT0FBTyxDQUFDLGVBQWUsQ0FBQzs2QkFDekIsQ0FBQzs0QkFDRixLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQzs0QkFDOUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSx3QkFBd0IsRUFBRSxDQUFDLENBQUM7eUJBQzlFLENBQUM7d0JBQ0YsT0FBTyxDQUFDLFdBQVcsRUFBRTs0QkFDbkIsVUFBVSxDQUFDLGdCQUFnQixFQUFFO2dDQUMzQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQztnQ0FDOUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7NkJBQzFFLENBQUM7NEJBQ0YsVUFBVSxDQUFDLGlCQUFpQixFQUFFO2dDQUM1QixPQUFPLENBQUMsZ0JBQWdCLENBQUM7NkJBQzFCLENBQUM7NEJBQ0YsVUFBVSxDQUFDLGlCQUFpQixFQUFFO2dDQUM1QixPQUFPLENBQUMsZUFBZSxDQUFDOzZCQUN6QixDQUFDOzRCQUNGLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQzs0QkFDOUQsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO3lCQUNoRSxDQUFDO3FCQUNIOztpQkFDRjs7Ozs7d0JBUUUsS0FBSztpQ0FDTCxNQUFNO3VCQUtOLEtBQUs7aUNBWUwsS0FBSzs7SUErRFIsb0JBQUM7Q0F4SEQ7Ozs7OztBQ0hBO0lBZ0RFO1FBWlMsa0JBQWEsR0FBZ0MsUUFBUSxDQUFDO1FBQ3RELGNBQVMsR0FBcUIsTUFBTSxDQUFDO1FBQzlDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFTixhQUFRLEdBQWtDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0QsWUFBTyxHQUFrQyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBU3JFO0lBUEQsc0JBQWtDLHNDQUFTOzs7O1FBQTNDO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7T0FBQTs7OztJQU9ELGtDQUFROzs7SUFBUjtLQUVDOzs7O0lBRUQsOEJBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7S0FDckI7Ozs7SUFFRCwrQkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7Z0JBMURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIseVlBQXNDO29CQUV0QyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLFlBQVksRUFBRTs0QkFDcEIsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDckMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDL0IsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7Z0NBQ3BCLEdBQUcsRUFBRSxLQUFLO2dDQUNWLFNBQVMsRUFBRSxrQkFBa0I7NkJBQzlCLENBQUMsQ0FBQzs0QkFDSCxLQUFLLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQzs0QkFDMUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7NEJBQ3JFLEtBQUssQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUN6QixFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLENBQzdDLENBQUM7NEJBQ0YsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUN0RCxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzs0QkFDakUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7Z0NBQ3pCLEdBQUcsRUFBRSxLQUFLO2dDQUNWLFNBQVMsRUFBRSxrQkFBa0I7Z0NBQzdCLE9BQU8sRUFBRSxDQUFDOzZCQUNYLENBQUMsQ0FBQzs0QkFDSCxVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNuQixPQUFPLENBQUMsZUFBZSxDQUFDOzZCQUN6QixDQUFDO3lCQUNILENBQUM7cUJBQ0g7O2lCQUNGOzs7OztnQ0FHRSxLQUFLOzRCQUNMLEtBQUs7MkJBRUwsS0FBSzsyQkFDTCxNQUFNOzBCQUNOLE1BQU07NEJBRU4sV0FBVyxTQUFDLGVBQWU7O0lBdUI5QixzQkFBQztDQTlERDs7Ozs7O0FDSkE7SUFxQkUsbUNBQW9CLEdBQWtCO1FBQWxCLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFQN0IsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGdCQUFXLEdBQXNCLE1BQU0sQ0FBQztLQU1OO0lBSjNDLHNCQUEwQiw4Q0FBTzs7OztRQUFqQztZQUNFLE9BQU8sV0FBUyxJQUFJLENBQUMsV0FBYSxDQUFDO1NBQ3BDOzs7T0FBQTs7OztJQUlELDRDQUFROzs7SUFBUjtLQUNDOzs7O0lBRUQsMkNBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLDJMQUFtRDs7aUJBRXBEOzs7O2dCQVBRLGFBQWE7Ozt1QkFVbkIsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUVMLFdBQVcsU0FBQyxPQUFPOztJQVl0QixnQ0FBQztDQXpCRDs7Ozs7O0FDSkE7SUFzSEUsOEJBQW9CLHdCQUFrRCxFQUM1RCxNQUFzQixFQUN0QixPQUFzQixFQUN0QixRQUFrQixFQUNsQixRQUFtQixFQUNuQixNQUF5QixFQUN6QixTQUEyQixFQUMzQixTQUF1QixFQUN2QixRQUFrQjtRQVJSLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDNUQsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBdENuQixpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQixZQUFPLEdBQXdCLEVBQUUsQ0FBQztRQUNqQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4QyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFHeEIsVUFBSyxHQUFHLENBQUMsQ0FBQztLQThCVDtJQXRERCxzQkFDSSx5Q0FBTzs7OztRQURYO1lBRUUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsNENBQTRDLENBQUMsQ0FBQzthQUM5RjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsYUFBVyxJQUFJLENBQUMsTUFBTSxtQkFBYyxJQUFJLENBQUMsS0FBSyx3QkFBcUIsQ0FBQyxDQUFDO2FBQ3JIO1NBQ0Y7OztPQUFBOzs7O0lBaURELHVDQUFROzs7SUFBUjtLQUNDOzs7OztJQUVELG1DQUFJOzs7O0lBQUosVUFBSyxLQUFLO1FBQ1IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7OztJQUVELDBDQUFXOzs7O0lBQVgsVUFBWSxLQUFLOztZQUNULE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRTtRQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3ZJOzs7OztJQUVELG9EQUFxQjs7OztJQUFyQixVQUFzQixLQUFLO1FBQTNCLGlCQTRCQztRQTNCQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyx3QkFBd0I7YUFDOUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUM7YUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztRQUNoRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztRQUNsRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUVsRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVE7YUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVMsQ0FBQztZQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUM5QixDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUU3QyxPQUFPLHNCQUFHLG9CQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUTthQUN4QyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFFOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7S0FFcEM7Ozs7SUFFRCxxQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRTtZQUNsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7OztJQUNELGlEQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzdCOzs7O0lBRUQsa0RBQW1COzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQzFCOzs7OztJQUVELHFDQUFNOzs7O0lBQU4sVUFBTyxLQUFLO1FBQ1YsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLE1BQU0sRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtLQUNGOzs7O0lBRUQsNENBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7S0FDcEY7Ozs7O0lBRUQsc0NBQU87Ozs7SUFBUCxVQUFRLEtBQUs7UUFDWCxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFOztZQUU5QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7S0FDRjs7OztJQUNELDBDQUFXOzs7SUFBWDtRQUFBLGlCQWtCQztRQWpCQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUlILFFBQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJQSxRQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztZQUV6RCxVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDOztZQUNuRCxVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDO2FBQ3RELElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFDckIsTUFBTSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsS0FBSyxDQUFDLEdBQUEsQ0FBQyxFQUM1QyxNQUFNLEVBQUUsQ0FDVDtRQUVILElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLEVBQUUsR0FBQSxDQUFDLENBQUM7S0FDdEU7Ozs7SUFFRCx5Q0FBVTs7O0lBQVY7UUFBQSxpQkFvQkM7UUFuQkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJQSxRQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzs7WUFFOUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFVO1lBRTdDLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7U0FDRixDQUFDLENBQUM7O1lBRUcsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU07YUFDaEIsU0FBUyxDQUFDLFVBQUMsS0FBVTtZQUNwQixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDaEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQixDQUFDLENBQUM7S0FDTjs7OztJQUVELHVDQUFROzs7SUFBUjtRQUFBLGlCQWdFQzs7O1lBOURPLFlBQVksR0FBRyxHQUFHO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSUEsUUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUVJLGFBQW9CLEVBQUUsQ0FBQyxDQUFDOztZQUMzRSxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDOztZQUVoRCxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDOztZQUM1QyxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDOztZQUU5QyxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDOztZQUM5QyxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDOztZQUUxQyxJQUFJLEdBQUcsUUFBUTthQUNsQixJQUFJLENBQ0gsT0FBTyxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsSUFBSSxDQUN4QixNQUFNLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFBLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FDbkM7O1lBRUcsRUFBRSxHQUFHLFFBQVE7YUFDaEIsSUFBSSxDQUNILE9BQU8sQ0FBQyxjQUFNLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FDdEIsTUFBTSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsR0FBQSxDQUFDLENBQUMsR0FBQSxDQUFDLENBQ25DOztZQUVHLFlBQVksR0FBR0QsT0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7UUFFcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBUTtZQUNqRCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNyQyxDQUFDLENBQUM7O1lBRUcsWUFBWSxHQUFHLE9BQU87YUFDekIsSUFBSSxDQUNILE1BQU0sQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUEsQ0FBQyxDQUM3Qjs7WUFFRyxTQUFTLEdBQUcsUUFBUTthQUN2QixJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFBLENBQUMsRUFDcEQsT0FBTyxDQUFDLGNBQU0sT0FBQSxZQUFZLEdBQUEsQ0FDekIsQ0FBQztRQUVOLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUzthQUN0QixTQUFTLENBQUMsVUFBQyxHQUFRO1lBQ2xCLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEIsQ0FBQyxDQUFDO1FBR0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNO2FBQ3BCLElBQUksQ0FDSCxNQUFNLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxHQUFHLFlBQVksSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLENBQUMsR0FBQSxDQUFDLENBQ3JHO2FBQ0EsU0FBUyxDQUFDLGNBQVEsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTTthQUNuQixJQUFJOztRQUVILE1BQU0sQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksWUFBWSxJQUFJLEtBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLEdBQUcsWUFBWSxJQUFJLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FDeko7YUFDQSxTQUFTLENBQUMsVUFBQyxLQUFLO1lBQ2YsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQy9DLENBQUMsQ0FBQztLQUNOOzs7OztJQUVELG1DQUFJOzs7O0lBQUosVUFBSyxLQUFVO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ2pDOztZQUNLLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7O1lBQzNDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDOztZQUMxQixJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzs7WUFDOUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFFbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BCOzs7OztJQUVELDhDQUFlOzs7O0lBQWYsVUFBZ0IsR0FBRzs7WUFDWCxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7O1lBQ25DLFVBQVUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSzs7WUFDckQsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQztRQUN2RixJQUFJLEdBQUcsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkI7YUFBTSxJQUFJLEdBQUcsR0FBRyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxPQUFPLEdBQUcsQ0FBQztLQUNaOzs7OztJQUVELDhDQUFlOzs7O0lBQWYsVUFBZ0IsR0FBRzs7WUFDWCxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7O1lBQ3BDLFdBQVcsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSzs7WUFDdkQsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzs7WUFDckMsU0FBUyxHQUFHLEdBQUc7UUFDbkIsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3pELFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyRjthQUFNO1lBQ0wsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JGO1FBQ0QsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRTtZQUNqQyxPQUFPLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDaEM7YUFBTSxJQUFJLEdBQUcsR0FBRyxTQUFTLEdBQUcsTUFBTSxFQUFFO1lBQ25DLE9BQU8sU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUMzQjtRQUNELE9BQU8sR0FBRyxDQUFDO0tBQ1o7Ozs7O0lBRUQsd0NBQVM7Ozs7SUFBVCxVQUFVLE1BQWM7UUFBeEIsaUJBTUM7UUFMQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQUksTUFBTSxPQUFJLENBQUMsQ0FBQzthQUM3RSxDQUFDLENBQUM7U0FDSjtLQUNGOzs7OztJQUVELG1EQUFvQjs7OztJQUFwQixVQUFxQixLQUFVOztZQUN2QixZQUFZLEdBQUcsR0FBRztRQUN4QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLENBQUM7S0FDdEQ7Ozs7O0lBRUQsd0NBQVM7Ozs7SUFBVCxVQUFVLEtBQUs7O1lBQ1AsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDeEI7Ozs7O0lBRUQsOENBQWU7Ozs7SUFBZixVQUFnQixLQUFLOztZQUNiLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDO1FBQ2pELE9BQU8sS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDO0tBQ3hDOzs7Ozs7SUFFRCx1Q0FBUTs7Ozs7SUFBUixVQUFTLEtBQUssRUFBRSxJQUFLO1FBQXJCLGlCQU9DO1FBTkMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLDRCQUEwQixLQUFLLE1BQUcsQ0FBQyxDQUFDO1NBQ3ZHLENBQUMsQ0FBQztLQUNKOzs7OztJQUVELHFDQUFNOzs7O0lBQU4sVUFBTyxHQUFHO1FBQVYsaUJBTUM7UUFMQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFLLEdBQUcsT0FBSSxDQUFDLENBQUM7U0FDekUsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsc0NBQU87Ozs7SUFBUCxVQUFRLElBQUk7UUFBWixpQkFLQztRQUpDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBSyxJQUFJLE9BQUksQ0FBQyxDQUFDO1NBQzNFLENBQUMsQ0FBQztLQUNKOzs7OztJQUVELDJDQUFZOzs7O0lBQVosVUFBYSxLQUFVOztZQUNmLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUTs7WUFDekIsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRTdELElBQUksUUFBUSxJQUFJLEdBQUcsRUFBRTtZQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUM5QzthQUFNLElBQUksUUFBUSxJQUFJLEdBQUcsSUFBSSxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBQzVDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3hHO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDL0U7S0FDRjs7OztJQUVELHVDQUFROzs7SUFBUjtRQUFBLGlCQVlDOztZQVhPLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUssSUFBSSxDQUFDLEdBQUcsT0FBSSxFQUFFLENBQUM7WUFDL0IsT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE9BQUksRUFBRSxDQUFDLENBQUM7U0FDekUsQ0FBQzs7WUFFSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUM1RCxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNmLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekMsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsMENBQVc7Ozs7SUFBWCxVQUFZLEtBQUs7UUFBakIsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU87U0FDUjs7WUFDSyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDakMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQUksS0FBSyxPQUFJLEVBQUUsQ0FBQztZQUNoQyxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ2hELENBQUM7O1lBRUksU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDekQsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pCLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDZixTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQixDQUFDLENBQUM7S0FDSjs7Ozs7O0lBRUQsMkNBQVk7Ozs7O0lBQVosVUFBYSxPQUFlLEVBQUUsVUFBb0M7UUFBbEUsaUJBb0JDOzs7O1lBakJPLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksT0FBTzs7WUFDdEQsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsSUFBSSxPQUFPOztZQUN0RCxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsT0FBTzs7WUFDdEMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxHQUFHLE9BQU87O1lBQ3BDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsNEJBQTBCLElBQUksQ0FBQyxLQUFLLE1BQUcsRUFBRSxHQUFHLEVBQUssSUFBSSxDQUFDLEdBQUcsT0FBSSxFQUFFLElBQUksRUFBSyxJQUFJLENBQUMsSUFBSSxPQUFJLEVBQUUsQ0FBQztZQUMzRyxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSw0QkFBMEIsT0FBTyxNQUFHLEVBQUUsR0FBRyxFQUFLLE1BQU0sT0FBSSxFQUFFLElBQUksRUFBSyxPQUFPLE9BQUksRUFBRSxDQUFDLENBQUM7U0FDNUgsQ0FBQzs7WUFDSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUM1RCxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNmLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QixLQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztTQUMvQixDQUFDLENBQUM7S0FDSjs7OztJQUVELHlDQUFVOzs7SUFBVjtRQUFBLGlCQWVDOztZQWRPLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7O1lBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsNEJBQTBCLElBQUksQ0FBQyxLQUFLLE1BQUcsRUFBRSxHQUFHLEVBQUssSUFBSSxDQUFDLEdBQUcsT0FBSSxFQUFFLElBQUksRUFBSyxJQUFJLENBQUMsSUFBSSxPQUFJLEVBQUUsQ0FBQztZQUMzRyxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSw0QkFBMEIsQ0FBQyxNQUFHLEVBQUUsR0FBRyxFQUFLLENBQUMsT0FBSSxFQUFFLElBQUksRUFBSyxDQUFDLE9BQUksRUFBRSxDQUFDLENBQUM7U0FDM0csQ0FBQzs7WUFDSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUM1RCxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNmLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDN0MsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCw4Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7S0FDaEQ7Ozs7O0lBRUQsOENBQWU7Ozs7SUFBZixVQUFnQixLQUFLO1FBQ25CLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7S0FFRjs7OztJQUVELG9EQUFxQjs7O0lBQXJCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUMvRDs7OztJQUNELG1EQUFvQjs7O0lBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM5RDs7OztJQUVELGdEQUFpQjs7O0lBQWpCO1FBQ0UsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQztLQUN4RTs7Z0JBcmZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixtdURBQTRDO29CQUU1QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsVUFBVSxFQUFFO3dCQUNWLE9BQU8sQ0FBQyxVQUFVLEVBQUU7NEJBQ2xCLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs7Z0NBRXJCLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDdEQsQ0FBQzs0QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNuQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7O2dDQUVyQixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUNoRCxDQUFDO3lCQUNILENBQUM7d0JBQ0YsT0FBTyxDQUFDLE1BQU0sRUFBRTs0QkFDZCxVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNuQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0NBQ3JCLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDakQsQ0FBQzs0QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNuQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0NBQ3JCLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQ2hELENBQUM7eUJBQ0gsQ0FBQzt3QkFDRixPQUFPLENBQUMsWUFBWSxFQUFFOzRCQUNwQixVQUFVLENBQUMsUUFBUSxFQUFFOztnQ0FFbkIsS0FBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxDQUFDOztnQ0FFaEosT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzs2QkFDN0ksRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO3lCQUNyRSxDQUFDO3dCQUNGLE9BQU8sQ0FBQyxZQUFZLEVBQUU7NEJBQ3BCLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ25CLEtBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQzs7Z0NBRWpJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQ2hLOzZCQUNGLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO3lCQUNwRixDQUFDO3FCQUNIOztpQkFDRjs7OztnQkEvREMsd0JBQXdCO2dCQUV4QixjQUFjO2dCQWFQLGFBQWE7Z0JBQUUsUUFBUTtnQkFUOUIsU0FBUztnQkFDVCxpQkFBaUI7Z0JBSzJCLGdCQUFnQjtnQkFuQmpDLFlBQVk7Z0JBTXZDLFFBQVE7OzswQkFtRVAsV0FBVyxTQUFDLE9BQU87NEJBU25CLFNBQVMsU0FBQyxXQUFXOzRCQUNyQixTQUFTLFNBQUMsV0FBVzt5QkFDckIsU0FBUyxTQUFDLFFBQVE7c0JBQ2xCLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOytCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxNQUFNOztJQXFiVCwyQkFBQztDQXRmRDs7Ozs7O0FDekJBO0lBa0RFLGdDQUFtQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBYnRDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBSWxCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDYixtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRCxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkQsVUFBSyxHQUF1QixRQUFRLENBQUM7S0FFTTs7OztJQUUzQyx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLFFBQVEsQ0FBQztLQUM5Qzs7OztJQUVELHVDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0tBQ3RCOzs7O0lBQ0QscUNBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7S0FDdkI7Ozs7O0lBRUQsNENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLEtBQUssRUFBRTtZQUM1RyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUN0QixPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxLQUFLLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDNUcsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDckIsT0FBTztTQUNSO0tBQ0Y7Ozs7SUFFRCw4Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUN0QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDZDs7OztJQUVELGdEQUFlOzs7SUFBZjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtLQUNGOzs7OztJQUdELHFEQUFvQjs7OztJQUFwQixVQUFxQixLQUFLO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRSxDQUU5RDtRQUVELElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDN0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7S0FFRjs7Ozs7SUFFTyxzQ0FBSzs7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNsQjs7OztJQUVELCtDQUFjOzs7SUFBZDtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUV0Qjs7Ozs7SUFHRCwrQ0FBYzs7OztJQUFkLFVBQWUsS0FBSztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO1lBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDaEM7S0FDRjs7Ozs7SUFFRCw4Q0FBYTs7OztJQUFiLFVBQWMsS0FBSztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO1lBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO0tBQ0Y7Ozs7OztJQUVELGlEQUFnQjs7Ozs7SUFBaEIsVUFBaUIsS0FBSyxFQUFFLEtBQUs7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjthQUFNO1lBQ0wsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Y7S0FDRjs7Z0JBMUlGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qix5ekNBQThDO29CQUU5QyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLGVBQWUsRUFBRTs0QkFDdkIsVUFBVSxDQUFDLGlCQUFpQixFQUFFO2dDQUM1QixPQUFPLENBQUMsZ0JBQWdCLENBQUM7NkJBQzFCLENBQUM7NEJBQ0YsVUFBVSxDQUFDLGlCQUFpQixFQUFFO2dDQUM1QixPQUFPLENBQUMsY0FBYyxDQUFDOzZCQUN4QixDQUFDOzRCQUNGLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7NEJBQ3hDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7eUJBQzFDLENBQUM7d0JBQ0YsT0FBTyxDQUFDLFlBQVksRUFBRTs0QkFDcEIsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dDQUN2QixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7NkJBQzlFLENBQUM7NEJBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsT0FBTyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7NkJBQzlFLENBQUM7eUJBQ0gsQ0FBQzt3QkFDRixPQUFPLENBQUMsV0FBVyxFQUFFOzRCQUNuQixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO2dDQUN0RCxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQzs2QkFDL0UsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIOztpQkFDRjs7OztnQkFsQ3dELFNBQVM7Ozt3QkF3Qy9ELEtBQUs7OEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7aUNBQ0wsTUFBTTsyQkFDTixNQUFNO3VCQUNOLE1BQU07O0lBa0dULDZCQUFDO0NBN0lEOzs7Ozs7QUNGQTtJQVlFLDBCQUFtQixTQUFvQixFQUFTLGlCQUFvQztRQUFqRSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUY3RSxZQUFPLEdBQXNCLEVBQUUsQ0FBQztRQUdyQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDekM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7S0FDQzs7Ozs7SUFFRCx3Q0FBYTs7OztJQUFiLFVBQWMsQ0FBUztRQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDOUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHVSQUF1Qzs7aUJBRXhDOzs7O2dCQU5RLFNBQVM7Z0JBQUUsaUJBQWlCOztJQXFCckMsdUJBQUM7Q0FuQkQ7Ozs7OztBQ0pBO0lBYUU7UUFGVSxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQUV6Qjs7OztJQUVqQixrQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0Qiw0RkFBc0M7O2lCQUV2Qzs7Ozs7dUJBR0UsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLE1BQU07O0lBT1Qsc0JBQUM7Q0FoQkQ7Ozs7Ozs7SUNtQkUsNkJBQW9CLFFBQWtCLEVBQzVCLGlCQUFvQyxFQUNyQyxxQkFBNEM7UUFGakMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3JDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFYNUMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUdiLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsY0FBUyxHQUFHLElBQUksQ0FBQztLQUtnQzs7OztJQUUxRCxzQ0FBUTs7O0lBQVI7S0FDQzs7OztJQUVELGdEQUFrQjs7O0lBQWxCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6Qzs7Ozs7SUFFRCwyQ0FBYTs7OztJQUFiLFVBQWMsS0FBSztRQUNqQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7S0FDRjs7Ozs7SUFFSyw0Q0FBYzs7OztJQUFwQixVQUFxQixFQUFPOzs7Ozs0QkFDVixxQkFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDOzRCQUNsRCxTQUFTLEVBQUUsZ0JBQWdCOzRCQUMzQixLQUFLLEVBQUUsRUFBRTs0QkFDVCxXQUFXLEVBQUUsS0FBSzs0QkFDbEIsY0FBYyxFQUFFO2dDQUNkLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOzZCQUNwRDt5QkFDRixDQUFDLEVBQUE7O3dCQVBJLE9BQU8sR0FBRyxTQU9kO3dCQUVGLHFCQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQXZCLFNBQXVCLENBQUM7d0JBQ1QscUJBQU0sT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFBOzt3QkFBckMsTUFBTSxHQUFHLFNBQTRCO3dCQUMzQyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFOzRCQUMzRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDdEQ7Ozs7O0tBQ0Y7Ozs7O0lBRUssZ0RBQWtCOzs7O0lBQXhCLFVBQXlCLEVBQU87Ozs7Ozs7d0JBQ3hCLE9BQU8sR0FBRyxFQUFFO3dCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOzZCQUNyQyxPQUFPLENBQUMsVUFBQyxNQUFNLEVBQUUsS0FBSzs0QkFDckIsT0FBTyxDQUFDLElBQUksQ0FBQztnQ0FDWCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0NBQ2pCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQ0FDakIsT0FBTyxFQUFFO29DQUNQLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztpQ0FDMUM7NkJBQ0YsQ0FBQyxDQUFDO3lCQUNKLENBQUMsQ0FBQzt3QkFDZSxxQkFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDO2dDQUMxRCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0NBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQ0FDekIsT0FBTyxFQUFFLE9BQU87NkJBQ2pCLENBQUMsRUFBQTs7d0JBSkksV0FBVyxHQUFHLFNBSWxCO3dCQUNGLHFCQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUM7Ozs7O0tBQzdCOzs7OztJQUVELDZDQUFlOzs7O0lBQWYsVUFBZ0IsQ0FBUztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN4Qzs7Z0JBbEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsKzFCQUEyQzs7aUJBRTVDOzs7O2dCQVJRLFFBQVE7Z0JBQUUsaUJBQWlCO2dCQUFtQixxQkFBcUI7Ozt1QkFXekUsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzttQ0FDTCxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxlQUFlLFNBQUMsZUFBZTs7SUFzRWxDLDBCQUFDO0NBcEZEOzs7Ozs7QUNMQTtJQVlFLHNDQUFtQixVQUErQjtRQUEvQixlQUFVLEdBQVYsVUFBVSxDQUFxQjtRQUZ6QyxTQUFJLEdBQUcsZ0JBQWdCLENBQUM7S0FJaEM7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLGlIQUFvRDs7aUJBRXJEOzs7O2dCQU5RLG1CQUFtQjs7O3VCQVN6QixLQUFLOztJQVNSLG1DQUFDO0NBaEJEOzs7Ozs7O0lDd0NvQ0Usa0NBQW1CO0lBQXZEO1FBQUEscUVBSUM7UUFIQyxlQUFTLHNCQUFRO1lBQ2YsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFO1NBQzVELEVBQUEsQ0FBQzs7S0FDSDtJQUFELHFCQUFDO0NBSkQsQ0FBb0MsbUJBQW1CLEdBSXREOztJQUVEO0tBaUZvQzs7Z0JBakZuQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRTt3QkFDWixtQkFBbUI7d0JBQ25CLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsOEJBQThCO3dCQUM5Qix3QkFBd0I7d0JBQ3hCLG9CQUFvQjt3QkFDcEIsMkJBQTJCO3dCQUMzQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsMkJBQTJCO3dCQUMzQix1QkFBdUI7d0JBQ3ZCLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2IsZ0NBQWdDO3dCQUNoQyx1QkFBdUI7d0JBQ3ZCLDBCQUEwQjt3QkFDMUIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIseUJBQXlCO3dCQUN6QixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLDRCQUE0QjtxQkFDN0I7b0JBQ0QsZUFBZSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3pELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLHdCQUF3Qjt3QkFDeEIsZUFBZTt3QkFDZiw4QkFBOEI7d0JBQzlCLG9CQUFvQjt3QkFDcEIsMkJBQTJCO3dCQUMzQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsMkJBQTJCO3dCQUMzQix1QkFBdUI7d0JBQ3ZCLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2IsZ0NBQWdDO3dCQUNoQyx1QkFBdUI7d0JBQ3ZCLDBCQUEwQjt3QkFDMUIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIseUJBQXlCO3dCQUN6QixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZiw0QkFBNEI7cUJBQzdCO2lCQUNGOztJQUNrQywwQkFBQztDQWpGcEM7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ namespace object ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./0br12dev.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/0br12dev.entry.js",
		"common",
		6
	],
	"./0br12dev.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/0br12dev.sc.entry.js",
		"common",
		7
	],
	"./0nmrb2zz.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/0nmrb2zz.entry.js",
		"common",
		8
	],
	"./0nmrb2zz.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/0nmrb2zz.sc.entry.js",
		"common",
		9
	],
	"./2okzqybl.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/2okzqybl.entry.js",
		"common",
		10
	],
	"./2okzqybl.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/2okzqybl.sc.entry.js",
		"common",
		11
	],
	"./37zvyaq1.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/37zvyaq1.entry.js",
		"common",
		12
	],
	"./37zvyaq1.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/37zvyaq1.sc.entry.js",
		"common",
		13
	],
	"./3rqrftes.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/3rqrftes.entry.js",
		"common",
		14
	],
	"./3rqrftes.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/3rqrftes.sc.entry.js",
		"common",
		15
	],
	"./504onqic.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/504onqic.entry.js",
		"common",
		16
	],
	"./504onqic.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/504onqic.sc.entry.js",
		"common",
		17
	],
	"./5ukmwx0v.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/5ukmwx0v.entry.js",
		0,
		"common",
		118
	],
	"./5ukmwx0v.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/5ukmwx0v.sc.entry.js",
		0,
		"common",
		119
	],
	"./6ag2apmg.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/6ag2apmg.entry.js",
		0,
		"common",
		120
	],
	"./6ag2apmg.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/6ag2apmg.sc.entry.js",
		0,
		"common",
		121
	],
	"./6dzptmpg.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/6dzptmpg.entry.js",
		"common",
		18
	],
	"./6dzptmpg.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/6dzptmpg.sc.entry.js",
		"common",
		19
	],
	"./6yuw6tiu.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/6yuw6tiu.entry.js",
		"common",
		20
	],
	"./6yuw6tiu.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/6yuw6tiu.sc.entry.js",
		"common",
		21
	],
	"./70zipbsb.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/70zipbsb.entry.js",
		"common",
		110
	],
	"./70zipbsb.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/70zipbsb.sc.entry.js",
		"common",
		111
	],
	"./7ctkgstz.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/7ctkgstz.entry.js",
		"common",
		22
	],
	"./7ctkgstz.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/7ctkgstz.sc.entry.js",
		"common",
		23
	],
	"./7rt9vz9p.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/7rt9vz9p.entry.js",
		"common",
		112
	],
	"./7rt9vz9p.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/7rt9vz9p.sc.entry.js",
		"common",
		113
	],
	"./ar1pdqad.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ar1pdqad.entry.js",
		"common",
		24
	],
	"./ar1pdqad.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ar1pdqad.sc.entry.js",
		"common",
		25
	],
	"./atkuc6gh.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/atkuc6gh.entry.js",
		"common",
		26
	],
	"./atkuc6gh.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/atkuc6gh.sc.entry.js",
		"common",
		27
	],
	"./bvxj4xew.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/bvxj4xew.entry.js",
		"common",
		28
	],
	"./bvxj4xew.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/bvxj4xew.sc.entry.js",
		"common",
		29
	],
	"./ckeev2xn.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ckeev2xn.entry.js",
		"common",
		30
	],
	"./ckeev2xn.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ckeev2xn.sc.entry.js",
		"common",
		31
	],
	"./ctp4sem8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ctp4sem8.entry.js",
		"common",
		32
	],
	"./ctp4sem8.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ctp4sem8.sc.entry.js",
		"common",
		33
	],
	"./d4mkyqke.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/d4mkyqke.entry.js",
		"common",
		34
	],
	"./d4mkyqke.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/d4mkyqke.sc.entry.js",
		"common",
		35
	],
	"./dfulvwiw.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/dfulvwiw.entry.js",
		"common",
		36
	],
	"./dfulvwiw.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/dfulvwiw.sc.entry.js",
		"common",
		37
	],
	"./erwfalil.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/erwfalil.entry.js",
		"common",
		38
	],
	"./erwfalil.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/erwfalil.sc.entry.js",
		"common",
		39
	],
	"./etcmo1fy.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/etcmo1fy.entry.js",
		"common",
		40
	],
	"./etcmo1fy.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/etcmo1fy.sc.entry.js",
		"common",
		41
	],
	"./evib70yj.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/evib70yj.entry.js",
		"common",
		42
	],
	"./evib70yj.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/evib70yj.sc.entry.js",
		"common",
		43
	],
	"./hd9xjocr.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/hd9xjocr.entry.js",
		"common",
		44
	],
	"./hd9xjocr.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/hd9xjocr.sc.entry.js",
		"common",
		45
	],
	"./he3cmx6p.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/he3cmx6p.entry.js",
		0,
		"common",
		122
	],
	"./he3cmx6p.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/he3cmx6p.sc.entry.js",
		0,
		"common",
		123
	],
	"./heaybsbb.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/heaybsbb.entry.js",
		"common",
		46
	],
	"./heaybsbb.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/heaybsbb.sc.entry.js",
		"common",
		47
	],
	"./j1lgejox.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j1lgejox.entry.js",
		0,
		"common",
		125
	],
	"./j1lgejox.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j1lgejox.sc.entry.js",
		0,
		"common",
		126
	],
	"./jjhl6idx.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jjhl6idx.entry.js",
		"common",
		48
	],
	"./jjhl6idx.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jjhl6idx.sc.entry.js",
		"common",
		49
	],
	"./jp2l1u5r.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jp2l1u5r.entry.js",
		"common",
		50
	],
	"./jp2l1u5r.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jp2l1u5r.sc.entry.js",
		"common",
		51
	],
	"./jwuql0t7.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jwuql0t7.entry.js",
		"common",
		52
	],
	"./jwuql0t7.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jwuql0t7.sc.entry.js",
		"common",
		53
	],
	"./k27ecogw.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/k27ecogw.entry.js",
		"common",
		54
	],
	"./k27ecogw.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/k27ecogw.sc.entry.js",
		"common",
		55
	],
	"./ldjfdvm7.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ldjfdvm7.entry.js",
		"common",
		56
	],
	"./ldjfdvm7.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ldjfdvm7.sc.entry.js",
		"common",
		57
	],
	"./n10shznd.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/n10shznd.entry.js",
		0,
		"common",
		128
	],
	"./n10shznd.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/n10shznd.sc.entry.js",
		0,
		"common",
		129
	],
	"./n9wxun8a.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/n9wxun8a.entry.js",
		"common",
		58
	],
	"./n9wxun8a.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/n9wxun8a.sc.entry.js",
		"common",
		59
	],
	"./nbwcccxc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nbwcccxc.entry.js",
		0,
		"common",
		130
	],
	"./nbwcccxc.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nbwcccxc.sc.entry.js",
		0,
		"common",
		131
	],
	"./ndxfk46y.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ndxfk46y.entry.js",
		"common",
		60
	],
	"./ndxfk46y.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ndxfk46y.sc.entry.js",
		"common",
		61
	],
	"./niz9zgzb.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/niz9zgzb.entry.js",
		"common",
		62
	],
	"./niz9zgzb.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/niz9zgzb.sc.entry.js",
		"common",
		63
	],
	"./oaevbehh.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/oaevbehh.entry.js",
		132
	],
	"./oaevbehh.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/oaevbehh.sc.entry.js",
		133
	],
	"./ofn8ekop.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ofn8ekop.entry.js",
		"common",
		64
	],
	"./ofn8ekop.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ofn8ekop.sc.entry.js",
		"common",
		65
	],
	"./omvyk2er.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/omvyk2er.entry.js",
		"common",
		66
	],
	"./omvyk2er.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/omvyk2er.sc.entry.js",
		"common",
		67
	],
	"./p2dievya.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/p2dievya.entry.js",
		0,
		"common",
		134
	],
	"./p2dievya.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/p2dievya.sc.entry.js",
		0,
		"common",
		135
	],
	"./pgva41nn.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/pgva41nn.entry.js",
		0,
		"common",
		136
	],
	"./pgva41nn.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/pgva41nn.sc.entry.js",
		0,
		"common",
		137
	],
	"./pmi6afrt.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/pmi6afrt.entry.js",
		0,
		"common",
		138
	],
	"./pmi6afrt.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/pmi6afrt.sc.entry.js",
		0,
		"common",
		139
	],
	"./psko226b.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/psko226b.entry.js",
		"common",
		68
	],
	"./psko226b.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/psko226b.sc.entry.js",
		"common",
		69
	],
	"./q4cv59nf.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/q4cv59nf.entry.js",
		0,
		"common",
		140
	],
	"./q4cv59nf.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/q4cv59nf.sc.entry.js",
		0,
		"common",
		141
	],
	"./qavtfmxt.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qavtfmxt.entry.js",
		"common",
		70
	],
	"./qavtfmxt.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qavtfmxt.sc.entry.js",
		"common",
		71
	],
	"./qbc3e33k.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qbc3e33k.entry.js",
		"common",
		72
	],
	"./qbc3e33k.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qbc3e33k.sc.entry.js",
		"common",
		73
	],
	"./qbnwg2zs.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qbnwg2zs.entry.js",
		0,
		"common",
		142
	],
	"./qbnwg2zs.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qbnwg2zs.sc.entry.js",
		0,
		"common",
		143
	],
	"./rml7ilyu.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/rml7ilyu.entry.js",
		"common",
		74
	],
	"./rml7ilyu.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/rml7ilyu.sc.entry.js",
		"common",
		75
	],
	"./s8lxfpqi.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/s8lxfpqi.entry.js",
		"common",
		76
	],
	"./s8lxfpqi.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/s8lxfpqi.sc.entry.js",
		"common",
		77
	],
	"./saidbhwr.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/saidbhwr.entry.js",
		"common",
		78
	],
	"./saidbhwr.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/saidbhwr.sc.entry.js",
		"common",
		79
	],
	"./sfh2dkuu.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sfh2dkuu.entry.js",
		"common",
		80
	],
	"./sfh2dkuu.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sfh2dkuu.sc.entry.js",
		"common",
		81
	],
	"./sr77nupc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sr77nupc.entry.js",
		"common",
		82
	],
	"./sr77nupc.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sr77nupc.sc.entry.js",
		"common",
		83
	],
	"./syyzjc5q.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/syyzjc5q.entry.js",
		"common",
		84
	],
	"./syyzjc5q.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/syyzjc5q.sc.entry.js",
		"common",
		85
	],
	"./thxgjihc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/thxgjihc.entry.js",
		"common",
		86
	],
	"./thxgjihc.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/thxgjihc.sc.entry.js",
		"common",
		87
	],
	"./tlmwejgj.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tlmwejgj.entry.js",
		"common",
		114
	],
	"./tlmwejgj.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tlmwejgj.sc.entry.js",
		"common",
		115
	],
	"./tpicikp5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tpicikp5.entry.js",
		"common",
		88
	],
	"./tpicikp5.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tpicikp5.sc.entry.js",
		"common",
		89
	],
	"./trrstxji.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/trrstxji.entry.js",
		"common",
		90
	],
	"./trrstxji.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/trrstxji.sc.entry.js",
		"common",
		91
	],
	"./twy3oue7.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/twy3oue7.entry.js",
		"common",
		92
	],
	"./twy3oue7.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/twy3oue7.sc.entry.js",
		"common",
		93
	],
	"./u0fd6795.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/u0fd6795.entry.js",
		"common",
		94
	],
	"./u0fd6795.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/u0fd6795.sc.entry.js",
		"common",
		95
	],
	"./u8rkzu3z.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/u8rkzu3z.entry.js",
		0,
		"common",
		144
	],
	"./u8rkzu3z.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/u8rkzu3z.sc.entry.js",
		0,
		"common",
		145
	],
	"./w1frmlyi.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/w1frmlyi.entry.js",
		"common",
		96
	],
	"./w1frmlyi.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/w1frmlyi.sc.entry.js",
		"common",
		97
	],
	"./w6u3t2qv.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/w6u3t2qv.entry.js",
		0,
		"common",
		146
	],
	"./w6u3t2qv.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/w6u3t2qv.sc.entry.js",
		0,
		"common",
		147
	],
	"./wrldnwj6.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wrldnwj6.entry.js",
		"common",
		98
	],
	"./wrldnwj6.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wrldnwj6.sc.entry.js",
		"common",
		99
	],
	"./ws25jg6p.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ws25jg6p.entry.js",
		"common",
		100
	],
	"./ws25jg6p.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ws25jg6p.sc.entry.js",
		"common",
		101
	],
	"./wsc6oqhy.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wsc6oqhy.entry.js",
		148
	],
	"./wsc6oqhy.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wsc6oqhy.sc.entry.js",
		149
	],
	"./xf1xcux8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xf1xcux8.entry.js",
		0,
		"common",
		150
	],
	"./xf1xcux8.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xf1xcux8.sc.entry.js",
		0,
		"common",
		151
	],
	"./xlrit5rt.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xlrit5rt.entry.js",
		152
	],
	"./xlrit5rt.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xlrit5rt.sc.entry.js",
		153
	],
	"./xnnvglkc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xnnvglkc.entry.js",
		154
	],
	"./xnnvglkc.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xnnvglkc.sc.entry.js",
		155
	],
	"./xrxuqrua.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xrxuqrua.entry.js",
		"common",
		102
	],
	"./xrxuqrua.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xrxuqrua.sc.entry.js",
		"common",
		103
	],
	"./ykki8epq.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ykki8epq.entry.js",
		"common",
		104
	],
	"./ykki8epq.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ykki8epq.sc.entry.js",
		"common",
		105
	],
	"./zpdmudnj.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zpdmudnj.entry.js",
		"common",
		106
	],
	"./zpdmudnj.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zpdmudnj.sc.entry.js",
		"common",
		107
	],
	"./zq4poxhx.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zq4poxhx.entry.js",
		"common",
		116
	],
	"./zq4poxhx.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zq4poxhx.sc.entry.js",
		"common",
		117
	],
	"./zuf4pzji.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zuf4pzji.entry.js",
		"common",
		108
	],
	"./zuf4pzji.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zuf4pzji.sc.entry.js",
		"common",
		109
	],
	"./zze7mk2k.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zze7mk2k.entry.js",
		156
	],
	"./zze7mk2k.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zze7mk2k.sc.entry.js",
		157
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/ionic/svg sync ./!./!./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./ .svg$":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/ionic/svg sync nonrecursive !./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg .svg$ ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ios-add-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-add-circle-outline.svg",
	"./ios-add-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-add-circle.svg",
	"./ios-add.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-add.svg",
	"./ios-airplane.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-airplane.svg",
	"./ios-alarm.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-alarm.svg",
	"./ios-albums.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-albums.svg",
	"./ios-alert.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-alert.svg",
	"./ios-american-football.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-american-football.svg",
	"./ios-analytics.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-analytics.svg",
	"./ios-aperture.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-aperture.svg",
	"./ios-apps.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-apps.svg",
	"./ios-appstore.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-appstore.svg",
	"./ios-archive.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-archive.svg",
	"./ios-arrow-back.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-back.svg",
	"./ios-arrow-down.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-down.svg",
	"./ios-arrow-dropdown-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-dropdown-circle.svg",
	"./ios-arrow-dropdown.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-dropdown.svg",
	"./ios-arrow-dropleft-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-dropleft-circle.svg",
	"./ios-arrow-dropleft.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-dropleft.svg",
	"./ios-arrow-dropright-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-dropright-circle.svg",
	"./ios-arrow-dropright.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-dropright.svg",
	"./ios-arrow-dropup-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-dropup-circle.svg",
	"./ios-arrow-dropup.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-dropup.svg",
	"./ios-arrow-forward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-forward.svg",
	"./ios-arrow-round-back.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-round-back.svg",
	"./ios-arrow-round-down.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-round-down.svg",
	"./ios-arrow-round-forward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-round-forward.svg",
	"./ios-arrow-round-up.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-round-up.svg",
	"./ios-arrow-up.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-arrow-up.svg",
	"./ios-at.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-at.svg",
	"./ios-attach.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-attach.svg",
	"./ios-backspace.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-backspace.svg",
	"./ios-barcode.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-barcode.svg",
	"./ios-baseball.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-baseball.svg",
	"./ios-basket.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-basket.svg",
	"./ios-basketball.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-basketball.svg",
	"./ios-battery-charging.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-battery-charging.svg",
	"./ios-battery-dead.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-battery-dead.svg",
	"./ios-battery-full.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-battery-full.svg",
	"./ios-beaker.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-beaker.svg",
	"./ios-bed.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bed.svg",
	"./ios-beer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-beer.svg",
	"./ios-bicycle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bicycle.svg",
	"./ios-bluetooth.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bluetooth.svg",
	"./ios-boat.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-boat.svg",
	"./ios-body.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-body.svg",
	"./ios-bonfire.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bonfire.svg",
	"./ios-book.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-book.svg",
	"./ios-bookmark.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bookmark.svg",
	"./ios-bookmarks.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bookmarks.svg",
	"./ios-bowtie.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bowtie.svg",
	"./ios-briefcase.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-briefcase.svg",
	"./ios-browsers.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-browsers.svg",
	"./ios-brush.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-brush.svg",
	"./ios-bug.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bug.svg",
	"./ios-build.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-build.svg",
	"./ios-bulb.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bulb.svg",
	"./ios-bus.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-bus.svg",
	"./ios-business.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-business.svg",
	"./ios-cafe.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cafe.svg",
	"./ios-calculator.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-calculator.svg",
	"./ios-calendar.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-calendar.svg",
	"./ios-call.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-call.svg",
	"./ios-camera.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-camera.svg",
	"./ios-car.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-car.svg",
	"./ios-card.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-card.svg",
	"./ios-cart.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cart.svg",
	"./ios-cash.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cash.svg",
	"./ios-cellular.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cellular.svg",
	"./ios-chatboxes.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-chatboxes.svg",
	"./ios-chatbubbles.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-chatbubbles.svg",
	"./ios-checkbox-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-checkbox-outline.svg",
	"./ios-checkbox.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-checkbox.svg",
	"./ios-checkmark-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-checkmark-circle-outline.svg",
	"./ios-checkmark-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-checkmark-circle.svg",
	"./ios-checkmark.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-checkmark.svg",
	"./ios-clipboard.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-clipboard.svg",
	"./ios-clock.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-clock.svg",
	"./ios-close-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-close-circle-outline.svg",
	"./ios-close-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-close-circle.svg",
	"./ios-close.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-close.svg",
	"./ios-cloud-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cloud-circle.svg",
	"./ios-cloud-done.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cloud-done.svg",
	"./ios-cloud-download.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cloud-download.svg",
	"./ios-cloud-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cloud-outline.svg",
	"./ios-cloud-upload.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cloud-upload.svg",
	"./ios-cloud.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cloud.svg",
	"./ios-cloudy-night.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cloudy-night.svg",
	"./ios-cloudy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cloudy.svg",
	"./ios-code-download.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-code-download.svg",
	"./ios-code-working.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-code-working.svg",
	"./ios-code.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-code.svg",
	"./ios-cog.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cog.svg",
	"./ios-color-fill.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-color-fill.svg",
	"./ios-color-filter.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-color-filter.svg",
	"./ios-color-palette.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-color-palette.svg",
	"./ios-color-wand.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-color-wand.svg",
	"./ios-compass.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-compass.svg",
	"./ios-construct.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-construct.svg",
	"./ios-contact.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-contact.svg",
	"./ios-contacts.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-contacts.svg",
	"./ios-contract.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-contract.svg",
	"./ios-contrast.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-contrast.svg",
	"./ios-copy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-copy.svg",
	"./ios-create.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-create.svg",
	"./ios-crop.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-crop.svg",
	"./ios-cube.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cube.svg",
	"./ios-cut.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-cut.svg",
	"./ios-desktop.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-desktop.svg",
	"./ios-disc.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-disc.svg",
	"./ios-document.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-document.svg",
	"./ios-done-all.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-done-all.svg",
	"./ios-download.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-download.svg",
	"./ios-easel.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-easel.svg",
	"./ios-egg.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-egg.svg",
	"./ios-exit.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-exit.svg",
	"./ios-expand.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-expand.svg",
	"./ios-eye-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-eye-off.svg",
	"./ios-eye.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-eye.svg",
	"./ios-fastforward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-fastforward.svg",
	"./ios-female.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-female.svg",
	"./ios-filing.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-filing.svg",
	"./ios-film.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-film.svg",
	"./ios-finger-print.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-finger-print.svg",
	"./ios-fitness.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-fitness.svg",
	"./ios-flag.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-flag.svg",
	"./ios-flame.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-flame.svg",
	"./ios-flash-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-flash-off.svg",
	"./ios-flash.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-flash.svg",
	"./ios-flashlight.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-flashlight.svg",
	"./ios-flask.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-flask.svg",
	"./ios-flower.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-flower.svg",
	"./ios-folder-open.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-folder-open.svg",
	"./ios-folder.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-folder.svg",
	"./ios-football.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-football.svg",
	"./ios-funnel.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-funnel.svg",
	"./ios-gift.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-gift.svg",
	"./ios-git-branch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-git-branch.svg",
	"./ios-git-commit.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-git-commit.svg",
	"./ios-git-compare.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-git-compare.svg",
	"./ios-git-merge.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-git-merge.svg",
	"./ios-git-network.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-git-network.svg",
	"./ios-git-pull-request.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-git-pull-request.svg",
	"./ios-glasses.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-glasses.svg",
	"./ios-globe.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-globe.svg",
	"./ios-grid.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-grid.svg",
	"./ios-hammer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-hammer.svg",
	"./ios-hand.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-hand.svg",
	"./ios-happy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-happy.svg",
	"./ios-headset.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-headset.svg",
	"./ios-heart-dislike.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-heart-dislike.svg",
	"./ios-heart-empty.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-heart-empty.svg",
	"./ios-heart-half.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-heart-half.svg",
	"./ios-heart.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-heart.svg",
	"./ios-help-buoy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-help-buoy.svg",
	"./ios-help-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-help-circle-outline.svg",
	"./ios-help-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-help-circle.svg",
	"./ios-help.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-help.svg",
	"./ios-home.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-home.svg",
	"./ios-hourglass.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-hourglass.svg",
	"./ios-ice-cream.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-ice-cream.svg",
	"./ios-image.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-image.svg",
	"./ios-images.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-images.svg",
	"./ios-infinite.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-infinite.svg",
	"./ios-information-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-information-circle-outline.svg",
	"./ios-information-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-information-circle.svg",
	"./ios-information.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-information.svg",
	"./ios-jet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-jet.svg",
	"./ios-journal.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-journal.svg",
	"./ios-key.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-key.svg",
	"./ios-keypad.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-keypad.svg",
	"./ios-laptop.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-laptop.svg",
	"./ios-leaf.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-leaf.svg",
	"./ios-link.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-link.svg",
	"./ios-list-box.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-list-box.svg",
	"./ios-list.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-list.svg",
	"./ios-locate.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-locate.svg",
	"./ios-lock.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-lock.svg",
	"./ios-log-in.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-log-in.svg",
	"./ios-log-out.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-log-out.svg",
	"./ios-magnet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-magnet.svg",
	"./ios-mail-open.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-mail-open.svg",
	"./ios-mail-unread.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-mail-unread.svg",
	"./ios-mail.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-mail.svg",
	"./ios-male.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-male.svg",
	"./ios-man.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-man.svg",
	"./ios-map.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-map.svg",
	"./ios-medal.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-medal.svg",
	"./ios-medical.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-medical.svg",
	"./ios-medkit.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-medkit.svg",
	"./ios-megaphone.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-megaphone.svg",
	"./ios-menu.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-menu.svg",
	"./ios-mic-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-mic-off.svg",
	"./ios-mic.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-mic.svg",
	"./ios-microphone.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-microphone.svg",
	"./ios-moon.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-moon.svg",
	"./ios-more.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-more.svg",
	"./ios-move.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-move.svg",
	"./ios-musical-note.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-musical-note.svg",
	"./ios-musical-notes.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-musical-notes.svg",
	"./ios-navigate.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-navigate.svg",
	"./ios-notifications-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-notifications-off.svg",
	"./ios-notifications-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-notifications-outline.svg",
	"./ios-notifications.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-notifications.svg",
	"./ios-nuclear.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-nuclear.svg",
	"./ios-nutrition.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-nutrition.svg",
	"./ios-open.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-open.svg",
	"./ios-options.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-options.svg",
	"./ios-outlet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-outlet.svg",
	"./ios-paper-plane.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-paper-plane.svg",
	"./ios-paper.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-paper.svg",
	"./ios-partly-sunny.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-partly-sunny.svg",
	"./ios-pause.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-pause.svg",
	"./ios-paw.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-paw.svg",
	"./ios-people.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-people.svg",
	"./ios-person-add.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-person-add.svg",
	"./ios-person.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-person.svg",
	"./ios-phone-landscape.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-phone-landscape.svg",
	"./ios-phone-portrait.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-phone-portrait.svg",
	"./ios-photos.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-photos.svg",
	"./ios-pie.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-pie.svg",
	"./ios-pin.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-pin.svg",
	"./ios-pint.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-pint.svg",
	"./ios-pizza.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-pizza.svg",
	"./ios-planet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-planet.svg",
	"./ios-play-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-play-circle.svg",
	"./ios-play.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-play.svg",
	"./ios-podium.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-podium.svg",
	"./ios-power.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-power.svg",
	"./ios-pricetag.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-pricetag.svg",
	"./ios-pricetags.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-pricetags.svg",
	"./ios-print.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-print.svg",
	"./ios-pulse.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-pulse.svg",
	"./ios-qr-scanner.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-qr-scanner.svg",
	"./ios-quote.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-quote.svg",
	"./ios-radio-button-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-radio-button-off.svg",
	"./ios-radio-button-on.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-radio-button-on.svg",
	"./ios-radio.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-radio.svg",
	"./ios-rainy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-rainy.svg",
	"./ios-recording.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-recording.svg",
	"./ios-redo.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-redo.svg",
	"./ios-refresh-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-refresh-circle.svg",
	"./ios-refresh.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-refresh.svg",
	"./ios-remove-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-remove-circle-outline.svg",
	"./ios-remove-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-remove-circle.svg",
	"./ios-remove.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-remove.svg",
	"./ios-reorder.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-reorder.svg",
	"./ios-repeat.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-repeat.svg",
	"./ios-resize.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-resize.svg",
	"./ios-restaurant.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-restaurant.svg",
	"./ios-return-left.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-return-left.svg",
	"./ios-return-right.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-return-right.svg",
	"./ios-reverse-camera.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-reverse-camera.svg",
	"./ios-rewind.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-rewind.svg",
	"./ios-ribbon.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-ribbon.svg",
	"./ios-rocket.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-rocket.svg",
	"./ios-rose.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-rose.svg",
	"./ios-sad.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-sad.svg",
	"./ios-save.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-save.svg",
	"./ios-school.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-school.svg",
	"./ios-search.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-search.svg",
	"./ios-send.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-send.svg",
	"./ios-settings.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-settings.svg",
	"./ios-share-alt.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-share-alt.svg",
	"./ios-share.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-share.svg",
	"./ios-shirt.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-shirt.svg",
	"./ios-shuffle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-shuffle.svg",
	"./ios-skip-backward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-skip-backward.svg",
	"./ios-skip-forward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-skip-forward.svg",
	"./ios-snow.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-snow.svg",
	"./ios-speedometer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-speedometer.svg",
	"./ios-square-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-square-outline.svg",
	"./ios-square.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-square.svg",
	"./ios-star-half.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-star-half.svg",
	"./ios-star-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-star-outline.svg",
	"./ios-star.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-star.svg",
	"./ios-stats.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-stats.svg",
	"./ios-stopwatch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-stopwatch.svg",
	"./ios-subway.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-subway.svg",
	"./ios-sunny.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-sunny.svg",
	"./ios-swap.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-swap.svg",
	"./ios-switch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-switch.svg",
	"./ios-sync.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-sync.svg",
	"./ios-tablet-landscape.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-tablet-landscape.svg",
	"./ios-tablet-portrait.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-tablet-portrait.svg",
	"./ios-tennisball.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-tennisball.svg",
	"./ios-text.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-text.svg",
	"./ios-thermometer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-thermometer.svg",
	"./ios-thumbs-down.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-thumbs-down.svg",
	"./ios-thumbs-up.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-thumbs-up.svg",
	"./ios-thunderstorm.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-thunderstorm.svg",
	"./ios-time.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-time.svg",
	"./ios-timer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-timer.svg",
	"./ios-today.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-today.svg",
	"./ios-train.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-train.svg",
	"./ios-transgender.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-transgender.svg",
	"./ios-trash.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-trash.svg",
	"./ios-trending-down.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-trending-down.svg",
	"./ios-trending-up.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-trending-up.svg",
	"./ios-trophy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-trophy.svg",
	"./ios-tv.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-tv.svg",
	"./ios-umbrella.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-umbrella.svg",
	"./ios-undo.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-undo.svg",
	"./ios-unlock.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-unlock.svg",
	"./ios-videocam.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-videocam.svg",
	"./ios-volume-high.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-volume-high.svg",
	"./ios-volume-low.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-volume-low.svg",
	"./ios-volume-mute.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-volume-mute.svg",
	"./ios-volume-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-volume-off.svg",
	"./ios-walk.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-walk.svg",
	"./ios-wallet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-wallet.svg",
	"./ios-warning.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-warning.svg",
	"./ios-watch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-watch.svg",
	"./ios-water.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-water.svg",
	"./ios-wifi.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-wifi.svg",
	"./ios-wine.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-wine.svg",
	"./ios-woman.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/ios-woman.svg",
	"./logo-android.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-android.svg",
	"./logo-angular.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-angular.svg",
	"./logo-apple.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-apple.svg",
	"./logo-bitbucket.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-bitbucket.svg",
	"./logo-bitcoin.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-bitcoin.svg",
	"./logo-buffer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-buffer.svg",
	"./logo-chrome.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-chrome.svg",
	"./logo-closed-captioning.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-closed-captioning.svg",
	"./logo-codepen.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-codepen.svg",
	"./logo-css3.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-css3.svg",
	"./logo-designernews.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-designernews.svg",
	"./logo-dribbble.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-dribbble.svg",
	"./logo-dropbox.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-dropbox.svg",
	"./logo-euro.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-euro.svg",
	"./logo-facebook.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-facebook.svg",
	"./logo-flickr.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-flickr.svg",
	"./logo-foursquare.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-foursquare.svg",
	"./logo-freebsd-devil.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-freebsd-devil.svg",
	"./logo-game-controller-a.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-game-controller-a.svg",
	"./logo-game-controller-b.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-game-controller-b.svg",
	"./logo-github.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-github.svg",
	"./logo-google.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-google.svg",
	"./logo-googleplus.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-googleplus.svg",
	"./logo-hackernews.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-hackernews.svg",
	"./logo-html5.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-html5.svg",
	"./logo-instagram.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-instagram.svg",
	"./logo-ionic.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-ionic.svg",
	"./logo-ionitron.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-ionitron.svg",
	"./logo-javascript.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-javascript.svg",
	"./logo-linkedin.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-linkedin.svg",
	"./logo-markdown.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-markdown.svg",
	"./logo-model-s.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-model-s.svg",
	"./logo-no-smoking.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-no-smoking.svg",
	"./logo-nodejs.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-nodejs.svg",
	"./logo-npm.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-npm.svg",
	"./logo-octocat.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-octocat.svg",
	"./logo-pinterest.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-pinterest.svg",
	"./logo-playstation.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-playstation.svg",
	"./logo-polymer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-polymer.svg",
	"./logo-python.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-python.svg",
	"./logo-reddit.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-reddit.svg",
	"./logo-rss.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-rss.svg",
	"./logo-sass.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-sass.svg",
	"./logo-skype.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-skype.svg",
	"./logo-slack.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-slack.svg",
	"./logo-snapchat.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-snapchat.svg",
	"./logo-steam.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-steam.svg",
	"./logo-tumblr.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-tumblr.svg",
	"./logo-tux.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-tux.svg",
	"./logo-twitch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-twitch.svg",
	"./logo-twitter.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-twitter.svg",
	"./logo-usd.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-usd.svg",
	"./logo-vimeo.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-vimeo.svg",
	"./logo-vk.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-vk.svg",
	"./logo-whatsapp.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-whatsapp.svg",
	"./logo-windows.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-windows.svg",
	"./logo-wordpress.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-wordpress.svg",
	"./logo-xbox.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-xbox.svg",
	"./logo-xing.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-xing.svg",
	"./logo-yahoo.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-yahoo.svg",
	"./logo-yen.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-yen.svg",
	"./logo-youtube.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/logo-youtube.svg",
	"./md-add-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-add-circle-outline.svg",
	"./md-add-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-add-circle.svg",
	"./md-add.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-add.svg",
	"./md-airplane.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-airplane.svg",
	"./md-alarm.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-alarm.svg",
	"./md-albums.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-albums.svg",
	"./md-alert.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-alert.svg",
	"./md-american-football.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-american-football.svg",
	"./md-analytics.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-analytics.svg",
	"./md-aperture.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-aperture.svg",
	"./md-apps.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-apps.svg",
	"./md-appstore.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-appstore.svg",
	"./md-archive.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-archive.svg",
	"./md-arrow-back.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-back.svg",
	"./md-arrow-down.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-down.svg",
	"./md-arrow-dropdown-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-dropdown-circle.svg",
	"./md-arrow-dropdown.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-dropdown.svg",
	"./md-arrow-dropleft-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-dropleft-circle.svg",
	"./md-arrow-dropleft.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-dropleft.svg",
	"./md-arrow-dropright-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-dropright-circle.svg",
	"./md-arrow-dropright.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-dropright.svg",
	"./md-arrow-dropup-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-dropup-circle.svg",
	"./md-arrow-dropup.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-dropup.svg",
	"./md-arrow-forward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-forward.svg",
	"./md-arrow-round-back.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-round-back.svg",
	"./md-arrow-round-down.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-round-down.svg",
	"./md-arrow-round-forward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-round-forward.svg",
	"./md-arrow-round-up.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-round-up.svg",
	"./md-arrow-up.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-arrow-up.svg",
	"./md-at.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-at.svg",
	"./md-attach.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-attach.svg",
	"./md-backspace.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-backspace.svg",
	"./md-barcode.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-barcode.svg",
	"./md-baseball.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-baseball.svg",
	"./md-basket.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-basket.svg",
	"./md-basketball.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-basketball.svg",
	"./md-battery-charging.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-battery-charging.svg",
	"./md-battery-dead.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-battery-dead.svg",
	"./md-battery-full.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-battery-full.svg",
	"./md-beaker.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-beaker.svg",
	"./md-bed.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bed.svg",
	"./md-beer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-beer.svg",
	"./md-bicycle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bicycle.svg",
	"./md-bluetooth.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bluetooth.svg",
	"./md-boat.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-boat.svg",
	"./md-body.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-body.svg",
	"./md-bonfire.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bonfire.svg",
	"./md-book.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-book.svg",
	"./md-bookmark.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bookmark.svg",
	"./md-bookmarks.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bookmarks.svg",
	"./md-bowtie.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bowtie.svg",
	"./md-briefcase.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-briefcase.svg",
	"./md-browsers.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-browsers.svg",
	"./md-brush.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-brush.svg",
	"./md-bug.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bug.svg",
	"./md-build.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-build.svg",
	"./md-bulb.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bulb.svg",
	"./md-bus.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-bus.svg",
	"./md-business.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-business.svg",
	"./md-cafe.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cafe.svg",
	"./md-calculator.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-calculator.svg",
	"./md-calendar.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-calendar.svg",
	"./md-call.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-call.svg",
	"./md-camera.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-camera.svg",
	"./md-car.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-car.svg",
	"./md-card.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-card.svg",
	"./md-cart.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cart.svg",
	"./md-cash.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cash.svg",
	"./md-cellular.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cellular.svg",
	"./md-chatboxes.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-chatboxes.svg",
	"./md-chatbubbles.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-chatbubbles.svg",
	"./md-checkbox-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-checkbox-outline.svg",
	"./md-checkbox.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-checkbox.svg",
	"./md-checkmark-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-checkmark-circle-outline.svg",
	"./md-checkmark-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-checkmark-circle.svg",
	"./md-checkmark.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-checkmark.svg",
	"./md-clipboard.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-clipboard.svg",
	"./md-clock.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-clock.svg",
	"./md-close-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-close-circle-outline.svg",
	"./md-close-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-close-circle.svg",
	"./md-close.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-close.svg",
	"./md-cloud-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cloud-circle.svg",
	"./md-cloud-done.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cloud-done.svg",
	"./md-cloud-download.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cloud-download.svg",
	"./md-cloud-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cloud-outline.svg",
	"./md-cloud-upload.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cloud-upload.svg",
	"./md-cloud.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cloud.svg",
	"./md-cloudy-night.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cloudy-night.svg",
	"./md-cloudy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cloudy.svg",
	"./md-code-download.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-code-download.svg",
	"./md-code-working.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-code-working.svg",
	"./md-code.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-code.svg",
	"./md-cog.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cog.svg",
	"./md-color-fill.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-color-fill.svg",
	"./md-color-filter.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-color-filter.svg",
	"./md-color-palette.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-color-palette.svg",
	"./md-color-wand.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-color-wand.svg",
	"./md-compass.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-compass.svg",
	"./md-construct.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-construct.svg",
	"./md-contact.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-contact.svg",
	"./md-contacts.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-contacts.svg",
	"./md-contract.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-contract.svg",
	"./md-contrast.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-contrast.svg",
	"./md-copy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-copy.svg",
	"./md-create.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-create.svg",
	"./md-crop.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-crop.svg",
	"./md-cube.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cube.svg",
	"./md-cut.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-cut.svg",
	"./md-desktop.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-desktop.svg",
	"./md-disc.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-disc.svg",
	"./md-document.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-document.svg",
	"./md-done-all.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-done-all.svg",
	"./md-download.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-download.svg",
	"./md-easel.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-easel.svg",
	"./md-egg.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-egg.svg",
	"./md-exit.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-exit.svg",
	"./md-expand.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-expand.svg",
	"./md-eye-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-eye-off.svg",
	"./md-eye.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-eye.svg",
	"./md-fastforward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-fastforward.svg",
	"./md-female.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-female.svg",
	"./md-filing.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-filing.svg",
	"./md-film.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-film.svg",
	"./md-finger-print.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-finger-print.svg",
	"./md-fitness.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-fitness.svg",
	"./md-flag.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-flag.svg",
	"./md-flame.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-flame.svg",
	"./md-flash-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-flash-off.svg",
	"./md-flash.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-flash.svg",
	"./md-flashlight.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-flashlight.svg",
	"./md-flask.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-flask.svg",
	"./md-flower.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-flower.svg",
	"./md-folder-open.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-folder-open.svg",
	"./md-folder.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-folder.svg",
	"./md-football.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-football.svg",
	"./md-funnel.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-funnel.svg",
	"./md-gift.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-gift.svg",
	"./md-git-branch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-git-branch.svg",
	"./md-git-commit.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-git-commit.svg",
	"./md-git-compare.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-git-compare.svg",
	"./md-git-merge.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-git-merge.svg",
	"./md-git-network.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-git-network.svg",
	"./md-git-pull-request.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-git-pull-request.svg",
	"./md-glasses.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-glasses.svg",
	"./md-globe.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-globe.svg",
	"./md-grid.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-grid.svg",
	"./md-hammer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-hammer.svg",
	"./md-hand.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-hand.svg",
	"./md-happy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-happy.svg",
	"./md-headset.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-headset.svg",
	"./md-heart-dislike.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-heart-dislike.svg",
	"./md-heart-empty.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-heart-empty.svg",
	"./md-heart-half.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-heart-half.svg",
	"./md-heart.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-heart.svg",
	"./md-help-buoy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-help-buoy.svg",
	"./md-help-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-help-circle-outline.svg",
	"./md-help-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-help-circle.svg",
	"./md-help.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-help.svg",
	"./md-home.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-home.svg",
	"./md-hourglass.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-hourglass.svg",
	"./md-ice-cream.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-ice-cream.svg",
	"./md-image.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-image.svg",
	"./md-images.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-images.svg",
	"./md-infinite.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-infinite.svg",
	"./md-information-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-information-circle-outline.svg",
	"./md-information-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-information-circle.svg",
	"./md-information.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-information.svg",
	"./md-jet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-jet.svg",
	"./md-journal.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-journal.svg",
	"./md-key.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-key.svg",
	"./md-keypad.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-keypad.svg",
	"./md-laptop.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-laptop.svg",
	"./md-leaf.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-leaf.svg",
	"./md-link.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-link.svg",
	"./md-list-box.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-list-box.svg",
	"./md-list.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-list.svg",
	"./md-locate.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-locate.svg",
	"./md-lock.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-lock.svg",
	"./md-log-in.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-log-in.svg",
	"./md-log-out.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-log-out.svg",
	"./md-magnet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-magnet.svg",
	"./md-mail-open.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-mail-open.svg",
	"./md-mail-unread.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-mail-unread.svg",
	"./md-mail.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-mail.svg",
	"./md-male.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-male.svg",
	"./md-man.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-man.svg",
	"./md-map.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-map.svg",
	"./md-medal.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-medal.svg",
	"./md-medical.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-medical.svg",
	"./md-medkit.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-medkit.svg",
	"./md-megaphone.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-megaphone.svg",
	"./md-menu.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-menu.svg",
	"./md-mic-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-mic-off.svg",
	"./md-mic.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-mic.svg",
	"./md-microphone.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-microphone.svg",
	"./md-moon.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-moon.svg",
	"./md-more.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-more.svg",
	"./md-move.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-move.svg",
	"./md-musical-note.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-musical-note.svg",
	"./md-musical-notes.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-musical-notes.svg",
	"./md-navigate.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-navigate.svg",
	"./md-notifications-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-notifications-off.svg",
	"./md-notifications-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-notifications-outline.svg",
	"./md-notifications.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-notifications.svg",
	"./md-nuclear.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-nuclear.svg",
	"./md-nutrition.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-nutrition.svg",
	"./md-open.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-open.svg",
	"./md-options.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-options.svg",
	"./md-outlet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-outlet.svg",
	"./md-paper-plane.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-paper-plane.svg",
	"./md-paper.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-paper.svg",
	"./md-partly-sunny.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-partly-sunny.svg",
	"./md-pause.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-pause.svg",
	"./md-paw.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-paw.svg",
	"./md-people.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-people.svg",
	"./md-person-add.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-person-add.svg",
	"./md-person.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-person.svg",
	"./md-phone-landscape.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-phone-landscape.svg",
	"./md-phone-portrait.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-phone-portrait.svg",
	"./md-photos.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-photos.svg",
	"./md-pie.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-pie.svg",
	"./md-pin.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-pin.svg",
	"./md-pint.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-pint.svg",
	"./md-pizza.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-pizza.svg",
	"./md-planet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-planet.svg",
	"./md-play-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-play-circle.svg",
	"./md-play.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-play.svg",
	"./md-podium.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-podium.svg",
	"./md-power.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-power.svg",
	"./md-pricetag.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-pricetag.svg",
	"./md-pricetags.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-pricetags.svg",
	"./md-print.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-print.svg",
	"./md-pulse.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-pulse.svg",
	"./md-qr-scanner.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-qr-scanner.svg",
	"./md-quote.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-quote.svg",
	"./md-radio-button-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-radio-button-off.svg",
	"./md-radio-button-on.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-radio-button-on.svg",
	"./md-radio.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-radio.svg",
	"./md-rainy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-rainy.svg",
	"./md-recording.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-recording.svg",
	"./md-redo.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-redo.svg",
	"./md-refresh-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-refresh-circle.svg",
	"./md-refresh.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-refresh.svg",
	"./md-remove-circle-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-remove-circle-outline.svg",
	"./md-remove-circle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-remove-circle.svg",
	"./md-remove.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-remove.svg",
	"./md-reorder.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-reorder.svg",
	"./md-repeat.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-repeat.svg",
	"./md-resize.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-resize.svg",
	"./md-restaurant.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-restaurant.svg",
	"./md-return-left.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-return-left.svg",
	"./md-return-right.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-return-right.svg",
	"./md-reverse-camera.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-reverse-camera.svg",
	"./md-rewind.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-rewind.svg",
	"./md-ribbon.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-ribbon.svg",
	"./md-rocket.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-rocket.svg",
	"./md-rose.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-rose.svg",
	"./md-sad.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-sad.svg",
	"./md-save.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-save.svg",
	"./md-school.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-school.svg",
	"./md-search.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-search.svg",
	"./md-send.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-send.svg",
	"./md-settings.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-settings.svg",
	"./md-share-alt.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-share-alt.svg",
	"./md-share.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-share.svg",
	"./md-shirt.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-shirt.svg",
	"./md-shuffle.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-shuffle.svg",
	"./md-skip-backward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-skip-backward.svg",
	"./md-skip-forward.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-skip-forward.svg",
	"./md-snow.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-snow.svg",
	"./md-speedometer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-speedometer.svg",
	"./md-square-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-square-outline.svg",
	"./md-square.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-square.svg",
	"./md-star-half.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-star-half.svg",
	"./md-star-outline.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-star-outline.svg",
	"./md-star.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-star.svg",
	"./md-stats.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-stats.svg",
	"./md-stopwatch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-stopwatch.svg",
	"./md-subway.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-subway.svg",
	"./md-sunny.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-sunny.svg",
	"./md-swap.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-swap.svg",
	"./md-switch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-switch.svg",
	"./md-sync.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-sync.svg",
	"./md-tablet-landscape.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-tablet-landscape.svg",
	"./md-tablet-portrait.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-tablet-portrait.svg",
	"./md-tennisball.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-tennisball.svg",
	"./md-text.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-text.svg",
	"./md-thermometer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-thermometer.svg",
	"./md-thumbs-down.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-thumbs-down.svg",
	"./md-thumbs-up.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-thumbs-up.svg",
	"./md-thunderstorm.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-thunderstorm.svg",
	"./md-time.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-time.svg",
	"./md-timer.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-timer.svg",
	"./md-today.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-today.svg",
	"./md-train.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-train.svg",
	"./md-transgender.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-transgender.svg",
	"./md-trash.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-trash.svg",
	"./md-trending-down.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-trending-down.svg",
	"./md-trending-up.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-trending-up.svg",
	"./md-trophy.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-trophy.svg",
	"./md-tv.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-tv.svg",
	"./md-umbrella.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-umbrella.svg",
	"./md-undo.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-undo.svg",
	"./md-unlock.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-unlock.svg",
	"./md-videocam.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-videocam.svg",
	"./md-volume-high.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-volume-high.svg",
	"./md-volume-low.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-volume-low.svg",
	"./md-volume-mute.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-volume-mute.svg",
	"./md-volume-off.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-volume-off.svg",
	"./md-walk.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-walk.svg",
	"./md-wallet.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-wallet.svg",
	"./md-warning.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-warning.svg",
	"./md-watch.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-watch.svg",
	"./md-water.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-water.svg",
	"./md-wifi.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-wifi.svg",
	"./md-wine.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-wine.svg",
	"./md-woman.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./node_modules/@ionic/core/dist/ionic/svg/md-woman.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/@ionic/core/dist/ionic/svg sync ./!./!./node_modules/file-loader/dist/cjs.js?name=[name].[ext]&outputPath=svg!./ .svg$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/app-bar/app-bar.module": [
		"./src/app/pages/app-bar/app-bar.module.ts",
		"pages-app-bar-app-bar-module"
	],
	"./pages/bottom-sheet/bottom-sheet.module": [
		"./src/app/pages/bottom-sheet/bottom-sheet.module.ts",
		"pages-bottom-sheet-bottom-sheet-module"
	],
	"./pages/buttons/buttons.module": [
		"./src/app/pages/buttons/buttons.module.ts",
		"pages-buttons-buttons-module"
	],
	"./pages/components/components.module": [
		"./src/app/pages/components/components.module.ts",
		"pages-components-components-module"
	],
	"./pages/dialog/dialog.module": [
		"./src/app/pages/dialog/dialog.module.ts",
		"pages-dialog-dialog-module"
	],
	"./pages/directives/directives.module": [
		"./src/app/pages/directives/directives.module.ts",
		"pages-directives-directives-module"
	],
	"./pages/expandable/expandable.module": [
		"./src/app/pages/expandable/expandable.module.ts",
		"pages-expandable-expandable-module"
	],
	"./pages/getting-started/getting-started.module": [
		"./src/app/pages/getting-started/getting-started.module.ts",
		"pages-getting-started-getting-started-module"
	],
	"./pages/home/home.module": [
		"./src/app/pages/home/home.module.ts",
		"pages-home-home-module"
	],
	"./pages/icon/icon.module": [
		"./src/app/pages/icon/icon.module.ts",
		"pages-icon-icon-module"
	],
	"./pages/image/image.module": [
		"./src/app/pages/image/image.module.ts",
		"pages-image-image-module"
	],
	"./pages/loading/loading.module": [
		"./src/app/pages/loading/loading.module.ts",
		"pages-loading-loading-module"
	],
	"./pages/native-map-bottom-sheet/native-map-bottom-sheet.module": [
		"./src/app/pages/native-map-bottom-sheet/native-map-bottom-sheet.module.ts",
		"default~pages-native-map-bottom-sheet-native-map-bottom-sheet-module~pages-native-map-native-map-mod~7c087229",
		"common",
		"pages-native-map-bottom-sheet-native-map-bottom-sheet-module"
	],
	"./pages/native-map/native-map.module": [
		"./src/app/pages/native-map/native-map.module.ts",
		"default~pages-native-map-bottom-sheet-native-map-bottom-sheet-module~pages-native-map-native-map-mod~7c087229",
		"common",
		"pages-native-map-native-map-module"
	],
	"./pages/page-not-found/page-not-found.module": [
		"./src/app/pages/page-not-found/page-not-found.module.ts",
		"pages-page-not-found-page-not-found-module"
	],
	"./pages/password/password.module": [
		"./src/app/pages/password/password.module.ts",
		"pages-password-password-module"
	],
	"./pages/refresh/refresh.module": [
		"./src/app/pages/refresh/refresh.module.ts",
		"pages-refresh-refresh-module"
	],
	"./pages/stepper/stepper.module": [
		"./src/app/pages/stepper/stepper.module.ts",
		"pages-stepper-stepper-module"
	],
	"./pages/toolbar-search/toolbar-search.module": [
		"./src/app/pages/toolbar-search/toolbar-search.module.ts",
		"pages-toolbar-search-toolbar-search-module"
	],
	"./pages/viewport/viewport.module": [
		"./src/app/pages/viewport/viewport.module.ts",
		"pages-viewport-viewport-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        loadChildren: './pages/home/home.module#HomePageModule'
    },
    { path: 'getting-started', loadChildren: './pages/getting-started/getting-started.module#GettingStartedPageModule' },
    { path: 'buttons', loadChildren: './pages/buttons/buttons.module#ButtonsPageModule' },
    {
        path: 'components',
        loadChildren: './pages/components/components.module#ComponentsPageModule'
    },
    { path: 'bottom-sheet', loadChildren: './pages/bottom-sheet/bottom-sheet.module#BottomSheetPageModule' },
    { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
    { path: 'password', loadChildren: './pages/password/password.module#PasswordPageModule' },
    { path: 'toolbar-search', loadChildren: './pages/toolbar-search/toolbar-search.module#ToolbarSearchPageModule' },
    { path: 'app-bar', loadChildren: './pages/app-bar/app-bar.module#AppBarPageModule' },
    { path: 'viewport', loadChildren: './pages/viewport/viewport.module#ViewportPageModule' },
    { path: 'icon', loadChildren: './pages/icon/icon.module#IconPageModule' },
    { path: 'native-map', loadChildren: './pages/native-map/native-map.module#NativeMapPageModule' },
    {
        path: 'native-map-bottom-sheet',
        loadChildren: './pages/native-map-bottom-sheet/native-map-bottom-sheet.module#NativeMapBottomSheetPageModule'
    },
    { path: 'dialog', loadChildren: './pages/dialog/dialog.module#DialogPageModule' },
    { path: 'image', loadChildren: './pages/image/image.module#ImagePageModule' },
    { path: 'refresh', loadChildren: './pages/refresh/refresh.module#RefreshPageModule' },
    { path: 'expandable', loadChildren: './pages/expandable/expandable.module#ExpandablePageModule' },
    { path: 'stepper', loadChildren: './pages/stepper/stepper.module#StepperPageModule' },
    { path: 'directives', loadChildren: './pages/directives/directives.module#DirectivesPageModule' },
    { path: '**', loadChildren: './pages/page-not-found/page-not-found.module#PageNotFoundPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-split-pane>\n    <ion-menu menuId=\"menuId\" [fivCollapseMenu]=\"true\" [hoverMenu]=\"true\" #menu=menuCollapse>\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <fiv-collapsable-menu-button #mb *fivIf=\"['desktop']\" [menu]=\"menu\"></fiv-collapsable-menu-button>\n          </ion-buttons>\n          <ion-title>Fivethree Components</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n          <fiv-router-item [icon]=\"p.icon\" [text]=\"p.title\" [matchChildUrl]=\"false\"\n            [pageUrl]=\"p.url\" *ngFor=\"let p of appPages\">\n          </fiv-router-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet main></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/language.service */ "./src/app/services/language.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, language) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.language = language;
        this.appPages = [
            {
                title: 'App Bar',
                url: '/app-bar',
                icon: 'git-commit'
            },
            // {
            //   title: 'Bottom Sheet',
            //   url: '/bottom-sheet',
            //   icon: 'ios-arrow-up'
            // },
            // {
            //   title: 'Dialog',
            //   url: '/dialog',
            //   icon: 'notifications'
            // },
            {
                title: 'Expandable',
                url: '/expandable',
                icon: 'resize'
            },
            {
                title: 'Icon',
                url: '/icon',
                icon: 'mail-unread'
            },
            // {
            //   title: 'Image View',
            //   url: '/image',
            //   icon: 'image'
            // },
            {
                title: 'Loading Indicators',
                url: '/loading',
                icon: 'time'
            },
            // {
            //   title: 'Map',
            //   url: '/map',
            //   icon: 'map'
            // },
            {
                title: 'Overflow Buttons',
                url: '/buttons',
                icon: 'more'
            },
            {
                title: 'Password Reveal Input',
                url: '/password',
                icon: 'key'
            },
            // {
            //   title: 'Refresher',
            //   url: '/refresh',
            //   icon: 'refresh'
            // },
            // {
            //   title: 'Searchbar',
            //   url: '/toolbar-search',
            //   icon: 'search'
            // },
            {
                title: 'Stepper',
                url: '/stepper',
                icon: 'share'
            },
        ];
        this.language.initializeLanguage();
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
            _services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_lottie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-lottie */ "./node_modules/ng-lottie/dist/esm/src/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/util.service */ "./src/app/services/util.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            entryComponents: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                core__WEBPACK_IMPORTED_MODULE_1__["FivethreeCoreModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
                    }
                }),
                ngx_markdown__WEBPACK_IMPORTED_MODULE_11__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] }),
                ng_lottie__WEBPACK_IMPORTED_MODULE_13__["LottieAnimationViewModule"].forRoot(),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"]
            ],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"] },
                _services_util_service__WEBPACK_IMPORTED_MODULE_16__["UtilService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example/example.component */ "./src/app/components/example/example.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_lottie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-lottie */ "./node_modules/ng-lottie/dist/esm/src/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _example_example_component__WEBPACK_IMPORTED_MODULE_0__["ExampleComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forChild(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild(),
                core__WEBPACK_IMPORTED_MODULE_5__["FivethreeCoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                ng_lottie__WEBPACK_IMPORTED_MODULE_10__["LottieAnimationViewModule"]
            ],
            exports: [
                _example_example_component__WEBPACK_IMPORTED_MODULE_0__["ExampleComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                core__WEBPACK_IMPORTED_MODULE_5__["FivethreeCoreModule"],
                ng_lottie__WEBPACK_IMPORTED_MODULE_10__["LottieAnimationViewModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/example/example.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/example/example.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"example\">\n  <ion-toolbar color=\"translucent\">\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"html || api || typescript || css\" (click)=\"showApi = !showApi\" [matTooltip]=\"showApi ? 'Close source' : 'View source'\">\n        <fiv-icon slot=\"start\" [name]=\"showApi ? 'md-close' : 'md-code'\"></fiv-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-card-header>\n    <ion-card-subtitle>{{subtitle}}</ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content>\n    <div [@listAnim]=\"showApi ? 'open' : 'closed'\" class=\"content-container\">\n      <mat-tab-group>\n        <mat-tab *ngIf=\"html\" label=\"HTML\">\n          <markdown [src]=\"html\"></markdown>\n        </mat-tab>\n        <mat-tab *ngIf=\"css\" label=\"CSS\">\n          <markdown [src]=\"css\"></markdown>\n        </mat-tab>\n        <mat-tab *ngIf=\"typescript\" label=\"TS\">\n          <markdown [src]=\"typescript\"></markdown>\n        </mat-tab>\n        <mat-tab *ngIf=\"api\" label=\"API\">\n          <markdown [src]=\"api\"></markdown>\n        </mat-tab>\n      </mat-tab-group>\n    </div>\n    <div class=\"content-container\">\n      <ng-content></ng-content>\n    </div>\n  </ion-card-content>\n</ion-card>"

/***/ }),

/***/ "./src/app/components/example/example.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/example/example.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: block; }\n\n.swiper-slide {\n  text-align: left; }\n\n.content-container {\n  width: 100%; }\n\n@media (max-width: 411px) {\n  .example {\n    margin: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tai9EZXYvZml2ZXRocmVlL3dlYi1jb21wb25lbnRzL2ZpdmV0aHJlZS9zcmMvYXBwL2NvbXBvbmVudHMvZXhhbXBsZS9leGFtcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSTtJQUNJLFlBQVcsRUFDZCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlL2V4YW1wbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA0MTFweCkge1xuICAgIC5leGFtcGxlIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/example/example.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/example/example.component.ts ***!
  \*********************************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
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


var ExampleComponent = /** @class */ (function () {
    function ExampleComponent() {
        this.showApi = false;
    }
    ExampleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExampleComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExampleComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExampleComponent.prototype, "html", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExampleComponent.prototype, "css", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExampleComponent.prototype, "typescript", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExampleComponent.prototype, "api", void 0);
    ExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-example',
            template: __webpack_require__(/*! ./example.component.html */ "./src/app/components/example/example.component.html"),
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('listAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('220ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('180ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0', opacity: 0 }))
                    ])
                ])],
            styles: [__webpack_require__(/*! ./example.component.scss */ "./src/app/components/example/example.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExampleComponent);
    return ExampleComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-footer no-border>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col sizeXs=\"6\" sizeLg=\"3\">\n        <h4>Fivethree</h4>\n        <a class=\"links\" href=\"/fivethree/getting-started\" translate>common.get-started</a>\n        <a class=\"links\" href=\"https://fivethree.io/\" translate>footer.about</a>\n      </ion-col>\n      <ion-col sizeXs=\"6\" sizeLg=\"3\">\n        <h4 translate>footer.resources</h4>\n        <a class=\"links\" href=\"https://angular.io/\">Angular</a>\n        <a class=\"links\" href=\"https://ionicframework.com/\">Ionic</a>\n      </ion-col>\n      <ion-col sizeXs=\"12\" sizeLg=\"6\" id=\"social\">\n        <a href=\"https://www.github.com/fivethree-team/fivethree\" target=\"blank\">\n          <ion-icon slot=\"icon-only\" name=\"logo-github\"></ion-icon>\n        </a>\n        <a href=\"https://twitter.com/fivethreeteam\" target=\"blank\">\n          <ion-icon slot=\"icon-only\" name=\"logo-twitter\"></ion-icon>\n        </a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer {\n  background: var(--ion-color-dark);\n  padding: 24px 0 24px 0; }\n\nh4 {\n  color: var(--ion-color-dark-contrast); }\n\n.links {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 16px;\n  line-height: 1.3;\n  color: var(--ion-color-light); }\n\na:hover {\n  color: var(--ion-color-light-shade); }\n\na {\n  text-decoration: none; }\n\n#social {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n#social a {\n    color: var(--ion-color-light);\n    font-size: 2rem;\n    padding: 0 12px 0 12px; }\n\n#social a:first-child {\n    padding-left: 0; }\n\n#social a:last-child {\n    padding-right: 0; }\n\n@media screen and (max-width: 991px) {\n  #social {\n    order: -1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tai9EZXYvZml2ZXRocmVlL3dlYi1jb21wb25lbnRzL2ZpdmV0aHJlZS9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFpQztFQUNqQyx1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxzQ0FBcUMsRUFDeEM7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLDhCQUE2QixFQUNoQzs7QUFFRDtFQUNJLG9DQUFtQyxFQUN0Qzs7QUFFRDtFQUNJLHNCQUFxQixFQUN4Qjs7QUFFRDtFQUNJLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBZXRCOztBQWxCRDtJQU1RLDhCQUE2QjtJQUM3QixnQkFBZTtJQUNmLHVCQUFzQixFQUN6Qjs7QUFUTDtJQVlRLGdCQUFlLEVBQ2xCOztBQWJMO0lBZ0JRLGlCQUFnQixFQUNuQjs7QUFHTDtFQUNJO0lBQ0ksVUFBUyxFQUNaLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgcGFkZGluZzogMjRweCAwIDI0cHggMDtcbn1cblxuaDQge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCk7XG59XG5cbi5saW5rcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5hOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jc29jaWFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgcGFkZGluZzogMCAxMnB4IDAgMTJweDtcbiAgICB9XG5cbiAgICBhOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cblxuICAgIGE6bGFzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICNzb2NpYWwge1xuICAgICAgICBvcmRlcjogLTE7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title (click)=\"onTitleClicked()\">{{title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <a id=\"github\" href=\"https://www.github.com/fivethree-team/fivethree\" target=\"blank\">\n        <ion-icon slot=\"icon-only\" name=\"logo-github\"></ion-icon>\n      </a>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  cursor: pointer; }\n\n#github {\n  color: var(--ion-color-light-contrast); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tai9EZXYvZml2ZXRocmVlL3dlYi1jb21wb25lbnRzL2ZpdmV0aHJlZS9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksdUNBQXNDLEVBQ3pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNnaXRodWIge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xufSAiXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(navController) {
        this.navController = navController;
        this.title = 'Fivethree';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onTitleClicked = function () {
        this.navController.navigateRoot('/');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["NavController"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/icons.ts":
/*!***********************************!*\
  !*** ./src/app/services/icons.ts ***!
  \***********************************/
/*! exports provided: icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
// Generated by https://quicktype.io
var icons = {
    'icons': [
        {
            'icons': [
                'ios-add-circle-outline',
                'md-add-circle-outline'
            ],
            'tags': [
                'circle'
            ]
        },
        {
            'icons': [
                'ios-add-circle',
                'md-add-circle'
            ],
            'tags': [
                'add',
                'circle'
            ]
        },
        {
            'icons': [
                'ios-add',
                'md-add'
            ],
            'tags': [
                'add',
                'include',
                'invite',
                'plus'
            ]
        },
        {
            'icons': [
                'ios-airplane',
                'md-airplane'
            ],
            'tags': [
                'airplane',
                'plane'
            ]
        },
        {
            'icons': [
                'ios-alarm',
                'md-alarm'
            ],
            'tags': [
                'alarm'
            ]
        },
        {
            'icons': [
                'ios-albums',
                'md-albums'
            ],
            'tags': [
                'albums',
                'boxes',
                'slides',
                'square'
            ]
        },
        {
            'icons': [
                'ios-alert',
                'md-alert'
            ],
            'tags': [
                '!',
                'alert',
                'attention',
                'exclamation',
                'notice',
                'warning'
            ]
        },
        {
            'icons': [
                'ios-american-football',
                'md-american-football'
            ],
            'tags': [
                'american',
                'football'
            ]
        },
        {
            'icons': [
                'ios-analytics',
                'md-analytics'
            ],
            'tags': [
                'analytics',
                'data',
                'metrics',
                'track'
            ]
        },
        {
            'icons': [
                'ios-aperture',
                'md-aperture'
            ],
            'tags': [
                'aperture',
                'dark',
                'images',
                'levels',
                'light',
                'settings'
            ]
        },
        {
            'icons': [
                'ios-apps',
                'md-apps'
            ],
            'tags': [
                'apps',
                'applications'
            ]
        },
        {
            'icons': [
                'ios-appstore',
                'md-appstore'
            ],
            'tags': [
                'appstore',
                'store'
            ]
        },
        {
            'icons': [
                'ios-archive',
                'md-archive'
            ],
            'tags': [
                'archive',
                'email'
            ]
        },
        {
            'icons': [
                'ios-arrow-back',
                'md-arrow-back'
            ],
            'tags': [
                'arrow',
                'back',
                'chevron',
                'navigation'
            ]
        },
        {
            'icons': [
                'ios-arrow-down',
                'md-arrow-down'
            ],
            'tags': [
                'arrow',
                'chevron',
                'down'
            ]
        },
        {
            'icons': [
                'ios-arrow-dropdown-circle',
                'md-arrow-dropdown-circle'
            ],
            'tags': [
                'arrow',
                'circle',
                'dropdown'
            ]
        },
        {
            'icons': [
                'ios-arrow-dropdown',
                'md-arrow-dropdown'
            ],
            'tags': [
                'arrow',
                'dropdown'
            ]
        },
        {
            'icons': [
                'ios-arrow-dropleft-circle',
                'md-arrow-dropleft-circle'
            ],
            'tags': [
                'arrow',
                'circle',
                'dropleft'
            ]
        },
        {
            'icons': [
                'ios-arrow-dropleft',
                'md-arrow-dropleft'
            ],
            'tags': [
                'arrow',
                'dropleft'
            ]
        },
        {
            'icons': [
                'ios-arrow-dropright-circle',
                'md-arrow-dropright-circle'
            ],
            'tags': [
                'arrow',
                'circle',
                'dropright'
            ]
        },
        {
            'icons': [
                'ios-arrow-dropright',
                'md-arrow-dropright'
            ],
            'tags': [
                'arrow',
                'dropright'
            ]
        },
        {
            'icons': [
                'ios-arrow-dropup-circle',
                'md-arrow-dropup-circle'
            ],
            'tags': [
                'arrow',
                'circle',
                'dropup'
            ]
        },
        {
            'icons': [
                'ios-arrow-dropup',
                'md-arrow-dropup'
            ],
            'tags': [
                'arrow',
                'dropup'
            ]
        },
        {
            'icons': [
                'ios-arrow-forward',
                'md-arrow-forward'
            ],
            'tags': [
                'arrow',
                'chevron',
                'forward',
                'navigation'
            ]
        },
        {
            'icons': [
                'ios-arrow-round-back',
                'md-arrow-round-back'
            ],
            'tags': [
                'arrow',
                'back',
                'round'
            ]
        },
        {
            'icons': [
                'ios-arrow-round-down',
                'md-arrow-round-down'
            ],
            'tags': [
                'arrow',
                'down',
                'round'
            ]
        },
        {
            'icons': [
                'ios-arrow-round-forward',
                'md-arrow-round-forward'
            ],
            'tags': [
                'arrow',
                'forward',
                'round'
            ]
        },
        {
            'icons': [
                'ios-arrow-round-up',
                'md-arrow-round-up'
            ],
            'tags': [
                'arrow',
                'round',
                'up'
            ]
        },
        {
            'icons': [
                'ios-arrow-up',
                'md-arrow-up'
            ],
            'tags': [
                'arrow',
                'chevron',
                'up'
            ]
        },
        {
            'icons': [
                'ios-at',
                'md-at'
            ],
            'tags': [
                '@',
                'at'
            ]
        },
        {
            'icons': [
                'ios-attach',
                'md-attach'
            ],
            'tags': [
                'attach'
            ]
        },
        {
            'icons': [
                'ios-backspace',
                'md-backspace'
            ],
            'tags': [
                'backspace'
            ]
        },
        {
            'icons': [
                'ios-barcode',
                'md-barcode'
            ],
            'tags': [
                'barcode',
                'camera',
                'reader'
            ]
        },
        {
            'icons': [
                'ios-baseball',
                'md-baseball'
            ],
            'tags': [
                'baseball'
            ]
        },
        {
            'icons': [
                'ios-basket',
                'md-basket'
            ],
            'tags': [
                'basket'
            ]
        },
        {
            'icons': [
                'ios-basketball',
                'md-basketball'
            ],
            'tags': [
                'basketball'
            ]
        },
        {
            'icons': [
                'ios-battery-charging',
                'md-battery-charging'
            ],
            'tags': [
                'battery',
                'charging'
            ]
        },
        {
            'icons': [
                'ios-battery-dead',
                'md-battery-dead'
            ],
            'tags': [
                'battery',
                'dead'
            ]
        },
        {
            'icons': [
                'ios-battery-full',
                'md-battery-full'
            ],
            'tags': [
                'battery',
                'full'
            ]
        },
        {
            'icons': [
                'ios-beaker',
                'md-beaker'
            ],
            'tags': [
                'beaker',
                'flask',
                'mixture',
                'potion'
            ]
        },
        {
            'icons': [
                'ios-bed',
                'md-bed'
            ],
            'tags': [
                'bed',
                'sleep'
            ]
        },
        {
            'icons': [
                'ios-beer',
                'md-beer'
            ],
            'tags': [
                'beer',
                'drink',
                'eat',
                'food'
            ]
        },
        {
            'icons': [
                'ios-bicycle',
                'md-bicycle'
            ],
            'tags': [
                'bicycle'
            ]
        },
        {
            'icons': [
                'ios-bluetooth',
                'md-bluetooth'
            ],
            'tags': [
                'bluetooth',
                'cloud',
                'connection'
            ]
        },
        {
            'icons': [
                'ios-boat',
                'md-boat'
            ],
            'tags': [
                'boat'
            ]
        },
        {
            'icons': [
                'ios-body',
                'md-body'
            ],
            'tags': [
                'body'
            ]
        },
        {
            'icons': [
                'ios-bonfire',
                'md-bonfire'
            ],
            'tags': [
                'bonfire',
                'heat',
                'hot'
            ]
        },
        {
            'icons': [
                'ios-book',
                'md-book'
            ],
            'tags': [
                'book',
                'read'
            ]
        },
        {
            'icons': [
                'ios-bookmark',
                'md-bookmark'
            ],
            'tags': [
                'bookmark',
                'favorite',
                'save',
                'tag'
            ]
        },
        {
            'icons': [
                'ios-bookmarks',
                'md-bookmarks'
            ],
            'tags': [
                'bookmarks',
                'favorite'
            ]
        },
        {
            'icons': [
                'ios-bowtie',
                'md-bowtie'
            ],
            'tags': [
                'bowtie'
            ]
        },
        {
            'icons': [
                'ios-briefcase',
                'md-briefcase'
            ],
            'tags': [
                'briefcase',
                'folder',
                'organize'
            ]
        },
        {
            'icons': [
                'ios-browsers',
                'md-browsers'
            ],
            'tags': [
                'browsers',
                'square'
            ]
        },
        {
            'icons': [
                'ios-brush',
                'md-brush'
            ],
            'tags': [
                'brush'
            ]
        },
        {
            'icons': [
                'ios-bug',
                'md-bug'
            ],
            'tags': [
                'bug',
                'develop',
                'error',
                'hacker',
                'program'
            ]
        },
        {
            'icons': [
                'ios-build',
                'md-build'
            ],
            'tags': [
                'build'
            ]
        },
        {
            'icons': [
                'ios-bulb',
                'md-bulb'
            ],
            'tags': [
                'bulb'
            ]
        },
        {
            'icons': [
                'ios-bus',
                'md-bus'
            ],
            'tags': [
                'bus'
            ]
        },
        {
            'icons': [
                'ios-business',
                'md-business'
            ],
            'tags': [
                'business'
            ]
        },
        {
            'icons': [
                'ios-cafe',
                'md-cafe'
            ],
            'tags': [
                'cafe'
            ]
        },
        {
            'icons': [
                'ios-calculator',
                'md-calculator'
            ],
            'tags': [
                'arithmatic',
                'calculator',
                'math'
            ]
        },
        {
            'icons': [
                'ios-calendar',
                'md-calendar'
            ],
            'tags': [
                'calendar',
                'date',
                'month',
                'week'
            ]
        },
        {
            'icons': [
                'ios-call',
                'md-call'
            ],
            'tags': [
                'call',
                'telephone'
            ]
        },
        {
            'icons': [
                'ios-camera',
                'md-camera'
            ],
            'tags': [
                'camera',
                'image',
                'photo'
            ]
        },
        {
            'icons': [
                'ios-car',
                'md-car'
            ],
            'tags': [
                'car'
            ]
        },
        {
            'icons': [
                'ios-card',
                'md-card'
            ],
            'tags': [
                '$',
                'card',
                'cash',
                'credit',
                'debit',
                'dollars',
                'money',
                'price',
                'shopping'
            ]
        },
        {
            'icons': [
                'ios-cart',
                'md-cart'
            ],
            'tags': [
                'cart'
            ]
        },
        {
            'icons': [
                'ios-cash',
                'md-cash'
            ],
            'tags': [
                '$',
                'cash',
                'credit',
                'debit',
                'dollars',
                'money',
                'price',
                'shopping'
            ]
        },
        {
            'icons': [
                'ios-cellular',
                'md-cellular'
            ],
            'tags': [
                'cellular'
            ]
        },
        {
            'icons': [
                'ios-chatboxes',
                'md-chatboxes'
            ],
            'tags': [
                'chatboxes',
                'talk'
            ]
        },
        {
            'icons': [
                'ios-chatbubbles',
                'md-chatbubbles'
            ],
            'tags': [
                'chatbubbles',
                'talk'
            ]
        },
        {
            'icons': [
                'ios-checkbox-outline',
                'md-checkbox-outline'
            ],
            'tags': [
                'checkbox'
            ]
        },
        {
            'icons': [
                'ios-checkbox',
                'md-checkbox'
            ],
            'tags': [
                'checkbox'
            ]
        },
        {
            'icons': [
                'ios-checkmark-circle-outline',
                'md-checkmark-circle-outline'
            ],
            'tags': [
                'checkmark'
            ]
        },
        {
            'icons': [
                'ios-checkmark-circle',
                'md-checkmark-circle'
            ],
            'tags': [
                'checkmark',
                'circle'
            ]
        },
        {
            'icons': [
                'ios-checkmark',
                'md-checkmark'
            ],
            'tags': [
                'checkmark'
            ]
        },
        {
            'icons': [
                'ios-clipboard',
                'md-clipboard'
            ],
            'tags': [
                'clipboard',
                'write'
            ]
        },
        {
            'icons': [
                'ios-clock',
                'md-clock'
            ],
            'tags': [
                'clock',
                'time'
            ]
        },
        {
            'icons': [
                'ios-close-circle-outline',
                'md-close-circle-outline'
            ],
            'tags': [
                'close',
                'cicle'
            ]
        },
        {
            'icons': [
                'ios-close-circle',
                'md-close-circle'
            ],
            'tags': [
                'circle',
                'close'
            ]
        },
        {
            'icons': [
                'ios-close',
                'md-close'
            ],
            'tags': [
                'close',
                'delete',
                'remove'
            ]
        },
        {
            'icons': [
                'ios-cloud-circle',
                'md-cloud-circle'
            ],
            'tags': [
                'circle',
                'cloud'
            ]
        },
        {
            'icons': [
                'ios-cloud-done',
                'md-cloud-done'
            ],
            'tags': [
                'cloud',
                'done'
            ]
        },
        {
            'icons': [
                'ios-cloud-download',
                'md-cloud-download'
            ],
            'tags': [
                'cloud',
                'download',
                'storage'
            ]
        },
        {
            'icons': [
                'ios-cloud-outline',
                'md-cloud-outline'
            ],
            'tags': [
                'cloud'
            ]
        },
        {
            'icons': [
                'ios-cloud-upload',
                'md-cloud-upload'
            ],
            'tags': [
                'cloud',
                'storage',
                'upload'
            ]
        },
        {
            'icons': [
                'ios-cloud',
                'md-cloud'
            ],
            'tags': [
                'cloud',
                'storage',
                'weather',
                'whether'
            ]
        },
        {
            'icons': [
                'ios-cloudy-night',
                'md-cloudy-night'
            ],
            'tags': [
                'cloudy',
                'night',
                'overcast',
                'weather',
                'whether'
            ]
        },
        {
            'icons': [
                'ios-cloudy',
                'md-cloudy'
            ],
            'tags': [
                'cloudy',
                'overcast',
                'weather',
                'whether'
            ]
        },
        {
            'icons': [
                'ios-code-download',
                'md-code-download'
            ],
            'tags': [
                'code',
                'develop',
                'download',
                'hacker',
                'program'
            ]
        },
        {
            'icons': [
                'ios-code-working',
                'md-code-working'
            ],
            'tags': [
                'code',
                'develop',
                'hacker',
                'program',
                'working'
            ]
        },
        {
            'icons': [
                'ios-code',
                'md-code'
            ],
            'tags': [
                'code',
                'develop',
                'hacker',
                'program'
            ]
        },
        {
            'icons': [
                'ios-cog',
                'md-cog'
            ],
            'tags': [
                'cog',
                'gear',
                'options',
                'settings'
            ]
        },
        {
            'icons': [
                'ios-color-fill',
                'md-color-fill'
            ],
            'tags': [
                'color',
                'fill'
            ]
        },
        {
            'icons': [
                'ios-color-filter',
                'md-color-filter'
            ],
            'tags': [
                'color',
                'filter'
            ]
        },
        {
            'icons': [
                'ios-color-palette',
                'md-color-palette'
            ],
            'tags': [
                'color',
                'palette'
            ]
        },
        {
            'icons': [
                'ios-color-wand',
                'md-color-wand'
            ],
            'tags': [
                'color',
                'wand'
            ]
        },
        {
            'icons': [
                'ios-compass',
                'md-compass'
            ],
            'tags': [
                'compass',
                'directions',
                'location',
                'navigation'
            ]
        },
        {
            'icons': [
                'ios-construct',
                'md-construct'
            ],
            'tags': [
                'construct'
            ]
        },
        {
            'icons': [
                'ios-contact',
                'md-contact'
            ],
            'tags': [
                'contact',
                'people',
                'users'
            ]
        },
        {
            'icons': [
                'ios-contacts',
                'md-contacts'
            ],
            'tags': [
                'contacts',
                'people',
                'users'
            ]
        },
        {
            'icons': [
                'ios-contract',
                'md-contract'
            ],
            'tags': [
                'contract'
            ]
        },
        {
            'icons': [
                'ios-contrast',
                'md-contrast'
            ],
            'tags': [
                'contrast',
                'dark',
                'images',
                'levels',
                'light',
                'settings'
            ]
        },
        {
            'icons': [
                'ios-copy',
                'md-copy'
            ],
            'tags': [
                'copy',
                'duplicate',
                'paper'
            ]
        },
        {
            'icons': [
                'ios-create',
                'md-create'
            ],
            'tags': [
                'create'
            ]
        },
        {
            'icons': [
                'ios-crop',
                'md-crop'
            ],
            'tags': [
                'crop'
            ]
        },
        {
            'icons': [
                'ios-cube',
                'md-cube'
            ],
            'tags': [
                'box',
                'container',
                'cube',
                'square'
            ]
        },
        {
            'icons': [
                'ios-cut',
                'md-cut'
            ],
            'tags': [
                'cut'
            ]
        },
        {
            'icons': [
                'ios-desktop',
                'md-desktop'
            ],
            'tags': [
                'desktop'
            ]
        },
        {
            'icons': [
                'ios-disc',
                'md-disc'
            ],
            'tags': [
                'cd',
                'disc',
                'vinyl'
            ]
        },
        {
            'icons': [
                'ios-document',
                'md-document'
            ],
            'tags': [
                'document',
                'file',
                'paper'
            ]
        },
        {
            'icons': [
                'ios-done-all',
                'md-done-all'
            ],
            'tags': [
                'all',
                'done'
            ]
        },
        {
            'icons': [
                'ios-download',
                'md-download'
            ],
            'tags': [
                'download',
                'export'
            ]
        },
        {
            'icons': [
                'ios-easel',
                'md-easel'
            ],
            'tags': [
                'easel'
            ]
        },
        {
            'icons': [
                'ios-egg',
                'md-egg'
            ],
            'tags': [
                'baby',
                'bird',
                'birth',
                'egg',
                'twitter'
            ]
        },
        {
            'icons': [
                'ios-exit',
                'md-exit'
            ],
            'tags': [
                'exit'
            ]
        },
        {
            'icons': [
                'ios-expand',
                'md-expand'
            ],
            'tags': [
                'expand'
            ]
        },
        {
            'icons': [
                'ios-eye-off',
                'md-eye-off'
            ],
            'tags': [
                'eye',
                'off'
            ]
        },
        {
            'icons': [
                'ios-eye',
                'md-eye'
            ],
            'tags': [
                'exposed',
                'eye',
                'look',
                'see',
                'view'
            ]
        },
        {
            'icons': [
                'ios-fastforward',
                'md-fastforward'
            ],
            'tags': [
                'fastforward',
                'jump',
                'next',
                'skip'
            ]
        },
        {
            'icons': [
                'ios-female',
                'md-female'
            ],
            'tags': [
                'dudette',
                'female',
                'girl',
                'lady'
            ]
        },
        {
            'icons': [
                'ios-filing',
                'md-filing'
            ],
            'tags': [
                'archive',
                'filing'
            ]
        },
        {
            'icons': [
                'ios-film',
                'md-film'
            ],
            'tags': [
                'film'
            ]
        },
        {
            'icons': [
                'ios-finger-print',
                'md-finger-print'
            ],
            'tags': [
                'finger',
                'print'
            ]
        },
        {
            'icons': [
                'ios-fitness',
                'md-fitness'
            ],
            'tags': [
                'fitness'
            ]
        },
        {
            'icons': [
                'ios-flag',
                'md-flag'
            ],
            'tags': [
                'favorite',
                'flag',
                'marker'
            ]
        },
        {
            'icons': [
                'ios-flame',
                'md-flame'
            ],
            'tags': [
                'fire',
                'flame',
                'heat',
                'hot'
            ]
        },
        {
            'icons': [
                'ios-flash-off',
                'md-flash-off'
            ],
            'tags': [
                'flash'
            ]
        },
        {
            'icons': [
                'ios-flash',
                'md-flash'
            ],
            'tags': [
                'flash',
                'lightning',
                'weather',
                'whether'
            ]
        },
        {
            'icons': [
                'ios-flashlight',
                'md-flashlight'
            ],
            'tags': [
                'flashlight'
            ]
        },
        {
            'icons': [
                'ios-flask',
                'md-flask'
            ],
            'tags': [
                'bubbles',
                'flask',
                'mixture',
                'potion'
            ]
        },
        {
            'icons': [
                'ios-flower',
                'md-flower'
            ],
            'tags': [
                'flower'
            ]
        },
        {
            'icons': [
                'ios-folder-open',
                'md-folder-open'
            ],
            'tags': [
                'folder',
                'open'
            ]
        },
        {
            'icons': [
                'ios-folder',
                'md-folder'
            ],
            'tags': [
                'file',
                'folder'
            ]
        },
        {
            'icons': [
                'ios-football',
                'md-football'
            ],
            'tags': [
                'football',
                'soccer'
            ]
        },
        {
            'icons': [
                'ios-funnel',
                'md-funnel'
            ],
            'tags': [
                'funnel',
                'sort'
            ]
        },
        {
            'icons': [
                'ios-gift',
                'md-gift'
            ],
            'tags': [
                'gift'
            ]
        },
        {
            'icons': [
                'ios-git-branch',
                'md-git-branch'
            ],
            'tags': [
                'branch',
                'git'
            ]
        },
        {
            'icons': [
                'ios-git-commit',
                'md-git-commit'
            ],
            'tags': [
                'commit',
                'git'
            ]
        },
        {
            'icons': [
                'ios-git-compare',
                'md-git-compare'
            ],
            'tags': [
                'compare',
                'git'
            ]
        },
        {
            'icons': [
                'ios-git-merge',
                'md-git-merge'
            ],
            'tags': [
                'git',
                'merge'
            ]
        },
        {
            'icons': [
                'ios-git-network',
                'md-git-network'
            ],
            'tags': [
                'git',
                'network'
            ]
        },
        {
            'icons': [
                'ios-git-pull-request',
                'md-git-pull-request'
            ],
            'tags': [
                'git',
                'pull',
                'request'
            ]
        },
        {
            'icons': [
                'ios-glasses',
                'md-glasses'
            ],
            'tags': [
                'glasses',
                'look',
                'reading',
                'see',
                'steve'
            ]
        },
        {
            'icons': [
                'ios-globe',
                'md-globe'
            ],
            'tags': [
                'globe'
            ]
        },
        {
            'icons': [
                'ios-grid',
                'md-grid'
            ],
            'tags': [
                'grid',
                'menu'
            ]
        },
        {
            'icons': [
                'ios-hammer',
                'md-hammer'
            ],
            'tags': [
                'hammer',
                'options',
                'settings',
                'tools'
            ]
        },
        {
            'icons': [
                'ios-hand',
                'md-hand'
            ],
            'tags': [
                'hand',
                'stop'
            ]
        },
        {
            'icons': [
                'ios-happy',
                'md-happy'
            ],
            'tags': [
                'fun',
                'good',
                'happy',
                'like',
                'yes'
            ]
        },
        {
            'icons': [
                'ios-headset',
                'md-headset'
            ],
            'tags': [
                'headset'
            ]
        },
        {
            'icons': [
                'ios-heart',
                'md-heart'
            ],
            'tags': [
                'heart',
                'love'
            ]
        },
        {
            'icons': [
                'ios-heart-dislike',
                'md-heart-dislike'
            ],
            'tags': [
                'dislike',
                'heart',
                'love'
            ]
        },
        {
            'icons': [
                'ios-heart-empty',
                'md-heart-empty'
            ],
            'tags': [
                'empty',
                'heart',
                'love'
            ]
        },
        {
            'icons': [
                'ios-heart-half',
                'md-heart-half'
            ],
            'tags': [
                'half',
                'heart',
                'love'
            ]
        },
        {
            'icons': [
                'ios-help-buoy',
                'md-help-buoy'
            ],
            'tags': [
                '?',
                'buoy',
                'help',
                'question'
            ]
        },
        {
            'icons': [
                'ios-help-circle-outline',
                'md-help-circle-outline'
            ],
            'tags': [
                'help'
            ]
        },
        {
            'icons': [
                'ios-help-circle',
                'md-help-circle'
            ],
            'tags': [
                'circle',
                'help'
            ]
        },
        {
            'icons': [
                'ios-help',
                'md-help'
            ],
            'tags': [
                '?',
                'help',
                'information',
                'question'
            ]
        },
        {
            'icons': [
                'ios-home',
                'md-home'
            ],
            'tags': [
                'home',
                'house'
            ]
        },
        {
            'icons': [
                'ios-hourglass',
                'md-hourglass'
            ],
            'tags': [
                'hourglass'
            ]
        },
        {
            'icons': [
                'ios-ice-cream',
                'md-ice-cream'
            ],
            'tags': [
                'cream',
                'ice'
            ]
        },
        {
            'icons': [
                'ios-image',
                'md-image'
            ],
            'tags': [
                'camera',
                'image',
                'photo'
            ]
        },
        {
            'icons': [
                'ios-images',
                'md-images'
            ],
            'tags': [
                'images',
                'photo'
            ]
        },
        {
            'icons': [
                'ios-infinite',
                'md-infinite'
            ],
            'tags': [
                'forever',
                'infinite',
                'loop'
            ]
        },
        {
            'icons': [
                'ios-information-circle-outline',
                'md-information-circle-outline'
            ],
            'tags': [
                'information'
            ]
        },
        {
            'icons': [
                'ios-information-circle',
                'md-information-circle'
            ],
            'tags': [
                'circle',
                'information'
            ]
        },
        {
            'icons': [
                'ios-information',
                'md-information'
            ],
            'tags': [
                'help',
                'information',
                'knowledge'
            ]
        },
        {
            'icons': [
                'ios-jet',
                'md-jet'
            ],
            'tags': [
                'fly',
                'jet',
                'plane'
            ]
        },
        {
            'icons': [
                'ios-journal',
                'md-journal'
            ],
            'tags': [
                'journal'
            ]
        },
        {
            'icons': [
                'ios-key',
                'md-key'
            ],
            'tags': [
                'access',
                'key'
            ]
        },
        {
            'icons': [
                'ios-keypad',
                'md-keypad'
            ],
            'tags': [
                'keypad',
                'type'
            ]
        },
        {
            'icons': [
                'ios-laptop',
                'md-laptop'
            ],
            'tags': [
                'apple',
                'laptop',
                'macbook',
                'osx'
            ]
        },
        {
            'icons': [
                'ios-leaf',
                'md-leaf'
            ],
            'tags': [
                'green',
                'leaf',
                'nature',
                'plant',
                'recycle'
            ]
        },
        {
            'icons': [
                'ios-link',
                'md-link'
            ],
            'tags': [
                'anchor',
                'attach',
                'chain',
                'href',
                'link'
            ]
        },
        {
            'icons': [
                'ios-list-box',
                'md-list-box'
            ],
            'tags': [
                'box',
                'list'
            ]
        },
        {
            'icons': [
                'ios-list',
                'md-list'
            ],
            'tags': [
                'list'
            ]
        },
        {
            'icons': [
                'ios-locate',
                'md-locate'
            ],
            'tags': [
                'gps',
                'locate',
                'maps',
                'navigate'
            ]
        },
        {
            'icons': [
                'ios-lock',
                'md-lock'
            ],
            'tags': [
                'lock'
            ]
        },
        {
            'icons': [
                'ios-log-in',
                'md-log-in'
            ],
            'tags': [
                'in',
                'log',
                'signin'
            ]
        },
        {
            'icons': [
                'ios-log-out',
                'md-log-out'
            ],
            'tags': [
                'log',
                'out',
                'signout'
            ]
        },
        {
            'icons': [
                'ios-magnet',
                'md-magnet'
            ],
            'tags': [
                'attraction',
                'magnet',
                'sticky'
            ]
        },
        {
            'icons': [
                'ios-mail-open',
                'md-mail-open'
            ],
            'tags': [
                'mail',
                'open'
            ]
        },
        {
            'icons': [
                'ios-mail-unread',
                'md-mail-unread'
            ],
            'tags': [
                'mail',
                'unread'
            ]
        },
        {
            'icons': [
                'ios-mail',
                'md-mail'
            ],
            'tags': [
                'email',
                'mail'
            ]
        },
        {
            'icons': [
                'ios-male',
                'md-male'
            ],
            'tags': [
                'boy',
                'dude',
                'guy',
                'male',
                'male'
            ]
        },
        {
            'icons': [
                'ios-man',
                'md-man'
            ],
            'tags': [
                'boy',
                'dude',
                'guy',
                'male',
                'man'
            ]
        },
        {
            'icons': [
                'ios-map',
                'md-map'
            ],
            'tags': [
                'gps',
                'map',
                'navigation',
                'pin'
            ]
        },
        {
            'icons': [
                'ios-medal',
                'md-medal'
            ],
            'tags': [
                'medal'
            ]
        },
        {
            'icons': [
                'ios-medical',
                'md-medical'
            ],
            'tags': [
                'medical'
            ]
        },
        {
            'icons': [
                'ios-medkit',
                'md-medkit'
            ],
            'tags': [
                'case',
                'disease',
                'firstaid',
                'health',
                'medkit',
                'sick'
            ]
        },
        {
            'icons': [
                'ios-megaphone',
                'md-megaphone'
            ],
            'tags': [
                'megaphone'
            ]
        },
        {
            'icons': [
                'ios-menu',
                'md-menu'
            ],
            'tags': [
                'menu'
            ]
        },
        {
            'icons': [
                'ios-mic-off',
                'md-mic-off'
            ],
            'tags': [
                'mic',
                'noise',
                'off',
                'sound',
                'speaker',
                'talk'
            ]
        },
        {
            'icons': [
                'ios-mic',
                'md-mic'
            ],
            'tags': [
                'mic',
                'noise',
                'sound',
                'speaker',
                'talk'
            ]
        },
        {
            'icons': [
                'ios-microphone',
                'md-microphone'
            ],
            'tags': [
                'microphone',
                'music',
                'noise',
                'recorde',
                'sound',
                'speak'
            ]
        },
        {
            'icons': [
                'ios-moon',
                'md-moon'
            ],
            'tags': [
                'dark',
                'moon',
                'night',
                'sky'
            ]
        },
        {
            'icons': [
                'ios-more',
                'md-more'
            ],
            'tags': [
                'more',
                'options'
            ]
        },
        {
            'icons': [
                'ios-move',
                'md-move'
            ],
            'tags': [
                'move'
            ]
        },
        {
            'icons': [
                'ios-musical-note',
                'md-musical-note'
            ],
            'tags': [
                'listening',
                'musical',
                'noise',
                'note',
                'play',
                'sound'
            ]
        },
        {
            'icons': [
                'ios-musical-notes',
                'md-musical-notes'
            ],
            'tags': [
                'listening',
                'musical',
                'noise',
                'notes',
                'play',
                'sound'
            ]
        },
        {
            'icons': [
                'ios-navigate',
                'md-navigate'
            ],
            'tags': [
                'gps',
                'location',
                'map',
                'navigate',
                'pin'
            ]
        },
        {
            'icons': [
                'ios-notifications-off',
                'md-notifications-off'
            ],
            'tags': [
                'notifications',
                'off'
            ]
        },
        {
            'icons': [
                'ios-notifications-outline',
                'md-notifications-outline'
            ],
            'tags': [
                'notifications'
            ]
        },
        {
            'icons': [
                'ios-notifications',
                'md-notifications'
            ],
            'tags': [
                'notifications'
            ]
        },
        {
            'icons': [
                'ios-nuclear',
                'md-nuclear'
            ],
            'tags': [
                'danger',
                'hazard',
                'nuclear',
                'warning'
            ]
        },
        {
            'icons': [
                'ios-nutrition',
                'md-nutrition'
            ],
            'tags': [
                'nutrition'
            ]
        },
        {
            'icons': [
                'ios-open',
                'md-open'
            ],
            'tags': [
                'open'
            ]
        },
        {
            'icons': [
                'ios-options',
                'md-options'
            ],
            'tags': [
                'options'
            ]
        },
        {
            'icons': [
                'ios-outlet',
                'md-outlet'
            ],
            'tags': [
                'computer',
                'digital',
                'electricity',
                'outlet'
            ]
        },
        {
            'icons': [
                'ios-paper-plane',
                'md-paper-plane'
            ],
            'tags': [
                'paper',
                'plane'
            ]
        },
        {
            'icons': [
                'ios-paper',
                'md-paper'
            ],
            'tags': [
                'feed',
                'paper',
                'paper'
            ]
        },
        {
            'icons': [
                'ios-partly-sunny',
                'md-partly-sunny'
            ],
            'tags': [
                'partly',
                'sunny'
            ]
        },
        {
            'icons': [
                'ios-pause',
                'md-pause'
            ],
            'tags': [
                'break',
                'freeze',
                'hold',
                'music',
                'pause'
            ]
        },
        {
            'icons': [
                'ios-paw',
                'md-paw'
            ],
            'tags': [
                'paw'
            ]
        },
        {
            'icons': [
                'ios-people',
                'md-people'
            ],
            'tags': [
                'head',
                'human',
                'people',
                'person',
                'stalker',
                'users'
            ]
        },
        {
            'icons': [
                'ios-person-add',
                'md-person-add'
            ],
            'tags': [
                'add',
                'head',
                'human',
                'member',
                'new',
                'person',
                'staff',
                'users'
            ]
        },
        {
            'icons': [
                'ios-person',
                'md-person'
            ],
            'tags': [
                'head',
                'human',
                'person',
                'staff',
                'users'
            ]
        },
        {
            'icons': [
                'ios-phone-landscape',
                'md-phone-landscape'
            ],
            'tags': [
                'landscape',
                'phone'
            ]
        },
        {
            'icons': [
                'ios-phone-portrait',
                'md-phone-portrait'
            ],
            'tags': [
                'phone',
                'portrait'
            ]
        },
        {
            'icons': [
                'ios-photos',
                'md-photos'
            ],
            'tags': [
                'images',
                'photos',
                'square',
                'stills'
            ]
        },
        {
            'icons': [
                'ios-pie',
                'md-pie'
            ],
            'tags': [
                'cog',
                'options',
                'pie',
                'settings'
            ]
        },
        {
            'icons': [
                'ios-pin',
                'md-pin'
            ],
            'tags': [
                'gps',
                'navigation',
                'pin'
            ]
        },
        {
            'icons': [
                'ios-pint',
                'md-pint'
            ],
            'tags': [
                'pint'
            ]
        },
        {
            'icons': [
                'ios-pizza',
                'md-pizza'
            ],
            'tags': [
                'drink',
                'eat',
                'food',
                'pizza'
            ]
        },
        {
            'icons': [
                'ios-planet',
                'md-planet'
            ],
            'tags': [
                'globe',
                'home',
                'nature',
                'planet',
                'planet',
                'space'
            ]
        },
        {
            'icons': [
                'ios-play-circle',
                'md-play-circle'
            ],
            'tags': [
                'play'
            ]
        },
        {
            'icons': [
                'ios-play',
                'md-play'
            ],
            'tags': [
                'arrow',
                'music',
                'play',
                'right',
                'watch'
            ]
        },
        {
            'icons': [
                'ios-podium',
                'md-podium'
            ],
            'tags': [
                'award',
                'compete',
                'competition',
                'lose',
                'podium',
                'win'
            ]
        },
        {
            'icons': [
                'ios-power',
                'md-power'
            ],
            'tags': [
                'off',
                'on',
                'power'
            ]
        },
        {
            'icons': [
                'ios-pricetag',
                'md-pricetag'
            ],
            'tags': [
                '$',
                'commerce',
                'items',
                'money',
                'pricetag',
                'shopping'
            ]
        },
        {
            'icons': [
                'ios-pricetags',
                'md-pricetags'
            ],
            'tags': [
                '$',
                'commerce',
                'items',
                'money',
                'pricetags',
                'shopping'
            ]
        },
        {
            'icons': [
                'ios-print',
                'md-print'
            ],
            'tags': [
                'print'
            ]
        },
        {
            'icons': [
                'ios-pulse',
                'md-pulse'
            ],
            'tags': [
                'hot',
                'live',
                'pulse',
                'rate'
            ]
        },
        {
            'icons': [
                'ios-qr-scanner',
                'md-qr-scanner'
            ],
            'tags': [
                'qr',
                'reader',
                'scanner'
            ]
        },
        {
            'icons': [
                'ios-quote',
                'md-quote'
            ],
            'tags': [
                'chat',
                'quotation',
                'quote'
            ]
        },
        {
            'icons': [
                'ios-radio-button-off',
                'md-radio-button-off'
            ],
            'tags': [
                'button',
                'off',
                'radio'
            ]
        },
        {
            'icons': [
                'ios-radio-button-on',
                'md-radio-button-on'
            ],
            'tags': [
                'button',
                'on',
                'radio'
            ]
        },
        {
            'icons': [
                'ios-radio',
                'md-radio'
            ],
            'tags': [
                'radio'
            ]
        },
        {
            'icons': [
                'ios-rainy',
                'md-rainy'
            ],
            'tags': [
                'cloud',
                'rainy',
                'water',
                'weather',
                'whether'
            ]
        },
        {
            'icons': [
                'ios-recording',
                'md-recording'
            ],
            'tags': [
                'film',
                'recording',
                'tape',
                'voicemail'
            ]
        },
        {
            'icons': [
                'ios-redo',
                'md-redo'
            ],
            'tags': [
                'forward',
                'redo'
            ]
        },
        {
            'icons': [
                'ios-refresh-circle',
                'md-refresh-circle'
            ],
            'tags': [
                'circle',
                'refresh'
            ]
        },
        {
            'icons': [
                'ios-refresh',
                'md-refresh'
            ],
            'tags': [
                'refresh',
                'reload',
                'renew',
                'reset'
            ]
        },
        {
            'icons': [
                'ios-remove-circle-outline',
                'md-remove-circle-outline'
            ],
            'tags': [
                'remove'
            ]
        },
        {
            'icons': [
                'ios-remove-circle',
                'md-remove-circle'
            ],
            'tags': [
                'circle',
                'remove'
            ]
        },
        {
            'icons': [
                'ios-remove',
                'md-remove'
            ],
            'tags': [
                'minus',
                'remove',
                'subtract'
            ]
        },
        {
            'icons': [
                'ios-reorder',
                'md-reorder'
            ],
            'tags': [
                'reorder'
            ]
        },
        {
            'icons': [
                'ios-repeat',
                'md-repeat'
            ],
            'tags': [
                'repeat'
            ]
        },
        {
            'icons': [
                'ios-resize',
                'md-resize'
            ],
            'tags': [
                'resize'
            ]
        },
        {
            'icons': [
                'ios-restaurant',
                'md-restaurant'
            ],
            'tags': [
                'restaurant'
            ]
        },
        {
            'icons': [
                'ios-return-left',
                'md-return-left'
            ],
            'tags': [
                'left',
                'return'
            ]
        },
        {
            'icons': [
                'ios-return-right',
                'md-return-right'
            ],
            'tags': [
                'return',
                'right'
            ]
        },
        {
            'icons': [
                'ios-reverse-camera',
                'md-reverse-camera'
            ],
            'tags': [
                'camera',
                'picture',
                'reverse'
            ]
        },
        {
            'icons': [
                'ios-rewind',
                'md-rewind'
            ],
            'tags': [
                'back',
                'music',
                'previous',
                'rewind'
            ]
        },
        {
            'icons': [
                'ios-ribbon',
                'md-ribbon'
            ],
            'tags': [
                'ribbon'
            ]
        },
        {
            'icons': [
                'ios-rocket',
                'md-rocket'
            ],
            'tags': [
                'rocket'
            ]
        },
        {
            'icons': [
                'ios-rose',
                'md-rose'
            ],
            'tags': [
                'rose'
            ]
        },
        {
            'icons': [
                'ios-sad',
                'md-sad'
            ],
            'tags': [
                'bad',
                'cry',
                'no',
                'sad'
            ]
        },
        {
            'icons': [
                'ios-save',
                'md-save'
            ],
            'tags': [
                'save'
            ]
        },
        {
            'icons': [
                'ios-school',
                'md-school'
            ],
            'tags': [
                'school'
            ]
        },
        {
            'icons': [
                'ios-search',
                'md-search'
            ],
            'tags': [
                'magnifyingglass',
                'search'
            ]
        },
        {
            'icons': [
                'ios-send',
                'md-send'
            ],
            'tags': [
                'email',
                'paper',
                'send'
            ]
        },
        {
            'icons': [
                'ios-settings',
                'md-settings'
            ],
            'tags': [
                'options',
                'settings'
            ]
        },
        {
            'icons': [
                'ios-share-alt',
                'md-share-alt'
            ],
            'tags': [
                'alt',
                'share'
            ]
        },
        {
            'icons': [
                'ios-share',
                'md-share'
            ],
            'tags': [
                'share'
            ]
        },
        {
            'icons': [
                'ios-shirt',
                'md-shirt'
            ],
            'tags': [
                'shirt'
            ]
        },
        {
            'icons': [
                'ios-shuffle',
                'md-shuffle'
            ],
            'tags': [
                'random',
                'shuffle'
            ]
        },
        {
            'icons': [
                'ios-skip-backward',
                'md-skip-backward'
            ],
            'tags': [
                'backward',
                'music',
                'previous',
                'skip'
            ]
        },
        {
            'icons': [
                'ios-skip-forward',
                'md-skip-forward'
            ],
            'tags': [
                'forward',
                'music',
                'next',
                'skip'
            ]
        },
        {
            'icons': [
                'ios-snow',
                'md-snow'
            ],
            'tags': [
                'snow'
            ]
        },
        {
            'icons': [
                'ios-speedometer',
                'md-speedometer'
            ],
            'tags': [
                'drive',
                'level',
                'speed',
                'speedometer'
            ]
        },
        {
            'icons': [
                'ios-square-outline',
                'md-square-outline'
            ],
            'tags': [
                'square'
            ]
        },
        {
            'icons': [
                'ios-square',
                'md-square'
            ],
            'tags': [
                'square'
            ]
        },
        {
            'icons': [
                'ios-star-half',
                'md-star-half'
            ],
            'tags': [
                'favorite',
                'half',
                'rate',
                'star'
            ]
        },
        {
            'icons': [
                'ios-star-outline',
                'md-star-outline'
            ],
            'tags': [
                'star'
            ]
        },
        {
            'icons': [
                'ios-star',
                'md-star'
            ],
            'tags': [
                'favorite',
                'star'
            ]
        },
        {
            'icons': [
                'ios-stats',
                'md-stats'
            ],
            'tags': [
                'stats'
            ]
        },
        {
            'icons': [
                'ios-stopwatch',
                'md-stopwatch'
            ],
            'tags': [
                'stopwatch'
            ]
        },
        {
            'icons': [
                'ios-subway',
                'md-subway'
            ],
            'tags': [
                'subway'
            ]
        },
        {
            'icons': [
                'ios-sunny',
                'md-sunny'
            ],
            'tags': [
                'light',
                'sky',
                'sunny',
                'weather',
                'whether'
            ]
        },
        {
            'icons': [
                'ios-swap',
                'md-swap'
            ],
            'tags': [
                'swap'
            ]
        },
        {
            'icons': [
                'ios-switch',
                'md-switch'
            ],
            'tags': [
                'switch'
            ]
        },
        {
            'icons': [
                'ios-sync',
                'md-sync'
            ],
            'tags': [
                'sync'
            ]
        },
        {
            'icons': [
                'ios-tablet-landscape',
                'md-tablet-landscape'
            ],
            'tags': [
                'landscape',
                'tablet'
            ]
        },
        {
            'icons': [
                'ios-tablet-portrait',
                'md-tablet-portrait'
            ],
            'tags': [
                'portrait',
                'tablet'
            ]
        },
        {
            'icons': [
                'ios-tennisball',
                'md-tennisball'
            ],
            'tags': [
                'tennisball'
            ]
        },
        {
            'icons': [
                'ios-text',
                'md-text'
            ],
            'tags': [
                'text'
            ]
        },
        {
            'icons': [
                'ios-thermometer',
                'md-thermometer'
            ],
            'tags': [
                'cold',
                'heat',
                'hot',
                'mercury',
                'temperature',
                'thermometer'
            ]
        },
        {
            'icons': [
                'ios-thumbs-down',
                'md-thumbs-down'
            ],
            'tags': [
                'down',
                'thumbs'
            ]
        },
        {
            'icons': [
                'ios-thumbs-up',
                'md-thumbs-up'
            ],
            'tags': [
                'thumbs',
                'up'
            ]
        },
        {
            'icons': [
                'ios-thunderstorm',
                'md-thunderstorm'
            ],
            'tags': [
                'cloudy',
                'lightning',
                'overcast',
                'rain',
                'sky',
                'storm',
                'thunderstorm',
                'weather',
                'whether'
            ]
        },
        {
            'icons': [
                'ios-time',
                'md-time'
            ],
            'tags': [
                'clock',
                'hour',
                'minute',
                'second',
                'time',
                'watch'
            ]
        },
        {
            'icons': [
                'ios-timer',
                'md-timer'
            ],
            'tags': [
                'clock',
                'timer'
            ]
        },
        {
            'icons': [
                'ios-today',
                'md-today'
            ],
            'tags': [
                'today'
            ]
        },
        {
            'icons': [
                'ios-train',
                'md-train'
            ],
            'tags': [
                'train'
            ]
        },
        {
            'icons': [
                'ios-transgender',
                'md-transgender'
            ],
            'tags': [
                'transgender'
            ]
        },
        {
            'icons': [
                'ios-trash',
                'md-trash'
            ],
            'tags': [
                'close',
                'delete',
                'remove',
                'trash'
            ]
        },
        {
            'icons': [
                'ios-trending-down',
                'md-trending-down'
            ],
            'tags': [
                'down',
                'trending'
            ]
        },
        {
            'icons': [
                'ios-trending-up',
                'md-trending-up'
            ],
            'tags': [
                'trending',
                'up'
            ]
        },
        {
            'icons': [
                'ios-trophy',
                'md-trophy'
            ],
            'tags': [
                'award',
                'compete',
                'competition',
                'lose',
                'trophy',
                'win'
            ]
        },
        {
            'icons': [
                'ios-tv',
                'md-tv'
            ],
            'tags': [
                'television',
                'tv'
            ]
        },
        {
            'icons': [
                'ios-umbrella',
                'md-umbrella'
            ],
            'tags': [
                'dry',
                'rain',
                'shelter',
                'umbrella',
                'wet'
            ]
        },
        {
            'icons': [
                'ios-undo',
                'md-undo'
            ],
            'tags': [
                'reply',
                'undo'
            ]
        },
        {
            'icons': [
                'ios-unlock',
                'md-unlock'
            ],
            'tags': [
                'unlock'
            ]
        },
        {
            'icons': [
                'ios-videocam',
                'md-videocam'
            ],
            'tags': [
                'camera',
                'film',
                'movie',
                'videocam'
            ]
        },
        {
            'icons': [
                'ios-volume-high',
                'md-volume-high'
            ],
            'tags': [
                'volume'
            ]
        },
        {
            'icons': [
                'ios-volume-low',
                'md-volume-low'
            ],
            'tags': [
                'volume'
            ]
        },
        {
            'icons': [
                'ios-volume-mute',
                'md-volume-mute'
            ],
            'tags': [
                'mute',
                'sound',
                'volume'
            ]
        },
        {
            'icons': [
                'ios-volume-off',
                'md-volume-off'
            ],
            'tags': [
                'off',
                'volume'
            ]
        },
        {
            'icons': [
                'ios-wallet',
                'md-wallet'
            ],
            'tags': [
                'cash',
                'money',
                'wallet'
            ]
        },
        {
            'icons': [
                'ios-walk',
                'md-walk'
            ],
            'tags': [
                'walk'
            ]
        },
        {
            'icons': [
                'ios-warning',
                'md-warning'
            ],
            'tags': [
                'warning'
            ]
        },
        {
            'icons': [
                'ios-watch',
                'md-watch'
            ],
            'tags': [
                'watch'
            ]
        },
        {
            'icons': [
                'ios-water',
                'md-water'
            ],
            'tags': [
                'water'
            ]
        },
        {
            'icons': [
                'ios-wifi',
                'md-wifi'
            ],
            'tags': [
                'bars',
                'connection',
                'internet',
                'wifi'
            ]
        },
        {
            'icons': [
                'ios-wine',
                'md-wine'
            ],
            'tags': [
                'wine'
            ]
        },
        {
            'icons': [
                'ios-woman',
                'md-woman'
            ],
            'tags': [
                'dudette',
                'female',
                'girl',
                'lady',
                'woman'
            ]
        },
        {
            'icons': [
                'logo-android'
            ],
            'tags': [
                'android'
            ]
        },
        {
            'icons': [
                'logo-angular'
            ],
            'tags': [
                'angular'
            ]
        },
        {
            'icons': [
                'logo-apple'
            ],
            'tags': [
                'apple'
            ]
        },
        {
            'icons': [
                'logo-bitbucket'
            ],
            'tags': [
                'bitbucket'
            ]
        },
        {
            'icons': [
                'logo-bitcoin'
            ],
            'tags': [
                'bitcoin'
            ]
        },
        {
            'icons': [
                'logo-buffer'
            ],
            'tags': [
                'buffer'
            ]
        },
        {
            'icons': [
                'logo-chrome'
            ],
            'tags': [
                'chrome'
            ]
        },
        {
            'icons': [
                'logo-closed-captioning'
            ],
            'tags': [
                'closed-captioning'
            ]
        },
        {
            'icons': [
                'logo-codepen'
            ],
            'tags': [
                'codepen'
            ]
        },
        {
            'icons': [
                'logo-css3'
            ],
            'tags': [
                'css3'
            ]
        },
        {
            'icons': [
                'logo-designernews'
            ],
            'tags': [
                'designernews'
            ]
        },
        {
            'icons': [
                'logo-dribbble'
            ],
            'tags': [
                'dribbble'
            ]
        },
        {
            'icons': [
                'logo-dropbox'
            ],
            'tags': [
                'dropbox'
            ]
        },
        {
            'icons': [
                'logo-euro'
            ],
            'tags': [
                'euro'
            ]
        },
        {
            'icons': [
                'logo-facebook'
            ],
            'tags': [
                'facebook'
            ]
        },
        {
            'icons': [
                'logo-flickr'
            ],
            'tags': [
                'flickr'
            ]
        },
        {
            'icons': [
                'logo-foursquare'
            ],
            'tags': [
                'foursquare'
            ]
        },
        {
            'icons': [
                'logo-freebsd-devil'
            ],
            'tags': [
                'freebsd-devil'
            ]
        },
        {
            'icons': [
                'logo-game-controller-a'
            ],
            'tags': [
                'controller',
                'game'
            ]
        },
        {
            'icons': [
                'logo-game-controller-b'
            ],
            'tags': [
                'controller',
                'game'
            ]
        },
        {
            'icons': [
                'logo-github'
            ],
            'tags': [
                'github'
            ]
        },
        {
            'icons': [
                'logo-google'
            ],
            'tags': [
                'google'
            ]
        },
        {
            'icons': [
                'logo-googleplus'
            ],
            'tags': [
                'googleplus'
            ]
        },
        {
            'icons': [
                'logo-hackernews'
            ],
            'tags': [
                'hackernews'
            ]
        },
        {
            'icons': [
                'logo-html5'
            ],
            'tags': [
                'html5'
            ]
        },
        {
            'icons': [
                'logo-instagram'
            ],
            'tags': [
                'instagram'
            ]
        },
        {
            'icons': [
                'logo-ionic'
            ],
            'tags': [
                'ionic'
            ]
        },
        {
            'icons': [
                'logo-ionitron'
            ],
            'tags': [
                'ionitron'
            ]
        },
        {
            'icons': [
                'logo-javascript'
            ],
            'tags': [
                'javascript'
            ]
        },
        {
            'icons': [
                'logo-linkedin'
            ],
            'tags': [
                'linkedin'
            ]
        },
        {
            'icons': [
                'logo-markdown'
            ],
            'tags': [
                'markdown'
            ]
        },
        {
            'icons': [
                'logo-model-s'
            ],
            'tags': [
                'model-s'
            ]
        },
        {
            'icons': [
                'logo-no-smoking'
            ],
            'tags': [
                'no-smoking'
            ]
        },
        {
            'icons': [
                'logo-nodejs'
            ],
            'tags': [
                'nodejs'
            ]
        },
        {
            'icons': [
                'logo-npm'
            ],
            'tags': [
                'npm'
            ]
        },
        {
            'icons': [
                'logo-octocat'
            ],
            'tags': [
                'octocat'
            ]
        },
        {
            'icons': [
                'logo-pinterest'
            ],
            'tags': [
                'pinterest'
            ]
        },
        {
            'icons': [
                'logo-playstation'
            ],
            'tags': [
                'playstation'
            ]
        },
        {
            'icons': [
                'logo-polymer'
            ],
            'tags': [
                'polymer'
            ]
        },
        {
            'icons': [
                'logo-python'
            ],
            'tags': [
                'python'
            ]
        },
        {
            'icons': [
                'logo-reddit'
            ],
            'tags': [
                'reddit'
            ]
        },
        {
            'icons': [
                'logo-rss'
            ],
            'tags': [
                'rss'
            ]
        },
        {
            'icons': [
                'logo-sass'
            ],
            'tags': [
                'sass'
            ]
        },
        {
            'icons': [
                'logo-skype'
            ],
            'tags': [
                'skype'
            ]
        },
        {
            'icons': [
                'logo-slack'
            ],
            'tags': [
                'slack'
            ]
        },
        {
            'icons': [
                'logo-snapchat'
            ],
            'tags': [
                'snapchat'
            ]
        },
        {
            'icons': [
                'logo-steam'
            ],
            'tags': [
                'steam'
            ]
        },
        {
            'icons': [
                'logo-tumblr'
            ],
            'tags': [
                'tumblr'
            ]
        },
        {
            'icons': [
                'logo-tux'
            ],
            'tags': [
                'tux'
            ]
        },
        {
            'icons': [
                'logo-twitch'
            ],
            'tags': [
                'twitch'
            ]
        },
        {
            'icons': [
                'logo-twitter'
            ],
            'tags': [
                'twitter'
            ]
        },
        {
            'icons': [
                'logo-usd'
            ],
            'tags': [
                'usd'
            ]
        },
        {
            'icons': [
                'logo-vimeo'
            ],
            'tags': [
                'vimeo'
            ]
        },
        {
            'icons': [
                'logo-vk'
            ],
            'tags': [
                'vk'
            ]
        },
        {
            'icons': [
                'logo-whatsapp'
            ],
            'tags': [
                'whatsapp'
            ]
        },
        {
            'icons': [
                'logo-windows'
            ],
            'tags': [
                'windows'
            ]
        },
        {
            'icons': [
                'logo-wordpress'
            ],
            'tags': [
                'wordpress'
            ]
        },
        {
            'icons': [
                'logo-xbox'
            ],
            'tags': [
                'xbox'
            ]
        },
        {
            'icons': [
                'logo-xing'
            ],
            'tags': [
                'xing'
            ]
        },
        {
            'icons': [
                'logo-yahoo'
            ],
            'tags': [
                'yahoo'
            ]
        },
        {
            'icons': [
                'logo-yen'
            ],
            'tags': [
                'yen'
            ]
        },
        {
            'icons': [
                'logo-youtube'
            ],
            'tags': [
                'youtube'
            ]
        }
    ]
};


/***/ }),

/***/ "./src/app/services/language.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _configs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @configs/config */ "./src/configs/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LanguageService = /** @class */ (function () {
    function LanguageService(translate) {
        this.translate = translate;
    }
    LanguageService.prototype.initializeLanguage = function () {
        this.translate.addLangs(_configs_config__WEBPACK_IMPORTED_MODULE_2__["config"].language.support);
        this.translate.setDefaultLang(_configs_config__WEBPACK_IMPORTED_MODULE_2__["config"].language.default);
        this.useBrowserLanguage();
    };
    LanguageService.prototype.useBrowserLanguage = function () {
        var browserLang = this.translate.getBrowserLang();
        this.useLanguage(browserLang.match(_configs_config__WEBPACK_IMPORTED_MODULE_2__["config"].language.support.join('|')) ?
            browserLang : _configs_config__WEBPACK_IMPORTED_MODULE_2__["config"].language.default);
    };
    LanguageService.prototype.useLanguage = function (lang) {
        this.translate.use(lang);
    };
    LanguageService.prototype.markdownPath = function (filePath) {
        return filePath + "." + this.translate.currentLang + ".md";
    };
    LanguageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "./src/app/services/util.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/app/services/icons.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    UtilService.prototype.getRandomIcon = function () {
        return _icons__WEBPACK_IMPORTED_MODULE_1__["icons"].icons[Math.floor(Math.random() * _icons__WEBPACK_IMPORTED_MODULE_1__["icons"].icons.length)];
    };
    UtilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/configs/config.ts":
/*!*******************************!*\
  !*** ./src/configs/config.ts ***!
  \*******************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
    language: {
        default: 'en',
        support: ['en', 'de']
    },
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mj/Dev/fivethree/web-components/fivethree/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map