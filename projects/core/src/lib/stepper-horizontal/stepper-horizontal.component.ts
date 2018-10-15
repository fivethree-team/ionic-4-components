import { Component, OnInit, QueryList, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { StepComponent } from '../step/step.component';
import { Slides } from '@ionic/angular';
import { rotateAnimation } from '../animations/animations';

@Component({
  selector: 'fiv-stepper-horizontal',
  templateUrl: './stepper-horizontal.component.html',
  styleUrls: ['./stepper-horizontal.component.scss'],
  animations: [rotateAnimation]

})
export class StepperHorizontalComponent implements OnInit {

  @Input() contents: QueryList<StepComponent>;
  @ViewChild(Slides) slides: Slides;
  @Output() fivSelect = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.slides.stopAutoplay();
    this.slides.lockSwipes(true);
  }

  close(): any {
    this.slides.slideTo(0);
  }
  open(index: number): any {
    console.log('open slide', index);
    this.slides.lockSwipes(false);
    this.slides.slideTo(index);
    this.slides.lockSwipes(true);

  }

}
