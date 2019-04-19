import { FivRipple } from './../ripple/ripple.component';
import { FivExpandableModule } from './../expandable/expandable.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FivStepper } from './stepper.component';
import { FivStepHeader } from './../step-header/step-header.component';
import { FivStepperHorizontal } from './../stepper-horizontal/stepper-horizontal.component';
import { FivStepContent } from './../step-content/step-content.component';
import { FivStep } from '../step/step.component';
import { FivExpandable } from '../expandable/expandable.component';
import { FivRippleModule } from '../ripple/ripple.module';

@NgModule({
    declarations: [
        FivStepper,
        FivStepContent,
        FivStepperHorizontal,
        FivStep,
        FivStepHeader
    ],
    imports: [
        CommonModule,
        IonicModule,
        FivExpandableModule,
        FivRippleModule
    ],
    exports: [
        FivStepper,
        FivStepContent,
        FivStepperHorizontal,
        FivStep,
        FivStepHeader,
        // Re-export `FivExpandableModule` and `FivRippleModule`
        FivExpandableModule,
        FivRippleModule
    ],
})
export class FivStepperModule { }
