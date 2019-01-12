import { AppBarComponent } from './../app-bar/app-bar.component';
import { Component, OnInit, Input, HostBinding, Output, EventEmitter, Host } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppBarTitleLayout } from '../interfaces';
import { TabButtonClickEventDetail } from '@ionic/core';

@Component({
  selector: 'fiv-app-bar-tab-content',
  templateUrl: './app-bar-tab-content.component.html',
  styleUrls: ['./app-bar-tab-content.component.scss']
})
export class AppBarTabContentComponent implements OnInit {

  @Input() name: string;
  @Input() icon: string;
  @Input() tab: string;
  @Input() href: string;
  @Input() active = false;
  @Input() titleLayout: AppBarTitleLayout = 'hide';

  private selected = false;

  @HostBinding('class') get classes(): string {
    return `label-${this.titleLayout}`;
  }

  @Output() ionTabButtonClick = new EventEmitter<TabButtonClickEventDetail>();

  constructor(private nav: NavController, @Host() private appbar: AppBarComponent) { }

  ngOnInit() {

  }

  onClick() {
    // this.nav.navigateRoot(this.href);
    this.ionTabButtonClick.emit({
      tab: this.tab,
      href: this.href,
      selected: true
    });
  }
}
