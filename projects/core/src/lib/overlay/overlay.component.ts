import {
  Component,
  ViewChild,
  ComponentRef,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
  ViewContainerRef
} from '@angular/core';
import { FivOverlayContent } from './overlay-content/overlay-content.component';
import { FivOverlayService } from './overlay.service';

@Component({
  selector: 'fiv-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class FivOverlay {
  private componentRef: ComponentRef<FivOverlayContent>;

  @ViewChild('content', { static: true }) ngContent: TemplateRef<any>;
  @Input() priority;
  @Output() afterInit = new EventEmitter();
  private _open = false;

  constructor(
    private viewContainer: ViewContainerRef,
    private overlay: FivOverlayService
  ) {}

  show(priority?: number, data?: any) {
    if (!this.componentRef) {
      this.componentRef = this.overlay.createOverlay(
        this.viewContainer,
        FivOverlayContent,
        this.ngContent
      );
      this._open = true;
      this.componentRef.instance.priority = priority;
      setTimeout(() => {
        this.afterInit.emit(data);
      }, 0);

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
