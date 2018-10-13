import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewportPage } from './viewport.page';
import { FivethreeCoreModule } from 'core';

const routes: Routes = [
  {
    path: '',
    component: ViewportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivethreeCoreModule
  ],
  declarations: [ViewportPage]
})
export class ViewportPageModule {}
