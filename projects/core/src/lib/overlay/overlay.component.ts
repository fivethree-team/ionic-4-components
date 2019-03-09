import { Component, ViewChild, ComponentRef, TemplateRef } from '@angular/core';
import { OverlayService } from '../../public_api';
import { OverlayContentComponent } from '../overlay-content/overlay-content.component';

@Component({
  selector: 'fiv-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent {

  private componentRef: ComponentRef<OverlayContentComponent>;

  @ViewChild('content') ngContent: TemplateRef<any>;
  private _open = false;

  constructor(private overlay: OverlayService) {

  }

  show() {
    if (!this.componentRef) {
      const ref = this.overlay.createOverlay(OverlayContentComponent, this.ngContent);
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
