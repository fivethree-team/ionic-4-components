(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-native-map-bottom-sheet-native-map-bottom-sheet-module~pages-native-map-native-map-mod~7c087229"],{

/***/ "./dist/google-maps/fesm5/fivethree-google-maps.js":
/*!*********************************************************!*\
  !*** ./dist/google-maps/fesm5/fivethree-google-maps.js ***!
  \*********************************************************/
/*! exports provided: GoogleMapsComponent, GoogleMapsNativeComponent, GoogleMapsWebComponent, GoogleMapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsComponent", function() { return GoogleMapsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsNativeComponent", function() { return GoogleMapsNativeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsWebComponent", function() { return GoogleMapsWebComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsModule", function() { return GoogleMapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GoogleMapsComponent = /** @class */ (function () {
    function GoogleMapsComponent() {
        this.zoom = 15;
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
    /**
     * @return {?}
     */
    GoogleMapsComponent.prototype.hideMarkers = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    GoogleMapsComponent.prototype.showMarkers = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    GoogleMapsComponent.prototype.deleteMarker = /**
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    function (lat, lng) {
    };
    /**
     * @return {?}
     */
    GoogleMapsComponent.prototype.deleteMarkers = /**
     * @return {?}
     */
    function () {
    };
    GoogleMapsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-google-maps',
                    template: "\n    <fiv-google-maps-web *ngIf=\"!isCordova\" [apiKey]=\"apiKey\"></fiv-google-maps-web>\n    <fiv-google-maps-native *ngIf=\"isCordova\"></fiv-google-maps-native>\n  "
                }] }
    ];
    /** @nocollapse */
    GoogleMapsComponent.ctorParameters = function () { return []; };
    GoogleMapsComponent.propDecorators = {
        isCordova: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        apiKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        zoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return GoogleMapsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GoogleMapsNativeComponent = /** @class */ (function () {
    function GoogleMapsNativeComponent() {
        this.zoom = 14;
        this.markers = [];
        this.mapReady = false;
    }
    /**
     * @return {?}
     */
    GoogleMapsNativeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('GoogleMapNativeComponent ng on init');
        this.loadMap();
    };
    /**
     * @return {?}
     */
    GoogleMapsNativeComponent.prototype.loadMap = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('loading Map');
        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMaps"].create('map', {
            controls: {
                myLocation: true,
                myLocationButton: false,
                mapToolbar: false,
                compass: true,
            }
        });
        this.map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MAP_READY).then(function () {
            _this.mapReady = true;
            _this.zoomToMyLocation();
        });
    };
    /**
     * @return {?}
     */
    GoogleMapsNativeComponent.prototype.zoomToMyLocation = /**
     * @return {?}
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var location;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('zoom to my location Map');
                        return [4 /*yield*/, this.map.getMyLocation({ enableHighAccuracy: true })];
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
    GoogleMapsNativeComponent.prototype.moveCenterTo = /**
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
    GoogleMapsNativeComponent.prototype.addMarker = /**
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    function (lat, lng) {
        /** @type {?} */
        var marker = this.map.addMarkerSync({
            animation: 'DROP',
            position: {
                lat: lat,
                lng: lng
            }
        });
        this.markers.push(marker);
    };
    /**
     * @return {?}
     */
    GoogleMapsNativeComponent.prototype.hideMarkers = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    GoogleMapsNativeComponent.prototype.showMarkers = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    GoogleMapsNativeComponent.prototype.deleteMarker = /**
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    function (lat, lng) {
    };
    /**
     * @return {?}
     */
    GoogleMapsNativeComponent.prototype.deleteMarkers = /**
     * @return {?}
     */
    function () {
        this.markers.forEach(function (marker) { return marker.remove(); });
        this.markers = [];
    };
    GoogleMapsNativeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-google-maps-native',
                    template: "<div id=\"map\"></div>",
                    styles: [":host #map{height:100%;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    GoogleMapsNativeComponent.ctorParameters = function () { return []; };
    GoogleMapsNativeComponent.propDecorators = {
        zoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        mapOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return GoogleMapsNativeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GoogleMapsWebComponent = /** @class */ (function () {
    function GoogleMapsWebComponent(renderer, element, _document) {
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
    GoogleMapsWebComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init().then(function (res) {
            console.log('Google Maps ready.');
        }, function (err) {
            console.log(err);
        });
    };
    /**
     * @return {?}
     */
    GoogleMapsWebComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadSDK().then(function (res) {
                _this.initMap().then(function () {
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
    GoogleMapsWebComponent.prototype.loadSDK = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('Loading Google Maps SDK');
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
    GoogleMapsWebComponent.prototype.injectSDK = /**
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
    GoogleMapsWebComponent.prototype.initMap = /**
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
    GoogleMapsWebComponent.prototype.addMarker = /**
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
    /**
     * @return {?}
     */
    GoogleMapsWebComponent.prototype.hideMarkers = /**
     * @return {?}
     */
    function () {
        this.setMapOnAllMarkers(null);
    };
    /**
     * @return {?}
     */
    GoogleMapsWebComponent.prototype.showMarkers = /**
     * @return {?}
     */
    function () {
        this.setMapOnAllMarkers(this.map);
    };
    /**
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    GoogleMapsWebComponent.prototype.deleteMarker = /**
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    function (lat, lng) {
        /** @type {?} */
        var index = this.markers.findIndex(function (m) {
            return m.getPosition().lat() === lat
                && m.getPosition().lng() === lng;
        });
        if (index > -1) {
            this.markers[index].setMap(null);
            this.markers = this.markers.splice(index, 1);
        }
    };
    /**
     * @return {?}
     */
    GoogleMapsWebComponent.prototype.deleteMarkers = /**
     * @return {?}
     */
    function () {
        this.hideMarkers();
        this.markers = [];
    };
    /**
     * @param {?} map
     * @return {?}
     */
    GoogleMapsWebComponent.prototype.setMapOnAllMarkers = /**
     * @param {?} map
     * @return {?}
     */
    function (map) {
        this.markers.forEach(function (marker) { return marker.setMap(map); });
    };
    GoogleMapsWebComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fiv-google-maps-web',
                    template: "",
                    styles: [":host{display:block;width:100%;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    GoogleMapsWebComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
    ]; };
    GoogleMapsWebComponent.propDecorators = {
        apiKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        zoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        mapOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return GoogleMapsWebComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GoogleMapsModule = /** @class */ (function () {
    function GoogleMapsModule() {
    }
    GoogleMapsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                    ],
                    declarations: [
                        GoogleMapsComponent,
                        GoogleMapsWebComponent,
                        GoogleMapsNativeComponent
                    ],
                    exports: [
                        GoogleMapsComponent,
                        GoogleMapsWebComponent,
                        GoogleMapsNativeComponent
                    ]
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml2ZXRocmVlLWdvb2dsZS1tYXBzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZml2ZXRocmVlL2dvb2dsZS1tYXBzL2xpYi9nb29nbGUtbWFwcy5jb21wb25lbnQudHMiLCJuZzovL0BmaXZldGhyZWUvZ29vZ2xlLW1hcHMvbGliL25hdGl2ZS9nb29nbGUtbWFwcy1uYXRpdmUudHMiLCJuZzovL0BmaXZldGhyZWUvZ29vZ2xlLW1hcHMvbGliL3dlYi9nb29nbGUtbWFwcy13ZWIudHMiLCJuZzovL0BmaXZldGhyZWUvZ29vZ2xlLW1hcHMvbGliL2dvb2dsZS1tYXBzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaXZHb29nbGVNYXBzIH0gZnJvbSAnLi9nb29nbGUtbWFwcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWdvb2dsZS1tYXBzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Zml2LWdvb2dsZS1tYXBzLXdlYiAqbmdJZj1cIiFpc0NvcmRvdmFcIiBbYXBpS2V5XT1cImFwaUtleVwiPjwvZml2LWdvb2dsZS1tYXBzLXdlYj5cbiAgICA8Zml2LWdvb2dsZS1tYXBzLW5hdGl2ZSAqbmdJZj1cImlzQ29yZG92YVwiPjwvZml2LWdvb2dsZS1tYXBzLW5hdGl2ZT5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBGaXZHb29nbGVNYXBzIHtcblxuICBASW5wdXQoKSBpc0NvcmRvdmE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFwaUtleTogc3RyaW5nO1xuICBASW5wdXQoKSB6b29tID0gMTU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGFkZE1hcmtlcihsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpIHtcbiAgfVxuXG4gIGhpZGVNYXJrZXJzKCkge1xuICB9XG4gIHNob3dNYXJrZXJzKCkge1xuICB9XG4gIGRlbGV0ZU1hcmtlcihsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpIHtcbiAgfVxuICBkZWxldGVNYXJrZXJzKCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEZpdkdvb2dsZU1hcHMgfSBmcm9tICcuLy4uL2dvb2dsZS1tYXBzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBHb29nbGVNYXAsIEdvb2dsZU1hcHMsIEdvb2dsZU1hcE9wdGlvbnMsIEdvb2dsZU1hcHNFdmVudCwgSHRtbEluZm9XaW5kb3csIExhdExuZywgTWFya2VyLFxuICAgIE15TG9jYXRpb25cbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9nb29nbGUtbWFwcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZml2LWdvb2dsZS1tYXBzLW5hdGl2ZScsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGlkPVwibWFwXCI+PC9kaXY+YCxcbiAgICBzdHlsZVVybHM6IFsnZ29vZ2xlLW1hcHMtbmF0aXZlLnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwc05hdGl2ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRml2R29vZ2xlTWFwcyB7XG5cbiAgICBASW5wdXQoKSB6b29tID0gMTQ7XG4gICAgQElucHV0KCkgbWFwT3B0aW9uczogR29vZ2xlTWFwT3B0aW9ucztcblxuICAgIG1hcDogR29vZ2xlTWFwO1xuICAgIG1hcmtlcnM6IE1hcmtlcltdID0gW107XG4gICAgbWFwUmVhZHkgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZU1hcE5hdGl2ZUNvbXBvbmVudCBuZyBvbiBpbml0Jyk7XG4gICAgICAgIHRoaXMubG9hZE1hcCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZE1hcCgpOiBhbnkge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9hZGluZyBNYXAnKTtcbiAgICAgICAgdGhpcy5tYXAgPSBHb29nbGVNYXBzLmNyZWF0ZSgnbWFwJywge1xuICAgICAgICAgICAgY29udHJvbHM6IHtcbiAgICAgICAgICAgICAgICBteUxvY2F0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIG15TG9jYXRpb25CdXR0b246IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1hcFRvb2xiYXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbXBhc3M6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1hcC5vbmUoR29vZ2xlTWFwc0V2ZW50Lk1BUF9SRUFEWSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hcFJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuem9vbVRvTXlMb2NhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyB6b29tVG9NeUxvY2F0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnem9vbSB0byBteSBsb2NhdGlvbiBNYXAnKTtcbiAgICAgICAgY29uc3QgbG9jYXRpb246IE15TG9jYXRpb24gPSBhd2FpdCB0aGlzLm1hcC5nZXRNeUxvY2F0aW9uKHsgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLm1vdmVDZW50ZXJUbyhsb2NhdGlvbi5sYXRMbmcpO1xuICAgIH1cblxuICAgIG1vdmVDZW50ZXJUbyhsYXRMbmc6IExhdExuZykge1xuICAgICAgICB0aGlzLm1hcC5hbmltYXRlQ2FtZXJhKHsgem9vbTogdGhpcy56b29tLCB0YXJnZXQ6IGxhdExuZywgZHVyYXRpb246IDM1MCB9KTtcbiAgICB9XG5cbiAgICBhZGRNYXJrZXIobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG1hcmtlciA9IHRoaXMubWFwLmFkZE1hcmtlclN5bmMoe1xuICAgICAgICAgICAgYW5pbWF0aW9uOiAnRFJPUCcsXG4gICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgIGxhdDogbGF0LFxuICAgICAgICAgICAgICAgIGxuZzogbG5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgIH1cblxuICAgIGhpZGVNYXJrZXJzKCkge1xuICAgIH1cblxuICAgIHNob3dNYXJrZXJzKCkge1xuICAgIH1cblxuICAgIGRlbGV0ZU1hcmtlcihsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpIHtcbiAgICB9XG5cbiAgICBkZWxldGVNYXJrZXJzKCkge1xuICAgICAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaChtYXJrZXIgPT4gbWFya2VyLnJlbW92ZSgpKTtcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gW107XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRml2R29vZ2xlTWFwcyB9IGZyb20gJy4uL2dvb2dsZS1tYXBzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEluamVjdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Zpdi1nb29nbGUtbWFwcy13ZWInLFxuICAgIHRlbXBsYXRlOiBgYCxcbiAgICBzdHlsZVVybHM6IFsnZ29vZ2xlLW1hcHMtd2ViLnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwc1dlYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRml2R29vZ2xlTWFwcyB7XG5cbiAgICBASW5wdXQoKSBhcGlLZXk6IHN0cmluZztcbiAgICBASW5wdXQoKSB6b29tID0gMTU7XG4gICAgQElucHV0KCkgbWFwT3B0aW9uczogZ29vZ2xlLm1hcHMuTWFwT3B0aW9uczsgLy8gVE9ETyBlbmFibGUgbWFwb3B0aW9uc1xuXG4gICAgcHVibGljIGxhdCA9IDUwLjk1NzYxOTE7XG4gICAgcHVibGljIGxuZyA9IDYuODI3MjQwODtcbiAgICBwdWJsaWMgbWFwOiBnb29nbGUubWFwcy5NYXA7XG4gICAgcHVibGljIG1hcmtlcnM6IGdvb2dsZS5tYXBzLk1hcmtlcltdID0gW107XG4gICAgcHJpdmF0ZSBtYXBzTG9hZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0KCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlIE1hcHMgcmVhZHkuJyk7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPGFueT4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMubG9hZFNESygpLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0TWFwKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkU0RLKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIEdvb2dsZSBNYXBzIFNESycpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1hcHNMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluamVjdFNESygpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdCgnU0RLIGFscmVhZHkgbG9hZGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIHByaXZhdGUgaW5qZWN0U0RLKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3aW5kb3dbJ21hcEluaXQnXSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcHNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgc2NyaXB0LmlkID0gJ2dvb2dsZU1hcHMnO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JyArIHRoaXMuYXBpS2V5ICsgJyZjYWxsYmFjaz1tYXBJbml0JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRNYXAoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHRoaXMubGF0LCB0aGlzLmxuZyk7XG4gICAgICAgICAgICBjb25zdCBtYXBPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGNlbnRlcjogbGF0TG5nLFxuICAgICAgICAgICAgICAgIHpvb206IHRoaXMuem9vbVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBtYXBPcHRpb25zKTtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRNYXJrZXIobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0LCBsbmcpO1xuICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxuICAgICAgICAgICAgcG9zaXRpb246IGxhdExuZ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcbiAgICB9XG5cbiAgICBoaWRlTWFya2VycygpIHtcbiAgICAgICAgdGhpcy5zZXRNYXBPbkFsbE1hcmtlcnMobnVsbCk7XG4gICAgfVxuXG4gICAgc2hvd01hcmtlcnMoKSB7XG4gICAgICAgIHRoaXMuc2V0TWFwT25BbGxNYXJrZXJzKHRoaXMubWFwKTtcbiAgICB9XG5cbiAgICBkZWxldGVNYXJrZXIobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tYXJrZXJzLmZpbmRJbmRleChtID0+XG4gICAgICAgICAgICBtLmdldFBvc2l0aW9uKCkubGF0KCkgPT09IGxhdFxuICAgICAgICAgICAgJiYgbS5nZXRQb3NpdGlvbigpLmxuZygpID09PSBsbmcpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5tYXJrZXJzW2luZGV4XS5zZXRNYXAobnVsbCk7XG4gICAgICAgICAgICB0aGlzLm1hcmtlcnMgPSB0aGlzLm1hcmtlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZU1hcmtlcnMoKSB7XG4gICAgICAgIHRoaXMuaGlkZU1hcmtlcnMoKTtcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gW107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRNYXBPbkFsbE1hcmtlcnMobWFwOiBnb29nbGUubWFwcy5NYXApIHtcbiAgICAgICAgdGhpcy5tYXJrZXJzLmZvckVhY2gobWFya2VyID0+IG1hcmtlci5zZXRNYXAobWFwKSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR29vZ2xlTWFwc1dlYkNvbXBvbmVudCB9IGZyb20gJy4vd2ViL2dvb2dsZS1tYXBzLXdlYic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR29vZ2xlTWFwc0NvbXBvbmVudCB9IGZyb20gJy4vZ29vZ2xlLW1hcHMuY29tcG9uZW50JztcbmltcG9ydCB7IEdvb2dsZU1hcHNOYXRpdmVDb21wb25lbnQgfSBmcm9tICcuL25hdGl2ZS9nb29nbGUtbWFwcy1uYXRpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEdvb2dsZU1hcHNDb21wb25lbnQsXG4gICAgR29vZ2xlTWFwc1dlYkNvbXBvbmVudCxcbiAgICBHb29nbGVNYXBzTmF0aXZlQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBHb29nbGVNYXBzQ29tcG9uZW50LFxuICAgIEdvb2dsZU1hcHNXZWJDb21wb25lbnQsXG4gICAgR29vZ2xlTWFwc05hdGl2ZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcHNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0lBZ0JFO29CQUZnQixFQUFFO0tBRUQ7Ozs7SUFFakIsc0NBQVE7OztJQUFSO0tBQ0M7Ozs7OztJQUVELHVDQUFTOzs7OztJQUFULFVBQVUsR0FBVyxFQUFFLEdBQVc7S0FDakM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7S0FDQzs7OztJQUNELHlDQUFXOzs7SUFBWDtLQUNDOzs7Ozs7SUFDRCwwQ0FBWTs7Ozs7SUFBWixVQUFhLEdBQVcsRUFBRSxHQUFXO0tBQ3BDOzs7O0lBQ0QsMkNBQWE7OztJQUFiO0tBQ0M7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLDJL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

/***/ }),

/***/ "./node_modules/@ionic-native/google-maps/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ionic-native/google-maps/index.js ***!
  \*********************************************************/
/*! exports provided: LatLng, LatLngBounds, VisibleRegion, StreetViewSource, GoogleMapsEvent, GoogleMapsAnimation, GoogleMapsMapTypeId, GoogleMaps, BaseClass, BaseArrayClass, Circle, Environment, Geocoder, LocationService, Encoding, Poly, Spherical, StreetViewPanorama, GoogleMap, GroundOverlay, HtmlInfoWindow, Marker, MarkerCluster, Polygon, Polyline, TileOverlay, KmlOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatLng", function() { return LatLng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatLngBounds", function() { return LatLngBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibleRegion", function() { return VisibleRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewSource", function() { return StreetViewSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsEvent", function() { return GoogleMapsEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAnimation", function() { return GoogleMapsAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsMapTypeId", function() { return GoogleMapsMapTypeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMaps", function() { return GoogleMaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseClass", function() { return BaseClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseArrayClass", function() { return BaseArrayClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Environment", function() { return Environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geocoder", function() { return Geocoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encoding", function() { return Encoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poly", function() { return Poly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spherical", function() { return Spherical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewPanorama", function() { return StreetViewPanorama; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMap", function() { return GoogleMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroundOverlay", function() { return GroundOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlInfoWindow", function() { return HtmlInfoWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerCluster", function() { return MarkerCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return Polyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileOverlay", function() { return TileOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlOverlay", function() { return KmlOverlay; });
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var LatLng = /** @class */ (function () {
    function LatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    LatLng.prototype.equals = function (other) {
        return this.lat === other.lat && this.lng === other.lng;
    };
    LatLng.prototype.toString = function () {
        return this.lat + ',' + this.lng;
    };
    LatLng.prototype.toUrlValue = function (precision) {
        precision = precision || 6;
        return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
    };
    return LatLng;
}());

var LatLngBounds = /** @class */ (function () {
    function LatLngBounds(points) {
        this._objectInstance = new (GoogleMapsOriginal.getPlugin()).LatLngBounds(points);
    }
    LatLngBounds.prototype.toString = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toString", { "sync": true }, arguments); };
    LatLngBounds.prototype.toUrlValue = function (precision) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toUrlValue", { "sync": true }, arguments); };
    LatLngBounds.prototype.extend = function (LatLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "extend", { "sync": true }, arguments); };
    LatLngBounds.prototype.contains = function (LatLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "contains", { "sync": true }, arguments); };
    LatLngBounds.prototype.getCenter = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCenter", { "sync": true }, arguments); };
    Object.defineProperty(LatLngBounds.prototype, "northeast", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "northeast"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "northeast", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LatLngBounds.prototype, "southwest", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "southwest"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "southwest", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LatLngBounds.prototype, "type", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "type"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "type", value); },
        enumerable: true,
        configurable: true
    });
    return LatLngBounds;
}());

var VisibleRegion = /** @class */ (function () {
    function VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight) {
        this._objectInstance = new (GoogleMapsOriginal.getPlugin()).VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight);
    }
    VisibleRegion.prototype.toString = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toString", { "sync": true }, arguments); };
    VisibleRegion.prototype.toUrlValue = function (precision) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toUrlValue", { "sync": true }, arguments); };
    VisibleRegion.prototype.contains = function (LatLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "contains", { "sync": true }, arguments); };
    Object.defineProperty(VisibleRegion.prototype, "northeast", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "northeast"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "northeast", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "southwest", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "southwest"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "southwest", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "farLeft", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "farLeft"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "farLeft", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "farRight", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "farRight"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "farRight", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "nearLeft", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "nearLeft"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "nearLeft", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "nearRight", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "nearRight"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "nearRight", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "type", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "type"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "type", value); },
        enumerable: true,
        configurable: true
    });
    return VisibleRegion;
}());

/**
 * @hidden
 */
var StreetViewSource = {
    DEFAULT: 'DEFAULT',
    OUTDOOR: 'OUTDOOR'
};
/**
 * @hidden
 * You can listen to these events where appropriate
 */
var GoogleMapsEvent = {
    MAP_READY: 'map_ready',
    MAP_CLICK: 'map_click',
    MAP_LONG_CLICK: 'map_long_click',
    POI_CLICK: 'poi_click',
    MY_LOCATION_CLICK: 'my_location_click',
    MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
    INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
    INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
    CAMERA_MOVE_START: 'camera_move_start',
    CAMERA_MOVE: 'camera_move',
    CAMERA_MOVE_END: 'camera_move_end',
    OVERLAY_CLICK: 'overlay_click',
    POLYGON_CLICK: 'polygon_click',
    POLYLINE_CLICK: 'polyline_click',
    CIRCLE_CLICK: 'circle_click',
    GROUND_OVERLAY_CLICK: 'groundoverlay_click',
    INFO_CLICK: 'info_click',
    INFO_LONG_CLICK: 'info_long_click',
    INFO_CLOSE: 'info_close',
    INFO_OPEN: 'info_open',
    MARKER_CLICK: 'marker_click',
    MARKER_DRAG: 'marker_drag',
    MARKER_DRAG_START: 'marker_drag_start',
    MARKER_DRAG_END: 'marker_drag_end',
    MAP_DRAG: 'map_drag',
    MAP_DRAG_START: 'map_drag_start',
    MAP_DRAG_END: 'map_drag_end',
    KML_CLICK: 'kml_click',
    PANORAMA_READY: 'panorama_ready',
    PANORAMA_CAMERA_CHANGE: 'panorama_camera_change',
    PANORAMA_LOCATION_CHANGE: 'panorama_location_change',
    PANORAMA_CLICK: 'panorama_click'
};
/**
 * @hidden
 */
var GoogleMapsAnimation = {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
};
/**
 * @hidden
 */
var GoogleMapsMapTypeId = {
    NORMAL: 'MAP_TYPE_NORMAL',
    ROADMAP: 'MAP_TYPE_NORMAL',
    SATELLITE: 'MAP_TYPE_SATELLITE',
    HYBRID: 'MAP_TYPE_HYBRID',
    TERRAIN: 'MAP_TYPE_TERRAIN',
    NONE: 'MAP_TYPE_NONE'
};
var GoogleMapsOriginal = /** @class */ (function (_super) {
    __extends(GoogleMapsOriginal, _super);
    function GoogleMapsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new GoogleMap instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {GoogleMapOptions} [options] Options
     * @return {GoogleMap}
     */
    GoogleMapsOriginal.prototype.create = function (element, options) {
        if (element instanceof HTMLElement) {
            if (element.getAttribute('__pluginMapId')) {
                console.error('GoogleMaps', element.tagName + '[__pluginMapId=\'' + element.getAttribute('__pluginMapId') + '\'] has already map.');
                return;
            }
        }
        else if (typeof element === 'object') {
            options = element;
            element = null;
        }
        var googleMap = new GoogleMap(element, options);
        googleMap.set('_overlays', {});
        return googleMap;
    };
    //
    // /**
    //  * @deprecation
    //  * @hidden
    //  */
    // create(element: string | HTMLElement | GoogleMapOptions, options?: GoogleMapOptions): GoogleMap {
    //   console.error('GoogleMaps', '[deprecated] Please use GoogleMapsOriginal.create()');
    //   return GoogleMapsOriginal.create(element, options);
    // }
    //
    /**
     * Creates a new StreetView instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {StreetViewOptions} [options] Options
     * @return {StreetViewPanorama}
     */
    GoogleMapsOriginal.prototype.createPanorama = function (element, options) {
        if (element instanceof HTMLElement) {
            if (element.getAttribute('__pluginMapId')) {
                console.error('GoogleMaps', element.tagName + '[__pluginMapId=\'' + element.getAttribute('__pluginMapId') + '\'] has already map.');
                return;
            }
        }
        return new StreetViewPanorama(element, options);
    };
    GoogleMapsOriginal.pluginName = "GoogleMaps";
    GoogleMapsOriginal.pluginRef = "plugin.google.maps";
    GoogleMapsOriginal.plugin = "cordova-plugin-googlemaps";
    GoogleMapsOriginal.repo = "https://github.com/mapsplugin/cordova-plugin-googlemaps";
    GoogleMapsOriginal.document = "https://ionicframework.com/docs/native/google-maps/";
    GoogleMapsOriginal.install = "ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID=\"YOUR_ANDROID_API_KEY_IS_HERE\" --variable API_KEY_FOR_IOS=\"YOUR_IOS_API_KEY_IS_HERE\"";
    GoogleMapsOriginal.installVariables = ["API_KEY_FOR_ANDROID", "API_KEY_FOR_IOS"];
    GoogleMapsOriginal.platforms = ["Android", "iOS", "Browser"];
    return GoogleMapsOriginal;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["IonicNativePlugin"]));
var GoogleMaps = new GoogleMapsOriginal();

