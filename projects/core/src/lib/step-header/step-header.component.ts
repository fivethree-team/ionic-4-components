import { Component, OnInit, Input } from '@angular/core';
import { rotateAnimation } from '../animations/animations';

@Component({
  selector: 'fiv-step-header',
  templateUrl: './step-header.component.html',
  styleUrls: ['./step-header.component.scss'],
  animations: [rotateAnimation]
})
export class StepHeaderComponent implements OnInit {

  @Input() index: number;
  @Input() icon: string;
  iconState = 'normal';
  tempIcon: string;

  constructor() { }

  ngOnInit() {
  }

  changeIconAndReveal(event, icon: string) {
    if (event.fromState === 'normal') {
      this.tempIcon = this.icon;
      this.icon = icon;
      this.iconState = 'normal';
    }
  }

  complete() {
    this.iconState = 'rotate';
  }

  reset() {
    this.icon = this.tempIcon;
  }

}
