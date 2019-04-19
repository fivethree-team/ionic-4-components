import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StepperPage } from './stepper.page';
import { FivStepperModule } from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: StepperPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    FivStepperModule
  ],
  declarations: [StepperPage]
})
export class StepperPageModule {}
