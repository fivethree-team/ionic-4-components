import { Component, OnInit, Input } from '@angular/core';
import { CollapsableMenuDirective } from '../collapsable-menu.directive';

@Component({
  selector: 'fiv-collapsable-menu-button',
  templateUrl: './collapsable-menu-button.component.html',
  styleUrls: ['./collapsable-menu-button.component.scss']
})
export class CollapsableMenuButtonComponent implements OnInit {

  @Input() menu: CollapsableMenuDirective;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('###', this.menu);
    this.menu.toggleMenu();
  }

}
