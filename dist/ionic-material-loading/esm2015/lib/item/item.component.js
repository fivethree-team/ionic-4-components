/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { ProgressBar } from '../progress-bar/progress-bar.component';
export class ItemProgress {
    constructor() {
        this.loading = false;
        this.onRefreshComplete = new EventEmitter();
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
        this.loading = !this.loading;
        this.progress.toggleSpinner();
    }
    /**
     * @return {?}
     */
    load() {
        this.loading = true;
        this.progress.load();
    }
    /**
     * @return {?}
     */
    unload() {
        this.loading = false;
        this.progress.unload();
    }
    /**
     * @return {?}
     */
    complete() {
        if (this.loading) {
            this.progress.complete();
        }
    }
    /**
     * @param {?} isComplete
     * @return {?}
     */
    onComplete(isComplete) {
        console.log('on complete', isComplete);
        this.loading = false;
        this.onRefreshComplete.emit(this);
    }
}
ItemProgress.decorators = [
    { type: Component, args: [{
                selector: 'gg-loading-item',
                template: `
    <ion-item [ngClass]="{'loading': loading}">
    <ng-content></ng-content>
  </ion-item>
  <gg-loading-progressbar (onComplete)="onComplete($event)" #progress [global]="false"></gg-loading-progressbar>

    `,
                styles: [`:host{position:relative;display:block;margin:0;width:calc(100%)}ion-item{background:#fff}.loading{margin:4px;width:calc(100% - 8px);transition:.2s;border-radius:8px;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 4px 16px rgba(0,0,0,.12)}`]
            }] }
];
/** @nocollapse */
ItemProgress.ctorParameters = () => [];
ItemProgress.propDecorators = {
    progress: [{ type: ViewChild, args: ['progress',] }],
    onRefreshComplete: [{ type: Output }],
    onRefresh: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ItemProgress.prototype.loading;
    /** @type {?} */
    ItemProgress.prototype.progress;
    /** @type {?} */
    ItemProgress.prototype.onRefreshComplete;
    /** @type {?} */
    ItemProgress.prototype.onRefresh;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nLyIsInNvdXJjZXMiOlsibGliL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQWVyRSxNQUFNO0lBU0Y7dUJBUG1CLEtBQUs7aUNBR2tDLElBQUksWUFBWSxFQUFnQjt5QkFDeEMsSUFBSSxZQUFZLEVBQWdCO0tBSWpGOzs7O0lBRUQsUUFBUTtLQUNQOzs7O0lBRUQsYUFBYTtRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDakM7Ozs7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQzFCOzs7O0lBRUQsUUFBUTtRQUNKLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM1QjtLQUNKOzs7OztJQUVELFVBQVUsQ0FBQyxVQUFtQjtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JDOzs7WUFwREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7O0tBTVQ7eUJBQ1EscVFBQXFRO2FBRWpSOzs7Ozt1QkFLSSxTQUFTLFNBQUMsVUFBVTtnQ0FDcEIsTUFBTTt3QkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gJy4uL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctaXRlbScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aW9uLWl0ZW0gW25nQ2xhc3NdPVwieydsb2FkaW5nJzogbG9hZGluZ31cIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvaW9uLWl0ZW0+XG4gIDxnZy1sb2FkaW5nLXByb2dyZXNzYmFyIChvbkNvbXBsZXRlKT1cIm9uQ29tcGxldGUoJGV2ZW50KVwiICNwcm9ncmVzcyBbZ2xvYmFsXT1cImZhbHNlXCI+PC9nZy1sb2FkaW5nLXByb2dyZXNzYmFyPlxuXG4gICAgYCxcbiAgICBzdHlsZXM6IFtgOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazttYXJnaW46MDt3aWR0aDpjYWxjKDEwMCUpfWlvbi1pdGVte2JhY2tncm91bmQ6I2ZmZn0ubG9hZGluZ3ttYXJnaW46NHB4O3dpZHRoOmNhbGMoMTAwJSAtIDhweCk7dHJhbnNpdGlvbjouMnM7Ym9yZGVyLXJhZGl1czo4cHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtib3gtc2hhZG93OjAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMTIpfWBdLFxuXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Qcm9ncmVzcyBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAVmlld0NoaWxkKCdwcm9ncmVzcycpIHByb2dyZXNzOiBQcm9ncmVzc0JhcjtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxJdGVtUHJvZ3Jlc3M+ID0gbmV3IEV2ZW50RW1pdHRlcjxJdGVtUHJvZ3Jlc3M+KCk7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaDogRXZlbnRFbWl0dGVyPEl0ZW1Qcm9ncmVzcz4gPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1Qcm9ncmVzcz4oKTtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICAgICAgdGhpcy5wcm9ncmVzcy50b2dnbGVTcGlubmVyKCk7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcy5sb2FkKCk7XG4gICAgfVxuXG4gICAgdW5sb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcy51bmxvYWQoKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db21wbGV0ZShpc0NvbXBsZXRlOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbiBjb21wbGV0ZScsIGlzQ29tcGxldGUpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2hDb21wbGV0ZS5lbWl0KHRoaXMpO1xuICAgIH1cbn1cbiJdfQ==