var BaseClass = /** @class */ (function () {
    function BaseClass() {
        this._objectInstance = new (GoogleMapsOriginal.getPlugin().BaseClass)();
    }
    BaseClass.prototype.addEventListener = function (eventName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this._objectInstance.on(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (args[args.length - 1] instanceof GoogleMapsOriginal.getPlugin().BaseClass) {
                            if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
                                args[args.length - 1] = _this;
                            }
                            else if (_this instanceof MarkerCluster) {
                                var overlay = _this.get(args[args.length - 1].getId());
                                if (!overlay) {
                                    var markerJS = args[args.length - 1];
                                    var markerId_1 = markerJS.getId();
                                    var markerCluster = _this;
                                    overlay = new Marker(markerCluster.getMap(), markerJS);
                                    _this.get('_overlays')[markerId_1] = overlay;
                                    markerJS.one(markerJS.getId() + '_remove', function () {
                                        _this.get('_overlays')[markerId_1] = null;
                                    });
                                }
                                args[args.length - 1] = overlay;
                            }
                            else {
                                args[args.length - 1] = _this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
                            }
                        }
                        observer.next(args);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
                    _this._objectInstance.one(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (args[args.length - 1] instanceof GoogleMapsOriginal.getPlugin().BaseClass) {
                            if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
                                args[args.length - 1] = _this;
                            }
                            else if (_this instanceof MarkerCluster) {
                                var overlay = _this.get(args[args.length - 1].getId());
                                if (!overlay) {
                                    var markerJS = args[args.length - 1];
                                    var markerId_2 = markerJS.getId();
                                    var markerCluster = _this;
                                    overlay = new Marker(markerCluster.getMap(), markerJS);
                                    _this.get('_overlays')[markerId_2] = overlay;
                                    markerJS.one(markerJS.getId() + '_remove', function () {
                                        _this.get('_overlays')[markerId_2] = null;
                                    });
                                }
                                args[args.length - 1] = overlay;
                            }
                            else {
                                args[args.length - 1] = _this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
                            }
                        }
                        resolve(args);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.get = function (key) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "get", { "sync": true }, arguments); };
    BaseClass.prototype.set = function (key, value, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "set", { "sync": true }, arguments); };
    BaseClass.prototype.bindTo = function (key, target, targetKey, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "bindTo", { "sync": true }, arguments); };
    BaseClass.prototype.on = function (eventName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this._objectInstance.on(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (args[args.length - 1] instanceof GoogleMapsOriginal.getPlugin().BaseClass) {
                            if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
                                args[args.length - 1] = _this;
                            }
                            else if (_this instanceof MarkerCluster) {
                                var overlay = _this.get(args[args.length - 1].getId());
                                if (!overlay) {
                                    var markerJS = args[args.length - 1];
                                    var markerId_3 = markerJS.getId();
                                    var markerCluster = _this;
                                    overlay = new Marker(markerCluster.getMap(), markerJS);
                                    _this.get('_overlays')[markerId_3] = overlay;
                                    markerJS.one(markerJS.getId() + '_remove', function () {
                                        _this.get('_overlays')[markerId_3] = null;
                                    });
                                }
                                args[args.length - 1] = overlay;
                            }
                            else {
                                args[args.length - 1] = _this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
                            }
                        }
                        observer.next(args);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.one = function (eventName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
                    _this._objectInstance.one(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (args[args.length - 1] instanceof GoogleMapsOriginal.getPlugin().BaseClass) {
                            if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
                                args[args.length - 1] = _this;
                            }
                            else if (_this instanceof MarkerCluster) {
                                var overlay = _this.get(args[args.length - 1].getId());
                                if (!overlay) {
                                    var markerJS = args[args.length - 1];
                                    var markerId_4 = markerJS.getId();
                                    var markerCluster = _this;
                                    overlay = new Marker(markerCluster.getMap(), markerJS);
                                    _this.get('_overlays')[markerId_4] = overlay;
                                    markerJS.one(markerJS.getId() + '_remove', function () {
                                        _this.get('_overlays')[markerId_4] = null;
                                    });
                                }
                                args[args.length - 1] = overlay;
                            }
                            else {
                                args[args.length - 1] = _this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
                            }
                        }
                        resolve(args);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.empty = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "empty", { "sync": true }, arguments); };
    BaseClass.prototype.trigger = function (eventName) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "trigger", { "sync": true }, arguments);
    };
    BaseClass.prototype.destroy = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "destroy", { "sync": true }, arguments); };
    BaseClass.prototype.removeEventListener = function (eventName, listener) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "removeEventListener", { "sync": true }, arguments); };
    BaseClass.prototype.off = function (eventName, listener) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "off", { "sync": true }, arguments); };
    BaseClass.plugin = "cordova-plugin-googlemaps";
    BaseClass.pluginName = "GoogleMaps";
    BaseClass.pluginRef = "plugin.google.maps.BaseClass";
    BaseClass.repo = "";
    return BaseClass;
}());

var BaseArrayClass = /** @class */ (function (_super) {
    __extends(BaseArrayClass, _super);
    function BaseArrayClass(initialData) {
        var _this = _super.call(this) || this;
        if (initialData instanceof GoogleMapsOriginal.getPlugin().BaseArrayClass) {
            _this._objectInstance = initialData;
        }
        else if (Array.isArray(initialData)) {
            _this._objectInstance = new (GoogleMapsOriginal.getPlugin().BaseArrayClass)(initialData);
        }
        else {
            _this._objectInstance = new (GoogleMapsOriginal.getPlugin().BaseArrayClass)([]);
        }
        return _this;
    }
    BaseArrayClass.prototype.empty = function (noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "empty", { "sync": true }, arguments); };
    BaseArrayClass.prototype.forEach = function (fn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "forEach", { "sync": true }, arguments); };
    /**
     * Iterate over each element, calling the provided callback.
     * @param fn {Function}
     * @return {Promise<void>}
     */
    BaseArrayClass.prototype.forEachAsync = function (fn) {
        var _this = this;
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
            _this._objectInstance.forEach(fn, resolve);
        });
    };
    BaseArrayClass.prototype.map = function (fn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "map", { "sync": true }, arguments); };
    /**
     * Iterate over each element, calling the provided callback.
     * Then you can get the results of each callback.
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    BaseArrayClass.prototype.mapAsync = function (fn) {
        var _this = this;
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
            _this._objectInstance.map(fn, resolve);
        });
    };
    /**
     * Same as `mapAsync`, but keep the execution order
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    BaseArrayClass.prototype.mapSeries = function (fn) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.mapSeries(fn, resolve);
        });
    };
    BaseArrayClass.prototype.filter = function (fn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "filter", { "sync": true }, arguments); };
    /**
     * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<T[]>} returns a new filtered array
     */
    BaseArrayClass.prototype.filterAsync = function (fn) {
        var _this = this;
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
            _this._objectInstance.filter(fn, resolve);
        });
    };
    BaseArrayClass.prototype.getArray = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getArray", { "sync": true }, arguments); };
    BaseArrayClass.prototype.getAt = function (index) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getAt", { "sync": true }, arguments); };
    BaseArrayClass.prototype.getLength = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getLength", { "sync": true }, arguments); };
    BaseArrayClass.prototype.indexOf = function (element) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "indexOf", { "sync": true }, arguments); };
    BaseArrayClass.prototype.reverse = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "reverse", { "sync": true }, arguments); };
    BaseArrayClass.prototype.sort = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "sort", { "sync": true }, arguments); };
    BaseArrayClass.prototype.insertAt = function (index, element, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "insertAt", { "sync": true }, arguments); };
    BaseArrayClass.prototype.pop = function (noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "pop", { "sync": true }, arguments); };
    BaseArrayClass.prototype.push = function (element, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "push", { "sync": true }, arguments); };
    BaseArrayClass.prototype.removeAt = function (index, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "removeAt", { "sync": true }, arguments); };
    BaseArrayClass.prototype.setAt = function (index, element, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setAt", { "sync": true }, arguments); };
    BaseArrayClass.pluginName = "BaseArrayClass";
    BaseArrayClass.plugin = "cordova-plugin-googlemaps";
    BaseArrayClass.pluginRef = "plugin.google.maps.BaseArrayClass";
    return BaseArrayClass;
}(BaseClass));

var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    Circle.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Circle.prototype.getMap = function () {
        return this._map;
    };
    Circle.prototype.setCenter = function (latLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCenter", { "sync": true }, arguments); };
    Circle.prototype.getCenter = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCenter", { "sync": true }, arguments); };
    Circle.prototype.getRadius = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getRadius", { "sync": true }, arguments); };
    Circle.prototype.setRadius = function (radius) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setRadius", { "sync": true }, arguments); };
    Circle.prototype.setFillColor = function (color) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setFillColor", { "sync": true }, arguments); };
    Circle.prototype.getFillColor = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getFillColor", { "sync": true }, arguments); };
    Circle.prototype.setStrokeWidth = function (strokeWidth) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeWidth", { "sync": true }, arguments); };
    Circle.prototype.getStrokeWidth = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeWidth", { "sync": true }, arguments); };
    Circle.prototype.setStrokeColor = function (strokeColor) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeColor", { "sync": true }, arguments); };
    Circle.prototype.getStrokeColor = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeColor", { "sync": true }, arguments); };
    Circle.prototype.setClickable = function (clickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    Circle.prototype.getClickable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", { "sync": true }, arguments); };
    Circle.prototype.setZIndex = function (zIndex) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    Circle.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    Circle.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    Circle.prototype.getBounds = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getBounds", { "sync": true }, arguments); };
    Circle.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    Circle.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    return Circle;
}(BaseClass));

var Environment = /** @class */ (function () {
    function Environment() {
    }
    /**
     * Set environment variables.
     */
    Environment.setEnv = function (envOptions) {
        GoogleMapsOriginal.getPlugin().environment.setEnv(envOptions);
    };
    /**
     * Get the open source software license information for Google Maps SDK for iOS.
     * @return {Promise<any>}
     */
    Environment.getLicenseInfo = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
            GoogleMapsOriginal.getPlugin().environment.getLicenseInfo(function (text) { return resolve(text); });
        });
    };
    /**
     * Specifies the background color of the app.
     * @param color
     */
    Environment.setBackgroundColor = function (color) {
        GoogleMapsOriginal.getPlugin().environment.setBackgroundColor(color);
    };
    /**
     * @deprecation
     * @hidden
     */
    Environment.prototype.getLicenseInfo = function () {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.getLicenseInfo()');
        return Environment.getLicenseInfo();
    };
    /**
     * @deprecation
     * @hidden
     */
    Environment.prototype.setBackgroundColor = function (color) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.setBackgroundColor()');
        Environment.setBackgroundColor(color);
    };
    Environment.plugin = "cordova-plugin-googlemaps";
    Environment.pluginName = "GoogleMaps";
    Environment.pluginRef = "plugin.google.maps.environment";
    Environment.repo = "";
    return Environment;
}());

var Geocoder = /** @class */ (function () {
    function Geocoder() {
    }
    /**
     * @deprecation
     * @hidden
     */
    Geocoder.prototype.geocode = function (request) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Geocoder.geocode()');
        return Geocoder.geocode(request);
    };
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
     */
    Geocoder.geocode = function (request) {
        if (request.address instanceof Array || Array.isArray(request.address) ||
            request.position instanceof Array || Array.isArray(request.position)) {
            // -------------------------
            // Geocoder.geocode({
            //   address: [
            //    "Kyoto, Japan",
            //    "Tokyo, Japan"
            //   ]
            // })
            // -------------------------
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                GoogleMapsOriginal.getPlugin().Geocoder.geocode(request, function (mvcArray) {
                    if (mvcArray) {
                        resolve(new BaseArrayClass(mvcArray));
                    }
                    else {
                        reject();
                    }
                });
            });
        }
        else {
            // -------------------------
            // Geocoder.geocode({
            //   address: "Kyoto, Japan"
            // })
            // -------------------------
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                GoogleMapsOriginal.getPlugin().Geocoder.geocode(request, function (results) {
                    if (results) {
                        resolve(results);
                    }
                    else {
                        reject();
                    }
                });
            });
        }
    };
    /**
     * @deprecation
     * @hidden
     */
    Geocoder.prototype.geocode = function (request) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Geocoder.geocode()');
        return Geocoder.geocode(request);
    };
    Geocoder.pluginName = "GoogleMaps";
    Geocoder.pluginRef = "plugin.google.maps.Geocoder";
    Geocoder.plugin = "cordova-plugin-googlemaps";
    Geocoder.repo = "";
    return Geocoder;
}());

var LocationService = /** @class */ (function () {
    function LocationService() {
    }
    /**
     * Get the current device location without map
     * @return {Promise<MyLocation>}
     */
    LocationService.getMyLocation = function (options) {
        return new Promise(function (resolve, reject) {
            GoogleMapsOriginal.getPlugin().LocationService.getMyLocation(options, resolve, reject);
        });
    };
    /**
     * Return true if the application has geolocation permission
     * @return {Promise<MyLocation>}
     */
    LocationService.hasPermission = function () {
        return new Promise(function (resolve, reject) {
            GoogleMapsOriginal.getPlugin().LocationService.hasPermission(resolve, reject);
        });
    };
    LocationService.pluginName = "GoogleMaps";
    LocationService.pluginRef = "plugin.google.maps.LocationService";
    LocationService.plugin = "cordova-plugin-googlemaps";
    LocationService.repo = "";
    return LocationService;
}());

var Encoding = /** @class */ (function () {
    function Encoding() {
    }
    /**
     * Decodes an encoded path string into a sequence of LatLngs.
     * @param encoded {string} an encoded path string
     * @param precision? {number} default: 5
     * @return {LatLng}
     */
    Encoding.decodePath = function (encoded, precision) {
        return;
    };
    /**
     * Encodes a sequence of LatLngs into an encoded path string.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>} a sequence of LatLngs
     * @return {string}
     */
    Encoding.encodePath = function (path) {
        return;
    };
    /**
     * @deprecation
     * @hidden
     */
    Encoding.prototype.decodePath = function (encoded, precision) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.decodePath()');
        return Encoding.decodePath(encoded, precision);
    };
    /**
     * @deprecation
     * @hidden
     */
    Encoding.prototype.encodePath = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.encodePath()');
        return Encoding.encodePath(path);
    };
    Encoding.pluginName = "GoogleMaps";
    Encoding.pluginRef = "plugin.google.maps.geometry.encoding";
    Encoding.plugin = "cordova-plugin-googlemaps";
    Encoding.repo = "";
    return Encoding;
}());

var Poly = /** @class */ (function () {
    function Poly() {
    }
    /**
     * Returns true if the specified location is in the polygon path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    Poly.containsLocation = function (location, path) {
        return GoogleMapsOriginal.getPlugin().geometry.poly.containsLocation(location, path);
    };
    /**
     * Returns true if the specified location is on the polyline path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    Poly.isLocationOnEdge = function (location, path) {
        return GoogleMapsOriginal.getPlugin().geometry.poly.isLocationOnEdge(location, path);
    };
    Poly.pluginName = "GoogleMaps";
    Poly.pluginRef = "plugin.google.maps.geometry.poly";
    Poly.plugin = "cordova-plugin-googlemaps";
    Poly.repo = "";
    return Poly;
}());

var Spherical = /** @class */ (function () {
    function Spherical() {
    }
    /**
     * Returns the distance, in meters, between two LatLngs.
     * @param locationA {ILatLng}
     * @param locationB {ILatLng}
     * @return {number}
     */
    Spherical.computeDistanceBetween = function (from, to) {
        return GoogleMapsOriginal.getPlugin().geometry.spherical.computeDistanceBetween(from, to);
    };
    /**
     * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
     * @param from {ILatLng}
     * @param distance {number}
     * @param heading {number}
     * @return {LatLng}
     */
    Spherical.computeOffset = function (from, distance, heading) {
        return GoogleMapsOriginal.getPlugin().geometry.spherical.computeOffset(from, distance, heading);
    };
    /**
     * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
     * @param to {ILatLng} The destination LatLng.
     * @param distance {number} The distance travelled, in meters.
     * @param heading {number} The heading in degrees clockwise from north.
     * @return {LatLng}
     */
    Spherical.computeOffsetOrigin = function (to, distance, heading) {
        return GoogleMapsOriginal.getPlugin().geometry.spherical.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * Returns the length of the given path.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}
     * @return {number}
     */
    Spherical.computeLength = function (path) {
        return GoogleMapsOriginal.getPlugin().geometry.spherical.computeLength(path);
    };
    /**
     * Returns the area of a closed path. The computed area uses the same units as the radius.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    Spherical.computeArea = function (path) {
        return GoogleMapsOriginal.getPlugin().geometry.spherical.computeArea(path);
    };
    /**
     * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    Spherical.computeSignedArea = function (path) {
        return GoogleMapsOriginal.getPlugin().geometry.spherical.computeSignedArea(path);
    };
    /**
     * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
     * @param from {ILatLng}
     * @param to {ILatLng}
     * @return {number}
     */
    Spherical.computeHeading = function (from, to) {
        return GoogleMapsOriginal.getPlugin().geometry.spherical.computeHeading(from, to);
    };
    /**
     * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
     * @param from {ILatLng}     The LatLng from which to start.
     * @param to {ILatLng}       The LatLng toward which to travel.
     * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
     * @return {LatLng}
     */
    Spherical.interpolate = function (from, to, fraction) {
        return GoogleMapsOriginal.getPlugin().geometry.spherical.interpolate(from, to, fraction);
    };
    /**
     * @deprecation
     * @hidden
     */
    Spherical.prototype.computeDistanceBetween = function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeDistanceBetween()');
        return Spherical.computeDistanceBetween(from, to);
    };
    /**
     * @deprecation
     * @hidden
     */
    Spherical.prototype.computeOffset = function (from, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffset()');
        return Spherical.computeOffset(from, distance, heading);
    };
    /**
     * @deprecation
     * @hidden
     */
    Spherical.prototype.computeOffsetOrigin = function (to, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffsetOrigin()');
        return Spherical.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * @deprecation
     * @hidden
     */
    Spherical.prototype.computeLength = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeLength()');
        return Spherical.computeLength(path);
    };
    /**
     * @deprecation
     * @hidden
     */
    Spherical.prototype.computeArea = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeArea()');
        return Spherical.computeArea(path);
    };
    /**
     * @deprecation
     * @hidden
     */
    Spherical.prototype.computeSignedArea = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeSignedArea()');
        return Spherical.computeSignedArea(path);
    };
    /**
     * @deprecation
     * @hidden
     */
    Spherical.prototype.computeHeading = function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeHeading()');
        return Spherical.computeHeading(from, to);
    };
    /**
     * @deprecation
     * @hidden
     */
    Spherical.prototype.interpolate = function (from, to, fraction) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.interpolate()');
        return Spherical.interpolate(from, to, fraction);
    };
    Spherical.pluginName = "GoogleMaps";
    Spherical.pluginRef = "plugin.google.maps.geometry.spherical";
    Spherical.plugin = "cordova-plugin-googlemaps";
    Spherical.repo = "";
    return Spherical;
}());

var StreetViewPanorama = /** @class */ (function (_super) {
    __extends(StreetViewPanorama, _super);
    function StreetViewPanorama(element, options) {
        var _this = _super.call(this) || this;
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMapsOriginal.getPluginRef(), null, GoogleMapsOriginal.getPluginName()) === true) {
            // -------------------
            // Create a panorama
            // -------------------
            if (element instanceof HTMLElement) {
                _this._objectInstance = GoogleMapsOriginal.getPlugin().StreetView.getPanorama(element, options);
            }
            else if (typeof element === 'string') {
                _this._objectInstance = GoogleMapsOriginal.getPlugin().StreetView.getPanorama(Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    var count;
                    count = 0;
                    var timer = setInterval(function () {
                        var targets = document.querySelectorAll('#' + element);
                        targets = Array.prototype.slice.call(targets, 0);
                        if (targets.length > 0) {
                            targets = targets.filter(function (target) {
                                return !target.hasAttribute('__pluginmapid');
                            });
                        }
                        if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                            clearInterval(timer);
                            resolve([targets[0], options]);
                        }
                        else {
                            if (count++ < 20) {
                                return;
                            }
                            if (targets.length > 0 && targets[0] && targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100) {
                                console.error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.');
                            }
                            else {
                                console.error('Can not find the element [#' + element + ']');
                            }
                            clearInterval(timer);
                            _this._objectInstance.remove();
                            reject();
                        }
                    }, 100);
                }), options);
            }
            else if (element === null && options) {
                _this._objectInstance = GoogleMapsOriginal.getPlugin().Map.getMap(null, options);
            }
        }
        else {
            console.error('cordova-plugin-googlemaps is not available!!');
            if (element instanceof HTMLElement) {
                element.style.backgroundColor = '#ccc';
                element.style.color = 'red';
                element.innerHTML = 'cordova-plugin-googlemaps is not available.';
            }
            else if (typeof element === 'string') {
                var targets = document.querySelectorAll('#' + element);
                targets = Array.prototype.slice.call(targets, 0);
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length > 0 && targets[0]) {
                    targets[0].style.backgroundColor = '#ccc';
                    targets[0].style.color = 'red';
                    targets[0].innerHTML = 'cordova-plugin-googlemaps is not available.';
                }
            }
        }
        return _this;
    }
    StreetViewPanorama.prototype.setPov = function (pov) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPov", {}, arguments); };
    StreetViewPanorama.prototype.setPosition = function (cameraPosition) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPosition", {}, arguments); };
    StreetViewPanorama.prototype.setPanningGesturesEnabled = function (gestureEnable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPanningGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getPanningGesturesEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getPanningGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.setZoomGesturesEnabled = function (gestureEnable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZoomGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getZoomGesturesEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZoomGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.setStreetNamesEnabled = function (gestureEnable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStreetNamesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getStreetNamesEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStreetNamesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.setNavigationEnabled = function (gestureEnable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setNavigationEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getNavigationEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getNavigationEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getLinks = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getLinks", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getLocation = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getLocation", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getPano = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getPano", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getPosition = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getPosition", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    StreetViewPanorama.pluginName = "StreetViewPanorama";
    StreetViewPanorama.plugin = "cordova-plugin-googlemaps";
    return StreetViewPanorama;
}(BaseClass));

var GoogleMap = /** @class */ (function (_super) {
    __extends(GoogleMap, _super);
    function GoogleMap(element, options) {
        var _this = _super.call(this) || this;
        var _init = function () {
            // ---------------
            // Create a map
            // ---------------
            if (element instanceof HTMLElement) {
                _this._objectInstance = GoogleMapsOriginal.getPlugin().Map.getMap(element, options);
            }
            else if (typeof element === 'string') {
                _this._objectInstance = GoogleMapsOriginal.getPlugin().Map.getMap(Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    var count;
                    count = 0;
                    var timer = setInterval(function () {
                        var targets = document.querySelectorAll('ion-router-outlet #' + element);
                        targets = Array.prototype.slice.call(targets, 0);
                        if (targets.length > 0) {
                            targets = targets.filter(function (target) {
                                return !target.hasAttribute('__pluginmapid');
                            });
                        }
                        if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                            clearInterval(timer);
                            resolve([targets[0], options]);
                        }
                        else {
                            if (count++ < 20) {
                                return;
                            }
                            if (targets.length > 0 && targets[0] && targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100) {
                                console.error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.');
                            }
                            else {
                                console.error('Can not find the element [#' + element + ']');
                            }
                            clearInterval(timer);
                            _this._objectInstance.remove();
                            reject();
                        }
                    }, 100);
                }), options);
            }
            else if (element === null && options) {
                _this._objectInstance = GoogleMapsOriginal.getPlugin().Map.getMap(null, options);
            }
        };
        // Since Promise does not work well for some reason,
        // so create a map using if-statement.
        if (!(window.plugin && window.plugin.google && window.plugin.google.maps)) {
            // The `deviceready` event is not fired yet. Wait for it.
            document.addEventListener('deviceready', _init, {
                'once': true
            });
        }
        else {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMapsOriginal.getPluginRef(), null, GoogleMapsOriginal.getPluginName()) === true) {
                _init();
            }
            else {
                console.error('cordova-plugin-googlemaps is not available!!');
                if (element instanceof HTMLElement) {
                    element.style.backgroundColor = '#ccc';
                    element.style.color = 'red';
                    element.innerHTML = 'cordova-plugin-googlemaps is not available.';
                }
                else if (typeof element === 'string') {
                    var targets = document.querySelectorAll('ion-router-outlet #' + element);
                    targets = Array.prototype.slice.call(targets, 0);
                    if (targets.length > 0) {
                        targets = targets.filter(function (target) {
                            return !target.hasAttribute('__pluginmapid');
                        });
                    }
                    if (targets.length === 1 && targets[0]) {
                        targets[0].style.backgroundColor = '#ccc';
                        targets[0].style.color = 'red';
                        targets[0].innerHTML = 'cordova-plugin-googlemaps is not available.';
                    }
                }
            }
        }
        return _this;
    }
    GoogleMap.prototype.setDiv = function (domNode) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                if (typeof domNode === 'string') {
                    var targets = document.querySelectorAll('#' + domNode);
                    targets = Array.prototype.slice.call(targets, 0);
                    if (targets.length > 0) {
                        targets = targets.filter(function (target) {
                            return !target.hasAttribute('__pluginmapid');
                        });
                    }
                    if (targets.length === 1 && targets[0]) {
                        _this._objectInstance.setDiv(targets[0]);
                    }
                }
                else {
                    _this._objectInstance.setDiv(domNode);
                }
            }
        })();
    };
    GoogleMap.prototype.getDiv = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getDiv", { "sync": true }, arguments); };
    GoogleMap.prototype.setMapTypeId = function (mapTypeId) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setMapTypeId", { "sync": true }, arguments); };
    GoogleMap.prototype.animateCamera = function (cameraPosition) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "animateCamera", {}, arguments); };
    GoogleMap.prototype.animateCameraZoomIn = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "animateCameraZoomIn", {}, arguments); };
    GoogleMap.prototype.animateCameraZoomOut = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "animateCameraZoomOut", {}, arguments); };
    GoogleMap.prototype.moveCamera = function (cameraPosition) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "moveCamera", {}, arguments); };
    GoogleMap.prototype.moveCameraZoomIn = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "moveCameraZoomIn", {}, arguments); };
    GoogleMap.prototype.moveCameraZoomOut = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "moveCameraZoomOut", {}, arguments); };
    GoogleMap.prototype.getCameraPosition = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraPosition", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraTarget = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraTarget", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraZoom = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraZoom", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraBearing = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraBearing", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraTilt = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraTilt", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraTarget = function (latLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCameraTarget", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraZoom = function (zoomLevel) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCameraZoom", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraTilt = function (tiltAngle) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCameraTilt", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraBearing = function (bearing) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCameraBearing", { "sync": true }, arguments); };
    GoogleMap.prototype.panBy = function (x, y) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "panBy", { "sync": true }, arguments); };
    GoogleMap.prototype.getVisibleRegion = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisibleRegion", { "sync": true }, arguments); };
    GoogleMap.prototype.getMyLocation = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getMyLocation", {}, arguments); };
    GoogleMap.prototype.setClickable = function (isClickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    GoogleMap.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    GoogleMap.prototype.clear = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "clear", {}, arguments); };
    GoogleMap.prototype.fromLatLngToPoint = function (latLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "fromLatLngToPoint", {}, arguments); };
    GoogleMap.prototype.fromPointToLatLng = function (point) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "fromPointToLatLng", {}, arguments); };
    GoogleMap.prototype.setMyLocationEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setMyLocationEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setMyLocationButtonEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setMyLocationButtonEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.getFocusedBuilding = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getFocusedBuilding", {}, arguments); };
    GoogleMap.prototype.setIndoorEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setIndoorEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setTrafficEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setTrafficEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setCompassEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCompassEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setAllGesturesEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setAllGesturesEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    GoogleMap.prototype.setPadding = function (top, right, bottom, left) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPadding", { "sync": true }, arguments); };
    GoogleMap.prototype.setOptions = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setOptions", { "sync": true }, arguments); };
    GoogleMap.prototype.addMarker = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addMarker(options, function (marker) {
                        if (marker) {
                            var overlayId_1 = marker.getId();
                            var overlay_1 = new Marker(_this, marker);
                            _this.get('_overlays')[overlayId_1] = overlay_1;
                            marker.one(overlayId_1 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_1] = null;
                                    overlay_1.destroy();
                                }
                            });
                            resolve(overlay_1);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addMarkerSync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var marker = _this._objectInstance.addMarker(options);
                var overlayId = marker.getId();
                var overlay = new Marker(_this, marker);
                _this.get('_overlays')[overlayId] = overlay;
                marker.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addMarkerCluster = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addMarkerCluster(options, function (markerCluster) {
                        if (markerCluster) {
                            var overlayId_2 = markerCluster.getId();
                            var overlay_2 = new MarkerCluster(_this, markerCluster);
                            _this.get('_overlays')[overlayId_2] = overlay_2;
                            markerCluster.one('remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_2] = null;
                                    overlay_2.destroy();
                                }
                            });
                            markerCluster.set('_overlays', new BaseArrayClass());
                            resolve(overlay_2);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addMarkerClusterSync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var markerCluster = _this._objectInstance.addMarkerCluster(options);
                var overlayId = markerCluster.getId();
                var overlay = new MarkerCluster(_this, markerCluster);
                _this.get('_overlays')[overlayId] = overlay;
                markerCluster.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                markerCluster.set('_overlays', new BaseArrayClass());
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addCircle = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addCircle(options, function (circle) {
                        if (circle) {
                            var overlayId_3 = circle.getId();
                            var overlay_3 = new Circle(_this, circle);
                            _this.get('_overlays')[overlayId_3] = overlay_3;
                            circle.one(overlayId_3 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_3] = null;
                                    overlay_3.destroy();
                                }
                            });
                            resolve(overlay_3);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addCircleSync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var circle = _this._objectInstance.addCircle(options);
                var overlayId = circle.getId();
                var overlay = new Circle(_this, circle);
                _this.get('_overlays')[overlayId] = overlay;
                circle.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addPolygon = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addPolygon(options, function (polygon) {
                        if (polygon) {
                            var overlayId_4 = polygon.getId();
                            var overlay_4 = new Polygon(_this, polygon);
                            _this.get('_overlays')[overlayId_4] = overlay_4;
                            polygon.one(overlayId_4 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_4] = null;
                                    overlay_4.destroy();
                                }
                            });
                            resolve(overlay_4);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addPolygonSync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var polygon = _this._objectInstance.addPolygon(options);
                var overlayId = polygon.getId();
                var overlay = new Polygon(_this, polygon);
                _this.get('_overlays')[overlayId] = overlay;
                polygon.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addPolyline = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addPolyline(options, function (polyline) {
                        if (polyline) {
                            var overlayId_5 = polyline.getId();
                            var overlay_5 = new Polyline(_this, polyline);
                            _this.get('_overlays')[overlayId_5] = overlay_5;
                            polyline.one(overlayId_5 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_5] = null;
                                    overlay_5.destroy();
                                }
                            });
                            resolve(overlay_5);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addPolylineSync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var polyline = _this._objectInstance.addPolyline(options);
                var overlayId = polyline.getId();
                var overlay = new Polyline(_this, polyline);
                _this.get('_overlays')[overlayId] = overlay;
                polyline.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addTileOverlay = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
                        if (tileOverlay) {
                            var overlayId_6 = tileOverlay.getId();
                            var overlay_6 = new TileOverlay(_this, tileOverlay);
                            _this.get('_overlays')[overlayId_6] = overlay_6;
                            tileOverlay.one(overlayId_6 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_6] = null;
                                    overlay_6.destroy();
                                }
                            });
                            resolve(overlay_6);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addTileOverlaySync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var tileOverlay = _this._objectInstance.addTileOverlay(options);
                var overlayId = tileOverlay.getId();
                var overlay = new TileOverlay(_this, tileOverlay);
                _this.get('_overlays')[overlayId] = overlay;
                tileOverlay.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addGroundOverlay = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addGroundOverlay(options, function (groundOverlay) {
                        if (groundOverlay) {
                            var overlayId_7 = groundOverlay.getId();
                            var overlay_7 = new GroundOverlay(_this, groundOverlay);
                            _this.get('_overlays')[overlayId_7] = overlay_7;
                            groundOverlay.one(overlayId_7 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_7] = null;
                                    overlay_7.destroy();
                                }
                            });
                            resolve(overlay_7);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addGroundOverlaySync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var groundOverlay = _this._objectInstance.addGroundOverlay(options);
                var overlayId = groundOverlay.getId();
                var overlay = new GroundOverlay(_this, groundOverlay);
                _this.get('_overlays')[overlayId] = overlay;
                groundOverlay.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addKmlOverlay = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return new Promise(function (resolve, reject) {
                    _this._objectInstance.addKmlOverlay(options, function (kmlOverlay) {
                        if (kmlOverlay) {
                            var overlayId_8 = kmlOverlay.getId();
                            var overlay_8 = new KmlOverlay(_this, kmlOverlay);
                            _this.get('_overlays')[overlayId_8] = overlay_8;
                            kmlOverlay.one(overlayId_8 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_8] = null;
                                    overlay_8.destroy();
                                }
                            });
                            resolve(overlay_8);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.toDataURL = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toDataURL", {}, arguments); };
    GoogleMap.pluginName = "GoogleMaps";
    GoogleMap.plugin = "cordova-plugin-googlemaps";
    return GoogleMap;
}(BaseClass));

