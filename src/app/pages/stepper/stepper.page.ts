import { FivStepper } from './../../../../projects/core/src/lib/stepper/stepper.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.page.html',
  styleUrls: ['./stepper.page.scss'],
})
export class StepperPage implements OnInit {

  @ViewChild('stepperV') stepperV: FivStepper;

  constructor() { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    // this.stepperV.openLast();

    // timer(1000).subscribe(() => this.stepperV.closeLast());
  }

}
