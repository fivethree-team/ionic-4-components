import { Platform } from '@ionic/angular';
import { Directive, HostBinding, Input, HostListener } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[fivCollapseMenu]',
  exportAs: 'menuCollapse'
})
export class FivCollapsableMenu {

  collapsed = false;
  hovering = false;
  @Input() hoverMenu = true;


  constructor(private sanitizer: DomSanitizer, private platform: Platform) { }


  @HostBinding('style')
  get myStyle(): SafeStyle {
    if (this.collapsed && (this.platform.is('tablet') || this.platform.is('electron') || this.platform.is('desktop'))) {

      return this.sanitizer
        .bypassSecurityTrustStyle('min-width: 64px; max-width: 64px; --border: 0; transition: all cubic-bezier(.55,0,.1,1) 200ms;');
    } else {
      return this.sanitizer.bypassSecurityTrustStyle('--border: 0; transition: all cubic-bezier(.55,0,.1,1)  250ms;');
    }
  }

  @HostListener('mouseenter') hover() {
    if (this.collapsed && !this.hovering && this.hoverMenu) {
      this.open();
      this.hovering = true;
    }
  }

  @HostListener('mouseleave') blur() {
    if (!this.hoverMenu) { return; }
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
