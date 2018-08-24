/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
export class GoogleMapNativeComponent {
    constructor() {
        this.zoom = 15;
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
        this.map.one(GoogleMapsEvent.MAP_READY).then(() => console.log("map is ready"));
        console.log("loaded Map");
        // this.map.getMyLocation({ enableHighAccuracy: true }).then((location: MyLocation) => {
        //     this.map.animateCamera({ zoom: this.zoom, target: location.latLng, duration: 350 });
        // });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC1uYXRpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZml2ZXRocmVlL2dvb2dsZS1tYXBzLyIsInNvdXJjZXMiOlsibGliL25hdGl2ZS9nb29nbGUtbWFwLW5hdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUNRLFVBQVUsRUFBb0IsZUFBZSxFQUUzRCxNQUFNLDJCQUEyQixDQUFDO0FBT25DLE1BQU07SUFRRjtvQkFOd0IsRUFBRTtzQkFJQSxFQUFFO0tBRVg7Ozs7SUFFakIsUUFBUTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDbEI7Ozs7SUFFRCxPQUFPO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hDLFFBQVEsRUFBRTtnQkFDTixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsZ0JBQWdCLEVBQUUsS0FBSztnQkFDdkIsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLE9BQU8sRUFBRSxJQUFJO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFFaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7OztLQUs3Qjs7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQVcsRUFBRSxHQUFXO0tBQ2pDOzs7WUExQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxzQkFBc0I7O2FBRW5DOzs7OzttQkFHSSxLQUFLO3lCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJR29vZ2xlTWFwIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBHb29nbGVNYXAsIEdvb2dsZU1hcHMsIEdvb2dsZU1hcE9wdGlvbnMsIEdvb2dsZU1hcHNFdmVudCwgSHRtbEluZm9XaW5kb3csIExhdExuZywgTWFya2VyLFxuICAgIE15TG9jYXRpb25cbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9nb29nbGUtbWFwcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZml2LWdvb2dsZS1tYXAtbmF0aXZlJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgaWQ9XCJtYXBcIj48L2Rpdj5gLFxuICAgIHN0eWxlVXJsczogWydnb29nbGUtbWFwLW5hdGl2ZS5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcE5hdGl2ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSUdvb2dsZU1hcCB7XG5cbiAgICBASW5wdXQoKSB6b29tOiBudW1iZXIgPSAxNTtcbiAgICBASW5wdXQoKSBtYXBPcHRpb25zOiBHb29nbGVNYXBPcHRpb25zO1xuXG4gICAgcHVibGljIG1hcDogR29vZ2xlTWFwO1xuICAgIHB1YmxpYyBtYXJrZXI6IE1hcmtlcltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVNYXBOYXRpdmVDb21wb25lbnQgbmcgb24gaW5pdCcpO1xuICAgICAgICB0aGlzLmxvYWRNYXAoKTtcbiAgICB9XG5cbiAgICBsb2FkTWFwKCk6IGFueSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZyBNYXBcIik7XG5cbiAgICAgICAgdGhpcy5tYXAgPSBHb29nbGVNYXBzLmNyZWF0ZSgnbWFwJywge1xuICAgICAgICAgICAgY29udHJvbHM6IHtcbiAgICAgICAgICAgICAgICBteUxvY2F0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIG15TG9jYXRpb25CdXR0b246IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1hcFRvb2xiYXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbXBhc3M6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWFwLm9uZShHb29nbGVNYXBzRXZlbnQuTUFQX1JFQURZKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwibWFwIGlzIHJlYWR5XCIpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRlZCBNYXBcIik7XG5cbiAgICAgICAgLy8gdGhpcy5tYXAuZ2V0TXlMb2NhdGlvbih7IGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSB9KS50aGVuKChsb2NhdGlvbjogTXlMb2NhdGlvbikgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5tYXAuYW5pbWF0ZUNhbWVyYSh7IHpvb206IHRoaXMuem9vbSwgdGFyZ2V0OiBsb2NhdGlvbi5sYXRMbmcsIGR1cmF0aW9uOiAzNTAgfSk7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGFkZE1hcmtlcihsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpIHtcbiAgICB9XG59Il19