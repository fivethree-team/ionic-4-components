import { OnInit, ElementRef, Renderer2 } from '@angular/core';
export declare class GoogleMapWebComponent implements OnInit {
    private renderer;
    private element;
    private _document;
    apiKey: string;
    zoom: number;
    mapOptions: google.maps.MapOptions;
    lat: number;
    lng: number;
    map: any;
    markers: any[];
    private mapsLoaded;
    private networkHandler;
    constructor(renderer: Renderer2, element: ElementRef, _document: any);
    ngOnInit(): void;
    private init();
    private loadSDK();
    private injectSDK();
    private initMap();
    addMarker(lat: number, lng: number): void;
}