var GroundOverlay = /** @class */ (function (_super) {
    __extends(GroundOverlay, _super);
    function GroundOverlay(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    GroundOverlay.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    GroundOverlay.prototype.getMap = function () {
        return this._map;
    };
    GroundOverlay.prototype.setBounds = function (bounds) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setBounds", { "sync": true }, arguments); };
    GroundOverlay.prototype.setBearing = function (bearing) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setBearing", { "sync": true }, arguments); };
    GroundOverlay.prototype.getBearing = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getBearing", { "sync": true }, arguments); };
    GroundOverlay.prototype.setImage = function (imageUrl) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setImage", { "sync": true }, arguments); };
    GroundOverlay.prototype.setOpacity = function (opacity) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setOpacity", { "sync": true }, arguments); };
    GroundOverlay.prototype.getOpacity = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getOpacity", { "sync": true }, arguments); };
    GroundOverlay.prototype.setClickable = function (clickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    GroundOverlay.prototype.getClickable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", { "sync": true }, arguments); };
    GroundOverlay.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    GroundOverlay.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    GroundOverlay.prototype.setZIndex = function (index) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    GroundOverlay.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    GroundOverlay.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    return GroundOverlay;
}(BaseClass));

var HtmlInfoWindow = /** @class */ (function (_super) {
    __extends(HtmlInfoWindow, _super);
    function HtmlInfoWindow() {
        var _this = _super.call(this) || this;
        _this._objectInstance = new (GoogleMapsOriginal.getPlugin().HtmlInfoWindow)();
        return _this;
    }
    HtmlInfoWindow.prototype.setBackgroundColor = function (color) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setBackgroundColor", {}, arguments); };
    HtmlInfoWindow.prototype.setContent = function (content, cssOptions) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setContent", {}, arguments); };
    HtmlInfoWindow.prototype.open = function (marker) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "open", {}, arguments); };
    HtmlInfoWindow.prototype.close = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "close", {}, arguments); };
    HtmlInfoWindow.plugin = "cordova-plugin-googlemaps";
    HtmlInfoWindow.pluginName = "GoogleMaps";
    HtmlInfoWindow.pluginRef = "plugin.google.maps.HtmlInfoWindow";
    HtmlInfoWindow.repo = "";
    return HtmlInfoWindow;
}(BaseClass));

var Marker = /** @class */ (function (_super) {
    __extends(Marker, _super);
    function Marker(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    Marker.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Marker.prototype.getMap = function () {
        return this._map;
    };
    Marker.prototype.setPosition = function (latLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPosition", { "sync": true }, arguments); };
    Marker.prototype.getPosition = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getPosition", { "sync": true }, arguments); };
    Marker.prototype.showInfoWindow = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "showInfoWindow", { "sync": true }, arguments); };
    Marker.prototype.hideInfoWindow = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "hideInfoWindow", { "sync": true }, arguments); };
    Marker.prototype.setAnimation = function (animation) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setAnimation", { "sync": true }, arguments); };
    Marker.prototype.setDisableAutoPan = function (disableAutoPan) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setDisableAutoPan", { "sync": true }, arguments); };
    Marker.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    Marker.prototype.isVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "isVisible", { "sync": true }, arguments); };
    Marker.prototype.setTitle = function (title) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setTitle", { "sync": true }, arguments); };
    Marker.prototype.getTitle = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getTitle", { "sync": true }, arguments); };
    Marker.prototype.setSnippet = function (snippet) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setSnippet", { "sync": true }, arguments); };
    Marker.prototype.getSnippet = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getSnippet", { "sync": true }, arguments); };
    Marker.prototype.setOpacity = function (alpha) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setOpacity", { "sync": true }, arguments); };
    Marker.prototype.getOpacity = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getOpacity", { "sync": true }, arguments); };
    Marker.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    Marker.prototype.setIconAnchor = function (x, y) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setIconAnchor", { "sync": true }, arguments); };
    Marker.prototype.setInfoWindowAnchor = function (x, y) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setInfoWindowAnchor", { "sync": true }, arguments); };
    Marker.prototype.isInfoWindowShown = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "isInfoWindowShown", { "sync": true }, arguments); };
    Marker.prototype.setZIndex = function (zIndex) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    Marker.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    Marker.prototype.setDraggable = function (draggable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setDraggable", { "sync": true }, arguments); };
    Marker.prototype.isDraggable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "isDraggable", { "sync": true }, arguments); };
    Marker.prototype.setFlat = function (flat) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setFlat", { "sync": true }, arguments); };
    Marker.prototype.setIcon = function (icon) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setIcon", { "sync": true }, arguments); };
    Marker.prototype.setRotation = function (rotation) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setRotation", { "sync": true }, arguments); };
    Marker.prototype.getRotation = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getRotation", { "sync": true }, arguments); };
    return Marker;
}(BaseClass));

var MarkerCluster = /** @class */ (function (_super) {
    __extends(MarkerCluster, _super);
    function MarkerCluster(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    MarkerCluster.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    MarkerCluster.prototype.addMarker = function (marker) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "addMarker", { "sync": true }, arguments); };
    MarkerCluster.prototype.addMarkers = function (markers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "addMarkers", { "sync": true }, arguments); };
    MarkerCluster.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    MarkerCluster.prototype.getMap = function () {
        return this._map;
    };
    return MarkerCluster;
}(BaseClass));

var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    Polygon.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Polygon.prototype.getMap = function () {
        return this._map;
    };
    Polygon.prototype.setPoints = function (points) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPoints", { "sync": true }, arguments); };
    /**
     * Returns an instance of the BaseArrayClass.
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    Polygon.prototype.getPoints = function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
    };
    Polygon.prototype.setHoles = function (holes) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setHoles", { "sync": true }, arguments); };
    /**
     * Returns an instance of the BaseArrayClass.
     * You can modify the holes.
     * @return {BaseArrayClass<ILatLng[]>}
     */
    Polygon.prototype.getHoles = function () {
        var holes = this._objectInstance.getPoints();
        var results = new BaseArrayClass();
        holes.forEach(function (hole) {
            results.push(hole);
        });
        return results;
    };
    Polygon.prototype.setFillColor = function (fillColor) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setFillColor", { "sync": true }, arguments); };
    Polygon.prototype.getFillColor = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getFillColor", { "sync": true }, arguments); };
    Polygon.prototype.setStrokeColor = function (strokeColor) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeColor", { "sync": true }, arguments); };
    Polygon.prototype.getStrokeColor = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeColor", { "sync": true }, arguments); };
    Polygon.prototype.setClickable = function (clickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    Polygon.prototype.getClickable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", { "sync": true }, arguments); };
    Polygon.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    Polygon.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    Polygon.prototype.setZIndex = function (zIndex) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    Polygon.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    Polygon.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    Polygon.prototype.setStrokeWidth = function (strokeWidth) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeWidth", { "sync": true }, arguments); };
    Polygon.prototype.getStrokeWidth = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeWidth", { "sync": true }, arguments); };
    Polygon.prototype.setGeodesic = function (geodesic) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setGeodesic", { "sync": true }, arguments); };
    Polygon.prototype.getGeodesic = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getGeodesic", { "sync": true }, arguments); };
    return Polygon;
}(BaseClass));

