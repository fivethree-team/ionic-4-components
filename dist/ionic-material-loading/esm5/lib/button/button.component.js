/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ProgressBar } from '../progress-bar/progress-bar.component';
var ButtonFull = /** @class */ (function () {
    function ButtonFull() {
        this.loading = false;
        this.color = 'light';
        this.expand = 'block';
        this.onRefresh = new EventEmitter();
        this.onRefreshComplete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ButtonFull.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ButtonFull.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        this.loading = !this.loading;
        this.progress.toggleSpinner();
        this.onRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    ButtonFull.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.progress.load();
    };
    /**
     * @return {?}
     */
    ButtonFull.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
        this.progress.unload();
    };
    /**
     * @return {?}
     */
    ButtonFull.prototype.complete = /**
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
    ButtonFull.prototype.onComplete = /**
     * @param {?} isComplete
     * @return {?}
     */
    function (isComplete) {
        console.log('on complete', isComplete);
        this.loading = false;
        this.onRefreshComplete.emit(this);
    };
    ButtonFull.decorators = [
        { type: Component, args: [{
                    selector: 'gg-loading-button',
                    template: "\n    <gg-loading-progressbar (onComplete)=\"onComplete($event)\" #progress [global]=\"false\"></gg-loading-progressbar>\n    <ion-button [expand]=\"expand\" [color]=\"color\">\n    <ng-content></ng-content>\n  </ion-button>\n    ",
                    styles: [":host{position:relative;display:block;margin:0 20px;width:calc(100% - 40px)}"]
                }] }
    ];
    /** @nocollapse */
    ButtonFull.ctorParameters = function () { return []; };
    ButtonFull.propDecorators = {
        progress: [{ type: ViewChild, args: ['progress',] }],
        color: [{ type: Input }],
        expand: [{ type: Input }],
        onRefresh: [{ type: Output }],
        onRefreshComplete: [{ type: Output }]
    };
    return ButtonFull;
}());
export { ButtonFull };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLW1hdGVyaWFsLWxvYWRpbmcvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBYyxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7SUF5QmpFO3VCQVRtQixLQUFLO3FCQUdDLE9BQU87c0JBQ04sT0FBTzt5QkFDZSxJQUFJLFlBQVksRUFBRTtpQ0FDVixJQUFJLFlBQVksRUFBRTtLQUl6RTs7OztJQUVELDZCQUFROzs7SUFBUjtLQUNDOzs7O0lBRUQsa0NBQWE7OztJQUFiO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3Qjs7OztJQUVELHlCQUFJOzs7SUFBSjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFRCwyQkFBTTs7O0lBQU47UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQzFCOzs7O0lBRUQsNkJBQVE7OztJQUFSO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzVCO0tBQ0o7Ozs7O0lBRUQsK0JBQVU7Ozs7SUFBVixVQUFXLFVBQW1CO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckM7O2dCQXRESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLHdPQUtUOzZCQUNRLDhFQUE4RTtpQkFFMUY7Ozs7OzJCQUtJLFNBQVMsU0FBQyxVQUFVO3dCQUNwQixLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsTUFBTTtvQ0FDTixNQUFNOztxQkF2Qlg7O1NBZWEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tICcuLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZy1sb2FkaW5nLWJ1dHRvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8Z2ctbG9hZGluZy1wcm9ncmVzc2JhciAob25Db21wbGV0ZSk9XCJvbkNvbXBsZXRlKCRldmVudClcIiAjcHJvZ3Jlc3MgW2dsb2JhbF09XCJmYWxzZVwiPjwvZ2ctbG9hZGluZy1wcm9ncmVzc2Jhcj5cbiAgICA8aW9uLWJ1dHRvbiBbZXhwYW5kXT1cImV4cGFuZFwiIFtjb2xvcl09XCJjb2xvclwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9pb24tYnV0dG9uPlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgMjBweDt3aWR0aDpjYWxjKDEwMCUgLSA0MHB4KX1gXSxcblxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25GdWxsIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoJ3Byb2dyZXNzJykgcHJvZ3Jlc3M6IFByb2dyZXNzQmFyO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnbGlnaHQnO1xuICAgIEBJbnB1dCgpIGV4cGFuZDogc3RyaW5nID0gJ2Jsb2NrJztcbiAgICBAT3V0cHV0KCkgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8QnV0dG9uRnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uUmVmcmVzaENvbXBsZXRlOiBFdmVudEVtaXR0ZXI8QnV0dG9uRnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHRvZ2dsZVNwaW5uZXIoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MudG9nZ2xlU3Bpbm5lcigpO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MubG9hZCgpO1xuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MudW5sb2FkKCk7XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29tcGxldGUoaXNDb21wbGV0ZTogYm9vbGVhbikge1xuICAgICAgICBjb25zb2xlLmxvZygnb24gY29tcGxldGUnLCBpc0NvbXBsZXRlKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25SZWZyZXNoQ29tcGxldGUuZW1pdCh0aGlzKTtcbiAgICB9XG59XG4iXX0=