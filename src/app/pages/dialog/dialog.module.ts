import { ComponentsModule } from '@components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DialogPage } from './dialog.page';
import { FivethreeCoreModule } from '@fivethree/core';

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
    FivethreeCoreModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [DialogPage]
})
export class DialogPageModule {}
