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
export class DialogComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLW1hdGVyaWFsLWRpYWxvZy8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0FBK0dqRixNQUFNO0lBU0o7OEJBUGlCLFFBQVE7eUJBRU8sU0FBUzs2QkFDRCxRQUFRO3dCQUNuQixLQUFLO3dCQUNMLEtBQUs7S0FJakM7Ozs7SUFFRCxRQUFRO0tBRVA7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ2pFOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO0tBQ2hDOzs7WUFoSUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7OztHQU1UO2dCQUNELE1BQU0sRUFBRSxDQUFDLDRVQUE0VSxDQUFDO2dCQUN0VixVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLFlBQVksRUFBRTt3QkFDcEIsVUFBVSxDQUFDLHVCQUF1QixFQUFFOzRCQUNsQyxLQUFLLENBQUM7Z0NBQ0osU0FBUyxFQUFFLG1CQUFtQjs2QkFDL0IsQ0FBQzs0QkFDRixPQUFPLENBQUMseUNBQXlDLENBQUM7eUJBQ25ELENBQUM7d0JBQ0YsVUFBVSxDQUFDLDBCQUEwQixFQUFFOzRCQUNyQyxLQUFLLENBQUM7Z0NBQ0osU0FBUyxFQUFFLGtCQUFrQjs2QkFDOUIsQ0FBQzs0QkFDRixPQUFPLENBQUMseUNBQXlDLENBQUM7eUJBQ25ELENBQUM7d0JBQ0YsVUFBVSxDQUFDLHlCQUF5QixFQUFFOzRCQUNwQyxLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFFLENBQUM7NkJBQ1gsQ0FBQzs0QkFDRixPQUFPLENBQUMsZ0JBQWdCLENBQUM7eUJBQzFCLENBQUM7d0JBQ0YsVUFBVSxDQUFDLHNCQUFzQixFQUFFOzRCQUNqQyxLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFFLENBQUM7NkJBQ1gsQ0FBQzs0QkFDRixPQUFPLENBQUMsZ0JBQWdCLENBQUM7eUJBQzFCLENBQUM7d0JBQ0YsVUFBVSxDQUFDLHlCQUF5QixFQUFFOzRCQUNwQyxLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFFLENBQUM7Z0NBQ1YsR0FBRyxFQUFFLEtBQUs7Z0NBQ1YsU0FBUyxFQUFFLGtCQUFrQjs2QkFDOUIsQ0FBQzs0QkFDRixPQUFPLENBQUMsZ0JBQWdCLENBQUM7eUJBQzFCLENBQUM7d0JBQ0YsVUFBVSxDQUFDLDBCQUEwQixFQUFFOzRCQUNyQyxLQUFLLENBQUM7Z0NBQ0osR0FBRyxFQUFFLEtBQUs7Z0NBQ1YsU0FBUyxFQUFFLGtCQUFrQjtnQ0FDNUIsT0FBTyxFQUFFLENBQUM7NkJBQ1osQ0FBQzs0QkFDRixPQUFPLENBQUMseUNBQXlDLENBQUM7eUJBQ25ELENBQUM7d0JBQ0YsVUFBVSxDQUFDLDBCQUEwQixFQUFFOzRCQUNyQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUMsS0FBSyxDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUs7Z0NBQzFDLFNBQVMsRUFBRSxrQkFBa0I7Z0NBQzVCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3lCQUNoQixDQUFDO3dCQUNGLFVBQVUsQ0FBQyxhQUFhLEVBQUU7NEJBQ3hCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzt5QkFDMUIsQ0FBQzt3QkFDRixLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQzs0QkFDcEIsT0FBTyxFQUFFLE1BQU07NEJBQ2YsT0FBTyxFQUFFLEdBQUc7eUJBQ2IsQ0FBQyxDQUNEO3dCQUNELEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDOzRCQUN6QixHQUFHLEVBQUUsQ0FBQzt5QkFDUCxDQUFDLENBQ0Q7d0JBQ0QsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQzs0QkFDNUIsTUFBTSxFQUFFLENBQUM7eUJBQ1YsQ0FBQyxDQUNEO3dCQUNELEtBQUssQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDOzRCQUN4QixHQUFHLEVBQUUsQ0FBQzt5QkFDUCxDQUFDLENBQ0Q7d0JBQ0QsS0FBSyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7NEJBQzNCLE1BQU0sRUFBRSxDQUFDO3lCQUNWLENBQUMsQ0FDRDt3QkFDRCxLQUFLLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQzs0QkFDM0IsR0FBRyxFQUFFLEtBQUs7NEJBQ1YsU0FBUyxFQUFFLGtCQUFrQjt5QkFDOUIsQ0FBQyxDQUNEO3dCQUNELEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7NEJBQzVCLEdBQUcsRUFBRSxLQUFLOzRCQUNWLFNBQVMsRUFBRSxrQkFBa0I7eUJBQzlCLENBQUMsQ0FDRDtxQkFDRixDQUFDLEVBQUUsT0FBTyxDQUFDLGNBQWMsRUFBRTt3QkFDMUIsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDdEIsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBRSxDQUFDOzZCQUNYLENBQUM7NEJBQ0YsT0FBTyxDQUFDLHlDQUF5QyxDQUFDO3lCQUNuRCxDQUFDO3dCQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUU7NEJBQ3RCLE9BQU8sQ0FBQyx5Q0FBeUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztnQ0FDeEQsT0FBTyxFQUFFLENBQUM7NkJBQ1gsQ0FBQzt5QkFDSCxDQUFDO3FCQUNILENBQUM7aUJBQUM7YUFDTjs7Ozs7d0JBS0UsS0FBSzs0QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcblxuXG5leHBvcnQgdHlwZSBhbmltYXRpb24gPSBcInNsaWRlSW5cIiB8IFwiZmFkZUluXCJcbmV4cG9ydCB0eXBlIHZlcnRpY2FsQWxpZ24gPSBcInRvcFwiIHwgXCJib3R0b21cIiB8IFwiY2VudGVyXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2ctZGlhbG9nJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cImdnLWJhY2tkcm9wXCIgW0BiYWNrZHJvcEFuaW1dIChjbGljayk9XCJoaWRlRGlhbG9nKClcIiAqbmdJZj1cImFuaW1hdGlvblN0YXRlICE9PSAnaGlkZGVuJyAmJiBiYWNrZHJvcFwiPlxuICA8L2Rpdj5cbiAgPGlvbi1jYXJkIFtAZGlhbG9nQW5pbV09XCJhbmltYXRpb25TdGF0ZVwiIG1vZGU9XCJtZFwiIGNsYXNzPVwiZ2ctZGlhbG9nXCIgW25nQ2xhc3NdPVwieydmbG9hdGluZyc6IGZsb2F0aW5nfVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvaW9uLWNhcmQ+XG4gIGAsXG4gIHN0eWxlczogW2AuZ2ctZGlhbG9ne3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6NTAwMjtiYWNrZ3JvdW5kOiNmZmY7bWFyZ2luOjA7Ym9yZGVyLXJhZGl1czowO3dpZHRoOjEwMCV9LnRvcHt0b3A6MH0uYm90dG9te2JvdHRvbTowfS5mbG9hdGluZ3ttYXJnaW46MTZweCAyMHB4O2JvcmRlci1yYWRpdXM6OHB4O3dpZHRoOmNhbGMoMTAwJSAtIDQwcHgpO2JveC1zaGFkb3c6MCA0cHggMTZweCByZ2JhKDAsMCwwLC4xMil9LmdnLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMjIpO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6NTAwMX1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2RpYWxvZ0FuaW0nLCBbXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gc2xpZGVJbi10b3AnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzI3NW1zIDEwMG1zIGN1YmljLWJlemllcigwLjMyLDEsMC4yMywxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBzbGlkZUluLWJvdHRvbScsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyNzVtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gZmFkZUluLWJvdHRvbScsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IGZhZGVJbi10b3AnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBmYWRlSW4tY2VudGVyJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gc2xpZGVJbi1jZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTI1JSknLFxuICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyNzVtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdzbGlkZUluLWNlbnRlciA9PiBoaWRkZW4nLCBbXG4gICAgICAgIGFuaW1hdGUoJzI0MG1zIGVhc2Utb3V0JyxzdHlsZSh7dG9wOiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMjUlKScsXG4gICAgICAgICBvcGFjaXR5OiAwIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGhpZGRlbicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMjQwbXMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoe1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ3NsaWRlSW4tdG9wJywgc3R5bGUoe1xuICAgICAgICB0b3A6IDAsXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdzbGlkZUluLWJvdHRvbScsIHN0eWxlKHtcbiAgICAgICAgYm90dG9tOiAwXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdmYWRlSW4tdG9wJywgc3R5bGUoe1xuICAgICAgICB0b3A6IDBcbiAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ2ZhZGVJbi1ib3R0b20nLCBzdHlsZSh7XG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnZmFkZUluLWNlbnRlcicsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKCdzbGlkZUluLWNlbnRlcicsIHN0eWxlKHtcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICB9KVxuICAgICAgKSxcbiAgICBdKSwgdHJpZ2dlcignYmFja2Ryb3BBbmltJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMjc1bXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzIsMSwwLjIzLDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKCcxMjBtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC4zMiwxLDAuMjMsMSknKSwgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICBdKVxuICAgIF0pXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBhbmltYXRpb25TdGF0ZSA9ICdoaWRkZW4nXG5cbiAgQElucHV0KCkgYW5pbWF0aW9uOiBhbmltYXRpb24gPSAnc2xpZGVJbic7XG4gIEBJbnB1dCgpIHZlcnRpY2FsQWxpZ246IHZlcnRpY2FsQWxpZ24gPSAnYm90dG9tJztcbiAgQElucHV0KCkgZmxvYXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYmFja2Ryb3A6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIHNob3dEaWFsb2coKSB7XG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IGAke3RoaXMuYW5pbWF0aW9ufS0ke3RoaXMudmVydGljYWxBbGlnbn1gO1xuICB9XG5cbiAgaGlkZURpYWxvZygpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gJ2hpZGRlbic7XG4gIH1cblxufVxuIl19