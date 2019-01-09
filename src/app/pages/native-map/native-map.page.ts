import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FivGoogleMapsNative } from '@fivethree/google-maps';

@Component({
  selector: 'app-native-map',
  templateUrl: './native-map.page.html',
  styleUrls: ['./native-map.page.scss'],
})
export class NativeMapPage implements OnInit, AfterViewInit {

  @ViewChild('map') map: FivGoogleMapsNative;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.map.addMarker(50.9576191, 6.8272408);

  }

}
