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
  <div *ngIf="!isComplete" class="line"></div>
  <div *ngIf="!isComplete" class="subline inc"></div>
  <div [@fillAnim] (@fillAnim.done)="fillAnimationComplete(isComplete)" *ngIf="isComplete" class="subline fill"></div>
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
                styles: [`.slider{position:absolute;width:100%;height:5px;overflow-x:hidden;z-index:5000}.line{position:absolute;opacity:.4;background:var(--ion-color-primary);width:150%;height:5px}.subline{position:absolute;background:var(--ion-color-primary);height:5px}.inc{-webkit-animation:1.6s infinite increase;animation:1.6s infinite increase}.dec{-webkit-animation:1.6s .4s infinite decrease;animation:1.6s .4s infinite decrease}.fill{left:0;width:100%}@-webkit-keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@-webkit-keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}`]
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
        this.spinner.nativeElement.style.setProperty('transform', `translateY(112px)`);
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
    <ion-content #content fullscreen>
        <ion-refresher (ionStart)="onStart()" [snapbackDuration]="280" [closeDuration]="280" [pullMax]="168" [pullMin]="112" [disabled]="false" slot="fixed" (ionRefresh)="doRefresh($event)" (ionPull)="onPull($event)">
        </ion-refresher>

        <ng-content></ng-content>
    </ion-content>
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
                styles: [`.spinner{position:absolute;width:24px;height:24px;left:8px;top:8px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}.gg-spinner-container{width:40px;height:40px;position:absolute;left:calc(50% - 20px);top:0;z-index:9;background:var(--ion-color-light);border-radius:50%;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1)}.gg-hint-container{height:40px;padding-left:8px;padding-right:8px;position:relative;background:var(--ion-color-light);border-radius:40px;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1);margin:0}.icon{height:20px;width:20px;background:0 0;color:var(--ion-color-dark)}.text{font-size:1em;color:var(--ion-color-dark)}.gg-hint-wrapper{width:100%;position:absolute;top:112px;z-index:8;text-align:center}`]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy9saWIvbG9hZGluZy5zZXJ2aWNlLnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy9saWIvZmFiL2ZhYi5jb21wb25lbnQudHMiLCJuZzovL2lvbmljLW1hdGVyaWFsLWxvYWRpbmcvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9pdGVtL2l0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9pbmZpbml0ZS1zY3JvbGwtY29udGVudC9pbmZpbml0ZS1zY3JvbGx0LWNvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nL2xpYi9sb2FkaW5nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2VydmljZSB7XG5cbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGxvYWRDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odGhpcy5sb2FkaW5nKTtcbiAgcHVibGljIGNvbXBsZXRlQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRoaXMuaXNDb21wbGV0ZSk7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWRDaGFuZ2UubmV4dCh0aGlzLmxvYWRpbmcpO1xuICB9XG5cbiAgdW5sb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubG9hZENoYW5nZS5uZXh0KHRoaXMubG9hZGluZyk7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGVTcGlubmVyKCkge1xuICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gIH1cblxuICBjb21wbGV0ZSgpe1xuICAgIGNvbnNvbGUubG9nKCdzZXQgc2VydmljZSBjb21wbGV0ZScpO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgdGhpcy5jb21wbGV0ZUNoYW5nZS5uZXh0KHRoaXMuaXNDb21wbGV0ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gJy4uL2xvYWRpbmcuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZy1sb2FkaW5nLXByb2dyZXNzYmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBbQHByb2dyZXNzQW5pbV0gKm5nSWY9XCIoIWdsb2JhbCAmJiBsb2FkaW5nKSB8fCAoZ2xvYmFsICYmIGxvYWRpbmdTZXJ2aWNlLmxvYWRpbmcpXCIgY2xhc3M9XCJzbGlkZXJcIj5cbiAgPGRpdiAqbmdJZj1cIiFpc0NvbXBsZXRlXCIgY2xhc3M9XCJsaW5lXCI+PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCIhaXNDb21wbGV0ZVwiIGNsYXNzPVwic3VibGluZSBpbmNcIj48L2Rpdj5cbiAgPGRpdiBbQGZpbGxBbmltXSAoQGZpbGxBbmltLmRvbmUpPVwiZmlsbEFuaW1hdGlvbkNvbXBsZXRlKGlzQ29tcGxldGUpXCIgKm5nSWY9XCJpc0NvbXBsZXRlXCIgY2xhc3M9XCJzdWJsaW5lIGZpbGxcIj48L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIiFpc0NvbXBsZXRlXCIgY2xhc3M9XCJzdWJsaW5lIGRlY1wiPjwvZGl2PlxuPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgLnNsaWRlcntwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDo1cHg7b3ZlcmZsb3cteDpoaWRkZW47ei1pbmRleDo1MDAwfS5saW5le3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6LjQ7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7d2lkdGg6MTUwJTtoZWlnaHQ6NXB4fS5zdWJsaW5le3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO2hlaWdodDo1cHh9LmluY3std2Via2l0LWFuaW1hdGlvbjoxLjZzIGluZmluaXRlIGluY3JlYXNlO2FuaW1hdGlvbjoxLjZzIGluZmluaXRlIGluY3JlYXNlfS5kZWN7LXdlYmtpdC1hbmltYXRpb246MS42cyAuNHMgaW5maW5pdGUgZGVjcmVhc2U7YW5pbWF0aW9uOjEuNnMgLjRzIGluZmluaXRlIGRlY3JlYXNlfS5maWxse2xlZnQ6MDt3aWR0aDoxMDAlfUAtd2Via2l0LWtleWZyYW1lcyBpbmNyZWFzZXtmcm9te2xlZnQ6LTUlO3dpZHRoOjUlfXRve2xlZnQ6MTMwJTt3aWR0aDoxMDAlfX1Aa2V5ZnJhbWVzIGluY3JlYXNle2Zyb217bGVmdDotNSU7d2lkdGg6NSV9dG97bGVmdDoxMzAlO3dpZHRoOjEwMCV9fUAtd2Via2l0LWtleWZyYW1lcyBkZWNyZWFzZXtmcm9te2xlZnQ6LTgwJTt3aWR0aDo4MCV9dG97bGVmdDoxMTAlO3dpZHRoOjEwJX19QGtleWZyYW1lcyBkZWNyZWFzZXtmcm9te2xlZnQ6LTgwJTt3aWR0aDo4MCV9dG97bGVmdDoxMTAlO3dpZHRoOjEwJX19YF0sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdwcm9ncmVzc0FuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI5OW1zIGVhc2UtaW4nLCBzdHlsZSh7IGhlaWdodDogJzBweCcgfSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBsZWZ0OiAnLTUlJywgd2lkdGg6ICc1JScgfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnODUwbXMgZWFzZS1vdXQnLCBzdHlsZSh7IGxlZnQ6ICcwJScsIHdpZHRoOiAnMTAwJScgfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGdsb2JhbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGlzQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAT3V0cHV0KCkgb25Db21wbGV0ZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxQcm9ncmVzc0Jhcj4gPSBuZXcgRXZlbnRFbWl0dGVyPFByb2dyZXNzQmFyPigpO1xuXG4gICAgQFZpZXdDaGlsZCgnYmFyJykgYmFyOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGxvYWRpbmdTZXJ2aWNlOiBMb2FkaW5nU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5nbG9iYWwpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuY29tcGxldGVDaGFuZ2Uuc3Vic2NyaWJlKGlzQ29tcGxldGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5jb21wbGV0ZUNoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXQgY29tcGxldGUnKTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0NvbXBsZXRlKTtcbiAgICB9XG5cbiAgICBmaWxsQW5pbWF0aW9uQ29tcGxldGUoaXNDb21wbGV0ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbGwgYW5pbWF0aW9uIGNvbXBsZXRlJywgaXNDb21wbGV0ZSk7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUuZW1pdChpc0NvbXBsZXRlKTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS51bmxvYWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bmxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2ctbG9hZGluZy1mYWInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpb24tZmFiIFtAZmFiQW5pbV0gW3ZlcnRpY2FsXT1cInZlcnRpY2FsXCIgW2hvcml6b250YWxdPVwiaG9yaXpvbnRhbFwiIFtlZGdlXT1cImVkZ2VcIj5cbiAgICAgICAgPHN2ZyAqbmdJZj1cImxvYWRpbmdcIiAjc3Bpbm5lciBjbGFzcz1cInNwaW5uZXIgcm90YXRlXCIgdmlld0JveD1cIjAgMCA3MiA3MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8Y2lyY2xlIFtAZmlsbEFuaW1dPVwiaXNDb21wbGV0ZSA/ICdmaWxsJyA6ICdzcGlubmluZydcIiAoQGZpbGxBbmltLmRvbmUpPVwiZmlsbEFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cInsncGF0aCc6ICFpc0NvbXBsZXRlfVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBjeD1cIjM2XCIgY3k9XCIzNlwiIHI9XCIzMlwiPjwvY2lyY2xlPlxuIDwvc3ZnPlxuICAgICAgICAgICAgPGlvbi1mYWItYnV0dG9uIFtjb2xvcl09XCJmYWJDb2xvclwiPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBbQHJvdGF0ZUFuaW1dPVwiaWNvblN0YXRlXCIgKEByb3RhdGVBbmltLmRvbmUpPVwiY2hhbmdlSWNvbkFuZFJldmVhbCgkZXZlbnQsJ21kLWNoZWNrbWFyaycpXCIgW25hbWVdPVwiaWNvblwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8L2lvbi1mYWItYnV0dG9uPlxuXG4gICAgICAgIDwvaW9uLWZhYj5cbiAgICBgLFxuICAgIHN0eWxlczogW2Bpb24tc3Bpbm5lcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LThweDtsZWZ0Oi04cHg7d2lkdGg6NzJweDtoZWlnaHQ6NzJweH0uc3Bpbm5lcntwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo3MnB4O2hlaWdodDo3MnB4O2xlZnQ6LThweDt0b3A6LThweH0ucm90YXRley13ZWJraXQtYW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3I7YW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3J9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fUBrZXlmcmFtZXMgcm90YXRvcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX19LnBhdGh7c3Ryb2tlLWRhc2hhcnJheToxODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOy13ZWJraXQtYW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yczthbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBkYXNoLDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzfS5maWxse3N0cm9rZS1kYXNoYXJyYXk6MzYwO3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7YW5pbWF0aW9uOjEuNHMgZWFzZS1vdXQgZmlsbDtzdHJva2U6IzFiOWE1OX1ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUBrZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUAtd2Via2l0LWtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QGtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZmlsbHswJXtzdHJva2UtZGFzaG9mZnNldDozNjB9ODAle3N0cm9rZS1kYXNob2Zmc2V0OjE4MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19YF0sXG4gICAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2ZhYkFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLFxuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKVxuICAgICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3NwaW5uZXJBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSlcbiAgICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdyb3RhdGVBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCdub3JtYWwgPT4gcm90YXRlJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbigncm90YXRlID0+IG5vcm1hbCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2UtaW4nKVxuICAgICAgICBdKSxcbiAgICAgICAgc3RhdGUoJ3JvdGF0ZScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKScgfSkpLFxuICAgICAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3JvdGF0ZVooMGRlZyknIH0pKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IGZpbGwnLCBbXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5pbWF0ZSgnMTQwMG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHN0YXRlKCdmaWxsJywgc3R5bGUoe1xuICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAzMTUsXG4gICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgJ3N0cm9rZSc6ICcjMUI5QTU5JyxcbiAgICAgICAgICAgICdvcGFjaXR5JzogMFxuICAgICAgICB9KVxuICAgICAgICApXVxuICAgICldLFxuXG59KVxuZXhwb3J0IGNsYXNzIEZhYlNwaW5uZXIgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNwaW5Db2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZhYkNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdmVydGljYWw6IHN0cmluZyA9IFwiYm90dG9tXCI7XG4gICAgQElucHV0KCkgaG9yaXpvbnRhbDogc3RyaW5nID0gXCJlbmRcIjtcbiAgICBASW5wdXQoKSBlZGdlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgY2hlY2ttYXJrOiBib29sZWFuID0gZmFsc2U7XG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpY29uU3RhdGU6IHN0cmluZyA9ICdub3JtYWwnO1xuXG4gICAgQFZpZXdDaGlsZCgnc3Bpbm5lcicpIHNwaW5uZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBAT3V0cHV0KCkgb25Db21wbGV0ZTogRXZlbnRFbWl0dGVyPEZhYlNwaW5uZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxGYWJTcGlubmVyPigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxGYWJTcGlubmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmFiU3Bpbm5lcj4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIGlmKHRoaXMuaWNvbiAhPSAnbWQtY2hlY2ttYXJrJyl7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZih0aGlzLmxvYWRpbmcpe1xuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlsbEFuaW1hdGlvbkRvbmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PSAnc3Bpbm5pbmcnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja21hcmspIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsbCBhbmltYXRpb24gZG9uZScsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TdGF0ZSA9IFwicm90YXRlXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VJY29uQW5kUmV2ZWFsKGV2ZW50LCBpY29uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQsIGljb24pO1xuICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09ICdub3JtYWwnKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgICAgICAgdGhpcy5pY29uU3RhdGUgPSBcIm5vcm1hbFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gXCJyb3RhdGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy51bmxvYWQoKTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Db21wbGV0ZS5lbWl0KHRoaXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tICcuLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZy1sb2FkaW5nLWJ1dHRvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8Z2ctbG9hZGluZy1wcm9ncmVzc2JhciAob25Db21wbGV0ZSk9XCJvbkNvbXBsZXRlKCRldmVudClcIiAjcHJvZ3Jlc3MgW2dsb2JhbF09XCJmYWxzZVwiPjwvZ2ctbG9hZGluZy1wcm9ncmVzc2Jhcj5cbiAgICA8aW9uLWJ1dHRvbiBbZXhwYW5kXT1cImV4cGFuZFwiIFtjb2xvcl09XCJjb2xvclwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9pb24tYnV0dG9uPlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgMjBweDt3aWR0aDpjYWxjKDEwMCUgLSA0MHB4KX1gXSxcblxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25GdWxsIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoJ3Byb2dyZXNzJykgcHJvZ3Jlc3M6IFByb2dyZXNzQmFyO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnbGlnaHQnO1xuICAgIEBJbnB1dCgpIGV4cGFuZDogc3RyaW5nID0gJ2Jsb2NrJztcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8QnV0dG9uRnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaENvbXBsZXRlOiBFdmVudEVtaXR0ZXI8QnV0dG9uRnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MudG9nZ2xlU3Bpbm5lcigpO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MubG9hZCgpO1xuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MudW5sb2FkKCk7XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29tcGxldGUoaXNDb21wbGV0ZTogYm9vbGVhbikge1xuICAgICAgICBjb25zb2xlLmxvZygnb24gY29tcGxldGUnLCBpc0NvbXBsZXRlKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25SZWZyZXNoQ29tcGxldGUuZW1pdCh0aGlzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2ctbG9hZGluZy1pdGVtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxpb24taXRlbSBbbmdDbGFzc109XCJ7J2xvYWRpbmcnOiBsb2FkaW5nfVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9pb24taXRlbT5cbiAgPGdnLWxvYWRpbmctcHJvZ3Jlc3NiYXIgKG9uQ29tcGxldGUpPVwib25Db21wbGV0ZSgkZXZlbnQpXCIgI3Byb2dyZXNzIFtnbG9iYWxdPVwiZmFsc2VcIj48L2dnLWxvYWRpbmctcHJvZ3Jlc3NiYXI+XG5cbiAgICBgLFxuICAgIHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjowO3dpZHRoOmNhbGMoMTAwJSl9aW9uLWl0ZW17YmFja2dyb3VuZDojZmZmfS5sb2FkaW5ne21hcmdpbjo0cHg7d2lkdGg6Y2FsYygxMDAlIC0gOHB4KTt0cmFuc2l0aW9uOi4ycztib3JkZXItcmFkaXVzOjhweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2JveC1zaGFkb3c6MCA0cHggMTZweCByZ2JhKDAsMCwwLC4xMil9YF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgSXRlbVByb2dyZXNzIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoJ3Byb2dyZXNzJykgcHJvZ3Jlc3M6IFByb2dyZXNzQmFyO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2hDb21wbGV0ZTogRXZlbnRFbWl0dGVyPEl0ZW1Qcm9ncmVzcz4gPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1Qcm9ncmVzcz4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8SXRlbVByb2dyZXNzPiA9IG5ldyBFdmVudEVtaXR0ZXI8SXRlbVByb2dyZXNzPigpO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICB0b2dnbGVTcGlubmVyKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnRvZ2dsZVNwaW5uZXIoKTtcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2dyZXNzLmxvYWQoKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnVubG9hZCgpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlKGlzQ29tcGxldGU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uIGNvbXBsZXRlJywgaXNDb21wbGV0ZSk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaENvbXBsZXRlLmVtaXQodGhpcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgc3RhdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctY29udGVudCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZ2ctaGludC13cmFwcGVyXCI+XG4gICAgPGlvbi1jaGlwICpuZ0lmPVwiaGludFZpc2libGVcIiAoY2xpY2spPVwib25IaW50Q2xpY2tlZCgpXCIgW0BoaW50QW5pbV0gKEBoaW50QW5pbS5kb25lKT1cInBvc3RIaW50KCRldmVudClcIiAjaGludCBjbGFzcz1cImdnLWhpbnQtY29udGFpbmVyXCI+XG4gIDxpb24taWNvbiBjbGFzcz1cImljb25cIiBuYW1lPVwibWQtYXJyb3ctdXBcIj48L2lvbi1pY29uPlxuICA8aW9uLWxhYmVsIGNsYXNzPVwidGV4dFwiPnt7aGludFRleHR9fTwvaW9uLWxhYmVsPlxuPC9pb24tY2hpcD5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IFtAc3Bpbm5lckFuaW1dIChAc3Bpbm5lckFuaW0uZG9uZSk9XCJvblNwaW5uZXJIaWRkZW4oJGV2ZW50KVwiICpuZ0lmPVwic3Bpbm5lclZpc2libGVcIiAjc3Bpbm5lciBjbGFzcz1cImdnLXNwaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJzcGlubmVyIHJvdGF0ZVwiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICA8Y2lyY2xlIFtAZmlsbEFuaW1dPVwiaXNDb21wbGV0ZSA/ICdmaWxsJyA6ICdzcGlubmluZydcIiAoQGZpbGxBbmltLmRvbmUpPVwiZmlsbEFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cInsncGF0aCc6ICFpc0NvbXBsZXRlfVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBjeD1cIjM2XCIgY3k9XCIzNlwiIHI9XCIzMlwiPjwvY2lyY2xlPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgICA8aW9uLWNvbnRlbnQgI2NvbnRlbnQgZnVsbHNjcmVlbj5cbiAgICAgICAgPGlvbi1yZWZyZXNoZXIgKGlvblN0YXJ0KT1cIm9uU3RhcnQoKVwiIFtzbmFwYmFja0R1cmF0aW9uXT1cIjI4MFwiIFtjbG9zZUR1cmF0aW9uXT1cIjI4MFwiIFtwdWxsTWF4XT1cIjE2OFwiIFtwdWxsTWluXT1cIjExMlwiIFtkaXNhYmxlZF09XCJmYWxzZVwiIHNsb3Q9XCJmaXhlZFwiIChpb25SZWZyZXNoKT1cImRvUmVmcmVzaCgkZXZlbnQpXCIgKGlvblB1bGwpPVwib25QdWxsKCRldmVudClcIj5cbiAgICAgICAgPC9pb24tcmVmcmVzaGVyPlxuXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2lvbi1jb250ZW50PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYC5zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bGVmdDo4cHg7dG9wOjhweH0ucm90YXRley13ZWJraXQtYW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3I7YW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3J9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fUBrZXlmcmFtZXMgcm90YXRvcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX19LnBhdGh7c3Ryb2tlLWRhc2hhcnJheToxODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOy13ZWJraXQtYW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yczthbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBkYXNoLDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzfS5maWxse3N0cm9rZS1kYXNoYXJyYXk6MzYwO3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7YW5pbWF0aW9uOjEuNHMgZWFzZS1vdXQgZmlsbDtzdHJva2U6IzFiOWE1OX1ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUBrZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUAtd2Via2l0LWtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QGtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZmlsbHswJXtzdHJva2UtZGFzaG9mZnNldDozNjB9ODAle3N0cm9rZS1kYXNob2Zmc2V0OjE4MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19LmdnLXNwaW5uZXItY29udGFpbmVye3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDpjYWxjKDUwJSAtIDIwcHgpO3RvcDowO3otaW5kZXg6OTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1saWdodCk7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNoYWRvdzowIDRweCA2cHggMCByZ2JhKDAsMCwwLC4xNCksMCA0cHggNXB4IHJnYmEoMCwwLDAsLjEpfS5nZy1oaW50LWNvbnRhaW5lcntoZWlnaHQ6NDBweDtwYWRkaW5nLWxlZnQ6OHB4O3BhZGRpbmctcmlnaHQ6OHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtib3JkZXItcmFkaXVzOjQwcHg7Ym94LXNoYWRvdzowIDRweCA2cHggMCByZ2JhKDAsMCwwLC4xNCksMCA0cHggNXB4IHJnYmEoMCwwLDAsLjEpO21hcmdpbjowfS5pY29ue2hlaWdodDoyMHB4O3dpZHRoOjIwcHg7YmFja2dyb3VuZDowIDA7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmspfS50ZXh0e2ZvbnQtc2l6ZToxZW07Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmspfS5nZy1oaW50LXdyYXBwZXJ7d2lkdGg6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTEycHg7ei1pbmRleDo4O3RleHQtYWxpZ246Y2VudGVyfWBdLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IGZpbGwnLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDE4MCxcbiAgICAgICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0cm9rZSc6ICcjREUzRTM1J1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgc3RhdGUoJ2ZpbGwnLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAzMTUsXG4gICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogMCxcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgJ3N0cm9rZSc6ICcjMUI5QTU5JyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXVxuICAgICAgICApLFxuICAgICAgICB0cmlnZ2VyKCdzcGlubmVyQW5pbScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgICAgdHJpZ2dlcignaGludEFuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC04MHB4KScgfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7IHdpZHRoOiAnMTEycHgnIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0Jywgc3R5bGUoeyB3aWR0aDogJzQwcHgnIH0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICAgKSxcbiAgICBdLFxuXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRSZWZyZXNoIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBPdXRwdXQoKSBvblByb2dyZXNzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaDogRXZlbnRFbWl0dGVyPENvbnRlbnRSZWZyZXNoPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAVmlld0NoaWxkKCdzcGlubmVyJykgc3Bpbm5lcjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudDogRWxlbWVudFJlZjtcbiAgICBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgcHVsbGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHJlZnJlc2hpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzcGlubmVyVmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgdHJhbnNsYXRlWTogbnVtYmVyID0gMDtcbiAgICBoaW50VmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGhpbnRUZXh0OiBzdHJpbmcgPSAnbmV3IHBvc3RzJztcblxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LCAndG91Y2hlbmQnKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b3VjaGVuZCcsIHJlcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5wdWxsaW5nICYmICF0aGlzLnJlZnJlc2hpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVByb2dyZXNzKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHNwaW5SZWZyZXNoZXIoKSB7XG4gICAgICAgIHRoaXMuc3Bpbm5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgxMTJweClgKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wdWxsaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZG9SZWZyZXNoKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc3BpblJlZnJlc2hlcigpO1xuICAgICAgICBjb25zb2xlLmxvZygncmVmcmVzaCBoZXJlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNvbXBsZXRlKCk7XG4gICAgICAgIH0sIDE0MCk7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgfVxuXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZVJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uUHVsbChldmVudCkge1xuICAgICAgICB0aGlzLnB1bGxpbmcgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gZXZlbnQudGFyZ2V0LmdldFByb2dyZXNzKCk7XG4gICAgICAgIGlmIChwcm9ncmVzcyA8PSAxKSB7XG4gICAgICAgICAgICB0aGlzLm9uUHJvZ3Jlc3NDaGFuZ2VkLmVtaXQocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQcm9ncmVzcyhwcm9ncmVzcyk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3RhcnQoKSB7XG4gICAgICAgIC8vIHRoaXMuY2hhbmdlUHJvZ3Jlc3MoMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVZID0gMTEyICogcHJvZ3Jlc3M7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSB0aGlzLnRyYW5zbGF0ZVk7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX1weClgKTtcbiAgICAgICAgLy8gdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwaW5uZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX0pYClcbiAgICAgICAgdGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX1weClgKTtcbiAgICAgICAgLy8gdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIGZpbGxBbmltYXRpb25Eb25lKGV2ZW50KSB7XG5cbiAgICAgICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdmaWxsJyAmJiBldmVudC5mcm9tU3RhdGUgPT09ICdzcGlubmluZycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxsQW5pbSBjb21wbGV0ZScsIGV2ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5zcGlubmVyVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNwaW5uZXJIaWRkZW4oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSAhPT0gJ3ZvaWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVmcmVzaCBjb21wbGV0ZScsIGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lclZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzaG93SGludCgpIHtcbiAgICAgICAgdGhpcy5oaW50VmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25IaW50Q2xpY2tlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uIGhpbnQgY2xpY2tlZCcpO1xuICAgICAgICB0aGlzLmhpbnRWaXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcG9zdEhpbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICBpZiAoIWV2ZW50LmZyb21TdGF0ZSAmJiBldmVudC50b1N0YXRlID09ICd2b2lkJykge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLnNwaW5SZWZyZXNoZXIoKTtcblxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2ctbG9hZGluZy1pbmZpbml0ZS1zY3JvbGwnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImdnLXJlZnJlc2hlclwiPlxuXG4gICAgPGRpdiAjc3Bpbm5lciBjbGFzcz1cImdnLXNwaW5uZXItY29udGFpbmVyXCI+XG4gICAgPHN2ZyBjbGFzcz1cInNwaW5uZXIgcm90YXRlXCIgdmlld0JveD1cIjAgMCA3MiA3MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8Y2lyY2xlIFtAZmlsbEFuaW1dPVwiaXNDb21wbGV0ZSA/ICdmaWxsJyA6ICdzcGlubmluZydcIiAoQGZpbGxBbmltLmRvbmUpPVwiZmlsbEFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cInsncGF0aCc6ICFpc0NvbXBsZXRlfVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBjeD1cIjM2XCIgY3k9XCIzNlwiIHI9XCIzMlwiPjwvY2lyY2xlPlxuIDwvc3ZnPlxuICAgIDwvZGl2PlxuXG4gICAgXG4gICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgaW9uLXNwaW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOi04cHg7bGVmdDotOHB4O3dpZHRoOjcycHg7aGVpZ2h0OjcycHh9LnNwaW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtsZWZ0OjhweDt0b3A6OHB4fS5yb3RhdGV7LXdlYmtpdC1hbmltYXRpb246MS40cyBsaW5lYXIgaW5maW5pdGUgcm90YXRvcjthbmltYXRpb246MS40cyBsaW5lYXIgaW5maW5pdGUgcm90YXRvcn1ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRvcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX19QGtleWZyYW1lcyByb3RhdG9yezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfX0ucGF0aHtzdHJva2UtZGFzaGFycmF5OjE4NztzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7LXdlYmtpdC1hbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBkYXNoLDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzO2FuaW1hdGlvbjoxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGRhc2gsNS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnN9LmZpbGx7c3Ryb2tlLWRhc2hhcnJheTozNjA7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOy13ZWJraXQtYW5pbWF0aW9uOjEuNHMgZWFzZS1vdXQgZmlsbDthbmltYXRpb246MS40cyBlYXNlLW91dCBmaWxsO3N0cm9rZTojMWI5YTU5fUAtd2Via2l0LWtleWZyYW1lcyBjb2xvcnN7MCUsMTAwJXtzdHJva2U6IzQyODVmNH0yNSV7c3Ryb2tlOiNkZTNlMzV9NTAle3N0cm9rZTojZjdjMjIzfTc1JXtzdHJva2U6IzFiOWE1OX19QGtleWZyYW1lcyBjb2xvcnN7MCUsMTAwJXtzdHJva2U6IzQyODVmNH0yNSV7c3Ryb2tlOiNkZTNlMzV9NTAle3N0cm9rZTojZjdjMjIzfTc1JXtzdHJva2U6IzFiOWE1OX19QC13ZWJraXQta2V5ZnJhbWVzIGRhc2h7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3fTUwJXtzdHJva2UtZGFzaG9mZnNldDo0Ni43NTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDoxODc7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpfX1Aa2V5ZnJhbWVzIGRhc2h7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3fTUwJXtzdHJva2UtZGFzaG9mZnNldDo0Ni43NTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDoxODc7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmlsbHswJXtzdHJva2UtZGFzaG9mZnNldDozNjB9ODAle3N0cm9rZS1kYXNob2Zmc2V0OjE4MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QGtleWZyYW1lcyBmaWxsezAle3N0cm9rZS1kYXNob2Zmc2V0OjM2MH04MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTgwOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpfX0uZ2ctcmVmcmVzaGVye2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MTEycHg7cG9zaXRpb246cmVsYXRpdmV9LmdnLXNwaW5uZXItY29udGFpbmVye3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDpjYWxjKDUwJSAtIDIwcHgpO3RvcDoxNnB4O2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtib3JkZXItcmFkaXVzOjUwJTtib3gtc2hhZG93OjAgNHB4IDZweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDRweCA1cHggcmdiYSgwLDAsMCwuMSl9YF0sXG4gICAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2ZhYkFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLFxuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKVxuICAgICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3NwaW5uZXJBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSlcbiAgICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdyb3RhdGVBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCdub3JtYWwgPT4gcm90YXRlJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbigncm90YXRlID0+IG5vcm1hbCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2UtaW4nKVxuICAgICAgICBdKSxcbiAgICAgICAgc3RhdGUoJ3JvdGF0ZScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKScgfSkpLFxuICAgICAgICBzdGF0ZSgnbm9ybWFsJywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3JvdGF0ZVooMGRlZyknIH0pKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IGZpbGwnLCBbXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5pbWF0ZSgnODAwbXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgc3RhdGUoJ2ZpbGwnLCBzdHlsZSh7XG4gICAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDMxNSxcbiAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDAsXG4gICAgICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAnc3Ryb2tlJzogJyMxQjlBNTknLFxuICAgICAgICAgICAgJ29wYWNpdHknOiAwXG4gICAgICAgIH0pXG4gICAgICAgICldXG4gICAgKV0sXG5cbn0pXG5leHBvcnQgY2xhc3MgSW5maW5pdGVTY3JvbGxDb250ZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBzcGluQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBmYWJDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZlcnRpY2FsOiBzdHJpbmcgPSBcImJvdHRvbVwiO1xuICAgIEBJbnB1dCgpIGhvcml6b250YWw6IHN0cmluZyA9IFwiZW5kXCI7XG4gICAgQElucHV0KCkgZWRnZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNoZWNrbWFyazogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGRyYWdQcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGljb25TdGF0ZTogc3RyaW5nID0gJ25vcm1hbCc7XG5cbiAgICBAVmlld0NoaWxkKCdzcGlubmVyJykgc3Bpbm5lcjogRWxlbWVudFJlZjtcblxuICAgIEBPdXRwdXQoKSBvbkNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8SW5maW5pdGVTY3JvbGxDb250ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SW5maW5pdGVTY3JvbGxDb250ZW50PigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxJbmZpbml0ZVNjcm9sbENvbnRlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJbmZpbml0ZVNjcm9sbENvbnRlbnQ+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGNoYW5nZTogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICB0b2dnbGVTcGlubmVyKCkge1xuICAgICAgICBpZiAodGhpcy5pY29uICE9ICdtZC1jaGVja21hcmsnKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdCgpO1xuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbGxBbmltYXRpb25Eb25lKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT0gJ3NwaW5uaW5nJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2ttYXJrKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbGwgYW5pbWF0aW9uIGRvbmUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3RhdGUgPSBcInJvdGF0ZVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LCBpY29uKTtcbiAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PSAnbm9ybWFsJykge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICAgICAgICAgIHRoaXMuaWNvblN0YXRlID0gXCJub3JtYWxcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09IFwicm90YXRlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3N0Q29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMudW5sb2FkKCk7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlUHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRyYWdQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICBjb25zdCB0cmFuc2xhdGVZID0gTWF0aC5mbG9vcigtODAgKyA4MCAqIHByb2dyZXNzKTtcbiAgICAgICAgY29uc29sZS5sb2coYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfXB4KWApO1xuICAgICAgICAvLyB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3Bpbm5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfSlgKVxuICAgICAgICB0aGlzLnNwaW5uZXIubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfXB4KWApXG4gICAgICAgIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tICcuL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYlNwaW5uZXIgfSBmcm9tICcuL2ZhYi9mYWIuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbkZ1bGwgfSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1Qcm9ncmVzcyB9IGZyb20gJy4vaXRlbS9pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZW50UmVmcmVzaCB9IGZyb20gJy4vY29udGVudC9jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmZpbml0ZVNjcm9sbENvbnRlbnQgfSBmcm9tICcuL2luZmluaXRlLXNjcm9sbC1jb250ZW50L2luZmluaXRlLXNjcm9sbHQtY29udGVudC5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBJb25pY01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRmFiU3Bpbm5lciwgUHJvZ3Jlc3NCYXIsIEJ1dHRvbkZ1bGwsSXRlbVByb2dyZXNzLENvbnRlbnRSZWZyZXNoLEluZmluaXRlU2Nyb2xsQ29udGVudF0sXG4gIGV4cG9ydHM6IFtGYWJTcGlubmVyLCBQcm9ncmVzc0JhciwgQnV0dG9uRnVsbCwgSXRlbVByb2dyZXNzLENvbnRlbnRSZWZyZXNoLEluZmluaXRlU2Nyb2xsQ29udGVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBZUU7dUJBTjBCLEtBQUs7MEJBQ0YsS0FBSzswQkFDWSxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDOzhCQUN0QyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsVUFBVSxDQUFDO0tBRzlFOzs7O0lBRWpCLElBQUk7UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDcEM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0tBQ3pCOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQzlCOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDM0M7OztZQWhDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7QUNORDs7OztJQTRDSSxZQUFtQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7dUJBUjlCLEtBQUs7c0JBQ0csS0FBSzswQkFDRCxLQUFLOzBCQUNVLElBQUksWUFBWSxFQUFXO3lCQUN4QixJQUFJLFlBQVksRUFBZTtLQUsvRTs7OztJQUVELFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBVTtnQkFDbkQsSUFBSSxVQUFVLEVBQUU7b0JBQ1osSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNuQjthQUNKLENBQUMsQ0FBQTtTQUNMO0tBQ0o7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEQ7S0FDSjs7OztJQUVELGFBQWE7UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNoQzs7OztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3Qjs7OztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDM0I7S0FDSjs7OztJQUVELFFBQVE7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ2hDOzs7OztJQUVELHFCQUFxQixDQUFDLFVBQW1CO1FBQ3JDLElBQUksVUFBVSxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNoQztpQkFBTTtnQkFDSCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDakI7U0FDSjtLQUNKOzs7WUEzRkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7OztLQU9UO2dCQUVELFVBQVUsRUFBRTtvQkFDUixPQUFPLENBQUMsY0FBYyxFQUFFO3dCQUNwQixVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUNwQixLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7NEJBQ3hCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzt5QkFDNUIsQ0FBQzt3QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUNwQixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO3lCQUNyRCxDQUFDO3FCQUNMLENBQUM7b0JBQ0YsT0FBTyxDQUFDLFVBQVUsRUFBRTt3QkFDaEIsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDcEIsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7NEJBQ25DLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO3lCQUNsRSxDQUFDO3FCQUNMLENBQUM7aUJBQ0w7eUJBakJRLHd0QkFBd3RCO2FBa0JwdUI7Ozs7WUEvQlEsY0FBYzs7O3FCQW1DbEIsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLE1BQU07d0JBQ04sTUFBTTtrQkFFTixTQUFTLFNBQUMsS0FBSzs7Ozs7OztBQzFDcEI7SUFzRkk7d0JBYjRCLFFBQVE7MEJBQ04sS0FBSztvQkFDVixLQUFLO3lCQUNBLEtBQUs7dUJBQ2hCLEtBQUs7MEJBQ0YsS0FBSzt5QkFDUCxRQUFROzBCQUlxQixJQUFJLFlBQVksRUFBYzt5QkFDL0IsSUFBSSxZQUFZLEVBQWM7S0FHN0U7Ozs7SUFFRCxRQUFRO0tBQ1A7Ozs7SUFFRCxhQUFhO1FBQ1QsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLGNBQWMsRUFBQztZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNoQztLQUNKOzs7O0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCOzs7O0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ3hCOzs7O0lBRUQsUUFBUTtRQUNKLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBRTFCO0tBQ0o7Ozs7O0lBRUQsaUJBQWlCLENBQUMsS0FBSztRQUNuQixJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksVUFBVSxFQUFFO1lBQy9CLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7YUFDN0I7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3ZCO1NBQ0o7S0FDSjs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsS0FBSyxFQUFFLElBQVk7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztTQUM3QjthQUFNO1lBQ0gsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3ZCO1NBRUo7S0FDSjs7OztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5Qjs7O1lBeklKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7S0FVVDtnQkFFRCxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO3dCQUM1QixVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUNwQixLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUM7NEJBQ2hDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzt5QkFDNUIsQ0FBQzt3QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUNwQixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO3lCQUM3RCxDQUFDO3FCQUNMLENBQUM7b0JBQ0YsT0FBTyxDQUFDLGFBQWEsRUFBRTt3QkFDbkIsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDcEIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDOzRCQUN2QixPQUFPLENBQUMsZ0JBQWdCLENBQUM7eUJBQzVCLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDcEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzt5QkFDcEQsQ0FBQztxQkFDTCxDQUFDO29CQUNGLE9BQU8sQ0FBQyxZQUFZLEVBQUU7d0JBQ2xCLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTs0QkFDM0IsT0FBTyxDQUFDLGdCQUFnQixDQUFDO3lCQUM1QixDQUFDO3dCQUNGLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTs0QkFDM0IsT0FBTyxDQUFDLGVBQWUsQ0FBQzt5QkFDM0IsQ0FBQzt3QkFDRixLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQzt3QkFDckUsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO3FCQUN2RSxDQUFDO29CQUNGLE9BQU8sQ0FBQyxVQUFVLEVBQUU7d0JBQ2hCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7NEJBQ3BCLEtBQUssQ0FBQztnQ0FDRixrQkFBa0IsRUFBRSxHQUFHO2dDQUN2QixtQkFBbUIsRUFBRSxFQUFFO2dDQUN2QixpQkFBaUIsRUFBRSxRQUFRO2dDQUMzQixRQUFRLEVBQUUsU0FBUzs2QkFDdEIsQ0FBQzs0QkFDRixPQUFPLENBQUMsaUJBQWlCLENBQUM7eUJBQzdCLENBQUM7d0JBQ0YsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7NEJBQ2hCLGtCQUFrQixFQUFFLEdBQUc7NEJBQ3ZCLG1CQUFtQixFQUFFLENBQUM7NEJBQ3RCLGlCQUFpQixFQUFFLFFBQVE7NEJBQzNCLFFBQVEsRUFBRSxTQUFTOzRCQUNuQixTQUFTLEVBQUUsQ0FBQzt5QkFDZixDQUFDLENBQ0Q7cUJBQUMsQ0FDTCxDQUFDO3lCQS9DTyxzK0RBQXMrRDthQWlEbC9EOzs7OzttQkFHSSxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUtMLFNBQVMsU0FBQyxTQUFTO3lCQUVuQixNQUFNO3dCQUNOLE1BQU07Ozs7Ozs7QUNwRlg7SUEwQkk7dUJBVG1CLEtBQUs7cUJBR0MsT0FBTztzQkFDTixPQUFPO3lCQUNlLElBQUksWUFBWSxFQUFFO2lDQUNWLElBQUksWUFBWSxFQUFFO0tBSXpFOzs7O0lBRUQsUUFBUTtLQUNQOzs7O0lBRUQsYUFBYTtRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0I7Ozs7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQzFCOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDNUI7S0FDSjs7Ozs7SUFFRCxVQUFVLENBQUMsVUFBbUI7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQzs7O1lBdERKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7O0tBS1Q7eUJBQ1EsOEVBQThFO2FBRTFGOzs7Ozt1QkFLSSxTQUFTLFNBQUMsVUFBVTtvQkFDcEIsS0FBSztxQkFDTCxLQUFLO3dCQUNMLE1BQU07Z0NBQ04sTUFBTTs7Ozs7OztBQ3ZCWDtJQTBCSTt1QkFQbUIsS0FBSztpQ0FHa0MsSUFBSSxZQUFZLEVBQWdCO3lCQUN4QyxJQUFJLFlBQVksRUFBZ0I7S0FJakY7Ozs7SUFFRCxRQUFRO0tBQ1A7Ozs7SUFFRCxhQUFhO1FBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUNqQzs7OztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDMUI7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM1QjtLQUNKOzs7OztJQUVELFVBQVUsQ0FBQyxVQUFtQjtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JDOzs7WUFwREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7O0tBTVQ7eUJBQ1EscVFBQXFRO2FBRWpSOzs7Ozt1QkFLSSxTQUFTLFNBQUMsVUFBVTtnQ0FDcEIsTUFBTTt3QkFDTixNQUFNOzs7Ozs7O0FDdkJYO0lBNkZJO2lDQXhCb0QsSUFBSSxZQUFZLEVBQUU7eUJBQ2xCLElBQUksWUFBWSxFQUFFOzBCQUd6RCxLQUFLO3VCQUNDLEtBQUs7MEJBQ0YsS0FBSzs4QkFDRCxJQUFJOzBCQUNULENBQUM7MkJBQ0MsS0FBSzt3QkFDQSxXQUFXO0tBZXRDOzs7O0lBWkQsUUFBUTtRQUVKLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUc7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQjtTQUNKLENBQUMsQ0FBQztLQUVOOzs7O0lBS0QsYUFBYTtRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDeEI7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QixVQUFVLENBQUM7WUFDUCxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzNCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7S0FFbEI7Ozs7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0I7Ozs7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7S0FDMUI7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQUs7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUNuQixNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVDLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUVqQztLQUNKOzs7O0lBRUQsT0FBTzs7S0FFTjs7Ozs7SUFFTSxjQUFjLENBQUMsUUFBZ0I7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDOztRQUNqQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxVQUFVLEtBQUssQ0FBQyxDQUFDOztRQUUzQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxjQUFjLFVBQVUsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7SUFJN0YsaUJBQWlCLENBQUMsS0FBSztRQUVuQixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO1lBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDM0I7S0FDSjs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBSztRQUNqQixJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDOUI7S0FFSjs7OztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUMzQjs7OztJQUVELGFBQWE7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7S0FDNUI7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksTUFBTSxFQUFFO1lBQzdDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUV4QjtLQUNKOzs7WUE3S0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1CVDtnQkFFRCxVQUFVLEVBQUU7b0JBQ1IsT0FBTyxDQUFDLFVBQVUsRUFBRTt3QkFDaEIsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDcEIsS0FBSyxDQUFDO2dDQUNGLGtCQUFrQixFQUFFLEdBQUc7Z0NBQ3ZCLG1CQUFtQixFQUFFLEVBQUU7Z0NBQ3ZCLGlCQUFpQixFQUFFLFFBQVE7Z0NBQzNCLFFBQVEsRUFBRSxTQUFTOzZCQUN0QixDQUFDOzRCQUNGLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzt5QkFDNUIsQ0FBQzt3QkFDRixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQzs0QkFDaEIsa0JBQWtCLEVBQUUsR0FBRzs0QkFDdkIsbUJBQW1CLEVBQUUsQ0FBQzs0QkFDdEIsaUJBQWlCLEVBQUUsUUFBUTs0QkFDM0IsUUFBUSxFQUFFLFNBQVM7eUJBQ3RCLENBQUMsQ0FDRDtxQkFBQyxDQUNMO29CQUNELE9BQU8sQ0FBQyxhQUFhLEVBQUU7d0JBQ25CLFVBQVUsQ0FBQyxXQUFXLEVBQUU7NEJBQ3BCLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDbkQsQ0FBQztxQkFDTCxDQUFDO29CQUNGLE9BQU8sQ0FBQyxVQUFVLEVBQUU7d0JBQ2hCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7NEJBQ3BCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLENBQUM7NEJBQ3JELE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQzt5QkFDOUUsQ0FBQzt3QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUNwQixLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7NEJBQ3pCLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzt5QkFDdEQsQ0FBQztxQkFDTCxDQUNBO2lCQUNKO3lCQXBDUSxtaEZBQW1oRjthQXNDL2hGOzs7OztnQ0FHSSxNQUFNO3dCQUNOLE1BQU07c0JBQ04sU0FBUyxTQUFDLFNBQVM7c0JBQ25CLFNBQVMsU0FBQyxTQUFTO3VCQU9uQixLQUFLOzs7Ozs7O0FDL0VWOzs7OztJQXdGSSxZQUFtQixRQUFtQixFQUFTLE1BQXlCO1FBQXJELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFtQjt3QkFkNUMsUUFBUTswQkFDTixLQUFLO29CQUNWLEtBQUs7eUJBQ0EsS0FBSzs0QkFDWixDQUFDO3VCQUNMLEtBQUs7MEJBQ0YsS0FBSzt5QkFDUCxRQUFROzBCQUlnQyxJQUFJLFlBQVksRUFBeUI7eUJBQzFDLElBQUksWUFBWSxFQUF5QjtLQUduRzs7OztJQUVELFFBQVE7S0FDUDs7OztJQUVELGFBQWE7UUFDVCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksY0FBYyxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ2hDO0tBQ0o7Ozs7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUN4Qjs7OztJQUVELFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUUxQjtLQUNKOzs7OztJQUVELGlCQUFpQixDQUFDLEtBQUs7UUFDbkIsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUMvQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2FBQzdCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2QjtTQUNKO0tBQ0o7Ozs7OztJQUVELG1CQUFtQixDQUFDLEtBQUssRUFBRSxJQUFZO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxRQUFRLEVBQUU7WUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDN0I7YUFBTTtZQUNILElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2QjtTQUVKO0tBQ0o7Ozs7SUFFRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7Ozs7O0lBRU0sY0FBYyxDQUFDLFFBQWdCO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDOztRQUM3QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsVUFBVSxLQUFLLENBQUMsQ0FBQzs7UUFFM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsY0FBYyxVQUFVLEtBQUssQ0FBQyxDQUFBO1FBQ3hGLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7WUFuSm5DLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0tBV1Q7Z0JBRUQsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTt3QkFDNUIsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDcEIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDOzRCQUNoQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7eUJBQzVCLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDcEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQzt5QkFDN0QsQ0FBQztxQkFDTCxDQUFDO29CQUNGLE9BQU8sQ0FBQyxhQUFhLEVBQUU7d0JBQ25CLFVBQVUsQ0FBQyxXQUFXLEVBQUU7NEJBQ3BCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQzs0QkFDdkIsT0FBTyxDQUFDLGdCQUFnQixDQUFDO3lCQUM1QixDQUFDO3dCQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUU7NEJBQ3BCLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7eUJBQ3BELENBQUM7cUJBQ0wsQ0FBQztvQkFDRixPQUFPLENBQUMsWUFBWSxFQUFFO3dCQUNsQixVQUFVLENBQUMsa0JBQWtCLEVBQUU7NEJBQzNCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzt5QkFDNUIsQ0FBQzt3QkFDRixVQUFVLENBQUMsa0JBQWtCLEVBQUU7NEJBQzNCLE9BQU8sQ0FBQyxlQUFlLENBQUM7eUJBQzNCLENBQUM7d0JBQ0YsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7d0JBQ3JFLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztxQkFDdkUsQ0FBQztvQkFDRixPQUFPLENBQUMsVUFBVSxFQUFFO3dCQUNoQixVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUNwQixLQUFLLENBQUM7Z0NBQ0Ysa0JBQWtCLEVBQUUsR0FBRztnQ0FDdkIsbUJBQW1CLEVBQUUsRUFBRTtnQ0FDdkIsaUJBQWlCLEVBQUUsUUFBUTtnQ0FDM0IsUUFBUSxFQUFFLFNBQVM7NkJBQ3RCLENBQUM7NEJBQ0YsT0FBTyxDQUFDLGdCQUFnQixDQUFDO3lCQUM1QixDQUFDO3dCQUNGLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDOzRCQUNoQixrQkFBa0IsRUFBRSxHQUFHOzRCQUN2QixtQkFBbUIsRUFBRSxDQUFDOzRCQUN0QixpQkFBaUIsRUFBRSxRQUFROzRCQUMzQixRQUFRLEVBQUUsU0FBUzs0QkFDbkIsU0FBUyxFQUFFLENBQUM7eUJBQ2YsQ0FBQyxDQUNEO3FCQUFDLENBQ0wsQ0FBQzt5QkEvQ08sNHZFQUE0dkU7YUFpRHh3RTs7OztZQXBFK0UsU0FBUztZQUFFLGlCQUFpQjs7O21CQXVFdkcsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFNTCxTQUFTLFNBQUMsU0FBUzt5QkFFbkIsTUFBTTt3QkFDTixNQUFNOzs7Ozs7O0FDdEZYOzs7WUFXQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLHFCQUFxQixDQUFDO2dCQUNyRyxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUMsY0FBYyxFQUFDLHFCQUFxQjtpQkFDL0Y7YUFDRjs7Ozs7Ozs7Ozs7Ozs7OyJ9