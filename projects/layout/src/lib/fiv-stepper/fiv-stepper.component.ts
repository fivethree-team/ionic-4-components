import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, ViewChildren } from '@angular/core';
import { FivStepComponent } from './fiv-step/fiv-step.component';
import { FivStepContentComponent } from './fiv-step-content/fiv-step-content.component';

@Component({
  selector: 'fiv-stepper',
  templateUrl: './fiv-stepper.component.html',
  styleUrls: ['./fiv-stepper.component.scss']
})
export class FivStepperComponent implements OnInit, AfterContentInit {

  @ContentChildren(FivStepComponent) contents: QueryList<FivStepComponent>;
  @ViewChildren(FivStepContentComponent) steps: QueryList<FivStepContentComponent>;
  currentIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {

  }

  open(index: number) {
    this.currentIndex = index;
    this.steps.toArray()[index].open();
  }

  close(index: number) {
    this.currentIndex = -1;
    this.steps.toArray()[index].close();
  }

  select(index: number) {
    if (index >= 0 && index < this.steps.length) {
      this.closeAll();
      this.open(index);
    } 
  }

  closeAll() {
    this.steps.forEach(step => {
      step.close();
    })
  }

  next() {
    const next = this.currentIndex < this.steps.length ? this.currentIndex + 1 : -1;
    console.log('next index', next);
    this.select(next);
  }

  previous() {
    const next = this.currentIndex > 0 ? this.currentIndex + -1 : -1;
    console.log('next index', next);
    this.select(next);
  }

  completeStep(index: number) {
    this.steps.toArray()[index].complete();
  }

  reset(index: number){
    this.steps.toArray()[index].reset();
  }



}
