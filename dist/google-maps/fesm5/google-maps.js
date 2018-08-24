import { Injectable, Component, ElementRef, Renderer2, Inject, Input, defineInjectable, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

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
                },] },
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
    GoogleMapsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fiv-google-maps',
                    template: "\n    <p>\n      google-maps works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    GoogleMapsComponent.ctorParameters = function () { return []; };
    GoogleMapsComponent.propDecorators = {
        isCordova: [{ type: Input }]
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
        this.networkHandler = null;
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
                    styles: [":host{display:block;width:100%;height:100%}"],
                },] },
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
var GoogleMapsModule = /** @class */ (function () {
    function GoogleMapsModule() {
    }
    GoogleMapsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [GoogleMapsComponent, GoogleMapWebComponent],
                    exports: [GoogleMapsComponent, GoogleMapWebComponent]
                },] },
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

export { GoogleMapsService, GoogleMapsComponent, GoogleMapsModule, GoogleMapWebComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcHMuanMubWFwIiwic291cmNlcyI6WyJuZzovL2dvb2dsZS1tYXBzL2xpYi9nb29nbGUtbWFwcy5zZXJ2aWNlLnRzIiwibmc6Ly9nb29nbGUtbWFwcy9saWIvZ29vZ2xlLW1hcHMuY29tcG9uZW50LnRzIiwibmc6Ly9nb29nbGUtbWFwcy9saWIvd2ViL2dvb2dsZS1tYXAtd2ViLnRzIiwibmc6Ly9nb29nbGUtbWFwcy9saWIvZ29vZ2xlLW1hcHMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWdvb2dsZS1tYXBzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGdvb2dsZS1tYXBzIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBpc0NvcmRvdmE6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbmplY3QsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHt9IGZyb20gJ0B0eXBlcy9nb29nbGVtYXBzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmaXYtZ29vZ2xlLW1hcC13ZWInLFxuICAgIHRlbXBsYXRlOiBgYCxcbiAgICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBXZWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCdhcGlLZXknKSBhcGlLZXk6IHN0cmluZztcbiAgICBASW5wdXQoKSB6b29tOiBudW1iZXIgPSAxNTtcbiAgICBASW5wdXQoKSBtYXBPcHRpb25zOiBnb29nbGUubWFwcy5NYXBPcHRpb25zOyAvLyBUT0RPIGVuYWJsZSBtYXBvcHRpb25zXG5cbiAgICBwdWJsaWMgbGF0OiBudW1iZXIgPSA1MC45NTc2MTkxO1xuICAgIHB1YmxpYyBsbmc6IG51bWJlciA9IDYuODI3MjQwODtcbiAgICBwdWJsaWMgbWFwOiBhbnk7XG4gICAgcHVibGljIG1hcmtlcnM6IGFueVtdID0gW107XG4gICAgcHJpdmF0ZSBtYXBzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBuZXR3b3JrSGFuZGxlciA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHb29nbGUgTWFwcyByZWFkeS5cIilcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXQoKTogUHJvbWlzZTxhbnk+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRTREsoKS50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdE1hcCgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFNESygpOiBQcm9taXNlPGFueT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBHb29nbGUgTWFwcyBTREtcIik7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLm1hcHNMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluamVjdFNESygpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdCgnU0RLIGFscmVhZHkgbG9hZGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIHByaXZhdGUgaW5qZWN0U0RLKCk6IFByb21pc2U8YW55PiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgd2luZG93WydtYXBJbml0J10gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc2NyaXB0ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHNjcmlwdC5pZCA9ICdnb29nbGVNYXBzJztcblxuICAgICAgICAgICAgaWYgKHRoaXMuYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PScgKyB0aGlzLmFwaUtleSArICcmY2FsbGJhY2s9bWFwSW5pdCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdCgnJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0TWFwKCk6IFByb21pc2U8YW55PiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBsYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHRoaXMubGF0LCB0aGlzLmxuZyk7XG4gICAgICAgICAgICBsZXQgbWFwT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBjZW50ZXI6IGxhdExuZyxcbiAgICAgICAgICAgICAgICB6b29tOiB0aGlzLnpvb21cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgbWFwT3B0aW9ucyk7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTWFya2VyKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICAgIGxldCBsYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdCwgbG5nKTtcblxuICAgICAgICBsZXQgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBsYXRMbmdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcblxuICAgIH1cblxufSIsImltcG9ydCB7IEdvb2dsZU1hcFdlYkNvbXBvbmVudCB9IGZyb20gJy4vd2ViL2dvb2dsZS1tYXAtd2ViJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHb29nbGVNYXBzQ29tcG9uZW50IH0gZnJvbSAnLi9nb29nbGUtbWFwcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0dvb2dsZU1hcHNDb21wb25lbnQsIEdvb2dsZU1hcFdlYkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtHb29nbGVNYXBzQ29tcG9uZW50LCBHb29nbGVNYXBXZWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcHNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNB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