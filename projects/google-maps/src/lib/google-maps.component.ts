import { IFivGoogleMaps, LatLng } from './google-maps';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fiv-google-maps',
  template: `
    <fiv-google-maps-web *ngIf="!isCordova" [apiKey]="apiKey"></fiv-google-maps-web>
    <fiv-google-maps-native *ngIf="isCordova"></fiv-google-maps-native>
  `,
  styles: []
})
export class FivGoogleMaps implements OnInit, IFivGoogleMaps {

  @Input() isCordova: boolean;
  @Input() apiKey: string;
  @Input() zoom = 15;

  constructor() { }

  ngOnInit() {
  }

  addMarker(lat: number, lng: number) {
  }

  hideMarkers() {
  }

  showMarkers() {
  }

  deleteMarker(position: LatLng) {
  }

  deleteMarkers() {
  }

}
