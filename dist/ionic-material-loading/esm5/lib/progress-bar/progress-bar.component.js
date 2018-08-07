/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";
import { LoadingService } from '../loading.service';
var ProgressBar = /** @class */ (function () {
    function ProgressBar(loadingService) {
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
    ProgressBar.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.global) {
            this.loadingService.completeChange.subscribe(function (isComplete) {
                if (isComplete) {
                    _this.complete();
                }
            });
        }
    };
    /**
     * @return {?}
     */
    ProgressBar.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.global) {
            this.loadingService.completeChange.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    ProgressBar.prototype.toggleSpinner = /**
     * @return {?}
     */
    function () {
        this.loading = !this.loading;
    };
    /**
     * @return {?}
     */
    ProgressBar.prototype.load = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.onRefresh.emit(this);
    };
    /**
     * @return {?}
     */
    ProgressBar.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.loading = false;
        if (this.isComplete) {
            this.isComplete = false;
        }
    };
    /**
     * @return {?}
     */
    ProgressBar.prototype.complete = /**
     * @return {?}
     */
    function () {
        console.log('set complete');
        this.isComplete = true;
        console.log(this.isComplete);
    };
    /**
     * @param {?} isComplete
     * @return {?}
     */
    ProgressBar.prototype.fillAnimationComplete = /**
     * @param {?} isComplete
     * @return {?}
     */
    function (isComplete) {
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
    };
    ProgressBar.decorators = [
        { type: Component, args: [{
                    selector: 'gg-loading-progressbar',
                    template: "\n<div [@progressAnim] *ngIf=\"(!global && loading) || (global && loadingService.loading)\" class=\"slider\">\n  <div *ngIf=\"!isComplete\" class=\"line\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline inc\"></div>\n  <div [@fillAnim] (@fillAnim.done)=\"fillAnimationComplete(isComplete)\" *ngIf=\"isComplete\" class=\"subline fill\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline dec\"></div>\n</div>\n    ",
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
                    styles: [".slider{position:absolute;width:100%;height:5px;overflow-x:hidden;z-index:5000}.line{position:absolute;opacity:.4;background:var(--ion-color-primary);width:150%;height:5px}.subline{position:absolute;background:var(--ion-color-primary);height:5px}.inc{-webkit-animation:1.6s infinite increase;animation:1.6s infinite increase}.dec{-webkit-animation:1.6s .4s infinite decrease;animation:1.6s .4s infinite decrease}.fill{left:0;width:100%}@-webkit-keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@-webkit-keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}"]
                }] }
    ];
    /** @nocollapse */
    ProgressBar.ctorParameters = function () { return [
        { type: LoadingService }
    ]; };
    ProgressBar.propDecorators = {
        global: [{ type: Input }],
        isComplete: [{ type: Input }],
        onComplete: [{ type: Output }],
        onRefresh: [{ type: Output }],
        bar: [{ type: ViewChild, args: ['bar',] }]
    };
    return ProgressBar;
}());
export { ProgressBar };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLW1hdGVyaWFsLWxvYWRpbmcvIiwic291cmNlcyI6WyJsaWIvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQTBDaEQscUJBQW1CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjt1QkFSOUIsS0FBSztzQkFDRyxLQUFLOzBCQUNELEtBQUs7MEJBQ1UsSUFBSSxZQUFZLEVBQVc7eUJBQ3hCLElBQUksWUFBWSxFQUFlO0tBSy9FOzs7O0lBRUQsOEJBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFQRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFVBQVU7Z0JBQ25ELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ2IsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNuQjthQUNKLENBQUMsQ0FBQTtTQUNMO0tBQ0o7Ozs7SUFFRCxpQ0FBVzs7O0lBQVg7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BEO0tBQ0o7Ozs7SUFFRCxtQ0FBYTs7O0lBQWI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNoQzs7OztJQUVELDBCQUFJOzs7SUFBSjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCOzs7O0lBRUQsNEJBQU07OztJQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDM0I7S0FDSjs7OztJQUVELDhCQUFROzs7SUFBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDaEM7Ozs7O0lBRUQsMkNBQXFCOzs7O0lBQXJCLFVBQXNCLFVBQW1CO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDaEM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDakI7U0FDSjtLQUNKOztnQkEzRkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSxxYUFPVDtvQkFFRCxVQUFVLEVBQUU7d0JBQ1IsT0FBTyxDQUFDLGNBQWMsRUFBRTs0QkFDcEIsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDcEIsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2dDQUN4QixPQUFPLENBQUMsZ0JBQWdCLENBQUM7NkJBQzVCLENBQUM7NEJBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDcEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzs2QkFDckQsQ0FBQzt5QkFDTCxDQUFDO3dCQUNGLE9BQU8sQ0FBQyxVQUFVLEVBQUU7NEJBQ2hCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3BCLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2dDQUNuQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzs2QkFDbEUsQ0FBQzt5QkFDTCxDQUFDO3FCQUNMOzZCQWpCUSx3dEJBQXd0QjtpQkFrQnB1Qjs7OztnQkEvQlEsY0FBYzs7O3lCQW1DbEIsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLE1BQU07NEJBQ04sTUFBTTtzQkFFTixTQUFTLFNBQUMsS0FBSzs7c0JBMUNwQjs7U0FrQ2EsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gJy4uL2xvYWRpbmcuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZy1sb2FkaW5nLXByb2dyZXNzYmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBbQHByb2dyZXNzQW5pbV0gKm5nSWY9XCIoIWdsb2JhbCAmJiBsb2FkaW5nKSB8fCAoZ2xvYmFsICYmIGxvYWRpbmdTZXJ2aWNlLmxvYWRpbmcpXCIgY2xhc3M9XCJzbGlkZXJcIj5cbiAgPGRpdiAqbmdJZj1cIiFpc0NvbXBsZXRlXCIgY2xhc3M9XCJsaW5lXCI+PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCIhaXNDb21wbGV0ZVwiIGNsYXNzPVwic3VibGluZSBpbmNcIj48L2Rpdj5cbiAgPGRpdiBbQGZpbGxBbmltXSAoQGZpbGxBbmltLmRvbmUpPVwiZmlsbEFuaW1hdGlvbkNvbXBsZXRlKGlzQ29tcGxldGUpXCIgKm5nSWY9XCJpc0NvbXBsZXRlXCIgY2xhc3M9XCJzdWJsaW5lIGZpbGxcIj48L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIiFpc0NvbXBsZXRlXCIgY2xhc3M9XCJzdWJsaW5lIGRlY1wiPjwvZGl2PlxuPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgLnNsaWRlcntwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDo1cHg7b3ZlcmZsb3cteDpoaWRkZW47ei1pbmRleDo1MDAwfS5saW5le3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6LjQ7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7d2lkdGg6MTUwJTtoZWlnaHQ6NXB4fS5zdWJsaW5le3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO2hlaWdodDo1cHh9LmluY3std2Via2l0LWFuaW1hdGlvbjoxLjZzIGluZmluaXRlIGluY3JlYXNlO2FuaW1hdGlvbjoxLjZzIGluZmluaXRlIGluY3JlYXNlfS5kZWN7LXdlYmtpdC1hbmltYXRpb246MS42cyAuNHMgaW5maW5pdGUgZGVjcmVhc2U7YW5pbWF0aW9uOjEuNnMgLjRzIGluZmluaXRlIGRlY3JlYXNlfS5maWxse2xlZnQ6MDt3aWR0aDoxMDAlfUAtd2Via2l0LWtleWZyYW1lcyBpbmNyZWFzZXtmcm9te2xlZnQ6LTUlO3dpZHRoOjUlfXRve2xlZnQ6MTMwJTt3aWR0aDoxMDAlfX1Aa2V5ZnJhbWVzIGluY3JlYXNle2Zyb217bGVmdDotNSU7d2lkdGg6NSV9dG97bGVmdDoxMzAlO3dpZHRoOjEwMCV9fUAtd2Via2l0LWtleWZyYW1lcyBkZWNyZWFzZXtmcm9te2xlZnQ6LTgwJTt3aWR0aDo4MCV9dG97bGVmdDoxMTAlO3dpZHRoOjEwJX19QGtleWZyYW1lcyBkZWNyZWFzZXtmcm9te2xlZnQ6LTgwJTt3aWR0aDo4MCV9dG97bGVmdDoxMTAlO3dpZHRoOjEwJX19YF0sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdwcm9ncmVzc0FuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0JylcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI5OW1zIGVhc2UtaW4nLCBzdHlsZSh7IGhlaWdodDogJzBweCcgfSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJpZ2dlcignZmlsbEFuaW0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBsZWZ0OiAnLTUlJywgd2lkdGg6ICc1JScgfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnODUwbXMgZWFzZS1vdXQnLCBzdHlsZSh7IGxlZnQ6ICcwJScsIHdpZHRoOiAnMTAwJScgfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGdsb2JhbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGlzQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAT3V0cHV0KCkgb25Db21wbGV0ZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBPdXRwdXQoKSBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxQcm9ncmVzc0Jhcj4gPSBuZXcgRXZlbnRFbWl0dGVyPFByb2dyZXNzQmFyPigpO1xuXG4gICAgQFZpZXdDaGlsZCgnYmFyJykgYmFyOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGxvYWRpbmdTZXJ2aWNlOiBMb2FkaW5nU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5nbG9iYWwpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuY29tcGxldGVDaGFuZ2Uuc3Vic2NyaWJlKGlzQ29tcGxldGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmdsb2JhbCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5jb21wbGV0ZUNoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXQgY29tcGxldGUnKTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0NvbXBsZXRlKTtcbiAgICB9XG5cbiAgICBmaWxsQW5pbWF0aW9uQ29tcGxldGUoaXNDb21wbGV0ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbGwgYW5pbWF0aW9uIGNvbXBsZXRlJywgaXNDb21wbGV0ZSk7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUuZW1pdChpc0NvbXBsZXRlKTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS51bmxvYWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bmxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==