import { IGoogleMap } from './google-map';
import { OnInit } from '@angular/core';
export declare class GoogleMapsComponent implements OnInit, IGoogleMap {
    isCordova: boolean;
    apiKey: string;
    zoom: number;
    constructor();
    ngOnInit(): void;
    addMarker(lat: number, lng: number): void;
}
