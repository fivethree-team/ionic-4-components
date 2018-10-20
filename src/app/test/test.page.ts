import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
  animations: [
    trigger('dialogAnim', [
      state('bottom', style({ bottom: 0 })),
      state('top', style({ top: 0 })),
      state('center', style({
        top: '50%',
        transform: 'translateY(-50%)'
      })),
      state('bottom-slide', style({ bottom: 0, transform: 'translateY(100%)' })),
      state('top-slide', style({ top: 0, transform: 'translateY(-100%)' })),
      state('center-slide', style(
        { bottom: 0, transform: 'translateY(100%)' }
      )),
      state('bottom-fade', style({ bottom: 0, opacity: 0 })),
      state('top-fade', style({ top: 0, opacity: 0 })),
      state('center-fade', style({
        top: '50%',
        transform: 'translateY(-50%)',
        opacity: 0
      })),
      transition('* => *', [
        animate('200ms ease-in')
      ])
    ])
  ]
})
export class TestPage implements OnInit {

  verticalAlign: 'bottom' | 'center' | 'top' = 'center';
  animation: 'slide' | 'fade' = 'fade';
  visible: false;
  backdrop: true;

  constructor() { }

  ngOnInit() {
  }

}
