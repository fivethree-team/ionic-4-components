import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { trigger, transition, animate, state, style } from '@angular/animations';

@Component({
  selector: 'fiv-step-header',
  templateUrl: './fiv-step-header.component.html',
  styleUrls: ['./fiv-step-header.component.scss'],
  animations: [
    trigger('rotateAnim', [
      transition('normal => rotate', [
        animate('125ms ease-out')
      ]),
      transition('rotate => normal', [
        animate('125ms ease-in')
      ]),
      state('rotate', style({ opacity: '0', transform: 'translate(-50%, -50%) rotateZ(45deg)' })),
      state('normal', style({ opacity: '1', transform: 'translate(-50%, -50%) rotateZ(0deg)' }))
    ]),
  ]
})
export class FivStepHeaderComponent implements OnInit, AfterContentInit {


  @Input() index: number;
  @Input() icon: string;
  iconState = 'normal';
  tempIcon: string;


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
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
    this.icon = this.tempIcon || 'md-add';
  }



}
