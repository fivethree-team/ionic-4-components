import { Component, OnInit, ViewChild } from '@angular/core';
import { DrawerState } from 'core';
import { GoogleMapsNativeComponent } from 'google-maps';

@Component({
  selector: 'app-native-map-bottom-sheet',
  templateUrl: './native-map-bottom-sheet.page.html',
  styleUrls: ['./native-map-bottom-sheet.page.scss'],
})
export class NativeMapBottomSheetPage implements OnInit {

  shouldBounce = true;
  dockedHeight = 170;
  distanceTop = 56;
  drawerState = DrawerState.Docked;
  states = DrawerState;
  minimumHeight = 24;

  handle = true;
  float = true;
  rounded = true;

  @ViewChild('map') map: GoogleMapsNativeComponent;

  constructor() { }

  ngOnInit() {
  }

}
