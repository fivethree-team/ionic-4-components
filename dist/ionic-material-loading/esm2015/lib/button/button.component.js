/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ProgressBar } from '../progress-bar/progress-bar.component';
export class ButtonFull {
    constructor() {
        this.loading = false;
        this.color = 'light';
        this.expand = 'block';
        this.onRefresh = new EventEmitter();
        this.onRefreshComplete = new EventEmitter();
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
        this.onRefresh.emit(this);
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
ButtonFull.decorators = [
    { type: Component, args: [{
                selector: 'gg-loading-button',
                template: `
    <gg-loading-progressbar (onComplete)="onComplete($event)" #progress [global]="false"></gg-loading-progressbar>
    <ion-button [expand]="expand" [color]="color">
    <ng-content></ng-content>
  </ion-button>
    `,
                styles: [`:host{position:relative;display:block;margin:0 20px;width:calc(100% - 40px)}`]
            }] }
];
/** @nocollapse */
ButtonFull.ctorParameters = () => [];
ButtonFull.propDecorators = {
    progress: [{ type: ViewChild, args: ['progress',] }],
    color: [{ type: Input }],
    expand: [{ type: Input }],
    onRefresh: [{ type: Output }],
    onRefreshComplete: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ButtonFull.prototype.loading;
    /** @type {?} */
    ButtonFull.prototype.progress;
    /** @type {?} */
    ButtonFull.prototype.color;
    /** @type {?} */
    ButtonFull.prototype.expand;
    /** @type {?} */
    ButtonFull.prototype.onRefresh;
    /** @type {?} */
    ButtonFull.prototype.onRefreshComplete;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLW1hdGVyaWFsLWxvYWRpbmcvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBYyxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQWNyRSxNQUFNO0lBV0Y7dUJBVG1CLEtBQUs7cUJBR0MsT0FBTztzQkFDTixPQUFPO3lCQUNlLElBQUksWUFBWSxFQUFFO2lDQUNWLElBQUksWUFBWSxFQUFFO0tBSXpFOzs7O0lBRUQsUUFBUTtLQUNQOzs7O0lBRUQsYUFBYTtRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0I7Ozs7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQzFCOzs7O0lBRUQsUUFBUTtRQUNKLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM1QjtLQUNKOzs7OztJQUVELFVBQVUsQ0FBQyxVQUFtQjtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JDOzs7WUF0REosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7S0FLVDt5QkFDUSw4RUFBOEU7YUFFMUY7Ozs7O3VCQUtJLFNBQVMsU0FBQyxVQUFVO29CQUNwQixLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsTUFBTTtnQ0FDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gJy4uL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWxvYWRpbmctYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxnZy1sb2FkaW5nLXByb2dyZXNzYmFyIChvbkNvbXBsZXRlKT1cIm9uQ29tcGxldGUoJGV2ZW50KVwiICNwcm9ncmVzcyBbZ2xvYmFsXT1cImZhbHNlXCI+PC9nZy1sb2FkaW5nLXByb2dyZXNzYmFyPlxuICAgIDxpb24tYnV0dG9uIFtleHBhbmRdPVwiZXhwYW5kXCIgW2NvbG9yXT1cImNvbG9yXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2lvbi1idXR0b24+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazttYXJnaW46MCAyMHB4O3dpZHRoOmNhbGMoMTAwJSAtIDQwcHgpfWBdLFxuXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkZ1bGwgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQFZpZXdDaGlsZCgncHJvZ3Jlc3MnKSBwcm9ncmVzczogUHJvZ3Jlc3NCYXI7XG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICdsaWdodCc7XG4gICAgQElucHV0KCkgZXhwYW5kOiBzdHJpbmcgPSAnYmxvY2snO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxCdXR0b25GdWxsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxCdXR0b25GdWxsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICAgICAgdGhpcy5wcm9ncmVzcy50b2dnbGVTcGlubmVyKCk7XG4gICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcy5sb2FkKCk7XG4gICAgfVxuXG4gICAgdW5sb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcy51bmxvYWQoKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db21wbGV0ZShpc0NvbXBsZXRlOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbiBjb21wbGV0ZScsIGlzQ29tcGxldGUpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2hDb21wbGV0ZS5lbWl0KHRoaXMpO1xuICAgIH1cbn1cbiJdfQ==