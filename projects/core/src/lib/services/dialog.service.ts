import { Injectable } from '@angular/core';
import { OverlayService, NgContent } from './overlay.service';
import { FivDialog } from '../dialog/dialog.component';

export interface DialogOptions {
  verticalAlign: 'bottom' | 'center' | 'top';
  backdrop: boolean;
  duration: number;
  title: string;
  subtitle: string;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private overlay: OverlayService) { }

  openDialog(content: NgContent<any>, options?: DialogOptions) {
    const c = this.overlay.createOverlay(FivDialog, content);
    c.instance.verticalAlign = options ? options.verticalAlign : 'top';
    c.instance.backdrop = options ? options.backdrop : true;
    c.instance.duration = options ? options.duration : 0;
    c.instance.title = options ? options.title : '';
    c.instance.subtitle = options ? options.subtitle : '';
    c.instance.open();

    return c;
  }
}
