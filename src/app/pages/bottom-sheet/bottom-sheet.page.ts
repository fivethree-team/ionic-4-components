import { Component, OnInit } from '@angular/core';
import { DrawerState } from '@fivethree/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.page.html',
  styleUrls: ['./bottom-sheet.page.scss']
})
export class BottomSheetPage implements OnInit {
  shouldBounce = true;
  dockedHeight = 170;
  distanceTop = 56;
  drawerState = DrawerState.Docked;
  states = DrawerState;
  minimumHeight = 24;

  handle = true;
  float = true;
  rounded = true;

  constructor() {}

  ngOnInit() {}
}
