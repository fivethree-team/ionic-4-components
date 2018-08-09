/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { animate, style, transition, trigger, state } from "@angular/animations";
import { fromEvent } from 'rxjs';
var ContentRefresh = /** @class */ (function () {
    function ContentRefresh() {
        this.onProgressChanged = new EventEmitter();
        this.onRefresh = new EventEmitter();
        this.isComplete = false;
        this.pulling = false;
        this.refreshing = false;
        this.spinnerVisible = true;
        this.translateY = 0;
        this.hintVisible = false;
        this.hintText = 'new posts';
    }
    /**
     * @return {?}
     */
    ContentRefresh.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        fromEvent(document, 'touchend').subscribe(function (res) {
            console.log('touchend', res);
            if (_this.pulling && !_this.refreshing) {
                _this.changeProgress(0);
            }
        });
    };
    /**
     * @return {?}
     */
    ContentRefresh.prototype.spinRefresher = /**
     * @return {?}
     */
    function () {
        this.spinner.nativeElement.style.setProperty('transform', "translateY(168px)");
        this.refreshing = true;
        this.pulling = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContentRefresh.prototype.doRefresh = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.spinRefresher();
        console.log('refresh here');
        setTimeout(function () {
            event.target.complete();
        }, 140);
        this.refresh();
    };
    /**
     * @return {?}
     */
    ContentRefresh.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.onRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    ContentRefresh.prototype.completeRefresh = /**
     * @return {?}
     */
    function () {
        this.refreshing = false;
        this.isComplete = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContentRefresh.prototype.onPull = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.pulling = true;
        console.log(event);
        /** @type {?} */
        var progress = event.target.getProgress();
        if (progress <= 1) {
            this.onProgressChanged.emit(progress);
            this.changeProgress(progress);
        }
    };
    /**
     * @return {?}
     */
    ContentRefresh.prototype.onStart = /**
     * @return {?}
     */
    function () {
        // this.changeProgress(0);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    ContentRefresh.prototype.changeProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.translateY = 112 * progress;
        /** @type {?} */
        var translateY = this.translateY;
        console.log("translateY(" + translateY + "px)");
        // this.renderer.setStyle(this.spinner.nativeElement, 'transform', `translateY(${translateY})`)
        this.spinner.nativeElement.style.setProperty('transform', "translateY(" + translateY + "px)");
        // this.change.detectChanges();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContentRefresh.prototype.fillAnimationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'fill' && event.fromState === 'spinning') {
            console.log('fillAnim complete', event);
            this.spinnerVisible = false;
            this.isComplete = false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContentRefresh.prototype.onSpinnerHidden = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.fromState !== 'void') {
            console.log('refresh complete', event);
            this.spinnerVisible = true;
        }
    };
    /**
     * @return {?}
     */
    ContentRefresh.prototype.showHint = /**
     * @return {?}
     */
    function () {
        this.hintVisible = true;
    };
    /**
     * @return {?}
     */
    ContentRefresh.prototype.onHintClicked = /**
     * @return {?}
     */
    function () {
        console.log('on hint clicked');
        this.hintVisible = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContentRefresh.prototype.postHint = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(event);
        if (!event.fromState && event.toState == 'void') {
            this.refresh();
            this.spinRefresher();
        }
    };
    ContentRefresh.decorators = [
        { type: Component, args: [{
                    selector: 'gg-loading-content',
                    template: "\n    <div class=\"gg-hint-wrapper\">\n    <ion-chip *ngIf=\"hintVisible\" (click)=\"onHintClicked()\" [@hintAnim] (@hintAnim.done)=\"postHint($event)\" #hint class=\"gg-hint-container\">\n  <ion-icon class=\"icon\" name=\"md-arrow-up\"></ion-icon>\n  <ion-label class=\"text\">{{hintText}}</ion-label>\n</ion-chip>\n    </div>\n    \n    <div [@spinnerAnim] (@spinnerAnim.done)=\"onSpinnerHidden($event)\" *ngIf=\"spinnerVisible\" #spinner class=\"gg-spinner-container\">\n        <svg class=\"spinner rotate\" viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle [@fillAnim]=\"isComplete ? 'fill' : 'spinning'\" (@fillAnim.done)=\"fillAnimationDone($event)\" [ngClass]=\"{'path': !isComplete}\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\" cx=\"36\" cy=\"36\" r=\"32\"></circle>\n        </svg>\n    </div>\n        <ion-refresher (ionStart)=\"onStart()\" [snapbackDuration]=\"280\" [closeDuration]=\"280\" [pullMax]=\"168\" [pullMin]=\"112\" [disabled]=\"false\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" (ionPull)=\"onPull($event)\">\n        </ion-refresher>\n    ",
                    animations: [
                        trigger('fillAnim', [
                            transition('* => fill', [
                                style({
                                    'stroke-dasharray': 180,
                                    'stroke-dashoffset': 90,
                                    'transformOrigin': 'center',
                                    'stroke': '#DE3E35'
                                }),
                                animate('360ms ease-out')
                            ]),
                            state('fill', style({
                                'stroke-dasharray': 315,
                                'stroke-dashoffset': 0,
                                'transformOrigin': 'center',
                                'stroke': '#1B9A59',
                            }))
                        ]),
                        trigger('spinnerAnim', [
                            transition('* => void', [
                                animate('250ms ease-out', style({ opacity: 0 }))
                            ]),
                        ]),
                        trigger('hintAnim', [
                            transition('void => *', [
                                style({ opacity: 0, transform: 'translateY(-80px)' }),
                                animate('150ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
                            ]),
                            transition('* => void', [
                                style({ width: '112px' }),
                                animate('125ms ease-out', style({ width: '40px' }))
                            ]),
                        ]),
                    ],
                    styles: [".spinner{position:absolute;width:24px;height:24px;left:8px;top:8px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}.gg-spinner-container{width:40px;height:40px;position:absolute;left:calc(50% - 20px);top:-56px;z-index:9;background:var(--ion-color-light);border-radius:50%;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1)}.gg-hint-container{height:40px;padding-left:8px;padding-right:8px;position:relative;background:var(--ion-color-light);border-radius:40px;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1);margin:0}.icon{height:20px;width:20px;background:0 0;color:var(--ion-color-dark)}.text{font-size:1em;color:var(--ion-color-dark)}.gg-hint-wrapper{width:100%;position:absolute;top:112px;z-index:8;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    ContentRefresh.ctorParameters = function () { return []; };
    ContentRefresh.propDecorators = {
        onProgressChanged: [{ type: Output }],
        onRefresh: [{ type: Output }],
        spinner: [{ type: ViewChild, args: ['spinner',] }],
        content: [{ type: ViewChild, args: ['content',] }],
        hintText: [{ type: Input }]
    };
    return ContentRefresh;
}());
export { ContentRefresh };
if (false) {
    /** @type {?} */
    ContentRefresh.prototype.onProgressChanged;
    /** @type {?} */
    ContentRefresh.prototype.onRefresh;
    /** @type {?} */
    ContentRefresh.prototype.spinner;
    /** @type {?} */
    ContentRefresh.prototype.content;
    /** @type {?} */
    ContentRefresh.prototype.isComplete;
    /** @type {?} */
    ContentRefresh.prototype.pulling;
    /** @type {?} */
    ContentRefresh.prototype.refreshing;
    /** @type {?} */
    ContentRefresh.prototype.spinnerVisible;
    /** @type {?} */
    ContentRefresh.prototype.translateY;
    /** @type {?} */
    ContentRefresh.prototype.hintVisible;
    /** @type {?} */
    ContentRefresh.prototype.hintText;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBdUY3QjtpQ0F4Qm9ELElBQUksWUFBWSxFQUFFO3lCQUNsQixJQUFJLFlBQVksRUFBRTswQkFHekQsS0FBSzt1QkFDQyxLQUFLOzBCQUNGLEtBQUs7OEJBQ0QsSUFBSTswQkFDVCxDQUFDOzJCQUNDLEtBQUs7d0JBQ0EsV0FBVztLQWV0Qzs7OztJQVpELGlDQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUEcsU0FBUyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQjtTQUNKLENBQUMsQ0FBQztLQUVOOzs7O0lBS0Qsc0NBQWE7OztJQUFiO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FB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S0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQzs2QkFDOUUsQ0FBQzs0QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUNwQixLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0NBQ3pCLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzs2QkFDdEQsQ0FBQzt5QkFDTCxDQUNBO3FCQUNKOzZCQXBDUSx1aEZBQXVoRjtpQkFzQ25pRjs7Ozs7b0NBR0ksTUFBTTs0QkFDTixNQUFNOzBCQUNOLFNBQVMsU0FBQyxTQUFTOzBCQUNuQixTQUFTLFNBQUMsU0FBUzsyQkFPbkIsS0FBSzs7eUJBM0VWOztTQStEYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgc3RhdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctY29udGVudCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZ2ctaGludC13cmFwcGVyXCI+XG4gICAgPGlvbi1jaGlwICpuZ0lmPVwiaGludFZpc2libGVcIiAoY2xpY2spPVwib25IaW50Q2xpY2tlZCgpXCIgW0BoaW50QW5pbV0gKEBoaW50QW5pbS5kb25lKT1cInBvc3RIaW50KCRldmVudClcIiAjaGludCBjbGFzcz1cImdnLWhpbnQtY29udGFpbmVyXCI+XG4gIDxpb24taWNvbiBjbGFzcz1cImljb25cIiBuYW1lPVwibWQtYXJyb3ctdXBcIj48L2lvbi1pY29uPlxuICA8aW9uLWxhYmVsIGNsYXNzPVwidGV4dFwiPnt7aGludFRleHR9fTwvaW9uLWxhYmVsPlxuPC9pb24tY2hpcD5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IFtAc3Bpbm5lckFuaW1dIChAc3Bpbm5lckFuaW0uZG9uZSk9XCJvblNwaW5uZXJIaWRkZW4oJGV2ZW50KVwiICpuZ0lmPVwic3Bpbm5lclZpc2libGVcIiAjc3Bpbm5lciBjbGFzcz1cImdnLXNwaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJzcGlubmVyIHJvdGF0ZVwiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICA8Y2lyY2xlIFtAZmlsbEFuaW1dPVwiaXNDb21wbGV0ZSA/ICdmaWxsJyA6ICdzcGlubmluZydcIiAoQGZpbGxBbmltLmRvbmUpPVwiZmlsbEFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cInsncGF0aCc6ICFpc0NvbXBsZXRlfVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBjeD1cIjM2XCIgY3k9XCIzNlwiIHI9XCIzMlwiPjwvY2lyY2xlPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgICAgICAgPGlvbi1yZWZyZXNoZXIgKGlvblN0YXJ0KT1cIm9uU3RhcnQoKVwiIFtzbmFwYmFja0R1cmF0aW9uXT1cIjI4MFwiIFtjbG9zZUR1cmF0aW9uXT1cIjI4MFwiIFtwdWxsTWF4XT1cIjE2OFwiIFtwdWxsTWluXT1cIjExMlwiIFtkaXNhYmxlZF09XCJmYWxzZVwiIHNsb3Q9XCJmaXhlZFwiIChpb25SZWZyZXNoKT1cImRvUmVmcmVzaCgkZXZlbnQpXCIgKGlvblB1bGwpPVwib25QdWxsKCRldmVudClcIj5cbiAgICAgICAgPC9pb24tcmVmcmVzaGVyPlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYC5zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bGVmdDo4cHg7dG9wOjhweH0ucm90YXRley13ZWJraXQtYW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3I7YW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3J9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fUBrZXlmcmFtZXMgcm90YXRvcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX19LnBhdGh7c3Ryb2tlLWRhc2hhcnJheToxODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOy13ZWJraXQtYW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yczthbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBkYXNoLDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzfS5maWxse3N0cm9rZS1kYXNoYXJyYXk6MzYwO3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7YW5pbWF0aW9uOjEuNHMgZWFzZS1vdXQgZmlsbDtzdHJva2U6IzFiOWE1OX1ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUBrZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUAtd2Via2l0LWtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QGtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZmlsbHswJXtzdHJva2UtZGFzaG9mZnNldDozNjB9ODAle3N0cm9rZS1kYXNob2Zmc2V0OjE4MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19LmdnLXNwaW5uZXItY29udGFpbmVye3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDpjYWxjKDUwJSAtIDIwcHgpO3RvcDotNTZweDt6LWluZGV4Ojk7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItbGlnaHQpO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCA0cHggNnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDVweCByZ2JhKDAsMCwwLC4xKX0uZ2ctaGludC1jb250YWluZXJ7aGVpZ2h0OjQwcHg7cGFkZGluZy1sZWZ0OjhweDtwYWRkaW5nLXJpZ2h0OjhweDtwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1saWdodCk7Ym9yZGVyLXJhZGl1czo0MHB4O2JveC1zaGFkb3c6MCA0cHggNnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDVweCByZ2JhKDAsMCwwLC4xKTttYXJnaW46MH0uaWNvbntoZWlnaHQ6MjBweDt3aWR0aDoyMHB4O2JhY2tncm91bmQ6MCAwO2NvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrKX0udGV4dHtmb250LXNpemU6MWVtO2NvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrKX0uZ2ctaGludC13cmFwcGVye3dpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjExMnB4O3otaW5kZXg6ODt0ZXh0LWFsaWduOmNlbnRlcn1gXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiBmaWxsJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAxODAsXG4gICAgICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDkwLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICdzdHJva2UnOiAnI0RFM0UzNSdcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCczNjBtcyBlYXNlLW91dCcpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHN0YXRlKCdmaWxsJywgc3R5bGUoe1xuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMzE1LFxuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDAsXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdzdHJva2UnOiAnIzFCOUE1OScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgKV1cbiAgICAgICAgKSxcbiAgICAgICAgdHJpZ2dlcignc3Bpbm5lckFuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIHRyaWdnZXIoJ2hpbnRBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtODBweCknIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2UtaW4nLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoeyB3aWR0aDogJzExMnB4JyB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcxMjVtcyBlYXNlLW91dCcsIHN0eWxlKHsgd2lkdGg6ICc0MHB4JyB9KSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICAgICksXG4gICAgXSxcblxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50UmVmcmVzaCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAT3V0cHV0KCkgb25Qcm9ncmVzc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxDb250ZW50UmVmcmVzaD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQFZpZXdDaGlsZCgnc3Bpbm5lcicpIHNwaW5uZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gICAgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHB1bGxpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICByZWZyZXNoaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgc3Bpbm5lclZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHRyYW5zbGF0ZVk6IG51bWJlciA9IDA7XG4gICAgaGludFZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBoaW50VGV4dDogc3RyaW5nID0gJ25ldyBwb3N0cyc7XG5cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIGZyb21FdmVudChkb2N1bWVudCwgJ3RvdWNoZW5kJykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndG91Y2hlbmQnLCByZXMpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHVsbGluZyAmJiAhdGhpcy5yZWZyZXNoaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQcm9ncmVzcygwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBzcGluUmVmcmVzaGVyKCkge1xuICAgICAgICB0aGlzLnNwaW5uZXIubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoMTY4cHgpYCk7XG4gICAgICAgIHRoaXMucmVmcmVzaGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucHVsbGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRvUmVmcmVzaChldmVudCkge1xuICAgICAgICB0aGlzLnNwaW5SZWZyZXNoZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2ggaGVyZScpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jb21wbGV0ZSgpO1xuICAgICAgICB9LCAxNDApO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcGxldGVSZWZyZXNoKCkge1xuICAgICAgICB0aGlzLnJlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvblB1bGwoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wdWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGV2ZW50LnRhcmdldC5nZXRQcm9ncmVzcygpO1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPD0gMSkge1xuICAgICAgICAgICAgdGhpcy5vblByb2dyZXNzQ2hhbmdlZC5lbWl0KHByb2dyZXNzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0YXJ0KCkge1xuICAgICAgICAvLyB0aGlzLmNoYW5nZVByb2dyZXNzKDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlWSA9IDExMiAqIHByb2dyZXNzO1xuICAgICAgICBjb25zdCB0cmFuc2xhdGVZID0gdGhpcy50cmFuc2xhdGVZO1xuICAgICAgICBjb25zb2xlLmxvZyhgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCk7XG4gICAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9KWApXG4gICAgICAgIHRoaXMuc3Bpbm5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCk7XG4gICAgICAgIC8vIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBmaWxsQW5pbWF0aW9uRG9uZShldmVudCkge1xuXG4gICAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZmlsbCcgJiYgZXZlbnQuZnJvbVN0YXRlID09PSAnc3Bpbm5pbmcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsbEFuaW0gY29tcGxldGUnLCBldmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lclZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGlubmVySGlkZGVuKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2ggY29tcGxldGUnLCBldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNwaW5uZXJWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2hvd0hpbnQoKSB7XG4gICAgICAgIHRoaXMuaGludFZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uSGludENsaWNrZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbiBoaW50IGNsaWNrZWQnKTtcbiAgICAgICAgdGhpcy5oaW50VmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHBvc3RIaW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgaWYgKCFldmVudC5mcm9tU3RhdGUgJiYgZXZlbnQudG9TdGF0ZSA9PSAndm9pZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5zcGluUmVmcmVzaGVyKCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iXX0=