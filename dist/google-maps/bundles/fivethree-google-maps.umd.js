(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@ionic-native/google-maps'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fivethree/google-maps', ['exports', '@angular/core', '@angular/platform-browser', '@ionic-native/google-maps', '@angular/common'], factory) :
    (factory((global.fivethree = global.fivethree || {}, global.fivethree['google-maps'] = {}),global.ng.core,global.ng.platformBrowser,global.googleMaps,global.ng.common));
}(this, (function (exports,i0,platformBrowser,googleMaps,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GoogleMapsService = (function () {
        function GoogleMapsService() {
        }
        GoogleMapsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GoogleMapsService.ctorParameters = function () { return []; };
        /** @nocollapse */ GoogleMapsService.ngInjectableDef = i0.defineInjectable({ factory: function GoogleMapsService_Factory() { return new GoogleMapsService(); }, token: GoogleMapsService, providedIn: "root" });
        return GoogleMapsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GoogleMapsComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'fiv-google-maps',
                        template: "\n    <fiv-google-map-web *ngIf=\"!isCordova\" [apiKey]=\"apiKey\"></fiv-google-map-web>\n    <fiv-google-map-native *ngIf=\"isCordova\"></fiv-google-map-native>\n  "
                    }] }
        ];
        /** @nocollapse */
        GoogleMapsComponent.ctorParameters = function () { return []; };
        GoogleMapsComponent.propDecorators = {
            isCordova: [{ type: i0.Input }],
            apiKey: [{ type: i0.Input, args: ['apiKey',] }],
            zoom: [{ type: i0.Input }]
        };
        return GoogleMapsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GoogleMapWebComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'fiv-google-map-web',
                        template: "",
                        styles: [":host{display:block;width:100%;height:100%}"]
                    }] }
        ];
        /** @nocollapse */
        GoogleMapWebComponent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ElementRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [platformBrowser.DOCUMENT,] }] }
            ];
        };
        GoogleMapWebComponent.propDecorators = {
            apiKey: [{ type: i0.Input, args: ['apiKey',] }],
            zoom: [{ type: i0.Input }],
            mapOptions: [{ type: i0.Input }]
        };
        return GoogleMapWebComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GoogleMapNativeComponent = (function () {
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
                this.map = googleMaps.GoogleMaps.create('map', {
                    controls: {
                        myLocation: true,
                        myLocationButton: false,
                        mapToolbar: false,
                        compass: true,
                    }
                });
                this.map.one(googleMaps.GoogleMapsEvent.MAP_READY).then(function () { return console.log("map is ready"); });
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
            { type: i0.Component, args: [{
                        selector: 'fiv-google-map-native',
                        template: "<div id=\"map\"></div>",
                        styles: [":host #map{height:100%;width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        GoogleMapNativeComponent.ctorParameters = function () { return []; };
        GoogleMapNativeComponent.propDecorators = {
            zoom: [{ type: i0.Input }],
            mapOptions: [{ type: i0.Input }]
        };
        return GoogleMapNativeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GoogleMapsModule = (function () {
        function GoogleMapsModule() {
        }
        GoogleMapsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.GoogleMapsService = GoogleMapsService;
    exports.GoogleMapsComponent = GoogleMapsComponent;
    exports.GoogleMapsModule = GoogleMapsModule;
    exports.ɵb = GoogleMapNativeComponent;
    exports.ɵa = GoogleMapWebComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml2ZXRocmVlLWdvb2dsZS1tYXBzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGZpdmV0aHJlZS9nb29nbGUtbWFwcy9saWIvZ29vZ2xlLW1hcHMuc2VydmljZS50cyIsIm5nOi8vQGZpdmV0aHJlZS9nb29nbGUtbWFwcy9saWIvZ29vZ2xlLW1hcHMuY29tcG9uZW50LnRzIiwibmc6Ly9AZml2ZXRocmVlL2dvb2dsZS1tYXBzL2xpYi93ZWIvZ29vZ2xlLW1hcC13ZWIudHMiLCJuZzovL0BmaXZldGhyZWUvZ29vZ2xlLW1hcHMvbGliL25hdGl2ZS9nb29nbGUtbWFwLW5hdGl2ZS50cyIsIm5nOi8vQGZpdmV0aHJlZS9nb29nbGUtbWFwcy9saWIvZ29vZ2xlLW1hcHMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBJR29vZ2xlTWFwIH0gZnJvbSAnLi9nb29nbGUtbWFwJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtZ29vZ2xlLW1hcHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxmaXYtZ29vZ2xlLW1hcC13ZWIgKm5nSWY9XCIhaXNDb3Jkb3ZhXCIgW2FwaUtleV09XCJhcGlLZXlcIj48L2Zpdi1nb29nbGUtbWFwLXdlYj5cbiAgICA8Zml2LWdvb2dsZS1tYXAtbmF0aXZlICpuZ0lmPVwiaXNDb3Jkb3ZhXCI+PC9maXYtZ29vZ2xlLW1hcC1uYXRpdmU+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSUdvb2dsZU1hcCB7XG5cbiAgQElucHV0KCkgaXNDb3Jkb3ZhOiBib29sZWFuO1xuICBASW5wdXQoJ2FwaUtleScpIGFwaUtleTogc3RyaW5nO1xuICBASW5wdXQoKSB6b29tOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGFkZE1hcmtlcihsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJR29vZ2xlTWFwIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEluamVjdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgfSBmcm9tICdAdHlwZXMvZ29vZ2xlbWFwcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZml2LWdvb2dsZS1tYXAtd2ViJyxcbiAgICB0ZW1wbGF0ZTogYGAsXG4gICAgc3R5bGVVcmxzOiBbJ2dvb2dsZS1tYXAtd2ViLnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwV2ViQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJR29vZ2xlTWFwIHtcblxuICAgIEBJbnB1dCgnYXBpS2V5JykgYXBpS2V5OiBzdHJpbmc7XG4gICAgQElucHV0KCkgem9vbTogbnVtYmVyID0gMTU7XG4gICAgQElucHV0KCkgbWFwT3B0aW9uczogZ29vZ2xlLm1hcHMuTWFwT3B0aW9uczsgLy8gVE9ETyBlbmFibGUgbWFwb3B0aW9uc1xuXG4gICAgcHVibGljIGxhdDogbnVtYmVyID0gNTAuOTU3NjE5MTtcbiAgICBwdWJsaWMgbG5nOiBudW1iZXIgPSA2LjgyNzI0MDg7XG4gICAgcHVibGljIG1hcDogZ29vZ2xlLm1hcHMuTWFwO1xuICAgIHB1YmxpYyBtYXJrZXJzOiBnb29nbGUubWFwcy5NYXJrZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgbWFwc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50KSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHb29nbGUgTWFwcyByZWFkeS5cIilcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCk6IFByb21pc2U8YW55PiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5sb2FkU0RLKCkudGhlbigocmVzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmluaXRNYXAoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRTREsoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIEdvb2dsZSBNYXBzIFNES1wiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tYXBzTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmplY3RTREsoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoJ1NESyBhbHJlYWR5IGxvYWRlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGluamVjdFNESygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgd2luZG93WydtYXBJbml0J10gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc2NyaXB0ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHNjcmlwdC5pZCA9ICdnb29nbGVNYXBzJztcblxuICAgICAgICAgICAgaWYgKHRoaXMuYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PScgKyB0aGlzLmFwaUtleSArICcmY2FsbGJhY2s9bWFwSW5pdCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdCgnJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRNYXAoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyh0aGlzLmxhdCwgdGhpcy5sbmcpO1xuICAgICAgICAgICAgbGV0IG1hcE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgY2VudGVyOiBsYXRMbmcsXG4gICAgICAgICAgICAgICAgem9vbTogdGhpcy56b29tXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIG1hcE9wdGlvbnMpO1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZE1hcmtlcihsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0LCBsbmcpO1xuICAgICAgICBsZXQgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBsYXRMbmdcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSUdvb2dsZU1hcCB9IGZyb20gJy4vLi4vZ29vZ2xlLW1hcCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgR29vZ2xlTWFwLCBHb29nbGVNYXBzLCBHb29nbGVNYXBPcHRpb25zLCBHb29nbGVNYXBzRXZlbnQsIEh0bWxJbmZvV2luZG93LCBMYXRMbmcsIE1hcmtlcixcbiAgICBNeUxvY2F0aW9uXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvZ29vZ2xlLW1hcHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Zpdi1nb29nbGUtbWFwLW5hdGl2ZScsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGlkPVwibWFwXCI+PC9kaXY+YCxcbiAgICBzdHlsZVVybHM6IFsnZ29vZ2xlLW1hcC1uYXRpdmUuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBOYXRpdmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElHb29nbGVNYXAge1xuXG4gICAgQElucHV0KCkgem9vbTogbnVtYmVyID0gMTU7XG4gICAgQElucHV0KCkgbWFwT3B0aW9uczogR29vZ2xlTWFwT3B0aW9ucztcblxuICAgIHB1YmxpYyBtYXA6IEdvb2dsZU1hcDtcbiAgICBwdWJsaWMgbWFya2VyOiBNYXJrZXJbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTWFwTmF0aXZlQ29tcG9uZW50IG5nIG9uIGluaXQnKTtcbiAgICAgICAgdGhpcy5sb2FkTWFwKCk7XG4gICAgfVxuXG4gICAgbG9hZE1hcCgpOiBhbnkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcgTWFwXCIpO1xuXG4gICAgICAgIHRoaXMubWFwID0gR29vZ2xlTWFwcy5jcmVhdGUoJ21hcCcsIHtcbiAgICAgICAgICAgIGNvbnRyb2xzOiB7XG4gICAgICAgICAgICAgICAgbXlMb2NhdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBteUxvY2F0aW9uQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtYXBUb29sYmFyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb21wYXNzOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1hcC5vbmUoR29vZ2xlTWFwc0V2ZW50Lk1BUF9SRUFEWSkudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIm1hcCBpcyByZWFkeVwiKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkZWQgTWFwXCIpO1xuXG4gICAgICAgIC8vIHRoaXMubWFwLmdldE15TG9jYXRpb24oeyBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUgfSkudGhlbigobG9jYXRpb246IE15TG9jYXRpb24pID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMubWFwLmFuaW1hdGVDYW1lcmEoeyB6b29tOiB0aGlzLnpvb20sIHRhcmdldDogbG9jYXRpb24ubGF0TG5nLCBkdXJhdGlvbjogMzUwIH0pO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBhZGRNYXJrZXIobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKSB7XG4gICAgfVxufSIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBHb29nbGVNYXBXZWJDb21wb25lbnQgfSBmcm9tICcuL3dlYi9nb29nbGUtbWFwLXdlYic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR29vZ2xlTWFwc0NvbXBvbmVudCB9IGZyb20gJy4vZ29vZ2xlLW1hcHMuY29tcG9uZW50JztcbmltcG9ydCB7IEdvb2dsZU1hcE5hdGl2ZUNvbXBvbmVudCB9IGZyb20gJy4vbmF0aXZlL2dvb2dsZS1tYXAtbmF0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtHb29nbGVNYXBzQ29tcG9uZW50LCBHb29nbGVNYXBXZWJDb21wb25lbnQsIEdvb2dsZU1hcE5hdGl2ZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtHb29nbGVNYXBzQ29tcG9uZW50LCBHb29nbGVNYXBXZWJDb21wb25lbnQsIEdvb2dsZU1hcE5hdGl2ZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwc01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiSW5qZWN0IiwiRE9DVU1FTlQiLCJHb29nbGVNYXBzIiwiR29vZ2xlTWFwc0V2ZW50IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O2dDQUpEOzs7Ozs7O0FDQ0E7UUFnQkU7U0FBaUI7Ozs7UUFFakIsc0NBQVE7OztZQUFSO2FBQ0M7Ozs7OztRQUVELHVDQUFTOzs7OztZQUFULFVBQVUsR0FBVyxFQUFFLEdBQVc7YUFDakM7O29CQXBCRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSx1S0FHVDtxQkFFRjs7Ozs7Z0NBR0VDLFFBQUs7NkJBQ0xBLFFBQUssU0FBQyxRQUFROzJCQUNkQSxRQUFLOztrQ0FmUjs7Ozs7OztBQ0NBO1FBcUJJLCtCQUFvQixRQUFtQixFQUMzQixTQUNrQixTQUFTO1lBRm5CLGFBQVEsR0FBUixRQUFRLENBQVc7WUFDM0IsWUFBTyxHQUFQLE9BQU87WUFDVyxjQUFTLEdBQVQsU0FBUyxDQUFBO3dCQVhmLEVBQUU7dUJBR0wsVUFBVTt1QkFDVixTQUFTOzJCQUVTLEVBQUU7OEJBQ1gsS0FBSztTQUtsQzs7OztRQUVELHdDQUFR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