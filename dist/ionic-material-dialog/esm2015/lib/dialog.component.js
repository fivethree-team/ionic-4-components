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
export class DialogComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLW1hdGVyaWFsLWRpYWxvZy8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUM5QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQW9IdEQsTUFBTTs7Ozs7SUFrQkosWUFBb0IsUUFBbUIsRUFBUyxNQUF5QjtRQUFyRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7OEJBaEJ4RCxRQUFRO3lCQUVPLFNBQVM7NkJBQ0QsUUFBUTt3QkFDbkIsS0FBSzt3QkFDTCxLQUFLOzBCQUNILEtBQUs7dUJBQ1IsS0FBSzs2QkFDQyxJQUFJOzRCQUNMLElBQUk7dUJBS0gsRUFBRTtLQUluQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQWdCLEVBQUUsU0FBaUI7UUFFMUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUM7U0FDUjs7UUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLENB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QixTQUFTLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgc3RhdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRocm90dGxlVGltZSwgcmVkdWNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cblxuZXhwb3J0IHR5cGUgYW5pbWF0aW9uID0gXCJzbGlkZUluXCIgfCBcImZhZGVJblwiXG5leHBvcnQgdHlwZSB2ZXJ0aWNhbEFsaWduID0gXCJ0b3BcIiB8IFwiYm90dG9tXCIgfCBcImNlbnRlclwiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dnLWRpYWxvZycsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgI2JhY2tkcm9wIGNsYXNzPVwiZ2ctYmFja2Ryb3BcIiBbQGJhY2tkcm9wQW5pbV0gKEBiYWNrZHJvcEFuaW0uZG9uZSk9XCJiYWNrZHJvcEFuaW1Eb25lKCRldmVudClcIiAoY2xpY2spPVwiYmFja2Ryb3BDbG9zZT8gaGlkZURpYWxvZygpIDogZmFsc2VcIiAqbmdJZj1cImFuaW1hdGlvblN0YXRlICE9PSAnaGlkZGVuJyAmJiBiYWNrZHJvcFwiPlxuICA8L2Rpdj5cbiAgPGlvbi1jYXJkICNjYXJkIFtAZGlhbG9nQW5pbV09XCJhbmltYXRpb25TdGF0ZVwiIChAZGlhbG9nQW5pbS5kb25lKT1cIm9uRGlhbG9nQW5pbWF0aW9uRG9uZSgkZXZlbnQpXCIgbW9kZT1cIm1kXCIgY2xhc3M9XCJnZy1kaWFsb2dcIiBbbmdDbGFzc109XCJ7J2Zsb2F0aW5nJzogaXNGbG9hdGluZygpLCdmdWxsc2NyZWVuJzpmdWxsc2NyZWVuLCdyb3VuZGVkLXRvcCc6IHJvdW5kZWRUb3AoKSwncm91bmRlZC1ib3R0b20nOnJvdW5kZWRCb3R0b20oKX1cIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2lvbi1jYXJkPlxuICBgLFxuICBzdHlsZXM6IFtgLmdnLWRpYWxvZ3twb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjUwMDI7YmFja2dyb3VuZDojZmZmO21hcmdpbjowO2JvcmRlci1yYWRpdXM6MDt3aWR0aDoxMDAlfS50b3B7dG9wOjB9LmJvdHRvbXtib3R0b206MH0uZmxvYXRpbmd7bWFyZ2luOjE2cHggMjBweDtib3JkZXItcmFkaXVzOjhweDt3aWR0aDpjYWxjKDEwMCUgLSA0MHB4KTtib3gtc2hhZG93OjAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMTIpfS5mdWxsc2NyZWVue21hcmdpbjowO2JvcmRlci1yYWRpdXM6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JveC1zaGFkb3c6MCA0cHggMTZweCByZ2JhKDAsMCwwLC4xMil9LnJvdW5kZWQtdG9we2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MTJweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxMnB4fS5yb3VuZGVkLWJvdHRvbXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEycHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTJweH0uZ2ctYmFja2Ryb3B7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4yMik7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDo1MDAxfWBdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGlhbG9nQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBzbGlkZUluLXRvcCcsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHNsaWRlSW4tYm90dG9tJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBmYWRlSW4tYm90dG9tJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gZmFkZUluLXRvcCcsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IGZhZGVJbi1jZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBzbGlkZUluLWNlbnRlcicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMjUlKScsXG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignc2xpZGVJbi1jZW50ZXIgPT4gaGlkZGVuJywgW1xuICAgICAgICBhbmltYXRlKCcxMjBtcyBlYXNlLW91dCcsIHN0eWxlKHtcbiAgICAgICAgICAvLyB0b3A6ICc1MCUnLFxuICAgICAgICAgIC8vIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoKzUwJSknLFxuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gaGlkZGVuJywgW1xuICAgICAgICBhbmltYXRlKCcyNDBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnc2xpZGVJbi10b3AnLCBzdHlsZSh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ3NsaWRlSW4tYm90dG9tJywgc3R5bGUoe1xuICAgICAgICBib3R0b206IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ2ZhZGVJbi10b3AnLCBzdHlsZSh7XG4gICAgICAgIHRvcDogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnZmFkZUluLWJvdHRvbScsIHN0eWxlKHtcbiAgICAgICAgYm90dG9tOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdmYWRlSW4tY2VudGVyJywgc3R5bGUoe1xuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgJ21hcmdpbi10b3AnOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdzbGlkZUluLWNlbnRlcicsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgICdtYXJnaW4tdG9wJzogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgXSksIHRyaWdnZXIoJ2JhY2tkcm9wQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTIwbXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJyksIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgXSlcbiAgICBdKV0sXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgYW5pbWF0aW9uU3RhdGUgPSAnaGlkZGVuJ1xuXG4gIEBJbnB1dCgpIGFuaW1hdGlvbjogYW5pbWF0aW9uID0gJ3NsaWRlSW4nO1xuICBASW5wdXQoKSB2ZXJ0aWNhbEFsaWduOiB2ZXJ0aWNhbEFsaWduID0gJ2JvdHRvbSc7XG4gIEBJbnB1dCgpIGZsb2F0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGJhY2tkcm9wOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcm91bmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBiYWNrZHJvcENsb3NlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc3dpcGVFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuICBAVmlld0NoaWxkKCdjYXJkJykgY2FyZDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYmFja2Ryb3AnKSBiYWNrZHJvcEVsZW06IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBwYW5TdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGNoYW5nZTogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblxuICB9XG5cbiAgc2V0dXBQYW4oZWxlbTogRWxlbWVudFJlZiwgdGhyZXNob2xkOiBudW1iZXIpIHtcblxuICAgIGlmICghdGhpcy5zd2lwZUVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYW1tZXIgPSBuZXcgSGFtbWVyKGVsZW0pO1xuICAgIGhhbW1lci5nZXQoJ3BhbicpLnNldCh7IGRpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEwgfSk7XG5cbiAgICBjb25zdCBwYW51cCA9IGZyb21FdmVudChoYW1tZXIsICdwYW51cCcpXG4gICAgICAucGlwZShcbiAgICAgICAgdGhyb3R0bGVUaW1lKDIpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFudXBcIiwgcmVzKTtcbiAgICAgICAgdGhpcy5vblN3aXBlVXAocmVzLCB0aHJlc2hvbGQpO1xuICAgICAgfSlcblxuICAgIGNvbnN0IHBhbmRvd24gPSBmcm9tRXZlbnQoaGFtbWVyLCAncGFuZG93bicpXG4gICAgICAucGlwZShcbiAgICAgICAgdGhyb3R0bGVUaW1lKDIpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFuZG93biBzdWJcIiwgcmVzKTtcbiAgICAgICAgdGhpcy5vblN3aXBlRG93bihyZXMsIHRocmVzaG9sZCk7XG4gICAgICB9KVxuXG4gICAgY29uc3QgcGFuZW5kID0gZnJvbUV2ZW50KGhhbW1lciwgJ3BhbmVuZCBwYW5jYW5jZWwnKVxuICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlcy5kaXN0YW5jZSA8IHRocmVzaG9sZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jYXJkLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgwcHgpYClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIHRoaXMucGFuU3Vicy5wdXNoKHBhbmRvd24sIHBhbnVwLCBwYW5lbmQpO1xuXG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY2FyZCk7XG4gIH1cblxuICBzaG93RGlhbG9nKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSBgJHt0aGlzLmFuaW1hdGlvbn0tJHt0aGlzLnZlcnRpY2FsQWxpZ259YDtcbiAgfVxuXG4gIGhpZGVEaWFsb2coKSB7XG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9ICdoaWRkZW4nO1xuICAgIHRoaXMucGFuU3Vicy5mb3JFYWNoKHN1YiA9PiB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9KVxuICB9XG5cbiAgaXNGbG9hdGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mbG9hdGluZyB8fCAodGhpcy5yb3VuZGVkICYmIHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ2NlbnRlcicpXG4gIH1cblxuICByb3VuZGVkVG9wKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJvdW5kZWQgJiYgdGhpcy52ZXJ0aWNhbEFsaWduID09PSAndG9wJyAmJiAhdGhpcy5mbG9hdGluZ1xuICB9XG5cbiAgcm91bmRlZEJvdHRvbSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yb3VuZGVkICYmIHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ2JvdHRvbScgJiYgIXRoaXMuZmxvYXRpbmdcbiAgfVxuXG4gIG9uU3dpcGVVcChldmVudCwgdGhyZXNob2xkKSB7XG4gICAgY29uc29sZS5sb2coTWF0aC5leHAoZXZlbnQuZGlzdGFuY2UgLyA1MCkpO1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gMSArIE1hdGguZXhwKGV2ZW50LmRpc3RhbmNlIC8gNTApIC8gNTA7XG5cbiAgICBpZiAodGhpcy52ZXJ0aWNhbEFsaWduID09PSAndG9wJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNhcmQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKC0ke2V2ZW50LmRpc3RhbmNlICogdmVsb2NpdHl9cHgpYClcbiAgICAgIGlmIChldmVudC5kaXN0YW5jZSA+IHRocmVzaG9sZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3dpcGUgZG93biBoYXBwZW5lZCcpO1xuICAgICAgICB0aGlzLmhpZGVEaWFsb2coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblN3aXBlRG93bihldmVudCwgdGhyZXNob2xkKSB7XG4gICAgY29uc3QgdmVsb2NpdHkgPSAxICsgTWF0aC5leHAoZXZlbnQuZGlzdGFuY2UgLyA1MCkgLyA1MDtcbiAgICBjb25zb2xlLmxvZyh2ZWxvY2l0eSk7XG4gICAgaWYgKHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ2JvdHRvbScgfHwgdGhpcy52ZXJ0aWNhbEFsaWduID09PSAnY2VudGVyJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNhcmQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7ZXZlbnQuZGlzdGFuY2UgKiB2ZWxvY2l0eX1weClgKVxuICAgICAgaWYgKGV2ZW50LmRpc3RhbmNlID4gdGhyZXNob2xkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzd2lwZSBkb3duIGhhcHBlbmVkJyk7XG4gICAgICAgIHRoaXMuaGlkZURpYWxvZygpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgb25EaWFsb2dBbmltYXRpb25Eb25lKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoMHB4KWApXG4gICAgfVxuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICB0aGlzLnNldHVwUGFuKHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LDU4KTtcbiAgICB9XG4gIH1cblxuICBiYWNrZHJvcEFuaW1Eb25lKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2codGhpcy5iYWNrZHJvcEVsZW0sIGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIC8vIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuYmFja2Ryb3BFbGVtLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy5zZXR1cFBhbih0aGlzLmJhY2tkcm9wRWxlbS5uYXRpdmVFbGVtZW50LCAxMTIpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=