/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { animate, style, transition, trigger, state } from "@angular/animations";
import Hammer from 'hammerjs';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
/** @typedef {?} */
var animation;
export { animation };
/** @typedef {?} */
var verticalAlign;
export { verticalAlign };
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
export { DialogComponent };
if (false) {
    /** @type {?} */
    DialogComponent.prototype.animationState;
    /** @type {?} */
    DialogComponent.prototype.animation;
    /** @type {?} */
    DialogComponent.prototype.verticalAlign;
    /** @type {?} */
    DialogComponent.prototype.floating;
    /** @type {?} */
    DialogComponent.prototype.backdrop;
    /** @type {?} */
    DialogComponent.prototype.fullscreen;
    /** @type {?} */
    DialogComponent.prototype.rounded;
    /** @type {?} */
    DialogComponent.prototype.backdropClose;
    /** @type {?} */
    DialogComponent.prototype.swipeEnabled;
    /** @type {?} */
    DialogComponent.prototype.card;
    /** @type {?} */
    DialogComponent.prototype.backdropElem;
    /** @type {?} */
    DialogComponent.prototype.panSubs;
    /** @type {?} */
    DialogComponent.prototype.renderer;
    /** @type {?} */
    DialogComponent.prototype.change;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLW1hdGVyaWFsLWRpYWxvZy8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUM5QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUFzSXBELHlCQUFvQixRQUFtQixFQUFTLE1BQXlCO1FBQXJELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFtQjs4QkFoQnhELFFBQVE7eUJBRU8sU0FBUzs2QkFDRCxRQUFRO3dCQUNuQixLQUFLO3dCQUNMLEtBQUs7MEJBQ0gsS0FBSzt1QkFDUixLQUFLOzZCQUNDLElBQUk7NEJBQ0wsSUFBSTt1QkFLSCxFQUFFO0tBSW5DOzs7Ozs7SUFFRCxrQ0FBUTs7Ozs7SUFBUixVQUFTLElBQWdCLEVBQUUsU0FBaUI7UUFBNUMsaUJBcUNDO1FBbkNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDO1NBQ1I7O1FBRUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLEVB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LEtBQUs7MEJBQ0wsS0FBSztnQ0FDTCxLQUFLOytCQUNMLEtBQUs7dUJBRUwsU0FBUyxTQUFDLE1BQU07K0JBQ2hCLFNBQVMsU0FBQyxVQUFVOzswQkF0SXZCOztTQXdIYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGhyb3R0bGVUaW1lLCByZWR1Y2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuXG5leHBvcnQgdHlwZSBhbmltYXRpb24gPSBcInNsaWRlSW5cIiB8IFwiZmFkZUluXCJcbmV4cG9ydCB0eXBlIHZlcnRpY2FsQWxpZ24gPSBcInRvcFwiIHwgXCJib3R0b21cIiB8IFwiY2VudGVyXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2ctZGlhbG9nJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiAjYmFja2Ryb3AgY2xhc3M9XCJnZy1iYWNrZHJvcFwiIFtAYmFja2Ryb3BBbmltXSAoQGJhY2tkcm9wQW5pbS5kb25lKT1cImJhY2tkcm9wQW5pbURvbmUoJGV2ZW50KVwiIChjbGljayk9XCJiYWNrZHJvcENsb3NlPyBoaWRlRGlhbG9nKCkgOiBmYWxzZVwiICpuZ0lmPVwiYW5pbWF0aW9uU3RhdGUgIT09ICdoaWRkZW4nICYmIGJhY2tkcm9wXCI+XG4gIDwvZGl2PlxuICA8aW9uLWNhcmQgI2NhcmQgW0BkaWFsb2dBbmltXT1cImFuaW1hdGlvblN0YXRlXCIgKEBkaWFsb2dBbmltLmRvbmUpPVwib25EaWFsb2dBbmltYXRpb25Eb25lKCRldmVudClcIiBtb2RlPVwibWRcIiBjbGFzcz1cImdnLWRpYWxvZ1wiIFtuZ0NsYXNzXT1cInsnZmxvYXRpbmcnOiBpc0Zsb2F0aW5nKCksJ2Z1bGxzY3JlZW4nOmZ1bGxzY3JlZW4sJ3JvdW5kZWQtdG9wJzogcm91bmRlZFRvcCgpLCdyb3VuZGVkLWJvdHRvbSc6cm91bmRlZEJvdHRvbSgpfVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvaW9uLWNhcmQ+XG4gIGAsXG4gIHN0eWxlczogW2AuZ2ctZGlhbG9ne3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6NTAwMjtiYWNrZ3JvdW5kOiNmZmY7bWFyZ2luOjA7Ym9yZGVyLXJhZGl1czowO3dpZHRoOjEwMCV9LnRvcHt0b3A6MH0uYm90dG9te2JvdHRvbTowfS5mbG9hdGluZ3ttYXJnaW46MTZweCAyMHB4O2JvcmRlci1yYWRpdXM6OHB4O3dpZHRoOmNhbGMoMTAwJSAtIDQwcHgpO2JveC1zaGFkb3c6MCA0cHggMTZweCByZ2JhKDAsMCwwLC4xMil9LmZ1bGxzY3JlZW57bWFyZ2luOjA7Ym9yZGVyLXJhZGl1czowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym94LXNoYWRvdzowIDRweCAxNnB4IHJnYmEoMCwwLDAsLjEyKX0ucm91bmRlZC10b3B7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxMnB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEycHh9LnJvdW5kZWQtYm90dG9te2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MTJweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMnB4fS5nZy1iYWNrZHJvcHtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjIyKTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjUwMDF9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkaWFsb2dBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHNsaWRlSW4tdG9wJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyNzVtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gc2xpZGVJbi1ib3R0b20nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IGZhZGVJbi1ib3R0b20nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBmYWRlSW4tdG9wJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gZmFkZUluLWNlbnRlcicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHNsaWRlSW4tY2VudGVyJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0yNSUpJyxcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyNzVtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdzbGlkZUluLWNlbnRlciA9PiBoaWRkZW4nLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyMG1zIGVhc2Utb3V0Jywgc3R5bGUoe1xuICAgICAgICAgIC8vIHRvcDogJzUwJScsXG4gICAgICAgICAgLy8gdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgrNTAlKScsXG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBoaWRkZW4nLCBbXG4gICAgICAgIGFuaW1hdGUoJzI0MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdzbGlkZUluLXRvcCcsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnc2xpZGVJbi1ib3R0b20nLCBzdHlsZSh7XG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnZmFkZUluLXRvcCcsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdmYWRlSW4tYm90dG9tJywgc3R5bGUoe1xuICAgICAgICBib3R0b206IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ2ZhZGVJbi1jZW50ZXInLCBzdHlsZSh7XG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgICAnbWFyZ2luLXRvcCc6IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ3NsaWRlSW4tY2VudGVyJywgc3R5bGUoe1xuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgJ21hcmdpbi10b3AnOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICBdKSwgdHJpZ2dlcignYmFja2Ryb3BBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKCcxMjBtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKSwgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICBdKVxuICAgIF0pXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBhbmltYXRpb25TdGF0ZSA9ICdoaWRkZW4nXG5cbiAgQElucHV0KCkgYW5pbWF0aW9uOiBhbmltYXRpb24gPSAnc2xpZGVJbic7XG4gIEBJbnB1dCgpIHZlcnRpY2FsQWxpZ246IHZlcnRpY2FsQWxpZ24gPSAnYm90dG9tJztcbiAgQElucHV0KCkgZmxvYXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYmFja2Ryb3A6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSByb3VuZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGJhY2tkcm9wQ2xvc2U6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzd2lwZUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBWaWV3Q2hpbGQoJ2NhcmQnKSBjYXJkOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdiYWNrZHJvcCcpIGJhY2tkcm9wRWxlbTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIHBhblN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgY2hhbmdlOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXG4gIH1cblxuICBzZXR1cFBhbihlbGVtOiBFbGVtZW50UmVmLCB0aHJlc2hvbGQ6IG51bWJlcikge1xuXG4gICAgaWYgKCF0aGlzLnN3aXBlRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbW1lciA9IG5ldyBIYW1tZXIoZWxlbSk7XG4gICAgaGFtbWVyLmdldCgncGFuJykuc2V0KHsgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0FMTCB9KTtcblxuICAgIGNvbnN0IHBhbnVwID0gZnJvbUV2ZW50KGhhbW1lciwgJ3BhbnVwJylcbiAgICAgIC5waXBlKFxuICAgICAgICB0aHJvdHRsZVRpbWUoMilcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwYW51cFwiLCByZXMpO1xuICAgICAgICB0aGlzLm9uU3dpcGVVcChyZXMsIHRocmVzaG9sZCk7XG4gICAgICB9KVxuXG4gICAgY29uc3QgcGFuZG93biA9IGZyb21FdmVudChoYW1tZXIsICdwYW5kb3duJylcbiAgICAgIC5waXBlKFxuICAgICAgICB0aHJvdHRsZVRpbWUoMilcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwYW5kb3duIHN1YlwiLCByZXMpO1xuICAgICAgICB0aGlzLm9uU3dpcGVEb3duKHJlcywgdGhyZXNob2xkKTtcbiAgICAgIH0pXG5cbiAgICBjb25zdCBwYW5lbmQgPSBmcm9tRXZlbnQoaGFtbWVyLCAncGFuZW5kIHBhbmNhbmNlbCcpXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzLmRpc3RhbmNlIDwgdGhyZXNob2xkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNhcmQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKDBweClgKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgdGhpcy5wYW5TdWJzLnB1c2gocGFuZG93biwgcGFudXAsIHBhbmVuZCk7XG5cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jYXJkKTtcbiAgfVxuXG4gIHNob3dEaWFsb2coKSB7XG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IGAke3RoaXMuYW5pbWF0aW9ufS0ke3RoaXMudmVydGljYWxBbGlnbn1gO1xuICB9XG5cbiAgaGlkZURpYWxvZygpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gJ2hpZGRlbic7XG4gICAgdGhpcy5wYW5TdWJzLmZvckVhY2goc3ViID0+IHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH0pXG4gIH1cblxuICBpc0Zsb2F0aW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZsb2F0aW5nIHx8ICh0aGlzLnJvdW5kZWQgJiYgdGhpcy52ZXJ0aWNhbEFsaWduID09PSAnY2VudGVyJylcbiAgfVxuXG4gIHJvdW5kZWRUb3AoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm91bmRlZCAmJiB0aGlzLnZlcnRpY2FsQWxpZ24gPT09ICd0b3AnICYmICF0aGlzLmZsb2F0aW5nXG4gIH1cblxuICByb3VuZGVkQm90dG9tKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJvdW5kZWQgJiYgdGhpcy52ZXJ0aWNhbEFsaWduID09PSAnYm90dG9tJyAmJiAhdGhpcy5mbG9hdGluZ1xuICB9XG5cbiAgb25Td2lwZVVwKGV2ZW50LCB0aHJlc2hvbGQpIHtcbiAgICBjb25zb2xlLmxvZyhNYXRoLmV4cChldmVudC5kaXN0YW5jZSAvIDUwKSk7XG4gICAgY29uc3QgdmVsb2NpdHkgPSAxICsgTWF0aC5leHAoZXZlbnQuZGlzdGFuY2UgLyA1MCkgLyA1MDtcblxuICAgIGlmICh0aGlzLnZlcnRpY2FsQWxpZ24gPT09ICd0b3AnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoLSR7ZXZlbnQuZGlzdGFuY2UgKiB2ZWxvY2l0eX1weClgKVxuICAgICAgaWYgKGV2ZW50LmRpc3RhbmNlID4gdGhyZXNob2xkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzd2lwZSBkb3duIGhhcHBlbmVkJyk7XG4gICAgICAgIHRoaXMuaGlkZURpYWxvZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uU3dpcGVEb3duKGV2ZW50LCB0aHJlc2hvbGQpIHtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IDEgKyBNYXRoLmV4cChldmVudC5kaXN0YW5jZSAvIDUwKSAvIDUwO1xuICAgIGNvbnNvbGUubG9nKHZlbG9jaXR5KTtcbiAgICBpZiAodGhpcy52ZXJ0aWNhbEFsaWduID09PSAnYm90dG9tJyB8fCB0aGlzLnZlcnRpY2FsQWxpZ24gPT09ICdjZW50ZXInKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHtldmVudC5kaXN0YW5jZSAqIHZlbG9jaXR5fXB4KWApXG4gICAgICBpZiAoZXZlbnQuZGlzdGFuY2UgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N3aXBlIGRvd24gaGFwcGVuZWQnKTtcbiAgICAgICAgdGhpcy5oaWRlRGlhbG9nKCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBvbkRpYWxvZ0FuaW1hdGlvbkRvbmUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jYXJkLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgwcHgpYClcbiAgICB9XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIHRoaXMuc2V0dXBQYW4odGhpcy5jYXJkLm5hdGl2ZUVsZW1lbnQsNTgpO1xuICAgIH1cbiAgfVxuXG4gIGJhY2tkcm9wQW5pbURvbmUoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJhY2tkcm9wRWxlbSwgZXZlbnQpO1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICd2b2lkJykge1xuICAgICAgLy8gdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5iYWNrZHJvcEVsZW0ubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLnNldHVwUGFuKHRoaXMuYmFja2Ryb3BFbGVtLm5hdGl2ZUVsZW1lbnQsIDExMik7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==