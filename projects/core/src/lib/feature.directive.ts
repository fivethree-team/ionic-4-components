import { FivIcon } from './icon/icon.component';
import { FeaturePosition } from './interfaces.d';
import { Directive, Host, ElementRef, Input, Optional, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { FivOverlayService } from './services/overlay.service';
import { FivFeatureDiscovery } from './feature-discovery/feature-discovery.component';
import { first, flatMap, tap } from 'rxjs/operators';
import { Platform } from '@ionic/angular';

@Directive({
  selector: '[fivFeature]'
})
export class FivFeature {

  @Input() maxDiameter = 1080;
  @Input() diameter = Math.min(this.platform.width() * 2, this.maxDiameter);
  overlayRef: ComponentRef<FivFeatureDiscovery>;

  constructor(
    @Host() private host: ElementRef,
    @Host() @Optional() private icon: FivIcon,
    private overlay: FivOverlayService,
    private platform: Platform,
    private change: ChangeDetectorRef
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
    this.overlayRef = this.overlay.createOverlay(FivFeatureDiscovery);
    const featureOverlay = this.overlayRef.instance;
    console.log('set width and height to', this.diameter);
    featureOverlay.height = this.diameter;
    featureOverlay.width = this.diameter;
    featureOverlay.setIcon(this.icon);
    featureOverlay.setBounds(bounds);
    featureOverlay.show();
    featureOverlay.fivClick
      .pipe(first())
      .subscribe(() => { this.featureClick(); });
    featureOverlay.fivBackdropClick
      .pipe(first())
      .subscribe(() => { this.hide(); });
  }

  hide() {
    if (this.overlayRef) {
      this.overlayRef.instance.hide();
      this.overlayRef
        .instance
        .fivClose
        .pipe(first())
        .subscribe(() => {
          this.overlayRef.destroy();
          this.overlayRef = null;
        });
    }
  }

  featureClick() {
    if (this.overlayRef) {
      this.overlayRef.instance.featureClick();
      this.overlayRef
        .instance
        .fivClose
        .pipe(first())
        .subscribe(() => {
          this.overlayRef.destroy();
          this.overlayRef = null;
          this.host.nativeElement.click();
        });
    }
  }



}

