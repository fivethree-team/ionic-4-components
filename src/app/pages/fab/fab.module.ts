import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FabPage } from './fab.page';
import { FivFabModule, FivIconModule } from '@fivethree/core';
import { ComponentsModule } from '@components/components.module';

const routes: Routes = [
  {
    path: '',
    component: FabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivFabModule,
    ComponentsModule,
    FivIconModule
  ],
  declarations: [FabPage]
})
export class FabPageModule {}
