import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FivOverlay } from '../overlay/overlay.component';
import { Platform } from '@ionic/angular';

interface Position {
  top: number;
  left: number;
}

@Component({
  selector: 'fiv-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class FivPopover implements OnInit {
  @Input() width: number;
  @Input() height: number;
  @Input() overlaysTarget = true;
  @Input() backdrop = true;
  top = 0;
  left = 0;

  @ViewChild(FivOverlay, { static: false }) overlay: FivOverlay;

  constructor(private platform: Platform) {}

  ngOnInit() {}

  close() {
    this.overlay.hide();
  }

  openClick(event: MouseEvent) {
    const {
      top,
      left,
      bottom,
      right,
      height,
      width
    } = (event.target as HTMLElement).getBoundingClientRect();
    const position = this.calculcatePosition(
      top,
      left,
      bottom,
      right,
      height,
      width
    );
    this.openAtPosition(position);
  }

  openCords(top: number, left: number) {
    const position = this.calculcatePosition(top, left, top, left, 0, 0);
    this.openAtPosition(position);
  }

  private openAtPosition(position: Position) {
    this.top = position.top;
    this.left = position.left;
    this.overlay.show();
  }

  private calculcatePosition(
    top: number,
    left: number,
    bottom: number,
    right: number,
    targetHeight: number,
    targetWidth: number
  ): Position {
    const width = this.platform.width();
    const height = this.platform.height();
    if (width / 2 > left && height / 2 > top) {
      // top left
      (left = Math.max(0, left)), (top = Math.max(0, top));
    } else if (width / 2 < left && height / 2 < top) {
      // bottom right
      left = Math.min(width - this.width, right - this.width);
      top = Math.min(height - this.height, bottom - this.height);
    } else if (width / 2 < left && height / 2 > top) {
      // top right
      left = Math.min(width - this.width, right - this.width);
      top = Math.max(0, top);
    } else if (width / 2 > left && height / 2 < top) {
      // bottom left
      left = Math.max(0, left);
      top = Math.min(height - this.height, bottom - this.height);
    }

    // alter position when not overlaying click target
    if (!this.overlaysTarget) {
      height / 2 > top ? (top += targetHeight) : (top -= targetHeight);
    }

    return { top, left };
  }
}
