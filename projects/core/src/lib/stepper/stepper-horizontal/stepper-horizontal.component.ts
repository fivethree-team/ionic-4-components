import {
  Component,
  OnInit,
  QueryList,
  Input,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';
import { FivStep } from '../step/step.component';
import { IonSlides } from '@ionic/angular';
import {
  trigger,
  transition,
  animate,
  state,
  style
} from '@angular/animations';

@Component({
  selector: 'fiv-stepper-horizontal',
  templateUrl: './stepper-horizontal.component.html',
  styleUrls: ['./stepper-horizontal.component.scss'],
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
export class FivStepperHorizontal implements OnInit {
  @Input() contents: QueryList<FivStep>;
  @ViewChild('slides', { static: true }) slides: IonSlides;
  @Output() fivSelect = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  close(): any {
    this.slides.slideTo(0);
  }
  open(index: number): any {
    this.slides.lockSwipes(false);
    this.slides.slideTo(index);
    this.slides.lockSwipes(true);
  }
}
