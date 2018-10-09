import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StepperComponent } from './stepper/stepper.component';
import { StepComponent } from './step/step.component';
import { StepHeaderComponent } from './step-header/step-header.component';
import { StepContentComponent } from './step-content/step-content.component';
import { ExpandableComponent } from './expandable/expandable.component';
import { RouterItemComponent } from './router-item/router-item.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    ExpandableComponent,
    StepperComponent,
    StepComponent,
    StepHeaderComponent,
    StepContentComponent,
    RouterItemComponent,
  ],
  exports: [
    ExpandableComponent,
    StepperComponent,
    StepComponent,
    StepHeaderComponent,
    StepContentComponent,
    RouterItemComponent,
  ]
})
export class FivethreeCoreModule { }
