/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, Renderer2, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
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
export { GoogleMapWebComponent };
if (false) {
    /** @type {?} */
    GoogleMapWebComponent.prototype.apiKey;
    /** @type {?} */
    GoogleMapWebComponent.prototype.zoom;
    /** @type {?} */
    GoogleMapWebComponent.prototype.mapOptions;
    /** @type {?} */
    GoogleMapWebComponent.prototype.lat;
    /** @type {?} */
    GoogleMapWebComponent.prototype.lng;
    /** @type {?} */
    GoogleMapWebComponent.prototype.map;
    /** @type {?} */
    GoogleMapWebComponent.prototype.markers;
    /** @type {?} */
    GoogleMapWebComponent.prototype.mapsLoaded;
    /** @type {?} */
    GoogleMapWebComponent.prototype.renderer;
    /** @type {?} */
    GoogleMapWebComponent.prototype.element;
    /** @type {?} */
    GoogleMapWebComponent.prototype._document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC13ZWIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZml2ZXRocmVlL2dvb2dsZS1tYXBzLyIsInNvdXJjZXMiOlsibGliL3dlYi9nb29nbGUtbWFwLXdlYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUFvQmpELCtCQUFvQixRQUFtQixFQUMzQixTQUNrQixTQUFTO1FBRm5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDM0IsWUFBTyxHQUFQLE9BQU87UUFDVyxjQUFTLEdBQVQsU0FBUyxDQUFBO29CQVhmLEVBQUU7bUJBR0wsVUFBVTttQkFDVixTQUFTO3VCQUVTLEVBQUU7MEJBQ1gsS0FBSztLQUtsQzs7OztJQUVELHdDQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtTQUNwQyxFQUFFLFVBQUMsR0FBRztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEIsQ0FBQyxDQUFDO0tBQ047Ozs7SUFFTyxvQ0FBSTs7Ozs7UUFFUixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUUvQixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztnQkFFcEIsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakIsRUFBRSxVQUFDLEdBQUc7b0JBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lC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Qzs7O2dCQTlHakMsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxFQUFFOztpQkFFZjs7OztnQkFSdUMsU0FBUztnQkFBckIsVUFBVTtnREF1QjdCLE1BQU0sU0FBQyxRQUFROzs7eUJBWm5CLEtBQUssU0FBQyxRQUFRO3VCQUNkLEtBQUs7NkJBQ0wsS0FBSzs7Z0NBZFY7O1NBVWEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUdvb2dsZU1hcCB9IGZyb20gJy4vLi4vZ29vZ2xlLW1hcCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbmplY3QsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IH0gZnJvbSAnQHR5cGVzL2dvb2dsZW1hcHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Zpdi1nb29nbGUtbWFwLXdlYicsXG4gICAgdGVtcGxhdGU6IGBgLFxuICAgIHN0eWxlVXJsczogWydnb29nbGUtbWFwLXdlYi5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcFdlYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSUdvb2dsZU1hcCB7XG5cbiAgICBASW5wdXQoJ2FwaUtleScpIGFwaUtleTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHpvb206IG51bWJlciA9IDE1O1xuICAgIEBJbnB1dCgpIG1hcE9wdGlvbnM6IGdvb2dsZS5tYXBzLk1hcE9wdGlvbnM7IC8vIFRPRE8gZW5hYmxlIG1hcG9wdGlvbnNcblxuICAgIHB1YmxpYyBsYXQ6IG51bWJlciA9IDUwLjk1NzYxOTE7XG4gICAgcHVibGljIGxuZzogbnVtYmVyID0gNi44MjcyNDA4O1xuICAgIHB1YmxpYyBtYXA6IGdvb2dsZS5tYXBzLk1hcDtcbiAgICBwdWJsaWMgbWFya2VyczogZ29vZ2xlLm1hcHMuTWFya2VyW10gPSBbXTtcbiAgICBwcml2YXRlIG1hcHNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmluaXQoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR29vZ2xlIE1hcHMgcmVhZHkuXCIpXG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPGFueT4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMubG9hZFNESygpLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0TWFwKCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkU0RLKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBHb29nbGUgTWFwcyBTREtcIik7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubWFwc0xvYWRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0U0RLKCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCdTREsgYWxyZWFkeSBsb2FkZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbmplY3RTREsoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHdpbmRvd1snbWFwSW5pdCddID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHNjcmlwdCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBzY3JpcHQuaWQgPSAnZ29vZ2xlTWFwcyc7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT0nICsgdGhpcy5hcGlLZXkgKyAnJmNhbGxiYWNrPW1hcEluaXQnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoJycpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZG9jdW1lbnQuYm9keSwgc2NyaXB0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0TWFwKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcodGhpcy5sYXQsIHRoaXMubG5nKTtcbiAgICAgICAgICAgIGxldCBtYXBPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGNlbnRlcjogbGF0TG5nLFxuICAgICAgICAgICAgICAgIHpvb206IHRoaXMuem9vbVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBtYXBPcHRpb25zKTtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRNYXJrZXIobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCBsYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdCwgbG5nKTtcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXG4gICAgICAgICAgICBwb3NpdGlvbjogbGF0TG5nXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgIH1cbn1cbiJdfQ==