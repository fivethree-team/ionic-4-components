import { IGoogleMap } from './google-map';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fiv-google-maps',
  template: `
    <fiv-google-map-web *ngIf="!isCordova" [apiKey]="apiKey"></fiv-google-map-web>
    <fiv-google-map-native *ngIf="isCordova"></fiv-google-map-native>
  `,
  styles: []
})
export class GoogleMapsComponent implements OnInit, IGoogleMap {

  @Input() isCordova: boolean;
  @Input('apiKey') apiKey: string;
  @Input() zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

  addMarker(lat: number, lng: number) {
  }

}
