import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { DrawerState } from '@fivethree/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.page.html',
  styleUrls: ['./bottom-sheet.page.scss']
})
export class BottomSheetPage implements OnInit {
  shouldBounce = true;
  dockedHeight = 224;
  distanceTop = 0;
  drawerState = DrawerState.Docked;
  states = DrawerState;

  handle = true;
  float = true;
  rounded = true;
  animation = false;

  transform: SafeStyle;
  filter: SafeStyle;

  constructor(private dom: DomSanitizer) {}

  ngOnInit() {}

  onPan(progress: number) {
    if (!this.animation) {
      return;
    }
    progress = +progress.toFixed(2);
    this.transform = this.dom.bypassSecurityTrustStyle(
      `translateY(-${progress * 180}px) scale(${Math.min(1, 1.2 - progress)})`
    );
    this.filter = this.dom.bypassSecurityTrustStyle(`blur(${progress * 4}px)`);
  }
}
