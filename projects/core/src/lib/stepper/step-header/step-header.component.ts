import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  state,
  style
} from '@angular/animations';

@Component({
  selector: 'fiv-step-header',
  templateUrl: './step-header.component.html',
  styleUrls: ['./step-header.component.scss'],
  animations: [
    trigger('rotateAnim', [
      transition('normal => rotate', [animate('125ms ease-out')]),
      transition('rotate => normal', [animate('125ms ease-in')]),
      state(
        'rotate',
        style({
          opacity: '0',
          transform: 'translate(-50%, -50%) rotateZ(45deg)'
        })
      ),
      state(
        'normal',
        style({
          opacity: '1',
          transform: 'translate(-50%, -50%) rotateZ(0deg)'
        })
      )
    ])
  ]
})
export class FivStepHeader implements OnInit {
  @Input() index: number;
  @Input() icon: string;
  @Input() iconCompleted = 'checkmark';

  iconState = 'normal';
  tempIcon: string;

  constructor() {}

  ngOnInit() {}

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
