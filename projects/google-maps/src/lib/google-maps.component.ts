import { GoogleMap } from './google-map';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fiv-google-maps',
  template: `
    <fiv-google-map-web *ngIf="!isCordova" [apiKey]="apiKey" (onInit)="onInit($event)"></fiv-google-map-web>
    <fiv-google-map-native *ngIf="isCordova"></fiv-google-map-native>
  `,
  styles: []
})
export class GoogleMapsComponent implements OnInit {

  @Input() isCordova: boolean;
  @Input('apiKey') apiKey: string;
  googleMap: GoogleMap;

  constructor() { }

  ngOnInit() {
  }

  onInit(googleMap: GoogleMap) {
    this.googleMap = googleMap;
  }

  addMarker(lat: number, lng: number) {
  }

}
