import { Injectable, ViewContainerRef } from '@angular/core';
import { FivOverlayService, NgContent } from '../overlay/overlay.service';
import { FivDialog } from '../dialog/dialog.component';

export interface DialogOptions {
  verticalAlign: 'bottom' | 'center' | 'top';
  horizontalAlign: 'left' | 'center' | 'right';
  shape: 'card' | 'fill';
  backdrop: boolean;
  duration: number;
}

@Injectable({
  providedIn: 'root'
})
export class FivDialogService {
  constructor(private overlay: FivOverlayService) {}

  openDialog(
    viewContainerRef: ViewContainerRef,
    content: NgContent<any>,
    options?: DialogOptions
  ) {
    const c = this.overlay.createOverlay<FivDialog>(
      viewContainerRef,
      FivDialog,
      content
    );
    c.instance.verticalAlign = options ? options.verticalAlign : 'top';
    c.instance.verticalAlign = options ? options.verticalAlign : 'center';
    c.instance.backdrop = options ? options.backdrop : true;
    c.instance.duration = options ? options.duration : 0;
    c.instance.shape = options ? options.shape : 'card';
    c.instance.open();

    return c;
  }
}
