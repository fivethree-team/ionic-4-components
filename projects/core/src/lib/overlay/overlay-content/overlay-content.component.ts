import { Component, HostBinding } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'fiv-overlay-content',
  templateUrl: './overlay-content.component.html',
  styleUrls: ['./overlay-content.component.scss']
})
export class FivOverlayContent {
  @HostBinding('style')
  get myStyle(): SafeStyle {
    return this.priority
      ? this.sanitizer.bypassSecurityTrustStyle(`z-index: ${this.priority}`)
      : null;
  }

  priority: number;

  constructor(private sanitizer: DomSanitizer) {}
}
