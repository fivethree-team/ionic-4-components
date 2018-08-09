import { Injectable, Component, Input, Renderer2, ViewChild, ChangeDetectorRef, defineInjectable, NgModule } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';
import Hammer, { Hammer as Hammer$1 } from 'hammerjs';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { __extends } from 'tslib';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DialogService = /** @class */ (function () {
    function DialogService() {
    }
    DialogService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    DialogService.ctorParameters = function () { return []; };
    /** @nocollapse */ DialogService.ngInjectableDef = defineInjectable({ factory: function DialogService_Factory() { return new DialogService(); }, token: DialogService, providedIn: "root" });
    return DialogService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DialogComponent = /** @class */ (function () {
    function DialogComponent(renderer, change) {
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
    DialogComponent.prototype.setupPan = /**
     * @param {?} elem
     * @param {?} threshold
     * @return {?}
     */
    function (elem, threshold) {
        var _this = this;
        if (!this.swipeEnabled) {
            return;
        }
        /** @type {?} */
        var hammer = new Hammer(elem);
        hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });
        /** @type {?} */
        var panup = fromEvent(hammer, 'panup')
            .pipe(throttleTime(2))
            .subscribe(function (res) {
            console.log("panup", res);
            _this.onSwipeUp(res, threshold);
        });
        /** @type {?} */
        var pandown = fromEvent(hammer, 'pandown')
            .pipe(throttleTime(2))
            .subscribe(function (res) {
            console.log("pandown sub", res);
            _this.onSwipeDown(res, threshold);
        });
        /** @type {?} */
        var panend = fromEvent(hammer, 'panend pancancel')
            .subscribe(function (res) {
            if (res.distance < threshold) {
                _this.renderer.setStyle(_this.card.nativeElement, 'transform', "translateY(0px)");
            }
        });
        this.panSubs.push(pandown, panup, panend);
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.card);
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.showDialog = /**
     * @return {?}
     */
    function () {
        this.animationState = this.animation + "-" + this.verticalAlign;
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.hideDialog = /**
     * @return {?}
     */
    function () {
        this.animationState = 'hidden';
        this.panSubs.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.isFloating = /**
     * @return {?}
     */
    function () {
        return this.floating || (this.rounded && this.verticalAlign === 'center');
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.roundedTop = /**
     * @return {?}
     */
    function () {
        return this.rounded && this.verticalAlign === 'top' && !this.floating;
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.roundedBottom = /**
     * @return {?}
     */
    function () {
        return this.rounded && this.verticalAlign === 'bottom' && !this.floating;
    };
    /**
     * @param {?} event
     * @param {?} threshold
     * @return {?}
     */
    DialogComponent.prototype.onSwipeUp = /**
     * @param {?} event
     * @param {?} threshold
     * @return {?}
     */
    function (event, threshold) {
        console.log(Math.exp(event.distance / 50));
        /** @type {?} */
        var velocity = 1 + Math.exp(event.distance / 50) / 50;
        if (this.verticalAlign === 'top') {
            this.renderer.setStyle(this.card.nativeElement, 'transform', "translateY(-" + event.distance * velocity + "px)");
            if (event.distance > threshold) {
                console.log('swipe down happened');
                this.hideDialog();
            }
        }
    };
    /**
     * @param {?} event
     * @param {?} threshold
     * @return {?}
     */
    DialogComponent.prototype.onSwipeDown = /**
     * @param {?} event
     * @param {?} threshold
     * @return {?}
     */
    function (event, threshold) {
        /** @type {?} */
        var velocity = 1 + Math.exp(event.distance / 50) / 50;
        console.log(velocity);
        if (this.verticalAlign === 'bottom' || this.verticalAlign === 'center') {
            this.renderer.setStyle(this.card.nativeElement, 'transform', "translateY(" + event.distance * velocity + "px)");
            if (event.distance > threshold) {
                console.log('swipe down happened');
                this.hideDialog();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DialogComponent.prototype.onDialogAnimationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'hidden') {
            this.renderer.setStyle(this.card.nativeElement, 'transform', "translateY(0px)");
        }
        if (event.fromState === 'hidden') {
            this.setupPan(this.card.nativeElement, 58);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DialogComponent.prototype.backdropAnimDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(this.backdropElem, event);
        if (event.fromState === 'void') {
            // this.change.detectChanges();
            console.log(this.backdropElem.nativeElement);
            this.setupPan(this.backdropElem.nativeElement, 112);
        }
    };
    DialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gg-dialog',
                    template: "\n  <div #backdrop class=\"gg-backdrop\" [@backdropAnim] (@backdropAnim.done)=\"backdropAnimDone($event)\" (click)=\"backdropClose? hideDialog() : false\" *ngIf=\"animationState !== 'hidden' && backdrop\">\n  </div>\n  <ion-card #card [@dialogAnim]=\"animationState\" (@dialogAnim.done)=\"onDialogAnimationDone($event)\" mode=\"md\" class=\"gg-dialog\" [ngClass]=\"{'floating': isFloating(),'fullscreen':fullscreen,'rounded-top': roundedTop(),'rounded-bottom':roundedBottom()}\">\n  <ng-content></ng-content>\n  </ion-card>\n  ",
                    styles: [".gg-dialog{position:absolute;z-index:5002;background:#fff;margin:0;border-radius:0;width:100%}.top{top:0}.bottom{bottom:0}.floating{margin:16px 20px;border-radius:8px;width:calc(100% - 40px);box-shadow:0 4px 16px rgba(0,0,0,.12)}.fullscreen{margin:0;border-radius:0;width:100%;height:100%;box-shadow:0 4px 16px rgba(0,0,0,.12)}.rounded-top{border-bottom-left-radius:12px;border-bottom-right-radius:12px}.rounded-bottom{border-top-left-radius:12px;border-top-right-radius:12px}.gg-backdrop{background:rgba(0,0,0,.22);position:absolute;top:0;bottom:0;left:0;right:0;z-index:5001}"],
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
    DialogComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
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
    return DialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MyHammerConfig = /** @class */ (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = /** @type {?} */ ({
            pan: { direction: Hammer$1.DIRECTION_VERTICAL, threshold: 3 },
        });
        return _this;
    }
    return MyHammerConfig;
}(HammerGestureConfig));
var DialogModule = /** @class */ (function () {
    function DialogModule() {
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
    return DialogModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { DialogService, DialogComponent, MyHammerConfig, DialogModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtbWF0ZXJpYWwtZGlhbG9nLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9pb25pYy1tYXRlcmlhbC1kaWFsb2cvbGliL2RpYWxvZy5zZXJ2aWNlLnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1kaWFsb2cvbGliL2RpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL2lvbmljLW1hdGVyaWFsLWRpYWxvZy9saWIvZGlhbG9nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aHJvdHRsZVRpbWUsIHJlZHVjZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5cbmV4cG9ydCB0eXBlIGFuaW1hdGlvbiA9IFwic2xpZGVJblwiIHwgXCJmYWRlSW5cIlxuZXhwb3J0IHR5cGUgdmVydGljYWxBbGlnbiA9IFwidG9wXCIgfCBcImJvdHRvbVwiIHwgXCJjZW50ZXJcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZy1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICNiYWNrZHJvcCBjbGFzcz1cImdnLWJhY2tkcm9wXCIgW0BiYWNrZHJvcEFuaW1dIChAYmFja2Ryb3BBbmltLmRvbmUpPVwiYmFja2Ryb3BBbmltRG9uZSgkZXZlbnQpXCIgKGNsaWNrKT1cImJhY2tkcm9wQ2xvc2U/IGhpZGVEaWFsb2coKSA6IGZhbHNlXCIgKm5nSWY9XCJhbmltYXRpb25TdGF0ZSAhPT0gJ2hpZGRlbicgJiYgYmFja2Ryb3BcIj5cbiAgPC9kaXY+XG4gIDxpb24tY2FyZCAjY2FyZCBbQGRpYWxvZ0FuaW1dPVwiYW5pbWF0aW9uU3RhdGVcIiAoQGRpYWxvZ0FuaW0uZG9uZSk9XCJvbkRpYWxvZ0FuaW1hdGlvbkRvbmUoJGV2ZW50KVwiIG1vZGU9XCJtZFwiIGNsYXNzPVwiZ2ctZGlhbG9nXCIgW25nQ2xhc3NdPVwieydmbG9hdGluZyc6IGlzRmxvYXRpbmcoKSwnZnVsbHNjcmVlbic6ZnVsbHNjcmVlbiwncm91bmRlZC10b3AnOiByb3VuZGVkVG9wKCksJ3JvdW5kZWQtYm90dG9tJzpyb3VuZGVkQm90dG9tKCl9XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9pb24tY2FyZD5cbiAgYCxcbiAgc3R5bGVzOiBbYC5nZy1kaWFsb2d7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo1MDAyO2JhY2tncm91bmQ6I2ZmZjttYXJnaW46MDtib3JkZXItcmFkaXVzOjA7d2lkdGg6MTAwJX0udG9we3RvcDowfS5ib3R0b217Ym90dG9tOjB9LmZsb2F0aW5ne21hcmdpbjoxNnB4IDIwcHg7Ym9yZGVyLXJhZGl1czo4cHg7d2lkdGg6Y2FsYygxMDAlIC0gNDBweCk7Ym94LXNoYWRvdzowIDRweCAxNnB4IHJnYmEoMCwwLDAsLjEyKX0uZnVsbHNjcmVlbnttYXJnaW46MDtib3JkZXItcmFkaXVzOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3gtc2hhZG93OjAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMTIpfS5yb3VuZGVkLXRvcHtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjEycHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTJweH0ucm91bmRlZC1ib3R0b217Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMnB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEycHh9LmdnLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMjIpO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6NTAwMX1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2RpYWxvZ0FuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gc2xpZGVJbi10b3AnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBzbGlkZUluLWJvdHRvbScsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyNzVtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gZmFkZUluLWJvdHRvbScsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IGZhZGVJbi10b3AnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBmYWRlSW4tY2VudGVyJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gc2xpZGVJbi1jZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTI1JSknLFxuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3NsaWRlSW4tY2VudGVyID0+IGhpZGRlbicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTIwbXMgZWFzZS1vdXQnLCBzdHlsZSh7XG4gICAgICAgICAgLy8gdG9wOiAnNTAlJyxcbiAgICAgICAgICAvLyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKCs1MCUpJyxcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGhpZGRlbicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMjQwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoe1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ3NsaWRlSW4tdG9wJywgc3R5bGUoe1xuICAgICAgICB0b3A6IDAsXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdzbGlkZUluLWJvdHRvbScsIHN0eWxlKHtcbiAgICAgICAgYm90dG9tOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdmYWRlSW4tdG9wJywgc3R5bGUoe1xuICAgICAgICB0b3A6IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ2ZhZGVJbi1ib3R0b20nLCBzdHlsZSh7XG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnZmFkZUluLWNlbnRlcicsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgICdtYXJnaW4tdG9wJzogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnc2xpZGVJbi1jZW50ZXInLCBzdHlsZSh7XG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgICAnbWFyZ2luLXRvcCc6IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgIF0pLCB0cmlnZ2VyKCdiYWNrZHJvcEFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyNzVtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyMG1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgIF0pXG4gICAgXSldLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGFuaW1hdGlvblN0YXRlID0gJ2hpZGRlbidcblxuICBASW5wdXQoKSBhbmltYXRpb246IGFuaW1hdGlvbiA9ICdzbGlkZUluJztcbiAgQElucHV0KCkgdmVydGljYWxBbGlnbjogdmVydGljYWxBbGlnbiA9ICdib3R0b20nO1xuICBASW5wdXQoKSBmbG9hdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBiYWNrZHJvcDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBmdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYmFja2Ryb3BDbG9zZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHN3aXBlRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgQFZpZXdDaGlsZCgnY2FyZCcpIGNhcmQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2JhY2tkcm9wJykgYmFja2Ryb3BFbGVtOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgcGFuU3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBjaGFuZ2U6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgfVxuXG4gIHNldHVwUGFuKGVsZW06IEVsZW1lbnRSZWYsIHRocmVzaG9sZDogbnVtYmVyKSB7XG5cbiAgICBpZiAoIXRoaXMuc3dpcGVFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFtbWVyID0gbmV3IEhhbW1lcihlbGVtKTtcbiAgICBoYW1tZXIuZ2V0KCdwYW4nKS5zZXQoeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMIH0pO1xuXG4gICAgY29uc3QgcGFudXAgPSBmcm9tRXZlbnQoaGFtbWVyLCAncGFudXAnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSgyKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBhbnVwXCIsIHJlcyk7XG4gICAgICAgIHRoaXMub25Td2lwZVVwKHJlcywgdGhyZXNob2xkKTtcbiAgICAgIH0pXG5cbiAgICBjb25zdCBwYW5kb3duID0gZnJvbUV2ZW50KGhhbW1lciwgJ3BhbmRvd24nKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSgyKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBhbmRvd24gc3ViXCIsIHJlcyk7XG4gICAgICAgIHRoaXMub25Td2lwZURvd24ocmVzLCB0aHJlc2hvbGQpO1xuICAgICAgfSlcblxuICAgIGNvbnN0IHBhbmVuZCA9IGZyb21FdmVudChoYW1tZXIsICdwYW5lbmQgcGFuY2FuY2VsJylcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXMuZGlzdGFuY2UgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoMHB4KWApXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB0aGlzLnBhblN1YnMucHVzaChwYW5kb3duLCBwYW51cCwgcGFuZW5kKTtcblxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNhcmQpO1xuICB9XG5cbiAgc2hvd0RpYWxvZygpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gYCR7dGhpcy5hbmltYXRpb259LSR7dGhpcy52ZXJ0aWNhbEFsaWdufWA7XG4gIH1cblxuICBoaWRlRGlhbG9nKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSAnaGlkZGVuJztcbiAgICB0aGlzLnBhblN1YnMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfSlcbiAgfVxuXG4gIGlzRmxvYXRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmxvYXRpbmcgfHwgKHRoaXMucm91bmRlZCAmJiB0aGlzLnZlcnRpY2FsQWxpZ24gPT09ICdjZW50ZXInKVxuICB9XG5cbiAgcm91bmRlZFRvcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yb3VuZGVkICYmIHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ3RvcCcgJiYgIXRoaXMuZmxvYXRpbmdcbiAgfVxuXG4gIHJvdW5kZWRCb3R0b20oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm91bmRlZCAmJiB0aGlzLnZlcnRpY2FsQWxpZ24gPT09ICdib3R0b20nICYmICF0aGlzLmZsb2F0aW5nXG4gIH1cblxuICBvblN3aXBlVXAoZXZlbnQsIHRocmVzaG9sZCkge1xuICAgIGNvbnNvbGUubG9nKE1hdGguZXhwKGV2ZW50LmRpc3RhbmNlIC8gNTApKTtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IDEgKyBNYXRoLmV4cChldmVudC5kaXN0YW5jZSAvIDUwKSAvIDUwO1xuXG4gICAgaWYgKHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ3RvcCcpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jYXJkLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgtJHtldmVudC5kaXN0YW5jZSAqIHZlbG9jaXR5fXB4KWApXG4gICAgICBpZiAoZXZlbnQuZGlzdGFuY2UgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N3aXBlIGRvd24gaGFwcGVuZWQnKTtcbiAgICAgICAgdGhpcy5oaWRlRGlhbG9nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Td2lwZURvd24oZXZlbnQsIHRocmVzaG9sZCkge1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gMSArIE1hdGguZXhwKGV2ZW50LmRpc3RhbmNlIC8gNTApIC8gNTA7XG4gICAgY29uc29sZS5sb2codmVsb2NpdHkpO1xuICAgIGlmICh0aGlzLnZlcnRpY2FsQWxpZ24gPT09ICdib3R0b20nIHx8IHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jYXJkLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke2V2ZW50LmRpc3RhbmNlICogdmVsb2NpdHl9cHgpYClcbiAgICAgIGlmIChldmVudC5kaXN0YW5jZSA+IHRocmVzaG9sZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3dpcGUgZG93biBoYXBwZW5lZCcpO1xuICAgICAgICB0aGlzLmhpZGVEaWFsb2coKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIG9uRGlhbG9nQW5pbWF0aW9uRG9uZShldmVudCkge1xuICAgIGlmIChldmVudC50b1N0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNhcmQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKDBweClgKVxuICAgIH1cbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgdGhpcy5zZXR1cFBhbih0aGlzLmNhcmQubmF0aXZlRWxlbWVudCw1OCk7XG4gICAgfVxuICB9XG5cbiAgYmFja2Ryb3BBbmltRG9uZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYmFja2Ryb3BFbGVtLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICAvLyB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmJhY2tkcm9wRWxlbS5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuc2V0dXBQYW4odGhpcy5iYWNrZHJvcEVsZW0ubmF0aXZlRWxlbWVudCwgMTEyKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIYW1tZXJHZXN0dXJlQ29uZmlnLCBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7SGFtbWVyfSBmcm9tICdoYW1tZXJqcyc7XG5cbmV4cG9ydCBjbGFzcyBNeUhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBvdmVycmlkZXMgPSA8YW55PntcbiAgICBwYW46IHsgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX1ZFUlRJQ0FMLHRocmVzaG9sZDogMyB9LFxuICB9O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0RpYWxvZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtEaWFsb2dDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsXG4gICAgICB1c2VDbGFzczogTXlIYW1tZXJDb25maWdcbiAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkhhbW1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7d0JBSkQ7Ozs7Ozs7QUNBQTtJQTBJRSx5QkFBb0IsUUFBbUIsRUFBUyxNQUF5QjtRQUFyRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7OEJBaEJ4RCxRQUFRO3lCQUVPLFNBQVM7NkJBQ0QsUUFBUTt3QkFDbkIsS0FBSzt3QkFDTCxLQUFLOzBCQUNILEtBQUs7dUJBQ1IsS0FBSzs2QkFDQyxJQUFJOzRCQUNMLElBQUk7dUJBS0gsRUFBRTtLQUluQzs7Ozs7O0lBRUQsa0NBQVE7Ozs7O0lBQVIsVUFBUyxJQUFnQixFQUFFLFNBQWlCO1FBQTVDLGlCQXFDQztRQW5DQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixPQUFPO1NBQ1I7O1FBRUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7O1FBRTNELElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO2FBQ3JDLElBQUksQ0FDSCxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQ2hCO2FBQ0EsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ2hDLENBQUMsQ0FBQTs7UUFFSixJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQzthQUN6QyxJQUFJLENBQ0gsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUNoQjthQUNBLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNsQyxDQUFDLENBQUE7O1FBRUosSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQzthQUNqRCxTQUFTLENBQUMsVUFBQyxHQUFRO1lBQ2xCLElBQUksR0FBRyxDQUFDLFFBQVEsR0FBRyxTQUFTLEVBQUU7Z0JBQzVCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO2FBQ2hGO1NBQ0YsQ0FBQyxDQUFBO1FBRUosSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztLQUczQzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3hCOzs7O0lBRUQsb0NBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBTSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxhQUFlLENBQUM7S0FDakU7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDdEIsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25CLENBQUMsQ0FBQTtLQUNIOzs7O0lBRUQsb0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxRQUFRLENBQUMsQ0FBQTtLQUMxRTs7OztJQUVELG9DQUFVOzs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7S0FDdEU7Ozs7SUFFRCx1Q0FBYTs7O0lBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBO0tBQ3pFOzs7Ozs7SUFFRCxtQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQUssRUFBRSxTQUFTO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1FBQzNDLElBQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXhELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxLQUFLLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGlCQUFlLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxRQUFLLENBQUMsQ0FBQTtZQUMzRyxJQUFJLEtBQUssQ0FBQyxRQUFRLEdBQUcsU0FBUyxFQUFFO2dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjtTQUNGO0tBQ0Y7Ozs7OztJQUVELHFDQUFXOzs7OztJQUFYLFVBQVksS0FBSyxFQUFFLFNBQVM7O1FBQzFCLElBQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFFBQVEsRUFBRTtZQUN0RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsZ0JBQWMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLFFBQUssQ0FBQyxDQUFBO1lBQzFHLElBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxTQUFTLEVBQUU7Z0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1NBQ0Y7S0FFRjs7Ozs7SUFFRCwrQ0FBcUI7Ozs7SUFBckIsVUFBc0IsS0FBSztRQUN6QixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO1NBQ2hGO1FBQ0QsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNDO0tBQ0Y7Ozs7O0lBRUQsMENBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQUs7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7O1lBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3JEO0tBQ0Y7O2dCQS9PRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxpaEJBTVQ7b0JBQ0QsTUFBTSxFQUFFLENBQUMsbWtCQUFta0IsQ0FBQztvQkFDN2tCLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsWUFBWSxFQUFFOzRCQUNwQixVQUFVLENBQUMsdUJBQXVCLEVBQUU7Z0NBQ2xDLEtBQUssQ0FBQztvQ0FDSixTQUFTLEVBQUUsbUJBQW1CO2lDQUMvQixDQUFDO2dDQUNGLE9BQU8sQ0FBQyx5Q0FBeUMsQ0FBQzs2QkFDbkQsQ0FBQzs0QkFDRixVQUFVLENBQUMsMEJBQTBCLEVBQUU7Z0NBQ3JDLEtBQUssQ0FBQztvQ0FDSixTQUFTLEVBQUUsa0JBQWtCO2lDQUM5QixDQUFDO2dDQUNGLE9BQU8sQ0FBQyx5Q0FBeUMsQ0FBQzs2QkFDbkQsQ0FBQzs0QkFDRixVQUFVLENBQUMseUJBQXlCLEVBQUU7Z0NBQ3BDLEtBQUssQ0FBQztvQ0FDSixPQUFPLEVBQUUsQ0FBQztpQ0FDWCxDQUFDO2dDQUNGLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs2QkFDMUIsQ0FBQzs0QkFDRixVQUFVLENBQUMsc0JBQXNCLEVBQUU7Z0NBQ2pDLEtBQUssQ0FBQztvQ0FDSixPQUFPLEVBQUUsQ0FBQztpQ0FDWCxDQUFDO2dDQUNGLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs2QkFDMUIsQ0FBQzs0QkFDRixVQUFVLENBQUMseUJBQXlCLEVBQUU7Z0NBQ3BDLEtBQUssQ0FBQztvQ0FDSixPQUFPLEVBQUUsQ0FBQztvQ0FDVixHQUFHLEVBQUUsS0FBSztvQ0FDVixTQUFTLEVBQUUsa0JBQWtCO2lDQUM5QixDQUFDO2dDQUNGLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs2QkFDMUIsQ0FBQzs0QkFDRixVQUFVLENBQUMsMEJBQTBCLEVBQUU7Z0NBQ3JDLEtBQUssQ0FBQztvQ0FDSixHQUFHLEVBQUUsS0FBSztvQ0FDVixTQUFTLEVBQUUsa0JBQWtCO29DQUM3QixPQUFPLEVBQUUsQ0FBQztpQ0FDWCxDQUFDO2dDQUNGLE9BQU8sQ0FBQyx5Q0FBeUMsQ0FBQzs2QkFDbkQsQ0FBQzs0QkFDRixVQUFVLENBQUMsMEJBQTBCLEVBQUU7Z0NBQ3JDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7OztvQ0FHOUIsT0FBTyxFQUFFLENBQUM7aUNBQ1gsQ0FBQyxDQUFDOzZCQUNKLENBQUM7NEJBQ0YsVUFBVSxDQUFDLGFBQWEsRUFBRTtnQ0FDeEIsT0FBTyxDQUFDLGdCQUFnQixDQUFDOzZCQUMxQixDQUFDOzRCQUNGLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO2dDQUNwQixPQUFPLEVBQUUsTUFBTTtnQ0FDZixPQUFPLEVBQUUsR0FBRzs2QkFDYixDQUFDLENBQ0Q7NEJBQ0QsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7Z0NBQ3pCLEdBQUcsRUFBRSxDQUFDOzZCQUNQLENBQUMsQ0FDRDs0QkFDRCxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDO2dDQUM1QixNQUFNLEVBQUUsQ0FBQzs2QkFDVixDQUFDLENBQ0Q7NEJBQ0QsS0FBSyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7Z0NBQ3hCLEdBQUcsRUFBRSxDQUFDOzZCQUNQLENBQUMsQ0FDRDs0QkFDRCxLQUFLLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztnQ0FDM0IsTUFBTSxFQUFFLENBQUM7NkJBQ1YsQ0FBQyxDQUNEOzRCQUNELEtBQUssQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDO2dDQUMzQixHQUFHLEVBQUUsS0FBSztnQ0FDVixTQUFTLEVBQUUsa0JBQWtCO2dDQUM3QixZQUFZLEVBQUUsQ0FBQzs2QkFDaEIsQ0FBQyxDQUNEOzRCQUNELEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7Z0NBQzVCLEdBQUcsRUFBRSxLQUFLO2dDQUNWLFNBQVMsRUFBRSxrQkFBa0I7Z0NBQzdCLFlBQVksRUFBRSxDQUFDOzZCQUNoQixDQUFDLENBQ0Q7eUJBQ0YsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxjQUFjLEVBQUU7NEJBQzFCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQztvQ0FDSixPQUFPLEVBQUUsQ0FBQztpQ0FDWCxDQUFDO2dDQUNGLE9BQU8sQ0FBQyx5Q0FBeUMsQ0FBQzs2QkFDbkQsQ0FBQzs0QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixPQUFPLENBQUMseUNBQXlDLENBQUMsRUFBRSxLQUFLLENBQUM7b0NBQ3hELE9BQU8sRUFBRSxDQUFDO2lDQUNYLENBQUM7NkJBQ0gsQ0FBQzt5QkFDSCxDQUFDO3FCQUFDO2lCQUNOOzs7O2dCQXZIa0MsU0FBUztnQkFBeUIsaUJBQWlCOzs7NEJBNEhuRixLQUFLO2dDQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7MEJBQ0wsS0FBSztnQ0FDTCxLQUFLOytCQUNMLEtBQUs7dUJBRUwsU0FBUyxTQUFDLE1BQU07K0JBQ2hCLFNBQVMsU0FBQyxVQUFVOzswQkF0SXZCOzs7Ozs7O0lDT0E7SUFBb0NBLGtDQUFtQjs7OzRDQUNwQztZQUNmLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRUMsUUFBTSxDQUFDLGtCQUFrQixFQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUU7U0FDM0Q7Ozt5QkFWSDtFQU9vQyxtQkFBbUIsRUFJdEQsQ0FBQTtBQUpEOzs7O2dCQU1DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMxQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLHFCQUFxQjs0QkFDOUIsUUFBUSxFQUFFLGNBQWM7eUJBQzNCO3FCQUNBO2lCQUNGOzt1QkExQkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==