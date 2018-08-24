(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('google-maps', ['exports', '@angular/core', '@angular/platform-browser'], factory) :
    (factory((global['google-maps'] = {}),global.ng.core,global.ng.platformBrowser));
}(this, (function (exports,i0,platformBrowser) { 'use strict';

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
                    },] },
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
        GoogleMapsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fiv-google-maps',
                        template: "\n    <p>\n      google-maps works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        GoogleMapsComponent.ctorParameters = function () { return []; };
        GoogleMapsComponent.propDecorators = {
            isCordova: [{ type: i0.Input }]
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
            { type: i0.Component, args: [{
                        selector: 'fiv-google-map-web',
                        template: "",
                        styles: [":host{display:block;width:100%;height:100%}"],
                    },] },
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
    var GoogleMapsModule = (function () {
        function GoogleMapsModule() {
        }
        GoogleMapsModule.decorators = [
            { type: i0.NgModule, args: [{
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

    exports.GoogleMapsService = GoogleMapsService;
    exports.GoogleMapsComponent = GoogleMapsComponent;
    exports.GoogleMapsModule = GoogleMapsModule;
    exports.ɵa = GoogleMapWebComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcHMudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9nb29nbGUtbWFwcy9saWIvZ29vZ2xlLW1hcHMuc2VydmljZS50cyIsIm5nOi8vZ29vZ2xlLW1hcHMvbGliL2dvb2dsZS1tYXBzLmNvbXBvbmVudC50cyIsIm5nOi8vZ29vZ2xlLW1hcHMvbGliL3dlYi9nb29nbGUtbWFwLXdlYi50cyIsIm5nOi8vZ29vZ2xlLW1hcHMvbGliL2dvb2dsZS1tYXBzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcHNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1nb29nbGUtbWFwcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBnb29nbGUtbWFwcyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaXNDb3Jkb3ZhOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5qZWN0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7fSBmcm9tICdAdHlwZXMvZ29vZ2xlbWFwcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZml2LWdvb2dsZS1tYXAtd2ViJyxcbiAgICB0ZW1wbGF0ZTogYGAsXG4gICAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX1gXSxcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwV2ViQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgnYXBpS2V5JykgYXBpS2V5OiBzdHJpbmc7XG4gICAgQElucHV0KCkgem9vbTogbnVtYmVyID0gMTU7XG4gICAgQElucHV0KCkgbWFwT3B0aW9uczogZ29vZ2xlLm1hcHMuTWFwT3B0aW9uczsgLy8gVE9ETyBlbmFibGUgbWFwb3B0aW9uc1xuXG4gICAgcHVibGljIGxhdDogbnVtYmVyID0gNTAuOTU3NjE5MTtcbiAgICBwdWJsaWMgbG5nOiBudW1iZXIgPSA2LjgyNzI0MDg7XG4gICAgcHVibGljIG1hcDogYW55O1xuICAgIHB1YmxpYyBtYXJrZXJzOiBhbnlbXSA9IFtdO1xuICAgIHByaXZhdGUgbWFwc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgbmV0d29ya0hhbmRsZXIgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50KSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLmluaXQoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR29vZ2xlIE1hcHMgcmVhZHkuXCIpXG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCk6IFByb21pc2U8YW55PiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5sb2FkU0RLKCkudGhlbigocmVzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmluaXRNYXAoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRTREsoKTogUHJvbWlzZTxhbnk+IHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgR29vZ2xlIE1hcHMgU0RLXCIpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5tYXBzTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmplY3RTREsoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoJ1NESyBhbHJlYWR5IGxvYWRlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGluamVjdFNESygpOiBQcm9taXNlPGFueT4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHdpbmRvd1snbWFwSW5pdCddID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHNjcmlwdCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBzY3JpcHQuaWQgPSAnZ29vZ2xlTWFwcyc7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT0nICsgdGhpcy5hcGlLZXkgKyAnJmNhbGxiYWNrPW1hcEluaXQnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoJycpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZG9jdW1lbnQuYm9keSwgc2NyaXB0KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdE1hcCgpOiBQcm9taXNlPGFueT4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgbGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyh0aGlzLmxhdCwgdGhpcy5sbmcpO1xuICAgICAgICAgICAgbGV0IG1hcE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgY2VudGVyOiBsYXRMbmcsXG4gICAgICAgICAgICAgICAgem9vbTogdGhpcy56b29tXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIG1hcE9wdGlvbnMpO1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZE1hcmtlcihsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgICBsZXQgbGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyk7XG5cbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXG4gICAgICAgICAgICBwb3NpdGlvbjogbGF0TG5nXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG5cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBHb29nbGVNYXBXZWJDb21wb25lbnQgfSBmcm9tICcuL3dlYi9nb29nbGUtbWFwLXdlYic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR29vZ2xlTWFwc0NvbXBvbmVudCB9IGZyb20gJy4vZ29vZ2xlLW1hcHMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtHb29nbGVNYXBzQ29tcG9uZW50LCBHb29nbGVNYXBXZWJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbR29vZ2xlTWFwc0NvbXBvbmVudCwgR29vZ2xlTWFwV2ViQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJJbnB1dCIsIlJlbmRlcmVyMiIsIkVs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