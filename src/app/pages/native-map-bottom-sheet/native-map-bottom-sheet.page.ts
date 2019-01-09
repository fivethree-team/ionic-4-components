import { FivGoogleMapsNative} from '@fivethree/google-maps';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DrawerState } from '@fivethree/core';

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

  @ViewChild('map') map: FivGoogleMapsNative;

  constructor() { }

  ngOnInit() {
  }

}
