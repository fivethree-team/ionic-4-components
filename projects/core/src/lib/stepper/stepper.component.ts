import { FivStep } from './step/step.component';
import {
  EventEmitter,
  Component,
  OnInit,
  ViewChildren,
  ContentChildren,
  QueryList,
  Input,
  ViewChild,
  Output
} from '@angular/core';
import { FivStepContent } from './step-content/step-content.component';
import { FivStepperHorizontal } from './stepper-horizontal/stepper-horizontal.component';

@Component({
  selector: 'fiv-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class FivStepper implements OnInit {
  @ContentChildren(FivStep) contents: QueryList<FivStep>;
  @ViewChildren(FivStepContent) steps: QueryList<FivStepContent>;
  @ViewChild(FivStepperHorizontal, { static: false })
  horizontal: FivStepperHorizontal;
  @Input() mode: 'horizontal' | 'vertical' = 'vertical';
  @Output() fivClick = new EventEmitter<number>();
  @Output() fivClose = new EventEmitter<{ index: number; param: any }>();

  currentIndex = 0;

  param: any;

  constructor() {}

  ngOnInit() {}

  open(index: number) {
    if (this.mode === 'horizontal') {
      this.currentIndex = index;
      this.horizontal.open(index);
    } else {
      if (this.steps.toArray()[index]) {
        if (this.steps.toArray()[index].isOpen) {
          this.close(index);
        } else {
          this.currentIndex = index;
          this.steps.toArray()[index].open();
        }
      } else {
      }
    }
  }

  openFirst() {
    this.open(0);
  }

  openLast() {
    this.open(this.steps.toArray().length - 1);
  }

  close(index: number, param?: any) {
    this.param = param;
    if (this.mode === 'horizontal') {
      this.currentIndex = 0;
      this.horizontal.close();
    } else {
      this.currentIndex = -1;
      this.steps.toArray()[index].close();
    }
  }

  closeFirst() {
    this.close(0);
  }

  closeLast() {
    this.close(this.steps.toArray().length - 1);
  }

  select(index: number) {
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
    const next =
      this.currentIndex < this.steps.length ? this.currentIndex + 1 : -1;
    this.select(next);
  }

  previous() {
    const next = this.currentIndex > 0 ? this.currentIndex + -1 : -1;
    this.select(next);
  }

  completeStep(index: number) {
    if (this.mode === 'horizontal') {
      // not yet impletented
    } else {
      this.steps.toArray()[index].complete();
    }
  }

  completeAndCloseStep(index: number) {
    if (this.mode === 'horizontal') {
      // not yet impletented
    } else {
      this.steps.toArray()[index].completeAndClose();
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
