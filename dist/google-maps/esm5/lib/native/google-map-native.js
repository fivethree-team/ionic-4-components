/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
var GoogleMapNativeComponent = /** @class */ (function () {
    function GoogleMapNativeComponent() {
        this.zoom = 15;
        this.marker = [];
    }
    /**
     * @return {?}
     */
    GoogleMapNativeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('GoogleMapNativeComponent ng on init');
        this.loadMap();
    };
    /**
     * @return {?}
     */
    GoogleMapNativeComponent.prototype.loadMap = /**
     * @return {?}
     */
    function () {
        console.log("loading Map");
        this.map = GoogleMaps.create('map', {
            controls: {
                myLocation: true,
                myLocationButton: false,
                mapToolbar: false,
                compass: true,
            }
        });
        this.map.one(GoogleMapsEvent.MAP_READY).then(function () { return console.log("map is ready"); });
        console.log("loaded Map");
        // this.map.getMyLocation({ enableHighAccuracy: true }).then((location: MyLocation) => {
        //     this.map.animateCamera({ zoom: this.zoom, target: location.latLng, duration: 350 });
        // });
    };
    /**
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    GoogleMapNativeComponent.prototype.addMarker = /**
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    function (lat, lng) {
    };
    GoogleMapNativeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fiv-google-map-native',
                    template: "<div id=\"map\"></div>",
                    styles: [":host #map{height:100%;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    GoogleMapNativeComponent.ctorParameters = function () { return []; };
    GoogleMapNativeComponent.propDecorators = {
        zoom: [{ type: Input }],
        mapOptions: [{ type: Input }]
    };
    return GoogleMapNativeComponent;
}());
export { GoogleMapNativeComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC1uYXRpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZml2ZXRocmVlL2dvb2dsZS1tYXBzLyIsInNvdXJjZXMiOlsibGliL25hdGl2ZS9nb29nbGUtbWFwLW5hdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUNRLFVBQVUsRUFBb0IsZUFBZSxFQUUzRCxNQUFNLDJCQUEyQixDQUFDOztJQWUvQjtvQkFOd0IsRUFBRTtzQkFJQSxFQUFFO0tBRVg7Ozs7SUFFakIsMkNBQVE7OztJQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNsQjs7OztJQUVELDBDQUFPOzs7SUFBUDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNoQyxRQUFRLEVBQUU7Z0JBQ04sVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLGdCQUFnQixFQUFFLEtBQUs7Z0JBQ3ZCLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixPQUFPLEVBQUUsSUFBSTthQUNoQjtTQUNKLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztRQUVoRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7O0tBSzdCOzs7Ozs7SUFFRCw0Q0FBUzs7Ozs7SUFBVCxVQUFVLEdBQVcsRUFBRSxHQUFXO0tBQ2pDOztnQkExQ0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSx3QkFBc0I7O2lCQUVuQzs7Ozs7dUJBR0ksS0FBSzs2QkFDTCxLQUFLOzttQ0FmVjs7U0FZYSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJR29vZ2xlTWFwIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBHb29nbGVNYXAsIEdvb2dsZU1hcHMsIEdvb2dsZU1hcE9wdGlvbnMsIEdvb2dsZU1hcHNFdmVudCwgSHRtbEluZm9XaW5kb3csIExhdExuZywgTWFya2VyLFxuICAgIE15TG9jYXRpb25cbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9nb29nbGUtbWFwcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZml2LWdvb2dsZS1tYXAtbmF0aXZlJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgaWQ9XCJtYXBcIj48L2Rpdj5gLFxuICAgIHN0eWxlVXJsczogWydnb29nbGUtbWFwLW5hdGl2ZS5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcE5hdGl2ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSUdvb2dsZU1hcCB7XG5cbiAgICBASW5wdXQoKSB6b29tOiBudW1iZXIgPSAxNTtcbiAgICBASW5wdXQoKSBtYXBPcHRpb25zOiBHb29nbGVNYXBPcHRpb25zO1xuXG4gICAgcHVibGljIG1hcDogR29vZ2xlTWFwO1xuICAgIHB1YmxpYyBtYXJrZXI6IE1hcmtlcltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVNYXBOYXRpdmVDb21wb25lbnQgbmcgb24gaW5pdCcpO1xuICAgICAgICB0aGlzLmxvYWRNYXAoKTtcbiAgICB9XG5cbiAgICBsb2FkTWFwKCk6IGFueSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZyBNYXBcIik7XG5cbiAgICAgICAgdGhpcy5tYXAgPSBHb29nbGVNYXBzLmNyZWF0ZSgnbWFwJywge1xuICAgICAgICAgICAgY29udHJvbHM6IHtcbiAgICAgICAgICAgICAgICBteUxvY2F0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIG15TG9jYXRpb25CdXR0b246IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1hcFRvb2xiYXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbXBhc3M6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWFwLm9uZShHb29nbGVNYXBzRXZlbnQuTUFQX1JFQURZKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwibWFwIGlzIHJlYWR5XCIpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRlZCBNYXBcIik7XG5cbiAgICAgICAgLy8gdGhpcy5tYXAuZ2V0TXlMb2NhdGlvbih7IGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSB9KS50aGVuKChsb2NhdGlvbjogTXlMb2NhdGlvbikgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5tYXAuYW5pbWF0ZUNhbWVyYSh7IHpvb206IHRoaXMuem9vbSwgdGFyZ2V0OiBsb2NhdGlvbi5sYXRMbmcsIGR1cmF0aW9uOiAzNTAgfSk7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGFkZE1hcmtlcihsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpIHtcbiAgICB9XG59Il19