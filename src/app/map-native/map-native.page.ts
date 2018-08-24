import { Component, OnInit, Input } from '@angular/core';
import { GoogleMaps, GoogleMapOptions, Marker, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

@Component({
  selector: 'app-map-native',
  templateUrl: './map-native.page.html',
  styleUrls: ['./map-native.page.scss'],
})
export class MapNativePage implements OnInit {

  @Input() zoom: number = 15;
  @Input() mapOptions: GoogleMapOptions;

  public map: GoogleMap;
  public marker: Marker[] = [];

  constructor() { }

  ngOnInit() {
    console.log('GoogleMapNativeComponent ng on init');
    this.loadMap();
  }

  loadMap(): any {
    console.log("loading Map");

    this.map = GoogleMaps.create('map', {
      controls: {
        myLocation: true,
        myLocationButton: false,
        mapToolbar: false,
        compass: true,
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => console.log("map is ready"));

    console.log("loaded Map");

    // this.map.getMyLocation({ enableHighAccuracy: true }).then((location: MyLocation) => {
    //     this.map.animateCamera({ zoom: this.zoom, target: location.latLng, duration: 350 });
    // });
  }

}
