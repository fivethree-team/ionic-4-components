(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/animations'), require('@ionic/angular'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ionic-material-loading', ['exports', '@angular/core', 'rxjs', '@angular/animations', '@ionic/angular', '@angular/common'], factory) :
    (factory((global['ionic-material-loading'] = {}),global.ng.core,global.rxjs,global.ng.animations,null,global.ng.common));
}(this, (function (exports,i0,rxjs,animations,angular,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LoadingService = (function () {
        function LoadingService() {
            this.loading = false;
            this.isComplete = false;
            this.loadChange = new rxjs.BehaviorSubject(this.loading);
            this.completeChange = new rxjs.BehaviorSubject(this.isComplete);
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LoadingService.ctorParameters = function () { return []; };
        /** @nocollapse */ LoadingService.ngInjectableDef = i0.defineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(); }, token: LoadingService, providedIn: "root" });
        return LoadingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ProgressBar = (function () {
        function ProgressBar(loadingService) {
            this.loadingService = loadingService;
            this.loading = false;
            this.global = false;
            this.isComplete = false;
            this.onComplete = new i0.EventEmitter();
            this.onRefresh = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'gg-loading-progressbar',
                        template: "\n<div [@progressAnim] *ngIf=\"(!global && loading) || (global && loadingService.loading)\" class=\"slider\">\n  <div *ngIf=\"!isComplete\" class=\"line\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline inc\"></div>\n  <div [@fillAnim] (@fillAnim.done)=\"fillAnimationComplete(isComplete)\" *ngIf=\"isComplete\" class=\"subline fill\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline dec\"></div>\n</div>\n    ",
                        animations: [
                            animations.trigger('progressAnim', [
                                animations.transition('void => *', [
                                    animations.style({ height: '0px' }),
                                    animations.animate('250ms ease-out')
                                ]),
                                animations.transition('* => void', [
                                    animations.animate('299ms ease-in', animations.style({ height: '0px' }))
                                ])
                            ]),
                            animations.trigger('fillAnim', [
                                animations.transition('void => *', [
                                    animations.style({ left: '-5%', width: '5%' }),
                                    animations.animate('850ms ease-out', animations.style({ left: '0%', width: '100%' }))
                                ]),
                            ])
                        ],
                        styles: [".slider{position:absolute;width:100%;height:5px;overflow-x:hidden;z-index:5000}.line{position:absolute;opacity:.4;background:var(--ion-color-primary);width:150%;height:5px}.subline{position:absolute;background:var(--ion-color-primary);height:5px}.inc{-webkit-animation:1.6s infinite increase;animation:1.6s infinite increase}.dec{-webkit-animation:1.6s .4s infinite decrease;animation:1.6s .4s infinite decrease}.fill{left:0;width:100%}@-webkit-keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@-webkit-keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}"]
                    }] }
        ];
        /** @nocollapse */
        ProgressBar.ctorParameters = function () {
            return [
                { type: LoadingService }
            ];
        };
        ProgressBar.propDecorators = {
            global: [{ type: i0.Input }],
            isComplete: [{ type: i0.Input }],
            onComplete: [{ type: i0.Output }],
            onRefresh: [{ type: i0.Output }],
            bar: [{ type: i0.ViewChild, args: ['bar',] }]
        };
        return ProgressBar;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FabSpinner = (function () {
        function FabSpinner() {
            this.vertical = "bottom";
            this.horizontal = "end";
            this.edge = false;
            this.checkmark = false;
            this.loading = false;
            this.isComplete = false;
            this.iconState = 'normal';
            this.onComplete = new i0.EventEmitter();
            this.onRefresh = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'gg-loading-fab',
                        template: "\n        <ion-fab [@fabAnim] [vertical]=\"vertical\" [horizontal]=\"horizontal\" [edge]=\"edge\">\n        <svg *ngIf=\"loading\" #spinner class=\"spinner rotate\" viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle [@fillAnim]=\"isComplete ? 'fill' : 'spinning'\" (@fillAnim.done)=\"fillAnimationDone($event)\" [ngClass]=\"{'path': !isComplete}\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\" cx=\"36\" cy=\"36\" r=\"32\"></circle>\n </svg>\n            <ion-fab-button [color]=\"fabColor\">\n                <ion-icon [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\" [name]=\"icon\"></ion-icon>\n            </ion-fab-button>\n\n        </ion-fab>\n    ",
                        animations: [animations.trigger('fabAnim', [
                                animations.transition('void => *', [
                                    animations.style({ transform: 'scale(0)' }),
                                    animations.animate('250ms ease-out')
                                ]),
                                animations.transition('* => void', [
                                    animations.animate('250ms ease-in', animations.style({ transform: 'scale(0)' }))
                                ])
                            ]),
                            animations.trigger('spinnerAnim', [
                                animations.transition('void => *', [
                                    animations.style({ opacity: '0' }),
                                    animations.animate('250ms ease-out')
                                ]),
                                animations.transition('* => void', [
                                    animations.animate('250ms ease-in', animations.style({ opacity: '0' }))
                                ])
                            ]),
                            animations.trigger('rotateAnim', [
                                animations.transition('normal => rotate', [
                                    animations.animate('125ms ease-out')
                                ]),
                                animations.transition('rotate => normal', [
                                    animations.animate('125ms ease-in')
                                ]),
                                animations.state('rotate', animations.style({ opacity: '0', transform: 'rotateZ(45deg)' })),
                                animations.state('normal', animations.style({ opacity: '1', transform: 'rotateZ(0deg)' }))
                            ]),
                            animations.trigger('fillAnim', [
                                animations.transition('* => fill', [
                                    animations.style({
                                        'stroke-dasharray': 180,
                                        'stroke-dashoffset': 90,
                                        'transformOrigin': 'center',
                                        'stroke': '#DE3E35'
                                    }),
                                    animations.animate('1400ms ease-out')
                                ]),
                                animations.state('fill', animations.style({
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
            icon: [{ type: i0.Input }],
            spinColor: [{ type: i0.Input }],
            fabColor: [{ type: i0.Input }],
            vertical: [{ type: i0.Input }],
            horizontal: [{ type: i0.Input }],
            edge: [{ type: i0.Input }],
            checkmark: [{ type: i0.Input }],
            spinner: [{ type: i0.ViewChild, args: ['spinner',] }],
            onComplete: [{ type: i0.Output }],
            onRefresh: [{ type: i0.Output }]
        };
        return FabSpinner;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ButtonFull = (function () {
        function ButtonFull() {
            this.loading = false;
            this.color = 'light';
            this.expand = 'block';
            this.onRefresh = new i0.EventEmitter();
            this.onRefreshComplete = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'gg-loading-button',
                        template: "\n    <gg-loading-progressbar (onComplete)=\"onComplete($event)\" #progress [global]=\"false\"></gg-loading-progressbar>\n    <ion-button [expand]=\"expand\" [color]=\"color\">\n    <ng-content></ng-content>\n  </ion-button>\n    ",
                        styles: [":host{position:relative;display:block;margin:0 20px;width:calc(100% - 40px)}"]
                    }] }
        ];
        /** @nocollapse */
        ButtonFull.ctorParameters = function () { return []; };
        ButtonFull.propDecorators = {
            progress: [{ type: i0.ViewChild, args: ['progress',] }],
            color: [{ type: i0.Input }],
            expand: [{ type: i0.Input }],
            onRefresh: [{ type: i0.Output }],
            onRefreshComplete: [{ type: i0.Output }]
        };
        return ButtonFull;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ItemProgress = (function () {
        function ItemProgress() {
            this.loading = false;
            this.onRefreshComplete = new i0.EventEmitter();
            this.onRefresh = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'gg-loading-item',
                        template: "\n    <ion-item [ngClass]=\"{'loading': loading}\">\n    <ng-content></ng-content>\n  </ion-item>\n  <gg-loading-progressbar (onComplete)=\"onComplete($event)\" #progress [global]=\"false\"></gg-loading-progressbar>\n\n    ",
                        styles: [":host{position:relative;display:block;margin:0;width:calc(100%)}ion-item{background:#fff}.loading{margin:4px;width:calc(100% - 8px);transition:.2s;border-radius:8px;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 4px 16px rgba(0,0,0,.12)}"]
                    }] }
        ];
        /** @nocollapse */
        ItemProgress.ctorParameters = function () { return []; };
        ItemProgress.propDecorators = {
            progress: [{ type: i0.ViewChild, args: ['progress',] }],
            onRefreshComplete: [{ type: i0.Output }],
            onRefresh: [{ type: i0.Output }]
        };
        return ItemProgress;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ContentRefresh = (function () {
        function ContentRefresh() {
            this.onProgressChanged = new i0.EventEmitter();
            this.onRefresh = new i0.EventEmitter();
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
                rxjs.fromEvent(document, 'touchend').subscribe(function (res) {
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
                this.spinner.nativeElement.style.setProperty('transform', "translateY(112px)");
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
            { type: i0.Component, args: [{
                        selector: 'gg-loading-content',
                        template: "\n    <div class=\"gg-hint-wrapper\">\n    <ion-chip *ngIf=\"hintVisible\" (click)=\"onHintClicked()\" [@hintAnim] (@hintAnim.done)=\"postHint($event)\" #hint class=\"gg-hint-container\">\n  <ion-icon class=\"icon\" name=\"md-arrow-up\"></ion-icon>\n  <ion-label class=\"text\">{{hintText}}</ion-label>\n</ion-chip>\n    </div>\n    \n    <div [@spinnerAnim] (@spinnerAnim.done)=\"onSpinnerHidden($event)\" *ngIf=\"spinnerVisible\" #spinner class=\"gg-spinner-container\">\n        <svg class=\"spinner rotate\" viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle [@fillAnim]=\"isComplete ? 'fill' : 'spinning'\" (@fillAnim.done)=\"fillAnimationDone($event)\" [ngClass]=\"{'path': !isComplete}\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\" cx=\"36\" cy=\"36\" r=\"32\"></circle>\n        </svg>\n    </div>\n    <ion-content #content fullscreen>\n        <ion-refresher (ionStart)=\"onStart()\" [snapbackDuration]=\"280\" [closeDuration]=\"280\" [pullMax]=\"168\" [pullMin]=\"112\" [disabled]=\"false\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" (ionPull)=\"onPull($event)\">\n        </ion-refresher>\n\n        <ng-content></ng-content>\n    </ion-content>\n    ",
                        animations: [
                            animations.trigger('fillAnim', [
                                animations.transition('* => fill', [
                                    animations.style({
                                        'stroke-dasharray': 180,
                                        'stroke-dashoffset': 90,
                                        'transformOrigin': 'center',
                                        'stroke': '#DE3E35'
                                    }),
                                    animations.animate('360ms ease-out')
                                ]),
                                animations.state('fill', animations.style({
                                    'stroke-dasharray': 315,
                                    'stroke-dashoffset': 0,
                                    'transformOrigin': 'center',
                                    'stroke': '#1B9A59',
                                }))
                            ]),
                            animations.trigger('spinnerAnim', [
                                animations.transition('* => void', [
                                    animations.animate('250ms ease-out', animations.style({ opacity: 0 }))
                                ]),
                            ]),
                            animations.trigger('hintAnim', [
                                animations.transition('void => *', [
                                    animations.style({ opacity: 0, transform: 'translateY(-80px)' }),
                                    animations.animate('150ms ease-in', animations.style({ opacity: 1, transform: 'translateY(0)' }))
                                ]),
                                animations.transition('* => void', [
                                    animations.style({ width: '112px' }),
                                    animations.animate('125ms ease-out', animations.style({ width: '40px' }))
                                ]),
                            ]),
                        ],
                        styles: [".spinner{position:absolute;width:24px;height:24px;left:8px;top:8px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}.gg-spinner-container{width:40px;height:40px;position:absolute;left:calc(50% - 20px);top:0;z-index:9;background:var(--ion-color-light);border-radius:50%;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1)}.gg-hint-container{height:40px;padding-left:8px;padding-right:8px;position:relative;background:var(--ion-color-light);border-radius:40px;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1);margin:0}.icon{height:20px;width:20px;background:0 0;color:var(--ion-color-dark)}.text{font-size:1em;color:var(--ion-color-dark)}.gg-hint-wrapper{width:100%;position:absolute;top:112px;z-index:8;text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        ContentRefresh.ctorParameters = function () { return []; };
        ContentRefresh.propDecorators = {
            onProgressChanged: [{ type: i0.Output }],
            onRefresh: [{ type: i0.Output }],
            spinner: [{ type: i0.ViewChild, args: ['spinner',] }],
            content: [{ type: i0.ViewChild, args: ['content',] }],
            hintText: [{ type: i0.Input }]
        };
        return ContentRefresh;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var InfiniteScrollContent = (function () {
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
            this.onComplete = new i0.EventEmitter();
            this.onRefresh = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'gg-loading-infinite-scroll',
                        template: "\n    <div class=\"gg-refresher\">\n\n    <div #spinner class=\"gg-spinner-container\">\n    <svg class=\"spinner rotate\" viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle [@fillAnim]=\"isComplete ? 'fill' : 'spinning'\" (@fillAnim.done)=\"fillAnimationDone($event)\" [ngClass]=\"{'path': !isComplete}\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\" cx=\"36\" cy=\"36\" r=\"32\"></circle>\n </svg>\n    </div>\n\n    \n    </div>\n    ",
                        animations: [animations.trigger('fabAnim', [
                                animations.transition('void => *', [
                                    animations.style({ transform: 'scale(0)' }),
                                    animations.animate('250ms ease-out')
                                ]),
                                animations.transition('* => void', [
                                    animations.animate('250ms ease-in', animations.style({ transform: 'scale(0)' }))
                                ])
                            ]),
                            animations.trigger('spinnerAnim', [
                                animations.transition('void => *', [
                                    animations.style({ opacity: '0' }),
                                    animations.animate('250ms ease-out')
                                ]),
                                animations.transition('* => void', [
                                    animations.animate('250ms ease-in', animations.style({ opacity: '0' }))
                                ])
                            ]),
                            animations.trigger('rotateAnim', [
                                animations.transition('normal => rotate', [
                                    animations.animate('125ms ease-out')
                                ]),
                                animations.transition('rotate => normal', [
                                    animations.animate('125ms ease-in')
                                ]),
                                animations.state('rotate', animations.style({ opacity: '0', transform: 'rotateZ(45deg)' })),
                                animations.state('normal', animations.style({ opacity: '1', transform: 'rotateZ(0deg)' }))
                            ]),
                            animations.trigger('fillAnim', [
                                animations.transition('* => fill', [
                                    animations.style({
                                        'stroke-dasharray': 180,
                                        'stroke-dashoffset': 90,
                                        'transformOrigin': 'center',
                                        'stroke': '#DE3E35'
                                    }),
                                    animations.animate('800ms ease-out')
                                ]),
                                animations.state('fill', animations.style({
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
        InfiniteScrollContent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ChangeDetectorRef }
            ];
        };
        InfiniteScrollContent.propDecorators = {
            icon: [{ type: i0.Input }],
            spinColor: [{ type: i0.Input }],
            fabColor: [{ type: i0.Input }],
            vertical: [{ type: i0.Input }],
            horizontal: [{ type: i0.Input }],
            edge: [{ type: i0.Input }],
            checkmark: [{ type: i0.Input }],
            spinner: [{ type: i0.ViewChild, args: ['spinner',] }],
            onComplete: [{ type: i0.Output }],
            onRefresh: [{ type: i0.Output }]
        };
        return InfiniteScrollContent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LoadingModule = (function () {
        function LoadingModule() {
        }
        LoadingModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            angular.IonicModule,
                            common.CommonModule
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

    exports.LoadingService = LoadingService;
    exports.LoadingModule = LoadingModule;
    exports.ɵc = ButtonFull;
    exports.ɵe = ContentRefresh;
    exports.ɵa = FabSpinner;
    exports.ɵf = InfiniteScrollContent;
    exports.ɵd = ItemProgress;
    exports.ɵb = ProgressBar;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2lvbmljLW1hdGVyaWFsLWxvYWRpbmcvbGliL2xvYWRpbmcuc2VydmljZS50cyIsIm5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy9saWIvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQudHMiLCJuZzovL2lvbmljLW1hdGVyaWFsLWxvYWRpbmcvbGliL2ZhYi9mYWIuY29tcG9uZW50LnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy9saWIvaXRlbS9pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy9saWIvY29udGVudC9jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy9saWIvaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQvaW5maW5pdGUtc2Nyb2xsdC1jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy9saWIvbG9hZGluZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1NlcnZpY2Uge1xuXG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBsb2FkQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRoaXMubG9hZGluZyk7XG4gIHB1YmxpYyBjb21wbGV0ZUNoYW5nZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0aGlzLmlzQ29tcGxldGUpO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBsb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5sb2FkQ2hhbmdlLm5leHQodGhpcy5sb2FkaW5nKTtcbiAgfVxuXG4gIHVubG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxvYWRDaGFuZ2UubmV4dCh0aGlzLmxvYWRpbmcpO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICB9XG5cbiAgY29tcGxldGUoKXtcbiAgICBjb25zb2xlLmxvZygnc2V0IHNlcnZpY2UgY29tcGxldGUnKTtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgIHRoaXMuY29tcGxldGVDaGFuZ2UubmV4dCh0aGlzLmlzQ29tcGxldGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgTG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9sb2FkaW5nLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2ctbG9hZGluZy1wcm9ncmVzc2JhcicsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgW0Bwcm9ncmVzc0FuaW1dICpuZ0lmPVwiKCFnbG9iYWwgJiYgbG9hZGluZykgfHwgKGdsb2JhbCAmJiBsb2FkaW5nU2VydmljZS5sb2FkaW5nKVwiIGNsYXNzPVwic2xpZGVyXCI+XG4gIDxkaXYgKm5nSWY9XCIhaXNDb21wbGV0ZVwiIGNsYXNzPVwibGluZVwiPjwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiIWlzQ29tcGxldGVcIiBjbGFzcz1cInN1YmxpbmUgaW5jXCI+PC9kaXY+XG4gIDxkaXYgW0BmaWxsQW5pbV0gKEBmaWxsQW5pbS5kb25lKT1cImZpbGxBbmltYXRpb25Db21wbGV0ZShpc0NvbXBsZXRlKVwiICpuZ0lmPVwiaXNDb21wbGV0ZVwiIGNsYXNzPVwic3VibGluZSBmaWxsXCI+PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCIhaXNDb21wbGV0ZVwiIGNsYXNzPVwic3VibGluZSBkZWNcIj48L2Rpdj5cbjwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYC5zbGlkZXJ7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6NXB4O292ZXJmbG93LXg6aGlkZGVuO3otaW5kZXg6NTAwMH0ubGluZXtwb3NpdGlvbjphYnNvbHV0ZTtvcGFjaXR5Oi40O2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO3dpZHRoOjE1MCU7aGVpZ2h0OjVweH0uc3VibGluZXtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtoZWlnaHQ6NXB4fS5pbmN7LXdlYmtpdC1hbmltYXRpb246MS42cyBpbmZpbml0ZSBpbmNyZWFzZTthbmltYXRpb246MS42cyBpbmZpbml0ZSBpbmNyZWFzZX0uZGVjey13ZWJraXQtYW5pbWF0aW9uOjEuNnMgLjRzIGluZmluaXRlIGRlY3JlYXNlO2FuaW1hdGlvbjoxLjZzIC40cyBpbmZpbml0ZSBkZWNyZWFzZX0uZmlsbHtsZWZ0OjA7d2lkdGg6MTAwJX1ALXdlYmtpdC1rZXlmcmFtZXMgaW5jcmVhc2V7ZnJvbXtsZWZ0Oi01JTt3aWR0aDo1JX10b3tsZWZ0OjEzMCU7d2lkdGg6MTAwJX19QGtleWZyYW1lcyBpbmNyZWFzZXtmcm9te2xlZnQ6LTUlO3dpZHRoOjUlfXRve2xlZnQ6MTMwJTt3aWR0aDoxMDAlfX1ALXdlYmtpdC1rZXlmcmFtZXMgZGVjcmVhc2V7ZnJvbXtsZWZ0Oi04MCU7d2lkdGg6ODAlfXRve2xlZnQ6MTEwJTt3aWR0aDoxMCV9fUBrZXlmcmFtZXMgZGVjcmVhc2V7ZnJvbXtsZWZ0Oi04MCU7d2lkdGg6ODAlfXRve2xlZnQ6MTEwJTt3aWR0aDoxMCV9fWBdLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcigncHJvZ3Jlc3NBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyOTltcyBlYXNlLWluJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgbGVmdDogJy01JScsIHdpZHRoOiAnNSUnIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzg1MG1zIGVhc2Utb3V0Jywgc3R5bGUoeyBsZWZ0OiAnMCUnLCB3aWR0aDogJzEwMCUnIH0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBnbG9iYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBpc0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQE91dHB1dCgpIG9uQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8UHJvZ3Jlc3NCYXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxQcm9ncmVzc0Jhcj4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2JhcicpIGJhcjogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2FkaW5nU2VydmljZTogTG9hZGluZ1NlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2xvYmFsKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmNvbXBsZXRlQ2hhbmdlLnN1YnNjcmliZShpc0NvbXBsZXRlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5nbG9iYWwpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuY29tcGxldGVDaGFuZ2UudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5pc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0IGNvbXBsZXRlJyk7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNDb21wbGV0ZSk7XG4gICAgfVxuXG4gICAgZmlsbEFuaW1hdGlvbkNvbXBsZXRlKGlzQ29tcGxldGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxsIGFuaW1hdGlvbiBjb21wbGV0ZScsIGlzQ29tcGxldGUpO1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmVtaXQoaXNDb21wbGV0ZSk7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UudW5sb2FkKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudW5sb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctZmFiJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aW9uLWZhYiBbQGZhYkFuaW1dIFt2ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiIFtob3Jpem9udGFsXT1cImhvcml6b250YWxcIiBbZWRnZV09XCJlZGdlXCI+XG4gICAgICAgIDxzdmcgKm5nSWY9XCJsb2FkaW5nXCIgI3NwaW5uZXIgY2xhc3M9XCJzcGlubmVyIHJvdGF0ZVwiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPGNpcmNsZSBbQGZpbGxBbmltXT1cImlzQ29tcGxldGUgPyAnZmlsbCcgOiAnc3Bpbm5pbmcnXCIgKEBmaWxsQW5pbS5kb25lKT1cImZpbGxBbmltYXRpb25Eb25lKCRldmVudClcIiBbbmdDbGFzc109XCJ7J3BhdGgnOiAhaXNDb21wbGV0ZX1cIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgY3g9XCIzNlwiIGN5PVwiMzZcIiByPVwiMzJcIj48L2NpcmNsZT5cbiA8L3N2Zz5cbiAgICAgICAgICAgIDxpb24tZmFiLWJ1dHRvbiBbY29sb3JdPVwiZmFiQ29sb3JcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gW0Byb3RhdGVBbmltXT1cImljb25TdGF0ZVwiIChAcm90YXRlQW5pbS5kb25lKT1cImNoYW5nZUljb25BbmRSZXZlYWwoJGV2ZW50LCdtZC1jaGVja21hcmsnKVwiIFtuYW1lXT1cImljb25cIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24tZmFiLWJ1dHRvbj5cblxuICAgICAgICA8L2lvbi1mYWI+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgaW9uLXNwaW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOi04cHg7bGVmdDotOHB4O3dpZHRoOjcycHg7aGVpZ2h0OjcycHh9LnNwaW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NzJweDtoZWlnaHQ6NzJweDtsZWZ0Oi04cHg7dG9wOi04cHh9LnJvdGF0ZXstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGxpbmVhciBpbmZpbml0ZSByb3RhdG9yO2FuaW1hdGlvbjoxLjRzIGxpbmVhciBpbmZpbml0ZSByb3RhdG9yfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdG9yezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfX1Aa2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fS5wYXRoe3N0cm9rZS1kYXNoYXJyYXk6MTg3O3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGRhc2gsNS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnM7YW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc30uZmlsbHtzdHJva2UtZGFzaGFycmF5OjM2MDtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7LXdlYmtpdC1hbmltYXRpb246MS40cyBlYXNlLW91dCBmaWxsO2FuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7c3Ryb2tlOiMxYjlhNTl9QC13ZWJraXQta2V5ZnJhbWVzIGNvbG9yc3swJSwxMDAle3N0cm9rZTojNDI4NWY0fTI1JXtzdHJva2U6I2RlM2UzNX01MCV7c3Ryb2tlOiNmN2MyMjN9NzUle3N0cm9rZTojMWI5YTU5fX1Aa2V5ZnJhbWVzIGNvbG9yc3swJSwxMDAle3N0cm9rZTojNDI4NWY0fTI1JXtzdHJva2U6I2RlM2UzNX01MCV7c3Ryb2tlOiNmN2MyMjN9NzUle3N0cm9rZTojMWI5YTU5fX1ALXdlYmtpdC1rZXlmcmFtZXMgZGFzaHswJXtzdHJva2UtZGFzaG9mZnNldDoxODd9NTAle3N0cm9rZS1kYXNob2Zmc2V0OjQ2Ljc1Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjE4Nzstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZGFzaHswJXtzdHJva2UtZGFzaG9mZnNldDoxODd9NTAle3N0cm9rZS1kYXNob2Zmc2V0OjQ2Ljc1Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjE4Nzstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBmaWxsezAle3N0cm9rZS1kYXNob2Zmc2V0OjM2MH04MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTgwOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpfX1Aa2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fWBdLFxuICAgIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdmYWJBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSlcbiAgICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdzcGlubmVyQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSkpXG4gICAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbignbm9ybWFsID0+IHJvdGF0ZScsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJ3JvdGF0ZSA9PiBub3JtYWwnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLWluJylcbiAgICAgICAgXSksXG4gICAgICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZyknIH0pKSxcbiAgICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDBkZWcpJyB9KSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMTgwLFxuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyNERTNFMzUnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzE0MDBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICBzdGF0ZSgnZmlsbCcsIHN0eWxlKHtcbiAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMzE1LFxuICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogMCxcbiAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICdzdHJva2UnOiAnIzFCOUE1OScsXG4gICAgICAgICAgICAnb3BhY2l0eSc6IDBcbiAgICAgICAgfSlcbiAgICAgICAgKV1cbiAgICApXSxcblxufSlcbmV4cG9ydCBjbGFzcyBGYWJTcGlubmVyIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBzcGluQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBmYWJDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZlcnRpY2FsOiBzdHJpbmcgPSBcImJvdHRvbVwiO1xuICAgIEBJbnB1dCgpIGhvcml6b250YWw6IHN0cmluZyA9IFwiZW5kXCI7XG4gICAgQElucHV0KCkgZWRnZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNoZWNrbWFyazogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgaWNvblN0YXRlOiBzdHJpbmcgPSAnbm9ybWFsJztcblxuICAgIEBWaWV3Q2hpbGQoJ3NwaW5uZXInKSBzcGlubmVyOiBFbGVtZW50UmVmO1xuXG4gICAgQE91dHB1dCgpIG9uQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxGYWJTcGlubmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmFiU3Bpbm5lcj4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8RmFiU3Bpbm5lcj4gPSBuZXcgRXZlbnRFbWl0dGVyPEZhYlNwaW5uZXI+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICB0b2dnbGVTcGlubmVyKCkge1xuICAgICAgICBpZih0aGlzLmljb24gIT0gJ21kLWNoZWNrbWFyaycpe1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgdW5sb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYodGhpcy5sb2FkaW5nKXtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbGxBbmltYXRpb25Eb25lKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT0gJ3NwaW5uaW5nJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2ttYXJrKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbGwgYW5pbWF0aW9uIGRvbmUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3RhdGUgPSBcInJvdGF0ZVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LCBpY29uKTtcbiAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PSAnbm9ybWFsJykge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICAgICAgICAgIHRoaXMuaWNvblN0YXRlID0gXCJub3JtYWxcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09IFwicm90YXRlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3N0Q29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMudW5sb2FkKCk7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUuZW1pdCh0aGlzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2ctbG9hZGluZy1idXR0b24nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGdnLWxvYWRpbmctcHJvZ3Jlc3NiYXIgKG9uQ29tcGxldGUpPVwib25Db21wbGV0ZSgkZXZlbnQpXCIgI3Byb2dyZXNzIFtnbG9iYWxdPVwiZmFsc2VcIj48L2dnLWxvYWRpbmctcHJvZ3Jlc3NiYXI+XG4gICAgPGlvbi1idXR0b24gW2V4cGFuZF09XCJleHBhbmRcIiBbY29sb3JdPVwiY29sb3JcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvaW9uLWJ1dHRvbj5cbiAgICBgLFxuICAgIHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjowIDIwcHg7d2lkdGg6Y2FsYygxMDAlIC0gNDBweCl9YF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRnVsbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAVmlld0NoaWxkKCdwcm9ncmVzcycpIHByb2dyZXNzOiBQcm9ncmVzc0JhcjtcbiAgICBASW5wdXQoKSBjb2xvcjogc3RyaW5nID0gJ2xpZ2h0JztcbiAgICBASW5wdXQoKSBleHBhbmQ6IHN0cmluZyA9ICdibG9jayc7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaDogRXZlbnRFbWl0dGVyPEJ1dHRvbkZ1bGw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2hDb21wbGV0ZTogRXZlbnRFbWl0dGVyPEJ1dHRvbkZ1bGw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICB0b2dnbGVTcGlubmVyKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnRvZ2dsZVNwaW5uZXIoKTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2dyZXNzLmxvYWQoKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnVubG9hZCgpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlKGlzQ29tcGxldGU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uIGNvbXBsZXRlJywgaXNDb21wbGV0ZSk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaENvbXBsZXRlLmVtaXQodGhpcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gJy4uL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctaXRlbScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aW9uLWl0ZW0gW25nQ2xhc3NdPVwieydsb2FkaW5nJzogbG9hZGluZ31cIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvaW9uLWl0ZW0+XG4gIDxnZy1sb2FkaW5nLXByb2dyZXNzYmFyIChvbkNvbXBsZXRlKT1cIm9uQ29tcGxldGUoJGV2ZW50KVwiICNwcm9ncmVzcyBbZ2xvYmFsXT1cImZhbHNlXCI+PC9nZy1sb2FkaW5nLXByb2dyZXNzYmFyPlxuXG4gICAgYCxcbiAgICBzdHlsZXM6IFtgOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazttYXJnaW46MDt3aWR0aDpjYWxjKDEwMCUpfWlvbi1pdGVte2JhY2tncm91bmQ6I2ZmZn0ubG9hZGluZ3ttYXJnaW46NHB4O3dpZHRoOmNhbGMoMTAwJSAtIDhweCk7dHJhbnNpdGlvbjouMnM7Ym9yZGVyLXJhZGl1czo4cHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtib3gtc2hhZG93OjAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMTIpfWBdLFxuXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Qcm9ncmVzcyBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAVmlld0NoaWxkKCdwcm9ncmVzcycpIHByb2dyZXNzOiBQcm9ncmVzc0JhcjtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxJdGVtUHJvZ3Jlc3M+ID0gbmV3IEV2ZW50RW1pdHRlcjxJdGVtUHJvZ3Jlc3M+KCk7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaDogRXZlbnRFbWl0dGVyPEl0ZW1Qcm9ncmVzcz4gPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1Qcm9ncmVzcz4oKTtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICAgICAgdGhpcy5wcm9ncmVzcy50b2dnbGVTcGlubmVyKCk7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcy5sb2FkKCk7XG4gICAgfVxuXG4gICAgdW5sb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcy51bmxvYWQoKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db21wbGV0ZShpc0NvbXBsZXRlOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbiBjb21wbGV0ZScsIGlzQ29tcGxldGUpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2hDb21wbGV0ZS5lbWl0KHRoaXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZy1sb2FkaW5nLWNvbnRlbnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImdnLWhpbnQtd3JhcHBlclwiPlxuICAgIDxpb24tY2hpcCAqbmdJZj1cImhpbnRWaXNpYmxlXCIgKGNsaWNrKT1cIm9uSGludENsaWNrZWQoKVwiIFtAaGludEFuaW1dIChAaGludEFuaW0uZG9uZSk9XCJwb3N0SGludCgkZXZlbnQpXCIgI2hpbnQgY2xhc3M9XCJnZy1oaW50LWNvbnRhaW5lclwiPlxuICA8aW9uLWljb24gY2xhc3M9XCJpY29uXCIgbmFtZT1cIm1kLWFycm93LXVwXCI+PC9pb24taWNvbj5cbiAgPGlvbi1sYWJlbCBjbGFzcz1cInRleHRcIj57e2hpbnRUZXh0fX08L2lvbi1sYWJlbD5cbjwvaW9uLWNoaXA+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBbQHNwaW5uZXJBbmltXSAoQHNwaW5uZXJBbmltLmRvbmUpPVwib25TcGlubmVySGlkZGVuKCRldmVudClcIiAqbmdJZj1cInNwaW5uZXJWaXNpYmxlXCIgI3NwaW5uZXIgY2xhc3M9XCJnZy1zcGlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwic3Bpbm5lciByb3RhdGVcIiB2aWV3Qm94PVwiMCAwIDcyIDcyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPGNpcmNsZSBbQGZpbGxBbmltXT1cImlzQ29tcGxldGUgPyAnZmlsbCcgOiAnc3Bpbm5pbmcnXCIgKEBmaWxsQW5pbS5kb25lKT1cImZpbGxBbmltYXRpb25Eb25lKCRldmVudClcIiBbbmdDbGFzc109XCJ7J3BhdGgnOiAhaXNDb21wbGV0ZX1cIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgY3g9XCIzNlwiIGN5PVwiMzZcIiByPVwiMzJcIj48L2NpcmNsZT5cbiAgICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gICAgPGlvbi1jb250ZW50ICNjb250ZW50IGZ1bGxzY3JlZW4+XG4gICAgICAgIDxpb24tcmVmcmVzaGVyIChpb25TdGFydCk9XCJvblN0YXJ0KClcIiBbc25hcGJhY2tEdXJhdGlvbl09XCIyODBcIiBbY2xvc2VEdXJhdGlvbl09XCIyODBcIiBbcHVsbE1heF09XCIxNjhcIiBbcHVsbE1pbl09XCIxMTJcIiBbZGlzYWJsZWRdPVwiZmFsc2VcIiBzbG90PVwiZml4ZWRcIiAoaW9uUmVmcmVzaCk9XCJkb1JlZnJlc2goJGV2ZW50KVwiIChpb25QdWxsKT1cIm9uUHVsbCgkZXZlbnQpXCI+XG4gICAgICAgIDwvaW9uLXJlZnJlc2hlcj5cblxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9pb24tY29udGVudD5cbiAgICBgLFxuICAgIHN0eWxlczogW2Auc3Bpbm5lcntwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2xlZnQ6OHB4O3RvcDo4cHh9LnJvdGF0ZXstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGxpbmVhciBpbmZpbml0ZSByb3RhdG9yO2FuaW1hdGlvbjoxLjRzIGxpbmVhciBpbmZpbml0ZSByb3RhdG9yfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdG9yezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfX1Aa2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fS5wYXRoe3N0cm9rZS1kYXNoYXJyYXk6MTg3O3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGRhc2gsNS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnM7YW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc30uZmlsbHtzdHJva2UtZGFzaGFycmF5OjM2MDtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7LXdlYmtpdC1hbmltYXRpb246MS40cyBlYXNlLW91dCBmaWxsO2FuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7c3Ryb2tlOiMxYjlhNTl9QC13ZWJraXQta2V5ZnJhbWVzIGNvbG9yc3swJSwxMDAle3N0cm9rZTojNDI4NWY0fTI1JXtzdHJva2U6I2RlM2UzNX01MCV7c3Ryb2tlOiNmN2MyMjN9NzUle3N0cm9rZTojMWI5YTU5fX1Aa2V5ZnJhbWVzIGNvbG9yc3swJSwxMDAle3N0cm9rZTojNDI4NWY0fTI1JXtzdHJva2U6I2RlM2UzNX01MCV7c3Ryb2tlOiNmN2MyMjN9NzUle3N0cm9rZTojMWI5YTU5fX1ALXdlYmtpdC1rZXlmcmFtZXMgZGFzaHswJXtzdHJva2UtZGFzaG9mZnNldDoxODd9NTAle3N0cm9rZS1kYXNob2Zmc2V0OjQ2Ljc1Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjE4Nzstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZGFzaHswJXtzdHJva2UtZGFzaG9mZnNldDoxODd9NTAle3N0cm9rZS1kYXNob2Zmc2V0OjQ2Ljc1Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjE4Nzstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBmaWxsezAle3N0cm9rZS1kYXNob2Zmc2V0OjM2MH04MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTgwOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpfX1Aa2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fS5nZy1zcGlubmVyLWNvbnRhaW5lcnt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6Y2FsYyg1MCUgLSAyMHB4KTt0b3A6MDt6LWluZGV4Ojk7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItbGlnaHQpO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCA0cHggNnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDVweCByZ2JhKDAsMCwwLC4xKX0uZ2ctaGludC1jb250YWluZXJ7aGVpZ2h0OjQwcHg7cGFkZGluZy1sZWZ0OjhweDtwYWRkaW5nLXJpZ2h0OjhweDtwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1saWdodCk7Ym9yZGVyLXJhZGl1czo0MHB4O2JveC1zaGFkb3c6MCA0cHggNnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDVweCByZ2JhKDAsMCwwLC4xKTttYXJnaW46MH0uaWNvbntoZWlnaHQ6MjBweDt3aWR0aDoyMHB4O2JhY2tncm91bmQ6MCAwO2NvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrKX0udGV4dHtmb250LXNpemU6MWVtO2NvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrKX0uZ2ctaGludC13cmFwcGVye3dpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjExMnB4O3otaW5kZXg6ODt0ZXh0LWFsaWduOmNlbnRlcn1gXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHN0YXRlKCdmaWxsJywgc3R5bGUoe1xuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMzE1LFxuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDAsXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdzdHJva2UnOiAnIzFCOUE1OScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgKV1cbiAgICAgICAgKSxcbiAgICAgICAgdHJpZ2dlcignc3Bpbm5lckFuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIHRyaWdnZXIoJ2hpbnRBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtODBweCknIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoeyB3aWR0aDogJzExMnB4JyB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcsIHN0eWxlKHsgd2lkdGg6ICc0MHB4JyB9KSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICAgICksXG4gICAgXSxcblxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50UmVmcmVzaCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAT3V0cHV0KCkgb25Qcm9ncmVzc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxDb250ZW50UmVmcmVzaD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQFZpZXdDaGlsZCgnc3Bpbm5lcicpIHNwaW5uZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gICAgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHB1bGxpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICByZWZyZXNoaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgc3Bpbm5lclZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHRyYW5zbGF0ZVk6IG51bWJlciA9IDA7XG4gICAgaGludFZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBoaW50VGV4dDogc3RyaW5nID0gJ25ldyBwb3N0cyc7XG5cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIGZyb21FdmVudChkb2N1bWVudCwgJ3RvdWNoZW5kJykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndG91Y2hlbmQnLCByZXMpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHVsbGluZyAmJiAhdGhpcy5yZWZyZXNoaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQcm9ncmVzcygwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBzcGluUmVmcmVzaGVyKCkge1xuICAgICAgICB0aGlzLnNwaW5uZXIubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoMTEycHgpYCk7XG4gICAgICAgIHRoaXMucmVmcmVzaGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucHVsbGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRvUmVmcmVzaChldmVudCkge1xuICAgICAgICB0aGlzLnNwaW5SZWZyZXNoZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2ggaGVyZScpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jb21wbGV0ZSgpO1xuICAgICAgICB9LCAxNDApO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcGxldGVSZWZyZXNoKCkge1xuICAgICAgICB0aGlzLnJlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvblB1bGwoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wdWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGV2ZW50LnRhcmdldC5nZXRQcm9ncmVzcygpO1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPD0gMSkge1xuICAgICAgICAgICAgdGhpcy5vblByb2dyZXNzQ2hhbmdlZC5lbWl0KHByb2dyZXNzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0YXJ0KCkge1xuICAgICAgICAvLyB0aGlzLmNoYW5nZVByb2dyZXNzKDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlWSA9IDExMiAqIHByb2dyZXNzO1xuICAgICAgICBjb25zdCB0cmFuc2xhdGVZID0gdGhpcy50cmFuc2xhdGVZO1xuICAgICAgICBjb25zb2xlLmxvZyhgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCk7XG4gICAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9KWApXG4gICAgICAgIHRoaXMuc3Bpbm5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCk7XG4gICAgICAgIC8vIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBmaWxsQW5pbWF0aW9uRG9uZShldmVudCkge1xuXG4gICAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZmlsbCcgJiYgZXZlbnQuZnJvbVN0YXRlID09PSAnc3Bpbm5pbmcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsbEFuaW0gY29tcGxldGUnLCBldmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lclZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGlubmVySGlkZGVuKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2ggY29tcGxldGUnLCBldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNwaW5uZXJWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2hvd0hpbnQoKSB7XG4gICAgICAgIHRoaXMuaGludFZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uSGludENsaWNrZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbiBoaW50IGNsaWNrZWQnKTtcbiAgICAgICAgdGhpcy5oaW50VmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHBvc3RIaW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgaWYgKCFldmVudC5mcm9tU3RhdGUgJiYgZXZlbnQudG9TdGF0ZSA9PSAndm9pZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5zcGluUmVmcmVzaGVyKCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctaW5maW5pdGUtc2Nyb2xsJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJnZy1yZWZyZXNoZXJcIj5cblxuICAgIDxkaXYgI3NwaW5uZXIgY2xhc3M9XCJnZy1zcGlubmVyLWNvbnRhaW5lclwiPlxuICAgIDxzdmcgY2xhc3M9XCJzcGlubmVyIHJvdGF0ZVwiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPGNpcmNsZSBbQGZpbGxBbmltXT1cImlzQ29tcGxldGUgPyAnZmlsbCcgOiAnc3Bpbm5pbmcnXCIgKEBmaWxsQW5pbS5kb25lKT1cImZpbGxBbmltYXRpb25Eb25lKCRldmVudClcIiBbbmdDbGFzc109XCJ7J3BhdGgnOiAhaXNDb21wbGV0ZX1cIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgY3g9XCIzNlwiIGN5PVwiMzZcIiByPVwiMzJcIj48L2NpcmNsZT5cbiA8L3N2Zz5cbiAgICA8L2Rpdj5cblxuICAgIFxuICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYGlvbi1zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOHB4O2xlZnQ6LThweDt3aWR0aDo3MnB4O2hlaWdodDo3MnB4fS5zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bGVmdDo4cHg7dG9wOjhweH0ucm90YXRley13ZWJraXQtYW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3I7YW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3J9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fUBrZXlmcmFtZXMgcm90YXRvcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX19LnBhdGh7c3Ryb2tlLWRhc2hhcnJheToxODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOy13ZWJraXQtYW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yczthbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBkYXNoLDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzfS5maWxse3N0cm9rZS1kYXNoYXJyYXk6MzYwO3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7YW5pbWF0aW9uOjEuNHMgZWFzZS1vdXQgZmlsbDtzdHJva2U6IzFiOWE1OX1ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUBrZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUAtd2Via2l0LWtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QGtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZmlsbHswJXtzdHJva2UtZGFzaG9mZnNldDozNjB9ODAle3N0cm9rZS1kYXNob2Zmc2V0OjE4MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19LmdnLXJlZnJlc2hlcntkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjExMnB4O3Bvc2l0aW9uOnJlbGF0aXZlfS5nZy1zcGlubmVyLWNvbnRhaW5lcnt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6Y2FsYyg1MCUgLSAyMHB4KTt0b3A6MTZweDtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1saWdodCk7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNoYWRvdzowIDRweCA2cHggMCByZ2JhKDAsMCwwLC4xNCksMCA0cHggNXB4IHJnYmEoMCwwLDAsLjEpfWBdLFxuICAgIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdmYWJBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSlcbiAgICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdzcGlubmVyQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSkpXG4gICAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbignbm9ybWFsID0+IHJvdGF0ZScsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJ3JvdGF0ZSA9PiBub3JtYWwnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLWluJylcbiAgICAgICAgXSksXG4gICAgICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZyknIH0pKSxcbiAgICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDBkZWcpJyB9KSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMTgwLFxuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyNERTNFMzUnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzgwMG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHN0YXRlKCdmaWxsJywgc3R5bGUoe1xuICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAzMTUsXG4gICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgJ3N0cm9rZSc6ICcjMUI5QTU5JyxcbiAgICAgICAgICAgICdvcGFjaXR5JzogMFxuICAgICAgICB9KVxuICAgICAgICApXVxuICAgICldLFxuXG59KVxuZXhwb3J0IGNsYXNzIEluZmluaXRlU2Nyb2xsQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc3BpbkNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZmFiQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSB2ZXJ0aWNhbDogc3RyaW5nID0gXCJib3R0b21cIjtcbiAgICBASW5wdXQoKSBob3Jpem9udGFsOiBzdHJpbmcgPSBcImVuZFwiO1xuICAgIEBJbnB1dCgpIGVkZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjaGVja21hcms6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBkcmFnUHJvZ3Jlc3M6IG51bWJlciA9IDA7XG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpY29uU3RhdGU6IHN0cmluZyA9ICdub3JtYWwnO1xuXG4gICAgQFZpZXdDaGlsZCgnc3Bpbm5lcicpIHNwaW5uZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBAT3V0cHV0KCkgb25Db21wbGV0ZTogRXZlbnRFbWl0dGVyPEluZmluaXRlU2Nyb2xsQ29udGVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEluZmluaXRlU2Nyb2xsQ29udGVudD4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8SW5maW5pdGVTY3JvbGxDb250ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SW5maW5pdGVTY3JvbGxDb250ZW50PigpO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBjaGFuZ2U6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaWNvbiAhPSAnbWQtY2hlY2ttYXJrJykge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQoKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaWxsQW5pbWF0aW9uRG9uZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09ICdzcGlubmluZycpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrbWFyaykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxsIGFuaW1hdGlvbiBkb25lJywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvblN0YXRlID0gXCJyb3RhdGVcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0Q29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUljb25BbmRSZXZlYWwoZXZlbnQsIGljb246IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCwgaWNvbik7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT0gJ25vcm1hbCcpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgICAgICAgICB0aGlzLmljb25TdGF0ZSA9IFwibm9ybWFsXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSBcInJvdGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0Q29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9zdENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLnVubG9hZCgpO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kcmFnUHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlWSA9IE1hdGguZmxvb3IoLTgwICsgODAgKiBwcm9ncmVzcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX1weClgKTtcbiAgICAgICAgLy8gdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwaW5uZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX0pYClcbiAgICAgICAgdGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX1weClgKVxuICAgICAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJTcGlubmVyIH0gZnJvbSAnLi9mYWIvZmFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25GdWxsIH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtUHJvZ3Jlc3MgfSBmcm9tICcuL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudFJlZnJlc2ggfSBmcm9tICcuL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGxDb250ZW50IH0gZnJvbSAnLi9pbmZpbml0ZS1zY3JvbGwtY29udGVudC9pbmZpbml0ZS1zY3JvbGx0LWNvbnRlbnQuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ZhYlNwaW5uZXIsIFByb2dyZXNzQmFyLCBCdXR0b25GdWxsLEl0ZW1Qcm9ncmVzcyxDb250ZW50UmVmcmVzaCxJbmZpbml0ZVNjcm9sbENvbnRlbnRdLFxuICBleHBvcnRzOiBbRmFiU3Bpbm5lciwgUHJvZ3Jlc3NCYXIsIEJ1dHRvbkZ1bGwsIEl0ZW1Qcm9ncmVzcyxDb250ZW50UmVmcmVzaCxJbmZpbml0ZVNjcm9sbENvbnRlbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkJlaGF2aW9yU3ViamVjdCIsIkluamVjdGFibGUiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJ0cmlnZ2VyIiwidHJhbnNpdGlvbiIsInN0eWxlIiwiYW5pbWF0ZSIsIklucHV0IiwiT3V0cHV0IiwiVmlld0NoaWxkIiwic3RhdGUiLCJmcm9tRXZlbnQiLCJSZW5kZXJlcjIiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIk5nTW9kdWxlIiwiSW9uaWNNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQWVFOzJCQU4wQixLQUFLOzhCQUNGLEtBQUs7OEJBQ1ksSUFBSUEsb0JBQWUsQ0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDO2tDQUN0QyxJQUFJQSxvQkFBZSxDQUFVLElBQUksQ0FBQyxVQUFVLENBQUM7U0FHOUU7Ozs7UUFFakIsNkJBQUk7OztZQUFKO2dCQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEM7Ozs7UUFFRCwrQkFBTTs7O1lBQU47Z0JBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDekI7Ozs7UUFFRCxzQ0FBYTs7O1lBQWI7Z0JBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDOUI7Ozs7UUFFRCxpQ0FBUTs7O1lBQVI7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzNDOztvQkFoQ0ZDLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OzZCQU5EOzs7Ozs7O0FDQUE7UUE0Q0kscUJBQW1CLGNBQThCO1lBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjsyQkFSOUIsS0FBSzswQkFDRyxLQUFLOzhCQUNELEtBQUs7OEJBQ1UsSUFBSUMsZUFBWSxFQUFXOzZCQUN4QixJQUFJQSxlQUFZLEVBQWU7U0FLL0U7Ozs7UUFFRCw4QkFBUTs7O1lBQVI7Z0JBQUEsaUJBUUM7Z0JBUEcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFVBQVU7d0JBQ25ELElBQUksVUFBVSxFQUFFOzRCQUNaLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt5QkFDbkI7cUJBQ0osQ0FBQyxDQUFBO2lCQUNMO2FBQ0o7Ozs7UUFFRCxpQ0FBVzs7O1lBQVg7Z0JBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUNwRDthQUNKOzs7O1FBRUQsbUNBQWE7OztZQUFiO2dCQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ2hDOzs7O1FBRUQsMEJBQUk7OztZQUFKO2dCQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3Qjs7OztRQUVELDRCQUFNOzs7WUFBTjtnQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztpQkFDM0I7YUFDSjs7OztRQUVELDhCQUFROzs7WUFBUjtnQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDaEM7Ozs7O1FBRUQsMkNBQXFCOzs7O1lBQXJCLFVBQXNCLFVBQW1CO2dCQUNyQyxJQUFJLFVBQVUsRUFBRTtvQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTt3QkFDYixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO3FCQUNoQzt5QkFBTTt3QkFDSCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7cUJBQ2pCO2lCQUNKO2FBQ0o7O29CQTNGSkMsWUFBUyxTQUFDO3dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7d0JBQ2xDLFFBQVEsRUFBRSxxYUFPVDt3QkFFRCxVQUFVLEVBQUU7NEJBQ1JDLGtCQUFPLENBQUMsY0FBYyxFQUFFO2dDQUNwQkMscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCQyxnQkFBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO29DQUN4QkMsa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQztpQ0FDNUIsQ0FBQztnQ0FDRkYscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCRSxrQkFBTyxDQUFDLGVBQWUsRUFBRUQsZ0JBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lDQUNyRCxDQUFDOzZCQUNMLENBQUM7NEJBQ0ZGLGtCQUFPLENBQUMsVUFBVSxFQUFFO2dDQUNoQkMscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCQyxnQkFBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7b0NBQ25DQyxrQkFBTyxDQUFDLGdCQUFnQixFQUFFRCxnQkFBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztpQ0FDbEUsQ0FBQzs2QkFDTCxDQUFDO3lCQUNMO2lDQWpCUSx3dEJBQXd0QjtxQkFrQnB1Qjs7Ozs7d0JBL0JRLGNBQWM7Ozs7NkJBbUNsQkUsUUFBSztpQ0FDTEEsUUFBSztpQ0FDTEMsU0FBTTtnQ0FDTkEsU0FBTTswQkFFTkMsWUFBUyxTQUFDLEtBQUs7OzBCQTFDcEI7Ozs7Ozs7QUNBQTtRQXNGSTs0QkFiNEIsUUFBUTs4QkFDTixLQUFLO3dCQUNWLEtBQUs7NkJBQ0EsS0FBSzsyQkFDaEIsS0FBSzs4QkFDRixLQUFLOzZCQUNQLFFBQVE7OEJBSXFCLElBQUlSLGVBQVksRUFBYzs2QkFDL0IsSUFBSUEsZUFBWSxFQUFjO1NBRzdFOzs7O1FBRUQsNkJBQVE7OztZQUFSO2FBQ0M7Ozs7UUFFRCxrQ0FBYTs7O1lBQWI7Z0JBQ0ksSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLGNBQWMsRUFBQztvQkFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQ2hDO2FBQ0o7Ozs7UUFFRCx5QkFBSTs7O1lBQUo7Z0JBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdCOzs7O1FBRUQsMkJBQU07OztZQUFOO2dCQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3hCOzs7O1FBRUQsNkJBQVE7OztZQUFSO2dCQUNJLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQztvQkFDWixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztpQkFFMUI7YUFDSjs7Ozs7UUFFRCxzQ0FBaUI7Ozs7WUFBakIsVUFBa0IsS0FBSztnQkFDbkIsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLFVBQVUsRUFBRTtvQkFDL0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztxQkFDN0I7eUJBQU07d0JBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3FCQUN2QjtpQkFDSjthQUNKOzs7Ozs7UUFFRCx3Q0FBbUI7Ozs7O1lBQW5CLFVBQW9CLEtBQUssRUFBRSxJQUFZO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDekIsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLFFBQVEsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2lCQUM3QjtxQkFBTTtvQkFDSCxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO3dCQUM5QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7cUJBQ3ZCO2lCQUVKO2FBQ0o7Ozs7UUFFRCxpQ0FBWTs7O1lBQVo7Z0JBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5Qjs7b0JBeklKQyxZQUFTLFNBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsUUFBUSxFQUFFLGd1QkFVVDt3QkFFRCxVQUFVLEVBQUUsQ0FBQ0Msa0JBQU8sQ0FBQyxTQUFTLEVBQUU7Z0NBQzVCQyxxQkFBVSxDQUFDLFdBQVcsRUFBRTtvQ0FDcEJDLGdCQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUM7b0NBQ2hDQyxrQkFBTyxDQUFDLGdCQUFnQixDQUFDO2lDQUM1QixDQUFDO2dDQUNGRixxQkFBVSxDQUFDLFdBQVcsRUFBRTtvQ0FDcEJFLGtCQUFPLENBQUMsZUFBZSxFQUFFRCxnQkFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7aUNBQzdELENBQUM7NkJBQ0wsQ0FBQzs0QkFDRkYsa0JBQU8sQ0FBQyxhQUFhLEVBQUU7Z0NBQ25CQyxxQkFBVSxDQUFDLFdBQVcsRUFBRTtvQ0FDcEJDLGdCQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7b0NBQ3ZCQyxrQkFBTyxDQUFDLGdCQUFnQixDQUFDO2lDQUM1QixDQUFDO2dDQUNGRixxQkFBVSxDQUFDLFdBQVcsRUFBRTtvQ0FDcEJFLGtCQUFPLENBQUMsZUFBZSxFQUFFRCxnQkFBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7aUNBQ3BELENBQUM7NkJBQ0wsQ0FBQzs0QkFDRkYsa0JBQU8sQ0FBQyxZQUFZLEVBQUU7Z0NBQ2xCQyxxQkFBVSxDQUFDLGtCQUFrQixFQUFFO29DQUMzQkUsa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQztpQ0FDNUIsQ0FBQztnQ0FDRkYscUJBQVUsQ0FBQyxrQkFBa0IsRUFBRTtvQ0FDM0JFLGtCQUFPLENBQUMsZUFBZSxDQUFDO2lDQUMzQixDQUFDO2dDQUNGSSxnQkFBSyxDQUFDLFFBQVEsRUFBRUwsZ0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztnQ0FDckVLLGdCQUFLLENBQUMsUUFBUSxFQUFFTCxnQkFBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQzs2QkFDdkUsQ0FBQzs0QkFDRkYsa0JBQU8sQ0FBQyxVQUFVLEVBQUU7Z0NBQ2hCQyxxQkFBVSxDQUFDLFdBQVcsRUFBRTtvQ0FDcEJDLGdCQUFLLENBQUM7d0NBQ0Ysa0JBQWtCLEVBQUUsR0FBRzt3Q0FDdkIsbUJBQW1CLEVBQUUsRUFBRTt3Q0FDdkIsaUJBQWlCLEVBQUUsUUFBUTt3Q0FDM0IsUUFBUSxFQUFFLFNBQVM7cUNBQ3RCLENBQUM7b0NBQ0ZDLGtCQUFPLENBQUMsaUJBQWlCLENBQUM7aUNBQzdCLENBQUM7Z0NBQ0ZJLGdCQUFLLENBQUMsTUFBTSxFQUFFTCxnQkFBSyxDQUFDO29DQUNoQixrQkFBa0IsRUFBRSxHQUFHO29DQUN2QixtQkFBbUIsRUFBRSxDQUFDO29DQUN0QixpQkFBaUIsRUFBRSxRQUFRO29DQUMzQixRQUFRLEVBQUUsU0FBUztvQ0FDbkIsU0FBUyxFQUFFLENBQUM7aUNBQ2YsQ0FBQyxDQUNEOzZCQUFDLENBQ0wsQ0FBQztpQ0EvQ08scytEQUFzK0Q7cUJBaURsL0Q7Ozs7OzJCQUdJRSxRQUFLO2dDQUNMQSxRQUFLOytCQUNMQSxRQUFLOytCQUNMQSxRQUFLO2lDQUNMQSxRQUFLOzJCQUNMQSxRQUFLO2dDQUNMQSxRQUFLOzhCQUtMRSxZQUFTLFNBQUMsU0FBUztpQ0FFbkJELFNBQU07Z0NBQ05BLFNBQU07O3lCQXBGWDs7Ozs7OztBQ0FBO1FBMEJJOzJCQVRtQixLQUFLO3lCQUdDLE9BQU87MEJBQ04sT0FBTzs2QkFDZSxJQUFJUCxlQUFZLEVBQUU7cUNBQ1YsSUFBSUEsZUFBWSxFQUFFO1NBSXpFOzs7O1FBRUQsNkJBQVE7OztZQUFSO2FBQ0M7Ozs7UUFFRCxrQ0FBYTs7O1lBQWI7Z0JBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdCOzs7O1FBRUQseUJBQUk7OztZQUFKO2dCQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3hCOzs7O1FBRUQsMkJBQU07OztZQUFOO2dCQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzFCOzs7O1FBRUQsNkJBQVE7OztZQUFSO2dCQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUM1QjthQUNKOzs7OztRQUVELCtCQUFVOzs7O1lBQVYsVUFBVyxVQUFtQjtnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JDOztvQkF0REpDLFlBQVMsU0FBQzt3QkFDUCxRQUFRLEVBQUUsbUJBQW1CO3dCQUM3QixRQUFRLEVBQUUsd09BS1Q7aUNBQ1EsOEVBQThFO3FCQUUxRjs7Ozs7K0JBS0lPLFlBQVMsU0FBQyxVQUFVOzRCQUNwQkYsUUFBSzs2QkFDTEEsUUFBSztnQ0FDTEMsU0FBTTt3Q0FDTkEsU0FBTTs7eUJBdkJYOzs7Ozs7O0FDQUE7UUEwQkk7MkJBUG1CLEtBQUs7cUNBR2tDLElBQUlQLGVBQVksRUFBZ0I7NkJBQ3hDLElBQUlBLGVBQVksRUFBZ0I7U0FJakY7Ozs7UUFFRCwrQkFBUTs7O1lBQVI7YUFDQzs7OztRQUVELG9DQUFhOzs7WUFBYjtnQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNqQzs7OztRQUVELDJCQUFJOzs7WUFBSjtnQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN4Qjs7OztRQUVELDZCQUFNOzs7WUFBTjtnQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUMxQjs7OztRQUVELCtCQUFROzs7WUFBUjtnQkFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDNUI7YUFDSjs7Ozs7UUFFRCxpQ0FBVTs7OztZQUFWLFVBQVcsVUFBbUI7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQzs7b0JBcERKQyxZQUFTLFNBQUM7d0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLGlPQU1UO2lDQUNRLHFRQUFxUTtxQkFFalI7Ozs7OytCQUtJTyxZQUFTLFNBQUMsVUFBVTt3Q0FDcEJELFNBQU07Z0NBQ05BLFNBQU07OzJCQXZCWDs7Ozs7OztBQ0FBO1FBNkZJO3FDQXhCb0QsSUFBSVAsZUFBWSxFQUFFOzZCQUNsQixJQUFJQSxlQUFZLEVBQUU7OEJBR3pELEtBQUs7MkJBQ0MsS0FBSzs4QkFDRixLQUFLO2tDQUNELElBQUk7OEJBQ1QsQ0FBQzsrQkFDQyxLQUFLOzRCQUNBLFdBQVc7U0FldEM7Ozs7UUFaRCxpQ0FBUTs7O1lBQVI7Z0JBQUEsaUJBU0M7Z0JBUEdVLGNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztvQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQzdCLElBQUksS0FBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUU7d0JBQ2xDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzFCO2lCQUNKLENBQUMsQ0FBQzthQUVOOzs7O1FBS0Qsc0NBQWE7OztZQUFiO2dCQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLG1CQUFtQixDQUFDLENBQUM7Z0JBQy9FLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN4Qjs7Ozs7UUFFRCxrQ0FBUzs7OztZQUFULFVBQVUsS0FBSztnQkFDWCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzVCLFVBQVUsQ0FBQztvQkFDUCxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUMzQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNSLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUVsQjs7OztRQUVELGdDQUFPOzs7WUFBUDtnQkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3Qjs7OztRQUVELHdDQUFlOzs7WUFBZjtnQkFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDMUI7Ozs7O1FBRUQsK0JBQU07Ozs7WUFBTixVQUFPLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7O2dCQUNuQixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUM1QyxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFFakM7YUFDSjs7OztRQUVELGdDQUFPOzs7WUFBUDs7YUFFQzs7Ozs7UUFFTSx1Q0FBYzs7OztzQkFBQyxRQUFnQjtnQkFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDOztnQkFDakMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxVQUFVLFFBQUssQ0FBQyxDQUFDOztnQkFFM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsZ0JBQWMsVUFBVSxRQUFLLENBQUMsQ0FBQzs7Ozs7OztRQUk3RiwwQ0FBaUI7Ozs7WUFBakIsVUFBa0IsS0FBSztnQkFFbkIsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLE1BQU0sSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtvQkFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFFeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7b0JBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2lCQUMzQjthQUNKOzs7OztRQUVELHdDQUFlOzs7O1lBQWYsVUFBZ0IsS0FBSztnQkFDakIsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtvQkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7aUJBQzlCO2FBRUo7Ozs7UUFFRCxpQ0FBUTs7O1lBQVI7Z0JBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDM0I7Ozs7UUFFRCxzQ0FBYTs7O1lBQWI7Z0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUM1Qjs7Ozs7UUFFRCxpQ0FBUTs7OztZQUFSLFVBQVMsS0FBSztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLE1BQU0sRUFBRTtvQkFDN0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNmLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFFeEI7YUFDSjs7b0JBN0tKVCxZQUFTLFNBQUM7d0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsUUFBUSxFQUFFLGdzQ0FtQlQ7d0JBRUQsVUFBVSxFQUFFOzRCQUNSQyxrQkFBTyxDQUFDLFVBQVUsRUFBRTtnQ0FDaEJDLHFCQUFVLENBQUMsV0FBVyxFQUFFO29DQUNwQkMsZ0JBQUssQ0FBQzt3Q0FDRixrQkFBa0IsRUFBRSxHQUFHO3dDQUN2QixtQkFBbUIsRUFBRSxFQUFFO3dDQUN2QixpQkFBaUIsRUFBRSxRQUFRO3dDQUMzQixRQUFRLEVBQUUsU0FBUztxQ0FDdEIsQ0FBQztvQ0FDRkMsa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQztpQ0FDNUIsQ0FBQztnQ0FDRkksZ0JBQUssQ0FBQyxNQUFNLEVBQUVMLGdCQUFLLENBQUM7b0NBQ2hCLGtCQUFrQixFQUFFLEdBQUc7b0NBQ3ZCLG1CQUFtQixFQUFFLENBQUM7b0NBQ3RCLGlCQUFpQixFQUFFLFFBQVE7b0NBQzNCLFFBQVEsRUFBRSxTQUFTO2lDQUN0QixDQUFDLENBQ0Q7NkJBQUMsQ0FDTDs0QkFDREYsa0JBQU8sQ0FBQyxhQUFhLEVBQUU7Z0NBQ25CQyxxQkFBVSxDQUFDLFdBQVcsRUFBRTtvQ0FDcEJFLGtCQUFPLENBQUMsZ0JBQWdCLEVBQUVELGdCQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQ0FDbkQsQ0FBQzs2QkFDTCxDQUFDOzRCQUNGRixrQkFBTyxDQUFDLFVBQVUsRUFBRTtnQ0FDaEJDLHFCQUFVLENBQUMsV0FBVyxFQUFFO29DQUNwQkMsZ0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLENBQUM7b0NBQ3JEQyxrQkFBTyxDQUFDLGVBQWUsRUFBRUQsZ0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7aUNBQzlFLENBQUM7Z0NBQ0ZELHFCQUFVLENBQUMsV0FBVyxFQUFFO29DQUNwQkMsZ0JBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztvQ0FDekJDLGtCQUFPLENBQUMsZ0JBQWdCLEVBQUVELGdCQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztpQ0FDdEQsQ0FBQzs2QkFDTCxDQUNBO3lCQUNKO2lDQXBDUSxtaEZBQW1oRjtxQkFzQy9oRjs7Ozs7d0NBR0lHLFNBQU07Z0NBQ05BLFNBQU07OEJBQ05DLFlBQVMsU0FBQyxTQUFTOzhCQUNuQkEsWUFBUyxTQUFDLFNBQVM7K0JBT25CRixRQUFLOzs2QkEvRVY7Ozs7Ozs7QUNBQTtRQXdGSSwrQkFBbUIsUUFBbUIsRUFBUyxNQUF5QjtZQUFyRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1lBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7NEJBZDVDLFFBQVE7OEJBQ04sS0FBSzt3QkFDVixLQUFLOzZCQUNBLEtBQUs7Z0NBQ1osQ0FBQzsyQkFDTCxLQUFLOzhCQUNGLEtBQUs7NkJBQ1AsUUFBUTs4QkFJZ0MsSUFBSU4sZUFBWSxFQUF5Qjs2QkFDMUMsSUFBSUEsZUFBWSxFQUF5QjtTQUduRzs7OztRQUVELHdDQUFROzs7WUFBUjthQUNDOzs7O1FBRUQsNkNBQWE7OztZQUFiO2dCQUNJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxjQUFjLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNoQzthQUNKOzs7O1FBRUQsb0NBQUk7OztZQUFKO2dCQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3pCOzs7O1FBRUQsc0NBQU07OztZQUFOO2dCQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3hCOzs7O1FBRUQsd0NBQVE7OztZQUFSO2dCQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztpQkFFMUI7YUFDSjs7Ozs7UUFFRCxpREFBaUI7Ozs7WUFBakIsVUFBa0IsS0FBSztnQkFDbkIsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLFVBQVUsRUFBRTtvQkFDL0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztxQkFDN0I7eUJBQU07d0JBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3FCQUN2QjtpQkFDSjthQUNKOzs7Ozs7UUFFRCxtREFBbUI7Ozs7O1lBQW5CLFVBQW9CLEtBQUssRUFBRSxJQUFZO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDekIsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLFFBQVEsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2lCQUM3QjtxQkFBTTtvQkFDSCxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO3dCQUM5QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7cUJBQ3ZCO2lCQUVKO2FBQ0o7Ozs7UUFFRCw0Q0FBWTs7O1lBQVo7Z0JBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5Qjs7Ozs7UUFFTSw4Q0FBYzs7OztzQkFBQyxRQUFnQjtnQkFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7O2dCQUM3QixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQztnQkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxVQUFVLFFBQUssQ0FBQyxDQUFDOztnQkFFM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsZ0JBQWMsVUFBVSxRQUFLLENBQUMsQ0FBQTtnQkFDeEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7O29CQW5KbkNDLFlBQVMsU0FBQzt3QkFDUCxRQUFRLEVBQUUsNEJBQTRCO3dCQUN0QyxRQUFRLEVBQUUseWRBV1Q7d0JBRUQsVUFBVSxFQUFFLENBQUNDLGtCQUFPLENBQUMsU0FBUyxFQUFFO2dDQUM1QkMscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCQyxnQkFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDO29DQUNoQ0Msa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQztpQ0FDNUIsQ0FBQztnQ0FDRkYscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCRSxrQkFBTyxDQUFDLGVBQWUsRUFBRUQsZ0JBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO2lDQUM3RCxDQUFDOzZCQUNMLENBQUM7NEJBQ0ZGLGtCQUFPLENBQUMsYUFBYSxFQUFFO2dDQUNuQkMscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCQyxnQkFBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO29DQUN2QkMsa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQztpQ0FDNUIsQ0FBQztnQ0FDRkYscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCRSxrQkFBTyxDQUFDLGVBQWUsRUFBRUQsZ0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2lDQUNwRCxDQUFDOzZCQUNMLENBQUM7NEJBQ0ZGLGtCQUFPLENBQUMsWUFBWSxFQUFFO2dDQUNsQkMscUJBQVUsQ0FBQyxrQkFBa0IsRUFBRTtvQ0FDM0JFLGtCQUFPLENBQUMsZ0JBQWdCLENBQUM7aUNBQzVCLENBQUM7Z0NBQ0ZGLHFCQUFVLENBQUMsa0JBQWtCLEVBQUU7b0NBQzNCRSxrQkFBTyxDQUFDLGVBQWUsQ0FBQztpQ0FDM0IsQ0FBQztnQ0FDRkksZ0JBQUssQ0FBQyxRQUFRLEVBQUVMLGdCQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7Z0NBQ3JFSyxnQkFBSyxDQUFDLFFBQVEsRUFBRUwsZ0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7NkJBQ3ZFLENBQUM7NEJBQ0ZGLGtCQUFPLENBQUMsVUFBVSxFQUFFO2dDQUNoQkMscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCQyxnQkFBSyxDQUFDO3dDQUNGLGtCQUFrQixFQUFFLEdBQUc7d0NBQ3ZCLG1CQUFtQixFQUFFLEVBQUU7d0NBQ3ZCLGlCQUFpQixFQUFFLFFBQVE7d0NBQzNCLFFBQVEsRUFBRSxTQUFTO3FDQUN0QixDQUFDO29DQUNGQyxrQkFBTyxDQUFDLGdCQUFnQixDQUFDO2lDQUM1QixDQUFDO2dDQUNGSSxnQkFBSyxDQUFDLE1BQU0sRUFBRUwsZ0JBQUssQ0FBQztvQ0FDaEIsa0JBQWtCLEVBQUUsR0FBRztvQ0FDdkIsbUJBQW1CLEVBQUUsQ0FBQztvQ0FDdEIsaUJBQWlCLEVBQUUsUUFBUTtvQ0FDM0IsUUFBUSxFQUFFLFNBQVM7b0NBQ25CLFNBQVMsRUFBRSxDQUFDO2lDQUNmLENBQUMsQ0FDRDs2QkFBQyxDQUNMLENBQUM7aUNBL0NPLDR2RUFBNHZFO3FCQWlEeHdFOzs7Ozt3QkFwRStFTyxZQUFTO3dCQUFFQyxvQkFBaUI7Ozs7MkJBdUV2R04sUUFBSztnQ0FDTEEsUUFBSzsrQkFDTEEsUUFBSzsrQkFDTEEsUUFBSztpQ0FDTEEsUUFBSzsyQkFDTEEsUUFBSztnQ0FDTEEsUUFBSzs4QkFNTEUsWUFBUyxTQUFDLFNBQVM7aUNBRW5CRCxTQUFNO2dDQUNOQSxTQUFNOztvQ0F0Rlg7Ozs7Ozs7QUNBQTs7OztvQkFXQ00sV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVc7NEJBQ1hDLG1CQUFZO3lCQUNiO3dCQUNELFlBQVksRUFBRSxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMscUJBQXFCLENBQUM7d0JBQ3JHLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBQyxjQUFjLEVBQUMscUJBQXFCO3lCQUMvRjtxQkFDRjs7NEJBbkJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=