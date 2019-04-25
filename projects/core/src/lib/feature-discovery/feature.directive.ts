import { FivIcon } from '../icon/icon.component';
import { FeaturePosition } from '../interfaces';
import { Directive, Host, ElementRef, Input, Optional, ComponentRef, TemplateRef, Output, EventEmitter } from '@angular/core';
import { FivOverlayService } from '../overlay/overlay.service';
import { FivFeatureDiscovery } from './feature-discovery.component';
import { first, filter } from 'rxjs/operators';
import { Platform } from '@ionic/angular';

@Directive({
  selector: '[fivFeature]',
  exportAs: 'fivFeature'
})
export class FivFeature {

  @Input() maxDiameter = 1080;
  @Input() diameter = Math.min(this.platform.width() * 2, this.maxDiameter);
  @Input() contentOffset = 20;
  @Input() featurePadding = 20;
  @Input() clickEnabled = true;
  @Input() fivFeature: TemplateRef<any>;
  overlayRef: ComponentRef<FivFeatureDiscovery>;

  @Output() fivFeatureClick = new EventEmitter<any>();
  @Output() fivOpen = new EventEmitter<any>();
  @Output() fivWillOpen = new EventEmitter<any>();
  @Output() fivClose = new EventEmitter<any>();
  @Output() fivWillClose = new EventEmitter<any>();

  isOpen = false;

  constructor(
    @Host() private host: ElementRef,
    @Host() @Optional() private icon: FivIcon,
    private overlay: FivOverlayService,
    private platform: Platform,
  ) {
  }

  private getBounds(nativeElement: any): FeaturePosition {
    const bounds = nativeElement.getBoundingClientRect();
    return {
      top: bounds.top,
      left: bounds.left,
      height: nativeElement.clientHeight,
      width: nativeElement.clientWidth
    };
  }

  show() {
    const bounds = this.icon ? this.getBounds(this.host.nativeElement.parentElement) : this.getBounds(this.host.nativeElement);
    
    this.overlayRef = this.overlay.createOverlay(FivFeatureDiscovery, this.fivFeature);
    const featureOverlay = this.overlayRef.instance;
    featureOverlay.height = this.diameter;
    featureOverlay.width = this.diameter;
    featureOverlay.featurePadding = this.featurePadding;
    featureOverlay.contentOffset = this.contentOffset;
    featureOverlay.setIcon(this.icon);
    featureOverlay.setBounds(bounds);
    featureOverlay.show();
    this.fivWillOpen.emit();
    featureOverlay.fivAnimation
      .pipe(
        filter(event => event.toState === 'visible'),
        first()
      )
      .subscribe(() => { this.didOpen(); });
    featureOverlay.fivClick
      .pipe(first())
      .subscribe(() => { this.featureClick(); });
    featureOverlay.fivBackdropClick
      .pipe(first())
      .subscribe(() => { this.hide(); });
  }

  hide() {
    this.fivWillClose.emit();
    if (this.overlayRef) {
      this.overlayRef.instance.hide();
      this.overlayRef
        .instance
        .fivClose
        .pipe(first())
        .subscribe(() => {
          this.fivClose.emit();
          this.isOpen = false;
          this.overlayRef.destroy();
          this.overlayRef = null;
        });
    }
  }

  didOpen() {
    this.fivOpen.emit();
    this.isOpen = true;
  }

  featureClick() {
    if (this.overlayRef) {
      this.fivFeatureClick.emit();
      this.fivWillClose.emit();
      this.overlayRef.instance.featureClick();
      this.overlayRef
        .instance
        .fivClose
        .pipe(first())
        .subscribe(() => {
          this.fivClose.emit();
          this.overlayRef.destroy();
          this.overlayRef = null;
          if (this.clickEnabled) {
            this.host.nativeElement.click();
          }
        });
    }
  }



}

