import { Component, OnInit, Input } from '@angular/core';
import { ExpandableComponent } from '../expandable/expandable.component';

@Component({
  selector: 'fiv-expandable-indicator',
  templateUrl: './expandable-indicator.component.html',
  styleUrls: ['./expandable-indicator.component.scss']
})
export class ExpandableIndicatorComponent implements OnInit {

  @Input() icon = 'ios-arrow-down';

  constructor(public expandable: ExpandableComponent) {

  }

  ngOnInit() {
  }

}
