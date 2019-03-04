import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from '@ionic/core';

@Component({
  selector: 'fiv-router-item',
  templateUrl: './router-item.component.html',
  styleUrls: ['./router-item.component.scss']
})
export class FivRouterItem implements OnInit {

  @Input() active = false;

  @Input() color?: Color;

  @Input() detail?: boolean;

  @Input() detailIcon = 'ios-arrow-forward';

  @Input() disabled = false;

  @Input() icon?: string;

  @Input() lines?: 'full' | 'inset' | 'none';

  @Input() matchChildUrl = false;

  @Input() navigate = true;

  @Input() pageUrl: string;

  /**
   * The position of the active state.
   * Default value is: `"left"`
   */
  @Input() position: 'left' | 'right' | 'bottom' | 'top' | 'outline' = 'left';

  /**
   * The shape of the active state.
   * Possible values are: `"line"`, `"dot"` and any ionicon.
   * Default value is: `"line"`
   */
  @Input() shape: 'line' | 'dot' | 'rounded' | string = 'line';

  @Input() text: string;

  @HostListener('click') onclick() {
    if (this.navigate && this.pageUrl) {
      this.router.navigateByUrl(this.pageUrl);
    }
  }

  @HostBinding('class') get classes(): string {
    return `${this.position} ${this.shape}`;
  }

  @HostBinding('class.active') get activeClass() {
    return this.matchActiveUrl() || this.active;
  }

  @HostBinding('class.router-item-disabled') get disabledClass() {
    return this.disabled;
  }

  constructor(public router: Router) { }

  ngOnInit() {
  }

  hasShape(): boolean {
    return this.shape === 'line'
      || this.shape === 'dot';
  }

  getClasses(): string[] {
    return this.hasShape() ? [this.position, this.shape] : [this.position];
  }

  matchActiveUrl(): boolean {
    return this.matchChildUrl ? this.isChildUrl() : this.isCurrentUrl();
  }

  isCurrentUrl(): boolean {
    return this.router.url === this.pageUrl;
  }

  isChildUrl(): boolean {
    return this.router.url.startsWith(this.pageUrl);
  }

}
