(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/core/fesm5/fivethree-core.js":
/*!*******************************************!*\
  !*** ./dist/core/fesm5/fivethree-core.js ***!
  \*******************************************/
/*! exports provided: MyHammerConfig, FivethreeCoreModule, DrawerState, AppBarComponent, BottomSheetComponent, BottomSheetContentComponent, CollapsableMenuButtonComponent, DialogComponent, ExpandableComponent, LoadingButtonComponent, LoadingContentComponent, LoadingFabComponent, LoadingProgressBarComponent, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, PasswordComponent, RouterItemComponent, StepComponent, StepContentComponent, StepHeaderComponent, StepperComponent, StepperHorizontalComponent, ToolbarSearchComponent, LoadingService, ɵb, ɵa, ɵd, ɵc, ɵe, ɵf, ɵi, ɵh, ɵl, ɵj, ɵk, ɵg */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return listAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return rotateAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CollapsableMenuDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CenterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return IfPlatformDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return PermissionsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return PullDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return ViewportDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return IconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return LoadingRefresherContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return LoadingSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return RippleComponent; });
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StepComponent = /** @class */ (function () {
    function StepComponent() {
        this.isLast = false;
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
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] }]
    };
    return StepComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var rotateAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotateAnim', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => rotate', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('rotate => normal', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translate(-50%, -50%) rotateZ(45deg)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translate(-50%, -50%) rotateZ(0deg)' }))
]);
/** @type {?} */
var listAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('listAnim', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('350ms ease-out')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in')
    ])
]);
/** @type {?} */
var arrowAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('arrowAnim', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotateZ(-180deg)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotateZ(0deg)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('350ms ease-out')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in')
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    animations: [rotateAnimation],
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent() {
        this.isOpen = false;
        this.state = 'closed';
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
        this.state = 'open';
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
     * @return {?}
     */
    ExpandableComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.fivWillClose.emit(this);
        console.log('close');
        this.isOpen = false;
        this.state = 'closed';
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
            this.fivDidClose.emit(this);
        }
    };
    ExpandableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-expandable',
                    template: "<div>\n  <ng-content select=\"[header]\"></ng-content>\n  <div [@listAnim]=\"state\" (@listAnim.done)=\"onAnimationEnd($event)\" style=\"overflow: hidden\">\n    <ng-content select=\"[content]\"></ng-content>\n  </div>\n</div>",
                    animations: [listAnimation],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ExpandableComponent.ctorParameters = function () { return []; };
    ExpandableComponent.propDecorators = {
        fivWillOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivDidOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivWillClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivDidClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ExpandableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StepContentComponent = /** @class */ (function () {
    function StepContentComponent() {
        this.isLast = false;
        this.title = '';
        this.subtitle = '';
        this.fivDidOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDidClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        this.step.open();
    };
    /**
     * @return {?}
     */
    StepContentComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.step.close();
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
    StepContentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-step-content',
                    template: "<div *ngIf=\"!isLast\" class=\"timeline\"></div>\n<fiv-expandable (fivDidClose)=\"afterClose()\" (fivDidOpen)=\"afterOpen()\" #self>\n  <fiv-ripple header (click)=\"self.open()\">\n      <fiv-step-header #header [index]=\"index\" [icon]=\"icon\">\n          <div class=\"header-title\">{{title}}</div>\n          <div class=\"header-subtitle\">{{subtitle}}</div>\n      </fiv-step-header>\n  </fiv-ripple>\n  <ng-container content>\n    <div class=\"step-content\">\n      <ng-content></ng-content>\n    </div>\n  </ng-container>\n</fiv-expandable>",
                    styles: [":host{display:block;width:100%;position:relative}.step-content{padding-left:44px;padding-bottom:24px}.timeline{width:1px;height:calc(100% - 32px);position:absolute;background:var(--fiv-color-timeline,var(--ion-color-medium));left:27.5px;top:36px}.header-title{color:var(--fiv-color-title,var(--ion-color-dark))}.header-subtitle{color:var(--fiv-color-subtitle,var(--ion-color-medium));font-size:.8em}"]
                }] }
    ];
    /** @nocollapse */
    StepContentComponent.ctorParameters = function () { return []; };
    StepContentComponent.propDecorators = {
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isLast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivDidOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivDidClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['self',] }],
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['header',] }]
    };
    return StepContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    animations: [rotateAnimation],
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StepperComponent = /** @class */ (function () {
    function StepperComponent() {
        this.mode = 'vertical';
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
            this.currentIndex = index;
            this.steps.toArray()[index].open();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StepperComponent.prototype.close = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
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
                    template: "<ion-list *ngIf=\"mode === 'vertical'\">\n  <fiv-step-content *ngFor=\"let content of contents; let i = index; let l = last;\" [icon]=\"content.icon\" [index]=\"i + 1\"\n    [isLast]=\"l\" [title]=\"content.title\" [subtitle]=\"content.subtitle\">\n    <ng-container [ngTemplateOutlet]=\"content.content\"></ng-container>\n  </fiv-step-content>\n</ion-list>\n<div *ngIf=\"mode === 'horizontal'\">\n  <fiv-stepper-horizontal (fivSelect)=\"select($event)\" [contents]=\"contents\"></fiv-stepper-horizontal>\n</div>",
                    styles: [":host{display:block;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    StepperComponent.ctorParameters = function () { return []; };
    StepperComponent.propDecorators = {
        contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [StepComponent,] }],
        steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [StepContentComponent,] }],
        horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [StepperHorizontalComponent,] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return StepperComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.routeActive = true;
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
            /** @type {?} */
            var isActive = (this.routeActive && this.router.url.startsWith(this.pageUrl))
                || this.active;
            return isActive;
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
    RouterItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-router-item',
                    template: "<ng-content></ng-content>\n<span *ngIf=\"hasShape()\" [ngClass]=\"getClasses()\" class=\"indicator\"></span>\n<ion-icon *ngIf=\"!hasShape()\" [ngClass]=\"position\" [name]=\"shape\" class=\"indicator\"></ion-icon>",
                    styles: [":host{display:block;position:relative;width:100%}:host.active .dot{display:block}:host.active .line{background-color:var(--fiv-dot-color,var(--ion-color-primary));display:block}:host.active.left .line{width:2px;height:100%;top:0}:host.active.right .line{width:2px;height:100%;top:0}:host.active.top .line{width:calc(100% - 16px);left:8px;height:2px}:host.active.bottom .line{width:calc(100% - 16px);height:2px;left:8px}:host.active.dot.left{padding-left:24px}.indicator{position:absolute}.dot{width:var(--fiv-dot-width,8px);height:var(--fiv-dot-heigt,8px);background-color:var(--fiv-dot-color,var(--ion-color-primary));top:50%;border-radius:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:8px;display:none}.dot.left{left:8px;right:unset}.dot.right{right:8px}.left{left:0}.right{right:0}.top{top:0}.bottom{bottom:0}"]
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
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        shape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        routeActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
        activeClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }]
    };
    return RouterItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    template: "<ion-item>\n    <ion-label *ngIf=\"placeholder\" [position]=\"position\">{{ placeholder }}</ion-label>\n    <ion-input [type]=\"show ? 'text' : 'password'\" [(ngModel)]=\"passwordValue\" [clearOnEdit]=\"clearOnEdit\"></ion-input>\n    <ion-icon slot=\"end\" [name]=\"show ? hideIcon : showIcon\" (click)=\"toggleShowPassword()\"></ion-icon>\n  </ion-item>",
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    /**
     * @return {?}
     */
    BottomSheetComponent.prototype.ngAfterViewInit = /**
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
        if (!changes["state"]) {
            return;
        }
        this._setDrawerState(changes["state"].currentValue);
        this.updateContent(changes["state"].currentValue);
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
     * @param {?} state
     * @return {?}
     */
    BottomSheetComponent.prototype._setDrawerState = /**
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
     * @return {?}
     */
    BottomSheetComponent.prototype._handlePanStart = /**
     * @return {?}
     */
    function () {
        this._startPositionTop = this._element.nativeElement.getBoundingClientRect().top;
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    BottomSheetComponent.prototype._handlePanEnd = /**
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
     * @param {?} ev
     * @return {?}
     */
    BottomSheetComponent.prototype._handleTopPanEnd = /**
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
     * @param {?} ev
     * @return {?}
     */
    BottomSheetComponent.prototype._handleDockedPanEnd = /**
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
     * @param {?} ev
     * @return {?}
     */
    BottomSheetComponent.prototype._handleBottomPanEnd = /**
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
     * @param {?} ev
     * @return {?}
     */
    BottomSheetComponent.prototype._handlePan = /**
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
     * @param {?} value
     * @return {?}
     */
    BottomSheetComponent.prototype._setTranslateY = /**
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        if (changes["small"].previousValue === true && changes["small"].currentValue === false) {
            this.state = 'normal';
            return;
        }
        if (changes["small"].previousValue === false && changes["small"].currentValue === true) {
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
     * @return {?}
     */
    ToolbarSearchComponent.prototype._open = /**
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
        this.closeButtonVisible = false;
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
                    template: "<ion-toolbar [@searchbarAnim]=\"small ? state : 'normal'\" (@searchbarAnim.done)=\"searchBarStateChange($event)\" [color]=\"color\" [ngClass]=\"{'small': state === 'small'}\">\n  <ion-buttons slot=\"start\">\n    <ng-content select=\"[start]\"></ng-content>\n\n  </ion-buttons>\n  <ion-title [@titleAnim] *ngIf=\"titleVisible\">{{title}}</ion-title>\n  <ion-input (ionChange)=\"fivInputChange.emit($event)\" [placeholder]=\"!titleVisible ? placeholder : ''\" autofocus #input class=\"toolbar-searchbar\"\n    [@titleAnim] (@titleAnim.done)=\"seachbarAnimDone($event,input)\" *ngIf=\"searching\">\n  </ion-input>\n\n  <ion-buttons slot=\"end\">\n    <ion-button [@rotateAnim] (@rotateAnim.done)=\"searchAnimDone($event)\" *ngIf=\"!searching\" (click)=\"openSearchbar()\">\n      <ion-icon style=\"transform: matrix(-1, 0, 0, 1, 0, 0);\" name=\"md-search\"></ion-icon>\n    </ion-button>\n    <ion-button [@rotateAnim] (@rotateAnim.done)=\"closeAnimDone($event)\" *ngIf=\"closeButtonVisible\" (click)=\"closeSearchbar()\">\n      <ion-icon name=\"md-close\"></ion-icon>\n    </ion-button>\n    <ng-content select=\"[end]\"></ng-content>\n\n  </ion-buttons>\n</ion-toolbar>",
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    _this.complete();
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
     * @return {?}
     */
    LoadingProgressBarComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        console.log('set complete');
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
            this.fivComplete.emit(isComplete);
            this.isComplete = false;
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
        /** @type {?} */
        var myAnimation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: this.progress }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(ms, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '100%' }))
        ]);
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LoadingButtonComponent = /** @class */ (function () {
    function LoadingButtonComponent() {
        this.loading = false;
        this.color = 'light';
        this.expand = 'block';
        this.disabled = false;
        this.verticalAlign = 'top';
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
            this.progress.complete();
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
                    template: "<ion-button (click)=\"onClick()\" class=\"buttonfull\" [disabled]=\"disabled\" [expand]=\"expand\" [color]=\"color\">\n  <fiv-loading-progress-bar [verticalAlign]=\"verticalAlign\" (fivComplete)=\"onComplete($event)\" #progress [global]=\"false\"></fiv-loading-progress-bar>\n  <ng-content></ng-content>\n</ion-button>",
                    styles: [":host{position:relative;display:block;margin:0 20px}"]
                }] }
    ];
    /** @nocollapse */
    LoadingButtonComponent.ctorParameters = function () { return []; };
    LoadingButtonComponent.propDecorators = {
        progress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['progress',] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        expand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivRefreshComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivButtonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return LoadingButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    /**
     * Dynamically generates a style tag containing the correct animation for this diameter.
     * @return {?}
     */
    LoadingSpinnerComponent.prototype._attachStyleNode = /**
     * Dynamically generates a style tag containing the correct animation for this diameter.
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
            (/** @type {?} */ (styleTag.sheet)).insertRule(this._getAnimationText(), 0);
        }
        LoadingSpinnerComponent.diameters.add(this.diameter);
    };
    /**
     * Generates animation styles adjusted for the spinner's diameter.
     * @return {?}
     */
    LoadingSpinnerComponent.prototype._getAnimationText = /**
     * Generates animation styles adjusted for the spinner's diameter.
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.renderer.
            setStyle(this.spinner.element.nativeElement, 'transform', "translateY(" + 168 * this.currentProgress + "px) rotateZ(" + 360 * progress / 200 + "deg)");
    };
    LoadingContentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-loading-content',
                    template: "<fiv-loading-refresher-content (fivProgress)=\"onSpinnerProgress($event)\" (fivHidden)=\"afterSpinnerHide()\" (fivComplete)=\"fillAnimationDone()\" #spinner></fiv-loading-refresher-content>\n<ion-chip class=\"gg-hint-wrapper\" *ngIf=\"hintVisible\" [@hintAnim] (@hintAnim.done)=\"postHint($event)\" (click)=\"onHintClicked()\"\n  #hint>\n  <ion-icon class=\"icon\" name=\"md-arrow-up\"></ion-icon>\n  <ion-label class=\"text\">{{hintText}}</ion-label>\n</ion-chip>\n\n<ion-content fullscreen no-bounce fivPull [maxPullHeight]=\"maxPullHeight\" [minPullHeight]=\"minPullHeight\" (fivPull)=\"fivPull($event)\" (fivRefresh)=\"onRefresh()\" (fivCancel)=\"fivCancel()\" [enabled]=\"!refreshing && !hintVisible\">\n\n  <div class=\"gg-content\">\n    <ng-content></ng-content>\n  </div>\n</ion-content>",
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
                    styles: [":host{height:100%;width:100%;position:absolute;top:0;bottom:0;left:0;right:0}.icon{height:20px;width:20px;background:0 0;color:var(--ion-color-dark)}.text{font-size:1em;color:var(--ion-color-dark)}.gg-hint-wrapper{position:absolute;z-index:8;opacity:1;left:50%;-webkit-transform:translateY(112px) translateX(-50%);transform:translateY(112px) translateX(-50%);height:40px;padding-left:8px;padding-right:8px;background:var(--ion-color-light);border-radius:40px;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1);margin:0}.gg-content{margin-top:56px}"]
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            return verticalClass + " " + horizontalClass + " " + edgeClass;
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
                    template: "<ion-fab *ngIf=\"visible\" (@fabAnim.done)=\"fabAnimDone($event)\" [@fabAnim] [vertical]=\"vertical\" [horizontal]=\"horizontal\" [slot]=\"slot\" [edge]=\"edge\">\n  <!-- <fiv-loading-spinner (fivProgress)=\"rotate($event)\" #spinner (fivComplete)=\"fillAnimationDone()\" *ngIf=\"loading\" class=\"spinner\" [circleRadius]=\"32\" [diameter]=\"72\" [strokeWidth]=\"4\" [mode]=\"'indeterminate'\"></fiv-loading-spinner> -->\n  <fiv-loading-spinner (fivProgress)=\"rotate($event)\" #spinner (fivComplete)=\"fillAnimationDone()\" *ngIf=\"loading\" class=\"spinner\" [circleRadius]=\"30\" [diameter]=\"68\" [strokeWidth]=\"4\" [mode]=\"'indeterminate'\"></fiv-loading-spinner>\n\n  <ion-fab-button [color]=\"fabColor\" [disabled]=\"disabled\">\n    <fiv-icon [name]=\"icon\"></fiv-icon>\n  </ion-fab-button>\n</ion-fab>",
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
                    styles: [":host{--fiv-spinner-size:68px;position:absolute;width:var(--fiv-spinner-size);height:var(--fiv-spinner-size)}:host(.fab-vertical-top){top:0}:host(.fab-vertical-top.fab-edge){top:var(--fiv-spinner-size)/2}:host(.fab-vertical-bottom.fab-edge){bottom:var(--fiv-spinner-size)/2}:host(.fab-vertical-bottom){bottom:0}:host(.fab-vertical-center){top:50%}:host(.fab-horizontal-start){left:0}:host(.fab-horizontal-end){right:0}ion-spinner{position:absolute;top:-8px;left:-8px;width:72px;height:72px}fiv-loading-spinner{position:absolute;left:calc((var(--fiv-spinner-size) - 56px)/ -2);top:calc((var(--fiv-spinner-size) - 56px)/ -2)}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}"]
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AppBarComponent = /** @class */ (function () {
    function AppBarComponent() {
        this._fabVisible = true;
        this.cutoutVisible = true;
        this.left = false;
        this.right = false;
        this.transitioning = false;
        this.icon = 'md-add';
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
     * @return {?}
     */
    AppBarComponent.prototype.setPosition = /**
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
                    template: "<div class=\"appbar\" [ngClass]=\"{'cutout': cutoutVisible, 'left': left, 'right': right}\">\n    <div class=\"appbar-rect left\"></div>\n    <fiv-loading-fab (fivHidden)=\"onFabHidden()\" [icon]=\"icon\" [visible]=\"_fabVisible\" #fab (click)=\"fabClick()\"></fiv-loading-fab>\n    <div class=\"rect\"></div>\n    <div class=\"appbar-rect right\"></div>\n  </div>",
                    styles: [":host{display:block}.appbar{width:100%;position:fixed;bottom:0;left:0;height:84px;background:rgba(0,0,0,0)}.appbar .appbar-rect{position:absolute;width:calc(50% - 34px);height:56px;bottom:0;box-shadow:3px -4px 5px 0 rgba(0,0,0,.1);transition:350ms}.appbar .appbar-rect.left{left:0;background:var(--ion-color-light);border-top-right-radius:12px}.appbar .appbar-rect.right{right:0;background:var(--ion-color-light);border-top-left-radius:12px}.appbar fiv-loading-fab{width:56px;height:56px;-webkit-transform:translateX(-50%);transform:translateX(-50%);left:50%;position:absolute;z-index:14}.appbar .rect{display:inline-block;width:68px;height:48px;position:absolute;overflow:hidden;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:350ms}.appbar .rect:before{content:'';position:absolute;bottom:50%;width:100%;height:100%;border-radius:100%;box-shadow:0 300px 0 300px var(--ion-color-light);transition:350ms}.appbar:not(.cutout) .appbar-rect.left{border-top-right-radius:0}.appbar:not(.cutout) .appbar-rect.right{border-top-left-radius:0}.appbar:not(.cutout) .rect{height:56px;box-shadow:3px -4px 5px 0 rgba(0,0,0,.1);background:var(--ion-color-light)}.appbar:not(.cutout) .rect:before{border-radius:0;bottom:100%}.appbar.left .appbar-rect.left{width:4px}.appbar.left .appbar-rect.right{width:calc(100% - 70px)}.appbar.left .rect{left:4px;-webkit-transform:translateX(0);transform:translateX(0);width:66px}.appbar.left fiv-loading-fab{width:56px;height:56px;-webkit-transform:translateX(0);transform:translateX(0);left:10px;position:absolute}.appbar.right .appbar-rect.left{width:calc(100% - 70px)}.appbar.right .appbar-rect.right{width:4px}.appbar.right .rect{left:calc(100% - 37px);width:67px}.appbar.right fiv-loading-fab{width:56px;height:56px;-webkit-transform:translateX(0);transform:translateX(0);left:calc(100% - 64px);position:absolute;--fiv-spinner-size:68px}"]
                }] }
    ];
    /** @nocollapse */
    AppBarComponent.ctorParameters = function () { return []; };
    AppBarComponent.propDecorators = {
        fab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['fab',] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivFabClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fabVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return AppBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RippleComponent = /** @class */ (function () {
    function RippleComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.rippleAnimationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.round = false;
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
                    styles: [":host{display:block;position:relative}:host.round{border-radius:100%}.rippleWrapper{position:absolute;top:0;bottom:0;left:0;width:100%;overflow:hidden;border-radius:inherit}.rippleWrapper::before{content:'';display:block;height:100%;width:100%;-webkit-transform:scale(0);transform:scale(0)}.rippleWrapper.show::before{transition:opacity 1.5s;-webkit-transform:scale(2);transform:scale(2);opacity:0}.ripple{position:absolute;background:rgba(0,0,0,.1);border-radius:100%;-webkit-transform:scale(0);transform:scale(0);pointer-events:none}.ripple.show{-webkit-animation:.75s ease-out ripple;animation:.75s ease-out ripple}@-webkit-keyframes ripple{to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}@keyframes ripple{to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}"]
                }] }
    ];
    /** @nocollapse */
    RippleComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    RippleComponent.propDecorators = {
        round: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.position',] }],
        clickEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }],
        PressEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['press', ['$event'],] }],
        isRound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.round',] }]
    };
    return RippleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @return {?}
     */
    ViewportDirective.prototype.check = /**
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @return {?}
     */
    PullDirective.prototype.setupPanListener = /**
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IconComponent = /** @class */ (function () {
    function IconComponent() {
        this._indicatorValue = -1;
        this.state = 'normal';
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
            console.log('set name');
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
        console.log('transform indicator', value);
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
            console.log('icon transition done');
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
        console.log('increment done', event);
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
                    template: "<ion-icon [color]=\"color\" [@rotateAnim]=\"state\" (@rotateAnim.done)=\"rotateAnimDone($event)\" [name]=\"_name\"></ion-icon>\n<span [@scaleAnim]=\"indicatorState\" class=\"indicator\"></span>\n<span *ngIf=\"_indicatorValue > -1\" class=\"indicator-background\">\n</span>\n<span [@scaleAnim]=\"indicatorValueState\" (@scaleAnim.done)=\"incrementDone($event)\" class=\"indicator-value\"><span *ngIf=\"indicatorValue <= 9\">{{indicatorValue}}</span><span *ngIf=\"indicatorValue > 9\">9+</span></span>\n",
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
                    styles: ["ion-icon{padding:0;margin:0;font-size:1.8em}.indicator{position:absolute;width:var(--fiv-dot-width,8px);height:var(--fiv-dot-heigt,8px);background-color:var(--fiv-dot-color,var(--ion-color-primary));top:4px;border-radius:100%;right:8px;z-index:12}.indicator-value{position:absolute;min-width:var(--fiv-dot-width,14px);height:var(--fiv-dot-heigt,14px);background-color:var(--fiv-dot-color,var(--ion-color-primary));color:var(--fiv-dot-color-background,var(--ion-color-light));top:0;border-radius:14px;right:4px;z-index:13}.indicator-value *{position:absolute;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);left:50%;top:50%;font-size:.6em}.indicator-background{position:absolute;width:var(--fiv-dot-width,10px);height:var(--fiv-dot-heigt,10px);background-color:var(--fiv-dot-color-background,transparent);top:3px;border-radius:100%;right:7px;z-index:11}"]
                }] }
    ];
    /** @nocollapse */
    IconComponent.ctorParameters = function () { return []; };
    IconComponent.propDecorators = {
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        indicatorValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return IconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DialogComponent = /** @class */ (function () {
    function DialogComponent(renderer, change) {
        this.renderer = renderer;
        this.change = change;
        this.animationState = 'hidden';
        this.animation = 'slideIn';
        this.verticalAlign = 'bottom';
        this.backdrop = false;
        this.backdropClose = true;
        this.swipeEnabled = true;
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.panSubs = [];
    }
    /**
     * @param {?} elem
     * @param {?} threshold
     * @return {?}
     */
    DialogComponent.prototype.setupPan = /**
     * @param {?} elem
     * @param {?} threshold
     * @return {?}
     */
    function (elem, threshold) {
        var _this = this;
        if (!this.swipeEnabled) {
            return;
        }
        /** @type {?} */
        var hammer = new hammerjs__WEBPACK_IMPORTED_MODULE_6___default.a(elem);
        hammer.get('pan').set({ direction: hammerjs__WEBPACK_IMPORTED_MODULE_6___default.a.DIRECTION_ALL });
        /** @type {?} */
        var panup = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(hammer, 'panup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["throttleTime"])(2))
            .subscribe(function (res) {
            console.log('panup', res);
            _this.onSwipeUp(res, threshold);
        });
        /** @type {?} */
        var pandown = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(hammer, 'pandown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["throttleTime"])(2))
            .subscribe(function (res) {
            console.log('pandown sub', res);
            _this.onSwipeDown(res, threshold);
        });
        /** @type {?} */
        var panend = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(hammer, 'panend pancancel')
            .subscribe(function (res) {
            if (res.distance < threshold) {
                _this.renderer.setStyle(_this.card.nativeElement, 'transform', "translateY(0px)");
            }
        });
        this.panSubs.push(pandown, panup, panend);
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.card);
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.showDialog = /**
     * @return {?}
     */
    function () {
        this.animationState = this.animation + "-" + this.verticalAlign;
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.hideDialog = /**
     * @return {?}
     */
    function () {
        this.animationState = 'hidden';
        this.fivClose.emit(this);
        this.panSubs.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    /**
     * @param {?} event
     * @param {?} threshold
     * @return {?}
     */
    DialogComponent.prototype.onSwipeUp = /**
     * @param {?} event
     * @param {?} threshold
     * @return {?}
     */
    function (event, threshold) {
        console.log(Math.exp(event.distance / 50));
        /** @type {?} */
        var velocity = 1 + Math.exp(event.distance / 50) / 50;
        if (this.verticalAlign === 'top') {
            this.renderer.setStyle(this.card.nativeElement, 'transform', "translateY(-" + event.distance * velocity + "px)");
            if (event.distance > threshold) {
                console.log('swipe down happened');
                this.hideDialog();
            }
        }
    };
    /**
     * @param {?} event
     * @param {?} threshold
     * @return {?}
     */
    DialogComponent.prototype.onSwipeDown = /**
     * @param {?} event
     * @param {?} threshold
     * @return {?}
     */
    function (event, threshold) {
        /** @type {?} */
        var velocity = 1 + Math.exp(event.distance / 50) / 50;
        console.log(velocity);
        if (this.verticalAlign === 'bottom' || this.verticalAlign === 'center') {
            this.renderer.setStyle(this.card.nativeElement, 'transform', "translateY(" + event.distance * velocity + "px)");
            if (event.distance > threshold) {
                console.log('swipe down happened');
                this.hideDialog();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DialogComponent.prototype.onDialogAnimationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'hidden') {
            this.renderer.setStyle(this.card.nativeElement, 'transform', "translateY(0px)");
        }
        if (event.fromState === 'hidden') {
            this.setupPan(this.card.nativeElement, 58);
            this.fivOpen.emit(this);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DialogComponent.prototype.backdropAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(this.backdropElem, event);
        if (event.fromState === 'void') {
            // this.change.detectChanges();
            console.log(this.backdropElem.nativeElement);
            this.setupPan(this.backdropElem.nativeElement, 112);
        }
    };
    DialogComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-dialog',
                    template: "<div #backdrop class=\"backdrop\" [@backdropAnim] (@backdropAnim.done)=\"backdropAnimDone($event)\" (click)=\"backdropClose? hideDialog() : false\"\n  *ngIf=\"animationState !== 'hidden' && backdrop\">\n</div>\n<div #card [@dialogAnim]=\"animationState\" (@dialogAnim.done)=\"onDialogAnimationDone($event)\" mode=\"md\" class=\"gg-dialog\">\n  <ng-content></ng-content>\n</div>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('dialogAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => slideIn-top', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    transform: 'translateY(-100%)'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => slideIn-bottom', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    transform: 'translateY(100%)'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => fadeIn-bottom', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('360ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => fadeIn-top', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('360ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => fadeIn-center', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('360ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => slideIn-center', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    top: '50%',
                                    transform: 'translateY(-25%)',
                                    opacity: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('slideIn-center => hidden', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    // top: '50%',
                                    // transform: 'translateY(+50%)',
                                    opacity: 0
                                }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => hidden', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('240ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                display: 'none',
                                opacity: '0',
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('slideIn-top', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                top: 0,
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('slideIn-bottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                bottom: 0
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('fadeIn-top', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                top: 0
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('fadeIn-bottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                bottom: 0
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('fadeIn-center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                top: '50%',
                                transform: 'translateY(-50%)',
                                'margin-top': 0
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('slideIn-center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                top: '50%',
                                transform: 'translateY(-50%)',
                                'margin-top': 0
                            })),
                        ]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('backdropAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('120ms 100ms cubic-bezier(0.32,1,0.23,1)'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0
                                }),
                            ])
                        ])
                    ],
                    styles: [":host{position:absolute;z-index:5002;margin:0;border-radius:0;width:100%}.top{top:0}.bottom{bottom:0}.floating{margin:16px 20px;border-radius:8px;width:calc(100% - 40px);box-shadow:0 4px 16px rgba(0,0,0,.12)}.fullscreen{margin:0;border-radius:0;width:100%;height:100%;box-shadow:0 4px 16px rgba(0,0,0,.12)}.rounded-top{border-bottom-left-radius:12px;border-bottom-right-radius:12px}.rounded-bottom{border-top-left-radius:12px;border-top-right-radius:12px}.backdrop{background:rgba(0,0,0,.22);position:absolute;top:0;bottom:0;left:0;right:0;z-index:5001}"]
                }] }
    ];
    /** @nocollapse */
    DialogComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    DialogComponent.propDecorators = {
        animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backdropClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        swipeEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fivOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        card: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['card',] }],
        backdropElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['backdrop',] }]
    };
    return DialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MyHammerConfig = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_10__["__extends"])(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = /** @type {?} */ ({
            pan: { direction: hammerjs__WEBPACK_IMPORTED_MODULE_6__["Hammer"].DIRECTION_VERTICAL, threshold: 3 },
        });
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
                        DialogComponent
                    ],
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
                        DialogComponent
                    ]
                },] }
    ];
    return FivethreeCoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml2ZXRocmVlLWNvcmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvc3RlcC9zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9hbmltYXRpb25zL2FuaW1hdGlvbnMudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvc3RlcC1oZWFkZXIvc3RlcC1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvc3RlcC1jb250ZW50L3N0ZXAtY29udGVudC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvc3RlcHBlci1ob3Jpem9udGFsL3N0ZXBwZXItaG9yaXpvbnRhbC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9yb3V0ZXItaXRlbS9yb3V0ZXItaXRlbS5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvY29sbGFwc2FibGUtbWVudS9jb2xsYXBzYWJsZS1tZW51LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9jb2xsYXBzYWJsZS1tZW51L2NvbGxhcHNhYmxlLW1lbnUtYnV0dG9uL2NvbGxhcHNhYmxlLW1lbnUtYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvYm90dG9tLXNoZWV0L2RyYXdlci1zdGF0ZS50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9ib3R0b20tc2hlZXQvYm90dG9tLXNoZWV0LWNvbnRlbnQvYm90dG9tLXNoZWV0LWNvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL3Rvb2xiYXItc2VhcmNoL3Rvb2xiYXItc2VhcmNoLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9sb2FkaW5nL2xvYWRpbmcuc2VydmljZS50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9sb2FkaW5nLXByb2dyZXNzLWJhci9sb2FkaW5nLXByb2dyZXNzLWJhci5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvbG9hZGluZy1idXR0b24vbG9hZGluZy1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2xvYWRpbmctcmVmcmVzaGVyLWNvbnRlbnQvbG9hZGluZy1yZWZyZXNoZXItY29udGVudC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvbG9hZGluZy1jb250ZW50L2xvYWRpbmctY29udGVudC5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvbG9hZGluZy1mYWIvbG9hZGluZy1mYWIuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZGlyZWN0aXZlcy9pZi1wbGF0Zm9ybS5kaXJlY3RpdmUudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvZGlyZWN0aXZlcy9jZW50ZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2RpcmVjdGl2ZXMvcGVybWlzc2lvbnMuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL3JpcHBsZS9yaXBwbGUuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2RpcmVjdGl2ZXMvdmlld3BvcnQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2NvcmUvbGliL2RpcmVjdGl2ZXMvcHVsbC5kaXJlY3RpdmUudHMiLCJuZzovL0BmaXZldGhyZWUvY29yZS9saWIvaWNvbi9pY29uLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9jb3JlL2xpYi9maXZldGhyZWUuY29yZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1zdGVwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBpc0xhc3QgPSBmYWxzZTtcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcbiAgQElucHV0KCkgc3VidGl0bGUgPSAnJztcblxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBjb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgYW5pbWF0ZSwgcXVlcnksIHN0YWdnZXIsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgY29uc3Qgcm90YXRlQW5pbWF0aW9uID0gdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICB0cmFuc2l0aW9uKCdub3JtYWwgPT4gcm90YXRlJywgW1xuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbigncm90YXRlID0+IG5vcm1hbCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicpXG4gICAgXSksXG4gICAgc3RhdGUoJ3JvdGF0ZScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlWig0NWRlZyknIH0pKSxcbiAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGVaKDBkZWcpJyB9KSlcbl0pO1xuXG5leHBvcnQgY29uc3QgbGlzdEFuaW1hdGlvbiA9IHRyaWdnZXIoJ2xpc3RBbmltJywgW1xuICAgIHN0YXRlKCdvcGVuJywgc3R5bGUoeyBoZWlnaHQ6ICcqJyB9KSksXG4gICAgc3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnMCcgfSkpLFxuICAgIHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgW1xuICAgICAgICBhbmltYXRlKCczNTBtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKVxuICAgIF0pXG5dKTtcblxuZXhwb3J0IGNvbnN0IGFycm93QW5pbWF0aW9uID0gdHJpZ2dlcignYXJyb3dBbmltJywgW1xuICAgIHN0YXRlKCdvcGVuJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdyb3RhdGVaKC0xODBkZWcpJyB9KSksXG4gICAgc3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAncm90YXRlWigwZGVnKScgfSkpLFxuICAgIHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgW1xuICAgICAgICBhbmltYXRlKCczNTBtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKVxuICAgIF0pXG5dKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcm90YXRlQW5pbWF0aW9uIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LXN0ZXAtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXAtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcC1oZWFkZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW3JvdGF0ZUFuaW1hdGlvbl1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBpY29uU3RhdGUgPSAnbm9ybWFsJztcbiAgdGVtcEljb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgIHRoaXMudGVtcEljb24gPSB0aGlzLmljb247XG4gICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgdGhpcy5pY29uU3RhdGUgPSAnbm9ybWFsJztcbiAgICB9XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLmljb25TdGF0ZSA9ICdyb3RhdGUnO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pY29uID0gdGhpcy50ZW1wSWNvbjtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGxpc3RBbmltYXRpb24gfSBmcm9tICcuLi9hbmltYXRpb25zL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtZXhwYW5kYWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbmRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5kYWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbbGlzdEFuaW1hdGlvbl1cbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5kYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGlzT3BlbiA9IGZhbHNlO1xuICBzdGF0ZSA9ICdjbG9zZWQnO1xuICBAT3V0cHV0KCkgZml2V2lsbE9wZW46IEV2ZW50RW1pdHRlcjxFeHBhbmRhYmxlQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdkRpZE9wZW46IEV2ZW50RW1pdHRlcjxFeHBhbmRhYmxlQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdldpbGxDbG9zZTogRXZlbnRFbWl0dGVyPEV4cGFuZGFibGVDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2RGlkQ2xvc2U6IEV2ZW50RW1pdHRlcjxFeHBhbmRhYmxlQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLmZpdldpbGxPcGVuLmVtaXQodGhpcyk7XG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgIHRoaXMuc3RhdGUgPSAnb3Blbic7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmZpdldpbGxDbG9zZS5lbWl0KHRoaXMpO1xuICAgIGNvbnNvbGUubG9nKCdjbG9zZScpO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZSA9ICdjbG9zZWQnO1xuICB9XG5cbiAgb25BbmltYXRpb25FbmQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnY2xvc2VkJykge1xuICAgICAgdGhpcy5maXZEaWRPcGVuLmVtaXQodGhpcyk7XG4gICAgfSBlbHNlIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdvcGVuJykge1xuICAgICAgdGhpcy5maXZEaWRDbG9zZS5lbWl0KHRoaXMpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0ZXBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLi9zdGVwLWhlYWRlci9zdGVwLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhwYW5kYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtc3RlcC1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXAtY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0ZXAtY29udGVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzTGFzdCA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBzdWJ0aXRsZSA9ICcnO1xuICBAT3V0cHV0KCkgZml2RGlkT3BlbjogRXZlbnRFbWl0dGVyPFN0ZXBDb250ZW50Q29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdkRpZENsb3NlOiBFdmVudEVtaXR0ZXI8U3RlcENvbnRlbnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3NlbGYnKSBzdGVwOiBFeHBhbmRhYmxlQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdoZWFkZXInKSBoZWFkZXI6IFN0ZXBIZWFkZXJDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zdGVwLm9wZW4oKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc3RlcC5jbG9zZSgpO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgdGhpcy5oZWFkZXIuY29tcGxldGUoKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaGVhZGVyLnJlc2V0KCk7XG4gIH1cblxuICBhZnRlckNsb3NlKCkge1xuICAgIHRoaXMuZml2RGlkQ2xvc2UuZW1pdCh0aGlzKTtcbiAgfVxuXG4gIGFmdGVyT3BlbigpIHtcbiAgICB0aGlzLmZpdkRpZE9wZW4uZW1pdCh0aGlzKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgUXVlcnlMaXN0LCBJbnB1dCwgVmlld0NoaWxkLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RlcENvbXBvbmVudCB9IGZyb20gJy4uL3N0ZXAvc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVzIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgcm90YXRlQW5pbWF0aW9uIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LXN0ZXBwZXItaG9yaXpvbnRhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwcGVyLWhvcml6b250YWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwcGVyLWhvcml6b250YWwuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW3JvdGF0ZUFuaW1hdGlvbl1cblxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVySG9yaXpvbnRhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY29udGVudHM6IFF1ZXJ5TGlzdDxTdGVwQ29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZCgnc2xpZGVzJykgc2xpZGVzOiBTbGlkZXM7XG4gIEBPdXRwdXQoKSBmaXZTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2xpZGVzLmxvY2tTd2lwZXModHJ1ZSk7XG4gIH1cblxuICBjbG9zZSgpOiBhbnkge1xuICAgIHRoaXMuc2xpZGVzLnNsaWRlVG8oMCk7XG4gIH1cbiAgb3BlbihpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICBjb25zb2xlLmxvZygnb3BlbiBzbGlkZScsIGluZGV4KTtcbiAgICB0aGlzLnNsaWRlcy5sb2NrU3dpcGVzKGZhbHNlKTtcbiAgICB0aGlzLnNsaWRlcy5zbGlkZVRvKGluZGV4KTtcbiAgICB0aGlzLnNsaWRlcy5sb2NrU3dpcGVzKHRydWUpO1xuXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgU3RlcENvbXBvbmVudCB9IGZyb20gJy4vLi4vc3RlcC9zdGVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkcmVuLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RlcENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi9zdGVwLWNvbnRlbnQvc3RlcC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGVwcGVySG9yaXpvbnRhbENvbXBvbmVudCB9IGZyb20gJy4uL3N0ZXBwZXItaG9yaXpvbnRhbC9zdGVwcGVyLWhvcml6b250YWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LXN0ZXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcHBlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0ZXBwZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAQ29udGVudENoaWxkcmVuKFN0ZXBDb21wb25lbnQpIGNvbnRlbnRzOiBRdWVyeUxpc3Q8U3RlcENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGRyZW4oU3RlcENvbnRlbnRDb21wb25lbnQpIHN0ZXBzOiBRdWVyeUxpc3Q8U3RlcENvbnRlbnRDb21wb25lbnQ+O1xuICBAVmlld0NoaWxkKFN0ZXBwZXJIb3Jpem9udGFsQ29tcG9uZW50KSBob3Jpem9udGFsOiBTdGVwcGVySG9yaXpvbnRhbENvbXBvbmVudDtcbiAgQElucHV0KCkgbW9kZTogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICd2ZXJ0aWNhbCc7XG5cbiAgY3VycmVudEluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb3BlbihpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgY29uc29sZS5sb2coJysjKyMrJyk7XG4gICAgICB0aGlzLmhvcml6b250YWwub3BlbihpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF0ub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICAgIHRoaXMuaG9yaXpvbnRhbC5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IC0gMTtcbiAgICAgIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XS5jbG9zZSgpO1xuICAgIH1cblxuICB9XG5cbiAgc2VsZWN0KGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0JywgaW5kZXgpO1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5jb250ZW50cy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xuXG4gICAgICB9XG4gICAgICB0aGlzLm9wZW4oaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlQWxsKCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgdGhpcy5ob3Jpem9udGFsLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgICAgc3RlcC5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpIHtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5jdXJyZW50SW5kZXggPCB0aGlzLnN0ZXBzLmxlbmd0aCA/IHRoaXMuY3VycmVudEluZGV4ICsgMSA6IC0xO1xuICAgIGNvbnNvbGUubG9nKCduZXh0IGluZGV4JywgbmV4dCk7XG4gICAgdGhpcy5zZWxlY3QobmV4dCk7XG4gIH1cblxuICBwcmV2aW91cygpIHtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5jdXJyZW50SW5kZXggPiAwID8gdGhpcy5jdXJyZW50SW5kZXggKyAtMSA6IC0xO1xuICAgIGNvbnNvbGUubG9nKCduZXh0IGluZGV4JywgbmV4dCk7XG4gICAgdGhpcy5zZWxlY3QobmV4dCk7XG4gIH1cblxuICBjb21wbGV0ZVN0ZXAoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgLy8gbm90IHlldCBpbXBsZXRlbnRlZFxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XS5jb21wbGV0ZSgpO1xuXG4gICAgfVxuICB9XG5cbiAgcmVzZXQoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgLy8gbm90IHlldCBpbXBsZXRlbnRlZFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF0ucmVzZXQoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZywgSG9zdCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtcm91dGVyLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcm91dGVyLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yb3V0ZXItaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRlckl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIG5hdmlnYXRlID0gdHJ1ZTtcblxuICBASW5wdXQoKSBwYWdlVXJsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgYWN0aXZlIHN0YXRlLlxuICAgKiBEZWZhdWx0IHZhbHVlIGlzOiBgXCJsZWZ0XCJgXG4gICAqL1xuICBASW5wdXQoKSBwb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ3RvcCcgfCAnb3V0bGluZScgPSAnbGVmdCc7XG5cbiAgLyoqXG4gICAqIFRoZSBzaGFwZSBvZiB0aGUgYWN0aXZlIHN0YXRlLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlOiBgXCJsaW5lXCJgLCBgXCJkb3RcImAgYW5kIGFueSBpb25pY29uLlxuICAgKiBEZWZhdWx0IHZhbHVlIGlzOiBgXCJsaW5lXCJgXG4gICAqL1xuICBASW5wdXQoKSBzaGFwZTogJ2xpbmUnIHwgJ2RvdCcgfCBzdHJpbmcgPSAnbGluZSc7XG5cbiAgQElucHV0KCkgcm91dGVBY3RpdmUgPSB0cnVlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25jbGljaygpIHtcbiAgICBpZiAodGhpcy5uYXZpZ2F0ZSAmJiB0aGlzLnBhZ2VVcmwpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5wYWdlVXJsKTtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgZ2V0IGNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5wb3NpdGlvbn0gJHt0aGlzLnNoYXBlfWA7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpIGdldCBhY3RpdmVDbGFzcygpIHtcbiAgICBjb25zdCBpc0FjdGl2ZSA9ICh0aGlzLnJvdXRlQWN0aXZlICYmIHRoaXMucm91dGVyLnVybC5zdGFydHNXaXRoKHRoaXMucGFnZVVybCkpXG4gICAgICB8fCB0aGlzLmFjdGl2ZTtcbiAgICByZXR1cm4gaXNBY3RpdmU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgaGFzU2hhcGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcGUgPT09ICdsaW5lJ1xuICAgICAgfHwgdGhpcy5zaGFwZSA9PT0gJ2RvdCc7XG4gIH1cblxuICBnZXRDbGFzc2VzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5oYXNTaGFwZSgpID8gW3RoaXMucG9zaXRpb24sIHRoaXMuc2hhcGVdIDogW3RoaXMucG9zaXRpb25dO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZVN0eWxlLCBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZpdkNvbGxhcHNlTWVudV0nLFxuICBleHBvcnRBczogJ21lbnVDb2xsYXBzZSdcbn0pXG5leHBvcnQgY2xhc3MgQ29sbGFwc2FibGVNZW51RGlyZWN0aXZlIHtcblxuICBjb2xsYXBzZWQgPSBmYWxzZTtcbiAgaG92ZXJpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgaG92ZXJNZW51ID0gdHJ1ZTtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7IH1cblxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUnKVxuICBnZXQgbXlTdHlsZSgpOiBTYWZlU3R5bGUge1xuICAgIGlmICh0aGlzLmNvbGxhcHNlZCAmJiAodGhpcy5wbGF0Zm9ybS5pcygndGFibGV0JykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnZWxlY3Ryb24nKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdkZXNrdG9wJykpKSB7XG5cbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplclxuICAgICAgICAuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCdtaW4td2lkdGg6IDY0cHg7IG1heC13aWR0aDogNjRweDsgLS1ib3JkZXI6IDA7IHRyYW5zaXRpb246IGFsbCBjdWJpYy1iZXppZXIoLjU1LDAsLjEsMSkgMjAwbXM7Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJy0tYm9yZGVyOiAwOyB0cmFuc2l0aW9uOiBhbGwgY3ViaWMtYmV6aWVyKC41NSwwLC4xLDEpICAyNTBtczsnKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJykgaG92ZXIoKSB7XG4gICAgaWYgKHRoaXMuY29sbGFwc2VkICYmICF0aGlzLmhvdmVyaW5nICYmIHRoaXMuaG92ZXJNZW51KSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIHRoaXMuaG92ZXJpbmcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKSBibHVyKCkge1xuICAgIGlmICghdGhpcy5ob3Zlck1lbnUpIHsgcmV0dXJuOyB9XG4gICAgaWYgKCF0aGlzLmNvbGxhcHNlZCAmJiB0aGlzLmhvdmVyaW5nKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICAgIHRoaXMuaG92ZXJpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBmaXZDb2xsYXBzZU1lbnUoY29sbGFwc2U6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbGxhcHNlZCA9IGNvbGxhcHNlO1xuICB9XG5cblxuICB0b2dnbGVNZW51KCkge1xuICAgIGlmICh0aGlzLmhvdmVyaW5nKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIHRoaXMuaG92ZXJpbmcgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuY29sbGFwc2VkID0gZmFsc2U7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmNvbGxhcHNlZCA9IHRydWU7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xsYXBzYWJsZU1lbnVEaXJlY3RpdmUgfSBmcm9tICcuLi9jb2xsYXBzYWJsZS1tZW51LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1jb2xsYXBzYWJsZS1tZW51LWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xsYXBzYWJsZS1tZW51LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbGxhcHNhYmxlLW1lbnUtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29sbGFwc2FibGVNZW51QnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBtZW51OiBDb2xsYXBzYWJsZU1lbnVEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uQ2xpY2soKSB7XG4gICAgY29uc29sZS5sb2coJyMjIycsIHRoaXMubWVudSk7XG4gICAgdGhpcy5tZW51LnRvZ2dsZU1lbnUoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQYXNzd29yZENvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtcGFzc3dvcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXNzd29yZC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUlxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGhpZGVJY29uID0gJ2V5ZS1vZmYnO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBwb3NpdGlvbjogJ2Zsb2F0aW5nJyB8ICdpbmxpbmUnIHwgJ2ZpeGVkJyB8ICdzdGFja2VkJyA9ICdmbG9hdGluZyc7XG4gIEBJbnB1dCgpIHNob3c6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dJY29uID0gJ2V5ZSc7XG4gIEBJbnB1dCgpIGNsZWFyT25FZGl0ID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfcGFzc3dvcmRWYWx1ZSA9ICcnO1xuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdG9nZ2xlU2hvd1Bhc3N3b3JkKCkge1xuICAgIHRoaXMuc2hvdyA9ICF0aGlzLnNob3c7XG4gIH1cblxuICBnZXQgcGFzc3dvcmRWYWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9wYXNzd29yZFZhbHVlO1xuICB9XG5cbiAgc2V0IHBhc3N3b3JkVmFsdWUodjogYW55KSB7XG4gICAgaWYgKHYgIT09IHRoaXMuX3Bhc3N3b3JkVmFsdWUpIHtcbiAgICAgIHRoaXMuX3Bhc3N3b3JkVmFsdWUgPSB2O1xuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuX3Bhc3N3b3JkVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSB0aGlzLl9wYXNzd29yZFZhbHVlKSB7XG4gICAgICB0aGlzLl9wYXNzd29yZFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbn1cbiIsImV4cG9ydCBlbnVtIERyYXdlclN0YXRlIHtcbiAgICBCb3R0b20sXG4gICAgRG9ja2VkLFxuICAgIFRvcFxufVxuIiwiaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhd2VyU3RhdGUgfSBmcm9tICcuLi9kcmF3ZXItc3RhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtYm90dG9tLXNoZWV0LWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYm90dG9tLXNoZWV0LWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ib3R0b20tc2hlZXQtY29udGVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0Q29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcm91bmRlZCA9IHRydWU7XG4gIEBJbnB1dCgpIGhhbmRsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGZsb2F0ID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgZml2SGFuZGxlQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGN1cnJlbnRTdGF0ZTogRHJhd2VyU3RhdGU7XG4gIHN0YXRlcyA9IERyYXdlclN0YXRlO1xuXG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5yb3VuZGVkJykgZ2V0IGlzUm91bmRlZCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuY3VycmVudFN0YXRlKSB7XG4gICAgICBjYXNlIERyYXdlclN0YXRlLlRvcDogcmV0dXJuIGZhbHNlO1xuICAgICAgY2FzZSBEcmF3ZXJTdGF0ZS5Eb2NrZWQ6IHJldHVybiB0aGlzLnJvdW5kZWQ7XG4gICAgICBjYXNlIERyYXdlclN0YXRlLkJvdHRvbTogcmV0dXJuIHRoaXMucm91bmRlZCAmJiAhdGhpcy5mbG9hdDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlJykgZ2V0IHN0eWxlcygpIHtcbiAgICBpZiAoISh0aGlzLmZsb2F0ICYmIHRoaXMuY3VycmVudFN0YXRlID09PSBEcmF3ZXJTdGF0ZS5Cb3R0b20pKSB7XG4gICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO2ApO1xuICAgIH1cbiAgfVxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShzdGF0ZTogRHJhd2VyU3RhdGUpOiBhbnkge1xuICAgIGNvbnNvbGUubG9nKCdjb250ZW50IGdvdCBzdGF0ZScsIHN0YXRlKTtcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgY2xpY2soKSB7XG4gICAgdGhpcy5maXZIYW5kbGVDbGljay5lbWl0KCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQm90dG9tU2hlZXRDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9ib3R0b20tc2hlZXQtY29udGVudC9ib3R0b20tc2hlZXQtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBDb250ZW50Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21Db250cm9sbGVyLCBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IERyYXdlclN0YXRlIH0gZnJvbSAnLi9kcmF3ZXItc3RhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtYm90dG9tLXNoZWV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JvdHRvbS1zaGVldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JvdHRvbS1zaGVldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZG9ja2VkSGVpZ2h0ID0gODA7XG5cbiAgQElucHV0KCkgc2hvdWxkQm91bmNlID0gdHJ1ZTtcblxuICBASW5wdXQoKSBkaXN0YW5jZVRvcCA9IDU2O1xuXG4gIEBJbnB1dCgpIHRyYW5zaXRpb24gPSAnMC4yNXMgZWFzZS1pbi1vdXQnO1xuXG4gIEBJbnB1dCgpIHN0YXRlOiBEcmF3ZXJTdGF0ZSA9IERyYXdlclN0YXRlLkJvdHRvbTtcblxuICBASW5wdXQoKSBtaW5pbXVtSGVpZ2h0ID0gMjQ7XG5cbiAgQE91dHB1dCgpIHN0YXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RHJhd2VyU3RhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3ZXJTdGF0ZT4oKTtcbiAgQE91dHB1dCgpIGZpdk9wZW46IEV2ZW50RW1pdHRlcjxCb3R0b21TaGVldENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEJvdHRvbVNoZWV0Q29tcG9uZW50PigpO1xuICBAT3V0cHV0KCkgZml2RG9ja2VkOiBFdmVudEVtaXR0ZXI8Qm90dG9tU2hlZXRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxCb3R0b21TaGVldENvbXBvbmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdkNsb3NlOiBFdmVudEVtaXR0ZXI8Qm90dG9tU2hlZXRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxCb3R0b21TaGVldENvbXBvbmVudD4oKTtcblxuICBAQ29udGVudENoaWxkKEJvdHRvbVNoZWV0Q29udGVudENvbXBvbmVudCkgY29udGVudDogQm90dG9tU2hlZXRDb250ZW50Q29tcG9uZW50O1xuXG4gIHByaXZhdGUgX3N0YXJ0UG9zaXRpb25Ub3A6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBfQk9VTkNFX0RFTFRBID0gMzA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2RvbUN0cmw6IERvbUNvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7IH1cblxuXG4gIC8vIEBIb3N0QmluZGluZygnc3R5bGUnKSBnZXQgc3R5bGVzKCkge1xuICAvLyAgIGlmICh0aGlzLnJvdW5kZWQpIHtcbiAgLy8gICAgIHJldHVybiB0aGlzLnNhbml0aXplclxuICAvLyAgICAgICAuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCcgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDsgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7Jyk7XG4gIC8vICAgfVxuXG4gIC8vIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5fZWxlbWVudCwgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maXYtYm90dG9tLWRyYXdlci1zY3JvbGxhYmxlLWNvbnRlbnQgLnNjcm9sbC15JykpO1xuICAgIC8vIHRoaXMuX3JlbmRlcmVyLlxuICAgIC8vICAgc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maXYtYm90dG9tLWRyYXdlci1zY3JvbGxhYmxlLWNvbnRlbnQgLnNjcm9sbC15JyksICd0b3VjaC1hY3Rpb24nLCAnbm9uZScpO1xuICAgIHRoaXMuX3NldERyYXdlclN0YXRlKHRoaXMuc3RhdGUpO1xuXG4gICAgY29uc3QgaGFtbWVyID0gbmV3IEhhbW1lcih0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIGhhbW1lci5nZXQoJ3BhbicpLnNldCh7IGVuYWJsZTogdHJ1ZSwgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX1ZFUlRJQ0FMIH0pO1xuICAgIGhhbW1lci5vbigncGFuIHBhbnN0YXJ0IHBhbmVuZCcsIChldjogYW55KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2LnR5cGUpIHtcbiAgICAgICAgY2FzZSAncGFuc3RhcnQnOlxuICAgICAgICAgIHRoaXMuX2hhbmRsZVBhblN0YXJ0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BhbmVuZCc6XG4gICAgICAgICAgdGhpcy5faGFuZGxlUGFuRW5kKGV2KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLl9oYW5kbGVQYW4oZXYpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jb250ZW50LmZpdkhhbmRsZUNsaWNrXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgY2FzZSBEcmF3ZXJTdGF0ZS5Cb3R0b206IHJldHVybiB0aGlzLmRvY2soKTtcbiAgICAgICAgICBjYXNlIERyYXdlclN0YXRlLkRvY2tlZDogcmV0dXJuIHRoaXMub3BlbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghY2hhbmdlcy5zdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zZXREcmF3ZXJTdGF0ZShjaGFuZ2VzLnN0YXRlLmN1cnJlbnRWYWx1ZSk7XG4gICAgdGhpcy51cGRhdGVDb250ZW50KGNoYW5nZXMuc3RhdGUuY3VycmVudFZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZUNvbnRlbnQoc3RhdGU6IERyYXdlclN0YXRlKSB7XG4gICAgaWYgKHRoaXMuY29udGVudCkge1xuICAgICAgdGhpcy5jb250ZW50LnVwZGF0ZVN0YXRlKHN0YXRlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXREcmF3ZXJTdGF0ZShzdGF0ZTogRHJhd2VyU3RhdGUpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgdGhpcy50cmFuc2l0aW9uKTtcbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICBjYXNlIERyYXdlclN0YXRlLkJvdHRvbTpcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSgnY2FsYygxMDB2aCAtICcgKyB0aGlzLm1pbmltdW1IZWlnaHQgKyAncHgpJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBEcmF3ZXJTdGF0ZS5Eb2NrZWQ6XG4gICAgICAgIHRoaXMuX3NldFRyYW5zbGF0ZVkoKHRoaXMuX3BsYXRmb3JtLmhlaWdodCgpIC0gdGhpcy5kb2NrZWRIZWlnaHQpICsgJ3B4Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSh0aGlzLmRpc3RhbmNlVG9wICsgJ3B4Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUGFuU3RhcnQoKSB7XG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvblRvcCA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVQYW5FbmQoZXYpIHtcbiAgICBpZiAodGhpcy5zaG91bGRCb3VuY2UgJiYgZXYuaXNGaW5hbCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsIHRoaXMudHJhbnNpdGlvbik7XG5cbiAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgICBjYXNlIERyYXdlclN0YXRlLkRvY2tlZDpcbiAgICAgICAgICB0aGlzLl9oYW5kbGVEb2NrZWRQYW5FbmQoZXYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIERyYXdlclN0YXRlLlRvcDpcbiAgICAgICAgICB0aGlzLl9oYW5kbGVUb3BQYW5FbmQoZXYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuX2hhbmRsZUJvdHRvbVBhbkVuZChldik7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RhdGVDaGFuZ2UuZW1pdCh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVRvcFBhbkVuZChldikge1xuICAgIGlmIChldi5kZWx0YVkgPiB0aGlzLl9CT1VOQ0VfREVMVEEpIHtcbiAgICAgIGlmICh0aGlzLm1pbmltdW1IZWlnaHQgPT09IHRoaXMuZG9ja2VkSGVpZ2h0KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBEcmF3ZXJTdGF0ZS5Cb3R0b20pIHtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gRHJhd2VyU3RhdGUuQm90dG9tO1xuICAgICAgICAgIHRoaXMuZml2Q2xvc2UuZW1pdCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IERyYXdlclN0YXRlLkRvY2tlZCkge1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Eb2NrZWQ7XG4gICAgICAgICAgdGhpcy5maXZEb2NrZWQuZW1pdCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFRyYW5zbGF0ZVkodGhpcy5kaXN0YW5jZVRvcCArICdweCcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZURvY2tlZFBhbkVuZChldikge1xuICAgIGNvbnN0IGFic0RlbHRhWSA9IE1hdGguYWJzKGV2LmRlbHRhWSk7XG4gICAgaWYgKGFic0RlbHRhWSA+IHRoaXMuX0JPVU5DRV9ERUxUQSAmJiBldi5kZWx0YVkgPCAwKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gRHJhd2VyU3RhdGUuVG9wKSB7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IERyYXdlclN0YXRlLlRvcDtcbiAgICAgICAgdGhpcy5maXZPcGVuLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFic0RlbHRhWSA+IHRoaXMuX0JPVU5DRV9ERUxUQSAmJiBldi5kZWx0YVkgPiAwKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gRHJhd2VyU3RhdGUuQm90dG9tKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Cb3R0b207XG4gICAgICAgIHRoaXMuZml2Q2xvc2UuZW1pdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKCh0aGlzLl9wbGF0Zm9ybS5oZWlnaHQoKSAtIHRoaXMuZG9ja2VkSGVpZ2h0KSArICdweCcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUJvdHRvbVBhbkVuZChldikge1xuICAgIGlmICgtZXYuZGVsdGFZID4gdGhpcy5fQk9VTkNFX0RFTFRBKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gRHJhd2VyU3RhdGUuRG9ja2VkKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Eb2NrZWQ7XG4gICAgICAgIHRoaXMuZml2RG9ja2VkLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSgnY2FsYygxMDB2aCAtICcgKyB0aGlzLm1pbmltdW1IZWlnaHQgKyAncHgpJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUGFuKGV2KSB7XG4gICAgY29uc3QgcG9pbnRlclkgPSBldi5jZW50ZXIueTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgJ25vbmUnKTtcbiAgICBpZiAocG9pbnRlclkgPiAwICYmIHBvaW50ZXJZIDwgdGhpcy5fcGxhdGZvcm0uaGVpZ2h0KCkpIHtcbiAgICAgIGlmIChldi5hZGRpdGlvbmFsRXZlbnQgPT09ICdwYW51cCcgfHwgZXYuYWRkaXRpb25hbEV2ZW50ID09PSAncGFuZG93bicpIHtcbiAgICAgICAgY29uc3QgbmV3VG9wID0gdGhpcy5fc3RhcnRQb3NpdGlvblRvcCArIGV2LmRlbHRhWTtcbiAgICAgICAgaWYgKG5ld1RvcCA+PSB0aGlzLmRpc3RhbmNlVG9wKSB7XG4gICAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWShuZXdUb3AgKyAncHgnKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdUb3AgPCB0aGlzLmRpc3RhbmNlVG9wKSB7XG4gICAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSh0aGlzLmRpc3RhbmNlVG9wICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1RvcCA+IHRoaXMuX3BsYXRmb3JtLmhlaWdodCgpIC0gdGhpcy5taW5pbXVtSGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSgodGhpcy5fcGxhdGZvcm0uaGVpZ2h0KCkgLSB0aGlzLm1pbmltdW1IZWlnaHQpICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRUcmFuc2xhdGVZKHZhbHVlKSB7XG4gICAgdGhpcy5fZG9tQ3RybC53cml0ZSgoKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgnICsgdmFsdWUgKyAnKScpO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnN0YXRlID0gRHJhd2VyU3RhdGUuVG9wO1xuICAgIHRoaXMuX3NldERyYXdlclN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMudXBkYXRlQ29udGVudCh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Cb3R0b207XG4gICAgdGhpcy5fc2V0RHJhd2VyU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy51cGRhdGVDb250ZW50KHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgZG9jaygpIHtcbiAgICB0aGlzLnN0YXRlID0gRHJhd2VyU3RhdGUuRG9ja2VkO1xuICAgIHRoaXMuX3NldERyYXdlclN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMudXBkYXRlQ29udGVudCh0aGlzLnN0YXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgUmVuZGVyZXIyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlLCBzdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtdG9vbGJhci1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbGJhci1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b29sYmFyLXNlYXJjaC5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2VhcmNoYmFyQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3NtYWxsID0+IG5vcm1hbCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdub3JtYWwgPT4gc21hbGwnLCBbXG4gICAgICAgIGFuaW1hdGUoJzk1bXMgZWFzZS1pbicpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdzbWFsbCcsIHN0eWxlKHsgd2lkdGg6ICc5MnB4JyB9KSksXG4gICAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyB3aWR0aDogJzEwMCUnIH0pKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3JvdGF0ZUFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pLFxuICAgICAgICBhbmltYXRlKCc4NW1zIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3JvdGF0ZVooMGRlZyknIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzY1bXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKScgfSkpXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCd0aXRsZUFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0yMCUpJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSkpXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIHNlYXJjaGluZyA9IGZhbHNlO1xuICB0aXRsZVZpc2libGUgPSB0cnVlO1xuICBjbG9zZUJ1dHRvblZpc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgc21hbGwgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGZpdklucHV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHN0YXRlOiAnc21hbGwnIHwgJ25vcm1hbCcgPSAnbm9ybWFsJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuc21hbGwgPyAnc21hbGwnIDogJ25vcm1hbCc7XG4gIH1cblxuICBzaHJpbmsoKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICdzbWFsbCc7XG4gIH1cbiAgZ3JvdygpIHtcbiAgICB0aGlzLnN0YXRlID0gJ25vcm1hbCc7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ29uIGNoYW5nZXMnLCBjaGFuZ2VzKTtcbiAgICBpZiAoY2hhbmdlcy5zbWFsbC5wcmV2aW91c1ZhbHVlID09PSB0cnVlICYmIGNoYW5nZXMuc21hbGwuY3VycmVudFZhbHVlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdub3JtYWwnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5zbWFsbC5wcmV2aW91c1ZhbHVlID09PSBmYWxzZSAmJiBjaGFuZ2VzLnNtYWxsLmN1cnJlbnRWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdzbWFsbCc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgb3BlblNlYXJjaGJhcigpIHtcbiAgICBpZiAodGhpcy5zbWFsbCkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdub3JtYWwnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9vcGVuKCk7XG4gIH1cblxuXG5cbiAgc2VhcmNoQmFyU3RhdGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnc2VhcmNoYmFyU3RhdGUnLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ25vcm1hbCcgJiYgZXZlbnQudG9TdGF0ZSA9PT0gJ3NtYWxsJykge1xuXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3NtYWxsJyAmJiBldmVudC50b1N0YXRlID09PSAnbm9ybWFsJykge1xuICAgICAgdGhpcy5fb3BlbigpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbigpIHtcbiAgICB0aGlzLnNlYXJjaGluZyA9IHRydWU7XG4gICAgdGhpcy50aXRsZVZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLm9wZW4uZW1pdCgpO1xuICB9XG5cbiAgY2xvc2VTZWFyY2hiYXIoKSB7XG4gICAgaWYgKHRoaXMuc21hbGwpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnc21hbGwnO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlQnV0dG9uVmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuZml2Q2xvc2UuZW1pdCgpO1xuXG4gIH1cblxuXG4gIHNlYXJjaEFuaW1Eb25lKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJyMjIycsIGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlICE9PSAndm9pZCcpIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b25WaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjbG9zZUFuaW1Eb25lKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJyMjIycsIGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlICE9PSAndm9pZCcpIHtcbiAgICAgIHRoaXMuc2VhcmNoaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc2VhY2hiYXJBbmltRG9uZShldmVudCwgaW5wdXQpIHtcbiAgICBjb25zb2xlLmxvZygnISEhJywgZXZlbnQpO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xuICAgICAgdGhpcy50aXRsZVZpc2libGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdTZXJ2aWNlIHtcblxuICBwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICBwdWJsaWMgbG9hZENoYW5nZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0aGlzLmxvYWRpbmcpO1xuICBwdWJsaWMgY29tcGxldGVDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odGhpcy5pc0NvbXBsZXRlKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWRDaGFuZ2UubmV4dCh0aGlzLmxvYWRpbmcpO1xuICB9XG5cbiAgdW5sb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubG9hZENoYW5nZS5uZXh0KHRoaXMubG9hZGluZyk7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGVTcGlubmVyKCkge1xuICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnc2V0IHNlcnZpY2UgY29tcGxldGUnKTtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgIHRoaXMuY29tcGxldGVDaGFuZ2UubmV4dCh0aGlzLmlzQ29tcGxldGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIEFuaW1hdGlvbkJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vbG9hZGluZy9sb2FkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGltZXIsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRpbWVJbnRlcnZhbCwgcGx1Y2ssIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1sb2FkaW5nLXByb2dyZXNzLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLXByb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdwcm9ncmVzc0FuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzI5OW1zIGVhc2UtaW4nLCBzdHlsZSh7IGhlaWdodDogJzBweCcgfSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3Byb2dyZXNzQW5pbUxpbmVhcicsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pLFxuICAgICAgICBhbmltYXRlKCc2NW1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKCcyOTltcyBlYXNlLWluJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyBsZWZ0OiAnLTUlJywgd2lkdGg6ICc1JScgfSksXG4gICAgICAgIGFuaW1hdGUoJzg1MG1zIGVhc2Utb3V0Jywgc3R5bGUoeyBsZWZ0OiAnMCUnLCB3aWR0aDogJzEwMCUnIH0pKVxuICAgICAgXSksXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nUHJvZ3Jlc3NCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBnbG9iYWwgPSBmYWxzZTtcbiAgQElucHV0KCkgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICBwcm9ncmVzcyA9IDA7XG4gIEBJbnB1dCgpIHZlcnRpY2FsQWxpZ246ICd0b3AnIHwgJ2JvdHRvbScgPSAndG9wJztcbiAgQE91dHB1dCgpIGZpdkNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBmaXZEb25lU2hyaW5raW5nOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoOiBFdmVudEVtaXR0ZXI8TG9hZGluZ1Byb2dyZXNzQmFyQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGluZ1Byb2dyZXNzQmFyQ29tcG9uZW50PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2JhcicpIGJhcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbGluZWFyJykgbGluZWFyOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2FkaW5nU2VydmljZTogTG9hZGluZ1NlcnZpY2UsIHByaXZhdGUgYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZ2xvYmFsKSB7XG4gICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmNvbXBsZXRlQ2hhbmdlLnN1YnNjcmliZShpc0NvbXBsZXRlID0+IHtcbiAgICAgICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5jb21wbGV0ZUNoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmZpdlJlZnJlc2guZW1pdCh0aGlzKTtcbiAgfVxuXG4gIHVubG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pc0NvbXBsZXRlKSB7XG4gICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnc2V0IGNvbXBsZXRlJyk7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlzQ29tcGxldGUpO1xuICB9XG5cbiAgZmlsbEFuaW1hdGlvbkNvbXBsZXRlKGlzQ29tcGxldGU6IGJvb2xlYW4pIHtcbiAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgY29uc29sZS5sb2coJ2ZpbGwgYW5pbWF0aW9uIGNvbXBsZXRlJywgaXNDb21wbGV0ZSk7XG4gICAgICB0aGlzLmZpdkNvbXBsZXRlLmVtaXQoaXNDb21wbGV0ZSk7XG4gICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLnVubG9hZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51bmxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRQcm9ncmVzcyhwcm9ncmVzcykge1xuICAgIGlmIChwcm9ncmVzcyA8IDApIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJvZ3Jlc3MgPiAxMDApIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICBjb25zb2xlLmxvZygnc2V0IHByb2dyZXNzJywgcHJvZ3Jlc3MpO1xuXG4gIH1cblxuICBpbmNyZW1lbnRCeShwcm9ncmVzcykge1xuICAgIHRoaXMuc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MgKyB0aGlzLnByb2dyZXNzKTtcbiAgfVxuXG4gIGRlY3JlbWVudEJ5KHByb2dyZXNzKSB7XG4gICAgdGhpcy5zZXRQcm9ncmVzcyhwcm9ncmVzcyArIHRoaXMucHJvZ3Jlc3MpO1xuICB9XG5cbiAgZmlsbEluKG1zOiBudW1iZXIpIHtcbiAgICAvLyBmaXJzdCBkZWZpbmUgYSByZXVzYWJsZSBhbmltYXRpb25cbiAgICBjb25zdCBteUFuaW1hdGlvbiA9IHRoaXMuYnVpbGRlci5idWlsZChbXG4gICAgICBzdHlsZSh7IHdpZHRoOiB0aGlzLnByb2dyZXNzIH0pLFxuICAgICAgYW5pbWF0ZShtcywgc3R5bGUoeyB3aWR0aDogJzEwMCUnIH0pKVxuICAgIF0pO1xuXG4gICAgLy8gdXNlIHRoZSByZXR1cm5lZCBmYWN0b3J5IG9iamVjdCB0byBjcmVhdGUgYSBwbGF5ZXJcbiAgICBjb25zdCBwbGF5ZXIgPSBteUFuaW1hdGlvbi5jcmVhdGUodGhpcy5saW5lYXIubmF0aXZlRWxlbWVudCk7XG5cbiAgICBwbGF5ZXIucGxheSgpO1xuICAgIGNvbnN0IHQgPSB0aW1lcigwLCBtcyAvICgxMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzID49IDEwMCkge1xuICAgICAgICAgIHJldHVybiB0LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9ncmVzcysrO1xuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudCBwcm9ncmVzcycsIHRoaXMucHJvZ3Jlc3MpO1xuICAgICAgfSk7XG4gICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLmZpdkNvbXBsZXRlLmVtaXQodHJ1ZSk7XG4gICAgICB0aGlzLnByb2dyZXNzID0gMTAwO1xuICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNocmlua0luKG1zOiBudW1iZXIpIHtcbiAgICAvLyBmaXJzdCBkZWZpbmUgYSByZXVzYWJsZSBhbmltYXRpb25cbiAgICB0aGlzLnByb2dyZXNzID0gMTAwO1xuICAgIGNvbnN0IG15QW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHsgd2lkdGg6IGAke3RoaXMucHJvZ3Jlc3N9JWAgfSksXG4gICAgICBhbmltYXRlKG1zLCBzdHlsZSh7IHdpZHRoOiAwIH0pKVxuICAgIF0pO1xuXG4gICAgLy8gdXNlIHRoZSByZXR1cm5lZCBmYWN0b3J5IG9iamVjdCB0byBjcmVhdGUgYSBwbGF5ZXJcbiAgICBjb25zdCBwbGF5ZXIgPSBteUFuaW1hdGlvbi5jcmVhdGUodGhpcy5saW5lYXIubmF0aXZlRWxlbWVudCk7XG5cbiAgICBjb25zdCB0ID0gdGltZXIoMCwgbXMgLyAoMTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA8PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2dyZXNzLS07XG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHByb2dyZXNzJywgdGhpcy5wcm9ncmVzcyk7XG4gICAgICB9KTtcblxuICAgIHBsYXllci5wbGF5KCk7XG4gICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLmZpdkRvbmVTaHJpbmtpbmcuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvYWRpbmdQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gJy4uL2xvYWRpbmctcHJvZ3Jlc3MtYmFyL2xvYWRpbmctcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1sb2FkaW5nLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ3Byb2dyZXNzJykgcHJvZ3Jlc3M6IExvYWRpbmdQcm9ncmVzc0JhckNvbXBvbmVudDtcbiAgQElucHV0KCkgY29sb3IgPSAnbGlnaHQnO1xuICBASW5wdXQoKSBleHBhbmQgPSAnYmxvY2snO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSB2ZXJ0aWNhbEFsaWduOiAndG9wJyB8ICdib3R0b20nID0gJ3RvcCc7XG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoOiBFdmVudEVtaXR0ZXI8TG9hZGluZ0J1dHRvbkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxMb2FkaW5nQnV0dG9uQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpdkJ1dHRvbkNsaWNrOiBFdmVudEVtaXR0ZXI8TG9hZGluZ0J1dHRvbkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICB0aGlzLnByb2dyZXNzLnRvZ2dsZVNwaW5uZXIoKTtcbiAgICB0aGlzLmZpdlJlZnJlc2guZW1pdCh0aGlzKTtcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnByb2dyZXNzLmxvYWQoKTtcbiAgfVxuXG4gIHVubG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnByb2dyZXNzLnVubG9hZCgpO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgdGhpcy5wcm9ncmVzcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ29tcGxldGUoaXNDb21wbGV0ZTogYm9vbGVhbikge1xuICAgIGNvbnNvbGUubG9nKCdvbiBjb21wbGV0ZScsIGlzQ29tcGxldGUpO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZml2UmVmcmVzaENvbXBsZXRlLmVtaXQodGhpcyk7XG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuZml2QnV0dG9uQ2xpY2suZW1pdCh0aGlzKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFuaW1hdGlvbkJ1aWxkZXIsIHN0eWxlLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyB0YWtlLCB0YWtlVW50aWwsIGxhc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9wdGlvbmFsLFxuICBJbmplY3QsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3Q2hpbGQsIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyB0aW1lciwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbmNvbnN0IEJBU0VfU0laRSA9IDEwMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWxvYWRpbmctc3Bpbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS53aWR0aC5weF0nOiAnZGlhbWV0ZXInLFxuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdkaWFtZXRlcidcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHN0YXRpYyBkaWFtZXRlcnMgPSBuZXcgU2V0PG51bWJlcj4oW0JBU0VfU0laRV0pO1xuICBwcml2YXRlIHN0YXRpYyBzdHlsZVRhZzogSFRNTFN0eWxlRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9kaWFtZXRlciA9IEJBU0VfU0laRTtcbiAgX3N0cm9rZVdpZHRoID0gMTA7XG4gIF92YWx1ZSA9IDA7XG5cblxuICBAT3V0cHV0KCkgZml2UHJvZ3Jlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIGZpdkNvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nU3Bpbm5lckNvbXBvbmVudD4oKTtcbiAgQFZpZXdDaGlsZCgnZGV0ZXJtaW5hdGVDaXJjbGUnKSBkZXRlcm1pbmF0ZUNpcmNsZTogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgbW9kZTogJ2luZGV0ZXJtaW5hdGUnIHwgJ2RldGVybWluYXRlJyA9ICdpbmRldGVybWluYXRlJztcbiAgQElucHV0KCkgY2lyY2xlUmFkaXVzID0gNDU7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBjbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlICsgJyBtYXQtc3Bpbm5lciBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci1pbmRldGVybWluYXRlLWFuaW1hdGlvbic7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LCBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGNoYW5nZTogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlciwgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubW9kZSk7XG4gIH1cblxuICBnZXQgdmlld0JveCgpIHtcbiAgICBjb25zdCB2aWV3Qm94ID0gdGhpcy5jaXJjbGVSYWRpdXMgKiAyICsgdGhpcy5zdHJva2VXaWR0aDtcbiAgICByZXR1cm4gYDAgMCAke3ZpZXdCb3h9ICR7dmlld0JveH1gO1xuICB9XG5cbiAgLyoqIFRoZSBzdHJva2UgY2lyY3VtZmVyZW5jZSBvZiB0aGUgc3ZnIGNpcmNsZS4gKi9cbiAgZ2V0IHN0cm9rZUNpcmN1bWZlcmVuY2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMiAqIE1hdGguUEkgKiB0aGlzLmNpcmNsZVJhZGl1cztcbiAgfVxuXG4gIC8qKiBUaGUgZGFzaCBvZmZzZXQgb2YgdGhlIHN2ZyBjaXJjbGUuICovXG4gIGdldCBzdHJva2VEYXNoT2Zmc2V0KCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdkZXRlcm1pbmF0ZScpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0cm9rZUNpcmN1bWZlcmVuY2UgKiAoMTAwIC0gdGhpcy5fdmFsdWUpIC8gMTAwO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqIFN0cm9rZSB3aWR0aCBvZiB0aGUgY2lyY2xlIGluIHBlcmNlbnQuICovXG4gIGdldCBjaXJjbGVTdHJva2VXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJva2VXaWR0aCAvIHRoaXMuZGlhbWV0ZXIgKiAxMDA7XG4gIH1cblxuICAvKiogVmFsdWUgb2YgdGhlIHByb2dyZXNzIGNpcmNsZS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ2RldGVybWluYXRlJyA/IHRoaXMuX3ZhbHVlIDogMDtcbiAgfVxuICBzZXQgdmFsdWUobmV3VmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCAobmV3VmFsdWUpKSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZGlhbWV0ZXIoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2RpYW1ldGVyOyB9XG4gIHNldCBkaWFtZXRlcihzaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kaWFtZXRlciA9IHNpemU7XG5cbiAgICBpZiAoIUxvYWRpbmdTcGlubmVyQ29tcG9uZW50LmRpYW1ldGVycy5oYXModGhpcy5fZGlhbWV0ZXIpKSB7XG4gICAgICB0aGlzLl9hdHRhY2hTdHlsZU5vZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKiogU3Ryb2tlIHdpZHRoIG9mIHRoZSBwcm9ncmVzcyBzcGlubmVyLiAqL1xuICBASW5wdXQoKVxuICBnZXQgc3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3Ryb2tlV2lkdGggfHwgdGhpcy5kaWFtZXRlciAvIDEwO1xuICB9XG4gIHNldCBzdHJva2VXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3Ryb2tlV2lkdGggPSB2YWx1ZTtcbiAgfVxuXG5cbiAgLyoqIER5bmFtaWNhbGx5IGdlbmVyYXRlcyBhIHN0eWxlIHRhZyBjb250YWluaW5nIHRoZSBjb3JyZWN0IGFuaW1hdGlvbiBmb3IgdGhpcyBkaWFtZXRlci4gKi9cbiAgcHJpdmF0ZSBfYXR0YWNoU3R5bGVOb2RlKCk6IHZvaWQge1xuICAgIGxldCBzdHlsZVRhZyA9IExvYWRpbmdTcGlubmVyQ29tcG9uZW50LnN0eWxlVGFnO1xuXG4gICAgaWYgKCFzdHlsZVRhZykge1xuICAgICAgc3R5bGVUYWcgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgdGhpcy5fZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZVRhZyk7XG4gICAgICBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudC5zdHlsZVRhZyA9IHN0eWxlVGFnO1xuICAgIH1cblxuICAgIGlmIChzdHlsZVRhZyAmJiBzdHlsZVRhZy5zaGVldCkge1xuICAgICAgKHN0eWxlVGFnLnNoZWV0IGFzIENTU1N0eWxlU2hlZXQpLmluc2VydFJ1bGUodGhpcy5fZ2V0QW5pbWF0aW9uVGV4dCgpLCAwKTtcbiAgICB9XG5cbiAgICBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudC5kaWFtZXRlcnMuYWRkKHRoaXMuZGlhbWV0ZXIpO1xuICB9XG5cblxuICAvKiogR2VuZXJhdGVzIGFuaW1hdGlvbiBzdHlsZXMgYWRqdXN0ZWQgZm9yIHRoZSBzcGlubmVyJ3MgZGlhbWV0ZXIuICovXG4gIHByaXZhdGUgX2dldEFuaW1hdGlvblRleHQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBJTkRFVEVSTUlOQVRFX0FOSU1BVElPTl9URU1QTEFURSA9IGBcbiAgICBAa2V5ZnJhbWVzIG1hdC1wcm9ncmVzcy1zcGlubmVyLXN0cm9rZS1yb3RhdGUtRElBTUVURVIge1xuICAgICAgIDAlICAgICAgeyBzdHJva2UtZGFzaG9mZnNldDogU1RBUlRfVkFMVUU7ICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuICAgICAgIDEyLjUlICAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuICAgICAgIDEyLjUwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZSg3Mi41ZGVnKTsgfVxuICAgICAgIDI1JSAgICAgeyBzdHJva2UtZGFzaG9mZnNldDogU1RBUlRfVkFMVUU7ICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGUoNzIuNWRlZyk7IH1cbiAgICAgICAyNS4wMDAxJSAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgfVxuICAgICAgIDM3LjUlICAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpOyB9XG4gICAgICAgMzcuNTAwMSUgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IEVORF9WQUxVRTsgICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDE2MS41ZGVnKTsgfVxuICAgICAgIDUwJSAgICAgeyBzdHJva2UtZGFzaG9mZnNldDogU1RBUlRfVkFMVUU7ICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGUoMTYxLjVkZWcpOyB9XG4gICAgICAgNTAuMDAwMSUgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxuICAgICAgIDYyLjUlICAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XG4gICAgICAgNjIuNTAwMSUgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IEVORF9WQUxVRTsgICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDI1MS41ZGVnKTsgfVxuICAgICAgIDc1JSAgICAgeyBzdHJva2UtZGFzaG9mZnNldDogU1RBUlRfVkFMVUU7ICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGUoMjUxLjVkZWcpOyB9XG4gICAgICAgNzUuMDAwMSUgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XG4gICAgICAgODcuNSUgICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxuICAgICAgIDg3LjUwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZSgzNDEuNWRlZyk7IH1cbiAgICAgICAxMDAlICAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDM0MS41ZGVnKTsgfVxuICAgICB9XG4gICBgO1xuICAgIHJldHVybiBJTkRFVEVSTUlOQVRFX0FOSU1BVElPTl9URU1QTEFURVxuICAgICAgLy8gQW5pbWF0aW9uIHNob3VsZCBiZWdpbiBhdCA1JSBhbmQgZW5kIGF0IDgwJVxuICAgICAgLnJlcGxhY2UoL1NUQVJUX1ZBTFVFL2csIGAkezAuOTUgKiB0aGlzLnN0cm9rZUNpcmN1bWZlcmVuY2V9YClcbiAgICAgIC5yZXBsYWNlKC9FTkRfVkFMVUUvZywgYCR7MC4yICogdGhpcy5zdHJva2VDaXJjdW1mZXJlbmNlfWApXG4gICAgICAucmVwbGFjZSgvRElBTUVURVIvZywgYCR7dGhpcy5kaWFtZXRlcn1gKTtcbiAgfVxuXG5cbiAgY29tcGxldGVJbihkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgdGhpcy5tb2RlID0gJ2RldGVybWluYXRlJztcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgY29uc29sZS5sb2coJ2NvbXBsZXRlIGluJywgZHVyYXRpb24pO1xuICAgIGNvbnNvbGUubG9nKCdpbnRlcnZhbCcsIGR1cmF0aW9uIC8gMTAwKTtcbiAgICBjb25zb2xlLmxvZygndGltZXIgbGVuZ3RoJywgZHVyYXRpb24gKyBkdXJhdGlvbiAvIDUwKTtcbiAgICBjb25zb2xlLmxvZygnbG9vcCBjb3VudCcsIChkdXJhdGlvbiArIGR1cmF0aW9uIC8gNTApIC8gKGR1cmF0aW9uIC8gMTAwKSk7XG5cbiAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLmJ1aWxkZXIuYnVpbGQoW1xuICAgICAgc3R5bGUoe1xuICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDE4MCxcbiAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgJ3N0cm9rZSc6ICcjREUzRTM1J1xuICAgICAgfSksXG4gICAgICBhbmltYXRlKGAke2R1cmF0aW9ufW1zIGVhc2Utb3V0YCwgc3R5bGUoe1xuICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDMxNSxcbiAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogMCxcbiAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAnc3Ryb2tlJzogJyMxQjlBNTknLFxuICAgICAgICAnb3BhY2l0eSc6IDBcbiAgICAgIH0pKVxuICAgIF0pO1xuXG4gICAgY29uc3QgcGxheWVyID0gYW5pbWF0aW9uLmNyZWF0ZSh0aGlzLmRldGVybWluYXRlQ2lyY2xlLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHBsYXllci5wbGF5KCk7XG4gICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLmZpdkNvbXBsZXRlLmVtaXQodGhpcyk7XG4gICAgICB0aGlzLl92YWx1ZSA9IDA7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGkgPSBpbnRlcnZhbChkdXJhdGlvbiAvIDEwMCk7XG4gICAgY29uc3QgdCA9IHRpbWVyKGR1cmF0aW9uICsgZHVyYXRpb24gLyA1MCk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBpLnBpcGUodGFrZVVudGlsKHQpKTtcblxuICAgIHByb2dyZXNzLnN1YnNjcmliZShwID0+IHtcbiAgICAgIHRoaXMuZml2UHJvZ3Jlc3MuZW1pdChwKTtcbiAgICB9KTtcblxuICB9XG4gIHNldFZhbHVlKHByb2dyZXNzOiBudW1iZXIpOiBhbnkge1xuICAgIHRoaXMubW9kZSA9ICdkZXRlcm1pbmF0ZSc7XG4gICAgdGhpcy5fdmFsdWUgPSBwcm9ncmVzcztcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgY29uc29sZS5sb2coJ3NldCB2YWx1ZScsIHRoaXMuX3ZhbHVlLCB0aGlzLm1vZGUpO1xuICB9XG5cbiAgc3BpbigpIHtcbiAgICB0aGlzLm1vZGUgPSAnaW5kZXRlcm1pbmF0ZSc7XG4gICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc3RvcFNwaW5uaW5nKCkge1xuICAgIHRoaXMuX3ZhbHVlID0gMDtcbiAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBzZXRNb2RlKG1vZGUpIHtcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuXG5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSwgQW5pbWF0aW9uQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTG9hZGluZ1NwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuLi9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctcmVmcmVzaGVyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdmYWJBbmltJywgW1xuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLFxuICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSlcbiAgICBdKVxuICBdKSxcbiAgdHJpZ2dlcignc3Bpbm5lckFuaW0nLCBbXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXG4gICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pKVxuICAgIF0pXG4gIF0pLFxuICB0cmlnZ2VyKCdyb3RhdGVBbmltJywgW1xuICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiByb3RhdGUnLCBbXG4gICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbigncm90YXRlID0+IG5vcm1hbCcsIFtcbiAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2UtaW4nKVxuICAgIF0pLFxuICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZyknIH0pKSxcbiAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3JvdGF0ZVooMGRlZyknIH0pKVxuICBdKSxcbiAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgc3R5bGUoe1xuICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDE4MCxcbiAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgJ3N0cm9rZSc6ICcjREUzRTM1J1xuICAgICAgfSksXG4gICAgICBhbmltYXRlKCcxNDAwbXMgZWFzZS1vdXQnKVxuICAgIF0pLFxuICAgIHN0YXRlKCdmaWxsJywgc3R5bGUoe1xuICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAzMTUsXG4gICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgJ3N0cm9rZSc6ICcjMUI5QTU5JyxcbiAgICAgICdvcGFjaXR5JzogMFxuICAgIH0pXG4gICAgKV1cbiAgKV1cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgc3BpbkNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZhYkNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb25Db2xvciA9ICcjMDAwJztcbiAgQElucHV0KCkgY2hlY2ttYXJrID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGZpdkNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8TG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdlJlZnJlc2g6IEV2ZW50RW1pdHRlcjxMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50PigpO1xuICBAT3V0cHV0KCkgZml2SGlkZGVuOiBFdmVudEVtaXR0ZXI8TG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdlNob3dlZDogRXZlbnRFbWl0dGVyPExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGluZ1JlZnJlc2hlckNvbnRlbnRDb21wb25lbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaXZQcm9ncmVzczogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBAVmlld0NoaWxkKCdzcGlubmVyJykgc3Bpbm5lcjogTG9hZGluZ1NwaW5uZXJDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2JhY2tncm91bmQnKSBiYWNrZ3JvdW5kOiBFbGVtZW50UmVmO1xuXG4gIHZpc2libGUgPSBmYWxzZTtcbiAgaWNvblN0YXRlID0gJ25vcm1hbCc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBidWlsZGVyOiBBbmltYXRpb25CdWlsZGVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnNwaW5uZXIuc3BpbigpO1xuICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KHRoaXMpO1xuICB9XG5cbiAgdW5sb2FkKCkge1xuICAgIHRoaXMuc3Bpbm5lci5zdG9wU3Bpbm5pbmcoKTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIC8vIHRoaXMuc3Bpbm5lci5jb21wbGV0ZUluKDUwMCk7XG4gICAgaWYgKHRoaXMuY2hlY2ttYXJrKSB7XG4gICAgICBjb25zb2xlLmxvZygnZmlsbCBhbmltYXRpb24gZG9uZScsIGV2ZW50KTtcbiAgICAgIHRoaXMuaWNvblN0YXRlID0gJ3JvdGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgY29uc29sZS5sb2coJyZzaG93Jyk7XG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSksXG4gICAgICAgIGFuaW1hdGUoJzBtcyBlYXNlLW91dCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0pKVxuICAgICAgXSk7XG5cbiAgICAgIGNvbnN0IHBsYXllciA9IGFuaW1hdGlvbi5jcmVhdGUodGhpcy5iYWNrZ3JvdW5kLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgIHBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpdlNob3dlZC5lbWl0KHRoaXMpO1xuICAgICAgICBwbGF5ZXIuZGVzdHJveSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgc2NhbGUoMSlgO1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06IHRyYW5zZm9ybSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKVxuICAgICAgXSk7XG5cbiAgICAgIGNvbnN0IHBsYXllciA9IGFuaW1hdGlvbi5jcmVhdGUodGhpcy5iYWNrZ3JvdW5kLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgIHBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpdkhpZGRlbi5lbWl0KHRoaXMpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgcGxheWVyLmRlc3Ryb3koKTtcblxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZmlsbEFuaW1hdGlvbkRvbmUoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2ttYXJrKSB7XG4gICAgICBjb25zb2xlLmxvZygnZmlsbCBhbmltYXRpb24gZG9uZScsIGV2ZW50KTtcbiAgICAgIHRoaXMuaWNvblN0YXRlID0gJ3JvdGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQsIGljb24pO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdub3JtYWwnKSB7XG4gICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgdGhpcy5pY29uU3RhdGUgPSAnbm9ybWFsJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3JvdGF0ZScpIHtcbiAgICAgICAgdGhpcy5wb3N0Q29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHBvc3RDb21wbGV0ZSgpIHtcbiAgICB0aGlzLnVubG9hZCgpO1xuICAgIHRoaXMuZml2Q29tcGxldGUuZW1pdCh0aGlzKTtcbiAgfVxuXG4gIHNldFZhbHVlKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICB0aGlzLnNwaW5uZXIuc2V0VmFsdWUocHJvZ3Jlc3MpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zcGlubmVyLnNldE1vZGUoJ2luZGV0ZXJtaW5hdGUnKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBlbGVtZW50IH0gZnJvbSAncHJvdHJhY3Rvcic7XG5pbXBvcnQgeyBMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vLi4vbG9hZGluZy1yZWZyZXNoZXItY29udGVudC9sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlLCBBbmltYXRpb25CdWlsZGVyLCBBbmltYXRpb25QbGF5ZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWxvYWRpbmctY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLWNvbnRlbnQuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ2ZpbGwnLCBzdHlsZSh7XG4gICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMzE1LFxuICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICdzdHJva2UnOiAnIzFCOUE1OScsXG4gICAgICB9KVxuICAgICAgKV1cbiAgICApLFxuICAgIHRyaWdnZXIoJ3NwaW5uZXJBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2hpbnRBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMHB4KSB0cmFuc2xhdGVYKC01MCUpJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMTJweCkgdHJhbnNsYXRlWCgtNTAlKScgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgc3R5bGUoeyB3aWR0aDogJzExMnB4Jywgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMTJweCkgdHJhbnNsYXRlWCgtNTAlKScgfSksXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0Jywgc3R5bGUoeyB3aWR0aDogJzQwcHgnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDExMnB4KSB0cmFuc2xhdGVYKC01MCUpJyB9KSlcbiAgICAgIF0pLFxuICAgIF1cbiAgICApLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaGludFRleHQgPSAnbmV3IHBvc3RzJztcbiAgQElucHV0KCkgbWF4UHVsbEhlaWdodCA9IDE2ODtcbiAgQElucHV0KCkgbWluUHVsbEhlaWdodCA9IDExMjtcbiAgQE91dHB1dCgpIGZpdlByb2dyZXNzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoOiBFdmVudEVtaXR0ZXI8TG9hZGluZ0NvbnRlbnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc3Bpbm5lcicpIHNwaW5uZXI6IExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50O1xuICBoaW50VmlzaWJsZSA9IGZhbHNlO1xuICBjdXJyZW50UHJvZ3Jlc3MgPSAwO1xuXG4gIHJlZnJlc2hpbmcgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBidWlsZGVyOiBBbmltYXRpb25CdWlsZGVyLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnJlZnJlc2hpbmcgPSB0cnVlO1xuICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uVG9Qcm9ncmVzcygxMTIgLyAxNjgpO1xuICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KHRoaXMpO1xuICB9XG5cbiAgY29tcGxldGVSZWZyZXNoKCkge1xuICAgIHRoaXMuc3Bpbm5lci5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZmlsbEFuaW1hdGlvbkRvbmUoKSB7XG4gICAgY29uc29sZS5sb2coJ2ZpbGxBbmltRG9uZScpO1xuICAgIHRoaXMuc3Bpbm5lci5oaWRlKCk7XG4gIH1cblxuXG4gIHNob3dIaW50KCkge1xuICAgIHRoaXMuaGludFZpc2libGUgPSB0cnVlO1xuICB9XG5cbiAgb25IaW50Q2xpY2tlZCgpIHtcbiAgICBjb25zb2xlLmxvZygnb24gaGludCBjbGlja2VkJyk7XG4gICAgdGhpcy5oaW50VmlzaWJsZSA9IGZhbHNlO1xuXG4gIH1cblxuICBwb3N0SGludChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICBpZiAoIWV2ZW50LmZyb21TdGF0ZSAmJiBldmVudC50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMuc2V0UHVsbEFuaW1hdGlvblByb2dyZXNzKDExMiAvIDE2OCk7XG4gICAgICB0aGlzLnNwaW5uZXIubG9hZCgpO1xuICAgICAgdGhpcy5yZWZyZXNoaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldFB1bGxBbmltYXRpb25Qcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPSBwcm9ncmVzcztcblxuICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuXG4gICAgICAgIHNldFN0eWxlKHRoaXMuc3Bpbm5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgkezE2OCAqIHByb2dyZXNzfXB4KSByb3RhdGVaKCR7MzYwICogcHJvZ3Jlc3N9ZGVnKWApO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUFuaW1hdGlvblRvUHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7dGhpcy5jdXJyZW50UHJvZ3Jlc3MgKiAxNjh9cHgpIHJvdGF0ZVooJHszNjAgKiB0aGlzLmN1cnJlbnRQcm9ncmVzc31kZWcpYCB9KSxcbiAgICAgICAgYW5pbWF0ZSgnODVtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7cHJvZ3Jlc3MgKiAxNjh9cHgpIHJvdGF0ZVooJHszNjAgKiBwcm9ncmVzc31kZWcpYCB9KSlcbiAgICAgIF0pO1xuXG4gICAgICBjb25zdCBwbGF5ZXIgPSBhbmltYXRpb24uY3JlYXRlKHRoaXMuc3Bpbm5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgIHBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFB1bGxBbmltYXRpb25Qcm9ncmVzcyhwcm9ncmVzcyk7XG4gICAgICAgIHBsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZml2UHVsbChwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgdGhpcy5zZXRQdWxsQW5pbWF0aW9uUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICAgIHRoaXMuc3Bpbm5lci5zaG93KCk7XG4gICAgY29uc3QgdmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIHByb2dyZXNzICogMTAwICogdGhpcy5tYXhQdWxsSGVpZ2h0IC8gdGhpcy5taW5QdWxsSGVpZ2h0KSk7XG4gICAgdGhpcy5zcGlubmVyLnNldFZhbHVlKHZhbHVlICogMC44NCk7XG4gIH1cblxuICBvblJlZnJlc2goKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgdGhpcy5zcGlubmVyLmxvYWQoKTtcbiAgfVxuXG4gIGZpdkNhbmNlbCgpIHtcbiAgICB0aGlzLm1vdmVCYWNrKCk7XG4gIH1cblxuICBhZnRlclNwaW5uZXJIaWRlKCkge1xuICAgIHRoaXMuc2V0UHVsbEFuaW1hdGlvblByb2dyZXNzKDApO1xuICAgIHRoaXMucmVmcmVzaGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc3Bpbm5lci5yZXNldCgpO1xuICB9XG5cbiAgbW92ZUJhY2soKSB7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke3RoaXMuY3VycmVudFByb2dyZXNzICogMTY4fXB4KSByb3RhdGVaKCR7MzYwICogdGhpcy5jdXJyZW50UHJvZ3Jlc3N9ZGVnKWAgfSksXG4gICAgICBhbmltYXRlKCcxNDVtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApIHJvdGF0ZVooMCknIH0pKVxuICAgIF0pO1xuXG4gICAgY29uc3QgcGxheWVyID0gYW5pbWF0aW9uLmNyZWF0ZSh0aGlzLnNwaW5uZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICBwbGF5ZXIucGxheSgpO1xuICAgIHBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRQdWxsQW5pbWF0aW9uUHJvZ3Jlc3MoMCk7XG4gICAgICB0aGlzLnNwaW5uZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICB9KTtcblxuICB9XG5cbiAgb25TcGlubmVyUHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgIHRoaXMucmVuZGVyZXIuXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICBzZXRTdHlsZSh0aGlzLnNwaW5uZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHsxNjggKiB0aGlzLmN1cnJlbnRQcm9ncmVzc31weCkgcm90YXRlWigkezM2MCAqIHByb2dyZXNzIC8gMjAwfWRlZylgKTtcbiAgfVxuXG5cbn1cbiIsImltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tICcuLy4uL2ljb24vaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZywgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgc3RhdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IExvYWRpbmdTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtbG9hZGluZy1mYWInLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy1mYWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLWZhYi5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbdHJpZ2dlcignZmFiQW5pbScsIFtcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSkpXG4gICAgXSlcbiAgXSksXG4gIHRyaWdnZXIoJ3NwaW5uZXJBbmltJywgW1xuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pLFxuICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSlcbiAgICBdKVxuICBdKSxcbiAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICB0cmFuc2l0aW9uKCdub3JtYWwgPT4gcm90YXRlJywgW1xuICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJ3JvdGF0ZSA9PiBub3JtYWwnLCBbXG4gICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLWluJylcbiAgICBdKSxcbiAgICBzdGF0ZSgncm90YXRlJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3JvdGF0ZVooNDVkZWcpJyB9KSksXG4gICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDBkZWcpJyB9KSlcbiAgXSksXG4gIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgIHRyYW5zaXRpb24oJyogPT4gZmlsbCcsIFtcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgIH0pLFxuICAgICAgYW5pbWF0ZSgnMTQwMG1zIGVhc2Utb3V0JylcbiAgICBdKSxcbiAgICBzdGF0ZSgnZmlsbCcsIHN0eWxlKHtcbiAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMzE1LFxuICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogMCxcbiAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICdzdHJva2UnOiAnIzFCOUE1OScsXG4gICAgICAnb3BhY2l0eSc6IDBcbiAgICB9KVxuICAgICldXG4gICldXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdGYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHZlcnRpY2FsPzogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nO1xuICBASW5wdXQoKSBob3Jpem9udGFsPzogJ2NlbnRlcicgfCAnc3RhcnQnIHwgJ2VuZCc7XG4gIEBJbnB1dCgpIGVkZ2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNsb3Q6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBzcGluQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgZmFiQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbkNvbG9yID0gJyMwMDAnO1xuICBASW5wdXQoKSBjaGVja21hcmsgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdmlzaWJsZSA9IHRydWU7XG5cbiAgQE91dHB1dCgpIGZpdkNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8TG9hZGluZ0ZhYkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExvYWRpbmdGYWJDb21wb25lbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaXZSZWZyZXNoOiBFdmVudEVtaXR0ZXI8TG9hZGluZ0ZhYkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExvYWRpbmdGYWJDb21wb25lbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaXZIaWRkZW46IEV2ZW50RW1pdHRlcjxMb2FkaW5nRmFiQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGluZ0ZhYkNvbXBvbmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdlNob3c6IEV2ZW50RW1pdHRlcjxMb2FkaW5nRmFiQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGluZ0ZhYkNvbXBvbmVudD4oKTtcblxuICBAVmlld0NoaWxkKCdzcGlubmVyJykgc3Bpbm5lcjogTG9hZGluZ1NwaW5uZXJDb21wb25lbnQ7XG5cbiAgbG9hZGluZyA9IGZhbHNlO1xuICBpY29uU3RhdGUgPSAnbm9ybWFsJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgZ2V0IGNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBjb25zdCB2ZXJ0aWNhbENsYXNzID0gISF0aGlzLnZlcnRpY2FsID8gYGZhYi12ZXJ0aWNhbC0ke3RoaXMudmVydGljYWx9YCA6ICcnO1xuICAgIGNvbnN0IGhvcml6b250YWxDbGFzcyA9ICEhdGhpcy5ob3Jpem9udGFsID8gYGZhYi1ob3Jpem9udGFsLSR7dGhpcy5ob3Jpem9udGFsfWAgOiAnJztcbiAgICBjb25zdCBlZGdlQ2xhc3MgPSB0aGlzLmVkZ2UgPyBgZmFiLWVkZ2UtYCA6ICcnO1xuXG4gICAgcmV0dXJuIGAke3ZlcnRpY2FsQ2xhc3N9ICR7aG9yaXpvbnRhbENsYXNzfSAke2VkZ2VDbGFzc31gO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgaWYgKHRoaXMuaWNvbiAhPT0gJ21kLWNoZWNrbWFyaycpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgfVxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KHRoaXMpO1xuICB9XG5cbiAgdW5sb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgdGhpcy5zcGlubmVyLmNvbXBsZXRlSW4oMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgZmlsbEFuaW1hdGlvbkRvbmUoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2ttYXJrKSB7XG4gICAgICBjb25zb2xlLmxvZygnZmlsbCBhbmltYXRpb24gZG9uZScsIGV2ZW50KTtcbiAgICAgIHRoaXMuaWNvblN0YXRlID0gJ3JvdGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQsIGljb24pO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdub3JtYWwnKSB7XG4gICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgdGhpcy5pY29uU3RhdGUgPSAnbm9ybWFsJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3JvdGF0ZScpIHtcbiAgICAgICAgdGhpcy5wb3N0Q29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHBvc3RDb21wbGV0ZSgpIHtcbiAgICB0aGlzLnVubG9hZCgpO1xuICAgIHRoaXMuZml2Q29tcGxldGUuZW1pdCh0aGlzKTtcbiAgfVxuXG4gIHJvdGF0ZShwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwaW5uZXIuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGByb3RhdGVaKCR7cHJvZ3Jlc3MgLyAyMDAgKiAzNjB9ZGVnKWApO1xuICB9XG5cbiAgZmFiQW5pbURvbmUoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnZmFiIGFuaW0gZG9uZScsIGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMuZml2U2hvdy5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMuZml2SGlkZGVuLmVtaXQodGhpcyk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IExvYWRpbmdGYWJDb21wb25lbnQgfSBmcm9tICcuLy4uL2xvYWRpbmctZmFiL2xvYWRpbmctZmFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWFwcC1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgX2ZhYlZpc2libGUgPSB0cnVlO1xuICBjdXRvdXRWaXNpYmxlID0gdHJ1ZTtcbiAgX3Bvc2l0aW9uOiAncmlnaHQnIHwgJ2xlZnQnIHwgJ2NlbnRlcic7XG4gIGxlZnQgPSBmYWxzZTtcbiAgcmlnaHQgPSBmYWxzZTtcbiAgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdmYWInKSBmYWI6IExvYWRpbmdGYWJDb21wb25lbnQ7XG4gIEBJbnB1dCgpIGljb24gPSAnbWQtYWRkJztcbiAgQE91dHB1dCgpIGZpdkZhYkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxBcHBCYXJDb21wb25lbnQ+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uKHBvc2l0aW9uOiAncmlnaHQnIHwgJ2xlZnQnIHwgJ2NlbnRlcicpIHtcbiAgICBjb25zb2xlLmxvZygnc2V0IHBvc2l0aW9uJywgcG9zaXRpb24sICFwb3NpdGlvbiwgdGhpcy5fcG9zaXRpb24pO1xuICAgIGlmICghcG9zaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmZhYlZpc2libGUpIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZmFiVmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgaWYgKCF0aGlzLl9wb3NpdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgIHRoaXMub25GYWJIaWRkZW4oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgfVxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZhYlZpc2libGUoZmFiVmlzaWJsZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9mYWJWaXNpYmxlID09PSB0cnVlICYmIGZhYlZpc2libGUgPT09IGZhbHNlKSB7XG4gICAgICBjb25zb2xlLmxvZygnaGlkZSBmYWInKTtcbiAgICAgIHRoaXMuX2ZhYlZpc2libGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2ZhYlZpc2libGUgPT09IGZhbHNlICYmIGZhYlZpc2libGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY3V0b3V0VmlzaWJsZSA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fZmFiVmlzaWJsZSA9IHRydWU7XG4gICAgICB9LCAyNTApO1xuICAgIH1cbiAgfVxuICBnZXQgZmFiVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmFiVmlzaWJsZTtcbiAgfVxuXG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25GYWJIaWRkZW4oKSB7XG4gICAgY29uc29sZS5sb2coJ2ZhYiBoaWRkZW4nKTtcblxuICAgIGNvbnNvbGUubG9nKCd0byB2b2lkJyk7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbmluZykge1xuICAgICAgY29uc29sZS5sb2coJ3doaWxlIHRyYW5zaXRpb25pbmcgdG8gcG9zaXRpb24nLCB0aGlzLl9wb3NpdGlvbik7XG4gICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XG4gICAgICBjb25zb2xlLmxvZygncmVtb3ZlIGN1dG91dCcpO1xuICAgICAgdGhpcy5jdXRvdXRWaXNpYmxlID0gZmFsc2U7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3cgY3V0b3V0IGFnYWluJyk7XG4gICAgICAgIHRoaXMuY3V0b3V0VmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG93IGZhYiBhZ2FpbiBhbmQgZW5kIHRyYW5zaXRpb24nKTtcbiAgICAgICAgICB0aGlzLl9mYWJWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgICAgfSwgMjI1KTtcbiAgICAgIH0sIDIyNSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3V0b3V0VmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuX3Bvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fcG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZmFiQ2xpY2soKSB7XG4gICAgdGhpcy5maXZGYWJDbGljay5lbWl0KHRoaXMpO1xuICB9XG5cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgUGxhdGZvcm1zIH0gZnJvbSAnQGlvbmljL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZml2SWZdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZlBsYXRmb3JtRGlyZWN0aXZlIHtcblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZml2SWYocGxhdGZvcm1zOiBQbGF0Zm9ybXNbXSkge1xuXG5cbiAgICBsZXQgc2hvdyA9IHRydWU7XG4gICAgcGxhdGZvcm1zLmZvckVhY2gocCA9PiB7XG4gICAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXMocCkpIHtcbiAgICAgICAgc2hvdyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ2lmIHBsYXRmb3JtcycsIHBsYXRmb3Jtcywgc2hvdyk7XG5cbiAgICBpZiAoc2hvdykge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVTdHlsZSwgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmaXZDZW50ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBDZW50ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICB2ZXJ0aWNhbCA9IHRydWU7XG4gIGhvcml6b250YWwgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUnKVxuICBnZXQgbXlTdHlsZSgpOiBTYWZlU3R5bGUge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICBjb25zdCBzdHlsZSA9IGBwb3NpdGlvbjogYWJzb2x1dGU7ICR7dGhpcy52ZXJ0aWNhbCAmJiB0aGlzLmhvcml6b250YWwgPyAndG9wOiA1MCU7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7JyA6IHRoaXMudmVydGljYWwgPyAndG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsnIDogJ2xlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyd9YDtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlKTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBmaXZDZW50ZXIoY2VudGVyOiB7IHZlcnRpY2FsOiBib29sZWFuLCBob3Jpem9udGFsOiBib29sZWFuIH0pIHtcbiAgICBpZiAoY2VudGVyKSB7XG4gICAgICB0aGlzLnZlcnRpY2FsID0gY2VudGVyLnZlcnRpY2FsO1xuICAgICAgdGhpcy5ob3Jpem9udGFsID0gY2VudGVyLmhvcml6b250YWw7XG4gICAgfVxuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnYXBwbHkgcG9zaXRpb24gcmVsYXRpdmUgdG8gcGFyZW50IGhlcmUnKTtcbiAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZpdlBlcm1pc3Npb25zXSdcbn0pXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbnNEaXJlY3RpdmUge1xuXG4gIGFsbG93ZWRQZXJtaXNzaW9uczogc3RyaW5nW10gPSBbXTtcbiAgdVBlcm1pc3Npb25zOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvciBQZXJtaXNzaW9uc2RpcmVjdGl2ZScpO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGZpdlBlcm1pc3Npb25zVXNlclBlcm1pc3Npb25zKHVzZXJQZXJtaXNzaW9uczogc3RyaW5nW10pIHtcbiAgICBjb25zb2xlLmxvZygndXNlclBlcm1pc3Npb25zJywgdXNlclBlcm1pc3Npb25zKTtcbiAgICB0aGlzLnVQZXJtaXNzaW9ucyA9IHVzZXJQZXJtaXNzaW9ucyB8fCBbXTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcblxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZpdlBlcm1pc3Npb25zKGFsbG93ZWQ6IHN0cmluZ1tdKSB7XG4gICAgY29uc29sZS5sb2coJ2ZpdlBlcm1pc3Npb25zJywgYWxsb3dlZCk7XG4gICAgdGhpcy5hbGxvd2VkUGVybWlzc2lvbnMgPSBhbGxvd2VkIHx8IFtdO1xuICAgIHRoaXMudXBkYXRlVmlldygpO1xuICB9XG5cbiAgY2hlY2tQZXJtaXNzaW9uKCk6IGJvb2xlYW4ge1xuICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgdGhpcy51UGVybWlzc2lvbnMuZm9yRWFjaChyb2xlID0+IHtcbiAgICAgIGlmICh0aGlzLmFsbG93ZWRQZXJtaXNzaW9ucy5maW5kKGEgPT4gYS50b1VwcGVyQ2FzZSgpID09PSByb2xlLnRvVXBwZXJDYXNlKCkpKSB7XG4gICAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdoYXMgcm9sZSBwZXJtaXNzaW9uJywgdGhpcy51UGVybWlzc2lvbnMsIHRoaXMuYWxsb3dlZFBlcm1pc3Npb25zKTtcbiAgICByZXR1cm4gc2hvdztcbiAgfVxuXG4gIHVwZGF0ZVZpZXcoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tQZXJtaXNzaW9uKCkpIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSG9zdEJpbmRpbmcsIEV2ZW50RW1pdHRlciwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdmaXYtcmlwcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JpcHBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JpcHBsZS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBSaXBwbGVDb21wb25lbnQge1xuXG4gIHByaXZhdGUgcmlwcGxlQW5pbWF0aW9uRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHJvdW5kID0gZmFsc2U7XG5cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBvc2l0aW9uJykgcG9zaXRpb247XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2tFdmVudChldmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMucmlwcGxlKGV2ZW50KTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdwcmVzcycsIFsnJGV2ZW50J10pXG4gIFByZXNzRXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLnJpcHBsZShldmVudCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnJvdW5kJykgZ2V0IGlzUm91bmQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5yb3VuZDtcbiAgfVxuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cbiAgICBjb25zb2xlLmxvZygncmlwcGxlIGNvbnN0cnVjdG9yJyk7XG4gICAgdGhpcy5yaXBwbGVBbmltYXRpb25FdmVudC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDc1MClcbiAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucmlwcGxlJyksICdzaG93Jyk7XG4gICAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJpcHBsZVdyYXBwZXInKSwgJ3Nob3cnKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmlwcGxlKGV2ZW50KSB7XG4gICAgY29uc3QgcmlwcGxlID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaXBwbGUnKTtcbiAgICBpZiAoIXJpcHBsZSkge1xuICAgICAgdGhpcy5yaXBwbGVGYWN0b3J5KCk7XG4gICAgfVxuICAgIHRoaXMucmlwcGxlQW5pbWF0aW9uKHsgcGFnZVg6IGV2ZW50LnBhZ2VYLCBwYWdlWTogZXZlbnQucGFnZVkgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJpcHBsZUZhY3RvcnkoKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpICsgJ3B4JztcbiAgICBjb25zdCByaXBwbGVXcmFwcGVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHJpcHBsZVdyYXBwZXIsICdyaXBwbGVXcmFwcGVyJyk7XG4gICAgY29uc3QgcmlwcGxlID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhyaXBwbGUsICdyaXBwbGUnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJpcHBsZSwgJ2hlaWdodCcsIHJhZGl1cyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyaXBwbGUsICd3aWR0aCcsIHJhZGl1cyk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChyaXBwbGVXcmFwcGVyLCByaXBwbGUpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGFyZ2V0LCByaXBwbGVXcmFwcGVyKTtcbiAgfVxuXG4gIHJpcHBsZUFuaW1hdGlvbih7IHBhZ2VYLCBwYWdlWSB9KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcmlwcGxlID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5yaXBwbGUnKTtcbiAgICBjb25zdCByaXBwbGVXcmFwcGVyID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5yaXBwbGVXcmFwcGVyJyk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhyaXBwbGVXcmFwcGVyLCAnc2hvdycpO1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MocmlwcGxlLCAnc2hvdycpO1xuICAgIGNvbnN0IGxlZnQgPSBwYWdlWCAtIHJlY3QubGVmdCAtIHJpcHBsZS5vZmZzZXRXaWR0aCAvIDIgLSBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgKyAncHgnO1xuICAgIGNvbnN0IHRvcCA9IHBhZ2VZIC0gcmVjdC50b3AgLSByaXBwbGUub2Zmc2V0SGVpZ2h0IC8gMiAtIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgJ3B4JztcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJpcHBsZSwgJ3RvcCcsIHRvcCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyaXBwbGUsICdsZWZ0JywgbGVmdCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhyaXBwbGVXcmFwcGVyLCAnc2hvdycpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MocmlwcGxlLCAnc2hvdycpO1xuICAgIHRoaXMucmlwcGxlQW5pbWF0aW9uRXZlbnQuZW1pdCgpO1xuICB9XG5cblxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBBZnRlckNvbnRlbnRJbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIG1lcmdlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuZXhwb3J0IGludGVyZmFjZSBJblZpZXdwb3J0RXZlbnQge1xuICB0YXJnZXQ6IEhUTUxFbGVtZW50O1xuICB2YWx1ZTogYm9vbGVhbjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZpdlZpZXdwb3J0XScsXG4gIGV4cG9ydEFzOiAndmlld3BvcnQnXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdwb3J0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBJbnB1dCgpIG9mZnNldCA9IDA7XG4gIEBPdXRwdXQoKSBmaXZBcHBlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPEluVmlld3BvcnRFdmVudD4oKTtcbiAgQE91dHB1dCgpIGZpdkRpc2FwcGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8SW5WaWV3cG9ydEV2ZW50PigpO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHZpc2libGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgY29udGVudDogQ29udGVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJ2lvbi1jb250ZW50Jyk7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGNvbnRlbnQuc2Nyb2xsRXZlbnRzID0gdHJ1ZTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbG9zZXN0KCdpb24tY29udGVudCcpLCAnaW9uU2Nyb2xsJylcbiAgICAgIC5waXBlKG1lcmdlKGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKSksIGRlYm91bmNlVGltZSg1MCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2hlY2soKSk7XG5cbiAgICBjb25zb2xlLmxvZygndmlzaWJsZScsIHRoaXMudmlzaWJsZSwgZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgKyB0aGlzLm9mZnNldCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuXG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVjaygpIHtcbiAgICBjb25zdCBldmVudDogSW5WaWV3cG9ydEV2ZW50ID0ge1xuICAgICAgdGFyZ2V0OiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIHZhbHVlOlxuICAgICAgICBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSAmJlxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD1cbiAgICAgICAgd2luZG93LmlubmVySGVpZ2h0ICsgdGhpcy5vZmZzZXRcbiAgICB9O1xuXG4gICAgaWYgKGV2ZW50LnZhbHVlID09PSB0cnVlKSB7XG5cbiAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuZml2QXBwZWFyLmVtaXQoZXZlbnQpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuZml2RGlzYXBwZWFyLmVtaXQoZXZlbnQpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlzVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHNraXBXaGlsZSwgdGFrZVVudGlsLCBsYXN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZpdlB1bGxdJ1xufSlcbmV4cG9ydCBjbGFzcyBQdWxsRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBtaW5QdWxsSGVpZ2h0ID0gMTEyO1xuICBASW5wdXQoKSBtYXhQdWxsSGVpZ2h0ID0gMTY4O1xuICBASW5wdXQoKSBlbmFibGVkID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgZml2UmVmcmVzaCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZml2Q2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBmaXZQdWxsID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgc2Nyb2xsWTogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBASG9zdCgpIHByaXZhdGUgY29udGVudDogQ29udGVudCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLmNvbnRlbnQuc2Nyb2xsRXZlbnRzID0gdHJ1ZTtcbiAgICB0aGlzLmNvbnRlbnQuZ2V0U2Nyb2xsRWxlbWVudCgpLnRoZW4ocyA9PiB7XG4gICAgICB0aGlzLnNjcm9sbFkgPSBzOyAvLyBuZWVkZWQgZm9yIHNjcm9sbFRvcFxuICAgICAgdGhpcy5zZXR1cFBhbkxpc3RlbmVyKCk7XG4gICAgfSk7XG5cblxuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cFBhbkxpc3RlbmVyKCkge1xuICAgIGNvbnN0IHRvdWNoc3RhcnQkID0gZnJvbUV2ZW50KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndG91Y2hzdGFydCcpO1xuICAgIGNvbnN0IHRvdWNobW92ZSQgPSBmcm9tRXZlbnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0b3VjaG1vdmUnKTtcbiAgICBjb25zdCB0b3VjaGVuZCQgPSBmcm9tRXZlbnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0b3VjaGVuZCcpO1xuICAgIGNvbnN0IHRvdWNoY2FuY2VsJCA9IGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RvdWNoY2FuY2VsJyk7XG4gICAgY29uc3QgZW5kJCA9IG1lcmdlKHRvdWNoZW5kJCwgdG91Y2hjYW5jZWwkKTtcblxuICAgIGNvbnN0IGRyYWdBdFRvcCA9IHRvdWNoc3RhcnQkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKGUgPT4gdGhpcy5zY3JvbGxZLnNjcm9sbFRvcCA9PT0gMCAmJiB0aGlzLmVuYWJsZWQpXG4gICAgICApO1xuXG4gICAgY29uc3QgZHJhZ1RvcERvd24gPSBkcmFnQXRUb3BcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHN0YXJ0OiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGFydFkgPSBzdGFydC50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgIHJldHVybiB0b3VjaG1vdmUkXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKChtb3ZlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50WSA9IG1vdmUudG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgc3RhcnRFdmVudDogc3RhcnQsXG4gICAgICAgICAgICAgICAgICBtb3ZlRXZlbnQ6IG1vdmUsXG4gICAgICAgICAgICAgICAgICBzdGFydFk6IHN0YXJ0WSxcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRZOiBjdXJyZW50WSxcbiAgICAgICAgICAgICAgICAgIG9mZnNldDogY3VycmVudFkgLSBzdGFydFlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgc2tpcFdoaWxlKGRyYWcgPT4gZHJhZy5vZmZzZXQgPCAwKSxcbiAgICAgICAgICAgICAgdGFrZVVudGlsKGVuZCQpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KSk7XG5cblxuICAgIGRyYWdUb3BEb3duLmZvckVhY2goZHJhZ3MgPT4ge1xuICAgICAgZHJhZ3MuZm9yRWFjaChkcmFnID0+IHtcbiAgICAgICAgZHJhZy5tb3ZlRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZHJhZy5vZmZzZXQgLyAyO1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgPiB0aGlzLm1heFB1bGxIZWlnaHQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9mZnNldCA8PSB0aGlzLm1heFB1bGxIZWlnaHQpIHtcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZml2UHVsbC5lbWl0KG9mZnNldCAvIHRoaXMubWF4UHVsbEhlaWdodCk7XG4gICAgICB9KTtcblxuICAgICAgZHJhZ3NcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbGFzdCgpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShkcmFnID0+IHtcbiAgICAgICAgICBjb25zdCBvZmZzZXQgPSBkcmFnLm9mZnNldCAvIDI7XG4gICAgICAgICAgY29uc3QgcmVmcmVzaCA9IG9mZnNldCA+PSB0aGlzLm1pblB1bGxIZWlnaHQ7XG4gICAgICAgICAgaWYgKHJlZnJlc2gpIHtcbiAgICAgICAgICAgIHRoaXMuZml2UmVmcmVzaC5lbWl0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZml2Q2FuY2VsLmVtaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiByb3RhdGUnLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbigncm90YXRlID0+IG5vcm1hbCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAnc2NhbGUoMCkgcm90YXRlWig0NWRlZyknIH0pKSxcbiAgICAgIHN0YXRlKCdub3JtYWwnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAnc2NhbGUoMSkgcm90YXRlWigwZGVnKScgfSkpXG4gICAgXSksXG4gICAgdHJpZ2dlcignc2NhbGVBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiBub3JtYWwnLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSksXG4gICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignbm9ybWFsID0+IHNjYWxlJywgW1xuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3NjYWxlID0+IG5vcm1hbCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdzY2FsZScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSkpLFxuICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSkpXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBfbmFtZTogc3RyaW5nO1xuICBfaW5kaWNhdG9yVmFsdWUgPSAtMTtcbiAgdGVtcFZhbHVlOiBudW1iZXI7XG4gIHN0YXRlOiAnbm9ybWFsJyB8ICdyb3RhdGUnID0gJ25vcm1hbCc7XG4gIHRlbXA6IHN0cmluZztcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcblxuICBpbmRpY2F0b3JTdGF0ZTogJ25vcm1hbCcgfCAnc2NhbGUnID0gJ3NjYWxlJztcbiAgaW5kaWNhdG9yVmFsdWVTdGF0ZTogJ25vcm1hbCcgfCAnc2NhbGUnID0gJ3NjYWxlJztcblxuICBASW5wdXQoKVxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKCdzZXQgbmFtZScpO1xuICAgIGlmICh0aGlzLl9uYW1lKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGluZGljYXRvclZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGljYXRvclZhbHVlO1xuICB9XG4gIHNldCBpbmRpY2F0b3JWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy50cmFuc2Zvcm1JbmRpY2F0b3IodmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRyYW5zZm9ybShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRlbXAgPSBuYW1lO1xuICAgIHRoaXMuc3RhdGUgPSAncm90YXRlJztcbiAgfVxuXG4gIHRyYW5zZm9ybUluZGljYXRvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc29sZS5sb2coJ3RyYW5zZm9ybSBpbmRpY2F0b3InLCB2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09PSAtMSkge1xuICAgICAgdGhpcy5faW5kaWNhdG9yVmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaW5kaWNhdG9yU3RhdGUgPSAnc2NhbGUnO1xuICAgICAgdGhpcy5pbmRpY2F0b3JWYWx1ZVN0YXRlID0gJ3NjYWxlJztcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICB0aGlzLnRlbXBWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5pbmRpY2F0b3JTdGF0ZSA9ICdub3JtYWwnO1xuICAgICAgdGhpcy5pbmRpY2F0b3JWYWx1ZVN0YXRlID0gJ3NjYWxlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbmRpY2F0b3JTdGF0ZSA9ICdzY2FsZSc7XG4gICAgICBpZiAodGhpcy5pbmRpY2F0b3JWYWx1ZVN0YXRlID09PSAnc2NhbGUnKSB7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yVmFsdWVTdGF0ZSA9ICdub3JtYWwnO1xuICAgICAgICB0aGlzLl9pbmRpY2F0b3JWYWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50ZW1wVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3JWYWx1ZVN0YXRlID0gJ3NjYWxlJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cbiAgcm90YXRlQW5pbURvbmUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnbm9ybWFsJyAmJiBldmVudC50b1N0YXRlID09PSAncm90YXRlJykge1xuICAgICAgdGhpcy5fbmFtZSA9IHRoaXMudGVtcDtcbiAgICAgIHRoaXMuc3RhdGUgPSAnbm9ybWFsJztcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAncm90YXRlJyAmJiBldmVudC50b1N0YXRlID09PSAnbm9ybWFsJykge1xuICAgICAgY29uc29sZS5sb2coJ2ljb24gdHJhbnNpdGlvbiBkb25lJyk7XG4gICAgfVxuICB9XG5cbiAgaW5jcmVtZW50RG9uZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdpbmNyZW1lbnQgZG9uZScsIGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnbm9ybWFsJyAmJiBldmVudC50b1N0YXRlID09PSAnc2NhbGUnKSB7XG4gICAgICBpZiAodGhpcy50ZW1wVmFsdWUgPiAwKSB7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yVmFsdWVTdGF0ZSA9ICdub3JtYWwnO1xuICAgICAgICB0aGlzLl9pbmRpY2F0b3JWYWx1ZSA9IHRoaXMudGVtcFZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yVmFsdWUgPSB0aGlzLnRlbXBWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGhyb3R0bGVUaW1lLCByZWR1Y2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlLCBzdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGlhbG9nQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBzbGlkZUluLXRvcCcsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHNsaWRlSW4tYm90dG9tJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBmYWRlSW4tYm90dG9tJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gZmFkZUluLXRvcCcsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IGZhZGVJbi1jZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBzbGlkZUluLWNlbnRlcicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMjUlKScsXG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignc2xpZGVJbi1jZW50ZXIgPT4gaGlkZGVuJywgW1xuICAgICAgICBhbmltYXRlKCcxMjBtcyBlYXNlLW91dCcsIHN0eWxlKHtcbiAgICAgICAgICAvLyB0b3A6ICc1MCUnLFxuICAgICAgICAgIC8vIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoKzUwJSknLFxuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gaGlkZGVuJywgW1xuICAgICAgICBhbmltYXRlKCcyNDBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnc2xpZGVJbi10b3AnLCBzdHlsZSh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ3NsaWRlSW4tYm90dG9tJywgc3R5bGUoe1xuICAgICAgICBib3R0b206IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ2ZhZGVJbi10b3AnLCBzdHlsZSh7XG4gICAgICAgIHRvcDogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnZmFkZUluLWJvdHRvbScsIHN0eWxlKHtcbiAgICAgICAgYm90dG9tOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdmYWRlSW4tY2VudGVyJywgc3R5bGUoe1xuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgJ21hcmdpbi10b3AnOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdzbGlkZUluLWNlbnRlcicsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgICdtYXJnaW4tdG9wJzogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgXSksIHRyaWdnZXIoJ2JhY2tkcm9wQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTIwbXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJyksIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgXSlcbiAgICBdKV1cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBhbmltYXRpb25TdGF0ZSA9ICdoaWRkZW4nO1xuXG4gIEBJbnB1dCgpIGFuaW1hdGlvbjogJ3NsaWRlSW4nIHwgJ2ZhZGVJbicgPSAnc2xpZGVJbic7XG4gIEBJbnB1dCgpIHZlcnRpY2FsQWxpZ246ICd0b3AnIHwgJ2JvdHRvbScgfCAnY2VudGVyJyA9ICdib3R0b20nO1xuICBASW5wdXQoKSBiYWNrZHJvcCA9IGZhbHNlO1xuICBASW5wdXQoKSBiYWNrZHJvcENsb3NlID0gdHJ1ZTtcbiAgQElucHV0KCkgc3dpcGVFbmFibGVkID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgZml2Q2xvc2U6IEV2ZW50RW1pdHRlcjxEaWFsb2dDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZml2T3BlbjogRXZlbnRFbWl0dGVyPERpYWxvZ0NvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnY2FyZCcpIGNhcmQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2JhY2tkcm9wJykgYmFja2Ryb3BFbGVtOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgcGFuU3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBjaGFuZ2U6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgfVxuXG4gIHNldHVwUGFuKGVsZW06IEVsZW1lbnRSZWYsIHRocmVzaG9sZDogbnVtYmVyKSB7XG5cbiAgICBpZiAoIXRoaXMuc3dpcGVFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFtbWVyID0gbmV3IEhhbW1lcihlbGVtKTtcbiAgICBoYW1tZXIuZ2V0KCdwYW4nKS5zZXQoeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMIH0pO1xuXG4gICAgY29uc3QgcGFudXAgPSBmcm9tRXZlbnQoaGFtbWVyLCAncGFudXAnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSgyKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncGFudXAnLCByZXMpO1xuICAgICAgICB0aGlzLm9uU3dpcGVVcChyZXMsIHRocmVzaG9sZCk7XG4gICAgICB9KTtcblxuICAgIGNvbnN0IHBhbmRvd24gPSBmcm9tRXZlbnQoaGFtbWVyLCAncGFuZG93bicpXG4gICAgICAucGlwZShcbiAgICAgICAgdGhyb3R0bGVUaW1lKDIpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYW5kb3duIHN1YicsIHJlcyk7XG4gICAgICAgIHRoaXMub25Td2lwZURvd24ocmVzLCB0aHJlc2hvbGQpO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBwYW5lbmQgPSBmcm9tRXZlbnQoaGFtbWVyLCAncGFuZW5kIHBhbmNhbmNlbCcpXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzLmRpc3RhbmNlIDwgdGhyZXNob2xkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNhcmQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKDBweClgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLnBhblN1YnMucHVzaChwYW5kb3duLCBwYW51cCwgcGFuZW5kKTtcblxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNhcmQpO1xuICB9XG5cbiAgc2hvd0RpYWxvZygpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gYCR7dGhpcy5hbmltYXRpb259LSR7dGhpcy52ZXJ0aWNhbEFsaWdufWA7XG5cbiAgfVxuXG4gIGhpZGVEaWFsb2coKSB7XG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9ICdoaWRkZW4nO1xuICAgIHRoaXMuZml2Q2xvc2UuZW1pdCh0aGlzKTtcbiAgICB0aGlzLnBhblN1YnMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfSk7XG4gIH1cblxuICBvblN3aXBlVXAoZXZlbnQsIHRocmVzaG9sZCkge1xuICAgIGNvbnNvbGUubG9nKE1hdGguZXhwKGV2ZW50LmRpc3RhbmNlIC8gNTApKTtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IDEgKyBNYXRoLmV4cChldmVudC5kaXN0YW5jZSAvIDUwKSAvIDUwO1xuXG4gICAgaWYgKHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ3RvcCcpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jYXJkLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgtJHtldmVudC5kaXN0YW5jZSAqIHZlbG9jaXR5fXB4KWApO1xuICAgICAgaWYgKGV2ZW50LmRpc3RhbmNlID4gdGhyZXNob2xkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzd2lwZSBkb3duIGhhcHBlbmVkJyk7XG4gICAgICAgIHRoaXMuaGlkZURpYWxvZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uU3dpcGVEb3duKGV2ZW50LCB0aHJlc2hvbGQpIHtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IDEgKyBNYXRoLmV4cChldmVudC5kaXN0YW5jZSAvIDUwKSAvIDUwO1xuICAgIGNvbnNvbGUubG9nKHZlbG9jaXR5KTtcbiAgICBpZiAodGhpcy52ZXJ0aWNhbEFsaWduID09PSAnYm90dG9tJyB8fCB0aGlzLnZlcnRpY2FsQWxpZ24gPT09ICdjZW50ZXInKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHtldmVudC5kaXN0YW5jZSAqIHZlbG9jaXR5fXB4KWApO1xuICAgICAgaWYgKGV2ZW50LmRpc3RhbmNlID4gdGhyZXNob2xkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzd2lwZSBkb3duIGhhcHBlbmVkJyk7XG4gICAgICAgIHRoaXMuaGlkZURpYWxvZygpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgb25EaWFsb2dBbmltYXRpb25Eb25lKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoMHB4KWApO1xuICAgIH1cbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgdGhpcy5zZXR1cFBhbih0aGlzLmNhcmQubmF0aXZlRWxlbWVudCwgNTgpO1xuICAgICAgdGhpcy5maXZPcGVuLmVtaXQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgYmFja2Ryb3BBbmltRG9uZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYmFja2Ryb3BFbGVtLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICAvLyB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmJhY2tkcm9wRWxlbS5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuc2V0dXBQYW4odGhpcy5iYWNrZHJvcEVsZW0ubmF0aXZlRWxlbWVudCwgMTEyKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgSGFtbWVyR2VzdHVyZUNvbmZpZywgSEFNTUVSX0dFU1RVUkVfQ09ORklHIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBIYW1tZXIgfSBmcm9tICdoYW1tZXJqcyc7XG5pbXBvcnQgeyBTdGVwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0ZXBDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAvc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RlcEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc3RlcC1oZWFkZXIvc3RlcC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0ZXBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9zdGVwLWNvbnRlbnQvc3RlcC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBhbmRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9leHBhbmRhYmxlL2V4cGFuZGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3JvdXRlci1pdGVtL3JvdXRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xsYXBzYWJsZU1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL2NvbGxhcHNhYmxlLW1lbnUvY29sbGFwc2FibGUtbWVudS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29sbGFwc2FibGVNZW51QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb2xsYXBzYWJsZS1tZW51L2NvbGxhcHNhYmxlLW1lbnUtYnV0dG9uL2NvbGxhcHNhYmxlLW1lbnUtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEJvdHRvbVNoZWV0Q29tcG9uZW50IH0gZnJvbSAnLi9ib3R0b20tc2hlZXQvYm90dG9tLXNoZWV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb3R0b21TaGVldENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQtY29udGVudC9ib3R0b20tc2hlZXQtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9vbGJhclNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci1zZWFyY2gvdG9vbGJhci1zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRpbmdCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmctYnV0dG9uL2xvYWRpbmctYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmctcHJvZ3Jlc3MtYmFyL2xvYWRpbmctcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy1jb250ZW50L2xvYWRpbmctY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ0ZhYkNvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy1mYWIvbG9hZGluZy1mYWIuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcEJhckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZlBsYXRmb3JtRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2lmLXBsYXRmb3JtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZW50ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2VudGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQZXJtaXNzaW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9wZXJtaXNzaW9ucy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUmlwcGxlQ29tcG9uZW50IH0gZnJvbSAnLi9yaXBwbGUvcmlwcGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3cG9ydERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy92aWV3cG9ydC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHVsbERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9wdWxsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RlcHBlckhvcml6b250YWxDb21wb25lbnQgfSBmcm9tICcuL3N0ZXBwZXItaG9yaXpvbnRhbC9zdGVwcGVyLWhvcml6b250YWwuY29tcG9uZW50JztcbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy1yZWZyZXNoZXItY29udGVudC9sb2FkaW5nLXJlZnJlc2hlci1jb250ZW50LmNvbXBvbmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIE15SGFtbWVyQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gIG92ZXJyaWRlcyA9IDxhbnk+e1xuICAgIHBhbjogeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fVkVSVElDQUwsIHRocmVzaG9sZDogMyB9LFxuICB9O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEV4cGFuZGFibGVDb21wb25lbnQsXG4gICAgUGFzc3dvcmRDb21wb25lbnQsXG4gICAgU3RlcHBlckNvbXBvbmVudCxcbiAgICBTdGVwQ29tcG9uZW50LFxuICAgIFN0ZXBIZWFkZXJDb21wb25lbnQsXG4gICAgU3RlcENvbnRlbnRDb21wb25lbnQsXG4gICAgUm91dGVySXRlbUNvbXBvbmVudCxcbiAgICBDZW50ZXJEaXJlY3RpdmUsXG4gICAgQ29sbGFwc2FibGVNZW51QnV0dG9uQ29tcG9uZW50LFxuICAgIENvbGxhcHNhYmxlTWVudURpcmVjdGl2ZSxcbiAgICBCb3R0b21TaGVldENvbXBvbmVudCxcbiAgICBCb3R0b21TaGVldENvbnRlbnRDb21wb25lbnQsXG4gICAgVG9vbGJhclNlYXJjaENvbXBvbmVudCxcbiAgICBMb2FkaW5nQnV0dG9uQ29tcG9uZW50LFxuICAgIExvYWRpbmdQcm9ncmVzc0JhckNvbXBvbmVudCxcbiAgICBMb2FkaW5nQ29udGVudENvbXBvbmVudCxcbiAgICBMb2FkaW5nRmFiQ29tcG9uZW50LFxuICAgIEFwcEJhckNvbXBvbmVudCxcbiAgICBJZlBsYXRmb3JtRGlyZWN0aXZlLFxuICAgIFBlcm1pc3Npb25zRGlyZWN0aXZlLFxuICAgIFJpcHBsZUNvbXBvbmVudCxcbiAgICBWaWV3cG9ydERpcmVjdGl2ZSxcbiAgICBQdWxsRGlyZWN0aXZlLFxuICAgIExvYWRpbmdSZWZyZXNoZXJDb250ZW50Q29tcG9uZW50LFxuICAgIExvYWRpbmdTcGlubmVyQ29tcG9uZW50LFxuICAgIFN0ZXBwZXJIb3Jpem9udGFsQ29tcG9uZW50LFxuICAgIEljb25Db21wb25lbnQsXG4gICAgRGlhbG9nQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBFeHBhbmRhYmxlQ29tcG9uZW50LFxuICAgIFBhc3N3b3JkQ29tcG9uZW50LFxuICAgIFN0ZXBwZXJDb21wb25lbnQsXG4gICAgU3RlcENvbXBvbmVudCxcbiAgICBTdGVwSGVhZGVyQ29tcG9uZW50LFxuICAgIFN0ZXBDb250ZW50Q29tcG9uZW50LFxuICAgIFJvdXRlckl0ZW1Db21wb25lbnQsXG4gICAgQ29sbGFwc2FibGVNZW51RGlyZWN0aXZlLFxuICAgIENlbnRlckRpcmVjdGl2ZSxcbiAgICBDb2xsYXBzYWJsZU1lbnVCdXR0b25Db21wb25lbnQsXG4gICAgQm90dG9tU2hlZXRDb21wb25lbnQsXG4gICAgQm90dG9tU2hlZXRDb250ZW50Q29tcG9uZW50LFxuICAgIFRvb2xiYXJTZWFyY2hDb21wb25lbnQsXG4gICAgTG9hZGluZ0J1dHRvbkNvbXBvbmVudCxcbiAgICBMb2FkaW5nUHJvZ3Jlc3NCYXJDb21wb25lbnQsXG4gICAgTG9hZGluZ0NvbnRlbnRDb21wb25lbnQsXG4gICAgTG9hZGluZ0ZhYkNvbXBvbmVudCxcbiAgICBBcHBCYXJDb21wb25lbnQsXG4gICAgSWZQbGF0Zm9ybURpcmVjdGl2ZSxcbiAgICBQZXJtaXNzaW9uc0RpcmVjdGl2ZSxcbiAgICBSaXBwbGVDb21wb25lbnQsXG4gICAgVmlld3BvcnREaXJlY3RpdmUsXG4gICAgUHVsbERpcmVjdGl2ZSxcbiAgICBMb2FkaW5nUmVmcmVzaGVyQ29udGVudENvbXBvbmVudCxcbiAgICBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudCxcbiAgICBTdGVwcGVySG9yaXpvbnRhbENvbXBvbmVudCxcbiAgICBJY29uQ29tcG9uZW50LFxuICAgIERpYWxvZ0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZpdmV0aHJlZUNvcmVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsic3RhdGUiLCJIYW1tZXIiLCJIYW1tZXIuRElSRUNUSU9OX1ZFUlRJQ0FMIiwic3R5bGUiLCJtZXJnZSIsInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBaUJFO3NCQU5rQixLQUFLO3FCQUNOLEVBQUU7d0JBQ0MsRUFBRTtLQUlMOzs7O0lBRWpCLGdDQUFROzs7SUFBUjtLQUNDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixzRUFBb0M7O2lCQUVyQzs7Ozs7d0JBR0UsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUVMLFNBQVMsU0FBQyxXQUFXOzt3QkFmeEI7Ozs7Ozs7QUNBQTtBQUVBLElBQWEsZUFBZSxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUU7SUFDakQsVUFBVSxDQUFDLGtCQUFrQixFQUFFO1FB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

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ namespace object ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1pzpmodl.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/1pzpmodl.entry.js",
		"common",
		12
	],
	"./1pzpmodl.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/1pzpmodl.sc.entry.js",
		"common",
		13
	],
	"./2jswtbop.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/2jswtbop.entry.js",
		14
	],
	"./2jswtbop.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/2jswtbop.sc.entry.js",
		15
	],
	"./2tb9n2ap.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/2tb9n2ap.entry.js",
		"common",
		16
	],
	"./2tb9n2ap.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/2tb9n2ap.sc.entry.js",
		"common",
		17
	],
	"./4gbfyvzv.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4gbfyvzv.entry.js",
		0,
		"common",
		18
	],
	"./4gbfyvzv.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4gbfyvzv.sc.entry.js",
		0,
		"common",
		19
	],
	"./4rkkfyla.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4rkkfyla.entry.js",
		"common",
		20
	],
	"./4rkkfyla.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4rkkfyla.sc.entry.js",
		"common",
		21
	],
	"./4tbu6ang.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4tbu6ang.entry.js",
		0,
		"common",
		22
	],
	"./4tbu6ang.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4tbu6ang.sc.entry.js",
		0,
		"common",
		23
	],
	"./66owbfxb.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/66owbfxb.entry.js",
		"common",
		24
	],
	"./66owbfxb.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/66owbfxb.sc.entry.js",
		"common",
		25
	],
	"./7oweqjmw.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/7oweqjmw.entry.js",
		"common",
		26
	],
	"./7oweqjmw.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/7oweqjmw.sc.entry.js",
		"common",
		27
	],
	"./7zvak3av.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/7zvak3av.entry.js",
		"common",
		28
	],
	"./7zvak3av.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/7zvak3av.sc.entry.js",
		"common",
		29
	],
	"./abbqcyiq.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/abbqcyiq.entry.js",
		0,
		"common",
		30
	],
	"./abbqcyiq.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/abbqcyiq.sc.entry.js",
		0,
		"common",
		31
	],
	"./agpviox7.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/agpviox7.entry.js",
		"common",
		32
	],
	"./agpviox7.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/agpviox7.sc.entry.js",
		"common",
		33
	],
	"./amegv4d5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/amegv4d5.entry.js",
		"common",
		34
	],
	"./amegv4d5.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/amegv4d5.sc.entry.js",
		"common",
		35
	],
	"./anfqrtay.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/anfqrtay.entry.js",
		"common",
		36
	],
	"./anfqrtay.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/anfqrtay.sc.entry.js",
		"common",
		37
	],
	"./avaaiatb.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/avaaiatb.entry.js",
		"common",
		38
	],
	"./avaaiatb.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/avaaiatb.sc.entry.js",
		"common",
		39
	],
	"./aww4ac6s.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/aww4ac6s.entry.js",
		"common",
		40
	],
	"./aww4ac6s.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/aww4ac6s.sc.entry.js",
		"common",
		41
	],
	"./bo1l5nbw.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/bo1l5nbw.entry.js",
		"common",
		42
	],
	"./bo1l5nbw.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/bo1l5nbw.sc.entry.js",
		"common",
		43
	],
	"./c6noyomn.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/c6noyomn.entry.js",
		"common",
		44
	],
	"./c6noyomn.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/c6noyomn.sc.entry.js",
		"common",
		45
	],
	"./cgokvnwh.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/cgokvnwh.entry.js",
		"common",
		46
	],
	"./cgokvnwh.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/cgokvnwh.sc.entry.js",
		"common",
		47
	],
	"./ciqsj4dy.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ciqsj4dy.entry.js",
		"common",
		48
	],
	"./ciqsj4dy.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ciqsj4dy.sc.entry.js",
		"common",
		49
	],
	"./cwnj34kp.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/cwnj34kp.entry.js",
		"common",
		50
	],
	"./cwnj34kp.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/cwnj34kp.sc.entry.js",
		"common",
		51
	],
	"./d9zwne4w.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/d9zwne4w.entry.js",
		"common",
		52
	],
	"./d9zwne4w.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/d9zwne4w.sc.entry.js",
		"common",
		53
	],
	"./dqxouk28.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/dqxouk28.entry.js",
		"common",
		54
	],
	"./dqxouk28.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/dqxouk28.sc.entry.js",
		"common",
		55
	],
	"./e4opalas.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/e4opalas.entry.js",
		"common",
		56
	],
	"./e4opalas.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/e4opalas.sc.entry.js",
		"common",
		57
	],
	"./eftwlusu.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/eftwlusu.entry.js",
		"common",
		58
	],
	"./eftwlusu.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/eftwlusu.sc.entry.js",
		"common",
		59
	],
	"./fdxwbbw7.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fdxwbbw7.entry.js",
		"common",
		60
	],
	"./fdxwbbw7.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fdxwbbw7.sc.entry.js",
		"common",
		61
	],
	"./g9jybbru.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/g9jybbru.entry.js",
		"common",
		62
	],
	"./g9jybbru.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/g9jybbru.sc.entry.js",
		"common",
		63
	],
	"./hz9cqqbq.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/hz9cqqbq.entry.js",
		"common",
		64
	],
	"./hz9cqqbq.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/hz9cqqbq.sc.entry.js",
		"common",
		65
	],
	"./i65pyu1k.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/i65pyu1k.entry.js",
		0,
		"common",
		66
	],
	"./i65pyu1k.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/i65pyu1k.sc.entry.js",
		0,
		"common",
		67
	],
	"./ijltfkuh.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ijltfkuh.entry.js",
		"common",
		68
	],
	"./ijltfkuh.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ijltfkuh.sc.entry.js",
		"common",
		69
	],
	"./j66fx9bc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j66fx9bc.entry.js",
		70
	],
	"./j66fx9bc.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j66fx9bc.sc.entry.js",
		71
	],
	"./j6o0sevc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j6o0sevc.entry.js",
		"common",
		72
	],
	"./j6o0sevc.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j6o0sevc.sc.entry.js",
		"common",
		73
	],
	"./j8ajgnpj.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j8ajgnpj.entry.js",
		"common",
		74
	],
	"./j8ajgnpj.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/j8ajgnpj.sc.entry.js",
		"common",
		75
	],
	"./jqqxsmgi.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jqqxsmgi.entry.js",
		0,
		"common",
		76
	],
	"./jqqxsmgi.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jqqxsmgi.sc.entry.js",
		0,
		"common",
		77
	],
	"./jsgmefly.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jsgmefly.entry.js",
		0,
		"common",
		78
	],
	"./jsgmefly.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jsgmefly.sc.entry.js",
		0,
		"common",
		79
	],
	"./jtmury4k.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jtmury4k.entry.js",
		0,
		"common",
		80
	],
	"./jtmury4k.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jtmury4k.sc.entry.js",
		0,
		"common",
		81
	],
	"./kcdmhy07.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/kcdmhy07.entry.js",
		"common",
		82
	],
	"./kcdmhy07.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/kcdmhy07.sc.entry.js",
		"common",
		83
	],
	"./kgmeu34f.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/kgmeu34f.entry.js",
		"common",
		84
	],
	"./kgmeu34f.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/kgmeu34f.sc.entry.js",
		"common",
		85
	],
	"./kjeyzltx.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/kjeyzltx.entry.js",
		0,
		"common",
		86
	],
	"./kjeyzltx.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/kjeyzltx.sc.entry.js",
		0,
		"common",
		87
	],
	"./m5qundsq.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/m5qundsq.entry.js",
		"common",
		88
	],
	"./m5qundsq.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/m5qundsq.sc.entry.js",
		"common",
		89
	],
	"./mbwcje7z.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mbwcje7z.entry.js",
		"common",
		90
	],
	"./mbwcje7z.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mbwcje7z.sc.entry.js",
		"common",
		91
	],
	"./mdt74s6p.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mdt74s6p.entry.js",
		0,
		"common",
		92
	],
	"./mdt74s6p.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mdt74s6p.sc.entry.js",
		0,
		"common",
		93
	],
	"./mm8konib.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mm8konib.entry.js",
		"common",
		94
	],
	"./mm8konib.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mm8konib.sc.entry.js",
		"common",
		95
	],
	"./n2nifhdk.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/n2nifhdk.entry.js",
		"common",
		96
	],
	"./n2nifhdk.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/n2nifhdk.sc.entry.js",
		"common",
		97
	],
	"./n2wua36d.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/n2wua36d.entry.js",
		"common",
		98
	],
	"./n2wua36d.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/n2wua36d.sc.entry.js",
		"common",
		99
	],
	"./ndbyi7fm.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ndbyi7fm.entry.js",
		"common",
		100
	],
	"./ndbyi7fm.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ndbyi7fm.sc.entry.js",
		"common",
		101
	],
	"./nhxc3mja.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nhxc3mja.entry.js",
		"common",
		102
	],
	"./nhxc3mja.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nhxc3mja.sc.entry.js",
		"common",
		103
	],
	"./nvv9lfjg.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nvv9lfjg.entry.js",
		"common",
		104
	],
	"./nvv9lfjg.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nvv9lfjg.sc.entry.js",
		"common",
		105
	],
	"./ouevpaq6.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ouevpaq6.entry.js",
		"common",
		106
	],
	"./ouevpaq6.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ouevpaq6.sc.entry.js",
		"common",
		107
	],
	"./pfpccits.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/pfpccits.entry.js",
		"common",
		108
	],
	"./pfpccits.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/pfpccits.sc.entry.js",
		"common",
		109
	],
	"./pmodhsil.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/pmodhsil.entry.js",
		0,
		"common",
		110
	],
	"./pmodhsil.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/pmodhsil.sc.entry.js",
		0,
		"common",
		111
	],
	"./qs3thx5n.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qs3thx5n.entry.js",
		"common",
		112
	],
	"./qs3thx5n.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qs3thx5n.sc.entry.js",
		"common",
		113
	],
	"./rt66rp5t.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/rt66rp5t.entry.js",
		114
	],
	"./rt66rp5t.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/rt66rp5t.sc.entry.js",
		115
	],
	"./sdggb8fc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sdggb8fc.entry.js",
		"common",
		116
	],
	"./sdggb8fc.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sdggb8fc.sc.entry.js",
		"common",
		117
	],
	"./syslsoun.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/syslsoun.entry.js",
		0,
		"common",
		118
	],
	"./syslsoun.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/syslsoun.sc.entry.js",
		0,
		"common",
		119
	],
	"./t0hn09ko.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/t0hn09ko.entry.js",
		0,
		"common",
		120
	],
	"./t0hn09ko.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/t0hn09ko.sc.entry.js",
		0,
		"common",
		121
	],
	"./thel3zmh.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/thel3zmh.entry.js",
		0,
		"common",
		122
	],
	"./thel3zmh.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/thel3zmh.sc.entry.js",
		0,
		"common",
		123
	],
	"./ufdbkxs8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ufdbkxs8.entry.js",
		"common",
		124
	],
	"./ufdbkxs8.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ufdbkxs8.sc.entry.js",
		"common",
		125
	],
	"./uiu7lhj6.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/uiu7lhj6.entry.js",
		"common",
		126
	],
	"./uiu7lhj6.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/uiu7lhj6.sc.entry.js",
		"common",
		127
	],
	"./ujzgtij1.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ujzgtij1.entry.js",
		"common",
		128
	],
	"./ujzgtij1.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ujzgtij1.sc.entry.js",
		"common",
		129
	],
	"./untco4jo.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/untco4jo.entry.js",
		"common",
		130
	],
	"./untco4jo.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/untco4jo.sc.entry.js",
		"common",
		131
	],
	"./vmkrep9v.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/vmkrep9v.entry.js",
		"common",
		132
	],
	"./vmkrep9v.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/vmkrep9v.sc.entry.js",
		"common",
		133
	],
	"./vvipc7rr.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/vvipc7rr.entry.js",
		"common",
		134
	],
	"./vvipc7rr.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/vvipc7rr.sc.entry.js",
		"common",
		135
	],
	"./vyajviiv.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/vyajviiv.entry.js",
		"common",
		136
	],
	"./vyajviiv.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/vyajviiv.sc.entry.js",
		"common",
		137
	],
	"./wjweccrx.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wjweccrx.entry.js",
		0,
		"common",
		138
	],
	"./wjweccrx.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wjweccrx.sc.entry.js",
		0,
		"common",
		139
	],
	"./wwxoh75w.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wwxoh75w.entry.js",
		"common",
		140
	],
	"./wwxoh75w.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wwxoh75w.sc.entry.js",
		"common",
		141
	],
	"./xcsewabo.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xcsewabo.entry.js",
		142
	],
	"./xcsewabo.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xcsewabo.sc.entry.js",
		143
	],
	"./xddssfba.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xddssfba.entry.js",
		"common",
		144
	],
	"./xddssfba.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xddssfba.sc.entry.js",
		"common",
		145
	],
	"./xgggkkjr.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xgggkkjr.entry.js",
		"common",
		146
	],
	"./xgggkkjr.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xgggkkjr.sc.entry.js",
		"common",
		147
	],
	"./xofobi9u.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xofobi9u.entry.js",
		"common",
		148
	],
	"./xofobi9u.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xofobi9u.sc.entry.js",
		"common",
		149
	],
	"./xssirbex.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xssirbex.entry.js",
		"common",
		150
	],
	"./xssirbex.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xssirbex.sc.entry.js",
		"common",
		151
	],
	"./yvqnqulj.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/yvqnqulj.entry.js",
		"common",
		152
	],
	"./yvqnqulj.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/yvqnqulj.sc.entry.js",
		"common",
		153
	],
	"./yw40bctp.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/yw40bctp.entry.js",
		154
	],
	"./yw40bctp.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/yw40bctp.sc.entry.js",
		155
	],
	"./zalxsgrw.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zalxsgrw.entry.js",
		"common",
		156
	],
	"./zalxsgrw.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zalxsgrw.sc.entry.js",
		"common",
		157
	],
	"./zg6ggdwp.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zg6ggdwp.entry.js",
		"common",
		158
	],
	"./zg6ggdwp.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zg6ggdwp.sc.entry.js",
		"common",
		159
	],
	"./zzgl2dte.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zzgl2dte.entry.js",
		"common",
		160
	],
	"./zzgl2dte.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zzgl2dte.sc.entry.js",
		"common",
		161
	],
	"./zzifk9rl.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zzifk9rl.entry.js",
		"common",
		162
	],
	"./zzifk9rl.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zzifk9rl.sc.entry.js",
		"common",
		163
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
	"./pages/components/components.module": [
		"./src/app/pages/components/components.module.ts",
		"pages-components-components-module"
	],
	"./pages/dialog/dialog.module": [
		"./src/app/pages/dialog/dialog.module.ts",
		"pages-dialog-dialog-module"
	],
	"./pages/icon/icon.module": [
		"./src/app/pages/icon/icon.module.ts",
		"pages-icon-icon-module"
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
	"./pages/password/password.module": [
		"./src/app/pages/password/password.module.ts",
		"pages-password-password-module"
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
        redirectTo: 'components',
        pathMatch: 'full'
    },
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
        path: 'map-bottom-sheet',
        loadChildren: './pages/native-map-bottom-sheet/native-map-bottom-sheet.module#NativeMapBottomSheetPageModule'
    },
    { path: 'dialog', loadChildren: './pages/dialog/dialog.module#DialogPageModule' }
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

