import {
  Component,
  OnInit,
  Input,
  Host,
  HostBinding,
  ElementRef
} from '@angular/core';
import { Router } from '@angular/router';
import { FivAppBar } from '../app-bar.component';

@Component({
  selector: 'fiv-app-bar-tab',
  templateUrl: './app-bar-tab.component.html',
  styleUrls: ['./app-bar-tab.component.scss']
})
export class FivAppBarTab implements OnInit {
  @Input() name: string;
  @Input() tab: string;
  @Input() href: string;
  @Input() type: 'bounded' | 'unbounded' = 'unbounded';
  @Input() badge = -1;

  get active() {
    return this.router.url.endsWith(this.href);
  }

  @HostBinding('class') get classes(): string {
    return `label-${this.appBar.titleLayout}`;
  }

  constructor(
    @Host() public appBar: FivAppBar,
    public router: Router,
    public el: ElementRef
  ) {}

  ngOnInit() {}

  onClick() {
    this.appBar.ionTabButtonClick({
      tab: this.tab,
      href: this.href,
      selected: true
    });
  }
}
