/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { animate, style, transition, trigger, state } from "@angular/animations";
export class FabSpinner {
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
if (false) {
    /** @type {?} */
    FabSpinner.prototype.icon;
    /** @type {?} */
    FabSpinner.prototype.spinColor;
    /** @type {?} */
    FabSpinner.prototype.fabColor;
    /** @type {?} */
    FabSpinner.prototype.vertical;
    /** @type {?} */
    FabSpinner.prototype.horizontal;
    /** @type {?} */
    FabSpinner.prototype.edge;
    /** @type {?} */
    FabSpinner.prototype.checkmark;
    /** @type {?} */
    FabSpinner.prototype.loading;
    /** @type {?} */
    FabSpinner.prototype.isComplete;
    /** @type {?} */
    FabSpinner.prototype.iconState;
    /** @type {?} */
    FabSpinner.prototype.spinner;
    /** @type {?} */
    FabSpinner.prototype.onComplete;
    /** @type {?} */
    FabSpinner.prototype.onRefresh;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLW1hdGVyaWFsLWxvYWRpbmcvIiwic291cmNlcyI6WyJsaWIvZmFiL2ZhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBbUVqRixNQUFNO0lBa0JGO3dCQWI0QixRQUFROzBCQUNOLEtBQUs7b0JBQ1YsS0FBSzt5QkFDQSxLQUFLO3VCQUNoQixLQUFLOzBCQUNGLEtBQUs7eUJBQ1AsUUFBUTswQkFJcUIsSUFBSSxZQUFZLEVBQWM7eUJBQy9CLElBQUksWUFBWSxFQUFjO0tBRzdFOzs7O0lBRUQsUUFBUTtLQUNQOzs7O0lBRUQsYUFBYTtRQUNULEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksY0FBYyxDQUFDLENBQUEsQ0FBQztZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNoQztLQUNKOzs7O0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCOzs7O0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ3hCOzs7O0lBRUQsUUFBUTtRQUNKLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQ2IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FFMUI7S0FDSjs7Ozs7SUFFRCxp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LEVBQUU7NEJBQ3BCLEtBQUssQ0FBQztnQ0FDRixrQkFBa0IsRUFBRSxHQUFHO2dDQUN2QixtQkFBbUIsRUFBRSxFQUFFO2dDQUN2QixpQkFBaUIsRUFBRSxRQUFRO2dDQUMzQixRQUFRLEVBQUUsU0FBUzs2QkFDdEIsQ0FBQzs0QkFDRixPQUFPLENBQUMsaUJBQWlCLENBQUM7eUJBQzdCLENBQUM7d0JBQ0YsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7NEJBQ2hCLGtCQUFrQixFQUFFLEdBQUc7NEJBQ3ZCLG1CQUFtQixFQUFFLENBQUM7NEJBQ3RCLGlCQUFpQixFQUFFLFFBQVE7NEJBQzNCLFFBQVEsRUFBRSxTQUFTOzRCQUNuQixTQUFTLEVBQUUsQ0FBQzt5QkFDZixDQUFDLENBQ0Q7cUJBQUMsQ0FDTCxDQUFDO3lCQS9DTyxzK0RBQXMrRDthQWlEbC9EOzs7OzttQkFHSSxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUtMLFNBQVMsU0FBQyxTQUFTO3lCQUVuQixNQUFNO3dCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBzdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctZmFiJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aW9uLWZhYiBbQGZhYkFuaW1dIFt2ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiIFtob3Jpem9udGFsXT1cImhvcml6b250YWxcIiBbZWRnZV09XCJlZGdlXCI+XG4gICAgICAgIDxzdmcgKm5nSWY9XCJsb2FkaW5nXCIgI3NwaW5uZXIgY2xhc3M9XCJzcGlubmVyIHJvdGF0ZVwiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPGNpcmNsZSBbQGZpbGxBbmltXT1cImlzQ29tcGxldGUgPyAnZmlsbCcgOiAnc3Bpbm5pbmcnXCIgKEBmaWxsQW5pbS5kb25lKT1cImZpbGxBbmltYXRpb25Eb25lKCRldmVudClcIiBbbmdDbGFzc109XCJ7J3BhdGgnOiAhaXNDb21wbGV0ZX1cIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgY3g9XCIzNlwiIGN5PVwiMzZcIiByPVwiMzJcIj48L2NpcmNsZT5cbiA8L3N2Zz5cbiAgICAgICAgICAgIDxpb24tZmFiLWJ1dHRvbiBbY29sb3JdPVwiZmFiQ29sb3JcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gW0Byb3RhdGVBbmltXT1cImljb25TdGF0ZVwiIChAcm90YXRlQW5pbS5kb25lKT1cImNoYW5nZUljb25BbmRSZXZlYWwoJGV2ZW50LCdtZC1jaGVja21hcmsnKVwiIFtuYW1lXT1cImljb25cIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24tZmFiLWJ1dHRvbj5cblxuICAgICAgICA8L2lvbi1mYWI+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgaW9uLXNwaW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOi04cHg7bGVmdDotOHB4O3dpZHRoOjcycHg7aGVpZ2h0OjcycHh9LnNwaW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NzJweDtoZWlnaHQ6NzJweDtsZWZ0Oi04cHg7dG9wOi04cHh9LnJvdGF0ZXstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGxpbmVhciBpbmZpbml0ZSByb3RhdG9yO2FuaW1hdGlvbjoxLjRzIGxpbmVhciBpbmZpbml0ZSByb3RhdG9yfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdG9yezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfX1Aa2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fS5wYXRoe3N0cm9rZS1kYXNoYXJyYXk6MTg3O3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGRhc2gsNS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnM7YW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc30uZmlsbHtzdHJva2UtZGFzaGFycmF5OjM2MDtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7LXdlYmtpdC1hbmltYXRpb246MS40cyBlYXNlLW91dCBmaWxsO2FuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7c3Ryb2tlOiMxYjlhNTl9QC13ZWJraXQta2V5ZnJhbWVzIGNvbG9yc3swJSwxMDAle3N0cm9rZTojNDI4NWY0fTI1JXtzdHJva2U6I2RlM2UzNX01MCV7c3Ryb2tlOiNmN2MyMjN9NzUle3N0cm9rZTojMWI5YTU5fX1Aa2V5ZnJhbWVzIGNvbG9yc3swJSwxMDAle3N0cm9rZTojNDI4NWY0fTI1JXtzdHJva2U6I2RlM2UzNX01MCV7c3Ryb2tlOiNmN2MyMjN9NzUle3N0cm9rZTojMWI5YTU5fX1ALXdlYmtpdC1rZXlmcmFtZXMgZGFzaHswJXtzdHJva2UtZGFzaG9mZnNldDoxODd9NTAle3N0cm9rZS1kYXNob2Zmc2V0OjQ2Ljc1Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjE4Nzstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZGFzaHswJXtzdHJva2UtZGFzaG9mZnNldDoxODd9NTAle3N0cm9rZS1kYXNob2Zmc2V0OjQ2Ljc1Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjE4Nzstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBmaWxsezAle3N0cm9rZS1kYXNob2Zmc2V0OjM2MH04MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTgwOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpfX1Aa2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fWBdLFxuICAgIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdmYWJBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSlcbiAgICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdzcGlubmVyQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSkpXG4gICAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbignbm9ybWFsID0+IHJvdGF0ZScsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJ3JvdGF0ZSA9PiBub3JtYWwnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLWluJylcbiAgICAgICAgXSksXG4gICAgICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZyknIH0pKSxcbiAgICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDBkZWcpJyB9KSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMTgwLFxuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyNERTNFMzUnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzE0MDBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICBzdGF0ZSgnZmlsbCcsIHN0eWxlKHtcbiAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMzE1LFxuICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogMCxcbiAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICdzdHJva2UnOiAnIzFCOUE1OScsXG4gICAgICAgICAgICAnb3BhY2l0eSc6IDBcbiAgICAgICAgfSlcbiAgICAgICAgKV1cbiAgICApXSxcblxufSlcbmV4cG9ydCBjbGFzcyBGYWJTcGlubmVyIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBzcGluQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBmYWJDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZlcnRpY2FsOiBzdHJpbmcgPSBcImJvdHRvbVwiO1xuICAgIEBJbnB1dCgpIGhvcml6b250YWw6IHN0cmluZyA9IFwiZW5kXCI7XG4gICAgQElucHV0KCkgZWRnZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNoZWNrbWFyazogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgaWNvblN0YXRlOiBzdHJpbmcgPSAnbm9ybWFsJztcblxuICAgIEBWaWV3Q2hpbGQoJ3NwaW5uZXInKSBzcGlubmVyOiBFbGVtZW50UmVmO1xuXG4gICAgQE91dHB1dCgpIG9uQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxGYWJTcGlubmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmFiU3Bpbm5lcj4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8RmFiU3Bpbm5lcj4gPSBuZXcgRXZlbnRFbWl0dGVyPEZhYlNwaW5uZXI+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICB0b2dnbGVTcGlubmVyKCkge1xuICAgICAgICBpZih0aGlzLmljb24gIT0gJ21kLWNoZWNrbWFyaycpe1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgdW5sb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYodGhpcy5sb2FkaW5nKXtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbGxBbmltYXRpb25Eb25lKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT0gJ3NwaW5uaW5nJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2ttYXJrKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbGwgYW5pbWF0aW9uIGRvbmUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3RhdGUgPSBcInJvdGF0ZVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlSWNvbkFuZFJldmVhbChldmVudCwgaWNvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LCBpY29uKTtcbiAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PSAnbm9ybWFsJykge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICAgICAgICAgIHRoaXMuaWNvblN0YXRlID0gXCJub3JtYWxcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09IFwicm90YXRlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3N0Q29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMudW5sb2FkKCk7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUuZW1pdCh0aGlzKTtcbiAgICB9XG59XG4iXX0=