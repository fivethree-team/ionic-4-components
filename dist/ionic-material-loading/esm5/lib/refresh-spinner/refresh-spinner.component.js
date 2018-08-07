/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, Output, EventEmitter, Renderer2, ChangeDetectorRef } from '@angular/core';
import { animate, style, transition, trigger, state } from "@angular/animations";
var RefreshSpinner = /** @class */ (function () {
    function RefreshSpinner(renderer, change) {
        this.renderer = renderer;
        this.change = change;
        this.vertical = "bottom";
        this.horizontal = "end";
        this.edge = false;
        this.checkmark = false;
        this.dragProgress = 0;
        this.loading = false;
        this.isComplete = false;
        this.iconState = 'normal';
        this.onComplete = new EventEmitter();
        this.onRefresh = new EventEmitter();
    }
    /**
     * @return {?}
     */
    RefreshSpinner.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    RefreshSpinner.prototype.toggleSpinner = /**
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
    RefreshSpinner.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.onRefresh.emit();
    };
    /**
     * @return {?}
     */
    RefreshSpinner.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
    };
    /**
     * @return {?}
     */
    RefreshSpinner.prototype.complete = /**
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
    RefreshSpinner.prototype.fillAnimationDone = /**
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
    RefreshSpinner.prototype.changeIconAndReveal = /**
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
    RefreshSpinner.prototype.postComplete = /**
     * @return {?}
     */
    function () {
        this.unload();
        this.isComplete = false;
        this.onComplete.emit(this);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    RefreshSpinner.prototype.changeProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.dragProgress = progress;
        /** @type {?} */
        var translateY = Math.floor(-80 + 80 * progress);
        console.log("translateY(" + translateY + "px)");
        // this.renderer.setStyle(this.spinner.nativeElement, 'transform', `translateY(${translateY})`)
        this.spinner.nativeElement.style.setProperty('transform', "translateY(" + translateY + "px)");
        this.change.detectChanges();
    };
    RefreshSpinner.decorators = [
        { type: Component, args: [{
                    selector: 'gg-refresh-spinner',
                    template: "\n    <div class=\"gg-refresher\">\n\n    <div #spinner class=\"gg-spinner-container\">\n    <svg class=\"spinner rotate\" viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle [@fillAnim]=\"isComplete ? 'fill' : 'spinning'\" (@fillAnim.done)=\"fillAnimationDone($event)\" [ngClass]=\"{'path': !isComplete}\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\" cx=\"36\" cy=\"36\" r=\"32\"></circle>\n </svg>\n    </div>\n\n    \n    </div>\n    ",
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
                                animate('800ms ease-out')
                            ]),
                            state('fill', style({
                                'stroke-dasharray': 315,
                                'stroke-dashoffset': 0,
                                'transformOrigin': 'center',
                                'stroke': '#1B9A59',
                                'opacity': 0
                            }))
                        ])],
                    styles: ["ion-spinner{position:absolute;top:-8px;left:-8px;width:72px;height:72px}.spinner{position:absolute;width:24px;height:24px;left:8px;top:8px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}.gg-refresher{display:block;width:100%;height:112px;position:relative}.gg-spinner-container{width:40px;height:40px;position:absolute;left:calc(50% - 20px);top:16px;background:var(--ion-color-light);border-radius:50%;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1)}"]
                }] }
    ];
    /** @nocollapse */
    RefreshSpinner.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    RefreshSpinner.propDecorators = {
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
    return RefreshSpinner;
}());
export { RefreshSpinner };
if (false) {
    /** @type {?} */
    RefreshSpinner.prototype.icon;
    /** @type {?} */
    RefreshSpinner.prototype.spinColor;
    /** @type {?} */
    RefreshSpinner.prototype.fabColor;
    /** @type {?} */
    RefreshSpinner.prototype.vertical;
    /** @type {?} */
    RefreshSpinner.prototype.horizontal;
    /** @type {?} */
    RefreshSpinner.prototype.edge;
    /** @type {?} */
    RefreshSpinner.prototype.checkmark;
    /** @type {?} */
    RefreshSpinner.prototype.dragProgress;
    /** @type {?} */
    RefreshSpinner.prototype.loading;
    /** @type {?} */
    RefreshSpinner.prototype.isComplete;
    /** @type {?} */
    RefreshSpinner.prototype.iconState;
    /** @type {?} */
    RefreshSpinner.prototype.spinner;
    /** @type {?} */
    RefreshSpinner.prototype.onComplete;
    /** @type {?} */
    RefreshSpinner.prototype.onRefresh;
    /** @type {?} */
    RefreshSpinner.prototype.renderer;
    /** @type {?} */
    RefreshSpinner.prototype.change;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmcmVzaC1zcGlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLW1hdGVyaWFsLWxvYWRpbmcvIiwic291cmNlcyI6WyJsaWIvcmVmcmVzaC1zcGlubmVyL3JlZnJlc2gtc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEksT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUF1RjdFLHdCQUFtQixRQUFtQixFQUFTLE1BQXlCO1FBQXJELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFtQjt3QkFkNUMsUUFBUTswQkFDTixLQUFLO29CQUNWLEtBQUs7eUJBQ0EsS0FBSzs0QkFDWixDQUFDO3VCQUNMLEtBQUs7MEJBQ0YsS0FBSzt5QkFDUCxRQUFROzBCQUl5QixJQUFJLFlBQVksRUFBa0I7eUJBQ25DLElBQUksWUFBWSxFQUFrQjtLQUdyRjs7OztJQUVELGlDQUFROzs7SUFBUjtLQUNDOzs7O0lBRUQsc0NBQWE7OztJQUFiO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ2hDO0tBQ0o7Ozs7SUFFRCw2QkFBSTs7O0lBQUo7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRUQsK0JBQU07OztJQUFOO1FB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OztnQkFwRStFLFNBQVM7Z0JBQUUsaUJBQWlCOzs7dUJBdUV2RyxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQU1MLFNBQVMsU0FBQyxTQUFTOzZCQUVuQixNQUFNOzRCQUNOLE1BQU07O3lCQXRGWDs7U0FxRWEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2ctcmVmcmVzaC1zcGlubmVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJnZy1yZWZyZXNoZXJcIj5cblxuICAgIDxkaXYgI3NwaW5uZXIgY2xhc3M9XCJnZy1zcGlubmVyLWNvbnRhaW5lclwiPlxuICAgIDxzdmcgY2xhc3M9XCJzcGlubmVyIHJvdGF0ZVwiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPGNpcmNsZSBbQGZpbGxBbmltXT1cImlzQ29tcGxldGUgPyAnZmlsbCcgOiAnc3Bpbm5pbmcnXCIgKEBmaWxsQW5pbS5kb25lKT1cImZpbGxBbmltYXRpb25Eb25lKCRldmVudClcIiBbbmdDbGFzc109XCJ7J3BhdGgnOiAhaXNDb21wbGV0ZX1cIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgY3g9XCIzNlwiIGN5PVwiMzZcIiByPVwiMzJcIj48L2NpcmNsZT5cbiA8L3N2Zz5cbiAgICA8L2Rpdj5cblxuICAgIFxuICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYGlvbi1zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOHB4O2xlZnQ6LThweDt3aWR0aDo3MnB4O2hlaWdodDo3MnB4fS5zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bGVmdDo4cHg7dG9wOjhweH0ucm90YXRley13ZWJraXQtYW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3I7YW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3J9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fUBrZXlmcmFtZXMgcm90YXRvcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX19LnBhdGh7c3Ryb2tlLWRhc2hhcnJheToxODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOy13ZWJraXQtYW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yczthbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBkYXNoLDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzfS5maWxse3N0cm9rZS1kYXNoYXJyYXk6MzYwO3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7YW5pbWF0aW9uOjEuNHMgZWFzZS1vdXQgZmlsbDtzdHJva2U6IzFiOWE1OX1ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUBrZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUAtd2Via2l0LWtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QGtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZmlsbHswJXtzdHJva2UtZGFzaG9mZnNldDozNjB9ODAle3N0cm9rZS1kYXNob2Zmc2V0OjE4MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19LmdnLXJlZnJlc2hlcntkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjExMnB4O3Bvc2l0aW9uOnJlbGF0aXZlfS5nZy1zcGlubmVyLWNvbnRhaW5lcnt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6Y2FsYyg1MCUgLSAyMHB4KTt0b3A6MTZweDtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1saWdodCk7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNoYWRvdzowIDRweCA2cHggMCByZ2JhKDAsMCwwLC4xNCksMCA0cHggNXB4IHJnYmEoMCwwLDAsLjEpfWBdLFxuICAgIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdmYWJBbmltJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSlcbiAgICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdzcGlubmVyQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSkpXG4gICAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcigncm90YXRlQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbignbm9ybWFsID0+IHJvdGF0ZScsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJ3JvdGF0ZSA9PiBub3JtYWwnLCBbXG4gICAgICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLWluJylcbiAgICAgICAgXSksXG4gICAgICAgIHN0YXRlKCdyb3RhdGUnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZyknIH0pKSxcbiAgICAgICAgc3RhdGUoJ25vcm1hbCcsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdyb3RhdGVaKDBkZWcpJyB9KSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMTgwLFxuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyNERTNFMzUnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoJzgwMG1zIGVhc2Utb3V0JylcbiAgICAgICAgXSksXG4gICAgICAgIHN0YXRlKCdmaWxsJywgc3R5bGUoe1xuICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAzMTUsXG4gICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgJ3N0cm9rZSc6ICcjMUI5QTU5JyxcbiAgICAgICAgICAgICdvcGFjaXR5JzogMFxuICAgICAgICB9KVxuICAgICAgICApXVxuICAgICldLFxuXG59KVxuZXhwb3J0IGNsYXNzIFJlZnJlc2hTcGlubmVyIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBzcGluQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBmYWJDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZlcnRpY2FsOiBzdHJpbmcgPSBcImJvdHRvbVwiO1xuICAgIEBJbnB1dCgpIGhvcml6b250YWw6IHN0cmluZyA9IFwiZW5kXCI7XG4gICAgQElucHV0KCkgZWRnZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNoZWNrbWFyazogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGRyYWdQcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGljb25TdGF0ZTogc3RyaW5nID0gJ25vcm1hbCc7XG5cbiAgICBAVmlld0NoaWxkKCdzcGlubmVyJykgc3Bpbm5lcjogRWxlbWVudFJlZjtcblxuICAgIEBPdXRwdXQoKSBvbkNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8UmVmcmVzaFNwaW5uZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZWZyZXNoU3Bpbm5lcj4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8UmVmcmVzaFNwaW5uZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZWZyZXNoU3Bpbm5lcj4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgY2hhbmdlOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmljb24gIT0gJ21kLWNoZWNrbWFyaycpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KCk7XG4gICAgfVxuXG4gICAgdW5sb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlsbEFuaW1hdGlvbkRvbmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PSAnc3Bpbm5pbmcnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja21hcmspIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsbCBhbmltYXRpb24gZG9uZScsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TdGF0ZSA9IFwicm90YXRlXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VJY29uQW5kUmV2ZWFsKGV2ZW50LCBpY29uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQsIGljb24pO1xuICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09ICdub3JtYWwnKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgICAgICAgdGhpcy5pY29uU3RhdGUgPSBcIm5vcm1hbFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gXCJyb3RhdGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdENvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy51bmxvYWQoKTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Db21wbGV0ZS5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZHJhZ1Byb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSBNYXRoLmZsb29yKC04MCArIDgwICogcHJvZ3Jlc3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCk7XG4gICAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9KWApXG4gICAgICAgIHRoaXMuc3Bpbm5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYClcbiAgICAgICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbn1cbiJdfQ==