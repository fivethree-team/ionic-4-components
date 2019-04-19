import { Component, OnInit, Input } from '@angular/core';
import { FivExpandable } from '../expandable.component';

@Component({
  selector: 'fiv-expandable-indicator',
  templateUrl: './expandable-indicator.component.html',
  styleUrls: ['./expandable-indicator.component.scss']
})
export class FivExpandableIndicator implements OnInit {

  @Input() icon = 'ios-arrow-down';

  constructor(public expandable: FivExpandable) {

  }

  ngOnInit() {
  }

}
