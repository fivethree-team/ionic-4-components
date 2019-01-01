(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/core/fesm5/fivethree-core.js":
/*!*******************************************!*\
  !*** ./dist/core/fesm5/fivethree-core.js ***!
  \*******************************************/
/*! exports provided: MyHammerConfig, FivethreeCoreModule, DrawerState, AppBarComponent, BottomSheetComponent, BottomSheetContentComponent, CollapsableMenuButtonComponent, DialogComponent, ExpandableComponent, ExpandableIndicatorComponent, LoadingButtonComponent, LoadingContentComponent, LoadingFabComponent, LoadingProgressBarComponent, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, FivPasswordInput, RouterItemComponent, StepComponent, StepContentComponent, StepHeaderComponent, StepperComponent, StepperHorizontalComponent, ToolbarSearchComponent, AppBarTabComponent, AppBarTabContentComponent, FivButtonsComponent, ButtonComponent, LoadingService, ɵb, ɵa, ɵc, ɵd, ɵg, ɵf, ɵj, ɵk, ɵh, ɵi, ɵl, ɵe */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivPasswordInput", function() { return FivPasswordInput; });
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
        this.detailIcon = 'ios-arrow-forward';
        this.disabled = false;
        this.matchChildUrl = false;
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
    Object.defineProperty(RouterItemComponent.prototype, "disabledClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.disabled;
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
                    template: "<ion-menu-toggle auto-hide=\"false\">\n    <fiv-ripple>\n        <ion-item [color]=\"color\" [detail]=\"detail\" [detailIcon]=\"detailIcon\" [disabled]=\"disabled\" [lines]=\"lines\">\n            <fiv-icon [name]=\"icon\"></fiv-icon>\n            <ion-label>{{text}}</ion-label>\n        </ion-item>\n    </fiv-ripple>\n</ion-menu-toggle>\n<span *ngIf=\"hasShape()\" [ngClass]=\"getClasses()\" class=\"indicator\"></span>\n<ion-icon *ngIf=\"!hasShape()\" [ngClass]=\"position\" [name]=\"shape\" class=\"indicator\"></ion-icon>",
                    styles: [":host{display:block;position:relative;width:100%}:host.active{--fiv-color-icon:var(--ion-color-primary)}:host.active ion-item{--color:var(--ion-color-primary)}:host.active .dot{display:block}:host.active .line{background-color:var(--fiv-dot-color,var(--ion-color-primary));display:block}:host.active.left .line{width:2px;height:100%;top:0}:host.active.right .line{width:2px;height:100%;top:0}:host.active.top .line{width:calc(100% - 16px);left:8px;height:2px}:host.active.bottom .line{width:calc(100% - 16px);height:2px;left:8px}:host.active.dot.left{padding-left:24px}.indicator{position:absolute}.dot{width:var(--fiv-dot-width,8px);height:var(--fiv-dot-heigt,8px);background-color:var(--fiv-dot-color,var(--ion-color-primary));top:50%;border-radius:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:8px;display:none}.dot.left{left:8px;right:unset}.dot.right{right:8px}.left{left:0}.right{right:0}.top{top:0}.bottom{bottom:0}ion-item{--border-style:none}fiv-icon{--fiv-padding-end:8px}ion-item:hover{cursor:pointer;--background:rgb(240, 240, 240)}:host(.router-item-disabled){pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    RouterItemComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RouterItemComponent.propDecorators = {
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        detail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        detailIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        lines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        matchChildUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        navigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        shape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
        activeClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }],
        disabledClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.router-item-disabled',] }]
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
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return FivPasswordInput; }),
    multi: true
};
var FivPasswordInput = /** @class */ (function () {
    function FivPasswordInput() {
        this.clearOnEdit = false;
        this.disabled = false;
        this.hideIcon = 'eye-off';
        this.position = 'floating';
        this.showIcon = 'eye';
        this._passwordValue = '';
    }
    /**
     * @return {?}
     */
    FivPasswordInput.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FivPasswordInput.prototype.toggleShowPassword = /**
     * @return {?}
     */
    function () {
        this.show = !this.show;
    };
    Object.defineProperty(FivPasswordInput.prototype, "passwordValue", {
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
    FivPasswordInput.prototype.writeValue = /**
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
    FivPasswordInput.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.onTouchedCallback();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FivPasswordInput.prototype.registerOnChange = /**
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
    FivPasswordInput.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    FivPasswordInput.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-password-input',
                    template: "<ion-item [color]=\"color\" [disabled]=\"disabled\" [lines]=\"lines\">\n  <ion-label *ngIf=\"placeholder\" [position]=\"position\">{{ placeholder }}</ion-label>\n  <ion-input [type]=\"show ? 'text' : 'password'\" [(ngModel)]=\"passwordValue\" [clearOnEdit]=\"clearOnEdit\" (ionBlur)=\"blur()\"></ion-input>\n  <ion-icon slot=\"end\" [name]=\"show ? hideIcon : showIcon\" (click)=\"toggleShowPassword()\"></ion-icon>\n</ion-item>",
                    providers: [
                        CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR
                    ],
                    styles: [":host(.password-disabled){pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    FivPasswordInput.ctorParameters = function () { return []; };
    FivPasswordInput.propDecorators = {
        clearOnEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.password-disabled',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hideIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        lines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return FivPasswordInput;
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
        tab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        href: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return AppBarTabComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AppBarComponent = /** @class */ (function () {
    function AppBarComponent(router, tabs) {
        this.router = router;
        this.tabs = tabs;
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
            this.tabsLeft = this.tabComponents.toArray().slice(0, 2);
            this.tabsRight = this.tabComponents.toArray().slice(2, 4);
        }
        else if (position === 'right') {
            this.tabsLeft = this.tabComponents.toArray();
            this.tabsRight = [];
        }
        else if (position === 'left') {
            this.tabsLeft = [];
            this.tabsRight = this.tabComponents.toArray();
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
    /**
     * @param {?} event
     * @return {?}
     */
    AppBarComponent.prototype.ionTabButtonClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.tabs.onTabButtonClick(event);
    };
    AppBarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-app-bar',
                    template: "<div class=\"appbar\" [ngClass]=\"{'cutout': cutoutVisible, 'left': left, 'right': right}\">\n  <div class=\"appbar-rect left\">\n    <div class=\"tabs\">\n      <fiv-app-bar-tab-content (ionTabButtonClick)=\"ionTabButtonClick($event)\"  [active]=\"router.url.endsWith(tab.href)\" [tab]=\"tab.tab\" [href]=\"tab.href\" [name]=\"tab.name\"\n        [icon]=\"tab.icon\" [titleLayout]=\"titleLayout\" *ngFor=\"let tab of tabsLeft\"></fiv-app-bar-tab-content>\n    </div>\n  </div>\n  <fiv-loading-fab (fivHidden)=\"onFabHidden()\" [icon]=\"icon\" [visible]=\"_fabVisible\" #fab (click)=\"fabClick()\"></fiv-loading-fab>\n  <div class=\"rect\"></div>\n  <div class=\"appbar-rect right\">\n    <div class=\"tabs\">\n      <fiv-app-bar-tab-content (ionTabButtonClick)=\"ionTabButtonClick($event)\" [active]=\"router.url.endsWith(tab.href)\" [tab]=\"tab.tab\" [href]=\"tab.href\" [name]=\"tab.name\"\n        [icon]=\"tab.icon\" [titleLayout]=\"titleLayout\" *ngFor=\"let tab of tabsRight\"></fiv-app-bar-tab-content>\n    </div>\n  </div>\n</div>",
                    styles: [":host{--fiv-color-appbar:var(--ion-color-light);--fiv-color-fab:var(--ion-color-primary)}.appbar{width:100%;position:fixed;bottom:0;left:0;height:84px;background:rgba(0,0,0,0);z-index:5000}.appbar .appbar-rect{position:absolute;width:calc(50% - 34px);height:56px;bottom:0;box-shadow:3px -4px 5px 0 rgba(0,0,0,.1);transition:350ms}.appbar .appbar-rect.left{left:0;background:var(--fiv-color-appbar);border-top-right-radius:12px}.appbar .appbar-rect.right{right:0;background:var(--fiv-color-appbar);border-top-left-radius:12px}.appbar fiv-loading-fab{width:56px;height:56px;-webkit-transform:translateX(-50%);transform:translateX(-50%);left:50%;position:absolute;z-index:14}.appbar fiv-loading-fab fiv-icon{--fiv-color-icon:var(--fiv-color-fab-icon)}.appbar .rect{display:inline-block;width:68px;height:48px;position:absolute;overflow:hidden;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:350ms}.appbar .rect:before{content:'';position:absolute;bottom:50%;width:100%;height:100%;border-radius:100%;box-shadow:0 300px 0 300px var(--fiv-color-appbar);transition:350ms}.appbar:not(.cutout) .appbar-rect.left{border-top-right-radius:0}.appbar:not(.cutout) .appbar-rect.right{border-top-left-radius:0}.appbar:not(.cutout) .rect{height:56px;box-shadow:3px -4px 5px 0 rgba(0,0,0,.1);background:var(--fiv-color-appbar)}.appbar:not(.cutout) .rect:before{border-radius:0;bottom:100%}.appbar.left .appbar-rect.left{width:4px}.appbar.left .appbar-rect.right{width:calc(100% - 70px)}.appbar.left .rect{left:4px;-webkit-transform:translateX(0);transform:translateX(0);width:66px}.appbar.left fiv-loading-fab{width:56px;height:56px;-webkit-transform:translateX(0);transform:translateX(0);left:10px;position:absolute}.appbar.right .appbar-rect.left{width:calc(100% - 70px)}.appbar.right .appbar-rect.right{width:4px}.appbar.right .rect{left:calc(100% - 37px);width:67px}.appbar.right fiv-loading-fab{width:56px;height:56px;-webkit-transform:translateX(0);transform:translateX(0);left:calc(100% - 64px);position:absolute;--fiv-spinner-size:68px}.tabs{display:flex;width:100%;height:100%;position:relative}"]
                }] }
    ];
    /** @nocollapse */
    AppBarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabs"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
    ]; };
    AppBarComponent.propDecorators = {
        fab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['fab',] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        titleLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivFabClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        tabComponents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [AppBarTabComponent,] }],
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
    function AppBarTabContentComponent(nav, appbar) {
        this.nav = nav;
        this.appbar = appbar;
        this.active = false;
        this.titleLayout = 'hide';
        this.selected = false;
        this.ionTabButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        // this.nav.navigateRoot(this.href);
        this.ionTabButtonClick.emit({
            tab: this.tab,
            href: this.href,
            selected: true
        });
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
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: AppBarComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
    ]; };
    AppBarTabContentComponent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        href: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        titleLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
        ionTabButtonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
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
        this.fivActionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
            _this.actionSub.unsubscribe();
            _this.thumbnailVisible = true;
        });
        this.actionSub = this.componentRef.instance.fivActionClick
            .subscribe(function (ev) {
            _this.fivActionClick.emit(ev);
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
        this.domCtrl.write(function () {
            if (_this._controlsVisible && _this.footer) {
                _this.renderer.setStyle(_this.footer.nativeElement, 'bottom', "-" + bottom + "px");
            }
        });
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
            if (_this.imageView) {
                _this.renderer.setStyle(_this.imageView.nativeElement, 'transform', "translateY(-50%) scale(" + scale + ")");
            }
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
            if (_this.imageView) {
                _this.renderer.setStyle(_this.imageView.nativeElement, 'top', top + "px");
            }
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
            if (_this.imageView) {
                _this.renderer.setStyle(_this.imageView.nativeElement, 'left', left + "px");
            }
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
    /**
     * @param {?} index
     * @return {?}
     */
    ImageViewerComponent.prototype.onActionClicked = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.fivActionClick.emit(index);
    };
    ImageViewerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-image-viewer',
                    template: "<img class=\"thumbnail\" [width]=\"width\" [height]=\"height\" #thumbnail *ngIf=\"thumbnailVisible\" (click)=\"open($event)\"\n  [src]=\"src\">\n<div #backdrop [@backdrop] (@backdrop.done)=\"onEnter($event)\" *ngIf=\"_isOpen\" class=\"backdrop\">\n  <ion-toolbar [@fade] *ngIf=\"_controlsVisible\" color=\"translucent\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"remove()\">\n        <ion-icon slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div #footer class=\"actions\" [@fade] *ngIf=\"_controlsVisible\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col style=\"text-align: center;\" *ngFor=\"let action of actions; let c = count; let i = index\" [size]=\"12 / c\">\n          <ion-button (click)=\"onActionClicked(i)\" color=\"light\" *ngIf=\"action.name\" [fill]=\"'clear'\">\n            <ion-icon *ngIf=\"action.icon\" slot=\"start\" [name]=\"action.icon\"></ion-icon>\n            {{action.name}}\n          </ion-button>\n          <fiv-ripple (fivClick)=\"onActionClicked(i)\" *ngIf=\"!action.name\">\n            <ion-icon *ngIf=\"action.icon\" [fivCenter] [name]=\"action.icon\"></ion-icon>\n          </fiv-ripple>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</div>\n<img #imageView (@imageLeave.done)=\"detach($event)\" class=\"image-view\" [@imageLeave]=\"{value: ':leave', params : {top: thumbnailPosition.offsetTop, left: thumbnailPosition.offsetLeft, height: thumbnailPosition.height, width: thumbnailPosition.width, panTop: thumbnailPosition.panTop}}\"\n  [@imageEnter]=\"{value: ':enter', params : {top: thumbnailPosition.offsetTop, left: thumbnailPosition.offsetLeft, height: thumbnailPosition.height, width: thumbnailPosition.width}}\"\n  *ngIf=\"thumbnailPosition && _isOpen\" [src]=\"src\">",
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
        fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivActionClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
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
        if (event.fromState !== 'void') {
            this.titleVisible = true;
        }
        else {
            input.setFocus();
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
                        FivPasswordInput,
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
                        FivPasswordInput,
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml2ZXRocmVlLWNvcmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvc3RlcC9zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwLWhlYWRlci9zdGVwLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwLWNvbnRlbnQvc3RlcC1jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwcGVyLWhvcml6b250YWwvc3RlcHBlci1ob3Jpem9udGFsLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL3JvdXRlci1pdGVtL3JvdXRlci1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9jb2xsYXBzYWJsZS1tZW51L2NvbGxhcHNhYmxlLW1lbnUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2NvbGxhcHNhYmxlLW1lbnUtYnV0dG9uL2NvbGxhcHNhYmxlLW1lbnUtYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9wYXNzd29yZC1pbnB1dC9wYXNzd29yZC1pbnB1dC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvYm90dG9tLXNoZWV0L2RyYXdlci1zdGF0ZS50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9ib3R0b20tc2hlZXQtY29udGVudC9ib3R0b20tc2hlZXQtY29udGVudC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvbG9hZGluZy9sb2FkaW5nLnNlcnZpY2UudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvbG9hZGluZy1wcm9ncmVzcy1iYXIvbG9hZGluZy1wcm9ncmVzcy1iYXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2xvYWRpbmctYnV0dG9uL2xvYWRpbmctYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50L2xvYWRpbmctcmVmcmVzaGVyLWNvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2xvYWRpbmctY29udGVudC9sb2FkaW5nLWNvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2xvYWRpbmctZmFiL2xvYWRpbmctZmFiLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9hcHAtYmFyLXRhYi9hcHAtYmFyLXRhYi5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9kaXJlY3RpdmVzL2lmLXBsYXRmb3JtLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9kaXJlY3RpdmVzL2NlbnRlci5kaXJlY3RpdmUudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZGlyZWN0aXZlcy9wZXJtaXNzaW9ucy5kaXJlY3RpdmUudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvcmlwcGxlL3JpcHBsZS5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZGlyZWN0aXZlcy92aWV3cG9ydC5kaXJlY3RpdmUudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZGlyZWN0aXZlcy9wdWxsLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9pY29uL2ljb24uY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2FwcC1iYXItdGFiLWNvbnRlbnQvYXBwLWJhci10YWItY29udGVudC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvdG9vbGJhci1zZWFyY2gvdG9vbGJhci1zZWFyY2guY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZml2LWJ1dHRvbnMvZml2LWJ1dHRvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2V4cGFuZGFibGUtaW5kaWNhdG9yL2V4cGFuZGFibGUtaW5kaWNhdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9maXZldGhyZWUuY29yZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1zdGVwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBpc0xhc3QgPSBmYWxzZTtcbiAgQElucHV0KCkgb3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBzdWJ0aXRsZSA9ICcnO1xuXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0YXRlLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtc3RlcC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwLWhlYWRlci5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiByb3RhdGUnLCBbXG4gICAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdyb3RhdGUgPT4gbm9ybWFsJywgW1xuICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2UtaW4nKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgncm90YXRlJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGVaKDQ1ZGVnKScgfSkpLFxuICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlWigwZGVnKScgfSkpXG4gIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBpY29uU3RhdGUgPSAnbm9ybWFsJztcbiAgdGVtcEljb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgIHRoaXMudGVtcEljb24gPSB0aGlzLmljb247XG4gICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgdGhpcy5pY29uU3RhdGUgPSAnbm9ybWFsJztcbiAgICB9XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLmljb25TdGF0ZSA9ICdyb3RhdGUnO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pY29uID0gdGhpcy50ZW1wSWNvbjtcbiAgfVxuXG59XG4iLCJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIGtleWZyYW1lcyB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtZXhwYW5kYWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbmRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5kYWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignbGlzdEFuaW0nLCBbXG4gICAgICBzdGF0ZSgnb3BlbicsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIG9wYWNpdHk6IDEgfSkpLFxuICAgICAgc3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnMCcsIG9wYWNpdHk6IDAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignY2xvc2VkID0+IG9wZW4nLCBbXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIGVhc2Utb3V0Jywga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7IGhlaWdodDogJzAnLCBvcGFjaXR5OiAwLCBvZmZzZXQ6IDAgfSksXG4gICAgICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcqJywgb3BhY2l0eTogMC4xLCBvZmZzZXQ6IDAuOCB9KSxcbiAgICAgICAgICBzdHlsZSh7IGhlaWdodDogJyonLCBvcGFjaXR5OiAxLCBvZmZzZXQ6IDEgfSksXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdvcGVuID0+IGNsb3NlZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMjIwbXMgZWFzZS1vdXQnLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnKicsIG9wYWNpdHk6IDEsIG9mZnNldDogMCB9KSxcbiAgICAgICAgICBzdHlsZSh7IGhlaWdodDogJyonLCBvcGFjaXR5OiAwLjEsIG9mZnNldDogMC4yIH0pLFxuICAgICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnMCcsIG9wYWNpdHk6IDAsIG9mZnNldDogMSB9KSxcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5kYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaXNPcGVuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBmaXZXaWxsT3BlbjogRXZlbnRFbWl0dGVyPEV4cGFuZGFibGVDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2RGlkT3BlbjogRXZlbnRFbWl0dGVyPEV4cGFuZGFibGVDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2V2lsbENsb3NlOiBFdmVudEVtaXR0ZXI8RXhwYW5kYWJsZUNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmaXZEaWRDbG9zZTogRXZlbnRFbWl0dGVyPHsgZXhwYW5kYWJsZTogRXhwYW5kYWJsZUNvbXBvbmVudCwgcGFyYW06IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwYXJhbTogYW55O1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2U6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5maXZXaWxsT3Blbi5lbWl0KHRoaXMpO1xuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZShwYXJhbT86IGFueSkge1xuICAgIHRoaXMucGFyYW0gPSBwYXJhbTtcbiAgICB0aGlzLmZpdldpbGxDbG9zZS5lbWl0KHRoaXMpO1xuICAgIGNvbnNvbGUubG9nKCdjbG9zZScpO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgb25BbmltYXRpb25FbmQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnY2xvc2VkJykge1xuICAgICAgdGhpcy5maXZEaWRPcGVuLmVtaXQodGhpcyk7XG4gICAgfSBlbHNlIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdvcGVuJykge1xuICAgICAgdGhpcy5maXZEaWRDbG9zZS5lbWl0KHsgZXhwYW5kYWJsZTogdGhpcywgcGFyYW06IHRoaXMucGFyYW0gfSk7XG4gICAgICB0aGlzLnBhcmFtID0gbnVsbDtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RlcEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uL3N0ZXAtaGVhZGVyL3N0ZXAtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBhbmRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1zdGVwLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcC1jb250ZW50LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RlcENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgaXNMYXN0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzT3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBzdWJ0aXRsZSA9ICcnO1xuICBAT3V0cHV0KCkgZml2RGlkT3BlbjogRXZlbnRFbWl0dGVyPFN0ZXBDb250ZW50Q29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdkRpZENsb3NlOiBFdmVudEVtaXR0ZXI8U3RlcENvbnRlbnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2Q2xpY2s6IEV2ZW50RW1pdHRlcjxTdGVwQ29udGVudENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnc2VsZicpIHN0ZXA6IEV4cGFuZGFibGVDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2hlYWRlcicpIGhlYWRlcjogU3RlcEhlYWRlckNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZTogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIHRoaXMuaGVhZGVyLmNvbXBsZXRlKCk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmhlYWRlci5yZXNldCgpO1xuICB9XG5cbiAgYWZ0ZXJDbG9zZSgpIHtcbiAgICB0aGlzLmZpdkRpZENsb3NlLmVtaXQodGhpcyk7XG4gIH1cblxuICBhZnRlck9wZW4oKSB7XG4gICAgdGhpcy5maXZEaWRPcGVuLmVtaXQodGhpcyk7XG4gIH1cblxuICBjbGljaygpIHtcbiAgICB0aGlzLmZpdkNsaWNrLmVtaXQodGhpcyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFF1ZXJ5TGlzdCwgSW5wdXQsIFZpZXdDaGlsZCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0ZXBDb21wb25lbnQgfSBmcm9tICcuLi9zdGVwL3N0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IElvblNsaWRlcyB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0YXRlLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtc3RlcHBlci1ob3Jpem9udGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXBwZXItaG9yaXpvbnRhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0ZXBwZXItaG9yaXpvbnRhbC5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiByb3RhdGUnLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbigncm90YXRlID0+IG5vcm1hbCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZVooNDVkZWcpJyB9KSksXG4gICAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGVaKDBkZWcpJyB9KSlcbiAgICBdKV1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckhvcml6b250YWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNvbnRlbnRzOiBRdWVyeUxpc3Q8U3RlcENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlcycpIHNsaWRlczogSW9uU2xpZGVzO1xuICBAT3V0cHV0KCkgZml2U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNsaWRlcy5sb2NrU3dpcGVzKHRydWUpO1xuICB9XG5cbiAgY2xvc2UoKTogYW55IHtcbiAgICB0aGlzLnNsaWRlcy5zbGlkZVRvKDApO1xuICB9XG4gIG9wZW4oaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgY29uc29sZS5sb2coJ29wZW4gc2xpZGUnLCBpbmRleCk7XG4gICAgdGhpcy5zbGlkZXMubG9ja1N3aXBlcyhmYWxzZSk7XG4gICAgdGhpcy5zbGlkZXMuc2xpZGVUbyhpbmRleCk7XG4gICAgdGhpcy5zbGlkZXMubG9ja1N3aXBlcyh0cnVlKTtcblxuICB9XG5cbn1cbiIsImltcG9ydCB7IFN0ZXBDb21wb25lbnQgfSBmcm9tICcuLy4uL3N0ZXAvc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkcmVuLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIFZpZXdDaGlsZCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdGVwQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL3N0ZXAtY29udGVudC9zdGVwLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0ZXBwZXJIb3Jpem9udGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vc3RlcHBlci1ob3Jpem9udGFsL3N0ZXBwZXItaG9yaXpvbnRhbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtc3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcHBlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oU3RlcENvbXBvbmVudCkgY29udGVudHM6IFF1ZXJ5TGlzdDxTdGVwQ29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZHJlbihTdGVwQ29udGVudENvbXBvbmVudCkgc3RlcHM6IFF1ZXJ5TGlzdDxTdGVwQ29udGVudENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGQoU3RlcHBlckhvcml6b250YWxDb21wb25lbnQpIGhvcml6b250YWw6IFN0ZXBwZXJIb3Jpem9udGFsQ29tcG9uZW50O1xuICBASW5wdXQoKSBtb2RlOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ3ZlcnRpY2FsJztcbiAgQE91dHB1dCgpIGZpdkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBmaXZDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpbmRleDogbnVtYmVyLCBwYXJhbTogYW55IH0+KCk7XG5cbiAgY3VycmVudEluZGV4ID0gMDtcblxuICBwYXJhbTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvcGVuKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICBjb25zb2xlLmxvZygnKyMrIysnKTtcbiAgICAgIHRoaXMuaG9yaXpvbnRhbC5vcGVuKGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJyMjI29wZW4nLCB0aGlzLnN0ZXBzLCB0aGlzLnN0ZXBzLnRvQXJyYXkoKSwgaW5kZXgsIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XSk7XG4gICAgICBpZiAodGhpcy5zdGVwcy50b0FycmF5KClbaW5kZXhdKSB7XG4gICAgICAgIGlmICh0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF0uaXNPcGVuKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2lzIGFscmVhZHkgb3BlbicsIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XS5pc09wZW4pO1xuICAgICAgICAgIHRoaXMuY2xvc2UoaW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdpcyBjbG9zZWQnLCB0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF0uaXNPcGVuKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XS5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcjIyMjJywgaW5kZXgsIHRoaXMuc3RlcHMsIHRoaXMuc3RlcHMudG9BcnJheSgpKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGNsb3NlKGluZGV4OiBudW1iZXIsIHBhcmFtPzogYW55KSB7XG4gICAgdGhpcy5wYXJhbSA9IHBhcmFtO1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgdGhpcy5ob3Jpem9udGFsLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gLSAxO1xuICAgICAgdGhpcy5zdGVwcy50b0FycmF5KClbaW5kZXhdLmNsb3NlKCk7XG4gICAgfVxuXG4gIH1cblxuICBzZWxlY3QoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3QnLCBpbmRleCk7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmNvbnRlbnRzLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XG5cbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbihpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VBbGwoKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICB0aGlzLmhvcml6b250YWwuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgICBzdGVwLmNsb3NlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCkge1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMuc3RlcHMubGVuZ3RoID8gdGhpcy5jdXJyZW50SW5kZXggKyAxIDogLTE7XG4gICAgY29uc29sZS5sb2coJ25leHQgaW5kZXgnLCBuZXh0KTtcbiAgICB0aGlzLnNlbGVjdChuZXh0KTtcbiAgfVxuXG4gIHByZXZpb3VzKCkge1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLmN1cnJlbnRJbmRleCA+IDAgPyB0aGlzLmN1cnJlbnRJbmRleCArIC0xIDogLTE7XG4gICAgY29uc29sZS5sb2coJ25leHQgaW5kZXgnLCBuZXh0KTtcbiAgICB0aGlzLnNlbGVjdChuZXh0KTtcbiAgfVxuXG4gIGNvbXBsZXRlU3RlcChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAvLyBub3QgeWV0IGltcGxldGVudGVkXG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGVwcy50b0FycmF5KClbaW5kZXhdLmNvbXBsZXRlKCk7XG5cbiAgICB9XG4gIH1cblxuICByZXNldChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAvLyBub3QgeWV0IGltcGxldGVudGVkXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XS5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb2xvciwgTW9kZSB9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtcm91dGVyLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcm91dGVyLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yb3V0ZXItaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRlckl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNvbG9yPzogQ29sb3I7XG5cbiAgQElucHV0KCkgZGV0YWlsPzogYm9vbGVhbjtcblxuICBASW5wdXQoKSBkZXRhaWxJY29uID0gJ2lvcy1hcnJvdy1mb3J3YXJkJztcblxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGljb24/OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgbGluZXM/OiAnZnVsbCcgfCAnaW5zZXQnIHwgJ25vbmUnO1xuXG4gIEBJbnB1dCgpIG1hdGNoQ2hpbGRVcmwgPSBmYWxzZTtcblxuICBASW5wdXQoKSBuYXZpZ2F0ZSA9IHRydWU7XG5cbiAgQElucHV0KCkgcGFnZVVybDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIGFjdGl2ZSBzdGF0ZS5cbiAgICogRGVmYXVsdCB2YWx1ZSBpczogYFwibGVmdFwiYFxuICAgKi9cbiAgQElucHV0KCkgcG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICd0b3AnIHwgJ291dGxpbmUnID0gJ2xlZnQnO1xuXG4gIC8qKlxuICAgKiBUaGUgc2hhcGUgb2YgdGhlIGFjdGl2ZSBzdGF0ZS5cbiAgICogUG9zc2libGUgdmFsdWVzIGFyZTogYFwibGluZVwiYCwgYFwiZG90XCJgIGFuZCBhbnkgaW9uaWNvbi5cbiAgICogRGVmYXVsdCB2YWx1ZSBpczogYFwibGluZVwiYFxuICAgKi9cbiAgQElucHV0KCkgc2hhcGU6ICdsaW5lJyB8ICdkb3QnIHwgc3RyaW5nID0gJ2xpbmUnO1xuXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uY2xpY2soKSB7XG4gICAgaWYgKHRoaXMubmF2aWdhdGUgJiYgdGhpcy5wYWdlVXJsKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucGFnZVVybCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBjbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMucG9zaXRpb259ICR7dGhpcy5zaGFwZX1gO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKSBnZXQgYWN0aXZlQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hBY3RpdmVVcmwoKSB8fCB0aGlzLmFjdGl2ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mucm91dGVyLWl0ZW0tZGlzYWJsZWQnKSBnZXQgZGlzYWJsZWRDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBoYXNTaGFwZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFwZSA9PT0gJ2xpbmUnXG4gICAgICB8fCB0aGlzLnNoYXBlID09PSAnZG90JztcbiAgfVxuXG4gIGdldENsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmhhc1NoYXBlKCkgPyBbdGhpcy5wb3NpdGlvbiwgdGhpcy5zaGFwZV0gOiBbdGhpcy5wb3NpdGlvbl07XG4gIH1cblxuICBtYXRjaEFjdGl2ZVVybCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tYXRjaENoaWxkVXJsID8gdGhpcy5pc0NoaWxkVXJsKCkgOiB0aGlzLmlzQ3VycmVudFVybCgpO1xuICB9XG5cbiAgaXNDdXJyZW50VXJsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci51cmwgPT09IHRoaXMucGFnZVVybDtcbiAgfVxuXG4gIGlzQ2hpbGRVcmwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLnVybC5zdGFydHNXaXRoKHRoaXMucGFnZVVybCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlU3R5bGUsIERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZml2Q29sbGFwc2VNZW51XScsXG4gIGV4cG9ydEFzOiAnbWVudUNvbGxhcHNlJ1xufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzYWJsZU1lbnVEaXJlY3RpdmUge1xuXG4gIGNvbGxhcHNlZCA9IGZhbHNlO1xuICBob3ZlcmluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBob3Zlck1lbnUgPSB0cnVlO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHsgfVxuXG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZScpXG4gIGdldCBteVN0eWxlKCk6IFNhZmVTdHlsZSB7XG4gICAgaWYgKHRoaXMuY29sbGFwc2VkICYmICh0aGlzLnBsYXRmb3JtLmlzKCd0YWJsZXQnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdlbGVjdHJvbicpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2Rlc2t0b3AnKSkpIHtcblxuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyXG4gICAgICAgIC5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJ21pbi13aWR0aDogNjRweDsgbWF4LXdpZHRoOiA2NHB4OyAtLWJvcmRlcjogMDsgdHJhbnNpdGlvbjogYWxsIGN1YmljLWJlemllciguNTUsMCwuMSwxKSAyMDBtczsnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgnLS1ib3JkZXI6IDA7IHRyYW5zaXRpb246IGFsbCBjdWJpYy1iZXppZXIoLjU1LDAsLjEsMSkgIDI1MG1zOycpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBob3ZlcigpIHtcbiAgICBpZiAodGhpcy5jb2xsYXBzZWQgJiYgIXRoaXMuaG92ZXJpbmcgJiYgdGhpcy5ob3Zlck1lbnUpIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgICAgdGhpcy5ob3ZlcmluZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIGJsdXIoKSB7XG4gICAgaWYgKCF0aGlzLmhvdmVyTWVudSkgeyByZXR1cm47IH1cbiAgICBpZiAoIXRoaXMuY29sbGFwc2VkICYmIHRoaXMuaG92ZXJpbmcpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5ob3ZlcmluZyA9IGZhbHNlO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGZpdkNvbGxhcHNlTWVudShjb2xsYXBzZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29sbGFwc2VkID0gY29sbGFwc2U7XG4gIH1cblxuXG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgaWYgKHRoaXMuaG92ZXJpbmcpIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgICAgdGhpcy5ob3ZlcmluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuY29sbGFwc2VkID0gdHJ1ZTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbGxhcHNhYmxlTWVudURpcmVjdGl2ZSB9IGZyb20gJy4uL2NvbGxhcHNhYmxlLW1lbnUvY29sbGFwc2FibGUtbWVudS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtY29sbGFwc2FibGUtbWVudS1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29sbGFwc2FibGUtbWVudS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb2xsYXBzYWJsZS1tZW51LWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNhYmxlTWVudUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbWVudTogQ29sbGFwc2FibGVNZW51RGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKCcjIyMnLCB0aGlzLm1lbnUpO1xuICAgIHRoaXMubWVudS50b2dnbGVNZW51KCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdAaW9uaWMvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRml2UGFzc3dvcmRJbnB1dCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtcGFzc3dvcmQtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFzc3dvcmQtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXNzd29yZC1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUlxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGaXZQYXNzd29yZElucHV0IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY2xlYXJPbkVkaXQgPSBmYWxzZTtcblxuICBASW5wdXQoKSBjb2xvcjogQ29sb3I7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wYXNzd29yZC1kaXNhYmxlZCcpXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgaGlkZUljb24gPSAnZXllLW9mZic7XG5cbiAgQElucHV0KCkgbGluZXM/OiAnZnVsbCcgfCAnaW5zZXQnIHwgJ25vbmUnO1xuXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgcG9zaXRpb246ICdmbG9hdGluZycgfCAnaW5saW5lJyB8ICdmaXhlZCcgfCAnc3RhY2tlZCcgPSAnZmxvYXRpbmcnO1xuXG4gIEBJbnB1dCgpIHNob3c6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgc2hvd0ljb24gPSAnZXllJztcblxuICBwcml2YXRlIF9wYXNzd29yZFZhbHVlID0gJyc7XG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHt9O1xuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICB0b2dnbGVTaG93UGFzc3dvcmQoKSB7XG4gICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgfVxuXG4gIGdldCBwYXNzd29yZFZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bhc3N3b3JkVmFsdWU7XG4gIH1cblxuICBzZXQgcGFzc3dvcmRWYWx1ZSh2OiBhbnkpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fcGFzc3dvcmRWYWx1ZSkge1xuICAgICAgdGhpcy5fcGFzc3dvcmRWYWx1ZSA9IHY7XG4gICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5fcGFzc3dvcmRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IHRoaXMuX3Bhc3N3b3JkVmFsdWUpIHtcbiAgICAgIHRoaXMuX3Bhc3N3b3JkVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBibHVyKCkge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG59XG4iLCJleHBvcnQgZW51bSBEcmF3ZXJTdGF0ZSB7XG4gICAgQm90dG9tLFxuICAgIERvY2tlZCxcbiAgICBUb3Bcbn1cbiIsImltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhd2VyU3RhdGUgfSBmcm9tICcuLi9ib3R0b20tc2hlZXQvZHJhd2VyLXN0YXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWJvdHRvbS1zaGVldC1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JvdHRvbS1zaGVldC1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYm90dG9tLXNoZWV0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21TaGVldENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHJvdW5kZWQgPSB0cnVlO1xuICBASW5wdXQoKSBoYW5kbGUgPSB0cnVlO1xuICBASW5wdXQoKSBmbG9hdCA9IHRydWU7XG5cbiAgQE91dHB1dCgpIGZpdkhhbmRsZUNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjdXJyZW50U3RhdGU6IERyYXdlclN0YXRlO1xuICBzdGF0ZXMgPSBEcmF3ZXJTdGF0ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnJvdW5kZWQnKSBnZXQgaXNSb3VuZGVkKCk6IGJvb2xlYW4ge1xuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50U3RhdGUpIHtcbiAgICAgIGNhc2UgRHJhd2VyU3RhdGUuVG9wOiByZXR1cm4gZmFsc2U7XG4gICAgICBjYXNlIERyYXdlclN0YXRlLkRvY2tlZDogcmV0dXJuIHRoaXMucm91bmRlZDtcbiAgICAgIGNhc2UgRHJhd2VyU3RhdGUuQm90dG9tOiByZXR1cm4gdGhpcy5yb3VuZGVkICYmICF0aGlzLmZsb2F0O1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUnKSBnZXQgc3R5bGVzKCk6IFNhZmVTdHlsZSB7XG4gICAgaWYgKCEodGhpcy5mbG9hdCAmJiB0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gRHJhd2VyU3RhdGUuQm90dG9tKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKHN0YXRlOiBEcmF3ZXJTdGF0ZSk6IGFueSB7XG4gICAgY29uc29sZS5sb2coJ2NvbnRlbnQgZ290IHN0YXRlJywgc3RhdGUpO1xuICAgIHRoaXMuY3VycmVudFN0YXRlID0gc3RhdGU7XG4gIH1cblxuICBjbGljaygpIHtcbiAgICB0aGlzLmZpdkhhbmRsZUNsaWNrLmVtaXQoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBCb3R0b21TaGVldENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi9ib3R0b20tc2hlZXQtY29udGVudC9ib3R0b20tc2hlZXQtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBDb250ZW50Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21Db250cm9sbGVyLCBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IERyYXdlclN0YXRlIH0gZnJvbSAnLi9kcmF3ZXItc3RhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtYm90dG9tLXNoZWV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JvdHRvbS1zaGVldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JvdHRvbS1zaGVldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZG9ja2VkSGVpZ2h0ID0gODA7XG5cbiAgQElucHV0KCkgc2hvdWxkQm91bmNlID0gdHJ1ZTtcblxuICBASW5wdXQoKSBkaXN0YW5jZVRvcCA9IDU2O1xuXG4gIEBJbnB1dCgpIHRyYW5zaXRpb24gPSAnMC4yNXMgZWFzZS1pbi1vdXQnO1xuXG4gIEBJbnB1dCgpIHN0YXRlOiBEcmF3ZXJTdGF0ZSA9IERyYXdlclN0YXRlLkJvdHRvbTtcblxuICBASW5wdXQoKSBtaW5pbXVtSGVpZ2h0ID0gMjQ7XG5cbiAgQE91dHB1dCgpIHN0YXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RHJhd2VyU3RhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3ZXJTdGF0ZT4oKTtcbiAgQE91dHB1dCgpIGZpdk9wZW46IEV2ZW50RW1pdHRlcjxCb3R0b21TaGVldENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEJvdHRvbVNoZWV0Q29tcG9uZW50PigpO1xuICBAT3V0cHV0KCkgZml2RG9ja2VkOiBFdmVudEVtaXR0ZXI8Qm90dG9tU2hlZXRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxCb3R0b21TaGVldENvbXBvbmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdkNsb3NlOiBFdmVudEVtaXR0ZXI8Qm90dG9tU2hlZXRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxCb3R0b21TaGVldENvbXBvbmVudD4oKTtcblxuICBAQ29udGVudENoaWxkKEJvdHRvbVNoZWV0Q29udGVudENvbXBvbmVudCkgY29udGVudDogQm90dG9tU2hlZXRDb250ZW50Q29tcG9uZW50O1xuXG4gIHByaXZhdGUgX3N0YXJ0UG9zaXRpb25Ub3A6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBfQk9VTkNFX0RFTFRBID0gMzA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2RvbUN0cmw6IERvbUNvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7IH1cblxuXG4gIC8vIEBIb3N0QmluZGluZygnc3R5bGUnKSBnZXQgc3R5bGVzKCkge1xuICAvLyAgIGlmICh0aGlzLnJvdW5kZWQpIHtcbiAgLy8gICAgIHJldHVybiB0aGlzLnNhbml0aXplclxuICAvLyAgICAgICAuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCcgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDsgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7Jyk7XG4gIC8vICAgfVxuXG4gIC8vIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5fZWxlbWVudCwgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maXYtYm90dG9tLWRyYXdlci1zY3JvbGxhYmxlLWNvbnRlbnQgLnNjcm9sbC15JykpO1xuICAgIC8vIHRoaXMuX3JlbmRlcmVyLlxuICAgIC8vICAgc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maXYtYm90dG9tLWRyYXdlci1zY3JvbGxhYmxlLWNvbnRlbnQgLnNjcm9sbC15JyksICd0b3VjaC1hY3Rpb24nLCAnbm9uZScpO1xuICAgIHRoaXMuX3NldERyYXdlclN0YXRlKHRoaXMuc3RhdGUpO1xuXG4gICAgY29uc3QgaGFtbWVyID0gbmV3IEhhbW1lcih0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIGhhbW1lci5nZXQoJ3BhbicpLnNldCh7IGVuYWJsZTogdHJ1ZSwgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX1ZFUlRJQ0FMIH0pO1xuICAgIGhhbW1lci5vbigncGFuIHBhbnN0YXJ0IHBhbmVuZCcsIChldjogYW55KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2LnR5cGUpIHtcbiAgICAgICAgY2FzZSAncGFuc3RhcnQnOlxuICAgICAgICAgIHRoaXMuX2hhbmRsZVBhblN0YXJ0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BhbmVuZCc6XG4gICAgICAgICAgdGhpcy5faGFuZGxlUGFuRW5kKGV2KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLl9oYW5kbGVQYW4oZXYpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jb250ZW50LmZpdkhhbmRsZUNsaWNrXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgY2FzZSBEcmF3ZXJTdGF0ZS5Cb3R0b206IHJldHVybiB0aGlzLmRvY2soKTtcbiAgICAgICAgICBjYXNlIERyYXdlclN0YXRlLkRvY2tlZDogcmV0dXJuIHRoaXMub3BlbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghY2hhbmdlcy5zdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zZXREcmF3ZXJTdGF0ZShjaGFuZ2VzLnN0YXRlLmN1cnJlbnRWYWx1ZSk7XG4gICAgdGhpcy51cGRhdGVDb250ZW50KGNoYW5nZXMuc3RhdGUuY3VycmVudFZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZUNvbnRlbnQoc3RhdGU6IERyYXdlclN0YXRlKSB7XG4gICAgaWYgKHRoaXMuY29udGVudCkge1xuICAgICAgdGhpcy5jb250ZW50LnVwZGF0ZVN0YXRlKHN0YXRlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXREcmF3ZXJTdGF0ZShzdGF0ZTogRHJhd2VyU3RhdGUpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgdGhpcy50cmFuc2l0aW9uKTtcbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICBjYXNlIERyYXdlclN0YXRlLkJvdHRvbTpcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSgnY2FsYygxMDB2aCAtICcgKyB0aGlzLm1pbmltdW1IZWlnaHQgKyAncHgpJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBEcmF3ZXJTdGF0ZS5Eb2NrZWQ6XG4gICAgICAgIHRoaXMuX3NldFRyYW5zbGF0ZVkoKHRoaXMuX3BsYXRmb3JtLmhlaWdodCgpIC0gdGhpcy5kb2NrZWRIZWlnaHQpICsgJ3B4Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSh0aGlzLmRpc3RhbmNlVG9wICsgJ3B4Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUGFuU3RhcnQoKSB7XG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvblRvcCA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVQYW5FbmQoZXYpIHtcbiAgICBpZiAodGhpcy5zaG91bGRCb3VuY2UgJiYgZXYuaXNGaW5hbCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsIHRoaXMudHJhbnNpdGlvbik7XG5cbiAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgICBjYXNlIERyYXdlclN0YXRlLkRvY2tlZDpcbiAgICAgICAgICB0aGlzLl9oYW5kbGVEb2NrZWRQYW5FbmQoZXYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIERyYXdlclN0YXRlLlRvcDpcbiAgICAgICAgICB0aGlzLl9oYW5kbGVUb3BQYW5FbmQoZXYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuX2hhbmRsZUJvdHRvbVBhbkVuZChldik7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RhdGVDaGFuZ2UuZW1pdCh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVRvcFBhbkVuZChldikge1xuICAgIGlmIChldi5kZWx0YVkgPiB0aGlzLl9CT1VOQ0VfREVMVEEpIHtcbiAgICAgIGlmICh0aGlzLm1pbmltdW1IZWlnaHQgPT09IHRoaXMuZG9ja2VkSGVpZ2h0KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBEcmF3ZXJTdGF0ZS5Cb3R0b20pIHtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gRHJhd2VyU3RhdGUuQm90dG9tO1xuICAgICAgICAgIHRoaXMuZml2Q2xvc2UuZW1pdCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IERyYXdlclN0YXRlLkRvY2tlZCkge1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Eb2NrZWQ7XG4gICAgICAgICAgdGhpcy5maXZEb2NrZWQuZW1pdCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFRyYW5zbGF0ZVkodGhpcy5kaXN0YW5jZVRvcCArICdweCcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZURvY2tlZFBhbkVuZChldikge1xuICAgIGNvbnN0IGFic0RlbHRhWSA9IE1hdGguYWJzKGV2LmRlbHRhWSk7XG4gICAgaWYgKGFic0RlbHRhWSA+IHRoaXMuX0JPVU5DRV9ERUxUQSAmJiBldi5kZWx0YVkgPCAwKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gRHJhd2VyU3RhdGUuVG9wKSB7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IERyYXdlclN0YXRlLlRvcDtcbiAgICAgICAgdGhpcy5maXZPcGVuLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFic0RlbHRhWSA+IHRoaXMuX0JPVU5DRV9ERUxUQSAmJiBldi5kZWx0YVkgPiAwKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gRHJhd2VyU3RhdGUuQm90dG9tKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Cb3R0b207XG4gICAgICAgIHRoaXMuZml2Q2xvc2UuZW1pdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKCh0aGlzLl9wbGF0Zm9ybS5oZWlnaHQoKSAtIHRoaXMuZG9ja2VkSGVpZ2h0KSArICdweCcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUJvdHRvbVBhbkVuZChldikge1xuICAgIGlmICgtZXYuZGVsdGFZID4gdGhpcy5fQk9VTkNFX0RFTFRBKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gRHJhd2VyU3RhdGUuRG9ja2VkKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Eb2NrZWQ7XG4gICAgICAgIHRoaXMuZml2RG9ja2VkLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSgnY2FsYygxMDB2aCAtICcgKyB0aGlzLm1pbmltdW1IZWlnaHQgKyAncHgpJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUGFuKGV2KSB7XG4gICAgY29uc3QgcG9pbnRlclkgPSBldi5jZW50ZXIueTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgJ25vbmUnKTtcbiAgICBpZiAocG9pbnRlclkgPiAwICYmIHBvaW50ZXJZIDwgdGhpcy5fcGxhdGZvcm0uaGVpZ2h0KCkpIHtcbiAgICAgIGlmIChldi5hZGRpdGlvbmFsRXZlbnQgPT09ICdwYW51cCcgfHwgZXYuYWRkaXRpb25hbEV2ZW50ID09PSAncGFuZG93bicpIHtcbiAgICAgICAgY29uc3QgbmV3VG9wID0gdGhpcy5fc3RhcnRQb3NpdGlvblRvcCArIGV2LmRlbHRhWTtcbiAgICAgICAgaWYgKG5ld1RvcCA+PSB0aGlzLmRpc3RhbmNlVG9wKSB7XG4gICAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWShuZXdUb3AgKyAncHgnKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdUb3AgPCB0aGlzLmRpc3RhbmNlVG9wKSB7XG4gICAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSh0aGlzLmRpc3RhbmNlVG9wICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1RvcCA+IHRoaXMuX3BsYXRmb3JtLmhlaWdodCgpIC0gdGhpcy5taW5pbXVtSGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSgodGhpcy5fcGxhdGZvcm0uaGVpZ2h0KCkgLSB0aGlzLm1pbmltdW1IZWlnaHQpICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRUcmFuc2xhdGVZKHZhbHVlKSB7XG4gICAgdGhpcy5fZG9tQ3RybC53cml0ZSgoKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgnICsgdmFsdWUgKyAnKScpO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnN0YXRlID0gRHJhd2VyU3RhdGUuVG9wO1xuICAgIHRoaXMuX3NldERyYXdlclN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMudXBkYXRlQ29udGVudCh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Cb3R0b207XG4gICAgdGhpcy5fc2V0RHJhd2VyU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy51cGRhdGVDb250ZW50KHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgZG9jaygpIHtcbiAgICB0aGlzLnN0YXRlID0gRHJhd2VyU3RhdGUuRG9ja2VkO1xuICAgIHRoaXMuX3NldERyYXdlclN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMudXBkYXRlQ29udGVudCh0aGlzLnN0YXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1NlcnZpY2Uge1xuXG4gIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBpc0NvbXBsZXRlID0gZmFsc2U7XG4gIHB1YmxpYyBsb2FkQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRoaXMubG9hZGluZyk7XG4gIHB1YmxpYyBjb21wbGV0ZUNoYW5nZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0aGlzLmlzQ29tcGxldGUpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMubG9hZENoYW5nZS5uZXh0KHRoaXMubG9hZGluZyk7XG4gIH1cblxuICB1bmxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5sb2FkQ2hhbmdlLm5leHQodGhpcy5sb2FkaW5nKTtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgfVxuXG4gIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIGNvbnNvbGUubG9nKCdzZXQgc2VydmljZSBjb21wbGV0ZScpO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgdGhpcy5jb21wbGV0ZUNoYW5nZS5uZXh0KHRoaXMuaXNDb21wbGV0ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgQW5pbWF0aW9uQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9sb2FkaW5nL2xvYWRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyB0aW1lciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGltZUludGVydmFsLCBwbHVjaywgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWxvYWRpbmctcHJvZ3Jlc3MtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy1wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3Byb2dyZXNzQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pLFxuICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMjk5bXMgZWFzZS1pbicsIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcigncHJvZ3Jlc3NBbmltTGluZWFyJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IGhlaWdodDogJzBweCcgfSksXG4gICAgICAgIGFuaW1hdGUoJzY1bXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzI5OW1zIGVhc2UtaW4nLCBzdHlsZSh7IGhlaWdodDogJzBweCcgfSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IGxlZnQ6ICctNSUnLCB3aWR0aDogJzUlJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnODUwbXMgZWFzZS1vdXQnLCBzdHlsZSh7IGxlZnQ6ICcwJScsIHdpZHRoOiAnMTAwJScgfSkpXG4gICAgICBdKSxcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdQcm9ncmVzc0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIGdsb2JhbCA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0NvbXBsZXRlID0gZmFsc2U7XG4gIHByb2dyZXNzID0gMDtcbiAgQElucHV0KCkgdmVydGljYWxBbGlnbjogJ3RvcCcgfCAnYm90dG9tJyA9ICd0b3AnO1xuICBAT3V0cHV0KCkgZml2Q29tcGxldGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBmaXZEb25lU2hyaW5raW5nOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoOiBFdmVudEVtaXR0ZXI8TG9hZGluZ1Byb2dyZXNzQmFyQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGluZ1Byb2dyZXNzQmFyQ29tcG9uZW50PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2JhcicpIGJhcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbGluZWFyJykgbGluZWFyOiBFbGVtZW50UmVmO1xuXG4gIHBhcmFtOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxvYWRpbmdTZXJ2aWNlOiBMb2FkaW5nU2VydmljZSwgcHJpdmF0ZSBidWlsZGVyOiBBbmltYXRpb25CdWlsZGVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5nbG9iYWwpIHtcbiAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuY29tcGxldGVDaGFuZ2Uuc3Vic2NyaWJlKGlzQ29tcGxldGUgPT4ge1xuICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5jb21wbGV0ZUNoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmZpdlJlZnJlc2guZW1pdCh0aGlzKTtcbiAgfVxuXG4gIHVubG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pc0NvbXBsZXRlKSB7XG4gICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb21wbGV0ZShwYXJhbTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ3NldCBjb21wbGV0ZScpO1xuICAgIHRoaXMucGFyYW0gPSBwYXJhbTtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuaXNDb21wbGV0ZSk7XG4gIH1cblxuICBmaWxsQW5pbWF0aW9uQ29tcGxldGUoaXNDb21wbGV0ZTogYm9vbGVhbikge1xuICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZmlsbCBhbmltYXRpb24gY29tcGxldGUnLCBpc0NvbXBsZXRlKTtcbiAgICAgIHRoaXMuZml2Q29tcGxldGUuZW1pdCh0aGlzLnBhcmFtKTtcbiAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5wYXJhbSA9IG51bGw7XG4gICAgICBpZiAodGhpcy5nbG9iYWwpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS51bmxvYWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudW5sb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MpIHtcbiAgICBpZiAocHJvZ3Jlc3MgPCAwKSB7XG4gICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHByb2dyZXNzID4gMTAwKSB7XG4gICAgICB0aGlzLnByb2dyZXNzID0gMTAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgY29uc29sZS5sb2coJ3NldCBwcm9ncmVzcycsIHByb2dyZXNzKTtcblxuICB9XG5cbiAgaW5jcmVtZW50QnkocHJvZ3Jlc3MpIHtcbiAgICB0aGlzLnNldFByb2dyZXNzKHByb2dyZXNzICsgdGhpcy5wcm9ncmVzcyk7XG4gIH1cblxuICBkZWNyZW1lbnRCeShwcm9ncmVzcykge1xuICAgIHRoaXMuc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MgKyB0aGlzLnByb2dyZXNzKTtcbiAgfVxuXG4gIGZpbGxJbihtczogbnVtYmVyKSB7XG4gICAgLy8gZmlyc3QgZGVmaW5lIGEgcmV1c2FibGUgYW5pbWF0aW9uXG4gICAgY29uc3QgbXlBbmltYXRpb24gPSB0aGlzLmJ1aWxkZXIuYnVpbGQoW1xuICAgICAgc3R5bGUoeyB3aWR0aDogdGhpcy5wcm9ncmVzcyB9KSxcbiAgICAgIGFuaW1hdGUobXMsIHN0eWxlKHsgd2lkdGg6ICcxMDAlJyB9KSlcbiAgICBdKTtcblxuICAgIC8vIHVzZSB0aGUgcmV0dXJuZWQgZmFjdG9yeSBvYmplY3QgdG8gY3JlYXRlIGEgcGxheWVyXG4gICAgY29uc3QgcGxheWVyID0gbXlBbmltYXRpb24uY3JlYXRlKHRoaXMubGluZWFyLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgcGxheWVyLnBsYXkoKTtcbiAgICBjb25zdCB0ID0gdGltZXIoMCwgbXMgLyAoMTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAxMDApIHtcbiAgICAgICAgICByZXR1cm4gdC51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MrKztcbiAgICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnQgcHJvZ3Jlc3MnLCB0aGlzLnByb2dyZXNzKTtcbiAgICAgIH0pO1xuICAgIHBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgdGhpcy5maXZDb21wbGV0ZS5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IDEwMDtcbiAgICAgIHBsYXllci5kZXN0cm95KCk7XG4gICAgfSk7XG4gIH1cblxuICBzaHJpbmtJbihtczogbnVtYmVyKSB7XG4gICAgLy8gZmlyc3QgZGVmaW5lIGEgcmV1c2FibGUgYW5pbWF0aW9uXG4gICAgdGhpcy5wcm9ncmVzcyA9IDEwMDtcbiAgICBjb25zdCBteUFuaW1hdGlvbiA9IHRoaXMuYnVpbGRlci5idWlsZChbXG4gICAgICBzdHlsZSh7IHdpZHRoOiBgJHt0aGlzLnByb2dyZXNzfSVgIH0pLFxuICAgICAgYW5pbWF0ZShtcywgc3R5bGUoeyB3aWR0aDogMCB9KSlcbiAgICBdKTtcblxuICAgIC8vIHVzZSB0aGUgcmV0dXJuZWQgZmFjdG9yeSBvYmplY3QgdG8gY3JlYXRlIGEgcGxheWVyXG4gICAgY29uc3QgcGxheWVyID0gbXlBbmltYXRpb24uY3JlYXRlKHRoaXMubGluZWFyLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgY29uc3QgdCA9IHRpbWVyKDAsIG1zIC8gKDEwMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPD0gMCkge1xuICAgICAgICAgIHJldHVybiB0LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9ncmVzcy0tO1xuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudCBwcm9ncmVzcycsIHRoaXMucHJvZ3Jlc3MpO1xuICAgICAgfSk7XG5cbiAgICBwbGF5ZXIucGxheSgpO1xuICAgIHBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgdGhpcy5maXZEb25lU2hyaW5raW5nLmVtaXQodHJ1ZSk7XG4gICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgIHBsYXllci5kZXN0cm95KCk7XG4gICAgfSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9hZGluZ1Byb2dyZXNzQmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vbG9hZGluZy1wcm9ncmVzcy1iYXIvbG9hZGluZy1wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWxvYWRpbmctYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy1idXR0b24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgncHJvZ3Jlc3MnKSBwcm9ncmVzczogTG9hZGluZ1Byb2dyZXNzQmFyQ29tcG9uZW50O1xuICBASW5wdXQoKSBjb2xvciA9ICdsaWdodCc7XG4gIEBJbnB1dCgpIGV4cGFuZCA9ICdibG9jayc7XG4gIEBJbnB1dCgpIGZpbGwgPSAnc29saWQnO1xuICBASW5wdXQoKSBzaXplID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBzaGFwZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmJ1dHRvbi1kaXNhYmxlZCcpXG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdmVydGljYWxBbGlnbjogJ3RvcCcgfCAnYm90dG9tJyA9ICd0b3AnO1xuXG4gIEBJbnB1dCgpIHR5cGU6ICdzdWJtaXQnIHwgJ3Jlc2V0JyB8ICdidXR0b24nID0gJ2J1dHRvbic7XG5cbiAgQE91dHB1dCgpIGZpdlJlZnJlc2g6IEV2ZW50RW1pdHRlcjxMb2FkaW5nQnV0dG9uQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdlJlZnJlc2hDb21wbGV0ZTogRXZlbnRFbWl0dGVyPExvYWRpbmdCdXR0b25Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2QnV0dG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxMb2FkaW5nQnV0dG9uQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICAgIHRoaXMucHJvZ3Jlc3MudG9nZ2xlU3Bpbm5lcigpO1xuICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KHRoaXMpO1xuICB9XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMucHJvZ3Jlc3MubG9hZCgpO1xuICB9XG5cbiAgdW5sb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMucHJvZ3Jlc3MudW5sb2FkKCk7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICB0aGlzLnByb2dyZXNzLmNvbXBsZXRlKHt9KTtcbiAgICB9XG4gIH1cblxuICBvbkNvbXBsZXRlKGlzQ29tcGxldGU6IGJvb2xlYW4pIHtcbiAgICBjb25zb2xlLmxvZygnb24gY29tcGxldGUnLCBpc0NvbXBsZXRlKTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmZpdlJlZnJlc2hDb21wbGV0ZS5lbWl0KHRoaXMpO1xuICB9XG5cbiAgb25DbGljaygpIHtcbiAgICB0aGlzLmZpdkJ1dHRvbkNsaWNrLmVtaXQodGhpcyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBbmltYXRpb25CdWlsZGVyLCBzdHlsZSwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgdGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9wdGlvbmFsLFxuICBJbmplY3QsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3Q2hpbGQsIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyB0aW1lciwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbmNvbnN0IEJBU0VfU0laRSA9IDEwMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWxvYWRpbmctc3Bpbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS53aWR0aC5weF0nOiAnZGlhbWV0ZXInLFxuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdkaWFtZXRlcidcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHN0YXRpYyBkaWFtZXRlcnMgPSBuZXcgU2V0PG51bWJlcj4oW0JBU0VfU0laRV0pO1xuICBwcml2YXRlIHN0YXRpYyBzdHlsZVRhZzogSFRNTFN0eWxlRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9kaWFtZXRlciA9IEJBU0VfU0laRTtcbiAgX3N0cm9rZVdpZHRoID0gMTA7XG4gIF92YWx1ZSA9IDA7XG5cblxuICBAT3V0cHV0KCkgZml2UHJvZ3Jlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIGZpdkNvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nU3Bpbm5lckNvbXBvbmVudD4oKTtcbiAgQFZpZXdDaGlsZCgnZGV0ZXJtaW5hdGVDaXJjbGUnKSBkZXRlcm1pbmF0ZUNpcmNsZTogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgbW9kZTogJ2luZGV0ZXJtaW5hdGUnIHwgJ2RldGVybWluYXRlJyA9ICdpbmRldGVybWluYXRlJztcbiAgQElucHV0KCkgY2lyY2xlUmFkaXVzID0gNDU7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBjbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlICsgJyBtYXQtc3Bpbm5lciBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci1pbmRldGVybWluYXRlLWFuaW1hdGlvbic7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LCBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGNoYW5nZTogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlciwgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0IHZpZXdCb3goKSB7XG4gICAgY29uc3Qgdmlld0JveCA9IHRoaXMuY2lyY2xlUmFkaXVzICogMiArIHRoaXMuc3Ryb2tlV2lkdGg7XG4gICAgcmV0dXJuIGAwIDAgJHt2aWV3Qm94fSAke3ZpZXdCb3h9YDtcbiAgfVxuXG4gIC8qKiBUaGUgc3Ryb2tlIGNpcmN1bWZlcmVuY2Ugb2YgdGhlIHN2ZyBjaXJjbGUuICovXG4gIGdldCBzdHJva2VDaXJjdW1mZXJlbmNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDIgKiBNYXRoLlBJICogdGhpcy5jaXJjbGVSYWRpdXM7XG4gIH1cblxuICAvKiogVGhlIGRhc2ggb2Zmc2V0IG9mIHRoZSBzdmcgY2lyY2xlLiAqL1xuICBnZXQgc3Ryb2tlRGFzaE9mZnNldCgpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJva2VDaXJjdW1mZXJlbmNlICogKDEwMCAtIHRoaXMuX3ZhbHVlKSAvIDEwMDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBTdHJva2Ugd2lkdGggb2YgdGhlIGNpcmNsZSBpbiBwZXJjZW50LiAqL1xuICBnZXQgY2lyY2xlU3Ryb2tlV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Ryb2tlV2lkdGggLyB0aGlzLmRpYW1ldGVyICogMTAwO1xuICB9XG5cbiAgLyoqIFZhbHVlIG9mIHRoZSBwcm9ncmVzcyBjaXJjbGUuICovXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdkZXRlcm1pbmF0ZScgPyB0aGlzLl92YWx1ZSA6IDA7XG4gIH1cbiAgc2V0IHZhbHVlKG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgKG5ld1ZhbHVlKSkpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpYW1ldGVyKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9kaWFtZXRlcjsgfVxuICBzZXQgZGlhbWV0ZXIoc2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZGlhbWV0ZXIgPSBzaXplO1xuXG4gICAgaWYgKCFMb2FkaW5nU3Bpbm5lckNvbXBvbmVudC5kaWFtZXRlcnMuaGFzKHRoaXMuX2RpYW1ldGVyKSkge1xuICAgICAgdGhpcy5fYXR0YWNoU3R5bGVOb2RlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFN0cm9rZSB3aWR0aCBvZiB0aGUgcHJvZ3Jlc3Mgc3Bpbm5lci4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cm9rZVdpZHRoIHx8IHRoaXMuZGlhbWV0ZXIgLyAxMDtcbiAgfVxuICBzZXQgc3Ryb2tlV2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3N0cm9rZVdpZHRoID0gdmFsdWU7XG4gIH1cblxuXG4gIC8qKiBEeW5hbWljYWxseSBnZW5lcmF0ZXMgYSBzdHlsZSB0YWcgY29udGFpbmluZyB0aGUgY29ycmVjdCBhbmltYXRpb24gZm9yIHRoaXMgZGlhbWV0ZXIuICovXG4gIHByaXZhdGUgX2F0dGFjaFN0eWxlTm9kZSgpOiB2b2lkIHtcbiAgICBsZXQgc3R5bGVUYWcgPSBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudC5zdHlsZVRhZztcblxuICAgIGlmICghc3R5bGVUYWcpIHtcbiAgICAgIHN0eWxlVGFnID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHRoaXMuX2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVUYWcpO1xuICAgICAgTG9hZGluZ1NwaW5uZXJDb21wb25lbnQuc3R5bGVUYWcgPSBzdHlsZVRhZztcbiAgICB9XG5cbiAgICBpZiAoc3R5bGVUYWcgJiYgc3R5bGVUYWcuc2hlZXQpIHtcbiAgICAgIChzdHlsZVRhZy5zaGVldCBhcyBDU1NTdHlsZVNoZWV0KS5pbnNlcnRSdWxlKHRoaXMuX2dldEFuaW1hdGlvblRleHQoKSwgMCk7XG4gICAgfVxuXG4gICAgTG9hZGluZ1NwaW5uZXJDb21wb25lbnQuZGlhbWV0ZXJzLmFkZCh0aGlzLmRpYW1ldGVyKTtcbiAgfVxuXG5cbiAgLyoqIEdlbmVyYXRlcyBhbmltYXRpb24gc3R5bGVzIGFkanVzdGVkIGZvciB0aGUgc3Bpbm5lcidzIGRpYW1ldGVyLiAqL1xuICBwcml2YXRlIF9nZXRBbmltYXRpb25UZXh0KCk6IHN0cmluZyB7XG4gICAgY29uc3QgSU5ERVRFUk1JTkFURV9BTklNQVRJT05fVEVNUExBVEUgPSBgXG4gICAgQGtleWZyYW1lcyBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci1zdHJva2Utcm90YXRlLURJQU1FVEVSIHtcbiAgICAgICAwJSAgICAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cbiAgICAgICAxMi41JSAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IEVORF9WQUxVRTsgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cbiAgICAgICAxMi41MDAxJSAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGUoNzIuNWRlZyk7IH1cbiAgICAgICAyNSUgICAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDcyLjVkZWcpOyB9XG4gICAgICAgMjUuMDAwMSUgICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBTVEFSVF9WQUxVRTsgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7IH1cbiAgICAgICAzNy41JSAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IEVORF9WQUxVRTsgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgfVxuICAgICAgIDM3LjUwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZSgxNjEuNWRlZyk7IH1cbiAgICAgICA1MCUgICAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDE2MS41ZGVnKTsgfVxuICAgICAgIDUwLjAwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBTVEFSVF9WQUxVRTsgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cbiAgICAgICA2Mi41JSAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IEVORF9WQUxVRTsgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxuICAgICAgIDYyLjUwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZSgyNTEuNWRlZyk7IH1cbiAgICAgICA3NSUgICAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDI1MS41ZGVnKTsgfVxuICAgICAgIDc1LjAwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBTVEFSVF9WQUxVRTsgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxuICAgICAgIDg3LjUlICAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7IH1cbiAgICAgICA4Ny41MDAxJSAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGUoMzQxLjVkZWcpOyB9XG4gICAgICAgMTAwJSAgICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBTVEFSVF9WQUxVRTsgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZSgzNDEuNWRlZyk7IH1cbiAgICAgfVxuICAgYDtcbiAgICByZXR1cm4gSU5ERVRFUk1JTkFURV9BTklNQVRJT05fVEVNUExBVEVcbiAgICAgIC8vIEFuaW1hdGlvbiBzaG91bGQgYmVnaW4gYXQgNSUgYW5kIGVuZCBhdCA4MCVcbiAgICAgIC5yZXBsYWNlKC9TVEFSVF9WQUxVRS9nLCBgJHswLjk1ICogdGhpcy5zdHJva2VDaXJjdW1mZXJlbmNlfWApXG4gICAgICAucmVwbGFjZSgvRU5EX1ZBTFVFL2csIGAkezAuMiAqIHRoaXMuc3Ryb2tlQ2lyY3VtZmVyZW5jZX1gKVxuICAgICAgLnJlcGxhY2UoL0RJQU1FVEVSL2csIGAke3RoaXMuZGlhbWV0ZXJ9YCk7XG4gIH1cblxuXG4gIGNvbXBsZXRlSW4oZHVyYXRpb246IG51bWJlcikge1xuICAgIHRoaXMubW9kZSA9ICdkZXRlcm1pbmF0ZSc7XG4gICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjb21wbGV0ZSBpbicsIGR1cmF0aW9uKTtcbiAgICAvLyBjb25zb2xlLmxvZygnaW50ZXJ2YWwnLCBkdXJhdGlvbiAvIDEwMCk7XG4gICAgLy8gY29uc29sZS5sb2coJ3RpbWVyIGxlbmd0aCcsIGR1cmF0aW9uICsgZHVyYXRpb24gLyA1MCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2xvb3AgY291bnQnLCAoZHVyYXRpb24gKyBkdXJhdGlvbiAvIDUwKSAvIChkdXJhdGlvbiAvIDEwMCkpO1xuXG4gICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgIH0pLFxuICAgICAgYW5pbWF0ZShgJHtkdXJhdGlvbn1tcyBlYXNlLW91dGAsIHN0eWxlKHtcbiAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAzMTUsXG4gICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDAsXG4gICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgJ3N0cm9rZSc6ICcjMUI5QTU5JyxcbiAgICAgICAgJ29wYWNpdHknOiAwXG4gICAgICB9KSlcbiAgICBdKTtcblxuICAgIGNvbnN0IHBsYXllciA9IGFuaW1hdGlvbi5jcmVhdGUodGhpcy5kZXRlcm1pbmF0ZUNpcmNsZS5uYXRpdmVFbGVtZW50KTtcbiAgICBwbGF5ZXIucGxheSgpO1xuICAgIHBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgdGhpcy5maXZDb21wbGV0ZS5lbWl0KHRoaXMpO1xuICAgICAgdGhpcy5fdmFsdWUgPSAwO1xuICAgIH0pO1xuXG5cbiAgICBjb25zdCBpID0gaW50ZXJ2YWwoZHVyYXRpb24gLyAxMDApO1xuICAgIGNvbnN0IHQgPSB0aW1lcihkdXJhdGlvbiArIGR1cmF0aW9uIC8gNTApO1xuICAgIGNvbnN0IHByb2dyZXNzID0gaS5waXBlKHRha2VVbnRpbCh0KSk7XG5cbiAgICBwcm9ncmVzcy5zdWJzY3JpYmUocCA9PiB7XG4gICAgICB0aGlzLmZpdlByb2dyZXNzLmVtaXQocCk7XG4gICAgfSk7XG5cbiAgfVxuICBzZXRWYWx1ZShwcm9ncmVzczogbnVtYmVyKTogYW55IHtcbiAgICB0aGlzLm1vZGUgPSAnZGV0ZXJtaW5hdGUnO1xuICAgIHRoaXMuX3ZhbHVlID0gcHJvZ3Jlc3M7XG4gICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc3BpbigpIHtcbiAgICB0aGlzLm1vZGUgPSAnaW5kZXRlcm1pbmF0ZSc7XG4gICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc3RvcFNwaW5uaW5nKCkge1xuICAgIHRoaXMuX3ZhbHVlID0gMDtcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBzZXRNb2RlKG1vZGUpIHtcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuXG5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSwgQW5pbWF0aW9uQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTG9hZGluZ1NwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuLi9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctcmVmcmVzaGVyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdmYWJBbmltJywgW1xuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLFxuICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSlcbiAgICBdKVxuICBdKSxcbiAgdHJpZ2dlcignc3Bpbm5lckFuaW0nLCBbXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXG4gICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pKVxuICAgIF0pXG4gIF0pLFxuICB0cmlnZ2VyKCdyb3RhdGVBbmltJywgW1xuICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiByb3RhdGUnLCBbXG4gICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbigncm90YXRlID0+IG5vcm1hbCcsIFtcbiAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2UtaW4nKVxuICAgIF0pLFxuICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZyknIH0pKSxcbiAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3JvdGF0ZVooMGRlZyknIH0pKVxuICBdKSxcbiAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgc3R5bGUoe1xuICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDE4MCxcbiAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgJ3N0cm9rZSc6ICcjREUzRTM1J1xuICAgICAgfSksXG4gICAgICBhbmltYXRlKCcxNDAwbXMgZWFzZS1vdXQnKVxuICAgIF0pLFxuICAgIHN0YXRlKCdmaWxsJywgc3R5bGUoe1xuICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAzMTUsXG4gICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgJ3N0cm9rZSc6ICcjMUI5QTU5JyxcbiAgICAgICdvcGFjaXR5JzogMFxuICAgIH0pXG4gICAgKV1cbiAgKV1cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgc3BpbkNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZhYkNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb25Db2xvciA9ICcjMDAwJztcbiAgQElucHV0KCkgY2hlY2ttYXJrID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGZpdkNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8TG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdlJlZnJlc2g6IEV2ZW50RW1pdHRlcjxMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50PigpO1xuICBAT3V0cHV0KCkgZml2SGlkZGVuOiBFdmVudEVtaXR0ZXI8TG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdlNob3dlZDogRXZlbnRFbWl0dGVyPExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaXZQcm9ncmVzczogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBAVmlld0NoaWxkKCdzcGlubmVyJykgc3Bpbm5lcjogTG9hZGluZ1NwaW5uZXJDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2JhY2tncm91bmQnKSBiYWNrZ3JvdW5kOiBFbGVtZW50UmVmO1xuXG4gIHZpc2libGUgPSBmYWxzZTtcbiAgaWNvblN0YXRlID0gJ25vcm1hbCc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBidWlsZGVyOiBBbmltYXRpb25CdWlsZGVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnNwaW5uZXIuc3BpbigpO1xuICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KHRoaXMpO1xuICB9XG5cbiAgdW5sb2FkKCkge1xuICAgIHRoaXMuc3Bpbm5lci5zdG9wU3Bpbm5pbmcoKTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIC8vIHRoaXMuc3Bpbm5lci5jb21wbGV0ZUluKDUwMCk7XG4gICAgaWYgKHRoaXMuY2hlY2ttYXJrKSB7XG4gICAgICB0aGlzLmljb25TdGF0ZSA9ICdyb3RhdGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLmJ1aWxkZXIuYnVpbGQoW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMG1zIGVhc2Utb3V0Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSkpXG4gICAgICBdKTtcblxuICAgICAgY29uc3QgcGxheWVyID0gYW5pbWF0aW9uLmNyZWF0ZSh0aGlzLmJhY2tncm91bmQubmF0aXZlRWxlbWVudCk7XG4gICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZml2U2hvd2VkLmVtaXQodGhpcyk7XG4gICAgICAgIHBsYXllci5kZXN0cm95KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGBzY2FsZSgxKWA7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLmJ1aWxkZXIuYnVpbGQoW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogdHJhbnNmb3JtIH0pLFxuICAgICAgICBhbmltYXRlKCcxNzVtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSkpXG4gICAgICBdKTtcblxuICAgICAgY29uc3QgcGxheWVyID0gYW5pbWF0aW9uLmNyZWF0ZSh0aGlzLmJhY2tncm91bmQubmF0aXZlRWxlbWVudCk7XG4gICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZml2SGlkZGVuLmVtaXQodGhpcyk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBwbGF5ZXIuZGVzdHJveSgpO1xuXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmaWxsQW5pbWF0aW9uRG9uZSgpIHtcbiAgICBpZiAodGhpcy5jaGVja21hcmspIHtcbiAgICAgIHRoaXMuaWNvblN0YXRlID0gJ3JvdGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgICB0aGlzLmljb25TdGF0ZSA9ICdub3JtYWwnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAncm90YXRlJykge1xuICAgICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgcG9zdENvbXBsZXRlKCkge1xuICAgIHRoaXMudW5sb2FkKCk7XG4gICAgdGhpcy5maXZDb21wbGV0ZS5lbWl0KHRoaXMpO1xuICB9XG5cbiAgc2V0VmFsdWUocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgIHRoaXMuc3Bpbm5lci5zZXRWYWx1ZShwcm9ncmVzcyk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnNwaW5uZXIuc2V0TW9kZSgnaW5kZXRlcm1pbmF0ZScpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi8uLi9sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50L2xvYWRpbmctcmVmcmVzaGVyLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgc3RhdGUsIEFuaW1hdGlvbkJ1aWxkZXIsIEFuaW1hdGlvblBsYXllciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtbG9hZGluZy1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctY29udGVudC5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGZpbGwnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDE4MCxcbiAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiA5MCxcbiAgICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICAgJ3N0cm9rZSc6ICcjREUzRTM1J1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgnZmlsbCcsIHN0eWxlKHtcbiAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAzMTUsXG4gICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDAsXG4gICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgJ3N0cm9rZSc6ICcjMUI5QTU5JyxcbiAgICAgIH0pXG4gICAgICApXVxuICAgICksXG4gICAgdHJpZ2dlcignc3Bpbm5lckFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICAgICAgXSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignaGludEFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwcHgpIHRyYW5zbGF0ZVgoLTUwJSknIH0pLFxuICAgICAgICBhbmltYXRlKCcxNTBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDExMnB4KSB0cmFuc2xhdGVYKC01MCUpJyB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IHdpZHRoOiAnMTEycHgnLCBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDExMnB4KSB0cmFuc2xhdGVYKC01MCUpJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IHdpZHRoOiAnNDBweCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTEycHgpIHRyYW5zbGF0ZVgoLTUwJSknIH0pKVxuICAgICAgXSksXG4gICAgXVxuICAgICksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBoaW50VGV4dCA9ICduZXcgcG9zdHMnO1xuICBASW5wdXQoKSBtYXhQdWxsSGVpZ2h0ID0gMTY4O1xuICBASW5wdXQoKSBtaW5QdWxsSGVpZ2h0ID0gMTEyO1xuICBAT3V0cHV0KCkgZml2UHJvZ3Jlc3NDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdlJlZnJlc2g6IEV2ZW50RW1pdHRlcjxMb2FkaW5nQ29udGVudENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzcGlubmVyJykgc3Bpbm5lcjogTG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQ7XG4gIGhpbnRWaXNpYmxlID0gZmFsc2U7XG4gIGN1cnJlbnRQcm9ncmVzcyA9IDA7XG5cbiAgcmVmcmVzaGluZyA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMucmVmcmVzaGluZyA9IHRydWU7XG4gICAgdGhpcy5jaGFuZ2VBbmltYXRpb25Ub1Byb2dyZXNzKDExMiAvIDE2OCk7XG4gICAgdGhpcy5zcGlubmVyLmxvYWQoKTtcbiAgICB0aGlzLmZpdlJlZnJlc2guZW1pdCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBsZXRlUmVmcmVzaCgpIHtcbiAgICB0aGlzLnNwaW5uZXIuY29tcGxldGUoKTtcbiAgfVxuXG4gIGZpbGxBbmltYXRpb25Eb25lKCkge1xuICAgIHRoaXMuc3Bpbm5lci5oaWRlKCk7XG4gIH1cblxuXG4gIHNob3dIaW50KCkge1xuICAgIHRoaXMuaGludFZpc2libGUgPSB0cnVlO1xuICB9XG5cbiAgb25IaW50Q2xpY2tlZCgpIHtcbiAgICB0aGlzLmhpbnRWaXNpYmxlID0gZmFsc2U7XG4gIH1cblxuICBwb3N0SGludChldmVudCkge1xuICAgIGlmICghZXZlbnQuZnJvbVN0YXRlICYmIGV2ZW50LnRvU3RhdGUgPT09ICd2b2lkJykge1xuICAgICAgdGhpcy5zZXRQdWxsQW5pbWF0aW9uUHJvZ3Jlc3MoMTEyIC8gMTY4KTtcbiAgICAgIHRoaXMuc3Bpbm5lci5sb2FkKCk7XG4gICAgICB0aGlzLnJlZnJlc2hpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5maXZSZWZyZXNoLmVtaXQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0UHVsbEFuaW1hdGlvblByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICB0aGlzLmN1cnJlbnRQcm9ncmVzcyA9IHByb2dyZXNzO1xuXG4gICAgaWYgKHByb2dyZXNzIDwgMSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5cbiAgICAgICAgc2V0U3R5bGUodGhpcy5zcGlubmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7MTY4ICogcHJvZ3Jlc3N9cHgpIHJvdGF0ZVooJHszNjAgKiBwcm9ncmVzc31kZWcpYCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlQW5pbWF0aW9uVG9Qcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLmJ1aWxkZXIuYnVpbGQoW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHt0aGlzLmN1cnJlbnRQcm9ncmVzcyAqIDE2OH1weCkgcm90YXRlWigkezM2MCAqIHRoaXMuY3VycmVudFByb2dyZXNzfWRlZylgIH0pLFxuICAgICAgICBhbmltYXRlKCc4NW1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHtwcm9ncmVzcyAqIDE2OH1weCkgcm90YXRlWigkezM2MCAqIHByb2dyZXNzfWRlZylgIH0pKVxuICAgICAgXSk7XG5cbiAgICAgIGNvbnN0IHBsYXllciA9IGFuaW1hdGlvbi5jcmVhdGUodGhpcy5zcGlubmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0UHVsbEFuaW1hdGlvblByb2dyZXNzKHByb2dyZXNzKTtcbiAgICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmaXZQdWxsKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICB0aGlzLnNldFB1bGxBbmltYXRpb25Qcm9ncmVzcyhwcm9ncmVzcyk7XG4gICAgdGhpcy5zcGlubmVyLnNob3coKTtcbiAgICBjb25zdCB2YWx1ZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgcHJvZ3Jlc3MgKiAxMDAgKiB0aGlzLm1heFB1bGxIZWlnaHQgLyB0aGlzLm1pblB1bGxIZWlnaHQpKTtcbiAgICB0aGlzLnNwaW5uZXIuc2V0VmFsdWUodmFsdWUgKiAwLjg0KTtcbiAgfVxuXG4gIG9uUmVmcmVzaCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB0aGlzLnNwaW5uZXIubG9hZCgpO1xuICB9XG5cbiAgZml2Q2FuY2VsKCkge1xuICAgIHRoaXMubW92ZUJhY2soKTtcbiAgfVxuXG4gIGFmdGVyU3Bpbm5lckhpZGUoKSB7XG4gICAgdGhpcy5zZXRQdWxsQW5pbWF0aW9uUHJvZ3Jlc3MoMCk7XG4gICAgdGhpcy5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zcGlubmVyLnJlc2V0KCk7XG4gIH1cblxuICBtb3ZlQmFjaygpIHtcbiAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLmJ1aWxkZXIuYnVpbGQoW1xuICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7dGhpcy5jdXJyZW50UHJvZ3Jlc3MgKiAxNjh9cHgpIHJvdGF0ZVooJHszNjAgKiB0aGlzLmN1cnJlbnRQcm9ncmVzc31kZWcpYCB9KSxcbiAgICAgIGFuaW1hdGUoJzE0NW1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCkgcm90YXRlWigwKScgfSkpXG4gICAgXSk7XG5cbiAgICBjb25zdCBwbGF5ZXIgPSBhbmltYXRpb24uY3JlYXRlKHRoaXMuc3Bpbm5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHBsYXllci5wbGF5KCk7XG4gICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLnNldFB1bGxBbmltYXRpb25Qcm9ncmVzcygwKTtcbiAgICAgIHRoaXMuc3Bpbm5lci52aXNpYmxlID0gZmFsc2U7XG4gICAgICBwbGF5ZXIuZGVzdHJveSgpO1xuICAgIH0pO1xuXG4gIH1cblxuICBvblNwaW5uZXJQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgdGhpcy5maXZQcm9ncmVzc0NoYW5nZWQuZW1pdChwcm9ncmVzcyk7XG4gICAgdGhpcy5yZW5kZXJlci5cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIHNldFN0eWxlKHRoaXMuc3Bpbm5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgkezE2OCAqIHRoaXMuY3VycmVudFByb2dyZXNzfXB4KSByb3RhdGVaKCR7MzYwICogcHJvZ3Jlc3MgLyAyMDB9ZGVnKWApO1xuICB9XG5cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgc3RhdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IExvYWRpbmdTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgdGltZXIgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWxvYWRpbmctZmFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctZmFiLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy1mYWIuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2ZhYkFuaW0nLCBbXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSksXG4gICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKVxuICAgIF0pXG4gIF0pLFxuICB0cmlnZ2VyKCdzcGlubmVyQW5pbScsIFtcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSxcbiAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSkpXG4gICAgXSlcbiAgXSksXG4gIHRyaWdnZXIoJ3JvdGF0ZUFuaW0nLCBbXG4gICAgdHJhbnNpdGlvbignbm9ybWFsID0+IHJvdGF0ZScsIFtcbiAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCdyb3RhdGUgPT4gbm9ybWFsJywgW1xuICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicpXG4gICAgXSksXG4gICAgc3RhdGUoJ3JvdGF0ZScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKScgfSkpLFxuICAgIHN0YXRlKCdub3JtYWwnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAncm90YXRlWigwZGVnKScgfSkpXG4gIF0pLFxuICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICB0cmFuc2l0aW9uKCcqID0+IGZpbGwnLCBbXG4gICAgICBzdHlsZSh7XG4gICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMTgwLFxuICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiA5MCxcbiAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAnc3Ryb2tlJzogJyNERTNFMzUnXG4gICAgICB9KSxcbiAgICAgIGFuaW1hdGUoJzE0MDBtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgc3RhdGUoJ2ZpbGwnLCBzdHlsZSh7XG4gICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDMxNSxcbiAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDAsXG4gICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAnc3Ryb2tlJzogJyMxQjlBNTknLFxuICAgICAgJ29wYWNpdHknOiAwXG4gICAgfSlcbiAgICApXVxuICApXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nRmFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB2ZXJ0aWNhbD86ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJztcbiAgQElucHV0KCkgaG9yaXpvbnRhbD86ICdjZW50ZXInIHwgJ3N0YXJ0JyB8ICdlbmQnO1xuICBASW5wdXQoKSBlZGdlOiBib29sZWFuO1xuICBASW5wdXQoKSBzbG90OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgc3BpbkNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZhYkNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb25Db2xvciA9ICcjMDAwJztcbiAgQElucHV0KCkgY2hlY2ttYXJrID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHZpc2libGUgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBmaXZDb21wbGV0ZTogRXZlbnRFbWl0dGVyPExvYWRpbmdGYWJDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nRmFiQ29tcG9uZW50PigpO1xuICBAT3V0cHV0KCkgZml2UmVmcmVzaDogRXZlbnRFbWl0dGVyPExvYWRpbmdGYWJDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nRmFiQ29tcG9uZW50PigpO1xuICBAT3V0cHV0KCkgZml2SGlkZGVuOiBFdmVudEVtaXR0ZXI8TG9hZGluZ0ZhYkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExvYWRpbmdGYWJDb21wb25lbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaXZTaG93OiBFdmVudEVtaXR0ZXI8TG9hZGluZ0ZhYkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExvYWRpbmdGYWJDb21wb25lbnQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnc3Bpbm5lcicpIHNwaW5uZXI6IExvYWRpbmdTcGlubmVyQ29tcG9uZW50O1xuXG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgaWNvblN0YXRlID0gJ25vcm1hbCc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBjbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdmVydGljYWxDbGFzcyA9ICEhdGhpcy52ZXJ0aWNhbCA/IGBmYWItdmVydGljYWwtJHt0aGlzLnZlcnRpY2FsfWAgOiAnJztcbiAgICBjb25zdCBob3Jpem9udGFsQ2xhc3MgPSAhIXRoaXMuaG9yaXpvbnRhbCA/IGBmYWItaG9yaXpvbnRhbC0ke3RoaXMuaG9yaXpvbnRhbH1gIDogJyc7XG4gICAgY29uc3QgZWRnZUNsYXNzID0gdGhpcy5lZGdlID8gYGZhYi1lZGdlLWAgOiAnJztcbiAgICBjb25zdCBkaXNhYmxlZENsYXNzID0gdGhpcy5kaXNhYmxlZCA/IGBidXR0b24tZGlzYWJsZWRgIDogJyc7XG5cbiAgICByZXR1cm4gYCR7dmVydGljYWxDbGFzc30gJHtob3Jpem9udGFsQ2xhc3N9ICR7ZWRnZUNsYXNzfSAke2Rpc2FibGVkQ2xhc3N9YDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICB0b2dnbGVTcGlubmVyKCkge1xuICAgIGlmICh0aGlzLmljb24gIT09ICdtZC1jaGVja21hcmsnKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICAgIH1cbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmZpdlJlZnJlc2guZW1pdCh0aGlzKTtcbiAgfVxuXG4gIHVubG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgIHRoaXMuc3Bpbm5lci5jb21wbGV0ZUluKDEwMDApO1xuICAgIH1cbiAgfVxuXG4gIGZpbGxBbmltYXRpb25Eb25lKCkge1xuICAgIHRoaXMuaWNvbiA9ICdtZC1jaGVja21hcmsnO1xuICB9XG5cbiAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQsIGljb24pO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdub3JtYWwnKSB7XG4gICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgdGhpcy5pY29uU3RhdGUgPSAnbm9ybWFsJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3JvdGF0ZScpIHtcbiAgICAgICAgdGhpcy5wb3N0Q29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHBvc3RDb21wbGV0ZSgpIHtcbiAgICBjb25zb2xlLmxvZygncG9zdCBjb21wbGV0ZScpO1xuICAgIHRoaXMudW5sb2FkKCk7XG4gICAgdGhpcy5maXZDb21wbGV0ZS5lbWl0KHRoaXMpO1xuICB9XG5cbiAgcm90YXRlKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3Bpbm5lci5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHJvdGF0ZVooJHtwcm9ncmVzcyAvIDIwMCAqIDM2MH1kZWcpYCk7XG4gIH1cblxuICBmYWJBbmltRG9uZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdmYWIgYW5pbSBkb25lJywgZXZlbnQpO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICd2b2lkJykge1xuICAgICAgdGhpcy5maXZTaG93LmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICd2b2lkJykge1xuICAgICAgdGhpcy5maXZIaWRkZW4uZW1pdCh0aGlzKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1hcHAtYmFyLXRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtYmFyLXRhYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC1iYXItdGFiLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQmFyVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgdGFiOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IExvYWRpbmdGYWJDb21wb25lbnQgfSBmcm9tICcuLy4uL2xvYWRpbmctZmFiL2xvYWRpbmctZmFiLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCwgSW5wdXQsXG4gIFZpZXdDaGlsZCwgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBBZnRlclZpZXdJbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBIb3N0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwQmFyVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vYXBwLWJhci10YWIvYXBwLWJhci10YWIuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcHBCYXJUaXRsZUxheW91dCwgQXBwQmFyRmFiUG9zaXRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IElvblRhYnMgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBUYWJCdXR0b25DbGlja0RldGFpbCB9IGZyb20gJ0Bpb25pYy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWFwcC1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQge1xuXG4gIF9mYWJWaXNpYmxlID0gdHJ1ZTtcbiAgY3V0b3V0VmlzaWJsZSA9IHRydWU7XG4gIF9wb3NpdGlvbjogQXBwQmFyRmFiUG9zaXRpb247XG4gIGxlZnQgPSBmYWxzZTtcbiAgcmlnaHQgPSBmYWxzZTtcbiAgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICB0YWJzUmlnaHQ6IEFwcEJhclRhYkNvbXBvbmVudFtdO1xuICB0YWJzTGVmdDogQXBwQmFyVGFiQ29tcG9uZW50W107XG5cbiAgQFZpZXdDaGlsZCgnZmFiJykgZmFiOiBMb2FkaW5nRmFiQ29tcG9uZW50O1xuICBASW5wdXQoKSBpY29uID0gJ21kLWFkZCc7XG4gIEBJbnB1dCgpIHRpdGxlTGF5b3V0OiBBcHBCYXJUaXRsZUxheW91dCA9ICdoaWRlJztcbiAgQE91dHB1dCgpIGZpdkZhYkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxBcHBCYXJDb21wb25lbnQ+KCk7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihBcHBCYXJUYWJDb21wb25lbnQpIHRhYkNvbXBvbmVudHM6IFF1ZXJ5TGlzdDxBcHBCYXJUYWJDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbihwb3NpdGlvbjogQXBwQmFyRmFiUG9zaXRpb24pIHtcbiAgICBjb25zb2xlLmxvZygnc2V0IHBvc2l0aW9uJywgcG9zaXRpb24sICFwb3NpdGlvbiwgdGhpcy5fcG9zaXRpb24pO1xuICAgIGlmICghcG9zaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZmFiVmlzaWJsZSkge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9mYWJWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICBpZiAoIXRoaXMuX3Bvc2l0aW9uKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgdGhpcy5vbkZhYkhpZGRlbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByZXBhcmVUYWJzKHBvc2l0aW9uKTtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZmFiVmlzaWJsZShmYWJWaXNpYmxlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX2ZhYlZpc2libGUgPT09IHRydWUgJiYgZmFiVmlzaWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdoaWRlIGZhYicpO1xuICAgICAgdGhpcy5fZmFiVmlzaWJsZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZmFiVmlzaWJsZSA9PT0gZmFsc2UgJiYgZmFiVmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jdXRvdXRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9mYWJWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfVxuICB9XG4gIGdldCBmYWJWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9mYWJWaXNpYmxlO1xuICB9XG5cblxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgQEhvc3QoKSBwdWJsaWMgdGFiczogSW9uVGFicykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5wcmVwYXJlVGFicyh0aGlzLnBvc2l0aW9uKTtcbiAgfVxuXG4gIG9uRmFiSGlkZGVuKCkge1xuICAgIGNvbnNvbGUubG9nKCdmYWIgaGlkZGVuJyk7XG5cbiAgICBjb25zb2xlLmxvZygndG8gdm9pZCcpO1xuICAgIGlmICh0aGlzLnRyYW5zaXRpb25pbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3aGlsZSB0cmFuc2l0aW9uaW5nIHRvIHBvc2l0aW9uJywgdGhpcy5fcG9zaXRpb24pO1xuICAgICAgdGhpcy5zZXRQb3NpdGlvbigpO1xuICAgICAgY29uc29sZS5sb2coJ3JlbW92ZSBjdXRvdXQnKTtcbiAgICAgIHRoaXMuY3V0b3V0VmlzaWJsZSA9IGZhbHNlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG93IGN1dG91dCBhZ2FpbicpO1xuICAgICAgICB0aGlzLmN1dG91dFZpc2libGUgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdyBmYWIgYWdhaW4gYW5kIGVuZCB0cmFuc2l0aW9uJyk7XG4gICAgICAgICAgdGhpcy5fZmFiVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICAgIH0sIDIyNSk7XG4gICAgICB9LCAyMjUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1dG91dFZpc2libGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVUYWJzKHBvc2l0aW9uOiBBcHBCYXJGYWJQb3NpdGlvbikge1xuICAgIGlmIChwb3NpdGlvbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHRoaXMudGFic0xlZnQgPSB0aGlzLnRhYkNvbXBvbmVudHMudG9BcnJheSgpLnNsaWNlKDAsIDIpO1xuICAgICAgdGhpcy50YWJzUmlnaHQgPSB0aGlzLnRhYkNvbXBvbmVudHMudG9BcnJheSgpLnNsaWNlKDIsIDQpO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMudGFic0xlZnQgPSB0aGlzLnRhYkNvbXBvbmVudHMudG9BcnJheSgpO1xuICAgICAgdGhpcy50YWJzUmlnaHQgPSBbXTtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHRoaXMudGFic0xlZnQgPSBbXTtcbiAgICAgIHRoaXMudGFic1JpZ2h0ID0gdGhpcy50YWJDb21wb25lbnRzLnRvQXJyYXkoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLl9wb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5yaWdodCA9IHRydWU7XG4gICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3Bvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZhYkNsaWNrKCkge1xuICAgIHRoaXMuZml2RmFiQ2xpY2suZW1pdCh0aGlzKTtcbiAgfVxuXG4gIGlvblRhYkJ1dHRvbkNsaWNrKGV2ZW50OiBUYWJCdXR0b25DbGlja0RldGFpbCkge1xuICAgIHRoaXMudGFicy5vblRhYkJ1dHRvbkNsaWNrKGV2ZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgUGxhdGZvcm1zIH0gZnJvbSAnQGlvbmljL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZml2SWZdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZlBsYXRmb3JtRGlyZWN0aXZlIHtcblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZml2SWYocGxhdGZvcm1zOiBQbGF0Zm9ybXNbXSkge1xuXG5cbiAgICBsZXQgc2hvdyA9IHRydWU7XG4gICAgcGxhdGZvcm1zLmZvckVhY2gocCA9PiB7XG4gICAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXMocCkpIHtcbiAgICAgICAgc2hvdyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ2lmIHBsYXRmb3JtcycsIHBsYXRmb3Jtcywgc2hvdyk7XG5cbiAgICBpZiAoc2hvdykge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVTdHlsZSwgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmaXZDZW50ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBDZW50ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICB2ZXJ0aWNhbCA9IHRydWU7XG4gIGhvcml6b250YWwgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUnKVxuICBnZXQgbXlTdHlsZSgpOiBTYWZlU3R5bGUge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICBjb25zdCBzdHlsZSA9IGBwb3NpdGlvbjogYWJzb2x1dGU7ICR7dGhpcy52ZXJ0aWNhbCAmJiB0aGlzLmhvcml6b250YWwgPyAndG9wOiA1MCU7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7JyA6IHRoaXMudmVydGljYWwgPyAndG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsnIDogJ2xlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyd9YDtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlKTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBmaXZDZW50ZXIoY2VudGVyOiB7IHZlcnRpY2FsOiBib29sZWFuLCBob3Jpem9udGFsOiBib29sZWFuIH0pIHtcbiAgICBpZiAoY2VudGVyKSB7XG4gICAgICB0aGlzLnZlcnRpY2FsID0gY2VudGVyLnZlcnRpY2FsO1xuICAgICAgdGhpcy5ob3Jpem9udGFsID0gY2VudGVyLmhvcml6b250YWw7XG4gICAgfVxuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnYXBwbHkgcG9zaXRpb24gcmVsYXRpdmUgdG8gcGFyZW50IGhlcmUnKTtcbiAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZpdlBlcm1pc3Npb25zXSdcbn0pXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbnNEaXJlY3RpdmUge1xuXG4gIGFsbG93ZWRQZXJtaXNzaW9uczogc3RyaW5nW10gPSBbXTtcbiAgdVBlcm1pc3Npb25zOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvciBQZXJtaXNzaW9uc2RpcmVjdGl2ZScpO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGZpdlBlcm1pc3Npb25zVXNlclBlcm1pc3Npb25zKHVzZXJQZXJtaXNzaW9uczogc3RyaW5nW10pIHtcbiAgICBjb25zb2xlLmxvZygndXNlclBlcm1pc3Npb25zJywgdXNlclBlcm1pc3Npb25zKTtcbiAgICB0aGlzLnVQZXJtaXNzaW9ucyA9IHVzZXJQZXJtaXNzaW9ucyB8fCBbXTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcblxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZpdlBlcm1pc3Npb25zKGFsbG93ZWQ6IHN0cmluZ1tdKSB7XG4gICAgY29uc29sZS5sb2coJ2ZpdlBlcm1pc3Npb25zJywgYWxsb3dlZCk7XG4gICAgdGhpcy5hbGxvd2VkUGVybWlzc2lvbnMgPSBhbGxvd2VkIHx8IFtdO1xuICAgIHRoaXMudXBkYXRlVmlldygpO1xuICB9XG5cbiAgY2hlY2tQZXJtaXNzaW9uKCk6IGJvb2xlYW4ge1xuICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgdGhpcy51UGVybWlzc2lvbnMuZm9yRWFjaChyb2xlID0+IHtcbiAgICAgIGlmICh0aGlzLmFsbG93ZWRQZXJtaXNzaW9ucy5maW5kKGEgPT4gYS50b1VwcGVyQ2FzZSgpID09PSByb2xlLnRvVXBwZXJDYXNlKCkpKSB7XG4gICAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdoYXMgcm9sZSBwZXJtaXNzaW9uJywgdGhpcy51UGVybWlzc2lvbnMsIHRoaXMuYWxsb3dlZFBlcm1pc3Npb25zKTtcbiAgICByZXR1cm4gc2hvdztcbiAgfVxuXG4gIHVwZGF0ZVZpZXcoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tQZXJtaXNzaW9uKCkpIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSG9zdEJpbmRpbmcsIEV2ZW50RW1pdHRlciwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2Zpdi1yaXBwbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmlwcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmlwcGxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcbiAgaG9zdDoge1xuICAgICdbc3R5bGUudG91Y2gtYWN0aW9uXSc6ICdhdXRvJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgUmlwcGxlQ29tcG9uZW50IHtcblxuICBhdXRvID0gJ2F1dG8nO1xuXG4gIHByaXZhdGUgcmlwcGxlQW5pbWF0aW9uRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHJvdW5kID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhvdmVyID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBmaXZDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wb3NpdGlvbicpIHBvc2l0aW9uO1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLnJpcHBsZShldmVudCk7XG4gICAgdGhpcy5maXZDbGljay5lbWl0KGV2ZW50KTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdwcmVzcycsIFsnJGV2ZW50J10pXG4gIFByZXNzRXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLnJpcHBsZShldmVudCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnJvdW5kJykgZ2V0IGlzUm91bmQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5yb3VuZDtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhvdmVyJykgZ2V0IGNhbkhvdmVyKCkge1xuICAgIHJldHVybiAhIXRoaXMuaG92ZXI7XG4gIH1cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblxuICAgIGNvbnNvbGUubG9nKCdyaXBwbGUgY29uc3RydWN0b3InKTtcbiAgICB0aGlzLnJpcHBsZUFuaW1hdGlvbkV2ZW50LnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNzUwKVxuICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaXBwbGUnKSwgJ3Nob3cnKTtcbiAgICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucmlwcGxlV3JhcHBlcicpLCAnc2hvdycpO1xuICAgICAgfSk7XG4gIH1cblxuICByaXBwbGUoZXZlbnQpIHtcbiAgICBjb25zdCByaXBwbGUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJpcHBsZScpO1xuICAgIGlmICghcmlwcGxlKSB7XG4gICAgICB0aGlzLnJpcHBsZUZhY3RvcnkoKTtcbiAgICB9XG4gICAgdGhpcy5yaXBwbGVBbmltYXRpb24oeyBwYWdlWDogZXZlbnQucGFnZVgsIHBhZ2VZOiBldmVudC5wYWdlWSB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgcmlwcGxlRmFjdG9yeSgpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heChyZWN0LndpZHRoLCByZWN0LmhlaWdodCkgKyAncHgnO1xuICAgIGNvbnN0IHJpcHBsZVdyYXBwZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MocmlwcGxlV3JhcHBlciwgJ3JpcHBsZVdyYXBwZXInKTtcbiAgICBjb25zdCByaXBwbGUgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHJpcHBsZSwgJ3JpcHBsZScpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocmlwcGxlLCAnaGVpZ2h0JywgcmFkaXVzKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJpcHBsZSwgJ3dpZHRoJywgcmFkaXVzKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHJpcHBsZVdyYXBwZXIsIHJpcHBsZSk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0YXJnZXQsIHJpcHBsZVdyYXBwZXIpO1xuICB9XG5cbiAgcmlwcGxlQW5pbWF0aW9uKHsgcGFnZVgsIHBhZ2VZIH0pIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCByaXBwbGUgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnJpcHBsZScpO1xuICAgIGNvbnN0IHJpcHBsZVdyYXBwZXIgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnJpcHBsZVdyYXBwZXInKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHJpcHBsZVdyYXBwZXIsICdzaG93Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhyaXBwbGUsICdzaG93Jyk7XG4gICAgY29uc3QgbGVmdCA9IHBhZ2VYIC0gcmVjdC5sZWZ0IC0gcmlwcGxlLm9mZnNldFdpZHRoIC8gMiAtIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArICdweCc7XG4gICAgY29uc3QgdG9wID0gcGFnZVkgLSByZWN0LnRvcCAtIHJpcHBsZS5vZmZzZXRIZWlnaHQgLyAyIC0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyAncHgnO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocmlwcGxlLCAndG9wJywgdG9wKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJpcHBsZSwgJ2xlZnQnLCBsZWZ0KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHJpcHBsZVdyYXBwZXIsICdzaG93Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhyaXBwbGUsICdzaG93Jyk7XG4gICAgdGhpcy5yaXBwbGVBbmltYXRpb25FdmVudC5lbWl0KCk7XG4gIH1cblxuXG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgbWVyZ2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJb25Db250ZW50IH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluVmlld3BvcnRFdmVudCB7XG4gIHRhcmdldDogSFRNTEVsZW1lbnQ7XG4gIHZhbHVlOiBib29sZWFuO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZml2Vmlld3BvcnRdJyxcbiAgZXhwb3J0QXM6ICd2aWV3cG9ydCdcbn0pXG5leHBvcnQgY2xhc3MgVmlld3BvcnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQElucHV0KCkgb2Zmc2V0ID0gMDtcbiAgQE91dHB1dCgpIGZpdkFwcGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8SW5WaWV3cG9ydEV2ZW50PigpO1xuICBAT3V0cHV0KCkgZml2RGlzYXBwZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxJblZpZXdwb3J0RXZlbnQ+KCk7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgdmlzaWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb250ZW50OiBJb25Db250ZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xvc2VzdCgnaW9uLWNvbnRlbnQnKTtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgY29udGVudC5zY3JvbGxFdmVudHMgPSB0cnVlO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJ2lvbi1jb250ZW50JyksICdpb25TY3JvbGwnKVxuICAgICAgLnBpcGUobWVyZ2UoZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpKSwgZGVib3VuY2VUaW1lKDUwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGVjaygpKTtcblxuICAgIGNvbnNvbGUubG9nKCd2aXNpYmxlJywgdGhpcy52aXNpYmxlLCBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSxcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIHdpbmRvdy5pbm5lckhlaWdodCArIHRoaXMub2Zmc2V0KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrKCkge1xuICAgIGNvbnN0IGV2ZW50OiBJblZpZXdwb3J0RXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgdmFsdWU6XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpICYmXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PVxuICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgKyB0aGlzLm9mZnNldFxuICAgIH07XG5cbiAgICBpZiAoZXZlbnQudmFsdWUgPT09IHRydWUpIHtcblxuICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5maXZBcHBlYXIuZW1pdChldmVudCk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5maXZEaXNhcHBlYXIuZW1pdChldmVudCk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaXNWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZpc2libGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbkNvbnRlbnQgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc2tpcFdoaWxlLCB0YWtlVW50aWwsIHRha2VMYXN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZml2UHVsbF0nXG59KVxuZXhwb3J0IGNsYXNzIFB1bGxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG1pblB1bGxIZWlnaHQgPSAxMTI7XG4gIEBJbnB1dCgpIG1heFB1bGxIZWlnaHQgPSAxNjg7XG4gIEBJbnB1dCgpIGVuYWJsZWQgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBmaXZDYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGZpdlB1bGwgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBzY3JvbGxZOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgQEhvc3QoKSBwcml2YXRlIGNvbnRlbnQ6IElvbkNvbnRlbnQpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5jb250ZW50LnNjcm9sbEV2ZW50cyA9IHRydWU7XG4gICAgdGhpcy5jb250ZW50LmdldFNjcm9sbEVsZW1lbnQoKS50aGVuKHMgPT4ge1xuICAgICAgdGhpcy5zY3JvbGxZID0gczsgLy8gbmVlZGVkIGZvciBzY3JvbGxUb3BcbiAgICAgIHRoaXMuc2V0dXBQYW5MaXN0ZW5lcigpO1xuICAgIH0pO1xuXG5cbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBQYW5MaXN0ZW5lcigpIHtcbiAgICBjb25zdCB0b3VjaHN0YXJ0JCA9IGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RvdWNoc3RhcnQnKTtcbiAgICBjb25zdCB0b3VjaG1vdmUkID0gZnJvbUV2ZW50KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndG91Y2htb3ZlJyk7XG4gICAgY29uc3QgdG91Y2hlbmQkID0gZnJvbUV2ZW50KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndG91Y2hlbmQnKTtcbiAgICBjb25zdCB0b3VjaGNhbmNlbCQgPSBmcm9tRXZlbnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0b3VjaGNhbmNlbCcpO1xuICAgIGNvbnN0IGVuZCQgPSBtZXJnZSh0b3VjaGVuZCQsIHRvdWNoY2FuY2VsJCk7XG5cbiAgICBjb25zdCBkcmFnQXRUb3AgPSB0b3VjaHN0YXJ0JFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihlID0+IHRoaXMuc2Nyb2xsWS5zY3JvbGxUb3AgPT09IDAgJiYgdGhpcy5lbmFibGVkKVxuICAgICAgKTtcblxuICAgIGNvbnN0IGRyYWdUb3BEb3duID0gZHJhZ0F0VG9wXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChzdGFydDogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRZID0gc3RhcnQudG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICByZXR1cm4gdG91Y2htb3ZlJFxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgobW92ZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFkgPSBtb3ZlLnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIHN0YXJ0RXZlbnQ6IHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgbW92ZUV2ZW50OiBtb3ZlLFxuICAgICAgICAgICAgICAgICAgc3RhcnRZOiBzdGFydFksXG4gICAgICAgICAgICAgICAgICBjdXJyZW50WTogY3VycmVudFksXG4gICAgICAgICAgICAgICAgICBvZmZzZXQ6IGN1cnJlbnRZIC0gc3RhcnRZXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHNraXBXaGlsZShkcmFnID0+IGRyYWcub2Zmc2V0IDwgMCksXG4gICAgICAgICAgICAgIHRha2VVbnRpbChlbmQkKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkpO1xuXG5cbiAgICBkcmFnVG9wRG93bi5mb3JFYWNoKGRyYWdzID0+IHtcbiAgICAgIGRyYWdzLmZvckVhY2goZHJhZyA9PiB7XG4gICAgICAgIGRyYWcubW92ZUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGRyYWcub2Zmc2V0IC8gMjtcbiAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ID4gdGhpcy5tYXhQdWxsSGVpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvZmZzZXQgPD0gdGhpcy5tYXhQdWxsSGVpZ2h0KSB7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpdlB1bGwuZW1pdChvZmZzZXQgLyB0aGlzLm1heFB1bGxIZWlnaHQpO1xuICAgICAgfSk7XG5cbiAgICAgIGRyYWdzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VMYXN0KDEpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShkcmFnID0+IHtcbiAgICAgICAgICBjb25zdCBvZmZzZXQgPSBkcmFnLm9mZnNldCAvIDI7XG4gICAgICAgICAgY29uc3QgcmVmcmVzaCA9IG9mZnNldCA+PSB0aGlzLm1pblB1bGxIZWlnaHQ7XG4gICAgICAgICAgaWYgKHJlZnJlc2gpIHtcbiAgICAgICAgICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZml2Q2FuY2VsLmVtaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0YXRlLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaWNvbi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3JvdGF0ZUFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCdub3JtYWwgPT4gcm90YXRlJywgW1xuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3JvdGF0ZSA9PiBub3JtYWwnLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2UtaW4nKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgncm90YXRlJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3NjYWxlKDApIHJvdGF0ZVooNDVkZWcpJyB9KSksXG4gICAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3NjYWxlKDEpIHJvdGF0ZVooMGRlZyknIH0pKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3NjYWxlQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gbm9ybWFsJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLFxuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiBzY2FsZScsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdzY2FsZSA9PiBub3JtYWwnLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2UtaW4nKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgnc2NhbGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKSxcbiAgICAgIHN0YXRlKCdub3JtYWwnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0pKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgX25hbWU6IHN0cmluZztcbiAgX2luZGljYXRvclZhbHVlID0gLTE7XG4gIHRlbXBWYWx1ZTogbnVtYmVyO1xuICBzdGF0ZTogJ25vcm1hbCcgfCAncm90YXRlJyA9ICdub3JtYWwnO1xuICB0ZW1wOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSB0cmFuc2l0aW9uRG9uZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGluZGljYXRvclN0YXRlOiAnbm9ybWFsJyB8ICdzY2FsZScgPSAnc2NhbGUnO1xuICBpbmRpY2F0b3JWYWx1ZVN0YXRlOiAnbm9ybWFsJyB8ICdzY2FsZScgPSAnc2NhbGUnO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX25hbWUpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgaW5kaWNhdG9yVmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW5kaWNhdG9yVmFsdWU7XG4gIH1cbiAgc2V0IGluZGljYXRvclZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnRyYW5zZm9ybUluZGljYXRvcih2YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdHJhbnNmb3JtKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMudGVtcCA9IG5hbWU7XG4gICAgdGhpcy5zdGF0ZSA9ICdyb3RhdGUnO1xuICB9XG5cbiAgdHJhbnNmb3JtSW5kaWNhdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgPT09IC0xKSB7XG4gICAgICB0aGlzLl9pbmRpY2F0b3JWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5pbmRpY2F0b3JTdGF0ZSA9ICdzY2FsZSc7XG4gICAgICB0aGlzLmluZGljYXRvclZhbHVlU3RhdGUgPSAnc2NhbGUnO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgIHRoaXMudGVtcFZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmluZGljYXRvclN0YXRlID0gJ25vcm1hbCc7XG4gICAgICB0aGlzLmluZGljYXRvclZhbHVlU3RhdGUgPSAnc2NhbGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluZGljYXRvclN0YXRlID0gJ3NjYWxlJztcbiAgICAgIGlmICh0aGlzLmluZGljYXRvclZhbHVlU3RhdGUgPT09ICdzY2FsZScpIHtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3JWYWx1ZVN0YXRlID0gJ25vcm1hbCc7XG4gICAgICAgIHRoaXMuX2luZGljYXRvclZhbHVlID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRlbXBWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmluZGljYXRvclZhbHVlU3RhdGUgPSAnc2NhbGUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuICByb3RhdGVBbmltRG9uZShldmVudCkge1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdub3JtYWwnICYmIGV2ZW50LnRvU3RhdGUgPT09ICdyb3RhdGUnKSB7XG4gICAgICB0aGlzLl9uYW1lID0gdGhpcy50ZW1wO1xuICAgICAgdGhpcy5zdGF0ZSA9ICdub3JtYWwnO1xuICAgIH1cblxuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdyb3RhdGUnICYmIGV2ZW50LnRvU3RhdGUgPT09ICdub3JtYWwnKSB7XG4gICAgICB0aGlzLnRyYW5zaXRpb25Eb25lLmVtaXQodGhpcy5fbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgaW5jcmVtZW50RG9uZShldmVudCkge1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdub3JtYWwnICYmIGV2ZW50LnRvU3RhdGUgPT09ICdzY2FsZScpIHtcbiAgICAgIGlmICh0aGlzLnRlbXBWYWx1ZSA+IDApIHtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3JWYWx1ZVN0YXRlID0gJ25vcm1hbCc7XG4gICAgICAgIHRoaXMuX2luZGljYXRvclZhbHVlID0gdGhpcy50ZW1wVmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbmRpY2F0b3JWYWx1ZSA9IHRoaXMudGVtcFZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG4iLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGlhbG9nLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkaWFsb2dBbmltJywgW1xuICAgICAgc3RhdGUoJ2JvdHRvbScsIHN0eWxlKHsgYm90dG9tOiAwIH0pKSxcbiAgICAgIHN0YXRlKCd0b3AnLCBzdHlsZSh7IHRvcDogMCB9KSksXG4gICAgICBzdGF0ZSgnY2VudGVyJywgc3R5bGUoe1xuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJ1xuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2JvdHRvbS1zbGlkZScsIHN0eWxlKHsgYm90dG9tOiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJyB9KSksXG4gICAgICBzdGF0ZSgndG9wLXNsaWRlJywgc3R5bGUoeyB0b3A6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJyB9KSksXG4gICAgICBzdGF0ZSgnY2VudGVyLXNsaWRlJywgc3R5bGUoXG4gICAgICAgIHsgYm90dG9tOiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJyB9XG4gICAgICApKSxcbiAgICAgIHN0YXRlKCdib3R0b20tZmFkZScsIHN0eWxlKHsgYm90dG9tOiAwLCBvcGFjaXR5OiAwIH0pKSxcbiAgICAgIHN0YXRlKCd0b3AtZmFkZScsIHN0eWxlKHsgdG9wOiAwLCBvcGFjaXR5OiAwLCBkaXNwbGF5OiAnbm9uZScgfSkpLFxuICAgICAgc3RhdGUoJ2NlbnRlci1mYWRlJywgc3R5bGUoe1xuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiAqJywgW1xuICAgICAgICBhbmltYXRlKCcyMDBtcyBlYXNlLWluJylcbiAgICAgIF0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHZlcnRpY2FsQWxpZ246ICdib3R0b20nIHwgJ2NlbnRlcicgfCAndG9wJyA9ICdjZW50ZXInO1xuICBASW5wdXQoKSBhbmltYXRpb246ICdzbGlkZScgfCAnZmFkZScgPSAnZmFkZSc7XG4gIHZpc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgYmFja2Ryb3A6IHRydWU7XG4gIEBPdXRwdXQoKSBmaXZDbG9zZTogRXZlbnRFbWl0dGVyPERpYWxvZ0NvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmaXZPcGVuOiBFdmVudEVtaXR0ZXI8RGlhbG9nQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnZpc2libGUnKSBnZXQgaXNWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZpc2libGU7XG4gIH1cblxuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gIH1cblxuXG5cbn1cbiIsImltcG9ydCB7IEFwcEJhckNvbXBvbmVudCB9IGZyb20gJy4vLi4vYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEFwcEJhclRpdGxlTGF5b3V0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBUYWJCdXR0b25DbGlja0RldGFpbCB9IGZyb20gJ0Bpb25pYy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWFwcC1iYXItdGFiLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLWJhci10YWItY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC1iYXItdGFiLWNvbnRlbnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBCYXJUYWJDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgdGFiOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRpdGxlTGF5b3V0OiBBcHBCYXJUaXRsZUxheW91dCA9ICdoaWRlJztcblxuICBwcml2YXRlIHNlbGVjdGVkID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBjbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBsYWJlbC0ke3RoaXMudGl0bGVMYXlvdXR9YDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBpb25UYWJCdXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8VGFiQnV0dG9uQ2xpY2tEZXRhaWw+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXY6IE5hdkNvbnRyb2xsZXIsIEBIb3N0KCkgcHJpdmF0ZSBhcHBiYXI6IEFwcEJhckNvbXBvbmVudCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIG9uQ2xpY2soKSB7XG4gICAgLy8gdGhpcy5uYXYubmF2aWdhdGVSb290KHRoaXMuaHJlZik7XG4gICAgdGhpcy5pb25UYWJCdXR0b25DbGljay5lbWl0KHtcbiAgICAgIHRhYjogdGhpcy50YWIsXG4gICAgICBocmVmOiB0aGlzLmhyZWYsXG4gICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTYWZlVXJsLCBTYWZlU3R5bGUsIERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlLCBBbmltYXRpb25CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIG1lcmdlLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5pbXBvcnQgeyBEb21Db250cm9sbGVyLCBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IGZsYXRNYXAsIHRhcCwgZmlsdGVyLCBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCwgdGFrZSwgcmVwZWF0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtaW1hZ2Utdmlld2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLXZpZXdlci5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignYmFja2Ryb3AnLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCB9KSxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICBhbmltYXRlKCc3NW1zIDEyNW1zIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICBhbmltYXRlKCcxMDBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdmYWRlJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignaW1hZ2VFbnRlcicsIFtcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICBzdHlsZSh7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICd7e3RvcH19cHgnLCBsZWZ0OiAne3tsZWZ0fX1weCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLDApJywgaGVpZ2h0OiAne3toZWlnaHR9fXB4Jywgd2lkdGg6ICd7e3dpZHRofX1weCcgfSksXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgYW5pbWF0ZSgnMTUwbXMnLCBzdHlsZSh7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICc1MCUnLCBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsLTUwJSknLCBoZWlnaHQ6ICdhdXRvJywgd2lkdGg6ICcxMDAlJyB9KSlcbiAgICAgIF0sIHsgcGFyYW1zOiB7IHRvcDogJzBweCcsIGxlZnQ6ICcwcHgnLCBoZWlnaHQ6ICcqJywgd2lkdGg6ICcqJyB9IH0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignaW1hZ2VMZWF2ZScsIFtcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgc3R5bGUoeyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAne3twYW5Ub3B9fScsIGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwtNTAlKScsIGhlaWdodDogJ2F1dG8nLCB3aWR0aDogJzEwMCUnIH0pLFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgIGFuaW1hdGUoJzIyNW1zJywgc3R5bGUoeyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAne3t0b3B9fXB4JywgbGVmdDogJ3t7bGVmdH19cHgnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwwKScsIGhlaWdodDogJ3t7aGVpZ2h0fX1weCcsIHdpZHRoOiAne3t3aWR0aH19cHgnIH0pXG4gICAgICAgIClcbiAgICAgIF0sIHsgcGFyYW1zOiB7IHRvcDogJzBweCcsIGxlZnQ6ICcwcHgnLCBoZWlnaHQ6ICcqJywgd2lkdGg6ICcqJywgcGFuVG9wOiAnNTAlJyB9IH0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZScpXG4gIGdldCBteVN0eWxlKCk6IFNhZmVTdHlsZSB7XG4gICAgaWYgKHRoaXMuX2lzT3Blbikge1xuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgZGlzcGxheTogYmxvY2s7YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYGhlaWdodDogJHt0aGlzLmhlaWdodH1weDsgd2lkdGg6ICR7dGhpcy53aWR0aH1weDsgZGlzcGxheTogYmxvY2s7YCk7XG4gICAgfVxuICB9XG5cbiAgQFZpZXdDaGlsZCgndGh1bWJuYWlsJykgdGh1bWJuYWlsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdpbWFnZVZpZXcnKSBpbWFnZVZpZXc6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2Zvb3RlcicpIGZvb3RlcjogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgc3JjOiBTYWZlVXJsO1xuICBASW5wdXQoKSBoZWlnaHQ7XG4gIEBJbnB1dCgpIHdpZHRoO1xuICBASW5wdXQoKSBwdWxsRGlzdGFuY2UgPSAxNTA7XG4gIEBJbnB1dCgpIGFjdGlvbnM6IEltYWdlVmlld2VyQWN0aW9uW10gPSBbXTtcbiAgQE91dHB1dCgpIGZpdkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2QWN0aW9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8SW1hZ2VWaWV3ZXJDb21wb25lbnQ+O1xuICBfaXNPcGVuID0gZmFsc2U7XG4gIF9jb250cm9sc1Zpc2libGUgPSB0cnVlO1xuICB0aHVtYm5haWxWaXNpYmxlID0gdHJ1ZTtcblxuICB0aHVtYm5haWxQb3NpdGlvbjogeyBvZmZzZXRUb3A6IG51bWJlciwgb2Zmc2V0TGVmdDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwgcGFuVG9wPzogc3RyaW5nIH07XG4gIHNjYWxlID0gMTtcbiAgdG9wOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbiAgcGluY2hlbmQ6IFN1YnNjcmlwdGlvbjtcbiAgcGluY2g6IFN1YnNjcmlwdGlvbjtcbiAgdmVydGljYWxQYW46IFN1YnNjcmlwdGlvbjtcbiAgcGFuUmVtb3ZlOiBTdWJzY3JpcHRpb247XG4gIHBhblJlc2V0OiBTdWJzY3JpcHRpb247XG4gIGRvdWJsZXRhcDogU3Vic2NyaXB0aW9uO1xuICBzaW5nbGV0YXA6IFN1YnNjcmlwdGlvbjtcbiAgY2xvc2VTdWI6IFN1YnNjcmlwdGlvbjtcbiAgcGluY2hQYW46IFN1YnNjcmlwdGlvbjtcbiAgYWN0aW9uU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgc2luZ2xldGFwSGFtbWVyO1xuICBkb3VibGVUYXBIYW1tZXI7XG4gIHBpbmNoSGFtbWVyO1xuICBwYW5IYW1tZXI7XG5cblxuICBwaW5jaENlbnRlcjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgZG9tQ3RybDogRG9tQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjaGFuZ2U6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgYW5pbWF0aW9uOiBBbmltYXRpb25CdWlsZGVyLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb3BlbihldmVudCkge1xuICAgIHRoaXMuYXBwZW5kQ29tcG9uZW50VG9Cb2R5KGV2ZW50KTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgYm91bmRzID0gdGhpcy50aHVtYm5haWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4geyBvZmZzZXRUb3A6IGJvdW5kcy50b3AsIG9mZnNldExlZnQ6IGJvdW5kcy5sZWZ0LCBoZWlnaHQ6IGV2ZW50LnNyY0VsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aWR0aDogZXZlbnQuc3JjRWxlbWVudC5jbGllbnRXaWR0aCB9O1xuICB9XG5cbiAgYXBwZW5kQ29tcG9uZW50VG9Cb2R5KGV2ZW50KSB7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEltYWdlVmlld2VyQ29tcG9uZW50KVxuICAgICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblxuICAgIHRoaXMudGh1bWJuYWlsVmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLl9pc09wZW4gPSB0cnVlO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnNyYyA9IHRoaXMuc3JjO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50UmVmO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnRodW1ibmFpbFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCk7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnRodW1ibmFpbFBvc2l0aW9uLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UudGh1bWJuYWlsUG9zaXRpb24uaGVpZ2h0O1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmFjdGlvbnMgPSB0aGlzLmFjdGlvbnM7XG5cbiAgICB0aGlzLmNsb3NlU3ViID0gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZml2Q2xvc2VcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmFjdGlvblN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnRodW1ibmFpbFZpc2libGUgPSB0cnVlO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmFjdGlvblN1YiA9IHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmZpdkFjdGlvbkNsaWNrXG4gICAgICAuc3Vic2NyaWJlKChldikgPT4ge1xuICAgICAgICB0aGlzLmZpdkFjdGlvbkNsaWNrLmVtaXQoZXYpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuICAgIGNvbnN0IGRvbUVsZW0gPSAodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG4gICAgICAucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21FbGVtKTtcblxuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGlmICghdGhpcy50aHVtYm5haWxQb3NpdGlvbi5wYW5Ub3ApIHtcbiAgICAgIHRoaXMudGh1bWJuYWlsUG9zaXRpb24ucGFuVG9wID0gdGhpcy50b3AgKyAncHgnO1xuICAgICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgfVxuICBjbGVhclN1YnNjcmlwdGlvbnMoKTogYW55IHtcbiAgICB0aGlzLnBhblJlbW92ZS51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucGFuUmVzZXQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnZlcnRpY2FsUGFuLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5waW5jaC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucGluY2hlbmQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnNpbmdsZXRhcC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuZG91YmxldGFwLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5waW5jaFBhbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVtb3ZlSGFtbWVyTWFuYWdlcigpOiBhbnkge1xuICAgIHRoaXMuc2luZ2xldGFwSGFtbWVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLmRvdWJsZVRhcEhhbW1lci5kZXN0cm95KCk7XG4gICAgdGhpcy5waW5jaEhhbW1lci5kZXN0cm95KCk7XG4gICAgdGhpcy5wYW5IYW1tZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgZGV0YWNoKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICd2b2lkJykge1xuICAgICAgdGhpcy5hcHBSZWYuZGV0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICB0aGlzLmNsZWFyU3Vic2NyaXB0aW9ucygpO1xuICAgICAgdGhpcy5yZW1vdmVIYW1tZXJNYW5hZ2VyKCk7XG4gICAgICB0aGlzLmZpdkNsb3NlLmVtaXQoKTtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICByZXNldFBvc2l0aW9uKCkge1xuICAgIHRoaXMudG9wID0gdGhpcy5wbGF0Zm9ybS5oZWlnaHQoKSAvIDI7XG4gICAgdGhpcy5sZWZ0ID0gMDtcbiAgICB0aGlzLnBpbmNoQ2VudGVyID0geyB4OiB0aGlzLnBsYXRmb3JtLndpZHRoKCkgLyAyLCB5OiB0aGlzLnBsYXRmb3JtLmhlaWdodCgpIC8gMiB9O1xuICB9XG5cbiAgb25FbnRlcihldmVudCkge1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICd2b2lkJykge1xuICAgICAgLy8gc2V0dXAgdmFyaWFibGVzIGluIGZ1bGxzY3JlZW5cbiAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigpO1xuICAgICAgdGhpcy5zZXR1cENsaWNrcygpO1xuICAgICAgdGhpcy5zZXR1cFBhbigpO1xuICAgICAgdGhpcy5zZXR1cFBpbmNoKCk7XG4gICAgfVxuICB9XG4gIHNldHVwQ2xpY2tzKCk6IGFueSB7XG4gICAgdGhpcy5kb3VibGVUYXBIYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuaW1hZ2VWaWV3Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuZG91YmxlVGFwSGFtbWVyLmdldCgndGFwJykuc2V0KHsgZW5hYmxlOiB0cnVlLCB0YXBzOiAyIH0pO1xuXG4gICAgdGhpcy5zaW5nbGV0YXBIYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuaW1hZ2VWaWV3Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuc2luZ2xldGFwSGFtbWVyLmdldCgndGFwJykuc2V0KHsgZW5hYmxlOiB0cnVlLCB0YXBzOiAxIH0pO1xuXG4gICAgY29uc3QgZG91YmxldGFwJCA9IGZyb21FdmVudCh0aGlzLmRvdWJsZVRhcEhhbW1lciwgJ3RhcCcpO1xuICAgIGNvbnN0IHNpbmdsZXRhcCQgPSBmcm9tRXZlbnQodGhpcy5zaW5nbGV0YXBIYW1tZXIsICd0YXAnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgICB0YWtlVW50aWwoZG91YmxldGFwJCksXG4gICAgICAgIGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gZXZlbnQudGFwQ291bnQgPT09IDEpLFxuICAgICAgICByZXBlYXQoKVxuICAgICAgKTtcblxuICAgIHRoaXMuZG91YmxldGFwID0gZG91YmxldGFwJC5zdWJzY3JpYmUocmVzID0+IHRoaXMuaGFuZGxlRG91YmxlVGFwKHJlcykpO1xuICAgIHRoaXMuc2luZ2xldGFwID0gc2luZ2xldGFwJC5zdWJzY3JpYmUocmVzID0+IHRoaXMuaGFuZGxlU2luZ2xlVGFwKCkpO1xuICB9XG5cbiAgc2V0dXBQaW5jaCgpIHtcbiAgICB0aGlzLnBpbmNoSGFtbWVyID0gbmV3IEhhbW1lcih0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLnBpbmNoSGFtbWVyLmdldCgncGluY2gnKS5zZXQoeyBlbmFibGU6IHRydWUgfSk7XG5cbiAgICBjb25zdCBwaW5jaGVuZCQgPSBmcm9tRXZlbnQodGhpcy5waW5jaEhhbW1lciwgJ3BpbmNoZW5kJyk7XG4gICAgdGhpcy5waW5jaGVuZCA9IHBpbmNoZW5kJC5zdWJzY3JpYmUoKGV2ZW50OiBhbnkpID0+IHtcblxuICAgICAgdGhpcy5zY2FsZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuc2NhbGUgKiBldmVudC5zY2FsZSwgOCkpO1xuICAgICAgaWYgKHRoaXMuc2NhbGUgPCAxKSB7XG4gICAgICAgIHRoaXMucmVzZXRTY2FsZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcGluY2gkID0gZnJvbUV2ZW50KHRoaXMucGluY2hIYW1tZXIsICdwaW5jaCcpO1xuICAgIHRoaXMucGluY2ggPSBwaW5jaCRcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5waW5jaENlbnRlciA9IGV2ZW50LmNlbnRlcjtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0oZXZlbnQuc2NhbGUpO1xuICAgICAgICB0aGlzLm1vdmUoZXZlbnQpO1xuICAgICAgfSk7XG4gIH1cblxuICBzZXR1cFBhbigpIHtcbiAgICAvLyBjbG9zZSBwYW5zXG4gICAgY29uc3QgcHVsbERpc3RhbmNlID0gMTIwO1xuICAgIHRoaXMucGFuSGFtbWVyID0gbmV3IEhhbW1lcih0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLnBhbkhhbW1lci5nZXQoJ3BhbicpLnNldCh7IGVuYWJsZTogdHJ1ZSwgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0FMTCB9KTtcbiAgICBjb25zdCBwYW5zdGFydCA9IGZyb21FdmVudCh0aGlzLnBhbkhhbW1lciwgJ3BhbnN0YXJ0Jyk7XG5cbiAgICBjb25zdCBwYW5lbmQgPSBmcm9tRXZlbnQodGhpcy5wYW5IYW1tZXIsICdwYW5lbmQnKTtcbiAgICBjb25zdCBwYW5tb3ZlID0gZnJvbUV2ZW50KHRoaXMucGFuSGFtbWVyLCAncGFubW92ZScpO1xuXG4gICAgY29uc3QgcGFuZG93biA9IGZyb21FdmVudCh0aGlzLnBhbkhhbW1lciwgJ3BhbmRvd24nKTtcbiAgICBjb25zdCBwYW51cCA9IGZyb21FdmVudCh0aGlzLnBhbkhhbW1lciwgJ3BhbnVwJyk7XG5cbiAgICBjb25zdCBkb3duID0gcGFuc3RhcnRcbiAgICAgIC5waXBlKFxuICAgICAgICBmbGF0TWFwKCgpID0+IHBhbmRvd24ucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5zY2FsZSA9PT0gMSkpKVxuICAgICAgKTtcblxuICAgIGNvbnN0IHVwID0gcGFuc3RhcnRcbiAgICAgIC5waXBlKFxuICAgICAgICBmbGF0TWFwKCgpID0+IHBhbnVwLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuc2NhbGUgPT09IDEpKSlcbiAgICAgICk7XG5cbiAgICBjb25zdCB2ZXJ0aWNhbFBhbiQgPSBtZXJnZSh1cCwgZG93bik7XG5cbiAgICB0aGlzLnZlcnRpY2FsUGFuID0gdmVydGljYWxQYW4kLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0Qm90dG9tKHRoaXMuY2FsY3VsYXRlQm90dG9tKHJlcykpO1xuICAgICAgdGhpcy5zZXRUb3AodGhpcy5jYWxjdWxhdGVUb3AocmVzKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwaW5jaFBhbk1vdmUgPSBwYW5tb3ZlXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuc2NhbGUgPiAxKVxuICAgICAgKTtcblxuICAgIGNvbnN0IHBpbmNoUGFuJCA9IHBhbnN0YXJ0XG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKChldmVudDogYW55KSA9PiB0aGlzLnBpbmNoQ2VudGVyID0gZXZlbnQuY2VudGVyKSxcbiAgICAgICAgZmxhdE1hcCgoKSA9PiBwaW5jaFBhbk1vdmVcbiAgICAgICAgKSk7XG5cbiAgICB0aGlzLnBpbmNoUGFuID0gcGluY2hQYW4kXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm1vdmUocmVzKTtcbiAgICAgIH0pO1xuXG5cbiAgICB0aGlzLnBhblJlbW92ZSA9IHBhbmVuZFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gdGhpcy5zY2FsZSA9PT0gMSAmJiBldmVudC5kaXN0YW5jZSA+IHB1bGxEaXN0YW5jZSAmJiBldmVudC5tYXhQb2ludGVycyA9PT0gMSksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHsgdGhpcy5yZW1vdmUoKTsgfSk7XG5cbiAgICB0aGlzLnBhblJlc2V0ID0gcGFuZW5kXG4gICAgICAucGlwZShcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBhbnkpID0+IHRoaXMuc2NhbGUgPT09IDEgJiYgZXZlbnQuZGlzdGFuY2UgPD0gcHVsbERpc3RhbmNlIHx8IHRoaXMuc2NhbGUgPT09IDEgJiYgZXZlbnQuZGlzdGFuY2UgPiBwdWxsRGlzdGFuY2UgJiYgZXZlbnQubWF4UG9pbnRlcnMgPiAxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldFBhbigpO1xuICAgICAgICB0aGlzLnJlc2V0Rm9vdGVyKHRoaXMuY2FsY3VsYXRlQm90dG9tKGV2ZW50KSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG1vdmUoZXZlbnQ6IGFueSkge1xuICAgIGlmICghdGhpcy5waW5jaENlbnRlcikge1xuICAgICAgdGhpcy5waW5jaENlbnRlciA9IGV2ZW50LmNlbnRlcjtcbiAgICB9XG4gICAgY29uc3QgbW92ZVYgPSBldmVudC5jZW50ZXIueSAtIHRoaXMucGluY2hDZW50ZXIueTtcbiAgICBjb25zdCBtb3ZlSCA9IGV2ZW50LmNlbnRlci54IC0gdGhpcy5waW5jaENlbnRlci54O1xuICAgIHRoaXMucGluY2hDZW50ZXIgPSBldmVudC5jZW50ZXI7XG4gICAgY29uc3QgbmV3WCA9IHRoaXMucmVzdHJpY3RSYXdQb3NYKHRoaXMubGVmdCArIG1vdmVIKTtcbiAgICBjb25zdCBuZXdZID0gdGhpcy5yZXN0cmljdFJhd1Bvc1kodGhpcy50b3AgKyBtb3ZlVik7XG5cbiAgICB0aGlzLnNldFRvcChuZXdZKTtcbiAgICB0aGlzLnNldExlZnQobmV3WCk7XG4gIH1cblxuICByZXN0cmljdFJhd1Bvc1gocG9zKSB7XG4gICAgY29uc3Qgdmlld3BvcnREaW0gPSB0aGlzLnBsYXRmb3JtLndpZHRoKCk7XG4gICAgY29uc3QgaW1hZ2VXaWR0aCA9IHRoaXMuZ2V0Q3VycmVudEltYWdlV2lkdGgoKSAvIHRoaXMuc2NhbGU7XG4gICAgY29uc3QgYm9yZGVyUG9zID0gKHRoaXMuZ2V0Q3VycmVudEltYWdlV2lkdGgoKSAtIE1hdGgubWluKHZpZXdwb3J0RGltLCBpbWFnZVdpZHRoKSkgLyAyO1xuICAgIGlmIChwb3MgPCBib3JkZXJQb3MgKiAtMSkge1xuICAgICAgcmV0dXJuIGJvcmRlclBvcyAqIC0xO1xuICAgIH0gZWxzZSBpZiAocG9zID4gYm9yZGVyUG9zKSB7XG4gICAgICByZXR1cm4gYm9yZGVyUG9zO1xuICAgIH1cbiAgICByZXR1cm4gcG9zO1xuICB9XG5cbiAgcmVzdHJpY3RSYXdQb3NZKHBvcykge1xuICAgIGNvbnN0IHZpZXdwb3J0RGltID0gdGhpcy5wbGF0Zm9ybS5oZWlnaHQoKTtcbiAgICBjb25zdCBpbWFnZUhlaWdodCA9IHRoaXMuZ2V0Q3VycmVudEltYWdlSGVpZ2h0KCkgLyB0aGlzLnNjYWxlO1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMucGxhdGZvcm0uaGVpZ2h0KCkgLyAyO1xuICAgIGxldCBib3JkZXJQb3MgPSBwb3M7XG4gICAgaWYgKHRoaXMuZ2V0Q3VycmVudEltYWdlSGVpZ2h0KCkgPiB0aGlzLnBsYXRmb3JtLmhlaWdodCgpKSB7XG4gICAgICBib3JkZXJQb3MgPSAodGhpcy5nZXRDdXJyZW50SW1hZ2VIZWlnaHQoKSAtIE1hdGgubWF4KHZpZXdwb3J0RGltLCBpbWFnZUhlaWdodCkpIC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9yZGVyUG9zID0gKHRoaXMuZ2V0Q3VycmVudEltYWdlSGVpZ2h0KCkgLSBNYXRoLm1pbih2aWV3cG9ydERpbSwgaW1hZ2VIZWlnaHQpKSAvIDI7XG4gICAgfVxuICAgIGlmIChwb3MgPCBib3JkZXJQb3MgKiAtMSArIG9mZnNldCkge1xuICAgICAgcmV0dXJuIGJvcmRlclBvcyAqIC0xICsgb2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAocG9zID4gYm9yZGVyUG9zICsgb2Zmc2V0KSB7XG4gICAgICByZXR1cm4gYm9yZGVyUG9zICsgb2Zmc2V0O1xuICAgIH1cbiAgICByZXR1cm4gcG9zO1xuICB9XG5cbiAgc2V0Qm90dG9tKGJvdHRvbTogbnVtYmVyKSB7XG4gICAgdGhpcy5kb21DdHJsLndyaXRlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb250cm9sc1Zpc2libGUgJiYgdGhpcy5mb290ZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmZvb3Rlci5uYXRpdmVFbGVtZW50LCAnYm90dG9tJywgYC0ke2JvdHRvbX1weGApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICBjYWxjdWxhdGVQYW5Qcm9ncmVzcyhldmVudDogYW55KTogbnVtYmVyIHtcbiAgICBjb25zdCBwdWxsRGlzdGFuY2UgPSAxMjA7XG4gICAgcmV0dXJuIE1hdGguYWJzKDEwMCAqIGV2ZW50LmRpc3RhbmNlIC8gcHVsbERpc3RhbmNlKTtcbiAgfVxuXG4gIHRyYW5zZm9ybShzY2FsZSkge1xuICAgIGNvbnN0IHMgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLnNjYWxlICogc2NhbGUsIDgpKTtcbiAgICB0aGlzLnNldFNjYWxlKHMsIHRydWUpO1xuICB9XG5cbiAgY2FsY3VsYXRlQm90dG9tKGV2ZW50KSB7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmNhbGN1bGF0ZVBhblByb2dyZXNzKGV2ZW50KTtcbiAgICByZXR1cm4gZXZlbnQuZGlzdGFuY2UgKiBwcm9ncmVzcyAvIDEwMDtcbiAgfVxuXG4gIHNldFNjYWxlKHNjYWxlLCBza2lwPykge1xuICAgIGlmICghc2tpcCkge1xuICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgIH1cbiAgICB0aGlzLmRvbUN0cmwud3JpdGUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaW1hZ2VWaWV3KSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5pbWFnZVZpZXcubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKCR7c2NhbGV9KWApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9wKHRvcCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMudGh1bWJuYWlsUG9zaXRpb24ucGFuVG9wID0gdGhpcy50b3AgKyAncHgnO1xuICAgIHRoaXMuZG9tQ3RybC53cml0ZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pbWFnZVZpZXcpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50LCAndG9wJywgYCR7dG9wfXB4YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRMZWZ0KGxlZnQpIHtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMuZG9tQ3RybC53cml0ZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pbWFnZVZpZXcpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIGAke2xlZnR9cHhgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVRvcChldmVudDogYW55KSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBldmVudC5kaXN0YW5jZTtcbiAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGguYWJzKDEwMCAqIGRpc3RhbmNlIC8gdGhpcy5wdWxsRGlzdGFuY2UpO1xuXG4gICAgaWYgKHByb2dyZXNzIDw9IDEwMCkge1xuICAgICAgcmV0dXJuIHRoaXMucGxhdGZvcm0uaGVpZ2h0KCkgLyAyICsgZGlzdGFuY2U7XG4gICAgfSBlbHNlIGlmIChwcm9ncmVzcyA+PSAxMDAgJiYgcHJvZ3Jlc3MgPCAyMDApIHtcbiAgICAgIHJldHVybiB0aGlzLnBsYXRmb3JtLmhlaWdodCgpIC8gMiArIHRoaXMucHVsbERpc3RhbmNlICsgdGhpcy5wdWxsRGlzdGFuY2UgLyAyICogKHByb2dyZXNzIC0gMTAwKSAvIDEwMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucGxhdGZvcm0uaGVpZ2h0KCkgLyAyICsgdGhpcy5wdWxsRGlzdGFuY2UgKyB0aGlzLnB1bGxEaXN0YW5jZSAvIDI7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRQYW4oKSB7XG4gICAgY29uc3QgcmVzZXQgPSB0aGlzLmFuaW1hdGlvbi5idWlsZChbXG4gICAgICBzdHlsZSh7IHRvcDogYCR7dGhpcy50b3B9cHhgIH0pLFxuICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZScsIHN0eWxlKHsgdG9wOiBgJHt0aGlzLnBsYXRmb3JtLmhlaWdodCgpIC8gMn1weGAgfSkpXG4gICAgXSk7XG5cbiAgICBjb25zdCBhbmltYXRpb24gPSByZXNldC5jcmVhdGUodGhpcy5pbWFnZVZpZXcubmF0aXZlRWxlbWVudCk7XG4gICAgYW5pbWF0aW9uLnBsYXkoKTtcbiAgICBhbmltYXRpb24ub25Eb25lKCgpID0+IHtcbiAgICAgIGFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgICB0aGlzLnNldFRvcCh0aGlzLnBsYXRmb3JtLmhlaWdodCgpIC8gMik7XG4gICAgfSk7XG4gIH1cblxuICByZXNldEZvb3RlcihzdGFydCkge1xuICAgIGlmICghdGhpcy5fY29udHJvbHNWaXNpYmxlKSB7XG4gICAgICB0aGlzLnNldEJvdHRvbSgwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVzZXQgPSB0aGlzLmFuaW1hdGlvbi5idWlsZChbXG4gICAgICBzdHlsZSh7IGJvdHRvbTogYC0ke3N0YXJ0fXB4YCB9KSxcbiAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2UnLCBzdHlsZSh7IGJvdHRvbTogYDBweGAgfSkpXG4gICAgXSk7XG5cbiAgICBjb25zdCBhbmltYXRpb24gPSByZXNldC5jcmVhdGUodGhpcy5mb290ZXIubmF0aXZlRWxlbWVudCk7XG4gICAgYW5pbWF0aW9uLnBsYXkoKTtcbiAgICBhbmltYXRpb24ub25Eb25lKCgpID0+IHtcbiAgICAgIGFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgICB0aGlzLnNldEJvdHRvbSgwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFuaW1hdGVTY2FsZSh0b1NjYWxlOiBudW1iZXIsIHRvUG9zaXRpb246IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSkge1xuICAgIC8vIGNvbnN0IGRlbHRhWCA9IHRoaXMucGluY2hDZW50ZXIueCAtIHRvUG9zaXRpb24ueDtcbiAgICAvLyBjb25zdCBkZWx0YVkgPSB0aGlzLnBpbmNoQ2VudGVyLnkgLSB0b1Bvc2l0aW9uLnk7XG4gICAgY29uc3QgZGVsdGFYID0gKHRoaXMucGluY2hDZW50ZXIueCAtIHRvUG9zaXRpb24ueCkgKiB0b1NjYWxlO1xuICAgIGNvbnN0IGRlbHRhWSA9ICh0aGlzLnBpbmNoQ2VudGVyLnkgLSB0b1Bvc2l0aW9uLnkpICogdG9TY2FsZTtcbiAgICBjb25zdCBuZXdMZWZ0ID0gdGhpcy5sZWZ0ICsgZGVsdGFYIC8gdG9TY2FsZTtcbiAgICBjb25zdCBuZXdUb3AgPSB0aGlzLnRvcCArIGRlbHRhWSAvIHRvU2NhbGU7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLmFuaW1hdGlvbi5idWlsZChbXG4gICAgICBzdHlsZSh7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoJHt0aGlzLnNjYWxlfSlgLCB0b3A6IGAke3RoaXMudG9wfXB4YCwgbGVmdDogYCR7dGhpcy5sZWZ0fXB4YCB9KSxcbiAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UnLCBzdHlsZSh7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoJHt0b1NjYWxlfSlgLCB0b3A6IGAke25ld1RvcH1weGAsIGxlZnQ6IGAke25ld0xlZnR9cHhgIH0pKVxuICAgIF0pO1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHNjYWxlLmNyZWF0ZSh0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50KTtcbiAgICBhbmltYXRpb24ucGxheSgpO1xuICAgIGFuaW1hdGlvbi5vbkRvbmUoKCkgPT4ge1xuICAgICAgYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc2V0U2NhbGUodG9TY2FsZSk7XG4gICAgICB0aGlzLnNldFRvcChuZXdUb3ApO1xuICAgICAgdGhpcy5zZXRMZWZ0KG5ld0xlZnQpO1xuICAgICAgdGhpcy5waW5jaENlbnRlciA9IHRvUG9zaXRpb247XG4gICAgfSk7XG4gIH1cblxuICByZXNldFNjYWxlKCkge1xuICAgIGNvbnN0IHQgPSB0aGlzLnBsYXRmb3JtLmhlaWdodCgpIC8gMjtcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMuYW5pbWF0aW9uLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgke3RoaXMuc2NhbGV9KWAsIHRvcDogYCR7dGhpcy50b3B9cHhgLCBsZWZ0OiBgJHt0aGlzLmxlZnR9cHhgIH0pLFxuICAgICAgYW5pbWF0ZSgnMjAwbXMgZWFzZScsIHN0eWxlKHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgkezF9KWAsIHRvcDogYCR7dH1weGAsIGxlZnQ6IGAkezB9cHhgIH0pKVxuICAgIF0pO1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHNjYWxlLmNyZWF0ZSh0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50KTtcbiAgICBhbmltYXRpb24ucGxheSgpO1xuICAgIGFuaW1hdGlvbi5vbkRvbmUoKCkgPT4ge1xuICAgICAgYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc2V0U2NhbGUoMSk7XG4gICAgICB0aGlzLnNldFRvcCh0KTtcbiAgICAgIHRoaXMuc2V0TGVmdCgwKTtcbiAgICAgIHRoaXMucGluY2hDZW50ZXIgPSB0aGlzLmdldEFic29sdXRlQ2VudGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTaW5nbGVUYXAoKSB7XG4gICAgdGhpcy5fY29udHJvbHNWaXNpYmxlID0gIXRoaXMuX2NvbnRyb2xzVmlzaWJsZTtcbiAgfVxuXG4gIGhhbmRsZURvdWJsZVRhcChldmVudCkge1xuICAgIGlmICh0aGlzLnNjYWxlID09PSAxKSB7XG4gICAgICB0aGlzLmFuaW1hdGVTY2FsZSgyLCBldmVudC5jZW50ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc2V0U2NhbGUoKTtcbiAgICB9XG5cbiAgfVxuXG4gIGdldEN1cnJlbnRJbWFnZUhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZVZpZXcubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgKiB0aGlzLnNjYWxlO1xuICB9XG4gIGdldEN1cnJlbnRJbWFnZVdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlVmlldy5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoICogdGhpcy5zY2FsZTtcbiAgfVxuXG4gIGdldEFic29sdXRlQ2VudGVyKCkge1xuICAgIHJldHVybiB7IHg6IHRoaXMucGxhdGZvcm0ud2lkdGgoKSAvIDIsIHk6IHRoaXMucGxhdGZvcm0uaGVpZ2h0KCkgLyAyIH07XG4gIH1cblxuICBvbkFjdGlvbkNsaWNrZWQoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuZml2QWN0aW9uQ2xpY2suZW1pdChpbmRleCk7XG4gIH1cbn1cblxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VWaWV3ZXJBY3Rpb24ge1xuICBuYW1lPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgUmVuZGVyZXIyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlLCBzdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSW9uSW5wdXQgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi10b29sYmFyLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sYmFyLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Rvb2xiYXItc2VhcmNoLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzZWFyY2hiYXJBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbignc21hbGwgPT4gbm9ybWFsJywgW1xuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiBzbWFsbCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnOTVtcyBlYXNlLWluJylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ3NtYWxsJywgc3R5bGUoeyB3aWR0aDogJzkycHgnIH0pKSxcbiAgICAgIHN0YXRlKCdub3JtYWwnLCBzdHlsZSh7IHdpZHRoOiAnMTAwJScgfSkpXG4gICAgXSksXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXG4gICAgICAgIGFuaW1hdGUoJzg1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAncm90YXRlWigwZGVnKScgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnNjVtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3JvdGF0ZVooNDVkZWcpJyB9KSlcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3RpdGxlQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTIwJSknIH0pLFxuICAgICAgICBhbmltYXRlKCcxNzVtcyBlYXNlLW91dCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9KSlcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgc2VhcmNoaW5nID0gZmFsc2U7XG4gIHRpdGxlVmlzaWJsZSA9IHRydWU7XG4gIGNsb3NlQnV0dG9uVmlzaWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBzbWFsbCA9IGZhbHNlO1xuICBAT3V0cHV0KCkgZml2SW5wdXRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2Q2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgc3RhdGU6ICdzbWFsbCcgfCAnbm9ybWFsJyA9ICdub3JtYWwnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5zbWFsbCA/ICdzbWFsbCcgOiAnbm9ybWFsJztcbiAgfVxuXG4gIHNocmluaygpIHtcbiAgICB0aGlzLnN0YXRlID0gJ3NtYWxsJztcbiAgfVxuICBncm93KCkge1xuICAgIHRoaXMuc3RhdGUgPSAnbm9ybWFsJztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnb24gY2hhbmdlcycsIGNoYW5nZXMpO1xuICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuc21hbGwgJiYgY2hhbmdlcy5zbWFsbC5wcmV2aW91c1ZhbHVlID09PSB0cnVlICYmIGNoYW5nZXMuc21hbGwuY3VycmVudFZhbHVlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdub3JtYWwnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLnNtYWxsICYmIGNoYW5nZXMuc21hbGwucHJldmlvdXNWYWx1ZSA9PT0gZmFsc2UgJiYgY2hhbmdlcy5zbWFsbC5jdXJyZW50VmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnc21hbGwnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5TZWFyY2hiYXIoKSB7XG4gICAgaWYgKHRoaXMuc21hbGwpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnbm9ybWFsJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fb3BlbigpO1xuICB9XG5cbiAgdG9nZ2xlU2VhcmNoYmFyKCkge1xuICAgIGlmICh0aGlzLnNlYXJjaGluZykge1xuICAgICAgdGhpcy5jbG9zZVNlYXJjaGJhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW5TZWFyY2hiYXIoKTtcbiAgICB9XG4gIH1cblxuXG4gIHNlYXJjaEJhclN0YXRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ3NlYXJjaGJhclN0YXRlJywgZXZlbnQpO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdub3JtYWwnICYmIGV2ZW50LnRvU3RhdGUgPT09ICdzbWFsbCcpIHtcblxuICAgIH1cblxuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdzbWFsbCcgJiYgZXZlbnQudG9TdGF0ZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgIHRoaXMuX29wZW4oKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgX29wZW4oKSB7XG4gICAgdGhpcy5zZWFyY2hpbmcgPSB0cnVlO1xuICAgIHRoaXMudGl0bGVWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5vcGVuLmVtaXQoKTtcbiAgfVxuXG4gIGNsb3NlU2VhcmNoYmFyKCkge1xuICAgIGlmICh0aGlzLnNtYWxsKSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ3NtYWxsJztcbiAgICB9XG4gICAgdGhpcy5zZWFyY2hpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmZpdkNsb3NlLmVtaXQoKTtcblxuICB9XG5cblxuICBzZWFyY2hBbmltRG9uZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCcjIyMnLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSAhPT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uVmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VBbmltRG9uZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCcjIyMnLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSAhPT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLnNlYXJjaGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHNlYWNoYmFyQW5pbURvbmUoZXZlbnQsIGlucHV0OiBJb25JbnB1dCkge1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xuICAgICAgdGhpcy50aXRsZVZpc2libGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC5zZXRGb2N1cygpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLy4uL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZQYXJhbXMsIFBvcG92ZXJDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtcG9wb3ZlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3BvdmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcG9wb3Zlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBidXR0b25zOiBCdXR0b25Db21wb25lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHVibGljIHBvcG92ZXJDb250cm9sbGVyOiBQb3BvdmVyQ29udHJvbGxlcikge1xuICAgIHRoaXMuYnV0dG9ucyA9IG5hdlBhcmFtcy5nZXQoJ2J1dHRvbnMnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25JdGVtQ2xpY2tlZChpOiBudW1iZXIpIHtcbiAgICB0aGlzLnBvcG92ZXJDb250cm9sbGVyLmRpc21pc3MoeyBpbmRleDogaSB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgUG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vLi4vcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgUG9wb3ZlckNvbnRyb2xsZXIsIEFjdGlvblNoZWV0Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWJ1dHRvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZml2LWJ1dHRvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maXYtYnV0dG9ucy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZpdkJ1dHRvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBJbnB1dCgpIHNsb3QgPSAnZW5kJztcbiAgQElucHV0KCkgc3ViSGVhZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjb3VudCA9IDA7XG4gIEBJbnB1dCgpIGZvcmNlQWN0aW9uc2hlZXQgPSBmYWxzZTtcbiAgQElucHV0KCkgZm9yY2VQb3BvdmVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGljb25zT25seSA9IHRydWU7XG4gIEBDb250ZW50Q2hpbGRyZW4oQnV0dG9uQ29tcG9uZW50KSBidXR0b25zOiBRdWVyeUxpc3Q8QnV0dG9uQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIHBvcG92ZXJDb250cm9sbGVyOiBQb3BvdmVyQ29udHJvbGxlcixcbiAgICBwdWJsaWMgYWN0aW9uU2hlZXRDb250cm9sbGVyOiBBY3Rpb25TaGVldENvbnRyb2xsZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCcjIyMnLCB0aGlzLmJ1dHRvbnMubGVuZ3RoKTtcbiAgfVxuXG4gIG9uTWVudUNsaWNrZWQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5mb3JjZUFjdGlvbnNoZWV0KSB7XG4gICAgICB0aGlzLnByZXNlbnRBY3Rpb25TaGVldChldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcmNlUG9wb3Zlcikge1xuICAgICAgdGhpcy5wcmVzZW50UG9wb3ZlcihldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdtb2JpbGUnKSkge1xuICAgICAgdGhpcy5wcmVzZW50QWN0aW9uU2hlZXQoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByZXNlbnRQb3BvdmVyKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBwcmVzZW50UG9wb3ZlcihldjogYW55KSB7XG4gICAgY29uc3QgcG9wb3ZlciA9IGF3YWl0IHRoaXMucG9wb3ZlckNvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogUG9wb3ZlckNvbXBvbmVudCxcbiAgICAgIGV2ZW50OiBldixcbiAgICAgIHRyYW5zbHVjZW50OiBmYWxzZSxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgICdidXR0b25zJzogdGhpcy5idXR0b25zLnRvQXJyYXkoKS5zbGljZSh0aGlzLmNvdW50KSxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGF3YWl0IHBvcG92ZXIucHJlc2VudCgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvcG92ZXIub25EaWREaXNtaXNzKCk7XG4gICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZGF0YSAmJiAocmVzdWx0LmRhdGEuaW5kZXggfHwgcmVzdWx0LmRhdGEuaW5kZXggPT09IDApKSB7XG4gICAgICB0aGlzLm9uQnV0dG9uQ2xpY2tlZChyZXN1bHQuZGF0YS5pbmRleCArIHRoaXMuY291bnQpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHByZXNlbnRBY3Rpb25TaGVldChldjogYW55KSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IFtdO1xuICAgIHRoaXMuYnV0dG9ucy50b0FycmF5KCkuc2xpY2UodGhpcy5jb3VudClcbiAgICAgIC5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XG4gICAgICAgIGJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgdGV4dDogYnV0dG9uLnRleHQsXG4gICAgICAgICAgaWNvbjogYnV0dG9uLmljb24sXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrZWQodGhpcy5jb3VudCArIGluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgY29uc3QgYWN0aW9uU2hlZXQgPSBhd2FpdCB0aGlzLmFjdGlvblNoZWV0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiB0aGlzLmhlYWRlcixcbiAgICAgIHN1YkhlYWRlcjogdGhpcy5zdWJIZWFkZXIsXG4gICAgICBidXR0b25zOiBidXR0b25zXG4gICAgfSk7XG4gICAgYXdhaXQgYWN0aW9uU2hlZXQucHJlc2VudCgpO1xuICB9XG5cbiAgb25CdXR0b25DbGlja2VkKGk6IG51bWJlcikge1xuICAgIHRoaXMuYnV0dG9ucy50b0FycmF5KClbaV0uY2xpY2suZW1pdCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXhwYW5kYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtZXhwYW5kYWJsZS1pbmRpY2F0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwYW5kYWJsZS1pbmRpY2F0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9leHBhbmRhYmxlLWluZGljYXRvci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEV4cGFuZGFibGVJbmRpY2F0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGljb24gPSAnaW9zLWFycm93LWRvd24nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBleHBhbmRhYmxlOiBFeHBhbmRhYmxlQ29tcG9uZW50KSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcsIEhBTU1FUl9HRVNUVVJFX0NPTkZJRyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSGFtbWVyIH0gZnJvbSAnaGFtbWVyanMnO1xuaW1wb3J0IHsgU3RlcHBlckNvbXBvbmVudCB9IGZyb20gJy4vc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwL3N0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IFN0ZXBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAtaGVhZGVyL3N0ZXAtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGVwQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vc3RlcC1jb250ZW50L3N0ZXAtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhwYW5kYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9yb3V0ZXItaXRlbS9yb3V0ZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sbGFwc2FibGVNZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9jb2xsYXBzYWJsZS1tZW51L2NvbGxhcHNhYmxlLW1lbnUuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbGxhcHNhYmxlTWVudUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29sbGFwc2FibGUtbWVudS1idXR0b24vY29sbGFwc2FibGUtbWVudS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEZpdlBhc3N3b3JkSW5wdXQgfSBmcm9tICcuL3Bhc3N3b3JkLWlucHV0L3Bhc3N3b3JkLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb3R0b21TaGVldENvbXBvbmVudCB9IGZyb20gJy4vYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm90dG9tU2hlZXRDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9ib3R0b20tc2hlZXQtY29udGVudC9ib3R0b20tc2hlZXQtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy1idXR0b24vbG9hZGluZy1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRpbmdQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy1wcm9ncmVzcy1iYXIvbG9hZGluZy1wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRpbmdDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nLWNvbnRlbnQvbG9hZGluZy1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nRmFiQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nLWZhYi9sb2FkaW5nLWZhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IElmUGxhdGZvcm1EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaWYtcGxhdGZvcm0uZGlyZWN0aXZlJztcbmltcG9ydCB7IENlbnRlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jZW50ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBlcm1pc3Npb25zRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Blcm1pc3Npb25zLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSaXBwbGVDb21wb25lbnQgfSBmcm9tICcuL3JpcHBsZS9yaXBwbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFZpZXdwb3J0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3ZpZXdwb3J0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQdWxsRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3B1bGwuZGlyZWN0aXZlJztcbmltcG9ydCB7IExvYWRpbmdTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGVwcGVySG9yaXpvbnRhbENvbXBvbmVudCB9IGZyb20gJy4vc3RlcHBlci1ob3Jpem9udGFsL3N0ZXBwZXItaG9yaXpvbnRhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50L2xvYWRpbmctcmVmcmVzaGVyLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcEJhclRhYkNvbXBvbmVudCB9IGZyb20gJy4vYXBwLWJhci10YWIvYXBwLWJhci10YWIuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcEJhclRhYkNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2FwcC1iYXItdGFiLWNvbnRlbnQvYXBwLWJhci10YWItY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW1hZ2VWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRvb2xiYXJTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXItc2VhcmNoL3Rvb2xiYXItc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaXZCdXR0b25zQ29tcG9uZW50IH0gZnJvbSAnLi9maXYtYnV0dG9ucy9maXYtYnV0dG9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEV4cGFuZGFibGVJbmRpY2F0b3JDb21wb25lbnQgfSBmcm9tICcuL2V4cGFuZGFibGUtaW5kaWNhdG9yL2V4cGFuZGFibGUtaW5kaWNhdG9yLmNvbXBvbmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIE15SGFtbWVyQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gIG92ZXJyaWRlcyA9IDxhbnk+e1xuICAgIHBhbjogeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fVkVSVElDQUwsIHRocmVzaG9sZDogMyB9LFxuICB9O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEV4cGFuZGFibGVDb21wb25lbnQsXG4gICAgRml2UGFzc3dvcmRJbnB1dCxcbiAgICBTdGVwcGVyQ29tcG9uZW50LFxuICAgIFN0ZXBDb21wb25lbnQsXG4gICAgU3RlcEhlYWRlckNvbXBvbmVudCxcbiAgICBTdGVwQ29udGVudENvbXBvbmVudCxcbiAgICBSb3V0ZXJJdGVtQ29tcG9uZW50LFxuICAgIENlbnRlckRpcmVjdGl2ZSxcbiAgICBDb2xsYXBzYWJsZU1lbnVCdXR0b25Db21wb25lbnQsXG4gICAgQ29sbGFwc2FibGVNZW51RGlyZWN0aXZlLFxuICAgIEJvdHRvbVNoZWV0Q29tcG9uZW50LFxuICAgIEJvdHRvbVNoZWV0Q29udGVudENvbXBvbmVudCxcbiAgICBUb29sYmFyU2VhcmNoQ29tcG9uZW50LFxuICAgIExvYWRpbmdCdXR0b25Db21wb25lbnQsXG4gICAgTG9hZGluZ1Byb2dyZXNzQmFyQ29tcG9uZW50LFxuICAgIExvYWRpbmdDb250ZW50Q29tcG9uZW50LFxuICAgIExvYWRpbmdGYWJDb21wb25lbnQsXG4gICAgQXBwQmFyQ29tcG9uZW50LFxuICAgIElmUGxhdGZvcm1EaXJlY3RpdmUsXG4gICAgUGVybWlzc2lvbnNEaXJlY3RpdmUsXG4gICAgUmlwcGxlQ29tcG9uZW50LFxuICAgIFZpZXdwb3J0RGlyZWN0aXZlLFxuICAgIFB1bGxEaXJlY3RpdmUsXG4gICAgTG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQsXG4gICAgTG9hZGluZ1NwaW5uZXJDb21wb25lbnQsXG4gICAgU3RlcHBlckhvcml6b250YWxDb21wb25lbnQsXG4gICAgSWNvbkNvbXBvbmVudCxcbiAgICBEaWFsb2dDb21wb25lbnQsXG4gICAgQXBwQmFyVGFiQ29tcG9uZW50LFxuICAgIEFwcEJhclRhYkNvbnRlbnRDb21wb25lbnQsXG4gICAgSW1hZ2VWaWV3ZXJDb21wb25lbnQsXG4gICAgRml2QnV0dG9uc0NvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgUG9wb3ZlckNvbXBvbmVudCxcbiAgICBFeHBhbmRhYmxlSW5kaWNhdG9yQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtJbWFnZVZpZXdlckNvbXBvbmVudCwgUG9wb3ZlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtcbiAgICBFeHBhbmRhYmxlQ29tcG9uZW50LFxuICAgIEZpdlBhc3N3b3JkSW5wdXQsXG4gICAgU3RlcHBlckNvbXBvbmVudCxcbiAgICBTdGVwQ29tcG9uZW50LFxuICAgIFN0ZXBIZWFkZXJDb21wb25lbnQsXG4gICAgU3RlcENvbnRlbnRDb21wb25lbnQsXG4gICAgUm91dGVySXRlbUNvbXBvbmVudCxcbiAgICBDb2xsYXBzYWJsZU1lbnVEaXJlY3RpdmUsXG4gICAgQ2VudGVyRGlyZWN0aXZlLFxuICAgIENvbGxhcHNhYmxlTWVudUJ1dHRvbkNvbXBvbmVudCxcbiAgICBCb3R0b21TaGVldENvbXBvbmVudCxcbiAgICBCb3R0b21TaGVldENvbnRlbnRDb21wb25lbnQsXG4gICAgVG9vbGJhclNlYXJjaENvbXBvbmVudCxcbiAgICBMb2FkaW5nQnV0dG9uQ29tcG9uZW50LFxuICAgIExvYWRpbmdQcm9ncmVzc0JhckNvbXBvbmVudCxcbiAgICBMb2FkaW5nQ29udGVudENvbXBvbmVudCxcbiAgICBMb2FkaW5nRmFiQ29tcG9uZW50LFxuICAgIEFwcEJhckNvbXBvbmVudCxcbiAgICBJZlBsYXRmb3JtRGlyZWN0aXZlLFxuICAgIFBlcm1pc3Npb25zRGlyZWN0aXZlLFxuICAgIFJpcHBsZUNvbXBvbmVudCxcbiAgICBWaWV3cG9ydERpcmVjdGl2ZSxcbiAgICBQdWxsRGlyZWN0aXZlLFxuICAgIExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50LFxuICAgIExvYWRpbmdTcGlubmVyQ29tcG9uZW50LFxuICAgIFN0ZXBwZXJIb3Jpem9udGFsQ29tcG9uZW50LFxuICAgIEljb25Db21wb25lbnQsXG4gICAgRGlhbG9nQ29tcG9uZW50LFxuICAgIEFwcEJhclRhYkNvbXBvbmVudCxcbiAgICBBcHBCYXJUYWJDb250ZW50Q29tcG9uZW50LFxuICAgIEltYWdlVmlld2VyQ29tcG9uZW50LFxuICAgIEZpdkJ1dHRvbnNDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIEV4cGFuZGFibGVJbmRpY2F0b3JDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGaXZldGhyZWVDb3JlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInN0YXRlIiwiSGFtbWVyLkRJUkVDVElPTl9WRVJUSUNBTCIsInN0eWxlIiwibWVyZ2UiLCJIYW1tZXIuRElSRUNUSU9OX0FMTCIsInRzbGliXzEuX19leHRlbmRzIiwiSGFtbWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBa0JFO1FBUFMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsYUFBUSxHQUFHLEVBQUUsQ0FBQztLQUlOOzs7O0lBRWpCLGdDQUFROzs7SUFBUjtLQUNDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixzRUFBb0M7O2lCQUVyQzs7Ozs7d0JBR0UsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBRUwsU0FBUyxTQUFDLFdBQVc7O0lBT3hCLG9CQUFDO0NBckJEOzs7Ozs7QUNGQTtJQTJCRTtRQUhBLGNBQVMsR0FBRyxRQUFRLENBQUM7S0FHSjs7OztJQUVqQixzQ0FBUTs7O0lBQVI7S0FDQzs7Ozs7O0lBRUQsaURBQW1COzs7OztJQUFuQixVQUFvQixLQUFLLEVBQUUsSUFBWTtRQUNyQyxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztTQUMzQjtLQUNGOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7S0FDM0I7Ozs7SUFFRCxtQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDM0I7O2dCQTNDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsdWFBQTJDO29CQUUzQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLFlBQVksRUFBRTs0QkFDcEIsVUFBVSxDQUFDLGtCQUFrQixFQUFFO2dDQUMzQixPQUFPLENBQUMsZ0JBQWdCLENBQUM7NkJBQzVCLENBQUM7NEJBQ0YsVUFBVSxDQUFDLGtCQUFrQixFQUFFO2dDQUMzQixPQUFPLENBQUMsZUFBZSxDQUFDOzZCQUMzQixDQUFDOzRCQUNGLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsc0NBQXNDLEVBQUUsQ0FBQyxDQUFDOzRCQUMzRixLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLHFDQUFxQyxFQUFFLENBQUMsQ0FBQzt5QkFDN0YsQ0FBQztxQkFDRDs7aUJBQ0Y7Ozs7O3dCQUdFLEtBQUs7dUJBQ0wsS0FBSzs7SUF5QlIsMEJBQUM7Q0E3Q0Q7Ozs7OztBQ0ZBO0lBdUNFLDZCQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQVRwQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2QsZ0JBQVcsR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRSxlQUFVLEdBQXNDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkUsaUJBQVksR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRSxnQkFBVyxHQUFrRSxJQUFJLFlBQVksRUFBRSxDQUFDO0tBS3hEOzs7O0lBRWxELHNDQUFROzs7SUFBUjtLQUNDOzs7O0lBRUQsa0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUM3Qjs7OztJQUVELG9DQUFNOzs7SUFBTjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDekIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0tBQ0Y7Ozs7O0lBRUQsbUNBQUs7Ozs7SUFBTCxVQUFNLEtBQVc7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDN0I7Ozs7O0lBRUQsNENBQWM7Ozs7SUFBZCxVQUFlLEtBQUs7UUFDbEIsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjthQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7WUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtLQUNGOztnQkF0RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLG1RQUEwQztvQkFFMUMsVUFBVSxFQUFFO3dCQUNWLE9BQU8sQ0FBQyxVQUFVLEVBQUU7NEJBQ2xCLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDakQsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUNuRCxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7Z0NBQzNCLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUM7b0NBQ2xDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0NBQzdDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7b0NBQ2pELEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUNBQzlDLENBQUMsQ0FBQzs2QkFDSixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtnQ0FDM0IsT0FBTyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQztvQ0FDbEMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQ0FDN0MsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztvQ0FDakQsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQ0FDOUMsQ0FBQyxDQUFDOzZCQUNKLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDs7aUJBQ0Y7Ozs7Z0JBM0J3RCxpQkFBaUI7Ozt5QkE4QnZFLEtBQUs7OEJBQ0wsTUFBTTs2QkFDTixNQUFNOytCQUNOLE1BQU07OEJBQ04sTUFBTTs7SUF5Q1QsMEJBQUM7Q0F4RUQ7Ozs7OztBQ0pBO0lBd0JFLDhCQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQVhwQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2IsZUFBVSxHQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BFLGdCQUFXLEdBQXVDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckUsYUFBUSxHQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBTTNFOzs7O0lBRUQsdUNBQVE7OztJQUFSLGVBQWM7Ozs7SUFFZCxtQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQzdCOzs7O0lBRUQsb0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUU3Qjs7OztJQUVELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFRCxvQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3JCOzs7O0lBRUQseUNBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0I7Ozs7SUFFRCx3Q0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1Qjs7OztJQUVELG9DQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOztnQkF0REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLHVqQkFBNEM7O2lCQUU3Qzs7OztnQkFSbUUsaUJBQWlCOzs7d0JBV2xGLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLE1BQU07OEJBQ04sTUFBTTsyQkFDTixNQUFNO3VCQUVOLFNBQVMsU0FBQyxNQUFNO3lCQUNoQixTQUFTLFNBQUMsUUFBUTs7SUFzQ3JCLDJCQUFDO0NBeEREOzs7Ozs7QUNKQTtJQTJCRTtRQUZVLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0tBRWhDOzs7O0lBRWpCLDZDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCOzs7O0lBRUQsMENBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEI7Ozs7O0lBQ0QseUNBQUk7Ozs7SUFBSixVQUFLLEtBQWE7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7S0FFOUI7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsc3ZDQUFrRDtvQkFFbEQsVUFBVSxFQUFFO3dCQUNWLE9BQU8sQ0FBQyxZQUFZLEVBQUU7NEJBQ3BCLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtnQ0FDN0IsT0FBTyxDQUFDLGdCQUFnQixDQUFDOzZCQUMxQixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtnQ0FDN0IsT0FBTyxDQUFDLGVBQWUsQ0FBQzs2QkFDekIsQ0FBQzs0QkFDRixLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLHNDQUFzQyxFQUFFLENBQUMsQ0FBQzs0QkFDM0YsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxxQ0FBcUMsRUFBRSxDQUFDLENBQUM7eUJBQzNGLENBQUM7cUJBQUM7O2lCQUNOOzs7OzsyQkFHRSxLQUFLO3lCQUNMLFNBQVMsU0FBQyxRQUFROzRCQUNsQixNQUFNOztJQW1CVCxpQ0FBQztDQXZDRDs7Ozs7O0FDTEE7SUF1QkU7UUFSUyxTQUFJLEdBQThCLFVBQVUsQ0FBQztRQUM1QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN0QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWlDLENBQUM7UUFFdkUsaUJBQVksR0FBRyxDQUFDLENBQUM7S0FJQTs7OztJQUVqQixtQ0FBUTs7O0lBQVI7S0FDQzs7Ozs7SUFFRCwrQkFBSTs7OztJQUFKLFVBQUssS0FBYTtRQUNoQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdGLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtvQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNuQjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM3RCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDcEM7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDOUQ7U0FFRjtLQUNGOzs7Ozs7SUFFRCxnQ0FBSzs7Ozs7SUFBTCxVQUFNLEtBQWEsRUFBRSxLQUFXO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN6QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFFLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JDO0tBRUY7Ozs7O0lBRUQsaUNBQU07Ozs7SUFBTixVQUFPLEtBQWE7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUM5QyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO2dCQUM1QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFFakI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xCO0tBQ0Y7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDekI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2QsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7OztJQUVELCtCQUFJOzs7SUFBSjs7WUFDUSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQjs7OztJQUVELG1DQUFROzs7SUFBUjs7WUFDUSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQjs7Ozs7SUFFRCx1Q0FBWTs7OztJQUFaLFVBQWEsS0FBYTtRQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFLENBRy9CO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBRXhDO0tBQ0Y7Ozs7O0lBRUQsZ0NBQUs7Ozs7SUFBTCxVQUFNLEtBQWE7UUFDakIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRSxDQUUvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQztLQUNGOztnQkE1R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2Qiwrb0JBQXVDOztpQkFFeEM7Ozs7OzJCQUdFLGVBQWUsU0FBQyxhQUFhO3dCQUM3QixZQUFZLFNBQUMsb0JBQW9COzZCQUNqQyxTQUFTLFNBQUMsMEJBQTBCO3VCQUNwQyxLQUFLOzJCQUNMLE1BQU07MkJBQ04sTUFBTTs7SUFrR1QsdUJBQUM7Q0E5R0Q7Ozs7OztBQ0xBO0lBaUVFLDZCQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXJEeEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQU1mLGVBQVUsR0FBRyxtQkFBbUIsQ0FBQztRQUVqQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBTWpCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLGFBQVEsR0FBRyxJQUFJLENBQUM7Ozs7O1FBUWhCLGFBQVEsR0FBb0QsTUFBTSxDQUFDOzs7Ozs7UUFPbkUsVUFBSyxHQUE0QixNQUFNLENBQUM7S0FzQlg7Ozs7SUFsQmYscUNBQU87OztJQUE5QjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QztLQUNGO0lBRUQsc0JBQTBCLHdDQUFPOzs7O1FBQWpDO1lBQ0UsT0FBVSxJQUFJLENBQUMsUUFBUSxTQUFJLElBQUksQ0FBQyxLQUFPLENBQUM7U0FDekM7OztPQUFBO0lBRUQsc0JBQWlDLDRDQUFXOzs7O1FBQTVDO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM3Qzs7O09BQUE7SUFFRCxzQkFBK0MsOENBQWE7Ozs7UUFBNUQ7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7OztPQUFBOzs7O0lBSUQsc0NBQVE7OztJQUFSO0tBQ0M7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTTtlQUN2QixJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQztLQUMzQjs7OztJQUVELHdDQUFVOzs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDeEU7Ozs7SUFFRCw0Q0FBYzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyRTs7OztJQUVELDBDQUFZOzs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUN6Qzs7OztJQUVELHdDQUFVOzs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNqRDs7Z0JBcEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiwyaEJBQTJDOztpQkFFNUM7Ozs7Z0JBUlEsTUFBTTs7O3lCQVdaLEtBQUs7d0JBRUwsS0FBSzt5QkFFTCxLQUFLOzZCQUVMLEtBQUs7MkJBRUwsS0FBSzt1QkFFTCxLQUFLO3dCQUVMLEtBQUs7Z0NBRUwsS0FBSzsyQkFFTCxLQUFLOzBCQUVMLEtBQUs7MkJBTUwsS0FBSzt3QkFPTCxLQUFLO3VCQUVMLEtBQUs7MEJBRUwsWUFBWSxTQUFDLE9BQU87MEJBTXBCLFdBQVcsU0FBQyxPQUFPOzhCQUluQixXQUFXLFNBQUMsY0FBYztnQ0FJMUIsV0FBVyxTQUFDLDRCQUE0Qjs7SUE4QjNDLDBCQUFDO0NBdEZEOzs7Ozs7QUNMQTtJQWVFLGtDQUFvQixTQUF1QixFQUFVLFFBQWtCO1FBQW5ELGNBQVMsR0FBVCxTQUFTLENBQWM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTHZFLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNSLGNBQVMsR0FBRyxJQUFJLENBQUM7S0FHa0Q7SUFHNUUsc0JBQ0ksNkNBQU87Ozs7UUFEWDtZQUVFLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFO2dCQUVqSCxPQUFPLElBQUksQ0FBQyxTQUFTO3FCQUNsQix3QkFBd0IsQ0FBQyxnR0FBZ0csQ0FBQyxDQUFDO2FBQy9IO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQywrREFBK0QsQ0FBQyxDQUFDO2FBQ2pIO1NBQ0Y7OztPQUFBOzs7O0lBRTJCLHdDQUFLOzs7SUFBakM7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7S0FDRjs7OztJQUUyQix1Q0FBSTs7O0lBQWhDO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNwQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ3ZCO0lBRUQsc0JBQWEscURBQWU7Ozs7O1FBQTVCLFVBQTZCLFFBQWlCO1lBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1NBQzNCOzs7T0FBQTs7OztJQUdELDZDQUFVOzs7SUFBVjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUNsQzs7OztJQUVELHVDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0tBQ3hCOzs7O0lBRUQsd0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7S0FDdkI7O2dCQTVERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQUxtQixZQUFZO2dCQUZ2QixRQUFROzs7NEJBWWQsS0FBSzswQkFNTCxXQUFXLFNBQUMsT0FBTzt3QkFXbkIsWUFBWSxTQUFDLFlBQVk7dUJBT3pCLFlBQVksU0FBQyxZQUFZO2tDQVF6QixLQUFLOztJQXNCUiwrQkFBQztDQTlERDs7Ozs7O0FDSkE7SUFZRTtLQUFpQjs7OztJQUVqQixpREFBUTs7O0lBQVI7S0FDQzs7OztJQUVELGdEQUFPOzs7SUFBUDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ3hCOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLGlJQUF1RDs7aUJBRXhEOzs7Ozt1QkFHRSxLQUFLOztJQVlSLHFDQUFDO0NBbkJEOzs7Ozs7QUNIQTtBQUlBLElBQWEsbUNBQW1DLEdBQVE7SUFDdEQsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQkFBZ0IsR0FBQSxDQUFDO0lBQy9DLEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQWlDRTtRQXZCUyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUtwQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGFBQVEsR0FBRyxTQUFTLENBQUM7UUFNckIsYUFBUSxHQUFnRCxVQUFVLENBQUM7UUFJbkUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVsQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztLQUlYOzs7O0lBRWpCLG1DQUFROzs7SUFBUjtLQUNDOzs7O0lBRUQsNkNBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztLQUN4QjtJQUVELHNCQUFJLDJDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQzVCOzs7OztRQUVELFVBQWtCLENBQU07WUFDdEIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDNUM7U0FDRjs7O09BUEE7Ozs7O0lBU0QscUNBQVU7Ozs7SUFBVixVQUFXLEtBQVU7UUFDbkIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0tBQ0Y7Ozs7SUFFRCwrQkFBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUMxQjs7Ozs7SUFFRCwyQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0tBQzVCOzs7OztJQUVELDRDQUFpQjs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7S0FDN0I7O2dCQXJFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsd2JBQThDO29CQUU5QyxTQUFTLEVBQUU7d0JBQ1QsbUNBQW1DO3FCQUNwQzs7aUJBQ0Y7Ozs7OzhCQUdFLEtBQUs7d0JBRUwsS0FBSzsyQkFFTCxXQUFXLFNBQUMseUJBQXlCLGNBQ3JDLEtBQUs7MkJBRUwsS0FBSzt3QkFFTCxLQUFLOzhCQUVMLEtBQUs7MkJBRUwsS0FBSzt1QkFFTCxLQUFLOzJCQUVMLEtBQUs7O0lBNENSLHVCQUFDO0NBdkVEOzs7Ozs7OztJQ1RJLFNBQU07SUFDTixTQUFNO0lBQ04sTUFBRzs7Ozs7Ozs7OztBQ0hQO0lBb0NFLHFDQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBekJsQyxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLFVBQUssR0FBRyxJQUFJLENBQUM7UUFFWixtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2pFLFdBQU0sR0FBRyxXQUFXLENBQUM7S0FrQjJCO0lBaEJoRCxzQkFBa0Msa0RBQVM7Ozs7UUFBM0M7WUFDRSxRQUFRLElBQUksQ0FBQyxZQUFZO2dCQUN2QixLQUFLLFdBQVcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxLQUFLLENBQUM7Z0JBQ25DLEtBQUssV0FBVyxDQUFDLE1BQU0sRUFBRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzdDLEtBQUssV0FBVyxDQUFDLE1BQU0sRUFBRSxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQzdEO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjs7O09BQUE7SUFFRCxzQkFBMEIsK0NBQU07Ozs7UUFBaEM7WUFDRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDN0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLGlKQUMrQyxDQUFDLENBQUM7YUFDakc7U0FDRjs7O09BQUE7Ozs7SUFJRCw4Q0FBUTs7O0lBQVI7S0FDQzs7Ozs7SUFFRCxpREFBVzs7OztJQUFYLFVBQVlBLFFBQWtCO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUVBLFFBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUdBLFFBQUssQ0FBQztLQUMzQjs7OztJQUVELDJDQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDNUI7O2dCQTVDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsaVNBQW9EOztpQkFFckQ7Ozs7Z0JBUlEsWUFBWTs7OzBCQVdsQixLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSztpQ0FFTCxNQUFNOzRCQUtOLFdBQVcsU0FBQyxlQUFlO3lCQVMzQixXQUFXLFNBQUMsT0FBTzs7SUFxQnRCLGtDQUFDO0NBOUNEOzs7Ozs7QUNKQTtJQXNDRSw4QkFDVSxRQUFvQixFQUNwQixTQUFvQixFQUNwQixRQUF1QixFQUN2QixTQUFtQixFQUNuQixTQUF1QjtRQUp2QixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQWM7UUEzQnhCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXBCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRWpCLGVBQVUsR0FBRyxtQkFBbUIsQ0FBQztRQUVqQyxVQUFLLEdBQWdCLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFFeEMsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFFbEIsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUN6RSxZQUFPLEdBQXVDLElBQUksWUFBWSxFQUF3QixDQUFDO1FBQ3ZGLGNBQVMsR0FBdUMsSUFBSSxZQUFZLEVBQXdCLENBQUM7UUFDekYsYUFBUSxHQUF1QyxJQUFJLFlBQVksRUFBd0IsQ0FBQztRQUtqRixrQkFBYSxHQUFHLEVBQUUsQ0FBQztLQVEvQjs7Ozs7Ozs7Ozs7Ozs7OztJQVdMLDhDQUFlOzs7Ozs7Ozs7O0lBQWY7UUFBQSxpQkE0QkM7Ozs7UUF4QkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBRTNCLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUN0RCxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFQyxrQkFBeUIsRUFBRSxDQUFDLENBQUM7UUFDOUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxVQUFDLEVBQU87WUFDdkMsUUFBUSxFQUFFLENBQUMsSUFBSTtnQkFDYixLQUFLLFVBQVU7b0JBQ2IsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN2QixNQUFNO2dCQUNSLEtBQUssUUFBUTtvQkFDWCxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN2QixNQUFNO2dCQUNSO29CQUNFLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdkI7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWM7YUFDeEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxLQUFJLENBQUMsS0FBSztnQkFDaEIsS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFLE9BQU8sS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM1QyxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDN0M7U0FDRixDQUFDLENBQUM7S0FDTjs7Ozs7SUFHRCwwQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNoRDs7Ozs7SUFFRCw0Q0FBYTs7OztJQUFiLFVBQWNELFFBQWtCO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQ0EsUUFBSyxDQUFDLENBQUM7U0FDakM7S0FDRjs7Ozs7O0lBRU8sOENBQWU7Ozs7O0lBQXZCLFVBQXdCQSxRQUFrQjtRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BGLFFBQVFBLFFBQUs7WUFDWCxLQUFLLFdBQVcsQ0FBQyxNQUFNO2dCQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUNsRSxNQUFNO1lBQ1IsS0FBSyxXQUFXLENBQUMsTUFBTTtnQkFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsQ0FBQztnQkFDMUUsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNoRDtLQUNGOzs7OztJQUVPLDhDQUFlOzs7O0lBQXZCO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFDO0tBQ2xGOzs7Ozs7SUFFTyw0Q0FBYTs7Ozs7SUFBckIsVUFBc0IsRUFBRTtRQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRXBGLFFBQVEsSUFBSSxDQUFDLEtBQUs7Z0JBQ2hCLEtBQUssV0FBVyxDQUFDLE1BQU07b0JBQ3JCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDN0IsTUFBTTtnQkFDUixLQUFLLFdBQVcsQ0FBQyxHQUFHO29CQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzFCLE1BQU07Z0JBQ1I7b0JBQ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Y7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7OztJQUVPLCtDQUFnQjs7Ozs7SUFBeEIsVUFBeUIsRUFBRTtRQUN6QixJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDNUMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzFCO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzNCO2FBRUY7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQzlDO0tBQ0Y7Ozs7OztJQUVPLGtEQUFtQjs7Ozs7SUFBM0IsVUFBNEIsRUFBRTs7WUFDdEIsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsR0FBRyxFQUFFO2dCQUVsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7U0FDRjthQUFNLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUQsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0QjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxDQUFDO1NBQzNFO0tBQ0Y7Ozs7OztJQUVPLGtEQUFtQjs7Ozs7SUFBM0IsVUFBNEIsRUFBRTtRQUM1QixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ25DLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdkI7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUNuRTtLQUNGOzs7Ozs7SUFFTyx5Q0FBVTs7Ozs7SUFBbEIsVUFBbUIsRUFBRTs7WUFDYixRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzRSxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdEQsSUFBSSxFQUFFLENBQUMsZUFBZSxLQUFLLE9BQU8sSUFBSSxFQUFFLENBQUMsZUFBZSxLQUFLLFNBQVMsRUFBRTs7b0JBQ2hFLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLE1BQU07Z0JBQ2pELElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO2lCQUNwQztxQkFBTSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBQzlDO2dCQUNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsQ0FBQztpQkFDNUU7YUFDRjtTQUNGO0tBQ0Y7Ozs7OztJQUVPLDZDQUFjOzs7OztJQUF0QixVQUF1QixLQUFLO1FBQTVCLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGFBQWEsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDaEcsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxtQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7Ozs7SUFFRCxvQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7Ozs7SUFFRCxtQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7O2dCQXRORixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsK0dBQTRDOztpQkFFN0M7Ozs7Z0JBWEMsVUFBVTtnQkFBRSxTQUFTO2dCQUVkLGFBQWE7Z0JBQUUsUUFBUTtnQkFFdkIsWUFBWTs7OytCQVNsQixLQUFLOytCQUVMLEtBQUs7OEJBRUwsS0FBSzs2QkFFTCxLQUFLO3dCQUVMLEtBQUs7Z0NBRUwsS0FBSzs4QkFFTCxNQUFNOzBCQUNOLE1BQU07NEJBQ04sTUFBTTsyQkFDTixNQUFNOzBCQUVOLFlBQVksU0FBQywyQkFBMkI7O0lBZ00zQywyQkFBQztDQXZORDs7Ozs7O0FDVkE7SUFjRTtRQUxPLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixlQUFVLEdBQTZCLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRixtQkFBYyxHQUE2QixJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FFL0U7Ozs7SUFFakIsNkJBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsK0JBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0tBQ3pCOzs7O0lBRUQsc0NBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDOUI7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzNDOztnQkEvQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7eUJBTkQ7Q0FJQTs7Ozs7O0FDSkE7SUFxREUscUNBQW1CLGNBQThCLEVBQVUsT0FBeUI7UUFBakUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFkcEYsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNQLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDSixrQkFBYSxHQUFxQixLQUFLLENBQUM7UUFDdkMsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6RCxxQkFBZ0IsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN0RSxlQUFVLEdBQThDLElBQUksWUFBWSxFQUErQixDQUFDO0tBUWpIOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQSxVQUFVO2dCQUNyRCxJQUFJLFVBQVUsRUFBRTtvQkFDZCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNyQjthQUNGLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFFRCxpREFBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNsRDtLQUNGOzs7O0lBRUQsbURBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDOUI7Ozs7SUFFRCwwQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1Qjs7OztJQUVELDRDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN6QjtLQUNGOzs7OztJQUVELDhDQUFROzs7O0lBQVIsVUFBUyxLQUFVO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDOUI7Ozs7O0lBRUQsMkRBQXFCOzs7O0lBQXJCLFVBQXNCLFVBQW1CO1FBQ3ZDLElBQUksVUFBVSxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7U0FDRjtLQUNGOzs7OztJQUVELGlEQUFXOzs7O0lBQVgsVUFBWSxRQUFRO1FBQ2xCLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNsQixPQUFPO1NBQ1I7UUFDRCxJQUFJLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDcEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FFdkM7Ozs7O0lBRUQsaURBQVc7Ozs7SUFBWCxVQUFZLFFBQVE7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzVDOzs7OztJQUVELGlEQUFXOzs7O0lBQVgsVUFBWSxRQUFRO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM1Qzs7Ozs7SUFFRCw0Q0FBTTs7OztJQUFOLFVBQU8sRUFBVTtRQUFqQixpQkF3QkM7OztZQXRCTyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDckMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMvQixPQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDLENBQUM7OztZQUdJLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBRTVELE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFDUixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUM7YUFDM0IsU0FBUyxDQUFDO1lBQ1QsSUFBSSxLQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsRUFBRTtnQkFDeEIsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDeEI7WUFDRCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEQsQ0FBQztRQUNKLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDWixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEIsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsOENBQVE7Ozs7SUFBUixVQUFTLEVBQVU7UUFBbkIsaUJBMEJDOztRQXhCQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQzs7WUFDZCxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDckMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFLLElBQUksQ0FBQyxRQUFRLE1BQUcsRUFBRSxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakMsQ0FBQzs7O1lBR0ksTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7O1lBRXRELENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQzthQUMzQixTQUFTLENBQUM7WUFDVCxJQUFJLEtBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO2dCQUN0QixPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN4QjtZQUNELEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRCxDQUFDO1FBRUosTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNaLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCLENBQUMsQ0FBQztLQUNKOztnQkFqTEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLHVwQkFBb0Q7b0JBRXBELFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsY0FBYyxFQUFFOzRCQUN0QixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0NBQ3hCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs2QkFDMUIsQ0FBQzs0QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDOzZCQUNuRCxDQUFDO3lCQUNILENBQUM7d0JBQ0YsT0FBTyxDQUFDLG9CQUFvQixFQUFFOzRCQUM1QixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0NBQ3hCLE9BQU8sQ0FBQyxlQUFlLENBQUM7NkJBQ3pCLENBQUM7NEJBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzs2QkFDbkQsQ0FBQzt5QkFDSCxDQUFDO3dCQUNGLE9BQU8sQ0FBQyxVQUFVLEVBQUU7NEJBQ2xCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2dDQUNuQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzs2QkFDaEUsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIOztpQkFDRjs7OztnQkFsQ1EsY0FBYztnQkFEdUIsZ0JBQWdCOzs7eUJBdUMzRCxLQUFLOzZCQUNMLEtBQUs7Z0NBRUwsS0FBSzs4QkFDTCxNQUFNO21DQUNOLE1BQU07NkJBQ04sTUFBTTtzQkFFTixTQUFTLFNBQUMsS0FBSzt5QkFDZixTQUFTLFNBQUMsUUFBUTs7SUF3SXJCLGtDQUFDO0NBbkxEOzs7Ozs7QUNOQTtJQStCRTtRQXJCQSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR1AsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLFNBQUksR0FBRyxPQUFPLENBQUM7UUFDZixTQUFJLEdBQUcsU0FBUyxDQUFDO1FBSzFCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFUixrQkFBYSxHQUFxQixLQUFLLENBQUM7UUFFeEMsU0FBSSxHQUFrQyxRQUFRLENBQUM7UUFFOUMsZUFBVSxHQUF5QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RFLHVCQUFrQixHQUF5QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlFLG1CQUFjLEdBQXlDLElBQUksWUFBWSxFQUFFLENBQUM7S0FHbkY7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7S0FDQzs7OztJQUVELDhDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDNUI7Ozs7SUFFRCxxQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRUQsdUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM1QjtLQUNGOzs7OztJQUVELDJDQUFVOzs7O0lBQVYsVUFBVyxVQUFtQjtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsd0NBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDaEM7O2dCQWhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsdVhBQThDOztpQkFFL0M7Ozs7OzJCQUtFLFNBQVMsU0FBQyxVQUFVO3dCQUNwQixLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBRUwsV0FBVyxTQUFDLHVCQUF1QixjQUNuQyxLQUFLO2dDQUdMLEtBQUs7dUJBRUwsS0FBSzs2QkFFTCxNQUFNO3FDQUNOLE1BQU07aUNBQ04sTUFBTTs7SUF3Q1QsNkJBQUM7Q0FsRUQ7Ozs7OztBQ0hBO0lBU00sU0FBUyxHQUFHLEdBQUc7QUFFckI7SUErQkUsaUNBQWtELFNBQWMsRUFBUyxXQUF1QixFQUN2RixNQUF5QixFQUFVLE9BQXlCLEVBQVMsU0FBdUIsRUFBVSxRQUFtQjtRQURoRixjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkYsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBaEIxSCxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFHRCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDekMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUUzRCxTQUFJLEdBQW9DLGVBQWUsQ0FBQztRQUN4RCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztLQVExQjtJQU5ELHNCQUEwQiwwQ0FBSzs7OztRQUEvQjtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxnRkFBZ0YsQ0FBQztTQUNyRzs7O09BQUE7Ozs7SUFNRCwwQ0FBUTs7O0lBQVI7S0FDQztJQUVELHNCQUFJLDRDQUFPOzs7O1FBQVg7O2dCQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVztZQUN4RCxPQUFPLFNBQU8sT0FBTyxTQUFJLE9BQVMsQ0FBQztTQUNwQzs7O09BQUE7SUFHRCxzQkFBSSx3REFBbUI7Ozs7OztRQUF2QjtZQUNFLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN4Qzs7O09BQUE7SUFHRCxzQkFBSSxxREFBZ0I7Ozs7OztRQUFwQjtZQUNFLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLEVBQUU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQzdEO1lBRUQsT0FBTyxJQUFJLENBQUM7U0FDYjs7O09BQUE7SUFHRCxzQkFBSSxzREFBaUI7Ozs7OztRQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztTQUMvQzs7O09BQUE7SUFHRCxzQkFDSSwwQ0FBSzs7Ozs7O1FBRFQ7WUFFRSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3REOzs7OztRQUNELFVBQVUsUUFBZ0I7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3REOzs7T0FIQTtJQUtELHNCQUNJLDZDQUFROzs7O1FBRFosY0FDeUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Ozs7O1FBQ2pELFVBQWEsSUFBWTtZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUV0QixJQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3pCO1NBQ0Y7OztPQVBnRDtJQVVqRCxzQkFDSSxnREFBVzs7Ozs7O1FBRGY7WUFFRSxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDaEQ7Ozs7O1FBQ0QsVUFBZ0IsS0FBYTtZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjs7O09BSEE7Ozs7Ozs7SUFPTyxrREFBZ0I7Ozs7O0lBQXhCOztZQUNNLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQyxRQUFRO1FBRS9DLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLHVCQUF1QixDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDN0M7UUFFRCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQzlCLG9CQUFDLFFBQVEsQ0FBQyxLQUFLLElBQW1CLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzRTtRQUVELHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3REOzs7Ozs7O0lBSU8sbURBQWlCOzs7OztJQUF6Qjs7WUFDUSxnQ0FBZ0MsR0FBRyw4OUNBbUJ6QztRQUNBLE9BQU8sZ0NBQWdDOzthQUVwQyxPQUFPLENBQUMsY0FBYyxFQUFFLEtBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBcUIsQ0FBQzthQUM3RCxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBcUIsQ0FBQzthQUMxRCxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUcsSUFBSSxDQUFDLFFBQVUsQ0FBQyxDQUFDO0tBQzdDOzs7OztJQUdELDRDQUFVOzs7O0lBQVYsVUFBVyxRQUFnQjtRQUEzQixpQkF3Q0M7UUF2Q0MsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7Ozs7O1lBTXRCLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNuQyxLQUFLLENBQUM7Z0JBQ0osa0JBQWtCLEVBQUUsR0FBRztnQkFDdkIsbUJBQW1CLEVBQUUsRUFBRTtnQkFDdkIsaUJBQWlCLEVBQUUsUUFBUTtnQkFDM0IsUUFBUSxFQUFFLFNBQVM7YUFDcEIsQ0FBQztZQUNGLE9BQU8sQ0FBSSxRQUFRLGdCQUFhLEVBQUUsS0FBSyxDQUFDO2dCQUN0QyxrQkFBa0IsRUFBRSxHQUFHO2dCQUN2QixtQkFBbUIsRUFBRSxDQUFDO2dCQUN0QixpQkFBaUIsRUFBRSxRQUFRO2dCQUMzQixRQUFRLEVBQUUsU0FBUztnQkFDbkIsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSixDQUFDOztZQUVJLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7UUFDckUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNaLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCLENBQUMsQ0FBQzs7WUFHRyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7O1lBQzVCLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsR0FBRyxFQUFFLENBQUM7O1lBQ25DLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUNsQixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQixDQUFDLENBQUM7S0FFSjs7Ozs7SUFDRCwwQ0FBUTs7OztJQUFSLFVBQVMsUUFBZ0I7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUM3Qjs7OztJQUVELHNDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDN0I7Ozs7SUFFRCw4Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQzdCOzs7OztJQUVELHlDQUFPOzs7O0lBQVAsVUFBUSxJQUFJO1FBQ1YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUM3QjtJQXpMYyxpQ0FBUyxHQUFHLElBQUksR0FBRyxDQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN6QyxnQ0FBUSxHQUE0QixJQUFJLENBQUM7O2dCQWZ6RCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsMDBCQUErQzs7b0JBRy9DLElBQUksRUFBRTt3QkFDSixrQkFBa0IsRUFBRSxVQUFVO3dCQUM5QixtQkFBbUIsRUFBRSxVQUFVO3FCQUNoQztvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnREFvQmMsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFRO2dCQXJDWSxVQUFVO2dCQUFFLGlCQUFpQjtnQkFKMUUsZ0JBQWdCO2dCQURoQixZQUFZO2dCQUs4RyxTQUFTOzs7OEJBMkJ6SSxNQUFNOzhCQUNOLE1BQU07b0NBQ04sU0FBUyxTQUFDLG1CQUFtQjt1QkFDN0IsS0FBSzsrQkFDTCxLQUFLO3dCQUVMLFdBQVcsU0FBQyxPQUFPO3dCQW9DbkIsS0FBSzsyQkFRTCxLQUFLOzhCQVdMLEtBQUs7O0lBc0hSLDhCQUFDO0NBeE1EOzs7Ozs7QUNYQTtJQTZFRSwwQ0FBbUIsT0FBbUIsRUFBUyxPQUF5QjtRQUFyRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFoQi9ELGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGdCQUFXLEdBQW1ELElBQUksWUFBWSxFQUFvQyxDQUFDO1FBQ25ILGVBQVUsR0FBbUQsSUFBSSxZQUFZLEVBQW9DLENBQUM7UUFDbEgsY0FBUyxHQUFtRCxJQUFJLFlBQVksRUFBb0MsQ0FBQztRQUNqSCxjQUFTLEdBQW1ELElBQUksWUFBWSxFQUFvQyxDQUFDO1FBQ2pILGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFLekUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFTLEdBQUcsUUFBUSxDQUFDO0tBR3BCOzs7O0lBRUQsbURBQVE7OztJQUFSO0tBQ0M7Ozs7SUFFRCwrQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzVCOzs7O0lBRUQsaURBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUM3Qjs7OztJQUVELG1EQUFROzs7SUFBUjs7UUFFRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtLQUNGOzs7O0lBRUQsK0NBQUk7OztJQUFKO1FBQUEsaUJBZUM7UUFkQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7Z0JBQ2QsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNuQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7YUFDMUQsQ0FBQzs7Z0JBRUksUUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDOUQsUUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsUUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDWixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztnQkFDMUIsUUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2xCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFFRCwrQ0FBSTs7O0lBQUo7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFOztnQkFDVixTQUFTLEdBQUcsVUFBVTs7Z0JBQ3RCLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDbkMsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDO2dCQUMvQixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO2FBQzNELENBQUM7O2dCQUVJLFFBQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQzlELFFBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLFFBQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ1osS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixRQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7YUFFbEIsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7OztJQUVELDREQUFpQjs7O0lBQWpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7S0FDRjs7Ozs7O0lBRUQsOERBQW1COzs7OztJQUFuQixVQUFvQixLQUFLLEVBQUUsSUFBWTtRQUNyQyxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7U0FFRjtLQUNGOzs7O0lBRUQsdURBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0I7Ozs7O0lBRUQsbURBQVE7Ozs7SUFBUixVQUFTLFFBQWdCO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2pDOzs7O0lBRUQsZ0RBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDdkM7O2dCQXJLRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsMFJBQXlEO29CQUV6RCxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFOzRCQUM5QixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUM7Z0NBQ2hDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs2QkFDMUIsQ0FBQzs0QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDOzZCQUMzRCxDQUFDO3lCQUNILENBQUM7d0JBQ0YsT0FBTyxDQUFDLGFBQWEsRUFBRTs0QkFDckIsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dDQUN2QixPQUFPLENBQUMsZ0JBQWdCLENBQUM7NkJBQzFCLENBQUM7NEJBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzs2QkFDbEQsQ0FBQzt5QkFDSCxDQUFDO3dCQUNGLE9BQU8sQ0FBQyxZQUFZLEVBQUU7NEJBQ3BCLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtnQ0FDN0IsT0FBTyxDQUFDLGdCQUFnQixDQUFDOzZCQUMxQixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtnQ0FDN0IsT0FBTyxDQUFDLGVBQWUsQ0FBQzs2QkFDekIsQ0FBQzs0QkFDRixLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQzs0QkFDckUsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO3lCQUNyRSxDQUFDO3dCQUNGLE9BQU8sQ0FBQyxVQUFVLEVBQUU7NEJBQ2xCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQztvQ0FDSixrQkFBa0IsRUFBRSxHQUFHO29DQUN2QixtQkFBbUIsRUFBRSxFQUFFO29DQUN2QixpQkFBaUIsRUFBRSxRQUFRO29DQUMzQixRQUFRLEVBQUUsU0FBUztpQ0FDcEIsQ0FBQztnQ0FDRixPQUFPLENBQUMsaUJBQWlCLENBQUM7NkJBQzNCLENBQUM7NEJBQ0YsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7Z0NBQ2xCLGtCQUFrQixFQUFFLEdBQUc7Z0NBQ3ZCLG1CQUFtQixFQUFFLENBQUM7Z0NBQ3RCLGlCQUFpQixFQUFFLFFBQVE7Z0NBQzNCLFFBQVEsRUFBRSxTQUFTO2dDQUNuQixTQUFTLEVBQUUsQ0FBQzs2QkFDYixDQUFDLENBQ0Q7eUJBQUMsQ0FDSCxDQUFDOztpQkFDSDs7OztnQkF2RDBELFVBQVU7Z0JBQ2hCLGdCQUFnQjs7O3VCQXlEbEUsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBRUwsTUFBTTs2QkFDTixNQUFNOzRCQUNOLE1BQU07NEJBQ04sTUFBTTs4QkFDTixNQUFNOzBCQUVOLFNBQVMsU0FBQyxTQUFTOzZCQUNuQixTQUFTLFNBQUMsWUFBWTs7SUFtR3pCLHVDQUFDO0NBdktEOzs7Ozs7QUNKQTtJQStERSxpQ0FBb0IsT0FBeUIsRUFBVSxRQUFtQjtRQUF0RCxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFoQmpFLGFBQVEsR0FBRyxXQUFXLENBQUM7UUFDdkIsa0JBQWEsR0FBRyxHQUFHLENBQUM7UUFDcEIsa0JBQWEsR0FBRyxHQUFHLENBQUM7UUFDbkIsdUJBQWtCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUQsZUFBVSxHQUEwQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2pGLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLGVBQVUsR0FBRyxLQUFLLENBQUM7S0FPbEI7Ozs7SUFMRCwwQ0FBUTs7O0lBQVI7S0FFQzs7OztJQU1ELHlDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1Qjs7OztJQUVELGlEQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDekI7Ozs7SUFFRCxtREFBaUI7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDckI7Ozs7SUFHRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUN6Qjs7OztJQUVELCtDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0tBQzFCOzs7OztJQUVELDBDQUFROzs7O0lBQVIsVUFBUyxLQUFLO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7WUFDaEQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO0tBQ0Y7Ozs7O0lBRUQsMERBQXdCOzs7O0lBQXhCLFVBQXlCLFFBQWdCO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO1FBRWhDLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUTtnQkFDWCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBYyxHQUFHLEdBQUcsUUFBUSxvQkFBZSxHQUFHLEdBQUcsUUFBUSxTQUFNLENBQUMsQ0FBQztTQUM5SDtLQUNGOzs7OztJQUVELDJEQUF5Qjs7OztJQUF6QixVQUEwQixRQUFnQjtRQUExQyxpQkFlQztRQWRDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPOztnQkFDbEIsU0FBUyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNuQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWMsS0FBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLG9CQUFlLEdBQUcsR0FBRyxLQUFJLENBQUMsZUFBZSxTQUFNLEVBQUUsQ0FBQztnQkFDN0csT0FBTyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWMsUUFBUSxHQUFHLEdBQUcsb0JBQWUsR0FBRyxHQUFHLFFBQVEsU0FBTSxFQUFFLENBQUMsQ0FBQzthQUMvRyxDQUFDOztnQkFFSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDbkUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDWixLQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakIsT0FBTyxFQUFFLENBQUM7YUFDWCxDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7S0FDSjs7Ozs7SUFFRCx5Q0FBTzs7OztJQUFQLFVBQVEsUUFBZ0I7UUFDdEIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBQ2QsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ3JDOzs7O0lBRUQsMkNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNyQjs7OztJQUVELDJDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNqQjs7OztJQUVELGtEQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFjQzs7WUFiTyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDbkMsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFjLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxvQkFBZSxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsU0FBTSxFQUFFLENBQUM7WUFDN0csT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDO1NBQzNFLENBQUM7O1lBRUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDWixLQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQixDQUFDLENBQUM7S0FFSjs7Ozs7SUFFRCxtREFBaUI7Ozs7SUFBakIsVUFBa0IsUUFBZ0I7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUTs7WUFFWCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBYyxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsb0JBQWUsR0FBRyxHQUFHLFFBQVEsR0FBRyxHQUFHLFNBQU0sQ0FBQyxDQUFDO0tBQ2hKOztnQkFyS0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHF2QkFBK0M7b0JBRS9DLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsVUFBVSxFQUFFOzRCQUNsQixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUM7b0NBQ0osa0JBQWtCLEVBQUUsR0FBRztvQ0FDdkIsbUJBQW1CLEVBQUUsRUFBRTtvQ0FDdkIsaUJBQWlCLEVBQUUsUUFBUTtvQ0FDM0IsUUFBUSxFQUFFLFNBQVM7aUNBQ3BCLENBQUM7Z0NBQ0YsT0FBTyxDQUFDLGdCQUFnQixDQUFDOzZCQUMxQixDQUFDOzRCQUNGLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO2dDQUNsQixrQkFBa0IsRUFBRSxHQUFHO2dDQUN2QixtQkFBbUIsRUFBRSxDQUFDO2dDQUN0QixpQkFBaUIsRUFBRSxRQUFRO2dDQUMzQixRQUFRLEVBQUUsU0FBUzs2QkFDcEIsQ0FBQyxDQUNEO3lCQUFDLENBQ0g7d0JBQ0QsT0FBTyxDQUFDLGFBQWEsRUFBRTs0QkFDckIsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUNqRCxDQUFDO3lCQUNILENBQUM7d0JBQ0YsT0FBTyxDQUFDLFVBQVUsRUFBRTs0QkFDbEIsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtDQUFrQyxFQUFFLENBQUM7Z0NBQ3hELE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsb0NBQW9DLEVBQUUsQ0FBQyxDQUFDOzZCQUNqRyxDQUFDOzRCQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsb0NBQW9DLEVBQUUsQ0FBQztnQ0FDdEYsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLG9DQUFvQyxFQUFFLENBQUMsQ0FBQzs2QkFDckcsQ0FBQzt5QkFDSCxDQUNBO3FCQUNGOztpQkFDRjs7OztnQkExQ29ELGdCQUFnQjtnQkFEVyxTQUFTOzs7MkJBOEN0RixLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSztxQ0FDTCxNQUFNOzZCQUNOLE1BQU07MEJBQ04sU0FBUyxTQUFDLFNBQVM7MEJBQ25CLFNBQVMsU0FBQyxTQUFTOztJQXVIdEIsOEJBQUM7Q0F4S0Q7Ozs7OztBQ0pBO0lBMEZFLDZCQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBeEI5QixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRWQsZ0JBQVcsR0FBc0MsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFDekYsZUFBVSxHQUFzQyxJQUFJLFlBQVksRUFBdUIsQ0FBQztRQUN4RixjQUFTLEdBQXNDLElBQUksWUFBWSxFQUF1QixDQUFDO1FBQ3ZGLFlBQU8sR0FBc0MsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFJL0YsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFTLEdBQUcsUUFBUSxDQUFDO0tBWXBCO0lBVkQsc0JBQTBCLHdDQUFPOzs7O1FBQWpDOztnQkFDUSxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQWdCLElBQUksQ0FBQyxRQUFVLEdBQUcsRUFBRTs7Z0JBQ3RFLGVBQWUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBa0IsSUFBSSxDQUFDLFVBQVksR0FBRyxFQUFFOztnQkFDOUUsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxHQUFHLEVBQUU7O2dCQUN4QyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsR0FBRyxFQUFFO1lBRTVELE9BQVUsYUFBYSxTQUFJLGVBQWUsU0FBSSxTQUFTLFNBQUksYUFBZSxDQUFDO1NBQzVFOzs7T0FBQTs7OztJQUtELHNDQUFROzs7SUFBUjtLQUNDOzs7O0lBRUQsMkNBQWE7OztJQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQWMsRUFBRTtZQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM5QjtLQUNGOzs7O0lBRUQsa0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDNUI7Ozs7SUFFRCxvQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtLQUNGOzs7O0lBRUQsK0NBQWlCOzs7SUFBakI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztLQUM1Qjs7Ozs7O0lBRUQsaURBQW1COzs7OztJQUFuQixVQUFvQixLQUFLLEVBQUUsSUFBWTtRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7U0FFRjtLQUNGOzs7O0lBRUQsMENBQVk7OztJQUFaO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3Qjs7Ozs7SUFFRCxvQ0FBTTs7OztJQUFOLFVBQU8sUUFBZ0I7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxhQUFXLFFBQVEsR0FBRyxHQUFHLEdBQUcsR0FBRyxTQUFNLENBQUMsQ0FBQztLQUNwSDs7Ozs7SUFFRCx5Q0FBVzs7OztJQUFYLFVBQVksS0FBSztRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO0tBQ0Y7O2dCQXBKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsazVCQUEyQztvQkFFM0MsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTs0QkFDOUIsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDO2dDQUNoQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7NkJBQzFCLENBQUM7NEJBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQzs2QkFDM0QsQ0FBQzt5QkFDSCxDQUFDO3dCQUNGLE9BQU8sQ0FBQyxhQUFhLEVBQUU7NEJBQ3JCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztnQ0FDdkIsT0FBTyxDQUFDLGdCQUFnQixDQUFDOzZCQUMxQixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7NkJBQ2xELENBQUM7eUJBQ0gsQ0FBQzt3QkFDRixPQUFPLENBQUMsWUFBWSxFQUFFOzRCQUNwQixVQUFVLENBQUMsa0JBQWtCLEVBQUU7Z0NBQzdCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs2QkFDMUIsQ0FBQzs0QkFDRixVQUFVLENBQUMsa0JBQWtCLEVBQUU7Z0NBQzdCLE9BQU8sQ0FBQyxlQUFlLENBQUM7NkJBQ3pCLENBQUM7NEJBQ0YsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7NEJBQ3JFLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQzt5QkFDckUsQ0FBQzt3QkFDRixPQUFPLENBQUMsVUFBVSxFQUFFOzRCQUNsQixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUM7b0NBQ0osa0JBQWtCLEVBQUUsR0FBRztvQ0FDdkIsbUJBQW1CLEVBQUUsRUFBRTtvQ0FDdkIsaUJBQWlCLEVBQUUsUUFBUTtvQ0FDM0IsUUFBUSxFQUFFLFNBQVM7aUNBQ3BCLENBQUM7Z0NBQ0YsT0FBTyxDQUFDLGlCQUFpQixDQUFDOzZCQUMzQixDQUFDOzRCQUNGLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO2dDQUNsQixrQkFBa0IsRUFBRSxHQUFHO2dDQUN2QixtQkFBbUIsRUFBRSxDQUFDO2dDQUN0QixpQkFBaUIsRUFBRSxRQUFRO2dDQUMzQixRQUFRLEVBQUUsU0FBUztnQ0FDbkIsU0FBUyxFQUFFLENBQUM7NkJBQ2IsQ0FBQyxDQUNEO3lCQUFDLENBQ0gsQ0FBQzs7aUJBQ0g7Ozs7Z0JBeERtRSxTQUFTOzs7MkJBMkQxRSxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7OEJBRUwsTUFBTTs2QkFDTixNQUFNOzRCQUNOLE1BQU07MEJBQ04sTUFBTTswQkFFTixTQUFTLFNBQUMsU0FBUzswQkFLbkIsV0FBVyxTQUFDLE9BQU87O0lBMEV0QiwwQkFBQztDQXRKRDs7Ozs7O0FDTEE7SUFjRTtLQUFpQjs7OztJQUVqQixxQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHNFQUEyQzs7aUJBRTVDOzs7Ozt1QkFHRSxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLOztJQU9SLHlCQUFDO0NBakJEOzs7Ozs7QUNGQTtJQXNGRSx5QkFBbUIsTUFBYyxFQUFpQixJQUFhO1FBQTVDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBaUIsU0FBSSxHQUFKLElBQUksQ0FBUztRQTdEL0QsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFFckIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUtiLFNBQUksR0FBRyxRQUFRLENBQUM7UUFDaEIsZ0JBQVcsR0FBc0IsTUFBTSxDQUFDO1FBQ3ZDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7S0FpRFE7SUE3Q3BFLHNCQUNJLHFDQUFROzs7O1FBc0JaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQXpCRCxVQUNhLFFBQTJCO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDYixPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2dCQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDM0I7OztPQUFBO0lBS0Qsc0JBQ0ksdUNBQVU7Ozs7UUFXZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN6Qjs7Ozs7UUFkRCxVQUNlLFVBQW1CO1lBRGxDLGlCQVdDO1lBVEMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksSUFBSSxVQUFVLEtBQUssS0FBSyxFQUFFO2dCQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUMxQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssS0FBSyxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7Z0JBQzVELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixVQUFVLENBQUM7b0JBQ1QsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ3pCLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDVDtTQUNGOzs7T0FBQTs7OztJQVNELGtDQUFROzs7SUFBUjtLQUNDOzs7O0lBRUQseUNBQWU7OztJQUFmO0tBQ0M7Ozs7SUFFRCw0Q0FBa0I7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2pDOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQUEsaUJBcUJDO1FBcEJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsVUFBVSxDQUFDO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDakMsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLFVBQVUsQ0FBQztvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7b0JBQ2pELEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztpQkFDNUIsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNULEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7S0FDRjs7Ozs7O0lBRU8scUNBQVc7Ozs7O0lBQW5CLFVBQW9CLFFBQTJCO1FBQzdDLElBQUksUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzRDthQUFNLElBQUksUUFBUSxLQUFLLE9BQU8sRUFBRTtZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FDckI7YUFBTSxJQUFJLFFBQVEsS0FBSyxNQUFNLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQy9DO0tBQ0Y7Ozs7O0lBRU8scUNBQVc7Ozs7SUFBbkI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFO1lBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1NBQ25CO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7U0FDbkI7S0FDRjs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCOzs7OztJQUVELDJDQUFpQjs7OztJQUFqQixVQUFrQixLQUEyQjtRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOztnQkF2SUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2Qiw0aENBQXVDOztpQkFFeEM7Ozs7Z0JBVFEsTUFBTTtnQkFFTixPQUFPLHVCQXVFc0IsSUFBSTs7O3NCQXBEdkMsU0FBUyxTQUFDLEtBQUs7dUJBQ2YsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLE1BQU07Z0NBRU4sZUFBZSxTQUFDLGtCQUFrQjsyQkFFbEMsS0FBSzs2QkEyQkwsS0FBSzs7SUFzRlIsc0JBQUM7Q0F4SUQ7Ozs7OztBQ2xCQTtJQVdFLDZCQUFvQixRQUFrQixFQUFVLGFBQStCLEVBQVUsV0FBNkI7UUFBbEcsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtLQUVySDtJQUVELHNCQUNJLHNDQUFLOzs7OztRQURULFVBQ1UsU0FBc0I7WUFEaEMsaUJBa0JDOztnQkFkSyxJQUFJLEdBQUcsSUFBSTtZQUNmLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNqQixJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3hCLElBQUksR0FBRyxLQUFLLENBQUM7aUJBQ2Q7YUFDRixDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFN0MsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDekQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUM1QjtTQUNGOzs7T0FBQTs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztpQkFDcEI7Ozs7Z0JBTFEsUUFBUTtnQkFEVSxnQkFBZ0I7Z0JBQUUsV0FBVzs7O3dCQWVyRCxLQUFLOztJQW9CUiwwQkFBQztDQS9CRDs7Ozs7O0FDSkE7SUFVRSx5QkFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUgzQyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxJQUFJLENBQUM7S0FFOEI7SUFFaEQsc0JBQ0ksb0NBQU87Ozs7UUFEWDs7O2dCQUdRRSxRQUFLLEdBQUcsMEJBQXVCLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxvRUFBb0UsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLHdDQUF3QyxHQUFHLHlDQUF5QyxDQUFFO1lBQ3JQLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQ0EsUUFBSyxDQUFDLENBQUM7U0FDdkQ7OztPQUFBO0lBRUQsc0JBQWEsc0NBQVM7Ozs7O1FBQXRCLFVBQXVCLE1BQWtEO1lBQ3ZFLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO2FBQ3JDO1NBRUY7OztPQUFBOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0tBQ3ZEOztnQkExQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4Qjs7OztnQkFKbUIsWUFBWTs7OzBCQVc3QixXQUFXLFNBQUMsT0FBTzs0QkFPbkIsS0FBSzs7SUFjUixzQkFBQztDQTlCRDs7Ozs7O0FDSEE7SUFVRSw4QkFBb0IsYUFBK0IsRUFBVSxXQUE2QjtRQUF0RSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFIMUYsdUJBQWtCLEdBQWEsRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBRzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztLQUNqRDtJQUVELHNCQUFhLCtEQUE2Qjs7Ozs7UUFBMUMsVUFBMkMsZUFBeUI7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLGVBQWUsSUFBSSxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBRW5COzs7T0FBQTtJQUVELHNCQUNJLGdEQUFjOzs7OztRQURsQixVQUNtQixPQUFpQjtZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjs7O09BQUE7Ozs7SUFFRCw4Q0FBZTs7O0lBQWY7UUFBQSxpQkFTQzs7WUFSSyxJQUFJLEdBQUcsS0FBSztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDNUIsSUFBSSxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBQSxDQUFDLEVBQUU7Z0JBQzdFLElBQUksR0FBRyxJQUFJLENBQUM7YUFDYjtTQUNGLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMvRSxPQUFPLElBQUksQ0FBQztLQUNiOzs7O0lBRUQseUNBQVU7OztJQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDekQ7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDNUI7S0FDRjs7Z0JBM0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkFKMEIsZ0JBQWdCO2dCQUFFLFdBQVc7OztnREFjckQsS0FBSztpQ0FPTCxLQUFLOztJQTBCUiwyQkFBQztDQTdDRDs7Ozs7O0FDRkE7SUEwQ0UseUJBQW9CLEVBQWMsRUFDekIsUUFBbUI7UUFEUixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQVc7UUE1QjVCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFFTix5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pDLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2IsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUF5QjNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUM1QixZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCO2FBQ0UsU0FBUyxDQUFDO1lBQ1QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4RSxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDaEYsQ0FBQyxDQUFDO0tBQ047Ozs7O0lBNUJELG9DQUFVOzs7O0lBRFYsVUFDVyxLQUFpQjtRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNCOzs7OztJQUVELG9DQUFVOzs7O0lBRFYsVUFDVyxLQUFLO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQjtJQUVELHNCQUFnQyxvQ0FBTzs7OztRQUF2QztZQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDckI7OztPQUFBO0lBQ0Qsc0JBQWdDLHFDQUFROzs7O1FBQXhDO1lBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNyQjs7O09BQUE7Ozs7O0lBZ0JELGdDQUFNOzs7O0lBQU4sVUFBTyxLQUFLOztZQUNKLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLE9BQU87S0FDUjs7OztJQUNELHVDQUFhOzs7SUFBYjs7WUFDUSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOztZQUM5QixJQUFJLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFO1FBQzNDLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7U0FDNUI7O1lBQ0ssTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSTs7WUFDakQsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7O1lBQ2pELE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0tBQ2xEOzs7OztJQUVELHlDQUFlOzs7O0lBQWYsVUFBZ0IsRUFBZ0I7WUFBZCxnQkFBSyxFQUFFLGdCQUFLOztZQUN0QixNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOztZQUM5QixJQUFJLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFOztZQUNyQyxNQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7O1lBQ3hDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7O1lBQ3BDLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJOztZQUNuRixHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSTtRQUN2RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDbEM7O2dCQTNGRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxZQUFZO29CQUN0QixxQ0FBc0M7O29CQUd0QyxJQUFJLEVBQUU7d0JBQ0osc0JBQXNCLEVBQUUsTUFBTTtxQkFDL0I7O2lCQUNGOzs7O2dCQVpzQixVQUFVO2dCQUFFLFNBQVM7Ozt3QkFrQnpDLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxNQUFNOzJCQUdOLFdBQVcsU0FBQyxnQkFBZ0I7NkJBQzVCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkJBS2hDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBS2hDLFdBQVcsU0FBQyxhQUFhOzJCQUd6QixXQUFXLFNBQUMsYUFBYTs7SUE0RDVCLHNCQUFDO0NBOUZEOzs7Ozs7QUNIQTtJQStCRSwyQkFDbUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVBoQyxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ2hELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFckQsWUFBTyxHQUFHLEtBQUssQ0FBQztLQUluQjs7OztJQUVMLDhDQUFrQjs7O0lBQWxCO1FBQUEsaUJBV0M7O1lBVk8sT0FBTyxHQUFlLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDaEYsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLFdBQVcsQ0FBQzthQUM3RixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDMUQsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFFLEdBQUEsQ0FBQyxDQUFDO1FBRWpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFDeEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDcEYsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDckM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7S0FHQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0tBQ0Y7Ozs7O0lBRU8saUNBQUs7Ozs7SUFBYjs7WUFDUSxLQUFLLEdBQW9CO1lBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDckMsS0FBSyxFQUNILFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO2dCQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUc7b0JBQ3pELE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU07U0FDbkM7UUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBRXhCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDckI7U0FDRjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDdEI7U0FFRjtLQUNGOzs7O0lBRUQscUNBQVM7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOztnQkFsRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsVUFBVTtpQkFDckI7Ozs7Z0JBcEJDLFVBQVU7Ozt5QkF1QlQsS0FBSzs0QkFDTCxNQUFNOytCQUNOLE1BQU07O0lBMkRULHdCQUFDO0NBbkVEOzs7Ozs7QUNuQkE7SUFvQkUsdUJBQW9CLE9BQW1CLEVBQ3JCLE9BQW1CO1FBRGpCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQVg1QixrQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNwQixrQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNwQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRWQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDckMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7S0FNOUM7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7UUFBQSxpQkFTQztRQVBDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNwQyxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNqQixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7S0FHSjs7Ozs7SUFFTyx3Q0FBZ0I7Ozs7SUFBeEI7UUFBQSxpQkE2REM7O1lBNURPLFdBQVcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDOztZQUNqRSxVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQzs7WUFDL0QsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUM7O1lBQzdELFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDOztZQUNuRSxJQUFJLEdBQUdDLE9BQUssQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDOztZQUVyQyxTQUFTLEdBQUcsV0FBVzthQUMxQixJQUFJLENBQ0gsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssQ0FBQyxJQUFJLEtBQUksQ0FBQyxPQUFPLEdBQUEsQ0FBQyxDQUMxRDs7WUFFRyxXQUFXLEdBQUcsU0FBUzthQUMxQixJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsS0FBVTs7Z0JBQ1AsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNyQyxPQUFPLFVBQVU7aUJBQ2QsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLElBQVM7O29CQUNOLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7Z0JBQ3RDLE9BQU87b0JBQ0wsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLFNBQVMsRUFBRSxJQUFJO29CQUNmLE1BQU0sRUFBRSxNQUFNO29CQUNkLFFBQVEsRUFBRSxRQUFRO29CQUNsQixNQUFNLEVBQUUsUUFBUSxHQUFHLE1BQU07aUJBQzFCLENBQUM7YUFDSCxDQUFDLEVBQ0YsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUEsQ0FBQyxFQUNsQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQ2hCLENBQUM7U0FDTCxDQUFDLENBQUM7UUFHUCxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztZQUN2QixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7b0JBQzFCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQzlCLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsRUFBRTtvQkFDN0MsT0FBTztpQkFDUjtnQkFDRCxJQUFJLE1BQU0sSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFLENBRWpDO2dCQUNELEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDaEQsQ0FBQyxDQUFDO1lBRUgsS0FBSztpQkFDRixJQUFJLENBQ0gsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUNaO2lCQUNBLFNBQVMsQ0FBQyxVQUFBLElBQUk7O29CQUNQLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7O29CQUN4QixPQUFPLEdBQUcsTUFBTSxJQUFJLEtBQUksQ0FBQyxhQUFhO2dCQUM1QyxJQUFJLE9BQU8sRUFBRTtvQkFDWCxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUN4QjtxQkFBTTtvQkFDTCxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUN2QjthQUNGLENBQUMsQ0FBQztTQUNOLENBQUMsQ0FBQztLQUNKOztnQkEzRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO2lCQUN0Qjs7OztnQkFQMkIsVUFBVTtnQkFDN0IsVUFBVSx1QkFvQmQsSUFBSTs7O2dDQVhOLEtBQUs7Z0NBQ0wsS0FBSzswQkFDTCxLQUFLOzZCQUVMLE1BQU07NEJBQ04sTUFBTTswQkFDTixNQUFNOztJQWlGVCxvQkFBQztDQTVGRDs7Ozs7O0FDTEE7SUFvRUU7UUE5QkEsb0JBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVyQixVQUFLLEdBQXdCLFFBQVEsQ0FBQztRQUc1QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFdEQsbUJBQWMsR0FBdUIsT0FBTyxDQUFDO1FBQzdDLHdCQUFtQixHQUF1QixPQUFPLENBQUM7S0FzQmpDO0lBcEJqQixzQkFDSSwrQkFBSTs7OztRQURSO1lBRUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQUNELFVBQVMsSUFBWTtZQUNuQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNuQjtTQUNGOzs7T0FQQTtJQVNELHNCQUNJLHlDQUFjOzs7O1FBRGxCO1lBRUUsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzdCOzs7OztRQUNELFVBQW1CLEtBQWE7WUFDOUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDOzs7T0FIQTs7OztJQU9ELGdDQUFROzs7SUFBUjtLQUNDOzs7OztJQUVELGlDQUFTOzs7O0lBQVQsVUFBVSxJQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0tBQ3ZCOzs7OztJQUVELDBDQUFrQjs7OztJQUFsQixVQUFtQixLQUFhO1FBQzlCLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUM7U0FDcEM7YUFBTSxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7WUFDL0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEtBQUssT0FBTyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQzthQUM5QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQzthQUNwQztTQUNGO0tBQ0Y7Ozs7O0lBSUQsc0NBQWM7Ozs7SUFBZCxVQUFlLEtBQUs7UUFDbEIsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7U0FDdkI7UUFFRCxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQzlELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QztLQUNGOzs7OztJQUVELHFDQUFhOzs7O0lBQWIsVUFBYyxLQUFLO1FBQ2pCLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7WUFDN0QsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFFBQVEsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN2QztTQUNGO0tBRUY7O2dCQXZIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLGlnQkFBb0M7b0JBRXBDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLFlBQVksRUFBRTs0QkFDcEIsVUFBVSxDQUFDLGtCQUFrQixFQUFFO2dDQUM3QixPQUFPLENBQUMsZ0JBQWdCLENBQUM7NkJBQzFCLENBQUM7NEJBQ0YsVUFBVSxDQUFDLGtCQUFrQixFQUFFO2dDQUM3QixPQUFPLENBQUMsZUFBZSxDQUFDOzZCQUN6QixDQUFDOzRCQUNGLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUseUJBQXlCLEVBQUUsQ0FBQyxDQUFDOzRCQUM5RSxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLHdCQUF3QixFQUFFLENBQUMsQ0FBQzt5QkFDOUUsQ0FBQzt3QkFDRixPQUFPLENBQUMsV0FBVyxFQUFFOzRCQUNuQixVQUFVLENBQUMsZ0JBQWdCLEVBQUU7Z0NBQzNCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDO2dDQUM5QyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQzs2QkFDMUUsQ0FBQzs0QkFDRixVQUFVLENBQUMsaUJBQWlCLEVBQUU7Z0NBQzVCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs2QkFDMUIsQ0FBQzs0QkFDRixVQUFVLENBQUMsaUJBQWlCLEVBQUU7Z0NBQzVCLE9BQU8sQ0FBQyxlQUFlLENBQUM7NkJBQ3pCLENBQUM7NEJBQ0YsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDOzRCQUM5RCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7eUJBQ2hFLENBQUM7cUJBQ0g7O2lCQUNGOzs7Ozt3QkFRRSxLQUFLO2lDQUNMLE1BQU07dUJBS04sS0FBSztpQ0FZTCxLQUFLOztJQStEUixvQkFBQztDQXhIRDs7Ozs7O0FDSEE7SUFnREU7UUFaUyxrQkFBYSxHQUFnQyxRQUFRLENBQUM7UUFDdEQsY0FBUyxHQUFxQixNQUFNLENBQUM7UUFDOUMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVOLGFBQVEsR0FBa0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3RCxZQUFPLEdBQWtDLElBQUksWUFBWSxFQUFFLENBQUM7S0FTckU7SUFQRCxzQkFBa0Msc0NBQVM7Ozs7UUFBM0M7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7OztPQUFBOzs7O0lBT0Qsa0NBQVE7OztJQUFSO0tBRUM7Ozs7SUFFRCw4QkFBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztLQUNyQjs7OztJQUVELCtCQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOztnQkExREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0Qix5WUFBc0M7b0JBRXRDLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsWUFBWSxFQUFFOzRCQUNwQixLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUNyQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUMvQixLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztnQ0FDcEIsR0FBRyxFQUFFLEtBQUs7Z0NBQ1YsU0FBUyxFQUFFLGtCQUFrQjs2QkFDOUIsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDOzRCQUMxRSxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQzs0QkFDckUsS0FBSyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQ3pCLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsQ0FDN0MsQ0FBQzs0QkFDRixLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ3RELEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDOzRCQUNqRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQztnQ0FDekIsR0FBRyxFQUFFLEtBQUs7Z0NBQ1YsU0FBUyxFQUFFLGtCQUFrQjtnQ0FDN0IsT0FBTyxFQUFFLENBQUM7NkJBQ1gsQ0FBQyxDQUFDOzRCQUNILFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ25CLE9BQU8sQ0FBQyxlQUFlLENBQUM7NkJBQ3pCLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDs7aUJBQ0Y7Ozs7O2dDQUdFLEtBQUs7NEJBQ0wsS0FBSzsyQkFFTCxLQUFLOzJCQUNMLE1BQU07MEJBQ04sTUFBTTs0QkFFTixXQUFXLFNBQUMsZUFBZTs7SUF1QjlCLHNCQUFDO0NBOUREOzs7Ozs7QUNKQTtJQTRCRSxtQ0FBb0IsR0FBa0IsRUFBa0IsTUFBdUI7UUFBM0QsUUFBRyxHQUFILEdBQUcsQ0FBZTtRQUFrQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQVh0RSxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBc0IsTUFBTSxDQUFDO1FBRXpDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFNZixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBd0IsQ0FBQztLQUVhO0lBTnBGLHNCQUEwQiw4Q0FBTzs7OztRQUFqQztZQUNFLE9BQU8sV0FBUyxJQUFJLENBQUMsV0FBYSxDQUFDO1NBQ3BDOzs7T0FBQTs7OztJQU1ELDRDQUFROzs7SUFBUjtLQUVDOzs7O0lBRUQsMkNBQU87OztJQUFQOztRQUVFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7WUFDMUIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7S0FDSjs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQywyTEFBbUQ7O2lCQUVwRDs7OztnQkFSUSxhQUFhO2dCQUZiLGVBQWUsdUJBNEJtQixJQUFJOzs7dUJBZjVDLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUlMLFdBQVcsU0FBQyxPQUFPO29DQUluQixNQUFNOztJQWdCVCxnQ0FBQztDQXBDRDs7Ozs7O0FDTkE7SUF3SEUsOEJBQW9CLHdCQUFrRCxFQUM1RCxNQUFzQixFQUN0QixPQUFzQixFQUN0QixRQUFrQixFQUNsQixRQUFtQixFQUNuQixNQUF5QixFQUN6QixTQUEyQixFQUMzQixTQUF1QixFQUN2QixRQUFrQjtRQVJSLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDNUQsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBeENuQixpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQixZQUFPLEdBQXdCLEVBQUUsQ0FBQztRQUNqQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFdEQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBR3hCLFVBQUssR0FBRyxDQUFDLENBQUM7S0ErQlQ7SUF4REQsc0JBQ0kseUNBQU87Ozs7UUFEWDtZQUVFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLDRDQUE0QyxDQUFDLENBQUM7YUFDOUY7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLGFBQVcsSUFBSSxDQUFDLE1BQU0sbUJBQWMsSUFBSSxDQUFDLEtBQUssd0JBQXFCLENBQUMsQ0FBQzthQUNySDtTQUNGOzs7T0FBQTs7OztJQW1ERCx1Q0FBUTs7O0lBQVI7S0FDQzs7Ozs7SUFFRCxtQ0FBSTs7OztJQUFKLFVBQUssS0FBSztRQUNSLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7Ozs7SUFFRCwwQ0FBVzs7OztJQUFYLFVBQVksS0FBSzs7WUFDVCxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7UUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUN2STs7Ozs7SUFFRCxvREFBcUI7Ozs7SUFBckIsVUFBc0IsS0FBSztRQUEzQixpQkFrQ0M7UUFqQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsd0JBQXdCO2FBQzlDLHVCQUF1QixDQUFDLG9CQUFvQixDQUFDO2FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7UUFDaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7UUFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRO2FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTLENBQUM7WUFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUM5QixDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGNBQWM7YUFDdkQsU0FBUyxDQUFDLFVBQUMsRUFBRTtZQUNaLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlCLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7O1lBRTdDLE9BQU8sc0JBQUcsb0JBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRO2FBQ3hDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBZTtRQUU5QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUVwQzs7OztJQUVELHFDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOzs7O0lBQ0QsaURBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDN0I7Ozs7SUFFRCxrREFBbUI7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDMUI7Ozs7O0lBRUQscUNBQU07Ozs7SUFBTixVQUFPLEtBQUs7UUFDVixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCO0tBQ0Y7Ozs7SUFFRCw0Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQztLQUNwRjs7Ozs7SUFFRCxzQ0FBTzs7OztJQUFQLFVBQVEsS0FBSztRQUNYLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7O1lBRTlCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtLQUNGOzs7O0lBQ0QsMENBQVc7OztJQUFYO1FBQUEsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztZQUV6RCxVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDOztZQUNuRCxVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDO2FBQ3RELElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFDckIsTUFBTSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsS0FBSyxDQUFDLEdBQUEsQ0FBQyxFQUM1QyxNQUFNLEVBQUUsQ0FDVDtRQUVILElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLEVBQUUsR0FBQSxDQUFDLENBQUM7S0FDdEU7Ozs7SUFFRCx5Q0FBVTs7O0lBQVY7UUFBQSxpQkFvQkM7UUFuQkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOztZQUU5QyxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVU7WUFFN0MsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjtTQUNGLENBQUMsQ0FBQzs7WUFFRyxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTTthQUNoQixTQUFTLENBQUMsVUFBQyxLQUFVO1lBQ3BCLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNoQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xCLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQUEsaUJBZ0VDOzs7WUE5RE8sWUFBWSxHQUFHLEdBQUc7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFQyxhQUFvQixFQUFFLENBQUMsQ0FBQzs7WUFDM0UsUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQzs7WUFFaEQsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQzs7WUFDNUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQzs7WUFFOUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQzs7WUFDOUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQzs7WUFFMUMsSUFBSSxHQUFHLFFBQVE7YUFDbEIsSUFBSSxDQUNILE9BQU8sQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FDeEIsTUFBTSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsR0FBQSxDQUFDLENBQUMsR0FBQSxDQUFDLENBQ25DOztZQUVHLEVBQUUsR0FBRyxRQUFRO2FBQ2hCLElBQUksQ0FDSCxPQUFPLENBQUMsY0FBTSxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQ3RCLE1BQU0sQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEdBQUEsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUNuQzs7WUFFRyxZQUFZLEdBQUdELE9BQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO1FBRXBDLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQVE7WUFDakQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckMsQ0FBQyxDQUFDOztZQUVHLFlBQVksR0FBRyxPQUFPO2FBQ3pCLElBQUksQ0FDSCxNQUFNLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FDN0I7O1lBRUcsU0FBUyxHQUFHLFFBQVE7YUFDdkIsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBQSxDQUFDLEVBQ3BELE9BQU8sQ0FBQyxjQUFNLE9BQUEsWUFBWSxHQUFBLENBQ3pCLENBQUM7UUFFTixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVM7YUFDdEIsU0FBUyxDQUFDLFVBQUMsR0FBUTtZQUNsQixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCLENBQUMsQ0FBQztRQUdMLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTTthQUNwQixJQUFJLENBQ0gsTUFBTSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxZQUFZLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxDQUFDLEdBQUEsQ0FBQyxDQUNyRzthQUNBLFNBQVMsQ0FBQyxjQUFRLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU07YUFDbkIsSUFBSTs7UUFFSCxNQUFNLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLFlBQVksSUFBSSxLQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxHQUFHLFlBQVksSUFBSSxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBQSxDQUFDLENBQ3pKO2FBQ0EsU0FBUyxDQUFDLFVBQUMsS0FBSztZQUNmLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMvQyxDQUFDLENBQUM7S0FDTjs7Ozs7SUFFRCxtQ0FBSTs7OztJQUFKLFVBQUssS0FBVTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUNqQzs7WUFDSyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztZQUMzQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7WUFDMUIsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7O1lBQzlDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBRW5ELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNwQjs7Ozs7SUFFRCw4Q0FBZTs7OztJQUFmLFVBQWdCLEdBQUc7O1lBQ1gsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFOztZQUNuQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7O1lBQ3JELFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDdkYsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxHQUFHLEdBQUcsU0FBUyxFQUFFO1lBQzFCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxHQUFHLENBQUM7S0FDWjs7Ozs7SUFFRCw4Q0FBZTs7OztJQUFmLFVBQWdCLEdBQUc7O1lBQ1gsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFOztZQUNwQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7O1lBQ3ZELE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7O1lBQ3JDLFNBQVMsR0FBRyxHQUFHO1FBQ25CLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN6RCxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckY7YUFBTTtZQUNMLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyRjtRQUNELElBQUksR0FBRyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUU7WUFDakMsT0FBTyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ2hDO2FBQU0sSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLE1BQU0sRUFBRTtZQUNuQyxPQUFPLFNBQVMsR0FBRyxNQUFNLENBQUM7U0FDM0I7UUFDRCxPQUFPLEdBQUcsQ0FBQztLQUNaOzs7OztJQUVELHdDQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQXhCLGlCQU9DO1FBTkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDakIsSUFBSSxLQUFJLENBQUMsZ0JBQWdCLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTtnQkFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQUksTUFBTSxPQUFJLENBQUMsQ0FBQzthQUM3RTtTQUNGLENBQUMsQ0FBQztLQUVKOzs7OztJQUVELG1EQUFvQjs7OztJQUFwQixVQUFxQixLQUFVOztZQUN2QixZQUFZLEdBQUcsR0FBRztRQUN4QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLENBQUM7S0FDdEQ7Ozs7O0lBRUQsd0NBQVM7Ozs7SUFBVCxVQUFVLEtBQUs7O1lBQ1AsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDeEI7Ozs7O0lBRUQsOENBQWU7Ozs7SUFBZixVQUFnQixLQUFLOztZQUNiLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDO1FBQ2pELE9BQU8sS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDO0tBQ3hDOzs7Ozs7SUFFRCx1Q0FBUTs7Ozs7SUFBUixVQUFTLEtBQUssRUFBRSxJQUFLO1FBQXJCLGlCQVNDO1FBUkMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDakIsSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsNEJBQTBCLEtBQUssTUFBRyxDQUFDLENBQUM7YUFDdkc7U0FDRixDQUFDLENBQUM7S0FDSjs7Ozs7SUFFRCxxQ0FBTTs7OztJQUFOLFVBQU8sR0FBRztRQUFWLGlCQVFDO1FBUEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2pCLElBQUksS0FBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFLLEdBQUcsT0FBSSxDQUFDLENBQUM7YUFDekU7U0FDRixDQUFDLENBQUM7S0FDSjs7Ozs7SUFFRCxzQ0FBTzs7OztJQUFQLFVBQVEsSUFBSTtRQUFaLGlCQU9DO1FBTkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDakIsSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUssSUFBSSxPQUFJLENBQUMsQ0FBQzthQUMzRTtTQUNGLENBQUMsQ0FBQztLQUNKOzs7OztJQUVELDJDQUFZOzs7O0lBQVosVUFBYSxLQUFVOztZQUNmLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUTs7WUFDekIsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRTdELElBQUksUUFBUSxJQUFJLEdBQUcsRUFBRTtZQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUM5QzthQUFNLElBQUksUUFBUSxJQUFJLEdBQUcsSUFBSSxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBQzVDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3hHO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDL0U7S0FDRjs7OztJQUVELHVDQUFROzs7SUFBUjtRQUFBLGlCQVlDOztZQVhPLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUssSUFBSSxDQUFDLEdBQUcsT0FBSSxFQUFFLENBQUM7WUFDL0IsT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE9BQUksRUFBRSxDQUFDLENBQUM7U0FDekUsQ0FBQzs7WUFFSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUM1RCxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNmLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekMsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsMENBQVc7Ozs7SUFBWCxVQUFZLEtBQUs7UUFBakIsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU87U0FDUjs7WUFDSyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDakMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQUksS0FBSyxPQUFJLEVBQUUsQ0FBQztZQUNoQyxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ2hELENBQUM7O1lBRUksU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDekQsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pCLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDZixTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQixDQUFDLENBQUM7S0FDSjs7Ozs7O0lBRUQsMkNBQVk7Ozs7O0lBQVosVUFBYSxPQUFlLEVBQUUsVUFBb0M7UUFBbEUsaUJBb0JDOzs7O1lBakJPLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksT0FBTzs7WUFDdEQsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsSUFBSSxPQUFPOztZQUN0RCxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsT0FBTzs7WUFDdEMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxHQUFHLE9BQU87O1lBQ3BDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsNEJBQTBCLElBQUksQ0FBQyxLQUFLLE1BQUcsRUFBRSxHQUFHLEVBQUssSUFBSSxDQUFDLEdBQUcsT0FBSSxFQUFFLElBQUksRUFBSyxJQUFJLENBQUMsSUFBSSxPQUFJLEVBQUUsQ0FBQztZQUMzRyxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSw0QkFBMEIsT0FBTyxNQUFHLEVBQUUsR0FBRyxFQUFLLE1BQU0sT0FBSSxFQUFFLElBQUksRUFBSyxPQUFPLE9BQUksRUFBRSxDQUFDLENBQUM7U0FDNUgsQ0FBQzs7WUFDSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUM1RCxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNmLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QixLQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztTQUMvQixDQUFDLENBQUM7S0FDSjs7OztJQUVELHlDQUFVOzs7SUFBVjtRQUFBLGlCQWVDOztZQWRPLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7O1lBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsNEJBQTBCLElBQUksQ0FBQyxLQUFLLE1BQUcsRUFBRSxHQUFHLEVBQUssSUFBSSxDQUFDLEdBQUcsT0FBSSxFQUFFLElBQUksRUFBSyxJQUFJLENBQUMsSUFBSSxPQUFJLEVBQUUsQ0FBQztZQUMzRyxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSw0QkFBMEIsQ0FBQyxNQUFHLEVBQUUsR0FBRyxFQUFLLENBQUMsT0FBSSxFQUFFLElBQUksRUFBSyxDQUFDLE9BQUksRUFBRSxDQUFDLENBQUM7U0FDM0csQ0FBQzs7WUFDSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUM1RCxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNmLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDN0MsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCw4Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7S0FDaEQ7Ozs7O0lBRUQsOENBQWU7Ozs7SUFBZixVQUFnQixLQUFLO1FBQ25CLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7S0FFRjs7OztJQUVELG9EQUFxQjs7O0lBQXJCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUMvRDs7OztJQUNELG1EQUFvQjs7O0lBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM5RDs7OztJQUVELGdEQUFpQjs7O0lBQWpCO1FBQ0UsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQztLQUN4RTs7Ozs7SUFFRCw4Q0FBZTs7OztJQUFmLFVBQWdCLEtBQWE7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakM7O2dCQXhnQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLHN6REFBNEM7b0JBRTVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLFVBQVUsRUFBRTs0QkFDbEIsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQ0FDbkIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDOztnQ0FFckIsT0FBTyxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUN0RCxDQUFDOzRCQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs7Z0NBRXJCLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQ2hELENBQUM7eUJBQ0gsQ0FBQzt3QkFDRixPQUFPLENBQUMsTUFBTSxFQUFFOzRCQUNkLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQ0FDckIsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUNqRCxDQUFDOzRCQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQ0FDckIsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDaEQsQ0FBQzt5QkFDSCxDQUFDO3dCQUNGLE9BQU8sQ0FBQyxZQUFZLEVBQUU7NEJBQ3BCLFVBQVUsQ0FBQyxRQUFRLEVBQUU7O2dDQUVuQixLQUFLLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLENBQUM7O2dDQUVoSixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDOzZCQUM3SSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7eUJBQ3JFLENBQUM7d0JBQ0YsT0FBTyxDQUFDLFlBQVksRUFBRTs0QkFDcEIsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQ0FDbkIsS0FBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDOztnQ0FFakksT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FDaEs7NkJBQ0YsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7eUJBQ3BGLENBQUM7cUJBQ0g7O2lCQUNGOzs7O2dCQS9EQyx3QkFBd0I7Z0JBRXhCLGNBQWM7Z0JBYVAsYUFBYTtnQkFBRSxRQUFRO2dCQVQ5QixTQUFTO2dCQUNULGlCQUFpQjtnQkFLMkIsZ0JBQWdCO2dCQW5CakMsWUFBWTtnQkFNdkMsUUFBUTs7OzBCQW1FUCxXQUFXLFNBQUMsT0FBTzs0QkFTbkIsU0FBUyxTQUFDLFdBQVc7NEJBQ3JCLFNBQVMsU0FBQyxXQUFXO3lCQUNyQixTQUFTLFNBQUMsUUFBUTtzQkFDbEIsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7K0JBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLE1BQU07aUNBQ04sTUFBTTs7SUF1Y1QsMkJBQUM7Q0F6Z0JEOzs7Ozs7QUN6QkE7SUFtREUsZ0NBQW1CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFidEMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFJbEIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNiLG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2RCxVQUFLLEdBQXVCLFFBQVEsQ0FBQztLQUVNOzs7O0lBRTNDLHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsUUFBUSxDQUFDO0tBQzlDOzs7O0lBRUQsdUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7S0FDdEI7Ozs7SUFDRCxxQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztLQUN2Qjs7Ozs7SUFFRCw0Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEtBQUssS0FBSyxFQUFFO1lBQzVHLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQ3RCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLEtBQUssS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUM1RyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUNyQixPQUFPO1NBQ1I7S0FDRjs7OztJQUVELDhDQUFhOzs7SUFBYjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQ3RCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNkOzs7O0lBRUQsZ0RBQWU7OztJQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0tBQ0Y7Ozs7O0lBR0QscURBQW9COzs7O0lBQXBCLFVBQXFCLEtBQUs7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFLENBRTlEO1FBRUQsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUM3RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtLQUVGOzs7OztJQUVPLHNDQUFLOzs7O0lBQWI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2xCOzs7O0lBRUQsK0NBQWM7OztJQUFkO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0tBRXRCOzs7OztJQUdELCtDQUFjOzs7O0lBQWQsVUFBZSxLQUFLO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUNoQztLQUNGOzs7OztJQUVELDhDQUFhOzs7O0lBQWIsVUFBYyxLQUFLO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7S0FDRjs7Ozs7O0lBRUQsaURBQWdCOzs7OztJQUFoQixVQUFpQixLQUFLLEVBQUUsS0FBZTtRQUNyQyxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzFCO2FBQU07WUFDTCxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbEI7S0FDRjs7Z0JBeklGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qix5ekNBQThDO29CQUU5QyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLGVBQWUsRUFBRTs0QkFDdkIsVUFBVSxDQUFDLGlCQUFpQixFQUFFO2dDQUM1QixPQUFPLENBQUMsZ0JBQWdCLENBQUM7NkJBQzFCLENBQUM7NEJBQ0YsVUFBVSxDQUFDLGlCQUFpQixFQUFFO2dDQUM1QixPQUFPLENBQUMsY0FBYyxDQUFDOzZCQUN4QixDQUFDOzRCQUNGLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7NEJBQ3hDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7eUJBQzFDLENBQUM7d0JBQ0YsT0FBTyxDQUFDLFlBQVksRUFBRTs0QkFDcEIsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dDQUN2QixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7NkJBQzlFLENBQUM7NEJBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsT0FBTyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7NkJBQzlFLENBQUM7eUJBQ0gsQ0FBQzt3QkFDRixPQUFPLENBQUMsV0FBVyxFQUFFOzRCQUNuQixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO2dDQUN0RCxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQzs2QkFDL0UsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIOztpQkFDRjs7OztnQkFuQ3dELFNBQVM7Ozt3QkF5Qy9ELEtBQUs7OEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7aUNBQ0wsTUFBTTsyQkFDTixNQUFNO3VCQUNOLE1BQU07O0lBZ0dULDZCQUFDO0NBM0lEOzs7Ozs7QUNIQTtJQVlFLDBCQUFtQixTQUFvQixFQUFTLGlCQUFvQztRQUFqRSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUY3RSxZQUFPLEdBQXNCLEVBQUUsQ0FBQztRQUdyQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDekM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7S0FDQzs7Ozs7SUFFRCx3Q0FBYTs7OztJQUFiLFVBQWMsQ0FBUztRQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDOUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHVSQUF1Qzs7aUJBRXhDOzs7O2dCQU5RLFNBQVM7Z0JBQUUsaUJBQWlCOztJQXFCckMsdUJBQUM7Q0FuQkQ7Ozs7OztBQ0pBO0lBYUU7UUFGVSxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQUV6Qjs7OztJQUVqQixrQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0Qiw0RkFBc0M7O2lCQUV2Qzs7Ozs7dUJBR0UsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLE1BQU07O0lBT1Qsc0JBQUM7Q0FoQkQ7Ozs7Ozs7SUNtQkUsNkJBQW9CLFFBQWtCLEVBQzVCLGlCQUFvQyxFQUNyQyxxQkFBNEM7UUFGakMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3JDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFYNUMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUdiLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsY0FBUyxHQUFHLElBQUksQ0FBQztLQUtnQzs7OztJQUUxRCxzQ0FBUTs7O0lBQVI7S0FDQzs7OztJQUVELGdEQUFrQjs7O0lBQWxCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6Qzs7Ozs7SUFFRCwyQ0FBYTs7OztJQUFiLFVBQWMsS0FBSztRQUNqQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7S0FDRjs7Ozs7SUFFSyw0Q0FBYzs7OztJQUFwQixVQUFxQixFQUFPOzs7Ozs0QkFDVixxQkFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDOzRCQUNsRCxTQUFTLEVBQUUsZ0JBQWdCOzRCQUMzQixLQUFLLEVBQUUsRUFBRTs0QkFDVCxXQUFXLEVBQUUsS0FBSzs0QkFDbEIsY0FBYyxFQUFFO2dDQUNkLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOzZCQUNwRDt5QkFDRixDQUFDLEVBQUE7O3dCQVBJLE9BQU8sR0FBRyxTQU9kO3dCQUVGLHFCQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQXZCLFNBQXVCLENBQUM7d0JBQ1QscUJBQU0sT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFBOzt3QkFBckMsTUFBTSxHQUFHLFNBQTRCO3dCQUMzQyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFOzRCQUMzRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDdEQ7Ozs7O0tBQ0Y7Ozs7O0lBRUssZ0RBQWtCOzs7O0lBQXhCLFVBQXlCLEVBQU87Ozs7Ozs7d0JBQ3hCLE9BQU8sR0FBRyxFQUFFO3dCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOzZCQUNyQyxPQUFPLENBQUMsVUFBQyxNQUFNLEVBQUUsS0FBSzs0QkFDckIsT0FBTyxDQUFDLElBQUksQ0FBQztnQ0FDWCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0NBQ2pCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQ0FDakIsT0FBTyxFQUFFO29DQUNQLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztpQ0FDMUM7NkJBQ0YsQ0FBQyxDQUFDO3lCQUNKLENBQUMsQ0FBQzt3QkFDZSxxQkFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDO2dDQUMxRCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0NBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQ0FDekIsT0FBTyxFQUFFLE9BQU87NkJBQ2pCLENBQUMsRUFBQTs7d0JBSkksV0FBVyxHQUFHLFNBSWxCO3dCQUNGLHFCQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUM7Ozs7O0tBQzdCOzs7OztJQUVELDZDQUFlOzs7O0lBQWYsVUFBZ0IsQ0FBUztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN4Qzs7Z0JBbEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsKzFCQUEyQzs7aUJBRTVDOzs7O2dCQVJRLFFBQVE7Z0JBQUUsaUJBQWlCO2dCQUFFLHFCQUFxQjs7O3VCQVd4RCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO21DQUNMLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLGVBQWUsU0FBQyxlQUFlOztJQXNFbEMsMEJBQUM7Q0FwRkQ7Ozs7OztBQ0xBO0lBWUUsc0NBQW1CLFVBQStCO1FBQS9CLGVBQVUsR0FBVixVQUFVLENBQXFCO1FBRnpDLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQztLQUloQzs7OztJQUVELCtDQUFROzs7SUFBUjtLQUNDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsaUhBQW9EOztpQkFFckQ7Ozs7Z0JBTlEsbUJBQW1COzs7dUJBU3pCLEtBQUs7O0lBU1IsbUNBQUM7Q0FoQkQ7Ozs7Ozs7SUN3Q29DRSxrQ0FBbUI7SUFBdkQ7UUFBQSxxRUFJQztRQUhDLGVBQVMsc0JBQVE7WUFDZixHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUVDLFFBQU0sQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFO1NBQzVELEVBQUEsQ0FBQzs7S0FDSDtJQUFELHFCQUFDO0NBSkQsQ0FBb0MsbUJBQW1CLEdBSXREOztJQUVEO0tBaUZvQzs7Z0JBakZuQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRTt3QkFDWixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsOEJBQThCO3dCQUM5Qix3QkFBd0I7d0JBQ3hCLG9CQUFvQjt3QkFDcEIsMkJBQTJCO3dCQUMzQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsMkJBQTJCO3dCQUMzQix1QkFBdUI7d0JBQ3ZCLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2IsZ0NBQWdDO3dCQUNoQyx1QkFBdUI7d0JBQ3ZCLDBCQUEwQjt3QkFDMUIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIseUJBQXlCO3dCQUN6QixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLDRCQUE0QjtxQkFDN0I7b0JBQ0QsZUFBZSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3pELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLHdCQUF3Qjt3QkFDeEIsZUFBZTt3QkFDZiw4QkFBOEI7d0JBQzlCLG9CQUFvQjt3QkFDcEIsMkJBQTJCO3dCQUMzQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsMkJBQTJCO3dCQUMzQix1QkFBdUI7d0JBQ3ZCLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2IsZ0NBQWdDO3dCQUNoQyx1QkFBdUI7d0JBQ3ZCLDBCQUEwQjt3QkFDMUIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIseUJBQXlCO3dCQUN6QixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZiw0QkFBNEI7cUJBQzdCO2lCQUNGOztJQUNrQywwQkFBQztDQWpGcEM7Ozs7Ozs7Ozs7Ozs7OyJ9

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
	"../bottom-sheet/bottom-sheet.module": [
		"./src/app/pages/bottom-sheet/bottom-sheet.module.ts",
		"bottom-sheet-bottom-sheet-module"
	],
	"../buttons/buttons.module": [
		"./src/app/pages/buttons/buttons.module.ts",
		"buttons-buttons-module"
	],
	"../expandable/expandable.module": [
		"./src/app/pages/expandable/expandable.module.ts",
		"expandable-expandable-module"
	],
	"../refresh/refresh.module": [
		"./src/app/pages/refresh/refresh.module.ts",
		"refresh-refresh-module"
	],
	"./pages/app-bar/app-bar.module": [
		"./src/app/pages/app-bar/app-bar.module.ts",
		"pages-app-bar-app-bar-module"
	],
	"./pages/bottom-sheet/bottom-sheet.module": [
		"./src/app/pages/bottom-sheet/bottom-sheet.module.ts",
		"bottom-sheet-bottom-sheet-module"
	],
	"./pages/buttons/buttons.module": [
		"./src/app/pages/buttons/buttons.module.ts",
		"buttons-buttons-module"
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
		"expandable-expandable-module"
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
		"refresh-refresh-module"
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
            {
                title: 'Image View',
                url: '/image',
                icon: 'image'
            },
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

module.exports = "<ion-footer #footer no-border>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col sizeXs=\"6\" sizeLg=\"3\">\n        <h4>Fivethree</h4>\n        <a class=\"links\" href=\"/fivethree/getting-started\" translate>common.get-started</a>\n        <a class=\"links\" href=\"https://fivethree.io/\" translate>footer.about</a>\n      </ion-col>\n      <ion-col sizeXs=\"6\" sizeLg=\"3\">\n        <h4 translate>footer.resources</h4>\n        <a class=\"links\" href=\"https://angular.io/\">Angular</a>\n        <a class=\"links\" href=\"https://ionicframework.com/\">Ionic</a>\n      </ion-col>\n      <ion-col sizeXs=\"12\" sizeLg=\"6\" id=\"social\">\n        <a href=\"https://www.github.com/fivethree-team/fivethree\" target=\"blank\">\n          <ion-icon slot=\"icon-only\" name=\"logo-github\"></ion-icon>\n        </a>\n        <a href=\"https://twitter.com/fivethreeteam\" target=\"blank\">\n          <ion-icon slot=\"icon-only\" name=\"logo-twitter\"></ion-icon>\n        </a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>"

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