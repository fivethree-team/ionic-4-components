import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ButtonsPage } from './overflow-buttons.page';
import { FivOverflowButtonsModule } from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: ButtonsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivOverflowButtonsModule,
    ComponentsModule
  ],
  declarations: [ButtonsPage]
})
export class ButtonsPageModule {}
