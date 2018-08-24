import { GoogleMap } from './../google-map';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'fiv-google-map-native',
    templateUrl: 'name.component.html'
})
export class GoogleMapNativeComponent implements OnInit, GoogleMap {
    
    zoom: number;

    constructor() { }

    ngOnInit() { }

    addMarker(lat: number, lng: number) {
    }
}