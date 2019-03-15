import { Component, ViewChild, ComponentRef, TemplateRef } from '@angular/core';
import { FivOverlayContent } from '../overlay-content/overlay-content.component';
import { FivOverlayService } from '../services/overlay.service';

@Component({
  selector: 'fiv-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class FivOverlay {

  private componentRef: ComponentRef<FivOverlayContent>;

  @ViewChild('content') ngContent: TemplateRef<any>;
  private _open = false;

  constructor(private overlay: FivOverlayService) {

  }

  show() {
    if (!this.componentRef) {
      const ref = this.overlay.createOverlay(FivOverlayContent, this.ngContent);
      this.componentRef = ref;
      this._open = true;
      return ref.instance;
    }

  }

  hide() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
      this._open = false;
    }
  }

  get open() {
    return this._open;
  }
}
