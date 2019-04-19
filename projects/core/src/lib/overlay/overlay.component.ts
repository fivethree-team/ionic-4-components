import { Component, ViewChild, ComponentRef, TemplateRef, Input } from '@angular/core';
import { FivOverlayContent } from './overlay-content/overlay-content.component';
import { FivOverlayService } from './overlay.service';

@Component({
  selector: 'fiv-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class FivOverlay {

  private componentRef: ComponentRef<FivOverlayContent>;

  @ViewChild('content') ngContent: TemplateRef<any>;
  @Input() priority;
  private _open = false;

  constructor(private overlay: FivOverlayService) {

  }

  show(priority?: number) {
    if (!this.componentRef) {
      this.componentRef = this.overlay.createOverlay(FivOverlayContent, this.ngContent);
      this._open = true;
      this.componentRef.instance.priority = priority;
      return this.componentRef.instance;
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
