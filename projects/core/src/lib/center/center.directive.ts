import { Directive, Input, HostBinding, OnInit } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[fivCenter]'
})
export class FivCenter implements OnInit {
  vertical = true;
  horizontal = true;

  constructor(private sanitizer: DomSanitizer) {}

  @HostBinding('style')
  get myStyle(): SafeStyle {
    // tslint:disable-next-line:max-line-length
    const style = `position: absolute; ${
      this.vertical && this.horizontal
        ? 'top: 50%; left: 50%; transform: translateY(-50%) translateX(-50%);'
        : this.vertical
        ? 'top: 50%; transform: translateY(-50%);'
        : 'left: 50%; transform: translateX(-50%);'
    }`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  @Input() set fivCenter(center: { vertical: boolean; horizontal: boolean }) {
    if (center) {
      this.vertical = center.vertical;
      this.horizontal = center.horizontal;
    }
  }

  ngOnInit(): void {}
}
