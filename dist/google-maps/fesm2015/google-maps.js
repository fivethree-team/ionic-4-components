import { Injectable, Component, ElementRef, Renderer2, Inject, Input, defineInjectable, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GoogleMapsService {
    constructor() { }
}
GoogleMapsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
GoogleMapsService.ctorParameters = () => [];
/** @nocollapse */ GoogleMapsService.ngInjectableDef = defineInjectable({ factory: function GoogleMapsService_Factory() { return new GoogleMapsService(); }, token: GoogleMapsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GoogleMapsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
GoogleMapsComponent.decorators = [
    { type: Component, args: [{
                selector: 'fiv-google-maps',
                template: `
    <p>
      google-maps works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
GoogleMapsComponent.ctorParameters = () => [];
GoogleMapsComponent.propDecorators = {
    isCordova: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GoogleMapWebComponent {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} _document
     */
    constructor(renderer, element, _document) {
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
    ngOnInit() {
        this.init().then((res) => {
            console.log("Google Maps ready.");
        }, (err) => {
            console.log(err);
        });
    }
    /**
     * @return {?}
     */
    init() {
        return new Promise((resolve, reject) => {
            this.loadSDK().then((res) => {
                this.initMap().then((res) => {
                    resolve(true);
                }, (err) => {
                    reject(err);
                });
            }, (err) => {
                reject(err);
            });
        });
    }
    /**
     * @return {?}
     */
    loadSDK() {
        console.log("Loading Google Maps SDK");
        return new Promise((resolve, reject) => {
            if (!this.mapsLoaded) {
                this.injectSDK().then((res) => {
                    resolve(true);
                }, (err) => {
                    reject(err);
                });
            }
            else {
                reject('SDK already loaded');
            }
        });
    }
    /**
     * @return {?}
     */
    injectSDK() {
        return new Promise((resolve, reject) => {
            window['mapInit'] = () => {
                this.mapsLoaded = true;
                resolve(true);
            };
            /** @type {?} */
            let script = this.renderer.createElement('script');
            script.id = 'googleMaps';
            if (this.apiKey) {
                script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
            }
            else {
                reject('');
            }
            this.renderer.appendChild(this._document.body, script);
        });
    }
    /**
     * @return {?}
     */
    initMap() {
        return new Promise((resolve) => {
            /** @type {?} */
            let latLng = new google.maps.LatLng(this.lat, this.lng);
            /** @type {?} */
            let mapOptions = {
                center: latLng,
                zoom: this.zoom
            };
            this.map = new google.maps.Map(this.element.nativeElement, mapOptions);
            resolve(true);
        });
    }
    /**
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    addMarker(lat, lng) {
        /** @type {?} */
        let latLng = new google.maps.LatLng(lat, lng);
        /** @type {?} */
        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        this.markers.push(marker);
    }
}
GoogleMapWebComponent.decorators = [
    { type: Component, args: [{
                selector: 'fiv-google-map-web',
                template: ``,
                styles: [`:host{display:block;width:100%;height:100%}`],
            },] },
];
/** @nocollapse */
GoogleMapWebComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
GoogleMapWebComponent.propDecorators = {
    apiKey: [{ type: Input, args: ['apiKey',] }],
    zoom: [{ type: Input }],
    mapOptions: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GoogleMapsModule {
}
GoogleMapsModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [GoogleMapsComponent, GoogleMapWebComponent],
                exports: [GoogleMapsComponent, GoogleMapWebComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { GoogleMapsService, GoogleMapsComponent, GoogleMapsModule, GoogleMapWebComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcHMuanMubWFwIiwic291cmNlcyI6WyJuZzovL2dvb2dsZS1tYXBzL2xpYi9nb29nbGUtbWFwcy5zZXJ2aWNlLnRzIiwibmc6Ly9nb29nbGUtbWFwcy9saWIvZ29vZ2xlLW1hcHMuY29tcG9uZW50LnRzIiwibmc6Ly9nb29nbGUtbWFwcy9saWIvd2ViL2dvb2dsZS1tYXAtd2ViLnRzIiwibmc6Ly9nb29nbGUtbWFwcy9saWIvZ29vZ2xlLW1hcHMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LWdvb2dsZS1tYXBzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGdvb2dsZS1tYXBzIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBpc0NvcmRvdmE6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbmplY3QsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHt9IGZyb20gJ0B0eXBlcy9nb29nbGVtYXBzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmaXYtZ29vZ2xlLW1hcC13ZWInLFxuICAgIHRlbXBsYXRlOiBgYCxcbiAgICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBXZWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCdhcGlLZXknKSBhcGlLZXk6IHN0cmluZztcbiAgICBASW5wdXQoKSB6b29tOiBudW1iZXIgPSAxNTtcbiAgICBASW5wdXQoKSBtYXBPcHRpb25zOiBnb29nbGUubWFwcy5NYXBPcHRpb25zOyAvLyBUT0RPIGVuYWJsZSBtYXBvcHRpb25zXG5cbiAgICBwdWJsaWMgbGF0OiBudW1iZXIgPSA1MC45NTc2MTkxO1xuICAgIHB1YmxpYyBsbmc6IG51bWJlciA9IDYuODI3MjQwODtcbiAgICBwdWJsaWMgbWFwOiBhbnk7XG4gICAgcHVibGljIG1hcmtlcnM6IGFueVtdID0gW107XG4gICAgcHJpdmF0ZSBtYXBzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBuZXR3b3JrSGFuZGxlciA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHb29nbGUgTWFwcyByZWFkeS5cIilcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXQoKTogUHJvbWlzZTxhbnk+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRTREsoKS50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdE1hcCgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFNESygpOiBQcm9taXNlPGFueT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBHb29nbGUgTWFwcyBTREtcIik7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLm1hcHNMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluamVjdFNESygpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdCgnU0RLIGFscmVhZHkgbG9hZGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIHByaXZhdGUgaW5qZWN0U0RLKCk6IFByb21pc2U8YW55PiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgd2luZG93WydtYXBJbml0J10gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc2NyaXB0ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHNjcmlwdC5pZCA9ICdnb29nbGVNYXBzJztcblxuICAgICAgICAgICAgaWYgKHRoaXMuYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PScgKyB0aGlzLmFwaUtleSArICcmY2FsbGJhY2s9bWFwSW5pdCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdCgnJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0TWFwKCk6IFByb21pc2U8YW55PiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBsYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHRoaXMubGF0LCB0aGlzLmxuZyk7XG4gICAgICAgICAgICBsZXQgbWFwT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBjZW50ZXI6IGxhdExuZyxcbiAgICAgICAgICAgICAgICB6b29tOiB0aGlzLnpvb21cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgbWFwT3B0aW9ucyk7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTWFya2VyKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICAgIGxldCBsYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdCwgbG5nKTtcblxuICAgICAgICBsZXQgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBsYXRMbmdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcblxuICAgIH1cblxufSIsImltcG9ydCB7IEdvb2dsZU1hcFdlYkNvbXBvbmVudCB9IGZyb20gJy4vd2ViL2dvb2dsZS1tYXAtd2ViJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHb29nbGVNYXBzQ29tcG9uZW50IH0gZnJvbSAnLi9nb29nbGUtbWFwcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0dvb2dsZU1hcHNDb21wb25lbnQsIEdvb2dsZU1hcFdlYkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtHb29nbGVNYXBzQ29tcG9uZW50LCBHb29nbGVNYXBXZWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcHNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0UsaUJBQWlCOzs7WUFMbEIsVUFBVSxT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