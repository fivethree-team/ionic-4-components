import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'fiv-app-bar-tab-content',
  templateUrl: './app-bar-tab-content.component.html',
  styleUrls: ['./app-bar-tab-content.component.scss']
})
export class AppBarTabContentComponent implements OnInit {

  @Input() icon: string;
  @Input() href: string;
  @Input() active = false;


  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  onClick() {
    this.nav.navigateRoot(this.href);
  }
}
