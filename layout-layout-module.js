(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./dist/layout/fesm5/fivethree-layout.js":
/*!***********************************************!*\
  !*** ./dist/layout/fesm5/fivethree-layout.js ***!
  \***********************************************/
/*! exports provided: LayoutService, LayoutModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AppBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ToolbarSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LayoutService = /** @class */ (function () {
    function LayoutService() {
    }
    LayoutService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LayoutService.ctorParameters = function () { return []; };
    /** @nocollapse */ LayoutService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function LayoutService_Factory() { return new LayoutService(); }, token: LayoutService, providedIn: "root" });
    return LayoutService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AppBarComponent = /** @class */ (function () {
    function AppBarComponent(el) {
        this.el = el;
        this.hidden = false;
        this.fabLeft = true;
        this.fabRight = false;
        this.fabVisible = true;
        this.hideOnScroll = true;
        this.fabIcon = 'md-add';
        this.currentDeltaY = 0;
        this.fabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fabHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fabShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    AppBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var content = this.el.nativeElement.closest('ion-content');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(content, 'ionScroll').subscribe(function (event) { return _this.ionScroll(event); });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(content, 'ionScrollStart').subscribe(function (event) { return console.log(event); });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(content, 'ionScrollEnd').subscribe(function (event) { return _this.ionScrollEnd(event); });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AppBarComponent.prototype.ionScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log('scroll', event, this.hideOnScroll);
        if (!this.hideOnScroll) {
            console.log('#####');
            return;
        }
        if (event.detail.deltaY) {
            this.currentDeltaY = event.detail.deltaY;
            console.log(this.currentDeltaY, this.currentDeltaY > 0);
        }
        this.hidden = this.currentDeltaY > 0;
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.onFabClick = /**
     * @return {?}
     */
    function () {
        this.fabClick.emit(this);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AppBarComponent.prototype.ionScrollStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AppBarComponent.prototype.ionScrollEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.hideFab = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.fabVisible = false;
        return new Promise(function (resolve) {
            _this.fabHide.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((function (res) { console.log(res); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event.toState === 'void'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
                console.log('hide fab done', _this);
                resolve(_this);
            });
        });
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.showFab = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.fabVisible = true;
        return new Promise(function (resolve) {
            _this.fabShow.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event.fromState === 'void'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
                resolve(_this);
            });
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AppBarComponent.prototype.onFabAnimStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AppBarComponent.prototype.onFabAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(event.fromState + ' to ' + event.toState);
        if (event.fromState === 'void') {
            this.fabShow.emit(event);
        }
        else {
            this.fabHide.emit(event);
        }
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.transitionLeft = /**
     * @return {?}
     */
    function () {
        this.fabRight = false;
        this.fabLeft = true;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(425).toPromise();
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.transitionRight = /**
     * @return {?}
     */
    function () {
        this.fabRight = true;
        this.fabLeft = false;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(425).toPromise();
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.transitionMiddle = /**
     * @return {?}
     */
    function () {
        this.fabRight = false;
        this.fabLeft = false;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(425).toPromise();
    };
    /**
     * @return {?}
     */
    AppBarComponent.prototype.cutOutTransitionDone = /**
     * @return {?}
     */
    function () {
        this.fabVisible = true;
    };
    AppBarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'app-bar',
                    template: "\n<div #shape id=\"shape\" [@appBarAnim] *ngIf=\"!hidden\" [ngClass]=\"{'fab-left': fabLeft , 'fab-right':fabRight, 'no-cut': !fabVisible}\">\n    <div [@delayAnim] *ngIf=\"fabVisible\" class=\"box left\"></div>\n    <div [@delayAnim] *ngIf=\"fabVisible\" class=\"box right\"></div>\n    <div [@fullBarAnim] *ngIf=\"!fabVisible\" class=\"box full\"></div>\n    <div [@cutoutAnim]=\"fabLeft && fabVisible ? 'left' : fabRight && fabVisible ? 'right' : fabVisible? 'middle' : ''\"  *ngIf=\"fabVisible\" class=\"half\"></div>\n  <ion-buttons id=\"buttons-right\">\n    <ng-content select=\"[end]\"></ng-content>\n  </ion-buttons>\n  <ion-buttons id=\"buttons-left\">\n    <ng-content select=\"[start]\"></ng-content>\n  </ion-buttons>\n</div>\n\n<ion-fab-button color=\"light\" [@fabScrollAnim]=\"hidden ? 'scroll' : 'normal'\" [@fabAnim]=\"fabLeft && fabVisible ? 'left' : fabRight && fabVisible ? 'right' : fabVisible? 'middle' : ''\" *ngIf=\"fabVisible\" (@fabAnim.start)=\"onFabAnimStart($event)\" (@fabAnim.done)=\"onFabAnimDone($event)\" (click)=\"onFabClick()\" id=\"fab\">\n  <ion-icon [name]=\"fabIcon\"></ion-icon>\n</ion-fab-button>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('appBarAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(100%)', opacity: 0.4 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(0)', opacity: 1 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(0)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(100%)', opacity: 0.4 }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('delayAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0.4 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('180ms 175ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('180ms 175ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0.4 }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fullBarAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0.4 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('80ms 335ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('80ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fabAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('left => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'scale(1)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('175ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'scale(0)', opacity: 0.4 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('right => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'scale(1)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('175ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'scale(0)', opacity: 0.4 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('middle => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: '50%', transform: 'scale(1) translateX(-50%)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('175ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: '50%', transform: 'scale(0) translateX(-72px)', opacity: 0.0 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => left', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: '24px', transform: 'scale(0)', opacity: 0.8 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('175ms 40ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: '24px', transform: 'scale(1)', opacity: 1 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => right', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: 'calc(100% - 80px)', transform: 'scale(0)', opacity: 0.8 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('175ms 40ms  ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: 'calc(100% - 80px)', transform: 'scale(1)', opacity: 1 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => middle', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: '50%', transform: 'translateX(-50%) scale(0)', opacity: 0.8 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('175ms 40ms  ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: '50%', transform: 'translateX(-50%) scale(1)', opacity: 1 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: '24px', transform: 'unset' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: 'calc(100% - 80px)', transform: 'unset' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('middle', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: '50%', transform: 'translateX(-50%)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fabScrollAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('scroll => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('125ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ top: '-50%' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('normal => scroll', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('175ms 175ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ top: '-16px' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('scroll', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ top: '-16px' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ top: '-50%' })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('cutoutAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('left => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'scaleY(1)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('220ms 10ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'scaleY(0)', opacity: 0 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('right => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'scaleY(1)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('220ms 100ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'scaleY(0)', opacity: 0 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('middle => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'scaleY(1) translateX(-50%)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('220ms 100ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'scaleY(0) translateX(-50%)', opacity: 0 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => left', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: '24px', transform: 'scaleY(0)', opacity: 0.4, 'box-shadow': 'none' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('220ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                    left: '16px', transform: 'scaleY(1)', opacity: 1, 'box-shadow': 'inset 0px -4px 6px -4px #333'
                                }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => right', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: 'calc(100% - 88px)', transform: 'scaleY(0)', opacity: 0.4, 'box-shadow': 'none' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('220ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: 'calc(100% - 88px)', transform: 'scaleY(1)', opacity: 1, 'box-shadow': 'inset 0px -4px 6px -4px #333' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => middle', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: '50%', transform: 'translateX(-50%) scaleY(0)', opacity: 0.4, 'box-shadow': 'none' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('220ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: '50%', transform: 'translateX(-50%) scaleY(1)', opacity: 1, 'box-shadow': 'inset 0px -4px 6px -4px #333' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: '16px', transform: 'unset' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: 'calc(100% - 88px)', transform: 'unset' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('middle', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ left: '50%', transform: 'translateX(-50%)' }))
                        ])
                    ],
                    styles: [":host{position:fixed;width:100%;bottom:0;left:0;height:56px}#shape{width:100%;height:56px;overflow:hidden;position:relative;margin:0 auto;z-index:1}#shape:after,#shape:before{content:'';position:absolute}#shape:before{top:-36px;left:50%;width:72px;height:72px;border-radius:50%;box-shadow:0 0 0 9999px var(--ion-color-primary);z-index:-1;-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:220ms}#shape:after{top:0;left:0;width:100%;height:100%}#shape.fab-left:before{left:16px;-webkit-transform:unset;transform:unset}#shape.fab-right:before{left:calc(100% - 72px - 16px);-webkit-transform:unset;transform:unset}#shape.no-cut:before{height:0;transition:220ms 120ms}#fab{position:absolute;top:-50%;border-radius:50%;z-index:5000;transition:.3s;color:var(--ion-color-primary)}#buttons-right{position:absolute;right:0;color:var(--ion-color-primary-contrast);height:56px}#buttons-left{position:absolute;left:0;color:var(--ion-color-primary-contrast);height:56px}.box{width:calc(50% - 36px);height:1px;position:absolute;top:0;box-shadow:0 0 5px #333;transition:.3s}.box.left{left:0}.box.right{right:0}.box.full{left:0;width:100%}.half{top:0;left:50%;width:72px;height:36px;border-bottom-left-radius:72px;border-bottom-right-radius:72px;z-index:-1;-webkit-transform:translateX(-50%);transform:translateX(-50%);position:absolute;box-shadow:inset 0 -4px 6px -4px #333;transition:.3s}.fab-left .half{left:16px;-webkit-transform:unset;transform:unset}.fab-right .half{left:calc(100% - 72px - 16px);-webkit-transform:unset;transform:unset}.fab-right .box.left{width:calc(100% - 72px - 16px)}.fab-left .box.left,.fab-right .box.right{width:16px}.fab-left .box.right{width:calc(100% - 72px - 16px)}"]
                }] }
    ];
    /** @nocollapse */
    AppBarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    AppBarComponent.propDecorators = {
        hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fabLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fabRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fabVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hideOnScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fabIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        toolbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['shape',] }],
        fabClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fabHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fabShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return AppBarComponent;
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
        this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype.openSearchbar = /**
     * @return {?}
     */
    function () {
        this.searching = true;
        this.titleVisible = false;
    };
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype.closeSearchbar = /**
     * @return {?}
     */
    function () {
        this.closeButtonVisible = false;
        this.close.emit();
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
     * @return {?}
     */
    ToolbarSearchComponent.prototype.seachbarAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log('!!!', event);
        if (event.fromState !== 'void') {
            this.titleVisible = true;
        }
    };
    ToolbarSearchComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'app-toolbar-search',
                    template: "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ng-content select=\"[start]\"></ng-content>\n\n  </ion-buttons>\n  <ion-title [@titleAnim] *ngIf=\"titleVisible\">{{title}}</ion-title>\n  <ion-input (ionChange)=\"inputChange.emit($event)\" [placeholder]=\"!titleVisible ? placeholder : ''\" autofocus #input class=\"toolbar-searchbar\"\n    [@searchbarAnim] (@searchbarAnim.done)=\"seachbarAnimDone($event)\" *ngIf=\"searching\">\n  </ion-input>\n\n  <ion-buttons slot=\"end\">\n    <ion-button [@rotateAnim] (@rotateAnim.done)=\"searchAnimDone($event)\" *ngIf=\"!searching\" (click)=\"openSearchbar()\">\n      <ion-icon name=\"md-search\"></ion-icon>\n    </ion-button>\n    <ion-button [@rotateAnim] (@rotateAnim.done)=\"closeAnimDone($event)\" *ngIf=\"closeButtonVisible\" (click)=\"closeSearchbar()\">\n      <ion-icon name=\"md-close\"></ion-icon>\n    </ion-button>\n    <ng-content select=\"[end]\"></ng-content>\n\n  </ion-buttons>\n</ion-toolbar>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('searchbarAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ width: '0px' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('175ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ width: '100%' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ width: '100%' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('125ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ width: '0px', opacity: 0 }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: '0' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('175ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: '1', transform: 'rotateZ(0deg)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('175ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: '0', transform: 'rotateZ(45deg)' }))
                            ]),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('titleAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: '0', transform: 'translateY(-20%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('175ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: '1', transform: 'translateY(0)' }))
                            ]),
                        ]),
                    ],
                    styles: [".toolbar-searchbar{float:right}"]
                }] }
    ];
    /** @nocollapse */
    ToolbarSearchComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    ToolbarSearchComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ToolbarSearchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                    ],
                    declarations: [AppBarComponent, ToolbarSearchComponent],
                    exports: [AppBarComponent, ToolbarSearchComponent]
                },] }
    ];
    return LayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml2ZXRocmVlLWxheW91dC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGZpdmV0aHJlZS9sYXlvdXQvbGliL2xheW91dC5zZXJ2aWNlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2xheW91dC9saWIvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9sYXlvdXQvbGliL3Rvb2xiYXItc2VhcmNoL3Rvb2xiYXItc2VhcmNoLmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9sYXlvdXQvbGliL2xheW91dC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCwgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSwgc3RhdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLWJhci5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignYXBwQmFyQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJywgb3BhY2l0eTogMC40IH0pLFxuICAgICAgICBhbmltYXRlKCczMDBtcyBlYXNlLW91dCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsIG9wYWNpdHk6IDEgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJywgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzAwbXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScsIG9wYWNpdHk6IDAuNCB9KSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignZGVsYXlBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAuNCB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTgwbXMgMTc1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxIH0pLFxuICAgICAgICBhbmltYXRlKCcxODBtcyAxNzVtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAwLjQgfSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2Z1bGxCYXJBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAuNCB9KSxcbiAgICAgICAgYW5pbWF0ZSgnODBtcyAzMzVtcyBlYXNlLW91dCcsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEgfSksXG4gICAgICAgIGFuaW1hdGUoJzgwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignZmFiQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ2xlZnQgPT4gdm9pZCcsIFtcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgxKScsIG9wYWNpdHk6IDEgfSksXG4gICAgICAgIGFuaW1hdGUoJzE3NW1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJywgb3BhY2l0eTogMC40IH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdyaWdodCA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDEpJywgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknLCBvcGFjaXR5OiAwLjQgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ21pZGRsZSA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICdzY2FsZSgxKSB0cmFuc2xhdGVYKC01MCUpJywgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgZWFzZS1pbicsIHN0eWxlKHsgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3NjYWxlKDApIHRyYW5zbGF0ZVgoLTcycHgpJywgb3BhY2l0eTogMC4wIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGxlZnQnLCBbXG4gICAgICAgIHN0eWxlKHsgbGVmdDogJzI0cHgnLCB0cmFuc2Zvcm06ICdzY2FsZSgwKScsIG9wYWNpdHk6IDAuOCB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgNDBtcyBlYXNlLW91dCcsIHN0eWxlKHsgbGVmdDogJzI0cHgnLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScsIG9wYWNpdHk6IDEgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gcmlnaHQnLCBbXG4gICAgICAgIHN0eWxlKHsgbGVmdDogJ2NhbGMoMTAwJSAtIDgwcHgpJywgdHJhbnNmb3JtOiAnc2NhbGUoMCknLCBvcGFjaXR5OiAwLjggfSksXG4gICAgICAgIGFuaW1hdGUoJzE3NW1zIDQwbXMgIGVhc2Utb3V0Jywgc3R5bGUoeyBsZWZ0OiAnY2FsYygxMDAlIC0gODBweCknLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScsIG9wYWNpdHk6IDEgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gbWlkZGxlJywgW1xuICAgICAgICBzdHlsZSh7IGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDApJywgb3BhY2l0eTogMC44IH0pLFxuICAgICAgICBhbmltYXRlKCcxNzVtcyA0MG1zICBlYXNlLW91dCcsIHN0eWxlKHsgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMSknLCBvcGFjaXR5OiAxIH0pKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgnbGVmdCcsIHN0eWxlKHsgbGVmdDogJzI0cHgnLCB0cmFuc2Zvcm06ICd1bnNldCcgfSkpLFxuICAgICAgc3RhdGUoJ3JpZ2h0Jywgc3R5bGUoeyBsZWZ0OiAnY2FsYygxMDAlIC0gODBweCknLCB0cmFuc2Zvcm06ICd1bnNldCcgfSkpLFxuICAgICAgc3RhdGUoJ21pZGRsZScsIHN0eWxlKHsgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknIH0pKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2ZhYlNjcm9sbEFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCdzY3JvbGwgPT4gbm9ybWFsJywgW1xuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcsIHN0eWxlKHsgdG9wOiAnLTUwJScgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiBzY3JvbGwnLCBbXG4gICAgICAgIGFuaW1hdGUoJzE3NW1zIDE3NW1zIGVhc2UtaW4nLCBzdHlsZSh7IHRvcDogJy0xNnB4JyB9KSlcbiAgICAgIF0pLFxuXG4gICAgICBzdGF0ZSgnc2Nyb2xsJywgc3R5bGUoeyB0b3A6ICctMTZweCcgfSkpLFxuICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgdG9wOiAnLTUwJScgfSkpLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2N1dG91dEFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCdsZWZ0ID0+IHZvaWQnLCBbXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJywgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjIwbXMgMTBtcyBlYXNlJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZVkoMCknLCBvcGFjaXR5OiAwIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdyaWdodCA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlWSgxKScsIG9wYWNpdHk6IDEgfSksXG4gICAgICAgIGFuaW1hdGUoJzIyMG1zIDEwMG1zIGVhc2UnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlWSgwKScsIG9wYWNpdHk6IDAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ21pZGRsZSA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlWSgxKSB0cmFuc2xhdGVYKC01MCUpJywgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjIwbXMgMTAwbXMgZWFzZScsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGVZKDApIHRyYW5zbGF0ZVgoLTUwJSknLCBvcGFjaXR5OiAwIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGxlZnQnLCBbXG4gICAgICAgIHN0eWxlKHsgbGVmdDogJzI0cHgnLCB0cmFuc2Zvcm06ICdzY2FsZVkoMCknLCBvcGFjaXR5OiAwLjQsICdib3gtc2hhZG93JzogJ25vbmUnIH0pLFxuICAgICAgICBhbmltYXRlKCcyMjBtcyBlYXNlJywgc3R5bGUoe1xuICAgICAgICAgIGxlZnQ6ICcxNnB4JywgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJywgb3BhY2l0eTogMSwgJ2JveC1zaGFkb3cnOiAnaW5zZXQgMHB4IC00cHggNnB4IC00cHggIzMzMydcbiAgICAgICAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gcmlnaHQnLCBbXG4gICAgICAgIHN0eWxlKHsgbGVmdDogJ2NhbGMoMTAwJSAtIDg4cHgpJywgdHJhbnNmb3JtOiAnc2NhbGVZKDApJywgb3BhY2l0eTogMC40LCAnYm94LXNoYWRvdyc6ICdub25lJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjIwbXMgZWFzZScsXG4gICAgICAgICAgc3R5bGUoeyBsZWZ0OiAnY2FsYygxMDAlIC0gODhweCknLCB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLCBvcGFjaXR5OiAxLCAnYm94LXNoYWRvdyc6ICdpbnNldCAwcHggLTRweCA2cHggLTRweCAjMzMzJyB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiBtaWRkbGUnLCBbXG4gICAgICAgIHN0eWxlKHsgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDApJywgb3BhY2l0eTogMC40LCAnYm94LXNoYWRvdyc6ICdub25lJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjIwbXMgZWFzZScsXG4gICAgICAgICAgc3R5bGUoeyBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMSknLCBvcGFjaXR5OiAxLCAnYm94LXNoYWRvdyc6ICdpbnNldCAwcHggLTRweCA2cHggLTRweCAjMzMzJyB9KSlcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ2xlZnQnLCBzdHlsZSh7IGxlZnQ6ICcxNnB4JywgdHJhbnNmb3JtOiAndW5zZXQnIH0pKSxcbiAgICAgIHN0YXRlKCdyaWdodCcsIHN0eWxlKHsgbGVmdDogJ2NhbGMoMTAwJSAtIDg4cHgpJywgdHJhbnNmb3JtOiAndW5zZXQnIH0pKSxcbiAgICAgIHN0YXRlKCdtaWRkbGUnLCBzdHlsZSh7IGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyB9KSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcEJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaGlkZGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZhYkxlZnQgPSB0cnVlO1xuICBASW5wdXQoKSBmYWJSaWdodCA9IGZhbHNlO1xuICBASW5wdXQoKSBmYWJWaXNpYmxlID0gdHJ1ZTtcbiAgQElucHV0KCkgaGlkZU9uU2Nyb2xsID0gdHJ1ZTtcbiAgQElucHV0KCkgZmFiSWNvbjogc3RyaW5nID0gJ21kLWFkZCc7XG4gIGN1cnJlbnREZWx0YVkgPSAwO1xuICBAVmlld0NoaWxkKCdzaGFwZScpIHRvb2xiYXI6IEVsZW1lbnRSZWY7XG5cbiAgQE91dHB1dCgpIGZhYkNsaWNrOiBFdmVudEVtaXR0ZXI8QXBwQmFyQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZhYkhpZGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZmFiU2hvdzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7XG5cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbG9zZXN0KCdpb24tY29udGVudCcpXG4gICAgZnJvbUV2ZW50KGNvbnRlbnQsICdpb25TY3JvbGwnKS5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5pb25TY3JvbGwoZXZlbnQpKTtcbiAgICBmcm9tRXZlbnQoY29udGVudCwgJ2lvblNjcm9sbFN0YXJ0Jykuc3Vic2NyaWJlKGV2ZW50ID0+IGNvbnNvbGUubG9nKGV2ZW50KSk7XG4gICAgZnJvbUV2ZW50KGNvbnRlbnQsICdpb25TY3JvbGxFbmQnKS5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5pb25TY3JvbGxFbmQoZXZlbnQpKTtcbiAgfVxuXG4gIGlvblNjcm9sbChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdzY3JvbGwnLGV2ZW50LHRoaXMuaGlkZU9uU2Nyb2xsKTtcbiAgICBpZighdGhpcy5oaWRlT25TY3JvbGwpe1xuICAgICAgY29uc29sZS5sb2coJyMjIyMjJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChldmVudC5kZXRhaWwuZGVsdGFZKSB7XG4gICAgICB0aGlzLmN1cnJlbnREZWx0YVkgPSBldmVudC5kZXRhaWwuZGVsdGFZO1xuICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50RGVsdGFZLCB0aGlzLmN1cnJlbnREZWx0YVkgPiAwKTtcbiAgICB9XG4gICAgdGhpcy5oaWRkZW4gPSB0aGlzLmN1cnJlbnREZWx0YVkgPiAwO1xuICB9XG5cbiAgb25GYWJDbGljaygpIHtcbiAgICB0aGlzLmZhYkNsaWNrLmVtaXQodGhpcyk7XG4gIH1cblxuICBpb25TY3JvbGxTdGFydChldmVudCkge1xuXG4gIH1cblxuICBpb25TY3JvbGxFbmQoZXZlbnQpIHtcblxuICB9XG5cbiAgaGlkZUZhYigpOiBQcm9taXNlPEFwcEJhckNvbXBvbmVudD4ge1xuICAgIHRoaXMuZmFiVmlzaWJsZSA9IGZhbHNlO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcHBCYXJDb21wb25lbnQ+KHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5mYWJIaWRlLnBpcGUoXG4gICAgICAgIHRhcCgocmVzID0+IHtjb25zb2xlLmxvZyhyZXMpfSkpLFxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBhbnkpID0+IGV2ZW50LnRvU3RhdGUgPT09ICd2b2lkJyksXG4gICAgICAgIGZpcnN0KClcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hpZGUgZmFiIGRvbmUnLHRoaXMpO1xuICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgfSlcblxuICAgIH0pXG4gIH1cblxuICBzaG93RmFiKCk6IFByb21pc2U8QXBwQmFyQ29tcG9uZW50PiB7XG4gICAgdGhpcy5mYWJWaXNpYmxlID0gdHJ1ZTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXBwQmFyQ29tcG9uZW50PihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuZmFiU2hvdy5waXBlKFxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBhbnkpID0+IGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3ZvaWQnKSxcbiAgICAgICAgZmlyc3QoKVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgfSlcblxuICAgIH0pXG4gIH1cblxuICBvbkZhYkFuaW1TdGFydChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfVxuICBvbkZhYkFuaW1Eb25lKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQuZnJvbVN0YXRlICsgJyB0byAnICsgZXZlbnQudG9TdGF0ZSk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLmZhYlNob3cuZW1pdChldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmFiSGlkZS5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICB0cmFuc2l0aW9uTGVmdCgpIHtcbiAgICB0aGlzLmZhYlJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5mYWJMZWZ0ID0gdHJ1ZTtcbiAgICByZXR1cm4gdGltZXIoNDI1KS50b1Byb21pc2UoKTtcblxuICB9XG5cbiAgdHJhbnNpdGlvblJpZ2h0KCkge1xuICAgIHRoaXMuZmFiUmlnaHQgPSB0cnVlO1xuICAgIHRoaXMuZmFiTGVmdCA9IGZhbHNlO1xuICAgIHJldHVybiB0aW1lcig0MjUpLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgdHJhbnNpdGlvbk1pZGRsZSgpIHtcbiAgICB0aGlzLmZhYlJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5mYWJMZWZ0ID0gZmFsc2U7XG4gICAgcmV0dXJuIHRpbWVyKDQyNSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBjdXRPdXRUcmFuc2l0aW9uRG9uZSgpIHtcbiAgICB0aGlzLmZhYlZpc2libGUgPSB0cnVlO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LEV2ZW50RW1pdHRlcixFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlLCBzdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdG9vbGJhci1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbGJhci1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b29sYmFyLXNlYXJjaC5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2VhcmNoYmFyQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyB3aWR0aDogJzBweCcgfSksXG4gICAgICAgIGFuaW1hdGUoJzE3NW1zIGVhc2Utb3V0Jywgc3R5bGUoeyB3aWR0aDogJzEwMCUnIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIHN0eWxlKHsgd2lkdGg6ICcxMDAlJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicsIHN0eWxlKHsgd2lkdGg6ICcwcHgnLG9wYWNpdHk6IDAgfSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3JvdGF0ZUFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnfSksXG4gICAgICAgIGFuaW1hdGUoJzE3NW1zIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3JvdGF0ZVooMGRlZyknIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzE3NW1zIGVhc2UtaW4nLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZyknIH0pKVxuICAgICAgXSksXG4gICAgXSksXG4gICAgdHJpZ2dlcigndGl0bGVBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMjAlKSd9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSd9KSlcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHNlYXJjaGluZyA9IGZhbHNlO1xuICB0aXRsZVZpc2libGUgPSB0cnVlO1xuICBjbG9zZUJ1dHRvblZpc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgdGl0bGU6c3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjpzdHJpbmc7XG4gIEBPdXRwdXQoKSBpbnB1dENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvcGVuU2VhcmNoYmFyKCkge1xuICAgIHRoaXMuc2VhcmNoaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnRpdGxlVmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgY2xvc2VTZWFyY2hiYXIoKSB7XG4gICAgdGhpcy5jbG9zZUJ1dHRvblZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlLmVtaXQoKTtcblxuICB9XG5cbiAgc2VhcmNoQW5pbURvbmUoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnIyMjJywgZXZlbnQpO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvblZpc2libGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlQW5pbURvbmUoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnIyMjJywgZXZlbnQpO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xuICAgICAgdGhpcy5zZWFyY2hpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzZWFjaGJhckFuaW1Eb25lKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJyEhIScsZXZlbnQpO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xuICAgICAgdGhpcy50aXRsZVZpc2libGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQXBwQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IFRvb2xiYXJTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXItc2VhcmNoL3Rvb2xiYXItc2VhcmNoLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBJb25pY01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQXBwQmFyQ29tcG9uZW50LCBUb29sYmFyU2VhcmNoQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FwcEJhckNvbXBvbmVudCwgVG9vbGJhclNlYXJjaENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3dCQUpEOzs7Ozs7O0FDQUE7SUFrSUUseUJBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO3NCQWJmLEtBQUs7dUJBQ0osSUFBSTt3QkFDSCxLQUFLOzBCQUNILElBQUk7NEJBQ0YsSUFBSTt1QkFDRCxRQUFROzZCQUNuQixDQUFDO3dCQUdtQyxJQUFJLFlBQVksRUFBRTt1QkFDL0IsSUFBSSxZQUFZLEVBQUU7dUJBQ2xCLElBQUksWUFBWSxFQUFFO0tBS3hEOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQUEsaUJBS0M7O1FBSkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FB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

