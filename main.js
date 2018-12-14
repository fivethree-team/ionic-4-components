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
                    template: "<ion-menu-toggle auto-hide=\"false\">\n    <fiv-ripple>\n        <ion-item>\n            <fiv-icon [name]=\"icon\"></fiv-icon>\n            <ion-label>{{text}}</ion-label>\n        </ion-item>\n    </fiv-ripple>\n</ion-menu-toggle>\n<span *ngIf=\"hasShape()\" [ngClass]=\"getClasses()\" class=\"indicator\"></span>\n<ion-icon *ngIf=\"!hasShape()\" [ngClass]=\"position\" [name]=\"shape\" class=\"indicator\"></ion-icon>",
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
                    template: "<div class=\"bsc-wrapper\">\n  <span (click)=\"click()\" *ngIf=\"currentState !== states.Top && handle\" [fivCenter]=\"{vertical: false, horizontal: true}\" class=\"handle\"></span>\n  <div class=\"content\">\n    <ng-content>\n  \n    </ng-content>\n  </div>\n</div>\n\n\n\n\n",
                    styles: [":host{display:block;width:100%;height:100%}.bsc-wrapper{width:100%;height:100%}:host.rounded{border-top-left-radius:12px;border-top-right-radius:12px}.handle{display:block;background:var(--ion-color-light);border-radius:12px;top:8px;width:32px;height:8px;position:absolute}.content{margin-top:24px}"]
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
        // console.log('complete in', duration);
        // console.log('interval', duration / 100);
        // console.log('timer length', duration + duration / 50);
        // console.log('loop count', (duration + duration / 50) / (duration / 100));
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
        this.spinner.load();
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeLast"])(1))
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
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
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
                    styles: [":host{display:block}"]
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml2ZXRocmVlLWNvcmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvc3RlcC9zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwLWhlYWRlci9zdGVwLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwLWNvbnRlbnQvc3RlcC1jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwcGVyLWhvcml6b250YWwvc3RlcHBlci1ob3Jpem9udGFsLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL3JvdXRlci1pdGVtL3JvdXRlci1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9jb2xsYXBzYWJsZS1tZW51L2NvbGxhcHNhYmxlLW1lbnUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2NvbGxhcHNhYmxlLW1lbnUtYnV0dG9uL2NvbGxhcHNhYmxlLW1lbnUtYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvYm90dG9tLXNoZWV0L2RyYXdlci1zdGF0ZS50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9ib3R0b20tc2hlZXQtY29udGVudC9ib3R0b20tc2hlZXQtY29udGVudC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvbG9hZGluZy9sb2FkaW5nLnNlcnZpY2UudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvbG9hZGluZy1wcm9ncmVzcy1iYXIvbG9hZGluZy1wcm9ncmVzcy1iYXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2xvYWRpbmctYnV0dG9uL2xvYWRpbmctYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50L2xvYWRpbmctcmVmcmVzaGVyLWNvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2xvYWRpbmctY29udGVudC9sb2FkaW5nLWNvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2xvYWRpbmctZmFiL2xvYWRpbmctZmFiLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9hcHAtYmFyLXRhYi9hcHAtYmFyLXRhYi5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9kaXJlY3RpdmVzL2lmLXBsYXRmb3JtLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9kaXJlY3RpdmVzL2NlbnRlci5kaXJlY3RpdmUudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZGlyZWN0aXZlcy9wZXJtaXNzaW9ucy5kaXJlY3RpdmUudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvcmlwcGxlL3JpcHBsZS5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZGlyZWN0aXZlcy92aWV3cG9ydC5kaXJlY3RpdmUudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZGlyZWN0aXZlcy9wdWxsLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9pY29uL2ljb24uY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2FwcC1iYXItdGFiLWNvbnRlbnQvYXBwLWJhci10YWItY29udGVudC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvdG9vbGJhci1zZWFyY2gvdG9vbGJhci1zZWFyY2guY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZml2LWJ1dHRvbnMvZml2LWJ1dHRvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2V4cGFuZGFibGUtaW5kaWNhdG9yL2V4cGFuZGFibGUtaW5kaWNhdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9maXZldGhyZWUuY29yZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1zdGVwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBpc0xhc3QgPSBmYWxzZTtcbiAgQElucHV0KCkgb3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBzdWJ0aXRsZSA9ICcnO1xuXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0YXRlLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtc3RlcC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwLWhlYWRlci5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiByb3RhdGUnLCBbXG4gICAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdyb3RhdGUgPT4gbm9ybWFsJywgW1xuICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2UtaW4nKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgncm90YXRlJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGVaKDQ1ZGVnKScgfSkpLFxuICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlWigwZGVnKScgfSkpXG4gIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBpY29uU3RhdGUgPSAnbm9ybWFsJztcbiAgdGVtcEljb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgIHRoaXMudGVtcEljb24gPSB0aGlzLmljb247XG4gICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgdGhpcy5pY29uU3RhdGUgPSAnbm9ybWFsJztcbiAgICB9XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLmljb25TdGF0ZSA9ICdyb3RhdGUnO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pY29uID0gdGhpcy50ZW1wSWNvbjtcbiAgfVxuXG59XG4iLCJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIGtleWZyYW1lcyB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtZXhwYW5kYWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbmRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5kYWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignbGlzdEFuaW0nLCBbXG4gICAgICBzdGF0ZSgnb3BlbicsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIG9wYWNpdHk6IDEgfSkpLFxuICAgICAgc3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnMCcsIG9wYWNpdHk6IDAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignY2xvc2VkID0+IG9wZW4nLCBbXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIGVhc2Utb3V0Jywga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7IGhlaWdodDogJzAnLCBvcGFjaXR5OiAwLCBvZmZzZXQ6IDAgfSksXG4gICAgICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcqJywgb3BhY2l0eTogMC4xLCBvZmZzZXQ6IDAuOCB9KSxcbiAgICAgICAgICBzdHlsZSh7IGhlaWdodDogJyonLCBvcGFjaXR5OiAxLCBvZmZzZXQ6IDEgfSksXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdvcGVuID0+IGNsb3NlZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMjIwbXMgZWFzZS1vdXQnLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnKicsIG9wYWNpdHk6IDEsIG9mZnNldDogMCB9KSxcbiAgICAgICAgICBzdHlsZSh7IGhlaWdodDogJyonLCBvcGFjaXR5OiAwLjEsIG9mZnNldDogMC4yIH0pLFxuICAgICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnMCcsIG9wYWNpdHk6IDAsIG9mZnNldDogMSB9KSxcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5kYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaXNPcGVuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBmaXZXaWxsT3BlbjogRXZlbnRFbWl0dGVyPEV4cGFuZGFibGVDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2RGlkT3BlbjogRXZlbnRFbWl0dGVyPEV4cGFuZGFibGVDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2V2lsbENsb3NlOiBFdmVudEVtaXR0ZXI8RXhwYW5kYWJsZUNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmaXZEaWRDbG9zZTogRXZlbnRFbWl0dGVyPHsgZXhwYW5kYWJsZTogRXhwYW5kYWJsZUNvbXBvbmVudCwgcGFyYW06IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwYXJhbTogYW55O1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2U6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5maXZXaWxsT3Blbi5lbWl0KHRoaXMpO1xuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZShwYXJhbT86IGFueSkge1xuICAgIHRoaXMucGFyYW0gPSBwYXJhbTtcbiAgICB0aGlzLmZpdldpbGxDbG9zZS5lbWl0KHRoaXMpO1xuICAgIGNvbnNvbGUubG9nKCdjbG9zZScpO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgb25BbmltYXRpb25FbmQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnY2xvc2VkJykge1xuICAgICAgdGhpcy5maXZEaWRPcGVuLmVtaXQodGhpcyk7XG4gICAgfSBlbHNlIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdvcGVuJykge1xuICAgICAgdGhpcy5maXZEaWRDbG9zZS5lbWl0KHsgZXhwYW5kYWJsZTogdGhpcywgcGFyYW06IHRoaXMucGFyYW0gfSk7XG4gICAgICB0aGlzLnBhcmFtID0gbnVsbDtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RlcEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uL3N0ZXAtaGVhZGVyL3N0ZXAtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBhbmRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1zdGVwLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcC1jb250ZW50LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RlcENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgaXNMYXN0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzT3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBzdWJ0aXRsZSA9ICcnO1xuICBAT3V0cHV0KCkgZml2RGlkT3BlbjogRXZlbnRFbWl0dGVyPFN0ZXBDb250ZW50Q29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdkRpZENsb3NlOiBFdmVudEVtaXR0ZXI8U3RlcENvbnRlbnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2Q2xpY2s6IEV2ZW50RW1pdHRlcjxTdGVwQ29udGVudENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnc2VsZicpIHN0ZXA6IEV4cGFuZGFibGVDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2hlYWRlcicpIGhlYWRlcjogU3RlcEhlYWRlckNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZTogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIHRoaXMuaGVhZGVyLmNvbXBsZXRlKCk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmhlYWRlci5yZXNldCgpO1xuICB9XG5cbiAgYWZ0ZXJDbG9zZSgpIHtcbiAgICB0aGlzLmZpdkRpZENsb3NlLmVtaXQodGhpcyk7XG4gIH1cblxuICBhZnRlck9wZW4oKSB7XG4gICAgdGhpcy5maXZEaWRPcGVuLmVtaXQodGhpcyk7XG4gIH1cblxuICBjbGljaygpIHtcbiAgICB0aGlzLmZpdkNsaWNrLmVtaXQodGhpcyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFF1ZXJ5TGlzdCwgSW5wdXQsIFZpZXdDaGlsZCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0ZXBDb21wb25lbnQgfSBmcm9tICcuLi9zdGVwL3N0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IElvblNsaWRlcyB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0YXRlLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtc3RlcHBlci1ob3Jpem9udGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXBwZXItaG9yaXpvbnRhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0ZXBwZXItaG9yaXpvbnRhbC5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiByb3RhdGUnLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbigncm90YXRlID0+IG5vcm1hbCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZVooNDVkZWcpJyB9KSksXG4gICAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGVaKDBkZWcpJyB9KSlcbiAgICBdKV1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckhvcml6b250YWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNvbnRlbnRzOiBRdWVyeUxpc3Q8U3RlcENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlcycpIHNsaWRlczogSW9uU2xpZGVzO1xuICBAT3V0cHV0KCkgZml2U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNsaWRlcy5sb2NrU3dpcGVzKHRydWUpO1xuICB9XG5cbiAgY2xvc2UoKTogYW55IHtcbiAgICB0aGlzLnNsaWRlcy5zbGlkZVRvKDApO1xuICB9XG4gIG9wZW4oaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgY29uc29sZS5sb2coJ29wZW4gc2xpZGUnLCBpbmRleCk7XG4gICAgdGhpcy5zbGlkZXMubG9ja1N3aXBlcyhmYWxzZSk7XG4gICAgdGhpcy5zbGlkZXMuc2xpZGVUbyhpbmRleCk7XG4gICAgdGhpcy5zbGlkZXMubG9ja1N3aXBlcyh0cnVlKTtcblxuICB9XG5cbn1cbiIsImltcG9ydCB7IFN0ZXBDb21wb25lbnQgfSBmcm9tICcuLy4uL3N0ZXAvc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkcmVuLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIFZpZXdDaGlsZCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdGVwQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL3N0ZXAtY29udGVudC9zdGVwLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0ZXBwZXJIb3Jpem9udGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vc3RlcHBlci1ob3Jpem9udGFsL3N0ZXBwZXItaG9yaXpvbnRhbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtc3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcHBlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oU3RlcENvbXBvbmVudCkgY29udGVudHM6IFF1ZXJ5TGlzdDxTdGVwQ29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZHJlbihTdGVwQ29udGVudENvbXBvbmVudCkgc3RlcHM6IFF1ZXJ5TGlzdDxTdGVwQ29udGVudENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGQoU3RlcHBlckhvcml6b250YWxDb21wb25lbnQpIGhvcml6b250YWw6IFN0ZXBwZXJIb3Jpem9udGFsQ29tcG9uZW50O1xuICBASW5wdXQoKSBtb2RlOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ3ZlcnRpY2FsJztcbiAgQE91dHB1dCgpIGZpdkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBmaXZDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpbmRleDogbnVtYmVyLCBwYXJhbTogYW55IH0+KCk7XG5cbiAgY3VycmVudEluZGV4ID0gMDtcblxuICBwYXJhbTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvcGVuKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICBjb25zb2xlLmxvZygnKyMrIysnKTtcbiAgICAgIHRoaXMuaG9yaXpvbnRhbC5vcGVuKGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJyMjI29wZW4nLCB0aGlzLnN0ZXBzLCB0aGlzLnN0ZXBzLnRvQXJyYXkoKSwgaW5kZXgsIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XSk7XG4gICAgICBpZiAodGhpcy5zdGVwcy50b0FycmF5KClbaW5kZXhdKSB7XG4gICAgICAgIGlmICh0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF0uaXNPcGVuKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2lzIGFscmVhZHkgb3BlbicsIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XS5pc09wZW4pO1xuICAgICAgICAgIHRoaXMuY2xvc2UoaW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdpcyBjbG9zZWQnLCB0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF0uaXNPcGVuKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XS5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcjIyMjJywgaW5kZXgsIHRoaXMuc3RlcHMsIHRoaXMuc3RlcHMudG9BcnJheSgpKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGNsb3NlKGluZGV4OiBudW1iZXIsIHBhcmFtPzogYW55KSB7XG4gICAgdGhpcy5wYXJhbSA9IHBhcmFtO1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgdGhpcy5ob3Jpem9udGFsLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gLSAxO1xuICAgICAgdGhpcy5zdGVwcy50b0FycmF5KClbaW5kZXhdLmNsb3NlKCk7XG4gICAgfVxuXG4gIH1cblxuICBzZWxlY3QoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3QnLCBpbmRleCk7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmNvbnRlbnRzLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XG5cbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbihpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VBbGwoKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICB0aGlzLmhvcml6b250YWwuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgICBzdGVwLmNsb3NlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCkge1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMuc3RlcHMubGVuZ3RoID8gdGhpcy5jdXJyZW50SW5kZXggKyAxIDogLTE7XG4gICAgY29uc29sZS5sb2coJ25leHQgaW5kZXgnLCBuZXh0KTtcbiAgICB0aGlzLnNlbGVjdChuZXh0KTtcbiAgfVxuXG4gIHByZXZpb3VzKCkge1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLmN1cnJlbnRJbmRleCA+IDAgPyB0aGlzLmN1cnJlbnRJbmRleCArIC0xIDogLTE7XG4gICAgY29uc29sZS5sb2coJ25leHQgaW5kZXgnLCBuZXh0KTtcbiAgICB0aGlzLnNlbGVjdChuZXh0KTtcbiAgfVxuXG4gIGNvbXBsZXRlU3RlcChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAvLyBub3QgeWV0IGltcGxldGVudGVkXG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGVwcy50b0FycmF5KClbaW5kZXhdLmNvbXBsZXRlKCk7XG5cbiAgICB9XG4gIH1cblxuICByZXNldChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAvLyBub3QgeWV0IGltcGxldGVudGVkXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XS5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1yb3V0ZXItaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yb3V0ZXItaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JvdXRlci1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUm91dGVySXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG5cbiAgQElucHV0KCkgbmF2aWdhdGUgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHBhZ2VVcmw6IHN0cmluZztcblxuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIGFjdGl2ZSBzdGF0ZS5cbiAgICogRGVmYXVsdCB2YWx1ZSBpczogYFwibGVmdFwiYFxuICAgKi9cbiAgQElucHV0KCkgcG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICd0b3AnIHwgJ291dGxpbmUnID0gJ2xlZnQnO1xuXG4gIC8qKlxuICAgKiBUaGUgc2hhcGUgb2YgdGhlIGFjdGl2ZSBzdGF0ZS5cbiAgICogUG9zc2libGUgdmFsdWVzIGFyZTogYFwibGluZVwiYCwgYFwiZG90XCJgIGFuZCBhbnkgaW9uaWNvbi5cbiAgICogRGVmYXVsdCB2YWx1ZSBpczogYFwibGluZVwiYFxuICAgKi9cbiAgQElucHV0KCkgc2hhcGU6ICdsaW5lJyB8ICdkb3QnIHwgc3RyaW5nID0gJ2xpbmUnO1xuXG4gIEBJbnB1dCgpIG1hdGNoQ2hpbGRVcmwgPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uY2xpY2soKSB7XG4gICAgaWYgKHRoaXMubmF2aWdhdGUgJiYgdGhpcy5wYWdlVXJsKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucGFnZVVybCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBjbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMucG9zaXRpb259ICR7dGhpcy5zaGFwZX1gO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKSBnZXQgYWN0aXZlQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hBY3RpdmVVcmwoKSB8fCB0aGlzLmFjdGl2ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBoYXNTaGFwZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFwZSA9PT0gJ2xpbmUnXG4gICAgICB8fCB0aGlzLnNoYXBlID09PSAnZG90JztcbiAgfVxuXG4gIGdldENsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmhhc1NoYXBlKCkgPyBbdGhpcy5wb3NpdGlvbiwgdGhpcy5zaGFwZV0gOiBbdGhpcy5wb3NpdGlvbl07XG4gIH1cblxuICBtYXRjaEFjdGl2ZVVybCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tYXRjaENoaWxkVXJsID8gdGhpcy5pc0NoaWxkVXJsKCkgOiB0aGlzLmlzQ3VycmVudFVybCgpO1xuICB9XG5cbiAgaXNDdXJyZW50VXJsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci51cmwgPT09IHRoaXMucGFnZVVybDtcbiAgfVxuXG4gIGlzQ2hpbGRVcmwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLnVybC5zdGFydHNXaXRoKHRoaXMucGFnZVVybCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlU3R5bGUsIERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZml2Q29sbGFwc2VNZW51XScsXG4gIGV4cG9ydEFzOiAnbWVudUNvbGxhcHNlJ1xufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzYWJsZU1lbnVEaXJlY3RpdmUge1xuXG4gIGNvbGxhcHNlZCA9IGZhbHNlO1xuICBob3ZlcmluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBob3Zlck1lbnUgPSB0cnVlO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHsgfVxuXG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZScpXG4gIGdldCBteVN0eWxlKCk6IFNhZmVTdHlsZSB7XG4gICAgaWYgKHRoaXMuY29sbGFwc2VkICYmICh0aGlzLnBsYXRmb3JtLmlzKCd0YWJsZXQnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdlbGVjdHJvbicpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2Rlc2t0b3AnKSkpIHtcblxuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyXG4gICAgICAgIC5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJ21pbi13aWR0aDogNjRweDsgbWF4LXdpZHRoOiA2NHB4OyAtLWJvcmRlcjogMDsgdHJhbnNpdGlvbjogYWxsIGN1YmljLWJlemllciguNTUsMCwuMSwxKSAyMDBtczsnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgnLS1ib3JkZXI6IDA7IHRyYW5zaXRpb246IGFsbCBjdWJpYy1iZXppZXIoLjU1LDAsLjEsMSkgIDI1MG1zOycpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBob3ZlcigpIHtcbiAgICBpZiAodGhpcy5jb2xsYXBzZWQgJiYgIXRoaXMuaG92ZXJpbmcgJiYgdGhpcy5ob3Zlck1lbnUpIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgICAgdGhpcy5ob3ZlcmluZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIGJsdXIoKSB7XG4gICAgaWYgKCF0aGlzLmhvdmVyTWVudSkgeyByZXR1cm47IH1cbiAgICBpZiAoIXRoaXMuY29sbGFwc2VkICYmIHRoaXMuaG92ZXJpbmcpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5ob3ZlcmluZyA9IGZhbHNlO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGZpdkNvbGxhcHNlTWVudShjb2xsYXBzZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29sbGFwc2VkID0gY29sbGFwc2U7XG4gIH1cblxuXG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgaWYgKHRoaXMuaG92ZXJpbmcpIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgICAgdGhpcy5ob3ZlcmluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuY29sbGFwc2VkID0gdHJ1ZTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbGxhcHNhYmxlTWVudURpcmVjdGl2ZSB9IGZyb20gJy4uL2NvbGxhcHNhYmxlLW1lbnUvY29sbGFwc2FibGUtbWVudS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtY29sbGFwc2FibGUtbWVudS1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29sbGFwc2FibGUtbWVudS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb2xsYXBzYWJsZS1tZW51LWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNhYmxlTWVudUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbWVudTogQ29sbGFwc2FibGVNZW51RGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKCcjIyMnLCB0aGlzLm1lbnUpO1xuICAgIHRoaXMubWVudS50b2dnbGVNZW51KCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUGFzc3dvcmRDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LXBhc3N3b3JkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFzc3dvcmQuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcblxuICBASW5wdXQoKSBoaWRlSWNvbiA9ICdleWUtb2ZmJztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgcG9zaXRpb246ICdmbG9hdGluZycgfCAnaW5saW5lJyB8ICdmaXhlZCcgfCAnc3RhY2tlZCcgPSAnZmxvYXRpbmcnO1xuICBASW5wdXQoKSBzaG93OiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93SWNvbiA9ICdleWUnO1xuICBASW5wdXQoKSBjbGVhck9uRWRpdCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3Bhc3N3b3JkVmFsdWUgPSAnJztcbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4ge307XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRvZ2dsZVNob3dQYXNzd29yZCgpIHtcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICB9XG5cbiAgZ2V0IHBhc3N3b3JkVmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmRWYWx1ZTtcbiAgfVxuXG4gIHNldCBwYXNzd29yZFZhbHVlKHY6IGFueSkge1xuICAgIGlmICh2ICE9PSB0aGlzLl9wYXNzd29yZFZhbHVlKSB7XG4gICAgICB0aGlzLl9wYXNzd29yZFZhbHVlID0gdjtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLl9wYXNzd29yZFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gdGhpcy5fcGFzc3dvcmRWYWx1ZSkge1xuICAgICAgdGhpcy5fcGFzc3dvcmRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGJsdXIoKSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbn1cbiIsImV4cG9ydCBlbnVtIERyYXdlclN0YXRlIHtcbiAgICBCb3R0b20sXG4gICAgRG9ja2VkLFxuICAgIFRvcFxufVxuIiwiaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmF3ZXJTdGF0ZSB9IGZyb20gJy4uL2JvdHRvbS1zaGVldC9kcmF3ZXItc3RhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtYm90dG9tLXNoZWV0LWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYm90dG9tLXNoZWV0LWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ib3R0b20tc2hlZXQtY29udGVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0Q29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcm91bmRlZCA9IHRydWU7XG4gIEBJbnB1dCgpIGhhbmRsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGZsb2F0ID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgZml2SGFuZGxlQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGN1cnJlbnRTdGF0ZTogRHJhd2VyU3RhdGU7XG4gIHN0YXRlcyA9IERyYXdlclN0YXRlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mucm91bmRlZCcpIGdldCBpc1JvdW5kZWQoKTogYm9vbGVhbiB7XG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnRTdGF0ZSkge1xuICAgICAgY2FzZSBEcmF3ZXJTdGF0ZS5Ub3A6IHJldHVybiBmYWxzZTtcbiAgICAgIGNhc2UgRHJhd2VyU3RhdGUuRG9ja2VkOiByZXR1cm4gdGhpcy5yb3VuZGVkO1xuICAgICAgY2FzZSBEcmF3ZXJTdGF0ZS5Cb3R0b206IHJldHVybiB0aGlzLnJvdW5kZWQgJiYgIXRoaXMuZmxvYXQ7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZScpIGdldCBzdHlsZXMoKTogU2FmZVN0eWxlIHtcbiAgICBpZiAoISh0aGlzLmZsb2F0ICYmIHRoaXMuY3VycmVudFN0YXRlID09PSBEcmF3ZXJTdGF0ZS5Cb3R0b20pKSB7XG4gICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO2ApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdXBkYXRlU3RhdGUoc3RhdGU6IERyYXdlclN0YXRlKTogYW55IHtcbiAgICBjb25zb2xlLmxvZygnY29udGVudCBnb3Qgc3RhdGUnLCBzdGF0ZSk7XG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMuZml2SGFuZGxlQ2xpY2suZW1pdCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEJvdHRvbVNoZWV0Q29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL2JvdHRvbS1zaGVldC1jb250ZW50L2JvdHRvbS1zaGVldC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIENvbnRlbnRDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbUNvbnRyb2xsZXIsIFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0ICogYXMgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRHJhd2VyU3RhdGUgfSBmcm9tICcuL2RyYXdlci1zdGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1ib3R0b20tc2hlZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYm90dG9tLXNoZWV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYm90dG9tLXNoZWV0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQm90dG9tU2hlZXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBkb2NrZWRIZWlnaHQgPSA4MDtcblxuICBASW5wdXQoKSBzaG91bGRCb3VuY2UgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIGRpc3RhbmNlVG9wID0gNTY7XG5cbiAgQElucHV0KCkgdHJhbnNpdGlvbiA9ICcwLjI1cyBlYXNlLWluLW91dCc7XG5cbiAgQElucHV0KCkgc3RhdGU6IERyYXdlclN0YXRlID0gRHJhd2VyU3RhdGUuQm90dG9tO1xuXG4gIEBJbnB1dCgpIG1pbmltdW1IZWlnaHQgPSAyNDtcblxuICBAT3V0cHV0KCkgc3RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEcmF3ZXJTdGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdlclN0YXRlPigpO1xuICBAT3V0cHV0KCkgZml2T3BlbjogRXZlbnRFbWl0dGVyPEJvdHRvbVNoZWV0Q29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Qm90dG9tU2hlZXRDb21wb25lbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaXZEb2NrZWQ6IEV2ZW50RW1pdHRlcjxCb3R0b21TaGVldENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEJvdHRvbVNoZWV0Q29tcG9uZW50PigpO1xuICBAT3V0cHV0KCkgZml2Q2xvc2U6IEV2ZW50RW1pdHRlcjxCb3R0b21TaGVldENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEJvdHRvbVNoZWV0Q29tcG9uZW50PigpO1xuXG4gIEBDb250ZW50Q2hpbGQoQm90dG9tU2hlZXRDb250ZW50Q29tcG9uZW50KSBjb250ZW50OiBCb3R0b21TaGVldENvbnRlbnRDb21wb25lbnQ7XG5cbiAgcHJpdmF0ZSBfc3RhcnRQb3NpdGlvblRvcDogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IF9CT1VOQ0VfREVMVEEgPSAzMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZG9tQ3RybDogRG9tQ29udHJvbGxlcixcbiAgICBwcml2YXRlIF9wbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuICApIHsgfVxuXG5cbiAgLy8gQEhvc3RCaW5kaW5nKCdzdHlsZScpIGdldCBzdHlsZXMoKSB7XG4gIC8vICAgaWYgKHRoaXMucm91bmRlZCkge1xuICAvLyAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyXG4gIC8vICAgICAgIC5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4OyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDsnKTtcbiAgLy8gICB9XG5cbiAgLy8gfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9lbGVtZW50LCB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZpdi1ib3R0b20tZHJhd2VyLXNjcm9sbGFibGUtY29udGVudCAuc2Nyb2xsLXknKSk7XG4gICAgLy8gdGhpcy5fcmVuZGVyZXIuXG4gICAgLy8gICBzZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZpdi1ib3R0b20tZHJhd2VyLXNjcm9sbGFibGUtY29udGVudCAuc2Nyb2xsLXknKSwgJ3RvdWNoLWFjdGlvbicsICdub25lJyk7XG4gICAgdGhpcy5fc2V0RHJhd2VyU3RhdGUodGhpcy5zdGF0ZSk7XG5cbiAgICBjb25zdCBoYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgaGFtbWVyLmdldCgncGFuJykuc2V0KHsgZW5hYmxlOiB0cnVlLCBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fVkVSVElDQUwgfSk7XG4gICAgaGFtbWVyLm9uKCdwYW4gcGFuc3RhcnQgcGFuZW5kJywgKGV2OiBhbnkpID0+IHtcbiAgICAgIHN3aXRjaCAoZXYudHlwZSkge1xuICAgICAgICBjYXNlICdwYW5zdGFydCc6XG4gICAgICAgICAgdGhpcy5faGFuZGxlUGFuU3RhcnQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFuZW5kJzpcbiAgICAgICAgICB0aGlzLl9oYW5kbGVQYW5FbmQoZXYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuX2hhbmRsZVBhbihldik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbnRlbnQuZml2SGFuZGxlQ2xpY2tcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICBjYXNlIERyYXdlclN0YXRlLkJvdHRvbTogcmV0dXJuIHRoaXMuZG9jaygpO1xuICAgICAgICAgIGNhc2UgRHJhd2VyU3RhdGUuRG9ja2VkOiByZXR1cm4gdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCFjaGFuZ2VzLnN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NldERyYXdlclN0YXRlKGNoYW5nZXMuc3RhdGUuY3VycmVudFZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZUNvbnRlbnQoY2hhbmdlcy5zdGF0ZS5jdXJyZW50VmFsdWUpO1xuICB9XG5cbiAgdXBkYXRlQ29udGVudChzdGF0ZTogRHJhd2VyU3RhdGUpIHtcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLmNvbnRlbnQudXBkYXRlU3RhdGUoc3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldERyYXdlclN0YXRlKHN0YXRlOiBEcmF3ZXJTdGF0ZSkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCB0aGlzLnRyYW5zaXRpb24pO1xuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgIGNhc2UgRHJhd2VyU3RhdGUuQm90dG9tOlxuICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKCdjYWxjKDEwMHZoIC0gJyArIHRoaXMubWluaW11bUhlaWdodCArICdweCknKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERyYXdlclN0YXRlLkRvY2tlZDpcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSgodGhpcy5fcGxhdGZvcm0uaGVpZ2h0KCkgLSB0aGlzLmRvY2tlZEhlaWdodCkgKyAncHgnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKHRoaXMuZGlzdGFuY2VUb3AgKyAncHgnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVQYW5TdGFydCgpIHtcbiAgICB0aGlzLl9zdGFydFBvc2l0aW9uVG9wID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVBhbkVuZChldikge1xuICAgIGlmICh0aGlzLnNob3VsZEJvdW5jZSAmJiBldi5pc0ZpbmFsKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgdGhpcy50cmFuc2l0aW9uKTtcblxuICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNhc2UgRHJhd2VyU3RhdGUuRG9ja2VkOlxuICAgICAgICAgIHRoaXMuX2hhbmRsZURvY2tlZFBhbkVuZChldik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRHJhd2VyU3RhdGUuVG9wOlxuICAgICAgICAgIHRoaXMuX2hhbmRsZVRvcFBhbkVuZChldik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5faGFuZGxlQm90dG9tUGFuRW5kKGV2KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zdGF0ZUNoYW5nZS5lbWl0KHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlVG9wUGFuRW5kKGV2KSB7XG4gICAgaWYgKGV2LmRlbHRhWSA+IHRoaXMuX0JPVU5DRV9ERUxUQSkge1xuICAgICAgaWYgKHRoaXMubWluaW11bUhlaWdodCA9PT0gdGhpcy5kb2NrZWRIZWlnaHQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IERyYXdlclN0YXRlLkJvdHRvbSkge1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Cb3R0b207XG4gICAgICAgICAgdGhpcy5maXZDbG9zZS5lbWl0KHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gRHJhd2VyU3RhdGUuRG9ja2VkKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IERyYXdlclN0YXRlLkRvY2tlZDtcbiAgICAgICAgICB0aGlzLmZpdkRvY2tlZC5lbWl0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSh0aGlzLmRpc3RhbmNlVG9wICsgJ3B4Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlRG9ja2VkUGFuRW5kKGV2KSB7XG4gICAgY29uc3QgYWJzRGVsdGFZID0gTWF0aC5hYnMoZXYuZGVsdGFZKTtcbiAgICBpZiAoYWJzRGVsdGFZID4gdGhpcy5fQk9VTkNFX0RFTFRBICYmIGV2LmRlbHRhWSA8IDApIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBEcmF3ZXJTdGF0ZS5Ub3ApIHtcblxuICAgICAgICB0aGlzLnN0YXRlID0gRHJhd2VyU3RhdGUuVG9wO1xuICAgICAgICB0aGlzLmZpdk9wZW4uZW1pdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWJzRGVsdGFZID4gdGhpcy5fQk9VTkNFX0RFTFRBICYmIGV2LmRlbHRhWSA+IDApIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBEcmF3ZXJTdGF0ZS5Cb3R0b20pIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IERyYXdlclN0YXRlLkJvdHRvbTtcbiAgICAgICAgdGhpcy5maXZDbG9zZS5lbWl0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFRyYW5zbGF0ZVkoKHRoaXMuX3BsYXRmb3JtLmhlaWdodCgpIC0gdGhpcy5kb2NrZWRIZWlnaHQpICsgJ3B4Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQm90dG9tUGFuRW5kKGV2KSB7XG4gICAgaWYgKC1ldi5kZWx0YVkgPiB0aGlzLl9CT1VOQ0VfREVMVEEpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBEcmF3ZXJTdGF0ZS5Eb2NrZWQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IERyYXdlclN0YXRlLkRvY2tlZDtcbiAgICAgICAgdGhpcy5maXZEb2NrZWQuZW1pdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKCdjYWxjKDEwMHZoIC0gJyArIHRoaXMubWluaW11bUhlaWdodCArICdweCknKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVQYW4oZXYpIHtcbiAgICBjb25zdCBwb2ludGVyWSA9IGV2LmNlbnRlci55O1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCAnbm9uZScpO1xuICAgIGlmIChwb2ludGVyWSA+IDAgJiYgcG9pbnRlclkgPCB0aGlzLl9wbGF0Zm9ybS5oZWlnaHQoKSkge1xuICAgICAgaWYgKGV2LmFkZGl0aW9uYWxFdmVudCA9PT0gJ3BhbnVwJyB8fCBldi5hZGRpdGlvbmFsRXZlbnQgPT09ICdwYW5kb3duJykge1xuICAgICAgICBjb25zdCBuZXdUb3AgPSB0aGlzLl9zdGFydFBvc2l0aW9uVG9wICsgZXYuZGVsdGFZO1xuICAgICAgICBpZiAobmV3VG9wID49IHRoaXMuZGlzdGFuY2VUb3ApIHtcbiAgICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKG5ld1RvcCArICdweCcpO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld1RvcCA8IHRoaXMuZGlzdGFuY2VUb3ApIHtcbiAgICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKHRoaXMuZGlzdGFuY2VUb3AgKyAncHgnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VG9wID4gdGhpcy5fcGxhdGZvcm0uaGVpZ2h0KCkgLSB0aGlzLm1pbmltdW1IZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKCh0aGlzLl9wbGF0Zm9ybS5oZWlnaHQoKSAtIHRoaXMubWluaW11bUhlaWdodCkgKyAncHgnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFRyYW5zbGF0ZVkodmFsdWUpIHtcbiAgICB0aGlzLl9kb21DdHJsLndyaXRlKCgpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKCcgKyB2YWx1ZSArICcpJyk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Ub3A7XG4gICAgdGhpcy5fc2V0RHJhd2VyU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy51cGRhdGVDb250ZW50KHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IERyYXdlclN0YXRlLkJvdHRvbTtcbiAgICB0aGlzLl9zZXREcmF3ZXJTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnVwZGF0ZUNvbnRlbnQodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBkb2NrKCkge1xuICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Eb2NrZWQ7XG4gICAgdGhpcy5fc2V0RHJhd2VyU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy51cGRhdGVDb250ZW50KHRoaXMuc3RhdGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2VydmljZSB7XG5cbiAgcHVibGljIGxvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgcHVibGljIGxvYWRDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odGhpcy5sb2FkaW5nKTtcbiAgcHVibGljIGNvbXBsZXRlQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRoaXMuaXNDb21wbGV0ZSk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBsb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5sb2FkQ2hhbmdlLm5leHQodGhpcy5sb2FkaW5nKTtcbiAgfVxuXG4gIHVubG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxvYWRDaGFuZ2UubmV4dCh0aGlzLmxvYWRpbmcpO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgY29uc29sZS5sb2coJ3NldCBzZXJ2aWNlIGNvbXBsZXRlJyk7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICB0aGlzLmNvbXBsZXRlQ2hhbmdlLm5leHQodGhpcy5pc0NvbXBsZXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBBbmltYXRpb25CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gJy4uL2xvYWRpbmcvbG9hZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IHRpbWVyLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aW1lSW50ZXJ2YWwsIHBsdWNrLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtbG9hZGluZy1wcm9ncmVzcy1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy1wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLXByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcigncHJvZ3Jlc3NBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IGhlaWdodDogJzBweCcgfSksXG4gICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKCcyOTltcyBlYXNlLWluJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdwcm9ncmVzc0FuaW1MaW5lYXInLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnNjVtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMjk5bXMgZWFzZS1pbicsIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgbGVmdDogJy01JScsIHdpZHRoOiAnNSUnIH0pLFxuICAgICAgICBhbmltYXRlKCc4NTBtcyBlYXNlLW91dCcsIHN0eWxlKHsgbGVmdDogJzAlJywgd2lkdGg6ICcxMDAlJyB9KSlcbiAgICAgIF0pLFxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1Byb2dyZXNzQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgZ2xvYmFsID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgcHJvZ3Jlc3MgPSAwO1xuICBASW5wdXQoKSB2ZXJ0aWNhbEFsaWduOiAndG9wJyB8ICdib3R0b20nID0gJ3RvcCc7XG4gIEBPdXRwdXQoKSBmaXZDb21wbGV0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGZpdkRvbmVTaHJpbmtpbmc6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIGZpdlJlZnJlc2g6IEV2ZW50RW1pdHRlcjxMb2FkaW5nUHJvZ3Jlc3NCYXJDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nUHJvZ3Jlc3NCYXJDb21wb25lbnQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnYmFyJykgYmFyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdsaW5lYXInKSBsaW5lYXI6IEVsZW1lbnRSZWY7XG5cbiAgcGFyYW06IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbG9hZGluZ1NlcnZpY2U6IExvYWRpbmdTZXJ2aWNlLCBwcml2YXRlIGJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5jb21wbGV0ZUNoYW5nZS5zdWJzY3JpYmUoaXNDb21wbGV0ZSA9PiB7XG4gICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZ2xvYmFsKSB7XG4gICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmNvbXBsZXRlQ2hhbmdlLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICB9XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KHRoaXMpO1xuICB9XG5cbiAgdW5sb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmlzQ29tcGxldGUpIHtcbiAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBsZXRlKHBhcmFtOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnc2V0IGNvbXBsZXRlJyk7XG4gICAgdGhpcy5wYXJhbSA9IHBhcmFtO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgY29uc29sZS5sb2codGhpcy5pc0NvbXBsZXRlKTtcbiAgfVxuXG4gIGZpbGxBbmltYXRpb25Db21wbGV0ZShpc0NvbXBsZXRlOiBib29sZWFuKSB7XG4gICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmaWxsIGFuaW1hdGlvbiBjb21wbGV0ZScsIGlzQ29tcGxldGUpO1xuICAgICAgdGhpcy5maXZDb21wbGV0ZS5lbWl0KHRoaXMucGFyYW0pO1xuICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICB0aGlzLnBhcmFtID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLnVubG9hZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51bmxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRQcm9ncmVzcyhwcm9ncmVzcykge1xuICAgIGlmIChwcm9ncmVzcyA8IDApIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJvZ3Jlc3MgPiAxMDApIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICBjb25zb2xlLmxvZygnc2V0IHByb2dyZXNzJywgcHJvZ3Jlc3MpO1xuXG4gIH1cblxuICBpbmNyZW1lbnRCeShwcm9ncmVzcykge1xuICAgIHRoaXMuc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MgKyB0aGlzLnByb2dyZXNzKTtcbiAgfVxuXG4gIGRlY3JlbWVudEJ5KHByb2dyZXNzKSB7XG4gICAgdGhpcy5zZXRQcm9ncmVzcyhwcm9ncmVzcyArIHRoaXMucHJvZ3Jlc3MpO1xuICB9XG5cbiAgZmlsbEluKG1zOiBudW1iZXIpIHtcbiAgICAvLyBmaXJzdCBkZWZpbmUgYSByZXVzYWJsZSBhbmltYXRpb25cbiAgICBjb25zdCBteUFuaW1hdGlvbiA9IHRoaXMuYnVpbGRlci5idWlsZChbXG4gICAgICBzdHlsZSh7IHdpZHRoOiB0aGlzLnByb2dyZXNzIH0pLFxuICAgICAgYW5pbWF0ZShtcywgc3R5bGUoeyB3aWR0aDogJzEwMCUnIH0pKVxuICAgIF0pO1xuXG4gICAgLy8gdXNlIHRoZSByZXR1cm5lZCBmYWN0b3J5IG9iamVjdCB0byBjcmVhdGUgYSBwbGF5ZXJcbiAgICBjb25zdCBwbGF5ZXIgPSBteUFuaW1hdGlvbi5jcmVhdGUodGhpcy5saW5lYXIubmF0aXZlRWxlbWVudCk7XG5cbiAgICBwbGF5ZXIucGxheSgpO1xuICAgIGNvbnN0IHQgPSB0aW1lcigwLCBtcyAvICgxMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzID49IDEwMCkge1xuICAgICAgICAgIHJldHVybiB0LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9ncmVzcysrO1xuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudCBwcm9ncmVzcycsIHRoaXMucHJvZ3Jlc3MpO1xuICAgICAgfSk7XG4gICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLmZpdkNvbXBsZXRlLmVtaXQodHJ1ZSk7XG4gICAgICB0aGlzLnByb2dyZXNzID0gMTAwO1xuICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNocmlua0luKG1zOiBudW1iZXIpIHtcbiAgICAvLyBmaXJzdCBkZWZpbmUgYSByZXVzYWJsZSBhbmltYXRpb25cbiAgICB0aGlzLnByb2dyZXNzID0gMTAwO1xuICAgIGNvbnN0IG15QW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHsgd2lkdGg6IGAke3RoaXMucHJvZ3Jlc3N9JWAgfSksXG4gICAgICBhbmltYXRlKG1zLCBzdHlsZSh7IHdpZHRoOiAwIH0pKVxuICAgIF0pO1xuXG4gICAgLy8gdXNlIHRoZSByZXR1cm5lZCBmYWN0b3J5IG9iamVjdCB0byBjcmVhdGUgYSBwbGF5ZXJcbiAgICBjb25zdCBwbGF5ZXIgPSBteUFuaW1hdGlvbi5jcmVhdGUodGhpcy5saW5lYXIubmF0aXZlRWxlbWVudCk7XG5cbiAgICBjb25zdCB0ID0gdGltZXIoMCwgbXMgLyAoMTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA8PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2dyZXNzLS07XG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHByb2dyZXNzJywgdGhpcy5wcm9ncmVzcyk7XG4gICAgICB9KTtcblxuICAgIHBsYXllci5wbGF5KCk7XG4gICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLmZpdkRvbmVTaHJpbmtpbmcuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2FkaW5nUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuLi9sb2FkaW5nLXByb2dyZXNzLWJhci9sb2FkaW5nLXByb2dyZXNzLWJhci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtbG9hZGluZy1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGxvYWRpbmcgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdwcm9ncmVzcycpIHByb2dyZXNzOiBMb2FkaW5nUHJvZ3Jlc3NCYXJDb21wb25lbnQ7XG4gIEBJbnB1dCgpIGNvbG9yID0gJ2xpZ2h0JztcbiAgQElucHV0KCkgZXhwYW5kID0gJ2Jsb2NrJztcbiAgQElucHV0KCkgZmlsbCA9ICdzb2xpZCc7XG4gIEBJbnB1dCgpIHNpemUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIHNoYXBlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYnV0dG9uLWRpc2FibGVkJylcbiAgQElucHV0KClcbiAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKSB2ZXJ0aWNhbEFsaWduOiAndG9wJyB8ICdib3R0b20nID0gJ3RvcCc7XG5cbiAgQElucHV0KCkgdHlwZTogJ3N1Ym1pdCcgfCAncmVzZXQnIHwgJ2J1dHRvbicgPSAnYnV0dG9uJztcblxuICBAT3V0cHV0KCkgZml2UmVmcmVzaDogRXZlbnRFbWl0dGVyPExvYWRpbmdCdXR0b25Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2UmVmcmVzaENvbXBsZXRlOiBFdmVudEVtaXR0ZXI8TG9hZGluZ0J1dHRvbkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmaXZCdXR0b25DbGljazogRXZlbnRFbWl0dGVyPExvYWRpbmdCdXR0b25Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICB0b2dnbGVTcGlubmVyKCkge1xuICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgdGhpcy5wcm9ncmVzcy50b2dnbGVTcGlubmVyKCk7XG4gICAgdGhpcy5maXZSZWZyZXNoLmVtaXQodGhpcyk7XG4gIH1cblxuICBsb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5wcm9ncmVzcy5sb2FkKCk7XG4gIH1cblxuICB1bmxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5wcm9ncmVzcy51bmxvYWQoKTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MuY29tcGxldGUoe30pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ29tcGxldGUoaXNDb21wbGV0ZTogYm9vbGVhbikge1xuICAgIGNvbnNvbGUubG9nKCdvbiBjb21wbGV0ZScsIGlzQ29tcGxldGUpO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZml2UmVmcmVzaENvbXBsZXRlLmVtaXQodGhpcyk7XG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuZml2QnV0dG9uQ2xpY2suZW1pdCh0aGlzKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFuaW1hdGlvbkJ1aWxkZXIsIHN0eWxlLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyB0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3B0aW9uYWwsXG4gIEluamVjdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdDaGlsZCwgSG9zdEJpbmRpbmcsIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IHRpbWVyLCBpbnRlcnZhbCB9IGZyb20gJ3J4anMnO1xuY29uc3QgQkFTRV9TSVpFID0gMTAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtbG9hZGluZy1zcGlubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyddLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLndpZHRoLnB4XSc6ICdkaWFtZXRlcicsXG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ2RpYW1ldGVyJ1xuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1NwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc3RhdGljIGRpYW1ldGVycyA9IG5ldyBTZXQ8bnVtYmVyPihbQkFTRV9TSVpFXSk7XG4gIHByaXZhdGUgc3RhdGljIHN0eWxlVGFnOiBIVE1MU3R5bGVFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2RpYW1ldGVyID0gQkFTRV9TSVpFO1xuICBfc3Ryb2tlV2lkdGggPSAxMDtcbiAgX3ZhbHVlID0gMDtcblxuXG4gIEBPdXRwdXQoKSBmaXZQcm9ncmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgZml2Q29tcGxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPExvYWRpbmdTcGlubmVyQ29tcG9uZW50PigpO1xuICBAVmlld0NoaWxkKCdkZXRlcm1pbmF0ZUNpcmNsZScpIGRldGVybWluYXRlQ2lyY2xlOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBtb2RlOiAnaW5kZXRlcm1pbmF0ZScgfCAnZGV0ZXJtaW5hdGUnID0gJ2luZGV0ZXJtaW5hdGUnO1xuICBASW5wdXQoKSBjaXJjbGVSYWRpdXMgPSA0NTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgZ2V0IGNsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGUgKyAnIG1hdC1zcGlubmVyIG1hdC1wcm9ncmVzcy1zcGlubmVyIG1hdC1wcm9ncmVzcy1zcGlubmVyLWluZGV0ZXJtaW5hdGUtYW5pbWF0aW9uJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksIHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgY2hhbmdlOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBidWlsZGVyOiBBbmltYXRpb25CdWlsZGVyLCBwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnZXQgdmlld0JveCgpIHtcbiAgICBjb25zdCB2aWV3Qm94ID0gdGhpcy5jaXJjbGVSYWRpdXMgKiAyICsgdGhpcy5zdHJva2VXaWR0aDtcbiAgICByZXR1cm4gYDAgMCAke3ZpZXdCb3h9ICR7dmlld0JveH1gO1xuICB9XG5cbiAgLyoqIFRoZSBzdHJva2UgY2lyY3VtZmVyZW5jZSBvZiB0aGUgc3ZnIGNpcmNsZS4gKi9cbiAgZ2V0IHN0cm9rZUNpcmN1bWZlcmVuY2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMiAqIE1hdGguUEkgKiB0aGlzLmNpcmNsZVJhZGl1cztcbiAgfVxuXG4gIC8qKiBUaGUgZGFzaCBvZmZzZXQgb2YgdGhlIHN2ZyBjaXJjbGUuICovXG4gIGdldCBzdHJva2VEYXNoT2Zmc2V0KCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdkZXRlcm1pbmF0ZScpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0cm9rZUNpcmN1bWZlcmVuY2UgKiAoMTAwIC0gdGhpcy5fdmFsdWUpIC8gMTAwO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqIFN0cm9rZSB3aWR0aCBvZiB0aGUgY2lyY2xlIGluIHBlcmNlbnQuICovXG4gIGdldCBjaXJjbGVTdHJva2VXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJva2VXaWR0aCAvIHRoaXMuZGlhbWV0ZXIgKiAxMDA7XG4gIH1cblxuICAvKiogVmFsdWUgb2YgdGhlIHByb2dyZXNzIGNpcmNsZS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ2RldGVybWluYXRlJyA/IHRoaXMuX3ZhbHVlIDogMDtcbiAgfVxuICBzZXQgdmFsdWUobmV3VmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCAobmV3VmFsdWUpKSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZGlhbWV0ZXIoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2RpYW1ldGVyOyB9XG4gIHNldCBkaWFtZXRlcihzaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kaWFtZXRlciA9IHNpemU7XG5cbiAgICBpZiAoIUxvYWRpbmdTcGlubmVyQ29tcG9uZW50LmRpYW1ldGVycy5oYXModGhpcy5fZGlhbWV0ZXIpKSB7XG4gICAgICB0aGlzLl9hdHRhY2hTdHlsZU5vZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKiogU3Ryb2tlIHdpZHRoIG9mIHRoZSBwcm9ncmVzcyBzcGlubmVyLiAqL1xuICBASW5wdXQoKVxuICBnZXQgc3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3Ryb2tlV2lkdGggfHwgdGhpcy5kaWFtZXRlciAvIDEwO1xuICB9XG4gIHNldCBzdHJva2VXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3Ryb2tlV2lkdGggPSB2YWx1ZTtcbiAgfVxuXG5cbiAgLyoqIER5bmFtaWNhbGx5IGdlbmVyYXRlcyBhIHN0eWxlIHRhZyBjb250YWluaW5nIHRoZSBjb3JyZWN0IGFuaW1hdGlvbiBmb3IgdGhpcyBkaWFtZXRlci4gKi9cbiAgcHJpdmF0ZSBfYXR0YWNoU3R5bGVOb2RlKCk6IHZvaWQge1xuICAgIGxldCBzdHlsZVRhZyA9IExvYWRpbmdTcGlubmVyQ29tcG9uZW50LnN0eWxlVGFnO1xuXG4gICAgaWYgKCFzdHlsZVRhZykge1xuICAgICAgc3R5bGVUYWcgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgdGhpcy5fZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZVRhZyk7XG4gICAgICBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudC5zdHlsZVRhZyA9IHN0eWxlVGFnO1xuICAgIH1cblxuICAgIGlmIChzdHlsZVRhZyAmJiBzdHlsZVRhZy5zaGVldCkge1xuICAgICAgKHN0eWxlVGFnLnNoZWV0IGFzIENTU1N0eWxlU2hlZXQpLmluc2VydFJ1bGUodGhpcy5fZ2V0QW5pbWF0aW9uVGV4dCgpLCAwKTtcbiAgICB9XG5cbiAgICBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudC5kaWFtZXRlcnMuYWRkKHRoaXMuZGlhbWV0ZXIpO1xuICB9XG5cblxuICAvKiogR2VuZXJhdGVzIGFuaW1hdGlvbiBzdHlsZXMgYWRqdXN0ZWQgZm9yIHRoZSBzcGlubmVyJ3MgZGlhbWV0ZXIuICovXG4gIHByaXZhdGUgX2dldEFuaW1hdGlvblRleHQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBJTkRFVEVSTUlOQVRFX0FOSU1BVElPTl9URU1QTEFURSA9IGBcbiAgICBAa2V5ZnJhbWVzIG1hdC1wcm9ncmVzcy1zcGlubmVyLXN0cm9rZS1yb3RhdGUtRElBTUVURVIge1xuICAgICAgIDAlICAgICAgeyBzdHJva2UtZGFzaG9mZnNldDogU1RBUlRfVkFMVUU7ICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuICAgICAgIDEyLjUlICAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuICAgICAgIDEyLjUwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZSg3Mi41ZGVnKTsgfVxuICAgICAgIDI1JSAgICAgeyBzdHJva2UtZGFzaG9mZnNldDogU1RBUlRfVkFMVUU7ICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGUoNzIuNWRlZyk7IH1cbiAgICAgICAyNS4wMDAxJSAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgfVxuICAgICAgIDM3LjUlICAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpOyB9XG4gICAgICAgMzcuNTAwMSUgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IEVORF9WQUxVRTsgICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDE2MS41ZGVnKTsgfVxuICAgICAgIDUwJSAgICAgeyBzdHJva2UtZGFzaG9mZnNldDogU1RBUlRfVkFMVUU7ICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGUoMTYxLjVkZWcpOyB9XG4gICAgICAgNTAuMDAwMSUgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxuICAgICAgIDYyLjUlICAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XG4gICAgICAgNjIuNTAwMSUgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IEVORF9WQUxVRTsgICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDI1MS41ZGVnKTsgfVxuICAgICAgIDc1JSAgICAgeyBzdHJva2UtZGFzaG9mZnNldDogU1RBUlRfVkFMVUU7ICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGUoMjUxLjVkZWcpOyB9XG4gICAgICAgNzUuMDAwMSUgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XG4gICAgICAgODcuNSUgICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxuICAgICAgIDg3LjUwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZSgzNDEuNWRlZyk7IH1cbiAgICAgICAxMDAlICAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDM0MS41ZGVnKTsgfVxuICAgICB9XG4gICBgO1xuICAgIHJldHVybiBJTkRFVEVSTUlOQVRFX0FOSU1BVElPTl9URU1QTEFURVxuICAgICAgLy8gQW5pbWF0aW9uIHNob3VsZCBiZWdpbiBhdCA1JSBhbmQgZW5kIGF0IDgwJVxuICAgICAgLnJlcGxhY2UoL1NUQVJUX1ZBTFVFL2csIGAkezAuOTUgKiB0aGlzLnN0cm9rZUNpcmN1bWZlcmVuY2V9YClcbiAgICAgIC5yZXBsYWNlKC9FTkRfVkFMVUUvZywgYCR7MC4yICogdGhpcy5zdHJva2VDaXJjdW1mZXJlbmNlfWApXG4gICAgICAucmVwbGFjZSgvRElBTUVURVIvZywgYCR7dGhpcy5kaWFtZXRlcn1gKTtcbiAgfVxuXG5cbiAgY29tcGxldGVJbihkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgdGhpcy5tb2RlID0gJ2RldGVybWluYXRlJztcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2NvbXBsZXRlIGluJywgZHVyYXRpb24pO1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbnRlcnZhbCcsIGR1cmF0aW9uIC8gMTAwKTtcbiAgICAvLyBjb25zb2xlLmxvZygndGltZXIgbGVuZ3RoJywgZHVyYXRpb24gKyBkdXJhdGlvbiAvIDUwKTtcbiAgICAvLyBjb25zb2xlLmxvZygnbG9vcCBjb3VudCcsIChkdXJhdGlvbiArIGR1cmF0aW9uIC8gNTApIC8gKGR1cmF0aW9uIC8gMTAwKSk7XG5cbiAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLmJ1aWxkZXIuYnVpbGQoW1xuICAgICAgc3R5bGUoe1xuICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDE4MCxcbiAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgJ3N0cm9rZSc6ICcjREUzRTM1J1xuICAgICAgfSksXG4gICAgICBhbmltYXRlKGAke2R1cmF0aW9ufW1zIGVhc2Utb3V0YCwgc3R5bGUoe1xuICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDMxNSxcbiAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogMCxcbiAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAnc3Ryb2tlJzogJyMxQjlBNTknLFxuICAgICAgICAnb3BhY2l0eSc6IDBcbiAgICAgIH0pKVxuICAgIF0pO1xuXG4gICAgY29uc3QgcGxheWVyID0gYW5pbWF0aW9uLmNyZWF0ZSh0aGlzLmRldGVybWluYXRlQ2lyY2xlLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHBsYXllci5wbGF5KCk7XG4gICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLmZpdkNvbXBsZXRlLmVtaXQodGhpcyk7XG4gICAgICB0aGlzLl92YWx1ZSA9IDA7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGkgPSBpbnRlcnZhbChkdXJhdGlvbiAvIDEwMCk7XG4gICAgY29uc3QgdCA9IHRpbWVyKGR1cmF0aW9uICsgZHVyYXRpb24gLyA1MCk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBpLnBpcGUodGFrZVVudGlsKHQpKTtcblxuICAgIHByb2dyZXNzLnN1YnNjcmliZShwID0+IHtcbiAgICAgIHRoaXMuZml2UHJvZ3Jlc3MuZW1pdChwKTtcbiAgICB9KTtcblxuICB9XG4gIHNldFZhbHVlKHByb2dyZXNzOiBudW1iZXIpOiBhbnkge1xuICAgIHRoaXMubW9kZSA9ICdkZXRlcm1pbmF0ZSc7XG4gICAgdGhpcy5fdmFsdWUgPSBwcm9ncmVzcztcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBzcGluKCkge1xuICAgIHRoaXMubW9kZSA9ICdpbmRldGVybWluYXRlJztcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBzdG9wU3Bpbm5pbmcoKSB7XG4gICAgdGhpcy5fdmFsdWUgPSAwO1xuICAgIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHNldE1vZGUobW9kZSkge1xuICAgIHRoaXMubW9kZSA9IG1vZGU7XG4gICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG5cblxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZywgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlLCBBbmltYXRpb25CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4uL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWxvYWRpbmctcmVmcmVzaGVyLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy1yZWZyZXNoZXItY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctcmVmcmVzaGVyLWNvbnRlbnQuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2ZhYkFuaW0nLCBbXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSksXG4gICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKVxuICAgIF0pXG4gIF0pLFxuICB0cmlnZ2VyKCdzcGlubmVyQW5pbScsIFtcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSxcbiAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSkpXG4gICAgXSlcbiAgXSksXG4gIHRyaWdnZXIoJ3JvdGF0ZUFuaW0nLCBbXG4gICAgdHJhbnNpdGlvbignbm9ybWFsID0+IHJvdGF0ZScsIFtcbiAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCdyb3RhdGUgPT4gbm9ybWFsJywgW1xuICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicpXG4gICAgXSksXG4gICAgc3RhdGUoJ3JvdGF0ZScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKScgfSkpLFxuICAgIHN0YXRlKCdub3JtYWwnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAncm90YXRlWigwZGVnKScgfSkpXG4gIF0pLFxuICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICB0cmFuc2l0aW9uKCcqID0+IGZpbGwnLCBbXG4gICAgICBzdHlsZSh7XG4gICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMTgwLFxuICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiA5MCxcbiAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAnc3Ryb2tlJzogJyNERTNFMzUnXG4gICAgICB9KSxcbiAgICAgIGFuaW1hdGUoJzE0MDBtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgc3RhdGUoJ2ZpbGwnLCBzdHlsZSh7XG4gICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDMxNSxcbiAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDAsXG4gICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAnc3Ryb2tlJzogJyMxQjlBNTknLFxuICAgICAgJ29wYWNpdHknOiAwXG4gICAgfSlcbiAgICApXVxuICApXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBzcGluQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgZmFiQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbkNvbG9yID0gJyMwMDAnO1xuICBASW5wdXQoKSBjaGVja21hcmsgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgZml2Q29tcGxldGU6IEV2ZW50RW1pdHRlcjxMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50PigpO1xuICBAT3V0cHV0KCkgZml2UmVmcmVzaDogRXZlbnRFbWl0dGVyPExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaXZIaWRkZW46IEV2ZW50RW1pdHRlcjxMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50PigpO1xuICBAT3V0cHV0KCkgZml2U2hvd2VkOiBFdmVudEVtaXR0ZXI8TG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdlByb2dyZXNzOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3NwaW5uZXInKSBzcGlubmVyOiBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnYmFja2dyb3VuZCcpIGJhY2tncm91bmQ6IEVsZW1lbnRSZWY7XG5cbiAgdmlzaWJsZSA9IGZhbHNlO1xuICBpY29uU3RhdGUgPSAnbm9ybWFsJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIHRoaXMuc3Bpbm5lci5zcGluKCk7XG4gICAgdGhpcy5maXZSZWZyZXNoLmVtaXQodGhpcyk7XG4gIH1cblxuICB1bmxvYWQoKSB7XG4gICAgdGhpcy5zcGlubmVyLnN0b3BTcGlubmluZygpO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgLy8gdGhpcy5zcGlubmVyLmNvbXBsZXRlSW4oNTAwKTtcbiAgICBpZiAodGhpcy5jaGVja21hcmspIHtcbiAgICAgIHRoaXMuaWNvblN0YXRlID0gJ3JvdGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuYnVpbGRlci5idWlsZChbXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLFxuICAgICAgICBhbmltYXRlKCcwbXMgZWFzZS1vdXQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9KSlcbiAgICAgIF0pO1xuXG4gICAgICBjb25zdCBwbGF5ZXIgPSBhbmltYXRpb24uY3JlYXRlKHRoaXMuYmFja2dyb3VuZC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICBwbGF5ZXIub25Eb25lKCgpID0+IHtcbiAgICAgICAgdGhpcy5maXZTaG93ZWQuZW1pdCh0aGlzKTtcbiAgICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHNjYWxlKDEpYDtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuYnVpbGRlci5idWlsZChbXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiB0cmFuc2Zvcm0gfSksXG4gICAgICAgIGFuaW1hdGUoJzE3NW1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSlcbiAgICAgIF0pO1xuXG4gICAgICBjb25zdCBwbGF5ZXIgPSBhbmltYXRpb24uY3JlYXRlKHRoaXMuYmFja2dyb3VuZC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICBwbGF5ZXIub25Eb25lKCgpID0+IHtcbiAgICAgICAgdGhpcy5maXZIaWRkZW4uZW1pdCh0aGlzKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHBsYXllci5kZXN0cm95KCk7XG5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZpbGxBbmltYXRpb25Eb25lKCkge1xuICAgIGlmICh0aGlzLmNoZWNrbWFyaykge1xuICAgICAgdGhpcy5pY29uU3RhdGUgPSAncm90YXRlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3N0Q29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VJY29uQW5kUmV2ZWFsKGV2ZW50LCBpY29uOiBzdHJpbmcpIHtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnbm9ybWFsJykge1xuICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICAgIHRoaXMuaWNvblN0YXRlID0gJ25vcm1hbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdyb3RhdGUnKSB7XG4gICAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBwb3N0Q29tcGxldGUoKSB7XG4gICAgdGhpcy51bmxvYWQoKTtcbiAgICB0aGlzLmZpdkNvbXBsZXRlLmVtaXQodGhpcyk7XG4gIH1cblxuICBzZXRWYWx1ZShwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgdGhpcy5zcGlubmVyLnNldFZhbHVlKHByb2dyZXNzKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc3Bpbm5lci5zZXRNb2RlKCdpbmRldGVybWluYXRlJyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLy4uL2xvYWRpbmctcmVmcmVzaGVyLWNvbnRlbnQvbG9hZGluZy1yZWZyZXNoZXItY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSwgQW5pbWF0aW9uQnVpbGRlciwgQW5pbWF0aW9uUGxheWVyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1sb2FkaW5nLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy1jb250ZW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gZmlsbCcsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMTgwLFxuICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAnc3Ryb2tlJzogJyNERTNFMzUnXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdmaWxsJywgc3R5bGUoe1xuICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDMxNSxcbiAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogMCxcbiAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAnc3Ryb2tlJzogJyMxQjlBNTknLFxuICAgICAgfSlcbiAgICAgICldXG4gICAgKSxcbiAgICB0cmlnZ2VyKCdzcGlubmVyQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdoaW50QW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDBweCkgdHJhbnNsYXRlWCgtNTAlKScgfSksXG4gICAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTEycHgpIHRyYW5zbGF0ZVgoLTUwJSknIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIHN0eWxlKHsgd2lkdGg6ICcxMTJweCcsIG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTEycHgpIHRyYW5zbGF0ZVgoLTUwJSknIH0pLFxuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcsIHN0eWxlKHsgd2lkdGg6ICc0MHB4JywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMTJweCkgdHJhbnNsYXRlWCgtNTAlKScgfSkpXG4gICAgICBdKSxcbiAgICBdXG4gICAgKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0NvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGhpbnRUZXh0ID0gJ25ldyBwb3N0cyc7XG4gIEBJbnB1dCgpIG1heFB1bGxIZWlnaHQgPSAxNjg7XG4gIEBJbnB1dCgpIG1pblB1bGxIZWlnaHQgPSAxMTI7XG4gIEBPdXRwdXQoKSBmaXZQcm9ncmVzc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2UmVmcmVzaDogRXZlbnRFbWl0dGVyPExvYWRpbmdDb250ZW50Q29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NwaW5uZXInKSBzcGlubmVyOiBMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudDtcbiAgaGludFZpc2libGUgPSBmYWxzZTtcbiAgY3VycmVudFByb2dyZXNzID0gMDtcblxuICByZWZyZXNoaW5nID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlciwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5yZWZyZXNoaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmNoYW5nZUFuaW1hdGlvblRvUHJvZ3Jlc3MoMTEyIC8gMTY4KTtcbiAgICB0aGlzLnNwaW5uZXIubG9hZCgpO1xuICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KHRoaXMpO1xuICB9XG5cbiAgY29tcGxldGVSZWZyZXNoKCkge1xuICAgIHRoaXMuc3Bpbm5lci5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZmlsbEFuaW1hdGlvbkRvbmUoKSB7XG4gICAgdGhpcy5zcGlubmVyLmhpZGUoKTtcbiAgfVxuXG5cbiAgc2hvd0hpbnQoKSB7XG4gICAgdGhpcy5oaW50VmlzaWJsZSA9IHRydWU7XG4gIH1cblxuICBvbkhpbnRDbGlja2VkKCkge1xuICAgIHRoaXMuaGludFZpc2libGUgPSBmYWxzZTtcbiAgfVxuXG4gIHBvc3RIaW50KGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC5mcm9tU3RhdGUgJiYgZXZlbnQudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLnNldFB1bGxBbmltYXRpb25Qcm9ncmVzcygxMTIgLyAxNjgpO1xuICAgICAgdGhpcy5zcGlubmVyLmxvYWQoKTtcbiAgICAgIHRoaXMucmVmcmVzaGluZyA9IHRydWU7XG4gICAgICB0aGlzLmZpdlJlZnJlc2guZW1pdCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXRQdWxsQW5pbWF0aW9uUHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgIHRoaXMuY3VycmVudFByb2dyZXNzID0gcHJvZ3Jlc3M7XG5cbiAgICBpZiAocHJvZ3Jlc3MgPCAxKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLlxuICAgICAgICBzZXRTdHlsZSh0aGlzLnNwaW5uZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHsxNjggKiBwcm9ncmVzc31weCkgcm90YXRlWigkezM2MCAqIHByb2dyZXNzfWRlZylgKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VBbmltYXRpb25Ub1Byb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuYnVpbGRlci5idWlsZChbXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke3RoaXMuY3VycmVudFByb2dyZXNzICogMTY4fXB4KSByb3RhdGVaKCR7MzYwICogdGhpcy5jdXJyZW50UHJvZ3Jlc3N9ZGVnKWAgfSksXG4gICAgICAgIGFuaW1hdGUoJzg1bXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke3Byb2dyZXNzICogMTY4fXB4KSByb3RhdGVaKCR7MzYwICogcHJvZ3Jlc3N9ZGVnKWAgfSkpXG4gICAgICBdKTtcblxuICAgICAgY29uc3QgcGxheWVyID0gYW5pbWF0aW9uLmNyZWF0ZSh0aGlzLnNwaW5uZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICBwbGF5ZXIub25Eb25lKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRQdWxsQW5pbWF0aW9uUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICAgICAgICBwbGF5ZXIuZGVzdHJveSgpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpdlB1bGwocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgIHRoaXMuc2V0UHVsbEFuaW1hdGlvblByb2dyZXNzKHByb2dyZXNzKTtcbiAgICB0aGlzLnNwaW5uZXIuc2hvdygpO1xuICAgIGNvbnN0IHZhbHVlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCBwcm9ncmVzcyAqIDEwMCAqIHRoaXMubWF4UHVsbEhlaWdodCAvIHRoaXMubWluUHVsbEhlaWdodCkpO1xuICAgIHRoaXMuc3Bpbm5lci5zZXRWYWx1ZSh2YWx1ZSAqIDAuODQpO1xuICB9XG5cbiAgb25SZWZyZXNoKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIHRoaXMuc3Bpbm5lci5sb2FkKCk7XG4gIH1cblxuICBmaXZDYW5jZWwoKSB7XG4gICAgdGhpcy5tb3ZlQmFjaygpO1xuICB9XG5cbiAgYWZ0ZXJTcGlubmVySGlkZSgpIHtcbiAgICB0aGlzLnNldFB1bGxBbmltYXRpb25Qcm9ncmVzcygwKTtcbiAgICB0aGlzLnJlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnNwaW5uZXIucmVzZXQoKTtcbiAgfVxuXG4gIG1vdmVCYWNrKCkge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuYnVpbGRlci5idWlsZChbXG4gICAgICBzdHlsZSh7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHt0aGlzLmN1cnJlbnRQcm9ncmVzcyAqIDE2OH1weCkgcm90YXRlWigkezM2MCAqIHRoaXMuY3VycmVudFByb2dyZXNzfWRlZylgIH0pLFxuICAgICAgYW5pbWF0ZSgnMTQ1bXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSByb3RhdGVaKDApJyB9KSlcbiAgICBdKTtcblxuICAgIGNvbnN0IHBsYXllciA9IGFuaW1hdGlvbi5jcmVhdGUodGhpcy5zcGlubmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgcGxheWVyLnBsYXkoKTtcbiAgICBwbGF5ZXIub25Eb25lKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0UHVsbEFuaW1hdGlvblByb2dyZXNzKDApO1xuICAgICAgdGhpcy5zcGlubmVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIHBsYXllci5kZXN0cm95KCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIG9uU3Bpbm5lclByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICB0aGlzLmZpdlByb2dyZXNzQ2hhbmdlZC5lbWl0KHByb2dyZXNzKTtcbiAgICB0aGlzLnJlbmRlcmVyLlxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgc2V0U3R5bGUodGhpcy5zcGlubmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7MTY4ICogdGhpcy5jdXJyZW50UHJvZ3Jlc3N9cHgpIHJvdGF0ZVooJHszNjAgKiBwcm9ncmVzcyAvIDIwMH1kZWcpYCk7XG4gIH1cblxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTG9hZGluZ1NwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuLi9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyB0aW1lciB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtbG9hZGluZy1mYWInLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy1mYWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLWZhYi5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbdHJpZ2dlcignZmFiQW5pbScsIFtcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSkpXG4gICAgXSlcbiAgXSksXG4gIHRyaWdnZXIoJ3NwaW5uZXJBbmltJywgW1xuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pLFxuICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSlcbiAgICBdKVxuICBdKSxcbiAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICB0cmFuc2l0aW9uKCdub3JtYWwgPT4gcm90YXRlJywgW1xuICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJ3JvdGF0ZSA9PiBub3JtYWwnLCBbXG4gICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLWluJylcbiAgICBdKSxcbiAgICBzdGF0ZSgncm90YXRlJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3JvdGF0ZVooNDVkZWcpJyB9KSksXG4gICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDBkZWcpJyB9KSlcbiAgXSksXG4gIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgIHRyYW5zaXRpb24oJyogPT4gZmlsbCcsIFtcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgIH0pLFxuICAgICAgYW5pbWF0ZSgnMTQwMG1zIGVhc2Utb3V0JylcbiAgICBdKSxcbiAgICBzdGF0ZSgnZmlsbCcsIHN0eWxlKHtcbiAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMzE1LFxuICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogMCxcbiAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICdzdHJva2UnOiAnIzFCOUE1OScsXG4gICAgICAnb3BhY2l0eSc6IDBcbiAgICB9KVxuICAgICldXG4gICldXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdGYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHZlcnRpY2FsPzogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nO1xuICBASW5wdXQoKSBob3Jpem9udGFsPzogJ2NlbnRlcicgfCAnc3RhcnQnIHwgJ2VuZCc7XG4gIEBJbnB1dCgpIGVkZ2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNsb3Q6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBzcGluQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgZmFiQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbkNvbG9yID0gJyMwMDAnO1xuICBASW5wdXQoKSBjaGVja21hcmsgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdmlzaWJsZSA9IHRydWU7XG5cbiAgQE91dHB1dCgpIGZpdkNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8TG9hZGluZ0ZhYkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExvYWRpbmdGYWJDb21wb25lbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoOiBFdmVudEVtaXR0ZXI8TG9hZGluZ0ZhYkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExvYWRpbmdGYWJDb21wb25lbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaXZIaWRkZW46IEV2ZW50RW1pdHRlcjxMb2FkaW5nRmFiQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGluZ0ZhYkNvbXBvbmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdlNob3c6IEV2ZW50RW1pdHRlcjxMb2FkaW5nRmFiQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGluZ0ZhYkNvbXBvbmVudD4oKTtcblxuICBAVmlld0NoaWxkKCdzcGlubmVyJykgc3Bpbm5lcjogTG9hZGluZ1NwaW5uZXJDb21wb25lbnQ7XG5cbiAgbG9hZGluZyA9IGZhbHNlO1xuICBpY29uU3RhdGUgPSAnbm9ybWFsJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgZ2V0IGNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBjb25zdCB2ZXJ0aWNhbENsYXNzID0gISF0aGlzLnZlcnRpY2FsID8gYGZhYi12ZXJ0aWNhbC0ke3RoaXMudmVydGljYWx9YCA6ICcnO1xuICAgIGNvbnN0IGhvcml6b250YWxDbGFzcyA9ICEhdGhpcy5ob3Jpem9udGFsID8gYGZhYi1ob3Jpem9udGFsLSR7dGhpcy5ob3Jpem9udGFsfWAgOiAnJztcbiAgICBjb25zdCBlZGdlQ2xhc3MgPSB0aGlzLmVkZ2UgPyBgZmFiLWVkZ2UtYCA6ICcnO1xuICAgIGNvbnN0IGRpc2FibGVkQ2xhc3MgPSB0aGlzLmRpc2FibGVkID8gYGJ1dHRvbi1kaXNhYmxlZGAgOiAnJztcblxuICAgIHJldHVybiBgJHt2ZXJ0aWNhbENsYXNzfSAke2hvcml6b250YWxDbGFzc30gJHtlZGdlQ2xhc3N9ICR7ZGlzYWJsZWRDbGFzc31gO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgaWYgKHRoaXMuaWNvbiAhPT0gJ21kLWNoZWNrbWFyaycpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgfVxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KHRoaXMpO1xuICB9XG5cbiAgdW5sb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgdGhpcy5zcGlubmVyLmNvbXBsZXRlSW4oMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgZmlsbEFuaW1hdGlvbkRvbmUoKSB7XG4gICAgdGhpcy5pY29uID0gJ21kLWNoZWNrbWFyayc7XG4gIH1cblxuICBjaGFuZ2VJY29uQW5kUmV2ZWFsKGV2ZW50LCBpY29uOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudCwgaWNvbik7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgICB0aGlzLmljb25TdGF0ZSA9ICdub3JtYWwnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAncm90YXRlJykge1xuICAgICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgcG9zdENvbXBsZXRlKCkge1xuICAgIGNvbnNvbGUubG9nKCdwb3N0IGNvbXBsZXRlJyk7XG4gICAgdGhpcy51bmxvYWQoKTtcbiAgICB0aGlzLmZpdkNvbXBsZXRlLmVtaXQodGhpcyk7XG4gIH1cblxuICByb3RhdGUocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGlubmVyLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgcm90YXRlWigke3Byb2dyZXNzIC8gMjAwICogMzYwfWRlZylgKTtcbiAgfVxuXG4gIGZhYkFuaW1Eb25lKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2ZhYiBhbmltIGRvbmUnLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLmZpdlNob3cuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLmZpdkhpZGRlbi5lbWl0KHRoaXMpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWFwcC1iYXItdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1iYXItdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLWJhci10YWIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBCYXJUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBocmVmOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBMb2FkaW5nRmFiQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9sb2FkaW5nLWZhYi9sb2FkaW5nLWZhYi5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsIElucHV0LFxuICBWaWV3Q2hpbGQsIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcEJhclRhYkNvbXBvbmVudCB9IGZyb20gJy4uL2FwcC1iYXItdGFiL2FwcC1iYXItdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBwQmFyVGl0bGVMYXlvdXQsIEFwcEJhckZhYlBvc2l0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1hcHAtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hcHAtYmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0IHtcblxuICBfZmFiVmlzaWJsZSA9IHRydWU7XG4gIGN1dG91dFZpc2libGUgPSB0cnVlO1xuICBfcG9zaXRpb246IEFwcEJhckZhYlBvc2l0aW9uO1xuICBsZWZ0ID0gZmFsc2U7XG4gIHJpZ2h0ID0gZmFsc2U7XG4gIHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgdGFic1JpZ2h0OiBBcHBCYXJUYWJDb21wb25lbnRbXTtcbiAgdGFic0xlZnQ6IEFwcEJhclRhYkNvbXBvbmVudFtdO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZhYicpIGZhYjogTG9hZGluZ0ZhYkNvbXBvbmVudDtcbiAgQElucHV0KCkgaWNvbiA9ICdtZC1hZGQnO1xuICBASW5wdXQoKSB0aXRsZUxheW91dDogQXBwQmFyVGl0bGVMYXlvdXQgPSAnaGlkZSc7XG4gIEBPdXRwdXQoKSBmaXZGYWJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8QXBwQmFyQ29tcG9uZW50PigpO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQXBwQmFyVGFiQ29tcG9uZW50KSB0YWJzOiBRdWVyeUxpc3Q8QXBwQmFyVGFiQ29tcG9uZW50PjtcblxuICBASW5wdXQoKVxuICBzZXQgcG9zaXRpb24ocG9zaXRpb246IEFwcEJhckZhYlBvc2l0aW9uKSB7XG4gICAgY29uc29sZS5sb2coJ3NldCBwb3NpdGlvbicsIHBvc2l0aW9uLCAhcG9zaXRpb24sIHRoaXMuX3Bvc2l0aW9uKTtcbiAgICBpZiAoIXBvc2l0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmZhYlZpc2libGUpIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZmFiVmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgaWYgKCF0aGlzLl9wb3NpdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgIHRoaXMub25GYWJIaWRkZW4oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcmVwYXJlVGFicyhwb3NpdGlvbik7XG4gICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgfVxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZhYlZpc2libGUoZmFiVmlzaWJsZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9mYWJWaXNpYmxlID09PSB0cnVlICYmIGZhYlZpc2libGUgPT09IGZhbHNlKSB7XG4gICAgICBjb25zb2xlLmxvZygnaGlkZSBmYWInKTtcbiAgICAgIHRoaXMuX2ZhYlZpc2libGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2ZhYlZpc2libGUgPT09IGZhbHNlICYmIGZhYlZpc2libGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY3V0b3V0VmlzaWJsZSA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fZmFiVmlzaWJsZSA9IHRydWU7XG4gICAgICB9LCAyNTApO1xuICAgIH1cbiAgfVxuICBnZXQgZmFiVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmFiVmlzaWJsZTtcbiAgfVxuXG5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMucHJlcGFyZVRhYnModGhpcy5wb3NpdGlvbik7XG4gIH1cblxuICBvbkZhYkhpZGRlbigpIHtcbiAgICBjb25zb2xlLmxvZygnZmFiIGhpZGRlbicpO1xuXG4gICAgY29uc29sZS5sb2coJ3RvIHZvaWQnKTtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uaW5nKSB7XG4gICAgICBjb25zb2xlLmxvZygnd2hpbGUgdHJhbnNpdGlvbmluZyB0byBwb3NpdGlvbicsIHRoaXMuX3Bvc2l0aW9uKTtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUgY3V0b3V0Jyk7XG4gICAgICB0aGlzLmN1dG91dFZpc2libGUgPSBmYWxzZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hvdyBjdXRvdXQgYWdhaW4nKTtcbiAgICAgICAgdGhpcy5jdXRvdXRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3Nob3cgZmFiIGFnYWluIGFuZCBlbmQgdHJhbnNpdGlvbicpO1xuICAgICAgICAgIHRoaXMuX2ZhYlZpc2libGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgICB9LCAyMjUpO1xuICAgICAgfSwgMjI1KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXRvdXRWaXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlVGFicyhwb3NpdGlvbjogQXBwQmFyRmFiUG9zaXRpb24pIHtcbiAgICBpZiAocG9zaXRpb24gPT09ICdjZW50ZXInKSB7XG4gICAgICB0aGlzLnRhYnNMZWZ0ID0gdGhpcy50YWJzLnRvQXJyYXkoKS5zbGljZSgwLCAyKTtcbiAgICAgIHRoaXMudGFic1JpZ2h0ID0gdGhpcy50YWJzLnRvQXJyYXkoKS5zbGljZSgyLCA0KTtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLnRhYnNMZWZ0ID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcbiAgICAgIHRoaXMudGFic1JpZ2h0ID0gW107XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICB0aGlzLnRhYnNMZWZ0ID0gW107XG4gICAgICB0aGlzLnRhYnNSaWdodCA9IHRoaXMudGFicy50b0FycmF5KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5fcG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9wb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICB0aGlzLmxlZnQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmYWJDbGljaygpIHtcbiAgICB0aGlzLmZpdkZhYkNsaWNrLmVtaXQodGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IFBsYXRmb3JtcyB9IGZyb20gJ0Bpb25pYy9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZpdklmXSdcbn0pXG5leHBvcnQgY2xhc3MgSWZQbGF0Zm9ybURpcmVjdGl2ZSB7XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLCBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcblxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZpdklmKHBsYXRmb3JtczogUGxhdGZvcm1zW10pIHtcblxuXG4gICAgbGV0IHNob3cgPSB0cnVlO1xuICAgIHBsYXRmb3Jtcy5mb3JFYWNoKHAgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzKHApKSB7XG4gICAgICAgIHNob3cgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdpZiBwbGF0Zm9ybXMnLCBwbGF0Zm9ybXMsIHNob3cpO1xuXG4gICAgaWYgKHNob3cpIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBIb3N0QmluZGluZywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlU3R5bGUsIERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZml2Q2VudGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgQ2VudGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgdmVydGljYWwgPSB0cnVlO1xuICBob3Jpem9udGFsID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlJylcbiAgZ2V0IG15U3R5bGUoKTogU2FmZVN0eWxlIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgY29uc3Qgc3R5bGUgPSBgcG9zaXRpb246IGFic29sdXRlOyAke3RoaXMudmVydGljYWwgJiYgdGhpcy5ob3Jpem9udGFsID8gJ3RvcDogNTAlOyBsZWZ0OiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpOycgOiB0aGlzLnZlcnRpY2FsID8gJ3RvcDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7JyA6ICdsZWZ0OiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsnfWA7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShzdHlsZSk7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgZml2Q2VudGVyKGNlbnRlcjogeyB2ZXJ0aWNhbDogYm9vbGVhbiwgaG9yaXpvbnRhbDogYm9vbGVhbiB9KSB7XG4gICAgaWYgKGNlbnRlcikge1xuICAgICAgdGhpcy52ZXJ0aWNhbCA9IGNlbnRlci52ZXJ0aWNhbDtcbiAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IGNlbnRlci5ob3Jpem9udGFsO1xuICAgIH1cblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2FwcGx5IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHBhcmVudCBoZXJlJyk7XG4gIH1cblxuXG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmaXZQZXJtaXNzaW9uc10nXG59KVxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25zRGlyZWN0aXZlIHtcblxuICBhbGxvd2VkUGVybWlzc2lvbnM6IHN0cmluZ1tdID0gW107XG4gIHVQZXJtaXNzaW9uczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBjb25zb2xlLmxvZygnY29uc3RydWN0b3IgUGVybWlzc2lvbnNkaXJlY3RpdmUnKTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBmaXZQZXJtaXNzaW9uc1VzZXJQZXJtaXNzaW9ucyh1c2VyUGVybWlzc2lvbnM6IHN0cmluZ1tdKSB7XG4gICAgY29uc29sZS5sb2coJ3VzZXJQZXJtaXNzaW9ucycsIHVzZXJQZXJtaXNzaW9ucyk7XG4gICAgdGhpcy51UGVybWlzc2lvbnMgPSB1c2VyUGVybWlzc2lvbnMgfHwgW107XG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG5cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmaXZQZXJtaXNzaW9ucyhhbGxvd2VkOiBzdHJpbmdbXSkge1xuICAgIGNvbnNvbGUubG9nKCdmaXZQZXJtaXNzaW9ucycsIGFsbG93ZWQpO1xuICAgIHRoaXMuYWxsb3dlZFBlcm1pc3Npb25zID0gYWxsb3dlZCB8fCBbXTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIGNoZWNrUGVybWlzc2lvbigpOiBib29sZWFuIHtcbiAgICBsZXQgc2hvdyA9IGZhbHNlO1xuICAgIHRoaXMudVBlcm1pc3Npb25zLmZvckVhY2gocm9sZSA9PiB7XG4gICAgICBpZiAodGhpcy5hbGxvd2VkUGVybWlzc2lvbnMuZmluZChhID0+IGEudG9VcHBlckNhc2UoKSA9PT0gcm9sZS50b1VwcGVyQ2FzZSgpKSkge1xuICAgICAgICBzaG93ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnaGFzIHJvbGUgcGVybWlzc2lvbicsIHRoaXMudVBlcm1pc3Npb25zLCB0aGlzLmFsbG93ZWRQZXJtaXNzaW9ucyk7XG4gICAgcmV0dXJuIHNob3c7XG4gIH1cblxuICB1cGRhdGVWaWV3KCkge1xuICAgIGlmICh0aGlzLmNoZWNrUGVybWlzc2lvbigpKSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RCaW5kaW5nLCBFdmVudEVtaXR0ZXIsIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdmaXYtcmlwcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JpcHBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JpcHBsZS5jb21wb25lbnQuc2NzcyddLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLnRvdWNoLWFjdGlvbl0nOiAnYXV0bycsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFJpcHBsZUNvbXBvbmVudCB7XG5cbiAgYXV0byA9ICdhdXRvJztcblxuICBwcml2YXRlIHJpcHBsZUFuaW1hdGlvbkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSByb3VuZCA9IGZhbHNlO1xuICBASW5wdXQoKSBob3ZlciA9IGZhbHNlO1xuICBAT3V0cHV0KCkgZml2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucG9zaXRpb24nKSBwb3NpdGlvbjtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBjbGlja0V2ZW50KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5yaXBwbGUoZXZlbnQpO1xuICAgIHRoaXMuZml2Q2xpY2suZW1pdChldmVudCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcigncHJlc3MnLCBbJyRldmVudCddKVxuICBQcmVzc0V2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5yaXBwbGUoZXZlbnQpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5yb3VuZCcpIGdldCBpc1JvdW5kKCkge1xuICAgIHJldHVybiAhIXRoaXMucm91bmQ7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5ob3ZlcicpIGdldCBjYW5Ib3ZlcigpIHtcbiAgICByZXR1cm4gISF0aGlzLmhvdmVyO1xuICB9XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cbiAgICBjb25zb2xlLmxvZygncmlwcGxlIGNvbnN0cnVjdG9yJyk7XG4gICAgdGhpcy5yaXBwbGVBbmltYXRpb25FdmVudC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDc1MClcbiAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucmlwcGxlJyksICdzaG93Jyk7XG4gICAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJpcHBsZVdyYXBwZXInKSwgJ3Nob3cnKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmlwcGxlKGV2ZW50KSB7XG4gICAgY29uc3QgcmlwcGxlID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaXBwbGUnKTtcbiAgICBpZiAoIXJpcHBsZSkge1xuICAgICAgdGhpcy5yaXBwbGVGYWN0b3J5KCk7XG4gICAgfVxuICAgIHRoaXMucmlwcGxlQW5pbWF0aW9uKHsgcGFnZVg6IGV2ZW50LnBhZ2VYLCBwYWdlWTogZXZlbnQucGFnZVkgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJpcHBsZUZhY3RvcnkoKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpICsgJ3B4JztcbiAgICBjb25zdCByaXBwbGVXcmFwcGVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHJpcHBsZVdyYXBwZXIsICdyaXBwbGVXcmFwcGVyJyk7XG4gICAgY29uc3QgcmlwcGxlID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhyaXBwbGUsICdyaXBwbGUnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJpcHBsZSwgJ2hlaWdodCcsIHJhZGl1cyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyaXBwbGUsICd3aWR0aCcsIHJhZGl1cyk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChyaXBwbGVXcmFwcGVyLCByaXBwbGUpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGFyZ2V0LCByaXBwbGVXcmFwcGVyKTtcbiAgfVxuXG4gIHJpcHBsZUFuaW1hdGlvbih7IHBhZ2VYLCBwYWdlWSB9KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcmlwcGxlID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5yaXBwbGUnKTtcbiAgICBjb25zdCByaXBwbGVXcmFwcGVyID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5yaXBwbGVXcmFwcGVyJyk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhyaXBwbGVXcmFwcGVyLCAnc2hvdycpO1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MocmlwcGxlLCAnc2hvdycpO1xuICAgIGNvbnN0IGxlZnQgPSBwYWdlWCAtIHJlY3QubGVmdCAtIHJpcHBsZS5vZmZzZXRXaWR0aCAvIDIgLSBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgKyAncHgnO1xuICAgIGNvbnN0IHRvcCA9IHBhZ2VZIC0gcmVjdC50b3AgLSByaXBwbGUub2Zmc2V0SGVpZ2h0IC8gMiAtIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgJ3B4JztcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJpcHBsZSwgJ3RvcCcsIHRvcCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyaXBwbGUsICdsZWZ0JywgbGVmdCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhyaXBwbGVXcmFwcGVyLCAnc2hvdycpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MocmlwcGxlLCAnc2hvdycpO1xuICAgIHRoaXMucmlwcGxlQW5pbWF0aW9uRXZlbnQuZW1pdCgpO1xuICB9XG5cblxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBBZnRlckNvbnRlbnRJbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIG1lcmdlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW9uQ29udGVudCB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuZXhwb3J0IGludGVyZmFjZSBJblZpZXdwb3J0RXZlbnQge1xuICB0YXJnZXQ6IEhUTUxFbGVtZW50O1xuICB2YWx1ZTogYm9vbGVhbjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZpdlZpZXdwb3J0XScsXG4gIGV4cG9ydEFzOiAndmlld3BvcnQnXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdwb3J0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBJbnB1dCgpIG9mZnNldCA9IDA7XG4gIEBPdXRwdXQoKSBmaXZBcHBlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPEluVmlld3BvcnRFdmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdkRpc2FwcGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8SW5WaWV3cG9ydEV2ZW50PigpO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHZpc2libGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgY29udGVudDogSW9uQ29udGVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJ2lvbi1jb250ZW50Jyk7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGNvbnRlbnQuc2Nyb2xsRXZlbnRzID0gdHJ1ZTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbG9zZXN0KCdpb24tY29udGVudCcpLCAnaW9uU2Nyb2xsJylcbiAgICAgIC5waXBlKG1lcmdlKGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKSksIGRlYm91bmNlVGltZSg1MCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2hlY2soKSk7XG5cbiAgICBjb25zb2xlLmxvZygndmlzaWJsZScsIHRoaXMudmlzaWJsZSwgZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgKyB0aGlzLm9mZnNldCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuXG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVjaygpIHtcbiAgICBjb25zdCBldmVudDogSW5WaWV3cG9ydEV2ZW50ID0ge1xuICAgICAgdGFyZ2V0OiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIHZhbHVlOlxuICAgICAgICBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSAmJlxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD1cbiAgICAgICAgd2luZG93LmlubmVySGVpZ2h0ICsgdGhpcy5vZmZzZXRcbiAgICB9O1xuXG4gICAgaWYgKGV2ZW50LnZhbHVlID09PSB0cnVlKSB7XG5cbiAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuZml2QXBwZWFyLmVtaXQoZXZlbnQpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuZml2RGlzYXBwZWFyLmVtaXQoZXZlbnQpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlzVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25Db250ZW50IH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHNraXBXaGlsZSwgdGFrZVVudGlsLCB0YWtlTGFzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZpdlB1bGxdJ1xufSlcbmV4cG9ydCBjbGFzcyBQdWxsRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBtaW5QdWxsSGVpZ2h0ID0gMTEyO1xuICBASW5wdXQoKSBtYXhQdWxsSGVpZ2h0ID0gMTY4O1xuICBASW5wdXQoKSBlbmFibGVkID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgZml2UmVmcmVzaCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZml2Q2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBmaXZQdWxsID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgc2Nyb2xsWTogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBjb250ZW50OiBJb25Db250ZW50KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuY29udGVudC5zY3JvbGxFdmVudHMgPSB0cnVlO1xuICAgIHRoaXMuY29udGVudC5nZXRTY3JvbGxFbGVtZW50KCkudGhlbihzID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsWSA9IHM7IC8vIG5lZWRlZCBmb3Igc2Nyb2xsVG9wXG4gICAgICB0aGlzLnNldHVwUGFuTGlzdGVuZXIoKTtcbiAgICB9KTtcblxuXG4gIH1cblxuICBwcml2YXRlIHNldHVwUGFuTGlzdGVuZXIoKSB7XG4gICAgY29uc3QgdG91Y2hzdGFydCQgPSBmcm9tRXZlbnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0b3VjaHN0YXJ0Jyk7XG4gICAgY29uc3QgdG91Y2htb3ZlJCA9IGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RvdWNobW92ZScpO1xuICAgIGNvbnN0IHRvdWNoZW5kJCA9IGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RvdWNoZW5kJyk7XG4gICAgY29uc3QgdG91Y2hjYW5jZWwkID0gZnJvbUV2ZW50KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndG91Y2hjYW5jZWwnKTtcbiAgICBjb25zdCBlbmQkID0gbWVyZ2UodG91Y2hlbmQkLCB0b3VjaGNhbmNlbCQpO1xuXG4gICAgY29uc3QgZHJhZ0F0VG9wID0gdG91Y2hzdGFydCRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoZSA9PiB0aGlzLnNjcm9sbFkuc2Nyb2xsVG9wID09PSAwICYmIHRoaXMuZW5hYmxlZClcbiAgICAgICk7XG5cbiAgICBjb25zdCBkcmFnVG9wRG93biA9IGRyYWdBdFRvcFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoc3RhcnQ6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0WSA9IHN0YXJ0LnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgcmV0dXJuIHRvdWNobW92ZSRcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBtYXAoKG1vdmU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRZID0gbW92ZS50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBzdGFydEV2ZW50OiBzdGFydCxcbiAgICAgICAgICAgICAgICAgIG1vdmVFdmVudDogbW92ZSxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0WTogc3RhcnRZLFxuICAgICAgICAgICAgICAgICAgY3VycmVudFk6IGN1cnJlbnRZLFxuICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBjdXJyZW50WSAtIHN0YXJ0WVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBza2lwV2hpbGUoZHJhZyA9PiBkcmFnLm9mZnNldCA8IDApLFxuICAgICAgICAgICAgICB0YWtlVW50aWwoZW5kJClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pKTtcblxuXG4gICAgZHJhZ1RvcERvd24uZm9yRWFjaChkcmFncyA9PiB7XG4gICAgICBkcmFncy5mb3JFYWNoKGRyYWcgPT4ge1xuICAgICAgICBkcmFnLm1vdmVFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBkcmFnLm9mZnNldCAvIDI7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCA+IHRoaXMubWF4UHVsbEhlaWdodCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2Zmc2V0IDw9IHRoaXMubWF4UHVsbEhlaWdodCkge1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maXZQdWxsLmVtaXQob2Zmc2V0IC8gdGhpcy5tYXhQdWxsSGVpZ2h0KTtcbiAgICAgIH0pO1xuXG4gICAgICBkcmFnc1xuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlTGFzdCgxKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoZHJhZyA9PiB7XG4gICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZHJhZy5vZmZzZXQgLyAyO1xuICAgICAgICAgIGNvbnN0IHJlZnJlc2ggPSBvZmZzZXQgPj0gdGhpcy5taW5QdWxsSGVpZ2h0O1xuICAgICAgICAgIGlmIChyZWZyZXNoKSB7XG4gICAgICAgICAgICB0aGlzLmZpdlJlZnJlc2guZW1pdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpdkNhbmNlbC5lbWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBzdGF0ZSwgc3R5bGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ljb24uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdyb3RhdGVBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbignbm9ybWFsID0+IHJvdGF0ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdyb3RhdGUgPT4gbm9ybWFsJywgW1xuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLWluJylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ3JvdGF0ZScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdzY2FsZSgwKSByb3RhdGVaKDQ1ZGVnKScgfSkpLFxuICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdzY2FsZSgxKSByb3RhdGVaKDBkZWcpJyB9KSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdzY2FsZUFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IG5vcm1hbCcsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdub3JtYWwgPT4gc2NhbGUnLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignc2NhbGUgPT4gbm9ybWFsJywgW1xuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLWluJylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ3NjYWxlJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSksXG4gICAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9KSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIF9uYW1lOiBzdHJpbmc7XG4gIF9pbmRpY2F0b3JWYWx1ZSA9IC0xO1xuICB0ZW1wVmFsdWU6IG51bWJlcjtcbiAgc3RhdGU6ICdub3JtYWwnIHwgJ3JvdGF0ZScgPSAnbm9ybWFsJztcbiAgdGVtcDogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBAT3V0cHV0KCkgdHJhbnNpdGlvbkRvbmUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBpbmRpY2F0b3JTdGF0ZTogJ25vcm1hbCcgfCAnc2NhbGUnID0gJ3NjYWxlJztcbiAgaW5kaWNhdG9yVmFsdWVTdGF0ZTogJ25vcm1hbCcgfCAnc2NhbGUnID0gJ3NjYWxlJztcblxuICBASW5wdXQoKVxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9uYW1lKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGluZGljYXRvclZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGljYXRvclZhbHVlO1xuICB9XG4gIHNldCBpbmRpY2F0b3JWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy50cmFuc2Zvcm1JbmRpY2F0b3IodmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRyYW5zZm9ybShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRlbXAgPSBuYW1lO1xuICAgIHRoaXMuc3RhdGUgPSAncm90YXRlJztcbiAgfVxuXG4gIHRyYW5zZm9ybUluZGljYXRvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlID09PSAtMSkge1xuICAgICAgdGhpcy5faW5kaWNhdG9yVmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaW5kaWNhdG9yU3RhdGUgPSAnc2NhbGUnO1xuICAgICAgdGhpcy5pbmRpY2F0b3JWYWx1ZVN0YXRlID0gJ3NjYWxlJztcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICB0aGlzLnRlbXBWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5pbmRpY2F0b3JTdGF0ZSA9ICdub3JtYWwnO1xuICAgICAgdGhpcy5pbmRpY2F0b3JWYWx1ZVN0YXRlID0gJ3NjYWxlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbmRpY2F0b3JTdGF0ZSA9ICdzY2FsZSc7XG4gICAgICBpZiAodGhpcy5pbmRpY2F0b3JWYWx1ZVN0YXRlID09PSAnc2NhbGUnKSB7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yVmFsdWVTdGF0ZSA9ICdub3JtYWwnO1xuICAgICAgICB0aGlzLl9pbmRpY2F0b3JWYWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50ZW1wVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3JWYWx1ZVN0YXRlID0gJ3NjYWxlJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cbiAgcm90YXRlQW5pbURvbmUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnbm9ybWFsJyAmJiBldmVudC50b1N0YXRlID09PSAncm90YXRlJykge1xuICAgICAgdGhpcy5fbmFtZSA9IHRoaXMudGVtcDtcbiAgICAgIHRoaXMuc3RhdGUgPSAnbm9ybWFsJztcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAncm90YXRlJyAmJiBldmVudC50b1N0YXRlID09PSAnbm9ybWFsJykge1xuICAgICAgdGhpcy50cmFuc2l0aW9uRG9uZS5lbWl0KHRoaXMuX25hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGluY3JlbWVudERvbmUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnbm9ybWFsJyAmJiBldmVudC50b1N0YXRlID09PSAnc2NhbGUnKSB7XG4gICAgICBpZiAodGhpcy50ZW1wVmFsdWUgPiAwKSB7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yVmFsdWVTdGF0ZSA9ICdub3JtYWwnO1xuICAgICAgICB0aGlzLl9pbmRpY2F0b3JWYWx1ZSA9IHRoaXMudGVtcFZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yVmFsdWUgPSB0aGlzLnRlbXBWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGlhbG9nQW5pbScsIFtcbiAgICAgIHN0YXRlKCdib3R0b20nLCBzdHlsZSh7IGJvdHRvbTogMCB9KSksXG4gICAgICBzdGF0ZSgndG9wJywgc3R5bGUoeyB0b3A6IDAgfSkpLFxuICAgICAgc3RhdGUoJ2NlbnRlcicsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKSdcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdib3R0b20tc2xpZGUnLCBzdHlsZSh7IGJvdHRvbTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScgfSkpLFxuICAgICAgc3RhdGUoJ3RvcC1zbGlkZScsIHN0eWxlKHsgdG9wOiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKScgfSkpLFxuICAgICAgc3RhdGUoJ2NlbnRlci1zbGlkZScsIHN0eWxlKFxuICAgICAgICB7IGJvdHRvbTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScgfVxuICAgICAgKSksXG4gICAgICBzdGF0ZSgnYm90dG9tLWZhZGUnLCBzdHlsZSh7IGJvdHRvbTogMCwgb3BhY2l0eTogMCB9KSksXG4gICAgICBzdGF0ZSgndG9wLWZhZGUnLCBzdHlsZSh7IHRvcDogMCwgb3BhY2l0eTogMCwgZGlzcGxheTogJ25vbmUnIH0pKSxcbiAgICAgIHN0YXRlKCdjZW50ZXItZmFkZScsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gKicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB2ZXJ0aWNhbEFsaWduOiAnYm90dG9tJyB8ICdjZW50ZXInIHwgJ3RvcCcgPSAnY2VudGVyJztcbiAgQElucHV0KCkgYW5pbWF0aW9uOiAnc2xpZGUnIHwgJ2ZhZGUnID0gJ2ZhZGUnO1xuICB2aXNpYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGJhY2tkcm9wOiB0cnVlO1xuICBAT3V0cHV0KCkgZml2Q2xvc2U6IEV2ZW50RW1pdHRlcjxEaWFsb2dDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2T3BlbjogRXZlbnRFbWl0dGVyPERpYWxvZ0NvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy52aXNpYmxlJykgZ2V0IGlzVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlO1xuICB9XG5cblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cblxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQXBwQmFyVGl0bGVMYXlvdXQgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWFwcC1iYXItdGFiLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLWJhci10YWItY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC1iYXItdGFiLWNvbnRlbnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBCYXJUYWJDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgdGl0bGVMYXlvdXQ6IEFwcEJhclRpdGxlTGF5b3V0ID0gJ2hpZGUnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBnZXQgY2xhc3NlcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBgbGFiZWwtJHt0aGlzLnRpdGxlTGF5b3V0fWA7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdjogTmF2Q29udHJvbGxlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMubmF2Lm5hdmlnYXRlUm9vdCh0aGlzLmhyZWYpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTYWZlVXJsLCBTYWZlU3R5bGUsIERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlLCBBbmltYXRpb25CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIG1lcmdlLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5pbXBvcnQgeyBEb21Db250cm9sbGVyLCBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IGZsYXRNYXAsIHRhcCwgZmlsdGVyLCBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCwgdGFrZSwgcmVwZWF0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtaW1hZ2Utdmlld2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLXZpZXdlci5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignYmFja2Ryb3AnLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCB9KSxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICBhbmltYXRlKCc3NW1zIDEyNW1zIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICBhbmltYXRlKCcxMDBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdmYWRlJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignaW1hZ2VFbnRlcicsIFtcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICBzdHlsZSh7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICd7e3RvcH19cHgnLCBsZWZ0OiAne3tsZWZ0fX1weCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLDApJywgaGVpZ2h0OiAne3toZWlnaHR9fXB4Jywgd2lkdGg6ICd7e3dpZHRofX1weCcgfSksXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgYW5pbWF0ZSgnMTUwbXMnLCBzdHlsZSh7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICc1MCUnLCBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsLTUwJSknLCBoZWlnaHQ6ICdhdXRvJywgd2lkdGg6ICcxMDAlJyB9KSlcbiAgICAgIF0sIHsgcGFyYW1zOiB7IHRvcDogJzBweCcsIGxlZnQ6ICcwcHgnLCBoZWlnaHQ6ICcqJywgd2lkdGg6ICcqJyB9IH0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignaW1hZ2VMZWF2ZScsIFtcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgc3R5bGUoeyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAne3twYW5Ub3B9fScsIGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwtNTAlKScsIGhlaWdodDogJ2F1dG8nLCB3aWR0aDogJzEwMCUnIH0pLFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgIGFuaW1hdGUoJzIyNW1zJywgc3R5bGUoeyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAne3t0b3B9fXB4JywgbGVmdDogJ3t7bGVmdH19cHgnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwwKScsIGhlaWdodDogJ3t7aGVpZ2h0fX1weCcsIHdpZHRoOiAne3t3aWR0aH19cHgnIH0pXG4gICAgICAgIClcbiAgICAgIF0sIHsgcGFyYW1zOiB7IHRvcDogJzBweCcsIGxlZnQ6ICcwcHgnLCBoZWlnaHQ6ICcqJywgd2lkdGg6ICcqJywgcGFuVG9wOiAnNTAlJyB9IH0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZScpXG4gIGdldCBteVN0eWxlKCk6IFNhZmVTdHlsZSB7XG4gICAgaWYgKHRoaXMuX2lzT3Blbikge1xuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgZGlzcGxheTogYmxvY2s7YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYGhlaWdodDogJHt0aGlzLmhlaWdodH1weDsgd2lkdGg6ICR7dGhpcy53aWR0aH1weDsgZGlzcGxheTogYmxvY2s7YCk7XG4gICAgfVxuICB9XG5cbiAgQFZpZXdDaGlsZCgndGh1bWJuYWlsJykgdGh1bWJuYWlsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdpbWFnZVZpZXcnKSBpbWFnZVZpZXc6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2Zvb3RlcicpIGZvb3RlcjogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgc3JjOiBTYWZlVXJsO1xuICBASW5wdXQoKSBoZWlnaHQ7XG4gIEBJbnB1dCgpIHdpZHRoO1xuICBASW5wdXQoKSBwdWxsRGlzdGFuY2UgPSAxNTA7XG4gIEBJbnB1dCgpIGFjdGlvbnM6IEltYWdlVmlld2VyQWN0aW9uW10gPSBbXTtcbiAgQE91dHB1dCgpIGZpdkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxJbWFnZVZpZXdlckNvbXBvbmVudD47XG4gIF9pc09wZW4gPSBmYWxzZTtcbiAgX2NvbnRyb2xzVmlzaWJsZSA9IHRydWU7XG4gIHRodW1ibmFpbFZpc2libGUgPSB0cnVlO1xuXG4gIHRodW1ibmFpbFBvc2l0aW9uOiB7IG9mZnNldFRvcDogbnVtYmVyLCBvZmZzZXRMZWZ0OiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBwYW5Ub3A/OiBzdHJpbmcgfTtcbiAgc2NhbGUgPSAxO1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICBwaW5jaGVuZDogU3Vic2NyaXB0aW9uO1xuICBwaW5jaDogU3Vic2NyaXB0aW9uO1xuICB2ZXJ0aWNhbFBhbjogU3Vic2NyaXB0aW9uO1xuICBwYW5SZW1vdmU6IFN1YnNjcmlwdGlvbjtcbiAgcGFuUmVzZXQ6IFN1YnNjcmlwdGlvbjtcbiAgZG91YmxldGFwOiBTdWJzY3JpcHRpb247XG4gIHNpbmdsZXRhcDogU3Vic2NyaXB0aW9uO1xuICBjbG9zZVN1YjogU3Vic2NyaXB0aW9uO1xuICBwaW5jaFBhbjogU3Vic2NyaXB0aW9uO1xuXG4gIHNpbmdsZXRhcEhhbW1lcjtcbiAgZG91YmxlVGFwSGFtbWVyO1xuICBwaW5jaEhhbW1lcjtcbiAgcGFuSGFtbWVyO1xuXG5cbiAgcGluY2hDZW50ZXI6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIGRvbUN0cmw6IERvbUNvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2hhbmdlOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGFuaW1hdGlvbjogQW5pbWF0aW9uQnVpbGRlcixcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9wZW4oZXZlbnQpIHtcbiAgICB0aGlzLmFwcGVuZENvbXBvbmVudFRvQm9keShldmVudCk7XG4gIH1cblxuICBnZXRQb3NpdGlvbihldmVudCkge1xuICAgIGNvbnN0IGJvdW5kcyA9IHRoaXMudGh1bWJuYWlsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHsgb2Zmc2V0VG9wOiBib3VuZHMudG9wLCBvZmZzZXRMZWZ0OiBib3VuZHMubGVmdCwgaGVpZ2h0OiBldmVudC5zcmNFbGVtZW50LmNsaWVudEhlaWdodCwgd2lkdGg6IGV2ZW50LnNyY0VsZW1lbnQuY2xpZW50V2lkdGggfTtcbiAgfVxuXG4gIGFwcGVuZENvbXBvbmVudFRvQm9keShldmVudCkge1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShJbWFnZVZpZXdlckNvbXBvbmVudClcbiAgICAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG5cbiAgICB0aGlzLnRodW1ibmFpbFZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5faXNPcGVuID0gdHJ1ZTtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zcmMgPSB0aGlzLnNyYztcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudFJlZjtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS50aHVtYm5haWxQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oZXZlbnQpO1xuICAgIHRoaXMud2lkdGggPSB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS50aHVtYm5haWxQb3NpdGlvbi53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnRodW1ibmFpbFBvc2l0aW9uLmhlaWdodDtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5hY3Rpb25zID0gdGhpcy5hY3Rpb25zO1xuXG4gICAgdGhpcy5jbG9zZVN1YiA9IHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmZpdkNsb3NlXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy50aHVtYm5haWxWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cbiAgICBjb25zdCBkb21FbGVtID0gKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuICAgICAgLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbSk7XG5cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAoIXRoaXMudGh1bWJuYWlsUG9zaXRpb24ucGFuVG9wKSB7XG4gICAgICB0aGlzLnRodW1ibmFpbFBvc2l0aW9uLnBhblRvcCA9IHRoaXMudG9wICsgJ3B4JztcbiAgICAgIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gIH1cbiAgY2xlYXJTdWJzY3JpcHRpb25zKCk6IGFueSB7XG4gICAgdGhpcy5wYW5SZW1vdmUudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnBhblJlc2V0LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy52ZXJ0aWNhbFBhbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucGluY2gudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnBpbmNoZW5kLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zaW5nbGV0YXAudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmRvdWJsZXRhcC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucGluY2hQYW4udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbW92ZUhhbW1lck1hbmFnZXIoKTogYW55IHtcbiAgICB0aGlzLnNpbmdsZXRhcEhhbW1lci5kZXN0cm95KCk7XG4gICAgdGhpcy5kb3VibGVUYXBIYW1tZXIuZGVzdHJveSgpO1xuICAgIHRoaXMucGluY2hIYW1tZXIuZGVzdHJveSgpO1xuICAgIHRoaXMucGFuSGFtbWVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIGRldGFjaChldmVudCkge1xuICAgIGlmIChldmVudC50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMuYXBwUmVmLmRldGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5jbGVhclN1YnNjcmlwdGlvbnMoKTtcbiAgICAgIHRoaXMucmVtb3ZlSGFtbWVyTWFuYWdlcigpO1xuICAgICAgdGhpcy5maXZDbG9zZS5lbWl0KCk7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnRvcCA9IHRoaXMucGxhdGZvcm0uaGVpZ2h0KCkgLyAyO1xuICAgIHRoaXMubGVmdCA9IDA7XG4gICAgdGhpcy5waW5jaENlbnRlciA9IHsgeDogdGhpcy5wbGF0Zm9ybS53aWR0aCgpIC8gMiwgeTogdGhpcy5wbGF0Zm9ybS5oZWlnaHQoKSAvIDIgfTtcbiAgfVxuXG4gIG9uRW50ZXIoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIC8vIHNldHVwIHZhcmlhYmxlcyBpbiBmdWxsc2NyZWVuXG4gICAgICB0aGlzLnJlc2V0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMuc2V0dXBDbGlja3MoKTtcbiAgICAgIHRoaXMuc2V0dXBQYW4oKTtcbiAgICAgIHRoaXMuc2V0dXBQaW5jaCgpO1xuICAgIH1cbiAgfVxuICBzZXR1cENsaWNrcygpOiBhbnkge1xuICAgIHRoaXMuZG91YmxlVGFwSGFtbWVyID0gbmV3IEhhbW1lcih0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmRvdWJsZVRhcEhhbW1lci5nZXQoJ3RhcCcpLnNldCh7IGVuYWJsZTogdHJ1ZSwgdGFwczogMiB9KTtcblxuICAgIHRoaXMuc2luZ2xldGFwSGFtbWVyID0gbmV3IEhhbW1lcih0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLnNpbmdsZXRhcEhhbW1lci5nZXQoJ3RhcCcpLnNldCh7IGVuYWJsZTogdHJ1ZSwgdGFwczogMSB9KTtcblxuICAgIGNvbnN0IGRvdWJsZXRhcCQgPSBmcm9tRXZlbnQodGhpcy5kb3VibGVUYXBIYW1tZXIsICd0YXAnKTtcbiAgICBjb25zdCBzaW5nbGV0YXAkID0gZnJvbUV2ZW50KHRoaXMuc2luZ2xldGFwSGFtbWVyLCAndGFwJylcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMzAwKSxcbiAgICAgICAgdGFrZVVudGlsKGRvdWJsZXRhcCQpLFxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBhbnkpID0+IGV2ZW50LnRhcENvdW50ID09PSAxKSxcbiAgICAgICAgcmVwZWF0KClcbiAgICAgICk7XG5cbiAgICB0aGlzLmRvdWJsZXRhcCA9IGRvdWJsZXRhcCQuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmhhbmRsZURvdWJsZVRhcChyZXMpKTtcbiAgICB0aGlzLnNpbmdsZXRhcCA9IHNpbmdsZXRhcCQuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmhhbmRsZVNpbmdsZVRhcCgpKTtcbiAgfVxuXG4gIHNldHVwUGluY2goKSB7XG4gICAgdGhpcy5waW5jaEhhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5pbWFnZVZpZXcubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5waW5jaEhhbW1lci5nZXQoJ3BpbmNoJykuc2V0KHsgZW5hYmxlOiB0cnVlIH0pO1xuXG4gICAgY29uc3QgcGluY2hlbmQkID0gZnJvbUV2ZW50KHRoaXMucGluY2hIYW1tZXIsICdwaW5jaGVuZCcpO1xuICAgIHRoaXMucGluY2hlbmQgPSBwaW5jaGVuZCQuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB7XG5cbiAgICAgIHRoaXMuc2NhbGUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLnNjYWxlICogZXZlbnQuc2NhbGUsIDgpKTtcbiAgICAgIGlmICh0aGlzLnNjYWxlIDwgMSkge1xuICAgICAgICB0aGlzLnJlc2V0U2NhbGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHBpbmNoJCA9IGZyb21FdmVudCh0aGlzLnBpbmNoSGFtbWVyLCAncGluY2gnKTtcbiAgICB0aGlzLnBpbmNoID0gcGluY2gkXG4gICAgICAuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMucGluY2hDZW50ZXIgPSBldmVudC5jZW50ZXI7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtKGV2ZW50LnNjYWxlKTtcbiAgICAgICAgdGhpcy5tb3ZlKGV2ZW50KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2V0dXBQYW4oKSB7XG4gICAgLy8gY2xvc2UgcGFuc1xuICAgIGNvbnN0IHB1bGxEaXN0YW5jZSA9IDEyMDtcbiAgICB0aGlzLnBhbkhhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5pbWFnZVZpZXcubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5wYW5IYW1tZXIuZ2V0KCdwYW4nKS5zZXQoeyBlbmFibGU6IHRydWUsIGRpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEwgfSk7XG4gICAgY29uc3QgcGFuc3RhcnQgPSBmcm9tRXZlbnQodGhpcy5wYW5IYW1tZXIsICdwYW5zdGFydCcpO1xuXG4gICAgY29uc3QgcGFuZW5kID0gZnJvbUV2ZW50KHRoaXMucGFuSGFtbWVyLCAncGFuZW5kJyk7XG4gICAgY29uc3QgcGFubW92ZSA9IGZyb21FdmVudCh0aGlzLnBhbkhhbW1lciwgJ3Bhbm1vdmUnKTtcblxuICAgIGNvbnN0IHBhbmRvd24gPSBmcm9tRXZlbnQodGhpcy5wYW5IYW1tZXIsICdwYW5kb3duJyk7XG4gICAgY29uc3QgcGFudXAgPSBmcm9tRXZlbnQodGhpcy5wYW5IYW1tZXIsICdwYW51cCcpO1xuXG4gICAgY29uc3QgZG93biA9IHBhbnN0YXJ0XG4gICAgICAucGlwZShcbiAgICAgICAgZmxhdE1hcCgoKSA9PiBwYW5kb3duLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuc2NhbGUgPT09IDEpKSlcbiAgICAgICk7XG5cbiAgICBjb25zdCB1cCA9IHBhbnN0YXJ0XG4gICAgICAucGlwZShcbiAgICAgICAgZmxhdE1hcCgoKSA9PiBwYW51cC5waXBlKFxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLnNjYWxlID09PSAxKSkpXG4gICAgICApO1xuXG4gICAgY29uc3QgdmVydGljYWxQYW4kID0gbWVyZ2UodXAsIGRvd24pO1xuXG4gICAgdGhpcy52ZXJ0aWNhbFBhbiA9IHZlcnRpY2FsUGFuJC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldEJvdHRvbSh0aGlzLmNhbGN1bGF0ZUJvdHRvbShyZXMpKTtcbiAgICAgIHRoaXMuc2V0VG9wKHRoaXMuY2FsY3VsYXRlVG9wKHJlcykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcGluY2hQYW5Nb3ZlID0gcGFubW92ZVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLnNjYWxlID4gMSlcbiAgICAgICk7XG5cbiAgICBjb25zdCBwaW5jaFBhbiQgPSBwYW5zdGFydFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoZXZlbnQ6IGFueSkgPT4gdGhpcy5waW5jaENlbnRlciA9IGV2ZW50LmNlbnRlciksXG4gICAgICAgIGZsYXRNYXAoKCkgPT4gcGluY2hQYW5Nb3ZlXG4gICAgICAgICkpO1xuXG4gICAgdGhpcy5waW5jaFBhbiA9IHBpbmNoUGFuJFxuICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5tb3ZlKHJlcyk7XG4gICAgICB9KTtcblxuXG4gICAgdGhpcy5wYW5SZW1vdmUgPSBwYW5lbmRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBhbnkpID0+IHRoaXMuc2NhbGUgPT09IDEgJiYgZXZlbnQuZGlzdGFuY2UgPiBwdWxsRGlzdGFuY2UgJiYgZXZlbnQubWF4UG9pbnRlcnMgPT09IDEpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7IHRoaXMucmVtb3ZlKCk7IH0pO1xuXG4gICAgdGhpcy5wYW5SZXNldCA9IHBhbmVuZFxuICAgICAgLnBpcGUoXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgZmlsdGVyKChldmVudDogYW55KSA9PiB0aGlzLnNjYWxlID09PSAxICYmIGV2ZW50LmRpc3RhbmNlIDw9IHB1bGxEaXN0YW5jZSB8fCB0aGlzLnNjYWxlID09PSAxICYmIGV2ZW50LmRpc3RhbmNlID4gcHVsbERpc3RhbmNlICYmIGV2ZW50Lm1heFBvaW50ZXJzID4gMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRQYW4oKTtcbiAgICAgICAgdGhpcy5yZXNldEZvb3Rlcih0aGlzLmNhbGN1bGF0ZUJvdHRvbShldmVudCkpO1xuICAgICAgfSk7XG4gIH1cblxuICBtb3ZlKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMucGluY2hDZW50ZXIpIHtcbiAgICAgIHRoaXMucGluY2hDZW50ZXIgPSBldmVudC5jZW50ZXI7XG4gICAgfVxuICAgIGNvbnN0IG1vdmVWID0gZXZlbnQuY2VudGVyLnkgLSB0aGlzLnBpbmNoQ2VudGVyLnk7XG4gICAgY29uc3QgbW92ZUggPSBldmVudC5jZW50ZXIueCAtIHRoaXMucGluY2hDZW50ZXIueDtcbiAgICB0aGlzLnBpbmNoQ2VudGVyID0gZXZlbnQuY2VudGVyO1xuICAgIGNvbnN0IG5ld1ggPSB0aGlzLnJlc3RyaWN0UmF3UG9zWCh0aGlzLmxlZnQgKyBtb3ZlSCk7XG4gICAgY29uc3QgbmV3WSA9IHRoaXMucmVzdHJpY3RSYXdQb3NZKHRoaXMudG9wICsgbW92ZVYpO1xuXG4gICAgdGhpcy5zZXRUb3AobmV3WSk7XG4gICAgdGhpcy5zZXRMZWZ0KG5ld1gpO1xuICB9XG5cbiAgcmVzdHJpY3RSYXdQb3NYKHBvcykge1xuICAgIGNvbnN0IHZpZXdwb3J0RGltID0gdGhpcy5wbGF0Zm9ybS53aWR0aCgpO1xuICAgIGNvbnN0IGltYWdlV2lkdGggPSB0aGlzLmdldEN1cnJlbnRJbWFnZVdpZHRoKCkgLyB0aGlzLnNjYWxlO1xuICAgIGNvbnN0IGJvcmRlclBvcyA9ICh0aGlzLmdldEN1cnJlbnRJbWFnZVdpZHRoKCkgLSBNYXRoLm1pbih2aWV3cG9ydERpbSwgaW1hZ2VXaWR0aCkpIC8gMjtcbiAgICBpZiAocG9zIDwgYm9yZGVyUG9zICogLTEpIHtcbiAgICAgIHJldHVybiBib3JkZXJQb3MgKiAtMTtcbiAgICB9IGVsc2UgaWYgKHBvcyA+IGJvcmRlclBvcykge1xuICAgICAgcmV0dXJuIGJvcmRlclBvcztcbiAgICB9XG4gICAgcmV0dXJuIHBvcztcbiAgfVxuXG4gIHJlc3RyaWN0UmF3UG9zWShwb3MpIHtcbiAgICBjb25zdCB2aWV3cG9ydERpbSA9IHRoaXMucGxhdGZvcm0uaGVpZ2h0KCk7XG4gICAgY29uc3QgaW1hZ2VIZWlnaHQgPSB0aGlzLmdldEN1cnJlbnRJbWFnZUhlaWdodCgpIC8gdGhpcy5zY2FsZTtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLnBsYXRmb3JtLmhlaWdodCgpIC8gMjtcbiAgICBsZXQgYm9yZGVyUG9zID0gcG9zO1xuICAgIGlmICh0aGlzLmdldEN1cnJlbnRJbWFnZUhlaWdodCgpID4gdGhpcy5wbGF0Zm9ybS5oZWlnaHQoKSkge1xuICAgICAgYm9yZGVyUG9zID0gKHRoaXMuZ2V0Q3VycmVudEltYWdlSGVpZ2h0KCkgLSBNYXRoLm1heCh2aWV3cG9ydERpbSwgaW1hZ2VIZWlnaHQpKSAvIDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvcmRlclBvcyA9ICh0aGlzLmdldEN1cnJlbnRJbWFnZUhlaWdodCgpIC0gTWF0aC5taW4odmlld3BvcnREaW0sIGltYWdlSGVpZ2h0KSkgLyAyO1xuICAgIH1cbiAgICBpZiAocG9zIDwgYm9yZGVyUG9zICogLTEgKyBvZmZzZXQpIHtcbiAgICAgIHJldHVybiBib3JkZXJQb3MgKiAtMSArIG9mZnNldDtcbiAgICB9IGVsc2UgaWYgKHBvcyA+IGJvcmRlclBvcyArIG9mZnNldCkge1xuICAgICAgcmV0dXJuIGJvcmRlclBvcyArIG9mZnNldDtcbiAgICB9XG4gICAgcmV0dXJuIHBvcztcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b206IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9jb250cm9sc1Zpc2libGUpIHtcbiAgICAgIHRoaXMuZG9tQ3RybC53cml0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5mb290ZXIubmF0aXZlRWxlbWVudCwgJ2JvdHRvbScsIGAtJHtib3R0b219cHhgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZVBhblByb2dyZXNzKGV2ZW50OiBhbnkpOiBudW1iZXIge1xuICAgIGNvbnN0IHB1bGxEaXN0YW5jZSA9IDEyMDtcbiAgICByZXR1cm4gTWF0aC5hYnMoMTAwICogZXZlbnQuZGlzdGFuY2UgLyBwdWxsRGlzdGFuY2UpO1xuICB9XG5cbiAgdHJhbnNmb3JtKHNjYWxlKSB7XG4gICAgY29uc3QgcyA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuc2NhbGUgKiBzY2FsZSwgOCkpO1xuICAgIHRoaXMuc2V0U2NhbGUocywgdHJ1ZSk7XG4gIH1cblxuICBjYWxjdWxhdGVCb3R0b20oZXZlbnQpIHtcbiAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMuY2FsY3VsYXRlUGFuUHJvZ3Jlc3MoZXZlbnQpO1xuICAgIHJldHVybiBldmVudC5kaXN0YW5jZSAqIHByb2dyZXNzIC8gMTAwO1xuICB9XG5cbiAgc2V0U2NhbGUoc2NhbGUsIHNraXA/KSB7XG4gICAgaWYgKCFza2lwKSB7XG4gICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgfVxuICAgIHRoaXMuZG9tQ3RybC53cml0ZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW1hZ2VWaWV3Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgke3NjYWxlfSlgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLnRodW1ibmFpbFBvc2l0aW9uLnBhblRvcCA9IHRoaXMudG9wICsgJ3B4JztcbiAgICB0aGlzLmRvbUN0cmwud3JpdGUoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50LCAndG9wJywgYCR7dG9wfXB4YCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRMZWZ0KGxlZnQpIHtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMuZG9tQ3RybC53cml0ZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW1hZ2VWaWV3Lm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgYCR7bGVmdH1weGApO1xuICAgIH0pO1xuICB9XG5cbiAgY2FsY3VsYXRlVG9wKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IGV2ZW50LmRpc3RhbmNlO1xuICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5hYnMoMTAwICogZGlzdGFuY2UgLyB0aGlzLnB1bGxEaXN0YW5jZSk7XG5cbiAgICBpZiAocHJvZ3Jlc3MgPD0gMTAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5wbGF0Zm9ybS5oZWlnaHQoKSAvIDIgKyBkaXN0YW5jZTtcbiAgICB9IGVsc2UgaWYgKHByb2dyZXNzID49IDEwMCAmJiBwcm9ncmVzcyA8IDIwMCkge1xuICAgICAgcmV0dXJuIHRoaXMucGxhdGZvcm0uaGVpZ2h0KCkgLyAyICsgdGhpcy5wdWxsRGlzdGFuY2UgKyB0aGlzLnB1bGxEaXN0YW5jZSAvIDIgKiAocHJvZ3Jlc3MgLSAxMDApIC8gMTAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5wbGF0Zm9ybS5oZWlnaHQoKSAvIDIgKyB0aGlzLnB1bGxEaXN0YW5jZSArIHRoaXMucHVsbERpc3RhbmNlIC8gMjtcbiAgICB9XG4gIH1cblxuICByZXNldFBhbigpIHtcbiAgICBjb25zdCByZXNldCA9IHRoaXMuYW5pbWF0aW9uLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHsgdG9wOiBgJHt0aGlzLnRvcH1weGAgfSksXG4gICAgICBhbmltYXRlKCcxNTBtcyBlYXNlJywgc3R5bGUoeyB0b3A6IGAke3RoaXMucGxhdGZvcm0uaGVpZ2h0KCkgLyAyfXB4YCB9KSlcbiAgICBdKTtcblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHJlc2V0LmNyZWF0ZSh0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50KTtcbiAgICBhbmltYXRpb24ucGxheSgpO1xuICAgIGFuaW1hdGlvbi5vbkRvbmUoKCkgPT4ge1xuICAgICAgYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc2V0VG9wKHRoaXMucGxhdGZvcm0uaGVpZ2h0KCkgLyAyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0Rm9vdGVyKHN0YXJ0KSB7XG4gICAgaWYgKCF0aGlzLl9jb250cm9sc1Zpc2libGUpIHtcbiAgICAgIHRoaXMuc2V0Qm90dG9tKDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZXNldCA9IHRoaXMuYW5pbWF0aW9uLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHsgYm90dG9tOiBgLSR7c3RhcnR9cHhgIH0pLFxuICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZScsIHN0eWxlKHsgYm90dG9tOiBgMHB4YCB9KSlcbiAgICBdKTtcblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHJlc2V0LmNyZWF0ZSh0aGlzLmZvb3Rlci5uYXRpdmVFbGVtZW50KTtcbiAgICBhbmltYXRpb24ucGxheSgpO1xuICAgIGFuaW1hdGlvbi5vbkRvbmUoKCkgPT4ge1xuICAgICAgYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc2V0Qm90dG9tKDApO1xuICAgIH0pO1xuICB9XG5cbiAgYW5pbWF0ZVNjYWxlKHRvU2NhbGU6IG51bWJlciwgdG9Qb3NpdGlvbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9KSB7XG4gICAgLy8gY29uc3QgZGVsdGFYID0gdGhpcy5waW5jaENlbnRlci54IC0gdG9Qb3NpdGlvbi54O1xuICAgIC8vIGNvbnN0IGRlbHRhWSA9IHRoaXMucGluY2hDZW50ZXIueSAtIHRvUG9zaXRpb24ueTtcbiAgICBjb25zdCBkZWx0YVggPSAodGhpcy5waW5jaENlbnRlci54IC0gdG9Qb3NpdGlvbi54KSAqIHRvU2NhbGU7XG4gICAgY29uc3QgZGVsdGFZID0gKHRoaXMucGluY2hDZW50ZXIueSAtIHRvUG9zaXRpb24ueSkgKiB0b1NjYWxlO1xuICAgIGNvbnN0IG5ld0xlZnQgPSB0aGlzLmxlZnQgKyBkZWx0YVggLyB0b1NjYWxlO1xuICAgIGNvbnN0IG5ld1RvcCA9IHRoaXMudG9wICsgZGVsdGFZIC8gdG9TY2FsZTtcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMuYW5pbWF0aW9uLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgke3RoaXMuc2NhbGV9KWAsIHRvcDogYCR7dGhpcy50b3B9cHhgLCBsZWZ0OiBgJHt0aGlzLmxlZnR9cHhgIH0pLFxuICAgICAgYW5pbWF0ZSgnMjAwbXMgZWFzZScsIHN0eWxlKHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgke3RvU2NhbGV9KWAsIHRvcDogYCR7bmV3VG9wfXB4YCwgbGVmdDogYCR7bmV3TGVmdH1weGAgfSkpXG4gICAgXSk7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gc2NhbGUuY3JlYXRlKHRoaXMuaW1hZ2VWaWV3Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIGFuaW1hdGlvbi5wbGF5KCk7XG4gICAgYW5pbWF0aW9uLm9uRG9uZSgoKSA9PiB7XG4gICAgICBhbmltYXRpb24uZGVzdHJveSgpO1xuICAgICAgdGhpcy5zZXRTY2FsZSh0b1NjYWxlKTtcbiAgICAgIHRoaXMuc2V0VG9wKG5ld1RvcCk7XG4gICAgICB0aGlzLnNldExlZnQobmV3TGVmdCk7XG4gICAgICB0aGlzLnBpbmNoQ2VudGVyID0gdG9Qb3NpdGlvbjtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0U2NhbGUoKSB7XG4gICAgY29uc3QgdCA9IHRoaXMucGxhdGZvcm0uaGVpZ2h0KCkgLyAyO1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5hbmltYXRpb24uYnVpbGQoW1xuICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKCR7dGhpcy5zY2FsZX0pYCwgdG9wOiBgJHt0aGlzLnRvcH1weGAsIGxlZnQ6IGAke3RoaXMubGVmdH1weGAgfSksXG4gICAgICBhbmltYXRlKCcyMDBtcyBlYXNlJywgc3R5bGUoeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKCR7MX0pYCwgdG9wOiBgJHt0fXB4YCwgbGVmdDogYCR7MH1weGAgfSkpXG4gICAgXSk7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gc2NhbGUuY3JlYXRlKHRoaXMuaW1hZ2VWaWV3Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIGFuaW1hdGlvbi5wbGF5KCk7XG4gICAgYW5pbWF0aW9uLm9uRG9uZSgoKSA9PiB7XG4gICAgICBhbmltYXRpb24uZGVzdHJveSgpO1xuICAgICAgdGhpcy5zZXRTY2FsZSgxKTtcbiAgICAgIHRoaXMuc2V0VG9wKHQpO1xuICAgICAgdGhpcy5zZXRMZWZ0KDApO1xuICAgICAgdGhpcy5waW5jaENlbnRlciA9IHRoaXMuZ2V0QWJzb2x1dGVDZW50ZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNpbmdsZVRhcCgpIHtcbiAgICB0aGlzLl9jb250cm9sc1Zpc2libGUgPSAhdGhpcy5fY29udHJvbHNWaXNpYmxlO1xuICB9XG5cbiAgaGFuZGxlRG91YmxlVGFwKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc2NhbGUgPT09IDEpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZVNjYWxlKDIsIGV2ZW50LmNlbnRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzZXRTY2FsZSgpO1xuICAgIH1cblxuICB9XG5cbiAgZ2V0Q3VycmVudEltYWdlSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAqIHRoaXMuc2NhbGU7XG4gIH1cbiAgZ2V0Q3VycmVudEltYWdlV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VWaWV3Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggKiB0aGlzLnNjYWxlO1xuICB9XG5cbiAgZ2V0QWJzb2x1dGVDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHsgeDogdGhpcy5wbGF0Zm9ybS53aWR0aCgpIC8gMiwgeTogdGhpcy5wbGF0Zm9ybS5oZWlnaHQoKSAvIDIgfTtcbiAgfVxufVxuXG5cblxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVZpZXdlckFjdGlvbiB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBSZW5kZXJlcjIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUsIHN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi10b29sYmFyLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sYmFyLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Rvb2xiYXItc2VhcmNoLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzZWFyY2hiYXJBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbignc21hbGwgPT4gbm9ybWFsJywgW1xuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiBzbWFsbCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnOTVtcyBlYXNlLWluJylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ3NtYWxsJywgc3R5bGUoeyB3aWR0aDogJzkycHgnIH0pKSxcbiAgICAgIHN0YXRlKCdub3JtYWwnLCBzdHlsZSh7IHdpZHRoOiAnMTAwJScgfSkpXG4gICAgXSksXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXG4gICAgICAgIGFuaW1hdGUoJzg1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAncm90YXRlWigwZGVnKScgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnNjVtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3JvdGF0ZVooNDVkZWcpJyB9KSlcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3RpdGxlQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTIwJSknIH0pLFxuICAgICAgICBhbmltYXRlKCcxNzVtcyBlYXNlLW91dCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9KSlcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgc2VhcmNoaW5nID0gZmFsc2U7XG4gIHRpdGxlVmlzaWJsZSA9IHRydWU7XG4gIGNsb3NlQnV0dG9uVmlzaWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBzbWFsbCA9IGZhbHNlO1xuICBAT3V0cHV0KCkgZml2SW5wdXRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2Q2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgc3RhdGU6ICdzbWFsbCcgfCAnbm9ybWFsJyA9ICdub3JtYWwnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5zbWFsbCA/ICdzbWFsbCcgOiAnbm9ybWFsJztcbiAgfVxuXG4gIHNocmluaygpIHtcbiAgICB0aGlzLnN0YXRlID0gJ3NtYWxsJztcbiAgfVxuICBncm93KCkge1xuICAgIHRoaXMuc3RhdGUgPSAnbm9ybWFsJztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnb24gY2hhbmdlcycsIGNoYW5nZXMpO1xuICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuc21hbGwgJiYgY2hhbmdlcy5zbWFsbC5wcmV2aW91c1ZhbHVlID09PSB0cnVlICYmIGNoYW5nZXMuc21hbGwuY3VycmVudFZhbHVlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdub3JtYWwnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLnNtYWxsICYmIGNoYW5nZXMuc21hbGwucHJldmlvdXNWYWx1ZSA9PT0gZmFsc2UgJiYgY2hhbmdlcy5zbWFsbC5jdXJyZW50VmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnc21hbGwnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5TZWFyY2hiYXIoKSB7XG4gICAgaWYgKHRoaXMuc21hbGwpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnbm9ybWFsJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fb3BlbigpO1xuICB9XG5cbiAgdG9nZ2xlU2VhcmNoYmFyKCkge1xuICAgIGlmICh0aGlzLnNlYXJjaGluZykge1xuICAgICAgdGhpcy5jbG9zZVNlYXJjaGJhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW5TZWFyY2hiYXIoKTtcbiAgICB9XG4gIH1cblxuXG4gIHNlYXJjaEJhclN0YXRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ3NlYXJjaGJhclN0YXRlJywgZXZlbnQpO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdub3JtYWwnICYmIGV2ZW50LnRvU3RhdGUgPT09ICdzbWFsbCcpIHtcblxuICAgIH1cblxuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdzbWFsbCcgJiYgZXZlbnQudG9TdGF0ZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgIHRoaXMuX29wZW4oKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgX29wZW4oKSB7XG4gICAgdGhpcy5zZWFyY2hpbmcgPSB0cnVlO1xuICAgIHRoaXMudGl0bGVWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5vcGVuLmVtaXQoKTtcbiAgfVxuXG4gIGNsb3NlU2VhcmNoYmFyKCkge1xuICAgIGlmICh0aGlzLnNtYWxsKSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ3NtYWxsJztcbiAgICB9XG4gICAgdGhpcy5zZWFyY2hpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmZpdkNsb3NlLmVtaXQoKTtcblxuICB9XG5cblxuICBzZWFyY2hBbmltRG9uZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCcjIyMnLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSAhPT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uVmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VBbmltRG9uZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCcjIyMnLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSAhPT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLnNlYXJjaGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHNlYWNoYmFyQW5pbURvbmUoZXZlbnQsIGlucHV0KSB7XG4gICAgY29uc29sZS5sb2coJyEhIScsIGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlICE9PSAndm9pZCcpIHtcbiAgICAgIHRoaXMudGl0bGVWaXNpYmxlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuXG59XG4iLCJpbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLy4uL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZQYXJhbXMsIFBvcG92ZXJDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtcG9wb3ZlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3BvdmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcG9wb3Zlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBidXR0b25zOiBCdXR0b25Db21wb25lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHVibGljIHBvcG92ZXJDb250cm9sbGVyOiBQb3BvdmVyQ29udHJvbGxlcikge1xuICAgIHRoaXMuYnV0dG9ucyA9IG5hdlBhcmFtcy5nZXQoJ2J1dHRvbnMnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25JdGVtQ2xpY2tlZChpOiBudW1iZXIpIHtcbiAgICB0aGlzLnBvcG92ZXJDb250cm9sbGVyLmRpc21pc3MoeyBpbmRleDogaSB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgUG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vLi4vcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgUG9wb3ZlckNvbnRyb2xsZXIsIEFjdGlvblNoZWV0Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWJ1dHRvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZml2LWJ1dHRvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maXYtYnV0dG9ucy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZpdkJ1dHRvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBJbnB1dCgpIHNsb3QgPSAnZW5kJztcbiAgQElucHV0KCkgc3ViSGVhZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjb3VudCA9IDA7XG4gIEBJbnB1dCgpIGZvcmNlQWN0aW9uc2hlZXQgPSBmYWxzZTtcbiAgQElucHV0KCkgZm9yY2VQb3BvdmVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGljb25zT25seSA9IHRydWU7XG4gIEBDb250ZW50Q2hpbGRyZW4oQnV0dG9uQ29tcG9uZW50KSBidXR0b25zOiBRdWVyeUxpc3Q8QnV0dG9uQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIHBvcG92ZXJDb250cm9sbGVyOiBQb3BvdmVyQ29udHJvbGxlcixcbiAgICBwdWJsaWMgYWN0aW9uU2hlZXRDb250cm9sbGVyOiBBY3Rpb25TaGVldENvbnRyb2xsZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCcjIyMnLCB0aGlzLmJ1dHRvbnMubGVuZ3RoKTtcbiAgfVxuXG4gIG9uTWVudUNsaWNrZWQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5mb3JjZUFjdGlvbnNoZWV0KSB7XG4gICAgICB0aGlzLnByZXNlbnRBY3Rpb25TaGVldChldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcmNlUG9wb3Zlcikge1xuICAgICAgdGhpcy5wcmVzZW50UG9wb3ZlcihldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdtb2JpbGUnKSkge1xuICAgICAgdGhpcy5wcmVzZW50QWN0aW9uU2hlZXQoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByZXNlbnRQb3BvdmVyKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBwcmVzZW50UG9wb3ZlcihldjogYW55KSB7XG4gICAgY29uc3QgcG9wb3ZlciA9IGF3YWl0IHRoaXMucG9wb3ZlckNvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogUG9wb3ZlckNvbXBvbmVudCxcbiAgICAgIGV2ZW50OiBldixcbiAgICAgIHRyYW5zbHVjZW50OiBmYWxzZSxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgICdidXR0b25zJzogdGhpcy5idXR0b25zLnRvQXJyYXkoKS5zbGljZSh0aGlzLmNvdW50KSxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGF3YWl0IHBvcG92ZXIucHJlc2VudCgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvcG92ZXIub25EaWREaXNtaXNzKCk7XG4gICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZGF0YSAmJiAocmVzdWx0LmRhdGEuaW5kZXggfHwgcmVzdWx0LmRhdGEuaW5kZXggPT09IDApKSB7XG4gICAgICB0aGlzLm9uQnV0dG9uQ2xpY2tlZChyZXN1bHQuZGF0YS5pbmRleCArIHRoaXMuY291bnQpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHByZXNlbnRBY3Rpb25TaGVldChldjogYW55KSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IFtdO1xuICAgIHRoaXMuYnV0dG9ucy50b0FycmF5KCkuc2xpY2UodGhpcy5jb3VudClcbiAgICAgIC5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XG4gICAgICAgIGJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgdGV4dDogYnV0dG9uLnRleHQsXG4gICAgICAgICAgaWNvbjogYnV0dG9uLmljb24sXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrZWQodGhpcy5jb3VudCArIGluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgY29uc3QgYWN0aW9uU2hlZXQgPSBhd2FpdCB0aGlzLmFjdGlvblNoZWV0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiB0aGlzLmhlYWRlcixcbiAgICAgIHN1YkhlYWRlcjogdGhpcy5zdWJIZWFkZXIsXG4gICAgICBidXR0b25zOiBidXR0b25zXG4gICAgfSk7XG4gICAgYXdhaXQgYWN0aW9uU2hlZXQucHJlc2VudCgpO1xuICB9XG5cbiAgb25CdXR0b25DbGlja2VkKGk6IG51bWJlcikge1xuICAgIHRoaXMuYnV0dG9ucy50b0FycmF5KClbaV0uY2xpY2suZW1pdCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXhwYW5kYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtZXhwYW5kYWJsZS1pbmRpY2F0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwYW5kYWJsZS1pbmRpY2F0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9leHBhbmRhYmxlLWluZGljYXRvci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEV4cGFuZGFibGVJbmRpY2F0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGljb24gPSAnaW9zLWFycm93LWRvd24nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBleHBhbmRhYmxlOiBFeHBhbmRhYmxlQ29tcG9uZW50KSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcsIEhBTU1FUl9HRVNUVVJFX0NPTkZJRyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSGFtbWVyIH0gZnJvbSAnaGFtbWVyanMnO1xuaW1wb3J0IHsgU3RlcHBlckNvbXBvbmVudCB9IGZyb20gJy4vc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwL3N0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IFN0ZXBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAtaGVhZGVyL3N0ZXAtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGVwQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vc3RlcC1jb250ZW50L3N0ZXAtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhwYW5kYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9yb3V0ZXItaXRlbS9yb3V0ZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sbGFwc2FibGVNZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9jb2xsYXBzYWJsZS1tZW51L2NvbGxhcHNhYmxlLW1lbnUuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbGxhcHNhYmxlTWVudUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29sbGFwc2FibGUtbWVudS1idXR0b24vY29sbGFwc2FibGUtbWVudS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm90dG9tU2hlZXRDb21wb25lbnQgfSBmcm9tICcuL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQuY29tcG9uZW50JztcbmltcG9ydCB7IEJvdHRvbVNoZWV0Q29udGVudENvbXBvbmVudCB9IGZyb20gJy4vYm90dG9tLXNoZWV0LWNvbnRlbnQvYm90dG9tLXNoZWV0LWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRpbmdCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmctYnV0dG9uL2xvYWRpbmctYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmctcHJvZ3Jlc3MtYmFyL2xvYWRpbmctcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy1jb250ZW50L2xvYWRpbmctY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ0ZhYkNvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy1mYWIvbG9hZGluZy1mYWIuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcEJhckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZlBsYXRmb3JtRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2lmLXBsYXRmb3JtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZW50ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2VudGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQZXJtaXNzaW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9wZXJtaXNzaW9ucy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUmlwcGxlQ29tcG9uZW50IH0gZnJvbSAnLi9yaXBwbGUvcmlwcGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3cG9ydERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy92aWV3cG9ydC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHVsbERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9wdWxsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RlcHBlckhvcml6b250YWxDb21wb25lbnQgfSBmcm9tICcuL3N0ZXBwZXItaG9yaXpvbnRhbC9zdGVwcGVyLWhvcml6b250YWwuY29tcG9uZW50JztcbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy1yZWZyZXNoZXItY29udGVudC9sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBCYXJUYWJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1iYXItdGFiL2FwcC1iYXItdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBCYXJUYWJDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9hcHAtYmFyLXRhYi1jb250ZW50L2FwcC1iYXItdGFiLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEltYWdlVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb29sYmFyU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyLXNlYXJjaC90b29sYmFyLXNlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRml2QnV0dG9uc0NvbXBvbmVudCB9IGZyb20gJy4vZml2LWJ1dHRvbnMvZml2LWJ1dHRvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBhbmRhYmxlSW5kaWNhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9leHBhbmRhYmxlLWluZGljYXRvci9leHBhbmRhYmxlLWluZGljYXRvci5jb21wb25lbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBNeUhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBvdmVycmlkZXMgPSA8YW55PntcbiAgICBwYW46IHsgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX1ZFUlRJQ0FMLCB0aHJlc2hvbGQ6IDMgfSxcbiAgfTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBJb25pY01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBFeHBhbmRhYmxlQ29tcG9uZW50LFxuICAgIFBhc3N3b3JkQ29tcG9uZW50LFxuICAgIFN0ZXBwZXJDb21wb25lbnQsXG4gICAgU3RlcENvbXBvbmVudCxcbiAgICBTdGVwSGVhZGVyQ29tcG9uZW50LFxuICAgIFN0ZXBDb250ZW50Q29tcG9uZW50LFxuICAgIFJvdXRlckl0ZW1Db21wb25lbnQsXG4gICAgQ2VudGVyRGlyZWN0aXZlLFxuICAgIENvbGxhcHNhYmxlTWVudUJ1dHRvbkNvbXBvbmVudCxcbiAgICBDb2xsYXBzYWJsZU1lbnVEaXJlY3RpdmUsXG4gICAgQm90dG9tU2hlZXRDb21wb25lbnQsXG4gICAgQm90dG9tU2hlZXRDb250ZW50Q29tcG9uZW50LFxuICAgIFRvb2xiYXJTZWFyY2hDb21wb25lbnQsXG4gICAgTG9hZGluZ0J1dHRvbkNvbXBvbmVudCxcbiAgICBMb2FkaW5nUHJvZ3Jlc3NCYXJDb21wb25lbnQsXG4gICAgTG9hZGluZ0NvbnRlbnRDb21wb25lbnQsXG4gICAgTG9hZGluZ0ZhYkNvbXBvbmVudCxcbiAgICBBcHBCYXJDb21wb25lbnQsXG4gICAgSWZQbGF0Zm9ybURpcmVjdGl2ZSxcbiAgICBQZXJtaXNzaW9uc0RpcmVjdGl2ZSxcbiAgICBSaXBwbGVDb21wb25lbnQsXG4gICAgVmlld3BvcnREaXJlY3RpdmUsXG4gICAgUHVsbERpcmVjdGl2ZSxcbiAgICBMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudCxcbiAgICBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudCxcbiAgICBTdGVwcGVySG9yaXpvbnRhbENvbXBvbmVudCxcbiAgICBJY29uQ29tcG9uZW50LFxuICAgIERpYWxvZ0NvbXBvbmVudCxcbiAgICBBcHBCYXJUYWJDb21wb25lbnQsXG4gICAgQXBwQmFyVGFiQ29udGVudENvbXBvbmVudCxcbiAgICBJbWFnZVZpZXdlckNvbXBvbmVudCxcbiAgICBGaXZCdXR0b25zQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBQb3BvdmVyQ29tcG9uZW50LFxuICAgIEV4cGFuZGFibGVJbmRpY2F0b3JDb21wb25lbnQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0ltYWdlVmlld2VyQ29tcG9uZW50LCBQb3BvdmVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIEV4cGFuZGFibGVDb21wb25lbnQsXG4gICAgUGFzc3dvcmRDb21wb25lbnQsXG4gICAgU3RlcHBlckNvbXBvbmVudCxcbiAgICBTdGVwQ29tcG9uZW50LFxuICAgIFN0ZXBIZWFkZXJDb21wb25lbnQsXG4gICAgU3RlcENvbnRlbnRDb21wb25lbnQsXG4gICAgUm91dGVySXRlbUNvbXBvbmVudCxcbiAgICBDb2xsYXBzYWJsZU1lbnVEaXJlY3RpdmUsXG4gICAgQ2VudGVyRGlyZWN0aXZlLFxuICAgIENvbGxhcHNhYmxlTWVudUJ1dHRvbkNvbXBvbmVudCxcbiAgICBCb3R0b21TaGVldENvbXBvbmVudCxcbiAgICBCb3R0b21TaGVldENvbnRlbnRDb21wb25lbnQsXG4gICAgVG9vbGJhclNlYXJjaENvbXBvbmVudCxcbiAgICBMb2FkaW5nQnV0dG9uQ29tcG9uZW50LFxuICAgIExvYWRpbmdQcm9ncmVzc0JhckNvbXBvbmVudCxcbiAgICBMb2FkaW5nQ29udGVudENvbXBvbmVudCxcbiAgICBMb2FkaW5nRmFiQ29tcG9uZW50LFxuICAgIEFwcEJhckNvbXBvbmVudCxcbiAgICBJZlBsYXRmb3JtRGlyZWN0aXZlLFxuICAgIFBlcm1pc3Npb25zRGlyZWN0aXZlLFxuICAgIFJpcHBsZUNvbXBvbmVudCxcbiAgICBWaWV3cG9ydERpcmVjdGl2ZSxcbiAgICBQdWxsRGlyZWN0aXZlLFxuICAgIExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50LFxuICAgIExvYWRpbmdTcGlubmVyQ29tcG9uZW50LFxuICAgIFN0ZXBwZXJIb3Jpem9udGFsQ29tcG9uZW50LFxuICAgIEljb25Db21wb25lbnQsXG4gICAgRGlhbG9nQ29tcG9uZW50LFxuICAgIEFwcEJhclRhYkNvbXBvbmVudCxcbiAgICBBcHBCYXJUYWJDb250ZW50Q29tcG9uZW50LFxuICAgIEltYWdlVmlld2VyQ29tcG9uZW50LFxuICAgIEZpdkJ1dHRvbnNDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIEV4cGFuZGFibGVJbmRpY2F0b3JDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGaXZldGhyZWVDb3JlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInN0YXRlIiwiSGFtbWVyIiwiSGFtbWVyLkRJUkVDVElPTl9WRVJUSUNBTCIsInN0eWxlIiwibWVyZ2UiLCJIYW1tZXIuRElSRUNUSU9OX0FMTCIsInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBa0JFO1FBUFMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsYUFBUSxHQUFHLEVBQUUsQ0FBQztLQUlOOzs7O0lBRWpCLGdDQUFROzs7SUFBUjtLQUNDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixzRUFBb0M7O2lCQUVyQzs7Ozs7d0JBR0UsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7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

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ namespace object ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1e1lwhxn.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/1e1lwhxn.entry.js",
		"common",
		7
	],
	"./1e1lwhxn.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/1e1lwhxn.sc.entry.js",
		"common",
		8
	],
	"./2tjkwyhl.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/2tjkwyhl.entry.js",
		"common",
		9
	],
	"./2tjkwyhl.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/2tjkwyhl.sc.entry.js",
		"common",
		10
	],
	"./30z4lmfs.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/30z4lmfs.entry.js",
		"common",
		11
	],
	"./30z4lmfs.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/30z4lmfs.sc.entry.js",
		"common",
		12
	],
	"./3rkodfta.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/3rkodfta.entry.js",
		"common",
		13
	],
	"./3rkodfta.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/3rkodfta.sc.entry.js",
		"common",
		14
	],
	"./3ynu1csh.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/3ynu1csh.entry.js",
		"common",
		107
	],
	"./3ynu1csh.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/3ynu1csh.sc.entry.js",
		"common",
		108
	],
	"./49o9o5h3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/49o9o5h3.entry.js",
		"common",
		15
	],
	"./49o9o5h3.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/49o9o5h3.sc.entry.js",
		"common",
		16
	],
	"./5cruooxq.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/5cruooxq.entry.js",
		"common",
		109
	],
	"./5cruooxq.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/5cruooxq.sc.entry.js",
		"common",
		110
	],
	"./5y5zcspa.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/5y5zcspa.entry.js",
		"common",
		17
	],
	"./5y5zcspa.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/5y5zcspa.sc.entry.js",
		"common",
		18
	],
	"./6lq0bhbk.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/6lq0bhbk.entry.js",
		"common",
		19
	],
	"./6lq0bhbk.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/6lq0bhbk.sc.entry.js",
		"common",
		20
	],
	"./6so59r3w.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/6so59r3w.entry.js",
		"common",
		111
	],
	"./6so59r3w.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/6so59r3w.sc.entry.js",
		"common",
		112
	],
	"./9aasetbn.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/9aasetbn.entry.js",
		0,
		"common",
		125
	],
	"./9aasetbn.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/9aasetbn.sc.entry.js",
		0,
		"common",
		126
	],
	"./9krzzaho.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/9krzzaho.entry.js",
		"common",
		21
	],
	"./9krzzaho.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/9krzzaho.sc.entry.js",
		"common",
		22
	],
	"./9zk2zdku.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/9zk2zdku.entry.js",
		"common",
		23
	],
	"./9zk2zdku.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/9zk2zdku.sc.entry.js",
		"common",
		24
	],
	"./a0yz58nl.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/a0yz58nl.entry.js",
		0,
		"common",
		127
	],
	"./a0yz58nl.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/a0yz58nl.sc.entry.js",
		0,
		"common",
		128
	],
	"./agg6vkjj.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/agg6vkjj.entry.js",
		"common",
		113
	],
	"./agg6vkjj.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/agg6vkjj.sc.entry.js",
		"common",
		114
	],
	"./ax5dt5bo.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ax5dt5bo.entry.js",
		"common",
		25
	],
	"./ax5dt5bo.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ax5dt5bo.sc.entry.js",
		"common",
		26
	],
	"./b8upy8sw.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/b8upy8sw.entry.js",
		0,
		"common",
		129
	],
	"./b8upy8sw.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/b8upy8sw.sc.entry.js",
		0,
		"common",
		130
	],
	"./b9j05y1y.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/b9j05y1y.entry.js",
		"common",
		27
	],
	"./b9j05y1y.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/b9j05y1y.sc.entry.js",
		"common",
		28
	],
	"./bjuqyqjq.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/bjuqyqjq.entry.js",
		"common",
		29
	],
	"./bjuqyqjq.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/bjuqyqjq.sc.entry.js",
		"common",
		30
	],
	"./brl2soq6.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/brl2soq6.entry.js",
		"common",
		131
	],
	"./brl2soq6.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/brl2soq6.sc.entry.js",
		"common",
		132
	],
	"./c2cxmmuy.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/c2cxmmuy.entry.js",
		"common",
		31
	],
	"./c2cxmmuy.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/c2cxmmuy.sc.entry.js",
		"common",
		32
	],
	"./chjxzrpb.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/chjxzrpb.entry.js",
		"common",
		33
	],
	"./chjxzrpb.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/chjxzrpb.sc.entry.js",
		"common",
		34
	],
	"./czngpjkk.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/czngpjkk.entry.js",
		"common",
		35
	],
	"./czngpjkk.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/czngpjkk.sc.entry.js",
		"common",
		36
	],
	"./d6m730js.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/d6m730js.entry.js",
		"common",
		115
	],
	"./d6m730js.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/d6m730js.sc.entry.js",
		"common",
		116
	],
	"./dnz3py7p.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/dnz3py7p.entry.js",
		"common",
		37
	],
	"./dnz3py7p.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/dnz3py7p.sc.entry.js",
		"common",
		38
	],
	"./dpzwg5qg.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/dpzwg5qg.entry.js",
		"common",
		39
	],
	"./dpzwg5qg.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/dpzwg5qg.sc.entry.js",
		"common",
		40
	],
	"./drlntfjd.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/drlntfjd.entry.js",
		0,
		"common",
		133
	],
	"./drlntfjd.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/drlntfjd.sc.entry.js",
		0,
		"common",
		134
	],
	"./e54t8cnb.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/e54t8cnb.entry.js",
		0,
		"common",
		135
	],
	"./e54t8cnb.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/e54t8cnb.sc.entry.js",
		0,
		"common",
		136
	],
	"./e8nc6yw9.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/e8nc6yw9.entry.js",
		"common",
		41
	],
	"./e8nc6yw9.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/e8nc6yw9.sc.entry.js",
		"common",
		42
	],
	"./fiqi6app.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fiqi6app.entry.js",
		137
	],
	"./fiqi6app.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fiqi6app.sc.entry.js",
		138
	],
	"./gtepchdk.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/gtepchdk.entry.js",
		"common",
		43
	],
	"./gtepchdk.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/gtepchdk.sc.entry.js",
		"common",
		44
	],
	"./hmdxtd3s.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/hmdxtd3s.entry.js",
		"common",
		45
	],
	"./hmdxtd3s.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/hmdxtd3s.sc.entry.js",
		"common",
		46
	],
	"./ihzxggg8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ihzxggg8.entry.js",
		0,
		"common",
		139
	],
	"./ihzxggg8.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ihzxggg8.sc.entry.js",
		0,
		"common",
		140
	],
	"./iw5cohvy.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/iw5cohvy.entry.js",
		0,
		"common",
		142
	],
	"./iw5cohvy.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/iw5cohvy.sc.entry.js",
		0,
		"common",
		143
	],
	"./j0pt8hcq.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j0pt8hcq.entry.js",
		"common",
		47
	],
	"./j0pt8hcq.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j0pt8hcq.sc.entry.js",
		"common",
		48
	],
	"./j2g7ghx5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j2g7ghx5.entry.js",
		0,
		"common",
		144
	],
	"./j2g7ghx5.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j2g7ghx5.sc.entry.js",
		0,
		"common",
		145
	],
	"./kck6ua3e.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/kck6ua3e.entry.js",
		"common",
		49
	],
	"./kck6ua3e.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/kck6ua3e.sc.entry.js",
		"common",
		50
	],
	"./kiczugb2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/kiczugb2.entry.js",
		"common",
		51
	],
	"./kiczugb2.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/kiczugb2.sc.entry.js",
		"common",
		52
	],
	"./ksoxq4it.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ksoxq4it.entry.js",
		"common",
		53
	],
	"./ksoxq4it.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ksoxq4it.sc.entry.js",
		"common",
		54
	],
	"./ljphalmn.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ljphalmn.entry.js",
		"common",
		146
	],
	"./ljphalmn.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ljphalmn.sc.entry.js",
		"common",
		147
	],
	"./ltv1fuwh.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ltv1fuwh.entry.js",
		"common",
		55
	],
	"./ltv1fuwh.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ltv1fuwh.sc.entry.js",
		"common",
		56
	],
	"./m2nbrrst.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/m2nbrrst.entry.js",
		"common",
		57
	],
	"./m2nbrrst.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/m2nbrrst.sc.entry.js",
		"common",
		58
	],
	"./mhwkwp8f.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mhwkwp8f.entry.js",
		0,
		"common",
		149
	],
	"./mhwkwp8f.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mhwkwp8f.sc.entry.js",
		0,
		"common",
		150
	],
	"./mjhlr6de.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mjhlr6de.entry.js",
		"common",
		59
	],
	"./mjhlr6de.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mjhlr6de.sc.entry.js",
		"common",
		60
	],
	"./mkaabkwd.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mkaabkwd.entry.js",
		"common",
		61
	],
	"./mkaabkwd.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mkaabkwd.sc.entry.js",
		"common",
		62
	],
	"./mmknm4gx.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mmknm4gx.entry.js",
		"common",
		63
	],
	"./mmknm4gx.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mmknm4gx.sc.entry.js",
		"common",
		64
	],
	"./noi12jvo.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/noi12jvo.entry.js",
		"common",
		65
	],
	"./noi12jvo.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/noi12jvo.sc.entry.js",
		"common",
		66
	],
	"./nvqajvxi.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nvqajvxi.entry.js",
		"common",
		117
	],
	"./nvqajvxi.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nvqajvxi.sc.entry.js",
		"common",
		118
	],
	"./oiasnoqb.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/oiasnoqb.entry.js",
		"common",
		67
	],
	"./oiasnoqb.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/oiasnoqb.sc.entry.js",
		"common",
		68
	],
	"./oucslxw8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/oucslxw8.entry.js",
		0,
		"common",
		151
	],
	"./oucslxw8.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/oucslxw8.sc.entry.js",
		0,
		"common",
		152
	],
	"./ozwp9pzo.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ozwp9pzo.entry.js",
		"common",
		119
	],
	"./ozwp9pzo.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ozwp9pzo.sc.entry.js",
		"common",
		120
	],
	"./pmwcfesb.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/pmwcfesb.entry.js",
		"common",
		69
	],
	"./pmwcfesb.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/pmwcfesb.sc.entry.js",
		"common",
		70
	],
	"./qermlbrx.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qermlbrx.entry.js",
		"common",
		71
	],
	"./qermlbrx.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qermlbrx.sc.entry.js",
		"common",
		72
	],
	"./qmb6wnuh.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qmb6wnuh.entry.js",
		"common",
		73
	],
	"./qmb6wnuh.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qmb6wnuh.sc.entry.js",
		"common",
		74
	],
	"./r59zlcd2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/r59zlcd2.entry.js",
		"common",
		75
	],
	"./r59zlcd2.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/r59zlcd2.sc.entry.js",
		"common",
		76
	],
	"./rr0zdwiq.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/rr0zdwiq.entry.js",
		"common",
		77
	],
	"./rr0zdwiq.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/rr0zdwiq.sc.entry.js",
		"common",
		78
	],
	"./rxnokk5b.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/rxnokk5b.entry.js",
		"common",
		79
	],
	"./rxnokk5b.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/rxnokk5b.sc.entry.js",
		"common",
		80
	],
	"./rzkohwjn.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/rzkohwjn.entry.js",
		"common",
		81
	],
	"./rzkohwjn.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/rzkohwjn.sc.entry.js",
		"common",
		82
	],
	"./s3ybubs3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/s3ybubs3.entry.js",
		"common",
		83
	],
	"./s3ybubs3.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/s3ybubs3.sc.entry.js",
		"common",
		84
	],
	"./s71xhyn8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/s71xhyn8.entry.js",
		"common",
		85
	],
	"./s71xhyn8.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/s71xhyn8.sc.entry.js",
		"common",
		86
	],
	"./sgttcxng.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sgttcxng.entry.js",
		"common",
		87
	],
	"./sgttcxng.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sgttcxng.sc.entry.js",
		"common",
		88
	],
	"./skdtjygq.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/skdtjygq.entry.js",
		0,
		"common",
		153
	],
	"./skdtjygq.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/skdtjygq.sc.entry.js",
		0,
		"common",
		154
	],
	"./tlmwejgj.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tlmwejgj.entry.js",
		"common",
		121
	],
	"./tlmwejgj.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tlmwejgj.sc.entry.js",
		"common",
		122
	],
	"./u3uimr12.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/u3uimr12.entry.js",
		"common",
		89
	],
	"./u3uimr12.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/u3uimr12.sc.entry.js",
		"common",
		90
	],
	"./uowuginz.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/uowuginz.entry.js",
		"common",
		91
	],
	"./uowuginz.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/uowuginz.sc.entry.js",
		"common",
		92
	],
	"./uyimihqy.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/uyimihqy.entry.js",
		"common",
		93
	],
	"./uyimihqy.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/uyimihqy.sc.entry.js",
		"common",
		94
	],
	"./x0cmgjfr.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/x0cmgjfr.entry.js",
		0,
		"common",
		155
	],
	"./x0cmgjfr.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/x0cmgjfr.sc.entry.js",
		0,
		"common",
		156
	],
	"./xamcianj.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xamcianj.entry.js",
		"common",
		95
	],
	"./xamcianj.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xamcianj.sc.entry.js",
		"common",
		96
	],
	"./xlrit5rt.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xlrit5rt.entry.js",
		157
	],
	"./xlrit5rt.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xlrit5rt.sc.entry.js",
		158
	],
	"./xmfsfrk8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xmfsfrk8.entry.js",
		"common",
		97
	],
	"./xmfsfrk8.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xmfsfrk8.sc.entry.js",
		"common",
		98
	],
	"./xnnvglkc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xnnvglkc.entry.js",
		159
	],
	"./xnnvglkc.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xnnvglkc.sc.entry.js",
		160
	],
	"./xxezcgqf.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xxezcgqf.entry.js",
		"common",
		99
	],
	"./xxezcgqf.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xxezcgqf.sc.entry.js",
		"common",
		100
	],
	"./ybayjltj.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ybayjltj.entry.js",
		"common",
		101
	],
	"./ybayjltj.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ybayjltj.sc.entry.js",
		"common",
		102
	],
	"./yw0echmi.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/yw0echmi.entry.js",
		0,
		"common",
		161
	],
	"./yw0echmi.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/yw0echmi.sc.entry.js",
		0,
		"common",
		162
	],
	"./z5b8ejko.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/z5b8ejko.entry.js",
		"common",
		103
	],
	"./z5b8ejko.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/z5b8ejko.sc.entry.js",
		"common",
		104
	],
	"./z98bzz0p.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/z98bzz0p.entry.js",
		"common",
		105
	],
	"./z98bzz0p.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/z98bzz0p.sc.entry.js",
		"common",
		106
	],
	"./zkjvvmuy.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zkjvvmuy.entry.js",
		0,
		"common",
		163
	],
	"./zkjvvmuy.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zkjvvmuy.sc.entry.js",
		0,
		"common",
		164
	],
	"./zuqg7fkr.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zuqg7fkr.entry.js",
		"common",
		123
	],
	"./zuqg7fkr.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zuqg7fkr.sc.entry.js",
		"common",
		124
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
            {
                title: 'Bottom Sheet',
                url: '/bottom-sheet',
                icon: 'ios-arrow-up'
            },
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
            {
                title: 'Refresher',
                url: '/refresh',
                icon: 'refresh'
            },
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

