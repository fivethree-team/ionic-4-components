(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/loading/fesm5/fivethree-loading.js":
/*!*************************************************!*\
  !*** ./dist/loading/fesm5/fivethree-loading.js ***!
  \*************************************************/
/*! exports provided: LoadingService, LoadingModule, ɵc, ɵe, ɵa, ɵf, ɵd, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingModule", function() { return LoadingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ButtonFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return ContentRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FabSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return InfiniteScrollContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ItemProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ProgressBar; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loading = false;
        this.isComplete = false;
        this.loadChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.loading);
        this.completeChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isComplete);
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
var ProgressBar = /** @class */ (function () {
    function ProgressBar(loadingService) {
        this.loadingService = loadingService;
        this.loading = false;
        this.global = false;
        this.isComplete = false;
        this.verticalAlign = 'top';
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ProgressBar.prototype.ngOnInit = /**
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
    ProgressBar.prototype.ngOnDestroy = /**
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
    ProgressBar.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        this.loading = !this.loading;
    };
    /**
     * @return {?}
     */
    ProgressBar.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.onRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    ProgressBar.prototype.unload = /**
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
    ProgressBar.prototype.complete = /**
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
    ProgressBar.prototype.fillAnimationComplete = /**
     * @param {?} isComplete
     * @return {?}
     */
    function (isComplete) {
        if (isComplete) {
            console.log('fill animation complete', isComplete);
            this.onComplete.emit(isComplete);
            this.isComplete = false;
            if (this.global) {
                this.loadingService.unload();
            }
            else {
                this.unload();
            }
        }
    };
    ProgressBar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-loading-progressbar',
                    template: "\n<div [@progressAnim] *ngIf=\"(!global && loading) || (global && loadingService.loading)\" class=\"slider\" [ngClass]=\"{'top':verticalAlign == 'top','bottom': verticalAlign == 'bottom'}\" >\n  <div class=\"line\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline inc\"></div>\n  <div *ngIf=\"isComplete\" [@fillAnim] (@fillAnim.done)=\"fillAnimationComplete(isComplete)\" class=\"subline fill\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline dec\"></div>\n</div>\n    ",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('progressAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0px' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('299ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0px' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fillAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ left: '-5%', width: '5%' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('850ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ left: '0%', width: '100%' }))
                            ]),
                        ])
                    ],
                    styles: [".slider{position:absolute;width:100%;height:5px;overflow-x:hidden;z-index:5000}.line{position:absolute;opacity:.4;width:240%;height:5px;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}.subline{position:absolute;height:5px;background:inherit}.inc{-webkit-animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin;animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin}.dec{-webkit-animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin;animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin}.fill{left:0;width:100%;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}@-webkit-keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@-webkit-keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@-webkit-keyframes colorspin{0%,100%{background-color:#4285f4}25%{background-color:#de3e35}50%{background-color:#f7c223}75%{background-color:#1b9a59}}@keyframes colorspin{0%,100%{background-color:#4285f4}25%{background-color:#de3e35}50%{background-color:#f7c223}75%{background-color:#1b9a59}}.top{top:0;left:0}.bottom{bottom:0;left:0}"]
                }] }
    ];
    /** @nocollapse */
    ProgressBar.ctorParameters = function () { return [
        { type: LoadingService }
    ]; };
    ProgressBar.propDecorators = {
        global: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        bar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['bar',] }]
    };
    return ProgressBar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FabSpinner = /** @class */ (function () {
    function FabSpinner() {
        this.vertical = "bottom";
        this.horizontal = "end";
        this.edge = false;
        this.checkmark = false;
        this.loading = false;
        this.isComplete = false;
        this.iconState = 'normal';
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    FabSpinner.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FabSpinner.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        if (this.icon != 'md-checkmark') {
            this.loading = !this.loading;
        }
    };
    /**
     * @return {?}
     */
    FabSpinner.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.onRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    FabSpinner.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
    };
    /**
     * @return {?}
     */
    FabSpinner.prototype.complete = /**
     * @return {?}
     */
    function () {
        if (this.loading) {
            this.isComplete = true;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FabSpinner.prototype.fillAnimationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState == 'spinning') {
            if (this.checkmark) {
                console.log('fill animation done', event);
                this.iconState = "rotate";
            }
            else {
                this.postComplete();
            }
        }
    };
    /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    FabSpinner.prototype.changeIconAndReveal = /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    function (event, icon) {
        console.log(event, icon);
        if (event.fromState == 'normal') {
            this.icon = icon;
            this.iconState = "normal";
        }
        else {
            if (event.fromState === "rotate") {
                this.postComplete();
            }
        }
    };
    /**
     * @return {?}
     */
    FabSpinner.prototype.postComplete = /**
     * @return {?}
     */
    function () {
        this.unload();
        this.isComplete = false;
        this.onComplete.emit(this);
    };
    FabSpinner.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-loading-fab',
                    template: "\n        <ion-fab [@fabAnim] [vertical]=\"vertical\" [horizontal]=\"horizontal\" [edge]=\"edge\">\n        <svg *ngIf=\"loading\" #spinner class=\"spinner rotate\" viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle [@fillAnim]=\"isComplete ? 'fill' : 'spinning'\" (@fillAnim.done)=\"fillAnimationDone($event)\" [ngClass]=\"{'path': !isComplete}\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\" cx=\"36\" cy=\"36\" r=\"32\"></circle>\n </svg>\n            <ion-fab-button [color]=\"fabColor\">\n                <ion-icon [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\" [name]=\"icon\"></ion-icon>\n            </ion-fab-button>\n\n        </ion-fab>\n    ",
                    animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fabAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(0)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(0)' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('spinnerAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '0' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '0' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('normal => rotate', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('rotate => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '0', transform: 'rotateZ(45deg)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '1', transform: 'rotateZ(0deg)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fillAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => fill', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                    'stroke-dasharray': 180,
                                    'stroke-dashoffset': 90,
                                    'transformOrigin': 'center',
                                    'stroke': '#DE3E35'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1400ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('fill', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                'stroke-dasharray': 315,
                                'stroke-dashoffset': 0,
                                'transformOrigin': 'center',
                                'stroke': '#1B9A59',
                                'opacity': 0
                            }))
                        ])],
                    styles: ["ion-spinner{position:absolute;top:-8px;left:-8px;width:72px;height:72px}.spinner{position:absolute;width:72px;height:72px;left:-8px;top:-8px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}"]
                }] }
    ];
    /** @nocollapse */
    FabSpinner.ctorParameters = function () { return []; };
    FabSpinner.propDecorators = {
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        spinColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fabColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        edge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        checkmark: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['spinner',] }],
        onComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return FabSpinner;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ButtonFull = /** @class */ (function () {
    function ButtonFull() {
        this.loading = false;
        this.color = 'light';
        this.expand = 'block';
        this.disabled = false;
        this.verticalAlign = 'top';
        this.onRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRefreshComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ButtonFull.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ButtonFull.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        this.loading = !this.loading;
        this.progress.toggleSpinner();
        this.onRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    ButtonFull.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.progress.load();
    };
    /**
     * @return {?}
     */
    ButtonFull.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
        this.progress.unload();
    };
    /**
     * @return {?}
     */
    ButtonFull.prototype.complete = /**
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
    ButtonFull.prototype.onComplete = /**
     * @param {?} isComplete
     * @return {?}
     */
    function (isComplete) {
        console.log('on complete', isComplete);
        this.loading = false;
        this.onRefreshComplete.emit(this);
    };
    ButtonFull.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-loading-button',
                    template: "\n    <ion-button class=\"buttonfull\" [disabled]=\"disabled\" [expand]=\"expand\" [color]=\"color\">\n    <fiv-loading-progressbar [verticalAlign]=\"verticalAlign\" (onComplete)=\"onComplete($event)\" #progress [global]=\"false\"></fiv-loading-progressbar>\n    <ng-content></ng-content>\n  </ion-button>\n    ",
                    styles: [":host{position:relative;display:block;margin:0 20px}"]
                }] }
    ];
    /** @nocollapse */
    ButtonFull.ctorParameters = function () { return []; };
    ButtonFull.propDecorators = {
        progress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['progress',] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        expand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onRefreshComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ButtonFull;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ItemProgress = /** @class */ (function () {
    function ItemProgress() {
        this.loading = false;
        this.verticalAlign = 'bottom';
        this.onRefreshComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ItemProgress.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ItemProgress.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        this.loading = !this.loading;
        this.progress.toggleSpinner();
    };
    /**
     * @return {?}
     */
    ItemProgress.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.progress.load();
    };
    /**
     * @return {?}
     */
    ItemProgress.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
        this.progress.unload();
    };
    /**
     * @return {?}
     */
    ItemProgress.prototype.complete = /**
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
    ItemProgress.prototype.onComplete = /**
     * @param {?} isComplete
     * @return {?}
     */
    function (isComplete) {
        console.log('on complete', isComplete);
        this.loading = false;
        this.onRefreshComplete.emit(this);
    };
    ItemProgress.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-loading-item',
                    template: "\n    <ion-item [ngClass]=\"{'loading': loading}\">\n    <ng-content></ng-content>\n  </ion-item>\n  <fiv-loading-progressbar [verticalAlign]=\"verticalAlign\" (onComplete)=\"onComplete($event)\" #progress [global]=\"false\"></fiv-loading-progressbar>\n\n    ",
                    styles: [":host{position:relative;display:block;margin:0;width:calc(100%)}ion-item{background:#fff}.loading{margin:4px;width:calc(100% - 8px);transition:.2s;border-radius:8px;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 4px 16px rgba(0,0,0,.12)}"]
                }] }
    ];
    /** @nocollapse */
    ItemProgress.ctorParameters = function () { return []; };
    ItemProgress.propDecorators = {
        verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        progress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['progress',] }],
        onRefreshComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ItemProgress;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ContentRefresh = /** @class */ (function () {
    function ContentRefresh() {
        this.onProgressChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isComplete = false;
        this.pulling = false;
        this.refreshing = false;
        this.spinnerVisible = true;
        this.translateY = 0;
        this.hintVisible = false;
        this.hintText = 'new posts';
    }
    /**
     * @return {?}
     */
    ContentRefresh.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'touchend').subscribe(function (res) {
            console.log('touchend', res);
            if (_this.pulling && !_this.refreshing) {
                _this.changeProgress(0);
            }
        });
    };
    /**
     * @return {?}
     */
    ContentRefresh.prototype.spinRefresher = /**
     * @return {?}
     */
    function () {
        this.spinner.nativeElement.style.setProperty('transform', "translateY(168px)");
        this.refreshing = true;
        this.pulling = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContentRefresh.prototype.doRefresh = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.spinner.nativeElement.style.setProperty('transition', "all 400ms ease");
        this.spinRefresher();
        console.log('refresh here');
        setTimeout(function () {
            _this.refresh();
            event.target.closeDuration = "400ms";
            _this.refresher = event.target.complete();
        }, 400);
    };
    /**
     * @return {?}
     */
    ContentRefresh.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.onRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    ContentRefresh.prototype.completeRefresh = /**
     * @return {?}
     */
    function () {
        this.spinner.nativeElement.style.setProperty('transition', "0");
        this.refreshing = false;
        this.isComplete = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContentRefresh.prototype.onPull = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.pulling = true;
        console.log(event);
        /** @type {?} */
        var progress = event.target.getProgress();
        if (progress <= 1) {
            this.onProgressChanged.emit(progress);
            this.changeProgress(progress);
        }
    };
    /**
     * @return {?}
     */
    ContentRefresh.prototype.onStart = /**
     * @return {?}
     */
    function () {
        // this.changeProgress(0);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    ContentRefresh.prototype.changeProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.translateY = 112 * progress;
        /** @type {?} */
        var translateY = this.translateY;
        console.log("translateY(" + translateY + "px)");
        // this.renderer.setStyle(this.spinner.nativeElement, 'transform', `translateY(${translateY})`)
        this.spinner.nativeElement.style.setProperty('transform', "translateY(" + translateY + "px)");
        // this.change.detectChanges();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContentRefresh.prototype.fillAnimationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'fill' && event.fromState === 'spinning') {
            console.log('fillAnim complete', event);
            this.spinnerVisible = false;
            this.isComplete = false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContentRefresh.prototype.onSpinnerHidden = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState !== 'void') {
            console.log('refresh complete', event);
            this.spinnerVisible = true;
        }
    };
    /**
     * @return {?}
     */
    ContentRefresh.prototype.showHint = /**
     * @return {?}
     */
    function () {
        this.hintVisible = true;
    };
    /**
     * @return {?}
     */
    ContentRefresh.prototype.onHintClicked = /**
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
    ContentRefresh.prototype.postHint = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(event);
        if (!event.fromState && event.toState == 'void') {
            this.refresh();
            this.spinRefresher();
        }
    };
    ContentRefresh.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-loading-content',
                    template: "\n    <ion-content fullscreen>\n    <div class=\"gg-hint-wrapper\">\n    <ion-chip *ngIf=\"hintVisible\" (click)=\"onHintClicked()\" [@hintAnim] (@hintAnim.done)=\"postHint($event)\" #hint class=\"gg-hint-container\">\n  <ion-icon class=\"icon\" name=\"md-arrow-up\"></ion-icon>\n  <ion-label class=\"text\">{{hintText}}</ion-label>\n</ion-chip>\n    </div>\n    \n    <div [@spinnerAnim] (@spinnerAnim.done)=\"onSpinnerHidden($event)\" *ngIf=\"spinnerVisible\" #spinner class=\"gg-spinner-container\">\n        <svg class=\"spinner rotate\" viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle [@fillAnim]=\"isComplete ? 'fill' : 'spinning'\" (@fillAnim.done)=\"fillAnimationDone($event)\" [ngClass]=\"{'path': !isComplete}\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\" cx=\"36\" cy=\"36\" r=\"32\"></circle>\n        </svg>\n    </div>\n    <ion-refresher slot=\"fixed\" #refresher class=\"refresher\" (ionStart)=\"onStart()\" snapbackDuration=\"400ms\" closeDuration=\"800ms\" [pullMax]=\"168\" [pullMin]=\"56\" [disabled]=\"false\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" (ionPull)=\"onPull($event)\">\n        </ion-refresher>\n        <div class=\"gg-content\">\n        <ng-content></ng-content>\n        </div>\n        </ion-content>\n    ",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fillAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => fill', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                    'stroke-dasharray': 180,
                                    'stroke-dashoffset': 90,
                                    'transformOrigin': 'center',
                                    'stroke': '#DE3E35'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('360ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('fill', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                'stroke-dasharray': 315,
                                'stroke-dashoffset': 0,
                                'transformOrigin': 'center',
                                'stroke': '#1B9A59',
                            }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('spinnerAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                            ]),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('hintAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-80px)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ width: '112px' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('125ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ width: '40px' }))
                            ]),
                        ]),
                    ],
                    styles: [":host{height:100%;width:100%;position:absolute;top:0;bottom:0;left:0;right:0}.spinner{position:absolute;width:24px;height:24px;left:8px;top:8px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}.gg-spinner-container{width:40px;height:40px;position:absolute;left:calc(50% - 20px);top:-56px;z-index:9;background:var(--ion-color-light);border-radius:50%;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1)}.gg-hint-container{height:40px;padding-left:8px;padding-right:8px;position:relative;background:var(--ion-color-light);border-radius:40px;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1);margin:0}.icon{height:20px;width:20px;background:0 0;color:var(--ion-color-dark)}.text{font-size:1em;color:var(--ion-color-dark)}.gg-hint-wrapper{width:100%;position:absolute;top:112px;z-index:8;text-align:center}.gg-content{margin-top:56px}"]
                }] }
    ];
    /** @nocollapse */
    ContentRefresh.ctorParameters = function () { return []; };
    ContentRefresh.propDecorators = {
        onProgressChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['spinner',] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['content',] }],
        hintText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ContentRefresh;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var InfiniteScrollContent = /** @class */ (function () {
    function InfiniteScrollContent(renderer, change) {
        this.renderer = renderer;
        this.change = change;
        this.vertical = "bottom";
        this.horizontal = "end";
        this.edge = false;
        this.checkmark = false;
        this.dragProgress = 0;
        this.loading = false;
        this.isComplete = false;
        this.iconState = 'normal';
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    InfiniteScrollContent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    InfiniteScrollContent.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        if (this.icon != 'md-checkmark') {
            this.loading = !this.loading;
        }
    };
    /**
     * @return {?}
     */
    InfiniteScrollContent.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.onRefresh.emit();
    };
    /**
     * @return {?}
     */
    InfiniteScrollContent.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
    };
    /**
     * @return {?}
     */
    InfiniteScrollContent.prototype.complete = /**
     * @return {?}
     */
    function () {
        if (this.loading) {
            this.isComplete = true;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    InfiniteScrollContent.prototype.fillAnimationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState == 'spinning') {
            if (this.checkmark) {
                console.log('fill animation done', event);
                this.iconState = "rotate";
            }
            else {
                this.postComplete();
            }
        }
    };
    /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    InfiniteScrollContent.prototype.changeIconAndReveal = /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    function (event, icon) {
        console.log(event, icon);
        if (event.fromState == 'normal') {
            this.icon = icon;
            this.iconState = "normal";
        }
        else {
            if (event.fromState === "rotate") {
                this.postComplete();
            }
        }
    };
    /**
     * @return {?}
     */
    InfiniteScrollContent.prototype.postComplete = /**
     * @return {?}
     */
    function () {
        this.unload();
        this.isComplete = false;
        this.onComplete.emit(this);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    InfiniteScrollContent.prototype.changeProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.dragProgress = progress;
        /** @type {?} */
        var translateY = Math.floor(-80 + 80 * progress);
        console.log("translateY(" + translateY + "px)");
        // this.renderer.setStyle(this.spinner.nativeElement, 'transform', `translateY(${translateY})`)
        this.spinner.nativeElement.style.setProperty('transform', "translateY(" + translateY + "px)");
        this.change.detectChanges();
    };
    InfiniteScrollContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-loading-infinite-scroll',
                    template: "\n    <div class=\"gg-refresher\">\n\n    <div #spinner class=\"gg-spinner-container\">\n    <svg class=\"spinner rotate\" viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle [@fillAnim]=\"isComplete ? 'fill' : 'spinning'\" (@fillAnim.done)=\"fillAnimationDone($event)\" [ngClass]=\"{'path': !isComplete}\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\" cx=\"36\" cy=\"36\" r=\"32\"></circle>\n </svg>\n    </div>\n\n    \n    </div>\n    ",
                    animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fabAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(0)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(0)' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('spinnerAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '0' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '0' }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('rotateAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('normal => rotate', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('125ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('rotate => normal', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('125ms ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '0', transform: 'rotateZ(45deg)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '1', transform: 'rotateZ(0deg)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fillAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => fill', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                    'stroke-dasharray': 180,
                                    'stroke-dashoffset': 90,
                                    'transformOrigin': 'center',
                                    'stroke': '#DE3E35'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('fill', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                'stroke-dasharray': 315,
                                'stroke-dashoffset': 0,
                                'transformOrigin': 'center',
                                'stroke': '#1B9A59',
                                'opacity': 0
                            }))
                        ])],
                    styles: ["ion-spinner{position:absolute;top:-8px;left:-8px;width:72px;height:72px}.spinner{position:absolute;width:24px;height:24px;left:8px;top:8px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}.gg-refresher{display:block;width:100%;height:112px;position:relative}.gg-spinner-container{width:40px;height:40px;position:absolute;left:calc(50% - 20px);top:16px;background:var(--ion-color-light);border-radius:50%;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1)}"]
                }] }
    ];
    /** @nocollapse */
    InfiniteScrollContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    InfiniteScrollContent.propDecorators = {
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        spinColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fabColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        edge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        checkmark: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['spinner',] }],
        onComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return InfiniteScrollContent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LoadingModule = /** @class */ (function () {
    function LoadingModule() {
    }
    LoadingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                    ],
                    declarations: [FabSpinner, ProgressBar, ButtonFull, ItemProgress, ContentRefresh, InfiniteScrollContent],
                    exports: [FabSpinner, ProgressBar, ButtonFull, ItemProgress, ContentRefresh, InfiniteScrollContent
                    ]
                },] }
    ];
    return LoadingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml2ZXRocmVlLWxvYWRpbmcuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BmaXZldGhyZWUvbG9hZGluZy9saWIvbG9hZGluZy5zZXJ2aWNlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2xvYWRpbmcvbGliL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2xvYWRpbmcvbGliL2ZhYi9mYWIuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2xvYWRpbmcvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2xvYWRpbmcvbGliL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvbG9hZGluZy9saWIvY29udGVudC9jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9sb2FkaW5nL2xpYi9pbmZpbml0ZS1zY3JvbGwtY29udGVudC9pbmZpbml0ZS1zY3JvbGx0LWNvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2xvYWRpbmcvbGliL2xvYWRpbmcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdTZXJ2aWNlIHtcblxuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNDb21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbG9hZENoYW5nZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0aGlzLmxvYWRpbmcpO1xuICBwdWJsaWMgY29tcGxldGVDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odGhpcy5pc0NvbXBsZXRlKTtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMubG9hZENoYW5nZS5uZXh0KHRoaXMubG9hZGluZyk7XG4gIH1cblxuICB1bmxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5sb2FkQ2hhbmdlLm5leHQodGhpcy5sb2FkaW5nKTtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgfVxuXG4gIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgfVxuXG4gIGNvbXBsZXRlKCl7XG4gICAgY29uc29sZS5sb2coJ3NldCBzZXJ2aWNlIGNvbXBsZXRlJyk7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICB0aGlzLmNvbXBsZXRlQ2hhbmdlLm5leHQodGhpcy5pc0NvbXBsZXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vbG9hZGluZy5zZXJ2aWNlJztcblxuZXhwb3J0IHR5cGUgdmVydGljYWxBbGlnbiA9IFwidG9wXCIgfCBcImJvdHRvbVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZml2LWxvYWRpbmctcHJvZ3Jlc3NiYXInLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IFtAcHJvZ3Jlc3NBbmltXSAqbmdJZj1cIighZ2xvYmFsICYmIGxvYWRpbmcpIHx8IChnbG9iYWwgJiYgbG9hZGluZ1NlcnZpY2UubG9hZGluZylcIiBjbGFzcz1cInNsaWRlclwiIFtuZ0NsYXNzXT1cInsndG9wJzp2ZXJ0aWNhbEFsaWduID09ICd0b3AnLCdib3R0b20nOiB2ZXJ0aWNhbEFsaWduID09ICdib3R0b20nfVwiID5cbiAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIiFpc0NvbXBsZXRlXCIgY2xhc3M9XCJzdWJsaW5lIGluY1wiPjwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiaXNDb21wbGV0ZVwiIFtAZmlsbEFuaW1dIChAZmlsbEFuaW0uZG9uZSk9XCJmaWxsQW5pbWF0aW9uQ29tcGxldGUoaXNDb21wbGV0ZSlcIiBjbGFzcz1cInN1YmxpbmUgZmlsbFwiPjwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiIWlzQ29tcGxldGVcIiBjbGFzcz1cInN1YmxpbmUgZGVjXCI+PC9kaXY+XG48L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydwcm9ncmVzcy1iYXIuc2NzcyddLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcigncHJvZ3Jlc3NBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyOTltcyBlYXNlLWluJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgbGVmdDogJy01JScsIHdpZHRoOiAnNSUnIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzg1MG1zIGVhc2Utb3V0Jywgc3R5bGUoeyBsZWZ0OiAnMCUnLCB3aWR0aDogJzEwMCUnIH0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBnbG9iYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBpc0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgdmVydGljYWxBbGlnbjogdmVydGljYWxBbGlnbiA9ICd0b3AnO1xuICAgIEBPdXRwdXQoKSBvbkNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaDogRXZlbnRFbWl0dGVyPFByb2dyZXNzQmFyPiA9IG5ldyBFdmVudEVtaXR0ZXI8UHJvZ3Jlc3NCYXI+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdiYXInKSBiYXI6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbG9hZGluZ1NlcnZpY2U6IExvYWRpbmdTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5jb21wbGV0ZUNoYW5nZS5zdWJzY3JpYmUoaXNDb21wbGV0ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2xvYmFsKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmNvbXBsZXRlQ2hhbmdlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVTcGlubmVyKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgdW5sb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NldCBjb21wbGV0ZScpO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzQ29tcGxldGUpO1xuICAgIH1cblxuICAgIGZpbGxBbmltYXRpb25Db21wbGV0ZShpc0NvbXBsZXRlOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsbCBhbmltYXRpb24gY29tcGxldGUnLCBpc0NvbXBsZXRlKTtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZS5lbWl0KGlzQ29tcGxldGUpO1xuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5nbG9iYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLnVubG9hZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVubG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgc3RhdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmaXYtbG9hZGluZy1mYWInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpb24tZmFiIFtAZmFiQW5pbV0gW3ZlcnRpY2FsXT1cInZlcnRpY2FsXCIgW2hvcml6b250YWxdPVwiaG9yaXpvbnRhbFwiIFtlZGdlXT1cImVkZ2VcIj5cbiAgICAgICAgPHN2ZyAqbmdJZj1cImxvYWRpbmdcIiAjc3Bpbm5lciBjbGFzcz1cInNwaW5uZXIgcm90YXRlXCIgdmlld0JveD1cIjAgMCA3MiA3MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8Y2lyY2xlIFtAZmlsbEFuaW1dPVwiaXNDb21wbGV0ZSA/ICdmaWxsJyA6ICdzcGlubmluZydcIiAoQGZpbGxBbmltLmRvbmUpPVwiZmlsbEFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cInsncGF0aCc6ICFpc0NvbXBsZXRlfVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBjeD1cIjM2XCIgY3k9XCIzNlwiIHI9XCIzMlwiPjwvY2lyY2xlPlxuIDwvc3ZnPlxuICAgICAgICAgICAgPGlvbi1mYWItYnV0dG9uIFtjb2xvcl09XCJmYWJDb2xvclwiPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBbQHJvdGF0ZUFuaW1dPVwiaWNvblN0YXRlXCIgKEByb3RhdGVBbmltLmRvbmUpPVwiY2hhbmdlSWNvbkFuZFJldmVhbCgkZXZlbnQsJ21kLWNoZWNrbWFyaycpXCIgW25hbWVdPVwiaWNvblwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8L2lvbi1mYWItYnV0dG9uPlxuXG4gICAgICAgIDwvaW9uLWZhYj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydmYWIuc2NzcyddLFxuICAgIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdmYWJBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSlcbiAgICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdzcGlubmVyQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSkpXG4gICAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbignbm9ybWFsID0+IHJvdGF0ZScsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJ3JvdGF0ZSA9PiBub3JtYWwnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLWluJylcbiAgICAgICAgXSksXG4gICAgICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZyknIH0pKSxcbiAgICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDBkZWcpJyB9KSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMTgwLFxuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyNERTNFMzUnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzE0MDBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICBzdGF0ZSgnZmlsbCcsIHN0eWxlKHtcbiAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMzE1LFxuICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogMCxcbiAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICdzdHJva2UnOiAnIzFCOUE1OScsXG4gICAgICAgICAgICAnb3BhY2l0eSc6IDBcbiAgICAgICAgfSlcbiAgICAgICAgKV1cbiAgICApXSxcblxufSlcbmV4cG9ydCBjbGFzcyBGYWJTcGlubmVyIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBzcGluQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBmYWJDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZlcnRpY2FsOiBzdHJpbmcgPSBcImJvdHRvbVwiO1xuICAgIEBJbnB1dCgpIGhvcml6b250YWw6IHN0cmluZyA9IFwiZW5kXCI7XG4gICAgQElucHV0KCkgZWRnZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNoZWNrbWFyazogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgaWNvblN0YXRlOiBzdHJpbmcgPSAnbm9ybWFsJztcblxuICAgIEBWaWV3Q2hpbGQoJ3NwaW5uZXInKSBzcGlubmVyOiBFbGVtZW50UmVmO1xuXG4gICAgQE91dHB1dCgpIG9uQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxGYWJTcGlubmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmFiU3Bpbm5lcj4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8RmFiU3Bpbm5lcj4gPSBuZXcgRXZlbnRFbWl0dGVyPEZhYlNwaW5uZXI+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICB0b2dnbGVTcGlubmVyKCkge1xuICAgICAgICBpZih0aGlzLmljb24gIT0gJ21kLWNoZWNrbWFyaycpe1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgdW5sb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYodGhpcy5sb2FkaW5nKXtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbGxBbmltYXRpb25Eb25lKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT0gJ3NwaW5uaW5nJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2ttYXJrKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbGwgYW5pbWF0aW9uIGRvbmUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3RhdGUgPSBcInJvdGF0ZVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LCBpY29uKTtcbiAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PSAnbm9ybWFsJykge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICAgICAgICAgIHRoaXMuaWNvblN0YXRlID0gXCJub3JtYWxcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09IFwicm90YXRlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3N0Q29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMudW5sb2FkKCk7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUuZW1pdCh0aGlzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xuXG5leHBvcnQgdHlwZSB2ZXJ0aWNhbEFsaWduID0gXCJ0b3BcIiB8IFwiYm90dG9tXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmaXYtbG9hZGluZy1idXR0b24nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGlvbi1idXR0b24gY2xhc3M9XCJidXR0b25mdWxsXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2V4cGFuZF09XCJleHBhbmRcIiBbY29sb3JdPVwiY29sb3JcIj5cbiAgICA8Zml2LWxvYWRpbmctcHJvZ3Jlc3NiYXIgW3ZlcnRpY2FsQWxpZ25dPVwidmVydGljYWxBbGlnblwiIChvbkNvbXBsZXRlKT1cIm9uQ29tcGxldGUoJGV2ZW50KVwiICNwcm9ncmVzcyBbZ2xvYmFsXT1cImZhbHNlXCI+PC9maXYtbG9hZGluZy1wcm9ncmVzc2Jhcj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvaW9uLWJ1dHRvbj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydidXR0b24uc2NzcyddLFxuXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkZ1bGwgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQFZpZXdDaGlsZCgncHJvZ3Jlc3MnKSBwcm9ncmVzczogUHJvZ3Jlc3NCYXI7XG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICdsaWdodCc7XG4gICAgQElucHV0KCkgZXhwYW5kOiBzdHJpbmcgPSAnYmxvY2snO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgdmVydGljYWxBbGlnbjogdmVydGljYWxBbGlnbiA9ICd0b3AnO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxCdXR0b25GdWxsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxCdXR0b25GdWxsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICAgICAgdGhpcy5wcm9ncmVzcy50b2dnbGVTcGlubmVyKCk7XG4gICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcy5sb2FkKCk7XG4gICAgfVxuXG4gICAgdW5sb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcy51bmxvYWQoKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db21wbGV0ZShpc0NvbXBsZXRlOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbiBjb21wbGV0ZScsIGlzQ29tcGxldGUpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2hDb21wbGV0ZS5lbWl0KHRoaXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tICcuLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIHZlcnRpY2FsQWxpZ24gPSBcInRvcFwiIHwgXCJib3R0b21cIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Zpdi1sb2FkaW5nLWl0ZW0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGlvbi1pdGVtIFtuZ0NsYXNzXT1cInsnbG9hZGluZyc6IGxvYWRpbmd9XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2lvbi1pdGVtPlxuICA8Zml2LWxvYWRpbmctcHJvZ3Jlc3NiYXIgW3ZlcnRpY2FsQWxpZ25dPVwidmVydGljYWxBbGlnblwiIChvbkNvbXBsZXRlKT1cIm9uQ29tcGxldGUoJGV2ZW50KVwiICNwcm9ncmVzcyBbZ2xvYmFsXT1cImZhbHNlXCI+PC9maXYtbG9hZGluZy1wcm9ncmVzc2Jhcj5cblxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJ2l0ZW0uc2NzcyddLFxuXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Qcm9ncmVzcyBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgdmVydGljYWxBbGlnbjogdmVydGljYWxBbGlnbiA9ICdib3R0b20nO1xuXG4gICAgQFZpZXdDaGlsZCgncHJvZ3Jlc3MnKSBwcm9ncmVzczogUHJvZ3Jlc3NCYXI7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaENvbXBsZXRlOiBFdmVudEVtaXR0ZXI8SXRlbVByb2dyZXNzPiA9IG5ldyBFdmVudEVtaXR0ZXI8SXRlbVByb2dyZXNzPigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxJdGVtUHJvZ3Jlc3M+ID0gbmV3IEV2ZW50RW1pdHRlcjxJdGVtUHJvZ3Jlc3M+KCk7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MudG9nZ2xlU3Bpbm5lcigpO1xuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MubG9hZCgpO1xuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MudW5sb2FkKCk7XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29tcGxldGUoaXNDb21wbGV0ZTogYm9vbGVhbikge1xuICAgICAgICBjb25zb2xlLmxvZygnb24gY29tcGxldGUnLCBpc0NvbXBsZXRlKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25SZWZyZXNoQ29tcGxldGUuZW1pdCh0aGlzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJlZnJlc2hlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZml2LWxvYWRpbmctY29udGVudCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aW9uLWNvbnRlbnQgZnVsbHNjcmVlbj5cbiAgICA8ZGl2IGNsYXNzPVwiZ2ctaGludC13cmFwcGVyXCI+XG4gICAgPGlvbi1jaGlwICpuZ0lmPVwiaGludFZpc2libGVcIiAoY2xpY2spPVwib25IaW50Q2xpY2tlZCgpXCIgW0BoaW50QW5pbV0gKEBoaW50QW5pbS5kb25lKT1cInBvc3RIaW50KCRldmVudClcIiAjaGludCBjbGFzcz1cImdnLWhpbnQtY29udGFpbmVyXCI+XG4gIDxpb24taWNvbiBjbGFzcz1cImljb25cIiBuYW1lPVwibWQtYXJyb3ctdXBcIj48L2lvbi1pY29uPlxuICA8aW9uLWxhYmVsIGNsYXNzPVwidGV4dFwiPnt7aGludFRleHR9fTwvaW9uLWxhYmVsPlxuPC9pb24tY2hpcD5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IFtAc3Bpbm5lckFuaW1dIChAc3Bpbm5lckFuaW0uZG9uZSk9XCJvblNwaW5uZXJIaWRkZW4oJGV2ZW50KVwiICpuZ0lmPVwic3Bpbm5lclZpc2libGVcIiAjc3Bpbm5lciBjbGFzcz1cImdnLXNwaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJzcGlubmVyIHJvdGF0ZVwiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICA8Y2lyY2xlIFtAZmlsbEFuaW1dPVwiaXNDb21wbGV0ZSA/ICdmaWxsJyA6ICdzcGlubmluZydcIiAoQGZpbGxBbmltLmRvbmUpPVwiZmlsbEFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cInsncGF0aCc6ICFpc0NvbXBsZXRlfVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBjeD1cIjM2XCIgY3k9XCIzNlwiIHI9XCIzMlwiPjwvY2lyY2xlPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgICA8aW9uLXJlZnJlc2hlciBzbG90PVwiZml4ZWRcIiAjcmVmcmVzaGVyIGNsYXNzPVwicmVmcmVzaGVyXCIgKGlvblN0YXJ0KT1cIm9uU3RhcnQoKVwiIHNuYXBiYWNrRHVyYXRpb249XCI0MDBtc1wiIGNsb3NlRHVyYXRpb249XCI4MDBtc1wiIFtwdWxsTWF4XT1cIjE2OFwiIFtwdWxsTWluXT1cIjU2XCIgW2Rpc2FibGVkXT1cImZhbHNlXCIgc2xvdD1cImZpeGVkXCIgKGlvblJlZnJlc2gpPVwiZG9SZWZyZXNoKCRldmVudClcIiAoaW9uUHVsbCk9XCJvblB1bGwoJGV2ZW50KVwiPlxuICAgICAgICA8L2lvbi1yZWZyZXNoZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnZy1jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaW9uLWNvbnRlbnQ+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnY29udGVudC5zY3NzJ10sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gZmlsbCcsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMTgwLFxuICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiA5MCxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyNERTNFMzUnXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBzdGF0ZSgnZmlsbCcsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDMxNSxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyMxQjlBNTknLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICldXG4gICAgICAgICksXG4gICAgICAgIHRyaWdnZXIoJ3NwaW5uZXJBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKCdoaW50QW5pbScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTgwcHgpJyB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcxNTBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9KSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgd2lkdGg6ICcxMTJweCcgfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IHdpZHRoOiAnNDBweCcgfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgICApLFxuICAgIF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFJlZnJlc2ggaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQE91dHB1dCgpIG9uUHJvZ3Jlc3NDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8Q29udGVudFJlZnJlc2g+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBWaWV3Q2hpbGQoJ3NwaW5uZXInKSBzcGlubmVyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50OiBFbGVtZW50UmVmO1xuICAgIHJlZnJlc2hlcjogUmVmcmVzaGVyO1xuICAgIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICBwdWxsaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcmVmcmVzaGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNwaW5uZXJWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICB0cmFuc2xhdGVZOiBudW1iZXIgPSAwO1xuICAgIGhpbnRWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgaGludFRleHQ6IHN0cmluZyA9ICduZXcgcG9zdHMnO1xuXG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICd0b3VjaGVuZCcpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvdWNoZW5kJywgcmVzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnB1bGxpbmcgJiYgIXRoaXMucmVmcmVzaGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUHJvZ3Jlc3MoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgc3BpblJlZnJlc2hlcigpIHtcbiAgICAgICAgdGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKDE2OHB4KWApO1xuICAgICAgICB0aGlzLnJlZnJlc2hpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnB1bGxpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkb1JlZnJlc2goZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zaXRpb24nLCBgYWxsIDQwMG1zIGVhc2VgKTtcbiAgICAgICAgdGhpcy5zcGluUmVmcmVzaGVyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoIGhlcmUnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xvc2VEdXJhdGlvbiA9IFwiNDAwbXNcIjtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaGVyID0gZXZlbnQudGFyZ2V0LmNvbXBsZXRlKCk7XG5cbiAgICAgICAgfSw0MDApXG5cbiAgICB9XG5cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlUmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zaXRpb24nLCBgMGApO1xuICAgICAgICB0aGlzLnJlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvblB1bGwoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wdWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGV2ZW50LnRhcmdldC5nZXRQcm9ncmVzcygpO1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPD0gMSkge1xuICAgICAgICAgICAgdGhpcy5vblByb2dyZXNzQ2hhbmdlZC5lbWl0KHByb2dyZXNzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0YXJ0KCkge1xuICAgICAgICAvLyB0aGlzLmNoYW5nZVByb2dyZXNzKDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlWSA9IDExMiAqIHByb2dyZXNzO1xuICAgICAgICBjb25zdCB0cmFuc2xhdGVZID0gdGhpcy50cmFuc2xhdGVZO1xuICAgICAgICBjb25zb2xlLmxvZyhgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCk7XG4gICAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9KWApXG4gICAgICAgIHRoaXMuc3Bpbm5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCk7XG4gICAgICAgIC8vIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBmaWxsQW5pbWF0aW9uRG9uZShldmVudCkge1xuXG4gICAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZmlsbCcgJiYgZXZlbnQuZnJvbVN0YXRlID09PSAnc3Bpbm5pbmcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsbEFuaW0gY29tcGxldGUnLCBldmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lclZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGlubmVySGlkZGVuKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2ggY29tcGxldGUnLCBldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNwaW5uZXJWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2hvd0hpbnQoKSB7XG4gICAgICAgIHRoaXMuaGludFZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uSGludENsaWNrZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbiBoaW50IGNsaWNrZWQnKTtcbiAgICAgICAgdGhpcy5oaW50VmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHBvc3RIaW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgaWYgKCFldmVudC5mcm9tU3RhdGUgJiYgZXZlbnQudG9TdGF0ZSA9PSAndm9pZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5zcGluUmVmcmVzaGVyKCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Zpdi1sb2FkaW5nLWluZmluaXRlLXNjcm9sbCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZ2ctcmVmcmVzaGVyXCI+XG5cbiAgICA8ZGl2ICNzcGlubmVyIGNsYXNzPVwiZ2ctc3Bpbm5lci1jb250YWluZXJcIj5cbiAgICA8c3ZnIGNsYXNzPVwic3Bpbm5lciByb3RhdGVcIiB2aWV3Qm94PVwiMCAwIDcyIDcyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxjaXJjbGUgW0BmaWxsQW5pbV09XCJpc0NvbXBsZXRlID8gJ2ZpbGwnIDogJ3NwaW5uaW5nJ1wiIChAZmlsbEFuaW0uZG9uZSk9XCJmaWxsQW5pbWF0aW9uRG9uZSgkZXZlbnQpXCIgW25nQ2xhc3NdPVwieydwYXRoJzogIWlzQ29tcGxldGV9XCIgZmlsbD1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCI0XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIGN4PVwiMzZcIiBjeT1cIjM2XCIgcj1cIjMyXCI+PC9jaXJjbGU+XG4gPC9zdmc+XG4gICAgPC9kaXY+XG5cbiAgICBcbiAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydpbmZpbml0ZS1zY3JvbGwtY29udGVudC5zY3NzJ10sXG4gICAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2ZhYkFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLFxuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKVxuICAgICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3NwaW5uZXJBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSlcbiAgICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdyb3RhdGVBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCdub3JtYWwgPT4gcm90YXRlJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbigncm90YXRlID0+IG5vcm1hbCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2UtaW4nKVxuICAgICAgICBdKSxcbiAgICAgICAgc3RhdGUoJ3JvdGF0ZScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKScgfSkpLFxuICAgICAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3JvdGF0ZVooMGRlZyknIH0pKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IGZpbGwnLCBbXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5pbWF0ZSgnODAwbXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgc3RhdGUoJ2ZpbGwnLCBzdHlsZSh7XG4gICAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDMxNSxcbiAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDAsXG4gICAgICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAnc3Ryb2tlJzogJyMxQjlBNTknLFxuICAgICAgICAgICAgJ29wYWNpdHknOiAwXG4gICAgICAgIH0pXG4gICAgICAgICldXG4gICAgKV0sXG5cbn0pXG5leHBvcnQgY2xhc3MgSW5maW5pdGVTY3JvbGxDb250ZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBzcGluQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBmYWJDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZlcnRpY2FsOiBzdHJpbmcgPSBcImJvdHRvbVwiO1xuICAgIEBJbnB1dCgpIGhvcml6b250YWw6IHN0cmluZyA9IFwiZW5kXCI7XG4gICAgQElucHV0KCkgZWRnZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNoZWNrbWFyazogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGRyYWdQcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGljb25TdGF0ZTogc3RyaW5nID0gJ25vcm1hbCc7XG5cbiAgICBAVmlld0NoaWxkKCdzcGlubmVyJykgc3Bpbm5lcjogRWxlbWVudFJlZjtcblxuICAgIEBPdXRwdXQoKSBvbkNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8SW5maW5pdGVTY3JvbGxDb250ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SW5maW5pdGVTY3JvbGxDb250ZW50PigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxJbmZpbml0ZVNjcm9sbENvbnRlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJbmZpbml0ZVNjcm9sbENvbnRlbnQ+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGNoYW5nZTogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICB0b2dnbGVTcGlubmVyKCkge1xuICAgICAgICBpZiAodGhpcy5pY29uICE9ICdtZC1jaGVja21hcmsnKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdCgpO1xuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbGxBbmltYXRpb25Eb25lKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT0gJ3NwaW5uaW5nJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2ttYXJrKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbGwgYW5pbWF0aW9uIGRvbmUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3RhdGUgPSBcInJvdGF0ZVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LCBpY29uKTtcbiAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PSAnbm9ybWFsJykge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICAgICAgICAgIHRoaXMuaWNvblN0YXRlID0gXCJub3JtYWxcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09IFwicm90YXRlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3N0Q29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMudW5sb2FkKCk7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlUHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRyYWdQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICBjb25zdCB0cmFuc2xhdGVZID0gTWF0aC5mbG9vcigtODAgKyA4MCAqIHByb2dyZXNzKTtcbiAgICAgICAgY29uc29sZS5sb2coYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfXB4KWApO1xuICAgICAgICAvLyB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3Bpbm5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfSlgKVxuICAgICAgICB0aGlzLnNwaW5uZXIubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfXB4KWApXG4gICAgICAgIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tICcuL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYlNwaW5uZXIgfSBmcm9tICcuL2ZhYi9mYWIuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbkZ1bGwgfSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1Qcm9ncmVzcyB9IGZyb20gJy4vaXRlbS9pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZW50UmVmcmVzaCB9IGZyb20gJy4vY29udGVudC9jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmZpbml0ZVNjcm9sbENvbnRlbnQgfSBmcm9tICcuL2luZmluaXRlLXNjcm9sbC1jb250ZW50L2luZmluaXRlLXNjcm9sbHQtY29udGVudC5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBJb25pY01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRmFiU3Bpbm5lciwgUHJvZ3Jlc3NCYXIsIEJ1dHRvbkZ1bGwsSXRlbVByb2dyZXNzLENvbnRlbnRSZWZyZXNoLEluZmluaXRlU2Nyb2xsQ29udGVudF0sXG4gIGV4cG9ydHM6IFtGYWJTcGlubmVyLCBQcm9ncmVzc0JhciwgQnV0dG9uRnVsbCwgSXRlbVByb2dyZXNzLENvbnRlbnRSZWZyZXNoLEluZmluaXRlU2Nyb2xsQ29udGVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBZUU7dUJBTjBCLEtBQUs7MEJBQ0YsS0FBSzswQkFDWSxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDOzhCQUN0QyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsVUFBVSxDQUFDO0tBRzlFOzs7O0lBRWpCLDZCQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNwQzs7OztJQUVELCtCQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztLQUN6Qjs7OztJQUVELHNDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQzlCOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUMzQzs7Z0JBaENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3lCQU5EOzs7Ozs7O0FDQUE7SUErQ0kscUJBQW1CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjt1QkFUOUIsS0FBSztzQkFDRyxLQUFLOzBC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

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dialog/dialog.module": [
		"./src/app/dialog/dialog.module.ts",
		"dialog-dialog-module"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	],
	"./layout/layout.module": [
		"./src/app/layout/layout.module.ts",
		"layout-layout-module"
	],
	"./map-native/map-native.module": [
		"./src/app/map-native/map-native.module.ts",
		"map-map-module~map-native-map-native-module~map-web-native-map-web-native-module",
		"common",
		"map-native-map-native-module"
	],
	"./map-web-native/map-web-native.module": [
		"./src/app/map-web-native/map-web-native.module.ts",
		"map-map-module~map-native-map-native-module~map-web-native-map-web-native-module",
		"common",
		"map-web-native-map-web-native-module"
	],
	"./map/map.module": [
		"./src/app/map/map.module.ts",
		"map-map-module~map-native-map-native-module~map-web-native-map-web-native-module",
		"common",
		"map-map-module"
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
		var module = __webpack_require__(ids[0]);
		return module;
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
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'dialog', loadChildren: './dialog/dialog.module#DialogPageModule' },
    { path: 'map', loadChildren: './map/map.module#MapPageModule' },
    { path: 'map-native', loadChildren: './map-native/map-native.module#MapNativePageModule' },
    { path: 'map-web-native', loadChildren: './map-web-native/map-web-native.module#MapWebNativePageModule' },
    { path: 'layout', loadChildren: './layout/layout.module#LayoutPageModule' },
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

