import { StepComponent } from './../step/step.component';
import { EventEmitter, Component, OnInit, ViewChildren, ContentChildren, QueryList, Input, ViewChild, Output } from '@angular/core';
import { StepContentComponent } from '../step-content/step-content.component';
import { StepperHorizontalComponent } from '../stepper-horizontal/stepper-horizontal.component';

@Component({
  selector: 'fiv-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @ContentChildren(StepComponent) contents: QueryList<StepComponent>;
  @ViewChildren(StepContentComponent) steps: QueryList<StepContentComponent>;
  @ViewChild(StepperHorizontalComponent) horizontal: StepperHorizontalComponent;
  @Input() mode: 'horizontal' | 'vertical' = 'vertical';
  @Output() fivClick = new EventEmitter<number>();
  @Output() fivClose = new EventEmitter<{index: number, param: any}>();

  currentIndex = 0;

  param: any;

  constructor() { }

  ngOnInit() {
  }

  open(index: number) {
    if (this.mode === 'horizontal') {
      this.currentIndex = index;
      console.log('+#+#+');
      this.horizontal.open(index);
    } else {
      console.log('###open', this.steps, this.steps.toArray(), index, this.steps.toArray()[index]);
      if (this.steps.toArray()[index]) {
        if (this.steps.toArray()[index].isOpen) {
          console.log('is already open', this.steps.toArray()[index].isOpen);
          this.close(index);
        } else {
          console.log('is closed', this.steps.toArray()[index].isOpen);
          this.currentIndex = index;
          this.steps.toArray()[index].open();
        }
      } else {
        console.log('####', index, this.steps, this.steps.toArray());
      }

    }
  }

  close(index: number,param?:any) {
    this.param = param;
    if (this.mode === 'horizontal') {
      this.currentIndex = 0;
      this.horizontal.close();
    } else {
      this.currentIndex = - 1;
      this.steps.toArray()[index].close();
    }

  }

  select(index: number) {
    console.log('select', index);
    if (index >= 0 && index < this.contents.length) {
      if (this.mode === 'vertical') {
        this.closeAll();

      }
      this.open(index);
    }
  }

  closeAll() {
    if (this.mode === 'horizontal') {
      this.currentIndex = 0;
      this.horizontal.close();
    } else {
      this.steps.forEach(step => {
        step.close();
      });
    }
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
    if (this.mode === 'horizontal') {
      // not yet impletented

    } else {
      this.steps.toArray()[index].complete();

    }
  }

  reset(index: number) {
    if (this.mode === 'horizontal') {
      // not yet impletented
    } else {
      this.steps.toArray()[index].reset();
    }
  }

}