module.exports = ":host {\n  position: relative;\n  display: block; }\n\n.swiper-slide {\n  text-align: left; }\n\n.content-container {\n  width: 100%; }\n\n@media (max-width: 411px) {\n  .example {\n    margin: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJ5Z3Jvc3NnYXJ0ZW4vRGV2L3RoaW5ncy9maXZldGhyZWUtbGliL3NyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlL2V4YW1wbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJO0lBQ0ksWUFBVyxFQUNkLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4YW1wbGUvZXhhbXBsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDQxMXB4KSB7XG4gICAgLmV4YW1wbGUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG59Il19 */"

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

module.exports = "<ion-footer #footer no-border>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col sizeXs=\"6\" sizeLg=\"3\">\n        <h4>Fivethree</h4>\n        <a class=\"links\" href=\"/fivethree/getting-started\" translate>common.get-started</a>\n        <a class=\"links\" href=\"https://fivethree.io/\" translate>footer.about</a>\n      </ion-col>\n      <ion-col sizeXs=\"6\" sizeLg=\"3\">\n        <h4 translate>footer.resources</h4>\n        <a class=\"links\" href=\"https://angular.io/\">Angular</a>\n        <a class=\"links\" href=\"https://ionicframework.com/\">Ionic</a>\n      </ion-col>\n      <ion-col sizeXs=\"12\" sizeLg=\"6\" id=\"social\">\n        <a href=\"https://www.github.com/fivethree-team/fivethree\" target=\"blank\">\n          <ion-icon slot=\"icon-only\" name=\"logo-github\"></ion-icon>\n        </a>\n        <a href=\"https://twitter.com/fivethreeteam\" target=\"blank\">\n          <ion-icon slot=\"icon-only\" name=\"logo-twitter\"></ion-icon>\n        </a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer {\n  background: var(--ion-color-dark);\n  padding: 24px 0 24px 0; }\n\nh4 {\n  color: var(--ion-color-dark-contrast); }\n\n.links {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 16px;\n  line-height: 1.3;\n  color: var(--ion-color-light); }\n\na:hover {\n  color: var(--ion-color-light-shade); }\n\na {\n  text-decoration: none; }\n\n#social {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n#social a {\n    color: var(--ion-color-light);\n    font-size: 2rem;\n    padding: 0 12px 0 12px; }\n\n#social a:first-child {\n    padding-left: 0; }\n\n#social a:last-child {\n    padding-right: 0; }\n\n@media screen and (max-width: 991px) {\n  #social {\n    order: -1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJ5Z3Jvc3NnYXJ0ZW4vRGV2L3RoaW5ncy9maXZldGhyZWUtbGliL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQWlDO0VBQ2pDLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLHNDQUFxQyxFQUN4Qzs7QUFFRDtFQUNJLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsOEJBQTZCLEVBQ2hDOztBQUVEO0VBQ0ksb0NBQW1DLEVBQ3RDOztBQUVEO0VBQ0ksc0JBQXFCLEVBQ3hCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixvQkFBbUIsRUFldEI7O0FBbEJEO0lBTVEsOEJBQTZCO0lBQzdCLGdCQUFlO0lBQ2YsdUJBQXNCLEVBQ3pCOztBQVRMO0lBWVEsZ0JBQWUsRUFDbEI7O0FBYkw7SUFnQlEsaUJBQWdCLEVBQ25COztBQUdMO0VBQ0k7SUFDSSxVQUFTLEVBQ1osRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBwYWRkaW5nOiAyNHB4IDAgMjRweCAwO1xufVxuXG5oNCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0KTtcbn1cblxuLmxpbmtzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmE6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNzb2NpYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBwYWRkaW5nOiAwIDEycHggMCAxMnB4O1xuICAgIH1cblxuICAgIGE6Zmlyc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgYTpsYXN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgI3NvY2lhbCB7XG4gICAgICAgIG9yZGVyOiAtMTtcbiAgICB9XG59Il19 */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FooterComponent = /** @class */ (function () {
    function FooterComponent(content, el, renderer) {
        this.content = content;
        this.el = el;
        this.renderer = renderer;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.content.getScrollElement()
            .then(function (el) {
            console.log('min height', el.clientHeight - _this.el.nativeElement.firstChild.clientHeight);
            _this.setMinHeight(el.clientHeight - _this.el.nativeElement.firstChild.clientHeight);
        });
        this.resize = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(10)).subscribe(function (res) {
            _this.content.getScrollElement()
                .then(function (el) {
                console.log('min height', el.clientHeight - _this.el.nativeElement.firstChild.clientHeight);
                _this.setMinHeight(el.clientHeight - _this.el.nativeElement.firstChild.clientHeight);
            });
        });
        console.log(this.el);
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        this.resize.unsubscribe();
    };
    FooterComponent.prototype.setMinHeight = function (height) {
        document.body.style.setProperty('--example-min-height', height + "px");
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"])()),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
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

module.exports = "ion-title {\n  cursor: pointer; }\n\n#github {\n  color: var(--ion-color-light-contrast); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJ5Z3Jvc3NnYXJ0ZW4vRGV2L3RoaW5ncy9maXZldGhyZWUtbGliL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSx1Q0FBc0MsRUFDekMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2dpdGh1YiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7XG59ICJdfQ== */"

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

module.exports = __webpack_require__(/*! /Users/garygrossgarten/Dev/things/fivethree-lib/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map