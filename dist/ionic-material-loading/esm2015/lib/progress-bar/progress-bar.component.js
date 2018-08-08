/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";
import { LoadingService } from '../loading.service';
export class ProgressBar {
    /**
     * @param {?} loadingService
     */
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.loading = false;
        this.global = false;
        this.isComplete = false;
        this.onComplete = new EventEmitter();
        this.onRefresh = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.global) {
            this.loadingService.completeChange.subscribe(isComplete => {
                if (isComplete) {
                    this.complete();
                }
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.global) {
            this.loadingService.completeChange.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    toggleSpinner() {
        this.loading = !this.loading;
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
        if (this.isComplete) {
            this.isComplete = false;
        }
    }
    /**
     * @return {?}
     */
    complete() {
        console.log('set complete');
        this.isComplete = true;
        console.log(this.isComplete);
    }
    /**
     * @param {?} isComplete
     * @return {?}
     */
    fillAnimationComplete(isComplete) {
        if (isComplete) {
            console.log('fill animation complete', isComplete);
            this.onComplete.emit(isComplete);
            this.isComplete = false;
            if (this.global) {
                this.loadingService.unload();
            }
            else {
                this.unload();
            }
        }
    }
}
ProgressBar.decorators = [
    { type: Component, args: [{
                selector: 'gg-loading-progressbar',
                template: `
<div [@progressAnim] *ngIf="(!global && loading) || (global && loadingService.loading)" class="slider">
  <div class="line"></div>
  <div *ngIf="!isComplete" class="subline inc"></div>
  <div *ngIf="isComplete" [@fillAnim] (@fillAnim.done)="fillAnimationComplete(isComplete)" class="subline fill"></div>
  <div *ngIf="!isComplete" class="subline dec"></div>
</div>
    `,
                animations: [
                    trigger('progressAnim', [
                        transition('void => *', [
                            style({ height: '0px' }),
                            animate('250ms ease-out')
                        ]),
                        transition('* => void', [
                            animate('299ms ease-in', style({ height: '0px' }))
                        ])
                    ]),
                    trigger('fillAnim', [
                        transition('void => *', [
                            style({ left: '-5%', width: '5%' }),
                            animate('850ms ease-out', style({ left: '0%', width: '100%' }))
                        ]),
                    ])
                ],
                styles: [`.slider{position:absolute;width:100%;height:5px;overflow-x:hidden;z-index:5000}.line{position:absolute;opacity:.4;width:240%;height:5px;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}.subline{position:absolute;height:5px;background:inherit}.inc{-webkit-animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin;animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin}.dec{-webkit-animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin;animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin}.fill{left:0;width:100%;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}@-webkit-keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@-webkit-keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@-webkit-keyframes colorspin{0%,100%{background-color:#4285f4}25%{background-color:#de3e35}50%{background-color:#f7c223}75%{background-color:#1b9a59}}@keyframes colorspin{0%,100%{background-color:#4285f4}25%{background-color:#de3e35}50%{background-color:#f7c223}75%{background-color:#1b9a59}}`]
            }] }
];
/** @nocollapse */
ProgressBar.ctorParameters = () => [
    { type: LoadingService }
];
ProgressBar.propDecorators = {
    global: [{ type: Input }],
    isComplete: [{ type: Input }],
    onComplete: [{ type: Output }],
    onRefresh: [{ type: Output }],
    bar: [{ type: ViewChild, args: ['bar',] }]
};
if (false) {
    /** @type {?} */
    ProgressBar.prototype.loading;
    /** @type {?} */
    ProgressBar.prototype.global;
    /** @type {?} */
    ProgressBar.prototype.isComplete;
    /** @type {?} */
    ProgressBar.prototype.onComplete;
    /** @type {?} */
    ProgressBar.prototype.onRefresh;
    /** @type {?} */
    ProgressBar.prototype.bar;
    /** @type {?} */
    ProgressBar.prototype.loadingService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLW1hdGVyaWFsLWxvYWRpbmcvIiwic291cmNlcyI6WyJsaWIvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBZ0NwRCxNQUFNOzs7O0lBVUYsWUFBbUIsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO3VCQVI5QixLQUFLO3NCQUNHLEtBQUs7MEJBQ0QsS0FBSzswQkFDVSxJQUFJLFlBQVksRUFBVzt5QkFDeEIsSUFBSSxZQUFZLEVBQWU7S0FLL0U7Ozs7SUFFRCxRQUFRO1FBQ0osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3RELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ2IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNuQjthQUNKLENBQUMsQ0FBQTtTQUNMO0tBQ0o7Ozs7SUFFRCxXQUFXO1FBQ1AsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwRDtLQUNKOzs7O0lBRUQsYUFBYTtRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ2hDOzs7O0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCOzs7O0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQzNCO0tBQ0o7Ozs7SUFFRCxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNoQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxVQUFtQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2hDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2pCO1NBQ0o7S0FDSjs7O1lBM0ZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7S0FPVDtnQkFFRCxVQUFVLEVBQUU7b0JBQ1IsT0FBTyxDQUFDLGNBQWMsRUFBRTt3QkFDcEIsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDcEIsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDOzRCQUN4QixPQUFPLENBQUMsZ0JBQWdCLENBQUM7eUJBQzVCLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDcEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzt5QkFDckQsQ0FBQztxQkFDTCxDQUFDO29CQUNGLE9BQU8sQ0FBQyxVQUFVLEVBQUU7d0JBQ2hCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7NEJBQ3BCLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDOzRCQUNuQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzt5QkFDbEUsQ0FBQztxQkFDTCxDQUFDO2lCQUNMO3lCQWpCUSwreENBQSt4QzthQWtCM3lDOzs7O1lBL0JRLGNBQWM7OztxQkFtQ2xCLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxNQUFNO3dCQUNOLE1BQU07a0JBRU4sU0FBUyxTQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgTG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9sb2FkaW5nLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2ctbG9hZGluZy1wcm9ncmVzc2JhcicsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgW0Bwcm9ncmVzc0FuaW1dICpuZ0lmPVwiKCFnbG9iYWwgJiYgbG9hZGluZykgfHwgKGdsb2JhbCAmJiBsb2FkaW5nU2VydmljZS5sb2FkaW5nKVwiIGNsYXNzPVwic2xpZGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCIhaXNDb21wbGV0ZVwiIGNsYXNzPVwic3VibGluZSBpbmNcIj48L2Rpdj5cbiAgPGRpdiAqbmdJZj1cImlzQ29tcGxldGVcIiBbQGZpbGxBbmltXSAoQGZpbGxBbmltLmRvbmUpPVwiZmlsbEFuaW1hdGlvbkNvbXBsZXRlKGlzQ29tcGxldGUpXCIgY2xhc3M9XCJzdWJsaW5lIGZpbGxcIj48L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIiFpc0NvbXBsZXRlXCIgY2xhc3M9XCJzdWJsaW5lIGRlY1wiPjwvZGl2PlxuPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgLnNsaWRlcntwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDo1cHg7b3ZlcmZsb3cteDpoaWRkZW47ei1pbmRleDo1MDAwfS5saW5le3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6LjQ7d2lkdGg6MjQwJTtoZWlnaHQ6NXB4Oy13ZWJraXQtYW5pbWF0aW9uOjUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzcGluO2FuaW1hdGlvbjo1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc3Bpbn0uc3VibGluZXtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6NXB4O2JhY2tncm91bmQ6aW5oZXJpdH0uaW5jey13ZWJraXQtYW5pbWF0aW9uOjEuNnMgaW5maW5pdGUgaW5jcmVhc2UsNS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnNwaW47YW5pbWF0aW9uOjEuNnMgaW5maW5pdGUgaW5jcmVhc2UsNS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnNwaW59LmRlY3std2Via2l0LWFuaW1hdGlvbjoxLjZzIC40cyBpbmZpbml0ZSBkZWNyZWFzZSw1LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGNvbG9yc3BpbjthbmltYXRpb246MS42cyAuNHMgaW5maW5pdGUgZGVjcmVhc2UsNS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnNwaW59LmZpbGx7bGVmdDowO3dpZHRoOjEwMCU7LXdlYmtpdC1hbmltYXRpb246NS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBjb2xvcnNwaW47YW5pbWF0aW9uOjUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY29sb3JzcGlufUAtd2Via2l0LWtleWZyYW1lcyBpbmNyZWFzZXtmcm9te2xlZnQ6LTUlO3dpZHRoOjUlfXRve2xlZnQ6MTMwJTt3aWR0aDoxMDAlfX1Aa2V5ZnJhbWVzIGluY3JlYXNle2Zyb217bGVmdDotNSU7d2lkdGg6NSV9dG97bGVmdDoxMzAlO3dpZHRoOjEwMCV9fUAtd2Via2l0LWtleWZyYW1lcyBkZWNyZWFzZXtmcm9te2xlZnQ6LTgwJTt3aWR0aDo4MCV9dG97bGVmdDoxMTAlO3dpZHRoOjEwJX19QGtleWZyYW1lcyBkZWNyZWFzZXtmcm9te2xlZnQ6LTgwJTt3aWR0aDo4MCV9dG97bGVmdDoxMTAlO3dpZHRoOjEwJX19QC13ZWJraXQta2V5ZnJhbWVzIGNvbG9yc3BpbnswJSwxMDAle2JhY2tncm91bmQtY29sb3I6IzQyODVmNH0yNSV7YmFja2dyb3VuZC1jb2xvcjojZGUzZTM1fTUwJXtiYWNrZ3JvdW5kLWNvbG9yOiNmN2MyMjN9NzUle2JhY2tncm91bmQtY29sb3I6IzFiOWE1OX19QGtleWZyYW1lcyBjb2xvcnNwaW57MCUsMTAwJXtiYWNrZ3JvdW5kLWNvbG9yOiM0Mjg1ZjR9MjUle2JhY2tncm91bmQtY29sb3I6I2RlM2UzNX01MCV7YmFja2dyb3VuZC1jb2xvcjojZjdjMjIzfTc1JXtiYWNrZ3JvdW5kLWNvbG9yOiMxYjlhNTl9fWBdLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcigncHJvZ3Jlc3NBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyOTltcyBlYXNlLWluJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgbGVmdDogJy01JScsIHdpZHRoOiAnNSUnIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzg1MG1zIGVhc2Utb3V0Jywgc3R5bGUoeyBsZWZ0OiAnMCUnLCB3aWR0aDogJzEwMCUnIH0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBnbG9iYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBpc0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQE91dHB1dCgpIG9uQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8UHJvZ3Jlc3NCYXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxQcm9ncmVzc0Jhcj4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2JhcicpIGJhcjogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2FkaW5nU2VydmljZTogTG9hZGluZ1NlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2xvYmFsKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmNvbXBsZXRlQ2hhbmdlLnN1YnNjcmliZShpc0NvbXBsZXRlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5nbG9iYWwpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuY29tcGxldGVDaGFuZ2UudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5pc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0IGNvbXBsZXRlJyk7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNDb21wbGV0ZSk7XG4gICAgfVxuXG4gICAgZmlsbEFuaW1hdGlvbkNvbXBsZXRlKGlzQ29tcGxldGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxsIGFuaW1hdGlvbiBjb21wbGV0ZScsIGlzQ29tcGxldGUpO1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmVtaXQoaXNDb21wbGV0ZSk7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UudW5sb2FkKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudW5sb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=