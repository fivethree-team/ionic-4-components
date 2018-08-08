import { Injectable, Component, Input, NgModule, defineInjectable } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
                    exports: [DialogComponent]
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

export { DialogService, DialogComponent, DialogModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtbWF0ZXJpYWwtZGlhbG9nLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9pb25pYy1tYXRlcmlhbC1kaWFsb2cvbGliL2RpYWxvZy5zZXJ2aWNlLnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1kaWFsb2cvbGliL2RpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL2lvbmljLW1hdGVyaWFsLWRpYWxvZy9saWIvZGlhbG9nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5cblxuZXhwb3J0IHR5cGUgYW5pbWF0aW9uID0gXCJzbGlkZUluXCIgfCBcImZhZGVJblwiXG5leHBvcnQgdHlwZSB2ZXJ0aWNhbEFsaWduID0gXCJ0b3BcIiB8IFwiYm90dG9tXCIgfCBcImNlbnRlclwiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dnLWRpYWxvZycsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJnZy1iYWNrZHJvcFwiIFtAYmFja2Ryb3BBbmltXSAoY2xpY2spPVwiaGlkZURpYWxvZygpXCIgKm5nSWY9XCJhbmltYXRpb25TdGF0ZSAhPT0gJ2hpZGRlbicgJiYgYmFja2Ryb3BcIj5cbiAgPC9kaXY+XG4gIDxpb24tY2FyZCBbQGRpYWxvZ0FuaW1dPVwiYW5pbWF0aW9uU3RhdGVcIiBtb2RlPVwibWRcIiBjbGFzcz1cImdnLWRpYWxvZ1wiIFtuZ0NsYXNzXT1cInsnZmxvYXRpbmcnOiBmbG9hdGluZ31cIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2lvbi1jYXJkPlxuICBgLFxuICBzdHlsZXM6IFtgLmdnLWRpYWxvZ3twb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjUwMDI7YmFja2dyb3VuZDojZmZmO21hcmdpbjowO2JvcmRlci1yYWRpdXM6MDt3aWR0aDoxMDAlfS50b3B7dG9wOjB9LmJvdHRvbXtib3R0b206MH0uZmxvYXRpbmd7bWFyZ2luOjE2cHggMjBweDtib3JkZXItcmFkaXVzOjhweDt3aWR0aDpjYWxjKDEwMCUgLSA0MHB4KTtib3gtc2hhZG93OjAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMTIpfS5nZy1iYWNrZHJvcHtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjIyKTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjUwMDF9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkaWFsb2dBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHNsaWRlSW4tdG9wJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyNzVtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gc2xpZGVJbi1ib3R0b20nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IGZhZGVJbi1ib3R0b20nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBmYWRlSW4tdG9wJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gZmFkZUluLWNlbnRlcicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHNsaWRlSW4tY2VudGVyJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0yNSUpJyxcbiAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignc2xpZGVJbi1jZW50ZXIgPT4gaGlkZGVuJywgW1xuICAgICAgICBhbmltYXRlKCcyNDBtcyBlYXNlLW91dCcsc3R5bGUoe3RvcDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTI1JSknLFxuICAgICAgICAgb3BhY2l0eTogMCB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBoaWRkZW4nLCBbXG4gICAgICAgIGFuaW1hdGUoJzI0MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdzbGlkZUluLXRvcCcsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnc2xpZGVJbi1ib3R0b20nLCBzdHlsZSh7XG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnZmFkZUluLXRvcCcsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdmYWRlSW4tYm90dG9tJywgc3R5bGUoe1xuICAgICAgICBib3R0b206IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ2ZhZGVJbi1jZW50ZXInLCBzdHlsZSh7XG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnc2xpZGVJbi1jZW50ZXInLCBzdHlsZSh7XG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgfSlcbiAgICAgICksXG4gICAgXSksIHRyaWdnZXIoJ2JhY2tkcm9wQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTIwbXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJyksIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgXSlcbiAgICBdKV0sXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgYW5pbWF0aW9uU3RhdGUgPSAnaGlkZGVuJ1xuXG4gIEBJbnB1dCgpIGFuaW1hdGlvbjogYW5pbWF0aW9uID0gJ3NsaWRlSW4nO1xuICBASW5wdXQoKSB2ZXJ0aWNhbEFsaWduOiB2ZXJ0aWNhbEFsaWduID0gJ2JvdHRvbSc7XG4gIEBJbnB1dCgpIGZsb2F0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGJhY2tkcm9wOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBzaG93RGlhbG9nKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSBgJHt0aGlzLmFuaW1hdGlvbn0tJHt0aGlzLnZlcnRpY2FsQWxpZ259YDtcbiAgfVxuXG4gIGhpZGVEaWFsb2coKSB7XG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9ICdoaWRkZW4nO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0RpYWxvZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtEaWFsb2dDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7d0JBSkQ7Ozs7Ozs7QUNBQTtJQXlIRTs4QkFQaUIsUUFBUTt5QkFFTyxTQUFTOzZCQUNELFFBQVE7d0JBQ25CLEtBQUs7d0JBQ0wsS0FBSztLQUlqQzs7OztJQUVELGtDQUFROzs7SUFBUjtLQUVDOzs7O0lBRUQsb0NBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBTSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxhQUFlLENBQUM7S0FDakU7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztLQUNoQzs7Z0JBaElGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLDBTQU1UO29CQUNELE1BQU0sRUFBRSxDQUFDLDRVQUE0VSxDQUFDO29CQUN0VixVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLFlBQVksRUFBRTs0QkFDcEIsVUFBVSxDQUFDLHVCQUF1QixFQUFFO2dDQUNsQyxLQUFLLENBQUM7b0NBQ0osU0FBUyxFQUFFLG1CQUFtQjtpQ0FDL0IsQ0FBQztnQ0FDRixPQUFPLENBQUMseUNBQXlDLENBQUM7NkJBQ25ELENBQUM7NEJBQ0YsVUFBVSxDQUFDLDBCQUEwQixFQUFFO2dDQUNyQyxLQUFLLENBQUM7b0NBQ0osU0FBUyxFQUFFLGtCQUFrQjtpQ0FDOUIsQ0FBQztnQ0FDRixPQUFPLENBQUMseUNBQXlDLENBQUM7NkJBQ25ELENBQUM7NEJBQ0YsVUFBVSxDQUFDLHlCQUF5QixFQUFFO2dDQUNwQyxLQUFLLENBQUM7b0NBQ0osT0FBTyxF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