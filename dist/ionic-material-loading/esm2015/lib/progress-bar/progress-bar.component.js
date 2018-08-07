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
  <div *ngIf="!isComplete" class="line"></div>
  <div *ngIf="!isComplete" class="subline inc"></div>
  <div [@fillAnim] (@fillAnim.done)="fillAnimationComplete(isComplete)" *ngIf="isComplete" class="subline fill"></div>
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
                styles: [`.slider{position:absolute;width:100%;height:5px;overflow-x:hidden;z-index:5000}.line{position:absolute;opacity:.4;background:var(--ion-color-primary);width:150%;height:5px}.subline{position:absolute;background:var(--ion-color-primary);height:5px}.inc{-webkit-animation:1.6s infinite increase;animation:1.6s infinite increase}.dec{-webkit-animation:1.6s .4s infinite decrease;animation:1.6s .4s infinite decrease}.fill{left:0;width:100%}@-webkit-keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@-webkit-keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}`]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLW1hdGVyaWFsLWxvYWRpbmcvIiwic291cmNlcyI6WyJsaWIvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBZ0NwRCxNQUFNOzs7O0lBVUYsWUFBbUIsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO3VCQVI5QixLQUFLO3NCQUNHLEtBQUs7MEJBQ0QsS0FBSzswQkFDVSxJQUFJLFlBQVksRUFBVzt5QkFDeEIsSUFBSSxZQUFZLEVBQWU7S0FLL0U7Ozs7SUFFRCxRQUFRO1FBQ0osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3RELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ2IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNuQjthQUNKLENBQUMsQ0FBQTtTQUNMO0tBQ0o7Ozs7SUFFRCxXQUFXO1FBQ1AsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwRDtLQUNKOzs7O0lBRUQsYUFBYTtRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ2hDOzs7O0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCOzs7O0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQzNCO0tBQ0o7Ozs7SUFFRCxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNoQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxVQUFtQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2hDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2pCO1NBQ0o7S0FDSjs7O1lBM0ZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7S0FPVDtnQkFFRCxVQUFVLEVBQUU7b0JBQ1IsT0FBTyxDQUFDLGNBQWMsRUFBRTt3QkFDcEIsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDcEIsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDOzRCQUN4QixPQUFPLENBQUMsZ0JBQWdCLENBQUM7eUJBQzVCLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDcEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzt5QkFDckQsQ0FBQztxQkFDTCxDQUFDO29CQUNGLE9BQU8sQ0FBQyxVQUFVLEVBQUU7d0JBQ2hCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7NEJBQ3BCLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDOzRCQUNuQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzt5QkFDbEUsQ0FBQztxQkFDTCxDQUFDO2lCQUNMO3lCQWpCUSx3dEJBQXd0QjthQWtCcHVCOzs7O1lBL0JRLGNBQWM7OztxQkFtQ2xCLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxNQUFNO3dCQUNOLE1BQU07a0JBRU4sU0FBUyxTQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgTG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9sb2FkaW5nLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2ctbG9hZGluZy1wcm9ncmVzc2JhcicsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgW0Bwcm9ncmVzc0FuaW1dICpuZ0lmPVwiKCFnbG9iYWwgJiYgbG9hZGluZykgfHwgKGdsb2JhbCAmJiBsb2FkaW5nU2VydmljZS5sb2FkaW5nKVwiIGNsYXNzPVwic2xpZGVyXCI+XG4gIDxkaXYgKm5nSWY9XCIhaXNDb21wbGV0ZVwiIGNsYXNzPVwibGluZVwiPjwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiIWlzQ29tcGxldGVcIiBjbGFzcz1cInN1YmxpbmUgaW5jXCI+PC9kaXY+XG4gIDxkaXYgW0BmaWxsQW5pbV0gKEBmaWxsQW5pbS5kb25lKT1cImZpbGxBbmltYXRpb25Db21wbGV0ZShpc0NvbXBsZXRlKVwiICpuZ0lmPVwiaXNDb21wbGV0ZVwiIGNsYXNzPVwic3VibGluZSBmaWxsXCI+PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCIhaXNDb21wbGV0ZVwiIGNsYXNzPVwic3VibGluZSBkZWNcIj48L2Rpdj5cbjwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYC5zbGlkZXJ7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6NXB4O292ZXJmbG93LXg6aGlkZGVuO3otaW5kZXg6NTAwMH0ubGluZXtwb3NpdGlvbjphYnNvbHV0ZTtvcGFjaXR5Oi40O2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO3dpZHRoOjE1MCU7aGVpZ2h0OjVweH0uc3VibGluZXtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtoZWlnaHQ6NXB4fS5pbmN7LXdlYmtpdC1hbmltYXRpb246MS42cyBpbmZpbml0ZSBpbmNyZWFzZTthbmltYXRpb246MS42cyBpbmZpbml0ZSBpbmNyZWFzZX0uZGVjey13ZWJraXQtYW5pbWF0aW9uOjEuNnMgLjRzIGluZmluaXRlIGRlY3JlYXNlO2FuaW1hdGlvbjoxLjZzIC40cyBpbmZpbml0ZSBkZWNyZWFzZX0uZmlsbHtsZWZ0OjA7d2lkdGg6MTAwJX1ALXdlYmtpdC1rZXlmcmFtZXMgaW5jcmVhc2V7ZnJvbXtsZWZ0Oi01JTt3aWR0aDo1JX10b3tsZWZ0OjEzMCU7d2lkdGg6MTAwJX19QGtleWZyYW1lcyBpbmNyZWFzZXtmcm9te2xlZnQ6LTUlO3dpZHRoOjUlfXRve2xlZnQ6MTMwJTt3aWR0aDoxMDAlfX1ALXdlYmtpdC1rZXlmcmFtZXMgZGVjcmVhc2V7ZnJvbXtsZWZ0Oi04MCU7d2lkdGg6ODAlfXRve2xlZnQ6MTEwJTt3aWR0aDoxMCV9fUBrZXlmcmFtZXMgZGVjcmVhc2V7ZnJvbXtsZWZ0Oi04MCU7d2lkdGg6ODAlfXRve2xlZnQ6MTEwJTt3aWR0aDoxMCV9fWBdLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcigncHJvZ3Jlc3NBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyOTltcyBlYXNlLWluJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIHRyaWdnZXIoJ2ZpbGxBbmltJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgbGVmdDogJy01JScsIHdpZHRoOiAnNSUnIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzg1MG1zIGVhc2Utb3V0Jywgc3R5bGUoeyBsZWZ0OiAnMCUnLCB3aWR0aDogJzEwMCUnIH0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBnbG9iYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBpc0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQE91dHB1dCgpIG9uQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8UHJvZ3Jlc3NCYXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxQcm9ncmVzc0Jhcj4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2JhcicpIGJhcjogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2FkaW5nU2VydmljZTogTG9hZGluZ1NlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2xvYmFsKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmNvbXBsZXRlQ2hhbmdlLnN1YnNjcmliZShpc0NvbXBsZXRlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5nbG9iYWwpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuY29tcGxldGVDaGFuZ2UudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5pc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0IGNvbXBsZXRlJyk7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNDb21wbGV0ZSk7XG4gICAgfVxuXG4gICAgZmlsbEFuaW1hdGlvbkNvbXBsZXRlKGlzQ29tcGxldGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxsIGFuaW1hdGlvbiBjb21wbGV0ZScsIGlzQ29tcGxldGUpO1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmVtaXQoaXNDb21wbGV0ZSk7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UudW5sb2FkKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudW5sb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=