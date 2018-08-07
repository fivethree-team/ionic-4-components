/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { animate, style, transition, trigger, state } from "@angular/animations";
import { fromEvent } from 'rxjs';
export class ContentRefresh {
    constructor() {
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
    ngOnInit() {
        fromEvent(document, 'touchend').subscribe(res => {
            console.log('touchend', res);
            if (this.pulling && !this.refreshing) {
                this.changeProgress(0);
            }
        });
    }
    /**
     * @return {?}
     */
    spinRefresher() {
        this.spinner.nativeElement.style.setProperty('transform', `translateY(112px)`);
        this.refreshing = true;
        this.pulling = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    doRefresh(event) {
        this.spinRefresher();
        console.log('refresh here');
        setTimeout(() => {
            event.target.complete();
        }, 140);
        this.refresh();
    }
    /**
     * @return {?}
     */
    refresh() {
        this.onRefresh.emit(this);
    }
    /**
     * @return {?}
     */
    completeRefresh() {
        this.refreshing = false;
        this.isComplete = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPull(event) {
        this.pulling = true;
        console.log(event);
        /** @type {?} */
        const progress = event.target.getProgress();
        if (progress <= 1) {
            this.onProgressChanged.emit(progress);
            this.changeProgress(progress);
        }
    }
    /**
     * @return {?}
     */
    onStart() {
        // this.changeProgress(0);
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    changeProgress(progress) {
        this.translateY = 112 * progress;
        /** @type {?} */
        const translateY = this.translateY;
        console.log(`translateY(${translateY}px)`);
        // this.renderer.setStyle(this.spinner.nativeElement, 'transform', `translateY(${translateY})`)
        this.spinner.nativeElement.style.setProperty('transform', `translateY(${translateY}px)`);
        // this.change.detectChanges();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fillAnimationDone(event) {
        if (event.toState === 'fill' && event.fromState === 'spinning') {
            console.log('fillAnim complete', event);
            this.spinnerVisible = false;
            this.isComplete = false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSpinnerHidden(event) {
        if (event.fromState !== 'void') {
            console.log('refresh complete', event);
            this.spinnerVisible = true;
        }
    }
    /**
     * @return {?}
     */
    showHint() {
        this.hintVisible = true;
    }
    /**
     * @return {?}
     */
    onHintClicked() {
        console.log('on hint clicked');
        this.hintVisible = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    postHint(event) {
        console.log(event);
        if (!event.fromState && event.toState == 'void') {
            this.refresh();
            this.spinRefresher();
        }
    }
}
ContentRefresh.decorators = [
    { type: Component, args: [{
                selector: 'gg-loading-content',
                template: `
    <div class="gg-hint-wrapper">
    <ion-chip *ngIf="hintVisible" (click)="onHintClicked()" [@hintAnim] (@hintAnim.done)="postHint($event)" #hint class="gg-hint-container">
  <ion-icon class="icon" name="md-arrow-up"></ion-icon>
  <ion-label class="text">{{hintText}}</ion-label>
</ion-chip>
    </div>
    
    <div [@spinnerAnim] (@spinnerAnim.done)="onSpinnerHidden($event)" *ngIf="spinnerVisible" #spinner class="gg-spinner-container">
        <svg class="spinner rotate" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
            <circle [@fillAnim]="isComplete ? 'fill' : 'spinning'" (@fillAnim.done)="fillAnimationDone($event)" [ngClass]="{'path': !isComplete}" fill="none" stroke-width="4" stroke-linecap="round" cx="36" cy="36" r="32"></circle>
        </svg>
    </div>
    <ion-content #content fullscreen>
        <ion-refresher (ionStart)="onStart()" [snapbackDuration]="280" [closeDuration]="280" [pullMax]="168" [pullMin]="112" [disabled]="false" slot="fixed" (ionRefresh)="doRefresh($event)" (ionPull)="onPull($event)">
        </ion-refresher>

        <ng-content></ng-content>
    </ion-content>
    `,
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
                styles: [`.spinner{position:absolute;width:24px;height:24px;left:8px;top:8px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}.gg-spinner-container{width:40px;height:40px;position:absolute;left:calc(50% - 20px);top:0;z-index:9;background:var(--ion-color-light);border-radius:50%;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1)}.gg-hint-container{height:40px;padding-left:8px;padding-right:8px;position:relative;background:var(--ion-color-light);border-radius:40px;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1);margin:0}.icon{height:20px;width:20px;background:0 0;color:var(--ion-color-dark)}.text{font-size:1em;color:var(--ion-color-dark)}.gg-hint-wrapper{width:100%;position:absolute;top:112px;z-index:8;text-align:center}`]
            }] }
];
/** @nocollapse */
ContentRefresh.ctorParameters = () => [];
ContentRefresh.propDecorators = {
    onProgressChanged: [{ type: Output }],
    onRefresh: [{ type: Output }],
    spinner: [{ type: ViewChild, args: ['spinner',] }],
    content: [{ type: ViewChild, args: ['content',] }],
    hintText: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFpRWpDLE1BQU07SUEwQkY7aUNBeEJvRCxJQUFJLFlBQVksRUFBRTt5QkFDbEIsSUFBSSxZQUFZLEVBQUU7MEJBR3pELEtBQUs7dUJBQ0MsS0FBSzswQkFDRixLQUFLOzhCQUNELElBQUk7MEJBQ1QsQ0FBQzsyQkFDQyxLQUFLO3dCQUNBLFdBQVc7S0FldEM7Ozs7SUFaRCxRQUFRO1FBRUosU0FBUyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0osQ0FBQyxDQUFDO0tBRU47Ozs7SUFLRCxhQUFhO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUMvRSxJQUFJ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QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUNwQixLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7NEJBQ3pCLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzt5QkFDdEQsQ0FBQztxQkFDTCxDQUNBO2lCQUNKO3lCQXBDUSxtaEZBQW1oRjthQXNDL2hGOzs7OztnQ0FHSSxNQUFNO3dCQUNOLE1BQU07c0JBQ04sU0FBUyxTQUFDLFNBQVM7c0JBQ25CLFNBQVMsU0FBQyxTQUFTO3VCQU9uQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgc3RhdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctY29udGVudCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZ2ctaGludC13cmFwcGVyXCI+XG4gICAgPGlvbi1jaGlwICpuZ0lmPVwiaGludFZpc2libGVcIiAoY2xpY2spPVwib25IaW50Q2xpY2tlZCgpXCIgW0BoaW50QW5pbV0gKEBoaW50QW5pbS5kb25lKT1cInBvc3RIaW50KCRldmVudClcIiAjaGludCBjbGFzcz1cImdnLWhpbnQtY29udGFpbmVyXCI+XG4gIDxpb24taWNvbiBjbGFzcz1cImljb25cIiBuYW1lPVwibWQtYXJyb3ctdXBcIj48L2lvbi1pY29uPlxuICA8aW9uLWxhYmVsIGNsYXNzPVwidGV4dFwiPnt7aGludFRleHR9fTwvaW9uLWxhYmVsPlxuPC9pb24tY2hpcD5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IFtAc3Bpbm5lckFuaW1dIChAc3Bpbm5lckFuaW0uZG9uZSk9XCJvblNwaW5uZXJIaWRkZW4oJGV2ZW50KVwiICpuZ0lmPVwic3Bpbm5lclZpc2libGVcIiAjc3Bpbm5lciBjbGFzcz1cImdnLXNwaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJzcGlubmVyIHJvdGF0ZVwiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICA8Y2lyY2xlIFtAZmlsbEFuaW1dPVwiaXNDb21wbGV0ZSA/ICdmaWxsJyA6ICdzcGlubmluZydcIiAoQGZpbGxBbmltLmRvbmUpPVwiZmlsbEFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cInsncGF0aCc6ICFpc0NvbXBsZXRlfVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBjeD1cIjM2XCIgY3k9XCIzNlwiIHI9XCIzMlwiPjwvY2lyY2xlPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgICA8aW9uLWNvbnRlbnQgI2NvbnRlbnQgZnVsbHNjcmVlbj5cbiAgICAgICAgPGlvbi1yZWZyZXNoZXIgKGlvblN0YXJ0KT1cIm9uU3RhcnQoKVwiIFtzbmFwYmFja0R1cmF0aW9uXT1cIjI4MFwiIFtjbG9zZUR1cmF0aW9uXT1cIjI4MFwiIFtwdWxsTWF4XT1cIjE2OFwiIFtwdWxsTWluXT1cIjExMlwiIFtkaXNhYmxlZF09XCJmYWxzZVwiIHNsb3Q9XCJmaXhlZFwiIChpb25SZWZyZXNoKT1cImRvUmVmcmVzaCgkZXZlbnQpXCIgKGlvblB1bGwpPVwib25QdWxsKCRldmVudClcIj5cbiAgICAgICAgPC9pb24tcmVmcmVzaGVyPlxuXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2lvbi1jb250ZW50PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYC5zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bGVmdDo4cHg7dG9wOjhweH0ucm90YXRley13ZWJraXQtYW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3I7YW5pbWF0aW9uOjEuNHMgbGluZWFyIGluZmluaXRlIHJvdGF0b3J9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fUBrZXlmcmFtZXMgcm90YXRvcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX19LnBhdGh7c3Ryb2tlLWRhc2hhcnJheToxODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOy13ZWJraXQtYW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yczthbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBkYXNoLDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzfS5maWxse3N0cm9rZS1kYXNoYXJyYXk6MzYwO3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7YW5pbWF0aW9uOjEuNHMgZWFzZS1vdXQgZmlsbDtzdHJva2U6IzFiOWE1OX1ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUBrZXlmcmFtZXMgY29sb3JzezAlLDEwMCV7c3Ryb2tlOiM0Mjg1ZjR9MjUle3N0cm9rZTojZGUzZTM1fTUwJXtzdHJva2U6I2Y3YzIyM303NSV7c3Ryb2tlOiMxYjlhNTl9fUAtd2Via2l0LWtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QGtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNob2Zmc2V0OjE4N301MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6NDYuNzU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTg3Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZmlsbHswJXtzdHJva2UtZGFzaG9mZnNldDozNjB9ODAle3N0cm9rZS1kYXNob2Zmc2V0OjE4MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MTAwJXtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKX19LmdnLXNwaW5uZXItY29udGFpbmVye3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDpjYWxjKDUwJSAtIDIwcHgpO3RvcDowO3otaW5kZXg6OTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1saWdodCk7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNoYWRvdzowIDRweCA2cHggMCByZ2JhKDAsMCwwLC4xNCksMCA0cHggNXB4IHJnYmEoMCwwLDAsLjEpfS5nZy1oaW50LWNvbnRhaW5lcntoZWlnaHQ6NDBweDtwYWRkaW5nLWxlZnQ6OHB4O3BhZGRpbmctcmlnaHQ6OHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtib3JkZXItcmFkaXVzOjQwcHg7Ym94LXNoYWRvdzowIDRweCA2cHggMCByZ2JhKDAsMCwwLC4xNCksMCA0cHggNXB4IHJnYmEoMCwwLDAsLjEpO21hcmdpbjowfS5pY29ue2hlaWdodDoyMHB4O3dpZHRoOjIwcHg7YmFja2dyb3VuZDowIDA7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmspfS50ZXh0e2ZvbnQtc2l6ZToxZW07Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmspfS5nZy1oaW50LXdyYXBwZXJ7d2lkdGg6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTEycHg7ei1pbmRleDo4O3RleHQtYWxpZ246Y2VudGVyfWBdLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IGZpbGwnLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDE4MCxcbiAgICAgICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogOTAsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0cm9rZSc6ICcjREUzRTM1J1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzM2MG1zIGVhc2Utb3V0JylcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgc3RhdGUoJ2ZpbGwnLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiAzMTUsXG4gICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogMCxcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtT3JpZ2luJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgJ3N0cm9rZSc6ICcjMUI5QTU5JyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXVxuICAgICAgICApLFxuICAgICAgICB0cmlnZ2VyKCdzcGlubmVyQW5pbScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgICAgdHJpZ2dlcignaGludEFuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC04MHB4KScgfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZS1pbicsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7IHdpZHRoOiAnMTEycHgnIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzEyNW1zIGVhc2Utb3V0Jywgc3R5bGUoeyB3aWR0aDogJzQwcHgnIH0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICAgKSxcbiAgICBdLFxuXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRSZWZyZXNoIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBPdXRwdXQoKSBvblByb2dyZXNzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaDogRXZlbnRFbWl0dGVyPENvbnRlbnRSZWZyZXNoPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAVmlld0NoaWxkKCdzcGlubmVyJykgc3Bpbm5lcjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudDogRWxlbWVudFJlZjtcbiAgICBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgcHVsbGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHJlZnJlc2hpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzcGlubmVyVmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgdHJhbnNsYXRlWTogbnVtYmVyID0gMDtcbiAgICBoaW50VmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGhpbnRUZXh0OiBzdHJpbmcgPSAnbmV3IHBvc3RzJztcblxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LCAndG91Y2hlbmQnKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b3VjaGVuZCcsIHJlcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5wdWxsaW5nICYmICF0aGlzLnJlZnJlc2hpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVByb2dyZXNzKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHNwaW5SZWZyZXNoZXIoKSB7XG4gICAgICAgIHRoaXMuc3Bpbm5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgxMTJweClgKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wdWxsaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZG9SZWZyZXNoKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc3BpblJlZnJlc2hlcigpO1xuICAgICAgICBjb25zb2xlLmxvZygncmVmcmVzaCBoZXJlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNvbXBsZXRlKCk7XG4gICAgICAgIH0sIDE0MCk7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgfVxuXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZVJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uUHVsbChldmVudCkge1xuICAgICAgICB0aGlzLnB1bGxpbmcgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gZXZlbnQudGFyZ2V0LmdldFByb2dyZXNzKCk7XG4gICAgICAgIGlmIChwcm9ncmVzcyA8PSAxKSB7XG4gICAgICAgICAgICB0aGlzLm9uUHJvZ3Jlc3NDaGFuZ2VkLmVtaXQocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQcm9ncmVzcyhwcm9ncmVzcyk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3RhcnQoKSB7XG4gICAgICAgIC8vIHRoaXMuY2hhbmdlUHJvZ3Jlc3MoMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVZID0gMTEyICogcHJvZ3Jlc3M7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSB0aGlzLnRyYW5zbGF0ZVk7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX1weClgKTtcbiAgICAgICAgLy8gdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwaW5uZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX0pYClcbiAgICAgICAgdGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX1weClgKTtcbiAgICAgICAgLy8gdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIGZpbGxBbmltYXRpb25Eb25lKGV2ZW50KSB7XG5cbiAgICAgICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdmaWxsJyAmJiBldmVudC5mcm9tU3RhdGUgPT09ICdzcGlubmluZycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxsQW5pbSBjb21wbGV0ZScsIGV2ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5zcGlubmVyVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNwaW5uZXJIaWRkZW4oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSAhPT0gJ3ZvaWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVmcmVzaCBjb21wbGV0ZScsIGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lclZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzaG93SGludCgpIHtcbiAgICAgICAgdGhpcy5oaW50VmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25IaW50Q2xpY2tlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uIGhpbnQgY2xpY2tlZCcpO1xuICAgICAgICB0aGlzLmhpbnRWaXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcG9zdEhpbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICBpZiAoIWV2ZW50LmZyb21TdGF0ZSAmJiBldmVudC50b1N0YXRlID09ICd2b2lkJykge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLnNwaW5SZWZyZXNoZXIoKTtcblxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbiJdfQ==