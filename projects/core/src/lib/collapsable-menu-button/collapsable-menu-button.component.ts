import { Component, OnInit, Input } from '@angular/core';
import { FivCollapsableMenu } from '../collapsable-menu/collapsable-menu.directive';

@Component({
  selector: 'fiv-collapsable-menu-button',
  templateUrl: './collapsable-menu-button.component.html',
  styleUrls: ['./collapsable-menu-button.component.scss']
})
export class FivCollapsableMenuButton implements OnInit {

  @Input() menu: FivCollapsableMenu;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('###', this.menu);
    this.menu.toggleMenu();
  }

}
