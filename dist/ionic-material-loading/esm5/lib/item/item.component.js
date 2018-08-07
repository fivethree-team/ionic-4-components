/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { ProgressBar } from '../progress-bar/progress-bar.component';
var ItemProgress = /** @class */ (function () {
    function ItemProgress() {
        this.loading = false;
        this.onRefreshComplete = new EventEmitter();
        this.onRefresh = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ItemProgress.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ItemProgress.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        this.loading = !this.loading;
        this.progress.toggleSpinner();
    };
    /**
     * @return {?}
     */
    ItemProgress.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.progress.load();
    };
    /**
     * @return {?}
     */
    ItemProgress.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
        this.progress.unload();
    };
    /**
     * @return {?}
     */
    ItemProgress.prototype.complete = /**
     * @return {?}
     */
    function () {
        if (this.loading) {
            this.progress.complete();
        }
    };
    /**
     * @param {?} isComplete
     * @return {?}
     */
    ItemProgress.prototype.onComplete = /**
     * @param {?} isComplete
     * @return {?}
     */
    function (isComplete) {
        console.log('on complete', isComplete);
        this.loading = false;
        this.onRefreshComplete.emit(this);
    };
    ItemProgress.decorators = [
        { type: Component, args: [{
                    selector: 'gg-loading-item',
                    template: "\n    <ion-item [ngClass]=\"{'loading': loading}\">\n    <ng-content></ng-content>\n  </ion-item>\n  <gg-loading-progressbar (onComplete)=\"onComplete($event)\" #progress [global]=\"false\"></gg-loading-progressbar>\n\n    ",
                    styles: [":host{position:relative;display:block;margin:0;width:calc(100%)}ion-item{background:#fff}.loading{margin:4px;width:calc(100% - 8px);transition:.2s;border-radius:8px;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 4px 16px rgba(0,0,0,.12)}"]
                }] }
    ];
    /** @nocollapse */
    ItemProgress.ctorParameters = function () { return []; };
    ItemProgress.propDecorators = {
        progress: [{ type: ViewChild, args: ['progress',] }],
        onRefreshComplete: [{ type: Output }],
        onRefresh: [{ type: Output }]
    };
    return ItemProgress;
}());
export { ItemProgress };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1tYXRlcmlhbC1sb2FkaW5nLyIsInNvdXJjZXMiOlsibGliL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7SUF3QmpFO3VCQVBtQixLQUFLO2lDQUdrQyxJQUFJLFlBQVksRUFBZ0I7eUJBQ3hDLElBQUksWUFBWSxFQUFnQjtLQUlqRjs7OztJQUVELCtCQUFROzs7SUFBUjtLQUNDOzs7O0lBRUQsb0NBQWE7OztJQUFiO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUNqQzs7OztJQUVELDJCQUFJOzs7SUFBSjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFRCw2QkFBTTs7O0lBQU47UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQzFCOzs7O0lBRUQsK0JBQVE7OztJQUFSO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzVCO0tBQ0o7Ozs7O0lBRUQsaUNBQVU7Ozs7SUFBVixVQUFXLFVBQW1CO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckM7O2dCQXBESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGlPQU1UOzZCQUNRLHFRQUFxUTtpQkFFalI7Ozs7OzJCQUtJLFNBQVMsU0FBQyxVQUFVO29DQUNwQixNQUFNOzRCQUNOLE1BQU07O3VCQXZCWDs7U0FpQmEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tICcuLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZy1sb2FkaW5nLWl0ZW0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGlvbi1pdGVtIFtuZ0NsYXNzXT1cInsnbG9hZGluZyc6IGxvYWRpbmd9XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2lvbi1pdGVtPlxuICA8Z2ctbG9hZGluZy1wcm9ncmVzc2JhciAob25Db21wbGV0ZSk9XCJvbkNvbXBsZXRlKCRldmVudClcIiAjcHJvZ3Jlc3MgW2dsb2JhbF09XCJmYWxzZVwiPjwvZ2ctbG9hZGluZy1wcm9ncmVzc2Jhcj5cblxuICAgIGAsXG4gICAgc3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7d2lkdGg6Y2FsYygxMDAlKX1pb24taXRlbXtiYWNrZ3JvdW5kOiNmZmZ9LmxvYWRpbmd7bWFyZ2luOjRweDt3aWR0aDpjYWxjKDEwMCUgLSA4cHgpO3RyYW5zaXRpb246LjJzO2JvcmRlci1yYWRpdXM6OHB4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7Ym94LXNoYWRvdzowIDRweCAxNnB4IHJnYmEoMCwwLDAsLjEyKX1gXSxcblxufSlcbmV4cG9ydCBjbGFzcyBJdGVtUHJvZ3Jlc3MgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQFZpZXdDaGlsZCgncHJvZ3Jlc3MnKSBwcm9ncmVzczogUHJvZ3Jlc3NCYXI7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaENvbXBsZXRlOiBFdmVudEVtaXR0ZXI8SXRlbVByb2dyZXNzPiA9IG5ldyBFdmVudEVtaXR0ZXI8SXRlbVByb2dyZXNzPigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxJdGVtUHJvZ3Jlc3M+ID0gbmV3IEV2ZW50RW1pdHRlcjxJdGVtUHJvZ3Jlc3M+KCk7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MudG9nZ2xlU3Bpbm5lcigpO1xuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MubG9hZCgpO1xuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MudW5sb2FkKCk7XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29tcGxldGUoaXNDb21wbGV0ZTogYm9vbGVhbikge1xuICAgICAgICBjb25zb2xlLmxvZygnb24gY29tcGxldGUnLCBpc0NvbXBsZXRlKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25SZWZyZXNoQ29tcGxldGUuZW1pdCh0aGlzKTtcbiAgICB9XG59XG4iXX0=