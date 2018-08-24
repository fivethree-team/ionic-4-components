import { IGoogleMap } from './../google-map';
import { OnInit, ElementRef, Renderer2 } from '@angular/core';
export declare class GoogleMapWebComponent implements OnInit, IGoogleMap {
    private renderer;
    private element;
    private _document;
    apiKey: string;
    zoom: number;
    mapOptions: google.maps.MapOptions;
    lat: number;
    lng: number;
    map: google.maps.Map;
    markers: google.maps.Marker[];
    private mapsLoaded;
    constructor(renderer: Renderer2, element: ElementRef, _document: any);
    ngOnInit(): void;
    private init();
    private loadSDK();
    private injectSDK();
    private initMap();
    addMarker(lat: number, lng: number): void;
}