module.exports = "<ion-app>\n  <ion-split-pane>\n    <ion-menu menuId=\"menuId\" [fivCollapseMenu]=\"true\" [hoverMenu]=\"true\" #menu=menuCollapse >\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n                <fiv-collapsable-menu-button #mb *fivIf=\"['desktop']\" [menu]=\"menu\"></fiv-collapsable-menu-button>\n          </ion-buttons>\n          <ion-title>Logo</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n          <fiv-router-item position=\"right\" shape=\"dot\" [pageUrl]=\"p.url\" *ngFor=\"let p of appPages\">\n              <ion-menu-toggle auto-hide=\"false\">\n                <fiv-ripple>\n                    <ion-item>\n                        <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n                        <ion-label>\n                          {{p.title}}\n                        </ion-label>\n                      </ion-item>\n                </fiv-ripple>\n                  \n                </ion-menu-toggle>\n          </fiv-router-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet main></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n"

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
    function AppComponent(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.appPages = [
            {
                title: 'Components',
                url: '/components',
                icon: 'home'
            },
            {
                title: 'Dialog',
                url: '/dialog',
                icon: 'home'
            },
            {
                title: 'Password Item',
                url: '/password',
                icon: 'key'
            },
            {
                title: 'Toolbar Search',
                url: '/toolbar-search',
                icon: 'search'
            },
            {
                title: 'Loading',
                url: '/loading',
                icon: 'home'
            },
            {
                title: 'Bottom Sheet',
                url: '/bottom-sheet',
                icon: 'home'
            },
            {
                title: 'App Bar',
                url: '/app-bar',
                icon: 'home'
            },
            {
                title: 'Viewport Directive',
                url: '/viewport',
                icon: 'home'
            },
            {
                title: 'Icon',
                url: '/icon',
                icon: 'home'
            },
            {
                title: 'Native Map',
                url: '/native-map',
                icon: 'map'
            },
            {
                title: 'Native Map with Bottom Sheet',
                url: '/map-bottom-sheet',
                icon: 'map'
            }
        ];
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
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core */ "./dist/core/fesm5/fivethree-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            entryComponents: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                core__WEBPACK_IMPORTED_MODULE_0__["FivethreeCoreModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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