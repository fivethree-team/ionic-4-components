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
                        template: "\n<div [@progressAnim] *ngIf=\"(!global && loading) || (global && loadingService.loading)\" class=\"slider\">\n  <div class=\"line\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline inc\"></div>\n  <div *ngIf=\"isComplete\" [@fillAnim] (@fillAnim.done)=\"fillAnimationComplete(isComplete)\" class=\"subline fill\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline dec\"></div>\n</div>\n    ",
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
                        styles: [".slider{position:absolute;width:100%;height:5px;overflow-x:hidden;z-index:5000}.line{position:absolute;opacity:.4;width:240%;height:5px;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}.subline{position:absolute;height:5px;background:inherit}.inc{-webkit-animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin;animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin}.dec{-webkit-animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin;animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin}.fill{left:0;width:100%;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}@-webkit-keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@-webkit-keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@-webkit-keyframes colorspin{0%,100%{background-color:#4285f4}25%{background-color:#de3e35}50%{background-color:#f7c223}75%{background-color:#1b9a59}}@keyframes colorspin{0%,100%{background-color:#4285f4}25%{background-color:#de3e35}50%{background-color:#f7c223}75%{background-color:#1b9a59}}"]
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
            { type: i0.Component, args: [{
                        selector: 'gg-loading-content',
                        template: "\n    <div class=\"gg-hint-wrapper\">\n    <ion-chip *ngIf=\"hintVisible\" (click)=\"onHintClicked()\" [@hintAnim] (@hintAnim.done)=\"postHint($event)\" #hint class=\"gg-hint-container\">\n  <ion-icon class=\"icon\" name=\"md-arrow-up\"></ion-icon>\n  <ion-label class=\"text\">{{hintText}}</ion-label>\n</ion-chip>\n    </div>\n    \n    <div [@spinnerAnim] (@spinnerAnim.done)=\"onSpinnerHidden($event)\" *ngIf=\"spinnerVisible\" #spinner class=\"gg-spinner-container\">\n        <svg class=\"spinner rotate\" viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle [@fillAnim]=\"isComplete ? 'fill' : 'spinning'\" (@fillAnim.done)=\"fillAnimationDone($event)\" [ngClass]=\"{'path': !isComplete}\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\" cx=\"36\" cy=\"36\" r=\"32\"></circle>\n        </svg>\n    </div>\n        <ion-refresher (ionStart)=\"onStart()\" [snapbackDuration]=\"280\" [closeDuration]=\"280\" [pullMax]=\"168\" [pullMin]=\"112\" [disabled]=\"false\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" (ionPull)=\"onPull($event)\">\n        </ion-refresher>\n    ",
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
                        styles: [".spinner{position:absolute;width:24px;height:24px;left:8px;top:8px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}.gg-spinner-container{width:40px;height:40px;position:absolute;left:calc(50% - 20px);top:-56px;z-index:9;background:var(--ion-color-light);border-radius:50%;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1)}.gg-hint-container{height:40px;padding-left:8px;padding-right:8px;position:relative;background:var(--ion-color-light);border-radius:40px;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1);margin:0}.icon{height:20px;width:20px;background:0 0;color:var(--ion-color-dark)}.text{font-size:1em;color:var(--ion-color-dark)}.gg-hint-wrapper{width:100%;position:absolute;top:112px;z-index:8;text-align:center}"]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2lvbmljLW1hdGVyaWFsLWxvYWRpbmcvbGliL2xvYWRpbmcuc2VydmljZS50cyIsIm5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy9saWIvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQudHMiLCJuZzovL2lvbmljLW1hdGVyaWFsLWxvYWRpbmcvbGliL2ZhYi9mYWIuY29tcG9uZW50LnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy9saWIvaXRlbS9pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy9saWIvY29udGVudC9jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy9saWIvaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQvaW5maW5pdGUtc2Nyb2xsdC1jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy9saWIvbG9hZGluZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1NlcnZpY2Uge1xuXG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBsb2FkQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRoaXMubG9hZGluZyk7XG4gIHB1YmxpYyBjb21wbGV0ZUNoYW5nZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0aGlzLmlzQ29tcGxldGUpO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBsb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5sb2FkQ2hhbmdlLm5leHQodGhpcy5sb2FkaW5nKTtcbiAgfVxuXG4gIHVubG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxvYWRDaGFuZ2UubmV4dCh0aGlzLmxvYWRpbmcpO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICB9XG5cbiAgY29tcGxldGUoKXtcbiAgICBjb25zb2xlLmxvZygnc2V0IHNlcnZpY2UgY29tcGxldGUnKTtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgIHRoaXMuY29tcGxldGVDaGFuZ2UubmV4dCh0aGlzLmlzQ29tcGxldGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgTG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9sb2FkaW5nLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2ctbG9hZGluZy1wcm9ncmVzc2JhcicsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgW0Bwcm9ncmVzc0FuaW1dICpuZ0lmPVwiKCFnbG9iYWwgJiYgbG9hZGluZykgfHwgKGdsb2JhbCAmJiBsb2FkaW5nU2VydmljZS5sb2FkaW5nKVwiIGNsYXNzPVwic2xpZGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCIhaXNDb21wbGV0ZVwiIGNsYXNzPVwic3VibGluZSBpbmNcIj48L2Rpdj5cbiAgPGRpdiAqbmdJZj1cImlzQ29tcGxldGVcIiBbQGZpbGxBbmltXSAoQGZpbGxBbmltLmRvbmUpPVwiZmlsbEFuaW1hdGlvbkNvbXBsZXRlKGlzQ29tcGxldGUpXCIgY2xhc3M9XCJzdWJsaW5lIGZpbGxcIj48L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIiFpc0NvbXBsZXRlXCIgY2xhc3M9XCJzdWJsaW5lIGRlY1wiPjwvZGl2PlxuPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgLnNsaWRlcntwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDo1cHg7b3ZlcmZsb3cteDpoaWRkZW47ei1pbmRleDo1MDAwfS5saW5le3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6LjQ7d2lkdGg6MjQwJTtoZWlnaHQ6NXB4Oy13ZWJraXQtYW5pbWF0aW9uOjUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzcGluO2FuaW1hdGlvbjo1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc3Bpbn0uc3VibGluZXtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6NXB4O2JhY2tncm91bmQ6aW5oZXJpdH0uaW5jey13ZWJraXQtYW5pbWF0aW9uOjEuNnMgaW5maW5pdGUgaW5jcmVhc2UsNS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnNwaW47YW5pbWF0aW9uOjEuNnMgaW5maW5pdGUgaW5jcmVhc2UsNS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnNwaW59LmRlY3std2Via2l0LWFuaW1hdGlvbjoxLjZzIC40cyBpbmZpbml0ZSBkZWNyZWFzZSw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc3BpbjthbmltYXRpb246MS42cyAuNHMgaW5maW5pdGUgZGVjcmVhc2UsNS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnNwaW59LmZpbGx7bGVmdDowO3dpZHRoOjEwMCU7LXdlYmtpdC1hbmltYXRpb246NS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnNwaW47YW5pbWF0aW9uOjUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzcGlufUAtd2Via2l0LWtleWZyYW1lcyBpbmNyZWFzZXtmcm9te2xlZnQ6LTUlO3dpZHRoOjUlfXRve2xlZnQ6MTMwJTt3aWR0aDoxMDAlfX1Aa2V5ZnJhbWVzIGluY3JlYXNle2Zyb217bGVmdDotNSU7d2lkdGg6NSV9dG97bGVmdDoxMzAlO3dpZHRoOjEwMCV9fUAtd2Via2l0LWtleWZyYW1lcyBkZWNyZWFzZXtmcm9te2xlZnQ6LTgwJTt3aWR0aDo4MCV9dG97bGVmdDoxMTAlO3dpZHRoOjEwJX19QGtleWZyYW1lcyBkZWNyZWFzZXtmcm9te2xlZnQ6LTgwJTt3aWR0aDo4MCV9dG97bGVmdDoxMTAlO3dpZHRoOjEwJX19QC13ZWJraXQta2V5ZnJhbWVzIGNvbG9yc3BpbnswJSwxMDAle2JhY2tncm91bmQtY29sb3I6IzQyODVmNH0yNSV7YmFja2dyb3VuZC1jb2xvcjojZGUzZTM1fTUwJXtiYWNrZ3JvdW5kLWNvbG9yOiNmN2MyMjN9NzUle2JhY2tncm91bmQtY29sb3I6IzFiOWE1OX19QGtleWZyYW1lcyBjb2xvcnNwaW57MCUsMTAwJXtiYWNrZ3JvdW5kLWNvbG9yOiM0Mjg1ZjR9MjUle2JhY2tncm91bmQtY29sb3I6I2RlM2UzNX01MCV7YmFja2dyb3VuZC1jb2xvcjojZjdjMjIzfTc1JXtiYWNrZ3JvdW5kLWNvbG9yOiMxYjlhNTl9fWBdLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcigncHJvZ3Jlc3NBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyOTltcyBlYXNlLWluJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgbGVmdDogJy01JScsIHdpZHRoOiAnNSUnIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzg1MG1zIGVhc2Utb3V0Jywgc3R5bGUoeyBsZWZ0OiAnMCUnLCB3aWR0aDogJzEwMCUnIH0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBnbG9iYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBpc0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQE91dHB1dCgpIG9uQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8UHJvZ3Jlc3NCYXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxQcm9ncmVzc0Jhcj4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2JhcicpIGJhcjogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2FkaW5nU2VydmljZTogTG9hZGluZ1NlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2xvYmFsKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmNvbXBsZXRlQ2hhbmdlLnN1YnNjcmliZShpc0NvbXBsZXRlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5nbG9iYWwpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuY29tcGxldGVDaGFuZ2UudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5pc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0IGNvbXBsZXRlJyk7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNDb21wbGV0ZSk7XG4gICAgfVxuXG4gICAgZmlsbEFuaW1hdGlvbkNvbXBsZXRlKGlzQ29tcGxldGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxsIGFuaW1hdGlvbiBjb21wbGV0ZScsIGlzQ29tcGxldGUpO1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmVtaXQoaXNDb21wbGV0ZSk7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UudW5sb2FkKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudW5sb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctZmFiJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aW9uLWZhYiBbQGZhYkFuaW1dIFt2ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiIFtob3Jpem9udGFsXT1cImhvcml6b250YWxcIiBbZWRnZV09XCJlZGdlXCI+XG4gICAgICAgIDxzdmcgKm5nSWY9XCJsb2FkaW5nXCIgI3NwaW5uZXIgY2xhc3M9XCJzcGlubmVyIHJvdGF0ZVwiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPGNpcmNsZSBbQGZpbGxBbmltXT1cImlzQ29tcGxldGUgPyAnZmlsbCcgOiAnc3Bpbm5pbmcnXCIgKEBmaWxsQW5pbS5kb25lKT1cImZpbGxBbmltYXRpb25Eb25lKCRldmVudClcIiBbbmdDbGFzc109XCJ7J3BhdGgnOiAhaXNDb21wbGV0ZX1cIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgY3g9XCIzNlwiIGN5PVwiMzZcIiByPVwiMzJcIj48L2NpcmNsZT5cbiA8L3N2Zz5cbiAgICAgICAgICAgIDxpb24tZmFiLWJ1dHRvbiBbY29sb3JdPVwiZmFiQ29sb3JcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gW0Byb3RhdGVBbmltXT1cImljb25TdGF0ZVwiIChAcm90YXRlQW5pbS5kb25lKT1cImNoYW5nZUljb25BbmRSZXZlYWwoJGV2ZW50LCdtZC1jaGVja21hcmsnKVwiIFtuYW1lXT1cImljb25cIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24tZmFiLWJ1dHRvbj5cblxuICAgICAgICA8L2lvbi1mYWI+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgaW9uLXNwaW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOi04cHg7bGVmdDotOHB4O3dpZHRoOjcycHg7aGVpZ2h0OjcycHh9LnNwaW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NzJweDtoZWlnaHQ6NzJweDtsZWZ0Oi04cHg7dG9wOi04cHh9LnJvdGF0ZXstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGxpbmVhciBpbmZpbml0ZSByb3RhdG9yO2FuaW1hdGlvbjoxLjRzIGxpbmVhciBpbmZpbml0ZSByb3RhdG9yfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdG9yezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfX1Aa2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fS5wYXRoe3N0cm9rZS1kYXNoYXJyYXk6MTg3O3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGRhc2gsNS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnM7YW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc30uZmlsbHtzdHJva2UtZGFzaGFycmF5OjM2MDtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7LXdlYmtpdC1hbmltYXRpb246MS40cyBlYXNlLW91dCBmaWxsO2FuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7c3Ryb2tlOiMxYjlhNTl9QC13ZWJraXQta2V5ZnJhbWVzIGNvbG9yc3swJSwxMDAle3N0cm9rZTojNDI4NWY0fTI1JXtzdHJva2U6I2RlM2UzNX01MCV7c3Ryb2tlOiNmN2MyMjN9NzUle3N0cm9rZTojMWI5YTU5fX1Aa2V5ZnJhbWVzIGNvbG9yc3swJSwxMDAle3N0cm9rZTojNDI4NWY0fTI1JXtzdHJva2U6I2RlM2UzNX01MCV7c3Ryb2tlOiNmN2MyMjN9NzUle3N0cm9rZTojMWI5YTU5fX1ALXdlYmtpdC1rZXlmcmFtZXMgZGFzaHswJXtzdHJva2UtZGFzaG9mZnNldDoxODd9NTAle3N0cm9rZS1kYXNob2Zmc2V0OjQ2Ljc1Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjE4Nzstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZGFzaHswJXtzdHJva2UtZGFzaG9mZnNldDoxODd9NTAle3N0cm9rZS1kYXNob2Zmc2V0OjQ2Ljc1Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjE4Nzstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBmaWxsezAle3N0cm9rZS1kYXNob2Zmc2V0OjM2MH04MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTgwOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpfX1Aa2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fWBdLFxuICAgIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdmYWJBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSlcbiAgICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdzcGlubmVyQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSkpXG4gICAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbignbm9ybWFsID0+IHJvdGF0ZScsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJ3JvdGF0ZSA9PiBub3JtYWwnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLWluJylcbiAgICAgICAgXSksXG4gICAgICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZyknIH0pKSxcbiAgICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDBkZWcpJyB9KSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMTgwLFxuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyNERTNFMzUnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzE0MDBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICBzdGF0ZSgnZmlsbCcsIHN0eWxlKHtcbiAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMzE1LFxuICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogMCxcbiAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICdzdHJva2UnOiAnIzFCOUE1OScsXG4gICAgICAgICAgICAnb3BhY2l0eSc6IDBcbiAgICAgICAgfSlcbiAgICAgICAgKV1cbiAgICApXSxcblxufSlcbmV4cG9ydCBjbGFzcyBGYWJTcGlubmVyIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBzcGluQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBmYWJDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZlcnRpY2FsOiBzdHJpbmcgPSBcImJvdHRvbVwiO1xuICAgIEBJbnB1dCgpIGhvcml6b250YWw6IHN0cmluZyA9IFwiZW5kXCI7XG4gICAgQElucHV0KCkgZWRnZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNoZWNrbWFyazogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgaWNvblN0YXRlOiBzdHJpbmcgPSAnbm9ybWFsJztcblxuICAgIEBWaWV3Q2hpbGQoJ3NwaW5uZXInKSBzcGlubmVyOiBFbGVtZW50UmVmO1xuXG4gICAgQE91dHB1dCgpIG9uQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxGYWJTcGlubmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmFiU3Bpbm5lcj4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8RmFiU3Bpbm5lcj4gPSBuZXcgRXZlbnRFbWl0dGVyPEZhYlNwaW5uZXI+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICB0b2dnbGVTcGlubmVyKCkge1xuICAgICAgICBpZih0aGlzLmljb24gIT0gJ21kLWNoZWNrbWFyaycpe1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgdW5sb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYodGhpcy5sb2FkaW5nKXtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbGxBbmltYXRpb25Eb25lKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT0gJ3NwaW5uaW5nJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2ttYXJrKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbGwgYW5pbWF0aW9uIGRvbmUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3RhdGUgPSBcInJvdGF0ZVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LCBpY29uKTtcbiAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PSAnbm9ybWFsJykge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICAgICAgICAgIHRoaXMuaWNvblN0YXRlID0gXCJub3JtYWxcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09IFwicm90YXRlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3N0Q29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMudW5sb2FkKCk7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUuZW1pdCh0aGlzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2ctbG9hZGluZy1idXR0b24nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGdnLWxvYWRpbmctcHJvZ3Jlc3NiYXIgKG9uQ29tcGxldGUpPVwib25Db21wbGV0ZSgkZXZlbnQpXCIgI3Byb2dyZXNzIFtnbG9iYWxdPVwiZmFsc2VcIj48L2dnLWxvYWRpbmctcHJvZ3Jlc3NiYXI+XG4gICAgPGlvbi1idXR0b24gW2V4cGFuZF09XCJleHBhbmRcIiBbY29sb3JdPVwiY29sb3JcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvaW9uLWJ1dHRvbj5cbiAgICBgLFxuICAgIHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjowIDIwcHg7d2lkdGg6Y2FsYygxMDAlIC0gNDBweCl9YF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRnVsbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAVmlld0NoaWxkKCdwcm9ncmVzcycpIHByb2dyZXNzOiBQcm9ncmVzc0JhcjtcbiAgICBASW5wdXQoKSBjb2xvcjogc3RyaW5nID0gJ2xpZ2h0JztcbiAgICBASW5wdXQoKSBleHBhbmQ6IHN0cmluZyA9ICdibG9jayc7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaDogRXZlbnRFbWl0dGVyPEJ1dHRvbkZ1bGw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2hDb21wbGV0ZTogRXZlbnRFbWl0dGVyPEJ1dHRvbkZ1bGw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICB0b2dnbGVTcGlubmVyKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnRvZ2dsZVNwaW5uZXIoKTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2dyZXNzLmxvYWQoKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnVubG9hZCgpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlKGlzQ29tcGxldGU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uIGNvbXBsZXRlJywgaXNDb21wbGV0ZSk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaENvbXBsZXRlLmVtaXQodGhpcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gJy4uL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctaXRlbScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aW9uLWl0ZW0gW25nQ2xhc3NdPVwieydsb2FkaW5nJzogbG9hZGluZ31cIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvaW9uLWl0ZW0+XG4gIDxnZy1sb2FkaW5nLXByb2dyZXNzYmFyIChvbkNvbXBsZXRlKT1cIm9uQ29tcGxldGUoJGV2ZW50KVwiICNwcm9ncmVzcyBbZ2xvYmFsXT1cImZhbHNlXCI+PC9nZy1sb2FkaW5nLXByb2dyZXNzYmFyPlxuXG4gICAgYCxcbiAgICBzdHlsZXM6IFtgOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazttYXJnaW46MDt3aWR0aDpjYWxjKDEwMCUpfWlvbi1pdGVte2JhY2tncm91bmQ6I2ZmZn0ubG9hZGluZ3ttYXJnaW46NHB4O3dpZHRoOmNhbGMoMTAwJSAtIDhweCk7dHJhbnNpdGlvbjouMnM7Ym9yZGVyLXJhZGl1czo4cHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtib3gtc2hhZG93OjAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMTIpfWBdLFxuXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Qcm9ncmVzcyBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAVmlld0NoaWxkKCdwcm9ncmVzcycpIHByb2dyZXNzOiBQcm9ncmVzc0JhcjtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxJdGVtUHJvZ3Jlc3M+ID0gbmV3IEV2ZW50RW1pdHRlcjxJdGVtUHJvZ3Jlc3M+KCk7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaDogRXZlbnRFbWl0dGVyPEl0ZW1Qcm9ncmVzcz4gPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1Qcm9ncmVzcz4oKTtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICAgICAgdGhpcy5wcm9ncmVzcy50b2dnbGVTcGlubmVyKCk7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcy5sb2FkKCk7XG4gICAgfVxuXG4gICAgdW5sb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcy51bmxvYWQoKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db21wbGV0ZShpc0NvbXBsZXRlOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbiBjb21wbGV0ZScsIGlzQ29tcGxldGUpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2hDb21wbGV0ZS5lbWl0KHRoaXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZy1sb2FkaW5nLWNvbnRlbnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImdnLWhpbnQtd3JhcHBlclwiPlxuICAgIDxpb24tY2hpcCAqbmdJZj1cImhpbnRWaXNpYmxlXCIgKGNsaWNrKT1cIm9uSGludENsaWNrZWQoKVwiIFtAaGludEFuaW1dIChAaGludEFuaW0uZG9uZSk9XCJwb3N0SGludCgkZXZlbnQpXCIgI2hpbnQgY2xhc3M9XCJnZy1oaW50LWNvbnRhaW5lclwiPlxuICA8aW9uLWljb24gY2xhc3M9XCJpY29uXCIgbmFtZT1cIm1kLWFycm93LXVwXCI+PC9pb24taWNvbj5cbiAgPGlvbi1sYWJlbCBjbGFzcz1cInRleHRcIj57e2hpbnRUZXh0fX08L2lvbi1sYWJlbD5cbjwvaW9uLWNoaXA+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBbQHNwaW5uZXJBbmltXSAoQHNwaW5uZXJBbmltLmRvbmUpPVwib25TcGlubmVySGlkZGVuKCRldmVudClcIiAqbmdJZj1cInNwaW5uZXJWaXNpYmxlXCIgI3NwaW5uZXIgY2xhc3M9XCJnZy1zcGlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwic3Bpbm5lciByb3RhdGVcIiB2aWV3Qm94PVwiMCAwIDcyIDcyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPGNpcmNsZSBbQGZpbGxBbmltXT1cImlzQ29tcGxldGUgPyAnZmlsbCcgOiAnc3Bpbm5pbmcnXCIgKEBmaWxsQW5pbS5kb25lKT1cImZpbGxBbmltYXRpb25Eb25lKCRldmVudClcIiBbbmdDbGFzc109XCJ7J3BhdGgnOiAhaXNDb21wbGV0ZX1cIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgY3g9XCIzNlwiIGN5PVwiMzZcIiByPVwiMzJcIj48L2NpcmNsZT5cbiAgICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gICAgICAgIDxpb24tcmVmcmVzaGVyIChpb25TdGFydCk9XCJvblN0YXJ0KClcIiBbc25hcGJhY2tEdXJhdGlvbl09XCIyODBcIiBbY2xvc2VEdXJhdGlvbl09XCIyODBcIiBbcHVsbE1heF09XCIxNjhcIiBbcHVsbE1pbl09XCIxMTJcIiBbZGlzYWJsZWRdPVwiZmFsc2VcIiBzbG90PVwiZml4ZWRcIiAoaW9uUmVmcmVzaCk9XCJkb1JlZnJlc2goJGV2ZW50KVwiIChpb25QdWxsKT1cIm9uUHVsbCgkZXZlbnQpXCI+XG4gICAgICAgIDwvaW9uLXJlZnJlc2hlcj5cbiAgICBgLFxuICAgIHN0eWxlczogW2Auc3Bpbm5lcntwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2xlZnQ6OHB4O3RvcDo4cHh9LnJvdGF0ZXstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGxpbmVhciBpbmZpbml0ZSByb3RhdG9yO2FuaW1hdGlvbjoxLjRzIGxpbmVhciBpbmZpbml0ZSByb3RhdG9yfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdG9yezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfX1Aa2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fS5wYXRoe3N0cm9rZS1kYXNoYXJyYXk6MTg3O3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGRhc2gsNS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnM7YW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc30uZmlsbHtzdHJva2UtZGFzaGFycmF5OjM2MDtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7LXdlYmtpdC1hbmltYXRpb246MS40cyBlYXNlLW91dCBmaWxsO2FuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7c3Ryb2tlOiMxYjlhNTl9QC13ZWJraXQta2V5ZnJhbWVzIGNvbG9yc3swJSwxMDAle3N0cm9rZTojNDI4NWY0fTI1JXtzdHJva2U6I2RlM2UzNX01MCV7c3Ryb2tlOiNmN2MyMjN9NzUle3N0cm9rZTojMWI5YTU5fX1Aa2V5ZnJhbWVzIGNvbG9yc3swJSwxMDAle3N0cm9rZTojNDI4NWY0fTI1JXtzdHJva2U6I2RlM2UzNX01MCV7c3Ryb2tlOiNmN2MyMjN9NzUle3N0cm9rZTojMWI5YTU5fX1ALXdlYmtpdC1rZXlmcmFtZXMgZGFzaHswJXtzdHJva2UtZGFzaG9mZnNldDoxODd9NTAle3N0cm9rZS1kYXNob2Zmc2V0OjQ2Ljc1Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjE4Nzstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZGFzaHswJXtzdHJva2UtZGFzaG9mZnNldDoxODd9NTAle3N0cm9rZS1kYXNob2Zmc2V0OjQ2Ljc1Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjE4Nzstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBmaWxsezAle3N0cm9rZS1kYXNob2Zmc2V0OjM2MH04MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTgwOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpfX1Aa2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fS5nZy1zcGlubmVyLWNvbnRhaW5lcnt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6Y2FsYyg1MCUgLSAyMHB4KTt0b3A6LTU2cHg7ei1pbmRleDo5O2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtib3JkZXItcmFkaXVzOjUwJTtib3gtc2hhZG93OjAgNHB4IDZweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDRweCA1cHggcmdiYSgwLDAsMCwuMSl9LmdnLWhpbnQtY29udGFpbmVye2hlaWdodDo0MHB4O3BhZGRpbmctbGVmdDo4cHg7cGFkZGluZy1yaWdodDo4cHg7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItbGlnaHQpO2JvcmRlci1yYWRpdXM6NDBweDtib3gtc2hhZG93OjAgNHB4IDZweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDRweCA1cHggcmdiYSgwLDAsMCwuMSk7bWFyZ2luOjB9Lmljb257aGVpZ2h0OjIwcHg7d2lkdGg6MjBweDtiYWNrZ3JvdW5kOjAgMDtjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFyayl9LnRleHR7Zm9udC1zaXplOjFlbTtjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFyayl9LmdnLWhpbnQtd3JhcHBlcnt3aWR0aDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMTJweDt6LWluZGV4Ojg7dGV4dC1hbGlnbjpjZW50ZXJ9YF0sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gZmlsbCcsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMTgwLFxuICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiA5MCxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyNERTNFMzUnXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBzdGF0ZSgnZmlsbCcsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDMxNSxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyMxQjlBNTknLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICldXG4gICAgICAgICksXG4gICAgICAgIHRyaWdnZXIoJ3NwaW5uZXJBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKCdoaW50QW5pbScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTgwcHgpJyB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcxNTBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9KSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgd2lkdGg6ICcxMTJweCcgfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IHdpZHRoOiAnNDBweCcgfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgICApLFxuICAgIF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFJlZnJlc2ggaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQE91dHB1dCgpIG9uUHJvZ3Jlc3NDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8Q29udGVudFJlZnJlc2g+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBWaWV3Q2hpbGQoJ3NwaW5uZXInKSBzcGlubmVyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50OiBFbGVtZW50UmVmO1xuICAgIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICBwdWxsaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcmVmcmVzaGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNwaW5uZXJWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICB0cmFuc2xhdGVZOiBudW1iZXIgPSAwO1xuICAgIGhpbnRWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgaGludFRleHQ6IHN0cmluZyA9ICduZXcgcG9zdHMnO1xuXG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICd0b3VjaGVuZCcpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvdWNoZW5kJywgcmVzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnB1bGxpbmcgJiYgIXRoaXMucmVmcmVzaGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUHJvZ3Jlc3MoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgc3BpblJlZnJlc2hlcigpIHtcbiAgICAgICAgdGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKDE2OHB4KWApO1xuICAgICAgICB0aGlzLnJlZnJlc2hpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnB1bGxpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkb1JlZnJlc2goZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zcGluUmVmcmVzaGVyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoIGhlcmUnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY29tcGxldGUoKTtcbiAgICAgICAgfSwgMTQwKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICB9XG5cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlUmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25QdWxsKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucHVsbGluZyA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBldmVudC50YXJnZXQuZ2V0UHJvZ3Jlc3MoKTtcbiAgICAgICAgaWYgKHByb2dyZXNzIDw9IDEpIHtcbiAgICAgICAgICAgIHRoaXMub25Qcm9ncmVzc0NoYW5nZWQuZW1pdChwcm9ncmVzcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVByb2dyZXNzKHByb2dyZXNzKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdGFydCgpIHtcbiAgICAgICAgLy8gdGhpcy5jaGFuZ2VQcm9ncmVzcygwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlUHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVkgPSAxMTIgKiBwcm9ncmVzcztcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlWSA9IHRoaXMudHJhbnNsYXRlWTtcbiAgICAgICAgY29uc29sZS5sb2coYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfXB4KWApO1xuICAgICAgICAvLyB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3Bpbm5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfSlgKVxuICAgICAgICB0aGlzLnNwaW5uZXIubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfXB4KWApO1xuICAgICAgICAvLyB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgZmlsbEFuaW1hdGlvbkRvbmUoZXZlbnQpIHtcblxuICAgICAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2ZpbGwnICYmIGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3NwaW5uaW5nJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbGxBbmltIGNvbXBsZXRlJywgZXZlbnQpO1xuXG4gICAgICAgICAgICB0aGlzLnNwaW5uZXJWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3Bpbm5lckhpZGRlbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlICE9PSAndm9pZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoIGNvbXBsZXRlJywgZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5zcGlubmVyVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNob3dIaW50KCkge1xuICAgICAgICB0aGlzLmhpbnRWaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkhpbnRDbGlja2VkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb24gaGludCBjbGlja2VkJyk7XG4gICAgICAgIHRoaXMuaGludFZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwb3N0SGludChldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgIGlmICghZXZlbnQuZnJvbVN0YXRlICYmIGV2ZW50LnRvU3RhdGUgPT0gJ3ZvaWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgICAgIHRoaXMuc3BpblJlZnJlc2hlcigpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgc3RhdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZy1sb2FkaW5nLWluZmluaXRlLXNjcm9sbCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZ2ctcmVmcmVzaGVyXCI+XG5cbiAgICA8ZGl2ICNzcGlubmVyIGNsYXNzPVwiZ2ctc3Bpbm5lci1jb250YWluZXJcIj5cbiAgICA8c3ZnIGNsYXNzPVwic3Bpbm5lciByb3RhdGVcIiB2aWV3Qm94PVwiMCAwIDcyIDcyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxjaXJjbGUgW0BmaWxsQW5pbV09XCJpc0NvbXBsZXRlID8gJ2ZpbGwnIDogJ3NwaW5uaW5nJ1wiIChAZmlsbEFuaW0uZG9uZSk9XCJmaWxsQW5pbWF0aW9uRG9uZSgkZXZlbnQpXCIgW25nQ2xhc3NdPVwieydwYXRoJzogIWlzQ29tcGxldGV9XCIgZmlsbD1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCI0XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIGN4PVwiMzZcIiBjeT1cIjM2XCIgcj1cIjMyXCI+PC9jaXJjbGU+XG4gPC9zdmc+XG4gICAgPC9kaXY+XG5cbiAgICBcbiAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogW2Bpb24tc3Bpbm5lcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LThweDtsZWZ0Oi04cHg7d2lkdGg6NzJweDtoZWlnaHQ6NzJweH0uc3Bpbm5lcntwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2xlZnQ6OHB4O3RvcDo4cHh9LnJvdGF0ZXstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGxpbmVhciBpbmZpbml0ZSByb3RhdG9yO2FuaW1hdGlvbjoxLjRzIGxpbmVhciBpbmZpbml0ZSByb3RhdG9yfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdG9yezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfX1Aa2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fS5wYXRoe3N0cm9rZS1kYXNoYXJyYXk6MTg3O3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGRhc2gsNS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnM7YW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc30uZmlsbHtzdHJva2UtZGFzaGFycmF5OjM2MDtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7LXdlYmtpdC1hbmltYXRpb246MS40cyBlYXNlLW91dCBmaWxsO2FuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7c3Ryb2tlOiMxYjlhNTl9QC13ZWJraXQta2V5ZnJhbWVzIGNvbG9yc3swJSwxMDAle3N0cm9rZTojNDI4NWY0fTI1JXtzdHJva2U6I2RlM2UzNX01MCV7c3Ryb2tlOiNmN2MyMjN9NzUle3N0cm9rZTojMWI5YTU5fX1Aa2V5ZnJhbWVzIGNvbG9yc3swJSwxMDAle3N0cm9rZTojNDI4NWY0fTI1JXtzdHJva2U6I2RlM2UzNX01MCV7c3Ryb2tlOiNmN2MyMjN9NzUle3N0cm9rZTojMWI5YTU5fX1ALXdlYmtpdC1rZXlmcmFtZXMgZGFzaHswJXtzdHJva2UtZGFzaG9mZnNldDoxODd9NTAle3N0cm9rZS1kYXNob2Zmc2V0OjQ2Ljc1Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjE4Nzstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZGFzaHswJXtzdHJva2UtZGFzaG9mZnNldDoxODd9NTAle3N0cm9rZS1kYXNob2Zmc2V0OjQ2Ljc1Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjE4Nzstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBmaWxsezAle3N0cm9rZS1kYXNob2Zmc2V0OjM2MH04MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTgwOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpfX1Aa2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fS5nZy1yZWZyZXNoZXJ7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDoxMTJweDtwb3NpdGlvbjpyZWxhdGl2ZX0uZ2ctc3Bpbm5lci1jb250YWluZXJ7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OmNhbGMoNTAlIC0gMjBweCk7dG9wOjE2cHg7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItbGlnaHQpO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCA0cHggNnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDVweCByZ2JhKDAsMCwwLC4xKX1gXSxcbiAgICBhbmltYXRpb25zOiBbdHJpZ2dlcignZmFiQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSksXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSkpXG4gICAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignc3Bpbm5lckFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pLFxuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pKVxuICAgICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3JvdGF0ZUFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiByb3RhdGUnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCdyb3RhdGUgPT4gbm9ybWFsJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicpXG4gICAgICAgIF0pLFxuICAgICAgICBzdGF0ZSgncm90YXRlJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3JvdGF0ZVooNDVkZWcpJyB9KSksXG4gICAgICAgIHN0YXRlKCdub3JtYWwnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAncm90YXRlWigwZGVnKScgfSkpXG4gICAgXSksXG4gICAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gZmlsbCcsIFtcbiAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDE4MCxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiA5MCxcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgJ3N0cm9rZSc6ICcjREUzRTM1J1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmltYXRlKCc4MDBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICBzdGF0ZSgnZmlsbCcsIHN0eWxlKHtcbiAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMzE1LFxuICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogMCxcbiAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICdzdHJva2UnOiAnIzFCOUE1OScsXG4gICAgICAgICAgICAnb3BhY2l0eSc6IDBcbiAgICAgICAgfSlcbiAgICAgICAgKV1cbiAgICApXSxcblxufSlcbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbENvbnRlbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNwaW5Db2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZhYkNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdmVydGljYWw6IHN0cmluZyA9IFwiYm90dG9tXCI7XG4gICAgQElucHV0KCkgaG9yaXpvbnRhbDogc3RyaW5nID0gXCJlbmRcIjtcbiAgICBASW5wdXQoKSBlZGdlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgY2hlY2ttYXJrOiBib29sZWFuID0gZmFsc2U7XG4gICAgZHJhZ1Byb2dyZXNzOiBudW1iZXIgPSAwO1xuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgaWNvblN0YXRlOiBzdHJpbmcgPSAnbm9ybWFsJztcblxuICAgIEBWaWV3Q2hpbGQoJ3NwaW5uZXInKSBzcGlubmVyOiBFbGVtZW50UmVmO1xuXG4gICAgQE91dHB1dCgpIG9uQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxJbmZpbml0ZVNjcm9sbENvbnRlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJbmZpbml0ZVNjcm9sbENvbnRlbnQ+KCk7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaDogRXZlbnRFbWl0dGVyPEluZmluaXRlU2Nyb2xsQ29udGVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEluZmluaXRlU2Nyb2xsQ29udGVudD4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgY2hhbmdlOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmljb24gIT0gJ21kLWNoZWNrbWFyaycpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KCk7XG4gICAgfVxuXG4gICAgdW5sb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlsbEFuaW1hdGlvbkRvbmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PSAnc3Bpbm5pbmcnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja21hcmspIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsbCBhbmltYXRpb24gZG9uZScsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TdGF0ZSA9IFwicm90YXRlXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VJY29uQW5kUmV2ZWFsKGV2ZW50LCBpY29uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQsIGljb24pO1xuICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09ICdub3JtYWwnKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgICAgICAgdGhpcy5pY29uU3RhdGUgPSBcIm5vcm1hbFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gXCJyb3RhdGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy51bmxvYWQoKTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Db21wbGV0ZS5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZHJhZ1Byb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSBNYXRoLmZsb29yKC04MCArIDgwICogcHJvZ3Jlc3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCk7XG4gICAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9KWApXG4gICAgICAgIHRoaXMuc3Bpbm5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYClcbiAgICAgICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFiU3Bpbm5lciB9IGZyb20gJy4vZmFiL2ZhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uRnVsbCB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbVByb2dyZXNzIH0gZnJvbSAnLi9pdGVtL2l0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRlbnRSZWZyZXNoIH0gZnJvbSAnLi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEluZmluaXRlU2Nyb2xsQ29udGVudCB9IGZyb20gJy4vaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQvaW5maW5pdGUtc2Nyb2xsdC1jb250ZW50LmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIElvbmljTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGYWJTcGlubmVyLCBQcm9ncmVzc0JhciwgQnV0dG9uRnVsbCxJdGVtUHJvZ3Jlc3MsQ29udGVudFJlZnJlc2gsSW5maW5pdGVTY3JvbGxDb250ZW50XSxcbiAgZXhwb3J0czogW0ZhYlNwaW5uZXIsIFByb2dyZXNzQmFyLCBCdXR0b25GdWxsLCBJdGVtUHJvZ3Jlc3MsQ29udGVudFJlZnJlc2gsSW5maW5pdGVTY3JvbGxDb250ZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJCZWhhdmlvclN1YmplY3QiLCJJbmplY3RhYmxlIiwiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwidHJpZ2dlciIsInRyYW5zaXRpb24iLCJzdHlsZSIsImFuaW1hdGUiLCJJbnB1dCIsIk91dHB1dCIsIlZpZXdDaGlsZCIsInN0YXRlIiwiZnJvbUV2ZW50IiwiUmVuZGVyZXIyIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJOZ01vZHVsZSIsIklvbmljTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFlRTsyQkFOMEIsS0FBSzs4QkFDRixLQUFLOzhCQUNZLElBQUlBLG9CQUFlLENBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQztrQ0FDdEMsSUFBSUEsb0JBQWUsQ0FBVSxJQUFJLENBQUMsVUFBVSxDQUFDO1NBRzlFOzs7O1FBRWpCLDZCQUFJOzs7WUFBSjtnQkFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BDOzs7O1FBRUQsK0JBQU07OztZQUFOO2dCQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ3pCOzs7O1FBRUQsc0NBQWE7OztZQUFiO2dCQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzlCOzs7O1FBRUQsaUNBQVE7OztZQUFSO2dCQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMzQzs7b0JBaENGQyxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozs2QkFORDs7Ozs7OztBQ0FBO1FBNENJLHFCQUFtQixjQUE4QjtZQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7MkJBUjlCLEtBQUs7MEJBQ0csS0FBSzs4QkFDRCxLQUFLOzhCQUNVLElBQUlDLGVBQVksRUFBVzs2QkFDeEIsSUFBSUEsZUFBWSxFQUFlO1NBSy9FOzs7O1FBRUQsOEJBQVE7OztZQUFSO2dCQUFBLGlCQVFDO2dCQVBHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDYixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQSxVQUFVO3dCQUNuRCxJQUFJLFVBQVUsRUFBRTs0QkFDWixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7eUJBQ25CO3FCQUNKLENBQUMsQ0FBQTtpQkFDTDthQUNKOzs7O1FBRUQsaUNBQVc7OztZQUFYO2dCQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDYixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDcEQ7YUFDSjs7OztRQUVELG1DQUFhOzs7WUFBYjtnQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNoQzs7OztRQUVELDBCQUFJOzs7WUFBSjtnQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDN0I7Ozs7UUFFRCw0QkFBTTs7O1lBQU47Z0JBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7aUJBQzNCO2FBQ0o7Ozs7UUFFRCw4QkFBUTs7O1lBQVI7Z0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ2hDOzs7OztRQUVELDJDQUFxQjs7OztZQUFyQixVQUFzQixVQUFtQjtnQkFDckMsSUFBSSxVQUFVLEVBQUU7b0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7d0JBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztxQkFDaEM7eUJBQU07d0JBQ0gsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3FCQUNqQjtpQkFDSjthQUNKOztvQkEzRkpDLFlBQVMsU0FBQzt3QkFDUCxRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUsK1lBT1Q7d0JBRUQsVUFBVSxFQUFFOzRCQUNSQyxrQkFBTyxDQUFDLGNBQWMsRUFBRTtnQ0FDcEJDLHFCQUFVLENBQUMsV0FBVyxFQUFFO29DQUNwQkMsZ0JBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztvQ0FDeEJDLGtCQUFPLENBQUMsZ0JBQWdCLENBQUM7aUNBQzVCLENBQUM7Z0NBQ0ZGLHFCQUFVLENBQUMsV0FBVyxFQUFFO29DQUNwQkUsa0JBQU8sQ0FBQyxlQUFlLEVBQUVELGdCQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQ0FDckQsQ0FBQzs2QkFDTCxDQUFDOzRCQUNGRixrQkFBTyxDQUFDLFVBQVUsRUFBRTtnQ0FDaEJDLHFCQUFVLENBQUMsV0FBVyxFQUFFO29DQUNwQkMsZ0JBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO29DQUNuQ0Msa0JBQU8sQ0FBQyxnQkFBZ0IsRUFBRUQsZ0JBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7aUNBQ2xFLENBQUM7NkJBQ0wsQ0FBQzt5QkFDTDtpQ0FqQlEsK3hDQUEreEM7cUJBa0IzeUM7Ozs7O3dCQS9CUSxjQUFjOzs7OzZCQW1DbEJFLFFBQUs7aUNBQ0xBLFFBQUs7aUNBQ0xDLFNBQU07Z0NBQ05BLFNBQU07MEJBRU5DLFlBQVMsU0FBQyxLQUFLOzswQkExQ3BCOzs7Ozs7O0FDQUE7UUFzRkk7NEJBYjRCLFFBQVE7OEJBQ04sS0FBSzt3QkFDVixLQUFLOzZCQUNBLEtBQUs7MkJBQ2hCLEtBQUs7OEJBQ0YsS0FBSzs2QkFDUCxRQUFROzhCQUlxQixJQUFJUixlQUFZLEVBQWM7NkJBQy9CLElBQUlBLGVBQVksRUFBYztTQUc3RTs7OztRQUVELDZCQUFROzs7WUFBUjthQUNDOzs7O1FBRUQsa0NBQWE7OztZQUFiO2dCQUNJLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxjQUFjLEVBQUM7b0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNoQzthQUNKOzs7O1FBRUQseUJBQUk7OztZQUFKO2dCQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3Qjs7OztRQUVELDJCQUFNOzs7WUFBTjtnQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN4Qjs7OztRQUVELDZCQUFROzs7WUFBUjtnQkFDSSxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQUM7b0JBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7aUJBRTFCO2FBQ0o7Ozs7O1FBRUQsc0NBQWlCOzs7O1lBQWpCLFVBQWtCLEtBQUs7Z0JBQ25CLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxVQUFVLEVBQUU7b0JBQy9CLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7cUJBQzdCO3lCQUFNO3dCQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztxQkFDdkI7aUJBQ0o7YUFDSjs7Ozs7O1FBRUQsd0NBQW1COzs7OztZQUFuQixVQUFvQixLQUFLLEVBQUUsSUFBWTtnQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxRQUFRLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztpQkFDN0I7cUJBQU07b0JBQ0gsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTt3QkFDOUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3FCQUN2QjtpQkFFSjthQUNKOzs7O1FBRUQsaUNBQVk7OztZQUFaO2dCQUNJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUI7O29CQXpJSkMsWUFBUyxTQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSxndUJBVVQ7d0JBRUQsVUFBVSxFQUFFLENBQUNDLGtCQUFPLENBQUMsU0FBUyxFQUFFO2dDQUM1QkMscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCQyxnQkFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDO29DQUNoQ0Msa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQztpQ0FDNUIsQ0FBQztnQ0FDRkYscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCRSxrQkFBTyxDQUFDLGVBQWUsRUFBRUQsZ0JBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO2lDQUM3RCxDQUFDOzZCQUNMLENBQUM7NEJBQ0ZGLGtCQUFPLENBQUMsYUFBYSxFQUFFO2dDQUNuQkMscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCQyxnQkFBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO29DQUN2QkMsa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQztpQ0FDNUIsQ0FBQztnQ0FDRkYscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCRSxrQkFBTyxDQUFDLGVBQWUsRUFBRUQsZ0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2lDQUNwRCxDQUFDOzZCQUNMLENBQUM7NEJBQ0ZGLGtCQUFPLENBQUMsWUFBWSxFQUFFO2dDQUNsQkMscUJBQVUsQ0FBQyxrQkFBa0IsRUFBRTtvQ0FDM0JFLGtCQUFPLENBQUMsZ0JBQWdCLENBQUM7aUNBQzVCLENBQUM7Z0NBQ0ZGLHFCQUFVLENBQUMsa0JBQWtCLEVBQUU7b0NBQzNCRSxrQkFBTyxDQUFDLGVBQWUsQ0FBQztpQ0FDM0IsQ0FBQztnQ0FDRkksZ0JBQUssQ0FBQyxRQUFRLEVBQUVMLGdCQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7Z0NBQ3JFSyxnQkFBSyxDQUFDLFFBQVEsRUFBRUwsZ0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7NkJBQ3ZFLENBQUM7NEJBQ0ZGLGtCQUFPLENBQUMsVUFBVSxFQUFFO2dDQUNoQkMscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCQyxnQkFBSyxDQUFDO3dDQUNGLGtCQUFrQixFQUFFLEdBQUc7d0NBQ3ZCLG1CQUFtQixFQUFFLEVBQUU7d0NBQ3ZCLGlCQUFpQixFQUFFLFFBQVE7d0NBQzNCLFFBQVEsRUFBRSxTQUFTO3FDQUN0QixDQUFDO29DQUNGQyxrQkFBTyxDQUFDLGlCQUFpQixDQUFDO2lDQUM3QixDQUFDO2dDQUNGSSxnQkFBSyxDQUFDLE1BQU0sRUFBRUwsZ0JBQUssQ0FBQztvQ0FDaEIsa0JBQWtCLEVBQUUsR0FBRztvQ0FDdkIsbUJBQW1CLEVBQUUsQ0FBQztvQ0FDdEIsaUJBQWlCLEVBQUUsUUFBUTtvQ0FDM0IsUUFBUSxFQUFFLFNBQVM7b0NBQ25CLFNBQVMsRUFBRSxDQUFDO2lDQUNmLENBQUMsQ0FDRDs2QkFBQyxDQUNMLENBQUM7aUNBL0NPLHMrREFBcytEO3FCQWlEbC9EOzs7OzsyQkFHSUUsUUFBSztnQ0FDTEEsUUFBSzsrQkFDTEEsUUFBSzsrQkFDTEEsUUFBSztpQ0FDTEEsUUFBSzsyQkFDTEEsUUFBSztnQ0FDTEEsUUFBSzs4QkFLTEUsWUFBUyxTQUFDLFNBQVM7aUNBRW5CRCxTQUFNO2dDQUNOQSxTQUFNOzt5QkFwRlg7Ozs7Ozs7QUNBQTtRQTBCSTsyQkFUbUIsS0FBSzt5QkFHQyxPQUFPOzBCQUNOLE9BQU87NkJBQ2UsSUFBSVAsZUFBWSxFQUFFO3FDQUNWLElBQUlBLGVBQVksRUFBRTtTQUl6RTs7OztRQUVELDZCQUFROzs7WUFBUjthQUNDOzs7O1FBRUQsa0NBQWE7OztZQUFiO2dCQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3Qjs7OztRQUVELHlCQUFJOzs7WUFBSjtnQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN4Qjs7OztRQUVELDJCQUFNOzs7WUFBTjtnQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUMxQjs7OztRQUVELDZCQUFROzs7WUFBUjtnQkFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDNUI7YUFDSjs7Ozs7UUFFRCwrQkFBVTs7OztZQUFWLFVBQVcsVUFBbUI7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQzs7b0JBdERKQyxZQUFTLFNBQUM7d0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjt3QkFDN0IsUUFBUSxFQUFFLHdPQUtUO2lDQUNRLDhFQUE4RTtxQkFFMUY7Ozs7OytCQUtJTyxZQUFTLFNBQUMsVUFBVTs0QkFDcEJGLFFBQUs7NkJBQ0xBLFFBQUs7Z0NBQ0xDLFNBQU07d0NBQ05BLFNBQU07O3lCQXZCWDs7Ozs7OztBQ0FBO1FBMEJJOzJCQVBtQixLQUFLO3FDQUdrQyxJQUFJUCxlQUFZLEVBQWdCOzZCQUN4QyxJQUFJQSxlQUFZLEVBQWdCO1NBSWpGOzs7O1FBRUQsK0JBQVE7OztZQUFSO2FBQ0M7Ozs7UUFFRCxvQ0FBYTs7O1lBQWI7Z0JBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDakM7Ozs7UUFFRCwyQkFBSTs7O1lBQUo7Z0JBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDeEI7Ozs7UUFFRCw2QkFBTTs7O1lBQU47Z0JBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDMUI7Ozs7UUFFRCwrQkFBUTs7O1lBQVI7Z0JBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQzVCO2FBQ0o7Ozs7O1FBRUQsaUNBQVU7Ozs7WUFBVixVQUFXLFVBQW1CO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckM7O29CQXBESkMsWUFBUyxTQUFDO3dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSxpT0FNVDtpQ0FDUSxxUUFBcVE7cUJBRWpSOzs7OzsrQkFLSU8sWUFBUyxTQUFDLFVBQVU7d0NBQ3BCRCxTQUFNO2dDQUNOQSxTQUFNOzsyQkF2Qlg7Ozs7Ozs7QUNBQTtRQXlGSTtxQ0F4Qm9ELElBQUlQLGVBQVksRUFBRTs2QkFDbEIsSUFBSUEsZUFBWSxFQUFFOzhCQUd6RCxLQUFLOzJCQUNDLEtBQUs7OEJBQ0YsS0FBSztrQ0FDRCxJQUFJOzhCQUNULENBQUM7K0JBQ0MsS0FBSzs0QkFDQSxXQUFXO1NBZXRDOzs7O1FBWkQsaUNBQVE7OztZQUFSO2dCQUFBLGlCQVNDO2dCQVBHVSxjQUFTLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7b0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUM3QixJQUFJLEtBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFO3dCQUNsQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUMxQjtpQkFDSixDQUFDLENBQUM7YUFFTjs7OztRQUtELHNDQUFhOzs7WUFBYjtnQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO2dCQUMvRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDeEI7Ozs7O1FBRUQsa0NBQVM7Ozs7WUFBVCxVQUFVLEtBQUs7Z0JBQ1gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM1QixVQUFVLENBQUM7b0JBQ1AsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDM0IsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDUixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFFbEI7Ozs7UUFFRCxnQ0FBTzs7O1lBQVA7Z0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDN0I7Ozs7UUFFRCx3Q0FBZTs7O1lBQWY7Z0JBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQzFCOzs7OztRQUVELCtCQUFNOzs7O1lBQU4sVUFBTyxLQUFLO2dCQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOztnQkFDbkIsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDNUMsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO29CQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBRWpDO2FBQ0o7Ozs7UUFFRCxnQ0FBTzs7O1lBQVA7O2FBRUM7Ozs7O1FBRU0sdUNBQWM7Ozs7c0JBQUMsUUFBZ0I7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQzs7Z0JBQ2pDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWMsVUFBVSxRQUFLLENBQUMsQ0FBQzs7Z0JBRTNDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLGdCQUFjLFVBQVUsUUFBSyxDQUFDLENBQUM7Ozs7Ozs7UUFJN0YsMENBQWlCOzs7O1lBQWpCLFVBQWtCLEtBQUs7Z0JBRW5CLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxNQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxVQUFVLEVBQUU7b0JBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBRXhDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO29CQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztpQkFDM0I7YUFDSjs7Ozs7UUFFRCx3Q0FBZTs7OztZQUFmLFVBQWdCLEtBQUs7Z0JBQ2pCLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7b0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2lCQUM5QjthQUVKOzs7O1FBRUQsaUNBQVE7OztZQUFSO2dCQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQzNCOzs7O1FBRUQsc0NBQWE7OztZQUFiO2dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7YUFDNUI7Ozs7O1FBRUQsaUNBQVE7Ozs7WUFBUixVQUFTLEtBQUs7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxNQUFNLEVBQUU7b0JBQzdDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDZixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBRXhCO2FBQ0o7O29CQXpLSlQsWUFBUyxTQUFDO3dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFFBQVEsRUFBRSxnbUNBZVQ7d0JBRUQsVUFBVSxFQUFFOzRCQUNSQyxrQkFBTyxDQUFDLFVBQVUsRUFBRTtnQ0FDaEJDLHFCQUFVLENBQUMsV0FBVyxFQUFFO29DQUNwQkMsZ0JBQUssQ0FBQzt3Q0FDRixrQkFBa0IsRUFBRSxHQUFHO3dDQUN2QixtQkFBbUIsRUFBRSxFQUFFO3dDQUN2QixpQkFBaUIsRUFBRSxRQUFRO3dDQUMzQixRQUFRLEVBQUUsU0FBUztxQ0FDdEIsQ0FBQztvQ0FDRkMsa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQztpQ0FDNUIsQ0FBQztnQ0FDRkksZ0JBQUssQ0FBQyxNQUFNLEVBQUVMLGdCQUFLLENBQUM7b0NBQ2hCLGtCQUFrQixFQUFFLEdBQUc7b0NBQ3ZCLG1CQUFtQixFQUFFLENBQUM7b0NBQ3RCLGlCQUFpQixFQUFFLFFBQVE7b0NBQzNCLFFBQVEsRUFBRSxTQUFTO2lDQUN0QixDQUFDLENBQ0Q7NkJBQUMsQ0FDTDs0QkFDREYsa0JBQU8sQ0FBQyxhQUFhLEVBQUU7Z0NBQ25CQyxxQkFBVSxDQUFDLFdBQVcsRUFBRTtvQ0FDcEJFLGtCQUFPLENBQUMsZ0JBQWdCLEVBQUVELGdCQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQ0FDbkQsQ0FBQzs2QkFDTCxDQUFDOzRCQUNGRixrQkFBTyxDQUFDLFVBQVUsRUFBRTtnQ0FDaEJDLHFCQUFVLENBQUMsV0FBVyxFQUFFO29DQUNwQkMsZ0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLENBQUM7b0NBQ3JEQyxrQkFBTyxDQUFDLGVBQWUsRUFBRUQsZ0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7aUNBQzlFLENBQUM7Z0NBQ0ZELHFCQUFVLENBQUMsV0FBVyxFQUFFO29DQUNwQkMsZ0JBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztvQ0FDekJDLGtCQUFPLENBQUMsZ0JBQWdCLEVBQUVELGdCQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztpQ0FDdEQsQ0FBQzs2QkFDTCxDQUNBO3lCQUNKO2lDQXBDUSx1aEZBQXVoRjtxQkFzQ25pRjs7Ozs7d0NBR0lHLFNBQU07Z0NBQ05BLFNBQU07OEJBQ05DLFlBQVMsU0FBQyxTQUFTOzhCQUNuQkEsWUFBUyxTQUFDLFNBQVM7K0JBT25CRixRQUFLOzs2QkEzRVY7Ozs7Ozs7QUNBQTtRQXdGSSwrQkFBbUIsUUFBbUIsRUFBUyxNQUF5QjtZQUFyRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1lBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7NEJBZDVDLFFBQVE7OEJBQ04sS0FBSzt3QkFDVixLQUFLOzZCQUNBLEtBQUs7Z0NBQ1osQ0FBQzsyQkFDTCxLQUFLOzhCQUNGLEtBQUs7NkJBQ1AsUUFBUTs4QkFJZ0MsSUFBSU4sZUFBWSxFQUF5Qjs2QkFDMUMsSUFBSUEsZUFBWSxFQUF5QjtTQUduRzs7OztRQUVELHdDQUFROzs7WUFBUjthQUNDOzs7O1FBRUQsNkNBQWE7OztZQUFiO2dCQUNJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxjQUFjLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNoQzthQUNKOzs7O1FBRUQsb0NBQUk7OztZQUFKO2dCQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3pCOzs7O1FBRUQsc0NBQU07OztZQUFOO2dCQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3hCOzs7O1FBRUQsd0NBQVE7OztZQUFSO2dCQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztpQkFFMUI7YUFDSjs7Ozs7UUFFRCxpREFBaUI7Ozs7WUFBakIsVUFBa0IsS0FBSztnQkFDbkIsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLFVBQVUsRUFBRTtvQkFDL0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztxQkFDN0I7eUJBQU07d0JBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3FCQUN2QjtpQkFDSjthQUNKOzs7Ozs7UUFFRCxtREFBbUI7Ozs7O1lBQW5CLFVBQW9CLEtBQUssRUFBRSxJQUFZO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDekIsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLFFBQVEsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2lCQUM3QjtxQkFBTTtvQkFDSCxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO3dCQUM5QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7cUJBQ3ZCO2lCQUVKO2FBQ0o7Ozs7UUFFRCw0Q0FBWTs7O1lBQVo7Z0JBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5Qjs7Ozs7UUFFTSw4Q0FBYzs7OztzQkFBQyxRQUFnQjtnQkFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7O2dCQUM3QixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQztnQkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxVQUFVLFFBQUssQ0FBQyxDQUFDOztnQkFFM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsZ0JBQWMsVUFBVSxRQUFLLENBQUMsQ0FBQTtnQkFDeEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7O29CQW5KbkNDLFlBQVMsU0FBQzt3QkFDUCxRQUFRLEVBQUUsNEJBQTRCO3dCQUN0QyxRQUFRLEVBQUUseWRBV1Q7d0JBRUQsVUFBVSxFQUFFLENBQUNDLGtCQUFPLENBQUMsU0FBUyxFQUFFO2dDQUM1QkMscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCQyxnQkFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDO29DQUNoQ0Msa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQztpQ0FDNUIsQ0FBQztnQ0FDRkYscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCRSxrQkFBTyxDQUFDLGVBQWUsRUFBRUQsZ0JBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO2lDQUM3RCxDQUFDOzZCQUNMLENBQUM7NEJBQ0ZGLGtCQUFPLENBQUMsYUFBYSxFQUFFO2dDQUNuQkMscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCQyxnQkFBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO29DQUN2QkMsa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQztpQ0FDNUIsQ0FBQztnQ0FDRkYscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCRSxrQkFBTyxDQUFDLGVBQWUsRUFBRUQsZ0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2lDQUNwRCxDQUFDOzZCQUNMLENBQUM7NEJBQ0ZGLGtCQUFPLENBQUMsWUFBWSxFQUFFO2dDQUNsQkMscUJBQVUsQ0FBQyxrQkFBa0IsRUFBRTtvQ0FDM0JFLGtCQUFPLENBQUMsZ0JBQWdCLENBQUM7aUNBQzVCLENBQUM7Z0NBQ0ZGLHFCQUFVLENBQUMsa0JBQWtCLEVBQUU7b0NBQzNCRSxrQkFBTyxDQUFDLGVBQWUsQ0FBQztpQ0FDM0IsQ0FBQztnQ0FDRkksZ0JBQUssQ0FBQyxRQUFRLEVBQUVMLGdCQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7Z0NBQ3JFSyxnQkFBSyxDQUFDLFFBQVEsRUFBRUwsZ0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7NkJBQ3ZFLENBQUM7NEJBQ0ZGLGtCQUFPLENBQUMsVUFBVSxFQUFFO2dDQUNoQkMscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3BCQyxnQkFBSyxDQUFDO3dDQUNGLGtCQUFrQixFQUFFLEdBQUc7d0NBQ3ZCLG1CQUFtQixFQUFFLEVBQUU7d0NBQ3ZCLGlCQUFpQixFQUFFLFFBQVE7d0NBQzNCLFFBQVEsRUFBRSxTQUFTO3FDQUN0QixDQUFDO29DQUNGQyxrQkFBTyxDQUFDLGdCQUFnQixDQUFDO2lDQUM1QixDQUFDO2dDQUNGSSxnQkFBSyxDQUFDLE1BQU0sRUFBRUwsZ0JBQUssQ0FBQztvQ0FDaEIsa0JBQWtCLEVBQUUsR0FBRztvQ0FDdkIsbUJBQW1CLEVBQUUsQ0FBQztvQ0FDdEIsaUJBQWlCLEVBQUUsUUFBUTtvQ0FDM0IsUUFBUSxFQUFFLFNBQVM7b0NBQ25CLFNBQVMsRUFBRSxDQUFDO2lDQUNmLENBQUMsQ0FDRDs2QkFBQyxDQUNMLENBQUM7aUNBL0NPLDR2RUFBNHZFO3FCQWlEeHdFOzs7Ozt3QkFwRStFTyxZQUFTO3dCQUFFQyxvQkFBaUI7Ozs7MkJBdUV2R04sUUFBSztnQ0FDTEEsUUFBSzsrQkFDTEEsUUFBSzsrQkFDTEEsUUFBSztpQ0FDTEEsUUFBSzsyQkFDTEEsUUFBSztnQ0FDTEEsUUFBSzs4QkFNTEUsWUFBUyxTQUFDLFNBQVM7aUNBRW5CRCxTQUFNO2dDQUNOQSxTQUFNOztvQ0F0Rlg7Ozs7Ozs7QUNBQTs7OztvQkFXQ00sV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVc7NEJBQ1hDLG1CQUFZO3lCQUNiO3dCQUNELFlBQVksRUFBRSxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMscUJBQXFCLENBQUM7d0JBQ3JHLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBQyxjQUFjLEVBQUMscUJBQXFCO3lCQUMvRjtxQkFDRjs7NEJBbkJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=