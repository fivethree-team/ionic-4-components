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
                    selector: 'gg-loading-progressbar',
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
                    selector: 'gg-loading-fab',
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
                    selector: 'gg-loading-button',
                    template: "\n    <ion-button class=\"buttonfull\" [disabled]=\"disabled\" [expand]=\"expand\" [color]=\"color\">\n    <gg-loading-progressbar [verticalAlign]=\"verticalAlign\" (onComplete)=\"onComplete($event)\" #progress [global]=\"false\"></gg-loading-progressbar>\n    <ng-content></ng-content>\n  </ion-button>\n    ",
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
                    selector: 'gg-loading-item',
                    template: "\n    <ion-item [ngClass]=\"{'loading': loading}\">\n    <ng-content></ng-content>\n  </ion-item>\n  <gg-loading-progressbar [verticalAlign]=\"verticalAlign\" (onComplete)=\"onComplete($event)\" #progress [global]=\"false\"></gg-loading-progressbar>\n\n    ",
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
                    selector: 'gg-loading-content',
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
                    selector: 'gg-loading-infinite-scroll',
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml2ZXRocmVlLWxvYWRpbmcuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BmaXZldGhyZWUvbG9hZGluZy9saWIvbG9hZGluZy5zZXJ2aWNlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2xvYWRpbmcvbGliL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2xvYWRpbmcvbGliL2ZhYi9mYWIuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2xvYWRpbmcvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2xvYWRpbmcvbGliL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvbG9hZGluZy9saWIvY29udGVudC9jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vQGZpdmV0aHJlZS9sb2FkaW5nL2xpYi9pbmZpbml0ZS1zY3JvbGwtY29udGVudC9pbmZpbml0ZS1zY3JvbGx0LWNvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2xvYWRpbmcvbGliL2xvYWRpbmcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdTZXJ2aWNlIHtcblxuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNDb21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbG9hZENoYW5nZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0aGlzLmxvYWRpbmcpO1xuICBwdWJsaWMgY29tcGxldGVDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odGhpcy5pc0NvbXBsZXRlKTtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMubG9hZENoYW5nZS5uZXh0KHRoaXMubG9hZGluZyk7XG4gIH1cblxuICB1bmxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5sb2FkQ2hhbmdlLm5leHQodGhpcy5sb2FkaW5nKTtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgfVxuXG4gIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgfVxuXG4gIGNvbXBsZXRlKCl7XG4gICAgY29uc29sZS5sb2coJ3NldCBzZXJ2aWNlIGNvbXBsZXRlJyk7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICB0aGlzLmNvbXBsZXRlQ2hhbmdlLm5leHQodGhpcy5pc0NvbXBsZXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vbG9hZGluZy5zZXJ2aWNlJztcblxuZXhwb3J0IHR5cGUgdmVydGljYWxBbGlnbiA9IFwidG9wXCIgfCBcImJvdHRvbVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2ctbG9hZGluZy1wcm9ncmVzc2JhcicsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgW0Bwcm9ncmVzc0FuaW1dICpuZ0lmPVwiKCFnbG9iYWwgJiYgbG9hZGluZykgfHwgKGdsb2JhbCAmJiBsb2FkaW5nU2VydmljZS5sb2FkaW5nKVwiIGNsYXNzPVwic2xpZGVyXCIgW25nQ2xhc3NdPVwieyd0b3AnOnZlcnRpY2FsQWxpZ24gPT0gJ3RvcCcsJ2JvdHRvbSc6IHZlcnRpY2FsQWxpZ24gPT0gJ2JvdHRvbSd9XCIgPlxuICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiIWlzQ29tcGxldGVcIiBjbGFzcz1cInN1YmxpbmUgaW5jXCI+PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJpc0NvbXBsZXRlXCIgW0BmaWxsQW5pbV0gKEBmaWxsQW5pbS5kb25lKT1cImZpbGxBbmltYXRpb25Db21wbGV0ZShpc0NvbXBsZXRlKVwiIGNsYXNzPVwic3VibGluZSBmaWxsXCI+PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCIhaXNDb21wbGV0ZVwiIGNsYXNzPVwic3VibGluZSBkZWNcIj48L2Rpdj5cbjwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJ3Byb2dyZXNzLWJhci5zY3NzJ10sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdwcm9ncmVzc0FuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI5OW1zIGVhc2UtaW4nLCBzdHlsZSh7IGhlaWdodDogJzBweCcgfSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBsZWZ0OiAnLTUlJywgd2lkdGg6ICc1JScgfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnODUwbXMgZWFzZS1vdXQnLCBzdHlsZSh7IGxlZnQ6ICcwJScsIHdpZHRoOiAnMTAwJScgfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGdsb2JhbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGlzQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSB2ZXJ0aWNhbEFsaWduOiB2ZXJ0aWNhbEFsaWduID0gJ3RvcCc7XG4gICAgQE91dHB1dCgpIG9uQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8UHJvZ3Jlc3NCYXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxQcm9ncmVzc0Jhcj4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2JhcicpIGJhcjogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2FkaW5nU2VydmljZTogTG9hZGluZ1NlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2xvYmFsKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmNvbXBsZXRlQ2hhbmdlLnN1YnNjcmliZShpc0NvbXBsZXRlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5nbG9iYWwpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuY29tcGxldGVDaGFuZ2UudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5pc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0IGNvbXBsZXRlJyk7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNDb21wbGV0ZSk7XG4gICAgfVxuXG4gICAgZmlsbEFuaW1hdGlvbkNvbXBsZXRlKGlzQ29tcGxldGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxsIGFuaW1hdGlvbiBjb21wbGV0ZScsIGlzQ29tcGxldGUpO1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmVtaXQoaXNDb21wbGV0ZSk7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UudW5sb2FkKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudW5sb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctZmFiJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aW9uLWZhYiBbQGZhYkFuaW1dIFt2ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiIFtob3Jpem9udGFsXT1cImhvcml6b250YWxcIiBbZWRnZV09XCJlZGdlXCI+XG4gICAgICAgIDxzdmcgKm5nSWY9XCJsb2FkaW5nXCIgI3NwaW5uZXIgY2xhc3M9XCJzcGlubmVyIHJvdGF0ZVwiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPGNpcmNsZSBbQGZpbGxBbmltXT1cImlzQ29tcGxldGUgPyAnZmlsbCcgOiAnc3Bpbm5pbmcnXCIgKEBmaWxsQW5pbS5kb25lKT1cImZpbGxBbmltYXRpb25Eb25lKCRldmVudClcIiBbbmdDbGFzc109XCJ7J3BhdGgnOiAhaXNDb21wbGV0ZX1cIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgY3g9XCIzNlwiIGN5PVwiMzZcIiByPVwiMzJcIj48L2NpcmNsZT5cbiA8L3N2Zz5cbiAgICAgICAgICAgIDxpb24tZmFiLWJ1dHRvbiBbY29sb3JdPVwiZmFiQ29sb3JcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gW0Byb3RhdGVBbmltXT1cImljb25TdGF0ZVwiIChAcm90YXRlQW5pbS5kb25lKT1cImNoYW5nZUljb25BbmRSZXZlYWwoJGV2ZW50LCdtZC1jaGVja21hcmsnKVwiIFtuYW1lXT1cImljb25cIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24tZmFiLWJ1dHRvbj5cblxuICAgICAgICA8L2lvbi1mYWI+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnZmFiLnNjc3MnXSxcbiAgICBhbmltYXRpb25zOiBbdHJpZ2dlcignZmFiQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSksXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSkpXG4gICAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignc3Bpbm5lckFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pLFxuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pKVxuICAgICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3JvdGF0ZUFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiByb3RhdGUnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCdyb3RhdGUgPT4gbm9ybWFsJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicpXG4gICAgICAgIF0pLFxuICAgICAgICBzdGF0ZSgncm90YXRlJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3JvdGF0ZVooNDVkZWcpJyB9KSksXG4gICAgICAgIHN0YXRlKCdub3JtYWwnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAncm90YXRlWigwZGVnKScgfSkpXG4gICAgXSksXG4gICAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gZmlsbCcsIFtcbiAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDE4MCxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiA5MCxcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgJ3N0cm9rZSc6ICcjREUzRTM1J1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmltYXRlKCcxNDAwbXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgc3RhdGUoJ2ZpbGwnLCBzdHlsZSh7XG4gICAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDMxNSxcbiAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDAsXG4gICAgICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAnc3Ryb2tlJzogJyMxQjlBNTknLFxuICAgICAgICAgICAgJ29wYWNpdHknOiAwXG4gICAgICAgIH0pXG4gICAgICAgICldXG4gICAgKV0sXG5cbn0pXG5leHBvcnQgY2xhc3MgRmFiU3Bpbm5lciBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc3BpbkNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZmFiQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSB2ZXJ0aWNhbDogc3RyaW5nID0gXCJib3R0b21cIjtcbiAgICBASW5wdXQoKSBob3Jpem9udGFsOiBzdHJpbmcgPSBcImVuZFwiO1xuICAgIEBJbnB1dCgpIGVkZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjaGVja21hcms6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGljb25TdGF0ZTogc3RyaW5nID0gJ25vcm1hbCc7XG5cbiAgICBAVmlld0NoaWxkKCdzcGlubmVyJykgc3Bpbm5lcjogRWxlbWVudFJlZjtcblxuICAgIEBPdXRwdXQoKSBvbkNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8RmFiU3Bpbm5lcj4gPSBuZXcgRXZlbnRFbWl0dGVyPEZhYlNwaW5uZXI+KCk7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaDogRXZlbnRFbWl0dGVyPEZhYlNwaW5uZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxGYWJTcGlubmVyPigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICAgICAgaWYodGhpcy5pY29uICE9ICdtZC1jaGVja21hcmsnKXtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGlmKHRoaXMubG9hZGluZyl7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaWxsQW5pbWF0aW9uRG9uZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09ICdzcGlubmluZycpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrbWFyaykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxsIGFuaW1hdGlvbiBkb25lJywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvblN0YXRlID0gXCJyb3RhdGVcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0Q29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUljb25BbmRSZXZlYWwoZXZlbnQsIGljb246IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCwgaWNvbik7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT0gJ25vcm1hbCcpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgICAgICAgICB0aGlzLmljb25TdGF0ZSA9IFwibm9ybWFsXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSBcInJvdGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0Q29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9zdENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLnVubG9hZCgpO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmVtaXQodGhpcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gJy4uL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgdmVydGljYWxBbGlnbiA9IFwidG9wXCIgfCBcImJvdHRvbVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2ctbG9hZGluZy1idXR0b24nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGlvbi1idXR0b24gY2xhc3M9XCJidXR0b25mdWxsXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2V4cGFuZF09XCJleHBhbmRcIiBbY29sb3JdPVwiY29sb3JcIj5cbiAgICA8Z2ctbG9hZGluZy1wcm9ncmVzc2JhciBbdmVydGljYWxBbGlnbl09XCJ2ZXJ0aWNhbEFsaWduXCIgKG9uQ29tcGxldGUpPVwib25Db21wbGV0ZSgkZXZlbnQpXCIgI3Byb2dyZXNzIFtnbG9iYWxdPVwiZmFsc2VcIj48L2dnLWxvYWRpbmctcHJvZ3Jlc3NiYXI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2lvbi1idXR0b24+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnYnV0dG9uLnNjc3MnXSxcblxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25GdWxsIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoJ3Byb2dyZXNzJykgcHJvZ3Jlc3M6IFByb2dyZXNzQmFyO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnbGlnaHQnO1xuICAgIEBJbnB1dCgpIGV4cGFuZDogc3RyaW5nID0gJ2Jsb2NrJztcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHZlcnRpY2FsQWxpZ246IHZlcnRpY2FsQWxpZ24gPSAndG9wJztcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8QnV0dG9uRnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaENvbXBsZXRlOiBFdmVudEVtaXR0ZXI8QnV0dG9uRnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MudG9nZ2xlU3Bpbm5lcigpO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MubG9hZCgpO1xuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MudW5sb2FkKCk7XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29tcGxldGUoaXNDb21wbGV0ZTogYm9vbGVhbikge1xuICAgICAgICBjb25zb2xlLmxvZygnb24gY29tcGxldGUnLCBpc0NvbXBsZXRlKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25SZWZyZXNoQ29tcGxldGUuZW1pdCh0aGlzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xuXG5leHBvcnQgdHlwZSB2ZXJ0aWNhbEFsaWduID0gXCJ0b3BcIiB8IFwiYm90dG9tXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZy1sb2FkaW5nLWl0ZW0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGlvbi1pdGVtIFtuZ0NsYXNzXT1cInsnbG9hZGluZyc6IGxvYWRpbmd9XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2lvbi1pdGVtPlxuICA8Z2ctbG9hZGluZy1wcm9ncmVzc2JhciBbdmVydGljYWxBbGlnbl09XCJ2ZXJ0aWNhbEFsaWduXCIgKG9uQ29tcGxldGUpPVwib25Db21wbGV0ZSgkZXZlbnQpXCIgI3Byb2dyZXNzIFtnbG9iYWxdPVwiZmFsc2VcIj48L2dnLWxvYWRpbmctcHJvZ3Jlc3NiYXI+XG5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydpdGVtLnNjc3MnXSxcblxufSlcbmV4cG9ydCBjbGFzcyBJdGVtUHJvZ3Jlc3MgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHZlcnRpY2FsQWxpZ246IHZlcnRpY2FsQWxpZ24gPSAnYm90dG9tJztcblxuICAgIEBWaWV3Q2hpbGQoJ3Byb2dyZXNzJykgcHJvZ3Jlc3M6IFByb2dyZXNzQmFyO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2hDb21wbGV0ZTogRXZlbnRFbWl0dGVyPEl0ZW1Qcm9ncmVzcz4gPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1Qcm9ncmVzcz4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8SXRlbVByb2dyZXNzPiA9IG5ldyBFdmVudEVtaXR0ZXI8SXRlbVByb2dyZXNzPigpO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICB0b2dnbGVTcGlubmVyKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnRvZ2dsZVNwaW5uZXIoKTtcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2dyZXNzLmxvYWQoKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnVubG9hZCgpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlKGlzQ29tcGxldGU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uIGNvbXBsZXRlJywgaXNDb21wbGV0ZSk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaENvbXBsZXRlLmVtaXQodGhpcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgc3RhdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSZWZyZXNoZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctY29udGVudCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aW9uLWNvbnRlbnQgZnVsbHNjcmVlbj5cbiAgICA8ZGl2IGNsYXNzPVwiZ2ctaGludC13cmFwcGVyXCI+XG4gICAgPGlvbi1jaGlwICpuZ0lmPVwiaGludFZpc2libGVcIiAoY2xpY2spPVwib25IaW50Q2xpY2tlZCgpXCIgW0BoaW50QW5pbV0gKEBoaW50QW5pbS5kb25lKT1cInBvc3RIaW50KCRldmVudClcIiAjaGludCBjbGFzcz1cImdnLWhpbnQtY29udGFpbmVyXCI+XG4gIDxpb24taWNvbiBjbGFzcz1cImljb25cIiBuYW1lPVwibWQtYXJyb3ctdXBcIj48L2lvbi1pY29uPlxuICA8aW9uLWxhYmVsIGNsYXNzPVwidGV4dFwiPnt7aGludFRleHR9fTwvaW9uLWxhYmVsPlxuPC9pb24tY2hpcD5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IFtAc3Bpbm5lckFuaW1dIChAc3Bpbm5lckFuaW0uZG9uZSk9XCJvblNwaW5uZXJIaWRkZW4oJGV2ZW50KVwiICpuZ0lmPVwic3Bpbm5lclZpc2libGVcIiAjc3Bpbm5lciBjbGFzcz1cImdnLXNwaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJzcGlubmVyIHJvdGF0ZVwiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICA8Y2lyY2xlIFtAZmlsbEFuaW1dPVwiaXNDb21wbGV0ZSA/ICdmaWxsJyA6ICdzcGlubmluZydcIiAoQGZpbGxBbmltLmRvbmUpPVwiZmlsbEFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cInsncGF0aCc6ICFpc0NvbXBsZXRlfVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBjeD1cIjM2XCIgY3k9XCIzNlwiIHI9XCIzMlwiPjwvY2lyY2xlPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgICA8aW9uLXJlZnJlc2hlciBzbG90PVwiZml4ZWRcIiAjcmVmcmVzaGVyIGNsYXNzPVwicmVmcmVzaGVyXCIgKGlvblN0YXJ0KT1cIm9uU3RhcnQoKVwiIHNuYXBiYWNrRHVyYXRpb249XCI0MDBtc1wiIGNsb3NlRHVyYXRpb249XCI4MDBtc1wiIFtwdWxsTWF4XT1cIjE2OFwiIFtwdWxsTWluXT1cIjU2XCIgW2Rpc2FibGVkXT1cImZhbHNlXCIgc2xvdD1cImZpeGVkXCIgKGlvblJlZnJlc2gpPVwiZG9SZWZyZXNoKCRldmVudClcIiAoaW9uUHVsbCk9XCJvblB1bGwoJGV2ZW50KVwiPlxuICAgICAgICA8L2lvbi1yZWZyZXNoZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnZy1jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaW9uLWNvbnRlbnQ+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnY29udGVudC5zY3NzJ10sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gZmlsbCcsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMTgwLFxuICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiA5MCxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyNERTNFMzUnXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBzdGF0ZSgnZmlsbCcsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDMxNSxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyMxQjlBNTknLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICldXG4gICAgICAgICksXG4gICAgICAgIHRyaWdnZXIoJ3NwaW5uZXJBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKCdoaW50QW5pbScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTgwcHgpJyB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcxNTBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9KSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgd2lkdGg6ICcxMTJweCcgfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IHdpZHRoOiAnNDBweCcgfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgICApLFxuICAgIF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFJlZnJlc2ggaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQE91dHB1dCgpIG9uUHJvZ3Jlc3NDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8Q29udGVudFJlZnJlc2g+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBWaWV3Q2hpbGQoJ3NwaW5uZXInKSBzcGlubmVyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50OiBFbGVtZW50UmVmO1xuICAgIHJlZnJlc2hlcjogUmVmcmVzaGVyO1xuICAgIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICBwdWxsaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcmVmcmVzaGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNwaW5uZXJWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICB0cmFuc2xhdGVZOiBudW1iZXIgPSAwO1xuICAgIGhpbnRWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgaGludFRleHQ6IHN0cmluZyA9ICduZXcgcG9zdHMnO1xuXG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICd0b3VjaGVuZCcpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvdWNoZW5kJywgcmVzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnB1bGxpbmcgJiYgIXRoaXMucmVmcmVzaGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUHJvZ3Jlc3MoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgc3BpblJlZnJlc2hlcigpIHtcbiAgICAgICAgdGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKDE2OHB4KWApO1xuICAgICAgICB0aGlzLnJlZnJlc2hpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnB1bGxpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkb1JlZnJlc2goZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zaXRpb24nLCBgYWxsIDQwMG1zIGVhc2VgKTtcbiAgICAgICAgdGhpcy5zcGluUmVmcmVzaGVyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoIGhlcmUnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xvc2VEdXJhdGlvbiA9IFwiNDAwbXNcIjtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaGVyID0gZXZlbnQudGFyZ2V0LmNvbXBsZXRlKCk7XG5cbiAgICAgICAgfSw0MDApXG5cbiAgICB9XG5cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlUmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zaXRpb24nLCBgMGApO1xuICAgICAgICB0aGlzLnJlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvblB1bGwoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wdWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGV2ZW50LnRhcmdldC5nZXRQcm9ncmVzcygpO1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPD0gMSkge1xuICAgICAgICAgICAgdGhpcy5vblByb2dyZXNzQ2hhbmdlZC5lbWl0KHByb2dyZXNzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0YXJ0KCkge1xuICAgICAgICAvLyB0aGlzLmNoYW5nZVByb2dyZXNzKDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlWSA9IDExMiAqIHByb2dyZXNzO1xuICAgICAgICBjb25zdCB0cmFuc2xhdGVZID0gdGhpcy50cmFuc2xhdGVZO1xuICAgICAgICBjb25zb2xlLmxvZyhgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCk7XG4gICAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9KWApXG4gICAgICAgIHRoaXMuc3Bpbm5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCk7XG4gICAgICAgIC8vIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBmaWxsQW5pbWF0aW9uRG9uZShldmVudCkge1xuXG4gICAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZmlsbCcgJiYgZXZlbnQuZnJvbVN0YXRlID09PSAnc3Bpbm5pbmcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsbEFuaW0gY29tcGxldGUnLCBldmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lclZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGlubmVySGlkZGVuKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2ggY29tcGxldGUnLCBldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNwaW5uZXJWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2hvd0hpbnQoKSB7XG4gICAgICAgIHRoaXMuaGludFZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uSGludENsaWNrZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbiBoaW50IGNsaWNrZWQnKTtcbiAgICAgICAgdGhpcy5oaW50VmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHBvc3RIaW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgaWYgKCFldmVudC5mcm9tU3RhdGUgJiYgZXZlbnQudG9TdGF0ZSA9PSAndm9pZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5zcGluUmVmcmVzaGVyKCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctaW5maW5pdGUtc2Nyb2xsJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJnZy1yZWZyZXNoZXJcIj5cblxuICAgIDxkaXYgI3NwaW5uZXIgY2xhc3M9XCJnZy1zcGlubmVyLWNvbnRhaW5lclwiPlxuICAgIDxzdmcgY2xhc3M9XCJzcGlubmVyIHJvdGF0ZVwiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPGNpcmNsZSBbQGZpbGxBbmltXT1cImlzQ29tcGxldGUgPyAnZmlsbCcgOiAnc3Bpbm5pbmcnXCIgKEBmaWxsQW5pbS5kb25lKT1cImZpbGxBbmltYXRpb25Eb25lKCRldmVudClcIiBbbmdDbGFzc109XCJ7J3BhdGgnOiAhaXNDb21wbGV0ZX1cIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgY3g9XCIzNlwiIGN5PVwiMzZcIiByPVwiMzJcIj48L2NpcmNsZT5cbiA8L3N2Zz5cbiAgICA8L2Rpdj5cblxuICAgIFxuICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJ2luZmluaXRlLXNjcm9sbC1jb250ZW50LnNjc3MnXSxcbiAgICBhbmltYXRpb25zOiBbdHJpZ2dlcignZmFiQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSksXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSkpXG4gICAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignc3Bpbm5lckFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pLFxuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pKVxuICAgICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3JvdGF0ZUFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiByb3RhdGUnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCdyb3RhdGUgPT4gbm9ybWFsJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicpXG4gICAgICAgIF0pLFxuICAgICAgICBzdGF0ZSgncm90YXRlJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3JvdGF0ZVooNDVkZWcpJyB9KSksXG4gICAgICAgIHN0YXRlKCdub3JtYWwnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAncm90YXRlWigwZGVnKScgfSkpXG4gICAgXSksXG4gICAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gZmlsbCcsIFtcbiAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDE4MCxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiA5MCxcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgJ3N0cm9rZSc6ICcjREUzRTM1J1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmltYXRlKCc4MDBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICBzdGF0ZSgnZmlsbCcsIHN0eWxlKHtcbiAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMzE1LFxuICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogMCxcbiAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICdzdHJva2UnOiAnIzFCOUE1OScsXG4gICAgICAgICAgICAnb3BhY2l0eSc6IDBcbiAgICAgICAgfSlcbiAgICAgICAgKV1cbiAgICApXSxcblxufSlcbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbENvbnRlbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNwaW5Db2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZhYkNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdmVydGljYWw6IHN0cmluZyA9IFwiYm90dG9tXCI7XG4gICAgQElucHV0KCkgaG9yaXpvbnRhbDogc3RyaW5nID0gXCJlbmRcIjtcbiAgICBASW5wdXQoKSBlZGdlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgY2hlY2ttYXJrOiBib29sZWFuID0gZmFsc2U7XG4gICAgZHJhZ1Byb2dyZXNzOiBudW1iZXIgPSAwO1xuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgaWNvblN0YXRlOiBzdHJpbmcgPSAnbm9ybWFsJztcblxuICAgIEBWaWV3Q2hpbGQoJ3NwaW5uZXInKSBzcGlubmVyOiBFbGVtZW50UmVmO1xuXG4gICAgQE91dHB1dCgpIG9uQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxJbmZpbml0ZVNjcm9sbENvbnRlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJbmZpbml0ZVNjcm9sbENvbnRlbnQ+KCk7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaDogRXZlbnRFbWl0dGVyPEluZmluaXRlU2Nyb2xsQ29udGVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEluZmluaXRlU2Nyb2xsQ29udGVudD4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgY2hhbmdlOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmljb24gIT0gJ21kLWNoZWNrbWFyaycpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KCk7XG4gICAgfVxuXG4gICAgdW5sb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlsbEFuaW1hdGlvbkRvbmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PSAnc3Bpbm5pbmcnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja21hcmspIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsbCBhbmltYXRpb24gZG9uZScsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TdGF0ZSA9IFwicm90YXRlXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VJY29uQW5kUmV2ZWFsKGV2ZW50LCBpY29uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQsIGljb24pO1xuICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09ICdub3JtYWwnKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgICAgICAgdGhpcy5pY29uU3RhdGUgPSBcIm5vcm1hbFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gXCJyb3RhdGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy51bmxvYWQoKTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Db21wbGV0ZS5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZHJhZ1Byb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSBNYXRoLmZsb29yKC04MCArIDgwICogcHJvZ3Jlc3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCk7XG4gICAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9KWApXG4gICAgICAgIHRoaXMuc3Bpbm5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYClcbiAgICAgICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFiU3Bpbm5lciB9IGZyb20gJy4vZmFiL2ZhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uRnVsbCB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbVByb2dyZXNzIH0gZnJvbSAnLi9pdGVtL2l0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRlbnRSZWZyZXNoIH0gZnJvbSAnLi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEluZmluaXRlU2Nyb2xsQ29udGVudCB9IGZyb20gJy4vaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQvaW5maW5pdGUtc2Nyb2xsdC1jb250ZW50LmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIElvbmljTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGYWJTcGlubmVyLCBQcm9ncmVzc0JhciwgQnV0dG9uRnVsbCxJdGVtUHJvZ3Jlc3MsQ29udGVudFJlZnJlc2gsSW5maW5pdGVTY3JvbGxDb250ZW50XSxcbiAgZXhwb3J0czogW0ZhYlNwaW5uZXIsIFByb2dyZXNzQmFyLCBCdXR0b25GdWxsLCBJdGVtUHJvZ3Jlc3MsQ29udGVudFJlZnJlc2gsSW5maW5pdGVTY3JvbGxDb250ZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFlRTt1QkFOMEIsS0FBSzswQkFDRixLQUFLOzBCQUNZLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxPQUFPLENBQUM7OEJBQ3RDLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxVQUFVLENBQUM7S0FHOUU7Ozs7SUFFakIsNkJBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsK0JBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0tBQ3pCOzs7O0lBRUQsc0NBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDOUI7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzNDOztnQkFoQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7eUJBTkQ7Ozs7Ozs7QUNBQTtJQStDSSxxQkFBbUIsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO3VCQVQ5QixLQUFLO3NCQUNHLEtBQUs7MEJBQ0QsS0FBSzs2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

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

module.exports = "<gg-loading-progressbar global=\"true\" ></gg-loading-progressbar>\n\n<!--  our side menu  -->\n<ion-menu #menu>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item (click)=\"goTo('/home');menu.close()\">\n        Loading\n      </ion-item>\n      <ion-item (click)=\"goTo('/dialog'); menu.close()\">\n        Dialog\n      </ion-item>\n      <ion-item (click)=\"goTo('/map'); menu.close()\">\n        Map Web\n      </ion-item>\n      <ion-item (click)=\"goTo('/map-native'); menu.close()\">\n        Map Native\n      </ion-item>\n      <ion-item (click)=\"goTo('/map-web-native'); menu.close()\">\n        Map Web or Native\n      </ion-item>\n      <ion-item (click)=\"goTo('/layout'); menu.close()\">\n        Layout\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- the main content -->\n<ion-router-outlet main></ion-router-outlet>"

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