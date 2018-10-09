import { Component, OnInit, Input, HostBinding, Host, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fiv-router-item',
  templateUrl: './router-item.component.html',
  styleUrls: ['./router-item.component.scss']
})
export class RouterItemComponent implements OnInit {

  @Input() active = false;

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
  @Input() shape: 'line' | 'dot' | string = 'line';

  @Input() routeActive = true;

  @HostListener('click') onclick() {
    if (this.navigate && this.pageUrl) {
      this.router.navigateByUrl(this.pageUrl);
    }
  }

  @HostBinding('class') get classes(): string {
    return `${this.position} ${this.shape}`;
  }

  @HostBinding('class.active') get activeClass() {
    const isActive = (this.routeActive && this.router.url.startsWith(this.pageUrl))
      || this.active;
    console.log(isActive, this.active, this.router, this.pageUrl);
    return isActive;
  }

  constructor(public router: Router) { }

  ngOnInit() {
  }

  hasShape(): boolean {
    console.log(this.shape);
    return this.shape === 'line'
      || this.shape === 'dot';
  }

  getClasses(): string[] {
    return this.hasShape() ? [this.position, this.shape] : [this.position];
  }

}
