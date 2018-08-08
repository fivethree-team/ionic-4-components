(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('@ionic/angular'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ionic-material-dialog', ['exports', '@angular/core', '@angular/animations', '@ionic/angular', '@angular/common'], factory) :
    (factory((global['ionic-material-dialog'] = {}),global.ng.core,global.ng.animations,null,global.ng.common));
}(this, (function (exports,i0,animations,angular,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DialogService = (function () {
        function DialogService() {
        }
        DialogService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        DialogService.ctorParameters = function () { return []; };
        /** @nocollapse */ DialogService.ngInjectableDef = i0.defineInjectable({ factory: function DialogService_Factory() { return new DialogService(); }, token: DialogService, providedIn: "root" });
        return DialogService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DialogComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'gg-dialog',
                        template: "\n  <div class=\"gg-backdrop\" [@backdropAnim] (click)=\"hideDialog()\" *ngIf=\"animationState !== 'hidden' && backdrop\">\n  </div>\n  <ion-card [@dialogAnim]=\"animationState\" mode=\"md\" class=\"gg-dialog\" [ngClass]=\"{'floating': floating}\">\n  <ng-content></ng-content>\n  </ion-card>\n  ",
                        styles: [".gg-dialog{position:absolute;z-index:5002;background:#fff;margin:0;border-radius:0;width:100%}.top{top:0}.bottom{bottom:0}.floating{margin:16px 20px;border-radius:8px;width:calc(100% - 40px);box-shadow:0 4px 16px rgba(0,0,0,.12)}.gg-backdrop{background:rgba(0,0,0,.22);position:absolute;top:0;bottom:0;left:0;right:0;z-index:5001}"],
                        animations: [
                            animations.trigger('dialogAnim', [
                                animations.transition('hidden => slideIn-top', [
                                    animations.style({
                                        transform: 'translateY(-100%)'
                                    }),
                                    animations.animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                                ]),
                                animations.transition('hidden => slideIn-bottom', [
                                    animations.style({
                                        transform: 'translateY(100%)'
                                    }),
                                    animations.animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                                ]),
                                animations.transition('hidden => fadeIn-bottom', [
                                    animations.style({
                                        opacity: 0
                                    }),
                                    animations.animate('360ms ease-out')
                                ]),
                                animations.transition('hidden => fadeIn-top', [
                                    animations.style({
                                        opacity: 0
                                    }),
                                    animations.animate('360ms ease-out')
                                ]),
                                animations.transition('hidden => fadeIn-center', [
                                    animations.style({
                                        opacity: 0,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                    }),
                                    animations.animate('360ms ease-out')
                                ]),
                                animations.transition('hidden => slideIn-center', [
                                    animations.style({
                                        top: '50%',
                                        transform: 'translateY(-25%)',
                                        opacity: 0
                                    }),
                                    animations.animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                                ]),
                                animations.transition('slideIn-center => hidden', [
                                    animations.animate('240ms ease-out', animations.style({ top: '50%',
                                        transform: 'translateY(-25%)',
                                        opacity: 0 }))
                                ]),
                                animations.transition('* => hidden', [
                                    animations.animate('240ms ease-out')
                                ]),
                                animations.state('hidden', animations.style({
                                    display: 'none',
                                    opacity: '0',
                                })),
                                animations.state('slideIn-top', animations.style({
                                    top: 0,
                                })),
                                animations.state('slideIn-bottom', animations.style({
                                    bottom: 0
                                })),
                                animations.state('fadeIn-top', animations.style({
                                    top: 0
                                })),
                                animations.state('fadeIn-bottom', animations.style({
                                    bottom: 0
                                })),
                                animations.state('fadeIn-center', animations.style({
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                })),
                                animations.state('slideIn-center', animations.style({
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                })),
                            ]), animations.trigger('backdropAnim', [
                                animations.transition('void => *', [
                                    animations.style({
                                        opacity: 0
                                    }),
                                    animations.animate('275ms 100ms cubic-bezier(0.32,1,0.23,1)')
                                ]),
                                animations.transition('* => void', [
                                    animations.animate('120ms 100ms cubic-bezier(0.32,1,0.23,1)'), animations.style({
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
            animation: [{ type: i0.Input }],
            verticalAlign: [{ type: i0.Input }],
            floating: [{ type: i0.Input }],
            backdrop: [{ type: i0.Input }]
        };
        return DialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DialogModule = (function () {
        function DialogModule() {
        }
        DialogModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            angular.IonicModule,
                            common.CommonModule
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

    exports.DialogService = DialogService;
    exports.DialogComponent = DialogComponent;
    exports.DialogModule = DialogModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtbWF0ZXJpYWwtZGlhbG9nLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vaW9uaWMtbWF0ZXJpYWwtZGlhbG9nL2xpYi9kaWFsb2cuc2VydmljZS50cyIsIm5nOi8vaW9uaWMtbWF0ZXJpYWwtZGlhbG9nL2xpYi9kaWFsb2cuY29tcG9uZW50LnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1kaWFsb2cvbGliL2RpYWxvZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgc3RhdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuXG5cbmV4cG9ydCB0eXBlIGFuaW1hdGlvbiA9IFwic2xpZGVJblwiIHwgXCJmYWRlSW5cIlxuZXhwb3J0IHR5cGUgdmVydGljYWxBbGlnbiA9IFwidG9wXCIgfCBcImJvdHRvbVwiIHwgXCJjZW50ZXJcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZy1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZ2ctYmFja2Ryb3BcIiBbQGJhY2tkcm9wQW5pbV0gKGNsaWNrKT1cImhpZGVEaWFsb2coKVwiICpuZ0lmPVwiYW5pbWF0aW9uU3RhdGUgIT09ICdoaWRkZW4nICYmIGJhY2tkcm9wXCI+XG4gIDwvZGl2PlxuICA8aW9uLWNhcmQgW0BkaWFsb2dBbmltXT1cImFuaW1hdGlvblN0YXRlXCIgbW9kZT1cIm1kXCIgY2xhc3M9XCJnZy1kaWFsb2dcIiBbbmdDbGFzc109XCJ7J2Zsb2F0aW5nJzogZmxvYXRpbmd9XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9pb24tY2FyZD5cbiAgYCxcbiAgc3R5bGVzOiBbYC5nZy1kaWFsb2d7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo1MDAyO2JhY2tncm91bmQ6I2ZmZjttYXJnaW46MDtib3JkZXItcmFkaXVzOjA7d2lkdGg6MTAwJX0udG9we3RvcDowfS5ib3R0b217Ym90dG9tOjB9LmZsb2F0aW5ne21hcmdpbjoxNnB4IDIwcHg7Ym9yZGVyLXJhZGl1czo4cHg7d2lkdGg6Y2FsYygxMDAlIC0gNDBweCk7Ym94LXNoYWRvdzowIDRweCAxNnB4IHJnYmEoMCwwLDAsLjEyKX0uZ2ctYmFja2Ryb3B7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4yMik7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDo1MDAxfWBdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGlhbG9nQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBzbGlkZUluLXRvcCcsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHNsaWRlSW4tYm90dG9tJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBmYWRlSW4tYm90dG9tJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gZmFkZUluLXRvcCcsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IGZhZGVJbi1jZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBzbGlkZUluLWNlbnRlcicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMjUlKScsXG4gICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3NsaWRlSW4tY2VudGVyID0+IGhpZGRlbicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMjQwbXMgZWFzZS1vdXQnLHN0eWxlKHt0b3A6ICc1MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0yNSUpJyxcbiAgICAgICAgIG9wYWNpdHk6IDAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gaGlkZGVuJywgW1xuICAgICAgICBhbmltYXRlKCcyNDBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnc2xpZGVJbi10b3AnLCBzdHlsZSh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ3NsaWRlSW4tYm90dG9tJywgc3R5bGUoe1xuICAgICAgICBib3R0b206IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ2ZhZGVJbi10b3AnLCBzdHlsZSh7XG4gICAgICAgIHRvcDogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnZmFkZUluLWJvdHRvbScsIHN0eWxlKHtcbiAgICAgICAgYm90dG9tOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdmYWRlSW4tY2VudGVyJywgc3R5bGUoe1xuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ3NsaWRlSW4tY2VudGVyJywgc3R5bGUoe1xuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgIH0pXG4gICAgICApLFxuICAgIF0pLCB0cmlnZ2VyKCdiYWNrZHJvcEFuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyNzVtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyMG1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgIF0pXG4gICAgXSldLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGFuaW1hdGlvblN0YXRlID0gJ2hpZGRlbidcblxuICBASW5wdXQoKSBhbmltYXRpb246IGFuaW1hdGlvbiA9ICdzbGlkZUluJztcbiAgQElucHV0KCkgdmVydGljYWxBbGlnbjogdmVydGljYWxBbGlnbiA9ICdib3R0b20nO1xuICBASW5wdXQoKSBmbG9hdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBiYWNrZHJvcDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgc2hvd0RpYWxvZygpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gYCR7dGhpcy5hbmltYXRpb259LSR7dGhpcy52ZXJ0aWNhbEFsaWdufWA7XG4gIH1cblxuICBoaWRlRGlhbG9nKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSAnaGlkZGVuJztcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIElvbmljTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtEaWFsb2dDb21wb25lbnRdLFxuICBleHBvcnRzOiBbRGlhbG9nQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsInRyaWdnZXIiLCJ0cmFuc2l0aW9uIiwic3R5bGUiLCJhbmltYXRlIiwic3RhdGUiLCJJbnB1dCIsIk5nTW9kdWxlIiwiSW9uaWNNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OzRCQUpEOzs7Ozs7O0FDQUE7UUF5SEU7a0NBUGlCLFFBQVE7NkJBRU8sU0FBUztpQ0FDRCxRQUFROzRCQUNuQixLQUFLOzRCQUNMLEtBQUs7U0FJakM7Ozs7UUFFRCxrQ0FBUTs7O1lBQVI7YUFFQzs7OztRQUVELG9DQUFVOzs7WUFBVjtnQkFDRSxJQUFJLENBQUMsY0FBYyxHQUFNLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLGFBQWUsQ0FBQzthQUNqRTs7OztRQUVELG9DQUFVOzs7WUFBVjtnQkFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQzthQUNoQzs7b0JBaElGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSwwU0FNVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyw0VUFBNFUsQ0FBQzt3QkFDdFYsVUFBVSxFQUFFOzRCQUNWQyxrQkFBTyxDQUFDLFlBQVksRUFBRTtnQ0FDcEJDLHFCQUFVLENBQUMsdUJBQXVCLEVBQUU7b0NBQ2xDQyxnQkFBSyxDQUFDO3dDQUNKLFNBQVMsRUFBRSxtQkFBbUI7cUNBQy9CLENBQUM7b0NBQ0ZDLGtCQUFPLENBQUMseUNBQXlDLENBQUM7aUNBQ25ELENBQUM7Z0NBQ0ZGLHFCQUFVLENBQUMsMEJBQTBCLEVBQUU7b0NBQ3JDQyxn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