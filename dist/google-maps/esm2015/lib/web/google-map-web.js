/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, Renderer2, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
export class GoogleMapWebComponent {
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
                styles: [":host{display:block;width:100%;height:100%}"]
            }] }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC13ZWIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZml2ZXRocmVlL2dvb2dsZS1tYXBzLyIsInNvdXJjZXMiOlsibGliL3dlYi9nb29nbGUtbWFwLXdlYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQVFyRCxNQUFNOzs7Ozs7SUFZRixZQUFvQixRQUFtQixFQUMzQixTQUNrQixTQUFTO1FBRm5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDM0IsWUFBTyxHQUFQLE9BQU87UUFDVyxjQUFTLEdBQVQsU0FBUyxDQUFBO29CQVhmLEVBQUU7bUJBR0wsVUFBVTttQkFDVixTQUFTO3VCQUVTLEVBQUU7MEJBQ1gsS0FBSztLQUtsQzs7OztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1NBQ3BDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEIsQ0FBQyxDQUFDO0tBQ047Ozs7SUFFTyxJQUFJO1FBRVIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBRW5DLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFFeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2pC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QUFJLENBQUMsU0FBUyxDQUFDLElBQUk7WUFDckMsUUFBUSxFQUFFLE1BQU07U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7WUE5R2pDLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsRUFBRTs7YUFFZjs7OztZQVJ1QyxTQUFTO1lBQXJCLFVBQVU7NENBdUI3QixNQUFNLFNBQUMsUUFBUTs7O3FCQVpuQixLQUFLLFNBQUMsUUFBUTttQkFDZCxLQUFLO3lCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJR29vZ2xlTWFwIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEluamVjdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgfSBmcm9tICdAdHlwZXMvZ29vZ2xlbWFwcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZml2LWdvb2dsZS1tYXAtd2ViJyxcbiAgICB0ZW1wbGF0ZTogYGAsXG4gICAgc3R5bGVVcmxzOiBbJ2dvb2dsZS1tYXAtd2ViLnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwV2ViQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJR29vZ2xlTWFwIHtcblxuICAgIEBJbnB1dCgnYXBpS2V5JykgYXBpS2V5OiBzdHJpbmc7XG4gICAgQElucHV0KCkgem9vbTogbnVtYmVyID0gMTU7XG4gICAgQElucHV0KCkgbWFwT3B0aW9uczogZ29vZ2xlLm1hcHMuTWFwT3B0aW9uczsgLy8gVE9ETyBlbmFibGUgbWFwb3B0aW9uc1xuXG4gICAgcHVibGljIGxhdDogbnVtYmVyID0gNTAuOTU3NjE5MTtcbiAgICBwdWJsaWMgbG5nOiBudW1iZXIgPSA2LjgyNzI0MDg7XG4gICAgcHVibGljIG1hcDogZ29vZ2xlLm1hcHMuTWFwO1xuICAgIHB1YmxpYyBtYXJrZXJzOiBnb29nbGUubWFwcy5NYXJrZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgbWFwc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50KSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHb29nbGUgTWFwcyByZWFkeS5cIilcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCk6IFByb21pc2U8YW55PiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5sb2FkU0RLKCkudGhlbigocmVzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmluaXRNYXAoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRTREsoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIEdvb2dsZSBNYXBzIFNES1wiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tYXBzTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmplY3RTREsoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoJ1NESyBhbHJlYWR5IGxvYWRlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGluamVjdFNESygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgd2luZG93WydtYXBJbml0J10gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc2NyaXB0ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHNjcmlwdC5pZCA9ICdnb29nbGVNYXBzJztcblxuICAgICAgICAgICAgaWYgKHRoaXMuYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PScgKyB0aGlzLmFwaUtleSArICcmY2FsbGJhY2s9bWFwSW5pdCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdCgnJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRNYXAoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyh0aGlzLmxhdCwgdGhpcy5sbmcpO1xuICAgICAgICAgICAgbGV0IG1hcE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgY2VudGVyOiBsYXRMbmcsXG4gICAgICAgICAgICAgICAgem9vbTogdGhpcy56b29tXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIG1hcE9wdGlvbnMpO1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZE1hcmtlcihsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0LCBsbmcpO1xuICAgICAgICBsZXQgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBsYXRMbmdcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgfVxufVxuIl19