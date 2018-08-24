import { IGoogleMap } from './../google-map';
import { OnInit } from '@angular/core';
import { GoogleMap, GoogleMapOptions, Marker } from '@ionic-native/google-maps';
export declare class GoogleMapNativeComponent implements OnInit, IGoogleMap {
    zoom: number;
    mapOptions: GoogleMapOptions;
    map: GoogleMap;
    marker: Marker[];
    constructor();
    ngOnInit(): void;
    loadMap(): any;
    addMarker(lat: number, lng: number): void;
}