/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPageModule", function() { return LayoutPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _layout_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.page */ "./src/app/layout/layout.page.ts");
/* harmony import */ var dist_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dist/layout */ "./dist/layout/fesm5/fivethree-layout.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _layout_page__WEBPACK_IMPORTED_MODULE_5__["LayoutPage"]
    }
];
var LayoutPageModule = /** @class */ (function () {
    function LayoutPageModule() {
    }
    LayoutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                dist_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"]
            ],
            declarations: [_layout_page__WEBPACK_IMPORTED_MODULE_5__["LayoutPage"]]
        })
    ], LayoutPageModule);
    return LayoutPageModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.page.html":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-toolbar-search  placeholder=\"Text eingeben\" title=\"Titel\">\n    <ion-back-button defaultHref=\"/home\" start></ion-back-button>\n</app-toolbar-search>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" >\n    <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n    <app-bar [fabIcon]=\"appBar.fabLeft? 'md-help' : appBar.fabRight ? 'md-share-alt' : 'md-add'\" [fabLeft]=\"false\" [fabRight]=\"false\" #appBar (fabClick)=\"fabClicked($event)\">\n        <ion-menu-button *ngIf=\"!appBar.fabLeft && !appBar.fabRight\" start></ion-menu-button>\n        <ion-button *ngIf=\"!appBar.fabLeft && !appBar.fabRight\"  end icon-only>\n            <ion-icon name=\"md-profile\"></ion-icon>\n          </ion-button>\n      <ion-button *ngIf=\"!appBar.fabLeft && !appBar.fabRight\"  end icon-only>\n        <ion-icon name=\"md-search\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"!appBar.fabLeft && !appBar.fabRight\"  end icon-only>\n        <ion-icon name=\"md-more\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"appBar.fabRight\"  start icon-only>\n        <ion-icon name=\"md-mail\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"appBar.fabRight\"  start icon-only>\n        <ion-icon name=\"md-trash\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"appBar.fabRight\"  start icon-only>\n        <ion-icon name=\"md-archive\"></ion-icon>\n      </ion-button>\n      \n    </app-bar>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/layout/layout.page.scss":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button, ion-menu-button {\n  color: var(--ion-color-primary-contrast); }\n"

/***/ }),

/***/ "./src/app/layout/layout.page.ts":
/*!***************************************!*\
  !*** ./src/app/layout/layout.page.ts ***!
  \***************************************/
/*! exports provided: LayoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPage", function() { return LayoutPage; });
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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


var LayoutPage = /** @class */ (function () {
    function LayoutPage() {
    }
    LayoutPage.prototype.ngOnInit = function () {
    };
    LayoutPage.prototype.fabClicked = function (appBar) {
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
    LayoutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.page.html */ "./src/app/layout/layout.page.html"),
            styles: [__webpack_require__(/*! ./layout.page.scss */ "./src/app/layout/layout.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], LayoutPage);
    return LayoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map