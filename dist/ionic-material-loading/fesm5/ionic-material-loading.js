import { Injectable, Component, Input, ViewChild, Output, EventEmitter, Renderer2, ChangeDetectorRef, NgModule, defineInjectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { animate, style, transition, trigger, state } from '@angular/animations';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loading = false;
        this.isComplete = false;
        this.loadChange = new BehaviorSubject(this.loading);
        this.completeChange = new BehaviorSubject(this.isComplete);
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LoadingService.ctorParameters = function () { return []; };
    /** @nocollapse */ LoadingService.ngInjectableDef = defineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(); }, token: LoadingService, providedIn: "root" });
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
        this.onComplete = new EventEmitter();
        this.onRefresh = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'gg-loading-progressbar',
                    template: "\n<div [@progressAnim] *ngIf=\"(!global && loading) || (global && loadingService.loading)\" class=\"slider\">\n  <div class=\"line\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline inc\"></div>\n  <div *ngIf=\"isComplete\" [@fillAnim] (@fillAnim.done)=\"fillAnimationComplete(isComplete)\" class=\"subline fill\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline dec\"></div>\n</div>\n    ",
                    animations: [
                        trigger('progressAnim', [
                            transition('void => *', [
                                style({ height: '0px' }),
                                animate('250ms ease-out')
                            ]),
                            transition('* => void', [
                                animate('299ms ease-in', style({ height: '0px' }))
                            ])
                        ]),
                        trigger('fillAnim', [
                            transition('void => *', [
                                style({ left: '-5%', width: '5%' }),
                                animate('850ms ease-out', style({ left: '0%', width: '100%' }))
                            ]),
                        ])
                    ],
                    styles: [".slider{position:absolute;width:100%;height:5px;overflow-x:hidden;z-index:5000}.line{position:absolute;opacity:.4;width:240%;height:5px;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}.subline{position:absolute;height:5px;background:inherit}.inc{-webkit-animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin;animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin}.dec{-webkit-animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin;animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin}.fill{left:0;width:100%;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}@-webkit-keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@-webkit-keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@-webkit-keyframes colorspin{0%,100%{background-color:#4285f4}25%{background-color:#de3e35}50%{background-color:#f7c223}75%{background-color:#1b9a59}}@keyframes colorspin{0%,100%{background-color:#4285f4}25%{background-color:#de3e35}50%{background-color:#f7c223}75%{background-color:#1b9a59}}"]
                }] }
    ];
    /** @nocollapse */
    ProgressBar.ctorParameters = function () { return [
        { type: LoadingService }
    ]; };
    ProgressBar.propDecorators = {
        global: [{ type: Input }],
        isComplete: [{ type: Input }],
        onComplete: [{ type: Output }],
        onRefresh: [{ type: Output }],
        bar: [{ type: ViewChild, args: ['bar',] }]
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
        this.onComplete = new EventEmitter();
        this.onRefresh = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'gg-loading-fab',
                    template: "\n        <ion-fab [@fabAnim] [vertical]=\"vertical\" [horizontal]=\"horizontal\" [edge]=\"edge\">\n        <svg *ngIf=\"loading\" #spinner class=\"spinner rotate\" viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle [@fillAnim]=\"isComplete ? 'fill' : 'spinning'\" (@fillAnim.done)=\"fillAnimationDone($event)\" [ngClass]=\"{'path': !isComplete}\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\" cx=\"36\" cy=\"36\" r=\"32\"></circle>\n </svg>\n            <ion-fab-button [color]=\"fabColor\">\n                <ion-icon [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\" [name]=\"icon\"></ion-icon>\n            </ion-fab-button>\n\n        </ion-fab>\n    ",
                    animations: [trigger('fabAnim', [
                            transition('void => *', [
                                style({ transform: 'scale(0)' }),
                                animate('250ms ease-out')
                            ]),
                            transition('* => void', [
                                animate('250ms ease-in', style({ transform: 'scale(0)' }))
                            ])
                        ]),
                        trigger('spinnerAnim', [
                            transition('void => *', [
                                style({ opacity: '0' }),
                                animate('250ms ease-out')
                            ]),
                            transition('* => void', [
                                animate('250ms ease-in', style({ opacity: '0' }))
                            ])
                        ]),
                        trigger('rotateAnim', [
                            transition('normal => rotate', [
                                animate('125ms ease-out')
                            ]),
                            transition('rotate => normal', [
                                animate('125ms ease-in')
                            ]),
                            state('rotate', style({ opacity: '0', transform: 'rotateZ(45deg)' })),
                            state('normal', style({ opacity: '1', transform: 'rotateZ(0deg)' }))
                        ]),
                        trigger('fillAnim', [
                            transition('* => fill', [
                                style({
                                    'stroke-dasharray': 180,
                                    'stroke-dashoffset': 90,
                                    'transformOrigin': 'center',
                                    'stroke': '#DE3E35'
                                }),
                                animate('1400ms ease-out')
                            ]),
                            state('fill', style({
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
        icon: [{ type: Input }],
        spinColor: [{ type: Input }],
        fabColor: [{ type: Input }],
        vertical: [{ type: Input }],
        horizontal: [{ type: Input }],
        edge: [{ type: Input }],
        checkmark: [{ type: Input }],
        spinner: [{ type: ViewChild, args: ['spinner',] }],
        onComplete: [{ type: Output }],
        onRefresh: [{ type: Output }]
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
        this.onRefresh = new EventEmitter();
        this.onRefreshComplete = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'gg-loading-button',
                    template: "\n    <gg-loading-progressbar (onComplete)=\"onComplete($event)\" #progress [global]=\"false\"></gg-loading-progressbar>\n    <ion-button [expand]=\"expand\" [color]=\"color\">\n    <ng-content></ng-content>\n  </ion-button>\n    ",
                    styles: [":host{position:relative;display:block;margin:0 20px;width:calc(100% - 40px)}"]
                }] }
    ];
    /** @nocollapse */
    ButtonFull.ctorParameters = function () { return []; };
    ButtonFull.propDecorators = {
        progress: [{ type: ViewChild, args: ['progress',] }],
        color: [{ type: Input }],
        expand: [{ type: Input }],
        onRefresh: [{ type: Output }],
        onRefreshComplete: [{ type: Output }]
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
        this.onRefreshComplete = new EventEmitter();
        this.onRefresh = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'gg-loading-item',
                    template: "\n    <ion-item [ngClass]=\"{'loading': loading}\">\n    <ng-content></ng-content>\n  </ion-item>\n  <gg-loading-progressbar (onComplete)=\"onComplete($event)\" #progress [global]=\"false\"></gg-loading-progressbar>\n\n    ",
                    styles: [":host{position:relative;display:block;margin:0;width:calc(100%)}ion-item{background:#fff}.loading{margin:4px;width:calc(100% - 8px);transition:.2s;border-radius:8px;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 4px 16px rgba(0,0,0,.12)}"]
                }] }
    ];
    /** @nocollapse */
    ItemProgress.ctorParameters = function () { return []; };
    ItemProgress.propDecorators = {
        progress: [{ type: ViewChild, args: ['progress',] }],
        onRefreshComplete: [{ type: Output }],
        onRefresh: [{ type: Output }]
    };
    return ItemProgress;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ContentRefresh = /** @class */ (function () {
    function ContentRefresh() {
        this.onProgressChanged = new EventEmitter();
        this.onRefresh = new EventEmitter();
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
        fromEvent(document, 'touchend').subscribe(function (res) {
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
        this.spinRefresher();
        console.log('refresh here');
        setTimeout(function () {
            event.target.complete();
        }, 140);
        this.refresh();
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
        { type: Component, args: [{
                    selector: 'gg-loading-content',
                    template: "\n    <div class=\"gg-hint-wrapper\">\n    <ion-chip *ngIf=\"hintVisible\" (click)=\"onHintClicked()\" [@hintAnim] (@hintAnim.done)=\"postHint($event)\" #hint class=\"gg-hint-container\">\n  <ion-icon class=\"icon\" name=\"md-arrow-up\"></ion-icon>\n  <ion-label class=\"text\">{{hintText}}</ion-label>\n</ion-chip>\n    </div>\n    \n    <div [@spinnerAnim] (@spinnerAnim.done)=\"onSpinnerHidden($event)\" *ngIf=\"spinnerVisible\" #spinner class=\"gg-spinner-container\">\n        <svg class=\"spinner rotate\" viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle [@fillAnim]=\"isComplete ? 'fill' : 'spinning'\" (@fillAnim.done)=\"fillAnimationDone($event)\" [ngClass]=\"{'path': !isComplete}\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\" cx=\"36\" cy=\"36\" r=\"32\"></circle>\n        </svg>\n    </div>\n        <ion-refresher (ionStart)=\"onStart()\" [snapbackDuration]=\"280\" [closeDuration]=\"280\" [pullMax]=\"168\" [pullMin]=\"112\" [disabled]=\"false\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" (ionPull)=\"onPull($event)\">\n        </ion-refresher>\n    ",
                    animations: [
                        trigger('fillAnim', [
                            transition('* => fill', [
                                style({
                                    'stroke-dasharray': 180,
                                    'stroke-dashoffset': 90,
                                    'transformOrigin': 'center',
                                    'stroke': '#DE3E35'
                                }),
                                animate('360ms ease-out')
                            ]),
                            state('fill', style({
                                'stroke-dasharray': 315,
                                'stroke-dashoffset': 0,
                                'transformOrigin': 'center',
                                'stroke': '#1B9A59',
                            }))
                        ]),
                        trigger('spinnerAnim', [
                            transition('* => void', [
                                animate('250ms ease-out', style({ opacity: 0 }))
                            ]),
                        ]),
                        trigger('hintAnim', [
                            transition('void => *', [
                                style({ opacity: 0, transform: 'translateY(-80px)' }),
                                animate('150ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
                            ]),
                            transition('* => void', [
                                style({ width: '112px' }),
                                animate('125ms ease-out', style({ width: '40px' }))
                            ]),
                        ]),
                    ],
                    styles: [".spinner{position:absolute;width:24px;height:24px;left:8px;top:8px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}.gg-spinner-container{width:40px;height:40px;position:absolute;left:calc(50% - 20px);top:-56px;z-index:9;background:var(--ion-color-light);border-radius:50%;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1)}.gg-hint-container{height:40px;padding-left:8px;padding-right:8px;position:relative;background:var(--ion-color-light);border-radius:40px;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1);margin:0}.icon{height:20px;width:20px;background:0 0;color:var(--ion-color-dark)}.text{font-size:1em;color:var(--ion-color-dark)}.gg-hint-wrapper{width:100%;position:absolute;top:112px;z-index:8;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    ContentRefresh.ctorParameters = function () { return []; };
    ContentRefresh.propDecorators = {
        onProgressChanged: [{ type: Output }],
        onRefresh: [{ type: Output }],
        spinner: [{ type: ViewChild, args: ['spinner',] }],
        content: [{ type: ViewChild, args: ['content',] }],
        hintText: [{ type: Input }]
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
        this.onComplete = new EventEmitter();
        this.onRefresh = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'gg-loading-infinite-scroll',
                    template: "\n    <div class=\"gg-refresher\">\n\n    <div #spinner class=\"gg-spinner-container\">\n    <svg class=\"spinner rotate\" viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle [@fillAnim]=\"isComplete ? 'fill' : 'spinning'\" (@fillAnim.done)=\"fillAnimationDone($event)\" [ngClass]=\"{'path': !isComplete}\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\" cx=\"36\" cy=\"36\" r=\"32\"></circle>\n </svg>\n    </div>\n\n    \n    </div>\n    ",
                    animations: [trigger('fabAnim', [
                            transition('void => *', [
                                style({ transform: 'scale(0)' }),
                                animate('250ms ease-out')
                            ]),
                            transition('* => void', [
                                animate('250ms ease-in', style({ transform: 'scale(0)' }))
                            ])
                        ]),
                        trigger('spinnerAnim', [
                            transition('void => *', [
                                style({ opacity: '0' }),
                                animate('250ms ease-out')
                            ]),
                            transition('* => void', [
                                animate('250ms ease-in', style({ opacity: '0' }))
                            ])
                        ]),
                        trigger('rotateAnim', [
                            transition('normal => rotate', [
                                animate('125ms ease-out')
                            ]),
                            transition('rotate => normal', [
                                animate('125ms ease-in')
                            ]),
                            state('rotate', style({ opacity: '0', transform: 'rotateZ(45deg)' })),
                            state('normal', style({ opacity: '1', transform: 'rotateZ(0deg)' }))
                        ]),
                        trigger('fillAnim', [
                            transition('* => fill', [
                                style({
                                    'stroke-dasharray': 180,
                                    'stroke-dashoffset': 90,
                                    'transformOrigin': 'center',
                                    'stroke': '#DE3E35'
                                }),
                                animate('800ms ease-out')
                            ]),
                            state('fill', style({
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
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    InfiniteScrollContent.propDecorators = {
        icon: [{ type: Input }],
        spinColor: [{ type: Input }],
        fabColor: [{ type: Input }],
        vertical: [{ type: Input }],
        horizontal: [{ type: Input }],
        edge: [{ type: Input }],
        checkmark: [{ type: Input }],
        spinner: [{ type: ViewChild, args: ['spinner',] }],
        onComplete: [{ type: Output }],
        onRefresh: [{ type: Output }]
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
        { type: NgModule, args: [{
                    imports: [
                        IonicModule,
                        CommonModule
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

export { LoadingService, LoadingModule, ButtonFull as ɵc, ContentRefresh as ɵe, FabSpinner as ɵa, InfiniteScrollContent as ɵf, ItemProgress as ɵd, ProgressBar as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy9saWIvbG9hZGluZy5zZXJ2aWNlLnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy9saWIvZmFiL2ZhYi5jb21wb25lbnQudHMiLCJuZzovL2lvbmljLW1hdGVyaWFsLWxvYWRpbmcvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9pdGVtL2l0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9pbmZpbml0ZS1zY3JvbGwtY29udGVudC9pbmZpbml0ZS1zY3JvbGx0LWNvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9sb2FkaW5nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2VydmljZSB7XG5cbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGxvYWRDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odGhpcy5sb2FkaW5nKTtcbiAgcHVibGljIGNvbXBsZXRlQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRoaXMuaXNDb21wbGV0ZSk7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWRDaGFuZ2UubmV4dCh0aGlzLmxvYWRpbmcpO1xuICB9XG5cbiAgdW5sb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubG9hZENoYW5nZS5uZXh0KHRoaXMubG9hZGluZyk7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGVTcGlubmVyKCkge1xuICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gIH1cblxuICBjb21wbGV0ZSgpe1xuICAgIGNvbnNvbGUubG9nKCdzZXQgc2VydmljZSBjb21wbGV0ZScpO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgdGhpcy5jb21wbGV0ZUNoYW5nZS5uZXh0KHRoaXMuaXNDb21wbGV0ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gJy4uL2xvYWRpbmcuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZy1sb2FkaW5nLXByb2dyZXNzYmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBbQHByb2dyZXNzQW5pbV0gKm5nSWY9XCIoIWdsb2JhbCAmJiBsb2FkaW5nKSB8fCAoZ2xvYmFsICYmIGxvYWRpbmdTZXJ2aWNlLmxvYWRpbmcpXCIgY2xhc3M9XCJzbGlkZXJcIj5cbiAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIiFpc0NvbXBsZXRlXCIgY2xhc3M9XCJzdWJsaW5lIGluY1wiPjwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiaXNDb21wbGV0ZVwiIFtAZmlsbEFuaW1dIChAZmlsbEFuaW0uZG9uZSk9XCJmaWxsQW5pbWF0aW9uQ29tcGxldGUoaXNDb21wbGV0ZSlcIiBjbGFzcz1cInN1YmxpbmUgZmlsbFwiPjwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiIWlzQ29tcGxldGVcIiBjbGFzcz1cInN1YmxpbmUgZGVjXCI+PC9kaXY+XG48L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogW2Auc2xpZGVye3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjVweDtvdmVyZmxvdy14OmhpZGRlbjt6LWluZGV4OjUwMDB9LmxpbmV7cG9zaXRpb246YWJzb2x1dGU7b3BhY2l0eTouNDt3aWR0aDoyNDAlO2hlaWdodDo1cHg7LXdlYmtpdC1hbmltYXRpb246NS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnNwaW47YW5pbWF0aW9uOjUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzcGlufS5zdWJsaW5le3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDo1cHg7YmFja2dyb3VuZDppbmhlcml0fS5pbmN7LXdlYmtpdC1hbmltYXRpb246MS42cyBpbmZpbml0ZSBpbmNyZWFzZSw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc3BpbjthbmltYXRpb246MS42cyBpbmZpbml0ZSBpbmNyZWFzZSw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc3Bpbn0uZGVjey13ZWJraXQtYW5pbWF0aW9uOjEuNnMgLjRzIGluZmluaXRlIGRlY3JlYXNlLDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzcGluO2FuaW1hdGlvbjoxLjZzIC40cyBpbmZpbml0ZSBkZWNyZWFzZSw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc3Bpbn0uZmlsbHtsZWZ0OjA7d2lkdGg6MTAwJTstd2Via2l0LWFuaW1hdGlvbjo1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc3BpbjthbmltYXRpb246NS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnNwaW59QC13ZWJraXQta2V5ZnJhbWVzIGluY3JlYXNle2Zyb217bGVmdDotNSU7d2lkdGg6NSV9dG97bGVmdDoxMzAlO3dpZHRoOjEwMCV9fUBrZXlmcmFtZXMgaW5jcmVhc2V7ZnJvbXtsZWZ0Oi01JTt3aWR0aDo1JX10b3tsZWZ0OjEzMCU7d2lkdGg6MTAwJX19QC13ZWJraXQta2V5ZnJhbWVzIGRlY3JlYXNle2Zyb217bGVmdDotODAlO3dpZHRoOjgwJX10b3tsZWZ0OjExMCU7d2lkdGg6MTAlfX1Aa2V5ZnJhbWVzIGRlY3JlYXNle2Zyb217bGVmdDotODAlO3dpZHRoOjgwJX10b3tsZWZ0OjExMCU7d2lkdGg6MTAlfX1ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JzcGluezAlLDEwMCV7YmFja2dyb3VuZC1jb2xvcjojNDI4NWY0fTI1JXtiYWNrZ3JvdW5kLWNvbG9yOiNkZTNlMzV9NTAle2JhY2tncm91bmQtY29sb3I6I2Y3YzIyM303NSV7YmFja2dyb3VuZC1jb2xvcjojMWI5YTU5fX1Aa2V5ZnJhbWVzIGNvbG9yc3BpbnswJSwxMDAle2JhY2tncm91bmQtY29sb3I6IzQyODVmNH0yNSV7YmFja2dyb3VuZC1jb2xvcjojZGUzZTM1fTUwJXtiYWNrZ3JvdW5kLWNvbG9yOiNmN2MyMjN9NzUle2JhY2tncm91bmQtY29sb3I6IzFiOWE1OX19YF0sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdwcm9ncmVzc0FuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI5OW1zIGVhc2UtaW4nLCBzdHlsZSh7IGhlaWdodDogJzBweCcgfSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBsZWZ0OiAnLTUlJywgd2lkdGg6ICc1JScgfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnODUwbXMgZWFzZS1vdXQnLCBzdHlsZSh7IGxlZnQ6ICcwJScsIHdpZHRoOiAnMTAwJScgfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGdsb2JhbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGlzQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAT3V0cHV0KCkgb25Db21wbGV0ZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxQcm9ncmVzc0Jhcj4gPSBuZXcgRXZlbnRFbWl0dGVyPFByb2dyZXNzQmFyPigpO1xuXG4gICAgQFZpZXdDaGlsZCgnYmFyJykgYmFyOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGxvYWRpbmdTZXJ2aWNlOiBMb2FkaW5nU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5nbG9iYWwpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuY29tcGxldGVDaGFuZ2Uuc3Vic2NyaWJlKGlzQ29tcGxldGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5jb21wbGV0ZUNoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXQgY29tcGxldGUnKTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0NvbXBsZXRlKTtcbiAgICB9XG5cbiAgICBmaWxsQW5pbWF0aW9uQ29tcGxldGUoaXNDb21wbGV0ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbGwgYW5pbWF0aW9uIGNvbXBsZXRlJywgaXNDb21wbGV0ZSk7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUuZW1pdChpc0NvbXBsZXRlKTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS51bmxvYWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bmxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2ctbG9hZGluZy1mYWInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpb24tZmFiIFtAZmFiQW5pbV0gW3ZlcnRpY2FsXT1cInZlcnRpY2FsXCIgW2hvcml6b250YWxdPVwiaG9yaXpvbnRhbFwiIFtlZGdlXT1cImVkZ2VcIj5cbiAgICAgICAgPHN2ZyAqbmdJZj1cImxvYWRpbmdcIiAjc3Bpbm5lciBjbGFzcz1cInNwaW5uZXIgcm90YXRlXCIgdmlld0JveD1cIjAgMCA3MiA3MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8Y2lyY2xlIFtAZmlsbEFuaW1dPVwiaXNDb21wbGV0ZSA/ICdmaWxsJyA6ICdzcGlubmluZydcIiAoQGZpbGxBbmltLmRvbmUpPVwiZmlsbEFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cInsncGF0aCc6ICFpc0NvbXBsZXRlfVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBjeD1cIjM2XCIgY3k9XCIzNlwiIHI9XCIzMlwiPjwvY2lyY2xlPlxuIDwvc3ZnPlxuICAgICAgICAgICAgPGlvbi1mYWItYnV0dG9uIFtjb2xvcl09XCJmYWJDb2xvclwiPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBbQHJvdGF0ZUFuaW1dPVwiaWNvblN0YXRlXCIgKEByb3RhdGVBbmltLmRvbmUpPVwiY2hhbmdlSWNvbkFuZFJldmVhbCgkZXZlbnQsJ21kLWNoZWNrbWFyaycpXCIgW25hbWVdPVwiaWNvblwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8L2lvbi1mYWItYnV0dG9uPlxuXG4gICAgICAgIDwvaW9uLWZhYj5cbiAgICBgLFxuICAgIHN0eWxlczogW2Bpb24tc3Bpbm5lcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LThweDtsZWZ0Oi04cHg7d2lkdGg6NzJweDtoZWlnaHQ6NzJweH0uc3Bpbm5lcntwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo3MnB4O2hlaWdodDo3MnB4O2xlZnQ6LThweDt0b3A6LThweH0ucm90YXRley13ZWJraXQtYW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3I7YW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3J9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fUBrZXlmcmFtZXMgcm90YXRvcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX19LnBhdGh7c3Ryb2tlLWRhc2hhcnJheToxODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOy13ZWJraXQtYW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yczthbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBkYXNoLDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzfS5maWxse3N0cm9rZS1kYXNoYXJyYXk6MzYwO3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7YW5pbWF0aW9uOjEuNHMgZWFzZS1vdXQgZmlsbDtzdHJva2U6IzFiOWE1OX1ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUBrZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUAtd2Via2l0LWtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QGtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZmlsbHswJXtzdHJva2UtZGFzaG9mZnNldDozNjB9ODAle3N0cm9rZS1kYXNob2Zmc2V0OjE4MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19YF0sXG4gICAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2ZhYkFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLFxuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKVxuICAgICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3NwaW5uZXJBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSlcbiAgICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdyb3RhdGVBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCdub3JtYWwgPT4gcm90YXRlJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbigncm90YXRlID0+IG5vcm1hbCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2UtaW4nKVxuICAgICAgICBdKSxcbiAgICAgICAgc3RhdGUoJ3JvdGF0ZScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKScgfSkpLFxuICAgICAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3JvdGF0ZVooMGRlZyknIH0pKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IGZpbGwnLCBbXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5pbWF0ZSgnMTQwMG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHN0YXRlKCdmaWxsJywgc3R5bGUoe1xuICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAzMTUsXG4gICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgJ3N0cm9rZSc6ICcjMUI5QTU5JyxcbiAgICAgICAgICAgICdvcGFjaXR5JzogMFxuICAgICAgICB9KVxuICAgICAgICApXVxuICAgICldLFxuXG59KVxuZXhwb3J0IGNsYXNzIEZhYlNwaW5uZXIgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNwaW5Db2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZhYkNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdmVydGljYWw6IHN0cmluZyA9IFwiYm90dG9tXCI7XG4gICAgQElucHV0KCkgaG9yaXpvbnRhbDogc3RyaW5nID0gXCJlbmRcIjtcbiAgICBASW5wdXQoKSBlZGdlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgY2hlY2ttYXJrOiBib29sZWFuID0gZmFsc2U7XG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpY29uU3RhdGU6IHN0cmluZyA9ICdub3JtYWwnO1xuXG4gICAgQFZpZXdDaGlsZCgnc3Bpbm5lcicpIHNwaW5uZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBAT3V0cHV0KCkgb25Db21wbGV0ZTogRXZlbnRFbWl0dGVyPEZhYlNwaW5uZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxGYWJTcGlubmVyPigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxGYWJTcGlubmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmFiU3Bpbm5lcj4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIGlmKHRoaXMuaWNvbiAhPSAnbWQtY2hlY2ttYXJrJyl7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZih0aGlzLmxvYWRpbmcpe1xuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlsbEFuaW1hdGlvbkRvbmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PSAnc3Bpbm5pbmcnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja21hcmspIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsbCBhbmltYXRpb24gZG9uZScsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TdGF0ZSA9IFwicm90YXRlXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VJY29uQW5kUmV2ZWFsKGV2ZW50LCBpY29uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQsIGljb24pO1xuICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09ICdub3JtYWwnKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgICAgICAgdGhpcy5pY29uU3RhdGUgPSBcIm5vcm1hbFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gXCJyb3RhdGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy51bmxvYWQoKTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Db21wbGV0ZS5lbWl0KHRoaXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tICcuLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZy1sb2FkaW5nLWJ1dHRvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8Z2ctbG9hZGluZy1wcm9ncmVzc2JhciAob25Db21wbGV0ZSk9XCJvbkNvbXBsZXRlKCRldmVudClcIiAjcHJvZ3Jlc3MgW2dsb2JhbF09XCJmYWxzZVwiPjwvZ2ctbG9hZGluZy1wcm9ncmVzc2Jhcj5cbiAgICA8aW9uLWJ1dHRvbiBbZXhwYW5kXT1cImV4cGFuZFwiIFtjb2xvcl09XCJjb2xvclwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9pb24tYnV0dG9uPlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgMjBweDt3aWR0aDpjYWxjKDEwMCUgLSA0MHB4KX1gXSxcblxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25GdWxsIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoJ3Byb2dyZXNzJykgcHJvZ3Jlc3M6IFByb2dyZXNzQmFyO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnbGlnaHQnO1xuICAgIEBJbnB1dCgpIGV4cGFuZDogc3RyaW5nID0gJ2Jsb2NrJztcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8QnV0dG9uRnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaENvbXBsZXRlOiBFdmVudEVtaXR0ZXI8QnV0dG9uRnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MudG9nZ2xlU3Bpbm5lcigpO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MubG9hZCgpO1xuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MudW5sb2FkKCk7XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29tcGxldGUoaXNDb21wbGV0ZTogYm9vbGVhbikge1xuICAgICAgICBjb25zb2xlLmxvZygnb24gY29tcGxldGUnLCBpc0NvbXBsZXRlKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25SZWZyZXNoQ29tcGxldGUuZW1pdCh0aGlzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2ctbG9hZGluZy1pdGVtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxpb24taXRlbSBbbmdDbGFzc109XCJ7J2xvYWRpbmcnOiBsb2FkaW5nfVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9pb24taXRlbT5cbiAgPGdnLWxvYWRpbmctcHJvZ3Jlc3NiYXIgKG9uQ29tcGxldGUpPVwib25Db21wbGV0ZSgkZXZlbnQpXCIgI3Byb2dyZXNzIFtnbG9iYWxdPVwiZmFsc2VcIj48L2dnLWxvYWRpbmctcHJvZ3Jlc3NiYXI+XG5cbiAgICBgLFxuICAgIHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjowO3dpZHRoOmNhbGMoMTAwJSl9aW9uLWl0ZW17YmFja2dyb3VuZDojZmZmfS5sb2FkaW5ne21hcmdpbjo0cHg7d2lkdGg6Y2FsYygxMDAlIC0gOHB4KTt0cmFuc2l0aW9uOi4ycztib3JkZXItcmFkaXVzOjhweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2JveC1zaGFkb3c6MCA0cHggMTZweCByZ2JhKDAsMCwwLC4xMil9YF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgSXRlbVByb2dyZXNzIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoJ3Byb2dyZXNzJykgcHJvZ3Jlc3M6IFByb2dyZXNzQmFyO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2hDb21wbGV0ZTogRXZlbnRFbWl0dGVyPEl0ZW1Qcm9ncmVzcz4gPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1Qcm9ncmVzcz4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8SXRlbVByb2dyZXNzPiA9IG5ldyBFdmVudEVtaXR0ZXI8SXRlbVByb2dyZXNzPigpO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICB0b2dnbGVTcGlubmVyKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnRvZ2dsZVNwaW5uZXIoKTtcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2dyZXNzLmxvYWQoKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnVubG9hZCgpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlKGlzQ29tcGxldGU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uIGNvbXBsZXRlJywgaXNDb21wbGV0ZSk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaENvbXBsZXRlLmVtaXQodGhpcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgc3RhdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctY29udGVudCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZ2ctaGludC13cmFwcGVyXCI+XG4gICAgPGlvbi1jaGlwICpuZ0lmPVwiaGludFZpc2libGVcIiAoY2xpY2spPVwib25IaW50Q2xpY2tlZCgpXCIgW0BoaW50QW5pbV0gKEBoaW50QW5pbS5kb25lKT1cInBvc3RIaW50KCRldmVudClcIiAjaGludCBjbGFzcz1cImdnLWhpbnQtY29udGFpbmVyXCI+XG4gIDxpb24taWNvbiBjbGFzcz1cImljb25cIiBuYW1lPVwibWQtYXJyb3ctdXBcIj48L2lvbi1pY29uPlxuICA8aW9uLWxhYmVsIGNsYXNzPVwidGV4dFwiPnt7aGludFRleHR9fTwvaW9uLWxhYmVsPlxuPC9pb24tY2hpcD5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IFtAc3Bpbm5lckFuaW1dIChAc3Bpbm5lckFuaW0uZG9uZSk9XCJvblNwaW5uZXJIaWRkZW4oJGV2ZW50KVwiICpuZ0lmPVwic3Bpbm5lclZpc2libGVcIiAjc3Bpbm5lciBjbGFzcz1cImdnLXNwaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJzcGlubmVyIHJvdGF0ZVwiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICA8Y2lyY2xlIFtAZmlsbEFuaW1dPVwiaXNDb21wbGV0ZSA/ICdmaWxsJyA6ICdzcGlubmluZydcIiAoQGZpbGxBbmltLmRvbmUpPVwiZmlsbEFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cInsncGF0aCc6ICFpc0NvbXBsZXRlfVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBjeD1cIjM2XCIgY3k9XCIzNlwiIHI9XCIzMlwiPjwvY2lyY2xlPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgICAgICAgPGlvbi1yZWZyZXNoZXIgKGlvblN0YXJ0KT1cIm9uU3RhcnQoKVwiIFtzbmFwYmFja0R1cmF0aW9uXT1cIjI4MFwiIFtjbG9zZUR1cmF0aW9uXT1cIjI4MFwiIFtwdWxsTWF4XT1cIjE2OFwiIFtwdWxsTWluXT1cIjExMlwiIFtkaXNhYmxlZF09XCJmYWxzZVwiIHNsb3Q9XCJmaXhlZFwiIChpb25SZWZyZXNoKT1cImRvUmVmcmVzaCgkZXZlbnQpXCIgKGlvblB1bGwpPVwib25QdWxsKCRldmVudClcIj5cbiAgICAgICAgPC9pb24tcmVmcmVzaGVyPlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYC5zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bGVmdDo4cHg7dG9wOjhweH0ucm90YXRley13ZWJraXQtYW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3I7YW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3J9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fUBrZXlmcmFtZXMgcm90YXRvcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX19LnBhdGh7c3Ryb2tlLWRhc2hhcnJheToxODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOy13ZWJraXQtYW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yczthbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBkYXNoLDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzfS5maWxse3N0cm9rZS1kYXNoYXJyYXk6MzYwO3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7YW5pbWF0aW9uOjEuNHMgZWFzZS1vdXQgZmlsbDtzdHJva2U6IzFiOWE1OX1ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUBrZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUAtd2Via2l0LWtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QGtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZmlsbHswJXtzdHJva2UtZGFzaG9mZnNldDozNjB9ODAle3N0cm9rZS1kYXNob2Zmc2V0OjE4MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19LmdnLXNwaW5uZXItY29udGFpbmVye3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDpjYWxjKDUwJSAtIDIwcHgpO3RvcDotNTZweDt6LWluZGV4Ojk7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItbGlnaHQpO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCA0cHggNnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDVweCByZ2JhKDAsMCwwLC4xKX0uZ2ctaGludC1jb250YWluZXJ7aGVpZ2h0OjQwcHg7cGFkZGluZy1sZWZ0OjhweDtwYWRkaW5nLXJpZ2h0OjhweDtwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1saWdodCk7Ym9yZGVyLXJhZGl1czo0MHB4O2JveC1zaGFkb3c6MCA0cHggNnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDVweCByZ2JhKDAsMCwwLC4xKTttYXJnaW46MH0uaWNvbntoZWlnaHQ6MjBweDt3aWR0aDoyMHB4O2JhY2tncm91bmQ6MCAwO2NvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrKX0udGV4dHtmb250LXNpemU6MWVtO2NvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrKX0uZ2ctaGludC13cmFwcGVye3dpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjExMnB4O3otaW5kZXg6ODt0ZXh0LWFsaWduOmNlbnRlcn1gXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHN0YXRlKCdmaWxsJywgc3R5bGUoe1xuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMzE1LFxuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDAsXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdzdHJva2UnOiAnIzFCOUE1OScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgKV1cbiAgICAgICAgKSxcbiAgICAgICAgdHJpZ2dlcignc3Bpbm5lckFuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIHRyaWdnZXIoJ2hpbnRBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtODBweCknIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoeyB3aWR0aDogJzExMnB4JyB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcsIHN0eWxlKHsgd2lkdGg6ICc0MHB4JyB9KSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICAgICksXG4gICAgXSxcblxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50UmVmcmVzaCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAT3V0cHV0KCkgb25Qcm9ncmVzc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxDb250ZW50UmVmcmVzaD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQFZpZXdDaGlsZCgnc3Bpbm5lcicpIHNwaW5uZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gICAgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHB1bGxpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICByZWZyZXNoaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgc3Bpbm5lclZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHRyYW5zbGF0ZVk6IG51bWJlciA9IDA7XG4gICAgaGludFZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBoaW50VGV4dDogc3RyaW5nID0gJ25ldyBwb3N0cyc7XG5cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIGZyb21FdmVudChkb2N1bWVudCwgJ3RvdWNoZW5kJykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndG91Y2hlbmQnLCByZXMpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHVsbGluZyAmJiAhdGhpcy5yZWZyZXNoaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQcm9ncmVzcygwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBzcGluUmVmcmVzaGVyKCkge1xuICAgICAgICB0aGlzLnNwaW5uZXIubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoMTY4cHgpYCk7XG4gICAgICAgIHRoaXMucmVmcmVzaGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucHVsbGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRvUmVmcmVzaChldmVudCkge1xuICAgICAgICB0aGlzLnNwaW5SZWZyZXNoZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2ggaGVyZScpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jb21wbGV0ZSgpO1xuICAgICAgICB9LCAxNDApO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcGxldGVSZWZyZXNoKCkge1xuICAgICAgICB0aGlzLnJlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvblB1bGwoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wdWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGV2ZW50LnRhcmdldC5nZXRQcm9ncmVzcygpO1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPD0gMSkge1xuICAgICAgICAgICAgdGhpcy5vblByb2dyZXNzQ2hhbmdlZC5lbWl0KHByb2dyZXNzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0YXJ0KCkge1xuICAgICAgICAvLyB0aGlzLmNoYW5nZVByb2dyZXNzKDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlWSA9IDExMiAqIHByb2dyZXNzO1xuICAgICAgICBjb25zdCB0cmFuc2xhdGVZID0gdGhpcy50cmFuc2xhdGVZO1xuICAgICAgICBjb25zb2xlLmxvZyhgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCk7XG4gICAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9KWApXG4gICAgICAgIHRoaXMuc3Bpbm5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCk7XG4gICAgICAgIC8vIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBmaWxsQW5pbWF0aW9uRG9uZShldmVudCkge1xuXG4gICAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZmlsbCcgJiYgZXZlbnQuZnJvbVN0YXRlID09PSAnc3Bpbm5pbmcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsbEFuaW0gY29tcGxldGUnLCBldmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lclZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGlubmVySGlkZGVuKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2ggY29tcGxldGUnLCBldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNwaW5uZXJWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2hvd0hpbnQoKSB7XG4gICAgICAgIHRoaXMuaGludFZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uSGludENsaWNrZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbiBoaW50IGNsaWNrZWQnKTtcbiAgICAgICAgdGhpcy5oaW50VmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHBvc3RIaW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgaWYgKCFldmVudC5mcm9tU3RhdGUgJiYgZXZlbnQudG9TdGF0ZSA9PSAndm9pZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5zcGluUmVmcmVzaGVyKCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctaW5maW5pdGUtc2Nyb2xsJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJnZy1yZWZyZXNoZXJcIj5cblxuICAgIDxkaXYgI3NwaW5uZXIgY2xhc3M9XCJnZy1zcGlubmVyLWNvbnRhaW5lclwiPlxuICAgIDxzdmcgY2xhc3M9XCJzcGlubmVyIHJvdGF0ZVwiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPGNpcmNsZSBbQGZpbGxBbmltXT1cImlzQ29tcGxldGUgPyAnZmlsbCcgOiAnc3Bpbm5pbmcnXCIgKEBmaWxsQW5pbS5kb25lKT1cImZpbGxBbmltYXRpb25Eb25lKCRldmVudClcIiBbbmdDbGFzc109XCJ7J3BhdGgnOiAhaXNDb21wbGV0ZX1cIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgY3g9XCIzNlwiIGN5PVwiMzZcIiByPVwiMzJcIj48L2NpcmNsZT5cbiA8L3N2Zz5cbiAgICA8L2Rpdj5cblxuICAgIFxuICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYGlvbi1zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOHB4O2xlZnQ6LThweDt3aWR0aDo3MnB4O2hlaWdodDo3MnB4fS5zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bGVmdDo4cHg7dG9wOjhweH0ucm90YXRley13ZWJraXQtYW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3I7YW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3J9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fUBrZXlmcmFtZXMgcm90YXRvcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX19LnBhdGh7c3Ryb2tlLWRhc2hhcnJheToxODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOy13ZWJraXQtYW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yczthbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBkYXNoLDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzfS5maWxse3N0cm9rZS1kYXNoYXJyYXk6MzYwO3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7YW5pbWF0aW9uOjEuNHMgZWFzZS1vdXQgZmlsbDtzdHJva2U6IzFiOWE1OX1ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUBrZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUAtd2Via2l0LWtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QGtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZmlsbHswJXtzdHJva2UtZGFzaG9mZnNldDozNjB9ODAle3N0cm9rZS1kYXNob2Zmc2V0OjE4MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19LmdnLXJlZnJlc2hlcntkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjExMnB4O3Bvc2l0aW9uOnJlbGF0aXZlfS5nZy1zcGlubmVyLWNvbnRhaW5lcnt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6Y2FsYyg1MCUgLSAyMHB4KTt0b3A6MTZweDtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1saWdodCk7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNoYWRvdzowIDRweCA2cHggMCByZ2JhKDAsMCwwLC4xNCksMCA0cHggNXB4IHJnYmEoMCwwLDAsLjEpfWBdLFxuICAgIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdmYWJBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSlcbiAgICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdzcGlubmVyQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSkpXG4gICAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbignbm9ybWFsID0+IHJvdGF0ZScsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJ3JvdGF0ZSA9PiBub3JtYWwnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLWluJylcbiAgICAgICAgXSksXG4gICAgICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZyknIH0pKSxcbiAgICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDBkZWcpJyB9KSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMTgwLFxuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyNERTNFMzUnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzgwMG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHN0YXRlKCdmaWxsJywgc3R5bGUoe1xuICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAzMTUsXG4gICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgJ3N0cm9rZSc6ICcjMUI5QTU5JyxcbiAgICAgICAgICAgICdvcGFjaXR5JzogMFxuICAgICAgICB9KVxuICAgICAgICApXVxuICAgICldLFxuXG59KVxuZXhwb3J0IGNsYXNzIEluZmluaXRlU2Nyb2xsQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc3BpbkNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZmFiQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSB2ZXJ0aWNhbDogc3RyaW5nID0gXCJib3R0b21cIjtcbiAgICBASW5wdXQoKSBob3Jpem9udGFsOiBzdHJpbmcgPSBcImVuZFwiO1xuICAgIEBJbnB1dCgpIGVkZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjaGVja21hcms6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBkcmFnUHJvZ3Jlc3M6IG51bWJlciA9IDA7XG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpY29uU3RhdGU6IHN0cmluZyA9ICdub3JtYWwnO1xuXG4gICAgQFZpZXdDaGlsZCgnc3Bpbm5lcicpIHNwaW5uZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBAT3V0cHV0KCkgb25Db21wbGV0ZTogRXZlbnRFbWl0dGVyPEluZmluaXRlU2Nyb2xsQ29udGVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEluZmluaXRlU2Nyb2xsQ29udGVudD4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8SW5maW5pdGVTY3JvbGxDb250ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SW5maW5pdGVTY3JvbGxDb250ZW50PigpO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBjaGFuZ2U6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaWNvbiAhPSAnbWQtY2hlY2ttYXJrJykge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQoKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaWxsQW5pbWF0aW9uRG9uZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09ICdzcGlubmluZycpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrbWFyaykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxsIGFuaW1hdGlvbiBkb25lJywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvblN0YXRlID0gXCJyb3RhdGVcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0Q29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUljb25BbmRSZXZlYWwoZXZlbnQsIGljb246IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCwgaWNvbik7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT0gJ25vcm1hbCcpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgICAgICAgICB0aGlzLmljb25TdGF0ZSA9IFwibm9ybWFsXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSBcInJvdGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0Q29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9zdENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLnVubG9hZCgpO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kcmFnUHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlWSA9IE1hdGguZmxvb3IoLTgwICsgODAgKiBwcm9ncmVzcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX1weClgKTtcbiAgICAgICAgLy8gdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwaW5uZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX0pYClcbiAgICAgICAgdGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX1weClgKVxuICAgICAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJTcGlubmVyIH0gZnJvbSAnLi9mYWIvZmFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25GdWxsIH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtUHJvZ3Jlc3MgfSBmcm9tICcuL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudFJlZnJlc2ggfSBmcm9tICcuL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGxDb250ZW50IH0gZnJvbSAnLi9pbmZpbml0ZS1zY3JvbGwtY29udGVudC9pbmZpbml0ZS1zY3JvbGx0LWNvbnRlbnQuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ZhYlNwaW5uZXIsIFByb2dyZXNzQmFyLCBCdXR0b25GdWxsLEl0ZW1Qcm9ncmVzcyxDb250ZW50UmVmcmVzaCxJbmZpbml0ZVNjcm9sbENvbnRlbnRdLFxuICBleHBvcnRzOiBbRmFiU3Bpbm5lciwgUHJvZ3Jlc3NCYXIsIEJ1dHRvbkZ1bGwsIEl0ZW1Qcm9ncmVzcyxDb250ZW50UmVmcmVzaCxJbmZpbml0ZVNjcm9sbENvbnRlbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQWVFO3VCQU4wQixLQUFLOzBCQUNGLEtBQUs7MEJBQ1ksSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQzs4QkFDdEMsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUc5RTs7OztJQUVqQiw2QkFBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDcEM7Ozs7SUFFRCwrQkFBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7S0FDekI7Ozs7SUFFRCxzQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUM5Qjs7OztJQUVELGlDQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMs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