module.exports = "<fiv-loading-progressbar global=\"true\" ></fiv-loading-progressbar>\n\n<!--  our side menu  -->\n<ion-menu #menu>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item (click)=\"goTo('/home');menu.close()\">\n        Loading\n      </ion-item>\n      <ion-item (click)=\"goTo('/dialog'); menu.close()\">\n        Dialog\n      </ion-item>\n      <ion-item (click)=\"goTo('/map'); menu.close()\">\n        Map Web\n      </ion-item>\n      <ion-item (click)=\"goTo('/map-native'); menu.close()\">\n        Map Native\n      </ion-item>\n      <ion-item (click)=\"goTo('/map-web-native'); menu.close()\">\n        Map Web or Native\n      </ion-item>\n      <ion-item (click)=\"goTo('/layout'); menu.close()\">\n        Layout\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- the main content -->\n<ion-router-outlet main></ion-router-outlet>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AppComponent(platform, splashScreen, statusBar, router, navCtrl) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.navCtrl = navCtrl;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent.prototype.goTo = function (page) {
        this.navCtrl.goRoot(page);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var dist_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dist/loading */ "./dist/loading/fesm5/fivethree-loading.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                dist_loading__WEBPACK_IMPORTED_MODULE_9__["LoadingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production })],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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
    production: false,
    mapApiKey: 'AIzaSyDayeVB9R64ksX6GrMBFoR2edyYFrzJ8ug'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! /Users/mj/Dev/fivethree/web-components/component-library/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map