var Polyline = /** @class */ (function (_super) {
    __extends(Polyline, _super);
    function Polyline(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    Polyline.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Polyline.prototype.getMap = function () {
        return this._map;
    };
    Polyline.prototype.setPoints = function (points) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPoints", { "sync": true }, arguments); };
    /**
     * Returns an instance of the BaseArrayClass
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    Polyline.prototype.getPoints = function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
    };
    Polyline.prototype.setGeoDesic = function (geoDesic) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setGeoDesic", { "sync": true }, arguments); };
    Polyline.prototype.getGeodesic = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getGeodesic", { "sync": true }, arguments); };
    Polyline.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    Polyline.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    Polyline.prototype.setClickable = function (clickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    Polyline.prototype.getClickable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", { "sync": true }, arguments); };
    Polyline.prototype.setStrokeColor = function (strokeColor) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeColor", { "sync": true }, arguments); };
    Polyline.prototype.getStrokeColor = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeColor", { "sync": true }, arguments); };
    Polyline.prototype.setStrokeWidth = function (strokeWidth) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeWidth", { "sync": true }, arguments); };
    Polyline.prototype.getStrokeWidth = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeWidth", { "sync": true }, arguments); };
    Polyline.prototype.setZIndex = function (index) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    Polyline.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    Polyline.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    return Polyline;
}(BaseClass));

var TileOverlay = /** @class */ (function (_super) {
    __extends(TileOverlay, _super);
    function TileOverlay(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    TileOverlay.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    TileOverlay.prototype.getMap = function () {
        return this._map;
    };
    TileOverlay.prototype.setFadeIn = function (fadeIn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setFadeIn", { "sync": true }, arguments); };
    TileOverlay.prototype.getFadeIn = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getFadeIn", { "sync": true }, arguments); };
    TileOverlay.prototype.setZIndex = function (zIndex) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    TileOverlay.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    TileOverlay.prototype.setOpacity = function (opacity) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setOpacity", { "sync": true }, arguments); };
    TileOverlay.prototype.getOpacity = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getOpacity", { "sync": true }, arguments); };
    TileOverlay.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    TileOverlay.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    TileOverlay.prototype.getTileSize = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getTileSize", { "sync": true }, arguments); };
    TileOverlay.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    return TileOverlay;
}(BaseClass));

var KmlOverlay = /** @class */ (function (_super) {
    __extends(KmlOverlay, _super);
    function KmlOverlay(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        Object.defineProperty(self, 'camera', {
            value: _this._objectInstance.camera,
            writable: false
        });
        Object.defineProperty(self, 'kmlData', {
            value: _this._objectInstance.kmlData,
            writable: false
        });
        return _this;
    }
    KmlOverlay.prototype.getDefaultViewport = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getDefaultViewport", { "sync": true }, arguments); };
    KmlOverlay.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    KmlOverlay.prototype.getMap = function () { return this._map; };
    KmlOverlay.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    KmlOverlay.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    KmlOverlay.prototype.setClickable = function (clickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    KmlOverlay.prototype.getClickable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", { "sync": true }, arguments); };
    KmlOverlay.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    return KmlOverlay;
}(BaseClass));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dvb2dsZS1tYXBzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLHNHQU9MLFVBQVUsRUFDVixpQkFBaUIsRUFDbEIsTUFBTSxvQkFBb0IsQ0FBQztBQUs1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQW9CaEMsZ0JBQVksR0FBVyxFQUFFLEdBQVc7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFPLEtBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFELENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ25DLENBQUM7SUFFRCwyQkFBVSxHQUFWLFVBQVcsU0FBa0I7UUFDM0IsU0FBUyxHQUFHLFNBQVMsSUFBSSxDQUFDLENBQUM7UUFFM0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekUsQ0FBQztpQkFuREg7Ozs7SUFxRUUsc0JBQVksTUFBa0I7UUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFPRCwrQkFB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NEJBQU07c0JBenFJUjtFQThqSWlDLFNBQVM7OztJQXFIViw4QkFBUztJQUl2QyxvQkFBWSxJQUFlLEVBQUUsZUFBb0I7UUFBakQsWUFDRSxpQkFBTyxTQVlSO1FBWEMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsS0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFFdkMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ2xDLEtBQUssRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU07WUFDbEMsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQ25DLEtBQUssRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU87WUFDbkMsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFNRCx1Q0FBa0I7SUFPbEIsMEJBQUs7SUFFTDs7O09BR0c7SUFDSCwyQkFBTSxHQUFOLGNBQXNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFPekMsK0JBQVUsYUFBQyxPQUFnQjtJQU8zQiwrQkFBVTtJQU9WLGlDQUFZLGFBQUMsU0FBa0I7SUFPL0IsaUNBQVk7SUFNWiwyQkFBTTtxQkF6dklSO0VBbXJJZ0MsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvcmRvdmFDaGVjayxcbiAgQ29yZG92YUluc3RhbmNlLFxuICBJbnN0YW5jZUNoZWNrLFxuICBJbnN0YW5jZVByb3BlcnR5LFxuICBJb25pY05hdGl2ZVBsdWdpbixcbiAgUGx1Z2luLFxuICBnZXRQcm9taXNlLFxuICBjaGVja0F2YWlsYWJpbGl0eVxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XG5cblxuZXhwb3J0IHR5cGUgTWFwVHlwZSA9XG4gICdNQVBfVFlQRV9OT1JNQUwnXG4gIHwgJ01BUF9UWVBFX1JPQURNQVAnXG4gIHwgJ01BUF9UWVBFX1NBVEVMTElURSdcbiAgfCAnTUFQX1RZUEVfSFlCUklEJ1xuICB8ICdNQVBfVFlQRV9URVJSQUlOJ1xuICB8ICdNQVBfVFlQRV9OT05FJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBMYXRMbmcgaW1wbGVtZW50cyBJTGF0TG5nIHtcblxuICBsYXQ6IG51bWJlcjtcbiAgbG5nOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKSB7XG4gICAgdGhpcy5sYXQgPSBsYXQ7XG4gICAgdGhpcy5sbmcgPSBsbmc7XG4gIH1cblxuICBlcXVhbHMob3RoZXI6IElMYXRMbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sYXQgPT09IG90aGVyLmxhdCAmJiB0aGlzLmxuZyA9PT0gb3RoZXIubG5nO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sYXQgKyAnLCcgKyB0aGlzLmxuZztcbiAgfVxuXG4gIHRvVXJsVmFsdWUocHJlY2lzaW9uPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBwcmVjaXNpb24gPSBwcmVjaXNpb24gfHwgNjtcblxuICAgIHJldHVybiB0aGlzLmxhdC50b0ZpeGVkKHByZWNpc2lvbikgKyAnLCcgKyB0aGlzLmxuZy50b0ZpeGVkKHByZWNpc2lvbik7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTGF0TG5nQm91bmRzIHtcbiAgbm9ydGhlYXN0OiBJTGF0TG5nO1xuICBzb3V0aHdlc3Q6IElMYXRMbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgTGF0TG5nQm91bmRzIGltcGxlbWVudHMgSUxhdExuZ0JvdW5kcyB7XG5cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBub3J0aGVhc3Q6IElMYXRMbmc7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgc291dGh3ZXN0OiBJTGF0TG5nO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHR5cGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwb2ludHM/OiBJTGF0TG5nW10pIHtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IG5ldyAoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKSkuTGF0TG5nQm91bmRzKHBvaW50cyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdG8gc3RyaW5nXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgb2YgdGhlIGZvcm0gXCJsYXRfc3csbG5nX3N3LGxhdF9uZSxsbmdfbmVcIiBmb3IgdGhpcyBib3VuZHMsIHdoZXJlIFwic3dcIiBjb3JyZXNwb25kcyB0byB0aGUgc291dGh3ZXN0IGNvcm5lciBvZiB0aGUgYm91bmRpbmcgYm94LCB3aGlsZSBcIm5lXCIgY29ycmVzcG9uZHMgdG8gdGhlIG5vcnRoZWFzdCBjb3JuZXIgb2YgdGhhdCBib3guXG4gICAqIEBwYXJhbSBwcmVjaXNpb24ge251bWJlcn1cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgdG9VcmxWYWx1ZShwcmVjaXNpb24/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRlbmRzIHRoaXMgYm91bmRzIHRvIGNvbnRhaW4gdGhlIGdpdmVuIHBvaW50LlxuICAgKiBAcGFyYW0gTGF0TG5nIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZXh0ZW5kKExhdExuZzogSUxhdExuZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbGF0L2xuZyBpcyBpbiB0aGlzIGJvdW5kcy5cbiAgICogQHBhcmFtIExhdExuZyB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNvbnRhaW5zKExhdExuZzogSUxhdExuZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgY2VudGVyIG9mIHRoaXMgTGF0TG5nQm91bmRzXG4gICAqIEByZXR1cm4ge0xhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENlbnRlcigpOiBMYXRMbmcge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZU1hcENvbnRyb2xPcHRpb25zIHtcblxuICAvKipcbiAgICogVHVybnMgdGhlIGNvbXBhc3Mgb24gb3Igb2ZmLlxuICAgKi9cbiAgY29tcGFzcz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFR1cm5zIHRoZSBteUxvY2F0aW9uIGJ1dHRvbiBvbiBvciBvZmYuIElmIHR1cm5zIG9uIHRoaXMgYnV0dG9uLCB0aGUgYXBwbGljYXRpb24gZGlzcGxheXMgYSBwZXJtaXNzaW9uIGRpYWxvZyB0byBvYnRhaW4gdGhlIGdlb2xvY2F0aW9uIGRhdGEuXG4gICAqL1xuICBteUxvY2F0aW9uQnV0dG9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVHVybnMgdGhlIG15TG9jYXRpb24gY29udHJvbChibHVlIGRvdCkgb24gb3Igb2ZmLiBJZiB0dXJucyBvbiB0aGlzIGNvbnRyb2wsIHRoZSBhcHBsaWNhdGlvbiBkaXNwbGF5cyBhIHBlcm1pc3Npb24gZGlhbG9nIHRvIG9idGFpbiB0aGUgZ2VvbG9jYXRpb24gZGF0YS5cbiAgICovXG4gIG15TG9jYXRpb24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUdXJucyB0aGUgaW5kb29yIHBpY2tlciBvbiBvciBvZmYuXG4gICAqL1xuICBpbmRvb3JQaWNrZXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAqKkFuZHJvaWQqKlxuICAgKiBUdXJucyB0aGUgbWFwIHRvb2xiYXIgb24gb3Igb2ZmLlxuICAgKi9cbiAgbWFwVG9vbGJhcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICoqQW5kcm9pZCoqXG4gICAqIFR1cm5zIHRoZSB6b29tIGNvbnRyb2xsZXIgb24gb3Igb2ZmLlxuICAgKi9cbiAgem9vbT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZU1hcEdlc3R1cmVPcHRpb25zIHtcblxuICAvKipcbiAgICogU2V0IGZhbHNlIHRvIGRpc2FibGUgdGhlIHNjcm9sbCBnZXN0dXJlIChkZWZhdWx0OiB0cnVlKVxuICAgKi9cbiAgc2Nyb2xsPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IGZhbHNlIHRvIGRpc2FibGUgdGhlIHRpbHQgZ2VzdHVyZSAoZGVmYXVsdDogdHJ1ZSlcbiAgICovXG4gIHRpbHQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgdG8gZGlzYWJsZSB0aGUgem9vbSBnZXN0dXJlIChkZWZhdWx0OiB0cnVlKVxuICAgKi9cbiAgem9vbT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSB0byBkaXNhYmxlIHRoZSByb3RhdGUgZ2VzdHVyZSAoZGVmYXVsdDogdHJ1ZSlcbiAgICovXG4gIHJvdGF0ZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZU1hcFpvb21PcHRpb25zIHtcbiAgbWluWm9vbT86IG51bWJlcjtcbiAgbWF4Wm9vbT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVNYXBQYWRkaW5nT3B0aW9ucyB7XG4gIGxlZnQ/OiBudW1iZXI7XG4gIHRvcD86IG51bWJlcjtcbiAgYm90dG9tPzogbnVtYmVyO1xuICByaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVNYXBQcmVmZXJlbmNlT3B0aW9ucyB7XG5cbiAgLyoqXG4gICAqIE1pbmltdW0gYW5kIG1heGltdW0gem9vbSBsZXZlbHMgZm9yIHpvb21pbmcgZ2VzdHVyZXMuXG4gICAqL1xuICB6b29tPzogR29vZ2xlTWFwWm9vbU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIFBhZGRpbmdzIG9mIGNvbnRyb2xzLlxuICAgKi9cbiAgcGFkZGluZz86IEdvb2dsZU1hcFBhZGRpbmdPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBUdXJucyB0aGUgM0QgYnVpbGRpbmdzIGxheWVyIG9uIG9yIG9mZi5cbiAgICovXG4gIGJ1aWxkaW5nPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWNjZXB0IGV4dHJhIHByb3BlcnRpZXMgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlTWFwT3B0aW9ucyB7XG5cbiAgLyoqXG4gICAqIG1hcFR5cGUgW29wdGlvbnNdXG4gICAqL1xuICBtYXBUeXBlPzogTWFwVHlwZSB8IHN0cmluZztcblxuICAvKipcbiAgICogY29udHJvbHMgW29wdGlvbnNdXG4gICAqL1xuICBjb250cm9scz86IEdvb2dsZU1hcENvbnRyb2xPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBnZXN0dXJlcyBbb3B0aW9uc11cbiAgICovXG4gIGdlc3R1cmVzPzogR29vZ2xlTWFwR2VzdHVyZU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIE1hcCBzdHlsZXMgW29wdGlvbnNdXG4gICAqIEByZWYgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvc3R5bGUtcmVmZXJlbmNlXG4gICAqL1xuICBzdHlsZXM/OiBhbnlbXTtcblxuICAvKipcbiAgICogSW5pdGlhbCBjYW1lcmEgcG9zaXRpb24gW29wdGlvbnNdXG4gICAqL1xuICBjYW1lcmE/OiBDYW1lcmFQb3NpdGlvbjxhbnk+O1xuXG4gIC8qKlxuICAgKiBwcmVmZXJlbmNlcyBbb3B0aW9uc11cbiAgICovXG4gIHByZWZlcmVuY2VzPzogR29vZ2xlTWFwUHJlZmVyZW5jZU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvc2l0aW9uPFQ+IHtcbiAgLyoqXG4gICAqIFRoZSBjZW50ZXIgbG9jYXRpb24gb2YgdGhlIGNhbWVyYSB2aWV3LlxuICAgKlxuICAgKiBbdXNhZ2UgMV1cbiAgICpcbiAgICogbGV0IGNhbWVyYVBvczogQ2FtZXJhUG9zaXRpb248SUxhdExuZz4gPSB7XG4gICAqICAgdGFyZ2V0OiB7bGF0OiAuLi4sIGxuZzogLi4ufSxcbiAgICogICB6b29tOiAxMFxuICAgKiB9XG4gICAqXG4gICAqIFt1c2FnZSAyXSBUaGUgem9vbSBwcm9wZXJ0eSBpcyBpZ25vcmVkIHdoZW4geW91IHNwZWNpZnkgbXVsdGlwbGUgcG9zaXRpb25cbiAgICpcbiAgICogbGV0IGNhbWVyYVBvczogQ2FtZXJhUG9zaXRpb248SUxhdExuZ1tdPiA9IHtcbiAgICogICB0YXJnZXQ6IFtcbiAgICogICAgICB7bGF0OiAuLi4sIGxuZzogLi4ufSxcbiAgICogICAgICB7bGF0OiAuLi4sIGxuZzogLi4ufSxcbiAgICogICAgICB7bGF0OiAuLi4sIGxuZzogLi4ufVxuICAgKiAgIF1cbiAgICogfVxuICAgKi9cbiAgdGFyZ2V0PzogVDtcbiAgLyoqXG4gICAqIFZpZXcgYW5nbGVcbiAgICovXG4gIHRpbHQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBab29tIGxldmVsXG4gICAqL1xuICB6b29tPzogbnVtYmVyO1xuICAvKipcbiAgICogTWFwIG9yaWVudGF0aW9uXG4gICAqL1xuICBiZWFyaW5nPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIG9mIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHNcbiAgICovXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuICAvKipcbiAgICogQ2FtZXJhIHBhZGRpbmcgaW4gcGl4ZWxcbiAgICovXG4gIHBhZGRpbmc/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBDZW50ZXIgcG9zaXRpb24gb2YgY2lyY2xlXG4gICAqL1xuICBjZW50ZXI6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIFJhZGl1cyBvZiBjaXJjbGUgaW4gbWV0ZXJcbiAgICovXG4gIHJhZGl1czogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0cm9rZSBjb2xvclxuICAgKiAocmdiLCByZ2JhLCAjUlJHR0JCLCBcImNvbG9ybmFtZVwiLCAuLi5ldGMpXG4gICAqL1xuICBzdHJva2VDb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRoZSBzdHJva2Ugd2lkdGggaW4gcGl4ZWxcbiAgICovXG4gIHN0cm9rZVdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogU2V0IHRoZSBpbnNpZGUgY29sb3Igb2YgY2lyY2xlXG4gICAqIChyZ2IsIHJnYmEsICNSUkdHQkIsIFwiY29sb3JuYW1lXCIsIC4uLmV0YylcbiAgICovXG4gIGZpbGxDb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gcmVjZWl2ZSB0aGUgQ0lSQ0xFX0NMSUNLIGV2ZW50XG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0byBmYWxzZSB0byBoaWRlXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogWi1pbmRleFxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb2NvZGVyUmVxdWVzdCB7XG5cbiAgLyoqXG4gICAqIFRoZSBhZGRyZXNzIHByb3BlcnR5IG9yIHBvc2l0aW9uIHByb3BlcnR5IGlzIHJlcXVpcmVkLlxuICAgKiBZb3UgY2FuIG5vdCBzcGVjaWZ5IGJvdGggcHJvcGVydHkgYXQgdGhlIHNhbWUgdGltZS5cbiAgICpcbiAgICogW2dlb2NvZGluZyB1c2FnZTFdXG4gICAqIGxldCByZXF1ZXN0OiBHZW9jb2RlclJlcXVlc3QgPSB7XG4gICAqICAgYWRkcmVzczogXCJMb3MgQW5nZWxlcywgQ2FsaWZvcm5pYSwgVVNBXCJcbiAgICogfVxuICAgKlxuICAgKiBbZ2VvY29kaW5nIHVzYWdlMl1cbiAgICogbGV0IHJlcXVlc3Q6IEdlb2NvZGVyUmVxdWVzdCA9IHtcbiAgICogICBhZGRyZXNzOiBbXG4gICAqICAgIFwiTG9zIEFuZ2VsZXMsIENhbGlmb3JuaWEsIFVTQVwiLFxuICAgKiAgICBcIlNhbiBGcmFuY2lzY28sIENhbGlmb3JuaWEsIFVTQVwiLFxuICAgKiAgIF1cbiAgICogfVxuICAgKi9cbiAgYWRkcmVzcz86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKlxuICAgKiBbcmV2ZXJzZS1nZW9jb2RpbmcgdXNhZ2UxXVxuICAgKiBsZXQgcmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0ID0ge1xuICAgKiAgIHBvc2l0aW9uOiB7XCJsYXRcIjogMzcuNDIxNjU1LCBcImxuZ1wiOiAtMTIyLjA4NTYzN31cbiAgICogfVxuICAgKlxuICAgKiBbcmV2ZXJzZS1nZW9jb2RpbmcgdXNhZ2UyXVxuICAgKiBsZXQgcmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0ID0ge1xuICAgKiAgIHBvc2l0aW9uOiBbXG4gICAqICAgIHtcImxhdFwiOiAzNy40MjE2NTUsIFwibG5nXCI6IC0xMjIuMDg1NjM3fSxcbiAgICogICAge1wibGF0XCI6IDM3LjMzMiwgXCJsbmdcIjogLTEyMi4wMzA3ODF9XG4gICAqICAgXVxuICAgKiB9XG4gICAqL1xuICBwb3NpdGlvbj86IElMYXRMbmcgfCBJTGF0TG5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvY29kZXJSZXN1bHQge1xuICBhZG1pbkFyZWE/OiBzdHJpbmc7XG4gIGNvdW50cnk/OiBzdHJpbmc7XG4gIGNvdW50cnlDb2RlPzogc3RyaW5nO1xuICBleHRyYT86IHtcbiAgICBmZWF0dXJlTmFtZT86IHN0cmluZztcbiAgICBsaW5lcz86IEFycmF5PHN0cmluZz47XG4gICAgcGVybWlzZXM/OiBzdHJpbmc7XG4gICAgcGhvbmU/OiBzdHJpbmc7XG4gICAgdXJsPzogc3RyaW5nXG4gIH07XG4gIGxvY2FsZT86IHN0cmluZztcbiAgbG9jYWxpdHk/OiBzdHJpbmc7XG4gIHBvc2l0aW9uPzogSUxhdExuZztcbiAgcG9zdGFsQ29kZT86IHN0cmluZztcbiAgc3ViQWRtaW5BcmVhPzogc3RyaW5nO1xuICBzdWJMb2NhbGl0eT86IHN0cmluZztcbiAgc3ViVGhvcm91Z2hmYXJlPzogc3RyaW5nO1xuICB0aG9yb3VnaGZhcmU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdW5kT3ZlcmxheU9wdGlvbnMge1xuICAvKipcbiAgICogVVJMIG9mIG92ZXJsYXlcbiAgICovXG4gIHVybDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCb3VuZHMsIGFycmF5IG9mIElMYXRMbmdcbiAgICovXG4gIGJvdW5kczogQXJyYXk8SUxhdExuZz47XG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIHJlY2VpdmUgdGhlIEdST1VORF9PVkVSTEFZX0NMSUNLIGV2ZW50XG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0byBmYWxzZSB0byBoaWRlXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogT3BhY2l0eS4gRnJvbSAwLjAgdG8gMS4wIC5cbiAgICovXG4gIG9wYWNpdHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEJlYXJpbmdcbiAgICovXG4gIGJlYXJpbmc/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFotaW5kZXhcbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzXG4gICAqIFlvdSBjYW4gZ2V0IHRoZSBwcm9wZXJ0eSBsYXRlciB1c2luZyBgZ2V0KClgIG1ldGhvZC5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTGF0TG5nIHtcbiAgbGF0OiBudW1iZXI7XG4gIGxuZzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckljb24ge1xuICB1cmw/OiBzdHJpbmc7XG4gIHNpemU/OiB7XG4gICAgd2lkdGg/OiBudW1iZXI7XG4gICAgaGVpZ2h0PzogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlck9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGljb24gaW1hZ2UgdXJsIG9yIHByb3BlcnRpZXMuIEFsc28geW91IGNhbiBzcGVjaWZ5IEhUTUwgQ29sb3IgdmFsdWVzLiBBbHRlcm5hdGl2ZWx5IHlvdSBjYW4gc3BlY2lmeSB0aGUgaW1hZ2UgYXMgQmFzZTY0XG4gICAqL1xuICBpY29uPzogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgaW5mb1dpbmRvdy5cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc25pcHBldCBvZiB0aGUgaW5mb1dpbmRvdy5cbiAgICovXG4gIHNuaXBwZXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgbWFya2VyLlxuICAgKi9cbiAgcG9zaXRpb246IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqICBTcGVjaWZ5IHRoZSBhbmNob3Igb2YgdGhlIEluZm9XaW5kb3dcbiAgICovXG4gIGluZm9XaW5kb3dBbmNob3I/OiBudW1iZXJbXTtcblxuICAvKipcbiAgICogXHRTcGVjaWZ5IHRoZSBhbmNob3Igb2YgaWNvbiBpbWFnZVxuICAgKi9cbiAgYW5jaG9yPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIGVuYWJsZSB0byBkcmFnIHRoZSBtYXJrZXIuIChEZWZhdWx0OiBmYWxzZSkgSW1wb3J0YW50ISBEcmFnIHN0YXJ0cyBhZnRlciBsb25nIHByZXNzZWQgb24gdGhlIG1hcmtlci5cbiAgICovXG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byB1c2UgYSBmbGF0IG1hcmtlci4gKERlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgZmxhdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBTZXQgcm90YXRpb24gYW5nbGUuIChEZWZhdWx0OiAwKVxuICAgKi9cbiAgcm90YXRpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBoaWRlLiAoRGVmYXVsdDogdHJ1ZSlcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHRoZSBvcHRpb25zIGZvciB0aXRsZS4gVGhpcyBwcm9wZXJ0eSB3b3JrIGZvciBub3JtYWwgSW5mb1dpbmRvdy5cbiAgICovXG4gIHN0eWxlcz86IGFueTtcblxuICAvKipcbiAgICogV2hpY2ggYW5pbWF0aW9uIHRvIHBsYXkgd2hlbiBtYXJrZXIgaXMgYWRkZWQgdG8gYSBtYXAuXG4gICAqL1xuICBhbmltYXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEhpZ2hlciB6SW5kZXggdmFsdWUgb3ZlcmxheXMgd2lsbCBiZSBkcmF3biBvbiB0b3Agb2YgbG93ZXIgekluZGV4IHZhbHVlIHRpbGUgbGF5ZXJzIGFuZCBvdmVybGF5cy5cbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBhdXRvIHBhbm5pbmcgd2hlbiB0aGUgbWFya2VyIGlzIGNsaWNrZWQuXG4gICAqL1xuICBkaXNhYmxlQXV0b1Bhbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllc1xuICAgKiBZb3UgY2FuIGdldCB0aGUgcHJvcGVydHkgbGF0ZXIgdXNpbmcgYGdldCgpYCBtZXRob2QuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyTGFiZWwge1xuICAvKipcbiAgICogU2V0IHRydWUgaWYgdXNlIGJvbGQgZm9udFxuICAgKi9cbiAgYm9sZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCBmb250IHNpemUgaW4gcGl4ZWxcbiAgICovXG4gIGZvbnRTaXplPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBjb2xvciBzdHJpbmdzXG4gICAqL1xuICBjb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgdXNlIGl0YWxpYyBmb250XG4gICAqL1xuICBpdGFsaWM/OiBib29sZWFuO1xuXG59XG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckNsdXN0ZXJJY29uIHtcbiAgLyoqXG4gICAqIE1pbmltdW0gbnVtYmVyIG9mIGNsdXN0ZXJpbmdcbiAgICovXG4gIG1pbj86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgY2x1c3RlcmluZ1xuICAgKi9cbiAgbWF4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBhbmNob3IgcG9zaXRpb24gb2YgdGhlIG1hcmtlclxuICAgKi9cbiAgYW5jaG9yPzogYW55O1xuXG4gIC8qKlxuICAgKiBsYWJlbCBvcHRpb24gZm9yIGNsdXN0ZXJlZCBtYXJrZXJcbiAgICovXG4gIGxhYmVsPzogTWFya2VyTGFiZWw7XG5cbiAgLyoqXG4gICAqIGljb24gdXJsXG4gICAqL1xuICB1cmw6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbiBzaXplXG4gICAqL1xuICBzaXplPzoge1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJDbHVzdGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBNYXhpbXVtIHpvb20gbGV2ZWwgb2YgY2x1c3RlcmluZ1xuICAgKiAoZGVmYXVsdDogMTUsIG1heDogMTgpXG4gICAqL1xuICBtYXhab29tTGV2ZWw/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERyYXcgYSByZWN0YW5nbGUgdGhhdCBjb250YWlucyBhbGwgbG9jYXRpb25zIG9mIGNsdXN0ZXJlZCB3aGVuIHlvdSB0YXAgb24gYSBjbHVzdGVyIG1hcmtlci5cbiAgICogKGRlZmF1bHQ6IHRydWUpXG4gICAqL1xuICBib3VuZHNEcmF3PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUG9zaXRpb24gbGlzdFxuICAgKiBbXG4gICAqICAge3RpdGxlOiBcInN0b3JlIEFcIiwgcG9zaXRpb246IHtsYXQ6IC4uLiwgbG5nOiAuLi59fSxcbiAgICogICB7dGl0bGU6IFwic3RvcmUgQlwiLCBwb3NpdGlvbjoge2xhdDogLi4uLCBsbmc6IC4uLn19LFxuICAgKiAgIHt0aXRsZTogXCJzdG9yZSBDXCIsIHBvc2l0aW9uOiB7bGF0OiAuLi4sIGxuZzogLi4ufX1cbiAgICogXVxuICAgKi9cbiAgbWFya2VyczogTWFya2VyT3B0aW9uc1tdO1xuXG4gIC8qKlxuICAgKiBDb25kaXRpb25zIG9mIGNsdXN0ZXJpbmdcbiAgICogW1xuICAgKiAgIHtpY29uOiBcImFzc2V0cy9zbWFsbC5wbmdcIiwgbWluOiAyLCBtYXg6IDEwfSxcbiAgICogICB7aWNvbjogXCJhc3NldHMvbWlkZGxlLnBuZ1wiLCBtaW46IDExLCBtYXg6IDMwfSxcbiAgICogICB7aWNvbjogXCJhc3NldHMvbGFyZ2UucG5nXCIsIG1pbjogMzF9XG4gICAqIF1cbiAgICovXG4gIGljb25zOiBNYXJrZXJDbHVzdGVySWNvbltdO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE15TG9jYXRpb24ge1xuICBsYXRMbmc/OiBMYXRMbmc7XG4gIGVsYXBzZWRSZWFsdGltZU5hbm9zPzogYW55O1xuICB0aW1lPzogc3RyaW5nO1xuICBhY2N1cmFjeT86IGFueTtcbiAgYmVhcmluZz86IG51bWJlcjtcbiAgYWx0aXR1ZGU/OiBhbnk7XG4gIHNwZWVkPzogbnVtYmVyO1xuICBwcm92aWRlcj86IGFueTtcbiAgaGFzaENvZGU/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXlMb2NhdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gdHJ5IHRvIHVzZSBHUFMgbWFuZGF0b3J5LlxuICAgKiBJbiBmYWxzZSwgdGhlIHBsdWdpbiB0cnkgdG8gdXNlIEdQUyBhbmQgbmV0d29yay5cbiAgICogKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgZW5hYmxlSGlnaEFjY3VyYWN5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBQYXNzIElMYXRMbmdbXSB0byBzcGVjaWZ5IHRoZSB2ZXJ0aXhlcy5cbiAgICogWW91IG5lZWQgdG8gY29udGFpbiB0d28gcG9pbnRzIGF0IGxlYXN0LlxuICAgKi9cbiAgcG9pbnRzOiBBcnJheTxJTGF0TG5nPjtcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gZHJhdyB0aGUgY3VydmUgcG9seWdvbiBiYXNlZCBvbiB0aGUgZWFydGhcbiAgICogKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgZ2VvZGVzaWM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0cm9rZSBjb2xvclxuICAgKiAocmdiLCByZ2JhLCAjUlJHR0JCLCBcImNvbG9ybmFtZVwiLCAuLi5ldGMpXG4gICAqL1xuICBzdHJva2VDb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRoZSBzdHJva2Ugd2lkdGggaW4gcGl4ZWxcbiAgICovXG4gIHN0cm9rZVdpZHRoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGluc2lkZSBjb2xvciBvZiBwb2x5Z29uXG4gICAqIChyZ2IsIHJnYmEsICNSUkdHQkIsIFwiY29sb3JuYW1lXCIsIC4uLmV0YylcbiAgICovXG4gIGZpbGxDb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IGZhbHNlIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBpbnZpc2libGUgcG9seWdvblxuICAgKiAoSW52aXNpYmxlIHBvbHlnb24gaXMgbm90IGNsaWNrYWJsZSwgZGVmYXVsdCB0cnVlKVxuICAgKi9cbiAgdmlzaWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEhpZXJhcmNoeSB6LWluZGV4XG4gICAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFBhc3MgSUxhdExuZ1tdW10gdG8gY3JlYXRlIGhvbGVzIGluIHBvbHlnb25cbiAgICovXG4gIGhvbGVzPzogQXJyYXk8QXJyYXk8SUxhdExuZz4+O1xuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byByZWNlaXZlIHRoZSBQT0xZR09OX0NMSUNLIGV2ZW50XG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllc1xuICAgKiBZb3UgY2FuIGdldCB0aGUgcHJvcGVydHkgbGF0ZXIgdXNpbmcgYGdldCgpYCBtZXRob2QuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9seWxpbmVPcHRpb25zIHtcbiAgLyoqXG4gICAqIFBhc3MgSUxhdExuZ1tdIHRvIHNwZWNpZnkgdGhlIHZlcnRpeGVzLlxuICAgKiBZb3UgbmVlZCB0byBjb250YWluIHR3byBwb2ludHMgYXQgbGVhc3QuXG4gICAqL1xuICBwb2ludHM6IEFycmF5PElMYXRMbmc+O1xuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgaWYgeW91IHdhbnQgdG8gY3JlYXRlIGludmlzaWJsZSBwb2x5bGluZVxuICAgKiAoSW52aXNpYmxlIHBvbHlsaW5lIGlzIG5vdCBjbGlja2FibGUsIGRlZmF1bHQgdHJ1ZSlcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBkcmF3IHRoZSBjdXJ2ZSBwb2x5bGluZSBiYXNlZCBvbiB0aGUgZWFydGhcbiAgICogKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgZ2VvZGVzaWM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0cm9rZSBjb2xvclxuICAgKiAocmdiLCByZ2JhLCAjUlJHR0JCLCBcImNvbG9ybmFtZVwiLCAuLi5ldGMpXG4gICAqL1xuICBjb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRoZSBzdHJva2Ugd2lkdGggaW4gcGl4ZWxcbiAgICovXG4gIHdpZHRoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIaWVyYXJjaHkgei1pbmRleFxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byByZWNlaXZlIHRoZSBQT0xZTElORV9DTElDSyBldmVudFxuICAgKiAoZGVmYXVsdDogZmFsc2UpXG4gICAqL1xuICBjbGlja2FibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVPdmVybGF5T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGlzIGNhbGxiYWNrIG11c3QgUmV0dXJucyBzdHJpbmcgb2YgaW1hZ2UgVVJMLlxuICAgKiBJZiBubyB0aWxlLCB5b3UgbmVlZCB0byBSZXR1cm5zIG51bGwuXG4gICAqL1xuICBnZXRUaWxlOiAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHpvb206IG51bWJlcikgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgaWYgeW91IHdhbnQgdG8gY3JlYXRlIGludmlzaWJsZSB0aWxlbGF5ZXJcbiAgICogKGRlZmF1bHQgdHJ1ZSlcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBIaWVyYXJjaHkgei1pbmRleCBvZiB0aWxlbGF5ZXJcbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogRGVmYXVsdDogNTEycHhcbiAgICovXG4gIHRpbGVTaXplPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0OiAxLjBcbiAgICovXG4gIG9wYWNpdHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIGRpc3BsYXkgdGhlIHRpbGUgaW5mb3JtYXRpb24gb3ZlciB0aGUgdGlsZSBpbWFnZXMuXG4gICAqL1xuICBkZWJ1Zz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllc1xuICAgKiBZb3UgY2FuIGdldCB0aGUgcHJvcGVydHkgbGF0ZXIgdXNpbmcgYGdldCgpYCBtZXRob2QuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9EYXRhVXJsT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUcnVlIGlmIHlvdSB3YW50IGdldCBoaWdoIHF1YWxpdHkgbWFwIHNuYXBzaG90XG4gICAqL1xuICB1bmNvbXByZXNzPzogYm9vbGVhbjtcbn1cblxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIG1hcC5hZGRLbWxPdmVybGF5KCkgbWV0aG9kXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgS21sT3ZlcmxheU9wdGlvbnMge1xuICAvKlxuICAgKiBUaGUgdXJsIG9yIGZpbGUgcGF0aCBvZiBLTUwgZmlsZS4gS01aIGZvcm1hdCBpcyBub3Qgc3VwcG9ydGVkLlxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG5cbiAgLypcbiAgICogRG8gbm90IGZpcmUgdGhlIEtNTF9DTElDSyBldmVudCBpZiBmYWxzZS4gRGVmYXVsdCBpcyB0cnVlLlxuICAgKi9cbiAgY2xpY2thYmxlPzogYm9vbGVhbjtcblxuICAvKlxuICAgKiBEbyBub3QgZGlzcGxheSB0aGUgZGVmYXVsdCBpbmZvV2luZG93IGlmIHRydWUuIERlZmF1bHQgaXMgZmFsc2UuXG4gICAqL1xuICBzdXBwcmVzc0luZm9XaW5kb3dzPzogYm9vbGVhbjtcblxuICAvKlxuICAgKiBpY29uIG9wdGlvblxuICAgKi9cbiAgaWNvbj86IHN0cmluZyB8IE1hcmtlckljb247XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllcyBmb3IgZnV0dXJlIHVwZGF0ZVxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5cbi8qKlxuICogT3B0aW9ucyBmb3IgRW52aXJvbm1lbnQuc2V0RW52KClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFbnZPcHRpb25zIHtcbiAgLypcbiAgICogQVBJIGtleSBmb3IgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkgdjMgZm9yIGBodHRwczpgIChvbiBzZXJ2ZXIpXG4gICAqL1xuICBBUElfS0VZX0ZPUl9CUk9XU0VSX1JFTEVBU0U/OiBzdHJpbmc7XG5cbiAgLypcbiAgICogQVBJIGtleSBmb3IgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkgdjMgZm9yIGBodHRwOmAgKGxvY2FsIGRldmVsb3BtZW50KVxuICAgKi9cbiAgQVBJX0tFWV9GT1JfQlJPV1NFUl9ERUJVRz86IHN0cmluZztcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgVmlzaWJsZVJlZ2lvbiBpbXBsZW1lbnRzIElMYXRMbmdCb3VuZHMge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgbm9ydGhlYXN0IG9mIHRoZSBib3VuZHMgdGhhdCBjb250YWlucyB0aGUgZmFyTGVmdCwgZmFyUmlnaHQsIG5lYXJMZWZ0IGFuZCBuZWFyUmlnaHQuXG4gICAqIFNpbmNlIHRoZSBtYXAgdmlldyBpcyBhYmxlIHRvIHJvdGF0ZSwgdGhlIGZhclJpZ2h0IGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgbm9ydGhlYXN0LlxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBub3J0aGVhc3Q6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzb3V0aHdlc3Qgb2YgdGhlIGJvdW5kcyB0aGF0IGNvbnRhaW5zIHRoZSBmYXJMZWZ0LCBmYXJSaWdodCwgbmVhckxlZnQgYW5kIG5lYXJSaWdodC5cbiAgICogU2luY2UgdGhlIG1hcCB2aWV3IGlzIGFibGUgdG8gcm90YXRlLCB0aGUgbmVhckxlZnQgaXMgbm90IHRoZSBzYW1lIGFzIHRoZSBzb3V0aHdlc3QuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHNvdXRod2VzdDogSUxhdExuZztcblxuICAvKipcbiAgICogVGhlIGZhckxlZnQgaW5kaWNhdGVzIHRoZSBsYXQvbG5nIG9mIHRoZSB0b3AtbGVmdCBvZiB0aGUgbWFwIHZpZXcuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGZhckxlZnQ6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBmYXJSaWdodCBpbmRpY2F0ZXMgdGhlIGxhdC9sbmcgb2YgdGhlIHRvcC1yaWdodCBvZiB0aGUgbWFwIHZpZXcuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGZhclJpZ2h0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbmVhckxlZnQgaW5kaWNhdGVzIHRoZSBsYXQvbG5nIG9mIHRoZSBib3R0b20tbGVmdCBvZiB0aGUgbWFwIHZpZXcuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG5lYXJMZWZ0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbmVhclJpZ2h0IGluZGljYXRlcyB0aGUgbGF0L2xuZyBvZiB0aGUgYm90dG9tLXJpZ2h0IG9mIHRoZSBtYXAgdmlldy5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgbmVhclJpZ2h0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBjb25zdGFudCB2YWx1ZSA6IGBWaXNpYmxlUmVnaW9uYFxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSB0eXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioc291dGh3ZXN0OiBMYXRMbmdCb3VuZHMsIG5vcnRoZWFzdDogTGF0TG5nQm91bmRzLCBmYXJMZWZ0OiBJTGF0TG5nLCBmYXJSaWdodDogSUxhdExuZywgbmVhckxlZnQ6IElMYXRMbmcsIG5lYXJSaWdodDogSUxhdExuZykge1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gbmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpKS5WaXNpYmxlUmVnaW9uKHNvdXRod2VzdCwgbm9ydGhlYXN0LCBmYXJMZWZ0LCBmYXJSaWdodCwgbmVhckxlZnQsIG5lYXJSaWdodCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdG8gc3RyaW5nXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgb2YgdGhlIGZvcm0gXCJsYXRfc3csbG5nX3N3LGxhdF9uZSxsbmdfbmVcIiBmb3IgdGhpcyBib3VuZHMsIHdoZXJlIFwic3dcIiBjb3JyZXNwb25kcyB0byB0aGUgc291dGh3ZXN0IGNvcm5lciBvZiB0aGUgYm91bmRpbmcgYm94LCB3aGlsZSBcIm5lXCIgY29ycmVzcG9uZHMgdG8gdGhlIG5vcnRoZWFzdCBjb3JuZXIgb2YgdGhhdCBib3guXG4gICAqIEBwYXJhbSBwcmVjaXNpb24ge251bWJlcn1cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgdG9VcmxWYWx1ZShwcmVjaXNpb24/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbGF0L2xuZyBpcyBpbiB0aGlzIGJvdW5kcy5cbiAgICogQHBhcmFtIExhdExuZyB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNvbnRhaW5zKExhdExuZzogSUxhdExuZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY29uc3QgU3RyZWV0Vmlld1NvdXJjZSA9IHtcbiAgREVGQVVMVDogJ0RFRkFVTFQnLFxuICBPVVRET09SOiAnT1VURE9PUidcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0UG92T3B0aW9uIHtcbiAgYmVhcmluZzogbnVtYmVyO1xuICByYWRpdXM/OiBudW1iZXI7XG4gIHpvb20/OiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdTZXRQb3NpdGlvbk9wdGlvbiB7XG4gIHRhcmdldDogSUxhdExuZztcbiAgc291cmNlPzogc3RyaW5nO1xuICByYWRpdXM/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdDYW1lcmFQYW5vIHtcbiAgdGFyZ2V0OiBzdHJpbmc7XG4gIGJlYXJpbmc/OiBudW1iZXI7XG4gIHRpbHQ/OiBudW1iZXI7XG4gIHpvb20/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdDYW1lcmFQb3NpdGlvbiB7XG4gIHRhcmdldDogSUxhdExuZztcbiAgc291cmNlPzogc3RyaW5nO1xuICByYWRpdXM/OiBudW1iZXI7XG4gIGJlYXJpbmc/OiBudW1iZXI7XG4gIHRpbHQ/OiBudW1iZXI7XG4gIHpvb20/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdPcHRpb25zIHtcblxuICBjYW1lcmE/OiBTdHJlZXRWaWV3Q2FtZXJhUGFubyB8IFN0cmVldFZpZXdDYW1lcmFQb3NpdGlvbjtcblxuICAvKipcbiAgICogY29udHJvbHMgW29wdGlvbnNdXG4gICAqL1xuICBjb250cm9scz86IHtcbiAgICBzdHJlZXROYW1lcz86IGJvb2xlYW47XG4gICAgbmF2aWdhdGlvbj86IGJvb2xlYW47XG4gIH07XG5cbiAgLyoqXG4gICAqIGdlc3R1cmVzIFtvcHRpb25zXVxuICAgKi9cbiAgZ2VzdHVyZXM/OiB7XG4gICAgcGFkZGluZz86IGJvb2xlYW47XG4gICAgem9vbWluZz86IGJvb2xlYW47XG4gIH07XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld05hdmlnYXRpb25MaW5rIHtcblxuICAvKipcbiAgICogcGFub3JhbWEgSWRcbiAgICovXG4gIHBhbm9JZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBiZWFyaW5nIChoZWFkaW5nKVxuICAgKi9cbiAgYmVhcmluZzogbnVtYmVyO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld0xvY2F0aW9uIHtcblxuICBsYXRMbmc6IElMYXRMbmc7XG5cbiAgbGlua3M6IFN0cmVldFZpZXdOYXZpZ2F0aW9uTGlua1tdO1xuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICogWW91IGNhbiBsaXN0ZW4gdG8gdGhlc2UgZXZlbnRzIHdoZXJlIGFwcHJvcHJpYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBHb29nbGVNYXBzRXZlbnQgPSB7XG4gIE1BUF9SRUFEWTogJ21hcF9yZWFkeScsXG4gIE1BUF9DTElDSzogJ21hcF9jbGljaycsXG4gIE1BUF9MT05HX0NMSUNLOiAnbWFwX2xvbmdfY2xpY2snLFxuICBQT0lfQ0xJQ0s6ICdwb2lfY2xpY2snLFxuICBNWV9MT0NBVElPTl9DTElDSzogJ215X2xvY2F0aW9uX2NsaWNrJyxcbiAgTVlfTE9DQVRJT05fQlVUVE9OX0NMSUNLOiAnbXlfbG9jYXRpb25fYnV0dG9uX2NsaWNrJyxcbiAgSU5ET09SX0JVSUxESU5HX0ZPQ1VTRUQ6ICdpbmRvb3JfYnVpbGRpbmdfZm9jdXNlZCcsXG4gIElORE9PUl9MRVZFTF9BQ1RJVkFURUQ6ICdpbmRvb3JfbGV2ZWxfYWN0aXZhdGVkJyxcbiAgQ0FNRVJBX01PVkVfU1RBUlQ6ICdjYW1lcmFfbW92ZV9zdGFydCcsXG4gIENBTUVSQV9NT1ZFOiAnY2FtZXJhX21vdmUnLFxuICBDQU1FUkFfTU9WRV9FTkQ6ICdjYW1lcmFfbW92ZV9lbmQnLFxuICBPVkVSTEFZX0NMSUNLOiAnb3ZlcmxheV9jbGljaycsXG4gIFBPTFlHT05fQ0xJQ0s6ICdwb2x5Z29uX2NsaWNrJyxcbiAgUE9MWUxJTkVfQ0xJQ0s6ICdwb2x5bGluZV9jbGljaycsXG4gIENJUkNMRV9DTElDSzogJ2NpcmNsZV9jbGljaycsXG4gIEdST1VORF9PVkVSTEFZX0NMSUNLOiAnZ3JvdW5kb3ZlcmxheV9jbGljaycsXG4gIElORk9fQ0xJQ0s6ICdpbmZvX2NsaWNrJyxcbiAgSU5GT19MT05HX0NMSUNLOiAnaW5mb19sb25nX2NsaWNrJyxcbiAgSU5GT19DTE9TRTogJ2luZm9fY2xvc2UnLFxuICBJTkZPX09QRU46ICdpbmZvX29wZW4nLFxuICBNQVJLRVJfQ0xJQ0s6ICdtYXJrZXJfY2xpY2snLFxuICBNQVJLRVJfRFJBRzogJ21hcmtlcl9kcmFnJyxcbiAgTUFSS0VSX0RSQUdfU1RBUlQ6ICdtYXJrZXJfZHJhZ19zdGFydCcsXG4gIE1BUktFUl9EUkFHX0VORDogJ21hcmtlcl9kcmFnX2VuZCcsXG4gIE1BUF9EUkFHOiAnbWFwX2RyYWcnLFxuICBNQVBfRFJBR19TVEFSVDogJ21hcF9kcmFnX3N0YXJ0JyxcbiAgTUFQX0RSQUdfRU5EOiAnbWFwX2RyYWdfZW5kJyxcbiAgS01MX0NMSUNLOiAna21sX2NsaWNrJyxcbiAgUEFOT1JBTUFfUkVBRFk6ICdwYW5vcmFtYV9yZWFkeScsXG4gIFBBTk9SQU1BX0NBTUVSQV9DSEFOR0U6ICdwYW5vcmFtYV9jYW1lcmFfY2hhbmdlJyxcbiAgUEFOT1JBTUFfTE9DQVRJT05fQ0hBTkdFOiAncGFub3JhbWFfbG9jYXRpb25fY2hhbmdlJyxcbiAgUEFOT1JBTUFfQ0xJQ0s6ICdwYW5vcmFtYV9jbGljaydcbn07XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY29uc3QgR29vZ2xlTWFwc0FuaW1hdGlvbiA9IHtcbiAgQk9VTkNFOiAnQk9VTkNFJyxcbiAgRFJPUDogJ0RST1AnXG59O1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNvbnN0IEdvb2dsZU1hcHNNYXBUeXBlSWQgPSB7XG4gIE5PUk1BTDogJ01BUF9UWVBFX05PUk1BTCcsXG4gIFJPQURNQVA6ICdNQVBfVFlQRV9OT1JNQUwnLFxuICBTQVRFTExJVEU6ICdNQVBfVFlQRV9TQVRFTExJVEUnLFxuICBIWUJSSUQ6ICdNQVBfVFlQRV9IWUJSSUQnLFxuICBURVJSQUlOOiAnTUFQX1RZUEVfVEVSUkFJTicsXG4gIE5PTkU6ICdNQVBfVFlQRV9OT05FJ1xufTtcblxuLyoqXG4gKiBAbmFtZSBAaW9uaWMtbmF0aXZlL2dvb2dsZS1tYXBzXG4gKiBAZGVzY3JpcHRpb25cbiAqIEVtYmVkIG5hdGl2ZSBHb29nbGUgTWFwcyB2aWV3cyBpbnRvIHlvdXIgYXBwLlxuICogVGhpcyB2ZXJzaW9uIGlzIGFpbWVkIGZvciBpb25pYyB2NC9iZXRhLlxuICogWW91IG5lZWQgdG8gdXNlIFtjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzQDIuNC4xXShodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9jb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzKSB3aXRoIHRoaXMgcGx1Z2luLlxuICpcbiAqXG4gKiBQcmVyZXF1aXNpdGVzOlxuICogIC0gW0dlbmVyYXRlIEFQSSBrZXlzXShodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1uYXRpdmUtZ29vZ2xlLW1hcHMvYmxvYi9tYXN0ZXIvZG9jdW1lbnRzL2FwaV9rZXkvZ2VuZXJhdGVfYXBpX2tleS5tZClcbiAqXG4gKiBEZW1vOlxuICogIC0gW0Jyb3dzZXIgcGxhdGZvcm1dKGh0dHBzOi8vbWFwc3BsdWdpbi5naXRodWIuaW8vaW9uaWMtZ29vZ2xlbWFwcy1xdWlja2RlbW8tdjQvKVxuICpcbiAqIERvY3VtZW50YXRpb246XG4gKiAgLSBbQVBJIFJlZmVyZW5jZV0oaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtbmF0aXZlLWdvb2dsZS1tYXBzI2RvY3VtZW50YXRpb24pXG4gKiAgLSBbT3ZlcnZpZXcgc2xpZGVdKGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3ByZXNlbnRhdGlvbi9kL2UvMlBBQ1gtMXZTY29obzFlbnNiUjRxQ0k5QUl1UU41NUJaVnZLNzNwQWpJN3N1bUR2VzNDcnh4SG5ybXBYV1VqeDItOENwRmlicVUxRWpMS0NSaHV0aEovcHViP3N0YXJ0PWZhbHNlJmxvb3A9ZmFsc2UmZGVsYXltcz0zMDAwKVxuICpcbiAqIFVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQge1xuICogIEdvb2dsZU1hcHMsXG4gKiAgR29vZ2xlTWFwLFxuICogIEdvb2dsZU1hcHNFdmVudCxcbiAqICBHb29nbGVNYXBPcHRpb25zLFxuICogIENhbWVyYVBvc2l0aW9uLFxuICogIE1hcmtlck9wdGlvbnMsXG4gKiAgTWFya2VyXG4gKiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZ29vZ2xlLW1hcHMnO1xuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmUvXCI7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAncGFnZS1ob21lJyxcbiAqICAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEhvbWVQYWdlIHtcbiAqICAgbWFwOiBHb29nbGVNYXA7XG4gKiAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gKlxuICogICBpb25WaWV3RGlkTG9hZCgpIHtcbiAqICAgIHRoaXMubG9hZE1hcCgpO1xuICogICB9XG4gKlxuICogIGxvYWRNYXAoKSB7XG4gKlxuICogICAgIGxldCBtYXBPcHRpb25zOiBHb29nbGVNYXBPcHRpb25zID0ge1xuICogICAgICAgY2FtZXJhOiB7XG4gKiAgICAgICAgIHRhcmdldDoge1xuICogICAgICAgICAgIGxhdDogNDMuMDc0MTkwNCxcbiAqICAgICAgICAgICBsbmc6IC04OS4zODA5ODAyXG4gKiAgICAgICAgIH0sXG4gKiAgICAgICAgIHpvb206IDE4LFxuICogICAgICAgICB0aWx0OiAzMFxuICogICAgICAgfVxuICogICAgIH1cbiAqXG4gKiAgICAgdGhpcy5tYXAgPSBHb29nbGVNYXBzLmNyZWF0ZSgnbWFwX2NhbnZhcycsIG1hcE9wdGlvbnMpO1xuICpcbiAqICAgICBsZXQgbWFya2VyOiBNYXJrZXIgPSB0aGlzLm1hcC5hZGRNYXJrZXJTeW5jKHtcbiAqICAgICAgIHRpdGxlOiAnSW9uaWMnLFxuICogICAgICAgaWNvbjogJ2JsdWUnLFxuICogICAgICAgYW5pbWF0aW9uOiAnRFJPUCcsXG4gKiAgICAgICBwb3NpdGlvbjoge1xuICogICAgICAgICBsYXQ6IDQzLjA3NDE5MDQsXG4gKiAgICAgICAgIGxuZzogLTg5LjM4MDk4MDJcbiAqICAgICAgIH1cbiAqICAgICB9KTtcbiAqXG4gKiAgICAgbWFya2VyLm9uKEdvb2dsZU1hcHNFdmVudC5NQVJLRVJfQ0xJQ0spXG4gKiAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAqICAgICAgICAgYWxlcnQoJ2NsaWNrZWQnKTtcbiAqICAgICAgIH0pO1xuICogICAgIH0pO1xuICogICB9XG4gKiB9XG4gKlxuICogYGBgXG4gKiBAY2xhc3Nlc1xuICogR29vZ2xlTWFwc1xuICogR29vZ2xlTWFwXG4gKiBTdHJlZXRWaWV3XG4gKiBDaXJjbGVcbiAqIEVuY29kaW5nXG4gKiBFbnZpcm9ubWVudFxuICogR2VvY29kZXJcbiAqIEdyb3VuZE92ZXJsYXlcbiAqIEh0bWxJbmZvV2luZG93XG4gKiBHZW9jb2RlclxuICogTGF0TG5nXG4gKiBMYXRMbmdCb3VuZHNcbiAqIE1hcmtlclxuICogTWFya2VyQ2x1c3RlclxuICogUG9seWdvblxuICogUG9seWxpbmVcbiAqIFNwaGVyaWNhbFxuICogS21sT3ZlcmxheVxuICogUG9seVxuICogVGlsZU92ZXJsYXlcbiAqIEJhc2VDbGFzc1xuICogQmFzZUFycmF5Q2xhc3NcbiAqIEBpbnRlcmZhY2VzXG4gKiBHb29nbGVNYXBPcHRpb25zXG4gKiBDYW1lcmFQb3NpdGlvblxuICogQ2lyY2xlT3B0aW9uc1xuICogR2VvY29kZXJSZXF1ZXN0XG4gKiBHZW9jb2RlclJlc3VsdFxuICogR3JvdW5kT3ZlcmxheU9wdGlvbnNcbiAqIElMYXRMbmdcbiAqIE1hcmtlckljb25cbiAqIE1hcmtlck9wdGlvbnNcbiAqIE1hcmtlckNsdXN0ZXJJY29uXG4gKiBNYXJrZXJDbHVzdGVyT3B0aW9uc1xuICogTXlMb2NhdGlvblxuICogTXlMb2NhdGlvbk9wdGlvbnNcbiAqIFBvbHlnb25PcHRpb25zXG4gKiBQb2x5bGluZU9wdGlvbnNcbiAqIFRpbGVPdmVybGF5T3B0aW9uc1xuICogS21sT3ZlcmxheU9wdGlvbnNcbiAqIFZpc2libGVSZWdpb25cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWFwc3BsdWdpbi9jb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgZG9jdW1lbnQ6ICdodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL25hdGl2ZS9nb29nbGUtbWFwcy8nLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgLS12YXJpYWJsZSBBUElfS0VZX0ZPUl9BTkRST0lEPVwiWU9VUl9BTkRST0lEX0FQSV9LRVlfSVNfSEVSRVwiIC0tdmFyaWFibGUgQVBJX0tFWV9GT1JfSU9TPVwiWU9VUl9JT1NfQVBJX0tFWV9JU19IRVJFXCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FQSV9LRVlfRk9SX0FORFJPSUQnLCAnQVBJX0tFWV9GT1JfSU9TJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdCcm93c2VyJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBHb29nbGVNYXAgaW5zdGFuY2VcbiAgICogQHBhcmFtIGVsZW1lbnQge3N0cmluZyB8IEhUTUxFbGVtZW50fSBFbGVtZW50IElEIG9yIHJlZmVyZW5jZSB0byBhdHRhY2ggdGhlIG1hcCB0b1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7R29vZ2xlTWFwT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnNcbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgY3JlYXRlKGVsZW1lbnQ6IHN0cmluZyB8IEhUTUxFbGVtZW50IHwgR29vZ2xlTWFwT3B0aW9ucywgb3B0aW9ucz86IEdvb2dsZU1hcE9wdGlvbnMpOiBHb29nbGVNYXAge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnX19wbHVnaW5NYXBJZCcpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCBlbGVtZW50LnRhZ05hbWUgKyAnW19fcGx1Z2luTWFwSWQ9XFwnJyArIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJykgKyAnXFwnXSBoYXMgYWxyZWFkeSBtYXAuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgb3B0aW9ucyA9IDxHb29nbGVNYXBPcHRpb25zPmVsZW1lbnQ7XG4gICAgICBlbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgZ29vZ2xlTWFwOiBHb29nbGVNYXAgPSBuZXcgR29vZ2xlTWFwKDxIVE1MRWxlbWVudD5lbGVtZW50LCBvcHRpb25zKTtcbiAgICBnb29nbGVNYXAuc2V0KCdfb3ZlcmxheXMnLCB7fSk7XG4gICAgcmV0dXJuIGdvb2dsZU1hcDtcbiAgfVxuICAvL1xuICAvLyAvKipcbiAgLy8gICogQGRlcHJlY2F0aW9uXG4gIC8vICAqIEBoaWRkZW5cbiAgLy8gICovXG4gIC8vIGNyZWF0ZShlbGVtZW50OiBzdHJpbmcgfCBIVE1MRWxlbWVudCB8IEdvb2dsZU1hcE9wdGlvbnMsIG9wdGlvbnM/OiBHb29nbGVNYXBPcHRpb25zKTogR29vZ2xlTWFwIHtcbiAgLy8gICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBQbGVhc2UgdXNlIEdvb2dsZU1hcHMuY3JlYXRlKCknKTtcbiAgLy8gICByZXR1cm4gR29vZ2xlTWFwcy5jcmVhdGUoZWxlbWVudCwgb3B0aW9ucyk7XG4gIC8vIH1cbiAgLy9cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBTdHJlZXRWaWV3IGluc3RhbmNlXG4gICAqIEBwYXJhbSBlbGVtZW50IHtzdHJpbmcgfCBIVE1MRWxlbWVudH0gRWxlbWVudCBJRCBvciByZWZlcmVuY2UgdG8gYXR0YWNoIHRoZSBtYXAgdG9cbiAgICogQHBhcmFtIG9wdGlvbnMge1N0cmVldFZpZXdPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9uc1xuICAgKiBAcmV0dXJuIHtTdHJlZXRWaWV3UGFub3JhbWF9XG4gICAqL1xuICBjcmVhdGVQYW5vcmFtYShlbGVtZW50OiBzdHJpbmcgfCBIVE1MRWxlbWVudCwgb3B0aW9ucz86IFN0cmVldFZpZXdPcHRpb25zKTogU3RyZWV0Vmlld1Bhbm9yYW1hIHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ19fcGx1Z2luTWFwSWQnKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgZWxlbWVudC50YWdOYW1lICsgJ1tfX3BsdWdpbk1hcElkPVxcJycgKyBlbGVtZW50LmdldEF0dHJpYnV0ZSgnX19wbHVnaW5NYXBJZCcpICsgICdcXCddIGhhcyBhbHJlYWR5IG1hcC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFN0cmVldFZpZXdQYW5vcmFtYSg8SFRNTEVsZW1lbnQ+ZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWFwc3BsdWdpbi9jb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzLWRvYy9ibG9iL21hc3Rlci92Mi4wLjAvY2xhc3MvQmFzZUNsYXNzL1JFQURNRS5tZFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLkJhc2VDbGFzcycsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VDbGFzcyB7XG4gIHByb3RlY3RlZCBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IG5ldyAoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5CYXNlQ2xhc3MpKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBldmVudCBsaXN0ZW5lci5cbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBldmVudCBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5vbihldmVudE5hbWUsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICBpZiAoYXJnc1thcmdzLmxlbmd0aCAtIDFdIGluc3RhbmNlb2YgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5CYXNlQ2xhc3MpIHtcbiAgICAgICAgICBpZiAoYXJnc1thcmdzLmxlbmd0aCAtIDFdLnR5cGUgPT09ICdNYXAnIHx8IGFyZ3NbYXJncy5sZW5ndGggLSAxXS50eXBlID09PSAnU3RyZWV0Vmlld1Bhbm9yYW1hJykge1xuICAgICAgICAgICAgYXJnc1thcmdzLmxlbmd0aCAtIDFdID0gdGhpcztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMgaW5zdGFuY2VvZiBNYXJrZXJDbHVzdGVyKSB7XG4gICAgICAgICAgICBsZXQgb3ZlcmxheTogTWFya2VyID0gdGhpcy5nZXQoYXJnc1thcmdzLmxlbmd0aCAtIDFdLmdldElkKCkpO1xuICAgICAgICAgICAgaWYgKCFvdmVybGF5KSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1hcmtlckpTOiBhbnkgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgIGNvbnN0IG1hcmtlcklkOiBzdHJpbmcgPSBtYXJrZXJKUy5nZXRJZCgpO1xuICAgICAgICAgICAgICBjb25zdCBtYXJrZXJDbHVzdGVyOiBNYXJrZXJDbHVzdGVyID0gPE1hcmtlckNsdXN0ZXI+dGhpcztcbiAgICAgICAgICAgICAgb3ZlcmxheSA9IG5ldyBNYXJrZXIobWFya2VyQ2x1c3Rlci5nZXRNYXAoKSwgbWFya2VySlMpO1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbbWFya2VySWRdID0gb3ZlcmxheTtcbiAgICAgICAgICAgICAgbWFya2VySlMub25lKG1hcmtlckpTLmdldElkKCkgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbbWFya2VySWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPSBvdmVybGF5O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW2FyZ3NbYXJncy5sZW5ndGggLSAxXS5nZXRJZCgpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChhcmdzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCB3b3JrcyBvbmNlLlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IGV2ZW50IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRMaXN0ZW5lck9uY2UoZXZlbnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLm9uZShldmVudE5hbWUsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICBpZiAoYXJnc1thcmdzLmxlbmd0aCAtIDFdIGluc3RhbmNlb2YgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5CYXNlQ2xhc3MpIHtcbiAgICAgICAgICBpZiAoYXJnc1thcmdzLmxlbmd0aCAtIDFdLnR5cGUgPT09ICdNYXAnIHx8IGFyZ3NbYXJncy5sZW5ndGggLSAxXS50eXBlID09PSAnU3RyZWV0Vmlld1Bhbm9yYW1hJykge1xuICAgICAgICAgICAgYXJnc1thcmdzLmxlbmd0aCAtIDFdID0gdGhpcztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMgaW5zdGFuY2VvZiBNYXJrZXJDbHVzdGVyKSB7XG4gICAgICAgICAgICBsZXQgb3ZlcmxheTogTWFya2VyID0gdGhpcy5nZXQoYXJnc1thcmdzLmxlbmd0aCAtIDFdLmdldElkKCkpO1xuICAgICAgICAgICAgaWYgKCFvdmVybGF5KSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1hcmtlckpTOiBhbnkgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgIGNvbnN0IG1hcmtlcklkOiBzdHJpbmcgPSBtYXJrZXJKUy5nZXRJZCgpO1xuICAgICAgICAgICAgICBjb25zdCBtYXJrZXJDbHVzdGVyOiBNYXJrZXJDbHVzdGVyID0gPE1hcmtlckNsdXN0ZXI+dGhpcztcbiAgICAgICAgICAgICAgb3ZlcmxheSA9IG5ldyBNYXJrZXIobWFya2VyQ2x1c3Rlci5nZXRNYXAoKSwgbWFya2VySlMpO1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbbWFya2VySWRdID0gb3ZlcmxheTtcbiAgICAgICAgICAgICAgbWFya2VySlMub25lKG1hcmtlckpTLmdldElkKCkgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbbWFya2VySWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPSBvdmVybGF5O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW2FyZ3NbYXJncy5sZW5ndGggLSAxXS5nZXRJZCgpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSB2YWx1ZVxuICAgKiBAcGFyYW0ga2V5IHthbnl9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXQoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgdmFsdWVcbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBUaGUga2V5IG5hbWUgZm9yIHRoZSB2YWx1ZS4gYChrZXkpX2NoYW5nZWRgIHdpbGwgYmUgZmlyZWQgd2hlbiB5b3Ugc2V0IHZhbHVlIHRocm91Z2ggdGhpcyBtZXRob2QuXG4gICAqIEBwYXJhbSB2YWx1ZSB7YW55fVxuICAgKiBAcGFyYW0gbm9Ob3RpZnkge2Jvb2xlYW59IFtvcHRpb25zXSBUcnVlIGlmIHlvdSB3YW50IHRvIHByZXZlbnQgZmlyaW5nIHRoZSBgKGtleSlfY2hhbmdlZGAgZXZlbnQuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIG5vTm90aWZ5PzogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgYSBrZXkgdG8gYW5vdGhlciBvYmplY3RcbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBUaGUgcHJvcGVydHkgbmFtZSB5b3Ugd2FudCB0byBvYnNlcnZlLlxuICAgKiBAcGFyYW0gdGFyZ2V0IHthbnl9IFRoZSB0YXJnZXQgb2JqZWN0IHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEBwYXJhbSB0YXJnZXRLZXk/IHtzdHJpbmd9IFtvcHRpb25zXSAgVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS4gSWYgeW91IG9taXQgdGhpcywgdGhlIGBrZXlgIGFyZ3VtZW50IGlzIHVzZWQuXG4gICAqIEBwYXJhbSBub05vdGlmeT8ge2Jvb2xlYW59IFtvcHRpb25zXSBUcnVlIGlmIHlvdSB3YW50IHRvIHByZXZlbnQgYChrZXkpX2NoYW5nZWRgIGV2ZW50IHdoZW4geW91IGJpbmQgZmlyc3QgdGltZSwgYmVjYXVzZSB0aGUgaW50ZXJuYWwgc3RhdHVzIGlzIGNoYW5nZWQgZnJvbSBgdW5kZWZpbmVkYCB0byBzb21ldGhpbmcuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBiaW5kVG8oa2V5OiBzdHJpbmcsIHRhcmdldDogYW55LCB0YXJnZXRLZXk/OiBzdHJpbmcsIG5vTm90aWZ5PzogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEFsaWFzIG9mIGBhZGRFdmVudExpc3RlbmVyYFxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IFRoZSBwcm9wZXJ0eSBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBvbihldmVudE5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uub24oZXZlbnROYW1lLCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgaWYgKGFyZ3NbYXJncy5sZW5ndGggLSAxXSBpbnN0YW5jZW9mIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuQmFzZUNsYXNzKSB7XG4gICAgICAgICAgaWYgKGFyZ3NbYXJncy5sZW5ndGggLSAxXS50eXBlID09PSAnTWFwJyB8fCBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0udHlwZSA9PT0gJ1N0cmVldFZpZXdQYW5vcmFtYScpIHtcbiAgICAgICAgICAgIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9IHRoaXM7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzIGluc3RhbmNlb2YgTWFya2VyQ2x1c3Rlcikge1xuICAgICAgICAgICAgbGV0IG92ZXJsYXk6IE1hcmtlciA9IHRoaXMuZ2V0KGFyZ3NbYXJncy5sZW5ndGggLSAxXS5nZXRJZCgpKTtcbiAgICAgICAgICAgIGlmICghb3ZlcmxheSkge1xuICAgICAgICAgICAgICBjb25zdCBtYXJrZXJKUzogYW55ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICBjb25zdCBtYXJrZXJJZDogc3RyaW5nID0gbWFya2VySlMuZ2V0SWQoKTtcbiAgICAgICAgICAgICAgY29uc3QgbWFya2VyQ2x1c3RlcjogTWFya2VyQ2x1c3RlciA9IDxNYXJrZXJDbHVzdGVyPnRoaXM7XG4gICAgICAgICAgICAgIG92ZXJsYXkgPSBuZXcgTWFya2VyKG1hcmtlckNsdXN0ZXIuZ2V0TWFwKCksIG1hcmtlckpTKTtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW21hcmtlcklkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgICAgIG1hcmtlckpTLm9uZShtYXJrZXJKUy5nZXRJZCgpICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW21hcmtlcklkXSA9IG51bGw7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJnc1thcmdzLmxlbmd0aCAtIDFdID0gb3ZlcmxheTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJnc1thcmdzLmxlbmd0aCAtIDFdID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVthcmdzW2FyZ3MubGVuZ3RoIC0gMV0uZ2V0SWQoKV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVyLm5leHQoYXJncyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGlhcyBvZiBgYWRkRXZlbnRMaXN0ZW5lck9uY2VgXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ30gVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBvbmUoZXZlbnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLm9uZShldmVudE5hbWUsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICBpZiAoYXJnc1thcmdzLmxlbmd0aCAtIDFdIGluc3RhbmNlb2YgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5CYXNlQ2xhc3MpIHtcbiAgICAgICAgICBpZiAoYXJnc1thcmdzLmxlbmd0aCAtIDFdLnR5cGUgPT09ICdNYXAnIHx8IGFyZ3NbYXJncy5sZW5ndGggLSAxXS50eXBlID09PSAnU3RyZWV0Vmlld1Bhbm9yYW1hJykge1xuICAgICAgICAgICAgYXJnc1thcmdzLmxlbmd0aCAtIDFdID0gdGhpcztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMgaW5zdGFuY2VvZiBNYXJrZXJDbHVzdGVyKSB7XG4gICAgICAgICAgICBsZXQgb3ZlcmxheTogTWFya2VyID0gdGhpcy5nZXQoYXJnc1thcmdzLmxlbmd0aCAtIDFdLmdldElkKCkpO1xuICAgICAgICAgICAgaWYgKCFvdmVybGF5KSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1hcmtlckpTOiBhbnkgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgIGNvbnN0IG1hcmtlcklkOiBzdHJpbmcgPSBtYXJrZXJKUy5nZXRJZCgpO1xuICAgICAgICAgICAgICBjb25zdCBtYXJrZXJDbHVzdGVyOiBNYXJrZXJDbHVzdGVyID0gPE1hcmtlckNsdXN0ZXI+dGhpcztcbiAgICAgICAgICAgICAgb3ZlcmxheSA9IG5ldyBNYXJrZXIobWFya2VyQ2x1c3Rlci5nZXRNYXAoKSwgbWFya2VySlMpO1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbbWFya2VySWRdID0gb3ZlcmxheTtcbiAgICAgICAgICAgICAgbWFya2VySlMub25lKG1hcmtlckpTLmdldElkKCkgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbbWFya2VySWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPSBvdmVybGF5O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW2FyZ3NbYXJncy5sZW5ndGggLSAxXS5nZXRJZCgpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgc3RvcmVkIHZhbHVlc1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZW1wdHkoKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggZXZlbnQuXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gRXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7YW55fSBbb3B0aW9uc10gVGhlIGRhdGEgeW91IHdhbnQgdG8gcGFzcyB0byBldmVudCBsaXN0ZXJuZXJzLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgLi4ucGFyYW1ldGVyczogYW55W10pOiB2b2lkIHtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIG9mZigpIGFuZCBlbXB0eSgpXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vYmplY3RJbnN0YW5jZS50eXBlID09PSAnTWFwJykge1xuICAgICAgY29uc3QgbWFwOiBHb29nbGVNYXAgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKTtcbiAgICAgIGlmIChtYXApIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0SWQoKV07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcihzKVxuICAgKiBUaGUgYHJlbW92ZUV2ZW50TGlzdGVuZXIoKWAgaGFzIHRocmVlIHVzYWdlczpcbiAgICogIC0gcmVtb3ZlRXZlbnRMaXN0ZW5lcihcImV2ZW50TmFtZVwiLCBsaXN0ZW5lckZ1bmN0aW9uKTtcbiAgICogICAgIFRoaXMgcmVtb3ZlcyBvbmUgcGFydGljdWxhciBldmVudCBsaXN0ZW5lclxuICAgKiAgLSByZW1vdmVFdmVudExpc3RlbmVyKFwiZXZlbnROYW1lXCIpO1xuICAgKiAgICAgVGhpcyByZW1vdmVzIHRoZSBldmVudCBsaXN0ZW5lcnMgdGhhdCBhZGRlZCBmb3IgdGhlIGV2ZW50IG5hbWUuXG4gICAqICAtIHJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICogICAgIFRoaXMgcmVtb3ZlcyBhbGwgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IFtvcHRpb25zXSBFdmVudCBuYW1lXG4gICAqIEBwYXJhbSBsaXN0ZW5lciB7RnVuY3Rpb259IFtvcHRpb25zXSBFdmVudCBsaXN0ZW5lclxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWU/OiBzdHJpbmcsIGxpc3RlbmVyPzogKC4uLnBhcmFtZXRlcnM6IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBbGlhcyBvZiBgcmVtb3ZlRXZlbnRMaXN0ZW5lcmBcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBbb3B0aW9uc10gRXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gbGlzdGVuZXIge0Z1bmN0aW9ufSBbb3B0aW9uc10gRXZlbnQgbGlzdGVuZXJcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIG9mZihldmVudE5hbWU/OiBzdHJpbmcsIGxpc3RlbmVyPzogKC4uLnBhcmFtZXRlcnM6IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7fVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICogaHR0cHM6Ly9naXRodWIuY29tL21hcHNwbHVnaW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcy1kb2MvYmxvYi9tYXN0ZXIvdjIuMC4wL2NsYXNzL0Jhc2VBcnJheUNsYXNzL1JFQURNRS5tZFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Jhc2VBcnJheUNsYXNzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5CYXNlQXJyYXlDbGFzcydcbn0pXG5leHBvcnQgY2xhc3MgQmFzZUFycmF5Q2xhc3M8VD4gZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxEYXRhPzogVFtdIHwgYW55KSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoaW5pdGlhbERhdGEgaW5zdGFuY2VvZiBHb29nbGVNYXBzLmdldFBsdWdpbigpLkJhc2VBcnJheUNsYXNzKSB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IGluaXRpYWxEYXRhO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpbml0aWFsRGF0YSkpIHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gbmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpLkJhc2VBcnJheUNsYXNzKShpbml0aWFsRGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gbmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpLkJhc2VBcnJheUNsYXNzKShbXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGVsZW1lbnRzIGZyb20gdGhlIGFycmF5LlxuICAgKiBAcGFyYW0gbm9Ob3RpZnk/IHtib29sZWFufSBbb3B0aW9uc10gU2V0IHRydWUgdG8gcHJldmVudCByZW1vdmVfYXQgZXZlbnRzLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZW1wdHkobm9Ob3RpZnk/OiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGVhY2ggZWxlbWVudCwgY2FsbGluZyB0aGUgcHJvdmlkZWQgY2FsbGJhY2suXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBmb3JFYWNoKGZuOiAoZWxlbWVudDogVCwgaW5kZXg/OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgZWFjaCBlbGVtZW50LCBjYWxsaW5nIHRoZSBwcm92aWRlZCBjYWxsYmFjay5cbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIGZvckVhY2hBc3luYyhmbjogKChlbGVtZW50OiBULCBjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4gdm9pZCkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZm9yRWFjaChmbiwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGVhY2ggZWxlbWVudCwgdGhlbiBSZXR1cm5zIGEgbmV3IHZhbHVlLlxuICAgKiBUaGVuIHlvdSBjYW4gZ2V0IHRoZSByZXN1bHRzIG9mIGVhY2ggY2FsbGJhY2suXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge0FycmF5PE9iamVjdD59IHJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGUgcmVzdWx0c1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgbWFwKGZuOiAoZWxlbWVudDogVCwgaW5kZXg6IG51bWJlcikgPT4gYW55KTogYW55W10ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgZWFjaCBlbGVtZW50LCBjYWxsaW5nIHRoZSBwcm92aWRlZCBjYWxsYmFjay5cbiAgICogVGhlbiB5b3UgY2FuIGdldCB0aGUgcmVzdWx0cyBvZiBlYWNoIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGUgcmVzdWx0c1xuICAgKi9cbiAgbWFwQXN5bmMoZm46ICgoZWxlbWVudDogVCwgY2FsbGJhY2s6IChuZXdFbGVtZW50OiBhbnkpID0+IHZvaWQpID0+IHZvaWQpKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGFueVtdPigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UubWFwKGZuLCByZXNvbHZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYW1lIGFzIGBtYXBBc3luY2AsIGJ1dCBrZWVwIHRoZSBleGVjdXRpb24gb3JkZXJcbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cbiAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn1cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggdGhlIHJlc3VsdHNcbiAgICovXG4gIG1hcFNlcmllcyhmbjogKChlbGVtZW50OiBULCBjYWxsYmFjazogKG5ld0VsZW1lbnQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZCkpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueVtdPigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UubWFwU2VyaWVzKGZuLCByZXNvbHZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZmlsdGVyKCkgbWV0aG9kIGNyZWF0ZXMgYSBuZXcgYXJyYXkgd2l0aCBhbGwgZWxlbWVudHMgdGhhdCBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IHRoZSBwcm92aWRlZCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cbiAgICogQHJldHVybiB7VFtdfSByZXR1cm5zIGEgbmV3IGZpbHRlcmVkIGFycmF5XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBmaWx0ZXIoZm46IChlbGVtZW50OiBULCBpbmRleDogbnVtYmVyKSA9PiBib29sZWFuKTogVFtdIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhlIGZpbHRlckFzeW5jKCkgbWV0aG9kIGNyZWF0ZXMgYSBuZXcgYXJyYXkgd2l0aCBhbGwgZWxlbWVudHMgdGhhdCBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IHRoZSBwcm92aWRlZCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cbiAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn1cbiAgICogQHJldHVybiB7UHJvbWlzZTxUW10+fSByZXR1cm5zIGEgbmV3IGZpbHRlcmVkIGFycmF5XG4gICAqL1xuICBmaWx0ZXJBc3luYyhmbjogKGVsZW1lbnQ6IFQsIGNhbGxiYWNrOiAocmVzdWx0OiBib29sZWFuKSA9PiB2b2lkKSA9PiB2b2lkKTogUHJvbWlzZTxUW10+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnlbXT4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmZpbHRlcihmbiwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBBcnJheS5cbiAgICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEFycmF5KCk6IFRbXSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICogQHBhcmFtIGluZGV4IHtudW1iZXJ9XG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEF0KGluZGV4OiBudW1iZXIpOiBhbnkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB0aGUgZWxlbWVudHMuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldExlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaW5kZXhPZigpIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBpbmRleCBhdCB3aGljaCBhIGdpdmVuIGVsZW1lbnQgY2FuIGJlIGZvdW5kIGluIHRoZSBhcnJheSwgb3IgLTEgaWYgaXQgaXMgbm90IHByZXNlbnQuXG4gICAqIEBwYXJhbSBlbGVtZW50IHtPYmplY3R9XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGluZGV4T2YoZWxlbWVudDogVCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSByZXZlcnNlKCkgbWV0aG9kIHJldmVyc2VzIGFuIGFycmF5IGluIHBsYWNlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcmV2ZXJzZSgpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgc29ydCgpIG1ldGhvZCBzb3J0cyB0aGUgZWxlbWVudHMgb2YgYW4gYXJyYXkgaW4gcGxhY2UgYW5kIHJldHVybnMgdGhlIGFycmF5LlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc29ydCgpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIGFuIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICogQHBhcmFtIGluZGV4IHtudW1iZXJ9XG4gICAqIEBwYXJhbSBlbGVtZW50IHtPYmplY3R9XG4gICAqIEBwYXJhbSBub05vdGlmeT8ge2Jvb2xlYW59IFtvcHRpb25zXSBTZXQgdHJ1ZSB0byBwcmV2ZW50IGluc2VydF9hdCBldmVudC5cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaW5zZXJ0QXQoaW5kZXg6IG51bWJlciwgZWxlbWVudDogVCwgbm9Ob3RpZnk/OiBib29sZWFuKSB7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBhcnJheSBhbmQgcmV0dXJucyB0aGF0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSBub05vdGlmeT8ge2Jvb2xlYW59IFtvcHRpb25zXSBTZXQgdHJ1ZSB0byBwcmV2ZW50IHJlbW92ZV9hdCBldmVudC5cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcG9wKG5vTm90aWZ5PzogYm9vbGVhbik6IFQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG9uZSBlbGVtZW50IHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5IGFuZCByZXR1cm5zIHRoZSBuZXcgbGVuZ3RoIG9mIHRoZSBhcnJheS5cbiAgICogQHBhcmFtIGVsZW1lbnQge29iamVjdH1cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gU2V0IHRydWUgdG8gcHJldmVudCBpbnNlcnRfYXQgZXZlbnRzLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcHVzaChlbGVtZW50OiBULCBub05vdGlmeT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGVsZW1lbnQgZnJvbSB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgcmVtb3ZlX2F0IGV2ZW50LlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcmVtb3ZlQXQoaW5kZXg6IG51bWJlciwgbm9Ob3RpZnk/OiBib29sZWFuKTogVCB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFuIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICogQHBhcmFtIGluZGV4IHtudW1iZXJ9XG4gICAqIEBwYXJhbSBlbGVtZW50IHtvYmplY3R9XG4gICAqIEBwYXJhbSBub05vdGlmeT8ge2Jvb2xlYW59IFtvcHRpb25zXSBTZXQgdHJ1ZSB0byBwcmV2ZW50IHNldF9hdCBldmVudC5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEF0KGluZGV4OiBudW1iZXIsIGVsZW1lbnQ6IFQsIG5vTm90aWZ5PzogYm9vbGVhbik6IHZvaWQge1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICogaHR0cHM6Ly9naXRodWIuY29tL21hcHNwbHVnaW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcy1kb2MvYmxvYi9tYXN0ZXIvdjIuMC4wL2NsYXNzL0NpcmNsZS9SRUFETUUubWRcbiAqL1xuZXhwb3J0IGNsYXNzIENpcmNsZSBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IF9vYmplY3RJbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGNlbnRlciBwb3NpdGlvbi5cbiAgICogQHBhcmFtIGxhdExuZyB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENlbnRlcihsYXRMbmc6IElMYXRMbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGNlbnRlciBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2VudGVyKCk6IElMYXRMbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGNpcmNsZSByYWRpdXMuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFJhZGl1cygpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBjaXJjbGUgcmFkaXVzLlxuICAgKiBAcGFyYW0gcmFkaXVzIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRSYWRpdXMocmFkaXVzOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBmaWxsaW5nIGNvbG9yIChpbm5lciBjb2xvcikuXG4gICAqIEBwYXJhbSBjb2xvciB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RmlsbENvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGNpcmNsZSBmaWxsaW5nIGNvbG9yIChpbm5lciBjb2xvcikuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEZpbGxDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBzdHJva2Ugd2lkdGguXG4gICAqIEBwYXJhbSBzdHJva2VXaWR0aCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3Ryb2tlV2lkdGgoc3Ryb2tlV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2lyY2xlIHN0cm9rZSB3aWR0aCAodW5pdDogcGl4ZWwpLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTdHJva2VXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBzdHJva2UgY29sb3IgKG91dHRlciBjb2xvcikuXG4gICAqIEBwYXJhbSBzdHJva2VDb2xvciB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3Ryb2tlQ29sb3Ioc3Ryb2tlQ29sb3I6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2lyY2xlIHN0cm9rZSBjb2xvciAob3V0ZXIgY29sb3IpLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTdHJva2VDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIGNsaWNrLWFiaWxpdHkgb2YgdGhlIGNpcmNsZS5cbiAgICogQHBhcmFtIGNsaWNrYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNpcmNsZSBpcyBjbGlja2FibGUuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGNpcmNsZSB6SW5kZXggb3JkZXIuXG4gICAqIEBwYXJhbSB6SW5kZXgge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2lyY2xlIHpJbmRleC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0WkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY2lyY2xlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxhdExuZ0JvdW5kcyAocmVjdGFuZ2xlKSB0aGF0IGNvbnRhaW5zIHRoZSBjaXJjbGUuXG4gICAqIEByZXR1cm4ge0xhdExuZ0JvdW5kc31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEJvdW5kcygpOiBMYXRMbmdCb3VuZHMge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY2lyY2xlIHZpc2liaWxpdHlcbiAgICogQHBhcmFtIHZpc2libGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNpcmNsZSBpcyB2aXNpYmxlLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMuZW52aXJvbm1lbnQnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgLyoqXG4gICAqIFNldCBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gICAqL1xuICBzdGF0aWMgc2V0RW52KGVudk9wdGlvbnM6IEVudk9wdGlvbnMpOiB2b2lkIHtcbiAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLmVudmlyb25tZW50LnNldEVudihlbnZPcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG9wZW4gc291cmNlIHNvZnR3YXJlIGxpY2Vuc2UgaW5mb3JtYXRpb24gZm9yIEdvb2dsZSBNYXBzIFNESyBmb3IgaU9TLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBzdGF0aWMgZ2V0TGljZW5zZUluZm8oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLmVudmlyb25tZW50LmdldExpY2Vuc2VJbmZvKCh0ZXh0OiBzdHJpbmcpID0+IHJlc29sdmUodGV4dCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgYXBwLlxuICAgKiBAcGFyYW0gY29sb3JcbiAgICovXG4gIHN0YXRpYyBzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZW52aXJvbm1lbnQuc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb25cbiAgICogQGhpZGRlblxuICAgKi9cbiAgZ2V0TGljZW5zZUluZm8oKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgRW52aXJvbm1lbnQuZ2V0TGljZW5zZUluZm8oKScpO1xuICAgIHJldHVybiBFbnZpcm9ubWVudC5nZXRMaWNlbnNlSW5mbygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvblxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbnZpcm9ubWVudC5zZXRCYWNrZ3JvdW5kQ29sb3IoKScpO1xuICAgIEVudmlyb25tZW50LnNldEJhY2tncm91bmRDb2xvcihjb2xvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5HZW9jb2RlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBHZW9jb2RlciB7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvblxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBnZW9jb2RlKHJlcXVlc3Q6IEdlb2NvZGVyUmVxdWVzdCk6IFByb21pc2U8R2VvY29kZXJSZXN1bHRbXSB8IEJhc2VBcnJheUNsYXNzPEdlb2NvZGVyUmVzdWx0W10+PiB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEdlb2NvZGVyLmdlb2NvZGUoKScpO1xuICAgIHJldHVybiBHZW9jb2Rlci5nZW9jb2RlKHJlcXVlc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHBvc2l0aW9uIHRvIGFkZHJlc3MgYW5kIHZpY2UgdmVyc2FcbiAgICogQHBhcmFtIHtHZW9jb2RlclJlcXVlc3R9IHJlcXVlc3QgUmVxdWVzdCBvYmplY3Qgd2l0aCBlaXRoZXIgYW4gYWRkcmVzcyBvciBhIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8R2VvY29kZXJSZXN1bHRbXSB8IEJhc2VBcnJheUNsYXNzPEdlb2NvZGVyUmVzdWx0Pj59XG4gICAqL1xuICBzdGF0aWMgZ2VvY29kZShyZXF1ZXN0OiBHZW9jb2RlclJlcXVlc3QpOiBQcm9taXNlPEdlb2NvZGVyUmVzdWx0W10gfCBCYXNlQXJyYXlDbGFzczxHZW9jb2RlclJlc3VsdFtdPj4ge1xuXG4gICAgaWYgKHJlcXVlc3QuYWRkcmVzcyBpbnN0YW5jZW9mIEFycmF5IHx8IEFycmF5LmlzQXJyYXkocmVxdWVzdC5hZGRyZXNzKSB8fFxuICAgICAgcmVxdWVzdC5wb3NpdGlvbiBpbnN0YW5jZW9mIEFycmF5IHx8IEFycmF5LmlzQXJyYXkocmVxdWVzdC5wb3NpdGlvbikpIHtcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIEdlb2NvZGVyLmdlb2NvZGUoe1xuICAgICAgLy8gICBhZGRyZXNzOiBbXG4gICAgICAvLyAgICBcIkt5b3RvLCBKYXBhblwiLFxuICAgICAgLy8gICAgXCJUb2t5bywgSmFwYW5cIlxuICAgICAgLy8gICBdXG4gICAgICAvLyB9KVxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgcmV0dXJuIGdldFByb21pc2U8QmFzZUFycmF5Q2xhc3M8R2VvY29kZXJSZXN1bHQ+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuR2VvY29kZXIuZ2VvY29kZShyZXF1ZXN0LCAobXZjQXJyYXk6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChtdmNBcnJheSkge1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgQmFzZUFycmF5Q2xhc3MobXZjQXJyYXkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBHZW9jb2Rlci5nZW9jb2RlKHtcbiAgICAgIC8vICAgYWRkcmVzczogXCJLeW90bywgSmFwYW5cIlxuICAgICAgLy8gfSlcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIHJldHVybiBnZXRQcm9taXNlPEdlb2NvZGVyUmVzdWx0W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5HZW9jb2Rlci5nZW9jb2RlKHJlcXVlc3QsIChyZXN1bHRzOiBHZW9jb2RlclJlc3VsdFtdKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGdlb2NvZGUocmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0KTogUHJvbWlzZTxHZW9jb2RlclJlc3VsdFtdIHwgQmFzZUFycmF5Q2xhc3M8R2VvY29kZXJSZXN1bHQ+PiB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEdlb2NvZGVyLmdlb2NvZGUoKScpO1xuICAgIHJldHVybiBHZW9jb2Rlci5nZW9jb2RlKHJlcXVlc3QpO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMuTG9jYXRpb25TZXJ2aWNlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIExvY2F0aW9uU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBkZXZpY2UgbG9jYXRpb24gd2l0aG91dCBtYXBcbiAgICogQHJldHVybiB7UHJvbWlzZTxNeUxvY2F0aW9uPn1cbiAgICovXG4gIHN0YXRpYyBnZXRNeUxvY2F0aW9uKG9wdGlvbnM/OiBNeUxvY2F0aW9uT3B0aW9ucyk6IFByb21pc2U8TXlMb2NhdGlvbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxNeUxvY2F0aW9uPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLkxvY2F0aW9uU2VydmljZS5nZXRNeUxvY2F0aW9uKG9wdGlvbnMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSBhcHBsaWNhdGlvbiBoYXMgZ2VvbG9jYXRpb24gcGVybWlzc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE15TG9jYXRpb24+fVxuICAgKi9cbiAgc3RhdGljIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTG9jYXRpb25TZXJ2aWNlLmhhc1Blcm1pc3Npb24ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLmdlb21ldHJ5LmVuY29kaW5nJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIEVuY29kaW5nIHtcblxuICAvKipcbiAgICogRGVjb2RlcyBhbiBlbmNvZGVkIHBhdGggc3RyaW5nIGludG8gYSBzZXF1ZW5jZSBvZiBMYXRMbmdzLlxuICAgKiBAcGFyYW0gZW5jb2RlZCB7c3RyaW5nfSBhbiBlbmNvZGVkIHBhdGggc3RyaW5nXG4gICAqIEBwYXJhbSBwcmVjaXNpb24/IHtudW1iZXJ9IGRlZmF1bHQ6IDVcbiAgICogQHJldHVybiB7TGF0TG5nfVxuICAgKi9cbiAgc3RhdGljIGRlY29kZVBhdGgoZW5jb2RlZDogc3RyaW5nLCBwcmVjaXNpb24/OiBudW1iZXIpOiBMYXRMbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmNvZGVzIGEgc2VxdWVuY2Ugb2YgTGF0TG5ncyBpbnRvIGFuIGVuY29kZWQgcGF0aCBzdHJpbmcuXG4gICAqIEBwYXJhbSBwYXRoIHtBcnJheTxJTGF0TG5nPiB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+fSBhIHNlcXVlbmNlIG9mIExhdExuZ3NcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGVuY29kZVBhdGgocGF0aDogQXJyYXk8SUxhdExuZz4gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvblxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBkZWNvZGVQYXRoKGVuY29kZWQ6IHN0cmluZywgcHJlY2lzaW9uPzogbnVtYmVyKTogQXJyYXk8SUxhdExuZz4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbmNvZGluZy5kZWNvZGVQYXRoKCknKTtcbiAgICByZXR1cm4gRW5jb2RpbmcuZGVjb2RlUGF0aChlbmNvZGVkLCBwcmVjaXNpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvblxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBlbmNvZGVQYXRoKHBhdGg6IEFycmF5PElMYXRMbmc+IHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBzdHJpbmcge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbmNvZGluZy5lbmNvZGVQYXRoKCknKTtcbiAgICByZXR1cm4gRW5jb2RpbmcuZW5jb2RlUGF0aChwYXRoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLmdlb21ldHJ5LnBvbHknLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcmVwbzogJydcbn0pXG5leHBvcnQgY2xhc3MgUG9seSB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uIGlzIGluIHRoZSBwb2x5Z29uIHBhdGhcbiAgICogQHBhcmFtIGxvY2F0aW9uIHtJTGF0TG5nfVxuICAgKiBAcGFyYW0gcGF0aCB7SUxhdExuZ1tdfVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGNvbnRhaW5zTG9jYXRpb24obG9jYXRpb246IElMYXRMbmcsIHBhdGg6IElMYXRMbmdbXSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnBvbHkuY29udGFpbnNMb2NhdGlvbihsb2NhdGlvbiwgcGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgbG9jYXRpb24gaXMgb24gdGhlIHBvbHlsaW5lIHBhdGhcbiAgICogQHBhcmFtIGxvY2F0aW9uIHtJTGF0TG5nfVxuICAgKiBAcGFyYW0gcGF0aCB7SUxhdExuZ1tdfVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzTG9jYXRpb25PbkVkZ2UobG9jYXRpb246IElMYXRMbmcsIHBhdGg6IElMYXRMbmdbXSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnBvbHkuaXNMb2NhdGlvbk9uRWRnZShsb2NhdGlvbiwgcGF0aCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcmVwbzogJydcbn0pXG5leHBvcnQgY2xhc3MgU3BoZXJpY2FsIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGlzdGFuY2UsIGluIG1ldGVycywgYmV0d2VlbiB0d28gTGF0TG5ncy5cbiAgICogQHBhcmFtIGxvY2F0aW9uQSB7SUxhdExuZ31cbiAgICogQHBhcmFtIGxvY2F0aW9uQiB7SUxhdExuZ31cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVEaXN0YW5jZUJldHdlZW4oZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlRGlzdGFuY2VCZXR3ZWVuKGZyb20sIHRvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBMYXRMbmcgcmVzdWx0aW5nIGZyb20gbW92aW5nIGEgZGlzdGFuY2UgZnJvbSBhbiBvcmlnaW4gaW4gdGhlIHNwZWNpZmllZCBoZWFkaW5nIChleHByZXNzZWQgaW4gZGVncmVlcyBjbG9ja3dpc2UgZnJvbSBub3J0aClcbiAgICogQHBhcmFtIGZyb20ge0lMYXRMbmd9XG4gICAqIEBwYXJhbSBkaXN0YW5jZSB7bnVtYmVyfVxuICAgKiBAcGFyYW0gaGVhZGluZyB7bnVtYmVyfVxuICAgKiBAcmV0dXJuIHtMYXRMbmd9XG4gICAqL1xuICBzdGF0aWMgY29tcHV0ZU9mZnNldChmcm9tOiBJTGF0TG5nLCBkaXN0YW5jZTogbnVtYmVyLCBoZWFkaW5nOiBudW1iZXIpOiBMYXRMbmcge1xuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KGZyb20sIGRpc3RhbmNlLCBoZWFkaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsb2NhdGlvbiBvZiBvcmlnaW4gd2hlbiBwcm92aWRlZCB3aXRoIGEgTGF0TG5nIGRlc3RpbmF0aW9uLCBtZXRlcnMgdHJhdmVsbGVkIGFuZCBvcmlnaW5hbCBoZWFkaW5nLiBIZWFkaW5ncyBhcmUgZXhwcmVzc2VkIGluIGRlZ3JlZXMgY2xvY2t3aXNlIGZyb20gTm9ydGguIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBudWxsIHdoZW4gbm8gc29sdXRpb24gaXMgYXZhaWxhYmxlLlxuICAgKiBAcGFyYW0gdG8ge0lMYXRMbmd9IFRoZSBkZXN0aW5hdGlvbiBMYXRMbmcuXG4gICAqIEBwYXJhbSBkaXN0YW5jZSB7bnVtYmVyfSBUaGUgZGlzdGFuY2UgdHJhdmVsbGVkLCBpbiBtZXRlcnMuXG4gICAqIEBwYXJhbSBoZWFkaW5nIHtudW1iZXJ9IFRoZSBoZWFkaW5nIGluIGRlZ3JlZXMgY2xvY2t3aXNlIGZyb20gbm9ydGguXG4gICAqIEByZXR1cm4ge0xhdExuZ31cbiAgICovXG4gIHN0YXRpYyBjb21wdXRlT2Zmc2V0T3JpZ2luKHRvOiBJTGF0TG5nLCBkaXN0YW5jZTogbnVtYmVyLCBoZWFkaW5nOiBudW1iZXIpOiBMYXRMbmcge1xuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0T3JpZ2luKHRvLCBkaXN0YW5jZSwgaGVhZGluZyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBnaXZlbiBwYXRoLlxuICAgKiBAcGFyYW0gcGF0aCB7QXJyYXk8SUxhdExuZz4gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPn1cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVMZW5ndGgocGF0aDogQXJyYXk8SUxhdExuZz4gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IG51bWJlciB7XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVMZW5ndGgocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXJlYSBvZiBhIGNsb3NlZCBwYXRoLiBUaGUgY29tcHV0ZWQgYXJlYSB1c2VzIHRoZSBzYW1lIHVuaXRzIGFzIHRoZSByYWRpdXMuXG4gICAqIEBwYXJhbSBwYXRoIHtBcnJheTxJTGF0TG5nPiB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+fS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVBcmVhKHBhdGg6IEFycmF5PElMYXRMbmc+IHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBudW1iZXIge1xuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlQXJlYShwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzaWduZWQgYXJlYSBvZiBhIGNsb3NlZCBwYXRoLiBUaGUgc2lnbmVkIGFyZWEgbWF5IGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgcGF0aC5cbiAgICogQHBhcmFtIHBhdGgge0FycmF5PElMYXRMbmc+IHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz59LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgY29tcHV0ZVNpZ25lZEFyZWEocGF0aDogQXJyYXk8SUxhdExuZz4gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IG51bWJlciB7XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVTaWduZWRBcmVhKHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhlYWRpbmcgZnJvbSBvbmUgTGF0TG5nIHRvIGFub3RoZXIgTGF0TG5nLiBIZWFkaW5ncyBhcmUgZXhwcmVzc2VkIGluIGRlZ3JlZXMgY2xvY2t3aXNlIGZyb20gTm9ydGggd2l0aGluIHRoZSByYW5nZSAoLTE4MCwxODApLlxuICAgKiBAcGFyYW0gZnJvbSB7SUxhdExuZ31cbiAgICogQHBhcmFtIHRvIHtJTGF0TG5nfVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgY29tcHV0ZUhlYWRpbmcoZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlSGVhZGluZyhmcm9tLCB0byk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgTGF0TG5nIHdoaWNoIGxpZXMgdGhlIGdpdmVuIGZyYWN0aW9uIG9mIHRoZSB3YXkgYmV0d2VlbiB0aGUgb3JpZ2luIExhdExuZyBhbmQgdGhlIGRlc3RpbmF0aW9uIExhdExuZy5cbiAgICogQHBhcmFtIGZyb20ge0lMYXRMbmd9ICAgICBUaGUgTGF0TG5nIGZyb20gd2hpY2ggdG8gc3RhcnQuXG4gICAqIEBwYXJhbSB0byB7SUxhdExuZ30gICAgICAgVGhlIExhdExuZyB0b3dhcmQgd2hpY2ggdG8gdHJhdmVsLlxuICAgKiBAcGFyYW0gZnJhY3Rpb24ge251bWJlcn0gIEEgZnJhY3Rpb24gb2YgdGhlIGRpc3RhbmNlIHRvIHRyYXZlbCBmcm9tIDAuMCB0byAxLjAgLlxuICAgKiBAcmV0dXJuIHtMYXRMbmd9XG4gICAqL1xuICBzdGF0aWMgaW50ZXJwb2xhdGUoZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcsIGZyYWN0aW9uOiBudW1iZXIpOiBMYXRMbmcge1xuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5pbnRlcnBvbGF0ZShmcm9tLCB0bywgZnJhY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvblxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb21wdXRlRGlzdGFuY2VCZXR3ZWVuKGZyb206IElMYXRMbmcsIHRvOiBJTGF0TG5nKTogbnVtYmVyIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVEaXN0YW5jZUJldHdlZW4oKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2Vlbihmcm9tLCB0byk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbXB1dGVPZmZzZXQoZnJvbTogSUxhdExuZywgZGlzdGFuY2U6IG51bWJlciwgaGVhZGluZzogbnVtYmVyKTogTGF0TG5nIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVPZmZzZXQoKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZU9mZnNldChmcm9tLCBkaXN0YW5jZSwgaGVhZGluZyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbXB1dGVPZmZzZXRPcmlnaW4odG86IElMYXRMbmcsIGRpc3RhbmNlOiBudW1iZXIsIGhlYWRpbmc6IG51bWJlcik6IExhdExuZyB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0T3JpZ2luKCknKTtcbiAgICByZXR1cm4gU3BoZXJpY2FsLmNvbXB1dGVPZmZzZXRPcmlnaW4odG8sIGRpc3RhbmNlLCBoZWFkaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb25cbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZUxlbmd0aChwYXRoOiBBcnJheTxJTGF0TG5nPiB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogbnVtYmVyIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVMZW5ndGgoKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZUxlbmd0aChwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb25cbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZUFyZWEocGF0aDogQXJyYXk8SUxhdExuZz4gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IG51bWJlciB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlQXJlYSgpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5jb21wdXRlQXJlYShwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb25cbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZVNpZ25lZEFyZWEocGF0aDogQXJyYXk8SUxhdExuZz4gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IG51bWJlciB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlU2lnbmVkQXJlYSgpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5jb21wdXRlU2lnbmVkQXJlYShwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb25cbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZUhlYWRpbmcoZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcpOiBudW1iZXIge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZUhlYWRpbmcoKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZUhlYWRpbmcoZnJvbSwgdG8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvblxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBpbnRlcnBvbGF0ZShmcm9tOiBJTGF0TG5nLCB0bzogSUxhdExuZywgZnJhY3Rpb246IG51bWJlcik6IExhdExuZyB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5pbnRlcnBvbGF0ZSgpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5pbnRlcnBvbGF0ZShmcm9tLCB0bywgZnJhY3Rpb24pO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1N0cmVldFZpZXdQYW5vcmFtYScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnXG59KVxuZXhwb3J0IGNsYXNzIFN0cmVldFZpZXdQYW5vcmFtYSBleHRlbmRzIEJhc2VDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IHN0cmluZyB8IEhUTUxFbGVtZW50LCBvcHRpb25zPzogU3RyZWV0Vmlld09wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gQ3JlYXRlIGEgcGFub3JhbWFcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSBHb29nbGVNYXBzLmdldFBsdWdpbigpLlN0cmVldFZpZXcuZ2V0UGFub3JhbWEoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5TdHJlZXRWaWV3LmdldFBhbm9yYW1hKGdldFByb21pc2U8YW55W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBsZXQgY291bnQ6IG51bWJlcjtcbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgY29uc3QgdGltZXI6IGFueSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRzOiBhbnlbXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgZWxlbWVudCk7XG4gICAgICAgICAgICB0YXJnZXRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGFyZ2V0cywgMCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHRhcmdldHMgPSB0YXJnZXRzLmZpbHRlcihmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2lubWFwaWQnKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEgJiYgdGFyZ2V0c1swXSAmJiB0YXJnZXRzWzBdLm9mZnNldFdpZHRoID49IDEwMCAmJiB0YXJnZXRzWzBdLm9mZnNldEhlaWdodCA+PSAxMDApIHtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICAgIHJlc29sdmUoW3RhcmdldHNbMF0sIG9wdGlvbnNdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChjb3VudCsrIDwgMjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCAmJiB0YXJnZXRzWzBdICYmIHRhcmdldHNbMF0ub2Zmc2V0V2lkdGggPCAxMDAgfHwgdGFyZ2V0c1swXS5vZmZzZXRIZWlnaHQgPCAxMDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHRhcmdldHNbMF0udGFnTmFtZSArICdbIycgKyBlbGVtZW50ICsgJ10gaXMgdG9vIHNtYWxsLiBNdXN0IGJlIGJpZ2dlciB0aGFuIDEwMHgxMDAuJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2FuIG5vdCBmaW5kIHRoZSBlbGVtZW50IFsjJyArIGVsZW1lbnQgKyAnXScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSksIG9wdGlvbnMpO1xuXG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IG51bGwgJiYgb3B0aW9ucykge1xuICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTWFwLmdldE1hcChudWxsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgYXZhaWxhYmxlISEnKTtcblxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjY2NjJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCBhdmFpbGFibGUuJztcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0YXJnZXRzOiBhbnlbXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgZWxlbWVudCk7XG4gICAgICAgIHRhcmdldHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRzLCAwKTtcbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRhcmdldHMgPSB0YXJnZXRzLmZpbHRlcihmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnX19wbHVnaW5tYXBpZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDAgJiYgdGFyZ2V0c1swXSkge1xuICAgICAgICAgIHRhcmdldHNbMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjY2MnO1xuICAgICAgICAgIHRhcmdldHNbMF0uc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICAgICAgICB0YXJnZXRzWzBdLmlubmVySFRNTCA9ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCBhdmFpbGFibGUuJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogU2V0cyB0aGUgcG9pbnQgb2YgdmlldyBmb3IgdGhlIFN0cmVldCBWaWV3IHBhbm9yYW1hLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNldFBvdihwb3Y6IFN0cmVldFZpZXdDYW1lcmFQYW5vKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBTdHJlZXRWaWV3UGFub3JhbWEgdG8gYSBnaXZlbiBsb2NhdGlvbi5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBzZXRQb3NpdGlvbihjYW1lcmFQb3NpdGlvbjogU3RyaW5nIHwgU3RyZWV0Vmlld1NldFBvc2l0aW9uT3B0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBhYmlsaXR5IGZvciB1c2VycyB0byB1c2UgcGFuIGFyb3VuZCBvbiB0aGUgcGFub3JhbWEgdXNpbmcgZ2VzdHVyZXMuXG4gICAqIEBwYXJhbSBnZXN0dXJlRW5hYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UGFubmluZ0dlc3R1cmVzRW5hYmxlZChnZXN0dXJlRW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXRydW4gdHJ1ZSBpZiB0aGUgcGFubmluZyBnZXN0dXJlIGlzIGVuYWJsZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRQYW5uaW5nR2VzdHVyZXNFbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYWJpbGl0eSBmb3IgdXNlcnMgdG8gem9vbSBvbiB0aGUgcGFub3JhbWEgdXNpbmcgZ2VzdHVyZXMuXG4gICAqIEBwYXJhbSBnZXN0dXJlRW5hYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Wm9vbUdlc3R1cmVzRW5hYmxlZChnZXN0dXJlRW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXRydW4gdHJ1ZSBpZiB0aGUgem9vbWluZyBnZXN0dXJlIGlzIGVuYWJsZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRab29tR2VzdHVyZXNFbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYWJpbGl0eSBmb3IgdXNlcnMgdG8gc2VlIHN0cmVldCBuYW1lcyBvbiB0aGUgcGFub3JhbWEuXG4gICAqIEBwYXJhbSBnZXN0dXJlRW5hYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3RyZWV0TmFtZXNFbmFibGVkKGdlc3R1cmVFbmFibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJldHJ1biB0cnVlIGlmIHRoZSBzdHJlZXQgbmFtZXMgY29udHJvbCBpcyBlbmFibGVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U3RyZWV0TmFtZXNFbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYWJpbGl0eSBmb3IgdXNlcnMgdG8gbW92ZSBiZXR3ZWVuIHBhbm9yYW1hcy5cbiAgICogQHBhcmFtIGdlc3R1cmVFbmFibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXROYXZpZ2F0aW9uRW5hYmxlZChnZXN0dXJlRW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXRydW4gdHJ1ZSBpZiB0aGUgbmF2aWdhdGlvbiBjb250cm9sIGlzIGVuYWJsZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXROYXZpZ2F0aW9uRW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHJ1biB0aGUgbmF2aWdhdGlvbiBsaW5rcyAoU3RyZWV0Vmlld0xvY2F0aW9uLmxpbmtzKVxuICAgKiBAcmV0dXJuIHtTdHJlZXRWaWV3TmF2aWdhdGlvbkxpbmtbXX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldExpbmtzKCk6IFN0cmVldFZpZXdOYXZpZ2F0aW9uTGlua1tdIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHJ1biB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgKiBAcmV0dXJuIHtTdHJlZXRWaWV3TG9jYXRpb259XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRMb2NhdGlvbigpOiBTdHJlZXRWaWV3TG9jYXRpb24geyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0cnVuIHRoZSBjdXJyZW50IHBhbm9yYW1hIGlkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFBhbm8oKTogc3RyaW5nIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHJ1biB0aGUgY3VycmVudCBwb3NpdGlvbiAoU3RyZWV0Vmlld0xvY2F0aW9uLmxhdExuZylcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UG9zaXRpb24oKTogSUxhdExuZyB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGEgbWFwIGNvbXBsZXRlbHlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJ1xufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXAgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBhbnksIG9wdGlvbnM/OiBHb29nbGVNYXBPcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnN0IF9pbml0OiBhbnkgPSAoKSA9PiB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIENyZWF0ZSBhIG1hcFxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5NYXAuZ2V0TWFwKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTWFwLmdldE1hcChnZXRQcm9taXNlPGFueVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgbGV0IGNvdW50OiBudW1iZXI7XG4gICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgIGNvbnN0IHRpbWVyOiBhbnkgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0czogYW55W10gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tcm91dGVyLW91dGxldCAjJyArIGVsZW1lbnQpO1xuICAgICAgICAgICAgdGFyZ2V0cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldHMsIDApO1xuICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKCdfX3BsdWdpbm1hcGlkJyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxICYmIHRhcmdldHNbMF0gJiYgdGFyZ2V0c1swXS5vZmZzZXRXaWR0aCA+PSAxMDAgJiYgdGFyZ2V0c1swXS5vZmZzZXRIZWlnaHQgPj0gMTAwKSB7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICByZXNvbHZlKFt0YXJnZXRzWzBdLCBvcHRpb25zXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoY291bnQrKyA8IDIwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDAgJiYgdGFyZ2V0c1swXSAmJiB0YXJnZXRzWzBdLm9mZnNldFdpZHRoIDwgMTAwIHx8IHRhcmdldHNbMF0ub2Zmc2V0SGVpZ2h0IDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcih0YXJnZXRzWzBdLnRhZ05hbWUgKyAnWyMnICsgZWxlbWVudCArICddIGlzIHRvbyBzbWFsbC4gTXVzdCBiZSBiaWdnZXIgdGhhbiAxMDB4MTAwLicpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbiBub3QgZmluZCB0aGUgZWxlbWVudCBbIycgKyBlbGVtZW50ICsgJ10nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pLCBvcHRpb25zKTtcblxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSBudWxsICYmIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSBHb29nbGVNYXBzLmdldFBsdWdpbigpLk1hcC5nZXRNYXAobnVsbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFNpbmNlIFByb21pc2UgZG9lcyBub3Qgd29yayB3ZWxsIGZvciBzb21lIHJlYXNvbixcbiAgICAvLyBzbyBjcmVhdGUgYSBtYXAgdXNpbmcgaWYtc3RhdGVtZW50LlxuXG4gICAgaWYgKCEod2luZG93LnBsdWdpbiAmJiB3aW5kb3cucGx1Z2luLmdvb2dsZSAmJiB3aW5kb3cucGx1Z2luLmdvb2dsZS5tYXBzKSkge1xuICAgICAgLy8gVGhlIGBkZXZpY2VyZWFkeWAgZXZlbnQgaXMgbm90IGZpcmVkIHlldC4gV2FpdCBmb3IgaXQuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIF9pbml0LCB7XG4gICAgICAgICdvbmNlJzogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IHRydWUpIHtcbiAgICAgICAgX2luaXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IGF2YWlsYWJsZSEhJyk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjY2MnO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCBhdmFpbGFibGUuJztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBsZXQgdGFyZ2V0czogYW55W10gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tcm91dGVyLW91dGxldCAjJyArIGVsZW1lbnQpO1xuICAgICAgICAgIHRhcmdldHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRzLCAwKTtcbiAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgIHJldHVybiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnX19wbHVnaW5tYXBpZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdKSB7XG4gICAgICAgICAgICB0YXJnZXRzWzBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjY2NjJztcbiAgICAgICAgICAgIHRhcmdldHNbMF0uc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICAgICAgICAgIHRhcmdldHNbMF0uaW5uZXJIVE1MID0gJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IGF2YWlsYWJsZS4nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIG1hcCBkaXZcbiAgICogQHBhcmFtIGRvbU5vZGUge0hUTUxFbGVtZW50IHwgc3RyaW5nfSBbb3B0aW9uc10gSWYgeW91IHdhbnQgdG8gZGlzcGxheSB0aGUgbWFwIGluIGFuIGh0bWwgZWxlbWVudCwgeW91IG5lZWQgdG8gc3BlY2lmeSBhbiBlbGVtZW50IG9yIGlkLiBJZiBvbWl0IHRoaXMgYXJndW1lbnQsIHRoZSBtYXAgaXMgZGV0YWNoZWQgZnJvbSB3ZWJ2aWV3LlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBzZXREaXYoZG9tTm9kZT86IEhUTUxFbGVtZW50IHwgc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBkb21Ob2RlID09PSAnc3RyaW5nJykge1xuICAgICAgbGV0IHRhcmdldHM6IGFueVtdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyBkb21Ob2RlKTtcbiAgICAgIHRhcmdldHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRzLCAwKTtcbiAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGFyZ2V0cyA9IHRhcmdldHMuZmlsdGVyKGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnX19wbHVnaW5tYXBpZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdKSB7XG4gICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnNldERpdih0YXJnZXRzWzBdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uuc2V0RGl2KGRvbU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgSFRNTCBlbGVtZW50XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RGl2KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgbWFwIHR5cGUgaWRcbiAgICogQHBhcmFtIG1hcFR5cGVJZCB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0TWFwVHlwZUlkKG1hcFR5cGVJZDogTWFwVHlwZSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBjYW1lcmEgd2l0aCBhbmltYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGFuaW1hdGVDYW1lcmEoY2FtZXJhUG9zaXRpb246IENhbWVyYVBvc2l0aW9uPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBab29taW5nIGluIHRoZSBjYW1lcmEgd2l0aCBhbmltYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGFuaW1hdGVDYW1lcmFab29tSW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogWm9vbWluZyBvdXQgdGhlIGNhbWVyYSB3aXRoIGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgYW5pbWF0ZUNhbWVyYVpvb21PdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGNhbWVyYSB3aXRob3V0IGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgbW92ZUNhbWVyYShjYW1lcmFQb3NpdGlvbjogQ2FtZXJhUG9zaXRpb248YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFpvb21pbmcgaW4gdGhlIGNhbWVyYSB3aXRob3V0IGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgbW92ZUNhbWVyYVpvb21JbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBab29taW5nIG91dCB0aGUgY2FtZXJhIHdpdGhvdXQgYW5pbWF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBtb3ZlQ2FtZXJhWm9vbU91dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBjYW1lcmEuXG4gICAqIEByZXR1cm4ge0NhbWVyYVBvc2l0aW9ufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhUG9zaXRpb24oKTogQ2FtZXJhUG9zaXRpb248SUxhdExuZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FtZXJhIHRhcmdldCBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhVGFyZ2V0KCk6IElMYXRMbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FtZXJhIHpvb20gbGV2ZWxcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhWm9vbSgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FtZXJhIGJlYXJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhQmVhcmluZygpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FtZXJhIHRpbHQgKHZpZXcgYW5nbGUpXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENhbWVyYVRpbHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjZW50ZXIgcG9zaXRpb24gb2YgdGhlIGNhbWVyYSB2aWV3XG4gICAqIEBwYXJhbSBsYXRMbmcge0lMYXRMbmcgfCBBcnJheTxJTGF0TG5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENhbWVyYVRhcmdldChsYXRMbmc6IElMYXRMbmcgfCBBcnJheTxJTGF0TG5nPik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB6b29tIGxldmVsIG9mIHRoZSBjYW1lcmFcbiAgICogQHBhcmFtIHpvb21MZXZlbCB7bnVtYmVyfSBab29tIGxldmVsXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDYW1lcmFab29tKHpvb21MZXZlbDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjYW1lcmEgdmlldyBhbmdsZVxuICAgKiBAcGFyYW0gdGlsdEFuZ2xlIHtudW1iZXJ9IFRpbHQgYW5nbGVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENhbWVyYVRpbHQodGlsdEFuZ2xlOiBudW1iZXIpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFNldCBjYW1lcmEgYmVhcmluZ1xuICAgKiBAcGFyYW0gYmVhcmluZyB7YW55fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2FtZXJhQmVhcmluZyhiZWFyaW5nOiBhbnkpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcCBieSB0aGUgZ2l2ZW4gZGlzdGFuY2UgaW4gcGl4ZWxzXG4gICAqIEBwYXJhbSB4IHtudW1iZXJ9XG4gICAqIEBwYXJhbSB5IHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwYW5CeSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgeyB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCB2aXNpYmxlIHJlZ2lvbiAoc291dGhXZXN0IGFuZCBub3J0aEVhc3QpXG4gICAqIEByZXR1cm4ge1Zpc2libGVSZWdpb259XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlUmVnaW9uKCk6IFZpc2libGVSZWdpb24ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgZGV2aWNlIGxvY2F0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TXlMb2NhdGlvbj59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZ2V0TXlMb2NhdGlvbihvcHRpb25zPzogTXlMb2NhdGlvbk9wdGlvbnMpOiBQcm9taXNlPE15TG9jYXRpb24+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxNeUxvY2F0aW9uPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLkxvY2F0aW9uU2VydmljZS5nZXRNeUxvY2F0aW9uKG9wdGlvbnMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGZhbHNlIHRvIGlnbm9yZSBhbGwgY2xpY2tzIG9uIHRoZSBtYXBcbiAgICogQHBhcmFtIGlzQ2xpY2thYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2xpY2thYmxlKGlzQ2xpY2thYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSBhIG1hcCBjb21wbGV0ZWx5XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmdldCgnX292ZXJsYXlzJykpLmZvckVhY2goKG92ZXJsYXlJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgb3ZlcmxheXMsIHN1Y2ggYXMgbWFya2VyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBjbGVhcigpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkuZm9yRWFjaCgob3ZlcmxheUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBkZWxldGUgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF07XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuY2xlYXIoKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoZSB1bml0IGZyb20gTGF0TG5nIHRvIHRoZSBwaXhlbHMgZnJvbSB0aGUgbGVmdC90b3Agb2YgdGhlIG1hcCBkaXZcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGZyb21MYXRMbmdUb1BvaW50KGxhdExuZzogSUxhdExuZyk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0aGUgdW5pdCBmcm9tIHRoZSBwaXhlbHMgZnJvbSB0aGUgbGVmdC90b3AgdG8gdGhlIExhdExuZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPExhdExuZz59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZnJvbVBvaW50VG9MYXRMbmcocG9pbnQ6IG51bWJlcltdKTogUHJvbWlzZTxMYXRMbmc+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHNob3cgdGhlIE15TG9jYXRpb24gY29udHJvbCAoYmx1ZSBkb3QpXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0TXlMb2NhdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHNob3cgdGhlIE15TG9jYXRpb24gYnV0dG9uXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0TXlMb2NhdGlvbkJ1dHRvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50bHkgZm9jdXNlZCBidWlsZGluZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZ2V0Rm9jdXNlZEJ1aWxkaW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHNob3cgdGhlIGluZG9vciBtYXBcbiAgICogQHBhcmFtIGVuYWJsZWQge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRJbmRvb3JFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBzaG93IHRoZSB0cmFmZmljIGxheWVyXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VHJhZmZpY0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHNob3cgdGhlIGNvbXBhc3MgYnV0dG9uXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q29tcGFzc0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHByZWZlcmVuY2UgZm9yIHdoZXRoZXIgYWxsIGdlc3R1cmVzIHNob3VsZCBiZSBlbmFibGVkIG9yIGRpc2FibGVkXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0QWxsR2VzdHVyZXNFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdmlzaWJpbGl0eSBvZiB0aGUgbWFwXG4gICAqIEBwYXJhbSB2aXNpYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0IHRoZSBtYXAgcGFkZGluZyAoc2FtZSBhcyBDU1MgcGFkZGluZyBydWxlKVxuICAgKiBAcGFyYW0gdG9wIHtudW1iZXJ9XG4gICAqIEBwYXJhbSByaWdodCB7bnVtYmVyfVxuICAgKiBAcGFyYW0gbGVmdCB7bnVtYmVyfVxuICAgKiBAcGFyYW0gYm90dG9tIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRQYWRkaW5nKHRvcDogbnVtYmVyLCByaWdodD86IG51bWJlciwgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyKTogdm9pZCB7IH1cblxuICAvKipcbiAgICogU2V0IG9wdGlvbnNcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE9wdGlvbnMob3B0aW9uczogR29vZ2xlTWFwT3B0aW9ucyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBtYXJrZXJcbiAgICogQHBhcmFtIG9wdGlvbnMge01hcmtlck9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxNYXJrZXI+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRNYXJrZXIob3B0aW9uczogTWFya2VyT3B0aW9ucyk6IFByb21pc2U8TWFya2VyIHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8TWFya2VyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRNYXJrZXIob3B0aW9ucywgKG1hcmtlcjogYW55KSA9PiB7XG4gICAgICAgIGlmIChtYXJrZXIpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IG1hcmtlci5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXk6IE1hcmtlciA9IG5ldyBNYXJrZXIodGhpcywgbWFya2VyKTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgbWFya2VyLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbWFya2VyIGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtNYXJrZXJPcHRpb25zfSBvcHRpb25zXG4gICAqIEBSZXR1cm5zIHtNYXJrZXJ9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZE1hcmtlclN5bmMob3B0aW9uczogTWFya2VyT3B0aW9ucyk6IE1hcmtlciB7XG4gICAgY29uc3QgbWFya2VyOiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRNYXJrZXIob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBtYXJrZXIuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5OiBNYXJrZXIgPSBuZXcgTWFya2VyKHRoaXMsIG1hcmtlcik7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIG1hcmtlci5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG1hcmtlciBjbHVzdGVyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtNYXJrZXJDbHVzdGVyT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPE1hcmtlckNsdXN0ZXI+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRNYXJrZXJDbHVzdGVyKG9wdGlvbnM6IE1hcmtlckNsdXN0ZXJPcHRpb25zKTogUHJvbWlzZTxNYXJrZXJDbHVzdGVyIHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8TWFya2VyQ2x1c3Rlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkTWFya2VyQ2x1c3RlcihvcHRpb25zLCAobWFya2VyQ2x1c3RlcjogYW55KSA9PiB7XG4gICAgICAgIGlmIChtYXJrZXJDbHVzdGVyKSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkID0gbWFya2VyQ2x1c3Rlci5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgTWFya2VyQ2x1c3Rlcih0aGlzLCBtYXJrZXJDbHVzdGVyKTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgbWFya2VyQ2x1c3Rlci5vbmUoJ3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtYXJrZXJDbHVzdGVyLnNldCgnX292ZXJsYXlzJywgbmV3IEJhc2VBcnJheUNsYXNzKCkpO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBtYXJrZXIgY2x1c3RlciBpbiBzeW5jaHJvbm91c1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7TWFya2VyQ2x1c3Rlck9wdGlvbnN9IG9wdGlvbnNcbiAgICogQFJldHVybnMge01hcmtlckNsdXN0ZXJ9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZE1hcmtlckNsdXN0ZXJTeW5jKG9wdGlvbnM6IE1hcmtlckNsdXN0ZXJPcHRpb25zKTogTWFya2VyQ2x1c3RlciB7XG4gICAgY29uc3QgbWFya2VyQ2x1c3RlcjogYW55ID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkTWFya2VyQ2x1c3RlcihvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IG1hcmtlckNsdXN0ZXIuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5OiBNYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXIodGhpcywgbWFya2VyQ2x1c3Rlcik7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIG1hcmtlckNsdXN0ZXIub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG1hcmtlckNsdXN0ZXIuc2V0KCdfb3ZlcmxheXMnLCBuZXcgQmFzZUFycmF5Q2xhc3MoKSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNpcmNsZVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7Q2lyY2xlT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPENpcmNsZT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZENpcmNsZShvcHRpb25zOiBDaXJjbGVPcHRpb25zKTogUHJvbWlzZTxDaXJjbGUgfCBhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxDaXJjbGU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZENpcmNsZShvcHRpb25zLCAoY2lyY2xlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGNpcmNsZSkge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gY2lyY2xlLmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBDaXJjbGUodGhpcywgY2lyY2xlKTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgY2lyY2xlLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2lyY2xlIGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtDaXJjbGVPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge0NpcmNsZX1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkQ2lyY2xlU3luYyhvcHRpb25zOiBDaXJjbGVPcHRpb25zKTogQ2lyY2xlIHtcbiAgICBjb25zdCBjaXJjbGU6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZENpcmNsZShvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IGNpcmNsZS5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgQ2lyY2xlKHRoaXMsIGNpcmNsZSk7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIGNpcmNsZS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBwb2x5Z29uXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQb2x5Z29uT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPFBvbHlnb24+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRQb2x5Z29uKG9wdGlvbnM6IFBvbHlnb25PcHRpb25zKTogUHJvbWlzZTxQb2x5Z29uIHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8UG9seWdvbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkUG9seWdvbihvcHRpb25zLCAocG9seWdvbjogYW55KSA9PiB7XG4gICAgICAgIGlmIChwb2x5Z29uKSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBwb2x5Z29uLmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBQb2x5Z29uKHRoaXMsIHBvbHlnb24pO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBwb2x5Z29uLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcG9seWdvbiBpbiBzeW5jaHJvbm91c1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7UG9seWdvbk9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UG9seWdvbn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkUG9seWdvblN5bmMob3B0aW9uczogUG9seWdvbk9wdGlvbnMpOiBQb2x5Z29uIHtcbiAgICBjb25zdCBwb2x5Z29uOiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRQb2x5Z29uKG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gcG9seWdvbi5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgUG9seWdvbih0aGlzLCBwb2x5Z29uKTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgcG9seWdvbi5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHBvbHlsaW5lXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQb2x5bGluZU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxQb2x5bGluZT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZFBvbHlsaW5lKG9wdGlvbnM6IFBvbHlsaW5lT3B0aW9ucyk6IFByb21pc2U8UG9seWxpbmUgfCBhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxQb2x5bGluZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkUG9seWxpbmUob3B0aW9ucywgKHBvbHlsaW5lOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHBvbHlsaW5lKSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBwb2x5bGluZS5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgUG9seWxpbmUodGhpcywgcG9seWxpbmUpO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBwb2x5bGluZS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHBvbHlsaW5lIGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQb2x5bGluZU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UG9seWxpbmV9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZFBvbHlsaW5lU3luYyhvcHRpb25zOiBQb2x5bGluZU9wdGlvbnMpOiBQb2x5bGluZSB7XG4gICAgY29uc3QgcG9seWxpbmU6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZFBvbHlsaW5lKG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gcG9seWxpbmUuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IFBvbHlsaW5lKHRoaXMsIHBvbHlsaW5lKTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgcG9seWxpbmUub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB0aWxlIG92ZXJsYXlcbiAgICogQHBhcmFtIG9wdGlvbnMge1RpbGVPdmVybGF5T3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPFRpbGVPdmVybGF5Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkVGlsZU92ZXJsYXkob3B0aW9uczogVGlsZU92ZXJsYXlPcHRpb25zKTogUHJvbWlzZTxUaWxlT3ZlcmxheSB8IGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPFRpbGVPdmVybGF5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRUaWxlT3ZlcmxheShvcHRpb25zLCAodGlsZU92ZXJsYXk6IGFueSkgPT4ge1xuICAgICAgICBpZiAodGlsZU92ZXJsYXkpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IHRpbGVPdmVybGF5LmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBUaWxlT3ZlcmxheSh0aGlzLCB0aWxlT3ZlcmxheSk7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIHRpbGVPdmVybGF5Lm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgdGlsZSBvdmVybGF5IGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtUaWxlT3ZlcmxheU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7VGlsZU92ZXJsYXl9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZFRpbGVPdmVybGF5U3luYyhvcHRpb25zOiBUaWxlT3ZlcmxheU9wdGlvbnMpOiBUaWxlT3ZlcmxheSB7XG4gICAgY29uc3QgdGlsZU92ZXJsYXk6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZFRpbGVPdmVybGF5KG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gdGlsZU92ZXJsYXkuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IFRpbGVPdmVybGF5KHRoaXMsIHRpbGVPdmVybGF5KTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgdGlsZU92ZXJsYXkub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBncm91bmQgb3ZlcmxheVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7R3JvdW5kT3ZlcmxheU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxHcm91bmRPdmVybGF5Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkR3JvdW5kT3ZlcmxheShvcHRpb25zOiBHcm91bmRPdmVybGF5T3B0aW9ucyk6IFByb21pc2U8R3JvdW5kT3ZlcmxheSB8IGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPEdyb3VuZE92ZXJsYXk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZEdyb3VuZE92ZXJsYXkob3B0aW9ucywgKGdyb3VuZE92ZXJsYXk6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZ3JvdW5kT3ZlcmxheSkge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gZ3JvdW5kT3ZlcmxheS5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgR3JvdW5kT3ZlcmxheSh0aGlzLCBncm91bmRPdmVybGF5KTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgZ3JvdW5kT3ZlcmxheS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGdyb3VuZCBvdmVybGF5IGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtHcm91bmRPdmVybGF5T3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtHcm91bmRPdmVybGF5fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRHcm91bmRPdmVybGF5U3luYyhvcHRpb25zOiBHcm91bmRPdmVybGF5T3B0aW9ucyk6IEdyb3VuZE92ZXJsYXkge1xuICAgIGNvbnN0IGdyb3VuZE92ZXJsYXk6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZEdyb3VuZE92ZXJsYXkob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBncm91bmRPdmVybGF5LmdldElkKCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBHcm91bmRPdmVybGF5KHRoaXMsIGdyb3VuZE92ZXJsYXkpO1xuICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICBncm91bmRPdmVybGF5Lm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEga21sIG92ZXJsYXlcbiAgICogQHBhcmFtIG9wdGlvbnMge0ttbE92ZXJsYXlPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8S21sT3ZlcmxheT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZEttbE92ZXJsYXkob3B0aW9uczogS21sT3ZlcmxheU9wdGlvbnMpOiBQcm9taXNlPEttbE92ZXJsYXk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8S21sT3ZlcmxheT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkS21sT3ZlcmxheShvcHRpb25zLCAoa21sT3ZlcmxheTogYW55KSA9PiB7XG4gICAgICAgIGlmIChrbWxPdmVybGF5KSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBrbWxPdmVybGF5LmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBLbWxPdmVybGF5KHRoaXMsIGttbE92ZXJsYXkpO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBrbWxPdmVybGF5Lm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBiYXNlNjQgZW5jb2RlZCBzY3JlZW4gY2FwdHVyZSBvZiB0aGUgbWFwLlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7VG9EYXRhVXJsT3B0aW9uc30gW29wdGlvbnNdIG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHRvRGF0YVVSTChvcHRpb25zPzogVG9EYXRhVXJsT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7IHJldHVybjsgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgR3JvdW5kT3ZlcmxheSBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IF9vYmplY3RJbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGJvdW5kcyBvZiB0aGUgR3JvdW5kT3ZlcmxheVxuICAgKiBAcGFyYW0gYm91bmRzIHsgSUxhdExuZ1tdfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Qm91bmRzKGJvdW5kczogSUxhdExuZ1tdKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgYmVhcmluZyBvZiB0aGUgZ3JvdW5kIG92ZXJsYXlcbiAgICogQHBhcmFtIGJlYXJpbmcge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEJlYXJpbmcoYmVhcmluZzogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBiZWFyaW5nIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRCZWFyaW5nKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGltYWdlIG9mIHRoZSBncm91bmQgb3ZlcmxheVxuICAgKiBAcGFyYW0gaW1hZ2VVcmwge3N0cmluZ30gVVJMIG9mIGltYWdlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRJbWFnZShpbWFnZVVybDogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBvcGFjaXR5IG9mIHRoZSBncm91bmQgb3ZlcmxheSBmcm9tIDAuMCB0byAxLjBcbiAgICogQHBhcmFtIG9wYWNpdHkge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE9wYWNpdHkob3BhY2l0eTogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBvcGFjaXR5XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldE9wYWNpdHkoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBjbGljay1hYmlsaXR5IG9mIHRoZSBncm91bmQgb3ZlcmxheVxuICAgKiBAcGFyYW0gY2xpY2thYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ3JvdW5kIG92ZXJsYXkgaXMgY2xpY2thYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdmlzaWJpbGl0eSBvZiB0aGUgZ3JvdW5kIG92ZXJsYXlcbiAgICogQHBhcmFtIHZpc2libGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdyb3VuZCBvdmVybGF5IGlzIHZpc2libGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGdyb3VuZCBvdmVybGF5IHpJbmRleCBvcmRlclxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFpJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBncm91bmQgb3ZlcmxheSB6SW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0WkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZ3JvdW5kIG92ZXJsYXlcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5IdG1sSW5mb1dpbmRvdycsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIEh0bWxJbmZvV2luZG93IGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gbmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpLkh0bWxJbmZvV2luZG93KSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGJhY2tncm91bmRDb2xvclxuICAgKiBAcGFyYW0gY29sb3Ige3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB5b3VyIEhUTUwgY29udGVudHMuXG4gICAqIEBwYXJhbSBjb250ZW50IHthbnl9IFN0cmluZyBjb250YWluaW5nIHRleHQgb3IgSFRNTCBlbGVtZW50XG4gICAqIEBwYXJhbSBjc3NPcHRpb25zPyB7YW55fSBDU1Mgc3R5bGVzIGZvciB0aGUgY29udGFpbmVyIGVsZW1lbnQgb2YgSFRNTEluZm9XaW5kb3dcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBzZXRDb250ZW50KGNvbnRlbnQ6IHN0cmluZyB8IEVsZW1lbnQsIGNzc09wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIHRoZSBodG1sSW5mb1dpbmRvd1xuICAgKiBAcGFyYW0gbWFya2VyIHtNYXJrZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgb3BlbihtYXJrZXI6IGFueSk6IGFueSB7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgdGhlIGh0bWxJbmZvV2luZG93XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgY2xvc2UoKTogdm9pZCB7XG4gIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIE1hcmtlciBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IF9vYmplY3RJbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWFya2VyIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gbGF0TG5nIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UG9zaXRpb24obGF0TG5nOiBJTGF0TG5nKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcmtlciBwb3NpdGlvbi5cbiAgICogQHJldHVybiB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFBvc2l0aW9uKCk6IElMYXRMbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBub3JtYWwgaW5mb1dpbmRvdyBvZiB0aGUgbWFya2VyLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvd0luZm9XaW5kb3coKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgbm9ybWFsIGluZm9XaW5kb3cgb2YgdGhlIG1hcmtlci5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGhpZGVJbmZvV2luZG93KCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgdGhlIGFuaW1hdGlvbiBlaXRoZXIgYERST1BgIG9yIGBCT1VOQ0VgXG4gICAqIEBwYXJhbSBhbmltYXRpb24ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEFuaW1hdGlvbihhbmltYXRpb246IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSAqKmRvIG5vdCB3YW50KiogdG8gbW92ZSB0aGUgbWFwIHdoZW4geW91IGNsaWNrIG9uIHRoZSBtYXJrZXIuXG4gICAqIEBwYXJhbSBkaXNhYmxlQXV0b1BhbiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldERpc2FibGVBdXRvUGFuKGRpc2FibGVBdXRvUGFuOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGZhbHNlIGlmIHlvdSB3YW50IHRvIGhpZGUgdGhlIG1hcmtlci5cbiAgICogQHBhcmFtIHZpc2libGVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgbWFya2VyIGlzIHZpc2libGVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGlzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aXRsZSBvZiB0aGUgbm9ybWFsIGluZm9XaW5kb3cuXG4gICAqIEBwYXJhbSB0aXRsZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VGl0bGUodGl0bGU6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRpdGxlIHN0cmluZ3MuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFRpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgc25pcHBldCBvZiB0aGUgbm9ybWFsIGluZm9XaW5kb3cuXG4gICAqIEBwYXJhbSBzbmlwcGV0IHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTbmlwcGV0KHNuaXBwZXQ6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNuaXBwZXQgc3RyaW5ncy5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U25pcHBldCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBtYXJrZXIgb3BhY2l0eSBmcm9tIDAuMCB0byAxLjAuXG4gICAqIEBwYXJhbSBhbHBoYSB7bnVtYmVyfSBPcGFjaXR5XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRPcGFjaXR5KGFscGhhOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXJrZXIgb3BhY2l0eS5cbiAgICogQHJldHVybiB7bnVtYmVyfSBPcGFjaXR5XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRPcGFjaXR5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgbWFya2VyLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGluZm8gd2luZG93IGFuY2hvci4gVGhpcyBkZWZhdWx0cyB0byA1MCUgZnJvbSB0aGUgbGVmdCBvZiB0aGUgaW1hZ2UgYW5kIGF0IHRoZSBib3R0b20gb2YgdGhlIGltYWdlLlxuICAgKiBAcGFyYW0geCB7bnVtYmVyfSBEaXN0YW5jZSBmcm9tIGxlZnQgb2YgdGhlIGljb24gaW1hZ2UgaW4gcGl4ZWxzLlxuICAgKiBAcGFyYW0geSB7bnVtYmVyfSBEaXN0YW5jZSBmcm9tIHRvcCBvZiB0aGUgaWNvbiBpbWFnZSBpbiBwaXhlbHMuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRJY29uQW5jaG9yKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgaW5mbyB3aW5kb3cgYW5jaG9yLiBUaGlzIGRlZmF1bHRzIHRvIDUwJSBmcm9tIHRoZSBsZWZ0IG9mIHRoZSBpbWFnZSBhbmQgYXQgdGhlIHRvcCBvZiB0aGUgaW1hZ2UuXG4gICAqIEBwYXJhbSB4IHtudW1iZXJ9IERpc3RhbmNlIGZyb20gbGVmdCBvZiB0aGUgaWNvbiBpbWFnZSBpbiBwaXhlbHMuXG4gICAqIEBwYXJhbSB5IHtudW1iZXJ9IERpc3RhbmNlIGZyb20gdG9wIG9mIHRoZSBpY29uIGltYWdlIGluIHBpeGVscy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEluZm9XaW5kb3dBbmNob3IoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGluZm9XaW5kb3cgaXMgc2hvd24gb24gdGhlIG1hcmtlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaXNJbmZvV2luZG93U2hvd24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZ2hlciB6SW5kZXggdmFsdWUgb3ZlcmxheXMgd2lsbCBiZSBkcmF3biBvbiB0b3Agb2YgbG93ZXIgekluZGV4IHZhbHVlIHRpbGUgbGF5ZXJzIGFuZCBvdmVybGF5cy5cbiAgICogQHBhcmFtIHkge251bWJlcn0gei1pbmRleFxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHotaW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0WkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSBhbGxvdyBhbGwgdXNlcnMgdG8gZHJhZyB0aGUgbWFya2VyLlxuICAgKiBAcGFyYW0gZHJhZ2dhYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RHJhZ2dhYmxlKGRyYWdnYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgbWFya2VyIGRyYWcgaXMgZW5hYmxlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGlzRHJhZ2dhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBiZSBmbGF0IG1hcmtlci5cbiAgICogQHBhcmFtIGZsYXQge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRGbGF0KGZsYXQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBpY29uIHVybCBhbmQvb3Igc2l6ZVxuICAgKiBAcGFyYW0gaWNvblxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0SWNvbihpY29uOiBNYXJrZXJJY29uKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWFya2VyIHJvdGF0aW9uIGFuZ2xlLlxuICAgKiBAcGFyYW0gcm90YXRpb24ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFJvdGF0aW9uKHJvdGF0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXJrZXIgcm90YXRpb24gYW5nbGUuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFJvdGF0aW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXJrZXJDbHVzdGVyIGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gX29iamVjdEluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgb25lIG1hcmtlciBsb2NhdGlvblxuICAgKiBAcGFyYW0gbWFya2VyIHtNYXJrZXJPcHRpb25zfSBvbmUgbG9jYXRpb25cbiAgICogQHBhcmFtIHNraXBSZWRyYXc/IHtib29sZWFufSBtYXJrZXIgY2x1c3RlciBkb2VzIG5vdCByZWRyYXcgdGhlIG1hcmtlciBjbHVzdGVyIGlmIHRydWUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBhZGRNYXJrZXIobWFya2VyOiBNYXJrZXJPcHRpb25zKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG1hcmtlciBsb2NhdGlvbnNcbiAgICogQHBhcmFtIG1hcmtlcnMge01hcmtlck9wdGlvbnNbXX0gbXVsdGlwbGUgbG9jYXRpb25cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGFkZE1hcmtlcnMobWFya2VyczogTWFya2VyT3B0aW9uc1tdKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBtYXJrZXIgY2x1c3RlclxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5zZXQoJ19vdmVybGF5cycsIHVuZGVmaW5lZCk7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSBfb2JqZWN0SW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5Z29uIHBvaW50cy5cbiAgICogQHBhcmFtIHBvaW50cyB7SUxhdExuZ1tdfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UG9pbnRzKHBvaW50czogSUxhdExuZ1tdKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgQmFzZUFycmF5Q2xhc3MuXG4gICAqIFlvdSBjYW4gbW9kaWZ5IHRoZSBwb2ludHMuXG4gICAqIEByZXR1cm4ge0Jhc2VBcnJheUNsYXNzPElMYXRMbmc+fVxuICAgKi9cbiAgZ2V0UG9pbnRzKCk6IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+IHtcbiAgICByZXR1cm4gbmV3IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KHRoaXMuX29iamVjdEluc3RhbmNlLmdldFBvaW50cygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5Z29uIGhvbGVzLlxuICAgKiBAcGFyYW0gaG9sZXMge0lMYXRMbmdbXVtdfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0SG9sZXMoaG9sZXM6IElMYXRMbmdbXVtdKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgQmFzZUFycmF5Q2xhc3MuXG4gICAqIFlvdSBjYW4gbW9kaWZ5IHRoZSBob2xlcy5cbiAgICogQHJldHVybiB7QmFzZUFycmF5Q2xhc3M8SUxhdExuZ1tdPn1cbiAgICovXG4gIGdldEhvbGVzKCk6IEJhc2VBcnJheUNsYXNzPElMYXRMbmdbXT4ge1xuICAgIGNvbnN0IGhvbGVzOiBJTGF0TG5nW11bXSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmdldFBvaW50cygpO1xuICAgIGNvbnN0IHJlc3VsdHM6IEJhc2VBcnJheUNsYXNzPElMYXRMbmdbXT4gPSBuZXcgQmFzZUFycmF5Q2xhc3M8SUxhdExuZ1tdPigpO1xuICAgIGhvbGVzLmZvckVhY2goKGhvbGU6IElMYXRMbmdbXSkgPT4ge1xuICAgICAgcmVzdWx0cy5wdXNoKGhvbGUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGZpbGxpbmcgY29sb3IgKGlubmVyIGNvbG9yKVxuICAgKiBAcGFyYW0gZmlsbENvbG9yIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRGaWxsQ29sb3IoZmlsbENvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBvbHlnb24gZmlsbGluZyBjb2xvciAoaW5uZXIgY29sb3IpLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRGaWxsQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgc3Ryb2tlIGNvbG9yIChvdXRlciBjb2xvcilcbiAgICogQHBhcmFtIHN0cm9rZUNvbG9yIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJva2VDb2xvcihzdHJva2VDb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBwb2x5Z29uIHN0cm9rZSBjb2xvciAob3V0ZXIgY29sb3IpXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZUNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY2xpY2stYWJpbGl0eSBvZiB0aGUgcG9seWdvblxuICAgKiBAcGFyYW0gY2xpY2thYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcG9seWdvbiBpcyBjbGlja2FibGVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENsaWNrYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB2aXNpYmlsaXR5IG9mIHRoZSBwb2x5Z29uXG4gICAqIEBwYXJhbSB2aXNpYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwb2x5Z29uIGlzIHZpc2libGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlnb24gekluZGV4IG9yZGVyLlxuICAgKiBAcGFyYW0gekluZGV4IHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBvbHlnb24gekluZGV4XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFpJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHBvbHlnb24uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWdvbiBzdHJva2Ugd2lkdGhcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFN0cm9rZVdpZHRoKHN0cm9rZVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwb2x5Z29uIHN0cm9rZSB3aWR0aFxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBlZGdlcyBvZiB0aGUgcG9seWdvbiBhcmUgaW50ZXJwcmV0ZWQgYXMgZ2VvZGVzaWMgYW5kIHdpbGwgZm9sbG93IHRoZSBjdXJ2YXR1cmUgb2YgdGhlIEVhcnRoLlxuICAgKiBAcGFyYW0gZ2VvZGVzaWMge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRHZW9kZXNpYyhnZW9kZXNpYzogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcG9seWdvbiBpcyBnZW9kZXNpYy5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEdlb2Rlc2ljKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUG9seWxpbmUgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSBfb2JqZWN0SW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5bGluZSBwb2ludHMuXG4gICAqIEBwYXJhbSBwb2ludHMge0lMYXRMbmdbXX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFBvaW50cyhwb2ludHM6IElMYXRMbmdbXSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIEJhc2VBcnJheUNsYXNzXG4gICAqIFlvdSBjYW4gbW9kaWZ5IHRoZSBwb2ludHMuXG4gICAqIEByZXR1cm4ge0Jhc2VBcnJheUNsYXNzPElMYXRMbmc+fVxuICAgKi9cbiAgZ2V0UG9pbnRzKCk6IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+IHtcbiAgICByZXR1cm4gbmV3IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KHRoaXMuX29iamVjdEluc3RhbmNlLmdldFBvaW50cygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGVkZ2VzIG9mIHRoZSBwb2x5bGluZSBhcmUgaW50ZXJwcmV0ZWQgYXMgZ2VvZGVzaWMgYW5kIHdpbGwgZm9sbG93IHRoZSBjdXJ2YXR1cmUgb2YgdGhlIEVhcnRoLlxuICAgKiBAcGFyYW0gZ2VvRGVzaWMge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRHZW9EZXNpYyhnZW9EZXNpYzogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcG9seWxpbmUgaXMgZ2VvZGVzaWNcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEdlb2Rlc2ljKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHZpc2liaWxpdHkgb2YgdGhlIHBvbHlsaW5lXG4gICAqIEBwYXJhbSB2aXNpYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwb2x5bGluZSBpcyB2aXNpYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIGNsaWNrLWFiaWxpdHkgb2YgdGhlIHBvbHlsaW5lXG4gICAqIEBwYXJhbSBjbGlja2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwb2x5bGluZSBpcyBjbGlja2FibGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENsaWNrYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWxpbmUgY29sb3JcbiAgICogQHBhcmFtIHN0cm9rZUNvbG9yIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJva2VDb2xvcihzdHJva2VDb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBwb2x5bGluZSBjb2xvclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTdHJva2VDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5bGluZSBzdHJva2Ugd2lkdGhcbiAgICogQHBhcmFtIHN0cm9rZVdpZHRoIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJva2VXaWR0aChzdHJva2VXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBzdHJva2Ugd2lkdGggKHVuaXQ6IHBpeGVsKS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWxpbmUgekluZGV4IG9yZGVyLlxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFpJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBwb2x5bGluZSB6SW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0WkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgcG9seWxpbmVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFRpbGVPdmVybGF5IGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gX29iamVjdEluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHdoZXRoZXIgdGhlIHRpbGVzIHNob3VsZCBmYWRlIGluLlxuICAgKiBAcGFyYW0gZmFkZUluIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RmFkZUluKGZhZGVJbjogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHRoZSB0aWxlcyBzaG91bGQgZmFkZSBpblxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RmFkZUluKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHpJbmRleCBvZiB0aGUgdGlsZSBvdmVybGF5XG4gICAqIEBwYXJhbSB6SW5kZXgge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHpJbmRleCBvZiB0aGUgdGlsZSBvdmVybGF5XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFpJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG9wYWNpdHkgb2YgdGhlIHRpbGUgb3ZlcmxheVxuICAgKiBAcGFyYW0gb3BhY2l0eSB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0T3BhY2l0eShvcGFjaXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvcGFjaXR5IG9mIHRoZSB0aWxlIG92ZXJsYXlcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0T3BhY2l0eSgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgaWYgeW91IHdhbnQgdG8gaGlkZVxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdGlsZSBvdmVybGF5IGlzIHZpc2libGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aWxlIHNpemVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFRpbGVTaXplKCk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgdGlsZSBvdmVybGF5XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBLbWxPdmVybGF5IGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gX29iamVjdEluc3RhbmNlO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsICdjYW1lcmEnLCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLl9vYmplY3RJbnN0YW5jZS5jYW1lcmEsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCAna21sRGF0YScsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuX29iamVjdEluc3RhbmNlLmttbERhdGEsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZpZXdwb3J0IHRvIGNvbnRhaW5zIGFsbCBvdmVybGF5c1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RGVmYXVsdFZpZXdwb3J0KCk6IENhbWVyYVBvc2l0aW9uPElMYXRMbmd8SUxhdExuZ1tdPiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IEdvb2dsZU1hcCB7IHJldHVybiB0aGlzLl9tYXA7IH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB2aXNpYmlsaXR5IG9mIHRoZSBrbWwgb3ZlcmxheVxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBrbWwgb3ZlcmxheSBpcyB2aXNpYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBjbGljay1hYmlsaXR5IG9mIHRoZSBLbWxPdmVybGF5XG4gICAqIEBwYXJhbSBjbGlja2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIEttbE92ZXJsYXkgaXMgY2xpY2thYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDbGlja2FibGUoKTogYm9vbGVhbiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIEttbE92ZXJsYXlcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19

/***/ })

}]);
//# sourceMappingURL=default~pages-native-map-bottom-sheet-native-map-bottom-sheet-module~pages-native-map-native-map-mod~7c087229.js.map