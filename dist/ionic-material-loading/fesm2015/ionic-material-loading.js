import { Injectable, Component, Input, ViewChild, Output, EventEmitter, Renderer2, ChangeDetectorRef, NgModule, defineInjectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { animate, style, transition, trigger, state } from '@angular/animations';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LoadingService {
    constructor() {
        this.loading = false;
        this.isComplete = false;
        this.loadChange = new BehaviorSubject(this.loading);
        this.completeChange = new BehaviorSubject(this.isComplete);
    }
    /**
     * @return {?}
     */
    load() {
        this.loading = true;
        this.loadChange.next(this.loading);
    }
    /**
     * @return {?}
     */
    unload() {
        this.loading = false;
        this.loadChange.next(this.loading);
        this.isComplete = false;
    }
    /**
     * @return {?}
     */
    toggleSpinner() {
        this.loading = !this.loading;
    }
    /**
     * @return {?}
     */
    complete() {
        console.log('set service complete');
        this.isComplete = true;
        this.completeChange.next(this.isComplete);
    }
}
LoadingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LoadingService.ctorParameters = () => [];
/** @nocollapse */ LoadingService.ngInjectableDef = defineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(); }, token: LoadingService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ProgressBar {
    /**
     * @param {?} loadingService
     */
    constructor(loadingService) {
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
    ngOnInit() {
        if (this.global) {
            this.loadingService.completeChange.subscribe(isComplete => {
                if (isComplete) {
                    this.complete();
                }
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.global) {
            this.loadingService.completeChange.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    toggleSpinner() {
        this.loading = !this.loading;
    }
    /**
     * @return {?}
     */
    load() {
        this.loading = true;
        this.onRefresh.emit(this);
    }
    /**
     * @return {?}
     */
    unload() {
        this.loading = false;
        if (this.isComplete) {
            this.isComplete = false;
        }
    }
    /**
     * @return {?}
     */
    complete() {
        console.log('set complete');
        this.isComplete = true;
        console.log(this.isComplete);
    }
    /**
     * @param {?} isComplete
     * @return {?}
     */
    fillAnimationComplete(isComplete) {
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
    }
}
ProgressBar.decorators = [
    { type: Component, args: [{
                selector: 'gg-loading-progressbar',
                template: `
<div [@progressAnim] *ngIf="(!global && loading) || (global && loadingService.loading)" class="slider">
  <div class="line"></div>
  <div *ngIf="!isComplete" class="subline inc"></div>
  <div *ngIf="isComplete" [@fillAnim] (@fillAnim.done)="fillAnimationComplete(isComplete)" class="subline fill"></div>
  <div *ngIf="!isComplete" class="subline dec"></div>
</div>
    `,
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
                styles: [`.slider{position:absolute;width:100%;height:5px;overflow-x:hidden;z-index:5000}.line{position:absolute;opacity:.4;width:240%;height:5px;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}.subline{position:absolute;height:5px;background:inherit}.inc{-webkit-animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin;animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin}.dec{-webkit-animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin;animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin}.fill{left:0;width:100%;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}@-webkit-keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@-webkit-keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@-webkit-keyframes colorspin{0%,100%{background-color:#4285f4}25%{background-color:#de3e35}50%{background-color:#f7c223}75%{background-color:#1b9a59}}@keyframes colorspin{0%,100%{background-color:#4285f4}25%{background-color:#de3e35}50%{background-color:#f7c223}75%{background-color:#1b9a59}}`]
            }] }
];
/** @nocollapse */
ProgressBar.ctorParameters = () => [
    { type: LoadingService }
];
ProgressBar.propDecorators = {
    global: [{ type: Input }],
    isComplete: [{ type: Input }],
    onComplete: [{ type: Output }],
    onRefresh: [{ type: Output }],
    bar: [{ type: ViewChild, args: ['bar',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FabSpinner {
    constructor() {
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    toggleSpinner() {
        if (this.icon != 'md-checkmark') {
            this.loading = !this.loading;
        }
    }
    /**
     * @return {?}
     */
    load() {
        this.loading = true;
        this.onRefresh.emit(this);
    }
    /**
     * @return {?}
     */
    unload() {
        this.loading = false;
    }
    /**
     * @return {?}
     */
    complete() {
        if (this.loading) {
            this.isComplete = true;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fillAnimationDone(event) {
        if (event.fromState == 'spinning') {
            if (this.checkmark) {
                console.log('fill animation done', event);
                this.iconState = "rotate";
            }
            else {
                this.postComplete();
            }
        }
    }
    /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    changeIconAndReveal(event, icon) {
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
    }
    /**
     * @return {?}
     */
    postComplete() {
        this.unload();
        this.isComplete = false;
        this.onComplete.emit(this);
    }
}
FabSpinner.decorators = [
    { type: Component, args: [{
                selector: 'gg-loading-fab',
                template: `
        <ion-fab [@fabAnim] [vertical]="vertical" [horizontal]="horizontal" [edge]="edge">
        <svg *ngIf="loading" #spinner class="spinner rotate" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
    <circle [@fillAnim]="isComplete ? 'fill' : 'spinning'" (@fillAnim.done)="fillAnimationDone($event)" [ngClass]="{'path': !isComplete}" fill="none" stroke-width="4" stroke-linecap="round" cx="36" cy="36" r="32"></circle>
 </svg>
            <ion-fab-button [color]="fabColor">
                <ion-icon [@rotateAnim]="iconState" (@rotateAnim.done)="changeIconAndReveal($event,'md-checkmark')" [name]="icon"></ion-icon>
            </ion-fab-button>

        </ion-fab>
    `,
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
                styles: [`ion-spinner{position:absolute;top:-8px;left:-8px;width:72px;height:72px}.spinner{position:absolute;width:72px;height:72px;left:-8px;top:-8px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}`]
            }] }
];
/** @nocollapse */
FabSpinner.ctorParameters = () => [];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ButtonFull {
    constructor() {
        this.loading = false;
        this.color = 'light';
        this.expand = 'block';
        this.onRefresh = new EventEmitter();
        this.onRefreshComplete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    toggleSpinner() {
        this.loading = !this.loading;
        this.progress.toggleSpinner();
        this.onRefresh.emit(this);
    }
    /**
     * @return {?}
     */
    load() {
        this.loading = true;
        this.progress.load();
    }
    /**
     * @return {?}
     */
    unload() {
        this.loading = false;
        this.progress.unload();
    }
    /**
     * @return {?}
     */
    complete() {
        if (this.loading) {
            this.progress.complete();
        }
    }
    /**
     * @param {?} isComplete
     * @return {?}
     */
    onComplete(isComplete) {
        console.log('on complete', isComplete);
        this.loading = false;
        this.onRefreshComplete.emit(this);
    }
}
ButtonFull.decorators = [
    { type: Component, args: [{
                selector: 'gg-loading-button',
                template: `
    <gg-loading-progressbar (onComplete)="onComplete($event)" #progress [global]="false"></gg-loading-progressbar>
    <ion-button [expand]="expand" [color]="color">
    <ng-content></ng-content>
  </ion-button>
    `,
                styles: [`:host{position:relative;display:block;margin:0 20px;width:calc(100% - 40px)}`]
            }] }
];
/** @nocollapse */
ButtonFull.ctorParameters = () => [];
ButtonFull.propDecorators = {
    progress: [{ type: ViewChild, args: ['progress',] }],
    color: [{ type: Input }],
    expand: [{ type: Input }],
    onRefresh: [{ type: Output }],
    onRefreshComplete: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ItemProgress {
    constructor() {
        this.loading = false;
        this.onRefreshComplete = new EventEmitter();
        this.onRefresh = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    toggleSpinner() {
        this.loading = !this.loading;
        this.progress.toggleSpinner();
    }
    /**
     * @return {?}
     */
    load() {
        this.loading = true;
        this.progress.load();
    }
    /**
     * @return {?}
     */
    unload() {
        this.loading = false;
        this.progress.unload();
    }
    /**
     * @return {?}
     */
    complete() {
        if (this.loading) {
            this.progress.complete();
        }
    }
    /**
     * @param {?} isComplete
     * @return {?}
     */
    onComplete(isComplete) {
        console.log('on complete', isComplete);
        this.loading = false;
        this.onRefreshComplete.emit(this);
    }
}
ItemProgress.decorators = [
    { type: Component, args: [{
                selector: 'gg-loading-item',
                template: `
    <ion-item [ngClass]="{'loading': loading}">
    <ng-content></ng-content>
  </ion-item>
  <gg-loading-progressbar (onComplete)="onComplete($event)" #progress [global]="false"></gg-loading-progressbar>

    `,
                styles: [`:host{position:relative;display:block;margin:0;width:calc(100%)}ion-item{background:#fff}.loading{margin:4px;width:calc(100% - 8px);transition:.2s;border-radius:8px;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 4px 16px rgba(0,0,0,.12)}`]
            }] }
];
/** @nocollapse */
ItemProgress.ctorParameters = () => [];
ItemProgress.propDecorators = {
    progress: [{ type: ViewChild, args: ['progress',] }],
    onRefreshComplete: [{ type: Output }],
    onRefresh: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ContentRefresh {
    constructor() {
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
    ngOnInit() {
        fromEvent(document, 'touchend').subscribe(res => {
            console.log('touchend', res);
            if (this.pulling && !this.refreshing) {
                this.changeProgress(0);
            }
        });
    }
    /**
     * @return {?}
     */
    spinRefresher() {
        this.spinner.nativeElement.style.setProperty('transform', `translateY(168px)`);
        this.refreshing = true;
        this.pulling = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    doRefresh(event) {
        this.spinRefresher();
        console.log('refresh here');
        setTimeout(() => {
            event.target.complete();
        }, 140);
        this.refresh();
    }
    /**
     * @return {?}
     */
    refresh() {
        this.onRefresh.emit(this);
    }
    /**
     * @return {?}
     */
    completeRefresh() {
        this.refreshing = false;
        this.isComplete = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPull(event) {
        this.pulling = true;
        console.log(event);
        /** @type {?} */
        const progress = event.target.getProgress();
        if (progress <= 1) {
            this.onProgressChanged.emit(progress);
            this.changeProgress(progress);
        }
    }
    /**
     * @return {?}
     */
    onStart() {
        // this.changeProgress(0);
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    changeProgress(progress) {
        this.translateY = 112 * progress;
        /** @type {?} */
        const translateY = this.translateY;
        console.log(`translateY(${translateY}px)`);
        // this.renderer.setStyle(this.spinner.nativeElement, 'transform', `translateY(${translateY})`)
        this.spinner.nativeElement.style.setProperty('transform', `translateY(${translateY}px)`);
        // this.change.detectChanges();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fillAnimationDone(event) {
        if (event.toState === 'fill' && event.fromState === 'spinning') {
            console.log('fillAnim complete', event);
            this.spinnerVisible = false;
            this.isComplete = false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSpinnerHidden(event) {
        if (event.fromState !== 'void') {
            console.log('refresh complete', event);
            this.spinnerVisible = true;
        }
    }
    /**
     * @return {?}
     */
    showHint() {
        this.hintVisible = true;
    }
    /**
     * @return {?}
     */
    onHintClicked() {
        console.log('on hint clicked');
        this.hintVisible = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    postHint(event) {
        console.log(event);
        if (!event.fromState && event.toState == 'void') {
            this.refresh();
            this.spinRefresher();
        }
    }
}
ContentRefresh.decorators = [
    { type: Component, args: [{
                selector: 'gg-loading-content',
                template: `
    <div class="gg-hint-wrapper">
    <ion-chip *ngIf="hintVisible" (click)="onHintClicked()" [@hintAnim] (@hintAnim.done)="postHint($event)" #hint class="gg-hint-container">
  <ion-icon class="icon" name="md-arrow-up"></ion-icon>
  <ion-label class="text">{{hintText}}</ion-label>
</ion-chip>
    </div>
    
    <div [@spinnerAnim] (@spinnerAnim.done)="onSpinnerHidden($event)" *ngIf="spinnerVisible" #spinner class="gg-spinner-container">
        <svg class="spinner rotate" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
            <circle [@fillAnim]="isComplete ? 'fill' : 'spinning'" (@fillAnim.done)="fillAnimationDone($event)" [ngClass]="{'path': !isComplete}" fill="none" stroke-width="4" stroke-linecap="round" cx="36" cy="36" r="32"></circle>
        </svg>
    </div>
        <ion-refresher (ionStart)="onStart()" [snapbackDuration]="280" [closeDuration]="280" [pullMax]="168" [pullMin]="112" [disabled]="false" slot="fixed" (ionRefresh)="doRefresh($event)" (ionPull)="onPull($event)">
        </ion-refresher>
    `,
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
                styles: [`.spinner{position:absolute;width:24px;height:24px;left:8px;top:8px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}.gg-spinner-container{width:40px;height:40px;position:absolute;left:calc(50% - 20px);top:-56px;z-index:9;background:var(--ion-color-light);border-radius:50%;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1)}.gg-hint-container{height:40px;padding-left:8px;padding-right:8px;position:relative;background:var(--ion-color-light);border-radius:40px;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1);margin:0}.icon{height:20px;width:20px;background:0 0;color:var(--ion-color-dark)}.text{font-size:1em;color:var(--ion-color-dark)}.gg-hint-wrapper{width:100%;position:absolute;top:112px;z-index:8;text-align:center}`]
            }] }
];
/** @nocollapse */
ContentRefresh.ctorParameters = () => [];
ContentRefresh.propDecorators = {
    onProgressChanged: [{ type: Output }],
    onRefresh: [{ type: Output }],
    spinner: [{ type: ViewChild, args: ['spinner',] }],
    content: [{ type: ViewChild, args: ['content',] }],
    hintText: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InfiniteScrollContent {
    /**
     * @param {?} renderer
     * @param {?} change
     */
    constructor(renderer, change) {
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    toggleSpinner() {
        if (this.icon != 'md-checkmark') {
            this.loading = !this.loading;
        }
    }
    /**
     * @return {?}
     */
    load() {
        this.loading = true;
        this.onRefresh.emit();
    }
    /**
     * @return {?}
     */
    unload() {
        this.loading = false;
    }
    /**
     * @return {?}
     */
    complete() {
        if (this.loading) {
            this.isComplete = true;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fillAnimationDone(event) {
        if (event.fromState == 'spinning') {
            if (this.checkmark) {
                console.log('fill animation done', event);
                this.iconState = "rotate";
            }
            else {
                this.postComplete();
            }
        }
    }
    /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    changeIconAndReveal(event, icon) {
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
    }
    /**
     * @return {?}
     */
    postComplete() {
        this.unload();
        this.isComplete = false;
        this.onComplete.emit(this);
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    changeProgress(progress) {
        this.dragProgress = progress;
        /** @type {?} */
        const translateY = Math.floor(-80 + 80 * progress);
        console.log(`translateY(${translateY}px)`);
        // this.renderer.setStyle(this.spinner.nativeElement, 'transform', `translateY(${translateY})`)
        this.spinner.nativeElement.style.setProperty('transform', `translateY(${translateY}px)`);
        this.change.detectChanges();
    }
}
InfiniteScrollContent.decorators = [
    { type: Component, args: [{
                selector: 'gg-loading-infinite-scroll',
                template: `
    <div class="gg-refresher">

    <div #spinner class="gg-spinner-container">
    <svg class="spinner rotate" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
    <circle [@fillAnim]="isComplete ? 'fill' : 'spinning'" (@fillAnim.done)="fillAnimationDone($event)" [ngClass]="{'path': !isComplete}" fill="none" stroke-width="4" stroke-linecap="round" cx="36" cy="36" r="32"></circle>
 </svg>
    </div>

    
    </div>
    `,
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
                styles: [`ion-spinner{position:absolute;top:-8px;left:-8px;width:72px;height:72px}.spinner{position:absolute;width:24px;height:24px;left:8px;top:8px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}.gg-refresher{display:block;width:100%;height:112px;position:relative}.gg-spinner-container{width:40px;height:40px;position:absolute;left:calc(50% - 20px);top:16px;background:var(--ion-color-light);border-radius:50%;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1)}`]
            }] }
];
/** @nocollapse */
InfiniteScrollContent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LoadingModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { LoadingService, LoadingModule, ButtonFull as ɵc, ContentRefresh as ɵe, FabSpinner as ɵa, InfiniteScrollContent as ɵf, ItemProgress as ɵd, ProgressBar as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy9saWIvbG9hZGluZy5zZXJ2aWNlLnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy9saWIvZmFiL2ZhYi5jb21wb25lbnQudHMiLCJuZzovL2lvbmljLW1hdGVyaWFsLWxvYWRpbmcvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9pdGVtL2l0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9pbmZpbml0ZS1zY3JvbGwtY29udGVudC9pbmZpbml0ZS1zY3JvbGx0LWNvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9sb2FkaW5nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2VydmljZSB7XG5cbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGxvYWRDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odGhpcy5sb2FkaW5nKTtcbiAgcHVibGljIGNvbXBsZXRlQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRoaXMuaXNDb21wbGV0ZSk7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWRDaGFuZ2UubmV4dCh0aGlzLmxvYWRpbmcpO1xuICB9XG5cbiAgdW5sb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubG9hZENoYW5nZS5uZXh0KHRoaXMubG9hZGluZyk7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGVTcGlubmVyKCkge1xuICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gIH1cblxuICBjb21wbGV0ZSgpe1xuICAgIGNvbnNvbGUubG9nKCdzZXQgc2VydmljZSBjb21wbGV0ZScpO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgdGhpcy5jb21wbGV0ZUNoYW5nZS5uZXh0KHRoaXMuaXNDb21wbGV0ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gJy4uL2xvYWRpbmcuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZy1sb2FkaW5nLXByb2dyZXNzYmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBbQHByb2dyZXNzQW5pbV0gKm5nSWY9XCIoIWdsb2JhbCAmJiBsb2FkaW5nKSB8fCAoZ2xvYmFsICYmIGxvYWRpbmdTZXJ2aWNlLmxvYWRpbmcpXCIgY2xhc3M9XCJzbGlkZXJcIj5cbiAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIiFpc0NvbXBsZXRlXCIgY2xhc3M9XCJzdWJsaW5lIGluY1wiPjwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiaXNDb21wbGV0ZVwiIFtAZmlsbEFuaW1dIChAZmlsbEFuaW0uZG9uZSk9XCJmaWxsQW5pbWF0aW9uQ29tcGxldGUoaXNDb21wbGV0ZSlcIiBjbGFzcz1cInN1YmxpbmUgZmlsbFwiPjwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiIWlzQ29tcGxldGVcIiBjbGFzcz1cInN1YmxpbmUgZGVjXCI+PC9kaXY+XG48L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogW2Auc2xpZGVye3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjVweDtvdmVyZmxvdy14OmhpZGRlbjt6LWluZGV4OjUwMDB9LmxpbmV7cG9zaXRpb246YWJzb2x1dGU7b3BhY2l0eTouNDt3aWR0aDoyNDAlO2hlaWdodDo1cHg7LXdlYmtpdC1hbmltYXRpb246NS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnNwaW47YW5pbWF0aW9uOjUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzcGlufS5zdWJsaW5le3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDo1cHg7YmFja2dyb3VuZDppbmhlcml0fS5pbmN7LXdlYmtpdC1hbmltYXRpb246MS42cyBpbmZpbml0ZSBpbmNyZWFzZSw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc3BpbjthbmltYXRpb246MS42cyBpbmZpbml0ZSBpbmNyZWFzZSw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc3Bpbn0uZGVjey13ZWJraXQtYW5pbWF0aW9uOjEuNnMgLjRzIGluZmluaXRlIGRlY3JlYXNlLDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzcGluO2FuaW1hdGlvbjoxLjZzIC40cyBpbmZpbml0ZSBkZWNyZWFzZSw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc3Bpbn0uZmlsbHtsZWZ0OjA7d2lkdGg6MTAwJTstd2Via2l0LWFuaW1hdGlvbjo1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc3BpbjthbmltYXRpb246NS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnNwaW59QC13ZWJraXQta2V5ZnJhbWVzIGluY3JlYXNle2Zyb217bGVmdDotNSU7d2lkdGg6NSV9dG97bGVmdDoxMzAlO3dpZHRoOjEwMCV9fUBrZXlmcmFtZXMgaW5jcmVhc2V7ZnJvbXtsZWZ0Oi01JTt3aWR0aDo1JX10b3tsZWZ0OjEzMCU7d2lkdGg6MTAwJX19QC13ZWJraXQta2V5ZnJhbWVzIGRlY3JlYXNle2Zyb217bGVmdDotODAlO3dpZHRoOjgwJX10b3tsZWZ0OjExMCU7d2lkdGg6MTAlfX1Aa2V5ZnJhbWVzIGRlY3JlYXNle2Zyb217bGVmdDotODAlO3dpZHRoOjgwJX10b3tsZWZ0OjExMCU7d2lkdGg6MTAlfX1ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JzcGluezAlLDEwMCV7YmFja2dyb3VuZC1jb2xvcjojNDI4NWY0fTI1JXtiYWNrZ3JvdW5kLWNvbG9yOiNkZTNlMzV9NTAle2JhY2tncm91bmQtY29sb3I6I2Y3YzIyM303NSV7YmFja2dyb3VuZC1jb2xvcjojMWI5YTU5fX1Aa2V5ZnJhbWVzIGNvbG9yc3BpbnswJSwxMDAle2JhY2tncm91bmQtY29sb3I6IzQyODVmNH0yNSV7YmFja2dyb3VuZC1jb2xvcjojZGUzZTM1fTUwJXtiYWNrZ3JvdW5kLWNvbG9yOiNmN2MyMjN9NzUle2JhY2tncm91bmQtY29sb3I6IzFiOWE1OX19YF0sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdwcm9ncmVzc0FuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI5OW1zIGVhc2UtaW4nLCBzdHlsZSh7IGhlaWdodDogJzBweCcgfSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBsZWZ0OiAnLTUlJywgd2lkdGg6ICc1JScgfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnODUwbXMgZWFzZS1vdXQnLCBzdHlsZSh7IGxlZnQ6ICcwJScsIHdpZHRoOiAnMTAwJScgfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGdsb2JhbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGlzQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAT3V0cHV0KCkgb25Db21wbGV0ZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxQcm9ncmVzc0Jhcj4gPSBuZXcgRXZlbnRFbWl0dGVyPFByb2dyZXNzQmFyPigpO1xuXG4gICAgQFZpZXdDaGlsZCgnYmFyJykgYmFyOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGxvYWRpbmdTZXJ2aWNlOiBMb2FkaW5nU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5nbG9iYWwpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuY29tcGxldGVDaGFuZ2Uuc3Vic2NyaWJlKGlzQ29tcGxldGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5jb21wbGV0ZUNoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXQgY29tcGxldGUnKTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0NvbXBsZXRlKTtcbiAgICB9XG5cbiAgICBmaWxsQW5pbWF0aW9uQ29tcGxldGUoaXNDb21wbGV0ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbGwgYW5pbWF0aW9uIGNvbXBsZXRlJywgaXNDb21wbGV0ZSk7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUuZW1pdChpc0NvbXBsZXRlKTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS51bmxvYWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bmxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2ctbG9hZGluZy1mYWInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpb24tZmFiIFtAZmFiQW5pbV0gW3ZlcnRpY2FsXT1cInZlcnRpY2FsXCIgW2hvcml6b250YWxdPVwiaG9yaXpvbnRhbFwiIFtlZGdlXT1cImVkZ2VcIj5cbiAgICAgICAgPHN2ZyAqbmdJZj1cImxvYWRpbmdcIiAjc3Bpbm5lciBjbGFzcz1cInNwaW5uZXIgcm90YXRlXCIgdmlld0JveD1cIjAgMCA3MiA3MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8Y2lyY2xlIFtAZmlsbEFuaW1dPVwiaXNDb21wbGV0ZSA/ICdmaWxsJyA6ICdzcGlubmluZydcIiAoQGZpbGxBbmltLmRvbmUpPVwiZmlsbEFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cInsncGF0aCc6ICFpc0NvbXBsZXRlfVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBjeD1cIjM2XCIgY3k9XCIzNlwiIHI9XCIzMlwiPjwvY2lyY2xlPlxuIDwvc3ZnPlxuICAgICAgICAgICAgPGlvbi1mYWItYnV0dG9uIFtjb2xvcl09XCJmYWJDb2xvclwiPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBbQHJvdGF0ZUFuaW1dPVwiaWNvblN0YXRlXCIgKEByb3RhdGVBbmltLmRvbmUpPVwiY2hhbmdlSWNvbkFuZFJldmVhbCgkZXZlbnQsJ21kLWNoZWNrbWFyaycpXCIgW25hbWVdPVwiaWNvblwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8L2lvbi1mYWItYnV0dG9uPlxuXG4gICAgICAgIDwvaW9uLWZhYj5cbiAgICBgLFxuICAgIHN0eWxlczogW2Bpb24tc3Bpbm5lcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LThweDtsZWZ0Oi04cHg7d2lkdGg6NzJweDtoZWlnaHQ6NzJweH0uc3Bpbm5lcntwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo3MnB4O2hlaWdodDo3MnB4O2xlZnQ6LThweDt0b3A6LThweH0ucm90YXRley13ZWJraXQtYW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3I7YW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3J9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fUBrZXlmcmFtZXMgcm90YXRvcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX19LnBhdGh7c3Ryb2tlLWRhc2hhcnJheToxODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOy13ZWJraXQtYW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yczthbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBkYXNoLDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzfS5maWxse3N0cm9rZS1kYXNoYXJyYXk6MzYwO3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7YW5pbWF0aW9uOjEuNHMgZWFzZS1vdXQgZmlsbDtzdHJva2U6IzFiOWE1OX1ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUBrZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUAtd2Via2l0LWtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QGtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZmlsbHswJXtzdHJva2UtZGFzaG9mZnNldDozNjB9ODAle3N0cm9rZS1kYXNob2Zmc2V0OjE4MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19YF0sXG4gICAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2ZhYkFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLFxuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKVxuICAgICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3NwaW5uZXJBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSlcbiAgICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdyb3RhdGVBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCdub3JtYWwgPT4gcm90YXRlJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbigncm90YXRlID0+IG5vcm1hbCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2UtaW4nKVxuICAgICAgICBdKSxcbiAgICAgICAgc3RhdGUoJ3JvdGF0ZScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKScgfSkpLFxuICAgICAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3JvdGF0ZVooMGRlZyknIH0pKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IGZpbGwnLCBbXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5pbWF0ZSgnMTQwMG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHN0YXRlKCdmaWxsJywgc3R5bGUoe1xuICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAzMTUsXG4gICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgJ3N0cm9rZSc6ICcjMUI5QTU5JyxcbiAgICAgICAgICAgICdvcGFjaXR5JzogMFxuICAgICAgICB9KVxuICAgICAgICApXVxuICAgICldLFxuXG59KVxuZXhwb3J0IGNsYXNzIEZhYlNwaW5uZXIgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNwaW5Db2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZhYkNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdmVydGljYWw6IHN0cmluZyA9IFwiYm90dG9tXCI7XG4gICAgQElucHV0KCkgaG9yaXpvbnRhbDogc3RyaW5nID0gXCJlbmRcIjtcbiAgICBASW5wdXQoKSBlZGdlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgY2hlY2ttYXJrOiBib29sZWFuID0gZmFsc2U7XG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpY29uU3RhdGU6IHN0cmluZyA9ICdub3JtYWwnO1xuXG4gICAgQFZpZXdDaGlsZCgnc3Bpbm5lcicpIHNwaW5uZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBAT3V0cHV0KCkgb25Db21wbGV0ZTogRXZlbnRFbWl0dGVyPEZhYlNwaW5uZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxGYWJTcGlubmVyPigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxGYWJTcGlubmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmFiU3Bpbm5lcj4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIGlmKHRoaXMuaWNvbiAhPSAnbWQtY2hlY2ttYXJrJyl7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZih0aGlzLmxvYWRpbmcpe1xuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlsbEFuaW1hdGlvbkRvbmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PSAnc3Bpbm5pbmcnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja21hcmspIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsbCBhbmltYXRpb24gZG9uZScsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TdGF0ZSA9IFwicm90YXRlXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VJY29uQW5kUmV2ZWFsKGV2ZW50LCBpY29uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQsIGljb24pO1xuICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09ICdub3JtYWwnKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgICAgICAgdGhpcy5pY29uU3RhdGUgPSBcIm5vcm1hbFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gXCJyb3RhdGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy51bmxvYWQoKTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Db21wbGV0ZS5lbWl0KHRoaXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tICcuLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZy1sb2FkaW5nLWJ1dHRvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8Z2ctbG9hZGluZy1wcm9ncmVzc2JhciAob25Db21wbGV0ZSk9XCJvbkNvbXBsZXRlKCRldmVudClcIiAjcHJvZ3Jlc3MgW2dsb2JhbF09XCJmYWxzZVwiPjwvZ2ctbG9hZGluZy1wcm9ncmVzc2Jhcj5cbiAgICA8aW9uLWJ1dHRvbiBbZXhwYW5kXT1cImV4cGFuZFwiIFtjb2xvcl09XCJjb2xvclwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9pb24tYnV0dG9uPlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgMjBweDt3aWR0aDpjYWxjKDEwMCUgLSA0MHB4KX1gXSxcblxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25GdWxsIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoJ3Byb2dyZXNzJykgcHJvZ3Jlc3M6IFByb2dyZXNzQmFyO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnbGlnaHQnO1xuICAgIEBJbnB1dCgpIGV4cGFuZDogc3RyaW5nID0gJ2Jsb2NrJztcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8QnV0dG9uRnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaENvbXBsZXRlOiBFdmVudEVtaXR0ZXI8QnV0dG9uRnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MudG9nZ2xlU3Bpbm5lcigpO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MubG9hZCgpO1xuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MudW5sb2FkKCk7XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29tcGxldGUoaXNDb21wbGV0ZTogYm9vbGVhbikge1xuICAgICAgICBjb25zb2xlLmxvZygnb24gY29tcGxldGUnLCBpc0NvbXBsZXRlKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25SZWZyZXNoQ29tcGxldGUuZW1pdCh0aGlzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2ctbG9hZGluZy1pdGVtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxpb24taXRlbSBbbmdDbGFzc109XCJ7J2xvYWRpbmcnOiBsb2FkaW5nfVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9pb24taXRlbT5cbiAgPGdnLWxvYWRpbmctcHJvZ3Jlc3NiYXIgKG9uQ29tcGxldGUpPVwib25Db21wbGV0ZSgkZXZlbnQpXCIgI3Byb2dyZXNzIFtnbG9iYWxdPVwiZmFsc2VcIj48L2dnLWxvYWRpbmctcHJvZ3Jlc3NiYXI+XG5cbiAgICBgLFxuICAgIHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjowO3dpZHRoOmNhbGMoMTAwJSl9aW9uLWl0ZW17YmFja2dyb3VuZDojZmZmfS5sb2FkaW5ne21hcmdpbjo0cHg7d2lkdGg6Y2FsYygxMDAlIC0gOHB4KTt0cmFuc2l0aW9uOi4ycztib3JkZXItcmFkaXVzOjhweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2JveC1zaGFkb3c6MCA0cHggMTZweCByZ2JhKDAsMCwwLC4xMil9YF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgSXRlbVByb2dyZXNzIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoJ3Byb2dyZXNzJykgcHJvZ3Jlc3M6IFByb2dyZXNzQmFyO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2hDb21wbGV0ZTogRXZlbnRFbWl0dGVyPEl0ZW1Qcm9ncmVzcz4gPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1Qcm9ncmVzcz4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8SXRlbVByb2dyZXNzPiA9IG5ldyBFdmVudEVtaXR0ZXI8SXRlbVByb2dyZXNzPigpO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICB0b2dnbGVTcGlubmVyKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnRvZ2dsZVNwaW5uZXIoKTtcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2dyZXNzLmxvYWQoKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnVubG9hZCgpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlKGlzQ29tcGxldGU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uIGNvbXBsZXRlJywgaXNDb21wbGV0ZSk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaENvbXBsZXRlLmVtaXQodGhpcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgc3RhdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctY29udGVudCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZ2ctaGludC13cmFwcGVyXCI+XG4gICAgPGlvbi1jaGlwICpuZ0lmPVwiaGludFZpc2libGVcIiAoY2xpY2spPVwib25IaW50Q2xpY2tlZCgpXCIgW0BoaW50QW5pbV0gKEBoaW50QW5pbS5kb25lKT1cInBvc3RIaW50KCRldmVudClcIiAjaGludCBjbGFzcz1cImdnLWhpbnQtY29udGFpbmVyXCI+XG4gIDxpb24taWNvbiBjbGFzcz1cImljb25cIiBuYW1lPVwibWQtYXJyb3ctdXBcIj48L2lvbi1pY29uPlxuICA8aW9uLWxhYmVsIGNsYXNzPVwidGV4dFwiPnt7aGludFRleHR9fTwvaW9uLWxhYmVsPlxuPC9pb24tY2hpcD5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IFtAc3Bpbm5lckFuaW1dIChAc3Bpbm5lckFuaW0uZG9uZSk9XCJvblNwaW5uZXJIaWRkZW4oJGV2ZW50KVwiICpuZ0lmPVwic3Bpbm5lclZpc2libGVcIiAjc3Bpbm5lciBjbGFzcz1cImdnLXNwaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJzcGlubmVyIHJvdGF0ZVwiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICA8Y2lyY2xlIFtAZmlsbEFuaW1dPVwiaXNDb21wbGV0ZSA/ICdmaWxsJyA6ICdzcGlubmluZydcIiAoQGZpbGxBbmltLmRvbmUpPVwiZmlsbEFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cInsncGF0aCc6ICFpc0NvbXBsZXRlfVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBjeD1cIjM2XCIgY3k9XCIzNlwiIHI9XCIzMlwiPjwvY2lyY2xlPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgICAgICAgPGlvbi1yZWZyZXNoZXIgKGlvblN0YXJ0KT1cIm9uU3RhcnQoKVwiIFtzbmFwYmFja0R1cmF0aW9uXT1cIjI4MFwiIFtjbG9zZUR1cmF0aW9uXT1cIjI4MFwiIFtwdWxsTWF4XT1cIjE2OFwiIFtwdWxsTWluXT1cIjExMlwiIFtkaXNhYmxlZF09XCJmYWxzZVwiIHNsb3Q9XCJmaXhlZFwiIChpb25SZWZyZXNoKT1cImRvUmVmcmVzaCgkZXZlbnQpXCIgKGlvblB1bGwpPVwib25QdWxsKCRldmVudClcIj5cbiAgICAgICAgPC9pb24tcmVmcmVzaGVyPlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYC5zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bGVmdDo4cHg7dG9wOjhweH0ucm90YXRley13ZWJraXQtYW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3I7YW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3J9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fUBrZXlmcmFtZXMgcm90YXRvcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX19LnBhdGh7c3Ryb2tlLWRhc2hhcnJheToxODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOy13ZWJraXQtYW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yczthbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBkYXNoLDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzfS5maWxse3N0cm9rZS1kYXNoYXJyYXk6MzYwO3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7YW5pbWF0aW9uOjEuNHMgZWFzZS1vdXQgZmlsbDtzdHJva2U6IzFiOWE1OX1ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUBrZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUAtd2Via2l0LWtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QGtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZmlsbHswJXtzdHJva2UtZGFzaG9mZnNldDozNjB9ODAle3N0cm9rZS1kYXNob2Zmc2V0OjE4MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19LmdnLXNwaW5uZXItY29udGFpbmVye3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDpjYWxjKDUwJSAtIDIwcHgpO3RvcDotNTZweDt6LWluZGV4Ojk7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItbGlnaHQpO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCA0cHggNnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDVweCByZ2JhKDAsMCwwLC4xKX0uZ2ctaGludC1jb250YWluZXJ7aGVpZ2h0OjQwcHg7cGFkZGluZy1sZWZ0OjhweDtwYWRkaW5nLXJpZ2h0OjhweDtwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1saWdodCk7Ym9yZGVyLXJhZGl1czo0MHB4O2JveC1zaGFkb3c6MCA0cHggNnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDVweCByZ2JhKDAsMCwwLC4xKTttYXJnaW46MH0uaWNvbntoZWlnaHQ6MjBweDt3aWR0aDoyMHB4O2JhY2tncm91bmQ6MCAwO2NvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrKX0udGV4dHtmb250LXNpemU6MWVtO2NvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrKX0uZ2ctaGludC13cmFwcGVye3dpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjExMnB4O3otaW5kZXg6ODt0ZXh0LWFsaWduOmNlbnRlcn1gXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHN0YXRlKCdmaWxsJywgc3R5bGUoe1xuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMzE1LFxuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDAsXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdzdHJva2UnOiAnIzFCOUE1OScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgKV1cbiAgICAgICAgKSxcbiAgICAgICAgdHJpZ2dlcignc3Bpbm5lckFuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIHRyaWdnZXIoJ2hpbnRBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtODBweCknIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoeyB3aWR0aDogJzExMnB4JyB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcsIHN0eWxlKHsgd2lkdGg6ICc0MHB4JyB9KSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICAgICksXG4gICAgXSxcblxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50UmVmcmVzaCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAT3V0cHV0KCkgb25Qcm9ncmVzc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxDb250ZW50UmVmcmVzaD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQFZpZXdDaGlsZCgnc3Bpbm5lcicpIHNwaW5uZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gICAgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHB1bGxpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICByZWZyZXNoaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgc3Bpbm5lclZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHRyYW5zbGF0ZVk6IG51bWJlciA9IDA7XG4gICAgaGludFZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBoaW50VGV4dDogc3RyaW5nID0gJ25ldyBwb3N0cyc7XG5cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIGZyb21FdmVudChkb2N1bWVudCwgJ3RvdWNoZW5kJykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndG91Y2hlbmQnLCByZXMpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHVsbGluZyAmJiAhdGhpcy5yZWZyZXNoaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQcm9ncmVzcygwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBzcGluUmVmcmVzaGVyKCkge1xuICAgICAgICB0aGlzLnNwaW5uZXIubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoMTY4cHgpYCk7XG4gICAgICAgIHRoaXMucmVmcmVzaGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucHVsbGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRvUmVmcmVzaChldmVudCkge1xuICAgICAgICB0aGlzLnNwaW5SZWZyZXNoZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2ggaGVyZScpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jb21wbGV0ZSgpO1xuICAgICAgICB9LCAxNDApO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcGxldGVSZWZyZXNoKCkge1xuICAgICAgICB0aGlzLnJlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvblB1bGwoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wdWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGV2ZW50LnRhcmdldC5nZXRQcm9ncmVzcygpO1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPD0gMSkge1xuICAgICAgICAgICAgdGhpcy5vblByb2dyZXNzQ2hhbmdlZC5lbWl0KHByb2dyZXNzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0YXJ0KCkge1xuICAgICAgICAvLyB0aGlzLmNoYW5nZVByb2dyZXNzKDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlWSA9IDExMiAqIHByb2dyZXNzO1xuICAgICAgICBjb25zdCB0cmFuc2xhdGVZID0gdGhpcy50cmFuc2xhdGVZO1xuICAgICAgICBjb25zb2xlLmxvZyhgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCk7XG4gICAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9KWApXG4gICAgICAgIHRoaXMuc3Bpbm5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCk7XG4gICAgICAgIC8vIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBmaWxsQW5pbWF0aW9uRG9uZShldmVudCkge1xuXG4gICAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZmlsbCcgJiYgZXZlbnQuZnJvbVN0YXRlID09PSAnc3Bpbm5pbmcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsbEFuaW0gY29tcGxldGUnLCBldmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lclZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGlubmVySGlkZGVuKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2ggY29tcGxldGUnLCBldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNwaW5uZXJWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2hvd0hpbnQoKSB7XG4gICAgICAgIHRoaXMuaGludFZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uSGludENsaWNrZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbiBoaW50IGNsaWNrZWQnKTtcbiAgICAgICAgdGhpcy5oaW50VmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHBvc3RIaW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgaWYgKCFldmVudC5mcm9tU3RhdGUgJiYgZXZlbnQudG9TdGF0ZSA9PSAndm9pZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5zcGluUmVmcmVzaGVyKCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctaW5maW5pdGUtc2Nyb2xsJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJnZy1yZWZyZXNoZXJcIj5cblxuICAgIDxkaXYgI3NwaW5uZXIgY2xhc3M9XCJnZy1zcGlubmVyLWNvbnRhaW5lclwiPlxuICAgIDxzdmcgY2xhc3M9XCJzcGlubmVyIHJvdGF0ZVwiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPGNpcmNsZSBbQGZpbGxBbmltXT1cImlzQ29tcGxldGUgPyAnZmlsbCcgOiAnc3Bpbm5pbmcnXCIgKEBmaWxsQW5pbS5kb25lKT1cImZpbGxBbmltYXRpb25Eb25lKCRldmVudClcIiBbbmdDbGFzc109XCJ7J3BhdGgnOiAhaXNDb21wbGV0ZX1cIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgY3g9XCIzNlwiIGN5PVwiMzZcIiByPVwiMzJcIj48L2NpcmNsZT5cbiA8L3N2Zz5cbiAgICA8L2Rpdj5cblxuICAgIFxuICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYGlvbi1zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOHB4O2xlZnQ6LThweDt3aWR0aDo3MnB4O2hlaWdodDo3MnB4fS5zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bGVmdDo4cHg7dG9wOjhweH0ucm90YXRley13ZWJraXQtYW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3I7YW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3J9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fUBrZXlmcmFtZXMgcm90YXRvcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX19LnBhdGh7c3Ryb2tlLWRhc2hhcnJheToxODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOy13ZWJraXQtYW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yczthbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBkYXNoLDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzfS5maWxse3N0cm9rZS1kYXNoYXJyYXk6MzYwO3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7YW5pbWF0aW9uOjEuNHMgZWFzZS1vdXQgZmlsbDtzdHJva2U6IzFiOWE1OX1ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUBrZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUAtd2Via2l0LWtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QGtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZmlsbHswJXtzdHJva2UtZGFzaG9mZnNldDozNjB9ODAle3N0cm9rZS1kYXNob2Zmc2V0OjE4MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19LmdnLXJlZnJlc2hlcntkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjExMnB4O3Bvc2l0aW9uOnJlbGF0aXZlfS5nZy1zcGlubmVyLWNvbnRhaW5lcnt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6Y2FsYyg1MCUgLSAyMHB4KTt0b3A6MTZweDtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1saWdodCk7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNoYWRvdzowIDRweCA2cHggMCByZ2JhKDAsMCwwLC4xNCksMCA0cHggNXB4IHJnYmEoMCwwLDAsLjEpfWBdLFxuICAgIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdmYWJBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSlcbiAgICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdzcGlubmVyQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSkpXG4gICAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbignbm9ybWFsID0+IHJvdGF0ZScsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJ3JvdGF0ZSA9PiBub3JtYWwnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLWluJylcbiAgICAgICAgXSksXG4gICAgICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZyknIH0pKSxcbiAgICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDBkZWcpJyB9KSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMTgwLFxuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyNERTNFMzUnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzgwMG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHN0YXRlKCdmaWxsJywgc3R5bGUoe1xuICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAzMTUsXG4gICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgJ3N0cm9rZSc6ICcjMUI5QTU5JyxcbiAgICAgICAgICAgICdvcGFjaXR5JzogMFxuICAgICAgICB9KVxuICAgICAgICApXVxuICAgICldLFxuXG59KVxuZXhwb3J0IGNsYXNzIEluZmluaXRlU2Nyb2xsQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc3BpbkNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZmFiQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSB2ZXJ0aWNhbDogc3RyaW5nID0gXCJib3R0b21cIjtcbiAgICBASW5wdXQoKSBob3Jpem9udGFsOiBzdHJpbmcgPSBcImVuZFwiO1xuICAgIEBJbnB1dCgpIGVkZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjaGVja21hcms6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBkcmFnUHJvZ3Jlc3M6IG51bWJlciA9IDA7XG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpY29uU3RhdGU6IHN0cmluZyA9ICdub3JtYWwnO1xuXG4gICAgQFZpZXdDaGlsZCgnc3Bpbm5lcicpIHNwaW5uZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBAT3V0cHV0KCkgb25Db21wbGV0ZTogRXZlbnRFbWl0dGVyPEluZmluaXRlU2Nyb2xsQ29udGVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEluZmluaXRlU2Nyb2xsQ29udGVudD4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8SW5maW5pdGVTY3JvbGxDb250ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SW5maW5pdGVTY3JvbGxDb250ZW50PigpO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBjaGFuZ2U6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaWNvbiAhPSAnbWQtY2hlY2ttYXJrJykge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQoKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaWxsQW5pbWF0aW9uRG9uZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09ICdzcGlubmluZycpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrbWFyaykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxsIGFuaW1hdGlvbiBkb25lJywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvblN0YXRlID0gXCJyb3RhdGVcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0Q29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUljb25BbmRSZXZlYWwoZXZlbnQsIGljb246IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCwgaWNvbik7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT0gJ25vcm1hbCcpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgICAgICAgICB0aGlzLmljb25TdGF0ZSA9IFwibm9ybWFsXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSBcInJvdGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0Q29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9zdENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLnVubG9hZCgpO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kcmFnUHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlWSA9IE1hdGguZmxvb3IoLTgwICsgODAgKiBwcm9ncmVzcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX1weClgKTtcbiAgICAgICAgLy8gdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwaW5uZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX0pYClcbiAgICAgICAgdGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX1weClgKVxuICAgICAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJTcGlubmVyIH0gZnJvbSAnLi9mYWIvZmFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25GdWxsIH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtUHJvZ3Jlc3MgfSBmcm9tICcuL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudFJlZnJlc2ggfSBmcm9tICcuL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGxDb250ZW50IH0gZnJvbSAnLi9pbmZpbml0ZS1zY3JvbGwtY29udGVudC9pbmZpbml0ZS1zY3JvbGx0LWNvbnRlbnQuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ZhYlNwaW5uZXIsIFByb2dyZXNzQmFyLCBCdXR0b25GdWxsLEl0ZW1Qcm9ncmVzcyxDb250ZW50UmVmcmVzaCxJbmZpbml0ZVNjcm9sbENvbnRlbnRdLFxuICBleHBvcnRzOiBbRmFiU3Bpbm5lciwgUHJvZ3Jlc3NCYXIsIEJ1dHRvbkZ1bGwsIEl0ZW1Qcm9ncmVzcyxDb250ZW50UmVmcmVzaCxJbmZpbml0ZVNjcm9sbENvbnRlbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQWVFO3VCQU4wQixLQUFLOzBCQUNGLEtBQUs7MEJBQ1ksSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQzs4QkFDdEMsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUc5RTs7OztJQUVqQixJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztLQUN6Qjs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUM5Qjs7OztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxD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