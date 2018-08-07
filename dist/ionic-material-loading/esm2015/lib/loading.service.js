/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class LoadingService {
    constructor() {
        this.loading = false;
        this.isComplete = false;
        this.loadChange = new BehaviorSubject(this.loading);
        this.completeChange = new BehaviorSubject(this.isComplete);
    }
    /**
     * @return {?}
     */
    load() {
        this.loading = true;
        this.loadChange.next(this.loading);
    }
    /**
     * @return {?}
     */
    unload() {
        this.loading = false;
        this.loadChange.next(this.loading);
        this.isComplete = false;
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
    complete() {
        console.log('set service complete');
        this.isComplete = true;
        this.completeChange.next(this.isComplete);
    }
}
LoadingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LoadingService.ctorParameters = () => [];
/** @nocollapse */ LoadingService.ngInjectableDef = i0.defineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(); }, token: LoadingService, providedIn: "root" });
if (false) {
    /** @type {?} */
    LoadingService.prototype.loading;
    /** @type {?} */
    LoadingService.prototype.isComplete;
    /** @type {?} */
    LoadingService.prototype.loadChange;
    /** @type {?} */
    LoadingService.prototype.completeChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtbWF0ZXJpYWwtbG9hZGluZy8iLCJzb3VyY2VzIjpbImxpYi9sb2FkaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFNdkMsTUFBTTtJQVFKO3VCQU4wQixLQUFLOzBCQUNGLEtBQUs7MEJBQ1ksSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQzs4QkFDdEMsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUc5RTs7OztJQUVqQixJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztLQUN6Qjs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUM5Qjs7OztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzNDOzs7WUFoQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1NlcnZpY2Uge1xuXG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBsb2FkQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRoaXMubG9hZGluZyk7XG4gIHB1YmxpYyBjb21wbGV0ZUNoYW5nZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0aGlzLmlzQ29tcGxldGUpO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBsb2FkKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5sb2FkQ2hhbmdlLm5leHQodGhpcy5sb2FkaW5nKTtcbiAgfVxuXG4gIHVubG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxvYWRDaGFuZ2UubmV4dCh0aGlzLmxvYWRpbmcpO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlU3Bpbm5lcigpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nO1xuICB9XG5cbiAgY29tcGxldGUoKXtcbiAgICBjb25zb2xlLmxvZygnc2V0IHNlcnZpY2UgY29tcGxldGUnKTtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgIHRoaXMuY29tcGxldGVDaGFuZ2UubmV4dCh0aGlzLmlzQ29tcGxldGUpO1xuICB9XG59XG4iXX0=