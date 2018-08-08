import { Injectable, Component, Input, Renderer2, ViewChild, ChangeDetectorRef, NgModule, defineInjectable } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';
import Hammer, { Hammer as Hammer$1 } from 'hammerjs';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DialogService {
    constructor() { }
}
DialogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
DialogService.ctorParameters = () => [];
/** @nocollapse */ DialogService.ngInjectableDef = defineInjectable({ factory: function DialogService_Factory() { return new DialogService(); }, token: DialogService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DialogComponent {
    /**
     * @param {?} renderer
     * @param {?} change
     */
    constructor(renderer, change) {
        this.renderer = renderer;
        this.change = change;
        this.animationState = 'hidden';
        this.animation = 'slideIn';
        this.verticalAlign = 'bottom';
        this.floating = false;
        this.backdrop = false;
        this.fullscreen = false;
        this.rounded = false;
        this.backdropClose = true;
        this.swipeEnabled = true;
        this.panSubs = [];
    }
    /**
     * @param {?} elem
     * @param {?} threshold
     * @return {?}
     */
    setupPan(elem, threshold) {
        if (!this.swipeEnabled) {
            return;
        }
        /** @type {?} */
        const hammer = new Hammer(elem);
        hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });
        /** @type {?} */
        const panup = fromEvent(hammer, 'panup')
            .pipe(throttleTime(2))
            .subscribe(res => {
            console.log("panup", res);
            this.onSwipeUp(res, threshold);
        });
        /** @type {?} */
        const pandown = fromEvent(hammer, 'pandown')
            .pipe(throttleTime(2))
            .subscribe(res => {
            console.log("pandown sub", res);
            this.onSwipeDown(res, threshold);
        });
        /** @type {?} */
        const panend = fromEvent(hammer, 'panend pancancel')
            .subscribe((res) => {
            if (res.distance < threshold) {
                this.renderer.setStyle(this.card.nativeElement, 'transform', `translateY(0px)`);
            }
        });
        this.panSubs.push(pandown, panup, panend);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.card);
    }
    /**
     * @return {?}
     */
    showDialog() {
        this.animationState = `${this.animation}-${this.verticalAlign}`;
    }
    /**
     * @return {?}
     */
    hideDialog() {
        this.animationState = 'hidden';
        this.panSubs.forEach(sub => {
            sub.unsubscribe();
        });
    }
    /**
     * @return {?}
     */
    isFloating() {
        return this.floating || (this.rounded && this.verticalAlign === 'center');
    }
    /**
     * @return {?}
     */
    roundedTop() {
        return this.rounded && this.verticalAlign === 'top' && !this.floating;
    }
    /**
     * @return {?}
     */
    roundedBottom() {
        return this.rounded && this.verticalAlign === 'bottom' && !this.floating;
    }
    /**
     * @param {?} event
     * @param {?} threshold
     * @return {?}
     */
    onSwipeUp(event, threshold) {
        console.log(Math.exp(event.distance / 50));
        /** @type {?} */
        const velocity = 1 + Math.exp(event.distance / 50) / 50;
        if (this.verticalAlign === 'top') {
            this.renderer.setStyle(this.card.nativeElement, 'transform', `translateY(-${event.distance * velocity}px)`);
            if (event.distance > threshold) {
                console.log('swipe down happened');
                this.hideDialog();
            }
        }
    }
    /**
     * @param {?} event
     * @param {?} threshold
     * @return {?}
     */
    onSwipeDown(event, threshold) {
        /** @type {?} */
        const velocity = 1 + Math.exp(event.distance / 50) / 50;
        console.log(velocity);
        if (this.verticalAlign === 'bottom' || this.verticalAlign === 'center') {
            this.renderer.setStyle(this.card.nativeElement, 'transform', `translateY(${event.distance * velocity}px)`);
            if (event.distance > threshold) {
                console.log('swipe down happened');
                this.hideDialog();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDialogAnimationDone(event) {
        if (event.toState === 'hidden') {
            this.renderer.setStyle(this.card.nativeElement, 'transform', `translateY(0px)`);
        }
        if (event.fromState === 'hidden') {
            this.setupPan(this.card.nativeElement, 58);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    backdropAnimDone(event) {
        console.log(this.backdropElem, event);
        if (event.fromState === 'void') {
            // this.change.detectChanges();
            console.log(this.backdropElem.nativeElement);
            this.setupPan(this.backdropElem.nativeElement, 112);
        }
    }
}
DialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'gg-dialog',
                template: `
  <div #backdrop class="gg-backdrop" [@backdropAnim] (@backdropAnim.done)="backdropAnimDone($event)" (click)="backdropClose? hideDialog() : false" *ngIf="animationState !== 'hidden' && backdrop">
  </div>
  <ion-card #card [@dialogAnim]="animationState" (@dialogAnim.done)="onDialogAnimationDone($event)" mode="md" class="gg-dialog" [ngClass]="{'floating': isFloating(),'fullscreen':fullscreen,'rounded-top': roundedTop(),'rounded-bottom':roundedBottom()}">
  <ng-content></ng-content>
  </ion-card>
  `,
                styles: [`.gg-dialog{position:absolute;z-index:5002;background:#fff;margin:0;border-radius:0;width:100%}.top{top:0}.bottom{bottom:0}.floating{margin:16px 20px;border-radius:8px;width:calc(100% - 40px);box-shadow:0 4px 16px rgba(0,0,0,.12)}.fullscreen{margin:0;border-radius:0;width:100%;height:100%;box-shadow:0 4px 16px rgba(0,0,0,.12)}.rounded-top{border-bottom-left-radius:12px;border-bottom-right-radius:12px}.rounded-bottom{border-top-left-radius:12px;border-top-right-radius:12px}.gg-backdrop{background:rgba(0,0,0,.22);position:absolute;top:0;bottom:0;left:0;right:0;z-index:5001}`],
                animations: [
                    trigger('dialogAnim', [
                        transition('hidden => slideIn-top', [
                            style({
                                transform: 'translateY(-100%)'
                            }),
                            animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                        ]),
                        transition('hidden => slideIn-bottom', [
                            style({
                                transform: 'translateY(100%)'
                            }),
                            animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                        ]),
                        transition('hidden => fadeIn-bottom', [
                            style({
                                opacity: 0
                            }),
                            animate('360ms ease-out')
                        ]),
                        transition('hidden => fadeIn-top', [
                            style({
                                opacity: 0
                            }),
                            animate('360ms ease-out')
                        ]),
                        transition('hidden => fadeIn-center', [
                            style({
                                opacity: 0,
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }),
                            animate('360ms ease-out')
                        ]),
                        transition('hidden => slideIn-center', [
                            style({
                                top: '50%',
                                transform: 'translateY(-25%)',
                                opacity: 0
                            }),
                            animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                        ]),
                        transition('slideIn-center => hidden', [
                            animate('120ms ease-out', style({
                                // top: '50%',
                                // transform: 'translateY(+50%)',
                                opacity: 0
                            }))
                        ]),
                        transition('* => hidden', [
                            animate('240ms ease-out')
                        ]),
                        state('hidden', style({
                            display: 'none',
                            opacity: '0',
                        })),
                        state('slideIn-top', style({
                            top: 0,
                        })),
                        state('slideIn-bottom', style({
                            bottom: 0
                        })),
                        state('fadeIn-top', style({
                            top: 0
                        })),
                        state('fadeIn-bottom', style({
                            bottom: 0
                        })),
                        state('fadeIn-center', style({
                            top: '50%',
                            transform: 'translateY(-50%)',
                            'margin-top': 0
                        })),
                        state('slideIn-center', style({
                            top: '50%',
                            transform: 'translateY(-50%)',
                            'margin-top': 0
                        })),
                    ]), trigger('backdropAnim', [
                        transition('void => *', [
                            style({
                                opacity: 0
                            }),
                            animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                        ]),
                        transition('* => void', [
                            animate('120ms 100ms cubic-bezier(0.32,1,0.23,1)'), style({
                                opacity: 0
                            }),
                        ])
                    ])
                ],
            },] },
];
/** @nocollapse */
DialogComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
DialogComponent.propDecorators = {
    animation: [{ type: Input }],
    verticalAlign: [{ type: Input }],
    floating: [{ type: Input }],
    backdrop: [{ type: Input }],
    fullscreen: [{ type: Input }],
    rounded: [{ type: Input }],
    backdropClose: [{ type: Input }],
    swipeEnabled: [{ type: Input }],
    card: [{ type: ViewChild, args: ['card',] }],
    backdropElem: [{ type: ViewChild, args: ['backdrop',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MyHammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = /** @type {?} */ ({
            pan: { direction: Hammer$1.DIRECTION_VERTICAL, threshold: 3 },
        });
    }
}
class DialogModule {
}
DialogModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    IonicModule,
                    CommonModule
                ],
                declarations: [DialogComponent],
                exports: [DialogComponent],
                providers: [
                    {
                        provide: HAMMER_GESTURE_CONFIG,
                        useClass: MyHammerConfig
                    }
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { DialogService, DialogComponent, MyHammerConfig, DialogModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtbWF0ZXJpYWwtZGlhbG9nLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9pb25pYy1tYXRlcmlhbC1kaWFsb2cvbGliL2RpYWxvZy5zZXJ2aWNlLnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1kaWFsb2cvbGliL2RpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL2lvbmljLW1hdGVyaWFsLWRpYWxvZy9saWIvZGlhbG9nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aHJvdHRsZVRpbWUsIHJlZHVjZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5cbmV4cG9ydCB0eXBlIGFuaW1hdGlvbiA9IFwic2xpZGVJblwiIHwgXCJmYWRlSW5cIlxuZXhwb3J0IHR5cGUgdmVydGljYWxBbGlnbiA9IFwidG9wXCIgfCBcImJvdHRvbVwiIHwgXCJjZW50ZXJcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZy1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICNiYWNrZHJvcCBjbGFzcz1cImdnLWJhY2tkcm9wXCIgW0BiYWNrZHJvcEFuaW1dIChAYmFja2Ryb3BBbmltLmRvbmUpPVwiYmFja2Ryb3BBbmltRG9uZSgkZXZlbnQpXCIgKGNsaWNrKT1cImJhY2tkcm9wQ2xvc2U/IGhpZGVEaWFsb2coKSA6IGZhbHNlXCIgKm5nSWY9XCJhbmltYXRpb25TdGF0ZSAhPT0gJ2hpZGRlbicgJiYgYmFja2Ryb3BcIj5cbiAgPC9kaXY+XG4gIDxpb24tY2FyZCAjY2FyZCBbQGRpYWxvZ0FuaW1dPVwiYW5pbWF0aW9uU3RhdGVcIiAoQGRpYWxvZ0FuaW0uZG9uZSk9XCJvbkRpYWxvZ0FuaW1hdGlvbkRvbmUoJGV2ZW50KVwiIG1vZGU9XCJtZFwiIGNsYXNzPVwiZ2ctZGlhbG9nXCIgW25nQ2xhc3NdPVwieydmbG9hdGluZyc6IGlzRmxvYXRpbmcoKSwnZnVsbHNjcmVlbic6ZnVsbHNjcmVlbiwncm91bmRlZC10b3AnOiByb3VuZGVkVG9wKCksJ3JvdW5kZWQtYm90dG9tJzpyb3VuZGVkQm90dG9tKCl9XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9pb24tY2FyZD5cbiAgYCxcbiAgc3R5bGVzOiBbYC5nZy1kaWFsb2d7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo1MDAyO2JhY2tncm91bmQ6I2ZmZjttYXJnaW46MDtib3JkZXItcmFkaXVzOjA7d2lkdGg6MTAwJX0udG9we3RvcDowfS5ib3R0b217Ym90dG9tOjB9LmZsb2F0aW5ne21hcmdpbjoxNnB4IDIwcHg7Ym9yZGVyLXJhZGl1czo4cHg7d2lkdGg6Y2FsYygxMDAlIC0gNDBweCk7Ym94LXNoYWRvdzowIDRweCAxNnB4IHJnYmEoMCwwLDAsLjEyKX0uZnVsbHNjcmVlbnttYXJnaW46MDtib3JkZXItcmFkaXVzOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3gtc2hhZG93OjAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMTIpfS5yb3VuZGVkLXRvcHtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjEycHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTJweH0ucm91bmRlZC1ib3R0b217Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMnB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEycHh9LmdnLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMjIpO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6NTAwMX1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2RpYWxvZ0FuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gc2xpZGVJbi10b3AnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBzbGlkZUluLWJvdHRvbScsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyNzVtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gZmFkZUluLWJvdHRvbScsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IGZhZGVJbi10b3AnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBmYWRlSW4tY2VudGVyJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gc2xpZGVJbi1jZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTI1JSknLFxuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3NsaWRlSW4tY2VudGVyID0+IGhpZGRlbicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTIwbXMgZWFzZS1vdXQnLCBzdHlsZSh7XG4gICAgICAgICAgLy8gdG9wOiAnNTAlJyxcbiAgICAgICAgICAvLyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKCs1MCUpJyxcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGhpZGRlbicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMjQwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoe1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ3NsaWRlSW4tdG9wJywgc3R5bGUoe1xuICAgICAgICB0b3A6IDAsXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdzbGlkZUluLWJvdHRvbScsIHN0eWxlKHtcbiAgICAgICAgYm90dG9tOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdmYWRlSW4tdG9wJywgc3R5bGUoe1xuICAgICAgICB0b3A6IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ2ZhZGVJbi1ib3R0b20nLCBzdHlsZSh7XG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnZmFkZUluLWNlbnRlcicsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgICdtYXJnaW4tdG9wJzogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnc2xpZGVJbi1jZW50ZXInLCBzdHlsZSh7XG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgICAnbWFyZ2luLXRvcCc6IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgIF0pLCB0cmlnZ2VyKCdiYWNrZHJvcEFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyNzVtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyMG1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgIF0pXG4gICAgXSldLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGFuaW1hdGlvblN0YXRlID0gJ2hpZGRlbidcblxuICBASW5wdXQoKSBhbmltYXRpb246IGFuaW1hdGlvbiA9ICdzbGlkZUluJztcbiAgQElucHV0KCkgdmVydGljYWxBbGlnbjogdmVydGljYWxBbGlnbiA9ICdib3R0b20nO1xuICBASW5wdXQoKSBmbG9hdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBiYWNrZHJvcDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBmdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYmFja2Ryb3BDbG9zZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHN3aXBlRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgQFZpZXdDaGlsZCgnY2FyZCcpIGNhcmQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2JhY2tkcm9wJykgYmFja2Ryb3BFbGVtOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgcGFuU3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBjaGFuZ2U6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgfVxuXG4gIHNldHVwUGFuKGVsZW06IEVsZW1lbnRSZWYsIHRocmVzaG9sZDogbnVtYmVyKSB7XG5cbiAgICBpZiAoIXRoaXMuc3dpcGVFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFtbWVyID0gbmV3IEhhbW1lcihlbGVtKTtcbiAgICBoYW1tZXIuZ2V0KCdwYW4nKS5zZXQoeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMIH0pO1xuXG4gICAgY29uc3QgcGFudXAgPSBmcm9tRXZlbnQoaGFtbWVyLCAncGFudXAnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSgyKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBhbnVwXCIsIHJlcyk7XG4gICAgICAgIHRoaXMub25Td2lwZVVwKHJlcywgdGhyZXNob2xkKTtcbiAgICAgIH0pXG5cbiAgICBjb25zdCBwYW5kb3duID0gZnJvbUV2ZW50KGhhbW1lciwgJ3BhbmRvd24nKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSgyKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBhbmRvd24gc3ViXCIsIHJlcyk7XG4gICAgICAgIHRoaXMub25Td2lwZURvd24ocmVzLCB0aHJlc2hvbGQpO1xuICAgICAgfSlcblxuICAgIGNvbnN0IHBhbmVuZCA9IGZyb21FdmVudChoYW1tZXIsICdwYW5lbmQgcGFuY2FuY2VsJylcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXMuZGlzdGFuY2UgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoMHB4KWApXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB0aGlzLnBhblN1YnMucHVzaChwYW5kb3duLCBwYW51cCwgcGFuZW5kKTtcblxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNhcmQpO1xuICB9XG5cbiAgc2hvd0RpYWxvZygpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gYCR7dGhpcy5hbmltYXRpb259LSR7dGhpcy52ZXJ0aWNhbEFsaWdufWA7XG4gIH1cblxuICBoaWRlRGlhbG9nKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSAnaGlkZGVuJztcbiAgICB0aGlzLnBhblN1YnMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfSlcbiAgfVxuXG4gIGlzRmxvYXRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmxvYXRpbmcgfHwgKHRoaXMucm91bmRlZCAmJiB0aGlzLnZlcnRpY2FsQWxpZ24gPT09ICdjZW50ZXInKVxuICB9XG5cbiAgcm91bmRlZFRvcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yb3VuZGVkICYmIHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ3RvcCcgJiYgIXRoaXMuZmxvYXRpbmdcbiAgfVxuXG4gIHJvdW5kZWRCb3R0b20oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm91bmRlZCAmJiB0aGlzLnZlcnRpY2FsQWxpZ24gPT09ICdib3R0b20nICYmICF0aGlzLmZsb2F0aW5nXG4gIH1cblxuICBvblN3aXBlVXAoZXZlbnQsIHRocmVzaG9sZCkge1xuICAgIGNvbnNvbGUubG9nKE1hdGguZXhwKGV2ZW50LmRpc3RhbmNlIC8gNTApKTtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IDEgKyBNYXRoLmV4cChldmVudC5kaXN0YW5jZSAvIDUwKSAvIDUwO1xuXG4gICAgaWYgKHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ3RvcCcpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jYXJkLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgtJHtldmVudC5kaXN0YW5jZSAqIHZlbG9jaXR5fXB4KWApXG4gICAgICBpZiAoZXZlbnQuZGlzdGFuY2UgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N3aXBlIGRvd24gaGFwcGVuZWQnKTtcbiAgICAgICAgdGhpcy5oaWRlRGlhbG9nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Td2lwZURvd24oZXZlbnQsIHRocmVzaG9sZCkge1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gMSArIE1hdGguZXhwKGV2ZW50LmRpc3RhbmNlIC8gNTApIC8gNTA7XG4gICAgY29uc29sZS5sb2codmVsb2NpdHkpO1xuICAgIGlmICh0aGlzLnZlcnRpY2FsQWxpZ24gPT09ICdib3R0b20nIHx8IHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jYXJkLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke2V2ZW50LmRpc3RhbmNlICogdmVsb2NpdHl9cHgpYClcbiAgICAgIGlmIChldmVudC5kaXN0YW5jZSA+IHRocmVzaG9sZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3dpcGUgZG93biBoYXBwZW5lZCcpO1xuICAgICAgICB0aGlzLmhpZGVEaWFsb2coKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIG9uRGlhbG9nQW5pbWF0aW9uRG9uZShldmVudCkge1xuICAgIGlmIChldmVudC50b1N0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNhcmQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKDBweClgKVxuICAgIH1cbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgdGhpcy5zZXR1cFBhbih0aGlzLmNhcmQubmF0aXZlRWxlbWVudCw1OCk7XG4gICAgfVxuICB9XG5cbiAgYmFja2Ryb3BBbmltRG9uZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYmFja2Ryb3BFbGVtLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICAvLyB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmJhY2tkcm9wRWxlbS5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuc2V0dXBQYW4odGhpcy5iYWNrZHJvcEVsZW0ubmF0aXZlRWxlbWVudCwgMTEyKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIYW1tZXJHZXN0dXJlQ29uZmlnLCBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7SGFtbWVyfSBmcm9tICdoYW1tZXJqcyc7XG5cbmV4cG9ydCBjbGFzcyBNeUhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBvdmVycmlkZXMgPSA8YW55PntcbiAgICBwYW46IHsgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX1ZFUlRJQ0FMLHRocmVzaG9sZDogMyB9LFxuICB9O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0RpYWxvZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtEaWFsb2dDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsXG4gICAgICB1c2VDbGFzczogTXlIYW1tZXJDb25maWdcbiAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJIYW1tZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFB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