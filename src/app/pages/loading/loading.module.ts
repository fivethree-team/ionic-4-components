import { ComponentsModule } from './../../components/components.module';
import { FivethreeCoreModule } from '@fivethree/core';
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
    FivethreeCoreModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [LoadingPage]
})
export class LoadingPageModule {}
