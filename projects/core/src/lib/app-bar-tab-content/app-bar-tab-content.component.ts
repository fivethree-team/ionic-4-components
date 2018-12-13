import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppBarTitleLayout } from '../interfaces';

@Component({
  selector: 'fiv-app-bar-tab-content',
  templateUrl: './app-bar-tab-content.component.html',
  styleUrls: ['./app-bar-tab-content.component.scss']
})
export class AppBarTabContentComponent implements OnInit {

  @Input() name: string;
  @Input() icon: string;
  @Input() href: string;
  @Input() active = false;
  @Input() titleLayout: AppBarTitleLayout = 'hide';

  @HostBinding('class') get classes(): string {
    return `label-${this.titleLayout}`;
  }

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  onClick() {
    this.nav.navigateRoot(this.href);
  }
}
