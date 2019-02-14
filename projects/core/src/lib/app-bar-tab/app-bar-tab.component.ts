import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fiv-app-bar-tab',
  templateUrl: './app-bar-tab.component.html',
  styleUrls: ['./app-bar-tab.component.scss']
})
export class FivAppBarTab implements OnInit {

  @Input() name: string;
  @Input() icon: string;
  @Input() tab: string;
  @Input() href: string;
  @Input() badge = -1;

  constructor() { }

  ngOnInit() {
  }

}
