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
        this.spinner.nativeElement.style.setProperty('transform', `translateY(168px)`);
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
        <ion-refresher (ionStart)="onStart()" [snapbackDuration]="280" [closeDuration]="280" [pullMax]="168" [pullMin]="112" [disabled]="false" slot="fixed" (ionRefresh)="doRefresh($event)" (ionPull)="onPull($event)">
        </ion-refresher>
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
                styles: [`.spinner{position:absolute;width:24px;height:24px;left:8px;top:8px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}.gg-spinner-container{width:40px;height:40px;position:absolute;left:calc(50% - 20px);top:-56px;z-index:9;background:var(--ion-color-light);border-radius:50%;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1)}.gg-hint-container{height:40px;padding-left:8px;padding-right:8px;position:relative;background:var(--ion-color-light);border-radius:40px;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1);margin:0}.icon{height:20px;width:20px;background:0 0;color:var(--ion-color-dark)}.text{font-size:1em;color:var(--ion-color-dark)}.gg-hint-wrapper{width:100%;position:absolute;top:112px;z-index:8;text-align:center}`]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUE2RGpDLE1BQU07SUEwQkY7aUNBeEJvRCxJQUFJLFlBQVksRUFBRTt5QkFDbEIsSUFBSSxZQUFZLEVBQUU7MEJBR3pELEtBQUs7dUJBQ0MsS0FBSzswQkFDRixLQUFLOzhCQUNELElBQUk7MEJBQ1QsQ0FBQzsyQkFDQyxLQUFLO3dCQUNBLFdBQVc7S0FldEM7Ozs7SUFaRCxRQUFRO1FBRUosU0FBUyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0osQ0FBQyxDQUFDO0tBRU47Ozs7SUFLRCxhQUFhO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUMvRSxJQUFJ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VUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDcEIsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDOzRCQUN6QixPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7eUJBQ3RELENBQUM7cUJBQ0wsQ0FDQTtpQkFDSjt5QkFwQ1EsdWhGQUF1aEY7YUFzQ25pRjs7Ozs7Z0NBR0ksTUFBTTt3QkFDTixNQUFNO3NCQUNOLFNBQVMsU0FBQyxTQUFTO3NCQUNuQixTQUFTLFNBQUMsU0FBUzt1QkFPbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZy1sb2FkaW5nLWNvbnRlbnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImdnLWhpbnQtd3JhcHBlclwiPlxuICAgIDxpb24tY2hpcCAqbmdJZj1cImhpbnRWaXNpYmxlXCIgKGNsaWNrKT1cIm9uSGludENsaWNrZWQoKVwiIFtAaGludEFuaW1dIChAaGludEFuaW0uZG9uZSk9XCJwb3N0SGludCgkZXZlbnQpXCIgI2hpbnQgY2xhc3M9XCJnZy1oaW50LWNvbnRhaW5lclwiPlxuICA8aW9uLWljb24gY2xhc3M9XCJpY29uXCIgbmFtZT1cIm1kLWFycm93LXVwXCI+PC9pb24taWNvbj5cbiAgPGlvbi1sYWJlbCBjbGFzcz1cInRleHRcIj57e2hpbnRUZXh0fX08L2lvbi1sYWJlbD5cbjwvaW9uLWNoaXA+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBbQHNwaW5uZXJBbmltXSAoQHNwaW5uZXJBbmltLmRvbmUpPVwib25TcGlubmVySGlkZGVuKCRldmVudClcIiAqbmdJZj1cInNwaW5uZXJWaXNpYmxlXCIgI3NwaW5uZXIgY2xhc3M9XCJnZy1zcGlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwic3Bpbm5lciByb3RhdGVcIiB2aWV3Qm94PVwiMCAwIDcyIDcyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPGNpcmNsZSBbQGZpbGxBbmltXT1cImlzQ29tcGxldGUgPyAnZmlsbCcgOiAnc3Bpbm5pbmcnXCIgKEBmaWxsQW5pbS5kb25lKT1cImZpbGxBbmltYXRpb25Eb25lKCRldmVudClcIiBbbmdDbGFzc109XCJ7J3BhdGgnOiAhaXNDb21wbGV0ZX1cIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgY3g9XCIzNlwiIGN5PVwiMzZcIiByPVwiMzJcIj48L2NpcmNsZT5cbiAgICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gICAgICAgIDxpb24tcmVmcmVzaGVyIChpb25TdGFydCk9XCJvblN0YXJ0KClcIiBbc25hcGJhY2tEdXJhdGlvbl09XCIyODBcIiBbY2xvc2VEdXJhdGlvbl09XCIyODBcIiBbcHVsbE1heF09XCIxNjhcIiBbcHVsbE1pbl09XCIxMTJcIiBbZGlzYWJsZWRdPVwiZmFsc2VcIiBzbG90PVwiZml4ZWRcIiAoaW9uUmVmcmVzaCk9XCJkb1JlZnJlc2goJGV2ZW50KVwiIChpb25QdWxsKT1cIm9uUHVsbCgkZXZlbnQpXCI+XG4gICAgICAgIDwvaW9uLXJlZnJlc2hlcj5cbiAgICBgLFxuICAgIHN0eWxlczogW2Auc3Bpbm5lcntwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2xlZnQ6OHB4O3RvcDo4cHh9LnJvdGF0ZXstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGxpbmVhciBpbmZpbml0ZSByb3RhdG9yO2FuaW1hdGlvbjoxLjRzIGxpbmVhciBpbmZpbml0ZSByb3RhdG9yfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdG9yezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfX1Aa2V5ZnJhbWVzIHJvdGF0b3J7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9fS5wYXRoe3N0cm9rZS1kYXNoYXJyYXk6MTg3O3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGRhc2gsNS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnM7YW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZGFzaCw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc30uZmlsbHtzdHJva2UtZGFzaGFycmF5OjM2MDtzdHJva2UtZGFzaG9mZnNldDowOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7LXdlYmtpdC1hbmltYXRpb246MS40cyBlYXNlLW91dCBmaWxsO2FuaW1hdGlvbjoxLjRzIGVhc2Utb3V0IGZpbGw7c3Ryb2tlOiMxYjlhNTl9QC13ZWJraXQta2V5ZnJhbWVzIGNvbG9yc3swJSwxMDAle3N0cm9rZTojNDI4NWY0fTI1JXtzdHJva2U6I2RlM2UzNX01MCV7c3Ryb2tlOiNmN2MyMjN9NzUle3N0cm9rZTojMWI5YTU5fX1Aa2V5ZnJhbWVzIGNvbG9yc3swJSwxMDAle3N0cm9rZTojNDI4NWY0fTI1JXtzdHJva2U6I2RlM2UzNX01MCV7c3Ryb2tlOiNmN2MyMjN9NzUle3N0cm9rZTojMWI5YTU5fX1ALXdlYmtpdC1rZXlmcmFtZXMgZGFzaHswJXtzdHJva2UtZGFzaG9mZnNldDoxODd9NTAle3N0cm9rZS1kYXNob2Zmc2V0OjQ2Ljc1Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjE4Nzstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUBrZXlmcmFtZXMgZGFzaHswJXtzdHJva2UtZGFzaG9mZnNldDoxODd9NTAle3N0cm9rZS1kYXNob2Zmc2V0OjQ2Ljc1Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjE4Nzstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBmaWxsezAle3N0cm9rZS1kYXNob2Zmc2V0OjM2MH04MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MTgwOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NTBkZWcpfX1Aa2V5ZnJhbWVzIGZpbGx7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MzYwfTgwJXtzdHJva2UtZGFzaG9mZnNldDoxODA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDUwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyl9fS5nZy1zcGlubmVyLWNvbnRhaW5lcnt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6Y2FsYyg1MCUgLSAyMHB4KTt0b3A6LTU2cHg7ei1pbmRleDo5O2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtib3JkZXItcmFkaXVzOjUwJTtib3gtc2hhZG93OjAgNHB4IDZweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDRweCA1cHggcmdiYSgwLDAsMCwuMSl9LmdnLWhpbnQtY29udGFpbmVye2hlaWdodDo0MHB4O3BhZGRpbmctbGVmdDo4cHg7cGFkZGluZy1yaWdodDo4cHg7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItbGlnaHQpO2JvcmRlci1yYWRpdXM6NDBweDtib3gtc2hhZG93OjAgNHB4IDZweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDRweCA1cHggcmdiYSgwLDAsMCwuMSk7bWFyZ2luOjB9Lmljb257aGVpZ2h0OjIwcHg7d2lkdGg6MjBweDtiYWNrZ3JvdW5kOjAgMDtjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFyayl9LnRleHR7Zm9udC1zaXplOjFlbTtjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFyayl9LmdnLWhpbnQtd3JhcHBlcnt3aWR0aDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMTJweDt6LWluZGV4Ojg7dGV4dC1hbGlnbjpjZW50ZXJ9YF0sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdmaWxsQW5pbScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gZmlsbCcsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogMTgwLFxuICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiA5MCxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyNERTNFMzUnXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMzYwbXMgZWFzZS1vdXQnKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBzdGF0ZSgnZmlsbCcsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheSc6IDMxNSxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyMxQjlBNTknLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICldXG4gICAgICAgICksXG4gICAgICAgIHRyaWdnZXIoJ3NwaW5uZXJBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKCdoaW50QW5pbScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTgwcHgpJyB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcxNTBtcyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9KSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgd2lkdGg6ICcxMTJweCcgfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMTI1bXMgZWFzZS1vdXQnLCBzdHlsZSh7IHdpZHRoOiAnNDBweCcgfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgICApLFxuICAgIF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFJlZnJlc2ggaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQE91dHB1dCgpIG9uUHJvZ3Jlc3NDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8Q29udGVudFJlZnJlc2g+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBWaWV3Q2hpbGQoJ3NwaW5uZXInKSBzcGlubmVyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50OiBFbGVtZW50UmVmO1xuICAgIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICBwdWxsaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcmVmcmVzaGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNwaW5uZXJWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICB0cmFuc2xhdGVZOiBudW1iZXIgPSAwO1xuICAgIGhpbnRWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgaGludFRleHQ6IHN0cmluZyA9ICduZXcgcG9zdHMnO1xuXG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICd0b3VjaGVuZCcpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvdWNoZW5kJywgcmVzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnB1bGxpbmcgJiYgIXRoaXMucmVmcmVzaGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUHJvZ3Jlc3MoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgc3BpblJlZnJlc2hlcigpIHtcbiAgICAgICAgdGhpcy5zcGlubmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKDE2OHB4KWApO1xuICAgICAgICB0aGlzLnJlZnJlc2hpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnB1bGxpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkb1JlZnJlc2goZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zcGluUmVmcmVzaGVyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoIGhlcmUnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY29tcGxldGUoKTtcbiAgICAgICAgfSwgMTQwKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICB9XG5cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlUmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25QdWxsKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucHVsbGluZyA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBldmVudC50YXJnZXQuZ2V0UHJvZ3Jlc3MoKTtcbiAgICAgICAgaWYgKHByb2dyZXNzIDw9IDEpIHtcbiAgICAgICAgICAgIHRoaXMub25Qcm9ncmVzc0NoYW5nZWQuZW1pdChwcm9ncmVzcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVByb2dyZXNzKHByb2dyZXNzKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdGFydCgpIHtcbiAgICAgICAgLy8gdGhpcy5jaGFuZ2VQcm9ncmVzcygwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlUHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVkgPSAxMTIgKiBwcm9ncmVzcztcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlWSA9IHRoaXMudHJhbnNsYXRlWTtcbiAgICAgICAgY29uc29sZS5sb2coYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfXB4KWApO1xuICAgICAgICAvLyB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3Bpbm5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfSlgKVxuICAgICAgICB0aGlzLnNwaW5uZXIubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfXB4KWApO1xuICAgICAgICAvLyB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgZmlsbEFuaW1hdGlvbkRvbmUoZXZlbnQpIHtcblxuICAgICAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2ZpbGwnICYmIGV2ZW50LmZyb21TdGF0ZSA9PT0gJ3NwaW5uaW5nJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbGxBbmltIGNvbXBsZXRlJywgZXZlbnQpO1xuXG4gICAgICAgICAgICB0aGlzLnNwaW5uZXJWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3Bpbm5lckhpZGRlbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlICE9PSAndm9pZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoIGNvbXBsZXRlJywgZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5zcGlubmVyVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNob3dIaW50KCkge1xuICAgICAgICB0aGlzLmhpbnRWaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkhpbnRDbGlja2VkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb24gaGludCBjbGlja2VkJyk7XG4gICAgICAgIHRoaXMuaGludFZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwb3N0SGludChldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgIGlmICghZXZlbnQuZnJvbVN0YXRlICYmIGV2ZW50LnRvU3RhdGUgPT0gJ3ZvaWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgICAgIHRoaXMuc3BpblJlZnJlc2hlcigpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIl19