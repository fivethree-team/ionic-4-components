import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IconPage } from './icon.page';
import { FivethreeCoreModule } from '@fivethree/core';
import { ComponentsModule } from '@components/components.module';

const routes: Routes = [
  {
    path: '',
    component: IconPage
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
  declarations: [IconPage]
})
export class IconPageModule {}
