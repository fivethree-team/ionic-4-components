import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DialogPage } from './dialog.page';
import { DialogModule } from 'dist/dialog';
import { LoadingModule } from 'dist/ionic-material-loading';

const routes: Routes = [
  {
    path: '',
    component: DialogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialogModule,
    LoadingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DialogPage]
})
export class DialogPageModule {}
