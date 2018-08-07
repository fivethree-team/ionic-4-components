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
                selector: 'gg-item-progress',
                template: `
    <ion-item [ngClass]="{'loading': loading}">
    <ng-content></ng-content>
  </ion-item>
  <gg-progress-bar (onComplete)="onComplete($event)" #progress [global]="false"></gg-progress-bar>

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcm9ncmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nLyIsInNvdXJjZXMiOlsibGliL2l0ZW0tcHJvZ3Jlc3MvaXRlbS1wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQWVyRSxNQUFNO0lBU0Y7dUJBUG1CLEtBQUs7aUNBR2tDLElBQUksWUFBWSxFQUFnQjt5QkFDeEMsSUFBSSxZQUFZLEVBQWdCO0tBSWpGOzs7O0lBRUQsUUFBUTtLQUNQOzs7O0lBRUQsYUFBYTtRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDakM7Ozs7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQzFCOzs7O0lBRUQsUUFBUTtRQUNKLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM1QjtLQUNKOzs7OztJQUVELFVBQVUsQ0FBQyxVQUFtQjtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JDOzs7WUFwREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7O0tBTVQ7eUJBQ1EscVFBQXFRO2FBRWpSOzs7Ozt1QkFLSSxTQUFTLFNBQUMsVUFBVTtnQ0FDcEIsTUFBTTt3QkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gJy4uL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnLWl0ZW0tcHJvZ3Jlc3MnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGlvbi1pdGVtIFtuZ0NsYXNzXT1cInsnbG9hZGluZyc6IGxvYWRpbmd9XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2lvbi1pdGVtPlxuICA8Z2ctcHJvZ3Jlc3MtYmFyIChvbkNvbXBsZXRlKT1cIm9uQ29tcGxldGUoJGV2ZW50KVwiICNwcm9ncmVzcyBbZ2xvYmFsXT1cImZhbHNlXCI+PC9nZy1wcm9ncmVzcy1iYXI+XG5cbiAgICBgLFxuICAgIHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjowO3dpZHRoOmNhbGMoMTAwJSl9aW9uLWl0ZW17YmFja2dyb3VuZDojZmZmfS5sb2FkaW5ne21hcmdpbjo0cHg7d2lkdGg6Y2FsYygxMDAlIC0gOHB4KTt0cmFuc2l0aW9uOi4ycztib3JkZXItcmFkaXVzOjhweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2JveC1zaGFkb3c6MCA0cHggMTZweCByZ2JhKDAsMCwwLC4xMil9YF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgSXRlbVByb2dyZXNzIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoJ3Byb2dyZXNzJykgcHJvZ3Jlc3M6IFByb2dyZXNzQmFyO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2hDb21wbGV0ZTogRXZlbnRFbWl0dGVyPEl0ZW1Qcm9ncmVzcz4gPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1Qcm9ncmVzcz4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8SXRlbVByb2dyZXNzPiA9IG5ldyBFdmVudEVtaXR0ZXI8SXRlbVByb2dyZXNzPigpO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICB0b2dnbGVTcGlubmVyKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnRvZ2dsZVNwaW5uZXIoKTtcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2dyZXNzLmxvYWQoKTtcbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnVubG9hZCgpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlKGlzQ29tcGxldGU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uIGNvbXBsZXRlJywgaXNDb21wbGV0ZSk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaENvbXBsZXRlLmVtaXQodGhpcyk7XG4gICAgfVxufVxuIl19