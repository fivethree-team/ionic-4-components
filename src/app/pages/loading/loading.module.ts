import { ComponentsModule } from './../../components/components.module';
import { FivLoadingProgressBarModule, FivLoadingFabModule, FivLoadingSpinnerModule, FivCenterModule } from '@fivethree/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoadingPage } from './loading.page';

const routes: Routes = [
  {
    path: '',
    component: LoadingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    FivLoadingProgressBarModule,
    FivLoadingFabModule,
    FivLoadingSpinnerModule,
    FivCenterModule
  ],
  declarations: [LoadingPage]
})
export class LoadingPageModule { }
