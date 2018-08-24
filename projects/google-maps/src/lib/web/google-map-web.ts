import { IGoogleMap } from './../google-map';
import { Component, OnInit, ElementRef, Renderer2, Inject, Input, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { } from '@types/googlemaps';

@Component({
    selector: 'fiv-google-map-web',
    template: ``,
    styleUrls: ['google-map-web.scss'],
})
export class GoogleMapWebComponent implements OnInit, IGoogleMap {

    @Input('apiKey') apiKey: string;
    @Input() zoom: number = 15;
    @Input() mapOptions: google.maps.MapOptions; // TODO enable mapoptions

    public lat: number = 50.9576191;
    public lng: number = 6.8272408;
    public map: google.maps.Map;
    public markers: google.maps.Marker[] = [];
    private mapsLoaded: boolean = false;

    constructor(private renderer: Renderer2,
        private element: ElementRef,
        @Inject(DOCUMENT) private _document) {
    }

    ngOnInit() {
        this.init().then((res) => {
            console.log("Google Maps ready.")
        }, (err) => {
            console.log(err);
        });
    }

    private init(): Promise<any> {

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

    private loadSDK(): Promise<any> {
        console.log("Loading Google Maps SDK");
        return new Promise((resolve, reject) => {
            if (!this.mapsLoaded) {
                this.injectSDK().then((res) => {
                    resolve(true);
                }, (err) => {
                    reject(err);
                });
            } else {
                reject('SDK already loaded');
            }

        });


    }

    private injectSDK(): Promise<any> {
        return new Promise((resolve, reject) => {
            window['mapInit'] = () => {
                this.mapsLoaded = true;
                resolve(true);
            }

            let script = this.renderer.createElement('script');
            script.id = 'googleMaps';

            if (this.apiKey) {
                script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
            } else {
                reject('')
            }

            this.renderer.appendChild(this._document.body, script);
        });
    }

    private initMap(): Promise<any> {
        return new Promise((resolve) => {
            let latLng = new google.maps.LatLng(this.lat, this.lng);
            let mapOptions = {
                center: latLng,
                zoom: this.zoom
            };

            this.map = new google.maps.Map(this.element.nativeElement, mapOptions);
            resolve(true);
        });
    }

    public addMarker(lat: number, lng: number): void {
        let latLng = new google.maps.LatLng(lat, lng);
        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        this.markers.push(marker);
    }
}
