import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FivStepper } from './stepper.component';
import { FivStepHeader } from './step-header/step-header.component';
import { FivStepperHorizontal } from './stepper-horizontal/stepper-horizontal.component';
import { FivStepContent } from './step-content/step-content.component';
import { FivStep } from './step/step.component';
import { FivExpandableModule } from './../expandable/expandable.module';

@NgModule({
  declarations: [
    FivStepper,
    FivStepContent,
    FivStepperHorizontal,
    FivStep,
    FivStepHeader
  ],
  imports: [CommonModule, IonicModule, FivExpandableModule],
  exports: [
    FivStepper,
    FivStepContent,
    FivStepperHorizontal,
    FivStep,
    FivStepHeader
  ]
})
export class FivStepperModule {}
