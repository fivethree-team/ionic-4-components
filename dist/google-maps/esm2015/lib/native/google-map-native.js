/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
export class GoogleMapNativeComponent {
    constructor() {
        this.zoom = 14;
        this.marker = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('GoogleMapNativeComponent ng on init');
        this.loadMap();
    }
    /**
     * @return {?}
     */
    loadMap() {
        console.log("loading Map");
        this.map = GoogleMaps.create('map', {
            controls: {
                myLocation: true,
                myLocationButton: false,
                mapToolbar: false,
                compass: true,
            }
        });
        this.map.one(GoogleMapsEvent.MAP_READY).then(() => this.zoomToMyLocation());
    }
    /**
     * @return {?}
     */
    zoomToMyLocation() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const location = yield this.map.getMyLocation({ enableHighAccuracy: true });
            this.moveCenterTo(location.latLng);
        });
    }
    /**
     * @param {?} latLng
     * @return {?}
     */
    moveCenterTo(latLng) {
        this.map.animateCamera({ zoom: this.zoom, target: latLng, duration: 350 });
    }
    /**
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    addMarker(lat, lng) {
    }
}
GoogleMapNativeComponent.decorators = [
    { type: Component, args: [{
                selector: 'fiv-google-map-native',
                template: `<div id="map"></div>`,
                styles: [":host #map{height:100%;width:100%}"]
            }] }
];
/** @nocollapse */
GoogleMapNativeComponent.ctorParameters = () => [];
GoogleMapNativeComponent.propDecorators = {
    zoom: [{ type: Input }],
    mapOptions: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GoogleMapNativeComponent.prototype.zoom;
    /** @type {?} */
    GoogleMapNativeComponent.prototype.mapOptions;
    /** @type {?} */
    GoogleMapNativeComponent.prototype.map;
    /** @type {?} */
    GoogleMapNativeComponent.prototype.marker;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC1uYXRpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZml2ZXRocmVlL2dvb2dsZS1tYXBzLyIsInNvdXJjZXMiOlsibGliL25hdGl2ZS9nb29nbGUtbWFwLW5hdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFDUSxVQUFVLEVBQW9CLGVBQWUsRUFFM0QsTUFBTSwyQkFBMkIsQ0FBQztBQU9uQyxNQUFNO0lBUUY7b0JBTndCLEVBQUU7c0JBSUEsRUFBRTtLQUVYOzs7O0lBRWpCLFFBQVE7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ2xCOzs7O0lBRUQsT0FBTztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNoQyxRQUFRLEVBQUU7Z0JBQ04sVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLGdCQUFnQixFQUFFLEtBQUs7Z0JBQ3ZCLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixPQUFPLEVBQUUsSUFBSTthQUNoQjtTQUNKLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztLQUMvRTs7OztJQUVLLGdCQUFnQjs7O1lBQ2xCLE1BQU0sUUFBUSxHQUFlLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztLQUN0Qzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBYztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7S0FDOUU7Ozs7OztJQUVELFNBQVMsQ0FBQyxHQUFXLEVBQUUsR0FBVztLQUNqQzs7O1lBM0NKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUsc0JBQXNCOzthQUVuQzs7Ozs7bUJBR0ksS0FBSzt5QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUdvb2dsZU1hcCB9IGZyb20gJy4vLi4vZ29vZ2xlLW1hcCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgR29vZ2xlTWFwLCBHb29nbGVNYXBzLCBHb29nbGVNYXBPcHRpb25zLCBHb29nbGVNYXBzRXZlbnQsIEh0bWxJbmZvV2luZG93LCBMYXRMbmcsIE1hcmtlcixcbiAgICBNeUxvY2F0aW9uXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvZ29vZ2xlLW1hcHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Zpdi1nb29nbGUtbWFwLW5hdGl2ZScsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGlkPVwibWFwXCI+PC9kaXY+YCxcbiAgICBzdHlsZVVybHM6IFsnZ29vZ2xlLW1hcC1uYXRpdmUuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBOYXRpdmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElHb29nbGVNYXAge1xuXG4gICAgQElucHV0KCkgem9vbTogbnVtYmVyID0gMTQ7XG4gICAgQElucHV0KCkgbWFwT3B0aW9uczogR29vZ2xlTWFwT3B0aW9ucztcblxuICAgIHB1YmxpYyBtYXA6IEdvb2dsZU1hcDtcbiAgICBwdWJsaWMgbWFya2VyOiBNYXJrZXJbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTWFwTmF0aXZlQ29tcG9uZW50IG5nIG9uIGluaXQnKTtcbiAgICAgICAgdGhpcy5sb2FkTWFwKCk7XG4gICAgfVxuXG4gICAgbG9hZE1hcCgpOiBhbnkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcgTWFwXCIpO1xuICAgICAgICB0aGlzLm1hcCA9IEdvb2dsZU1hcHMuY3JlYXRlKCdtYXAnLCB7XG4gICAgICAgICAgICBjb250cm9sczoge1xuICAgICAgICAgICAgICAgIG15TG9jYXRpb246IHRydWUsXG4gICAgICAgICAgICAgICAgbXlMb2NhdGlvbkJ1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWFwVG9vbGJhcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29tcGFzczogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubWFwLm9uZShHb29nbGVNYXBzRXZlbnQuTUFQX1JFQURZKS50aGVuKCgpID0+IHRoaXMuem9vbVRvTXlMb2NhdGlvbigpKTtcbiAgICB9XG5cbiAgICBhc3luYyB6b29tVG9NeUxvY2F0aW9uKCkge1xuICAgICAgICBjb25zdCBsb2NhdGlvbjogTXlMb2NhdGlvbiA9IGF3YWl0IHRoaXMubWFwLmdldE15TG9jYXRpb24oeyBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUgfSk7XG4gICAgICAgIHRoaXMubW92ZUNlbnRlclRvKGxvY2F0aW9uLmxhdExuZyk7XG4gICAgfVxuXG4gICAgbW92ZUNlbnRlclRvKGxhdExuZzogTGF0TG5nKSB7XG4gICAgICAgIHRoaXMubWFwLmFuaW1hdGVDYW1lcmEoeyB6b29tOiB0aGlzLnpvb20sIHRhcmdldDogbGF0TG5nLCBkdXJhdGlvbjogMzUwIH0pO1xuICAgIH1cblxuICAgIGFkZE1hcmtlcihsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpIHtcbiAgICB9XG59Il19