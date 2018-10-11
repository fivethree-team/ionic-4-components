import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppBarPage } from './app-bar.page';
import { FivethreeCoreModule } from 'core';

const routes: Routes = [
  {
    path: '',
    component: AppBarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FivethreeCoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppBarPage]
})
export class AppBarPageModule {}
