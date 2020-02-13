import { FivIcon } from './../icon/icon.component';
import { FivExpandable } from './../expandable/expandable.component';
import {
  Component,
  OnInit,
  Input,
  HostBinding,
  HostListener,
  Optional,
  Host,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Color } from '@ionic/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'fiv-router-item',
  templateUrl: './router-item.component.html',
  styleUrls: ['./router-item.component.scss']
})
export class FivRouterItem implements OnInit, AfterViewInit {
  @ViewChild('fivIcon', { static: false }) fivIcon: FivIcon;

  @Input() active = false;

  @Input() color?: Color;

  @Input() detail?: boolean;

  @Input() detailIcon = 'chevron-forward';

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
  @Input() position: 'left' | 'right' = 'left';

  /**
   * The shape of the active state.
   * Possible values are: `"line"`, `"dot"` and `"rounded"`.
   * Default value is: `"line"`
   */
  @Input() shape: 'line' | 'dot' | 'rounded' = 'line';

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

  constructor(
    public router: Router,
    @Optional() @Host() private host: FivExpandable
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        filter((event: NavigationEnd) => event.url === this.pageUrl)
      )
      .subscribe(() => this.openExpandableHost());
  }

  openExpandableHost() {
    const isActive = this.matchActiveUrl() || this.active;
    if (isActive) {
      if (this.host && !this.host.isOpen) {
        this.host.open();
      }
    }
  }

  getClasses(): string[] {
    return [this.position, this.shape];
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
