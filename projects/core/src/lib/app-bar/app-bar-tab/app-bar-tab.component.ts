import {
  Component,
  OnInit,
  Input,
  Host,
  HostBinding,
  ElementRef
} from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';
import { FivAppBar } from '../app-bar.component';

@Component({
  selector: 'fiv-app-bar-tab',
  templateUrl: './app-bar-tab.component.html',
  styleUrls: ['./app-bar-tab.component.scss']
})
export class FivAppBarTab implements OnInit {
  @Input() tab: string;
  @Input() href: string;
  @Input() type: 'bounded' | 'unbounded' = 'unbounded';

  get active() {
    return this.router.url.endsWith(this.href);
  }

  @HostBinding('class') get classes(): string {
    return `label-${this.appBar.titleMode}`;
  }

  constructor(
    @Host() public appBar: FivAppBar,
    @Host() public ionTabs: IonTabs,
    public router: Router,
    public el: ElementRef
  ) {}

  ngOnInit() {}

  onClick() {
    this.ionTabs.select(this.tab);
  }
}
