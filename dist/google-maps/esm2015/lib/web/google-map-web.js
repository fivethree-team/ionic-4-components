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
    GoogleMapWebComponent.prototype.networkHandler;
    /** @type {?} */
    GoogleMapWebComponent.prototype.renderer;
    /** @type {?} */
    GoogleMapWebComponent.prototype.element;
    /** @type {?} */
    GoogleMapWebComponent.prototype._document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC13ZWIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nb29nbGUtbWFwcy8iLCJzb3VyY2VzIjpbImxpYi93ZWIvZ29vZ2xlLW1hcC13ZWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQVFyRCxNQUFNOzs7Ozs7SUFhRixZQUFvQixRQUFtQixFQUMzQixTQUNrQixTQUFTO1FBRm5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDM0IsWUFBTyxHQUFQLE9BQU87UUFDVyxjQUFTLEdBQVQsU0FBUyxDQUFBO29CQVpmLEVBQUU7bUJBR0wsVUFBVTttQkFDVixTQUFTO3VCQUVOLEVBQUU7MEJBQ0ksS0FBSzs4QkFDVixJQUFJO0tBTTVCOzs7O0lBRUQsUUFBUTtRQUVKLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7U0FDcEMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQixDQUFDLENBQUM7S0FFTjs7OztJQUVPLElBQUk7UUFFUixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFFbkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUV4QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDZixDQUFDLENBQUM7YUFFTixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBRVAsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBRWYsQ0FBQyxDQUFDO1NBRU4sQ0FBQyxDQUFDOzs7OztJQUlDLE9BQU87UUFFWCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFFdkMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBRW5DLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNqQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNmLENBQUMsQ0FBQzthQUNOO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDaEM7U0FFSixDQUFDLENBQUM7Ozs7O0lBS0MsU0FBUztRQUViLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUVuQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxFQUFFO2dCQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCLENBQUE7O1lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkQsTUFBTSxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQUM7WUFFekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLEdBQUcsR0FBRyw4Q0FBOEMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDO2FBQ25HO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO2FBQ2I7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUUxRCxDQUFDLENBQUM7Ozs7O0lBSUMsT0FBTztRQUVYLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFOztZQUUzQixJQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUN4RCxJQUFJLFVBQVUsR0FBRztnQkFDYixNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDbEIsQ0FBQztZQUVGLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUN2RSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakIsQ0FBQyxDQUFDOzs7Ozs7O0lBR0EsU0FBUyxDQUFDLEdBQVcsRUFBRSxHQUFXOztRQUVyQyxJQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs7UUFFOUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSTtZQUNyQyxRQUFRLEVBQUUsTUFBTTtTQUNuQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7OztZQTlIakMsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLE1BQU0sRUFBRSxDQUFDLDZDQUE2QyxDQUFDO2FBQzFEOzs7O1lBUnVDLFNBQVM7WUFBckIsVUFBVTs0Q0F3QjdCLE1BQU0sU0FBQyxRQUFROzs7cUJBYm5CLEtBQUssU0FBQyxRQUFRO21CQUNkLEtBQUs7eUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEluamVjdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge30gZnJvbSAnQHR5cGVzL2dvb2dsZW1hcHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Zpdi1nb29nbGUtbWFwLXdlYicsXG4gICAgdGVtcGxhdGU6IGBgLFxuICAgIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9YF0sXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcFdlYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoJ2FwaUtleScpIGFwaUtleTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHpvb206IG51bWJlciA9IDE1O1xuICAgIEBJbnB1dCgpIG1hcE9wdGlvbnM6IGdvb2dsZS5tYXBzLk1hcE9wdGlvbnM7IC8vIFRPRE8gZW5hYmxlIG1hcG9wdGlvbnNcblxuICAgIHB1YmxpYyBsYXQ6IG51bWJlciA9IDUwLjk1NzYxOTE7XG4gICAgcHVibGljIGxuZzogbnVtYmVyID0gNi44MjcyNDA4O1xuICAgIHB1YmxpYyBtYXA6IGFueTtcbiAgICBwdWJsaWMgbWFya2VyczogYW55W10gPSBbXTtcbiAgICBwcml2YXRlIG1hcHNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIG5ldHdvcmtIYW5kbGVyID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudCkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5pbml0KCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdvb2dsZSBNYXBzIHJlYWR5LlwiKVxuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPGFueT4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMubG9hZFNESygpLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0TWFwKCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkU0RLKCk6IFByb21pc2U8YW55PiB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIEdvb2dsZSBNYXBzIFNES1wiKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMubWFwc0xvYWRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0U0RLKCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCdTREsgYWxyZWFkeSBsb2FkZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbmplY3RTREsoKTogUHJvbWlzZTxhbnk+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICB3aW5kb3dbJ21hcEluaXQnXSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcHNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzY3JpcHQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgc2NyaXB0LmlkID0gJ2dvb2dsZU1hcHMnO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JyArIHRoaXMuYXBpS2V5ICsgJyZjYWxsYmFjaz1tYXBJbml0JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCcnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2RvY3VtZW50LmJvZHksIHNjcmlwdCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRNYXAoKTogUHJvbWlzZTxhbnk+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblxuICAgICAgICAgICAgbGV0IGxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcodGhpcy5sYXQsIHRoaXMubG5nKTtcbiAgICAgICAgICAgIGxldCBtYXBPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGNlbnRlcjogbGF0TG5nLFxuICAgICAgICAgICAgICAgIHpvb206IHRoaXMuem9vbVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBtYXBPcHRpb25zKTtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRNYXJrZXIobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgICAgbGV0IGxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0LCBsbmcpO1xuXG4gICAgICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxuICAgICAgICAgICAgcG9zaXRpb246IGxhdExuZ1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXG4gICAgfVxuXG59Il19