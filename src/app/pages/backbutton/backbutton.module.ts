import { ComponentsModule } from '@components/components.module';
import { FivethreeCoreModule } from '@fivethree/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BackButtonPage } from './backbutton.page';

const routes: Routes = [
  {
    path: '',
    component: BackButtonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivethreeCoreModule,
    ComponentsModule
  ],
  declarations: [BackButtonPage]
})
export class BackButtonPageModule {}
