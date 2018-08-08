/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger, state } from "@angular/animations";
/** @typedef {?} */
var animation;
export { animation };
/** @typedef {?} */
var verticalAlign;
export { verticalAlign };
var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.animationState = 'hidden';
        this.animation = 'slideIn';
        this.verticalAlign = 'bottom';
        this.floating = false;
        this.backdrop = false;
    }
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    DialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gg-dialog',
                    template: "\n  <div class=\"gg-backdrop\" [@backdropAnim] (click)=\"hideDialog()\" *ngIf=\"animationState !== 'hidden' && backdrop\">\n  </div>\n  <ion-card [@dialogAnim]=\"animationState\" mode=\"md\" class=\"gg-dialog\" [ngClass]=\"{'floating': floating}\">\n  <ng-content></ng-content>\n  </ion-card>\n  ",
                    styles: [".gg-dialog{position:absolute;z-index:5002;background:#fff;margin:0;border-radius:0;width:100%}.top{top:0}.bottom{bottom:0}.floating{margin:16px 20px;border-radius:8px;width:calc(100% - 40px);box-shadow:0 4px 16px rgba(0,0,0,.12)}.gg-backdrop{background:rgba(0,0,0,.22);position:absolute;top:0;bottom:0;left:0;right:0;z-index:5001}"],
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
                                animate('240ms ease-out', style({ top: '50%',
                                    transform: 'translateY(-25%)',
                                    opacity: 0 }))
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
                            })),
                            state('slideIn-center', style({
                                top: '50%',
                                transform: 'translateY(-50%)',
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
    DialogComponent.ctorParameters = function () { return []; };
    DialogComponent.propDecorators = {
        animation: [{ type: Input }],
        verticalAlign: [{ type: Input }],
        floating: [{ type: Input }],
        backdrop: [{ type: Input }]
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLW1hdGVyaWFsLWRpYWxvZy8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7OztJQXdIL0U7OEJBUGlCLFFBQVE7eUJBRU8sU0FBUzs2QkFDRCxRQUFRO3dCQUNuQixLQUFLO3dCQUNMLEtBQUs7S0FJakM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7S0FFQzs7OztJQUVELG9DQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQU0sSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsYUFBZSxDQUFDO0tBQ2pFOzs7O0lBRUQsb0NBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7S0FDaEM7O2dCQWhJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSwwU0FNVDtvQkFDRCxNQUFNLEVBQUUsQ0FBQyw0VUFBNFUsQ0FBQztvQkFDdFYsVUFBVSxFQUFFO3dCQUNWLE9BQU8sQ0FBQyxZQUFZLEVBQUU7NEJBQ3BCLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRTtnQ0FDbEMsS0FBSyxDQUFDO29DQUNKLFNBQVMsRUFBRSxtQkFBbUI7aUNBQy9CLENBQUM7Z0NBQ0YsT0FBTyxDQUFDLHlDQUF5QyxDQUFDOzZCQUNuRCxDQUFDOzRCQUNGLFVBQVUsQ0FBQywwQkFBMEIsRUFBRTtnQ0FDckMsS0FBSyxDQUFDO29DQUNKLFNBQVMsRUFBRSxrQkFBa0I7aUNBQzlCLENBQUM7Z0NBQ0YsT0FBTyxDQUFDLHlDQUF5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SW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5cblxuZXhwb3J0IHR5cGUgYW5pbWF0aW9uID0gXCJzbGlkZUluXCIgfCBcImZhZGVJblwiXG5leHBvcnQgdHlwZSB2ZXJ0aWNhbEFsaWduID0gXCJ0b3BcIiB8IFwiYm90dG9tXCIgfCBcImNlbnRlclwiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dnLWRpYWxvZycsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJnZy1iYWNrZHJvcFwiIFtAYmFja2Ryb3BBbmltXSAoY2xpY2spPVwiaGlkZURpYWxvZygpXCIgKm5nSWY9XCJhbmltYXRpb25TdGF0ZSAhPT0gJ2hpZGRlbicgJiYgYmFja2Ryb3BcIj5cbiAgPC9kaXY+XG4gIDxpb24tY2FyZCBbQGRpYWxvZ0FuaW1dPVwiYW5pbWF0aW9uU3RhdGVcIiBtb2RlPVwibWRcIiBjbGFzcz1cImdnLWRpYWxvZ1wiIFtuZ0NsYXNzXT1cInsnZmxvYXRpbmcnOiBmbG9hdGluZ31cIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2lvbi1jYXJkPlxuICBgLFxuICBzdHlsZXM6IFtgLmdnLWRpYWxvZ3twb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjUwMDI7YmFja2dyb3VuZDojZmZmO21hcmdpbjowO2JvcmRlci1yYWRpdXM6MDt3aWR0aDoxMDAlfS50b3B7dG9wOjB9LmJvdHRvbXtib3R0b206MH0uZmxvYXRpbmd7bWFyZ2luOjE2cHggMjBweDtib3JkZXItcmFkaXVzOjhweDt3aWR0aDpjYWxjKDEwMCUgLSA0MHB4KTtib3gtc2hhZG93OjAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMTIpfS5nZy1iYWNrZHJvcHtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjIyKTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjUwMDF9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkaWFsb2dBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHNsaWRlSW4tdG9wJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyNzVtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gc2xpZGVJbi1ib3R0b20nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IGZhZGVJbi1ib3R0b20nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBmYWRlSW4tdG9wJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gZmFkZUluLWNlbnRlcicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHNsaWRlSW4tY2VudGVyJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0yNSUpJyxcbiAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignc2xpZGVJbi1jZW50ZXIgPT4gaGlkZGVuJywgW1xuICAgICAgICBhbmltYXRlKCcyNDBtcyBlYXNlLW91dCcsc3R5bGUoe3RvcDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTI1JSknLFxuICAgICAgICAgb3BhY2l0eTogMCB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBoaWRkZW4nLCBbXG4gICAgICAgIGFuaW1hdGUoJzI0MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdzbGlkZUluLXRvcCcsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnc2xpZGVJbi1ib3R0b20nLCBzdHlsZSh7XG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnZmFkZUluLXRvcCcsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdmYWRlSW4tYm90dG9tJywgc3R5bGUoe1xuICAgICAgICBib3R0b206IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ2ZhZGVJbi1jZW50ZXInLCBzdHlsZSh7XG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnc2xpZGVJbi1jZW50ZXInLCBzdHlsZSh7XG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgfSlcbiAgICAgICksXG4gICAgXSksIHRyaWdnZXIoJ2JhY2tkcm9wQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTIwbXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJyksIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgXSlcbiAgICBdKV0sXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgYW5pbWF0aW9uU3RhdGUgPSAnaGlkZGVuJ1xuXG4gIEBJbnB1dCgpIGFuaW1hdGlvbjogYW5pbWF0aW9uID0gJ3NsaWRlSW4nO1xuICBASW5wdXQoKSB2ZXJ0aWNhbEFsaWduOiB2ZXJ0aWNhbEFsaWduID0gJ2JvdHRvbSc7XG4gIEBJbnB1dCgpIGZsb2F0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGJhY2tkcm9wOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBzaG93RGlhbG9nKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSBgJHt0aGlzLmFuaW1hdGlvbn0tJHt0aGlzLnZlcnRpY2FsQWxpZ259YDtcbiAgfVxuXG4gIGhpZGVEaWFsb2coKSB7XG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9ICdoaWRkZW4nO1xuICB9XG5cbn1cbiJdfQ==