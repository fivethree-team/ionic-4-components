import { Injectable, Component, Input, NgModule, defineInjectable } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

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
    constructor() {
        this.animationState = 'hidden';
        this.animation = 'slideIn';
        this.verticalAlign = 'bottom';
        this.floating = false;
        this.backdrop = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
}
DialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'gg-dialog',
                template: `
  <div class="gg-backdrop" [@backdropAnim] (click)="hideDialog()" *ngIf="animationState !== 'hidden' && backdrop">
  </div>
  <ion-card [@dialogAnim]="animationState" mode="md" class="gg-dialog" [ngClass]="{'floating': floating}">
  <ng-content></ng-content>
  </ion-card>
  `,
                styles: [`.gg-dialog{position:absolute;z-index:5002;background:#fff;margin:0;border-radius:0;width:100%}.top{top:0}.bottom{bottom:0}.floating{margin:16px 20px;border-radius:8px;width:calc(100% - 40px);box-shadow:0 4px 16px rgba(0,0,0,.12)}.gg-backdrop{background:rgba(0,0,0,.22);position:absolute;top:0;bottom:0;left:0;right:0;z-index:5001}`],
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
DialogComponent.ctorParameters = () => [];
DialogComponent.propDecorators = {
    animation: [{ type: Input }],
    verticalAlign: [{ type: Input }],
    floating: [{ type: Input }],
    backdrop: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DialogModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { DialogService, DialogComponent, DialogModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtbWF0ZXJpYWwtZGlhbG9nLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9pb25pYy1tYXRlcmlhbC1kaWFsb2cvbGliL2RpYWxvZy5zZXJ2aWNlLnRzIiwibmc6Ly9pb25pYy1tYXRlcmlhbC1kaWFsb2cvbGliL2RpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL2lvbmljLW1hdGVyaWFsLWRpYWxvZy9saWIvZGlhbG9nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5cblxuZXhwb3J0IHR5cGUgYW5pbWF0aW9uID0gXCJzbGlkZUluXCIgfCBcImZhZGVJblwiXG5leHBvcnQgdHlwZSB2ZXJ0aWNhbEFsaWduID0gXCJ0b3BcIiB8IFwiYm90dG9tXCIgfCBcImNlbnRlclwiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dnLWRpYWxvZycsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJnZy1iYWNrZHJvcFwiIFtAYmFja2Ryb3BBbmltXSAoY2xpY2spPVwiaGlkZURpYWxvZygpXCIgKm5nSWY9XCJhbmltYXRpb25TdGF0ZSAhPT0gJ2hpZGRlbicgJiYgYmFja2Ryb3BcIj5cbiAgPC9kaXY+XG4gIDxpb24tY2FyZCBbQGRpYWxvZ0FuaW1dPVwiYW5pbWF0aW9uU3RhdGVcIiBtb2RlPVwibWRcIiBjbGFzcz1cImdnLWRpYWxvZ1wiIFtuZ0NsYXNzXT1cInsnZmxvYXRpbmcnOiBmbG9hdGluZ31cIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2lvbi1jYXJkPlxuICBgLFxuICBzdHlsZXM6IFtgLmdnLWRpYWxvZ3twb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjUwMDI7YmFja2dyb3VuZDojZmZmO21hcmdpbjowO2JvcmRlci1yYWRpdXM6MDt3aWR0aDoxMDAlfS50b3B7dG9wOjB9LmJvdHRvbXtib3R0b206MH0uZmxvYXRpbmd7bWFyZ2luOjE2cHggMjBweDtib3JkZXItcmFkaXVzOjhweDt3aWR0aDpjYWxjKDEwMCUgLSA0MHB4KTtib3gtc2hhZG93OjAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMTIpfS5nZy1iYWNrZHJvcHtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjIyKTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjUwMDF9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkaWFsb2dBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHNsaWRlSW4tdG9wJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyNzVtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gc2xpZGVJbi1ib3R0b20nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IGZhZGVJbi1ib3R0b20nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBmYWRlSW4tdG9wJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gZmFkZUluLWNlbnRlcicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHNsaWRlSW4tY2VudGVyJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0yNSUpJyxcbiAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignc2xpZGVJbi1jZW50ZXIgPT4gaGlkZGVuJywgW1xuICAgICAgICBhbmltYXRlKCcyNDBtcyBlYXNlLW91dCcsc3R5bGUoe3RvcDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTI1JSknLFxuICAgICAgICAgb3BhY2l0eTogMCB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBoaWRkZW4nLCBbXG4gICAgICAgIGFuaW1hdGUoJzI0MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdzbGlkZUluLXRvcCcsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnc2xpZGVJbi1ib3R0b20nLCBzdHlsZSh7XG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnZmFkZUluLXRvcCcsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdmYWRlSW4tYm90dG9tJywgc3R5bGUoe1xuICAgICAgICBib3R0b206IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ2ZhZGVJbi1jZW50ZXInLCBzdHlsZSh7XG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnc2xpZGVJbi1jZW50ZXInLCBzdHlsZSh7XG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgfSlcbiAgICAgICksXG4gICAgXSksIHRyaWdnZXIoJ2JhY2tkcm9wQW5pbScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTIwbXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJyksIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgXSlcbiAgICBdKV0sXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgYW5pbWF0aW9uU3RhdGUgPSAnaGlkZGVuJ1xuXG4gIEBJbnB1dCgpIGFuaW1hdGlvbjogYW5pbWF0aW9uID0gJ3NsaWRlSW4nO1xuICBASW5wdXQoKSB2ZXJ0aWNhbEFsaWduOiB2ZXJ0aWNhbEFsaWduID0gJ2JvdHRvbSc7XG4gIEBJbnB1dCgpIGZsb2F0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGJhY2tkcm9wOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBzaG93RGlhbG9nKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSBgJHt0aGlzLmFuaW1hdGlvbn0tJHt0aGlzLnZlcnRpY2FsQWxpZ259YDtcbiAgfVxuXG4gIGhpZGVEaWFsb2coKSB7XG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9ICdoaWRkZW4nO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0RpYWxvZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtEaWFsb2dDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtJQU9FLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pEO0lBeUhFOzhCQVBpQixRQUFRO3lCQUVPLFNBQVM7NkJBQ0QsUUFBUTt3QkFDbkIsS0FBSzt3QkFDTCxLQUFLO0tBSWpDOzs7O0lBRUQsUUFBUTtLQUVQOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUNqRTs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztLQUNoQzs7O1lBaElGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7R0FNVDtnQkFDRCxNQUFNLEVBQUUsQ0FBQyw0VUFBNFUsQ0FBQztnQkFDdFYsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxZQUFZLEVBQUU7d0JBQ3BCLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRTs0QkFDbEMsS0FBSyxDQUFDO2dDQUNKLFNBQVMsRUFBRSxtQkFBbUI7NkJBQy9CLENBQUM7NEJBQ0YsT0FBTyxDQUFDLHlDQUF5QyxDQUFDO3lCQUNuRCxDQUFDO3dCQUNGLFVBQVUsQ0FBQywwQkFBMEIsRUFBRTs0QkFDckMsS0FBSyxDQUFDO2dDQUNKLFNBQVMsRUFBRSxrQkFBa0I7NkJBQzlCLENBQUM7NEJBQ0YsT0FBTyxDQUFDLHlDQUF5QyxDQUFDO3lCQUNuRCxDQUFDO3dCQUNGLFVBQVUsQ0FBQyx5QkFBeUIsRUFBRTs0QkFDcEMsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBRSxDQUFDOzZCQUNYLENB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