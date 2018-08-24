/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class GoogleMapsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    addMarker(lat, lng) {
    }
}
GoogleMapsComponent.decorators = [
    { type: Component, args: [{
                selector: 'fiv-google-maps',
                template: `
    <fiv-google-map-web *ngIf="!isCordova" [apiKey]="apiKey"></fiv-google-map-web>
    <fiv-google-map-native *ngIf="isCordova"></fiv-google-map-native>
  `
            }] }
];
/** @nocollapse */
GoogleMapsComponent.ctorParameters = () => [];
GoogleMapsComponent.propDecorators = {
    isCordova: [{ type: Input }],
    apiKey: [{ type: Input, args: ['apiKey',] }],
    zoom: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GoogleMapsComponent.prototype.isCordova;
    /** @type {?} */
    GoogleMapsComponent.prototype.apiKey;
    /** @type {?} */
    GoogleMapsComponent.prototype.zoom;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZpdmV0aHJlZS9nb29nbGUtbWFwcy8iLCJzb3VyY2VzIjpbImxpYi9nb29nbGUtbWFwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVXpELE1BQU07SUFNSixpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBVyxFQUFFLEdBQVc7S0FDakM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7R0FHVDthQUVGOzs7Ozt3QkFHRSxLQUFLO3FCQUNMLEtBQUssU0FBQyxRQUFRO21CQUNkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJR29vZ2xlTWFwIH0gZnJvbSAnLi9nb29nbGUtbWFwJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtZ29vZ2xlLW1hcHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxmaXYtZ29vZ2xlLW1hcC13ZWIgKm5nSWY9XCIhaXNDb3Jkb3ZhXCIgW2FwaUtleV09XCJhcGlLZXlcIj48L2Zpdi1nb29nbGUtbWFwLXdlYj5cbiAgICA8Zml2LWdvb2dsZS1tYXAtbmF0aXZlICpuZ0lmPVwiaXNDb3Jkb3ZhXCI+PC9maXYtZ29vZ2xlLW1hcC1uYXRpdmU+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSUdvb2dsZU1hcCB7XG5cbiAgQElucHV0KCkgaXNDb3Jkb3ZhOiBib29sZWFuO1xuICBASW5wdXQoJ2FwaUtleScpIGFwaUtleTogc3RyaW5nO1xuICBASW5wdXQoKSB6b29tOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGFkZE1hcmtlcihsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpIHtcbiAgfVxuXG59XG4iXX0=