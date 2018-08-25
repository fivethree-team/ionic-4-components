(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./dist/layout/fesm5/layout.js":
/*!*************************************!*\
  !*** ./dist/layout/fesm5/layout.js ***!
  \*************************************/
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
                    template: "\n<div #shape id=\"shape\" [@appBarAnim] *ngIf=\"!hidden\" [ngClass]=\"{'fab-left': fabLeft , 'fab-right':fabRight, 'no-cut': !fabVisible}\">\n    <div [@delayAnim] *ngIf=\"fabVisible\" class=\"box left\"></div>\n    <div [@delayAnim] *ngIf=\"fabVisible\" class=\"box right\"></div>\n    <div [@fullBarAnim] *ngIf=\"!fabVisible\" class=\"box full\"></div>\n    <div [@cutoutAnim]=\"fabLeft && fabVisible ? 'left' : fabRight && fabVisible ? 'right' : fabVisible? 'middle' : ''\"  *ngIf=\"fabVisible\" class=\"half\"></div>\n  <!-- <ion-buttons id=\"buttons-right\">\n    <ion-button icon-only>\n        <ion-icon name=\"arrow-dropup\"></ion-icon>\n      </ion-button>\n  </ion-buttons> -->\n</div>\n\n<ion-fab-button [@fabScrollAnim]=\"hidden ? 'scroll' : 'normal'\" [@fabAnim]=\"fabLeft && fabVisible ? 'left' : fabRight && fabVisible ? 'right' : fabVisible? 'middle' : ''\" *ngIf=\"fabVisible\" (@fabAnim.start)=\"onFabAnimStart($event)\" (@fabAnim.done)=\"onFabAnimDone($event)\" (click)=\"onFabClick()\" id=\"fab\">\n  <ion-icon name=\"arrow-dropup\"></ion-icon>\n</ion-fab-button>",
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
                    styles: [":host{position:fixed;width:100%;bottom:0;left:0;height:56px}#shape{width:100%;height:56px;overflow:hidden;position:relative;margin:0 auto;z-index:1}#shape:after,#shape:before{content:'';position:absolute}#shape:before{top:-36px;left:50%;width:72px;height:72px;border-radius:50%;box-shadow:0 0 0 9999px #dedede;z-index:-1;-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:220ms}#shape:after{top:0;left:0;width:100%;height:100%}#shape.fab-left:before{left:16px;-webkit-transform:unset;transform:unset}#shape.fab-right:before{left:calc(100% - 72px - 16px);-webkit-transform:unset;transform:unset}#shape.no-cut:before{height:0;transition:220ms 120ms}#fab{position:absolute;top:-50%;border-radius:50%;z-index:5000;transition:.3s}#buttons-right{position:absolute;right:0;color:#fff;height:56px}.box{width:calc(50% - 36px);height:1px;position:absolute;top:0;box-shadow:0 0 5px #333;transition:.3s}.box.left{left:0}.box.right{right:0}.box.full{left:0;width:100%}.half{top:0;left:50%;width:72px;height:36px;border-bottom-left-radius:72px;border-bottom-right-radius:72px;z-index:-1;-webkit-transform:translateX(-50%);transform:translateX(-50%);position:absolute;box-shadow:inset 0 -4px 6px -4px #333;transition:.3s}.fab-left .half{left:16px;-webkit-transform:unset;transform:unset}.fab-right .half{left:calc(100% - 72px - 16px);-webkit-transform:unset;transform:unset}.fab-right .box.left{width:calc(100% - 72px - 16px)}.fab-left .box.left,.fab-right .box.right{width:16px}.fab-left .box.right{width:calc(100% - 72px - 16px)}"]
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9sYXlvdXQvbGliL2xheW91dC5zZXJ2aWNlLnRzIiwibmc6Ly9sYXlvdXQvbGliL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvdG9vbGJhci1zZWFyY2gvdG9vbGJhci1zZWFyY2guY29tcG9uZW50LnRzIiwibmc6Ly9sYXlvdXQvbGliL2xheW91dC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCwgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSwgc3RhdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLWJhci5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignYXBwQmFyQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJywgb3BhY2l0eTogMC40IH0pLFxuICAgICAgICBhbmltYXRlKCczMDBtcyBlYXNlLW91dCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsIG9wYWNpdHk6IDEgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJywgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzAwbXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScsIG9wYWNpdHk6IDAuNCB9KSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignZGVsYXlBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAuNCB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTgwbXMgMTc1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxIH0pLFxuICAgICAgICBhbmltYXRlKCcxODBtcyAxNzVtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAwLjQgfSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2Z1bGxCYXJBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAuNCB9KSxcbiAgICAgICAgYW5pbWF0ZSgnODBtcyAzMzVtcyBlYXNlLW91dCcsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEgfSksXG4gICAgICAgIGFuaW1hdGUoJzgwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignZmFiQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ2xlZnQgPT4gdm9pZCcsIFtcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgxKScsIG9wYWNpdHk6IDEgfSksXG4gICAgICAgIGFuaW1hdGUoJzE3NW1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJywgb3BhY2l0eTogMC40IH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdyaWdodCA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDEpJywgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknLCBvcGFjaXR5OiAwLjQgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ21pZGRsZSA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICdzY2FsZSgxKSB0cmFuc2xhdGVYKC01MCUpJywgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgZWFzZS1pbicsIHN0eWxlKHsgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3NjYWxlKDApIHRyYW5zbGF0ZVgoLTcycHgpJywgb3BhY2l0eTogMC4wIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGxlZnQnLCBbXG4gICAgICAgIHN0eWxlKHsgbGVmdDogJzI0cHgnLCB0cmFuc2Zvcm06ICdzY2FsZSgwKScsIG9wYWNpdHk6IDAuOCB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgNDBtcyBlYXNlLW91dCcsIHN0eWxlKHsgbGVmdDogJzI0cHgnLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScsIG9wYWNpdHk6IDEgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gcmlnaHQnLCBbXG4gICAgICAgIHN0eWxlKHsgbGVmdDogJ2NhbGMoMTAwJSAtIDgwcHgpJywgdHJhbnNmb3JtOiAnc2NhbGUoMCknLCBvcGFjaXR5OiAwLjggfSksXG4gICAgICAgIGFuaW1hdGUoJzE3NW1zIDQwbXMgIGVhc2Utb3V0Jywgc3R5bGUoeyBsZWZ0OiAnY2FsYygxMDAlIC0gODBweCknLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScsIG9wYWNpdHk6IDEgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gbWlkZGxlJywgW1xuICAgICAgICBzdHlsZSh7IGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDApJywgb3BhY2l0eTogMC44IH0pLFxuICAgICAgICBhbmltYXRlKCcxNzVtcyA0MG1zICBlYXNlLW91dCcsIHN0eWxlKHsgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMSknLCBvcGFjaXR5OiAxIH0pKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgnbGVmdCcsIHN0eWxlKHsgbGVmdDogJzI0cHgnLCB0cmFuc2Zvcm06ICd1bnNldCcgfSkpLFxuICAgICAgc3RhdGUoJ3JpZ2h0Jywgc3R5bGUoeyBsZWZ0OiAnY2FsYygxMDAlIC0gODBweCknLCB0cmFuc2Zvcm06ICd1bnNldCcgfSkpLFxuICAgICAgc3RhdGUoJ21pZGRsZScsIHN0eWxlKHsgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknIH0pKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2ZhYlNjcm9sbEFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCdzY3JvbGwgPT4gbm9ybWFsJywgW1xuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcsIHN0eWxlKHsgdG9wOiAnLTUwJScgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiBzY3JvbGwnLCBbXG4gICAgICAgIGFuaW1hdGUoJzE3NW1zIDE3NW1zIGVhc2UtaW4nLCBzdHlsZSh7IHRvcDogJy0xNnB4JyB9KSlcbiAgICAgIF0pLFxuXG4gICAgICBzdGF0ZSgnc2Nyb2xsJywgc3R5bGUoeyB0b3A6ICctMTZweCcgfSkpLFxuICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgdG9wOiAnLTUwJScgfSkpLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2N1dG91dEFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCdsZWZ0ID0+IHZvaWQnLCBbXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJywgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjIwbXMgMTBtcyBlYXNlJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZVkoMCknLCBvcGFjaXR5OiAwIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdyaWdodCA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlWSgxKScsIG9wYWNpdHk6IDEgfSksXG4gICAgICAgIGFuaW1hdGUoJzIyMG1zIDEwMG1zIGVhc2UnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlWSgwKScsIG9wYWNpdHk6IDAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ21pZGRsZSA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlWSgxKSB0cmFuc2xhdGVYKC01MCUpJywgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjIwbXMgMTAwbXMgZWFzZScsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGVZKDApIHRyYW5zbGF0ZVgoLTUwJSknLCBvcGFjaXR5OiAwIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGxlZnQnLCBbXG4gICAgICAgIHN0eWxlKHsgbGVmdDogJzI0cHgnLCB0cmFuc2Zvcm06ICdzY2FsZVkoMCknLCBvcGFjaXR5OiAwLjQsICdib3gtc2hhZG93JzogJ25vbmUnIH0pLFxuICAgICAgICBhbmltYXRlKCcyMjBtcyBlYXNlJywgc3R5bGUoe1xuICAgICAgICAgIGxlZnQ6ICcxNnB4JywgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJywgb3BhY2l0eTogMSwgJ2JveC1zaGFkb3cnOiAnaW5zZXQgMHB4IC00cHggNnB4IC00cHggIzMzMydcbiAgICAgICAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gcmlnaHQnLCBbXG4gICAgICAgIHN0eWxlKHsgbGVmdDogJ2NhbGMoMTAwJSAtIDg4cHgpJywgdHJhbnNmb3JtOiAnc2NhbGVZKDApJywgb3BhY2l0eTogMC40LCAnYm94LXNoYWRvdyc6ICdub25lJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjIwbXMgZWFzZScsXG4gICAgICAgICAgc3R5bGUoeyBsZWZ0OiAnY2FsYygxMDAlIC0gODhweCknLCB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLCBvcGFjaXR5OiAxLCAnYm94LXNoYWRvdyc6ICdpbnNldCAwcHggLTRweCA2cHggLTRweCAjMzMzJyB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiBtaWRkbGUnLCBbXG4gICAgICAgIHN0eWxlKHsgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDApJywgb3BhY2l0eTogMC40LCAnYm94LXNoYWRvdyc6ICdub25lJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjIwbXMgZWFzZScsXG4gICAgICAgICAgc3R5bGUoeyBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMSknLCBvcGFjaXR5OiAxLCAnYm94LXNoYWRvdyc6ICdpbnNldCAwcHggLTRweCA2cHggLTRweCAjMzMzJyB9KSlcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ2xlZnQnLCBzdHlsZSh7IGxlZnQ6ICcxNnB4JywgdHJhbnNmb3JtOiAndW5zZXQnIH0pKSxcbiAgICAgIHN0YXRlKCdyaWdodCcsIHN0eWxlKHsgbGVmdDogJ2NhbGMoMTAwJSAtIDg4cHgpJywgdHJhbnNmb3JtOiAndW5zZXQnIH0pKSxcbiAgICAgIHN0YXRlKCdtaWRkbGUnLCBzdHlsZSh7IGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyB9KSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcEJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaGlkZGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZhYkxlZnQgPSB0cnVlO1xuICBASW5wdXQoKSBmYWJSaWdodCA9IGZhbHNlO1xuICBASW5wdXQoKSBmYWJWaXNpYmxlID0gdHJ1ZTtcbiAgQElucHV0KCkgaGlkZU9uU2Nyb2xsID0gdHJ1ZTtcbiAgY3VycmVudERlbHRhWSA9IDA7XG4gIEBWaWV3Q2hpbGQoJ3NoYXBlJykgdG9vbGJhcjogRWxlbWVudFJlZjtcblxuICBAT3V0cHV0KCkgZmFiQ2xpY2s6IEV2ZW50RW1pdHRlcjxBcHBCYXJDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZmFiSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmYWJTaG93OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHtcblxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJ2lvbi1jb250ZW50JylcbiAgICBmcm9tRXZlbnQoY29udGVudCwgJ2lvblNjcm9sbCcpLnN1YnNjcmliZShldmVudCA9PiB0aGlzLmlvblNjcm9sbChldmVudCkpO1xuICAgIGZyb21FdmVudChjb250ZW50LCAnaW9uU2Nyb2xsU3RhcnQnKS5zdWJzY3JpYmUoZXZlbnQgPT4gY29uc29sZS5sb2coZXZlbnQpKTtcbiAgICBmcm9tRXZlbnQoY29udGVudCwgJ2lvblNjcm9sbEVuZCcpLnN1YnNjcmliZShldmVudCA9PiB0aGlzLmlvblNjcm9sbEVuZChldmVudCkpO1xuICB9XG5cbiAgaW9uU2Nyb2xsKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ3Njcm9sbCcsZXZlbnQsdGhpcy5oaWRlT25TY3JvbGwpO1xuICAgIGlmKCF0aGlzLmhpZGVPblNjcm9sbCl7XG4gICAgICBjb25zb2xlLmxvZygnIyMjIyMnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmRldGFpbC5kZWx0YVkpIHtcbiAgICAgIHRoaXMuY3VycmVudERlbHRhWSA9IGV2ZW50LmRldGFpbC5kZWx0YVk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnREZWx0YVksIHRoaXMuY3VycmVudERlbHRhWSA+IDApO1xuICAgIH1cbiAgICB0aGlzLmhpZGRlbiA9IHRoaXMuY3VycmVudERlbHRhWSA+IDA7XG4gIH1cblxuICBvbkZhYkNsaWNrKCkge1xuICAgIHRoaXMuZmFiQ2xpY2suZW1pdCh0aGlzKTtcbiAgfVxuXG4gIGlvblNjcm9sbFN0YXJ0KGV2ZW50KSB7XG5cbiAgfVxuXG4gIGlvblNjcm9sbEVuZChldmVudCkge1xuXG4gIH1cblxuICBoaWRlRmFiKCk6IFByb21pc2U8QXBwQmFyQ29tcG9uZW50PiB7XG4gICAgdGhpcy5mYWJWaXNpYmxlID0gZmFsc2U7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEFwcEJhckNvbXBvbmVudD4ocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmZhYkhpZGUucGlwZShcbiAgICAgICAgdGFwKChyZXMgPT4ge2NvbnNvbGUubG9nKHJlcyl9KSksXG4gICAgICAgIGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gZXZlbnQudG9TdGF0ZSA9PT0gJ3ZvaWQnKSxcbiAgICAgICAgZmlyc3QoKVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaGlkZSBmYWIgZG9uZScsdGhpcyk7XG4gICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICB9KVxuXG4gICAgfSlcbiAgfVxuXG4gIHNob3dGYWIoKTogUHJvbWlzZTxBcHBCYXJDb21wb25lbnQ+IHtcbiAgICB0aGlzLmZhYlZpc2libGUgPSB0cnVlO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcHBCYXJDb21wb25lbnQ+KHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5mYWJTaG93LnBpcGUoXG4gICAgICAgIGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gZXZlbnQuZnJvbVN0YXRlID09PSAndm9pZCcpLFxuICAgICAgICBmaXJzdCgpXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICB9KVxuXG4gICAgfSlcbiAgfVxuXG4gIG9uRmFiQW5pbVN0YXJ0KGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9XG4gIG9uRmFiQW5pbURvbmUoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC5mcm9tU3RhdGUgKyAnIHRvICcgKyBldmVudC50b1N0YXRlKTtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMuZmFiU2hvdy5lbWl0KGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mYWJIaWRlLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRyYW5zaXRpb25MZWZ0KCkge1xuICAgIHRoaXMuZmFiUmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmZhYkxlZnQgPSB0cnVlO1xuICAgIHJldHVybiB0aW1lcig0MjUpLnRvUHJvbWlzZSgpO1xuXG4gIH1cblxuICB0cmFuc2l0aW9uUmlnaHQoKSB7XG4gICAgdGhpcy5mYWJSaWdodCA9IHRydWU7XG4gICAgdGhpcy5mYWJMZWZ0ID0gZmFsc2U7XG4gICAgcmV0dXJuIHRpbWVyKDQyNSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICB0cmFuc2l0aW9uTWlkZGxlKCkge1xuICAgIHRoaXMuZmFiUmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmZhYkxlZnQgPSBmYWxzZTtcbiAgICByZXR1cm4gdGltZXIoNDI1KS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGN1dE91dFRyYW5zaXRpb25Eb25lKCkge1xuICAgIHRoaXMuZmFiVmlzaWJsZSA9IHRydWU7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsRXZlbnRFbWl0dGVyLEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUsIHN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10b29sYmFyLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sYmFyLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Rvb2xiYXItc2VhcmNoLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzZWFyY2hiYXJBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IHdpZHRoOiAnMHB4JyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IHdpZHRoOiAnMTAwJScgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgc3R5bGUoeyB3aWR0aDogJzEwMCUnIH0pLFxuICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLWluJywgc3R5bGUoeyB3aWR0aDogJzBweCcsb3BhY2l0eTogMCB9KSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCd9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAncm90YXRlWigwZGVnKScgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTc1bXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKScgfSkpXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCd0aXRsZUFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0yMCUpJ30pLFxuICAgICAgICBhbmltYXRlKCcxNzVtcyBlYXNlLW91dCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ30pKVxuICAgICAgXSksXG4gICAgXSksXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhclNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgc2VhcmNoaW5nID0gZmFsc2U7XG4gIHRpdGxlVmlzaWJsZSA9IHRydWU7XG4gIGNsb3NlQnV0dG9uVmlzaWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZTpzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOnN0cmluZztcbiAgQE91dHB1dCgpIGlucHV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9wZW5TZWFyY2hiYXIoKSB7XG4gICAgdGhpcy5zZWFyY2hpbmcgPSB0cnVlO1xuICAgIHRoaXMudGl0bGVWaXNpYmxlID0gZmFsc2U7XG4gIH1cblxuICBjbG9zZVNlYXJjaGJhcigpIHtcbiAgICB0aGlzLmNsb3NlQnV0dG9uVmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xuXG4gIH1cblxuICBzZWFyY2hBbmltRG9uZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCcjIyMnLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSAhPT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uVmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VBbmltRG9uZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCcjIyMnLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSAhPT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLnNlYXJjaGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHNlYWNoYmFyQW5pbURvbmUoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnISEhJyxldmVudCk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSAhPT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLnRpdGxlVmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBcHBCYXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgVG9vbGJhclNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci1zZWFyY2gvdG9vbGJhci1zZWFyY2guY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIElvbmljTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBcHBCYXJDb21wb25lbnQsIFRvb2xiYXJTZWFyY2hDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQXBwQmFyQ29tcG9uZW50LCBUb29sYmFyU2VhcmNoQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7d0JBSkQ7Ozs7Ozs7QUNBQTtJQWlJRSx5QkFBbUIsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7c0JBWmYsS0FBSzt1QkFDSixJQUFJO3dCQUNILEtBQUs7MEJBQ0gsSUFBSTs0QkFDRixJQUFJOzZCQUNaLENBQUM7d0JBR21DLElBQUksWUFBWSxFQUFFO3VCQUMvQixJQUFJLFlBQVksRUFBRTt1QkFDbEIsSUFBSSxZQUFZLEVBQUU7S0FLeEQ7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFBQSxpQkFLQzs7UUFKQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDNUQsU0FBUyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFBLENB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

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
/* harmony import */ var dist_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dist/layout */ "./dist/layout/fesm5/layout.js");
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

module.exports = "<ion-header>\n  <app-toolbar-search  placeholder=\"Text eingeben\" title=\"Titel\">\n    <ion-back-button defaultHref=\"/home\" start></ion-back-button>\n</app-toolbar-search>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" >\n    <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n      <ion-item class=\"iiii\">\n        test\n      </ion-item>\n    <app-bar [fabLeft]=\"false\" [fabRight]=\"false\" #appBar (fabClick)=\"fabClicked($event)\"></app-bar>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/layout/layout.page.scss":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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