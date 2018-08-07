/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { animate, style, transition, trigger, state } from "@angular/animations";
var FabSpinner = /** @class */ (function () {
    function FabSpinner() {
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
    FabSpinner.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FabSpinner.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        if (this.icon != 'md-checkmark') {
            this.loading = !this.loading;
        }
    };
    /**
     * @return {?}
     */
    FabSpinner.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.onRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    FabSpinner.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
    };
    /**
     * @return {?}
     */
    FabSpinner.prototype.complete = /**
     * @return {?}
     */
    function () {
        if (this.loading) {
            this.isComplete = true;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FabSpinner.prototype.fillAnimationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState == 'spinning') {
            if (this.checkmark) {
                console.log('fill animation done', event);
                this.iconState = "rotate";
            }
            else {
                this.postComplete();
            }
        }
    };
    /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    FabSpinner.prototype.changeIconAndReveal = /**
     * @param {?} event
     * @param {?} icon
     * @return {?}
     */
    function (event, icon) {
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
    };
    /**
     * @return {?}
     */
    FabSpinner.prototype.postComplete = /**
     * @return {?}
     */
    function () {
        this.unload();
        this.isComplete = false;
        this.onComplete.emit(this);
    };
    FabSpinner.decorators = [
        { type: Component, args: [{
                    selector: 'gg-loading-fab',
                    template: "\n        <ion-fab [@fabAnim] [vertical]=\"vertical\" [horizontal]=\"horizontal\" [edge]=\"edge\">\n        <svg *ngIf=\"loading\" #spinner class=\"spinner rotate\" viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle [@fillAnim]=\"isComplete ? 'fill' : 'spinning'\" (@fillAnim.done)=\"fillAnimationDone($event)\" [ngClass]=\"{'path': !isComplete}\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\" cx=\"36\" cy=\"36\" r=\"32\"></circle>\n </svg>\n            <ion-fab-button [color]=\"fabColor\">\n                <ion-icon [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\" [name]=\"icon\"></ion-icon>\n            </ion-fab-button>\n\n        </ion-fab>\n    ",
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
                    styles: ["ion-spinner{position:absolute;top:-8px;left:-8px;width:72px;height:72px}.spinner{position:absolute;width:72px;height:72px;left:-8px;top:-8px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}"]
                }] }
    ];
    /** @nocollapse */
    FabSpinner.ctorParameters = function () { return []; };
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
    return FabSpinner;
}());
export { FabSpinner };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLW1hdGVyaWFsLWxvYWRpbmcvIiwic291cmNlcyI6WyJsaWIvZmFiL2ZhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQXFGN0U7d0JBYjRCLFFBQVE7MEJBQ04sS0FBSztvQkFDVixLQUFLO3lCQUNBLEtBQUs7dUJBQ2hCLEtBQUs7MEJBQ0YsS0FBSzt5QkFDUCxRQUFROzBCQUlxQixJQUFJLFlBQVksRUFBYzt5QkFDL0IsSUFBSSxZQUFZLEVBQWM7S0FHN0U7Ozs7SUFFRCw2QkFBUTs7O0lBQVI7S0FDQzs7OztJQUVELGtDQUFhOzs7SUFBYjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksY0FBYyxDQUFDLENBQUEsQ0FBQztZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNoQztLQUNKOzs7O0lBRUQseUJBQUk7OztJQUFKO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0I7Ozs7SUFFRCwyQkFBTTs7O0lBQU47UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUN4Qjs7OztJQUVELDZCQUFROzs7SUFBUjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQ2IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJ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Q0FBQzt3QkFDRixPQUFPLENBQUMsVUFBVSxFQUFFOzRCQUNoQixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUNwQixLQUFLLENBQUM7b0NBQ0Ysa0JBQWtCLEVBQUUsR0FBRztvQ0FDdkIsbUJBQW1CLEVBQUUsRUFBRTtvQ0FDdkIsaUJBQWlCLEVBQUUsUUFBUTtvQ0FDM0IsUUFBUSxFQUFFLFNBQVM7aUNBQ3RCLENBQUM7Z0NBQ0YsT0FBTyxDQUFDLGlCQUFpQixDQUFDOzZCQUM3QixDQUFDOzRCQUNGLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO2dDQUNoQixrQkFBa0IsRUFBRSxHQUFHO2dDQUN2QixtQkFBbUIsRUFBRSxDQUFDO2dDQUN0QixpQkFBaUIsRUFBRSxRQUFRO2dDQUMzQixRQUFRLEVBQUUsU0FBUztnQ0FDbkIsU0FBUyxFQUFFLENBQUM7NkJBQ2YsQ0FBQyxDQUNEO3lCQUFDLENBQ0wsQ0FBQzs2QkEvQ08scytEQUFzK0Q7aUJBaURsL0Q7Ozs7O3VCQUdJLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBS0wsU0FBUyxTQUFDLFNBQVM7NkJBRW5CLE1BQU07NEJBQ04sTUFBTTs7cUJBcEZYOztTQW9FYSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgc3RhdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZy1sb2FkaW5nLWZhYicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGlvbi1mYWIgW0BmYWJBbmltXSBbdmVydGljYWxdPVwidmVydGljYWxcIiBbaG9yaXpvbnRhbF09XCJob3Jpem9udGFsXCIgW2VkZ2VdPVwiZWRnZVwiPlxuICAgICAgICA8c3ZnICpuZ0lmPVwibG9hZGluZ1wiICNzcGlubmVyIGNsYXNzPVwic3Bpbm5lciByb3RhdGVcIiB2aWV3Qm94PVwiMCAwIDcyIDcyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxjaXJjbGUgW0BmaWxsQW5pbV09XCJpc0NvbXBsZXRlID8gJ2ZpbGwnIDogJ3NwaW5uaW5nJ1wiIChAZmlsbEFuaW0uZG9uZSk9XCJmaWxsQW5pbWF0aW9uRG9uZSgkZXZlbnQpXCIgW25nQ2xhc3NdPVwieydwYXRoJzogIWlzQ29tcGxldGV9XCIgZmlsbD1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCI0XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIGN4PVwiMzZcIiBjeT1cIjM2XCIgcj1cIjMyXCI+PC9jaXJjbGU+XG4gPC9zdmc+XG4gICAgICAgICAgICA8aW9uLWZhYi1idXR0b24gW2NvbG9yXT1cImZhYkNvbG9yXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uIFtAcm90YXRlQW5pbV09XCJpY29uU3RhdGVcIiAoQHJvdGF0ZUFuaW0uZG9uZSk9XCJjaGFuZ2VJY29uQW5kUmV2ZWFsKCRldmVudCwnbWQtY2hlY2ttYXJrJylcIiBbbmFtZV09XCJpY29uXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDwvaW9uLWZhYi1idXR0b24+XG5cbiAgICAgICAgPC9pb24tZmFiPlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYGlvbi1zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOHB4O2xlZnQ6LThweDt3aWR0aDo3MnB4O2hlaWdodDo3MnB4fS5zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjcycHg7aGVpZ2h0OjcycHg7bGVmdDotOHB4O3RvcDotOHB4fS5yb3RhdGV7LXdlYmtpdC1hbmltYXRpb246MS40cyBsaW5lYXIgaW5maW5pdGUgcm90YXRvcjthbmltYXRpb246MS40cyBsaW5lYXIgaW5maW5pdGUgcm90YXRvcn1ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRvcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX19QGtleWZyYW1lcyByb3RhdG9yezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfX0ucGF0aHtzdHJva2UtZGFzaGFycmF5OjE4NztzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7LXdlYmtpdC1hbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBkYXNoLDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzO2FuaW1hdGlvbjoxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGRhc2gsNS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnN9LmZpbGx7c3Ryb2tlLWRhc2hhcnJheTozNjA7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOy13ZWJraXQtYW5pbWF0aW9uOjEuNHMgZWFzZS1vdXQgZmlsbDthbmltYXRpb246MS40cyBlYXNlLW91dCBmaWxsO3N0cm9rZTojMWI5YTU5fUAtd2Via2l0LWtleWZyYW1lcyBjb2xvcnN7MCUsMTAwJXtzdHJva2U6IzQyODVmNH0yNSV7c3Ryb2tlOiNkZTNlMzV9NTAle3N0cm9rZTojZjdjMjIzfTc1JXtzdHJva2U6IzFiOWE1OX19QGtleWZyYW1lcyBjb2xvcnN7MCUsMTAwJXtzdHJva2U6IzQyODVmNH0yNSV7c3Ryb2tlOiNkZTNlMzV9NTAle3N0cm9rZTojZjdjMjIzfTc1JXtzdHJva2U6IzFiOWE1OX19QC13ZWJraXQta2V5ZnJhbWVzIGRhc2h7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3fTUwJXtzdHJva2UtZGFzaG9mZnNldDo0Ni43NTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDoxODc7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpfX1Aa2V5ZnJhbWVzIGRhc2h7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3fTUwJXtzdHJva2UtZGFzaG9mZnNldDo0Ni43NTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDoxODc7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmlsbHswJXtzdHJva2UtZGFzaG9mZnNldDozNjB9ODAle3N0cm9rZS1kYXNob2Zmc2V0OjE4MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QGtleWZyYW1lcyBmaWxsezAle3N0cm9rZS1kYXNob2Zmc2V0OjM2MH04MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTgwOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpfX1gXSxcbiAgICBhbmltYXRpb25zOiBbdHJpZ2dlcignZmFiQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSksXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSkpXG4gICAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignc3Bpbm5lckFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pLFxuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pKVxuICAgICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3JvdGF0ZUFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJ25vcm1hbCA9PiByb3RhdGUnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCdyb3RhdGUgPT4gbm9ybWFsJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1pbicpXG4gICAgICAgIF0pLFxuICAgICAgICBzdGF0ZSgncm90YXRlJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3JvdGF0ZVooNDVkZWcpJyB9KSksXG4gICAgICAgIHN0YXRlKCdub3JtYWwnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAncm90YXRlWigwZGVnKScgfSkpXG4gICAgXSksXG4gICAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gZmlsbCcsIFtcbiAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDE4MCxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiA5MCxcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgJ3N0cm9rZSc6ICcjREUzRTM1J1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmltYXRlKCcxNDAwbXMgZWFzZS1vdXQnKVxuICAgICAgICBdKSxcbiAgICAgICAgc3RhdGUoJ2ZpbGwnLCBzdHlsZSh7XG4gICAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDMxNSxcbiAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDAsXG4gICAgICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAnc3Ryb2tlJzogJyMxQjlBNTknLFxuICAgICAgICAgICAgJ29wYWNpdHknOiAwXG4gICAgICAgIH0pXG4gICAgICAgICldXG4gICAgKV0sXG5cbn0pXG5leHBvcnQgY2xhc3MgRmFiU3Bpbm5lciBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc3BpbkNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZmFiQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSB2ZXJ0aWNhbDogc3RyaW5nID0gXCJib3R0b21cIjtcbiAgICBASW5wdXQoKSBob3Jpem9udGFsOiBzdHJpbmcgPSBcImVuZFwiO1xuICAgIEBJbnB1dCgpIGVkZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjaGVja21hcms6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGljb25TdGF0ZTogc3RyaW5nID0gJ25vcm1hbCc7XG5cbiAgICBAVmlld0NoaWxkKCdzcGlubmVyJykgc3Bpbm5lcjogRWxlbWVudFJlZjtcblxuICAgIEBPdXRwdXQoKSBvbkNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8RmFiU3Bpbm5lcj4gPSBuZXcgRXZlbnRFbWl0dGVyPEZhYlNwaW5uZXI+KCk7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaDogRXZlbnRFbWl0dGVyPEZhYlNwaW5uZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxGYWJTcGlubmVyPigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICAgICAgaWYodGhpcy5pY29uICE9ICdtZC1jaGVja21hcmsnKXtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGlmKHRoaXMubG9hZGluZyl7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaWxsQW5pbWF0aW9uRG9uZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09ICdzcGlubmluZycpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrbWFyaykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxsIGFuaW1hdGlvbiBkb25lJywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvblN0YXRlID0gXCJyb3RhdGVcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0Q29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUljb25BbmRSZXZlYWwoZXZlbnQsIGljb246IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCwgaWNvbik7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT0gJ25vcm1hbCcpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgICAgICAgICB0aGlzLmljb25TdGF0ZSA9IFwibm9ybWFsXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSBcInJvdGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0Q29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9zdENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLnVubG9hZCgpO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmVtaXQodGhpcyk7XG4gICAgfVxufVxuIl19