import { Platform, IonMenu, IonSplitPane } from '@ionic/angular';
import {
  Directive,
  HostBinding,
  Input,
  HostListener,
  Host,
  Optional
} from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { tap, map } from 'rxjs/operators';

@Directive({
  selector: '[fivCollapseMenu]',
  exportAs: 'menuCollapse'
})
export class FivCollapsableMenu {
  collapsed = false;
  hovering = false;
  splitVisible = false;
  @Input() hoverMenu = true;
  @Input() width = 64;
  @Input() minWidth = 270;
  @Input() maxWidth = this.platform.width() * 0.28;

  constructor(
    private sanitizer: DomSanitizer,
    @Host() private menu: IonMenu,
    @Host() @Optional() private split: IonSplitPane,
    private platform: Platform
  ) {
    this.split.ionSplitPaneVisible
      .pipe(map(event => event.detail.visible))
      .subscribe(visible => (this.splitVisible = visible));
  }

  @HostBinding('style')
  get myStyle(): SafeStyle {
    if (this.collapsed && this.splitVisible) {
      return (
        this.sanitizer
          // tslint:disable-next-line:max-line-length
          .bypassSecurityTrustStyle(
            `min-width: ${this.width}px; max-width: ${this.width}px; --border: 0; transition: all cubic-bezier(.55,0,.1,1) 200ms;`
          )
      );
    } else {
      if (!this.splitVisible) {
        return (
          this.sanitizer
            // tslint:disable-next-line:max-line-length
            .bypassSecurityTrustStyle(
              `--border: 0; transition: all cubic-bezier(.55,0,.1,1) 200ms;`
            )
        );
      } else {
        return (
          this.sanitizer
            // tslint:disable-next-line:max-line-length
            .bypassSecurityTrustStyle(
              `min-width: ${this.minWidth}px; max-width: ${this.maxWidth}px; --border: 0; transition: all cubic-bezier(.55,0,.1,1) 200ms;`
            )
        );
      }
    }
  }

  @HostListener('mouseenter') hover() {
    if (this.collapsed && !this.hovering && this.hoverMenu) {
      this.open();
      this.hovering = true;
    }
  }

  @HostListener('mouseleave') blur() {
    if (!this.hoverMenu) {
      return;
    }
    if (!this.collapsed && this.hovering) {
      this.close();
    }
    this.hovering = false;
  }

  @Input() set fivCollapseMenu(collapse: boolean) {
    this.collapsed = collapse;
  }

  toggleMenu() {
    if (this.hovering) {
      this.open();
      this.hovering = false;
      return;
    }
    this.collapsed = !this.collapsed;
  }

  open() {
    this.collapsed = false;
  }

  close() {
    this.collapsed = true;
  }
}
