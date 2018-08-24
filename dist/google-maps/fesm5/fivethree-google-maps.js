import { Injectable, Component, ElementRef, Renderer2, Inject, Input, defineInjectable, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { __awaiter, __generator } from 'tslib';
import { GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GoogleMapsService = /** @class */ (function () {
    function GoogleMapsService() {
    }
    GoogleMapsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GoogleMapsService.ctorParameters = function () { return []; };
    /** @nocollapse */ GoogleMapsService.ngInjectableDef = defineInjectable({ factory: function GoogleMapsService_Factory() { return new GoogleMapsService(); }, token: GoogleMapsService, providedIn: "root" });
    return GoogleMapsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GoogleMapsComponent = /** @class */ (function () {
    function GoogleMapsComponent() {
    }
    /**
     * @return {?}
     */
    GoogleMapsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    GoogleMapsComponent.prototype.addMarker = /**
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    function (lat, lng) {
    };
    GoogleMapsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fiv-google-maps',
                    template: "\n    <fiv-google-map-web *ngIf=\"!isCordova\" [apiKey]=\"apiKey\"></fiv-google-map-web>\n    <fiv-google-map-native *ngIf=\"isCordova\"></fiv-google-map-native>\n  "
                }] }
    ];
    /** @nocollapse */
    GoogleMapsComponent.ctorParameters = function () { return []; };
    GoogleMapsComponent.propDecorators = {
        isCordova: [{ type: Input }],
        apiKey: [{ type: Input, args: ['apiKey',] }],
        zoom: [{ type: Input }]
    };
    return GoogleMapsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GoogleMapWebComponent = /** @class */ (function () {
    function GoogleMapWebComponent(renderer, element, _document) {
        this.renderer = renderer;
        this.element = element;
        this._document = _document;
        this.zoom = 15;
        this.lat = 50.9576191;
        this.lng = 6.8272408;
        this.markers = [];
        this.mapsLoaded = false;
    }
    /**
     * @return {?}
     */
    GoogleMapWebComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init().then(function (res) {
            console.log("Google Maps ready.");
        }, function (err) {
            console.log(err);
        });
    };
    /**
     * @return {?}
     */
    GoogleMapWebComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadSDK().then(function (res) {
                _this.initMap().then(function (res) {
                    resolve(true);
                }, function (err) {
                    reject(err);
                });
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * @return {?}
     */
    GoogleMapWebComponent.prototype.loadSDK = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log("Loading Google Maps SDK");
        return new Promise(function (resolve, reject) {
            if (!_this.mapsLoaded) {
                _this.injectSDK().then(function (res) {
                    resolve(true);
                }, function (err) {
                    reject(err);
                });
            }
            else {
                reject('SDK already loaded');
            }
        });
    };
    /**
     * @return {?}
     */
    GoogleMapWebComponent.prototype.injectSDK = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            window['mapInit'] = function () {
                _this.mapsLoaded = true;
                resolve(true);
            };
            /** @type {?} */
            var script = _this.renderer.createElement('script');
            script.id = 'googleMaps';
            if (_this.apiKey) {
                script.src = 'https://maps.googleapis.com/maps/api/js?key=' + _this.apiKey + '&callback=mapInit';
            }
            else {
                reject('');
            }
            _this.renderer.appendChild(_this._document.body, script);
        });
    };
    /**
     * @return {?}
     */
    GoogleMapWebComponent.prototype.initMap = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            /** @type {?} */
            var latLng = new google.maps.LatLng(_this.lat, _this.lng);
            /** @type {?} */
            var mapOptions = {
                center: latLng,
                zoom: _this.zoom
            };
            _this.map = new google.maps.Map(_this.element.nativeElement, mapOptions);
            resolve(true);
        });
    };
    /**
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    GoogleMapWebComponent.prototype.addMarker = /**
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    function (lat, lng) {
        /** @type {?} */
        var latLng = new google.maps.LatLng(lat, lng);
        /** @type {?} */
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        this.markers.push(marker);
    };
    GoogleMapWebComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fiv-google-map-web',
                    template: "",
                    styles: [":host{display:block;width:100%;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    GoogleMapWebComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    GoogleMapWebComponent.propDecorators = {
        apiKey: [{ type: Input, args: ['apiKey',] }],
        zoom: [{ type: Input }],
        mapOptions: [{ type: Input }]
    };
    return GoogleMapWebComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GoogleMapNativeComponent = /** @class */ (function () {
    function GoogleMapNativeComponent() {
        this.zoom = 14;
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
        var _this = this;
        console.log("loading Map");
        this.map = GoogleMaps.create('map', {
            controls: {
                myLocation: true,
                myLocationButton: false,
                mapToolbar: false,
                compass: true,
            }
        });
        this.map.one(GoogleMapsEvent.MAP_READY).then(function () { return _this.zoomToMyLocation(); });
    };
    /**
     * @return {?}
     */
    GoogleMapNativeComponent.prototype.zoomToMyLocation = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var location;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.map.getMyLocation({ enableHighAccuracy: true })];
                    case 1:
                        location = _a.sent();
                        this.moveCenterTo(location.latLng);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} latLng
     * @return {?}
     */
    GoogleMapNativeComponent.prototype.moveCenterTo = /**
     * @param {?} latLng
     * @return {?}
     */
    function (latLng) {
        this.map.animateCamera({ zoom: this.zoom, target: latLng, duration: 350 });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GoogleMapsModule = /** @class */ (function () {
    function GoogleMapsModule() {
    }
    GoogleMapsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [GoogleMapsComponent, GoogleMapWebComponent, GoogleMapNativeComponent],
                    exports: [GoogleMapsComponent, GoogleMapWebComponent, GoogleMapNativeComponent]
                },] }
    ];
    return GoogleMapsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { GoogleMapsService, GoogleMapsComponent, GoogleMapsModule, GoogleMapNativeComponent as ɵb, GoogleMapWebComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml2ZXRocmVlLWdvb2dsZS1tYXBzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZml2ZXRocmVlL2dvb2dsZS1tYXBzL2xpYi9nb29nbGUtbWFwcy5zZXJ2aWNlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2dvb2dsZS1tYXBzL2xpYi9nb29nbGUtbWFwcy5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvZ29vZ2xlLW1hcHMvbGliL3dlYi9nb29nbGUtbWFwLXdlYi50cyIsIm5nOi8vQGZpdmV0aHJlZS9nb29nbGUtbWFwcy9saWIvbmF0aXZlL2dvb2dsZS1tYXAtbmF0aXZlLnRzIiwibmc6Ly9AZml2ZXRocmVlL2dvb2dsZS1tYXBzL2xpYi9nb29nbGUtbWFwcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IElHb29nbGVNYXAgfSBmcm9tICcuL2dvb2dsZS1tYXAnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1nb29nbGUtbWFwcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGZpdi1nb29nbGUtbWFwLXdlYiAqbmdJZj1cIiFpc0NvcmRvdmFcIiBbYXBpS2V5XT1cImFwaUtleVwiPjwvZml2LWdvb2dsZS1tYXAtd2ViPlxuICAgIDxmaXYtZ29vZ2xlLW1hcC1uYXRpdmUgKm5nSWY9XCJpc0NvcmRvdmFcIj48L2Zpdi1nb29nbGUtbWFwLW5hdGl2ZT5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJR29vZ2xlTWFwIHtcblxuICBASW5wdXQoKSBpc0NvcmRvdmE6IGJvb2xlYW47XG4gIEBJbnB1dCgnYXBpS2V5JykgYXBpS2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHpvb206IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgYWRkTWFya2VyKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlcikge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IElHb29nbGVNYXAgfSBmcm9tICcuLy4uL2dvb2dsZS1tYXAnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyB9IGZyb20gJ0B0eXBlcy9nb29nbGVtYXBzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmaXYtZ29vZ2xlLW1hcC13ZWInLFxuICAgIHRlbXBsYXRlOiBgYCxcbiAgICBzdHlsZVVybHM6IFsnZ29vZ2xlLW1hcC13ZWIuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBXZWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElHb29nbGVNYXAge1xuXG4gICAgQElucHV0KCdhcGlLZXknKSBhcGlLZXk6IHN0cmluZztcbiAgICBASW5wdXQoKSB6b29tOiBudW1iZXIgPSAxNTtcbiAgICBASW5wdXQoKSBtYXBPcHRpb25zOiBnb29nbGUubWFwcy5NYXBPcHRpb25zOyAvLyBUT0RPIGVuYWJsZSBtYXBvcHRpb25zXG5cbiAgICBwdWJsaWMgbGF0OiBudW1iZXIgPSA1MC45NTc2MTkxO1xuICAgIHB1YmxpYyBsbmc6IG51bWJlciA9IDYuODI3MjQwODtcbiAgICBwdWJsaWMgbWFwOiBnb29nbGUubWFwcy5NYXA7XG4gICAgcHVibGljIG1hcmtlcnM6IGdvb2dsZS5tYXBzLk1hcmtlcltdID0gW107XG4gICAgcHJpdmF0ZSBtYXBzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0KCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdvb2dsZSBNYXBzIHJlYWR5LlwiKVxuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXQoKTogUHJvbWlzZTxhbnk+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRTREsoKS50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdE1hcCgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFNESygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgR29vZ2xlIE1hcHMgU0RLXCIpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1hcHNMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluamVjdFNESygpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdCgnU0RLIGFscmVhZHkgbG9hZGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIHByaXZhdGUgaW5qZWN0U0RLKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3aW5kb3dbJ21hcEluaXQnXSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcHNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzY3JpcHQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgc2NyaXB0LmlkID0gJ2dvb2dsZU1hcHMnO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JyArIHRoaXMuYXBpS2V5ICsgJyZjYWxsYmFjaz1tYXBJbml0JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCcnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2RvY3VtZW50LmJvZHksIHNjcmlwdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdE1hcCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBsYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHRoaXMubGF0LCB0aGlzLmxuZyk7XG4gICAgICAgICAgICBsZXQgbWFwT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBjZW50ZXI6IGxhdExuZyxcbiAgICAgICAgICAgICAgICB6b29tOiB0aGlzLnpvb21cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgbWFwT3B0aW9ucyk7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTWFya2VyKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgbGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyk7XG4gICAgICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxuICAgICAgICAgICAgcG9zaXRpb246IGxhdExuZ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJR29vZ2xlTWFwIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBHb29nbGVNYXAsIEdvb2dsZU1hcHMsIEdvb2dsZU1hcE9wdGlvbnMsIEdvb2dsZU1hcHNFdmVudCwgSHRtbEluZm9XaW5kb3csIExhdExuZywgTWFya2VyLFxuICAgIE15TG9jYXRpb25cbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9nb29nbGUtbWFwcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZml2LWdvb2dsZS1tYXAtbmF0aXZlJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgaWQ9XCJtYXBcIj48L2Rpdj5gLFxuICAgIHN0eWxlVXJsczogWydnb29nbGUtbWFwLW5hdGl2ZS5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcE5hdGl2ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSUdvb2dsZU1hcCB7XG5cbiAgICBASW5wdXQoKSB6b29tOiBudW1iZXIgPSAxNDtcbiAgICBASW5wdXQoKSBtYXBPcHRpb25zOiBHb29nbGVNYXBPcHRpb25zO1xuXG4gICAgcHVibGljIG1hcDogR29vZ2xlTWFwO1xuICAgIHB1YmxpYyBtYXJrZXI6IE1hcmtlcltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVNYXBOYXRpdmVDb21wb25lbnQgbmcgb24gaW5pdCcpO1xuICAgICAgICB0aGlzLmxvYWRNYXAoKTtcbiAgICB9XG5cbiAgICBsb2FkTWFwKCk6IGFueSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZyBNYXBcIik7XG4gICAgICAgIHRoaXMubWFwID0gR29vZ2xlTWFwcy5jcmVhdGUoJ21hcCcsIHtcbiAgICAgICAgICAgIGNvbnRyb2xzOiB7XG4gICAgICAgICAgICAgICAgbXlMb2NhdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBteUxvY2F0aW9uQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtYXBUb29sYmFyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb21wYXNzOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tYXAub25lKEdvb2dsZU1hcHNFdmVudC5NQVBfUkVBRFkpLnRoZW4oKCkgPT4gdGhpcy56b29tVG9NeUxvY2F0aW9uKCkpO1xuICAgIH1cblxuICAgIGFzeW5jIHpvb21Ub015TG9jYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uOiBNeUxvY2F0aW9uID0gYXdhaXQgdGhpcy5tYXAuZ2V0TXlMb2NhdGlvbih7IGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5tb3ZlQ2VudGVyVG8obG9jYXRpb24ubGF0TG5nKTtcbiAgICB9XG5cbiAgICBtb3ZlQ2VudGVyVG8obGF0TG5nOiBMYXRMbmcpIHtcbiAgICAgICAgdGhpcy5tYXAuYW5pbWF0ZUNhbWVyYSh7IHpvb206IHRoaXMuem9vbSwgdGFyZ2V0OiBsYXRMbmcsIGR1cmF0aW9uOiAzNTAgfSk7XG4gICAgfVxuXG4gICAgYWRkTWFya2VyKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlcikge1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR29vZ2xlTWFwV2ViQ29tcG9uZW50IH0gZnJvbSAnLi93ZWIvZ29vZ2xlLW1hcC13ZWInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdvb2dsZU1hcHNDb21wb25lbnQgfSBmcm9tICcuL2dvb2dsZS1tYXBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHb29nbGVNYXBOYXRpdmVDb21wb25lbnQgfSBmcm9tICcuL25hdGl2ZS9nb29nbGUtbWFwLW5hdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbR29vZ2xlTWFwc0NvbXBvbmVudCwgR29vZ2xlTWFwV2ViQ29tcG9uZW50LCBHb29nbGVNYXBOYXRpdmVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbR29vZ2xlTWFwc0NvbXBvbmVudCwgR29vZ2xlTWFwV2ViQ29tcG9uZW50LCBHb29nbGVNYXBOYXRpdmVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcHNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs0QkFKRDs7Ozs7OztBQ0NBO0lBZ0JFO0tBQWlCOzs7O0lBRWpCLHNDQUFROzs7SUFBUjtLQUNDOzs7Ozs7SUFFRCx1Q0FBUzs7Ozs7SUFBVCxVQUFVLEdBQVcsRUFBRSxHQUFXO0tBQ2pDOztnQkFwQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSx1S0FHVDtpQkFFRjs7Ozs7NEJBR0UsS0FBSzt5QkFDTCxLQUFLLFNBQUMsUUFBUTt1QkFDZCxLQUFLOzs4QkFmUjs7Ozs7OztBQ0NBO0lBcUJJLCtCQUFvQixRQUFtQixFQUMzQixTQUNrQixTQUFTO1FBRm5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDM0IsWUFBTyxHQUFQLE9BQU87UUFDVyxjQUFTLEdBQVQsU0FBUyxDQUFBO29CQVhmLEVBQUU7bUJBR0wsVUFBVTttQkFDVixTQUFTO3VCQUVTLEVBQUU7MEJBQ1gsS0FBSztLQUtsQzs7OztJQUVELHdDQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMs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