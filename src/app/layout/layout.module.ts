import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayoutPage } from './layout.page';
import { LayoutModule } from 'dist/layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    LayoutModule
  ],
  declarations: [LayoutPage]
})
export class LayoutPageModule {}
